import psycopg2
from psycopg2.extras import RealDictCursor
import os
from dotenv import load_dotenv
import bcrypt

load_dotenv()

# Database configuration
DB_CONFIG = {
    'host': os.getenv('DB_HOST', 'localhost'),
    'port': os.getenv('DB_PORT', '5432'),
    'database': os.getenv('DB_NAME', 'palm_oil_grading'),
    'user': os.getenv('DB_USER', 'postgres'),
    'password': os.getenv('DB_PASSWORD', '')
}

def get_db_connection():
    """Create and return a database connection"""
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        return conn
    except psycopg2.Error as e:
        print(f"Error connecting to database: {e}", flush=True)
        raise

def init_database():
    """Initialize database tables if they don't exist"""
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # Create users table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                full_name VARCHAR(100),
                role VARCHAR(20) DEFAULT 'user',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                last_login TIMESTAMP
            )
        """)
        
        # Create grading_history table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS grading_history (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id),
                image_url TEXT,
                predictions JSONB,
                top_class INTEGER,
                confidence FLOAT,
                inference_time INTEGER,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        
        conn.commit()
        print("[Database] Tables initialized successfully", flush=True)
        
        # Create default admin user if not exists
        cursor.execute("SELECT COUNT(*) FROM users WHERE username = 'admin'")
        if cursor.fetchone()[0] == 0:
            # Default password: admin123
            password_hash = bcrypt.hashpw('admin123'.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
            cursor.execute(
                "INSERT INTO users (username, password_hash, full_name, role) VALUES (%s, %s, %s, %s)",
                ('admin', password_hash, 'Administrator', 'admin')
            )
            conn.commit()
            print("[Database] Default admin user created (username: admin, password: admin123)", flush=True)
        
        cursor.close()
        conn.close()
        
    except Exception as e:
        print(f"[Database] Error initializing database: {e}", flush=True)
        raise

def verify_user(username, password):
    """Verify user credentials"""
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        
        cursor.execute(
            "SELECT id, username, password_hash, full_name, role FROM users WHERE username = %s",
            (username,)
        )
        user = cursor.fetchone()
        
        if user and bcrypt.checkpw(password.encode('utf-8'), user['password_hash'].encode('utf-8')):
            # Update last login
            cursor.execute(
                "UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = %s",
                (user['id'],)
            )
            conn.commit()
            
            cursor.close()
            conn.close()
            
            return {
                'id': user['id'],
                'username': user['username'],
                'full_name': user['full_name'],
                'role': user['role']
            }
        
        cursor.close()
        conn.close()
        return None
        
    except Exception as e:
        print(f"[Database] Error verifying user: {e}", flush=True)
        return None

def create_user(username, password, full_name=None, role='user'):
    """Create a new user"""
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        
        cursor.execute(
            "INSERT INTO users (username, password_hash, full_name, role) VALUES (%s, %s, %s, %s) RETURNING id",
            (username, password_hash, full_name, role)
        )
        user_id = cursor.fetchone()[0]
        
        conn.commit()
        cursor.close()
        conn.close()
        
        return user_id
        
    except psycopg2.IntegrityError:
        print(f"[Database] Username '{username}' already exists", flush=True)
        return None
    except Exception as e:
        print(f"[Database] Error creating user: {e}", flush=True)
        return None
