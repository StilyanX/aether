import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSettings, set } from './use-settings'
import { KEYBIND_ACTIONS, parseCombo, matchEvent, effectiveCombo } from '../lib/keybinds'

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
        case 'focus-mode':
          set('focusMode', !s.focusMode)
          break
        case 'close-back':
          if (location.pathname !== '/') navigate('/')
          else window.dispatchEvent(new CustomEvent('aether:close-back'))
          break
        case 'toggle-pomodoro':
          window.dispatchEvent(new CustomEvent('aether:toggle-pomodoro'))
          break
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

    let ctrlAlone = false

    const onKeyDown = e => {
      if (e.key === 'Control') {
        ctrlAlone = true
        return
      }
      ctrlAlone = false
      onKey(e)
    }

    const onKeyUp = e => {
      if (e.key !== 'Control' || !ctrlAlone) {
        ctrlAlone = false
        return
      }
      ctrlAlone = false
      runAction('open-settings')
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      const st = stateRef.current
      if (st.timer) clearTimeout(st.timer)
    }
  }, [])

  return null
}
