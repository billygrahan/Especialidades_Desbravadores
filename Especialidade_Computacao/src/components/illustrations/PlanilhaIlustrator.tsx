import type { ReactNode } from 'react'

export function PlanilhaIlustrator(): ReactNode {
  return (
    <div className="sheet-visual">
      <div className="sheet-title">Análise do computador</div>

      <div className="sheet-grid sheet-grid--two-columns">
        <b>Parâmetro</b>
        <b>Análise</b>

        <span>Memória RAM</span>
        <span>Quantidade(GB) - velocidade(MHz)</span>

        <span>Armazenamento</span>
        <span>Tamanho(GB) - Valocidade de leitura e escrita(MB/s) - Vida Util(Para SSD)</span>

        <span>Processador</span>
        <span>Versão(i5/i7 ou Ryzen 5/7) - Geração(10ª, 11ª, etc.)</span>

        <span>Clock e núcleos</span>
        <span>Clock/Velocidade (GHz) - Quantidade deNúcleos</span>

        <span>Monitor</span>
        <span>Tipo(IPS, TN, OLED) - Tamanho(15.6", 17", etc.) - Resolução(Full HD, 4K, etc.) - Taxa de Quadros(60Hz, 120Hz, etc.)</span>
      </div>

      {/* <div className="formula">ƒx =SOMA(B2:B6)</div> */}
    </div>
  )
}