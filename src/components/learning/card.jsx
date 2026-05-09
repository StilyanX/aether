import { useState, memo, useRef } from 'react'

/**
 * Practice card component with WCAG 2.2 accessibility.
 * Supports keyboard navigation, touch gestures, and screen readers.
 */
export const Card = memo(function Card({
  item,
  revealed,
  index,
  onReveal,
  hasBeenRevealed,
  onNavigate
}) {
  const [show, setShow] = useState(false)
  const cardRef = useRef(null)
  const touchStart = useRef(null)

  const visible = show || revealed

  const handleClick = () => {
    if (!show && !hasBeenRevealed) onReveal?.()
    setShow(!show)
  }

  // Keyboard navigation (WCAG 2.2 compliant)
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        handleClick()
        break
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        onNavigate?.(index + 1)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        onNavigate?.(index - 1)
        break
      case 'Home':
        e.preventDefault()
        onNavigate?.(0)
        break
      case 'End':
        e.preventDefault()
        onNavigate?.(-1) // -1 signals "last item" to parent
        break
    }
  }

  // Touch gesture: swipe up to reveal
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientY

    // Swipe up (50px threshold) to reveal
    if (diff > 50 && !visible) {
      handleClick()
    }
    // Swipe down to hide
    else if (diff < -50 && visible) {
      setShow(false)
    }

    touchStart.current = null
  }

  // Generate accessible question preview
  const questionPreview = typeof item.q === 'string'
    ? item.q.substring(0, 50) + (item.q.length > 50 ? '...' : '')
    : `Practice question ${index + 1}`

  return (
    <div
      ref={cardRef}
      className={`card ${visible ? 'revealed' : ''} ${hasBeenRevealed ? 'answered' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      role="button"
      aria-expanded={visible}
      aria-label={`Question ${index + 1}: ${questionPreview}. ${visible ? 'Answer visible' : 'Click or press Enter to reveal answer'}${hasBeenRevealed ? '. Previously answered' : ''}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <span className="card-num" aria-hidden="true">{`Q${index + 1}`}</span>
      {hasBeenRevealed && (
        <svg className="card-checkmark" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <div className="card-q">{item.q}</div>
      <div
        className={`card-a ${visible ? 'show' : ''}`}
        aria-hidden={!visible}
      >
        {item.a}
      </div>
    </div>
  )
})
