# FruitBunch Detection Update

## Overview
Updated the detection model to classify objects as either **"FruitBunch"** or **"NotFruitBunch"** based on confidence level threshold.

## Changes Made

### Backend (`app.py`)

#### 1. Added Configuration Constants
```python
DETECTION_LABEL = 'FruitBunch'  # High confidence detection
NOT_FRUIT_BUNCH_LABEL = 'NotFruitBunch'  # Low confidence detection
CONFIDENCE_THRESHOLD = 0.5  # Objects below this are classified as NotFruitBunch
```

#### 2. Updated Detection Parsing Logic
Modified `parse_detection_from_outputs()` function to apply confidence threshold:
- **Detections >= 0.5 confidence** → Labeled as `"FruitBunch"`
- **Detections < 0.5 confidence** → Labeled as `"NotFruitBunch"`

This applies to all three detection output formats:
- Separate arrays (boxes, classes, scores)
- Packed 3D arrays [1, N, 6]
- Packed 2D arrays [N, 6]

### Frontend (`capture-page.tsx`)

#### 1. Updated Interface
```typescript
interface InferenceResult {
  predictions: number[]
  topClass: number
  confidence: number
  inferenceTime: number
  label?: string  // 'FruitBunch' or 'NotFruitBunch'
  detections?: Array<{
    class: string
    confidence: number
    box: number[]
  }>
}
```

#### 2. Enhanced Result Display
- **Detection View**: Shows all detected objects with color-coded labels:
  - ✓ FruitBunch (Green) - High confidence detections
  - ⚠ NotFruitBunch (Orange) - Low confidence detections
- **Visual Indicators**:
  - Color-coded progress bars (green for FruitBunch, orange for NotFruitBunch)
  - Confidence percentage display
  - Individual cards for each detection

#### 3. Updated API Response Handling
Modified `runInference()` to properly parse backend detection response including label and detections array.

## How It Works

### Detection Flow
1. **Image Capture** → User captures image via camera
2. **Backend Processing** → TFLite model runs inference
3. **Confidence Check** → Each detected object's confidence is compared to threshold (0.5)
4. **Label Assignment**:
   - `confidence >= 0.5` → `"FruitBunch"` (Positive detection)
   - `confidence < 0.5` → `"NotFruitBunch"` (Uncertain/negative detection)
5. **Frontend Display** → Results shown with color-coded labels and confidence bars

### Visual Example

**High Confidence Detection (≥ 50%)**:
```
✓ FruitBunch               85.3%
[██████████████████░░] (green bar)
```

**Low Confidence Detection (< 50%)**:
```
⚠ NotFruitBunch           32.1%
[█████████░░░░░░░░░░] (orange bar)
```

## Configuration

### Adjusting the Threshold
To change the confidence threshold, modify the constant in `backend/app.py`:

```python
# Confidence threshold for FruitBunch detection (adjust as needed)
CONFIDENCE_THRESHOLD = 0.5  # Default: 50%
```

**Recommendations**:
- **Stricter detection** (fewer false positives): Increase to 0.6 or 0.7
- **More lenient** (catch more objects): Decrease to 0.3 or 0.4
- **Production use**: Start with 0.5 and adjust based on real-world testing

## Testing

### 1. Start Backend
```bash
cd backend
python app.py
```

Expected output:
```
🌴 Palm Oil Grading - Python TFLite Backend
🗄️  Initializing database...
✅ Database initialized successfully!
🔄 Loading TFLite model...
🧠 Determined model_type = detection
✅ Model warmup complete
🚀 Starting server on port 5000...
```

### 2. Start Frontend
```bash
npm run dev
```

### 3. Test Detection
1. Navigate to capture page
2. Take a photo of a palm oil bunch
3. Wait for processing
4. **Expected Results**:
   - Clear FruitBunch detections show with ✓ and green color
   - Uncertain detections show as ⚠ NotFruitBunch with orange color
   - Each detection displays confidence percentage
   - Multiple detections shown if present

### 4. Verify Database Storage
```sql
SELECT id, top_class, confidence, predictions->>'label' as label 
FROM grading_history 
ORDER BY created_at DESC 
LIMIT 5;
```

## API Response Format

### Detection Model Response
```json
{
  "success": true,
  "output": {
    "detections": [
      {
        "class": "FruitBunch",
        "confidence": 0.853,
        "box": [0.1, 0.2, 0.8, 0.9]
      },
      {
        "class": "NotFruitBunch",
        "confidence": 0.321,
        "box": [0.5, 0.1, 0.7, 0.4]
      }
    ],
    "predictions": [0.0, 0.0, 0.0, 0.0, 0.0],
    "topClass": 0,
    "confidence": 0.853,
    "label": "FruitBunch",
    "inferenceTime": 120
  },
  "saved": true,
  "history_id": 42
}
```

## Benefits

1. **Clear Distinction**: Users can immediately see which detections are reliable
2. **Better UX**: Color-coded UI makes results easy to interpret at a glance
3. **Flexible Threshold**: Easy to adjust confidence threshold based on requirements
4. **Multiple Detections**: Shows all detected objects with individual labels
5. **Database Tracking**: All detections saved with user_id for analytics

## Future Enhancements

### Potential Improvements:
1. **Dynamic Threshold**: Allow users to adjust threshold via UI settings
2. **Bounding Boxes**: Draw boxes on image showing detection locations
3. **Statistics**: Show percentage breakdown (e.g., "3 FruitBunch, 1 NotFruitBunch")
4. **Filtering**: Allow users to hide NotFruitBunch detections
5. **Confidence Histogram**: Visualize confidence distribution across detections
6. **Export Options**: Export detection data as CSV/JSON for analysis

## Troubleshooting

### Issue: All detections show as NotFruitBunch
**Solution**: Model confidence may be consistently low. Try:
1. Reduce `CONFIDENCE_THRESHOLD` to 0.3
2. Check image quality and lighting
3. Verify model is detection type (not classification)

### Issue: No detections array in response
**Solution**: 
1. Check model output format in startup logs
2. Verify `model_type = "detection"` in logs
3. Ensure TFLite model is detection architecture

### Issue: Frontend not showing color-coded labels
**Solution**:
1. Clear browser cache and refresh
2. Verify `inferenceResult.detections` is populated
3. Check browser console for errors

## Summary

The system now intelligently classifies detections based on confidence:
- **FruitBunch** (✓, green) = High confidence (≥50%)
- **NotFruitBunch** (⚠, orange) = Low confidence (<50%)

This provides users with clear, actionable information about detection reliability and helps identify objects that may need manual verification.
