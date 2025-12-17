/**
 * Backend Inference API Endpoint
 * 
 * Handles image inference requests from the frontend.
 * This endpoint receives base64 image data and returns predictions.
 * 
 * POST /api/inference
 * Body: { image: string } - base64 encoded image
 * Response: { result: string, confidence: number, predictions: number[] }
 */

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { image, user_id } = body

    if (!image || typeof image !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid image data' },
        { status: 400 }
      )
    }

    console.log('[Inference API] Processing inference request...')
    if (user_id) {
      console.log(`[Inference API] User ID: ${user_id}`)
    }
    const startTime = Date.now()

    // Run inference via Python backend
    const backendResponse = await runModelInference(image, user_id)

    const inferenceTime = Date.now() - startTime
    console.log(`[Inference API] Inference completed in ${inferenceTime}ms`)

    // Return the complete output from backend (includes bunches, bounding boxes, classifications)
    return NextResponse.json({
      output: backendResponse.output,
      saved: backendResponse.saved,
      history_id: backendResponse.history_id
    })

  } catch (error) {
    console.error('[Inference API] Error:', error)
    return NextResponse.json(
      { 
        error: 'Inference failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

/**
 * Run model inference via Python backend
 * 
 * Connects to the Python TFLite backend server
 * 
 * @param imageBase64 - Base64 encoded image
 * @param userId - User ID for tracking (optional)
 * @returns Prediction results with bounding boxes and classifications
 */
async function runModelInference(imageBase64: string, userId?: number): Promise<{
  output: any
  saved?: boolean
  history_id?: number
}> {
  try {
    // Python backend URL (can be configured via environment variable)
    const backendUrl = process.env.PYTHON_BACKEND_URL || 'http://localhost:5000'
    
    console.log('[Inference API] Calling Python backend at:', backendUrl)
    
    // Call Python backend with user_id for automatic history saving
    const response = await fetch(`${backendUrl}/api/model/run`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: imageBase64,
        user_id: userId // Pass user_id to backend
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Python backend returned ${response.status}: ${errorText}`)
    }

    const data = await response.json()
    
    if (!data.success) {
      throw new Error(data.error || 'Python backend inference failed')
    }

    console.log('[Inference API] Python backend response:', {
      total_bunches: data.output.total_bunches,
      dominant_classification: data.output.dominant_classification,
      classification_summary: data.output.classification_summary,
      inferenceTime: data.output.inferenceTime,
      saved: data.saved,
      history_id: data.history_id
    })

    // Return complete output from backend (includes bunches array with bounding boxes)
    return {
      output: data.output,
      saved: data.saved,
      history_id: data.history_id
    }

  } catch (error) {
    console.error('[Inference API] Python backend error:', error)
    throw new Error(
      `Failed to connect to Python backend: ${error instanceof Error ? error.message : 'Unknown error'}`
    )
  }
}

// Support GET requests for health check
export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    endpoint: '/api/inference',
    message: 'Inference API is running. Send POST requests with image data.'
  })
}
