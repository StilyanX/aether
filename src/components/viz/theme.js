// Aether unified viz theme: single source of truth for every
// visualization's design tokens (math/physics primitives AND book art).
//
// Two parallel color systems live here intentionally:
//
//   1. FG + OPACITY: used by Canvas/Plot primitives where elements inherit
//      `currentColor` and stack opacity to build hierarchy (math/physics).
//
//   2. Named RGBA tokens (stroke / text / fill / ...): used by raw-SVG book
//      book art with `<figure>` wrappers and grid backgrounds.
//
// They're complementary, not duplicates. Both render against pure #000.

import { useMemo, useSyncExternalStore } from 'react'

// System 1: Canvas/Plot primitives
export const FG = 'currentColor'
export const OPACITY = { fg: 1.0, accent: 0.7, dim: 0.5, faint: 0.15, hair: 0.1 }

// System 2: Raw-SVG named tokens (book art)
export const stroke = 'rgba(240,240,250,0.85)'
export const strokeSoft = 'rgba(240,240,250,0.35)'
export const strokeFaint = 'rgba(240,240,250,0.18)'
export const strokeHair = 'rgba(240,240,250,0.15)'
export const gridLine = 'rgba(240,240,250,0.03)'

export const text = 'rgba(240,240,250,0.92)'
export const textSoft = 'rgba(240,240,250,0.6)'
export const textFaint = 'rgba(240,240,250,0.5)'
export const textGhost = 'rgba(240,240,250,0.35)'

export const fill = 'rgba(240,240,250,0.06)'
export const fillSoft = 'rgba(240,240,250,0.04)'
export const fillMid = 'rgba(240,240,250,0.10)'

export const bg = '#000'

// Shared figure / SVG element styling
export const figureStyle = {
  background: bg,
  border: '1px solid rgba(240,240,250,0.15)',
  padding: '20px',
  margin: '25px 0'
}

export const svgStyle = {
  display: 'block',
  width: '100%',
  height: 'auto',
  fontFamily: 'D-DIN, system-ui, sans-serif'
}

// Tool font constant
export const F = { fontFamily: 'var(--reader-font-family)' }

// Dynamic theme-responsive colors (interactive tools)
// Reads `--base-color` from the document root and rebuilds palette when the
// app fires `aether-theme-change`. Used by arithmetic tools and any
// feature that needs colors which flip with light/dark theme.

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

// THREE.js cannot parse color-mix() (THREE.Color warns "Unknown color" and
// keeps its previous value, collapsing the fg/accent/dim/faint hierarchy to a
// single white). R3F scenes render on pure #000 and these tints are grayscale
// alphas, so alpha-over-black is exactly premultiplication: channel × pct.
// Use this hook for any color handed to a THREE material, drei Line, or Text.
function mixOverBlack(base, pct) {
  const nums = String(base).match(/\d+(\.\d+)?/g)
  if (!nums || nums.length < 3) return base
  const [r, g, b] = nums.map(Number)
  return `rgb(${Math.round(r * pct)},${Math.round(g * pct)},${Math.round(b * pct)})`
}

export function useVizColorsThree() {
  const base = useSyncExternalStore(subscribe, getBaseColor)
  return useMemo(() => {
    return {
      fg: base,
      accent: mixOverBlack(base, OPACITY.accent),
      dim: mixOverBlack(base, OPACITY.dim),
      faint: mixOverBlack(base, OPACITY.faint)
    }
  }, [base])
}

export function useVizColors() {
  const base = useSyncExternalStore(subscribe, getBaseColor)
  return useMemo(() => {
    return {
      fg: base,
      accent: `color-mix(in srgb, ${base} 70%, transparent)`,
      dim: `color-mix(in srgb, ${base} 50%, transparent)`,
      faint: `color-mix(in srgb, ${base} 15%, transparent)`
    }
  }, [base])
}
