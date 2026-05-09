import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useMemo, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CategoryPage from './components/home/category-page'
import ResourceDetail from './components/home/resource-detail'
import TopicStandalone from './components/home/topic-standalone'
import ToolPlaceholder from './components/home/tool-placeholder'
import ErrorBoundary from './components/layout/error-boundary'
import LoadingScreen from './components/layout/loading-screen'
import SearchModal from './components/layout/search-modal'
import { resourceMetadata, slugToIndex, topicComponentMap } from './config/registry'
import { useTheme } from './hooks/use-theme'
import { useSettings } from './hooks/use-settings'
import { lazy, Suspense } from 'react'
const VizTest = lazy(() => import('./features/test/viz-test'))
import Pomodoro from './components/chrome/pomodoro'
import Notes from './components/chrome/notes'
import { SettingsSheet } from './components/chrome/settings-sheet'
import { VimRouter } from './hooks/use-vim'
import { Keybinds } from './hooks/use-keybinds'
import { useSessions } from './hooks/use-sessions'
import './app.css'

// Domain colors - full hex, opacity applied per-use in CSS (color-mix for glow, full for text)
const DEFAULT_COLOR = '#3b9eff'
const DOMAIN_COLORS = {
  mathematics: '#f5c842',
  physics: '#3b9eff',
  chemistry: '#ff5a1f',
  'computer-science': '#00e676',
  engineering: '#c87941',
  economics: '#a8b5c2',
  languages: '#8b1a2e',
  communication: '#f5e642',
  books: '#9e2a2a',
  papers: '#c8cdd2',
  videos: '#ff1f1f',
  podcasts: '#8b5cf6'
}

// Precompute reverse map: topic slug → parentSlug (runs once at module load)
const slugToParent = {}
Object.values(topicComponentMap).forEach(({ slug, parentSlug }) => {
  if (slug) slugToParent[slug] = parentSlug
})

function resolveAmbientColor(path) {
  if (path === '/' || path === '/explore') return DEFAULT_COLOR

  const parts = path.split('/').filter(Boolean)

  // /explore/:domain/:resource/:module → topic page (3-segment topics)
  // /explore/:domain/:resource/:book/:module → book chapter page (4-segment topics)
  if ((parts.length === 4 || parts.length === 5) && parts[0] === 'explore') {
    const topicSlug = parts.join('/')
    const parentSlug = slugToParent[topicSlug]
    if (parentSlug) {
      const resource = resourceMetadata[slugToIndex[parentSlug]]
      return DOMAIN_COLORS[resource?.category] || DOMAIN_COLORS[parts[1]] || DEFAULT_COLOR
    }
    return DOMAIN_COLORS[parts[1]] || DEFAULT_COLOR
  }

  // /explore/:domain/:resource → resource detail page
  if (parts.length === 3 && parts[0] === 'explore') {
    const slug = parts.join('/')
    const resource = resourceMetadata[slugToIndex[slug]]
    return DOMAIN_COLORS[resource?.category] || DOMAIN_COLORS[parts[1]] || DEFAULT_COLOR
  }

  return DEFAULT_COLOR
}

const PAGE_VARIANTS = {
  initial: dir => ({
    opacity: 0,
    y: dir > 0 ? 50 : dir < 0 ? -50 : 16
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] }
  },
  exit: dir => ({
    opacity: 0,
    y: dir > 0 ? -50 : dir < 0 ? 50 : -16,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] }
  })
}

function SessionMount() {
  useSessions()
  return null
}

function GlobalSettings() {
  const [open, setOpen] = useState(false)

  // Toggle from the central keybinds dispatcher.
  useEffect(() => {
    const onToggle = () => setOpen(o => !o)
    window.addEventListener('aether:toggle-settings', onToggle)
    return () => window.removeEventListener('aether:toggle-settings', onToggle)
  }, [])

  return <SettingsSheet open={open} onClose={() => setOpen(false)} />
}

const getDepth = path => {
  if (path === '/') return 0
  const parts = path.split('/').filter(Boolean)
  return Math.min(parts.length, 3)
}

function AppContent() {
  useTheme() // ensures theme initialization before first render
  const appSettings = useSettings()
  const [zoomLevel, setZoomLevel] = useState(1)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const location = useLocation()
  const prevPathRef = useRef(location.pathname)
  const direction = Math.sign(getDepth(location.pathname) - getDepth(prevPathRef.current))

  useEffect(() => {
    prevPathRef.current = location.pathname
  }, [location.pathname])

  // Update --ambient-color after exit animation completes (220ms)
  // so the exiting page keeps its color while fading out
  useEffect(() => {
    const color = resolveAmbientColor(location.pathname)
    const timer = setTimeout(() => {
      document.documentElement.style.setProperty('--ambient-color', color)
    }, 220)
    return () => clearTimeout(timer)
  }, [location.pathname])

  // Zoom + slash-to-search live outside the user-remappable bind table.
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

      if (appSettings.keyboardShortcuts && e.key === '/') {
        e.preventDefault()
        setSearchModalOpen(true)
        return
      }

      if (e.ctrlKey || e.metaKey) {
        if (e.key === '+' || e.key === '=') {
          e.preventDefault()
          setZoomLevel(prev => Math.min(prev + 0.1, 3))
        } else if (e.key === '-' || e.key === '_') {
          e.preventDefault()
          setZoomLevel(prev => Math.max(prev - 0.1, 0.5))
        } else if (e.key === '0') {
          e.preventDefault()
          setZoomLevel(1)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [appSettings.keyboardShortcuts])

  useEffect(() => {
    const handler = () => setSearchModalOpen(true)
    window.addEventListener('aether:open-search', handler)
    return () => window.removeEventListener('aether:open-search', handler)
  }, [])

  const zoomStyle = useMemo(
    () => ({
      transform: `scale(${zoomLevel})`,
      transformOrigin: 'top center',
      minHeight: '100vh',
      overflowX: 'clip',
      transition: 'transform 0.2s ease-out'
    }),
    [zoomLevel]
  )

  return (
    <>
      <GlobalSettings />
      <Pomodoro />
      <Notes />
      <VimRouter />
      <Keybinds />
      <SessionMount />
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <div style={zoomStyle}>
        {/* Global ambient - always mounted, never disappears between routes */}
        <div className="explore-bg" aria-hidden="true" />
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={PAGE_VARIANTS}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Routes location={location}>
              <Route path="/" element={<CategoryPage category="explore" />} />
              <Route path="/explore" element={<CategoryPage category="explore" />} />
              <Route path="/polymath" element={<Navigate to="/explore" replace />} />
              <Route path="/library" element={<Navigate to="/explore" replace />} />
              <Route path="/explore/:filter" element={<CategoryPage category="explore" />} />
              <Route path="/library/:resource" element={<ResourceDetail />} />
              <Route path="/library/:resource/:module" element={<TopicStandalone />} />
              <Route path="/explore/:domain/:resource" element={<ResourceDetail />} />
              <Route
                path="/explore/:domain/:resource/tool/:toolSlug"
                element={<ToolPlaceholder />}
              />
              <Route path="/explore/:domain/:resource/:module" element={<TopicStandalone />} />
              <Route
                path="/explore/:domain/:resource/:book/:module"
                element={<TopicStandalone />}
              />
              <Route
                path="/test"
                element={
                  <Suspense fallback={<LoadingScreen open />}>
                    <VizTest />
                  </Suspense>
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}

function App() {
  return (
    <ErrorBoundary level="app">
      <Router basename="/Aether">
        <AppContent />
      </Router>
    </ErrorBoundary>
  )
}

export default App
