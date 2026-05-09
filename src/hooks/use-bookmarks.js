import { useState, useCallback } from 'react'

const KEY = 'aether-bookmarks'

function load() {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'))
  } catch {
    return new Set()
  }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(load)

  const toggleBookmark = useCallback(slug => {
    setBookmarks(prev => {
      const next = new Set(prev)
      next.has(slug) ? next.delete(slug) : next.add(slug)
      localStorage.setItem(KEY, JSON.stringify([...next]))
      return next
    })
  }, [])

  return { bookmarks, toggleBookmark }
}
