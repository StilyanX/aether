import { useRef, useEffect, useState, useCallback } from 'react'
import './error-fallbacks.css'

const isChunkLoadError = err =>
  err?.name === 'ChunkLoadError' ||
  /Loading chunk|Failed to fetch dynamically imported module|Importing a module script failed/i.test(
    err?.message || ''
  )

// ── Tier 1: Full-page fault screen (mockup 01) ──

export function AppErrorFallback({ error, errorInfo }) {
  const primaryRef = useRef(null)
  const [stamp] = useState(() => {
    const d = new Date()
    const pad = n => String(n).padStart(2, '0')
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
  })
  const [since, setSince] = useState('just now')

  useEffect(() => {
    primaryRef.current?.focus()
    const start = Date.now()
    const id = setInterval(() => {
      const s = Math.floor((Date.now() - start) / 1000)
      if (s < 5) setSince('just now')
      else if (s < 60) setSince(`${s}s ago`)
      else setSince(`${Math.floor(s / 60)}m ${s % 60}s ago`)
    }, 1000)
    const onKey = e => {
      if (e.key === 'r' || e.key === 'R') window.location.reload()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearInterval(id)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const stack = (error?.stack || '').split('\n').slice(1, 5)

  return (
    <div className="err-stage" role="alert" aria-labelledby="fault-word">
      <article className="fault">
        <span className="mk mk-tl" /> <span className="mk mk-tr" />
        <span className="mk mk-bl" /> <span className="mk mk-br" />
        <div className="fault-main">
          <span className="fault-tag">
            <span>System fault</span>
            <span className="ref">REF · F-1042</span>
          </span>
          <h1 className="fault-word" id="fault-word" tabIndex={-1}>
            Something
            <br />
            came loose.
          </h1>
          <p className="fault-explainer">
            A rendering boundary tripped while the surface was being painted. Your work is{' '}
            <b>safe and unaffected</b>. The instrument has been isolated and a fresh attempt is one
            keystroke away.
          </p>
          <div className="fault-actions" role="group" aria-label="Recovery actions">
            <button
              ref={primaryRef}
              className="fault-btn primary"
              onClick={() => window.location.reload()}
            >
              <span className="num">01</span>
              <span>Reload surface</span>
              <span className="arrow">↗</span>
            </button>
            <button
              className="fault-btn"
              onClick={() => {
                window.location.href = '/'
              }}
            >
              <span className="num">02</span>
              <span>Return home</span>
              <span className="arrow">↗</span>
            </button>
            <button
              className="fault-btn"
              onClick={() => {
                window.open('https://github.com/StilyanX/aether/discussions', '_blank')
              }}
            >
              <span className="num">03</span>
              <span>Report</span>
              <span className="arrow">↗</span>
            </button>
          </div>
          <div className="fault-watermark">
            ÆTHER · DIAGNOSTIC
            <br />
            <b>v 4.2.16</b>
            <br />
            INSTRUMENT · LIVE
          </div>
        </div>
        <aside className="fault-side" aria-label="Diagnostic console">
          <header className="fault-side-head">
            <span>Diagnostic console</span>
            <span className="pulse">Capture</span>
          </header>
          <div className="telemetry">
            <div>
              <div className="k">Captured</div>
              <div className="v">{stamp}</div>
              <div className="sub">{since}</div>
            </div>
            <div>
              <div className="k">Surface</div>
              <div className="v">{location.pathname.split('/').slice(-1)[0] || 'root'}</div>
              <div className="sub">{location.pathname}</div>
            </div>
            <div>
              <div className="k">Severity</div>
              <div className="v warn">P2 · WARN</div>
              <div className="sub">recoverable</div>
            </div>
          </div>
          <div className="console-msg" role="status">
            <span className="lbl">Caught</span>
            <span className="stamp">+0ms</span>
            <span>{error?.message || 'Unknown render fault'}</span>
          </div>
          <div className="stack">
            <div className="stack-body">
              <div className="stack-section">Application</div>
              {stack.length === 0 && (
                <div className="stack-line">
                  <span className="ln">-</span>
                  <div>
                    <span className="at">no stack frames available</span>
                  </div>
                </div>
              )}
              {stack.map((line, i) => {
                const trimmed = line.trim().replace(/^at\s+/, '')
                const m = trimmed.match(/^(.+?)\s*\((.+?)\)$/) || [null, trimmed, '']
                return (
                  <div key={i} className={i === 0 ? 'stack-line is-origin' : 'stack-line'}>
                    <span className="ln">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <span className="at">at </span>
                      <span className="fn">{m[1]}</span>
                      {m[2] && (
                        <>
                          <span className="at"> · </span>
                          <span className="file">{m[2]}</span>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </aside>
      </article>

      {process.env.NODE_ENV === 'development' && errorInfo && (
        <details className="err-app-details">
          <summary>Component stack</summary>
          <pre>{errorInfo.componentStack}</pre>
        </details>
      )}
    </div>
  )
}

// ── Tier 2: Section fallback (mockup 02) ──

export function ContentErrorFallback({ error, onRetry }) {
  const [retrying, setRetrying] = useState(false)
  if (isChunkLoadError(error)) return <ChunkLoadFallback />

  const handleRetry = () => {
    setRetrying(true)
    setTimeout(() => {
      setRetrying(false)
      onRetry?.()
    }, 1100)
  }

  return (
    <div className="err-block" role="alert">
      <div className="err-left">
        <span className="err-tag">
          Section fault
          <span className="ref">REF · S-2074</span>
        </span>
        <h2 className="err-msg">This section didn’t finish loading.</h2>
        <p className="err-sub">
          The boundary around this block caught a render fault. The rest of the page is intact. Only
          this block needs another attempt.
        </p>
        <div className="err-meta">
          <span>
            <b>Caught</b> · just now
          </span>
          <span>
            <b>Auto-retry</b> · disabled
          </span>
        </div>
      </div>
      <div className="err-actions">
        <button className="err-btn primary" onClick={handleRetry} disabled={retrying}>
          <span className="num">01</span>
          <span>{retrying ? 'Retrying…' : 'Retry section'}</span>
          <span className="arrow">↗</span>
        </button>
        <button className="err-btn" onClick={() => window.location.reload()}>
          <span className="num">02</span>
          <span>Reload page</span>
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="retry-strip" data-on={retrying}>
        <i />
      </div>
    </div>
  )
}

// ── Tier 2b: Chunk-load (version mismatch) fallback (mockup 03) ──

export function ChunkLoadFallback() {
  const [remaining, setRemaining] = useState(8)
  const [paused, setPaused] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    if (paused || refreshing) return
    if (remaining === 0) {
      setRefreshing(true)
      const t = setTimeout(() => window.location.reload(), 600)
      return () => clearTimeout(t)
    }
    const id = setInterval(() => setRemaining(r => Math.max(0, r - 1)), 1000)
    return () => clearInterval(id)
  }, [paused, remaining, refreshing])

  return (
    <article className="update" role="alert" aria-labelledby="upd-title">
      <div className="ver-strip">
        <div className="ver is-old">
          <span className="k">Running</span>
          <span className="v">previous</span>
        </div>
        <div className="ver-arrow">→</div>
        <div className="ver is-new">
          <span className="k">Available</span>
          <span className="v">current</span>
        </div>
      </div>

      <div className="upd-body">
        <span className="body-tag">Update available · No data lost</span>
        <h1 id="upd-title">A newer Aether is ready.</h1>
        <p>
          The version you’re running was retired while you were here. A quick refresh pulls the
          latest surface. Your place is preserved.
        </p>
      </div>

      <div className="upd-actions">
        <button
          className="upd-btn primary"
          disabled={refreshing}
          onClick={() => {
            setRefreshing(true)
            setTimeout(() => window.location.reload(), 600)
          }}
        >
          {refreshing ? 'Refreshing…' : 'Refresh now'}
          <span className="arrow">↗</span>
        </button>
        <button
          className="upd-btn secondary"
          onClick={() => {
            setPaused(true)
            setRemaining(0)
          }}
        >
          Not yet
          <span className="arrow">→</span>
        </button>
      </div>

      <div className="meter" data-paused={paused}>
        <i />
      </div>
      <div className="meter-info">
        <span className="lbl">Auto-refresh</span>
        <span className="count">
          {refreshing ? 'refreshing…' : paused ? `paused · ${remaining}s` : `in ${remaining}s`}
        </span>
        <button className="pause" onClick={() => setPaused(p => !p)}>
          {paused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </article>
  )
}

// ── Tier 3: Widget placeholder (mockup 04) ──

export function WidgetErrorFallback({ aspectRatio, onRetry, label = 'Visualization' }) {
  const retryRef = useRef(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    retryRef.current?.focus()
  }, [])

  const handleRetry = useCallback(() => {
    if (!onRetry) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onRetry()
    }, 700)
  }, [onRetry])

  return (
    <div className="tile err-tile" role="alert" style={aspectRatio ? { aspectRatio } : undefined}>
      <div className="tile-bar">
        <span>{label} · fault</span>
        <span className="pill">REF · W-3091</span>
      </div>
      <div className="err-body">
        <div className="err-glyph">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d="M16 4 L28 26 L4 26 Z" />
            <line x1="16" y1="13" x2="16" y2="20" />
            <circle cx="16" cy="23" r="0.8" fill="currentColor" />
          </svg>
          <div>
            <h2 className="ttl">Visualization unavailable</h2>
            <p className="sub">
              The data fetched fine, but the renderer didn’t. Other widgets are unaffected.
            </p>
          </div>
        </div>
        <div className="err-foot">
          <div className="err-meta">
            <b>Caught</b> · just now
          </div>
          {onRetry && (
            <button
              ref={retryRef}
              className="err-retry"
              data-loading={loading}
              onClick={handleRetry}
              disabled={loading}
              aria-label="Retry loading this visualization"
            >
              <span className="spin" />
              <span>{loading ? 'Retrying' : 'Retry'}</span>
              <span className="arrow">↗</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
