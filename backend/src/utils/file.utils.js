/**
 * File Utilities
 * 
 * Handles base64 conversion and image preprocessing
 */

import * as tf from '@tensorflow/tfjs-node'
import sharp from 'sharp'

/**
 * Convert base64 image string to Buffer
 * 
 * @param {string} base64String - Base64 encoded image (with or without data URI prefix)
 * @returns {Buffer|null} Image buffer or null if invalid
 */
export function base64ToBuffer(base64String) {
  try {
    // Remove data URI prefix if present
    // e.g., "data:image/jpeg;base64,/9j/4AAQ..." -> "/9j/4AAQ..."
    const base64Data = base64String.includes(',')
      ? base64String.split(',')[1]
      : base64String

    // Convert to buffer
    const buffer = Buffer.from(base64Data, 'base64')
    
    return buffer
  } catch (error) {
    console.error('Failed to convert base64 to buffer:', error)
    return null
  }
}

/**
 * Preprocess image buffer to tensor
 * 
 * Steps:
 * 1. Decode image using sharp
 * 2. Resize to target size (e.g., 224x224)
 * 3. Convert to RGB
 * 4. Normalize to [0, 1]
 * 5. Add batch dimension
 * 
 * @param {Buffer} imageBuffer - Raw image buffer
 * @param {number} targetSize - Target size for resizing (default: 224)
 * @returns {Promise<tf.Tensor4D>} Preprocessed tensor [1, height, width, 3]
 */
export async function preprocessImage(imageBuffer, targetSize = 224) {
  try {
    // Decode and resize image using sharp
    const resizedBuffer = await sharp(imageBuffer)
      .resize(targetSize, targetSize, {
        fit: 'cover',
        position: 'center'
      })
      .removeAlpha() // Remove alpha channel if present
      .raw() // Get raw pixel data
      .toBuffer({ resolveWithObject: true })

    const { data, info } = resizedBuffer

    // Convert buffer to Uint8Array
    const pixels = new Uint8Array(data)

    // Create tensor from pixel data
    // Shape: [height, width, channels]
    let tensor = tf.tensor3d(pixels, [info.height, info.width, info.channels])

    // Normalize to [0, 1] range
    tensor = tensor.div(255.0)

    // Add batch dimension: [1, height, width, channels]
    tensor = tensor.expandDims(0)

    return tensor

  } catch (error) {
    console.error('Image preprocessing failed:', error)
    throw new Error(`Failed to preprocess image: ${error.message}`)
  }
}

/**
 * Get image dimensions from buffer
 * 
 * @param {Buffer} imageBuffer - Image buffer
 * @returns {Promise<{width: number, height: number}>} Image dimensions
 */
export async function getImageDimensions(imageBuffer) {
  try {
    const metadata = await sharp(imageBuffer).metadata()
    return {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format
    }
  } catch (error) {
    console.error('Failed to get image dimensions:', error)
    throw new Error('Invalid image buffer')
  }
}
