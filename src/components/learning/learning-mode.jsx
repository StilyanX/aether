import { useContext } from 'react'
import { useMathJax } from '../../hooks/use-mathjax'
import { useCodeBlockEnhancer } from '../../hooks/use-code-enhancer'
import { TopicMetaContext } from '../home/topic-meta-context'

export default function LearningMode({ config, hasMath }) {
  useMathJax([], hasMath)
  useCodeBlockEnhancer()
  const { category, title, subtitle, sections, cover, hero } = config.learning
  const { moduleNumber } = useContext(TopicMetaContext)
  const labelText = moduleNumber != null ? `Module ${moduleNumber}` : category

  return (
    <article className="lrn" aria-label={`${title} learning content`}>
      {hero?.youtubeId ? (
        <div className="lrn-hero" data-section="header">
          <div className="lrn-hero-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${hero.youtubeId}`}
              title={title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      ) : (
        <div className="lrn-header" data-section="header">
          <div className="lrn-header-text">
            <span className="lrn-label">{labelText}</span>
            <h1>{title}</h1>
          </div>
          {cover && (
            <img
              className="lrn-cover"
              src={cover.src || `https://covers.openlibrary.org/b/id/${cover.id}-L.jpg`}
              alt={`${title} cover`}
              onError={e => {
                e.currentTarget.style.display = 'none'
              }}
            />
          )}
        </div>
      )}

      {sections.map((section, i) => (
        <section
          key={i}
          id={`lrn-section-${i}`}
          className="lrn-section"
          data-section={`s${i + 1}`}
          data-section-index={i}
        >
          {section.title && <h2>{section.title}</h2>}
          {section.content || section}
        </section>
      ))}

      {config.source && (
        <footer
          style={{
            marginTop: '48px',
            padding: '24px 32px',
            borderTop: '1px solid color-mix(in srgb, var(--base-color) 18%, transparent)',
            display: 'flex',
            alignItems: 'baseline',
            gap: '10px'
          }}
        >
          <span
            style={{
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-ghost)',
              flexShrink: 0
            }}
          >
            Source
          </span>
          <span
            style={{
              fontSize: '13px',
              color: 'var(--text-tertiary)',
              fontStyle: 'italic'
            }}
          >
            {config.source}
          </span>
        </footer>
      )}
    </article>
  )
}
