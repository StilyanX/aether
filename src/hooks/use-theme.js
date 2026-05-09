import { useState, useEffect } from 'react'

const THEME_KEY = 'aether-theme'
const FONT_SCALE_KEY = 'aether-font-scale'
const LINE_HEIGHT_KEY = 'aether-line-height'
const MEASURE_KEY = 'aether-measure'

const EVENT = 'aether-theme-change'

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved) return saved
  if (window.matchMedia('(prefers-contrast: more)').matches) return 'high-contrast'
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return 'high-contrast'
}

function resolveTheme(t) {
  if (t !== 'system') return t
  if (window.matchMedia('(prefers-contrast: more)').matches) return 'high-contrast'
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return 'dark'
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', resolveTheme(theme))
}

function applyReaderVars(fontScale, lineHeight, measure) {
  const r = document.documentElement.style
  r.setProperty('--lrn-font-scale', fontScale)
  r.setProperty('--lrn-line-height', lineHeight)
  r.setProperty('--lrn-measure', measure)
}

// Module-level state - shared across all hook instances
let state = {
  theme: 'high-contrast',
  fontScale: '1',
  lineHeight: '1.65',
  measure: '65ch'
}
let initialized = false
let listeners = []

function broadcast() {
  listeners.forEach(fn => fn({ ...state }))
}

function initState() {
  if (initialized) return
  initialized = true
  state = {
    theme: getInitialTheme(),
    fontScale: localStorage.getItem(FONT_SCALE_KEY) || '1',
    lineHeight: localStorage.getItem(LINE_HEIGHT_KEY) || '1.65',
    measure: localStorage.getItem(MEASURE_KEY) || '65ch'
  }
  applyTheme(state.theme)
  applyReaderVars(state.fontScale, state.lineHeight, state.measure)
}

function setTheme(theme) {
  state = { ...state, theme }
  localStorage.setItem(THEME_KEY, theme)
  applyTheme(theme)
  broadcast()
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { ...state } }))
}

function setFontScale(fontScale) {
  state = { ...state, fontScale }
  localStorage.setItem(FONT_SCALE_KEY, fontScale)
  applyReaderVars(state.fontScale, state.lineHeight, state.measure)
  broadcast()
}

function setLineHeight(lineHeight) {
  state = { ...state, lineHeight }
  localStorage.setItem(LINE_HEIGHT_KEY, lineHeight)
  applyReaderVars(state.fontScale, state.lineHeight, state.measure)
  broadcast()
}

function setMeasure(measure) {
  state = { ...state, measure }
  localStorage.setItem(MEASURE_KEY, measure)
  applyReaderVars(state.fontScale, state.lineHeight, state.measure)
  broadcast()
}

export function useTheme() {
  initState()
  const [snap, setSnap] = useState({ ...state })

  useEffect(() => {
    const listener = next => setSnap(next)
    listeners.push(listener)

    const onCrossTab = e => {
      if (e.type === EVENT) setSnap({ ...state })
    }
    window.addEventListener(EVENT, onCrossTab)

    return () => {
      listeners = listeners.filter(l => l !== listener)
      window.removeEventListener(EVENT, onCrossTab)
    }
  }, [])

  return {
    theme: snap.theme,
    setTheme,
    fontScale: snap.fontScale,
    setFontScale,
    lineHeight: snap.lineHeight,
    setLineHeight,
    measure: snap.measure,
    setMeasure
  }
}
