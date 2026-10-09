import { useState } from 'react'
import { pages } from './content/pages'
import { BookNavigation } from './components/BookNavigation'
import { ChapterMenu } from './components/ChapterMenu'
import { PageContent } from './components/PageContent'
import { ProgressBar } from './components/ProgressBar'
import { SiteHeader } from './components/SiteHeader'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentContent = pages[currentPage]
  const progress = ((currentPage + 1) / pages.length) * 100

  function navigateTo(pageIndex: number) {
    const nextPage = Math.max(0, Math.min(pages.length - 1, pageIndex))
    setCurrentPage(nextPage)
    setIsMenuOpen(false)
    document.querySelector('.page-scroll')?.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <main className="app-shell">
      <SiteHeader
        isMenuOpen={isMenuOpen}
        onHome={() => navigateTo(0)}
        onToggleMenu={() => setIsMenuOpen((isOpen) => !isOpen)}
      />
      <ProgressBar progress={progress} />

      {isMenuOpen && (
        <ChapterMenu
          pages={pages}
          currentPage={currentPage}
          onSelectPage={navigateTo}
        />
      )}

      <PageContent
        key={currentPage}
        page={currentContent}
        isCover={currentPage === 0}
        isFinalPage={currentPage === pages.length - 1}
        onStart={() => navigateTo(1)}
        onMission={() => navigateTo(10)}
      />

      <BookNavigation
        currentPage={currentPage}
        totalPages={pages.length}
        onPrevious={() => navigateTo(currentPage - 1)}
        onNext={() => navigateTo(currentPage + 1)}
      />
    </main>
  )
}

export default App
