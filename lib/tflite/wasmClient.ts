/**
 * TFLite WebAssembly Client
 * 
 * Client-side interface for TFLite Web Worker.
 * Provides a clean API for initializing and running inference on TFLite models
 * using WebAssembly runtime in a dedicated worker thread.
 * 
 * @module lib/tflite/wasmClient
 */

export interface InferenceResult {
  output: Float32Array
  inferenceTimeMs: number
}

export interface TFLiteConfig {
  modelUrl: string
  inputShape?: number[]
}

/**
 * TFLite WebAssembly Client
 * 
 * Manages Web Worker lifecycle and provides async API for inference.
 */
export class TFLiteClient {
  private worker: Worker | null = null
  private isInitialized = false
  private initPromise: Promise<void> | null = null
  private inferenceCallbacks: Map<number, {
    resolve: (result: InferenceResult) => void
    reject: (error: Error) => void
  }> = new Map()
  private messageId = 0

  /**
   * Initialize TFLite worker and load model
   * 
   * @param modelUrl - URL to TFLite model file (e.g., '/models/my_model.tflite')
   * @returns Promise that resolves when worker is ready
   */
  async init(modelUrl: string): Promise<void> {
    // Return existing init promise if already initializing
    if (this.initPromise) {
      return this.initPromise
    }

    // Return immediately if already initialized
    if (this.isInitialized) {
      return Promise.resolve()
    }

    // Browser-only guard
    if (typeof window === 'undefined') {
      throw new Error('TFLiteClient can only be used in browser context')
    }

    this.initPromise = new Promise((resolve, reject) => {
      try {
        console.log('[TFLiteClient] Creating worker...')
        
        // Create worker using Next.js 16 + Turbopack compatible syntax
        this.worker = new Worker(
          new URL('../../workers/tflite-worker.ts', import.meta.url),
          { type: 'module' }
        )

        // Set up message handler
        this.worker.onmessage = (event: MessageEvent) => {
          this.handleWorkerMessage(event.data)
        }

        this.worker.onerror = (error: ErrorEvent) => {
          console.error('[TFLiteClient] Worker error:', error)
          reject(new Error(`Worker error: ${error.message}`))
        }

        // Store resolve/reject for init
        const initCallback = {
          resolve: () => {
            this.isInitialized = true
            console.log('[TFLiteClient] Initialized successfully')
            resolve()
          },
          reject: (error: Error) => {
            console.error('[TFLiteClient] Initialization failed:', error)
            reject(error)
          }
        }

        this.inferenceCallbacks.set(0, initCallback)

        // Send init message to worker
        console.log('[TFLiteClient] Sending init message with model:', modelUrl)
        this.worker.postMessage({
          type: 'init',
          modelUrl: modelUrl
        })

      } catch (error) {
        console.error('[TFLiteClient] Failed to create worker:', error)
        reject(error)
      }
    })

    return this.initPromise
  }

  /**
   * Run inference on input tensor
   * 
   * @param input - Input tensor as Uint8Array
   * @param inputShape - Optional shape information [batch, height, width, channels]
   * @returns Promise resolving to inference results
   */
  async infer(input: Uint8Array, inputShape?: number[]): Promise<InferenceResult> {
    if (!this.isInitialized || !this.worker) {
      throw new Error('TFLiteClient not initialized. Call init() first.')
    }

    return new Promise((resolve, reject) => {
      const messageId = ++this.messageId

      // Store callbacks
      this.inferenceCallbacks.set(messageId, { resolve, reject })

      // Send inference request
      console.log('[TFLiteClient] Sending inference request, input size:', input.length)
      
      this.worker!.postMessage({
        type: 'infer',
        input: input,
        inputShape: inputShape || [1, 224, 224, 3]
      }, [input.buffer]) // Transfer ownership for performance
    })
  }

