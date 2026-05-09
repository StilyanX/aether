import { useMemo, useSyncExternalStore } from 'react'

function getBaseColor() {
  return (
    getComputedStyle(document.documentElement).getPropertyValue('--base-color').trim() ||
    'rgb(224 224 228)'
  )
}

function subscribe(cb) {
  const handler = () => requestAnimationFrame(cb)
  window.addEventListener('aether-theme-change', handler)
  return () => window.removeEventListener('aether-theme-change', handler)
}

export function useVizColors() {
  const base = useSyncExternalStore(subscribe, getBaseColor)
  return useMemo(
    () => ({
      fg: base,
      accent: `color-mix(in srgb, ${base} 70%, transparent)`,
      dim: `color-mix(in srgb, ${base} 50%, transparent)`,
      faint: `color-mix(in srgb, ${base} 15%, transparent)`
    }),
    [base]
  )
}
