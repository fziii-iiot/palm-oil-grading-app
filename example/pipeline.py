"""
Palm Oil Fruit Detection and Classification Pipeline

Integrates YOLOv8 detector and MobileNetV3 classifier TFLite models
to detect palm oil fruits and classify their ripeness in a single pass.

Usage:
    from pipeline import IntegratedPipeline
    
    pipeline = IntegratedPipeline()
    results = pipeline.process_image("path/to/image.jpg")
"""

import os
import numpy as np
import cv2
from pathlib import Path
from dataclasses import dataclass
from typing import List, Dict, Tuple, Optional
import yaml

try:
    import tensorflow as tf
except ImportError:
    raise ImportError("TensorFlow is required. Install with: pip install tensorflow")


@dataclass
class Detection:
    """Represents a single detected fruit with classification."""
    bbox: Tuple[int, int, int, int]  # x1, y1, x2, y2
    detection_confidence: float
    class_name: str
    class_confidence: float
    class_probabilities: Dict[str, float]


class TFLiteDetector:
    """YOLOv8 TFLite detector for palm oil fruit localization."""
    
    def __init__(
        self,
        model_path: str,
        conf_threshold: float = 0.25,
        iou_threshold: float = 0.45,
        input_size: int = 640
    ):
        """
        Initialize detector.
        
        Args:
            model_path: Path to TFLite model file
            conf_threshold: Confidence threshold for detections
            iou_threshold: IoU threshold for NMS
            input_size: Model input size (assumes square)
        """
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Detector model not found: {model_path}")
        
        self.model_path = model_path
        self.conf_threshold = conf_threshold
        self.iou_threshold = iou_threshold
        self.input_size = input_size
        
        # Load TFLite model
        self.interpreter = tf.lite.Interpreter(model_path=model_path)
        self.interpreter.allocate_tensors()
        
        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()
        
        self.input_dtype = self.input_details[0]['dtype']
    
    def preprocess(self, image: np.ndarray) -> Tuple[np.ndarray, Tuple[int, int]]:
        """
        Preprocess image for detector input.
        
        Args:
            image: BGR image from cv2.imread
            
        Returns:
            Preprocessed image tensor, original shape (h, w)
        """
        orig_shape = image.shape[:2]
        
        # Resize to model input size
        img_resized = cv2.resize(image, (self.input_size, self.input_size))
        
        # Convert BGR to RGB
        img_rgb = cv2.cvtColor(img_resized, cv2.COLOR_BGR2RGB)
        
        # Normalize to [0, 1]
        img_normalized = img_rgb.astype(np.float32) / 255.0
        
        # Add batch dimension
        img_input = np.expand_dims(img_normalized, axis=0)
        
        return img_input, orig_shape
    
    def postprocess(
        self,
        output: np.ndarray,
        orig_shape: Tuple[int, int]
    ) -> List[Tuple[int, int, int, int, float]]:
        """
        Postprocess raw model output to bounding boxes.
        
        Args:
            output: Raw model output
            orig_shape: Original image shape (height, width)
            
        Returns:
            List of detections [x1, y1, x2, y2, confidence]
        """
        # YOLOv8 output: [batch, 4+num_classes, 8400]
        predictions = output[0].T  # Shape: [8400, 5+]
        
        detections = []
        orig_h, orig_w = orig_shape
        
        for pred in predictions:
            x_center, y_center, width, height = pred[0:4]
            class_scores = pred[4:]
            confidence = np.max(class_scores)
            
            if confidence < self.conf_threshold:
                continue
            
            # Step 1: Convert from normalized (0-1) to input_size (640) pixels
            x_center_px = x_center * self.input_size
            y_center_px = y_center * self.input_size
            width_px = width * self.input_size
            height_px = height * self.input_size
            
            # Step 2: Scale from input_size to original image size
            scale_x = orig_w / self.input_size
            scale_y = orig_h / self.input_size
            
            x_center_orig = x_center_px * scale_x
            y_center_orig = y_center_px * scale_y
            width_orig = width_px * scale_x
            height_orig = height_px * scale_y
            
            # Convert from center format to corner format
            x1 = int(x_center_orig - width_orig / 2)
            y1 = int(y_center_orig - height_orig / 2)
            x2 = int(x_center_orig + width_orig / 2)
            y2 = int(y_center_orig + height_orig / 2)
            
            # Clip to image boundaries
            x1 = max(0, min(x1, orig_w))
            y1 = max(0, min(y1, orig_h))
            x2 = max(0, min(x2, orig_w))
            y2 = max(0, min(y2, orig_h))
            
            if x2 <= x1 or y2 <= y1:
                continue
            
            detections.append((x1, y1, x2, y2, float(confidence)))
        
        # Apply NMS
        if len(detections) > 0:
            detections = self._nms(detections)
        
        return detections
    
    def _nms(
        self,
        detections: List[Tuple[int, int, int, int, float]]
    ) -> List[Tuple[int, int, int, int, float]]:
        """Apply Non-Maximum Suppression."""
        if len(detections) == 0:
            return []
        
        dets = np.array(detections)
        x1, y1, x2, y2 = dets[:, 0], dets[:, 1], dets[:, 2], dets[:, 3]
        scores = dets[:, 4]
        
        areas = (x2 - x1 + 1) * (y2 - y1 + 1)
        order = scores.argsort()[::-1]
        
        keep = []
        while order.size > 0:
            i = order[0]
            keep.append(i)
            
            xx1 = np.maximum(x1[i], x1[order[1:]])
            yy1 = np.maximum(y1[i], y1[order[1:]])
            xx2 = np.minimum(x2[i], x2[order[1:]])
            yy2 = np.minimum(y2[i], y2[order[1:]])
            
            w = np.maximum(0.0, xx2 - xx1 + 1)
            h = np.maximum(0.0, yy2 - yy1 + 1)
            inter = w * h
            
            iou = inter / (areas[i] + areas[order[1:]] - inter)
            inds = np.where(iou <= self.iou_threshold)[0]
            order = order[inds + 1]
        
        return [tuple(dets[i]) for i in keep]
    
    def detect(self, image: np.ndarray) -> List[Tuple[int, int, int, int, float]]:
        """
        Run detection on an image.
        
        Args:
            image: BGR image from cv2.imread
            
        Returns:
            List of detections [x1, y1, x2, y2, confidence]
        """
        img_input, orig_shape = self.preprocess(image)
        
        self.interpreter.set_tensor(self.input_details[0]['index'], img_input)
        self.interpreter.invoke()
        output = self.interpreter.get_tensor(self.output_details[0]['index'])
        
        return self.postprocess(output, orig_shape)


