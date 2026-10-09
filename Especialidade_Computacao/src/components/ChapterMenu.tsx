import type { Page } from '../content/pages'

type ChapterMenuProps = {
  pages: Page[]
  currentPage: number
  onSelectPage: (pageIndex: number) => void
}

export function ChapterMenu({ pages, currentPage, onSelectPage }: ChapterMenuProps) {
  return (
    <nav className="chapter-menu" aria-label="Índice das páginas">
      {pages.map((page, index) => (
        <button
          key={page.title}
          className={index === currentPage ? 'active' : ''}
          type="button"
          aria-current={index === currentPage ? 'page' : undefined}
          onClick={() => onSelectPage(index)}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          {page.title}
        </button>
      ))}
    </nav>
  )
}
