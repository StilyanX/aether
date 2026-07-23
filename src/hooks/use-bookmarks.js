import { useCallback, useEffect, useState } from 'react'

const KEY = 'aether-bookmarks'

function load() {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'))
  } catch {
    return new Set()
  }
}

// One store, many readers. Each useBookmarks() call used to hold its own
// useState, so a toggle on a card never reached a count rendered elsewhere: the
// copies drifted and the collection could read empty while holding items.
// Readers subscribe to a single set instead (same pattern as use-settings).
let bookmarks = load()
let listeners = []

function commit(next) {
  bookmarks = next
  localStorage.setItem(KEY, JSON.stringify([...next]))
  listeners.forEach(l => l(bookmarks))
}

export function toggleBookmark(slug) {
  if (!slug) return
  const next = new Set(bookmarks)
  next.has(slug) ? next.delete(slug) : next.add(slug)
  commit(next)
}

function removeBookmark(slug) {
  if (!bookmarks.has(slug)) return
  const next = new Set(bookmarks)
  next.delete(slug)
  commit(next)
}

export function useBookmarks() {
  const [snap, setSnap] = useState(bookmarks)

  useEffect(() => {
    const listener = next => setSnap(next)
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }, [])

  const isBookmarked = useCallback(slug => snap.has(slug), [snap])

  return { bookmarks: snap, count: snap.size, isBookmarked, toggleBookmark, removeBookmark }
}
