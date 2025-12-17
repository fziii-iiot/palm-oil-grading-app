"""
Hybrid app.py
- Auto-detects whether TFLite model is object-detection or classification
- Preprocesses input based on interpreter input spec (dtype & shape)
- Handles multiple detection output formats (packed N x 6 or the classic boxes/classes/scores)
- Saves to DB (uses save_grading_history from your models module)
"""

import os
import sys
import base64
import io
import time
import json
import traceback
from typing import Any, Dict, List, Optional, Tuple

import numpy as np
from PIL import Image
from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
from dotenv import load_dotenv

# Force unbuffered output (for clearer logs)
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
sys.stdout.reconfigure(line_buffering=True)
sys.stderr.reconfigure(line_buffering=True)

load_dotenv()

# Legacy auth + DB helpers (must exist in your project)
from db import init_database, verify_user, create_user
from models import init_db, get_db_session, save_grading_history, get_user_grading_history, get_all_grading_history

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'change-me-in-prod')
CORS(app, supports_credentials=True)

# Model paths
DETECTION_MODEL_PATH = os.getenv('DETECTION_MODEL_PATH', './models/best_float32.tflite')
CLASSIFICATION_MODEL_PATH = os.getenv('CLASSIFICATION_MODEL_PATH', './models/classifier_float32.tflite')
PORT = int(os.getenv('PORT', '5000'))

# Labels - matching config.yaml reference (3 classes for classification model)
CLASS_LABELS = ['unripe', 'ripe', 'over_ripe']  # classification (order matches model output)
DETECTION_LABEL = 'FruitBunch'  # detection single label
NOT_FRUIT_BUNCH_LABEL = 'NotFruitBunch'  # low confidence detection
NUM_CLASSIFICATION = len(CLASS_LABELS)

# Confidence threshold for FruitBunch detection (adjust as needed)
CONFIDENCE_THRESHOLD = 0.5  # Objects below this are classified as NotFruitBunch

# Interpreters - one for detection, one for classification
detection_interpreter: Optional[tf.lite.Interpreter] = None
classification_interpreter: Optional[tf.lite.Interpreter] = None
detection_input_spec: Dict[str, Any] = {}
classification_input_spec: Dict[str, Any] = {}

# -------------------------
# Model loading & inspect
# -------------------------
def load_models() -> bool:
    """Load both detection and classification models"""
    global detection_interpreter, classification_interpreter, detection_input_spec, classification_input_spec
    
    success = True
    
    # Load detection model
    try:
        print(f"🔄 Loading detection model from: {DETECTION_MODEL_PATH}", flush=True)
        detection_interpreter = tf.lite.Interpreter(model_path=DETECTION_MODEL_PATH)
        detection_interpreter.allocate_tensors()

        input_details = detection_interpreter.get_input_details()
        output_details = detection_interpreter.get_output_details()
        detection_input_spec = {
            'shape': input_details[0]['shape'],
            'dtype': input_details[0]['dtype'],
            'index': input_details[0]['index'],
        }

        print("✅ Detection model loaded successfully!", flush=True)
        print(f"   Input shape: {detection_input_spec['shape']}", flush=True)
        print(f"   Output details:", flush=True)
        for od in output_details[:2]:
            print(f"    - {od}", flush=True)
        
        # Warmup detection model
        warmup_model(detection_interpreter, detection_input_spec, "detection")
    except Exception as e:
        print(f"❌ Error loading detection model: {e}", flush=True)
        traceback.print_exc()
        success = False
    
    # Load classification model
    try:
        print(f"🔄 Loading classification model from: {CLASSIFICATION_MODEL_PATH}", flush=True)
        classification_interpreter = tf.lite.Interpreter(model_path=CLASSIFICATION_MODEL_PATH)
        classification_interpreter.allocate_tensors()

        input_details = classification_interpreter.get_input_details()
        output_details = classification_interpreter.get_output_details()
        classification_input_spec = {
            'shape': input_details[0]['shape'],
            'dtype': input_details[0]['dtype'],
            'index': input_details[0]['index'],
        }

        print("✅ Classification model loaded successfully!", flush=True)
        print(f"   Input shape: {classification_input_spec['shape']}", flush=True)
        print(f"   Output details:", flush=True)
        for od in output_details[:2]:
            print(f"    - {od}", flush=True)
        
        # Warmup classification model
        warmup_model(classification_interpreter, classification_input_spec, "classification")
    except Exception as e:
        print(f"❌ Error loading classification model: {e}", flush=True)
        traceback.print_exc()
        success = False
    
    return success