class TFLiteClassifier:
    """MobileNetV3 TFLite classifier for ripeness classification."""
    
    def __init__(
        self,
        model_path: str,
        class_names: List[str] = None,
        input_size: int = 224
    ):
        """
        Initialize classifier.
        
        Args:
            model_path: Path to TFLite model file
            class_names: List of class names
            input_size: Model input size (assumes square)
        """
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Classifier model not found: {model_path}")
        
        self.model_path = model_path
        self.class_names = class_names or ['unripe', 'ripe', 'over_ripe']
        self.input_size = input_size
        
        # Load TFLite model
        self.interpreter = tf.lite.Interpreter(model_path=model_path)
        self.interpreter.allocate_tensors()
        
        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()
        
        self.input_dtype = self.input_details[0]['dtype']
        self.output_dtype = self.output_details[0]['dtype']
        
        # Quantization parameters
        input_quant = self.input_details[0].get('quantization', (1.0, 0))
        output_quant = self.output_details[0].get('quantization', (1.0, 0))
        self.input_scale = input_quant[0] if isinstance(input_quant, tuple) else 1.0
        self.input_zero_point = input_quant[1] if isinstance(input_quant, tuple) else 0
        self.output_scale = output_quant[0] if isinstance(output_quant, tuple) else 1.0
        self.output_zero_point = output_quant[1] if isinstance(output_quant, tuple) else 0
    
    def preprocess(self, image: np.ndarray) -> np.ndarray:
        """
        Preprocess crop for classifier input.
        
        Args:
            image: BGR image crop
            
        Returns:
            Preprocessed image tensor
        """
        # Resize to model input size
        img_resized = cv2.resize(image, (self.input_size, self.input_size))
        
        # Convert BGR to RGB
        img_rgb = cv2.cvtColor(img_resized, cv2.COLOR_BGR2RGB)
        
        # Add batch dimension
        img_input = np.expand_dims(img_rgb, axis=0)
        
        # Convert dtype based on model requirements
        if self.input_dtype == np.uint8:
            img_input = img_input.astype(np.uint8)
        else:
            img_input = img_input.astype(np.float32)
        
        return img_input
    
    def classify(self, image: np.ndarray) -> Tuple[str, float, Dict[str, float]]:
        """
        Classify a single crop.
        
        Args:
            image: BGR image crop
            
        Returns:
            Tuple of (class_name, confidence, all_probabilities)
        """
        img_input = self.preprocess(image)
        
        self.interpreter.set_tensor(self.input_details[0]['index'], img_input)
        self.interpreter.invoke()
        output = self.interpreter.get_tensor(self.output_details[0]['index'])
        
        # Dequantize if needed
        if self.output_dtype == np.uint8:
            output = (output.astype(np.float32) - self.output_zero_point) * self.output_scale
        
        # Apply softmax if output is logits
        if output.max() > 1.0 or output.min() < 0.0:
            output = tf.nn.softmax(output).numpy()
        
        probabilities = output[0]
        class_idx = np.argmax(probabilities)
        confidence = float(probabilities[class_idx])
        class_name = self.class_names[class_idx]
        
        all_probs = {name: float(prob) for name, prob in zip(self.class_names, probabilities)}
        
        return class_name, confidence, all_probs


