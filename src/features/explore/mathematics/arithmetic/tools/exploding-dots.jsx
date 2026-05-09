import { useState, useCallback } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, btnStyle, F, InstructionText } from './shared'

const INIT_COLS = [0, 0, 0, 0]

export default function ExplodingDots({ toolName, onBack }) {
  const C = useVizColors()
  const [base, setBase] = useState(10)
  const [cols, setCols] = useState(INIT_COLS)
  const [autoExplode, setAutoExplode] = useState(false)
  const handleReset = () => { setCols(INIT_COLS); setBase(10); setAutoExplode(false) }

  const explodeAll = (columns, b) => {
    const c = [...columns]
    let changed = true
    while (changed) {
      changed = false
      for (let i = c.length - 1; i > 0; i--) {
        if (c[i] >= b) {
          const carry = Math.floor(c[i] / b)
          c[i] = c[i] % b
          c[i - 1] += carry
          changed = true
        }
      }
    }
    return c
  }

  const addDot = useCallback(() => {
    setCols(prev => {
      const next = [...prev]
      next[next.length - 1] += 1
      return autoExplode ? explodeAll(next, base) : next
    })
  }, [autoExplode, base])

  const explodeOnce = () => {
    setCols(prev => {
      const c = [...prev]
      for (let i = c.length - 1; i > 0; i--) {
        if (c[i] >= base) {
          c[i] -= base
          c[i - 1] += 1
          return c
        }
      }
      return c
    })
  }

  // BUG FIX: check any column except leftmost (i > 0), not "except rightmost"
  const canExplode = cols.some((c, i) => i > 0 && c >= base)
  const total = cols.reduce((sum, c, i) => sum + c * Math.pow(base, cols.length - 1 - i), 0)

  const colW = 140, padX = 15, headerY = 30, dotAreaTop = 60
  const dotR = 10, dotGap = 6, dotsPerRow = 5
  const maxDots = Math.max(...cols, 1)
  const dotRows = Math.ceil(Math.min(maxDots, 30) / dotsPerRow)
  const svgH = Math.max(dotAreaTop + dotRows * (dotR * 2 + dotGap) + 40, 200)

  const placeLabel = (exp) => {
    if (exp === 0) return '1S'
    const val = Math.pow(base, exp)
    return val >= 1000 ? `${(val / 1000)}K` : `${val}S`
  }

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Value display */}
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <span style={{ ...F, fontSize: 24, color: C.fg, fontWeight: 'bold' }}>
            {total}
          </span>
        </div>

        {/* Controls at top */}
        <SliderControl label="BASE" value={base}
          onChange={v => { setBase(v); setCols(INIT_COLS) }}
          min={2} max={10} C={C} />

        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '8px 0' }}>
          <button style={{ ...btnStyle(false, C), opacity: canExplode ? 1 : 0.3, borderColor: canExplode ? C.accent : undefined }}
            disabled={!canExplode} onClick={explodeOnce}>
            EXPLODE
          </button>
          <button style={btnStyle(autoExplode, C)}
            onClick={() => setAutoExplode(p => !p)}>
            AUTO: {autoExplode ? 'ON' : 'OFF'}
          </button>
        </div>

        {/* Visualization */}
        <div className="lrn-graph">
          <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
            {cols.map((count, ci) => {
              const x0 = padX + ci * (colW + 8)
              const cx = x0 + colW / 2
              const exp = cols.length - 1 - ci
              const isFull = ci > 0 && count >= base

              return (
                <g key={ci}>
                  {/* Column background */}
                  <rect x={x0} y={dotAreaTop - 10} width={colW} height={svgH - dotAreaTop - 20}
                    fill={C.fg} fillOpacity={ci % 2 === 0 ? 0.03 : 0.06}
                    stroke={isFull ? C.accent : C.dim}
                    strokeWidth={isFull ? 2 : 0.5}
                    opacity={isFull ? 1 : 0.3} />

                  {/* Header */}
                  <text x={cx} y={headerY - 6} textAnchor="middle"
                    fill={C.dim} fontSize={10} {...F} letterSpacing="0.06em">
                    {placeLabel(exp)}
                  </text>
                  <text x={cx} y={headerY + 10} textAnchor="middle"
                    fill={C.fg} fontSize={14} {...F} fontWeight="bold">
                    {count}
                  </text>

                  {/* Dots */}
                  {Array.from({ length: Math.min(count, 30) }, (_, di) => {
                    const col = di % dotsPerRow
                    const row = Math.floor(di / dotsPerRow)
                    const dx = x0 + 20 + col * (dotR * 2 + dotGap)
                    const dy = dotAreaTop + 10 + row * (dotR * 2 + dotGap)
                    return (
                      <circle key={di} cx={dx} cy={dy} r={dotR}
                        fill={C.accent} fillOpacity={0.3}
                        stroke={C.accent} strokeWidth={1} />
                    )
                  })}

                  {count > 30 && (
                    <text x={cx} y={svgH - 30} textAnchor="middle"
                      fill={C.dim} fontSize={10} {...F}>
                      +{count - 30}
                    </text>
                  )}

                  {/* Click target for rightmost column */}
                  {ci === cols.length - 1 && (
                    <rect x={x0} y={dotAreaTop - 10} width={colW} height={svgH - dotAreaTop - 20}
                      fill="transparent" style={{ cursor: 'pointer' }}
                      onClick={addDot}
                      role="button" tabIndex={0} aria-label="Add dot"
                      onKeyDown={e => { if (e.key === 'Enter') addDot() }} />
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        <InstructionText C={C}>CLICK THE RIGHTMOST COLUMN TO ADD DOTS</InstructionText>
      </div>
    </ToolShell>
  )
}
