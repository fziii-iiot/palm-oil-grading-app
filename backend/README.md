# Backend - Palm Oil Grading API

Flask backend for palm fruit bunch detection and classification using TensorFlow Lite.

## Quick Start

1. **Install dependencies**
```bash
pip install -r requirements.txt
```

2. **Configure database** (create `.env` file)
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=palm_grading
DB_USER=postgres
DB_PASSWORD=your_password
SECRET_KEY=your_secret_key
```

3. **Run server**
```bash
python app.py
# or
.\run.bat  # Windows
```

Server runs on: http://localhost:5000

## Project Structure

```
backend/
├── app.py              # Main Flask application
├── db.py               # Database connection
├── models.py           # SQLAlchemy models
├── requirements.txt    # Python dependencies
├── models/            # TFLite model files
│   ├── best_float32.tflite         # YOLOv8 detection
│   └── classifier_float32.tflite   # MobileNetV3 classification
└── .env               # Environment configuration
```

## API Endpoints

### Model Operations
- `POST /api/model/run` - Run inference
  - Body: `{ "image": "base64_string", "user_id": 1 }`
  - Returns: Detection + classification results

- `GET /api/model/status` - Model status
- `GET /health` - Health check

### Authentication
- `POST /api/auth/login` - Login
  - Body: `{ "username": "admin", "password": "admin123" }`
- `POST /api/auth/register` - Register new user

### History
- `GET /api/history?user_id=1` - User history
- `GET /api/history/all` - All history (admin)

## Models

**Detection Model** (`best_float32.tflite`)
- Architecture: YOLOv8
- Input: 640x640x3 RGB image
- Output: [1, 5, 8400] - detections with bounding boxes

**Classification Model** (`classifier_float32.tflite`)
- Architecture: MobileNetV3
- Input: 224x224x3 RGB image (cropped bunch)
- Output: [1, 3] - probabilities for [unripe, ripe, over_ripe]

## Database Schema

**users**
- id, username, password_hash, created_at

**grading_history**
- id, user_id, image_url, predictions, top_class, confidence, inference_time, created_at

## Troubleshooting

**Module not found:**
```bash
pip install -r requirements.txt
```

**Database connection failed:**
- Check PostgreSQL is running
- Verify credentials in `.env`
- Ensure database exists

**Model not loading:**
- Check model files exist in `models/`
- Verify TensorFlow: `pip install tensorflow==2.15.0`

```bash
npm start
```

The server will start on `http://localhost:5000`

### Verify Backend is Running

```bash
# Health check
curl http://localhost:5000/health

# Model status
curl http://localhost:5000/api/model/status
```

## 📡 API Endpoints

### POST /api/model/run

Run inference on an image.

**Request:**
```json
{
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
}
```

**Response:**
```json
{
  "success": true,
  "output": {
    "predictions": [0.15, 0.80, 0.05],
    "topClass": 1,
    "confidence": 0.80,
    "label": "Ripe",
    "allClasses": [
      { "name": "Unripe", "confidence": 0.15 },
      { "name": "Ripe", "confidence": 0.80 },
      { "name": "Overripe", "confidence": 0.05 }
    ]
  },
  "inferenceTime": 123
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message",
  "inferenceTime": 45
}
```

### GET /health

Check backend health status.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-11-21T10:30:00.000Z",
  "service": "palm-oil-grading-backend"
}
```

### GET /api/model/status

Check model loading status.

**Response:**
```json
{
  "success": true,
  "status": "Model loaded and ready",
  "modelPath": "./models/palm-oil-model.tflite"
}
```

## 🔧 Testing the API

### Using cURL

```bash
# Test with base64 image
curl -X POST http://localhost:5000/api/model/run \
  -H "Content-Type: application/json" \
  -d '{"image":"data:image/jpeg;base64,/9j/4AAQ..."}'
```

### Using Postman

1. Set method to `POST`
2. URL: `http://localhost:5000/api/model/run`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
   ```json
   {
     "image": "data:image/jpeg;base64,YOUR_BASE64_STRING_HERE"
   }
   ```

### Using JavaScript Fetch

```javascript
const base64Image = canvas.toDataURL('image/jpeg')

const response = await fetch('http://localhost:5000/api/model/run', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    image: base64Image
  })
})

const result = await response.json()
console.log(result)
```

## 🎯 Connecting to Frontend

Update your Next.js frontend API endpoint to point to the backend:

In your frontend code (e.g., `/app/api/inference/route.ts`):

```javascript
// Instead of running inference in Next.js API route,
// forward to backend service
const response = await fetch('http://localhost:5000/api/model/run', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ image: imageBase64 })
})

const result = await response.json()
return NextResponse.json(result)
```

Or update frontend to call backend directly:

```javascript
// In your React component
const response = await fetch('http://localhost:5000/api/model/run', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ image: imageDataUrl })
})
```

## 📊 Model Configuration

### Class Labels

Edit `src/services/model.service.js` to customize class labels:

```javascript
const CLASS_LABELS = ['Unripe', 'Ripe', 'Overripe']
```

### Input Size

Change the input image size in `.env`:

```env
INPUT_SIZE=224
```

Or directly in code:

```javascript
const INPUT_SIZE = 224
```

## 🐛 Troubleshooting

### Model Not Found Error

```
Error: Model file not found at ./models/palm-oil-model.tflite
```

**Solution:** Place your converted model files in `backend/models/palm-oil-model/`

### TensorFlow.js Version Conflicts

If you encounter TensorFlow.js errors:

```bash
# Reinstall tfjs-node
npm uninstall @tensorflow/tfjs-node
npm install @tensorflow/tfjs-node
```

### Sharp Installation Issues

If `sharp` fails to install:

```bash
# For Windows
npm install --ignore-scripts=false --verbose sharp

# For Linux
sudo apt-get install libvips-dev
npm install sharp
```

### Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:** Change port in `.env` or kill existing process:

```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill
```

## 🔒 Production Deployment

### Environment Variables

Set production environment variables:

```env
NODE_ENV=production
PORT=5000
MODEL_PATH=/app/models/palm-oil-model/model.json
```

### Using PM2

```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start src/server.js --name palm-oil-backend

# Monitor
pm2 logs palm-oil-backend
pm2 status
```

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["node", "src/server.js"]
```

Build and run:

```bash
docker build -t palm-oil-backend .
docker run -p 5000:5000 palm-oil-backend
```

## 📝 Performance Tips

1. **Model Warmup:** Model is warmed up on server startup for faster first inference
2. **Memory Management:** Tensors are properly disposed to prevent memory leaks
3. **Batching:** For multiple images, use batch processing
4. **Caching:** Model is loaded once and reused for all requests

## 📚 Dependencies

- **express** - Web framework
- **cors** - Enable CORS for frontend communication
- **dotenv** - Environment variable management
- **@tensorflow/tfjs-node** - TensorFlow.js with Node.js bindings (CPU/GPU acceleration)
- **sharp** - Fast image processing library

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section
2. Verify model files are correctly placed
3. Check server logs for detailed error messages

## 📄 License

ISC
