@echo off
echo ========================================
echo Installing Database Dependencies
echo ========================================
echo.

echo Checking Python installation...
python --version
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    pause
    exit /b 1
)

echo.
echo Installing required packages...
echo.

pip install psycopg2-binary==2.9.9
pip install bcrypt==4.1.2

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Install PostgreSQL if not already installed
echo 2. Create database: palm_oil_grading
echo 3. Update .env file with your database credentials
echo 4. Run: python app.py
echo.
echo See DATABASE_SETUP.md for detailed instructions
echo.
pause
