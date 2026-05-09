import { useState, useCallback } from 'react'

const KEY = 'aether-notes'

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch {
    return {}
  }
}

function save(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {}
}

function uid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `n_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
}

export function useNotes(slug) {
  const scope = slug || 'global'
  const [data, setData] = useState(load)
  const notes = data[scope] || []

  const addNote = useCallback(
    (text, source) => {
      const trimmed = text.trim()
      if (!trimmed) return
      setData(prev => {
        const next = {
          ...prev,
          [scope]: [
            {
              id: uid(),
              text: trimmed,
              createdAt: new Date().toISOString(),
              source: source || null
            },
            ...(prev[scope] || [])
          ]
        }
        save(next)
        return next
      })
    },
    [scope]
  )

  const deleteNote = useCallback(
    id => {
      setData(prev => {
        const next = {
          ...prev,
          [scope]: (prev[scope] || []).filter(n => n.id !== id)
        }
        save(next)
        return next
      })
    },
    [scope]
  )

  return { notes, addNote, deleteNote }
}
