# 🔧 How to Start the Backend (FIXED!)

## Problem
When running `python app.py`, you don't see any output or status messages.

## Solution: Use the Batch File

### ✅ Method 1: Double-Click the Batch File (EASIEST!)

1. Open File Explorer
2. Navigate to: `backend` folder
3. **Double-click**: `run.bat`
4. A new window will open showing the server status

You should see:
```
============================================================
Starting Palm Oil Grading Backend Server
============================================================

Checking Python installation...
Python 3.9.x

Starting Flask server...

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

 * Serving Flask app 'app'
 * Running on http://0.0.0.0:5000
Press CTRL+C to quit
```

### ✅ Method 2: From PowerShell (Alternative)

```powershell
cd backend
.\run.bat
```

### ✅ Method 3: Open in New CMD Window (From PowerShell)

```powershell
Start-Process cmd -ArgumentList "/k", "cd /d `"$PWD\backend`" && run.bat"
```

---

## Verify Backend is Running

### Test 1: Open in Browser
Open: **http://localhost:5000/health**

Should show:
```json
{
  "status": "healthy",
  "model_loaded": true,
  "model_path": "./models/palm-oil-model.tflite",
  "input_size": 224
}
```

### Test 2: PowerShell Command
```powershell
Invoke-RestMethod http://localhost:5000/health
```

Should output:
```
status       : healthy
model_loaded : True
model_path   : ./models/palm-oil-model.tflite
input_size   : 224
```

---

## What Should You See?

### ✅ Success Output:
- Green checkmarks ✅
- "Model loaded successfully!"
- "Server starting on port 5000"
- Flask running message

### ❌ Error: Python Not Found
```
ERROR: Python is not installed or not in PATH
```

**Fix**: Install Python from python.org

### ❌ Error: Module Not Found
```
ModuleNotFoundError: No module named 'flask'
```

**Fix**:
```powershell
cd backend
pip install -r requirements.txt
```

### ❌ Error: Model File Not Found
```
❌ Error loading model: [Errno 2] No such file or directory
```

**Fix**: Verify model file exists:
```powershell
dir backend\models\palm-oil-model.tflite
```

---

## Keep Backend Running

**Important**: Keep the Command Prompt window OPEN while using the app!

- ✅ Window stays open = Backend is running
- ❌ Window closes = Backend stopped

To stop the backend:
- Press `CTRL+C` in the Command Prompt window
- Or close the window

---

## Now Start the Frontend

**Open a NEW PowerShell/Terminal** (keep backend window open):

```powershell
npm run dev
```

Wait for:
```
▲ Next.js 16.0.0
- Local: http://localhost:3000
```

Then open: **http://localhost:3000**

---

## Summary

1. ✅ Double-click `backend/run.bat`
2. ✅ See server starting messages
3. ✅ Verify at http://localhost:5000/health
4. ✅ Open new terminal
5. ✅ Run `npm run dev`
6. ✅ Open http://localhost:3000

**Both windows must stay open!**

---

## Still Not Working?

Try running directly with full path:

```powershell
cd "c:\Users\Rahmat Fauzi\Documents\Rahmat Fauzi\Probation\SCOPS\palm-oil-grading-app\backend"
python -u app.py
```

Or check what Python is installed:
```powershell
python --version
where python
```
