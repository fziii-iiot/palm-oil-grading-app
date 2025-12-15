/**
 * Capture Page with TFLite Inference
 * 
 * Demonstrates complete integration of camera capture with TFLite model inference.
 * This page runs entirely on the client side to avoid SSR issues.
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { loadTFLiteModel, predictFromImage, isModelLoaded } from '@/utils/tflite'
import { Loader2, Camera, AlertCircle, CheckCircle2 } from 'lucide-react'

type ViewState = 'loading' | 'ready' | 'capturing' | 'processing' | 'result' | 'error'

export default function CapturePage() {
  // UI state management
  const [viewState, setViewState] = useState<ViewState>('loading')
  const [error, setError] = useState<string>('')
  const [predictions, setPredictions] = useState<number[]>([])
  const [capturedImage, setCapturedImage] = useState<string>('')
  const [inferenceTime, setInferenceTime] = useState<number>(0)
  
  // Refs for camera and canvas
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  /**
   * Step 1: Load TFLite model on component mount
   * This ensures the model is ready before user captures any image
   */
  useEffect(() => {
    let mounted = true

    async function initModel() {
      try {
        console.log('[CapturePage] Initializing TFLite model...')
        
        // Load model using singleton pattern
        // This will be cached and reused across the app
        await loadTFLiteModel()
        
        if (mounted) {
          setViewState('ready')
          console.log('[CapturePage] Model ready for inference')
        }
      } catch (err) {
        console.error('[CapturePage] Model loading failed:', err)
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to load model')
          setViewState('error')
        }
      }
    }

    initModel()

    // Cleanup on unmount
    return () => {
      mounted = false
      stopCamera()
    }
  }, [])

  /**
   * Step 2: Initialize camera stream
   * Uses rear camera (environment) for mobile devices
   */
  const startCamera = async () => {
    try {
      console.log('[CapturePage] Starting camera...')
      
      // Request camera access with rear camera preference
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: 'environment' }, // Rear camera on mobile
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        },
        audio: false
      })

      streamRef.current = stream

      // Attach stream to video element
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
        setViewState('capturing')
      }
    } catch (err) {
      console.error('[CapturePage] Camera access failed:', err)
      setError('Failed to access camera. Please grant camera permissions.')
      setViewState('error')
    }
  }

  /**
   * Step 3: Stop camera and cleanup
   */
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
  }

  /**
   * Step 4: Capture photo from video stream
   * Converts video frame to canvas, then to dataURL
   */
  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) {
      setError('Camera not initialized')
      return
    }

    const video = videoRef.current
    const canvas = canvasRef.current

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // Draw current video frame to canvas
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      setError('Failed to get canvas context')
      return
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    // Convert canvas to dataURL (base64 encoded image)
    const dataUrl = canvas.toDataURL('image/jpeg', 0.9)
    
    console.log('[CapturePage] Photo captured')
    setCapturedImage(dataUrl)
    
    // Stop camera after capture
    stopCamera()
    
    // Proceed to inference
    runInference(dataUrl)
  }

  /**
   * Step 5: Run TFLite inference on captured image
   * This is where the magic happens!
   */
  const runInference = async (imageDataUrl: string) => {
    setViewState('processing')

    try {
      console.log('[CapturePage] Starting inference...')
      const startTime = performance.now()

      // Run inference using the utility function
      // This handles:
      // 1. Loading the model (if not already loaded)
      // 2. Preprocessing the image (resize, normalize)
      // 3. Running model.predict()
      // This handles everything: preprocessing + inference
      const result = await predictFromImage(imageDataUrl, 224)
      
      const totalTime = Math.round(performance.now() - startTime)
      
      // Convert Float32Array to regular array for display
      const predictionArray = Array.from(result) as number[]
      
      console.log('[CapturePage] Inference complete!')
      console.log('[CapturePage] Predictions:', predictionArray)
      console.log('[CapturePage] Time:', totalTime, 'ms')

      // Update state with results
      setPredictions(predictionArray)
      setInferenceTime(totalTime)
      setViewState('result')

    } catch (err) {
      console.error('[CapturePage] Inference failed:', err)
      setError(err instanceof Error ? err.message : 'Inference failed')
      setViewState('error')
    }
  }

  /**
   * Reset and capture new image
   */
  const handleNewCapture = () => {
    setCapturedImage('')
    setPredictions([])
    setInferenceTime(0)
    setError('')
    setViewState('ready')
  }

  // ========================================
  // UI RENDERING
  // ========================================

  // Loading State - Model initialization
  if (viewState === 'loading') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-background">
        <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
        <h2 className="text-lg font-semibold mb-2">Loading TFLite Model</h2>
        <p className="text-sm text-muted-foreground text-center">
          Initializing WebAssembly runtime...
        </p>
      </div>
    )
  }

  // Ready State - Ready to capture
  if (viewState === 'ready') {
    return (
      <div className="flex-1 flex flex-col p-6 pb-24">
        <div className="flex-1 flex flex-col justify-center items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Camera className="w-10 h-10 text-primary" />
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">TFLite Inference Ready</h1>
            <p className="text-sm text-muted-foreground">
              Model loaded. Tap below to capture and analyze.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-sm">
            <p className="text-xs text-primary font-medium">
              ✓ Model: palm-oil-model.tflite
              <br />
              ✓ Runtime: WebAssembly
              <br />
              ✓ Status: Ready for inference
            </p>
          </div>
        </div>

        <button
          onClick={startCamera}
          className="w-full h-14 bg-primary text-primary-foreground rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <Camera className="w-5 h-5" />
          Open Camera
        </button>
      </div>
    )
  }

  // Capturing State - Camera active
  if (viewState === 'capturing') {
    return (
      <div className="flex-1 flex flex-col bg-black">
        {/* Video Preview */}
        <div className="flex-1 relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Frame Guide */}
          <div className="absolute inset-4 border-2 border-white/40 rounded-2xl pointer-events-none" />
          
          {/* Instruction */}
          <div className="absolute top-8 left-0 right-0 flex justify-center">
            <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-xs text-white font-medium">
                Position object within frame
              </p>
            </div>
          </div>
        </div>

        {/* Hidden canvas for capture */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Capture Button */}
        <div className="p-6 bg-black">
          <button
            onClick={capturePhoto}
            className="w-full h-14 bg-white text-black rounded-md font-semibold hover:bg-white/90 transition-colors"
          >
            Take Photo
          </button>
        </div>
      </div>
    )
  }

  // Processing State - Running inference
  if (viewState === 'processing') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-background">
        <div className="max-w-sm w-full space-y-6">
          {/* Image Preview */}
          {capturedImage && (
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={capturedImage}
                alt="Processing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-background/95 rounded-2xl p-6 text-center">
                  <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-3" />
                  <p className="text-base font-semibold">Running Inference</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    TFLite model processing...
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Result State - Show predictions
  if (viewState === 'result') {
    const maxValue = Math.max(...predictions)
    const maxIndex = predictions.indexOf(maxValue)

    return (
      <div className="flex-1 flex flex-col p-6 pb-24 overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Inference Complete</h1>
              <p className="text-sm text-muted-foreground">
                Processed in {inferenceTime}ms
              </p>
            </div>
          </div>

          {/* Captured Image */}
          {capturedImage && (
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-muted border-2 border-primary/20">
              <img
                src={capturedImage}
                alt="Result"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Top Prediction */}
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Top Prediction</p>
            <p className="text-2xl font-bold text-primary">Class {maxIndex}</p>
            <p className="text-sm text-muted-foreground">
              Confidence: {(maxValue * 100).toFixed(2)}%
            </p>
          </div>

          {/* All Predictions */}
          <div className="bg-card border rounded-xl p-6">
            <p className="text-sm font-medium mb-4">All Predictions</p>
            <div className="space-y-3">
              {predictions.map((value, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Class {index}</span>
                    <span className="font-semibold">{(value * 100).toFixed(2)}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        index === maxIndex ? 'bg-primary' : 'bg-primary/50'
                      }`}
                      style={{ width: `${(value / maxValue) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <button
            onClick={handleNewCapture}
            className="w-full h-12 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            New Capture
          </button>
        </div>
      </div>
    )
  }

  // Error State
  if (viewState === 'error') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 bg-background">
        <div className="max-w-sm text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Error</h2>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>

          <button
            onClick={handleNewCapture}
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
