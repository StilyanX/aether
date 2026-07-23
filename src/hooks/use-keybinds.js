import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { toggleBookmark } from './use-bookmarks'
import { useSettings, set } from './use-settings'
import {
  KEYBIND_ACTIONS,
  parseCombo,
  matchEvent,
  effectiveCombo,
  bareModifier,
  MODIFIER_EVENT_KEYS
} from '../lib/keybinds'

const SEQ_TIMEOUT_MS = 800

function isEditableTarget(t) {
  if (!t) return false
  const tag = t.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
  if (t.isContentEditable) return true
  return false
}

export function Keybinds() {
  const settings = useSettings()
  const navigate = useNavigate()
  const location = useLocation()

  const stateRef = useRef({ seqIndex: 0, candidates: [], timer: null })
  const settingsRef = useRef(settings)
  const navRef = useRef({ navigate, location })

  useEffect(() => {
    settingsRef.current = settings
  }, [settings])
  useEffect(() => {
    navRef.current = { navigate, location }
  }, [navigate, location])

  useEffect(() => {
    const resetSeq = () => {
      const st = stateRef.current
      if (st.timer) clearTimeout(st.timer)
      st.timer = null
      st.seqIndex = 0
      st.candidates = []
    }

    // Sidebar owns the active element iff focus is inside <aside.ep-sidebar>.
    // Used to re-route j/k (next/prev-lesson) into sidebar nav when the
    // sidebar has focus. C9: DOM is source of truth, not a parallel flag.
    const sidebarOwnsFocus = () =>
      !!document.querySelector('aside.ep-sidebar')?.contains(document.activeElement)

    const runAction = id => {
      const s = settingsRef.current
      const { navigate, location } = navRef.current
      switch (id) {
        case 'open-settings':
          window.dispatchEvent(new CustomEvent('aether:toggle-settings'))
          break
        case 'search':
          window.dispatchEvent(new CustomEvent('aether:open-search'))
          break
        case 'explore':
          navigate('/explore')
          break
        case 'library':
          navigate('/explore')
          break
        case 'focus-sidebar':
          // PR E: Mod+\ now targets the sidebar's fuzzy-filter input
          // (spotlight-class entry: 3 keys to navigate any domain).
          // The list-focus event remains for downstream ↓/j hand-off.
          window.dispatchEvent(new CustomEvent('aether:focus-sidebar-filter'))
          break
        case 'focus-mode':
          set('focusMode', !s.focusMode)
          break
        case 'close-back':
          if (sidebarOwnsFocus()) {
            // Let the sidebar's own Esc handler defocus; do not navigate away.
            window.dispatchEvent(new CustomEvent('aether:sidebar-escape'))
            break
          }
          if (location.pathname !== '/') navigate('/')
          else window.dispatchEvent(new CustomEvent('aether:close-back'))
          break
        case 'toggle-pomodoro':
          window.dispatchEvent(new CustomEvent('aether:toggle-pomodoro'))
          break
        case 'next-lesson':
        case 'prev-lesson':
          if (sidebarOwnsFocus()) {
            window.dispatchEvent(
              new CustomEvent(
                id === 'next-lesson' ? 'aether:sidebar-next' : 'aether:sidebar-prev'
              )
            )
          } else {
            window.dispatchEvent(new CustomEvent(`aether:action:${id}`))
          }
          break
        case 'bookmark': {
          // Hovered card wins: on a list of topics, "B" should act on the one
          // under the cursor, not on the page you happen to be standing in. The
          // DOM already knows what is hovered, so no mouse tracking is needed.
          const hovered = document.querySelector('[data-bookmark-slug]:hover')
          if (hovered?.dataset.bookmarkSlug) {
            toggleBookmark(hovered.dataset.bookmarkSlug)
            break
          }
          // Nothing hovered: the topic page toggles itself.
          window.dispatchEvent(new CustomEvent('aether:action:bookmark'))
          break
        }
        default:
          window.dispatchEvent(new CustomEvent(`aether:action:${id}`))
      }
    }

    const onKey = e => {
      const s = settingsRef.current
      // Stand down entirely while a rebind capture is focused.
      const ae = document.activeElement
      if (ae && ae.dataset && ae.dataset.keybindCapture === '1') return
      const editable = isEditableTarget(e.target)

      // Build candidate list once per keystroke based on current seqIndex.
      const st = stateRef.current
      const overrides = s.keybinds || {}

      const pool =
        st.seqIndex === 0
          ? KEYBIND_ACTIONS.map(a => ({
              action: a,
              combo: parseCombo(effectiveCombo(a.id, overrides))
            }))
          : st.candidates

      let firedId = null
      const nextCandidates = []

      for (const c of pool) {
        // Hard guards by scope/state.
        const isGlobal = c.action.global
        // Always allow open-settings even when shortcuts are off, so the user
        // can re-enable them.
        if (!s.keyboardShortcuts && c.action.id !== 'open-settings') continue
        if (editable && !isGlobal) continue

        const result = matchEvent(c.combo, e, st.seqIndex)
        if (result === 'fire') {
          firedId = c.action.id
          break
        } else if (result === 'partial') {
          nextCandidates.push(c)
        }
      }

      if (firedId) {
        e.preventDefault()
        resetSeq()
        runAction(firedId)
        return
      }

      if (nextCandidates.length > 0) {
        e.preventDefault()
        st.candidates = nextCandidates
        st.seqIndex += 1
        if (st.timer) clearTimeout(st.timer)
        st.timer = setTimeout(resetSeq, SEQ_TIMEOUT_MS)
        return
      }

      // Miss: if we were mid-sequence, drop it.
      if (st.seqIndex > 0) resetSeq()
    }

    // Bare-modifier binds (combo === "Control") fire on release, as a tap: while
    // the key is down, "Ctrl" and "Ctrl+C" are indistinguishable. Any action may
    // be bound to one, so resolve it from the keybind table rather than
    // hardcoding a single action.
    const TAP_MS = 500 // a hold is not a tap; releasing after this does nothing
    let tapKey = null // the modifier currently held alone, if any
    let tapAt = 0

    const onKeyDown = e => {
      if (MODIFIER_EVENT_KEYS[e.key]) {
        if (e.repeat) return
        // A second modifier means neither is alone any more.
        tapKey = tapKey === null ? e.key : false
        tapAt = Date.now()
        return
      }
      tapKey = false // a real key arrived: this is a chord, not a tap
      onKey(e)
    }

    const onKeyUp = e => {
      const mod = MODIFIER_EVENT_KEYS[e.key]
      if (!mod) return
      const tapped = tapKey === e.key && Date.now() - tapAt < TAP_MS
      tapKey = null
      if (!tapped || isEditableTarget(e.target)) return

      const s = settingsRef.current
      const overrides = s.keybinds || {}
      for (const a of KEYBIND_ACTIONS) {
        if (!s.keyboardShortcuts && a.id !== 'open-settings') continue
        if (bareModifier(effectiveCombo(a.id, overrides)) === mod) {
          runAction(a.id)
          break
        }
      }
    }

    // A chord can steal the keyup (alt-tabbing mid-Ctrl+C), leaving the tap
    // armed; the next stray release would then fire the action uninvited.
    const disarm = () => {
      tapKey = null
    }
    window.addEventListener('blur', disarm)

    const st = stateRef.current
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', disarm)
      if (st.timer) clearTimeout(st.timer)
    }
  }, [])

  return null
}
