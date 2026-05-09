import { useState, useCallback } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, btnStyle, F, InstructionText, useStableId } from './shared'

const YELLOW = '#d4a843'
const RED = '#c44040'

export default function TwoColorCounters({ toolName, onBack }) {
  const C = useVizColors()
  const genId = useStableId()
  const [counters, setCounters] = useState([])

  const handleReset = () => setCounters([])

  const addCounter = useCallback(color => {
    setCounters(prev => [...prev, { id: genId(), color }])
  }, [genId])

  const flipCounter = useCallback(id => {
    setCounters(prev => prev.map(c =>
      c.id === id ? { ...c, color: c.color === 'yellow' ? 'red' : 'yellow' } : c
    ))
  }, [])

  const yellowCount = counters.filter(c => c.color === 'yellow').length
  const redCount = counters.filter(c => c.color === 'red').length
  const net = yellowCount - redCount
  const zeroPairs = Math.min(yellowCount, redCount)

  // Layout: two columns side by side
  const r = 24, gap = 12, cols = 5
  const cellSize = r * 2 + gap
  const yellows = counters.filter(c => c.color === 'yellow')
  const reds = counters.filter(c => c.color === 'red')
  const yRows = Math.max(1, Math.ceil(yellows.length / cols))
  const rRows = Math.max(1, Math.ceil(reds.length / cols))
  const maxRows = Math.max(yRows, rRows)

  const colWidth = cols * cellSize
  const halfGap = 20
  const svgW = 620
  const leftX = (svgW - colWidth * 2 - halfGap) / 2
  const rightX = leftX + colWidth + halfGap
  const headerY = 24
  const dotStartY = headerY + 20
  const svgH = dotStartY + maxRows * cellSize + 20

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Equation */}
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span style={{ ...F, fontSize: 28, color: YELLOW, fontWeight: 'bold' }}>
            +{yellowCount}
          </span>
          <span style={{ ...F, fontSize: 28, color: C.dim }}>{' '}</span>
          <span style={{ ...F, fontSize: 28, color: RED, fontWeight: 'bold' }}>
            -{redCount}
          </span>
          <span style={{ ...F, fontSize: 28, color: C.dim }}> = </span>
          <span style={{ ...F, fontSize: 32, color: C.fg, fontWeight: 'bold' }}>
            {net >= 0 ? `+${net}` : net}
          </span>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, justifyContent: 'center' }}>
          <button style={{ ...btnStyle(false, C), color: YELLOW, borderColor: YELLOW }}
            onClick={() => addCounter('yellow')}>
            + POSITIVE
          </button>
          <button style={{ ...btnStyle(false, C), color: RED, borderColor: RED }}
            onClick={() => addCounter('red')}>
            - NEGATIVE
          </button>
        </div>

        {/* Counters */}
        <div className="lrn-graph">
          <svg viewBox={`0 0 ${svgW} ${Math.max(svgH, 140)}`} width="100%" style={{ display: 'block' }}>
            {/* Column backgrounds */}
            <rect x={leftX - 8} y={headerY - 8} width={colWidth + 16} height={Math.max(svgH, 140) - headerY}
              fill={YELLOW} fillOpacity={0.03} />
            <rect x={rightX - 8} y={headerY - 8} width={colWidth + 16} height={Math.max(svgH, 140) - headerY}
              fill={RED} fillOpacity={0.03} />

            {/* Headers */}
            <text x={leftX + colWidth / 2} y={headerY + 4} textAnchor="middle"
              fill={YELLOW} fontSize={11} {...F} letterSpacing="0.06em" fillOpacity={0.6}>
              POSITIVE
            </text>
            <text x={rightX + colWidth / 2} y={headerY + 4} textAnchor="middle"
              fill={RED} fontSize={11} {...F} letterSpacing="0.06em" fillOpacity={0.6}>
              NEGATIVE
            </text>

            {counters.length === 0 && (
              <text x={svgW / 2} y={80} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
                ADD COUNTERS TO BEGIN
              </text>
            )}

            {/* Yellow counters */}
            {yellows.map((c, i) => {
              const col = i % cols, row = Math.floor(i / cols)
              const cx = leftX + col * cellSize + cellSize / 2
              const cy = dotStartY + row * cellSize + cellSize / 2
              return (
                <g key={c.id} onClick={() => flipCounter(c.id)} style={{ cursor: 'pointer' }}
                  role="button" tabIndex={0} aria-label="Positive counter, click to flip"
                  onKeyDown={e => { if (e.key === 'Enter') flipCounter(c.id) }}>
                  <circle cx={cx} cy={cy} r={r}
                    fill={YELLOW} fillOpacity={0.2}
                    stroke={YELLOW} strokeWidth={2} />
                  <text x={cx} y={cy + 7} textAnchor="middle"
                    fill={YELLOW} fontSize={20} {...F} fontWeight="bold">+</text>
                </g>
              )
            })}

            {/* Red counters */}
            {reds.map((c, i) => {
              const col = i % cols, row = Math.floor(i / cols)
              const cx = rightX + col * cellSize + cellSize / 2
              const cy = dotStartY + row * cellSize + cellSize / 2
              return (
                <g key={c.id} onClick={() => flipCounter(c.id)} style={{ cursor: 'pointer' }}
                  role="button" tabIndex={0} aria-label="Negative counter, click to flip"
                  onKeyDown={e => { if (e.key === 'Enter') flipCounter(c.id) }}>
                  <circle cx={cx} cy={cy} r={r}
                    fill={RED} fillOpacity={0.2}
                    stroke={RED} strokeWidth={2} />
                  <text x={cx} y={cy + 7} textAnchor="middle"
                    fill={RED} fontSize={20} {...F} fontWeight="bold">-</text>
                </g>
              )
            })}
          </svg>
        </div>

        {zeroPairs > 0 && (
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <span style={{ ...F, fontSize: 11, color: C.dim, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {zeroPairs} ZERO PAIR{zeroPairs !== 1 ? 'S' : ''} CANCEL OUT
            </span>
          </div>
        )}

        <InstructionText C={C}>CLICK A COUNTER TO FLIP ITS SIGN</InstructionText>
      </div>
    </ToolShell>
  )
}
