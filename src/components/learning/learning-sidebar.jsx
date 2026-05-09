import { isValidElement, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './learning-sidebar.css'

const MODE_META = {
  learn: { label: 'LEARN' },
  solve: { label: 'PRACTICE' },
  cheat: { label: 'REFERENCE' },
  project: { label: 'PROJECT' },
  exam: { label: 'EXAM' }
}

const MODE_ICONS = {
  project: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  exam: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" />
    </svg>
  ),
  learn: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H3zM21 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z" />
    </svg>
  ),
  solve: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12 L12 3 L21 12 L12 21 Z" />
    </svg>
  ),
  cheat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="14" y2="18" />
    </svg>
  )
}

function countWords(node) {
  if (node == null || typeof node === 'boolean') return 0
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node).trim().split(/\s+/).filter(Boolean).length
  }
  if (Array.isArray(node)) {
    return node.reduce((sum, n) => sum + countWords(n), 0)
  }
  if (isValidElement(node)) {
    return countWords(node.props?.children)
  }
  return 0
}

function nodeText(node) {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(nodeText).join('')
  if (isValidElement(node)) return nodeText(node.props?.children)
  return ''
}

function findHeading(node) {
  if (node == null || typeof node === 'boolean') return null
  if (Array.isArray(node)) {
    for (const child of node) {
      const found = findHeading(child)
      if (found) return found
    }
    return null
  }
  if (isValidElement(node)) {
    if (node.type === 'h1' || node.type === 'h2' || node.type === 'h3') {
      return nodeText(node.props?.children).trim()
    }
    return findHeading(node.props?.children)
  }
  return null
}

function sectionTitle(section, fallbackIndex) {
  if (section?.title) return section.title
  const content = section?.content ?? section
  return findHeading(content) || `Section ${fallbackIndex + 1}`
}

function sectionMinutes(section) {
  if (typeof section?.minutes === 'number') return section.minutes
  const content = section?.content ?? section
  const titleWords = section?.title ? countWords(section.title) : 0
  const words = countWords(content) + titleWords
  return Math.max(1, Math.ceil(words / 200))
}

function pad2(n) {
  return String(n).padStart(2, '0')
}

export default function LearningSidebar({
  tab,
  availableTabs,
  onTabChange,
  onTabKeyDown,
  sections = [],
  activeSectionIndex = 0,
  onSectionClick,
  practiceProgress = { index: 0, total: 0 },
  fsrs,
  drawer = false,
  open = true,
  onClose
}) {
  // Esc closes drawer
  useEffect(() => {
    if (!drawer || !open) return
    const onKey = e => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [drawer, open, onClose])

  const totalMinutes = sections.reduce((sum, s) => sum + sectionMinutes(s), 0)
  const completedMinutes = sections
    .slice(0, activeSectionIndex)
    .reduce((sum, s) => sum + sectionMinutes(s), 0)
  const remainingMinutes = Math.max(0, totalMinutes - completedMinutes)
  const percentRead = totalMinutes > 0 ? Math.round((completedMinutes / totalMinutes) * 100) : 0

  const reviewCount = fsrs?.reviewCount ?? 0
  const learnedCount = fsrs?.learnedCount ?? 0
  const totalCardCount = fsrs?.totalCardCount ?? 0
  const learnedPct = totalCardCount > 0 ? Math.round((learnedCount / totalCardCount) * 100) : 0
  const showPractice = totalCardCount > 0

  const aside = (
    <aside
      className={`lt-sidebar${drawer ? ' lt-sidebar-drawer' : ''}`}
      aria-label="Learning navigation"
    >
      <div className="lt-sidebar-brand">
        <Link to="/explore" className="lt-sidebar-mark-link" aria-label="Go to Explore">
          <svg className="lt-sidebar-mark" viewBox="0 0 480 140" role="img" aria-label="Aether">
            <text
              x="0"
              y="115"
              fill="#ededed"
              fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif"
              fontSize="120"
              fontWeight="700"
              letterSpacing="2.4"
            >
              ÆTHER
            </text>
          </svg>
        </Link>
        {drawer && (
          <button
            type="button"
            className="lt-sidebar-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        )}
      </div>

      <section className="lt-sidebar-block">
        <header className="lt-sidebar-block-head">
          <span>MODE</span>
        </header>
        <div className="lt-sidebar-modes" role="tablist" aria-label="Learning modes">
          {availableTabs.map(([id], i) => {
            const meta = MODE_META[id] || { label: id.toUpperCase() }
            const active = tab === id
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls={`${id}-panel`}
                className={`lt-sidebar-mode${active ? ' active' : ''}`}
                onClick={() => onTabChange(id)}
                onKeyDown={e => onTabKeyDown?.(e, id)}
              >
                <span className="lt-sidebar-mode-ic" aria-hidden="true">
                  {MODE_ICONS[id]}
                </span>
                <span className="lt-sidebar-mode-l">{meta.label}</span>
                <span className="lt-sidebar-mode-n">{i + 1}</span>
              </button>
            )
          })}
        </div>
      </section>

      {tab === 'solve' && practiceProgress.total > 0 && (
        <section className="lt-sidebar-block">
          <header className="lt-sidebar-block-head">
            <span>SESSION</span>
            <span className="lt-sidebar-count">
              {Math.min(practiceProgress.index + 1, practiceProgress.total)} /{' '}
              {practiceProgress.total}
            </span>
          </header>
          <div className="lt-sidebar-meta">
            <span>{Math.round((practiceProgress.index / practiceProgress.total) * 100)}% done</span>
          </div>
        </section>
      )}

      {sections.length > 0 && tab === 'learn' && (
        <>
          <section className="lt-sidebar-block">
            <header className="lt-sidebar-block-head">
              <span>READING</span>
              <span className="lt-sidebar-count">
                {Math.min(activeSectionIndex + 1, sections.length)} / {sections.length}
              </span>
            </header>
            <div className="lt-sidebar-meta">
              <span>{percentRead}% read</span>
              <span>{remainingMinutes} min</span>
            </div>
          </section>

          <section className="lt-sidebar-block">
            <header className="lt-sidebar-block-head">
              <span>SECTIONS</span>
              <span className="lt-sidebar-count">{sections.length}</span>
            </header>
            <ul className="lt-sidebar-sections">
              {sections.map((s, i) => {
                const active = i === activeSectionIndex
                const title = sectionTitle(s, i)
                return (
                  <li key={i}>
                    <button
                      type="button"
                      className={`lt-sidebar-section${active ? ' active' : ''}`}
                      onClick={() => onSectionClick?.(i)}
                      title={title}
                    >
                      <span className="lt-sidebar-section-bullet" aria-hidden="true">
                        {active ? '◆' : '◇'}
                      </span>
                      <span className="lt-sidebar-section-t">{title}</span>
                      <span className="lt-sidebar-section-n">{pad2(i + 1)}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </section>
        </>
      )}

      {showPractice && (
        <section className="lt-sidebar-block lt-sidebar-block-last">
          <header className="lt-sidebar-block-head">
            <span>PRACTICE</span>
            <span className="lt-sidebar-count">{reviewCount} DUE</span>
          </header>
          <div className="lt-sidebar-meta">
            <span>
              {learnedCount}/{totalCardCount} learned
            </span>
            <span>{learnedPct}%</span>
          </div>
        </section>
      )}
    </aside>
  )

  if (!drawer) return aside

  return (
    <>
      <div
        className={`lt-sidebar-backdrop${open ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`lt-sidebar-drawer-wrap${open ? ' open' : ''}`}>{aside}</div>
    </>
  )
}
