/**
 * Model Service
 * 
 * Handles local on-device ML model execution using TensorFlow.js Node
 */

import * as tf from '@tensorflow/tfjs-node'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { preprocessImage } from '../utils/file.utils.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Model configuration
const MODEL_PATH = process.env.MODEL_PATH || './models/palm-oil-model.tflite'
const INPUT_SIZE = parseInt(process.env.INPUT_SIZE || '224')

// Class labels for palm oil bunch grading
const CLASS_LABELS = ['Unripe', 'Ripe', 'Overripe']

// Singleton model instance
let model = null

/**
 * Initialize and load the TFLite model
 * 
 * This function loads the model once at server startup
 */
export async function initializeModel() {
  if (model) {
    console.log('⚠️  Model already loaded')
    return model
  }

  try {
    // Resolve model path relative to project root
    const modelPath = join(__dirname, '..', '..', MODEL_PATH)
    
    console.log(`📂 Loading model from: ${modelPath}`)

    // Check if model file exists
    try {
      readFileSync(modelPath)
    } catch (err) {
      throw new Error(`Model file not found at ${modelPath}. Please place your palm-oil-model.tflite file in backend/models/`)
    }

    // Load TFLite model using TensorFlow.js Node
    // Note: For .tflite files, you need to convert to TensorFlow.js format first
    // or use @tensorflow/tfjs-tflite package (browser-only)
    
    // For now, we'll load as a regular TensorFlow.js model
    // If you have a .tflite file, convert it first:
    // tensorflowjs_converter --input_format=tf_saved_model --output_format=tfjs_graph_model ./saved_model ./tfjs_model
    
    try {
      // Try loading as GraphModel (converted from TFLite)
      model = await tf.loadGraphModel(`file://${modelPath.replace('.tflite', '/model.json')}`)
      console.log('✅ Loaded as GraphModel (converted format)')
    } catch {
      // If that fails, try loading as LayersModel
      try {
        model = await tf.loadLayersModel(`file://${modelPath.replace('.tflite', '/model.json')}`)
        console.log('✅ Loaded as LayersModel')
      } catch {
        throw new Error('Failed to load model. Please convert your .tflite model to TensorFlow.js format using tensorflowjs_converter')
      }
    }

    // Warmup inference
    console.log('🔥 Warming up model...')
    const dummyInput = tf.zeros([1, INPUT_SIZE, INPUT_SIZE, 3])
    await model.predict(dummyInput)
    dummyInput.dispose()
    console.log('✅ Model warmup complete')

    return model

  } catch (error) {
    console.error('❌ Model initialization failed:', error.message)
    throw error
  }
}

/**
 * Execute inference on image buffer
 * 
 * @param {Buffer} imageBuffer - Image data as buffer
 * @returns {Promise<Object>} Inference result
 */
export async function executeInference(imageBuffer) {
  if (!model) {
    throw new Error('Model not initialized. Server may still be starting up.')
  }

  let inputTensor = null
  let outputTensor = null

  try {
    // Preprocess image to tensor
    inputTensor = await preprocessImage(imageBuffer, INPUT_SIZE)
    
    console.log('📊 Input tensor shape:', inputTensor.shape)

    // Run inference
    const inferenceStart = Date.now()
    outputTensor = await model.predict(inputTensor)
    const inferenceMs = Date.now() - inferenceStart

    console.log(`⚡ Model inference: ${inferenceMs}ms`)
    console.log('📊 Output tensor shape:', outputTensor.shape)

    // Get predictions as array
    const predictions = await outputTensor.data()
    const predictionsArray = Array.from(predictions)

    // Find top class
    const topClassIndex = predictionsArray.indexOf(Math.max(...predictionsArray))
    const confidence = predictionsArray[topClassIndex]
    const label = CLASS_LABELS[topClassIndex] || `Class ${topClassIndex}`

    console.log(`🎯 Prediction: ${label} (${(confidence * 100).toFixed(2)}%)`)

    return {
      predictions: predictionsArray,
      topClass: topClassIndex,
      confidence: confidence,
      label: label,
      allClasses: CLASS_LABELS.map((name, idx) => ({
        name,
        confidence: predictionsArray[idx] || 0
      }))
    }

  } catch (error) {
    console.error('❌ Inference execution failed:', error)
    throw new Error(`Inference failed: ${error.message}`)
  } finally {
    // Clean up tensors to prevent memory leaks
    if (inputTensor) {
      inputTensor.dispose()
    }
    if (outputTensor) {
      outputTensor.dispose()
    }
  }
}

/**
 * Get model status
 * 
 * @returns {Object} Model status information
 */
export function getModelStatus() {
  return {
    loaded: model !== null,
    modelPath: MODEL_PATH,
    inputSize: INPUT_SIZE,
    classLabels: CLASS_LABELS
  }
}
