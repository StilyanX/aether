// /chemistry-showcase — one HTML page rendering EVERY general-chemistry visualization.
//
// SYNC MODEL: this gallery imports the live viz module (src/components/viz/chemistry.jsx)
// and renders each export. There are no copies. Edit a viz in its source file and it
// updates here and in the app together, because both render the same function.
//
// Completeness: every function export of chemistry.jsx is rendered. chemistry-manifest.js
// only sets the unit grouping/order; any export missing from the manifest is collected
// into a trailing "Uncategorized" section, so nothing is ever silently dropped.
//
// ROADMAP: general chemistry is early — only Unit 04 (Kinetics) has viz today. The full
// per-topic recommendation set lives beside this file in
// general-chemistry-visualization-audit.md (18 topics, ~160 recommendations). As viz are
// built into chemistry.jsx and named in chemistry-manifest.js, their unit section here
// lights up automatically.

import { useMemo } from 'react'
import { VizFigure } from '../components/viz-figure'
import ErrorBoundary from '../components/layout/error-boundary'
import { CHEMISTRY_GROUPS } from './chemistry-manifest'
import * as chemistry from '../components/viz/chemistry'
import { FONT_BODY, FONT_VALUE_LG } from '../components/viz/scale-tokens'

// Turn a PascalCase export name into a readable title: "MaxwellBoltzmannViz" ->
// "Maxwell Boltzmann".
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

export default function ChemistryVisualizationsShowcase() {
  // All function exports of chemistry.jsx, keyed by name.
  const all = useMemo(
    () =>
      Object.fromEntries(
        Object.keys(chemistry)
          .filter(k => typeof chemistry[k] === 'function')
          .map(k => [k, chemistry[k]])
      ),
    []
  )

  // Build the grouped sections, then sweep any export not named in the manifest
  // into a trailing "Uncategorized" section so the gallery stays complete.
  const { sections, total } = useMemo(() => {
    const claimed = new Set()
    const sections = CHEMISTRY_GROUPS.map(g => {
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
          General Chemistry · Visualizations Showcase
        </h1>
        <p style={{ opacity: 0.55, maxWidth: 760, lineHeight: '26px', marginTop: 16 }}>
          Every general-chemistry visualization on one page ({total} total). These render the live
          source module <code>src/components/viz/chemistry.jsx</code>. Edit a viz in that file and
          it changes here and in the app together.
        </p>
        <p style={{ opacity: 0.55, maxWidth: 760, lineHeight: '26px', marginTop: 12 }}>
          The full per-topic recommendation roadmap (18 topics, ~160 recommendations across all 10
          units) lives beside this page in{' '}
          <code>src/visualizations-showcase/general-chemistry-visualization-audit.md</code>. Unit
          sections below light up automatically as each viz is built into <code>chemistry.jsx</code>{' '}
          and named in <code>chemistry-manifest.js</code>.
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
