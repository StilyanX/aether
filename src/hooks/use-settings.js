import { useState, useEffect } from 'react'

const SETTINGS_KEY = 'aether-settings'

const DEFAULTS = {
  fontFamily: 'sans-serif',
  fontFamilyCustom: '',
  codeFont: 'monospace',
  contentWidth: 'medium',
  contentWidthCustom: '75ch',
  lineHeight: 1.625,
  textAlignment: 'left',
  readingProgress: 'off',
  desiredRetention: 0.9,
  newCardsPerDay: Infinity,
  maxReviewsPerDay: Infinity,
  maxInterval: 365,
  showReviewTimer: false,
  searchWeb: false,
  reducedMotion: 'system',
  keyboardShortcuts: true,
  focusMode: false,
  mathSpeechStyle: 'ClearSpeak',
  studyReminder: false,
  reminderTime: '09:00',
  persistentStorage: false,
  accentColor: '#3b82f6',
  paragraphSpacing: 1.5,
  letterSpacing: 0,
  wordSpacing: 0,
  scrollBehavior: 'smooth',
  autoAdvance: false,
  autoAdvanceDelay: 1.5,
  animationSpeed: 'normal',
  cursorStyle: 'default',
  highContrast: false,
  density: 'comfortable',
  textScale: 100,

  // Appearance - chrome
  accent: 'theme',
  accentSidebar: true,
  accentProgress: true,
  accentTopbar: true,
  accentPageNav: true,
  accentEquations: true,
  accentAlgorithms: true,
  accentHeadings: true,
  accentDividers: true,
  accentInsights: true,
  gridOverlay: true,
  showEmptyDomains: false,

  // Appearance - topbar
  topbarShowSearch: true,
  topbarShowFocusMode: true,
  topbarShowShortcuts: true,
  topbarShowDownload: true,
  topbarShowSettings: true,
  topbarShowHints: true,

  // Reading
  rulerOnHover: false,
  dyslexiaTint: false,
  justify: false,

  // Learning
  difficulty: 'auto',
  spacedRepetition: true,
  interleave: false,
  showHints: true,
  checkUnderstanding: true,
  formulaRender: 'katex',
  codeTheme: 'mono',

  pomodoro: false,
  pomodoroWork: 25,
  pomodoroBreak: 5,
  pomodoroLongBreak: 15,
  pomodoroLongBreakInterval: 4,
  pomodoroAutoBreak: false,
  pomodoroAutoWork: false,

  // Notifications
  notifDesktop: false,
  quietHours: true,
  quietFrom: '22:00',
  quietTo: '07:00',

  // Keyboard
  keymap: 'default',
  vimMode: false,
  keybinds: {},

  // Region
  timeFormat: '24',

  // Account - top-level fields mirror the active profile for back-compat
  displayName: 'Operator',
  handle: '@operator',
  avatarColor: '#e6e6e8',
  avatarImage: '',
  profiles: [],
  activeProfileId: ''
}

const PROFILE_FIELDS = ['displayName', 'handle', 'avatarColor', 'avatarImage']

function uid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
}

function ensureProfiles(s) {
  if (Array.isArray(s.profiles) && s.profiles.length > 0) {
    if (!s.profiles.find(p => p.id === s.activeProfileId)) {
      s.activeProfileId = s.profiles[0].id
    }
    return s
  }
  const id = uid()
  s.profiles = [
    {
      id,
      displayName: s.displayName || 'Operator',
      handle: s.handle || '@operator',
      avatarColor: s.avatarColor || '#e6e6e8',
      avatarImage: s.avatarImage || ''
    }
  ]
  s.activeProfileId = id
  return s
}

function mirrorActiveProfile(s) {
  const active = s.profiles.find(p => p.id === s.activeProfileId)
  if (!active) return s
  PROFILE_FIELDS.forEach(k => {
    s[k] = active[k]
  })
  return s
}

const ACCENT_MAP = {
  stone: '#e6e6e8',
  blue: '#3b9eff',
  green: '#50c878',
  amber: '#ffd700',
  coral: '#ff6f5e',
  violet: '#a78bfa'
}

const WIDTH_MAP = {
  narrow: '60ch',
  medium: '75ch',
  wide: '90ch'
}

