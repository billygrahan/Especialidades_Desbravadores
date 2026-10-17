import type { Page } from '../content/pages'
import { Illustration } from './illustrations/Illustration'
import { KnowledgeQuiz } from './KnowledgeQuiz'
import { PageImage } from './PageImage'
import { PageVideo } from './PageVideo'
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

        {page.visual && <Illustration type={page.visual} />}

        <ul className="learning-list">
          {page.bullets.map((item) => (
            <li key={item}>
              <span aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>

        {page.imagem && <PageImage src={page.imagem} alt={page.title} />}

        {page.bullets2 && (
          <ul className="learning-list">
            {page.bullets2.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <p className="page-intro">{page.texto}</p>

        {page.visual2 && <Illustration type={page.visual2} />}

        
        {page.video && <PageVideo src={page.video} title={page.title} />}


        {page.tip && (
          <p className="tip">
            <span aria-hidden="true">✦</span>
            {page.tip}
          </p>
        )}

        {isCover && (
          <button className="start-button" type="button" onClick={onStart}>
            Iniciar Especialidade <span aria-hidden="true">→</span>
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
          <span>Mensageiros da Promessa</span>
        </div>
      </div>
    </section>
  )
}
