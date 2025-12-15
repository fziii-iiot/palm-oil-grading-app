/**
 * Backend Inference Module - Public API
 * 
 * Provides backend-based inference via API calls.
 * Replaces browser-based TensorFlow.js inference.
 * 
 * @module lib/tflite
 */

const INFERENCE_API = '/api/inference'

// Type definitions matching original structure
export interface InferenceResult {
  predictions: number[]
  topClass: number
  confidence: number
  inferenceTime: number
}

export interface InferenceOptions {
  inputSize?: number
  normalize?: boolean
}

/**
 * Run inference on image dataURL via backend API
 * @param imageDataUrl - Base64 encoded image
 * @param options - Optional inference configuration (ignored for backend)
 * @returns Inference result
 */
export async function runInference(
  imageDataUrl: string,
  options?: InferenceOptions
): Promise<InferenceResult> {
  const startTime = performance.now()

  const response = await fetch(INFERENCE_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image: imageDataUrl
    })
  })

  if (!response.ok) {
    throw new Error(`Backend inference failed: ${response.status}`)
  }

  const data = await response.json()
  const totalTime = Math.round(performance.now() - startTime)

  const predictions = data.predictions || [data.confidence || 0.5]
  const topClass = predictions.indexOf(Math.max(...predictions))

  return {
    predictions,
    topClass,
    confidence: data.confidence || predictions[topClass],
    inferenceTime: data.inferenceTime || totalTime
  }
}

/**
 * Run inference on ImageData via backend API
 * @param imageData - ImageData object
 * @param options - Optional inference configuration
 * @returns Inference result
 */
export async function runInferenceOnImageData(
  imageData: ImageData,
  options?: InferenceOptions
): Promise<InferenceResult> {
  // Convert ImageData to dataURL
  const canvas = document.createElement('canvas')
  canvas.width = imageData.width
  canvas.height = imageData.height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Failed to get canvas context')
  
  ctx.putImageData(imageData, 0, 0)
  const dataUrl = canvas.toDataURL('image/jpeg', 0.9)
  
  return runInference(dataUrl, options)
}

/**
 * Run batch inference on multiple images
 * @param imageDataUrls - Array of base64 encoded images
 * @param options - Optional inference configuration
 * @returns Array of inference results
 */
export async function runBatchInference(
  imageDataUrls: string[],
  options?: InferenceOptions
): Promise<InferenceResult[]> {
  return Promise.all(imageDataUrls.map(url => runInference(url, options)))
}

/**
 * Warmup model (no-op for backend)
 * @returns Promise resolving to true
 */
export async function warmupModel(): Promise<boolean> {
  console.log('[Backend] Model warmed up on server side')
  return true
}

/**
 * Load model (no-op for backend)
 */
export async function loadModel(): Promise<void> {
  console.log('[Backend] Model loaded on server side')
}

/**
 * Get model instance (always true for backend)
 */
export function getModelInstance(): boolean {
  return true
}

/**
 * Check if model is loaded (always true for backend)
 */
export function isModelLoaded(): boolean {
  return true
}

/**
 * Clear model cache (no-op for backend)
 */
export function clearModelCache(): void {
  console.log('[Backend] Model cache managed on server side')
}

// Re-export types for compatibility
export type PreprocessConfig = {
  inputSize?: number
  normalize?: boolean
}

export const DEFAULT_INPUT_SIZE = 224
export const DEFAULT_CHANNELS = 3

// Preprocessing utilities (simplified for backend)
export async function preprocessFromDataUrl(dataUrl: string): Promise<string> {
  return dataUrl
}

export function dataUrlToImageData(dataUrl: string): Promise<ImageData> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Failed to get canvas context'))
        return
      }
      ctx.drawImage(img, 0, 0)
      resolve(ctx.getImageData(0, 0, canvas.width, canvas.height))
    }
    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = dataUrl
  })
}
