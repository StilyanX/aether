import { useMemo, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { resourceMetadata, categoryStructure, resourceContent } from '../../config/registry'
import { useSettings } from '../../hooks/use-settings'
import { ProfileBadge, SettingsDial } from '../chrome/settings-sheet'
import './category-page.css'

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

const SIDEBAR_GROUPS = [
  { label: 'FORMAL SCIENCES', domains: ['mathematics', 'computer-science'] },
  { label: 'NATURAL & APPLIED SCIENCES', domains: ['physics', 'biology', 'engineering'] },
  {
    label: 'SOCIAL SCIENCES',
    domains: ['law', 'political-science', 'economics', 'sociology']
  },
  {
    label: 'HUMANITIES & ARTS',
    domains: ['philosophy', 'theology', 'history', 'linguistics', 'literature', 'music']
  },
  { label: 'LIBRARY', domains: ['books', 'papers', 'videos', 'podcasts'] }
]

const DOMAIN_TO_GROUP = SIDEBAR_GROUPS.reduce((acc, g) => {
  g.domains.forEach(d => (acc[d] = g.label))
  return acc
}, {})

const PREVIEW_LIMIT = 5

function HighlightMatch({ text, q }) {
  if (!q) return text
  const idx = text.toLowerCase().indexOf(q.toLowerCase())
  if (idx < 0) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark className="ep-mark">{text.slice(idx, idx + q.length)}</mark>
      {text.slice(idx + q.length)}
    </>
  )
}

function CountUp({ to, dur = 900 }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setN(to)
      return
    }
    let raf
    const t0 = performance.now()
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, dur])
  return <>{n}</>
}

