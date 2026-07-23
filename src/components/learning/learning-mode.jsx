import { useContext, useState } from 'react'
import { useMathJax } from '../../hooks/use-mathjax'
import { useCodeBlockEnhancer } from '../../hooks/use-code-enhancer'
import { TopicMetaContext } from '../home/topic-meta-context'

function HeroVideo({ youtubeId, title }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      className="lrn-hero-play"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        onError={e => {
          e.currentTarget.src = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
        }}
      />
      <span className="lrn-hero-play-icon" aria-hidden="true" />
    </button>
  )
}

export default function LearningMode({ config, hasMath }) {
  useMathJax([], hasMath)
  useCodeBlockEnhancer()
  const { category, title, sections = [], hero } = config.learning
  const { moduleNumber } = useContext(TopicMetaContext)
  const labelText = moduleNumber != null ? `Module ${moduleNumber}` : category

  return (
    <article className="lrn" aria-label={`${title} learning content`}>
      {hero?.youtubeId ? (
        <div className="lrn-hero" data-section="header">
          <div className="lrn-hero-video">
            <HeroVideo youtubeId={hero.youtubeId} title={title} />
          </div>
        </div>
      ) : (
        <div className="lrn-header" data-section="header">
          <div className="lrn-header-text">
            <span className="lrn-label">{labelText}</span>
            <h1>{title}</h1>
          </div>
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
    </article>
  )
}
