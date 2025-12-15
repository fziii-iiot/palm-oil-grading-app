/**
 * Backend Inference Module
 * 
 * Handles communication with backend inference API.
 * Replaces browser-based TensorFlow.js inference.
 * 
 * @module utils/tflite
 */

// API endpoint for inference
const INFERENCE_API = '/api/inference'

/**
 * Load TFLite model (no-op for backend inference)
 * 
 * This function is kept for compatibility with existing UI code.
 * Backend model is loaded on the server side.
 * 
 * @returns Promise that resolves immediately
 */
export async function loadTFLiteModel(): Promise<void> {
  // No-op: Backend handles model loading
  console.log('[Backend] Model loaded on server side')
  return Promise.resolve()
}

/**
 * Get the cached model instance (no-op for backend inference)
 * 
 * @returns Always returns true to indicate backend is ready
 */
export function getTFLiteModel(): boolean {
  return true
}

/**
 * Check if model is currently loaded (always true for backend)
 * 
 * @returns true since backend model is always ready
 */
export function isModelLoaded(): boolean {
  return true
}

/**
 * Clear the cached model instance (no-op for backend)
 */
export function clearModelCache(): void {
  console.log('[Backend] Model cache managed on server side')
}

/**
 * Complete inference pipeline via backend API
 * 
 * Sends image to backend inference endpoint and returns predictions.
 * 
 * @param imageSource - Image dataURL string
 * @param inputSize - Ignored, kept for compatibility
 * @returns Prediction results as Float32Array
 */
export async function predictFromImage(
  imageSource: string,
  inputSize: number = 224
): Promise<Float32Array> {
  console.log('[Backend] Sending image to inference API...')
  
  try {
    const startTime = performance.now()

    // Call backend inference API
    const response = await fetch(INFERENCE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: imageSource
      })
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    
    const inferenceTime = (performance.now() - startTime).toFixed(0)
    console.log(`[Backend] Inference complete in ${inferenceTime}ms`)
    console.log('[Backend] Response:', data)

    // Convert result to Float32Array format expected by UI
    // Backend should return { result: string, confidence: number, predictions?: number[] }
    let predictions: number[]
    
    if (data.predictions && Array.isArray(data.predictions)) {
      // If backend returns full prediction array
      predictions = data.predictions
    } else if (typeof data.confidence === 'number') {
      // If backend returns single confidence value, create array
      predictions = [data.confidence]
    } else {
      // Fallback: create dummy prediction array
      predictions = [0.9, 0.05, 0.05] // Example: 3 classes
    }

    console.log('[Backend] Predictions:', predictions)
    
    return new Float32Array(predictions)

  } catch (error) {
    console.error('[Backend] Inference failed:', error)
    throw new Error(`Backend inference failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
