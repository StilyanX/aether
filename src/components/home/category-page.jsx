import { useMemo, useEffect, useRef, useState, useCallback } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import {
  resourceMetadata,
  categoryStructure,
  resourceContent,
  topicComponentMap
} from '../../config/registry'
import { useBookmarks } from '../../hooks/use-bookmarks'
import { useSettings } from '../../hooks/use-settings'
import { useSidebarKeyboard } from '../../hooks/use-sidebar-keyboard'
import { ProfileBadge, SettingsDial } from '../chrome/settings-sheet'
import './category-page.css'

const SIDEBAR_GROUPS = [
  {
    label: 'FORMAL & NATURAL SCIENCES',
    domains: ['mathematics', 'physics', 'chemistry']
  },
  {
    label: 'HUMANITIES & ARTS',
    domains: ['history', 'linguistics']
  },
  { label: 'LIBRARY', domains: ['books', 'films', 'papers', 'videos', 'podcasts'] }
]

const DOMAIN_TO_GROUP = SIDEBAR_GROUPS.reduce((acc, g) => {
  g.domains.forEach(d => (acc[d] = g.label))
  return acc
}, {})

// __BUILD_DATE__ is injected by vite.config.js from the latest commit date
// (`git log -1 --format=%cd --date=short`), so the footer's UPDATED line is
// genuinely data-derived instead of a hand-maintained literal.
const BUILD_DATE_DISPLAY = __BUILD_DATE__.replaceAll('-', '·')

// Editorial register for the masthead's right-hand phrase.
// Voice: could appear as the subtitle of a Penguin Classics volume.
// Grammar: bare noun phrase | `the` + noun | wh-/gerund clause. No qualifiers.
// Hard cap: 22 characters / 11ch visual width.
const DOMAIN_MAP_TITLE = {
  all: 'the knowable',
  mathematics: 'necessary truth',
  physics: 'the moving world',
  chemistry: 'matter and change',
  'computer-science': 'the logic of machines',
  history: 'what came before',
  linguistics: 'how meaning travels',
  books: 'the written word',
  films: 'light and time',
  papers: 'the original claim',
  videos: 'the recorded lecture',
  podcasts: 'thinking aloud',
  saved: 'what you kept'
}

const PREVIEW_LIMIT = 12

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

