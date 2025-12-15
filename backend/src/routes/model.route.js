/**
 * Model Routes
 * 
 * Defines API endpoints for model inference
 */

import express from 'express'
import { runInference } from '../controllers/model.controller.js'

const router = express.Router()

/**
 * POST /api/model/run
 * 
 * Run inference on provided image
 * 
 * Request body:
 * {
 *   "image": "data:image/jpeg;base64,/9j/4AAQ..."
 * }
 * 
 * Response:
 * {
 *   "success": true,
 *   "output": {
 *     "predictions": [0.1, 0.8, 0.1],
 *     "topClass": 1,
 *     "confidence": 0.8,
 *     "label": "Ripe"
 *   },
 *   "inferenceTime": 123
 * }
 */
router.post('/run', runInference)

/**
 * GET /api/model/status
 * 
 * Check model status
 */
router.get('/status', (req, res) => {
  res.json({
    success: true,
    status: 'Model loaded and ready',
    modelPath: process.env.MODEL_PATH || './models/palm-oil-model.tflite'
  })
})

export default router
