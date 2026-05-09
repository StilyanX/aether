// Quiet-hours helpers used by the study-reminder scheduler.

const SETTINGS_KEY = 'aether-settings'

function readSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function inQuietHours(date = new Date()) {
  const s = readSettings()
  if (!s.quietHours) return false
  const [fromH, fromM] = (s.quietFrom || '22:00').split(':').map(Number)
  const [toH, toM] = (s.quietTo || '07:00').split(':').map(Number)
  const cur = date.getHours() * 60 + date.getMinutes()
  const from = fromH * 60 + fromM
  const to = toH * 60 + toM
  return from <= to ? cur >= from && cur < to : cur >= from || cur < to
}
