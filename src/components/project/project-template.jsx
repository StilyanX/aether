import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMathJax } from '../../hooks/use-mathjax'
import { useSettings } from '../../hooks/use-settings'
import { effectiveCombo, comboTokens } from '../../lib/keybinds'
import { topicComponentMap } from '../../config/registry'
import LearningSidebar from '../learning/learning-sidebar'
import KeyboardCheatsheet from '../learning/keyboard-cheatsheet'
import './project-template.css'
import '../learning/learning-template.css'
import '../learning/learning-sidebar.css'
import '../learning/topic-page.css'

// ── Stopwatch ─────────────────────────────────────────────────────────────────

export function Stopwatch({ style }) {
  const [running, setRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const startRef = useRef(0)
  const rafRef = useRef(null)

  const tick = () => {
    setElapsed(Date.now() - startRef.current)
    rafRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    if (running) {
      rafRef.current = requestAnimationFrame(tick)
    } else if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }
    return () => rafRef.current && cancelAnimationFrame(rafRef.current)
  }, [running])

  const hrs = Math.floor(elapsed / 3600000)
  const mins = Math.floor((elapsed % 3600000) / 60000)
  const secs = Math.floor((elapsed % 60000) / 1000)
  const pad = n => String(n).padStart(2, '0')

  return (
    <button
      className={`exam-stopwatch${running ? ' running' : ''}`}
      style={style}
      onClick={() => (running ? setRunning(false) : setRunning(true))}
    >
      {pad(hrs)}:{pad(mins)}:{pad(secs)}
    </button>
  )
}

// ── Answer collapsible ────────────────────────────────────────────────────────

export function Answer({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ margin: '8px 0 32px' }}>
      <button className="project-collapsible" onClick={() => setOpen(!open)}>
        <span
          className="project-collapsible-icon"
          style={{ transform: open ? 'rotate(90deg)' : 'none' }}
        >
          ▶
        </span>
        ANSWER
      </button>
      <div className={`project-collapsible-content${open ? ' visible' : ''}`}>
        <div className="project-solution-text">{children}</div>
      </div>
    </div>
  )
}

// ── Concept tags ──────────────────────────────────────────────────────────────

function ConceptTags({ concepts, navigate }) {
  if (!concepts) return null
  return (
    <div className="project-concepts">
      <span className="project-concepts-label">CONCEPTS USED</span>
      <div className="project-concepts-list">
        {concepts.map((c, i) => {
          const mapping = topicComponentMap[c]
          return mapping ? (
            <button
              key={i}
              className="project-concept-tag clickable"
              onClick={() => navigate(`/${mapping.slug}`)}
            >
              {c}
            </button>
          ) : (
            <span key={i} className="project-concept-tag">
              {c}
            </span>
          )
        })}
      </div>
    </div>
  )
}

// ── Main template ─────────────────────────────────────────────────────────────