def warmup_model(interpreter: tf.lite.Interpreter, input_spec: Dict[str, Any], model_name: str):
    """Warmup a specific model"""
    try:
        print(f"🔥 Warming up {model_name} model...", flush=True)
        shape = tuple(input_spec['shape'])
        dtype = input_spec['dtype']
        if np.issubdtype(np.dtype(dtype), np.floating):
            dummy = np.random.rand(*shape).astype(np.float32)
        else:
            # uint8 etc
            dummy = np.random.randint(0, 255, size=shape, dtype=np.dtype(dtype))
        interpreter.set_tensor(input_spec['index'], dummy)
        interpreter.invoke()
        print(f"✅ {model_name.capitalize()} model warmup complete (shape={shape}, dtype={dtype})", flush=True)
    except Exception as e:
        print(f"⚠️ {model_name.capitalize()} warmup failed: {e}", flush=True)

# -------------------------
# Preprocessing
# -------------------------
def preprocess_image(image_data_b64: str, interpreter: tf.lite.Interpreter, input_spec: Dict[str, Any], is_detection: bool = False) -> np.ndarray:
    """
    Decode base64 and prepare tensor based on interpreter input spec.
    For detection model, crops to 1:1 aspect ratio (square) before resizing.
    Returns an array matching interpreter input shape & dtype.
    """
    if interpreter is None:
        raise RuntimeError("Interpreter not initialized")

    # decode base64
    if "base64," in image_data_b64:
        image_data_b64 = image_data_b64.split("base64,")[1]
    image_bytes = base64.b64decode(image_data_b64)
    image = Image.open(io.BytesIO(image_bytes))

    # Force RGB
    if image.mode != "RGB":
        image = image.convert("RGB")

    # For detection model, crop to 1:1 aspect ratio (square) first
    if is_detection:
        width, height = image.size
        if width != height:
            # Crop to center square
            size = min(width, height)
            left = (width - size) // 2
            top = (height - size) // 2
            right = left + size
            bottom = top + size
            image = image.crop((left, top, right, bottom))
            print(f"[preprocess] Cropped to square: {width}x{height} -> {size}x{size}", flush=True)

    in_shape = input_spec['shape']  # e.g. [1, H, W, 3]
    in_dtype = input_spec['dtype']

    # Determine target height/width
    # some models may have -1 in shape; handle defensively
    try:
        target_h = int(in_shape[1])
        target_w = int(in_shape[2])
    except Exception:
        # fallback to 256x256 if unknown
        target_h, target_w = (256, 256)

    image = image.resize((target_w, target_h), Image.LANCZOS)
    arr = np.array(image)

    # Normalize based on model type
    # Detection model: normalize to [0,1] (matches pipeline.py detector)
    # Classification model: keep raw [0-255] (matches pipeline.py classifier)
    in_dtype = input_spec['dtype']
    if is_detection:
        # Detection model needs normalization
        arr = arr.astype(np.float32) / 255.0
    else:
        # Classification model uses raw values
        arr = arr.astype(np.dtype(in_dtype))

    # Add batch if missing
    if arr.ndim == 3:
        arr = np.expand_dims(arr, axis=0)

    # Final shape check
    expected = tuple(in_shape)
    if arr.shape != expected:
        # attempt safe reshape for batch mismatch
        try:
            arr = arr.reshape(expected)
        except Exception as e:
            raise ValueError(f"Preprocessed image shape {arr.shape} cannot be reshaped to expected {expected}: {e}")

    return arr

