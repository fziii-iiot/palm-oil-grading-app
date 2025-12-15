# Palm Oil Grading App

AI-powered mobile application for palm fruit bunch detection and ripeness classification using YOLOv8 and MobileNetV3.

## Features

- **Real-time Detection**: Detects multiple palm fruit bunches with bounding boxes
- **Individual Classification**: Classifies each bunch's ripeness (Unripe, Ripe, Over-ripe)
- **Visual Feedback**: Color-coded bounding boxes with confidence scores
- **User Authentication**: Secure login system with PostgreSQL
- **History Tracking**: Saves grading results with timestamps
- **Mobile-First**: Responsive design optimized for field use

## Tech Stack

**Frontend**
- Next.js 16 (React 19)
- TypeScript
- Tailwind CSS
- Camera API integration

**Backend**
- Python Flask 3.0
- TensorFlow Lite 2.15
- PostgreSQL + SQLAlchemy
- PIL/Pillow for image processing

**Models**
- Detection: YOLOv8 (`best_float32.tflite`) - 640x640 input
- Classification: MobileNetV3 (`classifier_float32.tflite`) - 224x224 input

## Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- PostgreSQL 12+

### Installation

1. **Clone repository**
```bash
git clone <repository-url>
cd palm-oil-grading-app
```

2. **Frontend setup**
```bash
npm install
npm run dev
```

3. **Backend setup**
```bash
cd backend
pip install -r requirements.txt
```

4. **Configure database**
Create `.env` in backend folder:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=palm_grading
DB_USER=postgres
DB_PASSWORD=your_password
SECRET_KEY=your_secret_key
```

5. **Start servers**
```bash
# Terminal 1 - Frontend (from root)
npm run dev

# Terminal 2 - Backend (from backend folder)
cd backend
.\run.bat        # Windows
python app.py    # Linux/Mac
```

6. **Access application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Default login: admin / admin123

## Project Structure

```
├── app/                    # Next.js pages
│   ├── api/               # API routes (middleware)
│   ├── capture/           # Camera capture page
│   ├── history/           # Results history
│   └── profile/           # User profile
├── components/            # React components
│   └── pages/            # Page-specific components
├── backend/              # Python Flask backend
│   ├── app.py           # Main Flask application
│   ├── models.py        # SQLAlchemy models
│   ├── db.py            # Database utilities
│   └── models/          # TFLite model files
└── example/             # Reference implementation

```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Model Inference
- `POST /api/model/run` - Run detection & classification
- `GET /api/model/status` - Check model status

### History
- `GET /api/history` - Get user's grading history
- `GET /api/history/all` - Get all history (admin)

## Usage Flow

1. **Login** → Enter credentials
2. **Capture** → Take photo of palm fruit bunches
3. **Process** → Backend detects bunches and classifies ripeness
4. **Results** → View annotated image with:
   - Bounding boxes (color-coded by ripeness)
   - Individual classification per bunch
   - Total bunch count
   - Classification summary
5. **Save** → Store results to history

## Model Details

**Detection Model** (`best_float32.tflite`)
- Architecture: YOLOv8 single-class detector
- Input: 640x640x3 RGB
- Output: [1, 5, 8400] (x, y, w, h, confidence)
- Confidence threshold: 0.25
- NMS IoU threshold: 0.45

**Classification Model** (`classifier_float32.tflite`)
- Architecture: MobileNetV3
- Input: 224x224x3 RGB
- Output: [1, 3] (unripe, ripe, over_ripe)
- Classes:
  - Unripe (Green)
  - Ripe (Orange)
  - Over-ripe (Red)

## Development

**Add new features:**
1. Frontend components → `components/pages/`
2. Backend routes → `backend/app.py`
3. Database models → `backend/models.py`

**Update models:**
1. Place new `.tflite` files in `backend/models/`
2. Update paths in `backend/app.py`:
   - `DETECTION_MODEL_PATH`
   - `CLASSIFICATION_MODEL_PATH`
3. Update `CLASS_LABELS` if classes change

## Troubleshooting

**Backend won't start:**
- Check Python version: `python --version` (need 3.9+)
- Install dependencies: `pip install -r requirements.txt`
- Verify PostgreSQL is running

**Models not loading:**
- Check model files exist in `backend/models/`
- Verify file names match configuration
- Check console for TensorFlow errors

**No detections showing:**
- Check browser console (F12) for errors
- Verify backend is running on port 5000
- Check camera permissions are granted

**Database errors:**
- Verify PostgreSQL connection in `.env`
- Run migrations: Backend auto-creates tables on first run
- Check user has database permissions

## License

Proprietary - SCOPS Palm Oil Grading System

## Contributors

Development Team - SCOPS Probation Project