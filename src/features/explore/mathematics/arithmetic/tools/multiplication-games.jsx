import { useState, useCallback } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, btnStyle, F, InstructionText } from './shared'

const GRID = 9
const PAD = 60
const CELL = 54
const GRID_W = GRID * CELL
const SVG_W = 620
const OX = (SVG_W - GRID_W) / 2
const OY = PAD + CELL + 8
const SVG_H = OY + GRID * CELL + 10

function initState() {
  return {
    player1Score: 0,
    player2Score: 0,
    currentPlayer: 1,
    claimed: {},
    selectedRow: null,
    selectedCol: null,
    phase: 'row' // 'row' -> 'col' -> claim -> switch
  }
}

export default function MultiplicationGames({ toolName, onBack }) {
  const C = useVizColors()
  const [state, setState] = useState(initState)

  const handleReset = () => setState(initState())

  const { currentPlayer, claimed, selectedRow, selectedCol, player1Score, player2Score, phase } = state

  const factors = Array.from({ length: GRID }, (_, i) => i + 1)

  const handleRowFactor = useCallback(f => {
    setState(prev => {
      if (prev.phase !== 'row') return prev
      if (prev.selectedRow === f) return { ...prev, selectedRow: null }
      return { ...prev, selectedRow: f, phase: 'col' }
    })
  }, [])

  const handleColFactor = useCallback(f => {
    setState(prev => {
      if (prev.phase === 'row') return prev
      if (prev.selectedCol === f && prev.phase === 'col') return { ...prev, selectedCol: null }

      const row = prev.selectedRow
      if (row === null) return prev

      const key = `${f}x${row}`
      if (prev.claimed[key]) return { ...prev, selectedCol: f }

      const newClaimed = { ...prev.claimed, [key]: prev.currentPlayer }
      const s1 = prev.currentPlayer === 1 ? prev.player1Score + 1 : prev.player1Score
      const s2 = prev.currentPlayer === 2 ? prev.player2Score + 1 : prev.player2Score
      return {
        ...prev,
        claimed: newClaimed,
        player1Score: s1, player2Score: s2,
        currentPlayer: prev.currentPlayer === 1 ? 2 : 1,
        selectedRow: null, selectedCol: null,
        phase: 'row'
      }
    })
  }, [])

  // Dynamic instruction
  let instruction = `PLAYER ${currentPlayer}: SELECT A ROW FACTOR`
  if (phase === 'col') instruction = 'NOW SELECT A COLUMN FACTOR'

  const playerColor = p => p === 1 ? C.accent : C.fg

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Score display */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 12, height: 12, background: C.accent, opacity: 0.7 }} />
            <span style={{ ...F, fontSize: 18, color: currentPlayer === 1 ? C.accent : C.dim, fontWeight: 'bold' }}>
              P1: {player1Score}
            </span>
          </div>
          <span style={{ ...F, fontSize: 14, color: C.fg, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            PLAYER {currentPlayer}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ ...F, fontSize: 18, color: currentPlayer === 2 ? C.fg : C.dim, fontWeight: 'bold' }}>
              P2: {player2Score}
            </span>
            <div style={{ width: 12, height: 12, background: C.fg, opacity: 0.7 }} />
          </div>
        </div>

        <div className="lrn-graph">
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} width="100%" style={{ display: 'block' }}>
            {/* Layer 1: Alternating row/column fills */}
            {factors.map((_, j) => (
              <rect key={`rowfill${j}`} x={OX} y={OY + j * CELL}
                width={GRID_W} height={CELL}
                fill={C.fg} fillOpacity={j % 2 === 0 ? 0.02 : 0.04} />
            ))}

            {/* Highlight selected row strip */}
            {selectedRow !== null && (
              <rect x={OX} y={OY + (selectedRow - 1) * CELL}
                width={GRID_W} height={CELL}
                fill={C.accent} fillOpacity={0.06} />
            )}

            {/* Highlight selected column strip */}
            {selectedCol !== null && (
              <rect x={OX + (selectedCol - 1) * CELL} y={OY}
                width={CELL} height={GRID_W}
                fill={C.accent} fillOpacity={0.06} />
            )}

            {/* Multiply sign */}
            <text x={OX - CELL / 2} y={PAD + CELL / 2 + 5} textAnchor="middle"
              fill={C.dim} fontSize={14} {...F}>X</text>

            {/* Top row: column factors */}
            {factors.map((f, i) => {
              const x = OX + i * CELL
              const sel = selectedCol === f
              return (
                <g key={`top-${f}`} onClick={() => handleColFactor(f)} style={{ cursor: 'pointer' }}>
                  <rect x={x} y={PAD} width={CELL} height={CELL}
                    fill={sel ? C.accent : 'transparent'} fillOpacity={sel ? 0.2 : 1}
                    stroke={C.dim} strokeWidth={1} />
                  <text x={x + CELL / 2} y={PAD + CELL / 2 + 5} textAnchor="middle"
                    fill={sel ? C.accent : C.fg} fontSize={14} {...F} fontWeight="bold">{f}</text>
                </g>
              )
            })}

            {/* Left column: row factors */}
            {factors.map((f, j) => {
              const y = OY + j * CELL
              const sel = selectedRow === f
              return (
                <g key={`left-${f}`} onClick={() => handleRowFactor(f)} style={{ cursor: 'pointer' }}>
                  <rect x={OX - CELL} y={y} width={CELL} height={CELL}
                    fill={sel ? C.accent : 'transparent'} fillOpacity={sel ? 0.2 : 1}
                    stroke={C.dim} strokeWidth={1} />
                  <text x={OX - CELL / 2} y={y + CELL / 2 + 5} textAnchor="middle"
                    fill={sel ? C.accent : C.fg} fontSize={14} {...F} fontWeight="bold">{f}</text>
                </g>
              )
            })}

            {/* Layer 2: Grid structure */}
            {factors.map((_, i) => (
              <line key={`gv${i}`} x1={OX + i * CELL} y1={OY}
                x2={OX + i * CELL} y2={OY + GRID_W}
                stroke={C.dim} strokeWidth={0.3} />
            ))}
            {factors.map((_, j) => (
              <line key={`gh${j}`} x1={OX} y1={OY + j * CELL}
                x2={OX + GRID_W} y2={OY + j * CELL}
                stroke={C.dim} strokeWidth={0.3} />
            ))}

            {/* Product grid */}
            {factors.map((col, i) =>
              factors.map((row, j) => {
                const x = OX + i * CELL
                const y = OY + j * CELL
                const key = `${col}x${row}`
                const owner = claimed[key]
                const product = col * row
                const isIntersection = selectedRow === row && selectedCol === col

                let textColor = C.faint
                let fillColor = 'transparent'
                let fillOp = 0
                if (owner === 1) { textColor = C.accent; fillColor = C.accent; fillOp = 0.2 }
                if (owner === 2) { textColor = C.fg; fillColor = C.fg; fillOp = 0.2 }

                return (
                  <g key={key}>
                    {/* Layer 3: Data fill */}
                    {owner && (
                      <rect x={x} y={y} width={CELL} height={CELL}
                        fill={fillColor} fillOpacity={fillOp} />
                    )}
                    {/* Intersection highlight */}
                    {isIntersection && !owner && (
                      <rect x={x} y={y} width={CELL} height={CELL}
                        fill={C.accent} fillOpacity={0.15}
                        stroke={C.accent} strokeWidth={2} />
                    )}
                    <text x={x + CELL / 2} y={y + CELL / 2 + 5} textAnchor="middle"
                      fill={owner ? textColor : isIntersection ? C.accent : C.faint}
                      fontSize={owner ? 13 : 11} {...F}
                      fontWeight={owner ? 'bold' : 'normal'}>
                      {product}
                    </text>
                  </g>
                )
              })
            )}

            {/* Grid border */}
            <rect x={OX} y={OY} width={GRID_W} height={GRID_W}
              fill="none" stroke={C.dim} strokeWidth={1} />
          </svg>
        </div>

        {/* Layer 5 */}
        <InstructionText C={C}>{instruction}</InstructionText>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
          <button style={btnStyle(false, C)} onClick={handleReset} aria-label="New game">NEW GAME</button>
        </div>
      </div>
    </ToolShell>
  )
}
