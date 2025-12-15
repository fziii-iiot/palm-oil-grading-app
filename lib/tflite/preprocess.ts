/**
 * Image Preprocessing for TFLite Models
 * 
 * Handles conversion of captured images to model-ready tensors.
 * Supports multiple input formats and provides flexible preprocessing.
 * 
 * @module lib/tflite/preprocess
 */

import * as tf from '@tensorflow/tfjs'

// Default model input configuration
export const DEFAULT_INPUT_SIZE = 224
export const DEFAULT_CHANNELS = 3

export interface PreprocessConfig {
  inputSize?: number
  normalize?: boolean
  normalizationRange?: [number, number]
  channels?: number
}

/**
 * Convert dataURL to ImageData
 * 
 * @param dataUrl - Base64 encoded image from camera
 * @returns Promise resolving to ImageData
 */
export async function dataUrlToImageData(dataUrl: string): Promise<ImageData> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      if (!ctx) {
        reject(new Error('Failed to get canvas 2D context'))
        return
      }
      
      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      
      resolve(imageData)
    }
    
    img.onerror = () => {
      reject(new Error('Failed to load image from dataURL'))
    }
    
    img.src = dataUrl
  })
}

/**
 * Convert ImageBitmap to ImageData
 * 
 * @param imageBitmap - ImageBitmap from canvas or createImageBitmap
 * @returns ImageData
 */
export function imageBitmapToImageData(imageBitmap: ImageBitmap): ImageData {
  const canvas = document.createElement('canvas')
  canvas.width = imageBitmap.width
  canvas.height = imageBitmap.height
  
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) {
    throw new Error('Failed to get canvas 2D context')
  }
  
  ctx.drawImage(imageBitmap, 0, 0)
  return ctx.getImageData(0, 0, canvas.width, canvas.height)
}

/**
 * Preprocess image data to tensor suitable for TFLite model
 * 
 * Pipeline:
 * 1. Convert ImageData to tensor
 * 2. Remove alpha channel (RGBA → RGB)
 * 3. Resize to target input size
 * 4. Normalize pixel values
 * 5. Add batch dimension
 * 
 * @param imageData - Raw image data from camera/canvas
 * @param config - Preprocessing configuration
 * @returns Preprocessed tensor ready for model inference
 */
export function preprocessImage(
  imageData: ImageData,
  config: PreprocessConfig = {}
): tf.Tensor4D {
  const {
    inputSize = DEFAULT_INPUT_SIZE,
    normalize = true,
    normalizationRange = [0, 1],
    channels = DEFAULT_CHANNELS
  } = config

  return tf.tidy(() => {
    // Convert ImageData to tensor [height, width, 4] (RGBA)
    let tensor = tf.browser.fromPixels(imageData, channels)
    
    console.log('[Preprocess] Input tensor shape:', tensor.shape)
    
    // Resize to model input size using bilinear interpolation
    const resized = tf.image.resizeBilinear(
      tensor,
      [inputSize, inputSize],
      true // alignCorners
    )
    
    console.log('[Preprocess] Resized tensor shape:', resized.shape)
    
    // Normalize pixel values
    let processed = resized
    if (normalize) {
      const [min, max] = normalizationRange
      
      if (min === 0 && max === 1) {
        // Standard [0, 1] normalization
        processed = resized.div(255.0)
      } else if (min === -1 && max === 1) {
        // [-1, 1] normalization (common for some models)
        processed = resized.div(127.5).sub(1.0)
      } else {
        // Custom range normalization
        processed = resized
          .div(255.0)
          .mul(max - min)
          .add(min)
      }
      
      console.log('[Preprocess] Normalized to range:', normalizationRange)
    }
    
    // Add batch dimension [1, height, width, channels]
    const batched = processed.expandDims(0) as tf.Tensor4D
    
    console.log('[Preprocess] Final tensor shape:', batched.shape)
    console.log('[Preprocess] Tensor dtype:', batched.dtype)
    
    return batched
  })
}

/**
 * Preprocess from dataURL directly
 * Convenience function that combines conversion and preprocessing
 * 
 * @param dataUrl - Base64 encoded image
 * @param config - Preprocessing configuration
 * @returns Preprocessed tensor
 */
export async function preprocessFromDataUrl(
  dataUrl: string,
  config?: PreprocessConfig
): Promise<tf.Tensor4D> {
  const imageData = await dataUrlToImageData(dataUrl)
  return preprocessImage(imageData, config)
}

/**
 * Preprocess from ImageBitmap
 * 
 * @param imageBitmap - ImageBitmap object
 * @param config - Preprocessing configuration
 * @returns Preprocessed tensor
 */
export function preprocessFromImageBitmap(
  imageBitmap: ImageBitmap,
  config?: PreprocessConfig
): tf.Tensor4D {
  const imageData = imageBitmapToImageData(imageBitmap)
  return preprocessImage(imageData, config)
}

/**
 * Get preprocessing statistics for debugging
 * 
 * @param tensor - Preprocessed tensor
 * @returns Statistics object
 */
export async function getTensorStats(tensor: tf.Tensor): Promise<{
  shape: number[]
  dtype: string
  min: number
  max: number
  mean: number
}> {
  const min = await tensor.min().data()
  const max = await tensor.max().data()
  const mean = await tensor.mean().data()
  
  return {
    shape: tensor.shape,
    dtype: tensor.dtype,
    min: min[0],
    max: max[0],
    mean: mean[0]
  }
}
