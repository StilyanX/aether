import { useState, useCallback, useEffect } from 'react'

/**
 * Progress persistence hook for practice cards.
 * Stores revealed cards in localStorage for session continuity.
 *
 * @param {string} topicSlug - Unique identifier for the topic
 * @returns {Object} Progress state and methods
 */
export function useProgress(topicSlug) {
  const key = `progress-${topicSlug}`

  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved
        ? JSON.parse(saved)
        : {
            revealed: [],
            ratings: {},
            viewMode: 'card',
            lastVisit: null
          }
    } catch {
      return {
        revealed: [],
        ratings: {},
        viewMode: 'card',
        lastVisit: null
      }
    }
  })

  const save = useCallback(
    data => {
      const newState = {
        ...state,
        ...data,
        lastVisit: Date.now()
      }
      setState(newState)
      try {
        localStorage.setItem(key, JSON.stringify(newState))
      } catch {
        // localStorage full or unavailable
      }
    },
    [key, state]
  )

  const saveRating = useCallback(
    (index, rating) => {
      const newState = {
        ...state,
        ratings: { ...state.ratings, [index]: rating },
        lastVisit: Date.now()
      }
      setState(newState)
      try {
        localStorage.setItem(key, JSON.stringify(newState))
      } catch {
        // localStorage unavailable
      }
    },
    [key, state]
  )

  const reset = useCallback(() => {
    setState({
      revealed: [],
      ratings: {},
      viewMode: 'card',
      lastVisit: null
    })
    try {
      localStorage.removeItem(key)
    } catch {
      // localStorage unavailable
    }
  }, [key])

  const formatLastVisit = useCallback(() => {
    if (!state.lastVisit) return null
    const diff = Date.now() - state.lastVisit
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (days > 0) return `${days}d ago`
    if (hours > 0) return `${hours}h ago`
    if (minutes > 0) return `${minutes}m ago`
    return 'just now'
  }, [state.lastVisit])

  return {
    revealed: new Set(state.revealed),
    ratings: state.ratings || {},
    viewMode: state.viewMode || 'card',
    lastVisit: state.lastVisit,
    hasProgress: state.revealed.length > 0,
    progressCount: state.revealed.length,
    formatLastVisit,
    save,
    saveRating,
    reset
  }
}
