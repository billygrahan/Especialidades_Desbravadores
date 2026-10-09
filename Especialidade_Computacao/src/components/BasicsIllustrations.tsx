import type { ReactNode } from 'react'

export function TimelineIllustration(): ReactNode {
  return (
    <div className="timeline-visual">
      {[
        ['◎', 'Ábaco', 'contar'],
        ['▤', 'ENIAC', 'calcular'],
        ['▣', 'PC', 'criar'],
        ['▰', 'Celular', 'conectar'],
      ].map(([icon, label, sub], i) => (
        <div className="time-stop" key={label}>
          <span className="time-icon">{icon}</span>
          <b>{label}</b>
          <small>{sub}</small>
          {i < 3 && <i />}
        </div>
      ))}
    </div>
  )
}

export function LayersIllustration(): ReactNode {
  return (
    <div className="layer-stack">
      <div className="layer app-layer">
        <span>▣</span>
        <b>Aplicativos</b>
        <small>O que você usa</small>
      </div>
      <div className="layer os-layer">
        <span>◈</span>
        <b>Sistema operacional</b>
        <small>Organiza tudo</small>
      </div>
      <div className="layer hard-layer">
        <span>▦</span>
        <b>Hardware</b>
        <small>As peças físicas</small>
      </div>
    </div>
  )
}

export function DevicesIllustration(): ReactNode {
  return (
    <div className="device-grid">
      {[
        ['▰', 'Notebook'],
        ['▯', 'Celular'],
        ['▣', 'Desktop'],
        ['▱', 'Tablet'],
        ['◉', 'Servidor'],
        ['⌚', 'Relógio'],
      ].map(([i, n]) => (
        <div className="device" key={n}>
          <span>{i}</span>
          <b>{n}</b>
        </div>
      ))}
    </div>
  )
}
