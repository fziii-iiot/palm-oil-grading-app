'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'
import { getGradingHistory, type GradingRecord } from '@/lib/storage'

interface HistoryItem {
  id: string
  grade: string
  quantity: string
  status: 'synced' | 'unsynced'
  timestamp: string
  image: string
  confidence?: number
  totalBunches?: number
  classificationSummary?: Record<string, number>
  inferenceTime?: number
}

interface HistoryPageProps {
  onSelectItem: (item: HistoryItem) => void
}

// Grade labels (adjust to match your model)
const GRADE_LABELS = ['Unripe', 'Ripe', 'Overripe']

export default function HistoryPage({ onSelectItem }: HistoryPageProps) {
  const [items, setItems] = useState<HistoryItem[]>([])

  useEffect(() => {
    // Load saved grading records from storage
    const records = getGradingHistory()
    
    const historyItems: HistoryItem[] = records.map((record) => {
      const grade = GRADE_LABELS[record.topClass] || `Class ${record.topClass}`
      const confidencePercent = (record.confidence * 100).toFixed(1)
      
      // Extract additional data from record if available
      const recordData = record as any
      
      return {
        id: record.id,
        grade: grade,
        quantity: `${confidencePercent}%`,
        status: 'unsynced' as const,
        timestamp: formatTimestamp(record.timestamp),
        image: record.imageUrl,
        confidence: record.confidence,
        totalBunches: recordData.totalBunches,
        classificationSummary: recordData.classificationSummary,
        inferenceTime: recordData.inferenceTime
      }
    })
    
    setItems(historyItems)
    console.log('[HistoryPage] Loaded', historyItems.length, 'records from storage')
  }, [])

  return (
    <div className="flex-1 flex flex-col p-4 pb-24 gap-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold">Local History</h1>
        <p className="text-sm text-muted-foreground">{items.length} recorded measurements</p>
      </div>

      {/* Empty State */}
      {items.length === 0 && (
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">No History Yet</h3>
          <p className="text-sm text-muted-foreground">
            Capture and save your first grading result to see it here
          </p>
        </div>
      )}

      {/* History Items */}
      <div className="space-y-3">
        {items.map((item) => (
          <Card
            key={item.id}
            className="cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => onSelectItem(item)}
          >
            <CardContent className="p-3 flex gap-3 items-center">
              {/* Thumbnail */}
              <img
                src={item.image || "/placeholder.svg"}
                alt="Thumbnail"
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />

              {/* Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-primary">Grade {item.grade}</span>
                  {item.totalBunches !== undefined && (
                    <Badge variant="outline" className="text-xs">
                      {item.totalBunches} bunch{item.totalBunches !== 1 ? 'es' : ''}
                    </Badge>
                  )}
                </div>
                {item.classificationSummary ? (
                  <div className="flex gap-1.5 mb-1">
                    {Object.entries(item.classificationSummary).map(([className, count]) => (
                      <span key={className} className="text-xs px-1.5 py-0.5 rounded" style={{
                        backgroundColor: className.includes('unripe') ? '#00FF0020' : 
                                       className.includes('over') ? '#FF000020' : '#FFA50020',
                        color: className.includes('unripe') ? '#00AA00' : 
                               className.includes('over') ? '#CC0000' : '#CC8400'
                      }}>
                        {className}: {count}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm font-semibold mb-1">{item.quantity}</p>
                )}
                <p className="text-xs text-muted-foreground">{item.timestamp}</p>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

/**
 * Format timestamp to relative time
 */
function formatTimestamp(timestamp: number): string {
  const now = Date.now()
  const diff = now - timestamp
  
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  
  if (days > 0) {
    return days === 1 ? '1 day ago' : `${days} days ago`
  }
  if (hours > 0) {
    return hours === 1 ? '1 hour ago' : `${hours} hours ago`
  }
  if (minutes > 0) {
    return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`
  }
  return 'Just now'
}
