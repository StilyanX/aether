import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, btnStyle, F, InstructionText } from './shared'

const INIT = { units: 7, rods: 3, flats: 2 }

export default function BaseTenBlocks({ toolName, onBack }) {
  const C = useVizColors()
  const [s, setS] = useState(INIT)
  const handleReset = () => setS(INIT)

  const total = s.flats * 100 + s.rods * 10 + s.units

  // Auto-regroup: carry all 10+ groups up
  const regroup = () => {
    let u = s.units, r = s.rods, f = s.flats
    const carry = Math.floor(u / 10)
    u = u % 10; r += carry
    const carry2 = Math.floor(r / 10)
    r = r % 10; f += carry2
    setS({ units: u, rods: r, flats: f })
  }

  // Break apart: break one flat into 10 rods, or one rod into 10 units
  const breakApart = () => {
    if (s.flats > 0) setS(p => ({ ...p, flats: p.flats - 1, rods: p.rods + 10 }))
    else if (s.rods > 0) setS(p => ({ ...p, rods: p.rods - 1, units: p.units + 10 }))
  }

  const canRegroup = s.units >= 10 || s.rods >= 10
  const canBreak = s.flats > 0 || s.rods > 0

  // Layout
  const colW = 180, padX = 40, colGap = 10
  const blockY = 50
  const col1X = padX, col2X = padX + colW + colGap, col3X = padX + 2 * (colW + colGap)

  const flatRows = Math.ceil(Math.min(s.flats, 12) / 2)
  const rodRows = Math.ceil(Math.min(s.rods, 20) / 5)
  const unitRows = Math.ceil(Math.min(s.units, 30) / 5)
  const maxH = Math.max(flatRows * 62, rodRows * 62, unitRows * 14, 80)
  const svgH = blockY + maxH + 50

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Sliders */}
        <SliderControl label="HUNDREDS" value={s.flats} onChange={v => setS(p => ({ ...p, flats: v }))} min={0} max={12} C={C} />
        <SliderControl label="TENS" value={s.rods} onChange={v => setS(p => ({ ...p, rods: v }))} min={0} max={20} C={C} />
        <SliderControl label="ONES" value={s.units} onChange={v => setS(p => ({ ...p, units: v }))} min={0} max={30} C={C} />

        {/* Regroup buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '12px 0' }}>
          <button
            style={{ ...btnStyle(false, C), opacity: canRegroup ? 1 : 0.3, borderColor: canRegroup ? C.accent : undefined }}
            disabled={!canRegroup} onClick={regroup}>
            REGROUP
          </button>
          <button
            style={{ ...btnStyle(false, C), opacity: canBreak ? 1 : 0.3 }}
            disabled={!canBreak} onClick={breakApart}>
            BREAK APART
          </button>
        </div>

        {/* Visualization */}
        <div className="lrn-graph">
          <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Column backgrounds */}
            <rect x={col1X} y={blockY} width={colW} height={maxH}
              fill={C.fg} fillOpacity={0.04} />
            <rect x={col2X} y={blockY} width={colW} height={maxH}
              fill={C.fg} fillOpacity={0.06} />
            <rect x={col3X} y={blockY} width={colW} height={maxH}
              fill={C.fg} fillOpacity={0.04} />

            {/* Column headers */}
            <text x={col1X + colW / 2} y={blockY - 10} textAnchor="middle"
              fill={C.dim} fontSize={11} {...F} letterSpacing="0.06em">
              HUNDREDS ({s.flats})
            </text>
            <text x={col2X + colW / 2} y={blockY - 10} textAnchor="middle"
              fill={C.dim} fontSize={11} {...F} letterSpacing="0.06em">
              TENS ({s.rods})
            </text>
            <text x={col3X + colW / 2} y={blockY - 10} textAnchor="middle"
              fill={C.dim} fontSize={11} {...F} letterSpacing="0.06em">
              ONES ({s.units})
            </text>

            {/* Flats: 10x10 grids */}
            {Array.from({ length: Math.min(s.flats, 12) }, (_, i) => {
              const size = 56, gap = 6
              const col = i % 2, row = Math.floor(i / 2)
              const bx = col1X + col * (size + gap) + 30
              const by = blockY + 6 + row * (size + gap)
              return (
                <g key={`f${i}`}>
                  <rect x={bx} y={by} width={size} height={size}
                    fill={C.accent} fillOpacity={0.08} stroke={C.dim} strokeWidth={1} />
                  {Array.from({ length: 9 }, (_, li) => {
                    const f = (li + 1) / 10
                    return (
                      <g key={li}>
                        <line x1={bx + f * size} y1={by} x2={bx + f * size} y2={by + size}
                          stroke={C.dim} strokeWidth={0.3} opacity={0.4} />
                        <line x1={bx} y1={by + f * size} x2={bx + size} y2={by + f * size}
                          stroke={C.dim} strokeWidth={0.3} opacity={0.4} />
                      </g>
                    )
                  })}
                </g>
              )
            })}

            {/* Rods: vertical bars */}
            {Array.from({ length: Math.min(s.rods, 20) }, (_, i) => {
              const w = 8, h = 56, gap = 6
              const col = i % 5, row = Math.floor(i / 5)
              const bx = col2X + col * (w + gap) + 50
              const by = blockY + 6 + row * (h + gap)
              return (
                <g key={`r${i}`}>
                  <rect x={bx} y={by} width={w} height={h}
                    fill={C.accent} fillOpacity={0.12} stroke={C.dim} strokeWidth={1} />
                  {Array.from({ length: 9 }, (_, ti) => (
                    <line key={ti} x1={bx} y1={by + (ti + 1) * h / 10}
                      x2={bx + w} y2={by + (ti + 1) * h / 10}
                      stroke={C.dim} strokeWidth={0.3} opacity={0.5} />
                  ))}
                </g>
              )
            })}

            {/* Units: small squares */}
            {Array.from({ length: Math.min(s.units, 30) }, (_, i) => {
              const sz = 10, gap = 4
              const col = i % 5, row = Math.floor(i / 5)
              const bx = col3X + col * (sz + gap) + 50
              const by = blockY + 6 + row * (sz + gap)
              return (
                <rect key={`u${i}`} x={bx} y={by} width={sz} height={sz}
                  fill={C.accent} fillOpacity={0.15} stroke={C.dim} strokeWidth={1} />
              )
            })}

            {/* Total equation */}
            <text x={310} y={svgH - 12} textAnchor="middle"
              fill={C.fg} fontSize={16} {...F} fontWeight="bold">
              {total}
            </text>
          </svg>
        </div>

        <InstructionText C={C}>ADJUST SLIDERS, THEN REGROUP OR BREAK APART</InstructionText>
      </div>
    </ToolShell>
  )
}
