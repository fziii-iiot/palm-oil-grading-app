/**
 * TFLite Web Worker
 * 
 * Runs TensorFlow Lite inference using WebAssembly runtime in a dedicated worker thread.
 * This keeps the main UI thread responsive during model execution.
 * 
 * @module workers/tflite-worker
 */

// Worker message types
interface InitMessage {
  type: 'init'
  modelUrl: string
}

interface InferMessage {
  type: 'infer'
  input: Uint8Array
  inputShape: number[]
}

interface ResultMessage {
  type: 'result'
  output: Float32Array
  inferenceTimeMs: number
}

interface ErrorMessage {
  type: 'error'
  error: string
}

type WorkerMessage = InitMessage | InferMessage
type WorkerResponse = ResultMessage | ErrorMessage

// TFLite WASM runtime interface
interface TFLiteModule {
  _getModelBufferMemoryOffset: () => number
  _getInputMemoryOffset: () => number
  _getOutputMemoryOffset: () => number
  _loadModel: (bufferSize: number) => number
  _runInference: () => number
  _getOutputSize: () => number
  HEAPU8: Uint8Array
  HEAPF32: Float32Array
}

// Declare Web Worker globals
declare function importScripts(...urls: string[]): void

// Global state
let tfliteModule: TFLiteModule | null = null
let isInitialized = false
let modelLoaded = false

/**
 * Load TFLite WebAssembly module
 */
async function loadTFLiteWasm(): Promise<TFLiteModule> {
  return new Promise((resolve, reject) => {
    // Define locateFile to find WASM binary
    const moduleConfig = {
      locateFile: (path: string, prefix: string) => {
        if (path.endsWith('.wasm')) {
          return '/tflite/tflite.wasm'
        }
        return prefix + path
      },
      onRuntimeInitialized: function (this: TFLiteModule) {
        console.log('[Worker] TFLite WASM runtime initialized')
        resolve(this)
      },
      onAbort: (error: any) => {
        console.error('[Worker] TFLite WASM runtime failed:', error)
        reject(new Error('Failed to initialize TFLite WASM runtime'))
      }
    }

    // Load tflite.js which will initialize the WASM module
    importScripts('/tflite/tflite.js')
    
    // Call the global TFLite function created by tflite.js
    if (typeof (self as any).createTFLiteModule === 'function') {
      (self as any).createTFLiteModule(moduleConfig)
    } else {
      reject(new Error('TFLite module not found. Ensure tflite.js is loaded.'))
    }
  })
}

/**
 * Load TFLite model from URL
 */
async function loadModel(modelUrl: string): Promise<void> {
  if (!tfliteModule) {
    throw new Error('TFLite module not initialized')
  }

  try {
    console.log('[Worker] Loading model from:', modelUrl)
    
    // Fetch model file
    const response = await fetch(modelUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch model: ${response.statusText}`)
    }
    
    const modelBuffer = await response.arrayBuffer()
    const modelBytes = new Uint8Array(modelBuffer)
    
    console.log('[Worker] Model size:', modelBytes.length, 'bytes')
    
    // Get memory offset for model buffer
    const modelBufferOffset = tfliteModule._getModelBufferMemoryOffset()
    
    // Copy model data to WASM memory
    tfliteModule.HEAPU8.set(modelBytes, modelBufferOffset)
    
    // Load model in TFLite interpreter
    const result = tfliteModule._loadModel(modelBytes.length)
    
    if (result !== 0) {
      throw new Error(`Failed to load model. Error code: ${result}`)
    }
    
    console.log('[Worker] Model loaded successfully')
    modelLoaded = true
  } catch (error) {
    console.error('[Worker] Model loading failed:', error)
    throw error
  }
}

/**
 * Run inference on input tensor
 */
function runInference(input: Uint8Array, inputShape: number[]): Float32Array {
  if (!tfliteModule) {
    throw new Error('TFLite module not initialized')
  }
  
  if (!modelLoaded) {
    throw new Error('Model not loaded')
  }

  const startTime = performance.now()

  try {
    // Get input memory offset
    const inputOffset = tfliteModule._getInputMemoryOffset()
    
    // Copy input data to WASM memory
    tfliteModule.HEAPU8.set(input, inputOffset)
    
    console.log('[Worker] Running inference on input shape:', inputShape)
    
    // Run inference
    const result = tfliteModule._runInference()
    
    if (result !== 0) {
      throw new Error(`Inference failed. Error code: ${result}`)
    }
    
    // Get output
    const outputOffset = tfliteModule._getOutputMemoryOffset()
    const outputSize = tfliteModule._getOutputSize()
    
    // Read output from WASM memory (assuming float32 output)
    const outputPtr = outputOffset / 4 // Convert byte offset to float32 offset
    const output = tfliteModule.HEAPF32.slice(outputPtr, outputPtr + outputSize)
    
    const inferenceTime = performance.now() - startTime
    console.log('[Worker] Inference complete in', inferenceTime.toFixed(2), 'ms')
    console.log('[Worker] Output size:', outputSize)
    
    return output
  } catch (error) {
    console.error('[Worker] Inference failed:', error)
    throw error
  }
}

/**
 * Message handler
 */
self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
  const message = event.data

  try {
    switch (message.type) {
      case 'init': {
        if (isInitialized) {
          self.postMessage({
            type: 'result',
            output: null,
            inferenceTimeMs: 0
          } as any)
          return
        }

        console.log('[Worker] Initializing TFLite...')
        
        // Load WASM module
        tfliteModule = await loadTFLiteWasm()
        isInitialized = true
        
        // Load model
        await loadModel(message.modelUrl)
        
        self.postMessage({
          type: 'result',
          output: new Float32Array([1]), // Success indicator
          inferenceTimeMs: 0
        } as ResultMessage)
        
        break
      }

      case 'infer': {
        if (!isInitialized || !modelLoaded) {
          throw new Error('Worker not initialized or model not loaded')
        }

        const output = runInference(message.input, message.inputShape)
        
        self.postMessage({
          type: 'result',
          output: output,
          inferenceTimeMs: 0 // Already logged in runInference
        } as ResultMessage)
        
        break
      }

      default:
        throw new Error(`Unknown message type: ${(message as any).type}`)
    }
  } catch (error) {
    console.error('[Worker] Error:', error)
    self.postMessage({
      type: 'error',
      error: error instanceof Error ? error.message : String(error)
    } as ErrorMessage)
  }
}

// Notify that worker is ready
console.log('[Worker] TFLite worker initialized and ready')
