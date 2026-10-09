type ProgressBarProps = {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      className="progress-track"
      role="progressbar"
      aria-label="Progresso da leitura"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <span style={{ width: `${progress}%` }} />
    </div>
  )
}
