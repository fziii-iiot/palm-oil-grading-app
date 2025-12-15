# SQLAlchemy Integration Guide

## Overview

Your Flask backend now uses **SQLAlchemy ORM** for automatic inference history saving. Every time `/api/model/run` is called, the result is automatically saved to the `grading_history` table in PostgreSQL.

## Architecture

### Database Layers

1. **psycopg2 (Legacy)** - `db.py`
   - User authentication (`users` table)
   - Direct SQL queries with psycopg2
   
2. **SQLAlchemy ORM** - `models.py`
   - Grading history management
   - Object-relational mapping
   - Automatic relationship handling

### Why Both?

- **psycopg2**: Already working for authentication, no need to rewrite
- **SQLAlchemy**: Modern ORM for new features (history tracking)

## Files Structure

```
backend/
├── app.py              # Main Flask app (updated)
├── db.py               # Legacy auth functions (unchanged)
├── models.py           # NEW - SQLAlchemy ORM models
├── requirements.txt    # Updated with sqlalchemy
└── .env               # Database credentials
```

## Installation

### 1. Install SQLAlchemy

```bash
pip install sqlalchemy==2.0.23
```

Or install all dependencies:

```bash
cd backend
pip install -r requirements.txt
```

### 2. Database Connection

No changes needed in `.env` - uses same PostgreSQL credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=palm_oil_grading
DB_USER=postgres
DB_PASSWORD=your_password
```

### 3. Start Backend

```bash
python app.py
```

**Console Output:**
```
🗄️  Initializing database (psycopg2)...
✅ Database initialized successfully!
🗄️  Initializing SQLAlchemy ORM tables...
✅ SQLAlchemy tables created/verified!
🔄 Loading TFLite model...
✅ Model loaded successfully!
🚀 Starting server on port 5000...
📍 Inference endpoint: http://localhost:5000/api/model/run
📍 History endpoint: http://localhost:5000/api/history
```

## API Endpoints

### 1. Run Inference (Auto-Save)

**Endpoint:** `POST /api/model/run`

**Request:**
```json
{
  "image": "data:image/jpeg;base64,/9j/4AAQ...",
  "user_id": 1
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
    "inferenceTime": 123
  },
  "inferenceTime": 123,
  "saved": true,
  "history_id": 42
}
```

**What Happens:**
1. ✅ Image received and preprocessed
2. ✅ TFLite model runs inference
3. ✅ **Automatically saved to database**
4. ✅ Returns result + history ID

### 2. Get Grading History

**Endpoint:** `GET /api/history`

**Query Parameters:**
- `user_id` (optional) - Filter by user
- `limit` (optional) - Max records (default: 100)

**Examples:**

Get all history:
```bash
curl http://localhost:5000/api/history
```

Get specific user's history:
```bash
curl http://localhost:5000/api/history?user_id=1
```

Get last 10 records:
```bash
curl http://localhost:5000/api/history?limit=10
```

**Response:**
```json
{
  "success": true,
  "records": [
    {
      "id": 42,
      "user_id": 1,
      "image_url": "data:image/jpeg;base64...",
      "predictions": [0.15, 0.80, 0.05],
      "top_class": 1,
      "confidence": 0.80,
      "inference_time": 123,
      "created_at": "2025-11-23T10:30:00",
      "user": {
        "id": 1,
        "username": "admin",
        "full_name": "Administrator"
      }
    }
  ],
  "count": 1
}
```

## SQLAlchemy Models

### User Model

```python
class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True)
    password_hash = Column(String(255))
    full_name = Column(String(100))
    role = Column(String(20), default='user')
    created_at = Column(DateTime)
    last_login = Column(DateTime)
    
    # Relationship
    grading_records = relationship('GradingHistory')
```

### GradingHistory Model

```python
class GradingHistory(Base):
    __tablename__ = 'grading_history'
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    image_url = Column(Text)
    predictions = Column(JSONB)  # PostgreSQL JSONB type
    top_class = Column(Integer)
    confidence = Column(Float)
    inference_time = Column(Integer)
    created_at = Column(DateTime)
    
    # Relationship
    user = relationship('User')
```

## Helper Functions

### `save_grading_history(session, data_dict)`

Saves inference result to database.

**Usage in app.py:**

```python
from models import get_db_session, save_grading_history

db_session = get_db_session()

grading_data = {
    'user_id': 1,
    'image_url': 'base64_image_data',
    'predictions': [0.15, 0.80, 0.05],
    'top_class': 1,
    'confidence': 0.80,
    'inference_time': 123
}

grading_record = save_grading_history(db_session, grading_data)
print(f"Saved with ID: {grading_record.id}")

