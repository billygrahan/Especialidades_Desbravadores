import type { ReactNode } from 'react'

export function QuizIllustration(): ReactNode {
  return (
        <div className="quiz-art">
    <div className="trophy">🏆</div>
    <div>
      <span>JORNADA CONCLUÍDA</span>
      <b>Você está pronto para o desafio?</b>
      <small>Perguntas rápidas · sem nota</small>
    </div>
    <span className="quiz-stars">✦ ✧ ✦</span>
  </div>
  )
}
