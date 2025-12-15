# 🔌 Frontend Integration Guide

## Overview

Your Next.js frontend already has an API endpoint at `/app/api/inference/route.ts` that currently contains mock data. This guide shows how to connect it to the backend.

## Option 1: Proxy Through Next.js API (Recommended)

Keep your Next.js API route and use it as a proxy to the backend.

### Update `/app/api/inference/route.ts`

Replace the `runModelInference` function:

```javascript
/**
 * Run model inference via backend service
 */
async function runModelInference(imageBase64) {
  try {
    // Forward request to backend
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

    // Transform backend response to match frontend expectations
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

### Benefits
- ✅ No frontend code changes needed
- ✅ Centralized error handling
- ✅ Easy to add caching or rate limiting
- ✅ Hide backend URL from frontend

---

## Option 2: Direct Backend Calls (Simple)

Call backend directly from frontend components.

### Update Frontend Inference Function

In your component (e.g., `app/capture/page.tsx` or `utils/tflite.ts`):

```javascript
export async function predictFromImage(imageSource, inputSize = 224) {
  console.log('[Backend] Sending image to inference API...')
  
  try {
    const response = await fetch('http://localhost:5000/api/model/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: imageSource  // base64 dataURL
      })
    })

    if (!response.ok) {
      throw new Error(`Backend inference failed: ${response.status}`)
    }

    const data = await response.json()
    
    // Convert to Float32Array expected by UI
    return new Float32Array(data.output.predictions)

  } catch (error) {
    console.error('[Backend] Inference failed:', error)
    throw error
  }
}
```

### Benefits
- ✅ Simpler architecture
- ✅ Fewer network hops
- ✅ Direct error messages

### Drawbacks
- ⚠️ Need to handle CORS
- ⚠️ Backend URL exposed to frontend

---

## Option 3: Environment-Based Routing

Use different endpoints based on environment.

### Create Environment Variable

In your Next.js `.env.local`:

```env
NEXT_PUBLIC_INFERENCE_API=http://localhost:5000/api/model/run
```

### Update Frontend Code

```javascript
const INFERENCE_API = process.env.NEXT_PUBLIC_INFERENCE_API || '/api/inference'

export async function predictFromImage(imageSource) {
  const response = await fetch(INFERENCE_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: imageSource })
  })
  
  const data = await response.json()
  return new Float32Array(data.output?.predictions || data.predictions)
}
```

### Benefits
- ✅ Flexible deployment
- ✅ Easy to switch between mock and real backend
- ✅ Production-ready

---

## Response Format Mapping

### Backend Response
```json
{
  "success": true,
  "output": {
    "predictions": [0.15, 0.80, 0.05],
    "topClass": 1,
    "confidence": 0.80,
    "label": "Ripe",
    "allClasses": [...]
  },
  "inferenceTime": 123
}
```

### Frontend Expects
```javascript
{
  predictions: Float32Array([0.15, 0.80, 0.05]),
  topClass: 1,
  confidence: 0.80,
  inferenceTime: 123
}
```

### Transformation Helper

```javascript
function transformBackendResponse(backendData) {
  return {
    predictions: new Float32Array(backendData.output.predictions),
    topClass: backendData.output.topClass,
    confidence: backendData.output.confidence,
    inferenceTime: backendData.inferenceTime,
    label: backendData.output.label  // Bonus: readable label
  }
}
```

---

## CORS Configuration

If calling backend directly from frontend, CORS is already enabled in the backend (`src/app.js`):

```javascript
app.use(cors())  // Allows all origins
```

For production, restrict to your domain:

```javascript
app.use(cors({
  origin: 'https://yourdomain.com',
  methods: ['POST', 'GET']
}))
```

---

## Testing the Integration

### 1. Start Backend
```bash
cd backend
npm run dev
```

### 2. Start Frontend
```bash
cd ..
npm run dev
```

### 3. Test in Browser
1. Open `http://localhost:3000/capture`
2. Capture an image
3. Check browser console for logs
4. Check backend terminal for inference logs

### Expected Flow
```
Frontend: Captured image
Frontend: Sending to backend...
Backend: 📸 Received inference request
Backend: 🔄 Processing image...
Backend: ⚡ Model inference: 145ms
Backend: 🎯 Prediction: Ripe (85.32%)
Backend: ✅ Inference completed in 234ms
Frontend: Inference complete! Result: Ripe
```

---

## Error Handling

### Backend Down
```javascript
try {
  const response = await fetch(backendUrl, {...})
  if (!response.ok) throw new Error('Backend error')
} catch (error) {
  console.error('Backend unavailable:', error)
  // Fallback: show user-friendly error
  setError('Model service unavailable. Please try again.')
}
```

### Network Timeout
```javascript
const controller = new AbortController()
const timeoutId = setTimeout(() => controller.abort(), 30000) // 30s

try {
  const response = await fetch(backendUrl, {
    signal: controller.signal,
    ...options
  })
} catch (error) {
  if (error.name === 'AbortError') {
    setError('Request timeout. Model may be loading.')
  }
} finally {
  clearTimeout(timeoutId)
}
```

---

## Production Deployment

### Backend URL Configuration

**Development:**
```env
BACKEND_URL=http://localhost:5000
```

**Production:**
```env
BACKEND_URL=https://api.yourdomain.com
```

### Deploy Backend
- Deploy backend to same server as frontend
- Use process manager (PM2, systemd)
- Backend runs on different port (5000)
- Nginx/Apache proxies requests

### Nginx Configuration Example
```nginx
location /api/model {
    proxy_pass http://localhost:5000/api/model;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

---

## Summary

**Recommended Setup:**
1. ✅ Use **Option 1** (Proxy through Next.js API) for cleanest architecture
2. ✅ Backend runs on port 5000
3. ✅ Frontend calls `/api/inference` (Next.js route)
4. ✅ Next.js route forwards to `http://localhost:5000/api/model/run`
5. ✅ Response is transformed and returned to frontend

**No frontend UI changes needed!** The integration is purely in the API logic layer.
