'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Camera, RotateCcw, X } from 'lucide-react'

interface CameraCaptureProps {
  onCapture: (dataUrl: string) => void
  onCancel?: () => void
}

export default function CameraCapture({ onCapture, onCancel }: CameraCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const [isStreaming, setIsStreaming] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const initializeCamera = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 720 },
          height: { ideal: 720 },
          aspectRatio: { ideal: 1 }, // Force 1:1 aspect ratio (square)
        },
        audio: false,
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play()
          setIsStreaming(true)
          setIsLoading(false)
        }
      }
    } catch (err) {
      console.error('Camera initialization error:', err)
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to access camera. Please grant camera permissions.'
      )
      setIsLoading(false)
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setIsStreaming(false)
  }, [])

  const handleCapture = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current

    // Ensure square capture (1:1 aspect ratio) at 720x720
    const size = Math.min(video.videoWidth, video.videoHeight)
    canvas.width = 720
    canvas.height = 720

    const context = canvas.getContext('2d')
    if (context) {
      // Calculate crop to center square
      const sx = (video.videoWidth - size) / 2
      const sy = (video.videoHeight - size) / 2
      
      // Draw centered square crop, scaled to 720x720
      context.drawImage(
        video,
        sx, sy, size, size,  // Source: center square from video
        0, 0, 720, 720       // Destination: 720x720 canvas
      )

      const dataUrl = canvas.toDataURL('image/jpeg', 0.9)
      setCapturedImage(dataUrl)

      stopCamera()
    }
  }, [stopCamera])

  const handleRetake = useCallback(() => {
    setCapturedImage(null)
    setError(null)
    initializeCamera()
  }, [initializeCamera])

  const handleConfirm = useCallback(() => {
    if (capturedImage) {
      onCapture(capturedImage)
    }
  }, [capturedImage, onCapture])

  const handleCancel = useCallback(() => {
    stopCamera()
    onCancel?.()
  }, [stopCamera, onCancel])

  useEffect(() => {
    initializeCamera()
    return () => stopCamera()
  }, [initializeCamera, stopCamera])

  return (
    <div className="flex-1 flex flex-col bg-background">
      <div className="flex-1 relative overflow-hidden bg-black flex items-center justify-center">
        {/* Video/Image Container - Perfect Square */}
        <div className="relative w-full max-w-[720px] aspect-square">
          {!capturedImage && (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {capturedImage && (
            <img
              src={capturedImage}
              alt="Captured bunch"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {isLoading && !capturedImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="flex flex-col items-center gap-3">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
                <p className="text-sm text-white">Initializing camera...</p>
              </div>
            </div>
          )}

          {error && !capturedImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black p-6">
              <div className="flex flex-col items-center gap-4 text-center max-w-sm">
                <Camera className="w-16 h-16 text-destructive" />
                <div>
                  <p className="text-sm font-medium text-white mb-2">Camera Error</p>
                  <p className="text-xs text-white/70">{error}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRetake}
                  className="mt-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Try Again
                </Button>
              </div>
            </div>
          )}

          {isStreaming && !capturedImage && (
            <div className="absolute inset-0 pointer-events-none">
              {/* Square Frame Guide - Perfect 720x720 boundary */}
              <div className="absolute inset-0 border-4 border-white/60 rounded-lg shadow-2xl" />
              
              {/* Corner Markers */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary" />
              
              {/* Instruction Text */}
              <div className="absolute top-4 left-0 right-0 text-center">
                <div className="inline-block bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <p className="text-xs text-white font-medium">
                    Position the bunch within the frame
                  </p>
                  <p className="text-[10px] text-white/70 mt-0.5">
                    Ensure Good Lighting for Best Result
                  </p>
                </div>
              </div>
            </div>
          )}

          {onCancel && (
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
              aria-label="Cancel"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          )}
        </div>

        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* Action Buttons - with safe area for bottom navigation */}
      <div className="p-4 pb-24 bg-background border-t">
        {!capturedImage ? (
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 h-14 text-base font-semibold"
            onClick={handleCapture}
            disabled={!isStreaming || isLoading}
          >
            <Camera className="w-5 h-5" />
            Take Photo
          </Button>
        ) : (
          <div className="flex gap-3">
            <Button
              size="lg"
              variant="outline"
              className="flex-1 h-14 text-base font-semibold"
              onClick={handleRetake}
            >
              <RotateCcw className="w-5 h-5" />
              Retake
            </Button>
            <Button
              size="lg"
              className="flex-1 bg-primary hover:bg-primary/90 h-14 text-base font-semibold"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
