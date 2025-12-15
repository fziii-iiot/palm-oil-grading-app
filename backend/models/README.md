# Place your converted TensorFlow.js model files here

## Directory Structure

Your model files should be organized as:

```
models/
└── palm-oil-model/
    ├── model.json           # Model architecture
    └── group1-shard1of1.bin # Model weights
```

## Model Conversion

If you have a `.tflite` model, convert it to TensorFlow.js format:

```bash
# Install converter
pip install tensorflowjs

# Convert from SavedModel
tensorflowjs_converter \
  --input_format=tf_saved_model \
  --output_format=tfjs_graph_model \
  ./your_saved_model \
  ./backend/models/palm-oil-model
```

## Alternative: Use .tflite Directly

For direct `.tflite` support, you can:

1. Use TensorFlow Lite runtime (C++ bindings)
2. Use Python subprocess to call TFLite interpreter
3. Convert to TensorFlow.js format (recommended)

The backend is configured to load from `./models/palm-oil-model/model.json`