# -------------------------
# Output parsing helpers
# -------------------------
def parse_detection_from_outputs(output_data: List[np.ndarray]) -> Dict[str, Any]:
    """
    Parse YOLOv8 detection model output.
    Expected format: [1, 5, 8400] where 5 = [x_center, y_center, width, height, confidence]
    Returns list of all detections with boxes and confidence scores.
    """
    detections = []
    
    # YOLOv8 format: output shape is [1, 5, 8400] or [1, 5+num_classes, 8400]
    if len(output_data) > 0:
        output = output_data[0]
        
        # Handle YOLOv8 format: [1, 5, 8400]
        if output.ndim == 3 and output.shape[0] == 1 and output.shape[2] > 1000:
            # Transpose to [8400, 5]
            output = output[0].T  # Now shape is [8400, 5] or [8400, 5+classes]
            
            # For single-class detection model (5 values per detection)
            if output.shape[1] == 5:
                # Columns: [x_center, y_center, width, height, confidence]
                for detection in output:
                    x_center, y_center, width, height, confidence = detection
                    confidence = float(confidence)
                    
                    # Skip low confidence detections
                    if confidence < CONFIDENCE_THRESHOLD:  # Detection confidence threshold
                        continue
                    
                    # Convert from center format to corner format (normalized 0-1)
                    xmin = float(x_center - width / 2)
                    ymin = float(y_center - height / 2)
                    xmax = float(x_center + width / 2)
                    ymax = float(y_center + height / 2)
                    
                    # Clip to valid range [0, 1]
                    xmin = max(0.0, min(1.0, xmin))
                    ymin = max(0.0, min(1.0, ymin))
                    xmax = max(0.0, min(1.0, xmax))
                    ymax = max(0.0, min(1.0, ymax))
                    
                    detections.append({
                        'class': DETECTION_LABEL,
                        'confidence': confidence,
                        'box': [ymin, xmin, ymax, xmax]  # [ymin, xmin, ymax, xmax]
                    })
            
            # For multi-class detection (4 + num_classes columns)
            elif output.shape[1] > 5:
                for detection in output:
                    x_center, y_center, width, height = detection[:4]
                    class_probs = detection[4:]
                    
                    # Get best class and confidence
                    class_id = int(np.argmax(class_probs))
                    confidence = float(class_probs[class_id])
                    
                    # Skip low confidence detections
                    if confidence < CONFIDENCE_THRESHOLD:
                        continue
                    
                    # Convert from center format to corner format
                    xmin = float(x_center - width / 2)
                    ymin = float(y_center - height / 2)
                    xmax = float(x_center + width / 2)
                    ymax = float(y_center + height / 2)
                    
                    # Clip to valid range
                    xmin = max(0.0, min(1.0, xmin))
                    ymin = max(0.0, min(1.0, ymin))
                    xmax = max(0.0, min(1.0, xmax))
                    ymax = max(0.0, min(1.0, ymax))
                    
                    detections.append({
                        'class': DETECTION_LABEL if class_id == 0 else f"Class_{class_id}",
                        'confidence': confidence,
                        'box': [ymin, xmin, ymax, xmax]
                    })
    
    # Sort detections by confidence desc
    detections.sort(key=lambda x: x['confidence'], reverse=True)
    
    # Apply Non-Maximum Suppression (NMS) to remove overlapping boxes
    detections = apply_nms(detections, iou_threshold=0.45)
    
    best = detections[0] if detections else None
    print(f"[Detection] Found {len(detections)} detections after NMS", flush=True)
    return {
        'detections': detections,
        'best_detection': best
    }

def apply_nms(detections: List[Dict], iou_threshold: float = 0.45) -> List[Dict]:
    """
    Apply Non-Maximum Suppression to remove overlapping bounding boxes.
    """
    if len(detections) == 0:
        return []
    
    # Sort by confidence
    detections = sorted(detections, key=lambda x: x['confidence'], reverse=True)
    
    keep = []
    while len(detections) > 0:
        # Keep the detection with highest confidence
        best = detections.pop(0)
        keep.append(best)
        
        # Remove detections that overlap significantly with the best detection
        detections = [d for d in detections if calculate_iou(best['box'], d['box']) < iou_threshold]
    
    return keep

def calculate_iou(box1: List[float], box2: List[float]) -> float:
    """
    Calculate Intersection over Union (IoU) between two boxes.
    Boxes are in format [ymin, xmin, ymax, xmax].
    """
    ymin1, xmin1, ymax1, xmax1 = box1
    ymin2, xmin2, ymax2, xmax2 = box2
    
    # Calculate intersection area
    inter_ymin = max(ymin1, ymin2)
    inter_xmin = max(xmin1, xmin2)
    inter_ymax = min(ymax1, ymax2)
    inter_xmax = min(xmax1, xmax2)
    
    inter_width = max(0, inter_xmax - inter_xmin)
    inter_height = max(0, inter_ymax - inter_ymin)
    inter_area = inter_width * inter_height
    
    # Calculate union area
    box1_area = (xmax1 - xmin1) * (ymax1 - ymin1)
    box2_area = (xmax2 - xmin2) * (ymax2 - ymin2)
    union_area = box1_area + box2_area - inter_area
    
    # Calculate IoU
    if union_area == 0:
        return 0.0
    return inter_area / union_area

