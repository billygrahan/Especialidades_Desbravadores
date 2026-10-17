import type { ReactNode } from 'react'

export function PlanilhaIlustrator(): ReactNode {
  return (
    <div className="sheet-visual">
      <div className="sheet-title">Análise Técnica</div>

      <div className="sheet-grid sheet-grid--two-columns">
        <b>Parâmetro</b>
        <b>Análise</b>

        <span>Memoria RAM</span>
        <span>Velocidade(MHz) - Capacidade(GB)</span>

        <span>Materiais</span>
        <span>4</span>

        <span>Temperatura</span>
        <span>25°C</span>

        <span>Consumo</span>
        <span>150 W</span>

        <span>Eficiência</span>
        <span>92%</span>
      </div>

      {/* <div className="formula">ƒx =SOMA(B2:B6)</div> */}
    </div>
  )
}