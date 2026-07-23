// Central keybind registry, parser, and matcher.

export const KEYBIND_ACTIONS = [
  {
    id: 'open-settings',
    label: 'Open settings',
    // A real chord, not a bare modifier. A lone-Control bind only fires if the
    // OS and browser deliver a clean Control keyup with no key in between, and
    // a tap of a lone modifier is routinely eaten upstream (IME and
    // keyboard-layout switchers claim it), so it silently does nothing on some
    // machines. Tapping Control still works (see use-keybinds) but is a bonus,
    // never the only way in.
    defaultCombo: 'Mod+,',
    global: true
  },
  { id: 'search', label: 'Search', defaultCombo: '/', global: true },
  { id: 'explore', label: 'Explore', defaultCombo: 'g e' },
  { id: 'library', label: 'Library', defaultCombo: 'g l' },
  { id: 'focus-sidebar', label: 'Focus sidebar', defaultCombo: 'Mod+\\', global: true },
  { id: 'focus-mode', label: 'Focus mode', defaultCombo: 'f' },
  { id: 'next-lesson', label: 'Next lesson', defaultCombo: 'j' },
  { id: 'prev-lesson', label: 'Previous lesson', defaultCombo: 'k' },
  { id: 'mark-complete', label: 'Mark complete', defaultCombo: 'x' },
  { id: 'bookmark', label: 'Bookmark', defaultCombo: 'b' },
  { id: 'notes', label: 'Notes', defaultCombo: 'n' },
  { id: 'close-back', label: 'Close / back', defaultCombo: 'Escape', global: true },
  { id: 'toggle-pomodoro', label: 'Pomodoro timer', defaultCombo: 'P' },
  { id: 'copy-markdown', label: 'Copy as Markdown', defaultCombo: 'c' }
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

// A modifier pressed and released on its own, e.g. "Control". Such a bind can
// only resolve on release: while the key is still down there is no way to know
// whether a chord is coming. The dispatcher fires these as a tap; the ordinary
// keydown matcher below deliberately refuses them (stepMatches returns false on
// an empty key), so the two paths cannot both claim the same press.
export const MODIFIER_EVENT_KEYS = { Control: 'Ctrl', Alt: 'Alt', Shift: 'Shift', Meta: 'Meta' }

export function bareModifier(str) {
  if (!str) return null
  const steps = str.split(/\s+/).filter(Boolean)
  if (steps.length !== 1) return null
  const parts = steps[0].split('+').filter(Boolean)
  if (parts.length !== 1) return null
  return MOD_TOKENS.has(parts[0]) ? normalizeMod(parts[0]) : null
}

// Build a combo string from a captured KeyboardEvent (used by remap input).
export function eventToCombo(e) {
  // A lone modifier is a legal bind: it becomes a tap. Return it verbatim so
  // "Control" round-trips through parseCombo as a bare-modifier step.
  if (MODIFIER_EVENT_KEYS[e.key]) return e.key

  const parts = []
  if (e.metaKey) parts.push(isMac ? 'Mod' : 'Meta')
  if (e.ctrlKey) parts.push(isMac ? 'Ctrl' : 'Mod')
  if (e.altKey) parts.push('Alt')
  // For non-printable keys (Escape, Enter, Arrow*, Tab, F1...), keep as-is.
  // For printable keys, take e.key directly so shifted glyphs (>, <, ?) survive.
  const key = e.key
  if (!key) return null
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

// Display tokens for a combo. Keys are separated by an explicit '+' inside a
// step and 'then' between steps: without the '+', a chord ("Ctrl+,") renders as
// two loose chips and reads as two independent bindings. Both separators are
// rendered as separators, not as keys.
export const COMBO_SEPARATORS = new Set(['+', 'then'])

export function comboTokens(str) {
  if (!str) return []
  const tokens = []
  const steps = str.split(/\s+/).filter(Boolean)
  steps.forEach((step, i) => {
    const parts = step.split('+').filter(Boolean)
    const keys = []
    parts.forEach(p => {
      if (p === 'Mod' || p === 'Meta' || p === 'Ctrl' || p === 'Control') keys.push('Ctrl')
      else if (p === 'Alt' || p === 'Option') keys.push('Alt')
      else if (p === 'Shift') keys.push('Shift')
      else if (KEY_DISPLAY[p]) keys.push(KEY_DISPLAY[p])
      else if (p.length === 1 && p !== p.toLowerCase()) {
        keys.push('Shift')
        keys.push(p.toUpperCase())
      } else keys.push(p.length === 1 ? p.toUpperCase() : p)
    })
    keys.forEach((k, ki) => {
      if (ki > 0) tokens.push('+')
      tokens.push(k)
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