def parse_classification_from_output(output_data: List[np.ndarray]) -> Dict[str, Any]:
    """
    Expect output_data[0] to contain logits/probs shape [1, num_classes]
    Return predictions list, topClass, confidence, label
    For palm oil detection: use confidence threshold to determine FruitBunch vs NotFruitBunch
    """
    arr = output_data[0]
    # handle shape variants
    if arr.ndim == 3 and arr.shape[0] == 1:
        arr = arr.reshape(arr.shape[0], -1)
    if arr.ndim == 2 and arr.shape[0] == 1:
        preds = arr[0]
    elif arr.ndim == 1:
        preds = arr
    else:
        preds = arr.flatten()

    # convert to probabilities if logits (softmax)
    preds = preds.astype(np.float32)
    # if sums not ~1, softmax
    s = preds.sum()
    if not (0.99 < s < 1.01):
        try:
            ex = np.exp(preds - np.max(preds))
            probs = ex / ex.sum()
        except Exception:
            probs = preds / (preds.sum() + 1e-8)
    else:
        probs = preds

    probs_list = probs.tolist()
    # pad or trim to expected class count
    if len(probs_list) < NUM_CLASSIFICATION:
        probs_list = probs_list + [0.0] * (NUM_CLASSIFICATION - len(probs_list))
    elif len(probs_list) > NUM_CLASSIFICATION:
        probs_list = probs_list[:NUM_CLASSIFICATION]

    top_idx = int(np.argmax(probs_list))
    top_conf = float(probs_list[top_idx])
    
    # For ripeness classification, return the actual class label
    label = CLASS_LABELS[top_idx] if top_idx < len(CLASS_LABELS) else 'Unknown'
    
    print(f"[parse_classification] Predictions: {[f'{CLASS_LABELS[i]}={probs_list[i]:.3f}' for i in range(len(probs_list))]}", flush=True)
    print(f"[parse_classification] top_class={label} (index={top_idx}), confidence={top_conf:.3f}", flush=True)
    
    return {
        'predictions': probs_list,
        'topClass': top_idx,
        'confidence': top_conf,
        'label': label
    }

