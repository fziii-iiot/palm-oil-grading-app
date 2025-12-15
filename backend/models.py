"""
SQLAlchemy ORM Models for Palm Oil Grading System
"""

from datetime import datetime
from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.dialects.postgresql import JSONB
import os
from dotenv import load_dotenv

load_dotenv()

Base = declarative_base()

# Database connection string
DATABASE_URL = f"postgresql://{os.getenv('DB_USER', 'postgres')}:{os.getenv('DB_PASSWORD', '')}@{os.getenv('DB_HOST', 'localhost')}:{os.getenv('DB_PORT', '5432')}/{os.getenv('DB_NAME', 'palm_oil_grading')}"

# Create engine
engine = create_engine(DATABASE_URL, echo=False)

# Session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class User(Base):
    """User model for authentication"""
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=False)
    full_name = Column(String(100))
    role = Column(String(20), default='user')
    created_at = Column(DateTime, default=datetime.utcnow)
    last_login = Column(DateTime)
    
    # Relationship
    grading_records = relationship('GradingHistory', back_populates='user', cascade='all, delete-orphan')
    
    def __repr__(self):
        return f"<User(id={self.id}, username='{self.username}', role='{self.role}')>"
    
    def to_dict(self):
        """Convert user object to dictionary"""
        return {
            'id': self.id,
            'username': self.username,
            'full_name': self.full_name,
            'role': self.role,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'last_login': self.last_login.isoformat() if self.last_login else None
        }


class GradingHistory(Base):
    """Grading history model for storing inference results"""
    __tablename__ = 'grading_history'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id', ondelete='SET NULL'), nullable=True)
    image_url = Column(Text)
    predictions = Column(JSONB)
    top_class = Column(Integer)
    confidence = Column(Float)
    inference_time = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    
    # Relationship
    user = relationship('User', back_populates='grading_records')
    
    def __repr__(self):
        return f"<GradingHistory(id={self.id}, user_id={self.user_id}, top_class={self.top_class}, confidence={self.confidence})>"
    
    def to_dict(self):
        """Convert grading history object to dictionary"""
        return {
            'id': self.id,
            'user_id': self.user_id,
            'image_url': self.image_url,
            'predictions': self.predictions,
            'top_class': self.top_class,
            'confidence': self.confidence,
            'inference_time': self.inference_time,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'user': self.user.to_dict() if self.user else None
        }


def init_db():
    """Initialize database tables"""
    try:
        Base.metadata.create_all(bind=engine)
        print("[SQLAlchemy] Database tables created/verified successfully", flush=True)
        return True
    except Exception as e:
        print(f"[SQLAlchemy] Error initializing database: {e}", flush=True)
        return False


def get_db_session():
    """Get a new database session"""
    return SessionLocal()


def save_grading_history(session, data_dict):
    """
    Save grading history to database
    
    Args:
        session: SQLAlchemy session object
        data_dict: Dictionary containing grading data
            {
                'user_id': int (optional),
                'image_url': str,
                'predictions': list or dict,
                'top_class': int,
                'confidence': float,
                'inference_time': int
            }
    
    Returns:
        GradingHistory object if successful, None otherwise
    """
    try:
        # Create new grading history record
        grading_record = GradingHistory(
            user_id=data_dict.get('user_id'),
            image_url=data_dict.get('image_url', ''),
            predictions=data_dict.get('predictions', []),
            top_class=data_dict.get('top_class', 0),
            confidence=data_dict.get('confidence', 0.0),
            inference_time=data_dict.get('inference_time', 0)
        )
        
        session.add(grading_record)
        session.commit()
        session.refresh(grading_record)
        
        print(f"[Database] Grading history saved: ID={grading_record.id}, user_id={grading_record.user_id}, confidence={grading_record.confidence:.2%}", flush=True)
        
        return grading_record
        
    except Exception as e:
        session.rollback()
        print(f"[Database] Error saving grading history: {e}", flush=True)
        return None


def get_user_grading_history(session, user_id, limit=100):
    """
    Get grading history for a specific user
    
    Args:
        session: SQLAlchemy session object
        user_id: User ID
        limit: Maximum number of records to return
    
    Returns:
        List of GradingHistory objects
    """
    try:
        records = session.query(GradingHistory)\
            .filter(GradingHistory.user_id == user_id)\
            .order_by(GradingHistory.created_at.desc())\
            .limit(limit)\
            .all()
        
        return records
        
    except Exception as e:
        print(f"[Database] Error fetching grading history: {e}", flush=True)
        return []


def get_all_grading_history(session, limit=100):
    """
    Get all grading history records
    
    Args:
        session: SQLAlchemy session object
        limit: Maximum number of records to return
    
    Returns:
        List of GradingHistory objects
    """
    try:
        records = session.query(GradingHistory)\
            .order_by(GradingHistory.created_at.desc())\
            .limit(limit)\
            .all()
        
        return records
        
    except Exception as e:
        print(f"[Database] Error fetching all grading history: {e}", flush=True)
        return []
