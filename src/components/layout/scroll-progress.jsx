import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useSettings } from '../../hooks/use-settings'

function ScrollProgress() {
  const settings = useSettings()
  const barRef = useRef(null)
  const glowRef = useRef(null)
  const containerRef = useRef(null)
  const pctRef = useRef(null)
  const [readingTime, setReadingTime] = useState('')

  useEffect(() => {
    if (settings.readingProgress === 'off') return
    let rafId = null

    const updateProgress = () => {
      if (!barRef.current || !containerRef.current) return
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) return
      const progress = Math.min(window.pageYOffset / totalHeight, 1)

      barRef.current.style.transform = `scaleX(${progress})`

      if (glowRef.current) {
        const width = containerRef.current.offsetWidth
        glowRef.current.style.transform = `translateX(${progress * width}px)`
        glowRef.current.style.opacity = progress > 0.005 && progress < 0.995 ? '1' : '0'
      }

      if (settings.readingProgress === 'percentage' && pctRef.current) {
        pctRef.current.textContent = `${Math.round(progress * 100)}%`
      }

      if (settings.readingProgress === 'time-remaining') {
        const wordsOnPage = document.body.innerText.split(/\s+/).length
        const wpm = 230
        const remaining = Math.ceil((wordsOnPage * (1 - progress)) / wpm)
        setReadingTime(remaining <= 1 ? '< 1 min left' : `${remaining} min left`)
      }
    }

    const handleScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        updateProgress()
        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateProgress)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [settings.readingProgress])

  if (settings.readingProgress === 'off') return null

  return createPortal(
    <div className="scroll-progress" ref={containerRef}>
      <div
        ref={barRef}
        className="scroll-progress-bar"
        style={{ transformOrigin: 'left', transform: 'scaleX(0)' }}
      />
      <div
        ref={glowRef}
        className="scroll-progress-glow"
        style={{ transform: 'translateX(0px)', opacity: 0 }}
      />
      {settings.readingProgress === 'percentage' && (
        <span ref={pctRef} className="scroll-progress-label">
          0%
        </span>
      )}
      {settings.readingProgress === 'time-remaining' && readingTime && (
        <span className="scroll-progress-label">{readingTime}</span>
      )}
    </div>,
    document.body
  )
}

export default ScrollProgress
