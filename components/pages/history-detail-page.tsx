'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft } from 'lucide-react'

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

interface HistoryDetailPageProps {
  item: HistoryItem | null
  onBack: () => void
}

export default function HistoryDetailPage({
  item,
  onBack,
}: HistoryDetailPageProps) {
  if (!item) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>No item selected</p>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col p-4 pb-24 gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 pt-2">
        <button
          onClick={onBack}
          className="p-1 hover:bg-muted rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-xl font-bold">Record Details</h1>
          <p className="text-sm text-muted-foreground">View full measurement</p>
        </div>
      </div>

      {/* Image */}
      <Card>
        <CardContent className="p-3">
          <img
            src={item.image || "/placeholder.svg"}
            alt="Recorded bunch"
            className="w-full rounded-lg object-cover h-64"
          />
        </CardContent>
      </Card>

      {/* Analysis Results */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">Analysis Results</h2>
            {item.inferenceTime && (
              <Badge variant="outline" className="text-xs">
                {item.inferenceTime}ms
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Bunch Count */}
          {item.totalBunches !== undefined && (
            <div>
              <label className="text-xs text-muted-foreground font-medium">Total Bunches Detected</label>
              <div className="mt-1 p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border-2 border-primary/20">
                <p className="text-3xl font-bold text-primary">{item.totalBunches}</p>
              </div>
            </div>
          )}

          {/* Classification Breakdown */}
          {item.classificationSummary && Object.keys(item.classificationSummary).length > 0 && (
            <div>
              <label className="text-xs text-muted-foreground font-medium mb-2 block">Classification Summary</label>
              <div className="space-y-2">
                {Object.entries(item.classificationSummary).map(([className, count]) => {
                  const color = className.includes('unripe') ? { bg: '#00FF00', text: '#00AA00' } :
                               className.includes('over') ? { bg: '#FF0000', text: '#CC0000' } :
                               { bg: '#FFA500', text: '#CC8400' }
                  
                  const total = item.totalBunches || Object.values(item.classificationSummary!).reduce((a, b) => a + b, 0)
                  const percentage = total > 0 ? ((count / total) * 100).toFixed(0) : 0
                  
                  return (
                    <div key={className} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: color.bg }} />
                      <div className="flex-1">
                        <p className="text-sm font-medium capitalize">{className}</p>
                        <p className="text-xs text-muted-foreground">{percentage}% of total</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold" style={{ color: color.text }}>{count}</p>
                        <p className="text-xs text-muted-foreground">bunch{count !== 1 ? 'es' : ''}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Timestamp */}
          <div>
            <label className="text-xs text-muted-foreground font-medium">Recorded</label>
            <div className="mt-1 p-3 bg-muted rounded-lg">
              <p className="text-sm">{item.timestamp}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Retry Sync Button */}
      {item.status === 'unsynced' && (
        <Button
          size="lg"
          variant="outline"
          className="w-full h-12"
        >
          Retry Sync
        </Button>
      )}
    </div>
  )
}
