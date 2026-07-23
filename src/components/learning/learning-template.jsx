import {
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
  useTransition
} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMathJax } from '../../hooks/use-mathjax'
import { useTheme } from '../../hooks/use-theme'
import { useSettings } from '../../hooks/use-settings'
import { useBookmarks } from '../../hooks/use-bookmarks'
import {
  resourceMetadata,
  slugToIndex,
  categoryStructure,
  topicComponentMap,
  resourceContent
} from '../../config/registry'
import { effectiveCombo, comboTokens } from '../../lib/keybinds'
import ErrorBoundary from '../layout/error-boundary'
import LearningSidebar from './learning-sidebar'
import KeyboardCheatsheet from './keyboard-cheatsheet'
import { useFSRS } from '../../hooks/use-fsrs'
import './learning-template.css'
import './topic-page.css'
import { FONT_TINY } from '../viz/scale-tokens'

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

// Sibling inside <Suspense> - fires useEffect only after the lazy component in
// the same boundary has resolved and committed, so modesCount is incremented
// only once the mode's DOM is actually present for MathJax to typeset.
function ModeNotifier({ onMounted }) {
  useEffect(() => {
    onMounted()
  }, [onMounted])
  return null
}

function checkHasMath(config) {
  const check = str => typeof str === 'string' && str.includes('$')
  if (check(config.learning?.subtitle)) return true
  if (config.practice?.some(c => check(c.q) || check(c.a))) return true
  if (check(config.customCss)) return false
  return true // default to true for safety
}

// JSX text nodes don't apply JS escape processing, so `<h3>$a \\cdot b$</h3>`
// reaches the DOM as the literal sequence `\\cdot`, MathJax parses `\\` as a
// newline command and renders the remaining letters as italic identifiers.
// Authors who wrap content in template literals (`{`…`}`) collapse `\\` → `\`
// before render, but the convention is easy to forget.
//
// We can't always catch this at the text-node stage: lazy-loaded content
// (LearningMode is React.lazy) arrives AFTER our useLayoutEffect's first run
// and may be auto-typeset by MathJax before we get a second chance. So we
// run two passes: rewrite raw text nodes when we can, AND undo already-
// rendered mjx-containers whose stored source TeX still has the bug.
function normalizeLatexEscapes(root) {
  if (!root) return false
  let changed = false

  // Pass 1: rewrite raw text nodes (works when we beat MathJax to the DOM).
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null)
  const nodes = []
  for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n)
  for (const node of nodes) {
    const t = node.nodeValue
    if (t.indexOf('$') < 0 || t.indexOf('\\\\') < 0) continue
    const fixed = t
      .replace(
        /\$\$([\s\S]+?)\$\$/g,
        (_, body) => '$$' + body.replace(/\\\\(?=[A-Za-z])/g, '\\') + '$$'
      )
      .replace(/\$([^$\n]+?)\$/g, (_, body) => '$' + body.replace(/\\\\(?=[A-Za-z])/g, '\\') + '$')
    if (fixed !== t) {
      node.nodeValue = fixed
      changed = true
    }
  }

  // Pass 2: rewind mjx-containers whose source still has `\\[A-Za-z]`.
  // MathJax v3 stores every typeset math item on startup.document.math with
  // the original TeX in `item.math` and the rendered DOM node in
  // `item.typesetRoot`. Replacing the container with a fresh text node
  // restores the delimited source so the next typeset re-renders it.
  const mjDoc = window.MathJax?.startup?.document
  const list = mjDoc?.math?.list ?? mjDoc?.math
  if (list && typeof list[Symbol.iterator] === 'function') {
    const items = Array.from(list)
    for (const item of items) {
      const node = item.typesetRoot
      if (!node || !node.parentNode || !root.contains(node)) continue
      if (typeof item.math !== 'string' || !/\\\\[A-Za-z]/.test(item.math)) continue
      const fixed = item.math.replace(/\\\\(?=[A-Za-z])/g, '\\')
      const delim = item.display ? '$$' : '$'
      node.parentNode.replaceChild(document.createTextNode(delim + fixed + delim), node)
      changed = true
    }
  }

  return changed
}

