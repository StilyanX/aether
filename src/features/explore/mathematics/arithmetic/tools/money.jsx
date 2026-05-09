import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, F, InstructionText } from './shared'

const DENOMS = [
  { key: 'penny', label: 'PENNIES', val: 0.01, max: 20, symbol: '1\u00a2' },
  { key: 'nickel', label: 'NICKELS', val: 0.05, max: 20, symbol: '5\u00a2' },
  { key: 'dime', label: 'DIMES', val: 0.10, max: 20, symbol: '10\u00a2' },
  { key: 'quarter', label: 'QUARTERS', val: 0.25, max: 20, symbol: '25\u00a2' },
  { key: 'one', label: '$1 BILLS', val: 1, max: 10, symbol: '$1' },
  { key: 'five', label: '$5 BILLS', val: 5, max: 10, symbol: '$5' },
  { key: 'ten', label: '$10 BILLS', val: 10, max: 10, symbol: '$10' },
  { key: 'twenty', label: '$20 BILLS', val: 20, max: 5, symbol: '$20' }
]

const INIT = { penny: 0, nickel: 0, dime: 0, quarter: 0, one: 0, five: 0, ten: 0, twenty: 0 }

export default function Money({ toolName, onBack }) {
  const C = useVizColors()
  const [s, setS] = useState(INIT)

  const handleReset = () => setS(INIT)

  const total = DENOMS.reduce((sum, d) => sum + s[d.key] * d.val, 0)

  const setDenom = (key, val) => setS(prev => ({ ...prev, [key]: val }))

  // SVG bar chart
  const padX = 60, padY = 20
  const barAreaW = 500
  const barH = 24, barGap = 8
  const chartH = DENOMS.length * (barH + barGap) + padY * 2

  // Find max subtotal for scaling bars
  const subtotals = DENOMS.map(d => s[d.key] * d.val)
  const maxSub = Math.max(1, ...subtotals)

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Total */}
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span style={{ ...F, fontSize: 28, color: C.fg, fontWeight: 'bold' }}>
            ${total.toFixed(2)}
          </span>
        </div>

        {/* Sliders */}
        {DENOMS.map(d => (
          <SliderControl key={d.key} label={d.label} value={s[d.key]}
            onChange={v => setDenom(d.key, v)} min={0} max={d.max} C={C}
            display={`${s[d.key]} = $${(s[d.key] * d.val).toFixed(2)}`} />
        ))}

        {/* Bar chart */}
        <div className="lrn-graph" style={{ marginTop: 12 }}>
          <svg viewBox={`0 0 620 ${chartH}`} width="100%" style={{ display: 'block' }}>
            {DENOMS.map((d, i) => {
              const y = padY + i * (barH + barGap)
              const sub = s[d.key] * d.val
              const barW = maxSub > 0 ? (sub / maxSub) * barAreaW : 0
              const isCoin = i < 4

              return (
                <g key={d.key}>
                  {/* Row background */}
                  <rect x={padX} y={y} width={barAreaW} height={barH}
                    fill={C.fg} fillOpacity={i % 2 === 0 ? 0.03 : 0.06} />

                  {/* Label */}
                  <text x={padX - 8} y={y + barH / 2 + 4} textAnchor="end"
                    fill={C.dim} fontSize={10} {...F}>
                    {d.symbol}
                  </text>

                  {/* Value bar */}
                  {barW > 0 && (
                    <rect x={padX} y={y + 2} width={barW} height={barH - 4}
                      fill={isCoin ? C.accent : C.fg} fillOpacity={0.3} />
                  )}

                  {/* Subtotal */}
                  {sub > 0 && (
                    <text x={padX + barW + 8} y={y + barH / 2 + 4}
                      fill={isCoin ? C.accent : C.fg} fontSize={11} {...F}>
                      ${sub.toFixed(2)}
                    </text>
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        <InstructionText C={C}>SLIDE TO ADD COINS AND BILLS</InstructionText>
      </div>
    </ToolShell>
  )
}