const CJK_FALLBACK = ", 'Noto Sans JP', 'Noto Sans SC'"
const FONT_MAP = {
  'sans-serif': `'D-DIN'${CJK_FALLBACK}, sans-serif`,
  serif: `Georgia${CJK_FALLBACK}, serif`,
  OpenDyslexic: `OpenDyslexic${CJK_FALLBACK}, sans-serif`,
  'Atkinson Hyperlegible': `'Atkinson Hyperlegible'${CJK_FALLBACK}, sans-serif`
}

const CODE_FONT_MAP = {
  monospace: 'monospace',
  'JetBrains Mono': "'JetBrains Mono', monospace",
  'Fira Code': "'Fira Code', monospace"
}

const FONT_DATA_KEY = 'aether-custom-font'
const loadedFonts = new Set()

function ensureCustomFont(root, name) {
  if (!name || loadedFonts.has(name)) return
  const dataUrl = typeof localStorage !== 'undefined' ? localStorage.getItem(FONT_DATA_KEY) : null
  if (!dataUrl) return
  loadedFonts.add(name)
  const face = new FontFace(name, `url(${dataUrl})`)
  face
    .load()
    .then(loaded => {
      document.fonts.add(loaded)
      root.style.setProperty('--reader-font-family', `"${name}", sans-serif`)
    })
    .catch(() => loadedFonts.delete(name))
}

// Module-level singleton
let settings = { ...DEFAULTS }
let initialized = false
let listeners = []
let lastNotifDesktop = false

function broadcast() {
  listeners.forEach(fn => fn({ ...settings }))
}

