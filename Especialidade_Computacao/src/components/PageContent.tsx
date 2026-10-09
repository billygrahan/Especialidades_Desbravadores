import type { Page } from '../content/pages'
import { Illustration } from './illustrations/Illustration'
import { KnowledgeQuiz } from './KnowledgeQuiz'
import { Shield } from './Shield'

type PageContentProps = {
  page: Page
  isCover: boolean
  isFinalPage: boolean
  onStart: () => void
  onMission: () => void
}

export function PageContent({
  page,
  isCover,
  isFinalPage,
  onStart,
  onMission,
}: PageContentProps) {
  return (
    <section className="page-scroll">
      <div className={`page-content ${isCover ? 'cover-page' : ''}`}>
        <div className="page-copy">
          <span className="eyebrow">
            <i />
            {page.eyebrow}
          </span>
          <h1>{page.title}</h1>
          <p className="page-intro">{page.intro}</p>
        </div>

        <Illustration type={page.visual} />

        <ul className="learning-list">
          {page.bullets.map((item) => (
            <li key={item}>
              <span aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>

        {page.tip && (
          <p className="tip">
            <span aria-hidden="true">✦</span>
            {page.tip}
          </p>
        )}

        {isCover && (
          <button className="start-button" type="button" onClick={onStart}>
            Iniciar jornada digital <span aria-hidden="true">→</span>
          </button>
        )}

        {isFinalPage && (
          <>
            <KnowledgeQuiz />
            <div className="completion-note">
              <Shield small />
              <span>
                <b>Continue explorando!</b>
                <small>Curiosidade e prática abrem novos caminhos.</small>
              </span>
            </div>
          </>
        )}

        {page.visual === 'checklist' && (
          <div className="mini-reminder">
            <b>Missão de hoje</b>
            <span>Organize um arquivo do seu próximo encontro do clube.</span>
            <button type="button" onClick={onMission}>
              Ver missão de organização →
            </button>
          </div>
        )}

        <div className="page-footnote">
          <Shield small />
          <span>APRENDER · EXPLORAR · COMPARTILHAR</span>
        </div>
      </div>
    </section>
  )
}
