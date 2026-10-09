import { Shield } from './Shield'

type SiteHeaderProps = {
  isMenuOpen: boolean
  onHome: () => void
  onToggleMenu: () => void
}

export function SiteHeader({ isMenuOpen, onHome, onToggleMenu }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <button className="brand" type="button" onClick={onHome}>
        <Shield small />
        <span>
          <b>TRILHA DIGITAL</b>
          <small>ESPECIALIDADE DE COMPUTAÇÃO</small>
        </span>
      </button>
      <button
        className="menu-button"
        type="button"
        aria-label={isMenuOpen ? 'Fechar índice' : 'Abrir índice'}
        aria-expanded={isMenuOpen}
        onClick={onToggleMenu}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
