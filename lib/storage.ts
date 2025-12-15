/**
 * Storage utility for saving grading history
 * Uses localStorage for simple persistence
 */

export interface GradingRecord {
  id: string
  imageUrl: string
  predictions: number[]
  topClass: number
  confidence: number
  inferenceTime: number
  timestamp: number
  grade?: string
}

const STORAGE_KEY = 'palm_oil_grading_history'

/**
 * Get all grading records from storage
 */
export function getGradingHistory(): GradingRecord[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []
    return JSON.parse(data)
  } catch (error) {
    console.error('[Storage] Failed to load history:', error)
    return []
  }
}

/**
 * Save a new grading record
 */
export function saveGradingRecord(record: Omit<GradingRecord, 'id' | 'timestamp'>): GradingRecord {
  try {
    const history = getGradingHistory()
    
    const newRecord: GradingRecord = {
      ...record,
      id: generateId(),
      timestamp: Date.now()
    }
    
    // Add to beginning of array (newest first)
    history.unshift(newRecord)
    
    // Limit to last 100 records
    const limitedHistory = history.slice(0, 100)
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedHistory))
    
    console.log('[Storage] Saved grading record:', newRecord.id)
    return newRecord
  } catch (error) {
    console.error('[Storage] Failed to save record:', error)
    throw new Error('Failed to save grading record')
  }
}

/**
 * Delete a grading record by ID
 */
export function deleteGradingRecord(id: string): void {
  try {
    const history = getGradingHistory()
    const filtered = history.filter(record => record.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    console.log('[Storage] Deleted record:', id)
  } catch (error) {
    console.error('[Storage] Failed to delete record:', error)
  }
}

/**
 * Clear all grading history
 */
export function clearGradingHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
    console.log('[Storage] Cleared all history')
  } catch (error) {
    console.error('[Storage] Failed to clear history:', error)
  }
}

/**
 * Get a single grading record by ID
 */
export function getGradingRecord(id: string): GradingRecord | null {
  const history = getGradingHistory()
  return history.find(record => record.id === id) || null
}

/**
 * Generate a unique ID
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Get storage statistics
 */
export function getStorageStats() {
  const history = getGradingHistory()
  return {
    totalRecords: history.length,
    oldestRecord: history[history.length - 1]?.timestamp || null,
    newestRecord: history[0]?.timestamp || null
  }
}
