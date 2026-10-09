import type { ReactNode } from 'react'

export function FlowIllustration(): ReactNode {
  return (
    <div className="flow-visual">
      <div>
        <span>⌨️</span>
        <b>Entrada</b>
        <small>Teclado</small>
      </div>
      <i>→</i>
      <div className="processor">
        <span>◉</span>
        <b>Processa</b>
        <small>CPU</small>
      </div>
      <i>→</i>
      <div>
        <span>🖥️</span>
        <b>Saída</b>
        <small>Monitor</small>
      </div>
    </div>
  )
}

export function PortsIllustration(): ReactNode {
  return (
    <div className="port-visual">
      <div className="port">
        <span className="usb">⇅</span>
        <b>USB</b>
        <small>Dados e acessórios</small>
      </div>
      <div className="port">
        <span className="hdmi">▰</span>
        <b>HDMI</b>
        <small>Imagem + áudio</small>
      </div>
      <div className="port">
        <span className="vga">⠿</span>
        <b>VGA</b>
        <small>Vídeo analógico</small>
      </div>
      <div className="print-card">
        <span>▤</span>
        <b>Pré-visualize</b>
        <small>Confira antes de imprimir</small>
      </div>
    </div>
  )
}

export function ComponentsIllustration(): ReactNode {
  return (
    <div className="board-visual">
      <div className="board">
        <div className="board-cpu">CPU</div>
        <div className="board-slot slot-a" />
        <div className="board-slot slot-b" />
        <div className="board-port" />
        <span className="board-label label-a">Processador</span>
        <span className="board-label label-b">Placa-mãe</span>
        <span className="board-label label-c">Memória</span>
      </div>
    </div>
  )
}

export function MemoryIllustration(): ReactNode {
  return (
    <div className="memory-visual">
      <div className="memory-card ram">
        <span>⚡</span>
        <b>RAM</b>
        <small>rápida · temporária</small>
        <div className="speed">
          <i style={{ width: '88%' }} />
        </div>
      </div>
      <div className="memory-card ssd">
        <span>▦</span>
        <b>SSD</b>
        <small>armazenamento · rápido</small>
        <div className="speed">
          <i style={{ width: '72%' }} />
        </div>
      </div>
      <div className="memory-card hd">
        <span>◉</span>
        <b>HD</b>
        <small>armazenamento · mecânico</small>
        <div className="speed">
          <i style={{ width: '36%' }} />
        </div>
      </div>
    </div>
  )
}