export function LearningTemplate({ config }) {
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
  const [typesetReady, setTypesetReady] = useState(false)
  const [modesCount, setModesCount] = useState(0)
  const [shortcuts, setShortcuts] = useState(
    () => localStorage.getItem('aether-shortcuts') !== 'false'
  )
  const [isReaderOpen, setIsReaderOpen] = useState(false)
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [sectionTitles, setSectionTitles] = useState([])

  // Bookmarks are keyed by the registry slug, and every topic route is exactly
  // "/" + that slug, so the path is the key.
  const { pathname } = useLocation()
  const routeSlug = pathname.replace(/^\//, '')
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const saved = isBookmarked(routeSlug)

  // The sections the reader actually gets. A page may declare them directly as
  // learning.sections, or as units[].cards[] — LearningMode renders both, so the
  // sidebar and the scroll-spy have to resolve them the same way or a units-based
  // page renders sections that nothing can see (empty SECTIONS list, no tracking).
  const learnSections = useMemo(() => {
    if (config.learning?.sections?.length) return config.learning.sections
    if (config.units)
      return config.units.flatMap(u =>
        (u.cards || []).map(c => ({ title: c.title, content: c.content }))
      )
    return []
  }, [config.learning?.sections, config.units])
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

  const { theme, setTheme, fontScale, setFontScale, lineHeight, setLineHeight } = useTheme()
  const navRef = useRef(null)
  const nav = useNavigate()
  const { cssPrefix, documentTitle } = config

  // Resolve breadcrumb crumbs from the URL slug, NOT the page title. The URL
  // pathname always equals "/" + the registry slug, whereas config.learning.title
  // can drift from the topicComponentMap key (it had for ~32 topics, collapsing
  // their breadcrumb to "EXPLORE / topic"). Match the entry by slug, fall back to
  // dropping the last path segment. Produces a uniform 4-level path
  // (EXPLORE / category / resource / topic) for both /explore/… and /library/… URLs.
  const parentSlug = useMemo(() => {
    const slug = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
    if (!slug) return null
    const entry = Object.values(topicComponentMap).find(e => e.slug === slug)
    if (entry?.parentSlug) return entry.parentSlug
    const segs = slug.split('/')
    return segs.length > 1 ? segs.slice(0, -1).join('/') : null
  }, [pathname])
  const resourceInfo = useMemo(() => {
    if (!parentSlug) return null
    return resourceMetadata[slugToIndex[parentSlug]] || null
  }, [parentSlug])
  const categoryId = resourceInfo?.category || null
  const domainInfo = useMemo(() => resolveDomain(categoryId), [categoryId])

  // Previous / next lesson, in the resource's curriculum order. resourceContent
  // defines explicit ordered topic arrays per unit (object key order is NOT
  // reliable); flatten across units so the pager flows seamlessly between them.
  // Same source the j/k keyboard nav uses in topic-standalone.jsx.
  const pager = useMemo(() => {
    const slug = pathname.replace(/^\/+/, '').replace(/\/+$/, '')
    if (!slug) return null
    const entry = Object.entries(topicComponentMap).find(([, v]) => v.slug === slug)
    if (!entry) return null
    const [title, cfg] = entry
    const parent = resourceContent[cfg.parentSlug]
    if (!parent?.units) return null
    const titles = parent.units.flatMap(u =>
      (u.topics || []).map(t => (typeof t === 'object' ? t.title : t))
    )
    const idx = titles.indexOf(title)
    if (idx < 0) return null
    const toLink = t => {
      const s = topicComponentMap[t]?.slug
      return s ? { title: t, slug: s } : null
    }
    return {
      prev: idx > 0 ? toLink(titles[idx - 1]) : null,
      next: idx < titles.length - 1 ? toLink(titles[idx + 1]) : null
    }
  }, [pathname])

  const hasMath = useMemo(() => checkHasMath(config), []) // eslint-disable-line react-hooks/exhaustive-deps
  const topicSlug = config.learning.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const { status: mathStatus, typeset, clear } = useMathJax([], hasMath)
  const fsrs = useFSRS(topicSlug, config.practice || [])

  const expectedModes = availableTabs.length
  const allModesMounted = modesCount >= expectedModes
  const handleModeMounted = useCallback(() => setModesCount(n => n + 1), [])

  useEffect(() => {
    document.title = documentTitle || config.learning.title + '/aether'
  }, [documentTitle, config.learning.title])

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true))
  }, [])

  // Normalize literal `\\X` inside `$…$` BEFORE MathJax processes the DOM.
  // useLayoutEffect fires synchronously after React commit and before the
  // useEffect in use-mathjax that injects the script tag, so on initial mount
  // MathJax sees corrected text and never produces italic "cdot". On state
  // changes after MathJax is ready (e.g. tab switch reveals new content),
  // re-normalize and force a re-typeset.
  useLayoutEffect(() => {
    if (!hasMath) return
    const root = document.getElementById('main-content')
    const changed = normalizeLatexEscapes(root)
    if (changed && mathStatus === 'ready') {
      clear(root)
      typeset(root)
    }
  }, [hasMath, mathStatus, tab, typeset, clear])

  // Fire aether:typeset-ready once all modes are mounted and MathJax is done.
  // 250ms delay ensures use-mathjax's own 100ms + 200ms auto-typeset passes complete first.
  useEffect(() => {
    if (!allModesMounted) return

    function fire() {
      window.dispatchEvent(new CustomEvent('aether:typeset-ready'))
      setTypesetReady(true)
    }

    if (!hasMath || mathStatus === 'disabled' || mathStatus === 'error') {
      fire()
      return
    }
    if (mathStatus !== 'ready') return

    const t = setTimeout(() => {
      const p = typeset()
      p ? p.then(fire) : fire()
    }, 250)
    return () => clearTimeout(t)
  }, [allModesMounted, mathStatus, hasMath, typeset])

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

  const handleTabChange = useCallback(
    newTab => {
      if (newTab === tab) return
      startTransition(() => setTab(newTab))
      setDrawerOpen(false)
    },
    [tab, startTransition]
  )

  const handleSectionClick = i => {
    const el = document.getElementById(`lrn-section-${i}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSectionIndex(i)
    }
    setDrawerOpen(false)
  }

  // Track active section while reading. Does NOT gate on typesetReady: the
  // observer must attach as soon as the sections exist, even if MathJax is slow
  // or fails. typesetReady stays in the deps only so positions recompute once
  // math typesetting settles section heights.
  useEffect(() => {
    if (tab !== 'learn') return
    const sectionCount = learnSections.length
    if (sectionCount === 0) return

    // Active section = the last one whose top has crossed a "trip line" at 35%
    // of viewport height. A thin observation band there fires the recompute off
    // the scroll thread (no scroll-linked layout); the band must NOT be 0px tall
    // (-35%/-65% sums to 100% → zero-area root → isIntersecting never true).
    //
    // Two cases the trip line alone cannot see, both handled below:
    //   1. At the bottom of the page a short final section may never reach the
    //      line (the scroll runs out first), so it could never go active.
    //   2. The observer only fires when a top crosses the band. Scrolling the
    //      last stretch to the bottom crosses nothing, so nothing recomputes.
    let els = []
    const recompute = () => {
      if (!els.length) return
      const doc = document.documentElement
      const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 2
      if (atBottom) {
        setActiveSectionIndex(els.length - 1)
        return
      }
      const line = window.innerHeight * 0.35
      let idx = 0
      for (let i = 0; i < els.length; i++) {
        if (els[i].getBoundingClientRect().top <= line) idx = i
        else break
      }
      setActiveSectionIndex(idx)
    }

    const observer = new IntersectionObserver(recompute, {
      rootMargin: '-35% 0px -60% 0px',
      threshold: 0
    })

    // Coalesced to one measurement per frame; passive, so it never blocks scroll.
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        recompute()
      })
    }

    let rafId
    const trySetup = () => {
      if (!document.getElementById('lrn-section-0')) {
        rafId = requestAnimationFrame(trySetup)
        return
      }
      els = []
      for (let i = 0; i < sectionCount; i++) {
        const el = document.getElementById(`lrn-section-${i}`)
        if (el) {
          els.push(el)
          observer.observe(el)
        }
      }
      // Label each section from its rendered heading. Reading the DOM (rather
      // than walking the JSX tree) is the only way to see a heading that a child
      // component renders: a static walk finds the element, not its output, and
      // silently falls back to "Section N".
      setSectionTitles(els.map(el => el.querySelector('h1, h2, h3')?.textContent?.trim() || null))
      recompute()
    }
    rafId = requestAnimationFrame(trySetup)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [tab, typesetReady, learnSections.length])

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
      // The topbar advertises Ctrl P for "download as PDF", so bind it. Ctrl S
      // stays bound for the muscle memory it already built.
      if ((e.ctrlKey || e.metaKey) && (key === 's' || key === 'p')) {
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
  }, [availableTabs, handleTabChange, shortcuts, toggleShortcuts, ltSettings.keyboardShortcuts])

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

  useEffect(() => {
    const onCopyAction = () => exportMarkdown()
    window.addEventListener('aether:action:copy-markdown', onCopyAction)
    return () => window.removeEventListener('aether:action:copy-markdown', onCopyAction)
  })

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

  const resourceTitle = resourceInfo?.title || config.learning.title
  const moduleTitle = config.learning.title

  const sidebarProps = {
    tab,
    availableTabs,
    onTabChange: handleTabChange,
    onTabKeyDown: handleTabKeyDown,
    sections: learnSections,
    sectionTitles,
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
    <div className={`lt-shell${focusMode ? ' focus-mode' : ''}`} data-typeset-host="learning">
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
            {domainInfo.name && categoryId && (
              <>
                <span className="sep">/</span>
                <button
                  type="button"
                  className="lv-crumb-link"
                  onClick={() => nav(`/explore/${categoryId}`)}
                >
                  {domainInfo.name.toUpperCase()}
                </button>
              </>
            )}
            <span className="sep">/</span>
            {resourceInfo && parentSlug && (
              <>
                <button
                  type="button"
                  className="lv-crumb-link"
                  onClick={() => nav(`/${parentSlug}`)}
                >
                  {resourceTitle.toUpperCase()}
                </button>
                <span className="sep">/</span>
              </>
            )}
            <span className="active" title={moduleTitle}>
              {moduleTitle.toUpperCase()}
            </span>
          </div>
          {(ltSettings.pomodoro ||
            ltSettings.topbarShowSearch ||
            ltSettings.topbarShowFocusMode ||
            ltSettings.topbarShowShortcuts ||
            ltSettings.topbarShowCopy ||
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
              {ltSettings.topbarShowCopy && (
                <button
                  type="button"
                  className={`lv-topbar-icon${copied ? ' copied' : ''}`}
                  onClick={exportMarkdown}
                  aria-label="Copy as Markdown"
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
                  {ltSettings.topbarShowHints && (
                    <span className="lv-topbar-hint">
                      {comboTokens(effectiveCombo('copy-markdown', ltSettings.keybinds)).join(' ')}
                    </span>
                  )}
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
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent('aether:toggle-pomodoro'))
                  }
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
              {/* Icon-only, to match every other control in this toolbar. The
                  state is carried by the fill (☆ outline -> ★ filled) plus ink
                  weight, both clearing 3:1; the meaning is carried by the
                  accessible name, which is the only thing a screen reader gets. */}
              <button
                type="button"
                className={`lv-topbar-icon lv-topbar-save${saved ? ' on' : ''}`}
                onClick={() => toggleBookmark(routeSlug)}
                aria-pressed={saved}
                aria-label={saved ? 'Remove from saved' : 'Save this topic'}
                title={saved ? 'Remove from saved' : 'Save this topic'}
              >
                <span className="lv-topbar-star" aria-hidden="true">
                  {saved ? '★' : '☆'}
                </span>
                {ltSettings.topbarShowHints && (
                  <span className="lv-topbar-hint">
                    {comboTokens(effectiveCombo('bookmark', ltSettings.keybinds)).join(' ')}
                  </span>
                )}
              </button>
              {ltSettings.topbarShowSettings && (
                <button
                  type="button"
                  className="lv-topbar-icon"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent('aether:toggle-settings'))
                  }
                  aria-label="Open settings"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h0a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v0a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
                  </svg>
                  {ltSettings.topbarShowHints && (
                    <span className="lv-topbar-hint">
                      {comboTokens(effectiveCombo('open-settings', ltSettings.keybinds))
                        .filter(t => t !== '+')
                        .join(' ')}
                    </span>
                  )}
                </button>
              )}
            </div>
          )}
        </header>

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
                      { id: 'dark', bg: '#000000', label: 'Dark' },
                      { id: 'light', bg: '#fafaf8', label: 'Light' },
                      { id: 'sepia', bg: '#f4ecd8', label: 'Sepia' }
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
                            fontSize: FONT_TINY,
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
            {ltSettings.topbarShowCopy && (
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
            )}
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
          {availableTabs.map(([id]) => {
            const isActive = tab === id
            const style = isActive
              ? undefined
              : typesetReady
                ? { display: 'none' }
                : {
                    visibility: 'hidden',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    zIndex: -1
                  }
            return (
              <div
                key={id}
                role="tabpanel"
                id={`${id}-panel`}
                aria-labelledby={`${id}-tab`}
                style={style}
              >
                <ErrorBoundary level="content" resetKeys={[id]} onReset={() => handleTabChange(id)}>
                  <Suspense fallback={null}>
                    <ModeNotifier onMounted={handleModeMounted} />
                    {id === 'learn' && (
                      <LearningMode
                        config={
                          config.learning?.sections?.length || !config.units
                            ? config
                            : {
                                ...config,
                                learning: {
                                  ...config.learning,
                                  sections: config.units.flatMap(u =>
                                    (u.cards || []).map(c => ({
                                      title: c.title,
                                      content: c.content
                                    }))
                                  )
                                }
                              }
                        }
                        hasMath={hasMath}
                      />
                    )}
                    {id === 'solve' && (
                      <SolvingMode
                        config={config}
                        topicSlug={topicSlug}
                        hasMath={hasMath}
                        onProgress={setPracticeProgress}
                        active={isActive}
                      />
                    )}
                    {id === 'cheat' && <ReferenceMode config={config} hasMath={hasMath} />}
                  </Suspense>
                </ErrorBoundary>
              </div>
            )
          })}
          {tab === 'learn' && pager && (pager.prev || pager.next) && (
            <nav className="lt-pager" aria-label="Lesson navigation">
              {pager.prev ? (
                <button
                  type="button"
                  className="lt-pager-link prev"
                  onClick={() => nav(`/${pager.prev.slug}`)}
                  aria-label={`Previous lesson: ${pager.prev.title}`}
                >
                  <span className="lt-pager-arrow" aria-hidden="true">
                    {'←'}
                  </span>
                  <span className="lt-pager-text">
                    <span className="lt-pager-dir">Previous</span>
                    <span className="lt-pager-title">{pager.prev.title}</span>
                  </span>
                </button>
              ) : (
                <span className="lt-pager-spacer" />
              )}
              {pager.next ? (
                <button
                  type="button"
                  className="lt-pager-link next"
                  onClick={() => nav(`/${pager.next.slug}`)}
                  aria-label={`Next lesson: ${pager.next.title}`}
                >
                  <span className="lt-pager-text">
                    <span className="lt-pager-dir">Next</span>
                    <span className="lt-pager-title">{pager.next.title}</span>
                  </span>
                  <span className="lt-pager-arrow" aria-hidden="true">
                    {'→'}
                  </span>
                </button>
              ) : (
                <span className="lt-pager-spacer" />
              )}
            </nav>
          )}
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