class IntegratedPipeline:
    """Complete pipeline integrating detection and classification."""
    
    # Default colors for each ripeness class (BGR format)
    DEFAULT_COLORS = {
        'unripe': (0, 255, 0),      # Green
        'ripe': (0, 165, 255),       # Orange
        'over_ripe': (0, 0, 255),    # Red
        'unknown': (128, 128, 128)   # Gray
    }
    
    def __init__(
        self,
        detector_path: str = None,
        classifier_path: str = None,
        config_path: str = None,
        conf_threshold: float = 0.25,
        iou_threshold: float = 0.45,
        class_names: List[str] = None
    ):
        """
        Initialize the integrated pipeline.
        
        Args:
            detector_path: Path to detector TFLite model
            classifier_path: Path to classifier TFLite model
            config_path: Path to config YAML (overrides other params)
            conf_threshold: Detection confidence threshold
            iou_threshold: NMS IoU threshold
            class_names: Classification class names
        """
        # Load config if provided
        config = {}
        if config_path and os.path.exists(config_path):
            with open(config_path, 'r') as f:
                config = yaml.safe_load(f)
        
        # Resolve paths relative to this file's directory
        base_dir = Path(__file__).parent
        
        # Get model paths from config or arguments
        if detector_path is None:
            detector_path = config.get('models', {}).get('detector_path')
            if detector_path:
                detector_path = str(base_dir / detector_path)
            else:
                detector_path = str(base_dir / "../detector/exports/tflite/best_float16.tflite")
        
        if classifier_path is None:
            classifier_path = config.get('models', {}).get('classifier_path')
            if classifier_path:
                classifier_path = str(base_dir / classifier_path)
            else:
                classifier_path = str(base_dir / "../classifier/exports/tflite/classifier_float16.tflite")
        
        # Get thresholds from config
        thresholds = config.get('thresholds', {})
        conf_threshold = thresholds.get('confidence', conf_threshold)
        iou_threshold = thresholds.get('iou', iou_threshold)
        
        # Get class names
        if class_names is None:
            class_names = config.get('classes', ['unripe', 'ripe', 'over_ripe'])
        
        # Get visualization settings
        viz_config = config.get('visualization', {})
        colors_config = viz_config.get('colors', self.DEFAULT_COLORS)
        # Convert color lists to tuples (YAML loads as lists, OpenCV needs tuples)
        self.colors = {k: tuple(v) if isinstance(v, list) else v for k, v in colors_config.items()}
        self.font_scale = viz_config.get('font_scale', 0.6)
        self.line_thickness = viz_config.get('line_thickness', 2)
        
        # Initialize models
        print(f"Loading detector: {detector_path}")
        self.detector = TFLiteDetector(
            model_path=detector_path,
            conf_threshold=conf_threshold,
            iou_threshold=iou_threshold
        )
        
        print(f"Loading classifier: {classifier_path}")
        self.classifier = TFLiteClassifier(
            model_path=classifier_path,
            class_names=class_names
        )
        
        print("Pipeline initialized successfully!")
    
    def process_image(
        self,
        image_path: str,
        bbox_padding: float = 0.05
    ) -> Dict:
        """
        Process a single image through the full pipeline.
        
        Args:
            image_path: Path to input image
            bbox_padding: Padding to add around bounding boxes for cropping
            
        Returns:
            Dictionary containing:
                - image_path: Original image path
                - detections: List of Detection objects
                - summary: Count per class
                - annotated_image: Image with drawn results
        """
        # Load image
        image = cv2.imread(image_path)
        if image is None:
            raise ValueError(f"Failed to load image: {image_path}")
        
        h, w = image.shape[:2]
        
        # Run detection
        raw_detections = self.detector.detect(image)
        
        # Process each detection
        detections = []
        for x1, y1, x2, y2, det_conf in raw_detections:
            # Ensure coordinates are integers (NMS may return floats)
            x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2)
            
            # Add padding for cropping
            pad_w = int((x2 - x1) * bbox_padding)
            pad_h = int((y2 - y1) * bbox_padding)
            
            crop_x1 = max(0, x1 - pad_w)
            crop_y1 = max(0, y1 - pad_h)
            crop_x2 = min(w, x2 + pad_w)
            crop_y2 = min(h, y2 + pad_h)
            
            # Extract crop
            crop = image[crop_y1:crop_y2, crop_x1:crop_x2]
            
            if crop.size == 0:
                continue
            
            # Classify crop
            class_name, class_conf, class_probs = self.classifier.classify(crop)
            
            detection = Detection(
                bbox=(x1, y1, x2, y2),
                detection_confidence=det_conf,
                class_name=class_name,
                class_confidence=class_conf,
                class_probabilities=class_probs
            )
            detections.append(detection)
        
        # Generate summary
        summary = {}
        for det in detections:
            summary[det.class_name] = summary.get(det.class_name, 0) + 1
        
        # Draw results
        annotated_image = self.draw_results(image, detections)
        
        return {
            'image_path': image_path,
            'detections': detections,
            'summary': summary,
            'annotated_image': annotated_image
        }
    
    def draw_results(
        self,
        image: np.ndarray,
        detections: List[Detection]
    ) -> np.ndarray:
        """
        Draw detection results on image.
        
        Args:
            image: Original BGR image
            detections: List of Detection objects
            
        Returns:
            Annotated image
        """
        annotated = image.copy()
        
        for det in detections:
            x1, y1, x2, y2 = det.bbox
            class_name = det.class_name
            confidence = det.class_confidence
            
            # Get color for this class
            color = self.colors.get(class_name, self.colors.get('unknown', (128, 128, 128)))
            
            # Draw bounding box
            cv2.rectangle(annotated, (x1, y1), (x2, y2), color, self.line_thickness)
            
            # Prepare label
            label = f"{class_name}: {confidence:.2f}"
            
            # Get text size for background
            font = cv2.FONT_HERSHEY_SIMPLEX
            (text_w, text_h), baseline = cv2.getTextSize(
                label, font, self.font_scale, 1
            )
            
            # Draw label background
            cv2.rectangle(
                annotated,
                (x1, y1 - text_h - 10),
                (x1 + text_w + 4, y1),
                color,
                -1
            )
            
            # Draw label text
            cv2.putText(
                annotated,
                label,
                (x1 + 2, y1 - 5),
                font,
                self.font_scale,
                (255, 255, 255),
                1,
                cv2.LINE_AA
            )
        
        return annotated
    
    def print_results(self, results: Dict) -> None:
        """
        Print results to console.
        
        Args:
            results: Results dictionary from process_image
        """
        print("\n" + "=" * 60)
        print(f"Results for: {results['image_path']}")
        print("=" * 60)
        
        print(f"\nTotal detections: {len(results['detections'])}")
        
        if results['summary']:
            print("\nSummary by class:")
            for class_name, count in sorted(results['summary'].items()):
                print(f"  {class_name}: {count}")
        
        if results['detections']:
            print("\nDetailed detections:")
            for i, det in enumerate(results['detections'], 1):
                print(f"\n  [{i}] {det.class_name}")
                print(f"      Bbox: {det.bbox}")
                print(f"      Detection conf: {det.detection_confidence:.3f}")
                print(f"      Class conf: {det.class_confidence:.3f}")
                print(f"      Probabilities: ", end="")
                probs_str = ", ".join(
                    f"{k}: {v:.3f}" for k, v in det.class_probabilities.items()
                )
                print(probs_str)
        
        print("\n" + "=" * 60)