function CategoryPage() {
  const navigate = useNavigate()
  const { filter } = useParams()
  const activeFilter = filter || 'all'
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)
  const { showEmptyDomains } = useSettings()

  useEffect(() => {
    document.title = 'Explore/Aether'
  }, [])

  // Cmd/Ctrl+K and / focus search; Esc clears/blurs.
  useEffect(() => {
    const onKey = e => {
      const focusedInput =
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault()
        searchRef.current?.focus()
      } else if (e.key === '/' && !focusedInput) {
        e.preventDefault()
        searchRef.current?.focus()
      } else if (e.key === 'Escape' && document.activeElement === searchRef.current) {
        setQuery('')
        searchRef.current?.blur()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Build unified list of subcategories across explore + library
  const subcategories = useMemo(
    () => [
      ...(categoryStructure.explore?.subcategories || []),
      ...(categoryStructure.library?.subcategories || [])
    ],
    []
  )

  const resourcesByDomain = useMemo(() => {
    const out = {}
    resourceMetadata.forEach(r => {
      if (!r.category) return
      if (!out[r.category]) out[r.category] = []
      out[r.category].push(r)
    })
    return out
  }, [])

  const totalTopics = resourceMetadata.reduce((sum, r) => {
    const content = resourceContent[r.slug]
    if (!content) return sum
    return sum + content.units.reduce((s, u) => s + (u.topics || []).length, 0)
  }, 0)
  const totalDomains = Object.keys(resourcesByDomain).length
  const isSearching = query.trim().length > 0

  // Sections to show based on active filter + search.
  const sections = useMemo(() => {
    const q = query.trim().toLowerCase()
    const match = r =>
      !q || r.title.toLowerCase().includes(q) || (r.description || '').toLowerCase().includes(q)

    const domains =
      activeFilter === 'all'
        ? subcategories.map(s => s.id)
        : subcategories.some(s => s.id === activeFilter)
          ? [activeFilter]
          : []

    return domains
      .map((id, index) => {
        const sub = subcategories.find(s => s.id === id)
        if (!sub) return null
        const items = (resourcesByDomain[id] || []).filter(match)
        if (items.length === 0) return null
        return {
          id,
          name: sub.name,
          color: DOMAIN_COLOR[id] || 'var(--text-secondary)',
          group: DOMAIN_TO_GROUP[id] || '',
          n: index + 1,
          items,
          total: (resourcesByDomain[id] || []).length
        }
      })
      .filter(Boolean)
  }, [activeFilter, query, subcategories, resourcesByDomain])

  const visibleCount = sections.reduce((n, s) => n + s.items.length, 0)
  const activeDomain = subcategories.find(s => s.id === activeFilter) || null

  return (
    <div className="ep-layout">
      {/* Sidebar */}
      <aside className="ep-sidebar" aria-label="Domain navigation">
        <div className="ep-sidebar-identity">
          <svg className="ep-sidebar-mark" viewBox="0 0 480 140" role="img" aria-label="Aether">
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
        </div>
        <div className="ep-sidebar-sep" />

        <button
          type="button"
          className={`ep-nav-item ep-nav-all${activeFilter === 'all' ? ' active' : ''}`}
          onClick={() => navigate('/explore')}
          aria-pressed={activeFilter === 'all'}
        >
          <span className="ep-nav-name">ALL</span>
          <span className="ep-nav-count">{totalTopics}</span>
        </button>

        <div className="ep-sidebar-sep" style={{ marginTop: '8px' }} />

        {SIDEBAR_GROUPS.map(group => (
          <div key={group.label} className="ep-nav-group">
            <span className="ep-nav-group-label">{group.label}</span>
            {group.domains.map(did => {
              const sub = subcategories.find(s => s.id === did)
              if (!sub) return null
              const count = (resourcesByDomain[did] || []).length
              if (!showEmptyDomains && count === 0) return null
              const isActive = activeFilter === did
              const color = DOMAIN_COLOR[did]
              return (
                <button
                  key={did}
                  type="button"
                  className={`ep-nav-item${isActive ? ' active' : ''}`}
                  onClick={() => navigate('/explore/' + did)}
                  aria-pressed={isActive}
                  style={
                    isActive
                      ? {
                          borderLeftColor: color,
                          background: `color-mix(in srgb, ${color} 10%, transparent)`
                        }
                      : undefined
                  }
                >
                  <span className="ep-nav-name">{sub.name.toUpperCase()}</span>
                  <span className="ep-nav-count">{count}</span>
                </button>
              )
            })}
          </div>
        ))}
      </aside>

      <main className="ep-main">
        <div className="ep-profile-slot">
          <ProfileBadge />
          <SettingsDial
            onOpen={() => window.dispatchEvent(new CustomEvent('aether:toggle-settings'))}
          />
        </div>
        {/* Masthead */}
        <header className="ep-masthead">
          <h1 className="ep-masthead-title">
            <span className="ep-mh-l">The map of</span>
            <span className="ep-mh-r">knowable things</span>
          </h1>

          <div className="ep-masthead-counter">
            <span className="c-num">
              <CountUp to={totalTopics} />
            </span>
            <span className="c-label">TOPICS</span>
            <span className="c-sep">·</span>
            <span className="c-num">
              <CountUp to={totalDomains} />
            </span>
            <span className="c-label">DOMAINS</span>
          </div>
        </header>

        {/* Search */}
        <div className="ep-search-wrap">
          <div className="ep-search-row">
            <span className="ep-search-slash" aria-hidden="true">
              /
            </span>
            <input
              ref={searchRef}
              className="ep-search"
              type="text"
              placeholder={
                activeDomain
                  ? `SEARCH WITHIN ${activeDomain.name.toUpperCase()}...`
                  : `SEARCH ${totalTopics} TOPICS...`
              }
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search topics"
              spellCheck={false}
            />
            {isSearching ? (
              <>
                <span className="ep-search-count" aria-live="polite">
                  {visibleCount} / {totalTopics}
                </span>
                <button
                  type="button"
                  className="ep-search-clear"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              </>
            ) : (
              <span className="ep-search-shortcut" aria-hidden="true">
                ⌘K
              </span>
            )}
          </div>
          {(activeDomain || isSearching) && (
            <div className="ep-filter-strip">
              {activeDomain && (
                <button type="button" className="ep-chip" onClick={() => navigate('/explore')}>
                  <span>{activeDomain.name.toUpperCase()}</span>
                  <span className="ep-chip-x">×</span>
                </button>
              )}
              {isSearching && (
                <button type="button" className="ep-chip" onClick={() => setQuery('')}>
                  <span>"{query}"</span>
                  <span className="ep-chip-x">×</span>
                </button>
              )}
              <span className="ep-filter-result">
                → {visibleCount} {visibleCount === 1 ? 'MATCH' : 'MATCHES'}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="ep-content">
          {sections.length === 0 ? (
            <section className="ep-empty zone" role="status">
              <div className="dial" aria-hidden="true">
                <svg viewBox="0 0 220 220">
                  <circle className="arc" cx="110" cy="110" r="98" />
                  <circle className="arc" cx="110" cy="110" r="70" />
                  <g className="ticks ring">
                    <line x1="110" y1="6" x2="110" y2="16" />
                    <line x1="110" y1="204" x2="110" y2="214" />
                    <line x1="6" y1="110" x2="16" y2="110" />
                    <line x1="204" y1="110" x2="214" y2="110" />
                    <line x1="36" y1="36" x2="42" y2="42" />
                    <line x1="178" y1="36" x2="184" y2="42" />
                    <line x1="36" y1="178" x2="42" y2="184" />
                    <line x1="178" y1="178" x2="184" y2="184" />
                  </g>
                  <g className="ring2">
                    <circle
                      cx="110"
                      cy="110"
                      r="86"
                      fill="none"
                      stroke="rgba(240,240,250,0.06)"
                      strokeDasharray="3 6"
                    />
                  </g>
                </svg>
                <div className="qm">?</div>
              </div>

              <div className="col">
                <span className="tag">
                  Empty space ·{' '}
                  {[
                    isSearching && 'search',
                    activeDomain && 'domain',
                    activeFilter !== 'all' && 'category'
                  ]
                    .filter(Boolean)
                    .join(' + ') || 'no filters'}
                </span>
                <h1>
                  The signal is silent.
                  <em>
                    {isSearching
                      ? `Nothing matches "${query}".`
                      : 'No topics under this combination.'}
                  </em>
                </h1>
                <p>
                  Loosen one filter and the index returns instantly. Or browse all topics across
                  every domain.
                </p>
                <div className="actions">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      setQuery('')
                      navigate('/explore')
                    }}
                  >
                    Clear filters <span className="arrow">↗</span>
                  </button>
                  <button type="button" className="btn ghost" onClick={() => navigate('/')}>
                    Browse all topics <span className="arrow">→</span>
                  </button>
                </div>

                {(isSearching || activeDomain || activeFilter !== 'all') && (
                  <div className="ribbon">
                    <span className="lbl">Drop one</span>
                    <div className="opts">
                      {isSearching && (
                        <button type="button" className="opt" onClick={() => setQuery('')}>
                          Search <span className="n">"{query}"</span>
                        </button>
                      )}
                      {activeDomain && (
                        <button type="button" className="opt" onClick={() => navigate('/explore')}>
                          Domain <span className="n">{activeDomain.name}</span>
                        </button>
                      )}
                      {activeFilter !== 'all' && (
                        <button type="button" className="opt" onClick={() => navigate('/explore')}>
                          Category <span className="n">{activeFilter}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>
          ) : (
            sections.map(section => {
              const preview = activeFilter === 'all' && !isSearching
              const displayed = preview ? section.items.slice(0, PREVIEW_LIMIT) : section.items
              const hasMore = preview && section.items.length > PREVIEW_LIMIT
              return (
                <section className="ep-section" key={section.id}>
                  <div className="ep-section-header">
                    <div className="ep-section-lede">
                      <span className="ep-section-num">{String(section.n).padStart(2, '0')}</span>
                      <span className="ep-section-name">{section.name.toUpperCase()}</span>
                      {section.group && <span className="ep-section-group">· {section.group}</span>}
                    </div>
                    <span className="ep-section-rule" aria-hidden="true" />
                    {hasMore ? (
                      <button
                        type="button"
                        className="ep-section-count ep-section-more"
                        onClick={() => navigate('/explore/' + section.id)}
                      >
                        SHOWING {displayed.length} / {section.total} →
                      </button>
                    ) : (
                      <span className="ep-section-count">
                        {section.items.length} {section.items.length === 1 ? 'TOPIC' : 'TOPICS'}
                      </span>
                    )}
                  </div>

                  <div className="ep-rows">
                    {displayed.map((resource, i) => (
                      <Link key={resource.slug} to={`/${resource.slug}`} className="ep-row">
                        <span className="ep-row-idx">{String(i + 1).padStart(2, '0')}</span>
                        <span className="ep-row-title">
                          <HighlightMatch text={resource.title} q={query} />
                          {resource.description && (
                            <span className="ep-row-desc">{resource.description}</span>
                          )}
                        </span>
                        <span className="ep-row-chev">→</span>
                      </Link>
                    ))}
                  </div>
                </section>
              )
            })
          )}
        </div>
      </main>
    </div>
  )
}

export default CategoryPage
