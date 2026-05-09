import {
  lazy,
  Suspense,
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  useTransition
} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMathJax } from '../../hooks/use-mathjax'
import { useTheme } from '../../hooks/use-theme'
import { useSettings } from '../../hooks/use-settings'
import { resourceMetadata, slugToIndex, categoryStructure } from '../../config/registry'
import { TopicMetaContext } from '../home/topic-meta-context'
import { effectiveCombo, comboTokens } from '../../lib/keybinds'
import ErrorBoundary from '../layout/error-boundary'
import LearningSidebar from './learning-sidebar'
import KeyboardCheatsheet from './keyboard-cheatsheet'
import { useFSRS } from '../../hooks/use-fsrs'
import './learning-template.css'
import './topic-page.css'

const DOMAIN_COLOR = {
  mathematics: 'var(--domain-mathematics)',
  'computer-science': 'var(--domain-cs)',
  philosophy: 'var(--domain-philosophy)',
  history: 'var(--domain-history)',
  theology: 'var(--domain-theology)',
  linguistics: 'var(--domain-linguistics)',
  economics: 'var(--domain-economics)',
  'political-science': 'var(--domain-political-science)',
  psychology: 'var(--domain-psychology)',
  sociology: 'var(--domain-sociology)',
  anthropology: 'var(--domain-anthropology)',
  physics: 'var(--domain-physics)',
  chemistry: 'var(--domain-chemistry)',
  biology: 'var(--domain-biology)',
  medicine: 'var(--domain-medicine)',
  engineering: 'var(--domain-engineering)',
  law: 'var(--domain-law)',
  books: 'var(--domain-books)',
  papers: 'var(--domain-papers)',
  videos: 'var(--domain-videos)',
  podcasts: 'var(--domain-podcasts)'
}

function resolveDomain(domainId) {
  const all = [
    ...(categoryStructure.explore?.subcategories || []),
    ...(categoryStructure.library?.subcategories || [])
  ]
  const found = all.find(s => s.id === domainId)
  return {
    id: domainId,
    name: found?.name || domainId || '',
    color: DOMAIN_COLOR[domainId] || 'var(--accent)'
  }
}

/*
 * LISTS: NEVER mix numbers and bullets
 * - <ol className="lrn-list"> = numbers only (sequential steps)
 * - <ul className="lrn-list"> = bullets only (non-sequential items)
 *
 * ACCESSIBILITY: WCAG 2.2 / ISO 40500:2025
 * - Skip navigation link, ARIA labels on tabs, keyboard navigation (1/2/3, Tab, Enter)
 * - Screen reader announcements, 2px+ focus indicators, 44px+ touch targets
 */

const LearningMode = lazy(() => import('./learning-mode'))
const SolvingMode = lazy(() => import('./solving-mode'))
const ReferenceMode = lazy(() => import('./reference-mode'))

function checkHasMath(config) {
  const check = str => typeof str === 'string' && str.includes('$')
  if (check(config.learning?.subtitle)) return true
  if (config.practice?.some(c => check(c.q) || check(c.a))) return true
  if (check(config.customCss)) return false
  return true // default to true for safety
}

