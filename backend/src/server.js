/**
 * Server Entry Point
 * 
 * Starts the Express server and initializes the ML model
 */

import dotenv from 'dotenv'
import app from './app.js'
import { initializeModel } from './services/model.service.js'

// Load environment variables
dotenv.config()

const PORT = process.env.PORT || 5000

/**
 * Start server and initialize model
 */
async function startServer() {
  try {
    console.log('🚀 Starting Palm Oil Grading Backend...')
    
    // Initialize ML model on startup
    console.log('📦 Loading TFLite model...')
    await initializeModel()
    console.log('✅ Model loaded successfully')

    // Start Express server
    app.listen(PORT, () => {
      console.log(`\n✅ Server running on port ${PORT}`)
      console.log(`📍 Health check: http://localhost:${PORT}/health`)
      console.log(`📍 Inference endpoint: http://localhost:${PORT}/api/model/run`)
      console.log('\n🎯 Ready to receive inference requests\n')
    })
  } catch (error) {
    console.error('❌ Failed to start server:', error)
    process.exit(1)
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n⏹️  Shutting down server...')
  process.exit(0)
})

process.on('SIGTERM', () => {
  console.log('\n⏹️  Shutting down server...')
  process.exit(0)
})

// Start the server
startServer()