function apply(s) {
  const root = document.documentElement
  root.style.setProperty('--lrn-font-scale', (s.textScale || 100) / 100)
  root.style.setProperty('--lrn-line-height', s.lineHeight)
  const measureVal =
    s.contentWidth === 'custom'
      ? s.contentWidthCustom || '75ch'
      : WIDTH_MAP[s.contentWidth] || '75ch'
  root.style.setProperty('--lrn-measure', measureVal)
  root.style.setProperty('--reading-measure', measureVal)
  root.style.setProperty('--lh-body', String(s.lineHeight || 1.625))
  if (s.fontFamily === 'custom' && s.fontFamilyCustom) {
    root.style.setProperty('--reader-font-family', `"${s.fontFamilyCustom}", sans-serif`)
    ensureCustomFont(root, s.fontFamilyCustom)
  } else {
    root.style.setProperty('--reader-font-family', FONT_MAP[s.fontFamily] || "'D-DIN', sans-serif")
  }
  root.style.setProperty('--reader-code-font', CODE_FONT_MAP[s.codeFont] || 'monospace')
  root.style.setProperty('--reader-text-align', s.textAlignment)
  // Accent: 'theme' = let CSS cascade (--text-primary); otherwise override
  if (!s.accent || s.accent === 'theme') {
    root.style.removeProperty('--accent')
  } else {
    const accentHex = ACCENT_MAP[s.accent] || s.accentColor
    root.style.setProperty('--accent', accentHex)
  }
  root.style.setProperty(
    '--ax-sidebar',
    s.accentSidebar !== false ? 'var(--accent)' : 'var(--text-primary)'
  )
  root.style.setProperty(
    '--ax-progress',
    s.accentProgress !== false ? 'var(--accent)' : 'var(--border-default)'
  )
  root.style.setProperty(
    '--ax-topbar',
    s.accentTopbar !== false ? 'var(--accent)' : 'var(--text-primary)'
  )
  root.style.setProperty(
    '--ax-page-nav',
    s.accentPageNav !== false ? 'var(--accent)' : 'var(--text-primary)'
  )
  root.style.setProperty(
    '--ax-eq',
    s.accentEquations !== false ? 'var(--accent)' : 'var(--border-default)'
  )
  root.style.setProperty(
    '--ax-algo',
    s.accentAlgorithms !== false ? 'var(--accent)' : 'var(--border-default)'
  )
  root.style.setProperty(
    '--ax-headings',
    s.accentHeadings !== false ? 'var(--accent)' : 'var(--text-primary)'
  )
  root.style.setProperty(
    '--ax-dividers',
    s.accentDividers !== false ? 'var(--accent)' : 'var(--text-secondary)'
  )
  root.style.setProperty(
    '--ax-insights',
    s.accentInsights !== false ? 'var(--accent)' : 'var(--border-default)'
  )
  root.style.setProperty('--lrn-paragraph-spacing', s.paragraphSpacing)
  root.style.setProperty('--lrn-letter-spacing', `${s.letterSpacing}em`)
  root.style.setProperty('--lrn-word-spacing', `${s.wordSpacing}em`)
  root.style.scrollBehavior = s.scrollBehavior === 'instant' ? 'auto' : 'smooth'

  const speedMap = { slow: 2, normal: 1, fast: 0.5 }
  root.style.setProperty('--dur-multiplier', speedMap[s.animationSpeed] || 1)
  root.style.setProperty('--cursor-style', s.cursorStyle)
  root.setAttribute('data-high-contrast', s.highContrast ? 'on' : 'off')

  let rm = s.reducedMotion
  if (rm === 'system') {
    rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'on' : 'off'
  }
  root.setAttribute('data-reduced-motion', rm)
  root.setAttribute('data-focus-mode', s.focusMode ? 'on' : 'off')
  root.setAttribute('data-reading-guide', s.rulerOnHover ? 'on' : 'off')
  root.setAttribute('data-density', s.density || 'comfortable')
  root.style.setProperty('--text-scale', ((s.textScale || 100) / 100).toFixed(2))
  root.setAttribute('data-typeface', s.fontFamily === 'OpenDyslexic' ? 'dyslexic' : 'default')
  root.setAttribute('data-grid-overlay', s.gridOverlay ? 'on' : 'off')
  root.setAttribute('data-dyslexia-tint', s.dyslexiaTint ? 'on' : 'off')
  root.setAttribute('data-justify', s.justify ? 'on' : 'off')
  root.setAttribute('data-hints', s.showHints ? 'on' : 'off')
  root.setAttribute('data-check-understanding', s.checkUnderstanding ? 'on' : 'off')
  root.setAttribute('data-formula-render', s.formulaRender || 'katex')
  root.setAttribute('data-code-theme', s.codeTheme || 'mono')

  if (s.notifDesktop && 'Notification' in window) {
    const wasOff = !lastNotifDesktop
    if (Notification.permission === 'default') {
      Notification.requestPermission().then(perm => {
        if (perm === 'granted' && wasOff) {
          new Notification('Aether - Desktop notifications enabled', {
            body: 'You will receive study reminders here.',
            icon: '/logo.png'
          })
        }
      })
    } else if (Notification.permission === 'granted' && wasOff) {
      new Notification('Aether - Desktop notifications enabled', {
        body: 'You will receive study reminders here.',
        icon: '/logo.png'
      })
    }
  }
  lastNotifDesktop = !!s.notifDesktop

  // Reading guide - cursor-following line highlight
  const guideId = 'aether-reading-guide'
  const guideOn = s.rulerOnHover
  if (guideOn) {
    let el = document.getElementById(guideId)
    if (!el) {
      el = document.createElement('div')
      el.id = guideId
      el.setAttribute('aria-hidden', 'true')
      document.body.appendChild(el)
    }
    const move = e => {
      el.style.top = `${e.clientY - 20}px`
    }
    el._handler = el._handler || move
    document.removeEventListener('mousemove', el._handler)
    el._handler = move
    document.addEventListener('mousemove', move, { passive: true })
  } else {
    const el = document.getElementById(guideId)
    if (el) {
      if (el._handler) document.removeEventListener('mousemove', el._handler)
      el.remove()
    }
  }

  // Study reminder - schedule browser notification, respecting quiet hours.
  // Gated by notifDesktop: turning off desktop notifications silences reminders.
  if (s.studyReminder && s.notifDesktop && 'Notification' in window) {
    if (Notification.permission === 'default') {
      Notification.requestPermission()
    }
    clearTimeout(window.__aetherReminderTimer)
    const inQuiet = at => {
      if (!s.quietHours) return false
      const [fh, fm] = (s.quietFrom || '22:00').split(':').map(Number)
      const [th, tm] = (s.quietTo || '07:00').split(':').map(Number)
      const cur = at.getHours() * 60 + at.getMinutes()
      const from = fh * 60 + fm
      const to = th * 60 + tm
      return from <= to ? cur >= from && cur < to : cur >= from || cur < to
    }
    const schedule = () => {
      const [h, m] = s.reminderTime.split(':').map(Number)
      const now = new Date()
      let target = new Date(now)
      target.setHours(h, m, 0, 0)
      if (target <= now) target.setDate(target.getDate() + 1)
      if (inQuiet(target)) {
        const [th, tm] = (s.quietTo || '07:00').split(':').map(Number)
        target = new Date(target)
        target.setHours(th, tm, 0, 0)
        if (target <= now) target.setDate(target.getDate() + 1)
      }
      const delay = target - now
      window.__aetherReminderTimer = setTimeout(() => {
        if (Notification.permission === 'granted' && !inQuiet(new Date())) {
          new Notification('Aether - Time to study', {
            body: 'Your daily review session is waiting.',
            icon: '/logo.png'
          })
        }
        schedule()
      }, delay)
    }
    schedule()
  } else {
    clearTimeout(window.__aetherReminderTimer)
  }

  if (s.persistentStorage && navigator.storage?.persist) {
    navigator.storage.persist()
  }
}