db_session.close()
```

### `get_user_grading_history(session, user_id, limit=100)`

Retrieve history for specific user.

```python
db_session = get_db_session()
records = get_user_grading_history(db_session, user_id=1, limit=10)

for record in records:
    print(f"ID: {record.id}, Confidence: {record.confidence}")

db_session.close()
```

### `get_all_grading_history(session, limit=100)`

Retrieve all history records.

```python
db_session = get_db_session()
records = get_all_grading_history(db_session, limit=50)
db_session.close()
```

## Database Schema

Both `psycopg2` and `SQLAlchemy` use the **same tables**:

```sql
-- Created by psycopg2 (db.py)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Created by SQLAlchemy (models.py)
CREATE TABLE grading_history (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    image_url TEXT,
    predictions JSONB,
    top_class INTEGER,
    confidence FLOAT,
    inference_time INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Testing

### Test Inference with Auto-Save

**PowerShell:**

```powershell
$base64Image = [Convert]::ToBase64String([IO.File]::ReadAllBytes("test.jpg"))

$body = @{
    image = "data:image/jpeg;base64,$base64Image"
    user_id = 1
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/model/run" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body
```

**cURL:**

```bash
curl -X POST http://localhost:5000/api/model/run \
  -H "Content-Type: application/json" \
  -d '{
    "image": "data:image/jpeg;base64,/9j/4AAQ...",
    "user_id": 1
  }'
```

### Test History Retrieval

```bash
# Get all history
curl http://localhost:5000/api/history

# Get user's history
curl http://localhost:5000/api/history?user_id=1&limit=10
```

## Frontend Integration

### Update inference API call to include user_id

**Before:**
```javascript
const response = await fetch('/api/inference', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ image: capturedImage })
})
```

**After:**
```javascript
// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user') || '{}')

const response = await fetch('/api/inference', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    image: capturedImage,
    user_id: user.id  // Add user_id for tracking
  })
})

const data = await response.json()
console.log(`Saved to database with ID: ${data.history_id}`)
```

## Troubleshooting

### "No module named 'sqlalchemy'"

```bash
pip install sqlalchemy==2.0.23
```

### "table grading_history already exists"

This is OK! SQLAlchemy verifies existing tables. Both `psycopg2` and SQLAlchemy can coexist.

### History not saving

**Check console output:**
```
⚠️  Database save failed: connection refused
```

**Solutions:**
1. Verify PostgreSQL is running
2. Check `.env` credentials
3. Test connection: `psql -U postgres -d palm_oil_grading`

### Cannot query history

**Error:** `relation "grading_history" does not exist`

**Solution:**
```bash
# Restart backend to create tables
python app.py
```

Look for:
```
✅ SQLAlchemy tables created/verified!
```

## Advanced Usage

### Custom Query Example

```python
from models import get_db_session, GradingHistory, User
from sqlalchemy import func

db_session = get_db_session()

# Get average confidence by user
results = db_session.query(
    User.username,
    func.avg(GradingHistory.confidence).label('avg_confidence'),
    func.count(GradingHistory.id).label('total_gradings')
).join(GradingHistory).group_by(User.username).all()

for username, avg_conf, total in results:
    print(f"{username}: {avg_conf:.2%} confidence ({total} gradings)")

db_session.close()
```

### Add Custom Endpoint

```python
@app.route('/api/stats', methods=['GET'])
def get_statistics():
    """Get grading statistics"""
    db_session = get_db_session()
    
    try:
        total_gradings = db_session.query(GradingHistory).count()
        avg_confidence = db_session.query(func.avg(GradingHistory.confidence)).scalar()
        
        return jsonify({
            'success': True,
            'total_gradings': total_gradings,
            'average_confidence': float(avg_confidence) if avg_confidence else 0
        })
    finally:
        db_session.close()
```

## Best Practices

✅ **Always close sessions:**
```python
db_session = get_db_session()
try:
    # Your code
finally:
    db_session.close()
```

✅ **Handle errors gracefully:**
```python
try:
    save_grading_history(db_session, data)
except Exception as e:
    db_session.rollback()
    print(f"Error: {e}")
```

✅ **Use transactions for multiple operations:**
```python
try:
    record1 = save_grading_history(db_session, data1)
    record2 = save_grading_history(db_session, data2)
    db_session.commit()
except:
    db_session.rollback()
```

## Summary

🎯 **What's Working:**
- ✅ Automatic inference result saving
- ✅ SQLAlchemy ORM integration
- ✅ History retrieval endpoints
- ✅ User relationship tracking
- ✅ JSONB predictions storage
- ✅ Backward compatible with existing auth

🚀 **Next Steps:**
1. Update frontend to include `user_id` in inference requests
2. Test history retrieval in your mobile app
3. Add history display page in frontend
4. Implement statistics/analytics endpoints
