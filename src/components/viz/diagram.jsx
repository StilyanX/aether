// Generic editorial diagram. Data in, monochrome SVG out, theme-reactive.
// Sits inside its own <VizFigure>; caller passes id/title/size/aspect props.
//
// Node shape:
//   { id, width, height, labels: [{ text, bold?, dim? }, ...] }
//
// Edge shape (ELK convention):
//   { id, sources: [nodeId], targets: [nodeId], style?: 'solid' | 'dashed',
//     labels?: [{ text }] }
//
// containerTitle: optional string. When set, an outer rect is drawn around
// the entire ELK bbox with the title above it (e.g. naming the enclosing
// system: a ship hull, a building, a domain).

import { useEffect, useMemo, useState } from 'react'
import { VizFigure } from '../viz-figure'
import { useVizColors } from '../../hooks/use-viz-colors'
import { computeLayout } from '../../lib/elk'
import { FONT_TEX, STROKE_PRIMARY } from './scale-tokens'

const LABEL_LINE_HEIGHT = 18
const EDGE_LABEL_PAD = 6
const CONTAINER_HEADER_H = 50
const CONTAINER_BORDER_PAD = 12

// Return the point at half the total polyline length.
function midpointAlong(points) {
  if (points.length < 2) return { x: 0, y: 0 }
  const segs = []
  let total = 0
  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x
    const dy = points[i].y - points[i - 1].y
    const len = Math.hypot(dx, dy)
    segs.push({ from: points[i - 1], to: points[i], len })
    total += len
  }
  let target = total / 2
  for (const s of segs) {
    if (target <= s.len) {
      const t = s.len === 0 ? 0 : target / s.len
      return { x: s.from.x + (s.to.x - s.from.x) * t, y: s.from.y + (s.to.y - s.from.y) * t }
    }
    target -= s.len
  }
  return points[points.length - 1]
}

export function Diagram({
  id,
  title,
  size = 'body',
  aspect = '16/9',
  nodes,
  edges,
  layoutOptions,
  containerTitle
}) {
  const C = useVizColors()
  const [layout, setLayout] = useState(null)

  const elkInput = useMemo(() => {
    // Strip labels from ELK input. Node labels are rendered inside the box
    // by us; edge labels are rendered at polyline midpoints by us. ELK
    // chokes on labels missing width/height and we don't need its label
    // placement.
    const elkNodes = nodes.map(n => ({
      id: n.id,
      width: n.width,
      height: n.height,
      ...(n.x != null && { x: n.x }),
      ...(n.y != null && { y: n.y })
    }))
    const elkEdges = edges.map(e => ({
      id: e.id,
      sources: e.sources,
      targets: e.targets,
      ...(e.layoutOptions && { layoutOptions: e.layoutOptions })
    }))
    return { nodes: elkNodes, edges: elkEdges }
  }, [nodes, edges])

  useEffect(() => {
    let cancelled = false
    computeLayout(elkInput, { layoutOptions }).then(out => {
      if (!cancelled) setLayout(out)
    })
    return () => {
      cancelled = true
    }
  }, [elkInput, layoutOptions])

  const styleByNodeId = useMemo(() => {
    const m = new Map()
    nodes.forEach(n => m.set(n.id, n))
    return m
  }, [nodes])

  const styleByEdgeId = useMemo(() => {
    const m = new Map()
    edges.forEach(e => m.set(e.id, e))
    return m
  }, [edges])

  return (
    <VizFigure title={title} size={size} aspect={aspect}>
      {layout && (
        <DiagramSvg
          layout={layout}
          C={C}
          styleByNodeId={styleByNodeId}
          styleByEdgeId={styleByEdgeId}
          containerTitle={containerTitle}
        />
      )}
    </VizFigure>
  )
}

function DiagramSvg({ layout, C, styleByNodeId, styleByEdgeId, containerTitle }) {
  const innerW = layout.width || 800
  const innerH = layout.height || 450
  const halo = { stroke: 'var(--bg-elevated)', strokeWidth: 4, paintOrder: 'stroke' }
  const headerH = containerTitle ? CONTAINER_HEADER_H : 0
  const borderPad = containerTitle ? CONTAINER_BORDER_PAD : 0
  const W = innerW + borderPad * 2
  const H = innerH + headerH + borderPad

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: '100%',
        height: '100%',
        fontFamily: 'var(--reader-font-family)'
      }}
    >
      {containerTitle && (
        <>
          <text
            x={W / 2}
            y={headerH - 22}
            textAnchor="middle"
            fill={C.dim}
            fontSize={FONT_TEX}
            letterSpacing="2"
          >
            {containerTitle.toUpperCase()}
          </text>
          <rect
            x={0.5}
            y={headerH}
            width={W - 1}
            height={H - headerH - 0.5}
            fill="none"
            stroke={C.accent}
            strokeWidth={STROKE_PRIMARY}
          />
        </>
      )}
      <g transform={`translate(${borderPad}, ${headerH})`}>
        {(layout.edges || []).map(edge => {
          const meta = styleByEdgeId.get(edge.id) || {}
          const dashed = meta.style === 'dashed'
          const section = edge.sections?.[0]
          if (!section) return null
          const points = [section.startPoint, ...(section.bendPoints || []), section.endPoint]
          const pts = points.map(p => `${p.x},${p.y}`).join(' ')
          const labelPos = midpointAlong(points)
          return (
            <g key={edge.id}>
              <polyline
                points={pts}
                fill="none"
                stroke={C.dim}
                strokeWidth={STROKE_PRIMARY}
                strokeDasharray={dashed ? '5,4' : undefined}
              />
              {(meta.labels || []).map((l, i) => (
                <text
                  key={i}
                  x={labelPos.x}
                  y={labelPos.y - EDGE_LABEL_PAD - i * 14}
                  textAnchor="middle"
                  fill={C.dim}
                  fontSize={FONT_TEX}
                  style={halo}
                >
                  {l.text}
                </text>
              ))}
            </g>
          )
        })}

        {(layout.children || []).map(node => {
          const meta = styleByNodeId.get(node.id) || {}
          const labels = meta.labels || []
          const cx = node.x + node.width / 2
          const totalH = labels.length * LABEL_LINE_HEIGHT
          const startY = node.y + (node.height - totalH) / 2 + LABEL_LINE_HEIGHT - 4
          return (
            <g key={node.id}>
              <rect
                x={node.x}
                y={node.y}
                width={node.width}
                height={node.height}
                fill={C.faint}
                stroke={C.accent}
                strokeWidth={STROKE_PRIMARY}
              />
              {labels.map((l, i) => (
                <text
                  key={i}
                  x={cx}
                  y={startY + i * LABEL_LINE_HEIGHT}
                  textAnchor="middle"
                  fill={l.dim ? C.dim : C.fg}
                  fontSize={l.bold ? 14 : 13}
                  fontWeight={l.bold ? 'bold' : 'normal'}
                >
                  {l.text}
                </text>
              ))}
            </g>
          )
        })}
      </g>
    </svg>
  )
}
