// /visualizations-showcase — one HTML page rendering EVERY classical-mechanics viz.
//
// SYNC MODEL: this gallery imports the live viz modules and renders them. There are
// no copies here. Edit a viz in its source file (classical-mechanics.jsx for the
// catalog, or the topic content file for an inline viz) and it updates BOTH this
// showcase and the app, because both render the same function.
//
// Sources:
//   1. Catalog  — every export of src/components/viz/classical-mechanics.jsx (~244).
//                 Iterated dynamically, so new exports appear here automatically.
//                 Grouped by part via cm-parts-manifest.js (run gen-cm-parts-manifest.mjs to regen).
//   2. Inline   — the topic-page viz listed in inline-manifest.js (47), imported as
//                 namespaces from their 4 Part-I content files.

import { useState } from 'react'
import { VizFigure } from '../components/viz-figure'
import ErrorBoundary from '../components/layout/error-boundary'
import { INLINE_VIZ } from './inline-manifest'
import { CM_PARTS } from './cm-parts-manifest'

import * as cm from '../components/viz/classical-mechanics'
import * as catalog from '../components/viz'
import * as vkg from '../features/explore/physics/classical-mechanics/part-i-newtonian-mechanics/vectors-kinematics-and-galilean-structure'
import * as nli from '../features/explore/physics/classical-mechanics/part-i-newtonian-mechanics/newtons-laws-and-integration'
import * as amr from '../features/explore/physics/classical-mechanics/part-i-newtonian-mechanics/angular-momentum-and-rotation'
import * as msp from '../features/explore/physics/classical-mechanics/part-i-newtonian-mechanics/momentum-and-systems-of-particles'
import { FONT_BODY, FONT_LABEL, FONT_TEX, FONT_VALUE_LG } from '../components/viz/scale-tokens'

const INLINE_NS = { vkg, nli, amr, msp }

// Topic page slug for each inline-viz source file. Inline viz live on exactly one
// classical-mechanics topic page, so the slug is known directly (no lookup needed).
const INLINE_SLUGS = {
  vkg: 'explore/physics/classical-mechanics/vectors-kinematics-and-galilean-structure',
  nli: 'explore/physics/classical-mechanics/newtons-laws-and-integration',
  amr: 'explore/physics/classical-mechanics/angular-momentum-and-rotation',
  msp: 'explore/physics/classical-mechanics/momentum-and-systems-of-particles'
}

// Open the running platform page (new tab) that renders this viz.
function openSlug(slug, setStatus) {
  if (!slug) return setStatus?.('No topic page renders this viz.')
  window.open(`/aether/${slug}`, '_blank', 'noopener')
}

// Catalog viz have no fixed home — different topic pages import them. Ask the
// dev-only middleware which classical-mechanics topic page imports this name.
async function openCatalog(name, setStatus) {
  setStatus?.(`Locating "${name}"…`)
  try {
    const r = await fetch(`/aether/__viz-locate?name=${encodeURIComponent(name)}`)
    const d = await r.json()
    if (d.slug) {
      setStatus?.('')
      window.open(`/aether/${d.slug}`, '_blank', 'noopener')
    } else {
      setStatus?.(`"${name}" is not used on any classical-mechanics topic page.`)
    }
  } catch {
    setStatus?.('Locate failed (dev server only).')
  }
}

// Catalog viz: every classical-mechanics function cross-checked against the catalog
// barrel (which carries the VizFigure wrapper). Keyed by name for fast lookup.
const CATALOG_MAP = Object.fromEntries(
  Object.keys(cm)
    .filter(name => typeof cm[name] === 'function')
    .filter(name => typeof catalog[name] === 'function')
    .map(name => [name, catalog[name]])
)

// Renders the viz inside the REAL VizFigure (same frame/sizing as the topic page),
// with a thin "view in platform" row above the frame so it never overlaps
// VizFigure's own id/title and fullscreen control.
// framed={false} renders children directly (used for catalog viz, which are already
// index-wrapped VizFigures carrying their own code/title/frame — wrapping them again
// would double-frame). framed={true} (default, used by inline viz) wraps in VizFigure.
function VizSlot({ id, title, size = 'body', aspect = 'auto', framed = true, onOpen, children }) {
  return (
    <div style={{ minWidth: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
        <button
          type="button"
          onClick={onOpen}
          style={{
            padding: '5px 10px',
            minHeight: 0,
            border: '1px solid rgba(240, 240, 250, 0.3)',
            background: '#000',
            color: 'rgba(240, 240, 250, 1)',
            fontFamily: 'inherit',
            fontSize: FONT_LABEL,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}
        >
          View in platform ↗
        </button>
      </div>
      <ErrorBoundary level="widget" aspectRatio="16 / 9">
        {framed ? (
          <VizFigure title={title} size={size} aspect={aspect}>
            {children}
          </VizFigure>
        ) : (
          children
        )}
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(720px, 1fr))',
          gap: 40
        }}
      >
        {children}
      </div>
    </section>
  )
}

export default function VisualizationsShowcase() {
  const [status, setStatus] = useState('')
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
          Classical Mechanics · Visualizations Showcase
        </h1>
        <p style={{ opacity: 0.55, maxWidth: 760, lineHeight: '26px', marginTop: 16 }}>
          Every classical-mechanics visualization on one page. These render the live source modules.
          Edit a viz in its source file and it changes here and in the app together. "View in
          platform" opens the topic page that uses it.
        </p>
        <div
          style={{
            minHeight: 20,
            marginTop: 14,
            fontSize: FONT_TEX,
            letterSpacing: '0.04em',
            opacity: status ? 0.8 : 0
          }}
        >
          {status}
        </div>
      </header>

      {[1, 2, 3, 4, 5, 6].map(part => {
        const partInfo = CM_PARTS[part]
        const inlineEntries = INLINE_VIZ.filter(e => e.part === part)
        const catalogNames = (partInfo?.viz ?? []).filter(name => CATALOG_MAP[name])
        const total = inlineEntries.length + catalogNames.length
        if (total === 0) return null
        return (
          <Section key={part} heading={partInfo.label} count={total}>
            {inlineEntries.map(({ id, title, file, comp, size, aspect }) => {
              const Comp = INLINE_NS[file]?.[comp]
              return (
                <VizSlot
                  key={id + comp}
                  id={id}
                  title={title}
                  size={size}
                  aspect={aspect}
                  onOpen={() => openSlug(INLINE_SLUGS[file], setStatus)}
                >
                  {Comp ? <Comp /> : <em style={{ opacity: 0.5 }}>missing export: {comp}</em>}
                </VizSlot>
              )
            })}
            {catalogNames.map(name => {
              const Comp = CATALOG_MAP[name]
              return (
                <VizSlot key={name} framed={false} onOpen={() => openCatalog(name, setStatus)}>
                  <Comp />
                </VizSlot>
              )
            })}
          </Section>
        )
      })}
    </main>
  )
}
