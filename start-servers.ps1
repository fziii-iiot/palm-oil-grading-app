# Start both Python backend and Next.js frontend
# Run this from the project root

Write-Host "🚀 Starting Palm Oil Grading App..." -ForegroundColor Green
Write-Host ""

# Check if Python is installed
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✅ Python found: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Python not found! Please install Python 3.8 or higher" -ForegroundColor Red
    exit 1
}

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found! Please install Node.js" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "Starting Python Backend..." -ForegroundColor Yellow
Write-Host "=" * 60 -ForegroundColor Cyan

# Start Python backend in background
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; python app.py"

# Wait a bit for backend to start
Start-Sleep -Seconds 3

Write-Host ""
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "Starting Next.js Frontend..." -ForegroundColor Yellow
Write-Host "=" * 60 -ForegroundColor Cyan

# Start frontend (blocking)
npm run dev

Write-Host ""
Write-Host "✅ Servers started!" -ForegroundColor Green
Write-Host "   Backend: http://localhost:5000" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:3000" -ForegroundColor Cyan
