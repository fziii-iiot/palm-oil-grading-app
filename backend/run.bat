@echo off
cls
echo ============================================================
echo Starting Palm Oil Grading Backend Server
echo ============================================================
echo.

cd /d "%~dp0"

echo Checking Python installation...
python --version
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python 3.8 or higher
    pause
    exit /b 1
)
echo.

echo Starting Flask server...
echo.
python -u app.py

if errorlevel 1 (
    echo.
    echo ERROR: Server failed to start
    echo Check the error messages above
    pause
    exit /b 1
)

pause
