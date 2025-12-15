/**
 * Capture Page with TFLite WebAssembly Inference
 * 
 * Demonstrates complete integration of camera capture with TFLite WASM inference
 * running in a Web Worker for optimal performance.
 * 
 * @module app/capture-wasm-page
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import CameraCapture from '@/components/camera-capture'
import { TFLiteClient, dataUrlToTensor, type InferenceResult } from '@/lib/tflite/wasmClient'
import { Loader2, AlertCircle, CheckCircle2, Cpu } from 'lucide-react'

type ViewState = 'ready' | 'camera' | 'processing' | 'result' | 'error'

export default function CaptureWasmPage() {
  const [viewState, setViewState] = useState<ViewState>('ready')
  const [capturedImage, setCapturedImage] = useState<string>('')
  const [inferenceResult, setInferenceResult] = useState<InferenceResult | null>(null)
  const [error, setError] = useState<string>('')
  const [isModelReady, setIsModelReady] = useState(false)
  const [initializingModel, setInitializingModel] = useState(true)
  
  const tfliteClientRef = useRef<TFLiteClient | null>(null)

  /**
   * Initialize TFLite client on component mount
   */
  useEffect(() => {
    let mounted = true

    async function initTFLite() {
      try {
        console.log('[CaptureWasmPage] Initializing TFLite client...')
        setInitializingModel(true)

        // Create TFLite client
        const client = new TFLiteClient()
        tfliteClientRef.current = client

        // Initialize with model
        await client.init('/models/my_model.tflite')

        if (mounted) {
          setIsModelReady(true)
          setInitializingModel(false)
          console.log('[CaptureWasmPage] TFLite client ready')
        }
      } catch (err) {
        console.error('[CaptureWasmPage] Failed to initialize TFLite:', err)
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to initialize model')
          setInitializingModel(false)
        }
      }
    }

    initTFLite()

    // Cleanup on unmount
    return () => {
      mounted = false
      if (tfliteClientRef.current) {
        tfliteClientRef.current.terminate()
        tfliteClientRef.current = null
      }
    }
  }, [])

  /**
   * Handle photo capture from camera
   */
  const handleCaptureComplete = async (dataUrl: string) => {
    setCapturedImage(dataUrl)
    setViewState('processing')

    try {
      if (!tfliteClientRef.current) {
        throw new Error('TFLite client not initialized')
      }

      console.log('[CaptureWasmPage] Converting image to tensor...')
      
      // Convert image to tensor (224x224 RGB)
      const inputTensor = await dataUrlToTensor(dataUrl, 224, 224)
      
      console.log('[CaptureWasmPage] Running inference in worker...')
      
      // Run inference in worker
      const startTime = performance.now()
      const result = await tfliteClientRef.current.infer(inputTensor, [1, 224, 224, 3])
      const totalTime = Math.round(performance.now() - startTime)
      
      console.log('[CaptureWasmPage] Inference complete in', totalTime, 'ms')
      console.log('[CaptureWasmPage] Output:', result.output)
      
      // Update result with actual timing
      setInferenceResult({
        ...result,
        inferenceTimeMs: totalTime
      })
      setViewState('result')

    } catch (err) {
      console.error('[CaptureWasmPage] Inference failed:', err)
      setError(err instanceof Error ? err.message : 'Inference failed')
      setViewState('error')
    }
  }

  /**
   * Handle camera cancel
   */
  const handleCancelCamera = () => {
    setViewState('ready')
  }

  /**
   * Handle retry after error
   */
  const handleRetry = () => {
    setCapturedImage('')
    setInferenceResult(null)
    setError('')
    setViewState('camera')
  }

  /**
   * Handle new capture
   */
  const handleNewCapture = () => {
    setCapturedImage('')
    setInferenceResult(null)
    setError('')
    setViewState('ready')
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
          {/* Image Preview */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted">
            <img
              src={capturedImage}
              alt="Processing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
              <div className="bg-background/95 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center gap-4 shadow-lg">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <div className="text-center">
                  <p className="text-base font-semibold">Processing Image</p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5 justify-center">
                    <Cpu className="w-3 h-3" />
                    Running in Web Worker
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              ⚡ WebAssembly inference
            </p>
            <p className="text-xs text-muted-foreground">
              🔒 Processing on your device
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Result View
  if (viewState === 'result' && inferenceResult) {
    // Convert Float32Array to regular array for visualization
    const predictions = Array.from(inferenceResult.output)
    
    // Find top prediction
    const maxValue = Math.max(...predictions)
    const maxIndex = predictions.indexOf(maxValue)

    return (
      <div className="flex-1 flex flex-col p-6 pb-24 bg-background overflow-y-auto">
        <div className="flex-1 flex flex-col gap-6">
          {/* Success Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Inference Complete</h1>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Cpu className="w-3 h-3" />
                Processed in {inferenceResult.inferenceTimeMs}ms
              </p>
            </div>
          </div>

          {/* Image Preview */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted border-2 border-primary/20">
            <img
              src={capturedImage}
              alt="Analyzed"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Results Card */}
          <div className="bg-card border rounded-xl p-6 space-y-4">
            {/* Top Prediction */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-xs text-muted-foreground mb-1">Top Prediction</p>
              <p className="text-2xl font-bold text-primary">Class {maxIndex}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Confidence: {(maxValue * 100).toFixed(1)}%
              </p>
            </div>

            {/* All Predictions */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">All Predictions</p>
              <div className="space-y-2">
                {predictions.slice(0, 5).map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-xs font-medium text-muted-foreground w-16">
                      Class {index}
                    </span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          index === maxIndex ? 'bg-primary' : 'bg-primary/50'
                        }`}
                        style={{ width: `${(value / maxValue) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold w-14 text-right">
                      {(value * 100).toFixed(1)}%
                    </span>
                  </div>
                ))}
                {predictions.length > 5 && (
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    + {predictions.length - 5} more classes
                  </p>
                )}
              </div>
            </div>

            {/* Performance Info */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
              <p className="text-xs font-medium text-accent-foreground mb-2">
                ⚡ Performance Metrics
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-muted-foreground">Runtime</p>
                  <p className="font-semibold">WebAssembly</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Thread</p>
                  <p className="font-semibold">Web Worker</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Output Size</p>
                  <p className="font-semibold">{predictions.length} values</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Inference Time</p>
                  <p className="font-semibold">{inferenceResult.inferenceTimeMs}ms</p>
                </div>
              </div>
            </div>

            {/* Debug Info */}
            <details className="text-xs">
              <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                Raw Output (Debug)
              </summary>
              <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-x-auto max-h-40">
                {JSON.stringify(predictions, null, 2)}
              </pre>
            </details>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleNewCapture}
              className="flex-1 h-12 border border-border rounded-md font-medium hover:bg-accent transition-colors"
            >
              New Capture
            </button>
            <button
              onClick={() => {
                console.log('Save result:', inferenceResult)
                // TODO: Implement save to history
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

  // Error View
  if (viewState === 'error') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-background">
        <div className="flex flex-col items-center gap-6 max-w-sm text-center">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Inference Failed</h2>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>

          {capturedImage && (
            <div className="w-full aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={capturedImage}
                alt="Failed"
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
          <h1 className="text-xl font-bold">WASM Inference</h1>
          <p className="text-sm text-muted-foreground">
            TFLite WebAssembly with Web Worker
          </p>
        </div>

        {/* Info Card */}
        <div className="flex-1 flex flex-col justify-center gap-6 px-4">
          <div className="text-center space-y-4">
            {/* Icon */}
            <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Cpu className="w-10 h-10 text-primary" />
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-2">
                {initializingModel ? 'Loading Model...' : 'Ready for Inference'}
              </h2>
              <p className="text-sm text-muted-foreground">
                {initializingModel 
                  ? 'Initializing WebAssembly runtime...'
                  : 'Capture an image to run on-device inference'}
              </p>
            </div>

            {/* Technical Info */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-left">
              <p className="text-xs font-medium text-accent-foreground mb-2">
                ⚡ Technical Details:
              </p>
              <ul className="text-xs text-accent-foreground/80 space-y-1.5">
                <li>• TFLite WebAssembly runtime</li>
                <li>• Inference runs in Web Worker</li>
                <li>• Non-blocking UI performance</li>
                <li>• 100% on-device processing</li>
              </ul>
            </div>

            {/* Model Status */}
            {!initializingModel && (
              <div className="flex items-center justify-center gap-2 text-xs text-primary">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-medium">Model loaded and ready</span>
              </div>
            )}
          </div>
        </div>

        {/* Open Camera Button */}
        <button
          className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold text-base transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setViewState('camera')}
          disabled={!isModelReady || initializingModel}
        >
          {initializingModel ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Initializing Model...
            </>
          ) : (
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
          )}
        </button>
      </div>
    </div>
  )
}
