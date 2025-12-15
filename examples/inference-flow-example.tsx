/**
 * Example: Complete Camera → Inference Flow
 * 
 * This example shows how to integrate the camera capture with TFLite inference.
 * Copy this pattern into your actual page components.
 */

'use client'

import { useState } from 'react'
import CameraCapture from '@/components/camera-capture'
import { runInference, dataUrlToImageData } from '@/utils/tflite'

// Example grade labels (adjust based on your model)
const GRADE_LABELS = ['Unripe', 'Ripe', 'Overripe']

type FlowState = 'capture' | 'processing' | 'result' | 'error'

interface GradeResult {
  grade: string
  confidence: number
  prediction: number[]
}

export default function InferenceFlowExample() {
  const [state, setState] = useState<FlowState>('capture')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [result, setResult] = useState<GradeResult | null>(null)
  const [error, setError] = useState<string>('')

  /**
   * Handle image capture from camera
   */
  const handleCapture = async (dataUrl: string) => {
    try {
      setState('processing')
      setImageUrl(dataUrl)

      console.log('[Flow] Image captured, starting inference...')

      // Convert dataURL to ImageData
      const imageData = await dataUrlToImageData(dataUrl)

      // Run on-device inference
      const prediction = await runInference(imageData)

      // Process prediction (example for classification model)
      const maxIndex = prediction.indexOf(Math.max(...prediction))
      const confidence = prediction[maxIndex]

      const gradeResult: GradeResult = {
        grade: GRADE_LABELS[maxIndex],
        confidence: confidence,
        prediction: prediction,
      }

      console.log('[Flow] Inference complete:', gradeResult)

      setResult(gradeResult)
      setState('result')

      // TODO: Save to IndexedDB for history
      // await saveToHistory({
      //   imageUrl: dataUrl,
      //   grade: gradeResult.grade,
      //   confidence: gradeResult.confidence,
      //   timestamp: Date.now()
      // })

    } catch (err) {
      console.error('[Flow] Error:', err)
      setError(err instanceof Error ? err.message : 'Inference failed')
      setState('error')
    }
  }

  /**
   * Handle retry
   */
  const handleRetry = () => {
    setState('capture')
    setImageUrl('')
    setResult(null)
    setError('')
  }

  // Render: Capture State
  if (state === 'capture') {
    return (
      <div className="flex-1 flex flex-col">
        <CameraCapture onCapture={handleCapture} />
      </div>
    )
  }

  // Render: Processing State
  if (state === 'processing') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-background">
        <div className="flex flex-col items-center gap-6 max-w-sm">
          {/* Preview Image */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted">
            <img
              src={imageUrl}
              alt="Processing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
              <div className="bg-background/90 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
                <div className="text-center">
                  <p className="text-sm font-semibold">Analyzing Image</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Running AI inference...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-muted-foreground">
            Processing on your device. No data sent to server.
          </div>
        </div>
      </div>
    )
  }

  // Render: Result State
  if (state === 'result' && result) {
    return (
      <div className="flex-1 flex flex-col p-6 pb-24 bg-background">
        <div className="flex-1 flex flex-col gap-6">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold">Grading Result</h1>
            <p className="text-sm text-muted-foreground">
              AI analysis complete
            </p>
          </div>

          {/* Image Preview */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted">
            <img
              src={imageUrl}
              alt="Graded bunch"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grade Card */}
          <div className="bg-card border rounded-xl p-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Grade</p>
              <p className="text-3xl font-bold text-primary">
                {result.grade}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Confidence</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${result.confidence * 100}%` }}
                  />
                </div>
                <span className="text-sm font-semibold">
                  {(result.confidence * 100).toFixed(1)}%
                </span>
              </div>
            </div>

            {/* Raw Prediction (Debug) */}
            <details className="text-xs">
              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                Raw Prediction
              </summary>
              <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-x-auto">
                {JSON.stringify(result.prediction, null, 2)}
              </pre>
            </details>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleRetry}
              className="flex-1 h-12 border border-border rounded-md font-medium hover:bg-accent transition-colors"
            >
              Capture Again
            </button>
            <button
              onClick={() => {
                // TODO: Navigate to history or profile
                console.log('Save to history')
              }}
              className="flex-1 h-12 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Save Result
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Render: Error State
  if (state === 'error') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-background">
        <div className="flex flex-col items-center gap-6 max-w-sm text-center">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-destructive"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Processing Failed</h2>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>

          <button
            onClick={handleRetry}
            className="w-full h-12 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return null
}
