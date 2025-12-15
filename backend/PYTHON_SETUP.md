# 🐍 Python Backend Setup Guide

## Quick Start

### 1. Install Python Dependencies

```bash
cd backend
pip install -r requirements.txt
```

Or with virtual environment (recommended):

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate  # Windows
# source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
```

### 2. Verify Model File

Make sure your model is in the correct location:
```
backend/models/palm-oil-model.tflite
```

### 3. Start Python Server

```bash
python app.py
```

You should see:
```
============================================================
🌴 Palm Oil Grading - Python TFLite Backend
============================================================
🔄 Loading TFLite model from: ./models/palm-oil-model.tflite
✅ Model loaded successfully!
   Input shape: [1 224 224 3]
   Output shape: [1 3]
🔥 Warming up model...
✅ Model warmup complete!

🚀 Starting server on port 5000...
📍 Health check: http://localhost:5000/health
📍 API endpoint: http://localhost:5000/api/model/run
============================================================
```

### 4. Test the Server

Open browser to: `http://localhost:5000/health`

Or test with curl:
```bash
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "healthy",
  "model_loaded": true,
  "model_path": "./models/palm-oil-model.tflite",
  "input_size": 224
}
```

---

## Testing Inference

### Using curl

```bash
curl -X POST http://localhost:5000/api/model/run \
  -H "Content-Type: application/json" \
  -d "{\"image\": \"data:image/jpeg;base64,/9j/4AAQ...\"}"
```

### Using Python

```python
import requests
import base64

# Read and encode image
with open('test_image.jpg', 'rb') as f:
    image_data = base64.b64encode(f.read()).decode('utf-8')

# Send request
response = requests.post(
    'http://localhost:5000/api/model/run',
    json={'image': f'data:image/jpeg;base64,{image_data}'}
)

print(response.json())
```

### Expected Response

```json
{
  "success": true,
  "output": {
    "predictions": [0.05, 0.85, 0.10],
    "topClass": 1,
    "confidence": 0.85,
    "label": "Ripe",
    "allClasses": [
      {"class": "Unripe", "confidence": 0.05},
      {"class": "Ripe", "confidence": 0.85},
      {"class": "Overripe", "confidence": 0.10}
    ],
    "inferenceTime": 123
  },
  "inferenceTime": 123
}
```

---

## Frontend Integration

The Python backend provides the same API as the Node.js version, so no frontend changes needed!

### Update Next.js API Route

Edit `app/api/inference/route.ts`:

```typescript
async function runModelInference(imageBase64: string) {
  try {
    const response = await fetch('http://localhost:5000/api/model/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: imageBase64
      })
    })

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}`)
    }

    const data = await response.json()

    return {
      result: data.output.label,
      confidence: data.output.confidence,
      predictions: data.output.predictions
    }

  } catch (error) {
    console.error('Backend inference failed:', error)
    throw error
  }
}
```

---

## API Endpoints

### GET /health
Health check endpoint

**Response:**
```json
{
  "status": "healthy",
  "model_loaded": true,
  "model_path": "./models/palm-oil-model.tflite",
  "input_size": 224
}
```

### GET /api/model/status
Get model information

**Response:**
```json
{
  "loaded": true,
  "inputShape": [1, 224, 224, 3],
  "outputShape": [1, 3],
  "classes": ["Unripe", "Ripe", "Overripe"],
  "modelPath": "./models/palm-oil-model.tflite"
}
```

### POST /api/model/run
Run inference on image

**Request:**
```json
{
  "image": "data:image/jpeg;base64,/9j/4AAQ..." // or just base64 string
}
```

**Response:**
```json
{
  "success": true,
  "output": {
    "predictions": [0.05, 0.85, 0.10],
    "topClass": 1,
    "confidence": 0.85,
    "label": "Ripe",
    "allClasses": [
      {"class": "Unripe", "confidence": 0.05},
      {"class": "Ripe", "confidence": 0.85},
      {"class": "Overripe", "confidence": 0.10}
    ],
    "inferenceTime": 123
  },
  "inferenceTime": 123
}
```

---

## Troubleshooting

### "ModuleNotFoundError: No module named 'tensorflow'"

Install dependencies:
```bash
pip install -r requirements.txt
```

### "Model file not found"

Check model path in `.env`:
```env
MODEL_PATH=./models/palm-oil-model.tflite
```

### "Input shape mismatch"

Your model might expect different input size. Update `.env`:
```env
INPUT_SIZE=224  # or 299, 192, etc.
```

### Port already in use

Change port in `.env`:
```env
PORT=5001
```

### CORS errors from frontend

Already configured in `app.py`:
```python
CORS(app)  # Allows all origins
```

For production, restrict origins:
```python
CORS(app, origins=['https://yourdomain.com'])
```

---

## Production Deployment

### Using Gunicorn

Install:
```bash
pip install gunicorn
```

Run:
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### Using Docker

Create `Dockerfile`:
```dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
```

Build and run:
```bash
docker build -t palm-oil-backend .
docker run -p 5000:5000 palm-oil-backend
```

---

## Performance Tips

1. **Use virtual environment** for dependency isolation
2. **Enable GPU** if available (install `tensorflow-gpu`)
3. **Use Gunicorn** with multiple workers for production
4. **Cache model** in memory (already implemented)
5. **Optimize image size** before sending to backend

---

## Dependencies Explained

- **flask**: Web framework for Python
- **flask-cors**: CORS support for cross-origin requests
- **tensorflow**: TensorFlow with TFLite runtime
- **pillow**: Image processing library
- **numpy**: Numerical computations
- **python-dotenv**: Environment variable management

---

## Next Steps

1. ✅ Install dependencies: `pip install -r requirements.txt`
2. ✅ Start server: `python app.py`
3. ✅ Test health endpoint: `http://localhost:5000/health`
4. ✅ Update frontend API route (see Frontend Integration section)
5. ✅ Test end-to-end with your app

Your Python backend is ready! 🎉
