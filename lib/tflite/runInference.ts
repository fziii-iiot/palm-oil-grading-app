/**
 * TFLite Inference Pipeline
 * 
 * End-to-end inference orchestration from image capture to predictions.
 * Handles model loading, preprocessing, inference, and result processing.
 * 
 * @module lib/tflite/runInference
 */

import * as tf from '@tensorflow/tfjs'
import { loadModel } from './loadModel'
import { preprocessFromDataUrl, preprocessImage, PreprocessConfig } from './preprocess'

export interface InferenceResult {
  predictions: number[]
  inferenceTimeMs: number
  modelLoaded: boolean
}

export interface InferenceOptions extends PreprocessConfig {
  logDetails?: boolean
}

/**
 * Run complete inference pipeline on captured image
 * 
 * This is the main entry point for inference. It handles:
 * - Model loading (with caching)
 * - Image preprocessing
 * - Model execution
 * - Result extraction
 * - Memory cleanup
 * 
 * @param dataUrl - Base64 encoded image from camera
 * @param options - Inference options and preprocessing config
 * @returns Inference results with predictions and timing
 * 
 * @example
 * ```ts
 * const result = await runInference(capturedImageDataUrl)
 * console.log('Predictions:', result.predictions)
 * console.log('Inference time:', result.inferenceTimeMs, 'ms')
 * ```
 */
export async function runInference(
  dataUrl: string,
  options: InferenceOptions = {}
): Promise<InferenceResult> {
  const { logDetails = true, ...preprocessConfig } = options

  if (typeof window === 'undefined') {
    throw new Error('Inference can only run in browser context')
  }

  let inputTensor: tf.Tensor4D | null = null
  let outputTensor: tf.Tensor | null = null

  try {
    if (logDetails) {
      console.log('[Inference] Starting inference pipeline...')
    }

    const startTime = performance.now()

    // Step 1: Load model (cached after first load)
    if (logDetails) {
      console.log('[Inference] Loading model...')
    }
    const model = await loadModel()

    // Step 2: Preprocess image
    if (logDetails) {
      console.log('[Inference] Preprocessing image...')
    }
    inputTensor = await preprocessFromDataUrl(dataUrl, preprocessConfig)

    // Step 3: Run inference
    if (logDetails) {
      console.log('[Inference] Running model prediction...')
      console.time('[Inference] Model execution')
    }

    const output = model.predict(inputTensor as any)
    
    // Handle different output types from TFLite
    outputTensor = (Array.isArray(output) ? output[0] : output) as unknown as tf.Tensor

    if (logDetails) {
      console.timeEnd('[Inference] Model execution')
    }

    // Step 4: Extract predictions
    if (!outputTensor) {
      throw new Error('Model prediction returned no output')
    }

    const predictionsData = await outputTensor.data()
    const predictions = Array.from(predictionsData)

    const inferenceTimeMs = Math.round(performance.now() - startTime)

    if (logDetails) {
      console.log('[Inference] Complete!')
      console.log('[Inference] Output shape:', outputTensor.shape)
      console.log('[Inference] Predictions:', predictions)
      console.log('[Inference] Total time:', inferenceTimeMs, 'ms')
    }

    return {
      predictions,
      inferenceTimeMs,
      modelLoaded: true
    }
  } catch (error) {
    console.error('[Inference] Failed:', error)
    throw new Error(
      `Inference failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    )
  } finally {
    // Critical: Clean up tensors to prevent memory leaks
    if (inputTensor) {
      inputTensor.dispose()
    }
    if (outputTensor) {
      outputTensor.dispose()
    }
  }
}

/**
 * Run inference on raw ImageData
 * Alternative entry point for direct ImageData input
 * 
 * @param imageData - Raw image data from canvas
 * @param options - Inference options
 * @returns Inference results
 */
export async function runInferenceOnImageData(
  imageData: ImageData,
  options: InferenceOptions = {}
): Promise<InferenceResult> {
  const { logDetails = true, ...preprocessConfig } = options

  if (typeof window === 'undefined') {
    throw new Error('Inference can only run in browser context')
  }

  let inputTensor: tf.Tensor4D | null = null
  let outputTensor: tf.Tensor | null = null

  try {
    if (logDetails) {
      console.log('[Inference] Starting inference pipeline...')
    }

    const startTime = performance.now()

    // Load model
    const model = await loadModel()

    // Preprocess image
    inputTensor = preprocessImage(imageData, preprocessConfig)

    // Run inference
    if (logDetails) {
      console.time('[Inference] Model execution')
    }

    const output = model.predict(inputTensor as any)
    outputTensor = (Array.isArray(output) ? output[0] : output) as unknown as tf.Tensor

    if (logDetails) {
      console.timeEnd('[Inference] Model execution')
    }

    // Extract predictions
    if (!outputTensor) {
      throw new Error('Model prediction returned no output')
    }

    const predictionsData = await outputTensor.data()
    const predictions = Array.from(predictionsData)

    const inferenceTimeMs = Math.round(performance.now() - startTime)

    if (logDetails) {
      console.log('[Inference] Complete!')
      console.log('[Inference] Predictions:', predictions)
      console.log('[Inference] Total time:', inferenceTimeMs, 'ms')
    }

    return {
      predictions,
      inferenceTimeMs,
      modelLoaded: true
    }
  } catch (error) {
    console.error('[Inference] Failed:', error)
    throw new Error(
      `Inference failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    )
  } finally {
    if (inputTensor) {
      inputTensor.dispose()
    }
    if (outputTensor) {
      outputTensor.dispose()
    }
  }
}

/**
 * Batch inference on multiple images
 * Useful for processing multiple captures efficiently
 * 
 * @param dataUrls - Array of base64 encoded images
 * @param options - Inference options
 * @returns Array of inference results
 */
export async function runBatchInference(
  dataUrls: string[],
  options: InferenceOptions = {}
): Promise<InferenceResult[]> {
  const results: InferenceResult[] = []

  // Load model once before batch
  await loadModel()

  for (const dataUrl of dataUrls) {
    try {
      const result = await runInference(dataUrl, {
        ...options,
        logDetails: false // Reduce console noise for batch
      })
      results.push(result)
    } catch (error) {
      console.error('[Batch Inference] Failed for image:', error)
      // Push failed result
      results.push({
        predictions: [],
        inferenceTimeMs: 0,
        modelLoaded: false
      })
    }
  }

  console.log(`[Batch Inference] Completed ${results.length} inferences`)
  return results
}

/**
 * Warm up the model with a dummy inference
 * Useful to pre-load model before actual user capture
 * 
 * @returns True if warmup successful
 */
export async function warmupModel(): Promise<boolean> {
  try {
    console.log('[Inference] Warming up model...')
    
    // Create dummy image data (224x224 black image)
    const canvas = document.createElement('canvas')
    canvas.width = 224
    canvas.height = 224
    const ctx = canvas.getContext('2d')
    
    if (!ctx) {
      return false
    }
    
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, 224, 224)
    
    const dummyDataUrl = canvas.toDataURL('image/jpeg')
    
    await runInference(dummyDataUrl, { logDetails: false })
    
    console.log('[Inference] Warmup complete!')
    return true
  } catch (error) {
    console.error('[Inference] Warmup failed:', error)
    return false
  }
}
