import { useState, useCallback } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, F, InstructionText, btnStyle } from './shared'

const UNIT = 40
const GRID_COLS = 12
const GRID_ROWS = 6
const GRID_X = 40
const GRID_Y = 70
const SVG_W = GRID_X + GRID_COLS * UNIT + 40
const SVG_H = GRID_Y + GRID_ROWS * UNIT + 30

const ROD_COLORS = ['#666','#c44040','#5a9a5a','#8855aa','#d4a843','#2d8a4e','#222','#8b5e3c','#4488cc','#cc8833']

export default function CuisenaireRods({ toolName, onBack }) {
  const C = useVizColors()
  const [workspace, setWorkspace] = useState([])
  const [sel, setSel] = useState(null)
  const handleReset = () => { setWorkspace([]); setSel(null) }

  const placeRod = useCallback((row, col) => {
    if (!sel) return
    if (col + sel > GRID_COLS) return
    const overlaps = workspace.some(r =>
      r.row === row && !(col + sel <= r.col || col >= r.col + r.length)
    )
    if (overlaps) return
    setWorkspace(prev => [...prev, { length: sel, row, col }])
  }, [sel, workspace])

  const removeRod = useCallback(idx => {
    setWorkspace(prev => prev.filter((_, i) => i !== idx))
  }, [])

  // Find equations
  const equations = []
  const rowMap = {}
  workspace.forEach(r => { (rowMap[r.row] ||= []).push(r) })
  for (const rods of Object.values(rowMap)) {
    if (rods.length < 2) continue
    const sorted = [...rods].sort((a, b) => a.col - b.col)
    let start = 0
    for (let i = 1; i <= sorted.length; i++) {
      const prevEnd = sorted[i - 1].col + sorted[i - 1].length
      if (i === sorted.length || sorted[i].col !== prevEnd) {
        const seq = sorted.slice(start, i)
        if (seq.length >= 2) {
          const total = seq.reduce((s, r) => s + r.length, 0)
          equations.push(seq.map(r => r.length).join(' + ') + ' = ' + total)
        }
        start = i
      }
    }
  }

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Palette */}
        <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginBottom: 12, flexWrap: 'wrap' }}>
          {Array.from({ length: 10 }, (_, i) => {
            const len = i + 1
            const active = sel === len
            return (
              <button key={len}
                onClick={() => setSel(active ? null : len)}
                style={{
                  ...btnStyle(active, C),
                  minWidth: 44, padding: '4px 8px',
                  borderColor: active ? ROD_COLORS[i] : C.dim,
                  color: active ? ROD_COLORS[i] : C.dim,
                  background: active ? ROD_COLORS[i] + '22' : 'transparent'
                }}>
                {len}
              </button>
            )
          })}
        </div>

        {sel && (
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <span style={{ ...F, fontSize: 11, color: ROD_COLORS[sel - 1], textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              SELECTED: ROD {sel}
            </span>
          </div>
        )}

        <div className="lrn-graph">
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} width="100%" style={{ display: 'block' }}>
            {/* Grid background */}
            {Array.from({ length: GRID_ROWS }, (_, r) => (
              <rect key={`bg${r}`} x={GRID_X} y={GRID_Y + r * UNIT}
                width={GRID_COLS * UNIT} height={UNIT}
                fill={C.fg} fillOpacity={r % 2 === 0 ? 0.03 : 0.06} />
            ))}

            {/* Grid lines */}
            {Array.from({ length: GRID_ROWS + 1 }, (_, r) => (
              <line key={`h${r}`} x1={GRID_X} y1={GRID_Y + r * UNIT}
                x2={GRID_X + GRID_COLS * UNIT} y2={GRID_Y + r * UNIT}
                stroke={C.dim} strokeWidth={0.3} opacity={0.5} />
            ))}
            {Array.from({ length: GRID_COLS + 1 }, (_, c) => (
              <line key={`v${c}`} x1={GRID_X + c * UNIT} y1={GRID_Y}
                x2={GRID_X + c * UNIT} y2={GRID_Y + GRID_ROWS * UNIT}
                stroke={C.dim} strokeWidth={0.3} opacity={0.5} />
            ))}

            {/* Ruler */}
            {Array.from({ length: GRID_COLS + 1 }, (_, c) => (
              <text key={`r${c}`} x={GRID_X + c * UNIT} y={GRID_Y - 6}
                textAnchor="middle" fill={C.dim} fontSize={9} {...F}>{c}</text>
            ))}

            {/* Click targets */}
            {sel && Array.from({ length: GRID_ROWS }, (_, r) =>
              Array.from({ length: GRID_COLS }, (_, c) => (
                <rect key={`t${r}-${c}`}
                  x={GRID_X + c * UNIT} y={GRID_Y + r * UNIT}
                  width={UNIT} height={UNIT}
                  fill="transparent" style={{ cursor: 'pointer' }}
                  onClick={() => placeRod(r, c)} />
              ))
            )}

            {/* Placed rods */}
            {workspace.map((rod, idx) => {
              const rx = GRID_X + rod.col * UNIT + 1
              const ry = GRID_Y + rod.row * UNIT + 1
              const rw = rod.length * UNIT - 2
              const rh = UNIT - 2
              const color = ROD_COLORS[rod.length - 1]
              return (
                <g key={idx} onClick={e => { e.stopPropagation(); removeRod(idx) }}
                  style={{ cursor: 'pointer' }}>
                  <rect x={rx} y={ry} width={rw} height={rh}
                    fill={color} fillOpacity={0.3}
                    stroke={color} strokeWidth={1.5} />
                  <text x={rx + rw / 2} y={ry + rh / 2 + 5} textAnchor="middle"
                    fill={color} fontSize={13} {...F} fontWeight="bold"
                    style={{ pointerEvents: 'none' }}>
                    {rod.length}
                  </text>
                </g>
              )
            })}

            {/* Grid border */}
            <rect x={GRID_X} y={GRID_Y} width={GRID_COLS * UNIT} height={GRID_ROWS * UNIT}
              fill="none" stroke={C.dim} strokeWidth={1} />
          </svg>
        </div>

        {/* Equations */}
        {equations.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            {equations.map((eq, i) => (
              <div key={i} style={{ ...F, fontSize: 14, color: C.fg, fontWeight: 'bold' }}>{eq}</div>
            ))}
          </div>
        )}

        <InstructionText C={C}>
          {!sel ? 'SELECT A ROD NUMBER ABOVE' : 'CLICK GRID TO PLACE, CLICK A ROD TO REMOVE'}
        </InstructionText>
      </div>
    </ToolShell>
  )
}
