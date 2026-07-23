import { useParams, useNavigate } from 'react-router-dom'
import { Suspense, lazy, useState, useEffect, useCallback, useRef } from 'react'
import { topicComponentMap, resourceContent } from '../../config/registry'
import LoadingScreen from '../layout/loading-screen'
import ErrorBoundary from '../layout/error-boundary'
import { TopicMetaContext } from './topic-meta-context'
import { useBookmarks } from '../../hooks/use-bookmarks'

const featureModules = import.meta.glob('../../features/**/*.jsx')
const topicComponents = Object.fromEntries(
  Object.values(topicComponentMap)
    .filter(({ filePath }) => filePath)
    .map(({ component, filePath }) => [
      component,
      lazy(featureModules[`../../features/${filePath}.jsx`])
    ])
)

function LoadedNotifier({ onLoad }) {
  useEffect(() => {
    onLoad()
  }, [onLoad])
  return null
}

const errorScreenCss = `
@keyframes err-arrive { from { opacity: 0; } to { opacity: 1; } }
.err-screen {
  position: fixed; inset: 0; z-index: 9999;
  background: var(--bg);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding-bottom: 10vh;
  font-family: var(--reader-font-family);
}
.err-word {
  font-weight: 400;
  font-size: clamp(3rem, 8vw, 6rem);
  color: color-mix(in srgb, var(--base-color) 70%, transparent);
  text-transform: uppercase;
  letter-spacing: 0.4em;
  margin: 0;
  animation: err-arrive 0.5s ease-out both;
}
.err-path {
  display: flex; align-items: center; gap: 0;
  margin: 48px 0 0 0;
  animation: err-arrive 0.5s ease-out 0.2s both;
}
.err-path-seg {
  font-size: 0.875rem;
  letter-spacing: 0.15em;
}
.err-path-sep {
  font-size: 0.75rem;
  color: color-mix(in srgb, var(--base-color) 10%, transparent);
  margin: 0 10px;
}
.err-back {
  background: transparent; border: none;
  color: color-mix(in srgb, var(--base-color) 25%, transparent);
  font-family: var(--reader-font-family);
  font-size: 0.7rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 48px; padding: 22px 32px;
  transition: color 0.2s ease;
  line-height: 1;
  animation: err-arrive 0.5s ease-out 0.4s both;
}
.err-back:hover { color: color-mix(in srgb, var(--base-color) 60%, transparent); }
.err-ts {
  position: absolute; bottom: 24px; right: 32px;
  font-size: 0.7rem; letter-spacing: 0.08em;
  color: color-mix(in srgb, var(--base-color) 10%, transparent);
  font-variant-numeric: tabular-nums;
  animation: err-arrive 0.5s ease-out 0.6s both;
}
`