function ProjectTemplate({ config }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const settings = useSettings()
  const [activeTab, setActiveTab] = useState('project')
  const [copied, setCopied] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [focusMode, setFocusMode] = useState(false)
  const [cheatsheetOpen, setCheatsheetOpen] = useState(false)

  const hasMath = JSON.stringify(config.briefing).includes('$')
  useMathJax([], hasMath)

  useEffect(() => {
    document.title = config.documentTitle || 'Project / Aether'
  }, [config.documentTitle])

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true))
  }, [])

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

  const availableTabs = [['project', 'Project'], config.examContent && ['exam', 'Exam']].filter(
    Boolean
  )

  const exportMarkdown = () => {
    const panel = document.querySelector('.project-content-body')
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
      if (tag === 'style' || tag === 'script') return ''
      if (node.hidden) return ''
      if (tag === 'mjx-container') {
        const data = mathMap.get(node)
        if (data) return data.display ? `\n\n$$${data.tex}$$\n\n` : `$${data.tex}$`
        return node.textContent
      }
      const ch = () => Array.from(node.childNodes).map(walk).join('')
      switch (tag) {
        case 'h1':
          return `\n\n# ${ch()}\n\n`
        case 'h2':
          return `\n\n## ${ch()}\n\n`
        case 'h3':
          return `\n\n### ${ch()}\n\n`
        case 'h4':
          return `\n\n#### ${ch()}\n\n`
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
        default:
          return ch()
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

  const sidebarProps = {
    tab: activeTab,
    availableTabs,
    onTabChange: setActiveTab,
    sections: [],
    activeSectionIndex: 0,
    onSectionClick: () => {},
    practiceProgress: { index: 0, total: 0 },
    fsrs: { reviewCount: 0, learnedCount: 0, totalCardCount: 0 }
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

      <div className="lt project-lt" data-loaded={loaded ? '' : undefined} data-reskinned="true">
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
            {pathname
              .split('/')
              .filter(Boolean)
              .slice(0, -1)
              .map((seg, i, arr) => (
                <span key={seg} style={{ display: 'contents' }}>
                  <button
                    type="button"
                    className="lv-crumb-link"
                    onClick={() => navigate('/' + arr.slice(0, i + 1).join('/'))}
                  >
                    {seg.toUpperCase()}
                  </button>
                  <span className="sep">/</span>
                </span>
              ))}
            <button type="button" className="lv-crumb-link" onClick={() => navigate(-1)}>
              {config.label || 'CAPSTONE'}
            </button>
            <span className="sep">/</span>
            <span className="active">{config.briefing.title.toUpperCase()}</span>
          </div>

          {(settings.pomodoro ||
            settings.topbarShowSearch ||
            settings.topbarShowFocusMode ||
            settings.topbarShowShortcuts ||
            settings.topbarShowDownload ||
            settings.topbarShowSettings) && (
            <div className="lv-topbar-actions">
              {settings.topbarShowSearch && (
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
                  {settings.topbarShowHints && (
                    <span className="lv-topbar-hint">
                      {comboTokens(effectiveCombo('search', settings.keybinds)).join(' ')}
                    </span>
                  )}
                </button>
              )}
              {settings.topbarShowFocusMode && (
                <button
                  type="button"
                  className="lv-topbar-icon"
                  onClick={() => setFocusMode(v => !v)}
                  aria-label="Toggle focus mode"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                  </svg>
                  {settings.topbarShowHints && (
                    <span className="lv-topbar-hint">
                      {comboTokens(effectiveCombo('focus-mode', settings.keybinds)).join(' ')}
                    </span>
                  )}
                </button>
              )}
              {settings.topbarShowShortcuts && (
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
                  {settings.topbarShowHints && <span className="lv-topbar-hint">?</span>}
                </button>
              )}
              <button
                type="button"
                className={`lv-topbar-icon${copied ? ' copied' : ''}`}
                onClick={exportMarkdown}
                aria-label="Copy as Markdown"
                title="Copy as Markdown"
              >
                {copied ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
              {settings.topbarShowDownload && (
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
                  {settings.topbarShowHints && <span className="lv-topbar-hint">Ctrl P</span>}
                </button>
              )}
              {settings.pomodoro && (
                <button
                  type="button"
                  className="lv-topbar-icon"
                  onClick={() => window.dispatchEvent(new CustomEvent('aether:toggle-pomodoro'))}
                  aria-label="Pomodoro timer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 2h14M5 22h14M6 2l6 9 6-9M6 22l6-9 6 9" />
                  </svg>
                  {settings.topbarShowHints && (
                    <span className="lv-topbar-hint">
                      {comboTokens(effectiveCombo('toggle-pomodoro', settings.keybinds)).join(' ')}
                    </span>
                  )}
                </button>
              )}
              {settings.topbarShowSettings && (
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
                  {settings.topbarShowHints && <span className="lv-topbar-hint">Ctrl</span>}
                </button>
              )}
            </div>
          )}
        </header>

        <div className="project-page">
          <div className="project-container">
            {activeTab === 'project' && (
              <>
                <div className="project-briefing">
                  <span className="project-tag">{config.label || 'Capstone'}</span>
                  <h1 className="project-title">{config.briefing.title}</h1>
                  {config.briefing.subtitle && (
                    <span className="project-subtitle">{config.briefing.subtitle}</span>
                  )}
                  <p className="project-description">{config.briefing.description}</p>
                  <ConceptTags concepts={config.briefing.concepts} navigate={navigate} />
                </div>
                {config.projectContent && (
                  <div className="project-content-body">{config.projectContent}</div>
                )}
              </>
            )}

            {activeTab === 'exam' && config.examContent && (
              <>
                <div className="project-briefing" style={{ position: 'relative' }}>
                  <Stopwatch style={{ position: 'absolute', top: 0, right: 0 }} />
                  <span className="project-tag">Exam</span>
                  <h1 className="project-title">{config.briefing.title}</h1>
                  <ConceptTags concepts={config.briefing.concepts} navigate={navigate} />
                </div>
                <div className="project-content-body">{config.examContent}</div>
              </>
            )}
          </div>
        </div>
      </div>

      <KeyboardCheatsheet open={cheatsheetOpen} onClose={() => setCheatsheetOpen(false)} />
    </div>
  )
}

export default ProjectTemplate