# -------------------------
# Main inference runner
# -------------------------
def run_inference(image_data_b64: str) -> Dict[str, Any]:
    """
    Run both detection and classification models on the image.
    Detection finds all fruit bunches with bounding boxes.
    For each detected bunch, crop it and run classification to determine its ripeness.
    Returns combined results with bounding boxes and individual classifications per bunch.
    """
    start = time.time()
    
    try:
        # Decode the full image
        import base64
        from PIL import Image
        import io
        
        img_bytes = base64.b64decode(image_data_b64.split(',')[1] if ',' in image_data_b64 else image_data_b64)
        original_image = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        orig_width, orig_height = original_image.size
        print(f"[DEBUG] Original image size: {orig_width}x{orig_height}", flush=True)
        
        # Crop to center square (same as detection preprocessing)
        # This ensures bounding box coordinates match the image we'll crop from
        if orig_width != orig_height:
            size = min(orig_width, orig_height)
            left = (orig_width - size) // 2
            top = (orig_height - size) // 2
            right = left + size
            bottom = top + size
            square_image = original_image.crop((left, top, right, bottom))
            print(f"[DEBUG] Cropped to square: {orig_width}x{orig_height} -> {size}x{size}", flush=True)
        else:
            square_image = original_image
        
        img_width, img_height = square_image.size  # Should be equal (square)
        
    except Exception as e:
        print(f"❌ Error decoding image: {e}", flush=True)
        traceback.print_exc()
        return {
            'bunches': [],
            'total_bunches': 0,
            'classification_summary': {},
            'dominant_classification': None,
            'has_bunches': False,
            'label': 'Error decoding image',
            'inferenceTime': int((time.time() - start) * 1000),
            'predictions': [0.0] * NUM_CLASSIFICATION,
            'topClass': 0,
            'confidence': 0.0
        }
    
    # Step 1: Run detection model to find all bunches
    print("🔍 Running detection model...", flush=True)
    
    # Convert square image to base64 for preprocessing
    buffered = io.BytesIO()
    square_image.save(buffered, format="JPEG")
    square_b64 = base64.b64encode(buffered.getvalue()).decode('utf-8')
    square_b64 = f"data:image/jpeg;base64,{square_b64}"
    
    img_tensor_det = preprocess_image(square_b64, detection_interpreter, detection_input_spec, is_detection=True)  # Detection needs normalization
    
    detection_interpreter.set_tensor(detection_input_spec['index'], img_tensor_det)
    detection_interpreter.invoke()
    
    det_outputs = [detection_interpreter.get_tensor(od['index']) 
                   for od in detection_interpreter.get_output_details()]
    
    parsed_detection = parse_detection_from_outputs(det_outputs)
    all_detections = parsed_detection['detections']
    
    # Use all detections from NMS (they're already filtered at 0.25 threshold in parsing)
    # Don't apply CONFIDENCE_THRESHOLD here - that's for classification, not detection
    valid_bunches = all_detections
    total_bunches = len(valid_bunches)
    
    print(f"✅ Detection: Found {total_bunches} fruit bunch(es)", flush=True)
    if total_bunches > 0:
        print(f"[DEBUG] First detection: confidence={valid_bunches[0]['confidence']:.3f}, box={valid_bunches[0]['box']}", flush=True)
    
    # Step 2: Classify each detected bunch individually
    classification_summary = {}
    
    if total_bunches > 0:
        print("🔍 Running classification on each bunch...", flush=True)
        
        for idx, bunch in enumerate(valid_bunches):
            try:
                # Extract bounding box coordinates [ymin, xmin, ymax, xmax] (normalized 0-1)
                ymin, xmin, ymax, xmax = bunch['box']
                
                # Convert to pixel coordinates with padding
                padding = 0.05
                x1 = max(0, int((xmin - padding) * img_width))
                y1 = max(0, int((ymin - padding) * img_height))
                x2 = min(img_width, int((xmax + padding) * img_width))
                y2 = min(img_height, int((ymax + padding) * img_height))
                
                print(f"[DEBUG] Bunch {idx+1} crop coords: x1={x1}, y1={y1}, x2={x2}, y2={y2}", flush=True)
                
                # Crop the bunch from the SQUARE image (not original)
                cropped_bunch = square_image.crop((x1, y1, x2, y2))
                crop_width, crop_height = cropped_bunch.size
                print(f"[DEBUG] Bunch {idx+1} cropped size: {crop_width}x{crop_height}", flush=True)
                
                # Convert cropped image to base64 for preprocessing
                buffered = io.BytesIO()
                cropped_bunch.save(buffered, format="JPEG")
                cropped_b64 = base64.b64encode(buffered.getvalue()).decode('utf-8')
                cropped_b64 = f"data:image/jpeg;base64,{cropped_b64}"
                
                # Preprocess and run classification on this specific bunch
                img_tensor_cls = preprocess_image(cropped_b64, classification_interpreter, classification_input_spec)
                
                # Log preprocessing info
                print(f"[DEBUG] Bunch {idx+1} tensor shape: {img_tensor_cls.shape}, dtype: {img_tensor_cls.dtype}, range: [{img_tensor_cls.min():.3f}, {img_tensor_cls.max():.3f}]", flush=True)
                
                classification_interpreter.set_tensor(classification_input_spec['index'], img_tensor_cls)
                classification_interpreter.invoke()
                
                cls_outputs = [classification_interpreter.get_tensor(od['index']) 
                              for od in classification_interpreter.get_output_details()]
                
                parsed_classification = parse_classification_from_output(cls_outputs)
                
                # Debug: Print raw predictions for all classes
                predictions_raw = parsed_classification['predictions']
                print(f"  Bunch {idx+1} raw predictions:", flush=True)
                for i, prob in enumerate(predictions_raw):
                    print(f"    {CLASS_LABELS[i]}: {prob:.4f} ({prob*100:.2f}%)", flush=True)
                
                class_label = CLASS_LABELS[parsed_classification['topClass']]
                class_confidence = parsed_classification['confidence']
                
                # Add classification to this bunch
                bunch['classification'] = class_label
                bunch['classification_confidence'] = class_confidence
                
                # Track classification summary
                if class_label not in classification_summary:
                    classification_summary[class_label] = 0
                classification_summary[class_label] += 1
                
                print(f"  Bunch {idx+1}: {class_label} ({class_confidence:.2%})", flush=True)
            
            except Exception as e:
                print(f"⚠️ Error classifying bunch {idx+1}: {e}", flush=True)
                # Add default classification
                bunch['classification'] = 'Unknown'
                bunch['classification_confidence'] = 0.0
    
    inference_time = int((time.time() - start) * 1000)
    
    # Determine dominant classification (most common)
    dominant_classification = max(classification_summary, key=classification_summary.get) if classification_summary else None
    
    # For backward compatibility with database, create predictions array
    predictions = [0.0] * NUM_CLASSIFICATION
    if dominant_classification:
        try:
            dominant_idx = CLASS_LABELS.index(dominant_classification)
            predictions[dominant_idx] = 1.0
        except ValueError:
            pass
    
    # Build result for frontend
    result = {
        'bunches': valid_bunches,  # Array of detected bunches with individual classifications
        'total_bunches': total_bunches,
        'classification_summary': classification_summary,  # Count per class
        'dominant_classification': dominant_classification,
        'has_bunches': total_bunches > 0,
        'label': dominant_classification if dominant_classification else 'No Bunches Detected',
        'inferenceTime': inference_time,
        # For backward compatibility
        'predictions': predictions,
        'topClass': CLASS_LABELS.index(dominant_classification) if dominant_classification and dominant_classification in CLASS_LABELS else 0,
        'confidence': 1.0 if dominant_classification else 0.0
    }
    
    print(f"[DEBUG] Result: total_bunches={result['total_bunches']}, bunches_len={len(result['bunches'])}", flush=True)
    
    return result

