// /algebra-showcase — one HTML page rendering EVERY algebra visualization.
//
// SYNC MODEL: this gallery imports the live viz module (src/components/viz/algebra.jsx)
// and renders each export. There are no copies. Edit a viz in its source file and it
// updates here and in the app together, because both render the same function.
//
// Completeness: every function export of algebra.jsx is rendered. algebra-manifest.js
// only sets the section grouping/order; any export missing from the manifest is
// collected into a trailing "Uncategorized" section, so nothing is ever silently
// dropped from the gallery.

import { useMemo } from 'react'
import { VizFigure } from '../components/viz-figure'
import ErrorBoundary from '../components/layout/error-boundary'
import { ALGEBRA_GROUPS } from './algebra-manifest'
import * as algebra from '../components/viz/algebra'
import { FONT_BODY, FONT_VALUE_LG } from '../components/viz/scale-tokens'

// Turn a PascalCase export name into a readable title: "SquareOfSumGeomViz" ->
// "Square Of Sum Geom".
function humanize(name) {
  return name
    .replace(/Viz$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .trim()
}

function VizSlot({ name, Comp }) {
  return (
    <div style={{ minWidth: 0 }}>
      <ErrorBoundary level="widget" aspectRatio="16 / 9">
        <VizFigure title={humanize(name)} size="body" aspect="auto">
          <Comp />
        </VizFigure>
      </ErrorBoundary>
    </div>
  )
}

function Section({ heading, count, children }) {
  return (
    <section style={{ marginBottom: 72 }}>
      <h2
        style={{
          fontSize: FONT_BODY,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(240, 240, 250, 1)',
          borderBottom: '1px solid rgba(240, 240, 250, 0.3)',
          paddingBottom: 12,
          marginBottom: 28
        }}
      >
        {heading}
        <span style={{ opacity: 0.4, marginLeft: 14, letterSpacing: '0.08em' }}>{count}</span>
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(560px, 1fr))',
          gap: 40
        }}
      >
        {children}
      </div>
    </section>
  )
}

export default function AlgebraVisualizationsShowcase() {
  // All function exports of algebra.jsx, keyed by name.
  const all = useMemo(
    () =>
      Object.fromEntries(
        Object.keys(algebra)
          .filter(k => typeof algebra[k] === 'function')
          .map(k => [k, algebra[k]])
      ),
    []
  )

  // Build the grouped sections, then sweep any export not named in the manifest
  // into a trailing "Uncategorized" section so the gallery stays complete.
  const { sections, total } = useMemo(() => {
    const claimed = new Set()
    const sections = ALGEBRA_GROUPS.map(g => {
      const names = g.names.filter(n => all[n])
      names.forEach(n => claimed.add(n))
      return { label: g.label, names }
    }).filter(s => s.names.length > 0)

    const leftover = Object.keys(all)
      .filter(n => !claimed.has(n))
      .sort()
    if (leftover.length) sections.push({ label: 'Uncategorized', names: leftover })

    const total = sections.reduce((s, sec) => s + sec.names.length, 0)
    return { sections, total }
  }, [all])

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#000',
        color: 'rgba(240, 240, 250, 1)',
        fontFamily: "'D-DIN', 'D-DIN-Regular', ui-monospace, monospace",
        padding: '64px 40px 120px'
      }}
    >
      <header style={{ marginBottom: 56 }}>
        <h1
          style={{
            fontSize: FONT_VALUE_LG,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            margin: 0
          }}
        >
          Algebra · Visualizations Showcase
        </h1>
        <p style={{ opacity: 0.55, maxWidth: 760, lineHeight: '26px', marginTop: 16 }}>
          Every algebra visualization on one page ({total} total). These render the live source
          module <code>src/components/viz/algebra.jsx</code>. Edit a viz in that file and it changes
          here and in the app together.
        </p>
      </header>

      {sections.map(sec => (
        <Section key={sec.label} heading={sec.label} count={sec.names.length}>
          {sec.names.map(name => (
            <VizSlot key={name} name={name} Comp={all[name]} />
          ))}
        </Section>
      ))}
    </main>
  )
}
