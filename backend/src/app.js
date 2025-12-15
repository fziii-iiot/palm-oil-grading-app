/**
 * Express Application Configuration
 * 
 * Sets up Express server with middleware and routes
 */

import express from 'express'
import cors from 'cors'
import modelRouter from './routes/model.route.js'

const app = express()

// Middleware
app.use(cors())
app.use(express.json({ limit: '50mb' })) // Support large base64 images
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'palm-oil-grading-backend'
  })
})

// API Routes
app.use('/api/model', modelRouter)

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  })
})

// Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error'
  })
})

export default app
