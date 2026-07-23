import React, { useEffect, useRef, useState } from 'react'
import { MultiDirectedGraph } from 'graphology'
import Sigma from 'sigma'
import { useVizColorsThree, text, textSoft, stroke, bg, F } from '../../../theme'
import {
  FONT_FAMILY,
  FONT_LABEL,
  FONT_SMALL,
  LS_LABEL,
  STROKE_EMPHASIS,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from '../../../scale-tokens'

// Three generation columns: the founding alliance, Augustus's children and
// their spouses, the candidates the succession actually ran through.
const GEN_X = [70, 380, 690]

const NODES = [
  { id: 'agrippa', label: 'Marcus Agrippa', x: GEN_X[0], y: 20, size: 10 },
  { id: 'augustus', label: 'Augustus', x: GEN_X[0], y: 145, size: 14 },
  { id: 'livia', label: 'Livia', x: GEN_X[0], y: 270, size: 11 },
  { id: 'julia-elder', label: 'Julia the Elder', x: GEN_X[1], y: 10, size: 9 },
  { id: 'vipsania', label: 'Vipsania Agrippina', x: GEN_X[1], y: 80, size: 8 },
  { id: 'tiberius', label: 'Tiberius', x: GEN_X[1], y: 150, size: 12 },
  { id: 'drusus-elder', label: 'Drusus the Elder', x: GEN_X[1], y: 220, size: 9 },
  { id: 'antonia-minor', label: 'Antonia Minor', x: GEN_X[1], y: 290, size: 8 },
  { id: 'gaius', label: 'Gaius Caesar', x: GEN_X[2], y: 0, size: 8 },
  { id: 'lucius', label: 'Lucius Caesar', x: GEN_X[2], y: 45, size: 8 },
  { id: 'agrippina-elder', label: 'Agrippina the Elder', x: GEN_X[2], y: 90, size: 8 },
  { id: 'agrippa-postumus', label: 'Agrippa Postumus', x: GEN_X[2], y: 135, size: 8 },
  { id: 'julia-minor', label: 'Julia Minor', x: GEN_X[2], y: 180, size: 8 },
  { id: 'germanicus', label: 'Germanicus', x: GEN_X[2], y: 230, size: 9 },
  { id: 'claudius', label: 'Claudius', x: GEN_X[2], y: 280, size: 9 }
]

// [source, target, kind, note] - kind drives both the geometry (marriage
// stays inside a generation column; blood/adoption always cross one) and the
// hover text. Facts drawn from the module's own prose; two corrections against
// it are marked below.
const EDGES = [
  ['augustus', 'livia', 'marriage', 'Married 38 BC.'],
  [
    'augustus',
    'livia',
    'adoption',
    "Adopted into the gens Julia by Augustus's will; became Julia Augusta, AD 14."
  ],
  ['agrippa', 'julia-elder', 'marriage', "Married 21 BC, Julia's second husband, after Marcellus."],
  ['augustus', 'julia-elder', 'blood', 'Daughter, by Scribonia.'],
  ['livia', 'tiberius', 'blood', 'Son, by her first husband Tiberius Claudius Nero.'],
  ['livia', 'drusus-elder', 'blood', 'Son, by her first husband Tiberius Claudius Nero.'],
  ['tiberius', 'vipsania', 'marriage', 'Married c. 19 BC; Augustus ordered the divorce in 11 BC.'],
  ['agrippa', 'vipsania', 'blood', 'Daughter, by Caecilia Attica.'],
  [
    'drusus-elder',
    'antonia-minor',
    'marriage',
    'Married: Antonia Minor was daughter of Antony and Octavia.'
  ],
  ['augustus', 'tiberius', 'adoption', '26 June AD 4, alongside Agrippa Postumus.'],
  ['augustus', 'agrippa-postumus', 'adoption', '26 June AD 4; revoked by disinheritance, AD 7.'],
  ['agrippa', 'agrippa-postumus', 'blood', 'Son, by Julia the Elder.'],
  ['julia-elder', 'agrippa-postumus', 'blood', 'Son.'],
  ['agrippa', 'gaius', 'blood', 'Son, by Julia the Elder.'],
  ['julia-elder', 'gaius', 'blood', 'Son.'],
  ['augustus', 'gaius', 'adoption', '17 BC, alongside Lucius.'],
  ['agrippa', 'lucius', 'blood', 'Son, by Julia the Elder.'],
  ['julia-elder', 'lucius', 'blood', 'Son.'],
  ['augustus', 'lucius', 'adoption', '17 BC, alongside Gaius.'],
  ['agrippa', 'julia-minor', 'blood', 'Daughter, by Julia the Elder.'],
  ['julia-elder', 'julia-minor', 'blood', 'Daughter; banished AD 8, husband executed.'],
  ['agrippa', 'agrippina-elder', 'blood', 'Daughter, by Julia the Elder.'],
  ['julia-elder', 'agrippina-elder', 'blood', 'Daughter.'],
  [
    'drusus-elder',
    'germanicus',
    'blood',
    'Son, by Antonia Minor. (The book\'s own text calls Germanicus "Julian through his mother Agrippina", Agrippina the Elder was his wife, not his mother; his mother was Antonia Minor.)'
  ],
  ['antonia-minor', 'germanicus', 'blood', 'Son: see correction on the Drusus the Elder edge.'],
  [
    'tiberius',
    'germanicus',
    'adoption',
    "AD 4, required as a condition of Tiberius's own adoption."
  ],
  ['germanicus', 'agrippina-elder', 'marriage', 'Married.'],
  ['drusus-elder', 'claudius', 'blood', 'Son, by Antonia Minor. Later emperor, AD 41-54.'],
  ['antonia-minor', 'claudius', 'blood', 'Son.']
]

const EDGE_STYLE = {
  blood: { sigmaType: 'line', width: STROKE_PRIMARY * 2, colorKey: 'fg', legend: 'Blood' },
  marriage: { sigmaType: 'line', width: STROKE_SECONDARY, colorKey: 'dim', legend: 'Marriage' },
  adoption: {
    sigmaType: 'arrow',
    width: STROKE_EMPHASIS,
    colorKey: 'accent',
    legend: 'Adoption (legal)'
  }
}

const tooltipStyle = {
  position: 'absolute',
  maxWidth: 260,
  padding: '8px 10px',
  background: bg,
  border: `1px solid ${stroke}`,
  color: text,
  fontFamily: F.fontFamily,
  fontSize: FONT_SMALL,
  letterSpacing: LS_LABEL,
  lineHeight: 1.4,
  pointerEvents: 'none',
  zIndex: 5
}

function Legend({ colors }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px 18px',
        padding: '8px 4px 0',
        fontFamily: F.fontFamily,
        fontSize: FONT_SMALL,
        letterSpacing: LS_LABEL,
        color: textSoft
      }}
    >
      {Object.values(EDGE_STYLE).map(s => (
        <span key={s.legend} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 18, height: 2 * s.width, background: colors[s.colorKey] }} />
          {s.legend}
        </span>
      ))}
      <span>{'Vertical edge = same generation. Diagonal edge = descent.'}</span>
    </div>
  )
}

