// Painting-card wrapper used by book pages to display plates / artwork.
// Identical copy from the-shadow-of-the-torturer and the-claw-of-the-conciliator
// per-section dirs (verified byte-identical at migration time).
//
// id/title are optional: when given, the figure renders inside the shared
// VizFigure frame (header strip + fullscreen/zoom) like every other
// visualization. Omitted, it renders bare as before - existing callers are
// unaffected.
import { VizFigure } from '../../../../viz-figure'

export function Plate({ src, alt, caption, credit, id, title, width, height }) {
  const figure = (
    <figure className="lrn-figure">
      <img src={src} alt={alt} width={width} height={height} loading="lazy" />
      <figcaption>
        {caption}
        {credit && (
          <span
            style={{
              display: 'block',
              opacity: 0.55,
              fontSize: '0.7rem',
              marginTop: 6,
              letterSpacing: '0.02em'
            }}
          >
            {credit}
          </span>
        )}
      </figcaption>
    </figure>
  )

  if (!title) return figure

  return (
    <VizFigure aspect="auto" title={title}>
      {figure}
    </VizFigure>
  )
}