# -------------------------
# Flask endpoints
# -------------------------
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'detection_model_loaded': detection_interpreter is not None,
        'classification_model_loaded': classification_interpreter is not None,
        'detection_model_path': DETECTION_MODEL_PATH,
        'classification_model_path': CLASSIFICATION_MODEL_PATH,
        'detection_input_spec': detection_input_spec,
        'classification_input_spec': classification_input_spec
    })

@app.route('/api/model/status', methods=['GET'])
def model_status():
    if detection_interpreter is None or classification_interpreter is None:
        return jsonify({'loaded': False, 'error': 'Models not loaded'}), 503
    
    det_in = detection_interpreter.get_input_details()[0]
    det_out = detection_interpreter.get_output_details()
    cls_in = classification_interpreter.get_input_details()[0]
    cls_out = classification_interpreter.get_output_details()
    
    return jsonify({
        'loaded': True,
        'detection': {
            'inputShape': det_in['shape'].tolist(),
            'inputDtype': str(det_in['dtype']),
            'outputs': [{'shape': od['shape'].tolist(), 'dtype': str(od['dtype'])} for od in det_out]
        },
        'classification': {
            'inputShape': cls_in['shape'].tolist(),
            'inputDtype': str(cls_in['dtype']),
            'outputs': [{'shape': od['shape'].tolist(), 'dtype': str(od['dtype'])} for od in cls_out]
        }
    })

@app.route('/api/model/run', methods=['POST'])
def run_model_endpoint():
    db_session = None
    try:
        if detection_interpreter is None or classification_interpreter is None:
            return jsonify({'success': False, 'error': 'Models not loaded'}), 503

        data = request.get_json()
        if not data or 'image' not in data:
            return jsonify({'success': False, 'error': 'Missing image field'}), 400

        image_b64 = data['image']
        user_id = data.get('user_id')

        print(f"📸 Received inference request len={len(image_b64)} user_id={user_id}", flush=True)

        # Run inference with both models
        result = run_inference(image_b64)
        print(f"🎯 Detection: Found {result.get('total_bunches', 0)} bunches", flush=True)
        if result.get('dominant_classification'):
            print(f"🎯 Dominant Classification: {result.get('dominant_classification')}", flush=True)

        # save to DB (try best-effort)
        saved = False
        history_id = None
        try:
            db_session = get_db_session()
            # store base64 truncated to reduce db size (or store path if saved as file)
            to_store_image = image_b64 if len(image_b64) < 1000 else image_b64[:1000] + '...'
            grading_data = {
                'user_id': user_id,
                'image_url': to_store_image,
                'predictions': result.get('predictions', []),
                'top_class': int(result.get('topClass', 0)) if result.get('topClass') is not None else None,
                'confidence': float(result.get('confidence', 0.0)),
                'inference_time': int(result.get('inferenceTime', 0))
            }
            rec = save_grading_history(db_session, grading_data)
            if rec:
                saved = True
                history_id = rec.id
                print(f"💾 Saved history id={history_id}", flush=True)
        except Exception as e:
            print("⚠️ DB save failed:", e, flush=True)
            traceback.print_exc()
        finally:
            if db_session:
                db_session.close()

        return jsonify({
            'success': True,
            'output': result,
            'saved': saved,
            'history_id': history_id
        })

    except ValueError as e:
        print("❌ Validation error:", e, flush=True)
        return jsonify({'success': False, 'error': str(e)}), 400
    except Exception as e:
        print("❌ Server error:", e, flush=True)
        traceback.print_exc()
        return jsonify({'success': False, 'error': f'Internal error: {str(e)}'}), 500
    finally:
        if db_session:
            db_session.close()

