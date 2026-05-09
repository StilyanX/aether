import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, btnStyle, F, InstructionText } from './shared'

const INIT = { ones: 5, tens: 3, hundreds: 2, thousands: 0 }
const COLS = [
  { key: 'thousands', label: 'THOUSANDS', val: 1000, short: 'TH' },
  { key: 'hundreds', label: 'HUNDREDS', val: 100, short: 'H' },
  { key: 'tens', label: 'TENS', val: 10, short: 'T' },
  { key: 'ones', label: 'ONES', val: 1, short: 'O' }
]

export default function PlaceValueDisks({ toolName, onBack }) {
  const C = useVizColors()
  const [s, setS] = useState(INIT)
  const handleReset = () => setS(INIT)

  const total = s.thousands * 1000 + s.hundreds * 100 + s.tens * 10 + s.ones

  const regroup = () => {
    let o = s.ones, t = s.tens, h = s.hundreds, th = s.thousands
    const c1 = Math.floor(o / 10); o %= 10; t += c1
    const c2 = Math.floor(t / 10); t %= 10; h += c2
    const c3 = Math.floor(h / 10); h %= 10; th += c3
    setS({ ones: o, tens: t, hundreds: h, thousands: th })
  }

  const breakApart = () => {
    if (s.thousands > 0) setS(p => ({ ...p, thousands: p.thousands - 1, hundreds: p.hundreds + 10 }))
    else if (s.hundreds > 0) setS(p => ({ ...p, hundreds: p.hundreds - 1, tens: p.tens + 10 }))
    else if (s.tens > 0) setS(p => ({ ...p, tens: p.tens - 1, ones: p.ones + 10 }))
  }

  const canRegroup = s.ones >= 10 || s.tens >= 10 || s.hundreds >= 10
  const canBreak = s.thousands > 0 || s.hundreds > 0 || s.tens > 0

  const diskColors = { ones: C.dim, tens: C.accent, hundreds: C.fg, thousands: C.fg }
    const colW = 130, padX = 25, headerY = 26
  const r = 16, maxVisible = 10, diskGap = r * 2.4
  const colTop = 56
  const diskStartY = colTop + r + 10
  const maxCount = Math.max(...COLS.map(c => Math.min(s[c.key], maxVisible)), 1)
  const colBottom = diskStartY + (maxCount - 1) * diskGap + r + 16
  const svgH = colBottom + 40

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Sliders */}
        <SliderControl label="THOUSANDS" value={s.thousands} onChange={v => setS(p => ({ ...p, thousands: v }))} min={0} max={9} C={C} />
        <SliderControl label="HUNDREDS" value={s.hundreds} onChange={v => setS(p => ({ ...p, hundreds: v }))} min={0} max={15} C={C} />
        <SliderControl label="TENS" value={s.tens} onChange={v => setS(p => ({ ...p, tens: v }))} min={0} max={15} C={C} />
        <SliderControl label="ONES" value={s.ones} onChange={v => setS(p => ({ ...p, ones: v }))} min={0} max={15} C={C} />

        {/* Regroup / Break */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '12px 0' }}>
          <button style={{ ...btnStyle(false, C), opacity: canRegroup ? 1 : 0.3, borderColor: canRegroup ? C.accent : undefined }}
            disabled={!canRegroup} onClick={regroup}>
            REGROUP
          </button>
          <button style={{ ...btnStyle(false, C), opacity: canBreak ? 1 : 0.3 }}
            disabled={!canBreak} onClick={breakApart}>
            BREAK APART
          </button>
        </div>

        {/* Visualization */}
        <div className="lrn-graph">
          <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
            {COLS.map((col, ci) => {
              const x0 = padX + ci * (colW + 12)
              const cx = x0 + colW / 2
              const count = Math.min(s[col.key], maxVisible)

              return (
                <g key={col.key}>
                  {/* Column background */}
                  <rect x={x0} y={colTop} width={colW} height={colBottom - colTop}
                    fill={C.fg} fillOpacity={ci % 2 === 0 ? 0.03 : 0.06} />

                  {/* Header */}
                  <text x={cx} y={headerY} textAnchor="middle"
                    fill={C.dim} fontSize={10} {...F} letterSpacing="0.06em">
                    {col.label}
                  </text>
                  <text x={cx} y={headerY + 16} textAnchor="middle"
                    fill={C.fg} fontSize={14} {...F} fontWeight="bold">
                    {s[col.key]}
                  </text>

                  {/* Disks */}
                  {Array.from({ length: count }, (_, i) => {
                    const dy = diskStartY + i * diskGap
                    return (
                      <g key={i}>
                        <circle cx={cx} cy={dy} r={r}
                          fill={diskColors[col.key]} fillOpacity={0.15}
                          stroke={diskColors[col.key]} strokeWidth={1.5} />
                        <text x={cx} y={dy + 4} textAnchor="middle"
                          fill={diskColors[col.key]} fontSize={10} {...F} fontWeight="bold">
                          {col.val}
                        </text>
                      </g>
                    )
                  })}

                  {s[col.key] > maxVisible && (
                    <text x={cx} y={diskStartY + maxVisible * diskGap + 10} textAnchor="middle"
                      fill={C.dim} fontSize={10} {...F}>
                      +{s[col.key] - maxVisible}
                    </text>
                  )}
                </g>
              )
            })}

            {/* Total */}
            <text x={310} y={svgH - 4} textAnchor="middle"
              fill={C.fg} fontSize={18} {...F} fontWeight="bold">
              {total.toLocaleString('en-US')}
            </text>
          </svg>
        </div>

        <InstructionText C={C}>ADJUST SLIDERS, THEN REGROUP OR BREAK APART</InstructionText>
      </div>
    </ToolShell>
  )
}
