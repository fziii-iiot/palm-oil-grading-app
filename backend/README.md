# Palm Oil Grading Backend

Backend service for on-device TFLite model inference.

## 🏗️ Architecture

```
backend/
├── src/
│   ├── routes/          # API route definitions
│   ├── controllers/     # Request handlers
│   ├── services/        # Business logic & ML model execution
│   ├── utils/           # Helper functions
│   ├── app.js          # Express app configuration
│   └── server.js       # Server entry point
├── models/             # ML model files (you need to add these)
│   └── palm-oil-model/ # Converted TensorFlow.js model
│       ├── model.json
│       └── group1-shard1of1.bin
├── package.json
├── .env.example
└── README.md
```

## 📦 Installation

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Steps

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables** (optional):
   ```env
   PORT=5000
   MODEL_PATH=./models/palm-oil-model/model.json
   INPUT_SIZE=224
   ```

## 🤖 Model Setup

### Option 1: Convert TFLite to TensorFlow.js (Recommended)

If you have a `.tflite` model file, convert it first:

```bash
# Install converter
pip install tensorflowjs

# Convert SavedModel to TensorFlow.js
tensorflowjs_converter \
  --input_format=tf_saved_model \
  --output_format=tfjs_graph_model \
  ./your_saved_model \
  ./backend/models/palm-oil-model
```

This creates:
```
backend/models/palm-oil-model/
├── model.json
└── group1-shard1of1.bin
```

### Option 2: Use Existing TensorFlow.js Model

If you already have a converted model:

```bash
# Place your model files in:
backend/models/palm-oil-model/
├── model.json
└── group1-shard*.bin
```

## 🚀 Running the Backend

### Development Mode (with auto-reload)

```bash
npm run dev
```

### Production Mode

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
