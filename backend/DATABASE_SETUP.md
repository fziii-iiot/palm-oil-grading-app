# Database Setup Guide

## Prerequisites
- PostgreSQL 12 or higher installed
- Python packages: psycopg2-binary, bcrypt

## Installation Steps

### 1. Install PostgreSQL
Download and install PostgreSQL from: https://www.postgresql.org/download/

### 2. Create Database

Open PostgreSQL command line (psql) or pgAdmin and run:

```sql
CREATE DATABASE palm_oil_grading;
```

### 3. Configure Environment Variables

Update the `.env` file in the `backend` folder with your PostgreSQL credentials:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=palm_oil_grading
DB_USER=postgres
DB_PASSWORD=your_actual_password
```

### 4. Install Python Dependencies

```bash
cd backend
pip install -r requirements.txt
```

New packages added:
- `psycopg2-binary==2.9.9` - PostgreSQL adapter
- `bcrypt==4.1.2` - Password hashing

### 5. Initialize Database

When you start the backend server, it will automatically:
- Create the required tables (`users`, `grading_history`)
- Create a default admin account

```bash
python app.py
```

### 6. Default Admin Account

After initialization, you can login with:
- **Username:** `admin`
- **Password:** `admin123`

**IMPORTANT:** Change this password in production!

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);
```

### Grading History Table
```sql
CREATE TABLE grading_history (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    image_url TEXT,
    predictions JSONB,
    top_class INTEGER,
    confidence FLOAT,
    inference_time INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Authentication

#### Login
```
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

Response:
```json
{
  "success": true,
  "user": {
    "id": 1,
    "username": "admin",
    "full_name": "Administrator",
    "role": "admin"
  },
  "message": "Login successful"
}
```

#### Register New User
```
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "username": "newuser",
  "password": "securepass123",
  "full_name": "John Doe"
}
```

## Creating Additional Users

### Via API
Use the registration endpoint with POST request.

### Via SQL
```sql
-- Note: Password should be hashed with bcrypt
INSERT INTO users (username, password_hash, full_name, role)
VALUES ('username', '$2b$12$...hashed_password...', 'Full Name', 'user');
```

### Via Python Script
Create a file `create_user.py`:

```python
from db import create_user

# Create new user
user_id = create_user(
    username='newuser',
    password='password123',
    full_name='New User',
    role='user'
)

if user_id:
    print(f"User created with ID: {user_id}")
else:
    print("Failed to create user")
```

Run:
```bash
python create_user.py
```

## Troubleshooting

### Connection Error
- Verify PostgreSQL is running
- Check credentials in `.env` file
- Ensure database exists: `CREATE DATABASE palm_oil_grading;`

### Permission Denied
- Verify PostgreSQL user has necessary permissions
- Grant privileges: `GRANT ALL PRIVILEGES ON DATABASE palm_oil_grading TO postgres;`

### Tables Not Created
- Check backend console for error messages
- Manually create tables using the SQL schema above
- Ensure user has CREATE TABLE permissions

## Security Notes

1. **Change Default Password:** Immediately change the admin password after first login
2. **Secret Key:** Update `SECRET_KEY` in `.env` for production
3. **Password Policy:** Implement strong password requirements
4. **HTTPS:** Use HTTPS in production
5. **Firewall:** Restrict database access to localhost or specific IPs

## Testing the Setup

1. Start backend server:
   ```bash
   cd backend
   python app.py
   ```

2. Check database initialization in console output

3. Test login via frontend or API:
   ```bash
   curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"username":"admin","password":"admin123"}'
   ```

4. Expected response: `{"success": true, "user": {...}}`
