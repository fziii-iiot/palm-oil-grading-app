'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import LoginPage from '@/components/pages/login-page'
import CapturePage from '@/components/pages/capture-page'
import ProcessingPage from '@/components/pages/processing-page'
import ResultPage from '@/components/pages/result-page'
import HistoryPage from '@/components/pages/history-page'
import HistoryDetailPage from '@/components/pages/history-detail-page'
import ProfilePage from '@/components/pages/profile-page'
import BottomNav from '@/components/bottom-nav'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<string>('login')
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<any>(null)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setCurrentPage('capture')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('login')
  }

  const handleSelectHistoryItem = (item: any) => {
    setSelectedHistoryItem(item)
    setCurrentPage('history-detail')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />
      case 'capture':
        // CapturePage handles its own flow: camera → processing → result
        // It manages the captured image internally and shows it in all views
        return <CapturePage />
      case 'history':
        return (
          <HistoryPage onSelectItem={handleSelectHistoryItem} />
        )
      case 'history-detail':
        return (
          <HistoryDetailPage
            item={selectedHistoryItem}
            onBack={() => setCurrentPage('history')}
          />
        )
      case 'profile':
        return <ProfilePage onLogout={handleLogout} />
      default:
        return <LoginPage onLogin={handleLogin} />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {renderPage()}
      {isLoggedIn && (
        <BottomNav
          currentPage={currentPage}
          onNavigate={setCurrentPage}
        />
      )}
    </div>
  )
}
