// Central keybind registry, parser, and matcher.

export const KEYBIND_ACTIONS = [
  {
    id: 'open-settings',
    label: 'Open settings',
    defaultCombo: 'Control',
    global: true,
    hidden: true
  },
  { id: 'search', label: 'Search', defaultCombo: '/', global: true },
  { id: 'explore', label: 'Explore', defaultCombo: 'g e' },
  { id: 'library', label: 'Library', defaultCombo: 'g l' },
  { id: 'focus-mode', label: 'Focus mode', defaultCombo: 'f' },
  { id: 'next-lesson', label: 'Next lesson', defaultCombo: 'j' },
  { id: 'prev-lesson', label: 'Previous lesson', defaultCombo: 'k' },
  { id: 'mark-complete', label: 'Mark complete', defaultCombo: 'x' },
  { id: 'bookmark', label: 'Bookmark', defaultCombo: 'b' },
  { id: 'notes', label: 'Notes', defaultCombo: 'n' },
  { id: 'close-back', label: 'Close / back', defaultCombo: 'Escape', global: true },
  { id: 'toggle-pomodoro', label: 'Pomodoro timer', defaultCombo: 'P' }
]

export const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

const MOD_TOKENS = new Set(['Mod', 'Ctrl', 'Control', 'Meta', 'Cmd', 'Alt', 'Option', 'Shift'])

function normalizeMod(tok) {
  if (tok === 'Mod') return isMac ? 'Meta' : 'Ctrl'
  if (tok === 'Cmd') return 'Meta'
  if (tok === 'Control') return 'Ctrl'
  if (tok === 'Option') return 'Alt'
  return tok
}

function normalizeKey(k) {
  if (!k) return ''
  return k
}

// "Mod+k" → { mods:Set('Meta'|'Ctrl'), key:'k' }
function parseStep(step) {
  const parts = step
    .split('+')
    .map(s => s.trim())
    .filter(Boolean)
  const mods = new Set()
  let key = ''
  for (const p of parts) {
    if (MOD_TOKENS.has(p)) mods.add(normalizeMod(p))
    else key = normalizeKey(p)
  }
  return { mods, key }
}

// Combo string: steps separated by space. Each step is "Mod+key" or "key".
export function parseCombo(str) {
  if (!str) return { steps: [] }
  const steps = str.split(/\s+/).filter(Boolean).map(parseStep)
  return { steps }
}

function eventMods(e) {
  const mods = new Set()
  if (e.ctrlKey) mods.add('Ctrl')
  if (e.metaKey) mods.add('Meta')
  if (e.altKey) mods.add('Alt')
  // Shift only counts as a modifier when the bind explicitly includes it AND
  // produces a non-printable key. For printable keys (>, <, ?) the shifted
  // glyph is captured directly via e.key.
  return mods
}

function keyFromEvent(e) {
  return e.key
}

function stepMatches(step, e) {
  const evMods = eventMods(e)
  const evKey = keyFromEvent(e)
  if (step.mods.size !== evMods.size) return false
  for (const m of step.mods) if (!evMods.has(m)) return false
  if (step.key === '') return false
  if (step.key.length === 1 && evKey.length === 1) {
    return step.key.toLowerCase() === evKey.toLowerCase()
  }
  return step.key === evKey
}

// Returns 'fire' | 'partial' | 'miss'
export function matchEvent(combo, e, seqIndex) {
  if (!combo || !combo.steps || combo.steps.length === 0) return 'miss'
  const step = combo.steps[seqIndex]
  if (!step) return 'miss'
  if (!stepMatches(step, e)) return 'miss'
  if (seqIndex + 1 >= combo.steps.length) return 'fire'
  return 'partial'
}

// Build a combo string from a captured KeyboardEvent (used by remap input).
export function eventToCombo(e) {
  const parts = []
  if (e.metaKey) parts.push(isMac ? 'Mod' : 'Meta')
  if (e.ctrlKey) parts.push(isMac ? 'Ctrl' : 'Mod')
  if (e.altKey) parts.push('Alt')
  // For non-printable keys (Escape, Enter, Arrow*, Tab, F1...), keep as-is.
  // For printable keys, take e.key directly so shifted glyphs (>, <, ?) survive.
  let key = e.key
  if (!key || key === 'Shift' || key === 'Control' || key === 'Meta' || key === 'Alt') {
    return null
  }
  parts.push(key)
  return parts.join('+')
}

// Display: "Mod+," → ["⌘", ","] on mac; ["Ctrl", ","] elsewhere.
const KEY_DISPLAY = {
  Escape: 'Esc',
  ArrowUp: '↑',
  ArrowDown: '↓',
  ArrowLeft: '←',
  ArrowRight: '→',
  Enter: '↵',
  ' ': 'Space',
  Tab: 'Tab'
}

export function comboTokens(str) {
  if (!str) return []
  const tokens = []
  const steps = str.split(/\s+/).filter(Boolean)
  steps.forEach((step, i) => {
    const parts = step.split('+').filter(Boolean)
    parts.forEach(p => {
      if (p === 'Mod' || p === 'Meta' || p === 'Ctrl' || p === 'Control') tokens.push('Ctrl')
      else if (p === 'Alt' || p === 'Option') tokens.push('Alt')
      else if (p === 'Shift') tokens.push('Shift')
      else if (KEY_DISPLAY[p]) tokens.push(KEY_DISPLAY[p])
      else if (p.length === 1 && p !== p.toLowerCase()) {
        tokens.push('Shift')
        tokens.push(p.toUpperCase())
      } else tokens.push(p.length === 1 ? p.toUpperCase() : p)
    })
    if (i < steps.length - 1) tokens.push('then')
  })
  return tokens
}

// Resolve effective combo for an action, given the user overrides map.
export function effectiveCombo(actionId, overrides) {
  if (overrides && Object.prototype.hasOwnProperty.call(overrides, actionId)) {
    return overrides[actionId]
  }
  const def = KEYBIND_ACTIONS.find(a => a.id === actionId)
  return def ? def.defaultCombo : ''
}

export function findConflicts(actionId, combo, overrides) {
  const conflicts = []
  for (const a of KEYBIND_ACTIONS) {
    if (a.id === actionId) continue
    const other = effectiveCombo(a.id, overrides)
    if (other === combo) conflicts.push(a)
  }
  return conflicts
}
