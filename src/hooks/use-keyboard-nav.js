import { useState, useCallback, useEffect } from 'react'

/**
 * Keyboard navigation hook for card grid.
 * Implements WCAG 2.2 keyboard accessibility requirements.
 *
 * @param {number} itemCount - Total number of navigable items
 * @param {React.RefObject} containerRef - Ref to the card grid container
 * @returns {Object} Navigation state and methods
 */
export function useKeyboardNav(itemCount, containerRef) {
  const [focusedIndex, setFocusedIndex] = useState(-1)

  // Navigate to a specific index
  const navigate = useCallback((newIndex) => {
    if (itemCount === 0) return

    const clamped = Math.max(0, Math.min(itemCount - 1, newIndex))
    setFocusedIndex(clamped)

    // Focus the card at this index
    const cards = containerRef.current?.querySelectorAll('.card')
    cards?.[clamped]?.focus()
  }, [itemCount, containerRef])

  // Navigate to next item
  const next = useCallback(() => {
    navigate(focusedIndex + 1)
  }, [navigate, focusedIndex])

  // Navigate to previous item
  const prev = useCallback(() => {
    navigate(focusedIndex - 1)
  }, [navigate, focusedIndex])

  // Navigate to first item
  const first = useCallback(() => {
    navigate(0)
  }, [navigate])

  // Navigate to last item
  const last = useCallback(() => {
    navigate(itemCount - 1)
  }, [navigate, itemCount])

  // Clear focus
  const clear = useCallback(() => {
    setFocusedIndex(-1)
    document.activeElement?.blur()
  }, [])

  // Global escape handler
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        clear()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [clear])

  return {
    focusedIndex,
    setFocusedIndex,
    navigate,
    next,
    prev,
    first,
    last,
    clear
  }
}