  /**
   * Handle messages from worker
   */
  private handleWorkerMessage(data: any) {
    const { type, output, inferenceTimeMs, error } = data

    if (type === 'error') {
      console.error('[TFLiteClient] Worker error:', error)
      
      // Reject all pending callbacks
      this.inferenceCallbacks.forEach(({ reject }) => {
        reject(new Error(error))
      })
      this.inferenceCallbacks.clear()
      
      return
    }

    if (type === 'result') {
      // Get the appropriate callback
      // For init, use message ID 0
      // For infer, use the current message ID
      const messageId = output && output.length === 1 && output[0] === 1 ? 0 : this.messageId
      const callback = this.inferenceCallbacks.get(messageId)

      if (callback) {
        if (messageId === 0) {
          // Init complete
          callback.resolve({ output: new Float32Array(), inferenceTimeMs: 0 })
        } else {
          // Inference complete
          console.log('[TFLiteClient] Inference result received, output size:', output.length)
          callback.resolve({ output, inferenceTimeMs })
        }
        
        this.inferenceCallbacks.delete(messageId)
      } else {
        console.warn('[TFLiteClient] Received result for unknown message ID:', messageId)
      }
    }
  }

  /**
   * Terminate worker and cleanup resources
   */
  terminate(): void {
    if (this.worker) {
      console.log('[TFLiteClient] Terminating worker')
      this.worker.terminate()
      this.worker = null
    }
    
    this.isInitialized = false
    this.initPromise = null
    this.inferenceCallbacks.clear()
  }

  /**
   * Check if client is initialized
   */
  get initialized(): boolean {
    return this.isInitialized
  }
}

/**
 * Convert ImageData to Uint8Array for inference
 * 
 * @param imageData - ImageData from canvas
 * @param targetWidth - Target width for model input
 * @param targetHeight - Target height for model input
 * @returns Preprocessed Uint8Array
 */
export function imageDataToTensor(
  imageData: ImageData,
  targetWidth: number = 224,
  targetHeight: number = 224
): Uint8Array {
  // Create canvas for resizing
  const canvas = document.createElement('canvas')
  canvas.width = targetWidth
  canvas.height = targetHeight
  
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) {
    throw new Error('Failed to get canvas context')
  }

  // Draw and resize image
  const tempCanvas = document.createElement('canvas')
  tempCanvas.width = imageData.width
  tempCanvas.height = imageData.height
  const tempCtx = tempCanvas.getContext('2d')!
  tempCtx.putImageData(imageData, 0, 0)

  // Resize to target dimensions
  ctx.drawImage(tempCanvas, 0, 0, targetWidth, targetHeight)
  
  // Get resized image data
  const resized = ctx.getImageData(0, 0, targetWidth, targetHeight)
  
  // Convert RGBA to RGB (remove alpha channel)
  const rgbData = new Uint8Array(targetWidth * targetHeight * 3)
  let rgbIndex = 0
  
  for (let i = 0; i < resized.data.length; i += 4) {
    rgbData[rgbIndex++] = resized.data[i]     // R
    rgbData[rgbIndex++] = resized.data[i + 1] // G
    rgbData[rgbIndex++] = resized.data[i + 2] // B
    // Skip alpha channel
  }

  return rgbData
}

/**
 * Convert dataURL to Uint8Array tensor
 * 
 * @param dataUrl - Base64 encoded image
 * @param targetWidth - Target width
 * @param targetHeight - Target height
 * @returns Promise resolving to Uint8Array
 */
export async function dataUrlToTensor(
  dataUrl: string,
  targetWidth: number = 224,
  targetHeight: number = 224
): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = targetWidth
      canvas.height = targetHeight
      
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      if (!ctx) {
        reject(new Error('Failed to get canvas context'))
        return
      }
      
      // Draw and resize
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight)
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight)
      
      // Convert to tensor
      const tensor = imageDataToTensor(imageData, targetWidth, targetHeight)
      resolve(tensor)
    }
    
    img.onerror = () => {
      reject(new Error('Failed to load image from dataURL'))
    }
    
    img.src = dataUrl
  })
}
