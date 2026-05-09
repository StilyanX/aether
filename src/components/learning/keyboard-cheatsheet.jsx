import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { KEYBIND_ACTIONS, effectiveCombo, comboTokens } from '../../lib/keybinds'
import './keyboard-cheatsheet.css'

export default function KeyboardCheatsheet({ open, onClose, overrides }) {
  useEffect(() => {
    if (!open) return
    const onKey = e => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose?.()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="kbcs-backdrop" onClick={onClose} role="presentation">
      <div
        className="kbcs-panel"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Keyboard shortcuts"
      >
        <header className="kbcs-head">
          <span className="kbcs-title">KEYBOARD SHORTCUTS</span>
          <button
            type="button"
            className="kbcs-close"
            onClick={onClose}
            aria-label="Close shortcuts"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </header>
        <ul className="kbcs-list">
          {KEYBIND_ACTIONS.map(action => {
            const combo = effectiveCombo(action.id, overrides)
            const tokens = comboTokens(combo)
            return (
              <li key={action.id} className="kbcs-row">
                <span className="kbcs-label">{action.label}</span>
                <span className="kbcs-keys">
                  {tokens.map((tok, i) =>
                    tok === 'then' ? (
                      <span key={i} className="kbcs-then">
                        then
                      </span>
                    ) : (
                      <kbd key={i} className="kbcs-key">
                        {tok}
                      </kbd>
                    )
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>,
    document.body
  )
}
