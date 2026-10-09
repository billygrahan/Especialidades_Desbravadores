import type { ReactNode } from 'react'

export function SpreadsheetIllustration(): ReactNode {
  return (
    <div className="sheet-visual">
      <div className="sheet-title">Orçamento do acampamento</div>
      <div className="sheet-grid">
        <b>Item</b>
        <b>Qtd.</b>
        <b>Valor</b>
        <span>Alimentação</span>
        <span>12</span>
        <span>R$ 240</span>
        <span>Materiais</span>
        <span>4</span>
        <span>R$ 80</span>
        <strong>Total</strong>
        <strong />
        <strong className="sum">R$ 320</strong>
      </div>
      <div className="formula">ƒx &nbsp; =SOMA(C2:C3)</div>
    </div>
  )
}
