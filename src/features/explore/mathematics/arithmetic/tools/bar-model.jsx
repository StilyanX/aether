import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, F, InstructionText } from './shared'

const PAD_X = 60
const BAR_W = 500
const BAR_H = 56
const BAR_Y = 60
const SVG_W = 620
const SVG_H = 220

export default function BarModel({ toolName, onBack }) {
  const C = useVizColors()
  const [total, setTotal] = useState(12)
  const [parts, setParts] = useState(2)
  const [unknownIdx, setUnknownIdx] = useState(null)

  const handleReset = () => { setTotal(12); setParts(2); setUnknownIdx(null) }

  // Build equal segments
  const segments = []
  const baseVal = Math.floor(total / parts)
  const remainder = total % parts
  for (let i = 0; i < parts; i++) {
    segments.push(baseVal + (i < remainder ? 1 : 0))
  }

  const handleParts = v => {
    setParts(v)
    if (unknownIdx !== null && unknownIdx >= v) setUnknownIdx(null)
  }

  // Equation
  const eqParts = segments.map((v, i) => i === unknownIdx ? '?' : v)
  const eqLine = eqParts.join(' + ') + ' = ' + total
  const answerLine = unknownIdx !== null ? `? = ${segments[unknownIdx]}` : null

  // Segment widths proportional to value
  const segWidths = segments.map(v => (v / total) * BAR_W)

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <SliderControl label="TOTAL" value={total} onChange={setTotal} min={2} max={100} C={C} />
        <SliderControl label="PARTS" value={parts} onChange={handleParts} min={2} max={10} C={C} />

        <div className="lrn-graph" style={{ marginTop: 12 }}>
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} width="100%" style={{ display: 'block' }}>
            {/* Total label on left */}
            <text x={PAD_X - 12} y={BAR_Y + BAR_H / 2 + 5} textAnchor="end"
              fill={C.fg} fontSize={16} {...F} fontWeight="bold">
              {total}
            </text>

            {/* Segments */}
            {(() => {
              let xOff = 0
              return segments.map((val, i) => {
                const sx = PAD_X + xOff
                const sw = segWidths[i]
                xOff += sw
                const isUnknown = i === unknownIdx
                const fillOp = isUnknown ? 0.2 : (i % 2 === 0 ? 0.08 : 0.16)
                const fillColor = isUnknown ? C.accent : C.fg

                return (
                  <g key={i} onClick={() => setUnknownIdx(unknownIdx === i ? null : i)}
                    style={{ cursor: 'pointer' }}>
                    {/* Fill */}
                    <rect x={sx} y={BAR_Y} width={sw} height={BAR_H}
                      fill={fillColor} fillOpacity={fillOp} />
                    {/* Border */}
                    <rect x={sx} y={BAR_Y} width={sw} height={BAR_H}
                      fill="none" stroke={C.dim} strokeWidth={1} />
                    {/* Value label */}
                    {sw > 20 && (
                      <text x={sx + sw / 2} y={BAR_Y + BAR_H / 2 + 5} textAnchor="middle"
                        fill={isUnknown ? C.accent : C.fg} fontSize={14} {...F} fontWeight="bold">
                        {isUnknown ? '?' : val}
                      </text>
                    )}
                  </g>
                )
              })
            })()}

            {/* Outer border */}
            <rect x={PAD_X} y={BAR_Y} width={BAR_W} height={BAR_H}
              fill="none" stroke={C.fg} strokeWidth={1.5} />

            {/* Equation */}
            <text x={SVG_W / 2} y={BAR_Y + BAR_H + 36} textAnchor="middle"
              fill={C.fg} fontSize={16} {...F} fontWeight="bold">
              {eqLine}
            </text>
            {answerLine && (
              <text x={SVG_W / 2} y={BAR_Y + BAR_H + 58} textAnchor="middle"
                fill={C.accent} fontSize={16} {...F} fontWeight="bold">
                {answerLine}
              </text>
            )}
          </svg>
        </div>

        <InstructionText C={C}>CLICK A SEGMENT TO MARK AS UNKNOWN</InstructionText>
      </div>
    </ToolShell>
  )
}
