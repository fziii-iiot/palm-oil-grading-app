"""
Test script to verify Python backend setup
Run this to check if all dependencies are installed correctly
"""

import sys

def test_imports():
    """Test if all required packages can be imported"""
    print("=" * 60)
    print("Testing Python Backend Dependencies")
    print("=" * 60)
    print()
    
    tests = [
        ("Flask", "flask"),
        ("Flask-CORS", "flask_cors"),
        ("TensorFlow", "tensorflow"),
        ("PIL (Pillow)", "PIL"),
        ("NumPy", "numpy"),
        ("Python-dotenv", "dotenv")
    ]
    
    failed = []
    
    for name, module in tests:
        try:
            mod = __import__(module)
            version = getattr(mod, '__version__', 'unknown')
            print(f"✅ {name:20s} - v{version}")
        except ImportError as e:
            print(f"❌ {name:20s} - NOT FOUND")
            failed.append(name)
    
    print()
    
    if failed:
        print(f"❌ Missing packages: {', '.join(failed)}")
        print()
        print("To install missing packages, run:")
        print("  pip install -r requirements.txt")
        return False
    else:
        print("✅ All dependencies installed correctly!")
        return True


def test_model_file():
    """Test if model file exists"""
    import os
    
    print()
    print("=" * 60)
    print("Checking Model File")
    print("=" * 60)
    print()
    
    model_path = "./models/palm-oil-model.tflite"
    
    if os.path.exists(model_path):
        size = os.path.getsize(model_path)
        print(f"✅ Model file found: {model_path}")
        print(f"   File size: {size:,} bytes ({size/1024/1024:.2f} MB)")
        return True
    else:
        print(f"❌ Model file not found: {model_path}")
        print()
        print("Please place your TFLite model file at:")
        print(f"  {os.path.abspath(model_path)}")
        return False


def test_model_loading():
    """Test if model can be loaded"""
    import tensorflow as tf
    import os
    
    print()
    print("=" * 60)
    print("Testing Model Loading")
    print("=" * 60)
    print()
    
    model_path = "./models/palm-oil-model.tflite"
    
    if not os.path.exists(model_path):
        print(f"⚠️  Skipping model loading test (file not found)")
        return False
    
    try:
        print(f"Loading model from: {model_path}")
        interpreter = tf.lite.Interpreter(model_path=model_path)
        interpreter.allocate_tensors()
        
        input_details = interpreter.get_input_details()
        output_details = interpreter.get_output_details()
        
        print(f"✅ Model loaded successfully!")
        print(f"   Input shape:  {input_details[0]['shape']}")
        print(f"   Output shape: {output_details[0]['shape']}")
        print(f"   Input dtype:  {input_details[0]['dtype']}")
        
        return True
        
    except Exception as e:
        print(f"❌ Failed to load model: {str(e)}")
        return False


def main():
    """Run all tests"""
    print()
    print("🌴 Palm Oil Grading - Backend Setup Test")
    print()
    
    # Test imports
    imports_ok = test_imports()
    
    if not imports_ok:
        sys.exit(1)
    
    # Test model file
    model_file_ok = test_model_file()
    
    # Test model loading (only if file exists)
    if model_file_ok:
        model_loading_ok = test_model_loading()
    else:
        model_loading_ok = False
    
    # Summary
    print()
    print("=" * 60)
    print("Test Summary")
    print("=" * 60)
    print()
    print(f"✅ Dependencies:  {'OK' if imports_ok else 'FAILED'}")
    print(f"{'✅' if model_file_ok else '❌'} Model file:    {'Found' if model_file_ok else 'Not found'}")
    print(f"{'✅' if model_loading_ok else '❌'} Model loading: {'OK' if model_loading_ok else 'FAILED' if model_file_ok else 'Skipped'}")
    print()
    
    if imports_ok and model_file_ok and model_loading_ok:
        print("🎉 Everything is ready! You can start the server with:")
        print("   python app.py")
    elif imports_ok and not model_file_ok:
        print("⚠️  Dependencies are OK, but model file is missing.")
        print("   Place your model file and try again.")
    else:
        print("❌ Setup incomplete. Please fix the issues above.")
    
    print()


if __name__ == '__main__':
    main()
