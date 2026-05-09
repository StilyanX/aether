// Single source of truth for time / duration / units formatting.
// Reads `timeFormat` and `units` from the live settings snapshot.

const SETTINGS_KEY = 'aether-settings'

function readSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function formatDuration(ms) {
  const total = Math.max(0, Math.floor(ms / 1000))
  const m = Math.floor(total / 60)
  const s = String(total % 60).padStart(2, '0')
  return `${m}:${s}`
}
