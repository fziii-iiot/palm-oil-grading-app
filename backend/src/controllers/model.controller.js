/**
 * Model Controller
 * 
 * Handles HTTP requests for model inference
 */

import { executeInference } from '../services/model.service.js'
import { base64ToBuffer } from '../utils/file.utils.js'

/**
 * Run inference on provided image
 * 
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export async function runInference(req, res) {
  const startTime = Date.now()

  try {
    const { image } = req.body

    // Validate request
    if (!image) {
      return res.status(400).json({
        success: false,
        error: 'Missing image data in request body'
      })
    }

    if (typeof image !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Image data must be a base64 string'
      })
    }

    console.log('📸 Received inference request')

    // Convert base64 to buffer
    const imageBuffer = base64ToBuffer(image)
    
    if (!imageBuffer) {
      return res.status(400).json({
        success: false,
        error: 'Invalid base64 image data'
      })
    }

    console.log('🔄 Processing image...')

    // Execute inference on local model
    const result = await executeInference(imageBuffer)

    const inferenceTime = Date.now() - startTime
    console.log(`✅ Inference completed in ${inferenceTime}ms`)

    // Return result
    res.json({
      success: true,
      output: result,
      inferenceTime
    })

  } catch (error) {
    console.error('❌ Inference error:', error)
    
    const inferenceTime = Date.now() - startTime
    
    res.status(500).json({
      success: false,
      error: error.message || 'Inference failed',
      inferenceTime
    })
  }
}
