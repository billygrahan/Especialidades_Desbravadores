import { useState } from 'react'
import { quiz } from '../content/quiz'

export function KnowledgeQuiz() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const question = quiz[questionIndex]

  function chooseOption(optionIndex: number) {
    if (selectedOption !== null) return
    setSelectedOption(optionIndex)
    if (optionIndex === question.answer) setScore((value) => value + 1)
  }

  function goToNextQuestion() {
    if (questionIndex === quiz.length - 1) {
      setIsComplete(true)
      return
    }
    setQuestionIndex((value) => value + 1)
    setSelectedOption(null)
  }

  function restartQuiz() {
    setQuestionIndex(0)
    setSelectedOption(null)
    setScore(0)
    setIsComplete(false)
  }

  return (
    <section className="quiz-box" aria-live="polite">
      {isComplete ? (
        <QuizResult score={score} onRestart={restartQuiz} />
      ) : (
        <>
          <div className="quiz-progress">
            DESAFIO {questionIndex + 1} DE {quiz.length}
            <span aria-hidden="true">
              {'●'.repeat(questionIndex + 1)}
              {'○'.repeat(quiz.length - questionIndex - 1)}
            </span>
          </div>
          <h2>{question.q}</h2>
          <div className="quiz-options">
            {question.options.map((option, index) => {
              const isCorrect = index === question.answer
              const isSelected = index === selectedOption
              const answerState = selectedOption === null
                ? ''
                : isCorrect
                  ? 'correct'
                  : isSelected
                    ? 'wrong'
                    : ''

              return (
                <button
                  key={option}
                  className={`${isSelected ? 'selected' : ''} ${answerState}`}
                  type="button"
                  onClick={() => chooseOption(index)}
                  disabled={selectedOption !== null}
                >
                  {option}
                  <span aria-hidden="true">
                    {selectedOption !== null && isCorrect ? '✓' : ''}
                  </span>
                </button>
              )
            })}
          </div>
          {selectedOption !== null && (
            <div className="quiz-feedback">
              <b>{selectedOption === question.answer ? 'Muito bem!' : 'Quase!'}</b>{' '}
              {selectedOption === question.answer
                ? 'Resposta certa.'
                : 'A resposta correta está destacada.'}
              <button type="button" onClick={goToNextQuestion}>
                {questionIndex === quiz.length - 1
                  ? 'Ver resultado'
                  : 'Próxima pergunta →'}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  )
}

type QuizResultProps = {
  score: number
  onRestart: () => void
}

function QuizResult({ score, onRestart }: QuizResultProps) {
  const perfectScore = score === quiz.length

  return (
    <div className="quiz-result">
      <span aria-hidden="true">{perfectScore ? '🏅' : '✨'}</span>
      <h2>{perfectScore ? 'Excelente, explorador!' : 'Boa jornada, explorador!'}</h2>
      <p>
        Você acertou <b>{score} de {quiz.length}</b>. Continue praticando e
        compartilhando o que aprendeu.
      </p>
      <button type="button" onClick={onRestart}>Tentar novamente</button>
    </div>
  )
}
