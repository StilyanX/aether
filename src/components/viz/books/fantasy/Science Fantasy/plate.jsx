// Painting-card wrapper used by book chapter pages to display plates / artwork.
// Identical copy from the-shadow-of-the-torturer and the-claw-of-the-conciliator
// per-chapter dirs (verified byte-identical at migration time).
export function Plate({ src, alt, caption, credit }) {
  return (
    <figure className="lrn-figure">
      <img src={src} alt={alt} loading="lazy" />
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
}
