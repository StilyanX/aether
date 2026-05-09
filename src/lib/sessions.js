const SESSIONS_KEY = 'aether-sessions'
const CURRENT_ID_KEY = 'aether-session-id'
const STALE_MS = 30 * 24 * 60 * 60 * 1000

function uid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
}

export function parseUA(ua = '') {
  const u = ua || ''
  let browser = 'Browser'
  if (/Edg\//.test(u)) browser = 'Edge'
  else if (/OPR\/|Opera/.test(u)) browser = 'Opera'
  else if (/Brave/.test(u)) browser = 'Brave'
  else if (/Firefox\//.test(u)) browser = 'Firefox'
  else if (/Chrome\//.test(u)) browser = 'Chrome'
  else if (/Safari\//.test(u)) browser = 'Safari'

  let os = 'Unknown OS'
  if (/Android/.test(u)) os = 'Android'
  else if (/iPhone|iPad|iOS/.test(u)) os = 'iOS'
  else if (/Mac OS X/.test(u)) os = 'macOS'
  else if (/Windows/.test(u)) os = 'Windows'
  else if (/Linux/.test(u)) os = 'Linux'

  return { browser, os }
}

function readRaw() {
  try {
    const raw = localStorage.getItem(SESSIONS_KEY)
    const arr = raw ? JSON.parse(raw) : []
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

function writeRaw(list) {
  try {
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(list))
    window.dispatchEvent(new CustomEvent('aether:sessions'))
  } catch {
    // quota
  }
}

function pruneStale(list, now = Date.now()) {
  return list.filter(s => now - (s.lastSeen || 0) < STALE_MS)
}

export function getCurrentId() {
  try {
    let id = sessionStorage.getItem(CURRENT_ID_KEY)
    if (!id) {
      id = uid()
      sessionStorage.setItem(CURRENT_ID_KEY, id)
    }
    return id
  } catch {
    return null
  }
}

export function getSessions() {
  const now = Date.now()
  const pruned = pruneStale(readRaw(), now)
  if (pruned.length !== readRaw().length) writeRaw(pruned)
  return pruned.sort((a, b) => (b.lastSeen || 0) - (a.lastSeen || 0))
}

export function registerCurrentSession() {
  const id = getCurrentId()
  if (!id) return
  const ua = navigator.userAgent || ''
  const { browser, os } = parseUA(ua)
  const now = Date.now()
  const list = pruneStale(readRaw(), now)
  const i = list.findIndex(s => s.id === id)
  if (i >= 0) {
    list[i] = { ...list[i], browser, os, ua, lastSeen: now }
  } else {
    list.push({ id, browser, os, ua, firstSeen: now, lastSeen: now })
  }
  writeRaw(list)
}

export function touchCurrentSession() {
  const id = getCurrentId()
  if (!id) return
  const now = Date.now()
  const list = pruneStale(readRaw(), now)
  const i = list.findIndex(s => s.id === id)
  if (i >= 0) {
    list[i] = { ...list[i], lastSeen: now }
    writeRaw(list)
  } else {
    registerCurrentSession()
  }
}

export function removeSession(id) {
  const list = readRaw().filter(s => s.id !== id)
  writeRaw(list)
  const current = (() => {
    try {
      return sessionStorage.getItem(CURRENT_ID_KEY)
    } catch {
      return null
    }
  })()
  if (id === current) {
    try {
      sessionStorage.removeItem(CURRENT_ID_KEY)
    } catch {}
    location.reload()
  }
}

export function removeOtherSessions() {
  const id = (() => {
    try {
      return sessionStorage.getItem(CURRENT_ID_KEY)
    } catch {
      return null
    }
  })()
  const list = readRaw().filter(s => s.id === id)
  writeRaw(list)
}

export function signOutThisDevice() {
  const ok = window.confirm(
    'Sign out of this device? Your settings on this device will be cleared. Study progress is preserved.'
  )
  if (!ok) return
  const id = (() => {
    try {
      return sessionStorage.getItem(CURRENT_ID_KEY)
    } catch {
      return null
    }
  })()
  const list = readRaw().filter(s => s.id !== id)
  writeRaw(list)
  try {
    localStorage.removeItem('aether-settings')
    localStorage.removeItem('aether-telemetry-log')
    sessionStorage.removeItem(CURRENT_ID_KEY)
  } catch {}
  location.reload()
}

export function relTime(ts, now = Date.now()) {
  if (!ts) return 'never'
  const diff = Math.max(0, now - ts)
  const sec = Math.floor(diff / 1000)
  if (sec < 60) return 'just now'
  const min = Math.floor(sec / 60)
  if (min < 60) return `${min}m ago`
  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr}h ago`
  const day = Math.floor(hr / 24)
  if (day < 30) return `${day}d ago`
  const mo = Math.floor(day / 30)
  return `${mo}mo ago`
}
