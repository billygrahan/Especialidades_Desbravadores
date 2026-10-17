import type { ReactNode } from 'react'

export function SpreadsheetIllustration(): ReactNode {
  return (
    <div className="sheet-visual">
      <div className="sheet-title">Análize Técnica</div>
      <div className="sheet-grid">
        <b>Parâmetro</b>
        <b>Análize</b>
        <b></b>
        <span>Alimentação</span>
        <span>12</span>
        <span></span>
        <span>Materiais</span>
        <span>4</span>
        <span></span>
        <strong>Total</strong>
        <strong />
        <strong className="sum">R$ 320</strong>
      </div>
      <div className="formula">ƒx &nbsp; =SOMA(C2:C3)</div>
    </div>
  )
}
