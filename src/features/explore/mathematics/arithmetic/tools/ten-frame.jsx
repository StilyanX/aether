import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, F, InstructionText } from './shared'

const INIT = Array(10).fill(false)

export default function TenFrame({ toolName, onBack }) {
  const C = useVizColors()
  const [filled, setFilled] = useState(INIT)
  const count = filled.filter(Boolean).length
  const topRow = filled.slice(0, 5).filter(Boolean).length
  const botRow = filled.slice(5).filter(Boolean).length

  const toggle = i => setFilled(f => f.map((v, j) => j === i ? !v : v))
  const handleReset = () => setFilled(INIT)

  const cellW = 84, cellH = 74, gap = 4, padX = 60, padY = 50
  const totalW = 5 * cellW + 4 * gap
  const totalH = 2 * cellH + gap
  const svgW = totalW + padX * 2
  const bracketX = padX + totalW + 14
  const svgH = totalH + padY * 2 + 30

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <div className="lrn-graph">
          <svg viewBox={`0 0 ${svgW + 50} ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Layer 1: Row background fills */}
            <rect x={padX} y={padY} width={totalW} height={cellH}
              fill={C.faint} fillOpacity={0.4} />
            <rect x={padX} y={padY + cellH + gap} width={totalW} height={cellH}
              fill={C.faint} fillOpacity={0.2} />

            {/* Layer 2+3: Grid cells and counters */}
            {Array.from({ length: 10 }, (_, i) => {
              const row = Math.floor(i / 5)
              const col = i % 5
              const x = padX + col * (cellW + gap)
              const y = padY + row * (cellH + gap)
              return (
                <g key={i} onClick={() => toggle(i)} style={{ cursor: 'pointer' }}
                  role="button" tabIndex={0} aria-label={`Cell ${i + 1}: ${filled[i] ? 'filled' : 'empty'}`}
                  onKeyDown={e => { if (e.key === 'Enter') toggle(i) }}>
                  <rect x={x} y={y} width={cellW} height={cellH}
                    fill="transparent" stroke={C.dim} strokeWidth={1} />
                  {filled[i] && (
                    <circle cx={x + cellW / 2} cy={y + cellH / 2} r={26}
                      fill={C.accent} fillOpacity={0.25} stroke={C.fg} strokeWidth={1.5} />
                  )}
                </g>
              )
            })}

            {/* Layer 4: Row count labels */}
            <text x={bracketX} y={padY + cellH / 2 + 5} textAnchor="start"
              fill={C.dim} fontSize={14} fontWeight="bold" {...F}>
              {topRow}
            </text>
            <text x={bracketX} y={padY + cellH + gap + cellH / 2 + 5} textAnchor="start"
              fill={C.dim} fontSize={14} fontWeight="bold" {...F}>
              {botRow}
            </text>

            {/* Layer 6: Result header */}
            <text x={padX + totalW / 2} y={padY - 18} textAnchor="middle"
              fill={C.fg} fontSize={16} fontWeight="bold" {...F}>
              {count === 0 ? 'EMPTY' : `${count} COUNTER${count !== 1 ? 'S' : ''}`}
            </text>
            <text x={padX + totalW / 2} y={padY - 4} textAnchor="middle"
              fill={C.dim} fontSize={11} {...F} letterSpacing="0.06em">
              {10 - count} TO MAKE 10
            </text>
          </svg>
        </div>
        <InstructionText C={C}>CLICK CELLS TO TOGGLE COUNTERS</InstructionText>
      </div>
    </ToolShell>
  )
}
