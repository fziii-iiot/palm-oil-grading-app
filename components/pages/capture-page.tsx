'use client'

import { useState, useEffect } from 'react'
import CameraCapture from '@/components/camera-capture'
import { Loader2, AlertCircle, CheckCircle2, Check } from 'lucide-react'
import { saveGradingRecord } from '@/lib/storage'

// Type matching the backend response structure
interface BunchDetection {
  class: string
  confidence: number
  box: number[]  // [ymin, xmin, ymax, xmax] normalized 0-1
  classification?: string
  classification_confidence?: number
}

interface InferenceResult {
  predictions?: number[]
  topClass?: number
  confidence?: number
  inferenceTime: number
  label?: string
  bunches?: BunchDetection[]
  total_bunches?: number
  classification_summary?: Record<string, number>  // Count per classification
  dominant_classification?: string
  has_bunches?: boolean
}

interface CapturePageProps {
  onCapture?: (imageData: string) => void
  onInferenceComplete?: (result: InferenceResult, imageUrl: string) => void
}

type ViewState = 'ready' | 'camera' | 'processing' | 'result' | 'error'

export default function CapturePage({ onCapture, onInferenceComplete }: CapturePageProps) {
  const [viewState, setViewState] = useState<ViewState>('ready')
  const [capturedImage, setCapturedImage] = useState<string>('')
  const [inferenceResult, setInferenceResult] = useState<InferenceResult | null>(null)
  const [error, setError] = useState<string>('')
  const [isModelWarmedUp, setIsModelWarmedUp] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  // No model warmup needed for backend inference
  useEffect(() => {
    setIsModelWarmedUp(true)
    console.log('[CapturePage] Backend ready for inference')
  }, [])

  const handleCaptureComplete = async (dataUrl: string) => {
    // Store captured image immediately and ensure it persists
    setCapturedImage(dataUrl)
    setViewState('processing')

    try {
      console.log('[CapturePage] Image captured successfully')
      console.log('[CapturePage] Sending image to backend...')
      
      // Run inference via backend API using the captured image
      const result = await runInference(dataUrl)
      
      console.log('[CapturePage] Inference complete:', result)
      
      setInferenceResult(result)
      setViewState('result')

      // Notify parent component with the actual captured image
      if (onCapture) {
        onCapture(dataUrl)
      }
      if (onInferenceComplete) {
        onInferenceComplete(result, dataUrl)
      }
    } catch (err) {
      console.error('[CapturePage] Inference failed:', err)
      setError(err instanceof Error ? err.message : 'Failed to process image')
      setViewState('error')
      // capturedImage is preserved for error view
    }
  }

  // Backend inference function
  async function runInference(imageDataUrl: string): Promise<InferenceResult> {
    const startTime = performance.now()

    // Get user from localStorage for tracking
    const userStr = localStorage.getItem('user')
    const user = userStr ? JSON.parse(userStr) : null

    const response = await fetch('/api/inference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: imageDataUrl,
        user_id: user?.id // Add user_id for database tracking
      })
    })

    if (!response.ok) {
      throw new Error(`Inference failed: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const totalTime = Math.round(performance.now() - startTime)

    // Convert backend response to expected format
    const output = data.output || data
    
    console.log('[runInference] Backend response:', JSON.stringify(output, null, 2))
    console.log('[runInference] Total bunches:', output.total_bunches)
    console.log('[runInference] Classification summary:', output.classification_summary)
    
    return {
      inferenceTime: output.inferenceTime || totalTime,
      label: output.label,
      bunches: output.bunches,
      total_bunches: output.total_bunches,
      classification_summary: output.classification_summary,
      dominant_classification: output.dominant_classification,
      has_bunches: output.has_bunches
    }
  }

  const handleCancelCamera = () => {
    setViewState('ready')
  }

  const handleRetry = () => {
    setCapturedImage('')
    setInferenceResult(null)
    setError('')
    setViewState('camera')
  }
  const handleNewCapture = () => {
    setCapturedImage('')
    setInferenceResult(null)
    setError('')
    setIsSaved(false)
    setViewState('ready')
  }

  const handleSaveResult = () => {
    if (!inferenceResult || !capturedImage) {
      console.error('[CapturePage] Cannot save: missing result or image')
      return
    }

    try {
      const savedRecord = saveGradingRecord({
        imageUrl: capturedImage,
        predictions: inferenceResult.predictions || [],
        topClass: inferenceResult.topClass || 0,
        confidence: inferenceResult.confidence || 0,
        inferenceTime: inferenceResult.inferenceTime
      })

      console.log('[CapturePage] Result saved to history:', savedRecord.id)
      setIsSaved(true)

      // Show confirmation for 2 seconds
      setTimeout(() => {
        // Could navigate to history page here if needed
      }, 2000)
    } catch (err) {
      console.error('[CapturePage] Failed to save result:', err)
      setError(err instanceof Error ? err.message : 'Failed to save result')
    }
  }

  // Camera View
  if (viewState === 'camera') {
    return (
      <CameraCapture
        onCapture={handleCaptureComplete}
        onCancel={handleCancelCamera}
      />
    )
  }

  // Processing View
  if (viewState === 'processing') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-background">
        <div className="flex flex-col items-center gap-6 max-w-sm w-full">
          {/* Image Preview - Shows actual captured image */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted">
            <img
              src={capturedImage}
              alt="Processing captured image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
              <div className="bg-background/95 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <div className="text-center">
                  <p className="text-base font-semibold">Analyzing Image</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Running AI inference...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              🔒 Processing on your device
            </p>
            <p className="text-xs text-muted-foreground">
              No data sent to server
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Result View - Professional UI with Bounding Boxes and Individual Classifications
  if (viewState === 'result' && inferenceResult) {
    const totalBunches = inferenceResult.total_bunches || 0
    const classificationSummary = inferenceResult.classification_summary || {}
    const dominantClass = inferenceResult.dominant_classification || 'Unknown'

    console.log('[Result View] totalBunches:', totalBunches)
    console.log('[Result View] bunches:', inferenceResult.bunches)
    console.log('[Result View] capturedImage length:', capturedImage?.length)

    // Color mapping for classifications (matching config.yaml reference)
    const getClassColor = (classification: string) => {
      const classLower = classification?.toLowerCase() || ''
      if (classLower.includes('unripe')) return '#00FF00' // Green
      if (classLower.includes('ripe') && !classLower.includes('over')) return '#FFA500' // Orange
      if (classLower.includes('over')) return '#FF0000' // Red
      return '#808080' // Gray for unknown
    }

    return (
      <div className="flex-1 flex flex-col p-6 pb-24 bg-background overflow-y-auto">
        <div className="flex-1 flex flex-col gap-6">
          {/* Success Header with Bunch Count */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold">Analysis Complete</h1>
              <p className="text-sm text-muted-foreground">
                Processed in {inferenceResult.inferenceTime}ms
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{totalBunches}</div>
              <p className="text-xs text-muted-foreground">Bunches Found</p>
            </div>
          </div>

          {/* Image with Bounding Boxes - Individual Classifications */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted border-2 border-primary/20">
            <canvas
              ref={(canvas) => {
                if (canvas && capturedImage) {
                  const ctx = canvas.getContext('2d')
                  const img = new Image()
                  img.onload = () => {
                    canvas.width = img.width
                    canvas.height = img.height
                    ctx?.drawImage(img, 0, 0)
                    
                    console.log('[Canvas] Image loaded, drawing boxes...', inferenceResult.bunches?.length || 0)
                    
                    // Draw bounding boxes with individual classifications
                    if (inferenceResult.bunches && inferenceResult.bunches.length > 0) {
                      inferenceResult.bunches.forEach((bunch, index) => {
                        if (ctx && bunch.box) {
                          const [ymin, xmin, ymax, xmax] = bunch.box
                          const x = xmin * img.width
                          const y = ymin * img.height
                          const width = (xmax - xmin) * img.width
                          const height = (ymax - ymin) * img.height
                          
                          const classification = bunch.classification || 'Unknown'
                          const confidence = bunch.classification_confidence || 0
                          const color = getClassColor(classification)
                          
                          console.log(`[Canvas] Drawing box ${index + 1}: ${classification} at [${x.toFixed(0)}, ${y.toFixed(0)}]`)
                          
                          // Box styling
                          ctx.strokeStyle = color
                          ctx.lineWidth = 3
                          ctx.strokeRect(x, y, width, height)
                          
                          // Label text
                          const labelText = `${classification}: ${confidence.toFixed(2)}`
                          ctx.font = 'bold 16px sans-serif'
                          const textMetrics = ctx.measureText(labelText)
                          const labelHeight = 24
                          const labelWidth = textMetrics.width + 12
                          
                          // Label background
                          ctx.fillStyle = color
                          ctx.fillRect(x, y - labelHeight, labelWidth, labelHeight)
                          
                          // Label text
                          ctx.fillStyle = '#ffffff'
                          ctx.fillText(labelText, x + 6, y - 6)
                        }
                      })
                    } else {
                      console.log('[Canvas] No bunches to draw')
                    }
                  }
                  img.src = capturedImage
                }
              }}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Classification Summary Card */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-2 border-primary/20">
            <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-semibold">
              Classification Summary
            </p>
            
            {/* Dominant Classification */}
            {dominantClass && (
              <div className="mb-4 pb-4 border-b border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Most Common</p>
                <p className="text-3xl font-bold text-primary">{dominantClass}</p>
              </div>
            )}
            
            {/* Count per Classification */}
            <div className="space-y-3">
              {Object.entries(classificationSummary).map(([className, count]) => (
                <div key={className} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: getClassColor(className) }}
                    />
                    <span className="text-sm font-medium text-foreground">{className}</span>
                  </div>
                  <span className="text-lg font-bold text-primary">{count}</span>
                </div>
              ))}
            </div>
            
            {/* Total Count */}
            <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
              <span className="text-sm font-semibold text-muted-foreground">Total Bunches</span>
              <span className="text-2xl font-bold text-primary">{totalBunches}</span>
            </div>
          </div>

          {/* Debug Info */}
          <details className="text-xs">
            <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
              Raw Output
            </summary>
            <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-x-auto">
              {JSON.stringify(inferenceResult, null, 2)}
            </pre>
          </details>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleNewCapture}
              className="flex-1 h-12 border border-border rounded-md font-medium hover:bg-accent transition-colors"
            >
              New Capture
            </button>
            <button
              onClick={handleSaveResult}
              disabled={isSaved}
              className="flex-1 h-12 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSaved ? (
                <>
                  <Check className="w-5 h-5" />
                  Saved
                </>
              ) : (
                'Save Result'
              )}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Error View
  if (viewState === 'error') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-background">
        <div className="flex flex-col items-center gap-6 max-w-sm text-center">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Processing Failed</h2>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>

          {capturedImage && (
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={capturedImage}
                alt="Captured image that failed processing"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex gap-3 w-full">
            <button
              onClick={handleNewCapture}
              className="flex-1 h-12 border border-border rounded-md font-medium hover:bg-accent transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleRetry}
              className="flex-1 h-12 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Ready View (Default)
  return (
    <div className="flex-1 flex flex-col p-4 pb-24">
      <div className="flex-1 flex flex-col gap-4">
        {/* Header */}
        <div className="pt-2">
          <h1 className="text-xl font-bold">Capture Bunch</h1>
          <p className="text-sm text-muted-foreground">Take a photo of the palm oil bunch</p>
        </div>

        {/* Info Card */}
        <div className="flex-1 flex flex-col justify-center gap-6 px-4">
          <div className="text-center space-y-4">
            <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-primary"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-2">Ready to Grade</h2>
              <p className="text-sm text-muted-foreground">
                Position the palm oil bunch in good lighting for best results
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-left">
              <p className="text-xs font-medium text-accent-foreground mb-2">
                📸 Tips for best results:
              </p>
              <ul className="text-xs text-accent-foreground/80 space-y-1.5">
                <li>• Ensure good lighting conditions</li>
                <li>• Capture the entire bunch in frame</li>
                <li>• Keep the camera steady</li>
                <li>• Avoid shadows on the bunch</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Open Camera Button */}
        <button
          className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold text-base transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          onClick={() => setViewState('camera')}
          disabled={!isModelWarmedUp}
        >
          {isModelWarmedUp ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
              Open Camera
            </>
          ) : (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Loading AI Model...
            </>
          )}
        </button>
      </div>
    </div>
  )
}