function CategoryPage() {
  const navigate = useNavigate()
  const { bookmarks, count: savedCount } = useBookmarks()
  const { filter } = useParams()
  const activeFilter = filter || 'all'
  // "saved" is a filter over the same page, not a domain: it has no entry in
  // categoryStructure, so every domain-derived value below must skip it.
  const isSaved = activeFilter === 'saved'
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)
  const { showEmptyDomains, defaultTopicOrder } = useSettings()

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

  const topicsByDomain = useMemo(() => {
    const out = {}
    resourceMetadata.forEach(r => {
      if (!r.category) return
      const content = resourceContent[r.slug]
      if (!content) return
      const n = content.units.reduce((s, u) => s + (u.topics || []).length, 0)
      out[r.category] = (out[r.category] || 0) + n
    })
    return out
  }, [])
  const totalTopics = Object.values(topicsByDomain).reduce((s, n) => s + n, 0)
  const totalDomains = subcategories.length
  const totalResources = resourceMetadata.length

  // M5: per-group corpus totals - surfaces the group-level scale axis at rest.
  const isSearching = query.trim().length > 0

  // Single source of truth for which domains a group renders. Consumed both
  // by the keyboard-nav items array (built during render, below) and by the
  // sidebar JSX (further below). Extracted so the two consumers cannot drift.
  const visibleDomainsByGroup = useMemo(() => {
    const out = {}
    SIDEBAR_GROUPS.forEach(g => {
      out[g.label] = g.domains.filter(did => {
        const sub = subcategories.find(s => s.id === did)
        if (!sub) return false
        const c = (resourcesByDomain[did] || []).length
        return showEmptyDomains || c > 0
      })
    })
    return out
  }, [subcategories, resourcesByDomain, showEmptyDomains])

  // Saved topics, shaped exactly like the resource rows the domain sections
  // render, so /explore/saved is the same page as /explore/mathematics with a
  // different membership rule — not a second UI to keep in sync.
  const savedItems = useMemo(
    () =>
      [...bookmarks]
        .map(slug => {
          const entry = Object.entries(topicComponentMap).find(([, e]) => e.slug === slug)
          if (!entry) return null
          const [title, meta] = entry
          return {
            slug,
            title,
            description: (meta.parentSlug || '').split('/').slice(1).join(' · ').toUpperCase()
          }
        })
        .filter(Boolean),
    [bookmarks]
  )

  // Sections to show based on active filter + search.
  const sections = useMemo(() => {
    const q = query.trim().toLowerCase()
    const match = r =>
      !q || r.title.toLowerCase().includes(q) || (r.description || '').toLowerCase().includes(q)

    if (isSaved) {
      const items = savedItems.filter(match)
      if (items.length === 0) return []
      return [{ id: 'saved', name: 'Saved', group: '', items, total: savedItems.length, n: 1 }]
    }

    const domains =
      activeFilter === 'all'
        ? subcategories.map(s => s.id)
        : subcategories.some(s => s.id === activeFilter)
          ? [activeFilter]
          : []

    return domains
      .map(id => {
        const sub = subcategories.find(s => s.id === id)
        if (!sub) return null
        let items = (resourcesByDomain[id] || []).filter(match)
        if (defaultTopicOrder === 'alphabetical') {
          items = [...items].sort((a, b) => a.title.localeCompare(b.title))
        }
        if (items.length === 0) return null
        return {
          id,
          name: sub.name,
          group: DOMAIN_TO_GROUP[id] || '',
          items,
          total: (resourcesByDomain[id] || []).length
        }
      })
      .filter(Boolean)
      .map((s, i) => ({ ...s, n: i + 1 }))
  }, [
    activeFilter,
    query,
    subcategories,
    resourcesByDomain,
    defaultTopicOrder,
    isSaved,
    savedItems
  ])

  const visibleCount = sections.reduce((n, s) => n + s.items.length, 0)
  const activeDomain = subcategories.find(s => s.id === activeFilter) || null
  const isEmptyDomain =
    activeDomain !== null && (resourcesByDomain[activeFilter]?.length ?? 0) === 0

  // Scoped to the active domain (topics + resources) when one is selected,
  // matching the sidebar's own per-domain pairing (line ~428); otherwise the
  // platform-wide totals. Keeps every on-screen count truthful to what's
  // actually being viewed, rather than always showing the global corpus size.
  // On /explore/saved the counters describe the collection: how many topics you
  // kept, and how many domains they span.
  const savedDomains = useMemo(
    () => new Set(savedItems.map(i => i.slug.split('/')[1])).size,
    [savedItems]
  )
  const scopedTopicsTotal = isSaved
    ? savedItems.length
    : activeDomain
      ? topicsByDomain[activeDomain.id] || 0
      : totalTopics
  const scopedSecondaryCount = isSaved
    ? savedDomains
    : activeDomain
      ? (resourcesByDomain[activeDomain.id] || []).length
      : totalDomains
  const scopedSecondaryLabel =
    activeDomain && !isSaved
      ? scopedSecondaryCount === 1
        ? 'RESOURCE'
        : 'RESOURCES'
      : scopedSecondaryCount === 1
        ? 'DOMAIN'
        : 'DOMAINS'

  useEffect(() => {
    document.title = `${activeDomain?.name || 'Explore'}/Aether`
  }, [activeDomain])

  // SC 4.1.3: announce result status through an always-present live region
  // (see #ep-result-announce in <main>) so the first announcement is never
  // dropped by a live region that mounts only when its content appears.
  useEffect(() => {
    const el = document.getElementById('ep-result-announce')
    if (!el) return
    let text = ''
    if (isSearching) {
      text =
        visibleCount === 0
          ? `No matches for "${query.trim()}"`
          : `${visibleCount} of ${activeDomain ? scopedSecondaryCount : totalResources} resources match`
    } else if (isEmptyDomain) {
      text = 'No topics in this domain'
    }
    el.textContent = text
  }, [
    isSearching,
    visibleCount,
    activeDomain,
    scopedSecondaryCount,
    totalResources,
    query,
    isEmptyDomain
  ])

  // The sidebar filter input is gone, so Mod+\ now enters the domain list
  // directly rather than focusing a filter box first. Query the DOM rather than
  // the ref map: the roving-tabindex list only keeps a live ref for the item it
  // currently considers focused, so the map is not a reliable entry point.
  useEffect(() => {
    const onFocusSidebar = () => {
      const el = asideRef.current?.querySelector('.ep-nav-item.active, .ep-nav-all')
      el?.focus({ preventScroll: true })
    }
    window.addEventListener('aether:focus-sidebar-filter', onFocusSidebar)
    return () => window.removeEventListener('aether:focus-sidebar-filter', onFocusSidebar)
  }, [])

  // Sidebar keyboard nav - Mod+\ entry, ↑/↓/j/k/1-9/Enter/Space/Esc.
  // sidebarItemRefs is a Map<id, RefObject> preserved across renders so each
  // button's ref stays stable while the visible-list membership churns with
  // the filter query. sidebarItems + sidebarGroups derive from that Map and
  // only re-memo when the visible set actually changes, so useSidebarKeyboard's
  // internal effects don't re-register listeners on every unrelated render.
  const asideRef = useRef(null)
  const sidebarItemRefs = useRef(new Map())
  const { sidebarItems, sidebarGroups } = useMemo(() => {
    const items = []
    const groups = []
    if (!sidebarItemRefs.current.has('__all')) {
      sidebarItemRefs.current.set('__all', { current: null })
    }
    items.push({
      id: '__all',
      label: 'ALL',
      groupIndex: -1,
      ref: sidebarItemRefs.current.get('__all'),
      href: '/explore'
    })
    SIDEBAR_GROUPS.forEach((group, gi) => {
      const visible = visibleDomainsByGroup[group.label] || []
      if (visible.length === 0) return
      groups.push({ label: group.label, firstItemIndex: items.length })
      visible.forEach(did => {
        const sub = subcategories.find(s => s.id === did)
        if (!sidebarItemRefs.current.has(did)) sidebarItemRefs.current.set(did, { current: null })
        items.push({
          id: did,
          label: sub.name.toUpperCase(),
          groupIndex: gi,
          ref: sidebarItemRefs.current.get(did),
          href: '/explore/' + did
        })
      })
    })
    return { sidebarItems: items, sidebarGroups: groups }
  }, [visibleDomainsByGroup, subcategories])

  const onActivate = useCallback(
    item => {
      if (item?.href) navigate(item.href)
    },
    [navigate]
  )

  const { focusedIndex } = useSidebarKeyboard(asideRef, {
    items: sidebarItems,
    groups: sidebarGroups,
    onActivate,
    activeId: activeFilter === 'all' ? '__all' : activeFilter
  })
  const focusedSidebarId = sidebarItems[focusedIndex]?.id ?? sidebarItems[0]?.id

  return (
    <div className="ep-layout">
      <a href="#ep-main-content" className="skip-link">
        Skip to main content
      </a>
      {/* Sidebar */}
      <aside ref={asideRef} className="ep-sidebar" role="navigation" aria-label="Domain navigation">
        <div className="ep-sidebar-inner">
          <div className="ep-sidebar-identity">
            <span className="ep-sidebar-mark">ÆTHER</span>
          </div>
          <div className="ep-sidebar-sep" />

          {/* The active domain is already marked in the list below and the totals
              sit in the colophon, so this stays as a live region only: switching
              domain is a state change a screen reader still needs announced. */}
          {activeDomain && activeDomain.id !== 'all' && (
            <div className="sr-only" aria-live="polite">
              Viewing {activeDomain.name.toLowerCase()} · {totalDomains} total domains
            </div>
          )}

          <button
            ref={el => {
              const r = sidebarItemRefs.current.get('__all')
              if (r) r.current = el
            }}
            type="button"
            className={`ep-nav-item ep-nav-all${activeFilter === 'all' ? ' active' : ''}`}
            onClick={() => navigate('/explore')}
            aria-current={activeFilter === 'all' ? 'page' : undefined}
            tabIndex={focusedSidebarId === '__all' ? 0 : -1}
            data-sidebar-item="__all"
          >
            <span className="ep-nav-name">ALL</span>
          </button>

          {/* The saved collection needs a surface that is always on screen. A
              saved set with no reader is the documented failure mode: people do
              not go looking for what they cannot see. The count is information
              (size + non-emptiness), so it earns its ink. */}
          {savedCount > 0 && (
            <button
              type="button"
              className={`ep-nav-item ep-nav-all${isSaved ? ' active' : ''}`}
              onClick={() => navigate('/explore/saved')}
              aria-current={isSaved ? 'page' : undefined}
              tabIndex={-1}
            >
              <span className="ep-nav-name">SAVED</span>
            </button>
          )}

          {SIDEBAR_GROUPS.map(group => {
            const visibleDomains = visibleDomainsByGroup[group.label] || []
            if (visibleDomains.length === 0) return null
            return (
              <div key={group.label} className="ep-nav-group">
                {/* Group heading only. The per-domain rows beneath already carry
                    their own R/T counts, so the group total was restating them.
                    No divider rule: whitespace above the label separates the
                    groups (Linear/Notion app-shell convention). */}
                <span className="ep-nav-group-label">{group.label}</span>
                <div className="ep-nav-group-items">
                  {visibleDomains.map(did => {
                    const sub = subcategories.find(s => s.id === did)
                    const count = (resourcesByDomain[did] || []).length
                    const isActive = activeFilter === did
                    const isEmpty = count === 0
                    return (
                      <button
                        key={did}
                        ref={el => {
                          const r = sidebarItemRefs.current.get(did)
                          if (r) r.current = el
                        }}
                        type="button"
                        className={`ep-nav-item${isActive ? ' active' : ''}${isEmpty ? ' is-empty' : ''}`}
                        onClick={() => navigate('/explore/' + did)}
                        aria-current={isActive ? 'page' : undefined}
                        tabIndex={focusedSidebarId === did ? 0 : -1}
                        data-sidebar-item={did}
                      >
                        <span className="ep-nav-name">{sub.name.toUpperCase()}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
          <div
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
            id="sidebar-group-announce"
          />
          <div className="ep-sidebar-footer" role="group" aria-label="Corpus scale">
            <div className="ep-sidebar-stats">
              <div className="ep-stat">
                <span className="ep-stat-num">{totalTopics}</span>
                <span className="ep-stat-label">TOPICS</span>
              </div>
              <div className="ep-stat">
                <span className="ep-stat-num">{totalDomains}</span>
                <span className="ep-stat-label">DOMAINS</span>
              </div>
              <div className="ep-stat">
                <span className="ep-stat-num">{totalResources}</span>
                <span className="ep-stat-label">RESOURCES</span>
              </div>
            </div>
            <div className="ep-sidebar-updated">UPDATED {BUILD_DATE_DISPLAY}</div>
          </div>
        </div>
      </aside>

      <main className="ep-main" id="ep-main-content" tabIndex={-1}>
        <div aria-live="polite" aria-atomic="true" className="sr-only" id="ep-result-announce" />
        <div className="ep-profile-slot">
          <ProfileBadge />
          <SettingsDial
            onOpen={() => window.dispatchEvent(new CustomEvent('aether:toggle-settings'))}
          />
        </div>
        {/* Breadcrumb navigation */}
        {activeFilter !== 'all' && (
          <nav className="ep-breadcrumb" aria-label="Breadcrumb navigation">
            <ol className="ep-breadcrumb-list">
              <li>
                <button
                  type="button"
                  className="ep-breadcrumb-link"
                  onClick={() => navigate('/explore')}
                >
                  Explore
                </button>
              </li>
              <li>
                <span className="ep-breadcrumb-sep" aria-hidden="true">
                  ›
                </span>
                <span className="ep-breadcrumb-current">
                  {activeDomain?.name.toUpperCase() || activeFilter.toUpperCase()}
                </span>
              </li>
            </ol>
          </nav>
        )}

        {/* Masthead. aria-live sits on the header, not the counter alone -
            the title (the primary identity change on filter click) needs
            announcing at least as much as the secondary count below it. */}
        <header className="ep-masthead" aria-live="polite" aria-atomic="true">
          <h1 className="ep-masthead-title">
            <span className="ep-mh-l">The map of</span>
            <span key={activeFilter} className="ep-mh-r ep-mh-r-fadein">
              {DOMAIN_MAP_TITLE[activeFilter] || 'knowable things'}
            </span>
          </h1>

          <div className={`ep-masthead-counter${isEmptyDomain ? ' is-empty' : ''}`}>
            <span className="c-pair">
              <span className="c-num">{scopedTopicsTotal}</span>
              <span className="c-label">{scopedTopicsTotal === 1 ? 'TOPIC' : 'TOPICS'}</span>
            </span>
            <span className="c-sep" aria-hidden="true">
              ·
            </span>
            <span className="c-pair">
              <span className="c-num">{scopedSecondaryCount}</span>
              <span className="c-label">{scopedSecondaryLabel}</span>
            </span>
          </div>
        </header>

        {/* Search */}
        <div className="ep-search-wrap" role="search">
          <div className="ep-search-row">
            <span className="ep-search-slash" aria-hidden="true">
              /
            </span>
            <label className="ep-search-label" htmlFor="topic-search-input">
              SEARCH
            </label>
            <input
              id="topic-search-input"
              ref={searchRef}
              className="ep-search"
              type="search"
              // The visible <label> already says SEARCH, so repeating the verb
              // here rendered it twice: "/ SEARCH SEARCH 13 RESOURCES...".
              // Label carries the verb; the placeholder names the scope.
              placeholder={
                activeDomain
                  ? `WITHIN ${activeDomain.name.toUpperCase()}...`
                  : `${totalResources} RESOURCES...`
              }
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search topics"
              spellCheck={false}
            />
            {isSearching ? (
              <>
                <span className="ep-search-count">
                  {visibleCount} / {activeDomain ? scopedSecondaryCount : totalResources}
                </span>
                <button
                  type="button"
                  className="ep-search-clear"
                  onClick={() => {
                    setQuery('')
                    searchRef.current?.focus()
                  }}
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
                <button
                  type="button"
                  className="ep-chip"
                  onClick={() => {
                    navigate('/explore')
                    searchRef.current?.focus()
                  }}
                  aria-label={`Clear domain filter: ${activeDomain.name}`}
                >
                  <span
                    className="ep-chip-dot"
                    aria-hidden="true"
                    style={{ background: 'var(--text-tertiary)' }}
                  />
                  <span>{activeDomain.name.toUpperCase()}</span>
                  <span className="ep-chip-x" aria-hidden="true">
                    ×
                  </span>
                </button>
              )}
              {isSearching && (
                <button
                  type="button"
                  className="ep-chip"
                  onClick={() => {
                    setQuery('')
                    searchRef.current?.focus()
                  }}
                  aria-label={`Clear search query: ${query}`}
                >
                  <span>"{query}"</span>
                  <span className="ep-chip-x" aria-hidden="true">
                    ×
                  </span>
                </button>
              )}
              <span className="ep-filter-result">
                <span aria-hidden="true">→ </span>
                {visibleCount}{' '}
                {isSearching
                  ? visibleCount === 1
                    ? 'MATCH'
                    : 'MATCHES'
                  : visibleCount === 1
                    ? 'RESOURCE'
                    : 'RESOURCES'}
              </span>
            </div>
          )}
        </div>

        {isEmptyDomain && <p className="ep-empty-note">DOMAIN EMPTY: ADD VIA CURRICULUM</p>}

        {/* Content */}
        <div className="ep-content">
          {/* isEmptyDomain implies sections.length === 0 (an empty domain
              contributes zero sections), so it alone gates the null branch. */}
          {isEmptyDomain ? null : sections.length === 0 ? (
            <section className="ep-empty zone">
              <div className="dial" aria-hidden="true">
                <svg viewBox="0 0 220 220">
                  <circle className="arc" cx="110" cy="110" r="98" />
                  <circle className="arc" cx="110" cy="110" r="70" />
                  <g className="ticks">
                    <line x1="110" y1="6" x2="110" y2="16" />
                    <line x1="110" y1="204" x2="110" y2="214" />
                    <line x1="6" y1="110" x2="16" y2="110" />
                    <line x1="204" y1="110" x2="214" y2="110" />
                    <line x1="36" y1="36" x2="42" y2="42" />
                    <line x1="178" y1="36" x2="184" y2="42" />
                    <line x1="36" y1="178" x2="42" y2="184" />
                    <line x1="178" y1="178" x2="184" y2="184" />
                  </g>
                  <g>
                    <circle
                      className="ring2-track"
                      cx="110"
                      cy="110"
                      r="86"
                      fill="none"
                      strokeDasharray="3 6"
                    />
                  </g>
                </svg>
                <div className="qm">?</div>
              </div>

              <div className="col">
                <span className="tag">
                  Empty space <span aria-hidden="true">·</span>{' '}
                  {[
                    isSearching && 'search',
                    activeDomain && 'domain',
                    !activeDomain && activeFilter !== 'all' && 'category'
                  ]
                    .filter(Boolean)
                    .join(' + ') || 'no filters'}
                </span>
                <h2>
                  The signal is silent.
                  <small>
                    {isSearching
                      ? `Nothing matches "${query}".`
                      : 'No topics under this combination.'}
                  </small>
                </h2>
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
                      navigate('/')
                      searchRef.current?.focus()
                    }}
                  >
                    Browse all topics
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                </div>

                {(isSearching || activeDomain || activeFilter !== 'all') && (
                  <div className="ribbon">
                    <span className="lbl">Drop one</span>
                    <div className="opts">
                      {isSearching && (
                        <button
                          type="button"
                          className="opt"
                          onClick={() => {
                            setQuery('')
                            searchRef.current?.focus()
                          }}
                          aria-label={`Remove search filter: ${query}`}
                        >
                          Search <span className="n">"{query}"</span>
                        </button>
                      )}
                      {activeDomain && (
                        <button
                          type="button"
                          className="opt"
                          onClick={() => {
                            navigate('/explore')
                            searchRef.current?.focus()
                          }}
                          aria-label={`Remove domain filter: ${activeDomain.name}`}
                        >
                          <span
                            className="ep-chip-dot"
                            aria-hidden="true"
                            style={{ background: 'var(--text-tertiary)' }}
                          />
                          Domain <span className="n">{activeDomain.name.toUpperCase()}</span>
                        </button>
                      )}
                      {!activeDomain && activeFilter !== 'all' && (
                        <button
                          type="button"
                          className="opt"
                          onClick={() => {
                            navigate('/explore')
                            searchRef.current?.focus()
                          }}
                          aria-label={`Remove category filter: ${activeFilter}`}
                        >
                          Category <span className="n">{activeFilter.toUpperCase()}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>
          ) : (
            sections.map(section => {
              const isHomepage = activeFilter === 'all'
              const isSearchActive = isSearching
              const shouldPreview = isHomepage && !isSearchActive
              const displayed = shouldPreview
                ? section.items.slice(0, PREVIEW_LIMIT)
                : section.items
              const hasMore = shouldPreview && section.items.length > PREVIEW_LIMIT
              return (
                <section
                  className="ep-section"
                  key={section.id}
                  aria-labelledby={`section-name-${section.id}`}
                >
                  <div className="ep-section-header">
                    <div className="ep-section-lede">
                      <span
                        className="ep-section-dot"
                        aria-hidden="true"
                        style={{ background: 'var(--text-tertiary)' }}
                      />
                      <span className="ep-section-num" aria-hidden="true">
                        {String(section.n).padStart(2, '0')}
                      </span>
                      <h2 id={`section-name-${section.id}`} className="ep-section-name">
                        {section.name.toUpperCase()}
                      </h2>
                      {section.group && (
                        <span className="ep-section-group">
                          <span aria-hidden="true">· </span>
                          {section.group}
                        </span>
                      )}
                    </div>
                    <span className="ep-section-rule" aria-hidden="true" />
                    {hasMore ? (
                      <button
                        type="button"
                        className="ep-section-count ep-section-more"
                        onClick={() => navigate('/explore/' + section.id)}
                        aria-label={`Showing ${displayed.length} / ${section.total}, show all resources in ${section.name}`}
                      >
                        SHOWING {displayed.length} / {section.total}
                        <span aria-hidden="true"> →</span>
                      </button>
                    ) : (
                      <span className="ep-section-count">
                        {isSearching
                          ? `${section.items.length} / ${section.total} ${section.items.length === 1 ? 'MATCH' : 'MATCHES'}`
                          : isSaved
                            ? `${section.items.length} ${section.items.length === 1 ? 'TOPIC' : 'TOPICS'}`
                            : `${section.items.length} ${section.items.length === 1 ? 'RESOURCE' : 'RESOURCES'}`}
                      </span>
                    )}
                  </div>

                  {/* Numbered (01, 02, …) topic list - <ol>/<li> so AT exposes
                      list semantics ("list, N items / item 3 of N") for the
                      page's primary browse task (WCAG 1.3.1). */}
                  <ol className="ep-rows">
                    {displayed.map((resource, i) => (
                      <li key={resource.slug}>
                        <Link
                          to={`/${resource.slug}`}
                          className="ep-row"
                          // Saved rows ARE topics, so hovering one makes it the
                          // bookmark key's target — that is how you unsave from
                          // the list. Domain rows are resources, not topics, and
                          // carry no slug the bookmark store would recognise.
                          data-bookmark-slug={isSaved ? resource.slug : undefined}
                        >
                          <span className="ep-row-idx" aria-hidden="true">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="ep-row-title">
                            <HighlightMatch text={resource.title} q={query.trim()} />
                            {resource.description && (
                              <span className="ep-row-desc">
                                <HighlightMatch text={resource.description} q={query.trim()} />
                              </span>
                            )}
                          </span>
                          <span className="ep-row-chev" aria-hidden="true">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>
              )
            })
          )}
        </div>
      </main>

      {/* Colophon - edition, licence, repository. Licences must appear in
          every published artifact, including the platform footer.
          Rendered as a description list so
          screen readers announce it as three (term, definition)
          pairs instead of three anonymous rows. A sibling of <main>, not
          nested inside it - WAI-ARIA APG requires contentinfo be a
          top-level landmark, not a descendant of main. */}
      <footer className="ep-colophon" role="contentinfo">
        <dl className="ep-colophon-list">
          <dt>EDITION</dt>
          <dd>AETHER V{__APP_VERSION__}</dd>
          <dt>LICENCE</dt>
          <dd>
            CC BY-NC-SA 4.0 (CONTENT) <span aria-hidden="true">·</span> MIT (CODE)
          </dd>
          <dt>REPOSITORY</dt>
          <dd>
            <a href="https://github.com/StilyanX/aether" className="ep-colophon-repo">
              STILYANX/AETHER
            </a>
          </dd>
        </dl>
      </footer>
    </div>
  )
}

export default CategoryPage
