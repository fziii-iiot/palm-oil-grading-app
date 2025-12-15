/**
 * TFLite Model Loader
 * 
 * Handles loading and caching of the TFLite model using TensorFlow.js.
 * Ensures browser-only execution (no SSR).
 * 
 * @module lib/tflite/loadModel
 */

import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-backend-webgl'

// Model configuration
const MODEL_PATH = '/models/palm-oil-model.tflite'

// Singleton pattern for model caching
let modelInstance: tf.GraphModel | null = null
let isLoading = false
let loadPromise: Promise<tf.GraphModel> | null = null

/**
 * Initialize TensorFlow.js backend
 * Must be called before loading the model
 */
async function initializeTFJS(): Promise<void> {
  if (typeof window === 'undefined') {
    throw new Error('TensorFlow.js can only be initialized in browser context')
  }

  try {
    // Wait for TensorFlow.js to be ready
    await tf.ready()
    console.log('[TFLite] TensorFlow.js backend ready:', tf.getBackend())
  } catch (error) {
    console.error('[TFLite] Failed to initialize TensorFlow.js:', error)
    throw error
  }
}

/**
 * Load TFLite model with caching
 * 
 * This function:
 * - Returns cached model if already loaded
 * - Prevents duplicate loading requests
 * - Initializes TensorFlow.js backend if needed
 * 
 * Note: You need to convert your .tflite model to TensorFlow.js format
 * using tensorflowjs_converter or use the GraphModel format directly.
 * 
 * @returns Promise resolving to loaded TensorFlow.js model
 * @throws Error if model fails to load or not in browser context
 */
export async function loadModel(): Promise<tf.GraphModel> {
  // Browser-only guard
  if (typeof window === 'undefined') {
    throw new Error('Model loading can only occur in browser context')
  }

  // Return cached model
  if (modelInstance) {
    console.log('[TFLite] Using cached model instance')
    return modelInstance
  }

  // Return in-progress load promise
  if (isLoading && loadPromise) {
    console.log('[TFLite] Model loading in progress, waiting...')
    return loadPromise
  }

  // Start new load
  isLoading = true
  loadPromise = (async () => {
    try {
      console.log('[TFLite] Initializing TensorFlow.js...')
      await initializeTFJS()

      console.log('[TFLite] Loading model from:', MODEL_PATH)
      const startTime = performance.now()

      // Load as GraphModel (works with converted TFLite models)
      const model = await tf.loadGraphModel(MODEL_PATH)

      const loadTime = (performance.now() - startTime).toFixed(0)
      console.log(`[TFLite] Model loaded successfully in ${loadTime}ms`)
      
      // Log model details
      console.log('[TFLite] Model inputs:', model.inputs)
      console.log('[TFLite] Model outputs:', model.outputs)

      modelInstance = model
      return model
    } catch (error) {
      console.error('[TFLite] Model loading failed:', error)
      console.error('[TFLite] Make sure you have converted your .tflite model to TensorFlow.js format')
      console.error('[TFLite] Use: tensorflowjs_converter --input_format=tf_saved_model --output_format=tfjs_graph_model')
      modelInstance = null
      throw new Error(`Failed to load model: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      isLoading = false
      loadPromise = null
    }
  })()

  return loadPromise
}

/**
 * Get cached model instance without loading
 * Useful for checking if model is already loaded
 * 
 * @returns Model instance or null if not loaded
 */
export function getModelInstance(): tf.GraphModel | null {
  return modelInstance
}

/**
 * Check if model is currently loaded
 */
export function isModelLoaded(): boolean {
  return modelInstance !== null
}

/**
 * Clear model cache
 * Call this if you need to force reload the model
 */
export function clearModelCache(): void {
  modelInstance = null
  console.log('[TFLite] Model cache cleared')
}