const LABELS = Object.fromEntries(NODES.map(n => [n.id, n.label]))

// Sigma v3 is WebGL-only - it has no Canvas2D fallback and throws if the
// browser has WebGL disabled/blocked. Detected up front so the component can
// degrade to a static list instead of crashing into the page's error boundary.
function hasWebGL() {
  if (typeof document === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')
    )
  } catch {
    return false
  }
}

function RelationshipList({ colors }) {
  const groups = ['blood', 'marriage', 'adoption'].map(kind => ({
    kind,
    style: EDGE_STYLE[kind],
    edges: EDGES.filter(e => e[2] === kind)
  }))

  return (
    <div style={{ padding: '4px 4px 0', fontFamily: F.fontFamily }}>
      <div
        style={{ fontSize: FONT_SMALL, letterSpacing: LS_LABEL, color: textSoft, marginBottom: 14 }}
      >
        {'WebGL is unavailable in this browser, showing the succession network as a list.'}
      </div>
      {groups.map(({ kind, style, edges }) => (
        <div key={kind} style={{ marginBottom: 16 }}>
          <div
            style={{
              fontSize: FONT_SMALL,
              letterSpacing: LS_LABEL,
              color: colors[style.colorKey],
              fontWeight: 600,
              marginBottom: 6
            }}
          >
            {style.legend}
          </div>
          {edges.map(([source, target, , note], i) => (
            <div
              key={i}
              style={{ fontSize: FONT_SMALL, lineHeight: 1.5, color: text, marginBottom: 4 }}
            >
              <strong>{LABELS[source]}</strong>
              {' → '}
              <strong>{LABELS[target]}</strong>
              {note && (
                <span style={{ color: textSoft }}>
                  {', '}
                  {note}
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function SuccessionNetwork() {
  const containerRef = useRef(null)
  const colors = useVizColorsThree()
  const [tooltip, setTooltip] = useState(null)
  const [webglSupported] = useState(hasWebGL)
  const [renderFailed, setRenderFailed] = useState(false)

  useEffect(() => {
    if (!webglSupported) return undefined
    const container = containerRef.current
    if (!container) return undefined

    const graph = new MultiDirectedGraph()
    NODES.forEach(n => {
      graph.addNode(n.id, {
        label: n.label,
        x: n.x,
        y: n.y,
        size: n.size,
        color: colors.fg,
        type: 'circle'
      })
    })
    EDGES.forEach(([source, target, kind, note], i) => {
      const style = EDGE_STYLE[kind]
      graph.addEdgeWithKey(`e${i}`, source, target, {
        type: style.sigmaType,
        size: style.width,
        color: colors[style.colorKey],
        kind,
        note
      })
    })

    let renderer
    try {
      renderer = new Sigma(graph, container, {
        enableEdgeEvents: true,
        renderEdgeLabels: false,
        labelRenderedSizeThreshold: 0,
        labelFont: FONT_FAMILY,
        labelSize: FONT_LABEL,
        labelColor: { color: colors.fg },
        labelWeight: '500'
      })
    } catch {
      setRenderFailed(true)
      return undefined
    }

    const showNode = ({ node, event }) => {
      const attrs = graph.getNodeAttributes(node)
      setTooltip({ x: event.x, y: event.y, title: attrs.label, body: null })
    }
    const showEdge = ({ edge, event }) => {
      const attrs = graph.getEdgeAttributes(edge)
      const [source, target] = graph.extremities(edge)
      const sLabel = graph.getNodeAttribute(source, 'label')
      const tLabel = graph.getNodeAttribute(target, 'label')
      setTooltip({
        x: event.x,
        y: event.y,
        title: `${EDGE_STYLE[attrs.kind].legend}: ${sLabel} → ${tLabel}`,
        body: attrs.note
      })
    }
    const hide = () => setTooltip(null)

    renderer.on('enterNode', showNode)
    renderer.on('leaveNode', hide)
    renderer.on('enterEdge', showEdge)
    renderer.on('leaveEdge', hide)

    return () => {
      renderer.removeAllListeners()
      renderer.kill()
    }
  }, [colors, webglSupported])

  if (!webglSupported || renderFailed) {
    return (
      <div>
        <RelationshipList colors={colors} />
        <Legend colors={colors} />
      </div>
    )
  }

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: 560, background: bg }}>
        <div ref={containerRef} style={{ position: 'absolute', inset: 0 }} />
        {tooltip && (
          <div style={{ ...tooltipStyle, left: tooltip.x + 14, top: tooltip.y + 14 }}>
            <div style={{ fontWeight: 600, marginBottom: tooltip.body ? 4 : 0 }}>
              {tooltip.title}
            </div>
            {tooltip.body && <div style={{ color: textSoft }}>{tooltip.body}</div>}
          </div>
        )}
      </div>
      <Legend colors={colors} />
    </div>
  )
}