export function LearningTemplate({ config }) {
  const { unitTitle } = useContext(TopicMetaContext)
  const ltSettings = useSettings()
  const availableTabs = [
    config.learning && ['learn', 'Learning'],
    config.practice?.length > 0 && ['solve', 'Practice'],
    config.reference && ['cheat', 'Reference']
  ].filter(Boolean)

  const [tab, setTab] = useState(availableTabs[0]?.[0] || 'learn')
  const [, startTransition] = useTransition()
  const [underlineStyle, setUnderlineStyle] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [copied, setCopied] = useState(false)
  const [contentReady, setContentReady] = useState(false)
  const [shortcuts, setShortcuts] = useState(
    () => localStorage.getItem('aether-shortcuts') !== 'false'
  )
  const [isReaderOpen, setIsReaderOpen] = useState(false)
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [practiceProgress, setPracticeProgress] = useState({ index: 0, total: 0 })
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [focusMode, setFocusMode] = useState(false)
  const [cheatsheetOpen, setCheatsheetOpen] = useState(false)

  useEffect(() => {
    const onKey = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        setFocusMode(v => !v)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  const readerRef = useRef(null)

  const {
    theme,
    setTheme,
    fontScale,
    setFontScale,
    lineHeight,
    setLineHeight,
    measure,
    setMeasure
  } = useTheme()
  const navRef = useRef(null)
  const nav = useNavigate()
  const routeParams = useParams()
  const { cssPrefix, documentTitle } = config

  // Resolve domain info from the URL so the breadcrumb + masthead work generically.
  const domainInfo = useMemo(() => resolveDomain(routeParams.domain), [routeParams.domain])
  const resourceInfo = useMemo(() => {
    if (!routeParams.domain || !routeParams.resource) return null
    const slug = `explore/${routeParams.domain}/${routeParams.resource}`
    const r = resourceMetadata[slugToIndex[slug]]
    return r || null
  }, [routeParams.domain, routeParams.resource])

  const hasMath = useMemo(() => checkHasMath(config), []) // eslint-disable-line react-hooks/exhaustive-deps
  const topicSlug = config.learning.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const { status: mathStatus } = useMathJax([], hasMath)
  const fsrs = useFSRS(topicSlug, config.practice || [])

  useEffect(() => {
    document.title = documentTitle || config.learning.title + '/Aether'
  }, [documentTitle, config.learning.title])

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true))
  }, [])

  // Skip MathJax gate entirely when no math in content
  useEffect(() => {
    if (!hasMath) {
      setContentReady(true)
      return
    }
    if (mathStatus === 'ready') {
      const timer = setTimeout(() => setContentReady(true), 400)
      return () => clearTimeout(timer)
    }
  }, [mathStatus, hasMath])

  useEffect(() => {
    if (navRef.current) {
      const activeButton = navRef.current.querySelector('button.active')
      if (activeButton) {
        setUnderlineStyle({
          left: activeButton.offsetLeft,
          width: activeButton.offsetWidth
        })
      }
    }
  }, [tab])

  // Close reader panel on outside click or Escape
  useEffect(() => {
    if (!isReaderOpen) return
    const onKey = e => {
      if (e.key === 'Escape') setIsReaderOpen(false)
    }
    const onPointer = e => {
      if (readerRef.current && !readerRef.current.contains(e.target)) {
        setIsReaderOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [isReaderOpen])

  const handleTabChange = newTab => {
    if (newTab === tab) return
    startTransition(() => setTab(newTab))
    setDrawerOpen(false)
  }

  const handleSectionClick = i => {
    const el = document.getElementById(`lrn-section-${i}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSectionIndex(i)
    }
    setDrawerOpen(false)
  }

  // Track active section while reading
  useEffect(() => {
    if (tab !== 'learn' || !contentReady) return
    const sectionCount = config.learning?.sections?.length || 0
    if (sectionCount === 0) return

    const findActive = () => {
      const threshold = window.innerHeight * 0.35
      let active = 0
      for (let i = 0; i < sectionCount; i++) {
        const el = document.getElementById(`lrn-section-${i}`)
        if (!el) continue
        if (el.getBoundingClientRect().top <= threshold) active = i
        else break
      }
      setActiveSectionIndex(active)
    }

    let rafId
    const trySetup = () => {
      if (!document.getElementById('lrn-section-0')) {
        rafId = requestAnimationFrame(trySetup)
        return
      }
      findActive()
      window.addEventListener('scroll', findActive, { passive: true })
    }
    rafId = requestAnimationFrame(trySetup)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', findActive)
    }
  }, [tab, contentReady, config.learning?.sections?.length])

  const toggleShortcuts = useCallback(() => {
    setShortcuts(prev => {
      const next = !prev
      localStorage.setItem('aether-shortcuts', String(next))
      return next
    })
  }, [])

  const handleTabKeyDown = (e, tabId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleTabChange(tabId)
    }
  }

  useEffect(() => {
    const handleGlobalKeyDown = e => {
      if (!ltSettings.keyboardShortcuts) return
      const tabs = availableTabs.map(([id]) => id)
      const key = e.key
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (key === '?') {
        e.preventDefault()
        setCheatsheetOpen(v => !v)
        return
      }
      if (key === 'r' || key === 'R') {
        e.preventDefault()
        setIsReaderOpen(prev => !prev)
        return
      }
      if ((e.ctrlKey || e.metaKey) && key === 's') {
        e.preventDefault()
        window.print()
        return
      }

      if (!shortcuts) return
      if (
        (key === '1' || key === '2' || key === '3') &&
        document.activeElement?.closest('[data-card-study]')
      )
        return
      if (key === '1' && tabs[0]) {
        e.preventDefault()
        handleTabChange(tabs[0])
      } else if (key === '2' && tabs[1]) {
        e.preventDefault()
        handleTabChange(tabs[1])
      } else if (key === '3' && tabs[2]) {
        e.preventDefault()
        handleTabChange(tabs[2])
      }
    }
    document.addEventListener('keydown', handleGlobalKeyDown)
    return () => document.removeEventListener('keydown', handleGlobalKeyDown)
  }, [availableTabs, handleTabChange, shortcuts, toggleShortcuts])

  const exportMarkdown = () => {
    const panel = document.querySelector(`#${tab}-panel`)
    if (!panel) return

    const mathMap = new Map()
    if (window.MathJax?.startup?.document?.math) {
      for (const item of window.MathJax.startup.document.math) {
        if (item.typesetRoot)
          mathMap.set(item.typesetRoot, { tex: item.math, display: item.display })
      }
    }

    function walk(node) {
      if (node.nodeType === 3) return node.textContent
      if (node.nodeType !== 1) return ''
      const tag = node.tagName.toLowerCase()
      const cls = typeof node.className === 'string' ? node.className : ''
      if (tag === 'style' || tag === 'script') return ''
      if (node.hidden) return ''
      if (tag === 'mjx-container') {
        const data = mathMap.get(node)
        if (data) return data.display ? `\n\n$$${data.tex}$$\n\n` : `$${data.tex}$`
        return node.textContent
      }
      if (cls.includes('jsxgraph') || cls.includes('vis-wrapper') || cls.includes('jxgbox'))
        return '\n\n*[Interactive visualization]*\n\n'
      if (cls.includes('reading-progress') || cls.includes('vis-expand')) return ''
      const ch = () => Array.from(node.childNodes).map(walk).join('')
      switch (tag) {
        case 'h1':
          return `\n\n# ${ch()}\n\n`
        case 'h2':
          return `\n\n## ${ch()}\n\n`
        case 'h3':
          return `\n\n### ${ch()}\n\n`
        case 'p':
          return `\n\n${ch()}\n\n`
        case 'strong':
        case 'b':
          return `**${ch().trim()}**`
        case 'em':
        case 'i':
          return `*${ch().trim()}*`
        case 'ul':
        case 'ol':
          return '\n' + ch() + '\n'
        case 'li': {
          const p = node.parentElement?.tagName.toLowerCase()
          const idx = Array.from(node.parentElement.children).indexOf(node)
          return (p === 'ol' ? `${idx + 1}. ` : '- ') + ch().trim() + '\n'
        }
        case 'code':
          return node.parentElement?.tagName.toLowerCase() === 'pre' ? ch() : '`' + ch() + '`'
        case 'pre':
          return '\n\n```\n' + ch().trim() + '\n```\n\n'
        case 'br':
          return '\n'
        case 'hr':
          return '\n\n---\n\n'
        default: {
          if (cls.includes('lrn-eq')) {
            const c = ch().trim()
            return c.includes('$$') ? '\n\n' + c + '\n\n' : '\n\n$$\n' + c + '\n$$\n\n'
          }
          if (
            cls.includes('lrn-insight') ||
            cls.includes('lrn-callout') ||
            cls.includes('lrn-warning') ||
            cls.includes('lrn-tip') ||
            cls.includes('lrn-danger') ||
            cls.includes('lrn-success')
          )
            return '\n\n> ' + ch().trim().split('\n').join('\n> ') + '\n\n'
          if (cls.includes('lrn-label')) return `*${ch().trim()}*\n\n`
          return ch()
        }
      }
    }

    const md = walk(panel)
      .replace(/\n{3,}/g, '\n\n')
      .trim()
    navigator.clipboard.writeText(md).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const tabIcons = {
    learn: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    solve: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    cheat: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    )
  }

  if (!contentReady) {
    return (
      <div
        className={`lt ${cssPrefix}`}
        style={{
          minHeight: '100vh',
          background: 'var(--bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--reader-font-family)',
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}
      >
        {mathStatus === 'loading'
          ? 'Loading...'
          : mathStatus === 'error'
            ? 'Error loading content'
            : 'Preparing content...'}
      </div>
    )
  }

  const resourceTitle = resourceInfo?.title || config.learning.title
  const moduleTitle = config.learning.title
  const breadcrumbTail = resourceInfo ? resourceTitle.toUpperCase() : moduleTitle.toUpperCase()

  const sidebarProps = {
    tab,
    availableTabs,
    onTabChange: handleTabChange,
    onTabKeyDown: handleTabKeyDown,
    sections: config.learning?.sections || [],
    activeSectionIndex,
    onSectionClick: handleSectionClick,
    practiceProgress,
    fsrs: {
      reviewCount: fsrs.reviewCount,
      learnedCount: fsrs.learnedCount,
      totalCardCount: fsrs.totalCardCount
    }
  }

  return (
    <div className={`lt-shell${focusMode ? ' focus-mode' : ''}`}>
      <LearningSidebar {...sidebarProps} />
      <LearningSidebar
        {...sidebarProps}
        drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div
        className={`lt ${cssPrefix}`}
        data-loaded={loaded ? '' : undefined}
        data-reskinned="true"
      >
        {config.customCss && <style>{config.customCss}</style>}

        <header className="lv-topbar">
          <button
            type="button"
            className="lt-drawer-toggle"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
          <div className="lv-crumb">
            <button type="button" className="lv-crumb-link" onClick={() => nav('/explore')}>
              EXPLORE
            </button>
            {domainInfo.name && routeParams.domain && (
              <>
                <span className="sep">/</span>
                <button
                  type="button"
                  className="lv-crumb-link"
                  onClick={() => nav(`/explore/${routeParams.domain}`)}
                >
                  {domainInfo.name.toUpperCase()}
                </button>
              </>
            )}
            <span className="sep">/</span>
            {routeParams.module ? (
              <>
                {resourceInfo && (
                  <>
                    <button
                      type="button"
                      className="lv-crumb-link"
                      onClick={() => nav(`/explore/${routeParams.domain}/${routeParams.resource}`)}
                    >
                      {resourceTitle.toUpperCase()}
                    </button>
                    <span className="sep">/</span>
                  </>
                )}
                <span className="active" title={moduleTitle}>
                  {moduleTitle.toUpperCase()}
                </span>
              </>
            ) : routeParams.domain && routeParams.resource ? (
              <span className="active">{breadcrumbTail}</span>
            ) : (
              <span className="active">{breadcrumbTail}</span>
            )}
          </div>
          {(ltSettings.pomodoro ||
            ltSettings.topbarShowSearch ||
            ltSettings.topbarShowFocusMode ||
            ltSettings.topbarShowShortcuts ||
            ltSettings.topbarShowDownload ||
            ltSettings.topbarShowSettings) && (
            <div className="lv-topbar-actions">
              {ltSettings.topbarShowSearch && (
                <button
                  type="button"
                  className="lv-topbar-icon"
                  onClick={() => window.dispatchEvent(new CustomEvent('aether:open-search'))}
                  aria-label="Search"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.5" y2="16.5" />
                  </svg>
                  {ltSettings.topbarShowHints && (
                    <span className="lv-topbar-hint">
                      {comboTokens(effectiveCombo('search', ltSettings.keybinds)).join(' ')}
                    </span>
                  )}
                </button>
              )}
              {ltSettings.topbarShowFocusMode && (
                <button
                  type="button"
                  className="lv-topbar-icon"
                  onClick={() => setFocusMode(v => !v)}
                  aria-label="Toggle focus mode"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                  </svg>
                  {ltSettings.topbarShowHints && (
                    <span className="lv-topbar-hint">
                      {comboTokens(effectiveCombo('focus-mode', ltSettings.keybinds)).join(' ')}
                    </span>
                  )}
                </button>
              )}
              {ltSettings.topbarShowShortcuts && (
                <button
                  type="button"
                  className="lv-topbar-icon"
                  onClick={() => setCheatsheetOpen(v => !v)}
                  aria-label="Keyboard shortcuts"
                  aria-expanded={cheatsheetOpen}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="6" width="16" height="12" />
                    <line x1="4" y1="14" x2="20" y2="14" />
                  </svg>
                  {ltSettings.topbarShowHints && <span className="lv-topbar-hint">?</span>}
                </button>
              )}
              {ltSettings.topbarShowDownload && (
                <button
                  type="button"
                  className="lv-topbar-icon"
                  onClick={() => window.print()}
                  aria-label="Download as PDF"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3v11M8 10l4 4 4-4" />
                    <path d="M5 17v2a1 1 0 001 1h12a1 1 0 001-1v-2" />
                  </svg>
                  {ltSettings.topbarShowHints && <span className="lv-topbar-hint">Ctrl P</span>}
                </button>
              )}
              {ltSettings.pomodoro && (
                <button
                  type="button"
                  className="lv-topbar-icon"
                  onClick={() => window.dispatchEvent(new CustomEvent('aether:toggle-pomodoro'))}
                  aria-label="Pomodoro timer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 2h14M5 22h14M6 2l6 9 6-9M6 22l6-9 6 9" />
                  </svg>
                  {ltSettings.topbarShowHints && (
                    <span className="lv-topbar-hint">
                      {comboTokens(effectiveCombo('toggle-pomodoro', ltSettings.keybinds)).join(
                        ' '
                      )}
                    </span>
                  )}
                </button>
              )}
              {ltSettings.topbarShowSettings && (
                <button
                  type="button"
                  className="lv-topbar-icon"
                  onClick={() => window.dispatchEvent(new CustomEvent('aether:toggle-settings'))}
                  aria-label="Open settings"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h0a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v0a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                  </svg>
                  {ltSettings.topbarShowHints && <span className="lv-topbar-hint">Ctrl</span>}
                </button>
              )}
            </div>
          )}
        </header>

        <section className="lv-masthead">
          <h1 className="lv-title">
            {unitTitle || config.learning.groupTitle || config.learning.title}
          </h1>
          {(config.learning.groupSubtitle || config.learning.subtitle) && (
            <p className="lv-lead">{config.learning.groupSubtitle || config.learning.subtitle}</p>
          )}
        </section>

        <nav className="lt-nav" aria-label="Learning modes" hidden>
          <button className="lt-back" onClick={() => nav(-1)} aria-label="Go back" title="Go back">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5m7 7-7-7 7-7" />
            </svg>
          </button>
          <div className="lt-tabs" role="tablist" ref={navRef}>
            {availableTabs.map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={tab === id}
                aria-controls={`${id}-panel`}
                id={`${id}-tab`}
                tabIndex={tab === id ? 0 : -1}
                className={tab === id ? 'active' : ''}
                onClick={() => handleTabChange(id)}
                onKeyDown={e => handleTabKeyDown(e, id)}
              >
                {tabIcons[id]}
                {label}
              </button>
            ))}
            <span
              className="lt-nav-indicator"
              style={{ left: underlineStyle.left, width: underlineStyle.width }}
            />
          </div>
          <div className="lt-nav-actions" ref={readerRef}>
            <button
              onClick={() => setIsReaderOpen(prev => !prev)}
              aria-label="Reader settings"
              title="Reader settings (R)"
              aria-expanded={isReaderOpen}
              style={{
                fontFamily: 'var(--reader-font-family)',
                fontSize: '11px',
                letterSpacing: '0.04em',
                width: 'auto',
                padding: '0 8px'
              }}
            >
              Aa
            </button>
            {isReaderOpen && (
              <div className="lt-reader-panel" role="dialog" aria-label="Reader settings">
                <div className="lt-reader-row">
                  <span className="lt-reader-label">Theme</span>
                  <div className="lt-reader-theme-swatches">
                    {[
                      { id: 'dark', bg: '#18181b', label: 'Dark' },
                      { id: 'light', bg: '#fafaf8', label: 'Light' },
                      { id: 'sepia', bg: '#f4ecd8', label: 'Sepia' },
                      { id: 'high-contrast', bg: '#000000', label: 'Hi-Con' }
                    ].map(({ id, bg, label }) => (
                      <div
                        key={id}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 3
                        }}
                      >
                        <button
                          className={`lt-reader-swatch${theme === id ? ' active' : ''}`}
                          style={{ background: bg }}
                          onClick={() => setTheme(id)}
                          aria-label={label}
                          title={label}
                        />
                        <span
                          style={{
                            fontFamily: 'var(--reader-font-family)',
                            fontSize: 8,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: theme === id ? 'var(--text-primary)' : 'var(--text-tertiary)'
                          }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lt-reader-row">
                  <span className="lt-reader-label">Size</span>
                  <div className="lt-reader-options">
                    {[
                      ['0.875', 'S'],
                      ['1', 'M'],
                      ['1.125', 'L']
                    ].map(([val, label]) => (
                      <button
                        key={val}
                        className={`lt-reader-opt${fontScale === val ? ' active' : ''}`}
                        onClick={() => setFontScale(val)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="lt-reader-row">
                  <span className="lt-reader-label">Leading</span>
                  <div className="lt-reader-options">
                    {[
                      ['1.4', 'Tight'],
                      ['1.65', 'Normal'],
                      ['1.85', 'Loose']
                    ].map(([val, label]) => (
                      <button
                        key={val}
                        className={`lt-reader-opt${lineHeight === val ? ' active' : ''}`}
                        onClick={() => setLineHeight(val)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <button
              onClick={exportMarkdown}
              className={copied ? 'copied' : ''}
              aria-label="Copy as Markdown"
              title="Copy as Markdown"
            >
              {copied ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
            <button
              onClick={() => window.print()}
              aria-label="Export as PDF"
              title="Export as PDF (Ctrl+S)"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M12 3v12m-5-5 5 5 5-5" />
              </svg>
            </button>
            <button
              onClick={toggleShortcuts}
              aria-label={shortcuts ? 'Disable keyboard shortcuts' : 'Enable keyboard shortcuts'}
              title={
                shortcuts
                  ? 'Shortcuts: on - press ? to toggle'
                  : 'Shortcuts: off - press ? to enable'
              }
              style={{ opacity: shortcuts ? 0.4 : 0.2 }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M8 13h.01M12 13h.01M16 13h.01M7 17h10" />
              </svg>
            </button>
          </div>
        </nav>

        <main id="main-content">
          <div role="tabpanel" id={`${tab}-panel`} aria-labelledby={`${tab}-tab`}>
            <ErrorBoundary level="content" resetKeys={[tab]} onReset={() => handleTabChange(tab)}>
              <Suspense fallback={null}>
                {tab === 'learn' && <LearningMode config={config} hasMath={hasMath} />}
                {tab === 'solve' && (
                  <SolvingMode
                    config={config}
                    topicSlug={topicSlug}
                    hasMath={hasMath}
                    onProgress={setPracticeProgress}
                  />
                )}
                {tab === 'cheat' && <ReferenceMode config={config} hasMath={hasMath} />}
              </Suspense>
            </ErrorBoundary>
          </div>
        </main>
      </div>
      <KeyboardCheatsheet
        open={cheatsheetOpen}
        onClose={() => setCheatsheetOpen(false)}
        overrides={ltSettings.keybinds}
      />
    </div>
  )
}
