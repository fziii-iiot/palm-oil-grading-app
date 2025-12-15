# 🚀 Quick Start Guide

## Step 1: Install Dependencies

```bash
cd backend
npm install
```

## Step 2: Setup Environment

```bash
cp .env.example .env
```

## Step 3: Add Your Model

Place your converted TensorFlow.js model in:
```
backend/models/palm-oil-model/
├── model.json
└── group1-shard1of1.bin
```

## Step 4: Start Backend

```bash
npm run dev
```

You should see:
```
✅ Model loaded successfully
✅ Server running on port 5000
📍 Inference endpoint: http://localhost:5000/api/model/run
🎯 Ready to receive inference requests
```

## Step 5: Test It

```bash
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2025-11-21T...",
  "service": "palm-oil-grading-backend"
}
```

## Step 6: Send Inference Request

```bash
curl -X POST http://localhost:5000/api/model/run \
  -H "Content-Type: application/json" \
  -d '{"image":"data:image/jpeg;base64,YOUR_BASE64_HERE"}'
```

## Frontend Integration

Update your Next.js API route (`/app/api/inference/route.ts`):

```javascript
export async function POST(request) {
  const body = await request.json()
  
  // Forward to backend
  const response = await fetch('http://localhost:5000/api/model/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  
  const result = await response.json()
  return NextResponse.json(result)
}
```

## Done! 🎉

Your backend is now running and ready to process inference requests from your frontend.
