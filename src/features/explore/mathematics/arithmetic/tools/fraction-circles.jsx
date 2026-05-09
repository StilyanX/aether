import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, F, InstructionText } from './shared'

const CX = 310, CY = 200, R = 150

function wedgePath(i, denom) {
  const a0 = (i / denom) * 2 * Math.PI - Math.PI / 2
  const a1 = ((i + 1) / denom) * 2 * Math.PI - Math.PI / 2
  const x1 = CX + R * Math.cos(a0)
  const y1 = CY + R * Math.sin(a0)
  const x2 = CX + R * Math.cos(a1)
  const y2 = CY + R * Math.sin(a1)
  const large = (a1 - a0) > Math.PI ? 1 : 0
  if (denom === 1) {
    return `M ${CX} ${CY - R} A ${R} ${R} 0 1 1 ${CX - 0.01} ${CY - R} Z`
  }
  return `M ${CX} ${CY} L ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} Z`
}

function labelPos(i, denom) {
  const mid = ((i + 0.5) / denom) * 2 * Math.PI - Math.PI / 2
  const lr = R * 0.6
  return { x: CX + lr * Math.cos(mid), y: CY + lr * Math.sin(mid) }
}

export default function FractionCircles({ toolName, onBack }) {
  const C = useVizColors()
  const [denom, setDenom] = useState(4)
  const [selected, setSelected] = useState(new Set())

  const toggle = i => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  const handleReset = () => { setDenom(4); setSelected(new Set()) }
  const handleDenom = v => {
    setDenom(v)
    // Keep selected wedges that still exist in the new denominator
    setSelected(prev => {
      const next = new Set()
      for (const i of prev) { if (i < v) next.add(i) }
      return next
    })
  }

  const count = selected.size
  const decimal = denom > 0 ? (count / denom).toFixed(3) : '0'
  const pct = denom > 0 ? ((count / denom) * 100).toFixed(1) : '0'

  const displayY = CY + R + 40
  const svgH = displayY + 70

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <SliderControl label="DENOMINATOR" value={denom} onChange={handleDenom}
          min={2} max={12} C={C} display={denom} />

        <div className="lrn-graph" style={{ marginTop: 16 }}>
          <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Layer 1: Faint circle background */}
            <circle cx={CX} cy={CY} r={R}
              fill={C.faint} fillOpacity={0.04} />

            {/* Wedges */}
            {Array.from({ length: denom }, (_, i) => {
              const sel = selected.has(i)
              const lp = labelPos(i, denom)
              return (
                <g key={i} onClick={() => toggle(i)} style={{ cursor: 'pointer' }}
                  role="button" tabIndex={0} aria-label={`Wedge ${i + 1} of ${denom}`}
                  onKeyDown={e => { if (e.key === 'Enter') toggle(i) }}>
                  {/* Layer 3: Selected fill */}
                  <path d={wedgePath(i, denom)}
                    fill={sel ? C.accent : 'transparent'}
                    fillOpacity={sel ? 0.25 : 0} />
                  {/* Layer 2: Border - dashed for unselected, solid for selected */}
                  <path d={wedgePath(i, denom)}
                    fill="none"
                    stroke={C.dim}
                    strokeWidth={sel ? 1.5 : 1}
                    strokeDasharray={sel ? 'none' : '4 4'} />
                  {/* Wedge label */}
                  <text x={lp.x} y={lp.y + 4} textAnchor="middle"
                    fill={sel ? C.fg : C.faint} fontSize={denom <= 6 ? 14 : 10} {...F}
                    style={{ pointerEvents: 'none' }}>
                    {i + 1}
                  </text>
                </g>
              )
            })}

            {/* Layer 2: Outer circle border */}
            <circle cx={CX} cy={CY} r={R}
              fill="none" stroke={C.dim} strokeWidth={1} />

            {/* Layer 6: Stacked fraction display */}
            {/* Bold fraction */}
            <text x={310} y={displayY} textAnchor="middle"
              fill={C.fg} fontSize={22} fontWeight="bold" {...F}>
              {count}/{denom}
            </text>
            {/* Dim decimal */}
            <text x={310} y={displayY + 20} textAnchor="middle"
              fill={C.dim} fontSize={14} {...F}>
              {decimal}
            </text>
            {/* Dim percentage */}
            <text x={310} y={displayY + 38} textAnchor="middle"
              fill={C.dim} fontSize={14} {...F}>
              {pct}%
            </text>
          </svg>
        </div>

        {/* Layer 5: Instruction */}
        <InstructionText C={C}>CLICK WEDGES TO SELECT</InstructionText>
      </div>
    </ToolShell>
  )
}