function initSettings() {
  if (initialized) return
  initialized = true
  try {
    const saved = localStorage.getItem(SETTINGS_KEY)
    if (saved) {
      const parsed = JSON.parse(saved, (_, v) => (v === '__Infinity__' ? Infinity : v))
      if (parsed.newCardsPerDay === 10) parsed.newCardsPerDay = Infinity
      if (parsed.maxReviewsPerDay === 100) parsed.maxReviewsPerDay = Infinity
      settings = { ...DEFAULTS, ...parsed }
    }
  } catch (_) {
    // fall back to defaults
  }
  ensureProfiles(settings)
  mirrorActiveProfile(settings)
  persist()
  apply(settings)
}

function persist() {
  try {
    localStorage.setItem(
      SETTINGS_KEY,
      JSON.stringify(settings, (_, v) => (v === Infinity ? '__Infinity__' : v))
    )
  } catch (_) {}
}

export function set(key, value) {
  settings = { ...settings, [key]: value }
  if (PROFILE_FIELDS.includes(key)) {
    settings.profiles = settings.profiles.map(p =>
      p.id === settings.activeProfileId ? { ...p, [key]: value } : p
    )
  }
  persist()
  apply(settings)
  broadcast()
}

export function addProfile(initial = {}) {
  const id = uid()
  const profile = {
    id,
    displayName: initial.displayName || 'Operator',
    handle: initial.handle || '@operator',
    avatarColor: initial.avatarColor || '#e6e6e8',
    avatarImage: initial.avatarImage || ''
  }
  settings = {
    ...settings,
    profiles: [...settings.profiles, profile],
    activeProfileId: id
  }
  mirrorActiveProfile(settings)
  persist()
  apply(settings)
  broadcast()
  return id
}

export function removeProfile(id) {
  if (settings.profiles.length <= 1) return
  const next = settings.profiles.filter(p => p.id !== id)
  const wasActive = settings.activeProfileId === id
  settings = {
    ...settings,
    profiles: next,
    activeProfileId: wasActive ? next[0].id : settings.activeProfileId
  }
  mirrorActiveProfile(settings)
  persist()
  apply(settings)
  broadcast()
}

export function resetProfiles() {
  const id = uid()
  const fresh = {
    id,
    displayName: 'Operator',
    handle: '@operator',
    avatarColor: '#e6e6e8',
    avatarImage: ''
  }
  settings = { ...settings, profiles: [fresh], activeProfileId: id }
  mirrorActiveProfile(settings)
  persist()
  apply(settings)
  broadcast()
}

export function switchProfile(id) {
  if (!settings.profiles.find(p => p.id === id)) return
  settings = { ...settings, activeProfileId: id }
  mirrorActiveProfile(settings)
  persist()
  apply(settings)
  broadcast()
}

export function resetSection(keys) {
  const patch = {}
  keys.forEach(k => {
    patch[k] = DEFAULTS[k]
  })
  settings = { ...settings, ...patch }
  ensureProfiles(settings)
  mirrorActiveProfile(settings)
  persist()
  apply(settings)
  broadcast()
}

export function useSettings() {
  initSettings()
  const [snap, setSnap] = useState({ ...settings })

  useEffect(() => {
    const listener = next => setSnap(next)
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }, [])

  return snap
}
