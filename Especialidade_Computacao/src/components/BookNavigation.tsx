type BookNavigationProps = {
  currentPage: number
  totalPages: number
  onPrevious: () => void
  onNext: () => void
}

export function BookNavigation({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: BookNavigationProps) {
  return (
    <footer className="book-nav">
      <button
        className="nav-button previous"
        type="button"
        onClick={onPrevious}
        disabled={currentPage === 0}
      >
        <span aria-hidden="true">←</span>
        <b>Anterior</b>
      </button>
      <div
        className="page-count"
        aria-label={`Página ${currentPage + 1} de ${totalPages}`}
      >
        <span>Página</span>
        <b>{currentPage + 1}</b>
        <span>de {totalPages}</span>
      </div>
      <button
        className="nav-button next"
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
      >
        <b>Próximo</b>
        <span aria-hidden="true">→</span>
      </button>
    </footer>
  )
}
