// Sidebar keyboard contract — owns roving tabindex, ↑/↓, 1–9, Enter/Space,
// Esc. j/k arrive via use-keybinds.js's central dispatcher (re-routed when
// sidebarOwnsFocus()), not via a parallel listener on the <aside>.
//
// Mod+\ is handled by category-page.jsx: it focuses the fuzzy-filter input
// (deep-dive-sidebar-130 PR E). The user then types to filter, presses
// Enter to activate the first match, or ↓ to move focus into this hook's
// roving list. Once the list owns focus, this hook drives everything.
//
// Iter 7 corrections applied:
//   C3 — single dispatcher; subscribe-only here
//   C8 — no type-ahead
//   C9 — Esc uses DOM ownership check, not a parallel hasFocus flag
//
// items: [{ ref, label, groupIndex }]  refs are React refs to the <button>
// groups: [{ firstItemIndex }]  for Iter 4 group-jump 1–9 (digit-keyspace
// cap, not a group-count claim — safely no-ops past the real group count)

import { useEffect, useRef, useState } from 'react'

export function useSidebarKeyboard(asideRef, { items, groups, onActivate, activeId }) {
  const [focusedIndex, setFocusedIndex] = useState(0)
  const indexRef = useRef(0)
  const lastExternalRef = useRef(null)
  const lastAnnouncedGroupRef = useRef(-1)

  const sidebarHasFocus = () => !!asideRef.current?.contains(document.activeElement)

  const focusIndex = i => {
    if (items.length === 0) return
    const clamped = ((i % items.length) + items.length) % items.length
    indexRef.current = clamped
    items[clamped].ref.current?.focus({ preventScroll: false })
    setFocusedIndex(clamped)
    const gi = items[clamped].groupIndex
    if (gi !== lastAnnouncedGroupRef.current) {
      lastAnnouncedGroupRef.current = gi
      const announce = document.getElementById('sidebar-group-announce')
      if (announce && gi >= 0 && groups[gi]) {
        announce.textContent = groups[gi].label
      }
    }
  }

  const exit = () => {
    if (!sidebarHasFocus()) return
    const prior = lastExternalRef.current
    if (prior && typeof prior.focus === 'function') prior.focus({ preventScroll: true })
    else document.body.focus?.()
  }

  // Track the external focus owner so Esc can restore it, AND sync indexRef
  // when focus moves into a sidebar list item from outside (e.g., ↓ from the
  // filter input or click). Without this, j/k dispatched from the central
  // dispatcher would move relative to a stale index.
  useEffect(() => {
    const onFocusIn = e => {
      const aside = asideRef.current
      if (!aside) return
      if (!aside.contains(e.target)) {
        lastExternalRef.current = e.target
        return
      }
      const id = e.target?.dataset?.sidebarItem
      if (!id) return
      const idx = items.findIndex(it => it.id === id)
      if (idx >= 0) {
        indexRef.current = idx
        setFocusedIndex(idx)
      }
    }
    document.addEventListener('focusin', onFocusIn)
    return () => document.removeEventListener('focusin', onFocusIn)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  // Seed/resync the roving position from the active route whenever the
  // sidebar itself doesn't currently hold DOM focus (initial mount, or a
  // route change that didn't originate from an arrow-key/click inside the
  // list). Once the list holds focus, arrow keys and clicks (via onFocusIn
  // above) are the sole source of truth — this effect steps aside.
  useEffect(() => {
    if (sidebarHasFocus()) return
    const idx = items.findIndex(it => it.id === activeId)
    if (idx >= 0) {
      indexRef.current = idx
      setFocusedIndex(idx)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, items])

  // j/k re-routed by central dispatcher → move roving index
  useEffect(() => {
    const onNext = () => focusIndex(indexRef.current + 1)
    const onPrev = () => focusIndex(indexRef.current - 1)
    const onEsc = () => exit()
    window.addEventListener('aether:sidebar-next', onNext)
    window.addEventListener('aether:sidebar-prev', onPrev)
    window.addEventListener('aether:sidebar-escape', onEsc)
    return () => {
      window.removeEventListener('aether:sidebar-next', onNext)
      window.removeEventListener('aether:sidebar-prev', onPrev)
      window.removeEventListener('aether:sidebar-escape', onEsc)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  // Arrows + 1-9 + Enter/Space — local to <aside>. Esc handled centrally
  // (close-back) since the global Escape binding is the right place to own it.
  useEffect(() => {
    const aside = asideRef.current
    if (!aside) return
    const onKey = e => {
      if (!sidebarHasFocus()) return
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      const k = e.key
      if (k === 'ArrowDown') {
        e.preventDefault()
        focusIndex(indexRef.current + 1)
        return
      }
      if (k === 'ArrowUp') {
        e.preventDefault()
        focusIndex(indexRef.current - 1)
        return
      }
      if (k === 'Home') {
        e.preventDefault()
        focusIndex(0)
        return
      }
      if (k === 'End' || (e.shiftKey && k === 'G')) {
        e.preventDefault()
        focusIndex(items.length - 1)
        return
      }
      if (/^[1-9]$/.test(k)) {
        const g = Number(k) - 1
        const target = groups[g]?.firstItemIndex
        if (target != null) {
          e.preventDefault()
          focusIndex(target)
        }
        return
      }
      if (k === 'Enter' || k === ' ') {
        e.preventDefault()
        onActivate?.(items[indexRef.current])
      }
    }
    aside.addEventListener('keydown', onKey)
    return () => aside.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, groups, onActivate])

  return { focusedIndex }
}
