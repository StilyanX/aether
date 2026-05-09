import { useState, useCallback } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, F, InstructionText, MeasurementBracket } from './shared'

const INIT_SLID = Array(5).fill(0)

export default function Rekenrek({ toolName, onBack }) {
  const C = useVizColors()
  const [rowCount, setRowCount] = useState(2)
  const [slid, setSlid] = useState(INIT_SLID)

  const handleReset = () => { setSlid(INIT_SLID); setRowCount(2) }

  const handleClick = useCallback((row, beadIdx) => {
    setSlid(prev => {
      const next = [...prev]
      next[row] = prev[row] === beadIdx + 1 ? beadIdx : beadIdx + 1
      return next
    })
  }, [])

  const total = slid.slice(0, rowCount).reduce((s, v) => s + v, 0)

  const padX = 50, padY = 44, rowH = 48, beadR = 14, beadGap = 32
  const rodLeft = padX + 24
  const rodRight = rodLeft + 10 * beadGap + 40
  const rodLen = rodRight - rodLeft
  const labelRightX = rodRight + 28
  const svgW = labelRightX + 40
  const bracketY = padY + rowCount * rowH + 24
  const svgH = bracketY + 48

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <SliderControl label="ROWS" value={rowCount} onChange={setRowCount} min={1} max={5} C={C} />

        <div className="lrn-graph" style={{ marginTop: 16 }}>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Layer 1: Alternating row fills */}
            {Array.from({ length: rowCount }, (_, row) => (
              <rect key={`bg${row}`} x={rodLeft - 10} y={padY + row * rowH - 4}
                width={rodLen + 20} height={rowH}
                fill={C.faint} fillOpacity={row % 2 === 0 ? 0.5 : 0.25} />
            ))}

            {/* Layer 2: Frame border */}
            <rect x={rodLeft - 10} y={padY - 4}
              width={rodLen + 20} height={rowCount * rowH}
              fill="none" stroke={C.dim} strokeWidth={1} />


            {Array.from({ length: rowCount }, (_, row) => {
              const y = padY + row * rowH + rowH / 2 - 4
              const slidCount = slid[row]
              const left5 = Math.min(slidCount, 5)
              const right5 = Math.max(slidCount - 5, 0)

              return (
                <g key={row}>
                  {/* Layer 2: Rod */}
                  <line x1={rodLeft} y1={y} x2={rodRight} y2={y}
                    stroke={C.dim} strokeWidth={1.5} />

                  {/* Layer 3: Beads */}
                  {Array.from({ length: 10 }, (_, i) => {
                    const isSlid = i < slidCount
                    const isAccent = i < 5
                    const beadD = beadR * 2 + 2
                    let cx
                    if (isSlid) {
                      // Slid beads cluster flush left
                      cx = rodLeft + beadR + 4 + i * beadD
                    } else {
                      // Unslid beads cluster flush right
                      const fromRight = 9 - i // 0 = rightmost bead
                      cx = rodRight - beadR - 4 - fromRight * beadD
                    }

                    return (
                      <circle key={i} cx={cx} cy={y} r={beadR}
                        fill={isAccent ? C.accent : C.fg}
                        fillOpacity={isAccent ? 0.35 : 0.2}
                        stroke={isAccent ? C.fg : C.dim}
                        strokeWidth={1}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleClick(row, i)}
                        role="button" tabIndex={0} aria-label={`Row ${row + 1} bead ${i + 1}`}
                        onKeyDown={e => { if (e.key === 'Enter') handleClick(row, i) }}
                      />
                    )
                  })}

                  {/* Layer 3: Per-row count label on right */}
                  <text x={labelRightX} y={y + 5} textAnchor="middle"
                    fill={C.fg} fontSize={14} fontWeight="bold" {...F}>
                    {slidCount}
                  </text>

                  {/* Layer 6: Per-row decomposition */}
                  <text x={labelRightX + 50} y={y + 5} textAnchor="middle"
                    fill={C.dim} fontSize={11} {...F} letterSpacing="0.04em">
                    {left5} + {right5}
                  </text>
                </g>
              )
            })}

            {/* Layer 4: Measurement bracket below - total */}
            <MeasurementBracket x1={rodLeft - 10} x2={rodRight + 10} y={bracketY} label={`TOTAL: ${total}`} C={C} />

            {/* Layer 6: Result display */}
            <text x={svgW / 2} y={padY - 18} textAnchor="middle"
              fill={C.fg} fontSize={16} fontWeight="bold" {...F}>
              {total === 0 ? 'EMPTY' : `${total} BEAD${total !== 1 ? 'S' : ''} SLID`}
            </text>
          </svg>
        </div>

        {/* Layer 5: Instruction */}
        <InstructionText C={C}>CLICK A BEAD TO SLIDE</InstructionText>
      </div>
    </ToolShell>
  )
}
