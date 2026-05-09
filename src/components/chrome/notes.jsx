import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNotes } from '../../hooks/use-notes'
import './notes.css'

function slugFromPathname(pathname) {
  const prefix = '/explore/'
  if (pathname.startsWith(prefix)) {
    const rest = pathname.slice(prefix.length)
    return rest || null
  }
  return null
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch {
    return ''
  }
}

export default function Notes() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const textareaRef = useRef(null)
  const location = useLocation()
  const currentSlug = slugFromPathname(location.pathname)
  const { notes, addNote, deleteNote } = useNotes(null)

  useEffect(() => {
    const handler = () => setOpen(o => !o)
    window.addEventListener('aether:action:notes', handler)
    return () => window.removeEventListener('aether:action:notes', handler)
  }, [])

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('aether:close-back', handler)
    return () => window.removeEventListener('aether:close-back', handler)
  }, [])

  useEffect(() => {
    if (open) setTimeout(() => textareaRef.current?.focus(), 0)
  }, [open])

  if (!open) return null

  function handleSubmit() {
    if (!draft.trim()) return
    addNote(draft, currentSlug)
    setDraft('')
    textareaRef.current?.focus()
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="notes-panel" role="dialog" aria-label="Notes">
      <div className="notes-header">
        <span className="notes-title">Notes</span>
        <button
          type="button"
          className="notes-close"
          onClick={() => setOpen(false)}
          aria-label="Close notes"
        >
          ×
        </button>
      </div>
      <div className="notes-compose">
        <textarea
          ref={textareaRef}
          className="notes-textarea"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a note… (Ctrl+Enter to submit)"
          aria-label="New note"
        />
        <button
          type="button"
          className="notes-add-btn"
          onClick={handleSubmit}
          disabled={!draft.trim()}
        >
          Add Note
        </button>
      </div>
      <div className="notes-list" role="list">
        {notes.length === 0 ? (
          <p className="notes-empty">No notes yet</p>
        ) : (
          notes.map(note => (
            <div key={note.id} className="notes-item" role="listitem">
              <p className="notes-item-text">{note.text}</p>
              <div className="notes-item-meta">
                <span className="notes-item-source">{note.source || 'global'}</span>
                <span className="notes-item-date">{formatDate(note.createdAt)}</span>
                <button
                  type="button"
                  className="notes-item-delete"
                  onClick={() => deleteNote(note.id)}
                  aria-label="Delete note"
                >
                  ×
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
