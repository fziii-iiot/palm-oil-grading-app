"""
Test script for SQLAlchemy integration
Tests inference auto-save and history retrieval
"""

import requests
import base64
import json
from pathlib import Path

BASE_URL = "http://localhost:5000"

def test_auth():
    """Test user authentication"""
    print("\n" + "="*60)
    print("TEST 1: User Authentication")
    print("="*60)
    
    response = requests.post(
        f"{BASE_URL}/api/auth/login",
        json={
            "username": "admin",
            "password": "admin123"
        }
    )
    
    print(f"Status: {response.status_code}")
    data = response.json()
    print(f"Response: {json.dumps(data, indent=2)}")
    
    if data.get('success'):
        print("✅ Authentication successful")
        return data['user']['id']
    else:
        print("❌ Authentication failed")
        return None


def test_inference(user_id=None):
    """Test inference with auto-save"""
    print("\n" + "="*60)
    print("TEST 2: Inference with Auto-Save")
    print("="*60)
    
    # Create a small test image (1x1 pixel red PNG)
    test_image_base64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg=="
    
    payload = {
        "image": f"data:image/png;base64,{test_image_base64}"
    }
    
    if user_id:
        payload["user_id"] = user_id
        print(f"Including user_id: {user_id}")
    
    response = requests.post(
        f"{BASE_URL}/api/model/run",
        json=payload
    )
    
    print(f"Status: {response.status_code}")
    data = response.json()
    
    # Print relevant fields
    if data.get('success'):
        print("✅ Inference successful")
        print(f"   Label: {data['output']['label']}")
        print(f"   Confidence: {data['output']['confidence']:.2%}")
        print(f"   Inference Time: {data['inferenceTime']}ms")
        print(f"   Saved to DB: {data.get('saved', False)}")
        print(f"   History ID: {data.get('history_id', 'N/A')}")
        return data.get('history_id')
    else:
        print("❌ Inference failed")
        print(f"   Error: {data.get('error')}")
        return None


def test_get_all_history():
    """Test retrieving all history"""
    print("\n" + "="*60)
    print("TEST 3: Get All History")
    print("="*60)
    
    response = requests.get(f"{BASE_URL}/api/history?limit=5")
    
    print(f"Status: {response.status_code}")
    data = response.json()
    
    if data.get('success'):
        print(f"✅ Retrieved {data['count']} records")
        
        for i, record in enumerate(data['records'][:3], 1):
            print(f"\n   Record {i}:")
            print(f"      ID: {record['id']}")
            print(f"      User ID: {record.get('user_id', 'N/A')}")
            print(f"      Top Class: {record['top_class']}")
            print(f"      Confidence: {record['confidence']:.2%}")
            print(f"      Inference Time: {record['inference_time']}ms")
            print(f"      Created: {record['created_at']}")
    else:
        print("❌ Failed to retrieve history")
        print(f"   Error: {data.get('error')}")


def test_get_user_history(user_id):
    """Test retrieving user-specific history"""
    print("\n" + "="*60)
    print(f"TEST 4: Get User History (user_id={user_id})")
    print("="*60)
    
    response = requests.get(f"{BASE_URL}/api/history?user_id={user_id}&limit=5")
    
    print(f"Status: {response.status_code}")
    data = response.json()
    
    if data.get('success'):
        print(f"✅ Retrieved {data['count']} records for user {user_id}")
        
        for i, record in enumerate(data['records'][:3], 1):
            print(f"\n   Record {i}:")
            print(f"      ID: {record['id']}")
            print(f"      Top Class: {record['top_class']}")
            print(f"      Confidence: {record['confidence']:.2%}")
            
            if record.get('user'):
                print(f"      Username: {record['user']['username']}")
    else:
        print("❌ Failed to retrieve user history")
        print(f"   Error: {data.get('error')}")


def test_health():
    """Test health check"""
    print("\n" + "="*60)
    print("TEST 5: Health Check")
    print("="*60)
    
    response = requests.get(f"{BASE_URL}/health")
    
    print(f"Status: {response.status_code}")
    data = response.json()
    print(f"Response: {json.dumps(data, indent=2)}")
    
    if data.get('status') == 'healthy':
        print("✅ Backend is healthy")
    else:
        print("❌ Backend health check failed")


if __name__ == "__main__":
    print("\n" + "="*60)
    print("🧪 SQLAlchemy Integration Test Suite")
    print("="*60)
    print(f"Backend URL: {BASE_URL}")
    
    try:
        # Test 1: Authentication
        user_id = test_auth()
        
        # Test 2: Inference with auto-save
        history_id = test_inference(user_id)
        
        # Test 3: Get all history
        test_get_all_history()
        
        # Test 4: Get user-specific history
        if user_id:
            test_get_user_history(user_id)
        
        # Test 5: Health check
        test_health()
        
        print("\n" + "="*60)
        print("✅ All tests completed!")
        print("="*60)
        
    except requests.exceptions.ConnectionError:
        print("\n❌ ERROR: Cannot connect to backend")
        print("   Make sure the Flask server is running on port 5000")
        print("   Run: python app.py")
    except Exception as e:
        print(f"\n❌ ERROR: {e}")
        import traceback
        traceback.print_exc()
