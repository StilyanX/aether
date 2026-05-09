import { useState, useCallback } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, F, gcd, InstructionText, MeasurementBracket, DashedConnector } from './shared'

const DEFAULT_DENOMS = new Set([1, 2, 3, 4, 6])
const ALL_DENOMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const PAD_X = 50, PAD_Y = 24, ROW_H = 34, GAP = 6, BAR_W = 540

export default function FractionStrips({ toolName, onBack }) {
  const C = useVizColors()
  const [visibleDenoms, setVisibleDenoms] = useState(DEFAULT_DENOMS)
  const [highlighted, setHighlighted] = useState({})

  const toggleDenom = d => {
    setVisibleDenoms(prev => {
      const next = new Set(prev)
      next.has(d) ? next.delete(d) : next.add(d)
      return next
    })
  }

  const toggleSegment = useCallback((denom, idx) => {
    setHighlighted(prev => {
      const next = { ...prev }
      const set = new Set(next[denom] || [])
      set.has(idx) ? set.delete(idx) : set.add(idx)
      next[denom] = set
      return next
    })
  }, [])

  const handleReset = () => {
    setVisibleDenoms(DEFAULT_DENOMS)
    setHighlighted({})
  }

  const visible = ALL_DENOMS.filter(d => visibleDenoms.has(d))
  const svgH = PAD_Y * 2 + visible.length * (ROW_H + GAP) + 60

  // Find equivalences
  const highlightedFractions = []
  for (const [d, set] of Object.entries(highlighted)) {
    if (set.size > 0) highlightedFractions.push({ denom: +d, count: set.size })
  }
  const equivalences = []
  for (let i = 0; i < highlightedFractions.length; i++) {
    for (let j = i + 1; j < highlightedFractions.length; j++) {
      const a = highlightedFractions[i], b = highlightedFractions[j]
      if (a.count * b.denom === b.count * a.denom) {
        const ga = gcd(a.count, a.denom)
        equivalences.push(`${a.count}/${a.denom} = ${b.count}/${b.denom} = ${a.count / ga}/${a.denom / ga}`)
      }
    }
  }

  // Find selected segment edges for alignment guides
  const selectedEdges = []
  for (const [d, set] of Object.entries(highlighted)) {
    if (!set || set.size === 0) continue
    const denom = +d
    const segW = BAR_W / denom
    const rowIdx = visible.indexOf(denom)
    if (rowIdx === -1) continue
    const y = PAD_Y + rowIdx * (ROW_H + GAP)
    for (const idx of set) {
      selectedEdges.push({ x: PAD_X + (idx + 1) * segW, y1: y, y2: y + ROW_H })
    }
  }

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Denom toggles */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {ALL_DENOMS.map(d => {
            const active = visibleDenoms.has(d)
            return (
              <button key={d} onClick={() => toggleDenom(d)} aria-label={`Toggle 1/${d} strip`}
                style={{
                  ...F, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase',
                  padding: '6px 10px', minHeight: 44, minWidth: 44, cursor: 'pointer',
                  background: active ? C.fg : 'transparent',
                  color: active ? '#000' : C.dim,
                  border: `1px solid ${active ? C.fg : C.dim}`
                }}>
                1/{d}
              </button>
            )
          })}
        </div>

        <div className="lrn-graph">
          <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
            {visible.map((denom, rowIdx) => {
              const y = PAD_Y + rowIdx * (ROW_H + GAP)
              const segW = BAR_W / denom
              const selSet = highlighted[denom] || new Set()

              return (
                <g key={denom}>
                  <text x={PAD_X - 8} y={y + ROW_H / 2 + 4} textAnchor="end"
                    fill={C.dim} fontSize={12} {...F}>
                    1/{denom}
                  </text>
                  {Array.from({ length: denom }, (_, i) => {
                    const sx = PAD_X + i * segW
                    const sel = selSet.has ? selSet.has(i) : false
                    const showLabel = segW >= 40

                    return (
                      <g key={i} onClick={() => toggleSegment(denom, i)} style={{ cursor: 'pointer' }}>
                        {/* Layer 1: alternating fills for unselected */}
                        <rect x={sx} y={y} width={segW} height={ROW_H}
                          fill={sel ? C.accent : C.fg}
                          fillOpacity={sel ? 0.25 : (i % 2 === 0 ? 0.04 : 0.08)} />
                        {/* Layer 2: structure border */}
                        <rect x={sx} y={y} width={segW} height={ROW_H}
                          fill="none" stroke={C.dim} strokeWidth={1} />
                        {/* Label only when segment wide enough */}
                        {showLabel && (
                          <text x={sx + segW / 2} y={y + ROW_H / 2 + 4} textAnchor="middle"
                            fill={sel ? C.fg : C.faint} fontSize={denom <= 4 ? 12 : 10} {...F}>
                            1/{denom}
                          </text>
                        )}
                      </g>
                    )
                  })}
                </g>
              )
            })}

            {/* Layer 4: DashedConnector vertical alignment guides between equivalent selected segments */}
            {selectedEdges.length >= 2 && (() => {
              // Group edges by x position (within 2px tolerance)
              const xGroups = {}
              for (const edge of selectedEdges) {
                const key = Math.round(edge.x)
                if (!xGroups[key]) xGroups[key] = []
                xGroups[key].push(edge)
              }
              return Object.values(xGroups)
                .filter(group => group.length >= 2)
                .map((group, gi) => {
                  const minY = Math.min(...group.map(g => g.y1))
                  const maxY = Math.max(...group.map(g => g.y2))
                  return (
                    <DashedConnector key={`align-${gi}`}
                      x1={group[0].x} y1={minY}
                      x2={group[0].x} y2={maxY} C={C} />
                  )
                })
            })()}

            {/* Layer 4: MeasurementBracket below selected segments */}
            {highlightedFractions.map(hf => {
              const rowIdx = visible.indexOf(hf.denom)
              if (rowIdx === -1) return null
              const segW = BAR_W / hf.denom
              const y = PAD_Y + rowIdx * (ROW_H + GAP) + ROW_H + 2
              const selSet = highlighted[hf.denom]
              if (!selSet || selSet.size === 0) return null
              const indices = [...selSet].sort((a, b) => a - b)
              const minIdx = indices[0]
              const maxIdx = indices[indices.length - 1]
              return (
                <MeasurementBracket key={`mb-${hf.denom}`}
                  x1={PAD_X + minIdx * segW}
                  x2={PAD_X + (maxIdx + 1) * segW}
                  y={y}
                  label={`${hf.count}/${hf.denom}`}
                  C={C} direction="below" tickH={4} />
              )
            })}

            {/* Layer 6: equivalence display, larger and bolder */}
            {equivalences.length > 0 && (
              <text x={310} y={svgH - 12} textAnchor="middle"
                fill={C.accent} fontSize={18} {...F} fontWeight="bold"
                style={{ textTransform: 'uppercase' }}>
                {equivalences[0]}
              </text>
            )}
          </svg>
        </div>

        {/* Layer 5 */}
        <InstructionText C={C}>CLICK SEGMENTS TO HIGHLIGHT AND COMPARE</InstructionText>
      </div>
    </ToolShell>
  )
}
