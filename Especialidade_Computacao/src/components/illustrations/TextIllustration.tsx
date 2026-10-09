import type { ReactNode } from 'react'

export function TextIllustration(): ReactNode {
  return (
    <div className="editor-visual">
      <div className="editor-toolbar">
        <b>B</b>
        <i>I</i>
        <u>U</u>
        <span>≡</span>
        <span>☷</span>
      </div>
      <div className="editor-page">
        <strong>Relatório da equipe</strong>
        <i />
        <i />
        <i className="short-line" />
        <div className="editor-highlight">Ideia principal em destaque</div>
        <i />
        <i className="short-line" />
      </div>
    </div>
  )
}
