import type { ReactNode } from 'react'

export function ReportIllustration(): ReactNode {
  return (
    <div className="report-visual">
      <div className="report-paper">
        <div className="report-heading">
          <span>✦ CLUBE</span>
          <b>Relatório de atividade</b>
          <small>Equipe de Desbravadores · 2026</small>
        </div>
        <div className="report-photo">🌲</div>
        <div className="report-lines">
          <i />
          <i />
          <i className="short-line" />
        </div>
        <div className="report-table">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="pdf-stamp">
        PDF
        <br />
        <small>pronto para compartilhar</small>
      </div>
    </div>
  )
}