# -------------------------
# Auth endpoints (reuse your existing db helpers)
# -------------------------
@app.route('/api/auth/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data.get('username'); password = data.get('password')
        if not username or not password:
            return jsonify({'error': 'Username and password required'}), 400
        user = verify_user(username, password)
        if user:
            return jsonify({'success': True, 'user': user, 'message': 'Login successful'}), 200
        return jsonify({'success': False, 'error': 'Invalid credentials'}), 401
    except Exception as e:
        print("Login error:", e, flush=True)
        traceback.print_exc()
        return jsonify({'error': 'Login failed', 'details': str(e)}), 500

@app.route('/api/auth/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        username = data.get('username'); password = data.get('password'); full_name = data.get('full_name')
        if not username or not password:
            return jsonify({'error': 'Username and password required'}), 400
        user_id = create_user(username, password, full_name)
        if user_id:
            return jsonify({'success': True, 'user_id': user_id, 'message': 'Registration successful'}), 201
        return jsonify({'success': False, 'error': 'Username exists'}), 409
    except Exception as e:
        print("Registration error:", e, flush=True)
        traceback.print_exc()
        return jsonify({'error': 'Registration failed', 'details': str(e)}), 500

# -------------------------
# History endpoint
# -------------------------
@app.route('/api/history', methods=['GET'])
def get_history():
    """
    Get grading history
    Query params: user_id (optional), limit (default 100)
    """
    db_session = None
    try:
        db_session = get_db_session()
        user_id = request.args.get('user_id', type=int)
        limit = request.args.get('limit', default=100, type=int)
        limit = min(limit, 500)  # cap at 500
        
        if user_id:
            records = get_user_grading_history(db_session, user_id, limit)
        else:
            records = get_all_grading_history(db_session, limit)
        
        records_data = [record.to_dict() for record in records]
        return jsonify({'success': True, 'records': records_data, 'count': len(records_data)})
    except Exception as e:
        print("Error fetching history:", e, flush=True)
        traceback.print_exc()
        return jsonify({'success': False, 'error': str(e)}), 500
    finally:
        if db_session:
            db_session.close()

# -------------------------
# Startup
# -------------------------
if __name__ == '__main__':
    print("=" * 60, flush=True)
    print("🌴 Palm Oil Grading - Python TFLite Backend", flush=True)
    print("=" * 60, flush=True)

    # Init DB (legacy + ORM)
    try:
        print("🗄️  Initializing database (psycopg2)...", flush=True)
        init_database()
        print("✅ Database initialized successfully!", flush=True)
    except Exception as e:
        print("⚠️ init_database warning:", e, flush=True)
        traceback.print_exc()

    try:
        print("🗄️  Initializing SQLAlchemy ORM tables...", flush=True)
        init_db()
        print("✅ SQLAlchemy tables created/verified!", flush=True)
    except Exception as e:
        print("⚠️ init_db warning:", e, flush=True)
        traceback.print_exc()

    # Load models
    if not load_models():
        print("❌ Failed to load models. Exiting.", flush=True)
        sys.exit(1)

    # Display endpoints
    print(f"\n🚀 Starting server on port {PORT}...", flush=True)
    print(f"📍 Health check: http://localhost:{PORT}/health", flush=True)
    print(f"📍 Model status: http://localhost:{PORT}/api/model/status", flush=True)
    print(f"📍 Inference: http://localhost:{PORT}/api/model/run", flush=True)
    print(f"📍 Login: http://localhost:{PORT}/api/auth/login", flush=True)
    print(f"📍 History: http://localhost:{PORT}/api/history", flush=True)
    print("=" * 60, flush=True)

    # Run server
    app.run(host='0.0.0.0', port=PORT, debug=False, use_reloader=False)
