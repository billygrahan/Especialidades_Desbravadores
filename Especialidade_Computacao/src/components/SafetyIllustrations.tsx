import type { ReactNode } from 'react'

export function NetworkIllustration(): ReactNode {
  return (
    <div className="network-visual">
      <div className="router">
        <span>⌁</span>
        <b>Wi-Fi</b>
      </div>
      <div className="net-lines">
        <i />
        <i />
        <i />
      </div>
      <div className="net-devices">
        <span>📱</span>
        <span>💻</span>
        <span>🖨️</span>
      </div>
      <div className="power-chips">
        <span>⚡ Filtro de linha</span>
        <span>🔋 Nobreak</span>
      </div>
    </div>
  )
}

export function ChecklistIllustration(): ReactNode {
  return (
    <div className="safe-visual">
      <div>
        <span className="check-mark">✓</span>
        <b>Desligar pelo menu</b>
      </div>
      <div>
        <span className="check-mark">✓</span>
        <b>Manter líquidos longe</b>
      </div>
      <div>
        <span className="check-mark">✓</span>
        <b>Deixar o ar circular</b>
      </div>
      <div>
        <span className="x-mark">×</span>
        <b>Abrir sem orientação</b>
      </div>
    </div>
  )
}

export function FoldersIllustration(): ReactNode {
  return (
    <div className="folder-visual">
      <div className="folder-line">
        <span>📁</span>
        <b>Clube</b>
      </div>
      <div className="folder-line indent">
        <span>📁</span>
        <b>Especialidades</b>
      </div>
      <div className="folder-line indent-more">
        <span>📁</span>
        <b>Computação</b>
      </div>
      <div className="folder-line file-line">
        <span>📄</span>
        <b>meu-trabalho.pdf</b>
        <small>PDF · 1,2 MB</small>
      </div>
    </div>
  )
}

export function BackupIllustration(): ReactNode {
  return (
    <div className="backup-visual">
      <div className="backup-center">
        📂<b>Seus arquivos</b>
      </div>
      <div className="backup-branches">
        <span />
        <span />
      </div>
      <div className="backup-destinations">
        <div>
          <span>▰</span>
          <b>Dispositivo</b>
        </div>
        <div>
          <span>☁</span>
          <b>Nuvem</b>
        </div>
      </div>
      <div className="zip-tag">ZIP · vários arquivos em um pacote</div>
    </div>
  )
}