function ErrorScreen({ word, detail, onReturn }) {
  const segments = (detail || '').split('/')
  const now = new Date()
  const ts = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} \u2014 ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`

  return (
    <>
      <style>{errorScreenCss}</style>
      <div className="err-screen">
        <p className="err-word">{word}</p>
        <div className="err-path">
          {segments.map((seg, i) => (
            <span key={i}>
              {i > 0 && <span className="err-path-sep">{'\u00B7'}</span>}
              <span
                className="err-path-seg"
                style={{
                  color: `color-mix(in srgb, var(--base-color) ${Math.max(25 - i * 5, 8)}%, transparent)`
                }}
              >
                {seg}
              </span>
            </span>
          ))}
        </div>
        <button className="err-back" onClick={onReturn} aria-label="Go back">
          RETURN
        </button>
        <span className="err-ts">{ts}</span>
      </div>
    </>
  )
}

function TopicStandalone() {
  const { domain, resource, module: mod, book, topic } = useParams()
  let slug = null
  if (domain && resource && book && mod) slug = `explore/${domain}/${resource}/${book}/${mod}`
  else if (domain && resource && mod) slug = `explore/${domain}/${resource}/${mod}`
  else if (!domain && resource && mod && topic) slug = `library/${resource}/${mod}/${topic}`
  else if (!domain && resource && mod) slug = `library/${resource}/${mod}`
  const navigate = useNavigate()
  const { toggleBookmark } = useBookmarks()
  const containerRef = useRef(null)
  const markCompleteRef = useRef(null)
  const lessonNavRef = useRef(null)
  const [contentLoaded, setContentLoaded] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  // renderSettled: MathJax has typeset and the layout/viz have painted, so the
  // page is fully rendered - not just JS-mounted - before the loader lifts.
  const [renderSettled, setRenderSettled] = useState(false)
  // contentReady: content becomes visible immediately when ready (no waiting for animation)
  const [contentReady, setContentReady] = useState(false)
  // screenDone: loading screen unmounts after its own fade animation finishes
  const [screenDone, setScreenDone] = useState(false)
  const handleScreenDone = useCallback(() => setScreenDone(true), [])
  const handleLoad = useCallback(() => setContentLoaded(true), [])
  // On a content load/render error, lift the loader immediately so the
  // ErrorBoundary's message isn't hidden behind the overlay until the failsafe.
  const revealNow = useCallback(() => {
    setContentLoaded(true)
    setImagesLoaded(true)
    setRenderSettled(true)
  }, [])

  useEffect(() => {
    if (contentLoaded && imagesLoaded && renderSettled) setContentReady(true)
  }, [contentLoaded, imagesLoaded, renderSettled])

  // Authoritative "render settled" for template pages. LearningTemplate holds
  // its real content behind three nested lazy chunks (learn/solve/reference)
  // plus MathJax typesetting - all of which resolve AFTER the wrapper mounts.
  // It fires aether:typeset-ready only once every mode chunk has mounted
  // and MathJax has finished, so the loader can lift onto a fully-painted page
  // instead of the blank frame the wrapper-mount heuristic used to reveal.
  useEffect(() => {
    const onReady = () => setRenderSettled(true)
    window.addEventListener('aether:typeset-ready', onReady)
    return () => window.removeEventListener('aether:typeset-ready', onReady)
  }, [])

  // After the lazy module mounts, hold the loader until the page has actually
  // rendered: wait for MathJax to typeset the initial view, then two animation
  // frames so viz mount and layout settle. Without this the screen lifts on
  // JS-mount and the reader sees raw $...$ LaTeX and shifting viz for a moment.
  useEffect(() => {
    if (!contentLoaded) return
    // A typeset-host template (LearningTemplate) owns readiness and emits
    // aether:typeset-ready when all its lazy modes + MathJax have settled.
    // Defer to that event entirely - the wrapper is mounted but the mode chunks
    // are still resolving, so settling here would lift the loader onto a blank
    // frame. The mount-relative failsafe below still backstops a stuck event.
    if (containerRef.current?.querySelector('[data-typeset-host]')) return
    let cancelled = false
    let raf1 = 0
    let raf2 = 0
    let pollId = 0
    const start = performance.now()
    const settle = () => {
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          if (!cancelled) setRenderSettled(true)
        })
      })
    }
    const tick = () => {
      if (cancelled) return
      const mj = window.MathJax
      if (mj?.typesetPromise) {
        const container = containerRef.current
        Promise.resolve(mj.typesetPromise(container ? [container] : undefined))
          .catch(() => {})
          .then(() => {
            if (!cancelled) settle()
          })
        return
      }
      const elapsed = performance.now() - start
      const mjLoading = document.querySelector('script[src*="mathjax"]')
      // No MathJax in play (ascii mode / no equations) or it never booted:
      // reveal without waiting. Hard cap keeps a stuck CDN from stalling.
      if ((!mjLoading && elapsed > 500) || elapsed > 2500) {
        settle()
        return
      }
      pollId = setTimeout(tick, 80)
    }
    tick()
    return () => {
      cancelled = true
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      clearTimeout(pollId)
    }
  }, [contentLoaded])

  // After JS loads, wait for all images in the container
  useEffect(() => {
    if (!contentLoaded) return
    const container = containerRef.current
    if (!container) {
      setImagesLoaded(true)
      return
    }
    const imgs = Array.from(container.querySelectorAll('img'))
    if (imgs.length === 0) {
      setImagesLoaded(true)
      return
    }
    // Force lazy images to load now
    imgs.forEach(img => {
      img.loading = 'eager'
    })
    const pending = imgs.filter(img => !img.complete)
    if (pending.length === 0) {
      setImagesLoaded(true)
      return
    }
    let remaining = pending.length
    const onSettle = () => {
      if (--remaining <= 0) setImagesLoaded(true)
    }
    pending.forEach(img => {
      img.addEventListener('load', onSettle, { once: true })
      img.addEventListener('error', onSettle, { once: true })
    })
    return () => {
      pending.forEach(img => {
        img.removeEventListener('load', onSettle)
        img.removeEventListener('error', onSettle)
      })
    }
  }, [contentLoaded])

  // Lock scroll while loading overlay is visible. Scroll to top FIRST so locking
  // the body doesn't freeze it at the previous page's scroll position (this child
  // effect runs before the app-level scrollTo(0,0)).
  useEffect(() => {
    if (contentReady) {
      window.scrollTo(0, 0) // land at the top the instant the loader lifts
      return
    }
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [contentReady])

  // Failsafe, two tiers. The old single 10s timer forced contentLoaded even when
  // the lazy chunk had NOT mounted yet - so a heavy page (dev-mode, large
  // physics/math bundles) whose chunk takes >10s lifted the loader onto a blank,
  // unmounted frame. Now:
  //   1. Only once the chunk has MOUNTED, reveal within 15s even if typeset /
  //      images never settle - the content is in the DOM, just not finalized.
  //   2. Absolute last resort at 30s forces contentLoaded too, for a chunk that
  //      never mounts AND never errors. A real load failure trips the
  //      ErrorBoundary first (onError -> revealNow below), so this only covers a
  //      true silent hang.
  useEffect(() => {
    if (!contentLoaded) return
    const t = setTimeout(() => {
      setImagesLoaded(true)
      setRenderSettled(true)
    }, 15000)
    return () => clearTimeout(t)
  }, [contentLoaded])

  useEffect(() => {
    const t = setTimeout(() => {
      setContentLoaded(true)
      setImagesLoaded(true)
      setRenderSettled(true)
    }, 30000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!slug) return
    const handler = () => toggleBookmark(slug)
    window.addEventListener('aether:action:bookmark', handler)
    return () => window.removeEventListener('aether:action:bookmark', handler)
  }, [slug, toggleBookmark])

  useEffect(() => {
    if (!slug) return
    const handler = () => {
      const data = markCompleteRef.current
      if (!data) return
      const prev = new Set(JSON.parse(localStorage.getItem(data.progressKey) || '[]'))
      prev.has(data.modId) ? prev.delete(data.modId) : prev.add(data.modId)
      localStorage.setItem(data.progressKey, JSON.stringify([...prev]))
    }
    window.addEventListener('aether:action:mark-complete', handler)
    return () => window.removeEventListener('aether:action:mark-complete', handler)
  }, [slug])

  useEffect(() => {
    if (!slug) return
    const handler = () => {
      const nav = lessonNavRef.current
      if (!nav || nav.currentIndex < 0 || nav.currentIndex >= nav.allTopics.length - 1) return
      const nextSlug = topicComponentMap[nav.allTopics[nav.currentIndex + 1]]?.slug
      if (nextSlug) navigate(`/${nextSlug}`)
    }
    window.addEventListener('aether:action:next-lesson', handler)
    return () => window.removeEventListener('aether:action:next-lesson', handler)
  }, [slug, navigate])

  useEffect(() => {
    if (!slug) return
    const handler = () => {
      const nav = lessonNavRef.current
      if (!nav || nav.currentIndex <= 0) return
      const prevSlug = topicComponentMap[nav.allTopics[nav.currentIndex - 1]]?.slug
      if (prevSlug) navigate(`/${prevSlug}`)
    }
    window.addEventListener('aether:action:prev-lesson', handler)
    return () => window.removeEventListener('aether:action:prev-lesson', handler)
  }, [slug, navigate])

  // Find the topic mapping
  const topicEntry = Object.entries(topicComponentMap).find(([, value]) => value.slug === slug)

  if (!topicEntry) {
    return <ErrorScreen word="NOWHERE" detail={slug} onReturn={() => navigate(-1)} />
  }

  const [topicTitle, config] = topicEntry
  const TopicComponent = topicComponents[config.component]

  if (!TopicComponent) {
    return <ErrorScreen word="PENDING" detail={topicTitle} onReturn={() => navigate(-1)} />
  }

  let moduleNumber = null
  let unitTitle = null
  const parentContent = resourceContent[config.parentSlug]
  markCompleteRef.current = null
  lessonNavRef.current = null
  if (parentContent?.units) {
    const allTopics = parentContent.units.flatMap(u =>
      (u.topics || []).map(t => (typeof t === 'object' ? t.title : t))
    )
    lessonNavRef.current = { allTopics, currentIndex: allTopics.indexOf(topicTitle) }
  }
  if (parentContent?.units) {
    for (let ui = 0; ui < parentContent.units.length; ui++) {
      const unit = parentContent.units[ui]
      const topics = unit.topics || []
      let found = false
      for (let ti = 0; ti < topics.length; ti++) {
        const rawTitle = typeof topics[ti] === 'object' ? topics[ti].title : topics[ti]
        if (rawTitle === topicTitle) {
          if (moduleNumber === null) {
            moduleNumber = ti + 1
            unitTitle = unit.title ?? null
          }
          markCompleteRef.current = {
            modId: `${ui}-${ti}`,
            progressKey: `aether-progress-${config.parentSlug}`
          }
          found = true
          break
        }
      }
      if (found) break
    }
  }

  return (
    <>
      {!screenDone && <LoadingScreen open={contentReady} onDone={handleScreenDone} />}
      <div
        ref={containerRef}
        style={contentReady ? undefined : { visibility: 'hidden', position: 'fixed', inset: 0 }}
      >
        <ErrorBoundary
          level="content"
          resetKeys={[slug]}
          onReset={() => navigate(0)}
          onError={revealNow}
        >
          <Suspense fallback={null}>
            <LoadedNotifier onLoad={handleLoad} />
            <TopicMetaContext.Provider value={{ moduleNumber, unitTitle }}>
              <TopicComponent />
            </TopicMetaContext.Provider>
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  )
}

export default TopicStandalone
