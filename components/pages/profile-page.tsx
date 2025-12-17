'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, LogOut, Trash2, CheckCircle2, Clock, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ProfilePageProps {
  onLogout: () => void
}

export default function ProfilePage({ onLogout }: ProfilePageProps) {
  const [stats, setStats] = useState({
    todayChecks: 0,
    weekChecks: 0,
    totalBunches: 0,
  })

  useEffect(() => {
    // Load statistics from history
    const historyData = localStorage.getItem('history')
    if (historyData) {
      try {
        const history = JSON.parse(historyData)
        const now = new Date()
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

        const todayChecks = history.filter((item: any) => {
          const itemDate = new Date(item.timestamp)
          return itemDate >= todayStart
        }).length

        const weekChecks = history.filter((item: any) => {
          const itemDate = new Date(item.timestamp)
          return itemDate >= weekStart
        }).length

        const totalBunches = history.reduce((sum: number, item: any) => {
          return sum + (item.totalBunches || 0)
        }, 0)

        setStats({ todayChecks, weekChecks, totalBunches })
      } catch (error) {
        console.error('Failed to load stats:', error)
      }
    }
  }, [])

  const mockUser = {
    name: 'Bunch Checker',
    role: 'Quality Inspector',
    userId: 'BC-2024-0156',
    location: 'Mill Station A',
    shiftStart: '08:00 AM',
    lastSync: '2 hours ago',
  }

  return (
    <div className="flex-1 flex flex-col p-4 pb-24 gap-4">
      {/* Header */}
      <div className="pt-2">
        <h1 className="text-xl font-bold">Profile</h1>
        <p className="text-sm text-muted-foreground">Bunch checker information</p>
      </div>

      {/* User Info Card */}
      <Card className="border-primary/20 shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground p-3 rounded-xl shadow-md">
              <User className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-lg">{mockUser.name}</h2>
                <Badge variant="secondary" className="text-xs font-medium">
                  Active
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{mockUser.role}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 border-t border-border pt-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground font-medium">User ID</label>
              <p className="text-sm font-mono font-semibold">{mockUser.userId}</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-medium">Location</label>
              <p className="text-sm font-medium">{mockUser.location}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-muted-foreground font-medium">Shift Start</label>
              <p className="text-sm font-medium">{mockUser.shiftStart}</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-medium">Last Sync</label>
              <p className="text-sm font-medium">{mockUser.lastSync}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="border-green-500/20 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10">
          <CardContent className="p-4 text-center">
            <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-green-600 dark:text-green-400" />
            <p className="text-2xl font-bold text-green-700 dark:text-green-300">{stats.todayChecks}</p>
            <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">Today</p>
          </CardContent>
        </Card>

        <Card className="border-blue-500/20 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10">
          <CardContent className="p-4 text-center">
            <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
            <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{stats.weekChecks}</p>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">This Week</p>
          </CardContent>
        </Card>

        <Card className="border-orange-500/20 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10">
          <CardContent className="p-4 text-center">
            <Clock className="w-6 h-6 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
            <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">{stats.totalBunches}</p>
            <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mt-1">Total Bunches</p>
          </CardContent>
        </Card>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          size="lg"
          variant="outline"
          className="w-full h-12 font-medium shadow-sm hover:shadow-md transition-shadow"
          onClick={() => alert('Clear local data - not implemented for demo')}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear Local Data
        </Button>

        <Button
          size="lg"
          variant="destructive"
          className="w-full h-12 bg-gradient-to-r from-destructive to-red-600 hover:from-destructive/90 hover:to-red-600/90 font-medium shadow-md hover:shadow-lg transition-all"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  )
}
