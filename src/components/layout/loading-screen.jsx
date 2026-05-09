import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const CSS = `
.ascent {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: grid;
  place-items: center;
  background: var(--bg);
  will-change: opacity;
  transition: opacity 800ms cubic-bezier(0.16, 1, 0.3, 1);
}
.ascent[data-done] {
  opacity: 0;
  pointer-events: none;
}

.ascent .center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  animation: ascent-rise 1200ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes ascent-rise {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

.ascent .mark {
  position: relative;
  width: 132px;
  height: 132px;
  display: grid;
  place-items: center;
}
.ascent .mark svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.ascent .mark .frame {
  fill: none;
  stroke: var(--text-primary);
  stroke-width: 1;
  stroke-dasharray: 374;
  stroke-dashoffset: 374;
  animation: ascent-draw 1400ms cubic-bezier(0.65, 0, 0.35, 1) 100ms forwards;
}
@keyframes ascent-draw { to { stroke-dashoffset: 0; } }

.ascent .mark .halo {
  position: absolute;
  inset: -28px;
  border-radius: 50%;
  background: radial-gradient(closest-side, var(--border-default), transparent 70%);
  opacity: 0;
  animation: ascent-bloom 4s ease-in-out 1300ms infinite;
}
@keyframes ascent-bloom {
  0%, 100% { opacity: 0.25; transform: scale(0.96); }
  50%      { opacity: 0.6;  transform: scale(1.04); }
}

.ascent .mark .glyph {
  position: relative;
  font-family: 'D-DIN', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 1;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  opacity: 0;
  animation: ascent-glyph-in 700ms cubic-bezier(0.16, 1, 0.3, 1) 1100ms forwards;
}
@keyframes ascent-glyph-in {
  from { opacity: 0; transform: scale(0.94); filter: blur(6px); }
  to   { opacity: 1; transform: scale(1);    filter: blur(0); }
}

.ascent .below {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  opacity: 0;
  animation: ascent-settle 700ms cubic-bezier(0.16, 1, 0.3, 1) 1500ms forwards;
}
@keyframes ascent-settle {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.ascent .wordmark {
  font-family: 'D-DIN', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 12px;
  letter-spacing: 0.62em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--text-primary);
  padding-left: 0.62em;
}

.ascent .track {
  width: 220px;
  height: 1px;
  background: var(--border-default);
  position: relative;
  overflow: hidden;
}
.ascent .track .fill {
  position: absolute;
  top: 0; bottom: 0;
  left: 0;
  width: 0%;
  background: var(--text-primary);
  transition: width 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.ascent .track .fill::after {
  content: '';
  position: absolute;
  right: 0; top: -2px; bottom: -2px;
  width: 1px;
  background: var(--text-primary);
  box-shadow: 0 0 8px var(--text-secondary);
}

.ascent-sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0);
  white-space: nowrap; border-width: 0;
}

@media (prefers-reduced-motion: reduce) {
  .ascent .center,
  .ascent .mark .frame,
  .ascent .mark .halo,
  .ascent .mark .glyph,
  .ascent .below {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    stroke-dashoffset: 0 !important;
  }
}
`

const HOLD_MS = 1500 // mark + glyph land before the bar moves
const FILL_MS = 600 // progress fill duration
const SETTLE_MS = 220 // pause after fill before fade
const FADE_MS = 800 // .ascent fade-out
const REDUCED_FADE_MS = 200 // reduced-motion shortcut

export default function LoadingScreen({ open, onDone }) {
  const [done, setDone] = useState(false)
  const [fillPct, setFillPct] = useState(0)
  const [srMessage, setSrMessage] = useState('Loading')
  const fadeStarted = useRef(false)
  const reducedMotion = useRef(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  useEffect(() => {
    reducedMotion.current =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.getAttribute('data-reduced-motion') === 'on'
  }, [])

  // Drive a slow background fill while waiting for `open` so the bar isn't frozen at 0
  useEffect(() => {
    if (open || fadeStarted.current) return
    const id = setInterval(() => {
      setFillPct(p => (p < 70 ? p + 2 : p))
    }, 120)
    return () => clearInterval(id)
  }, [open])

  // When content is ready, complete the fill and fade out
  useEffect(() => {
    if (!open || fadeStarted.current) return
    fadeStarted.current = true
    setSrMessage('Content ready')

    if (reducedMotion.current) {
      setFillPct(100)
      setDone(true)
      const t = setTimeout(() => onDoneRef.current?.(), REDUCED_FADE_MS)
      return () => clearTimeout(t)
    }

    setFillPct(100)
    const settleTimer = setTimeout(() => {
      setDone(true)
    }, FILL_MS + SETTLE_MS)
    const doneTimer = setTimeout(() => onDoneRef.current?.(), FILL_MS + SETTLE_MS + FADE_MS)
    return () => {
      clearTimeout(settleTimer)
      clearTimeout(doneTimer)
    }
  }, [open])

  // Esc to skip
  useEffect(() => {
    const onKey = e => {
      if (e.key !== 'Escape' || fadeStarted.current) return
      fadeStarted.current = true
      setFillPct(100)
      setDone(true)
      setTimeout(() => onDoneRef.current?.(), reducedMotion.current ? REDUCED_FADE_MS : FADE_MS)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // After fade-out finishes, unmount entirely
  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => setSrMessage(''), reducedMotion.current ? REDUCED_FADE_MS : FADE_MS)
    return () => clearTimeout(t)
  }, [done])

  // Initial hold delay while entrance animations play
  useEffect(() => {
    if (open) return
    const t = setTimeout(() => {}, HOLD_MS)
    return () => clearTimeout(t)
  }, [open])

  return createPortal(
    <>
      <style>{CSS}</style>
      <div
        className="ascent"
        role="status"
        aria-live="polite"
        aria-label="Loading"
        data-done={done || undefined}
      >
        <div className="center">
          <div className="mark" aria-hidden="true">
            <svg viewBox="-50 -50 100 100">
              <polygon className="frame" points="0,-46 46,0 0,46 -46,0" />
            </svg>
            <div className="halo" />
            <div className="glyph">Æ</div>
          </div>
          <div className="below">
            <div className="wordmark">Æther</div>
            <div className="track" aria-hidden="true">
              <div className="fill" style={{ width: `${fillPct}%` }} />
            </div>
          </div>
        </div>
        <span className="ascent-sr-only">{srMessage}</span>
      </div>
    </>,
    document.body
  )
}
