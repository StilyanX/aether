import { useState, useCallback } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, btnStyle, F, InstructionText, StepIndicator } from './shared'

const COLS = 6, ROWS = 3

// Puzzle 1: Fill the Container
function Puzzle1({ C }) {
  const [filled, setFilled] = useState(new Set())
  const total = COLS * ROWS
  const done = filled.size === total
  const progress = filled.size / total

  const toggle = useCallback(idx => {
    setFilled(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }, [])

  const cellW = 56, cellH = 56, gap = 4
  const gridW = COLS * (cellW + gap) - gap
  const ox = (620 - gridW) / 2
  const oy = 70

  return (
    <>
      <svg viewBox="0 0 620 340" width="100%" style={{ display: 'block' }}>
        {/* Title */}
        <text x={310} y={30} textAnchor="middle" fill={C.fg} fontSize={14} {...F} fontWeight="bold">
          FILL THE CONTAINER
        </text>

        {/* Layer 1: Container outline + alternating cell fills */}
        <rect x={ox - 6} y={oy - 6} width={gridW + 12} height={ROWS * (cellH + gap) - gap + 12}
          fill="transparent" stroke={C.dim} strokeWidth={1.5} />

        {Array.from({ length: total }, (_, i) => {
          const col = i % COLS
          const row = Math.floor(i / COLS)
          const x = ox + col * (cellW + gap)
          const y = oy + row * (cellH + gap)
          const isFilled = filled.has(i)
          return (
            <g key={i} onClick={() => toggle(i)} style={{ cursor: 'pointer' }}>
              {/* Layer 1: Alternating fill */}
              <rect x={x} y={y} width={cellW} height={cellH}
                fill={C.fg} fillOpacity={i % 2 === 0 ? 0.04 : 0.08} />
              {/* Layer 3: Data fill when selected */}
              {isFilled && (
                <rect x={x + 2} y={y + 2} width={cellW - 4} height={cellH - 4}
                  fill={C.accent} fillOpacity={0.3} />
              )}
              {/* Layer 2: Structure border */}
              <rect x={x} y={y} width={cellW} height={cellH}
                fill="transparent" stroke={isFilled ? C.accent : C.dim} strokeWidth={isFilled ? 1.5 : 0.5} />
            </g>
          )
        })}

        {/* Progress bar */}
        <rect x={ox} y={oy - 20} width={gridW} height={4}
          fill={C.dim} fillOpacity={0.2} />
        <rect x={ox} y={oy - 20} width={gridW * progress} height={4}
          fill={done ? C.accent : C.fg} fillOpacity={0.7} />

        {/* Count */}
        <text x={310} y={oy + ROWS * (cellH + gap) + 20} textAnchor="middle"
          fill={C.dim} fontSize={12} {...F}>
          {filled.size} OF {total} FILLED
        </text>

        {/* Layer 6: Result */}
        {done && (
          <text x={310} y={oy + ROWS * (cellH + gap) + 42} textAnchor="middle"
            fill={C.fg} fontSize={16} {...F} fontWeight="bold">
            COMPLETE
          </text>
        )}
      </svg>
      <InstructionText C={C}>CLICK CELLS TO FILL THE CONTAINER</InstructionText>
    </>
  )
}

// Puzzle 2: Complete the Equation
function Puzzle2({ C }) {
  const [selected, setSelected] = useState(null)
  const a = 7, total = 12
  const answer = total - a
  const options = [3, 4, 5, 6]

  const isCorrect = selected === answer
  const isWrong = selected !== null && selected !== answer

  const ox = 140, oy = 100
  const optY = 200, optGap = 80

  return (
    <>
      <svg viewBox="0 0 620 340" width="100%" style={{ display: 'block' }}>
        {/* Title */}
        <text x={310} y={30} textAnchor="middle" fill={C.fg} fontSize={14} {...F} fontWeight="bold">
          COMPLETE THE EQUATION
        </text>

        {/* Layer 1: Background */}
        <rect x={ox - 20} y={oy - 30} width={370} height={60}
          fill={C.fg} fillOpacity={0.04} />

        {/* Equation: 7 + ? = 12 */}
        <text x={ox} y={oy} fill={C.fg} fontSize={32} {...F} fontWeight="bold">{a}</text>
        <text x={ox + 60} y={oy} fill={C.dim} fontSize={32} {...F}>+</text>
        {/* The blank */}
        <rect x={ox + 100} y={oy - 28} width={50} height={40}
          fill={C.accent} fillOpacity={selected !== null ? 0.2 : 0.08}
          stroke={C.accent} strokeWidth={1.5} />
        <text x={ox + 125} y={oy} textAnchor="middle"
          fill={selected !== null ? C.fg : C.accent} fontSize={28} {...F} fontWeight="bold">
          {selected !== null ? selected : '?'}
        </text>
        <text x={ox + 180} y={oy} fill={C.dim} fontSize={32} {...F}>=</text>
        <text x={ox + 230} y={oy} fill={C.fg} fontSize={32} {...F} fontWeight="bold">{total}</text>

        {/* Options */}
        <text x={310} y={optY - 10} textAnchor="middle" fill={C.dim} fontSize={11} {...F}>
          CHOOSE THE ANSWER
        </text>

        {options.map((opt, i) => {
          const cx = 160 + i * optGap
          const isSel = selected === opt
          const optCorrect = opt === answer && selected !== null
          const optWrong = isSel && opt !== answer
          let stroke = C.dim
          let fillOp = 0.04
          if (optCorrect) { stroke = C.accent; fillOp = 0.2 }
          if (optWrong) { stroke = C.fg; fillOp = 0.1 }

          return (
            <g key={opt} onClick={() => { if (selected === null) setSelected(opt) }}
              style={{ cursor: selected === null ? 'pointer' : 'default' }}>
              <circle cx={cx} cy={optY + 30} r={28}
                fill={C.fg} fillOpacity={fillOp}
                stroke={stroke} strokeWidth={isSel ? 2 : 1} />
              <text x={cx} y={optY + 36} textAnchor="middle"
                fill={optCorrect ? C.accent : optWrong ? C.dim : C.fg}
                fontSize={20} {...F} fontWeight="bold">{opt}</text>
            </g>
          )
        })}

        {/* Layer 6: Result */}
        {isCorrect && (
          <text x={310} y={300} textAnchor="middle" fill={C.fg} fontSize={16} {...F} fontWeight="bold">
            CORRECT! {a} + {answer} = {total}
          </text>
        )}
        {isWrong && (
          <text x={310} y={300} textAnchor="middle" fill={C.dim} fontSize={14} {...F}>
            TRY AGAIN
          </text>
        )}
      </svg>
      <InstructionText C={C}>CLICK THE NUMBER THAT COMPLETES THE EQUATION</InstructionText>
    </>
  )
}

// Triangular dot layout helper
function triDots(n) {
  const dots = []
  let row = 0, count = 0
  while (count < n) {
    const rowCount = row + 1
    for (let col = 0; col < rowCount && count < n; col++) {
      dots.push({ x: col, y: row })
      count++
    }
    row++
  }
  return dots
}

// Puzzle 3: Pattern (Triangular Numbers)
function Puzzle3({ C }) {
  const [selected, setSelected] = useState(null)
  const correct = 10
  const options = [8, 10, 12]
  const sequence = [1, 3, 6]

  const dotR = 6, dotGap = 18
  const sectionW = 120, startX = 70

  return (
    <>
      <svg viewBox="0 0 620 360" width="100%" style={{ display: 'block' }}>
        <text x={310} y={30} textAnchor="middle" fill={C.fg} fontSize={14} {...F} fontWeight="bold">
          WHAT COMES NEXT?
        </text>

        {/* Sequence: 1, 3, 6, ? */}
        {sequence.map((val, idx) => {
          const ox = startX + idx * sectionW
          const dots = triDots(val)
          const patY = 60
          return (
            <g key={idx}>
              <rect x={ox - 8} y={46} width={sectionW - 8} height={90}
                fill={C.fg} fillOpacity={idx % 2 === 0 ? 0.04 : 0.08} />
              {dots.map((d, i) => (
                <circle key={i} cx={ox + 10 + d.x * dotGap} cy={patY + d.y * dotGap}
                  r={dotR} fill={C.accent} fillOpacity={0.3} stroke={C.accent} strokeWidth={1} />
              ))}
              <text x={ox + 10 + (idx * dotGap) / 2} y={patY + 78}
                fill={C.fg} fontSize={16} {...F} fontWeight="bold">{val}</text>
            </g>
          )
        })}

        {/* Question mark box */}
        <g>
          <rect x={startX + 3 * sectionW - 8} y={46} width={sectionW - 8} height={90}
            fill={C.accent} fillOpacity={0.04} stroke={C.accent} strokeWidth={1} strokeDasharray="4 4" />
          <text x={startX + 3 * sectionW + 48} y={100} textAnchor="middle"
            fill={C.accent} fontSize={32} {...F} fontWeight="bold">?</text>
        </g>

        {/* Options */}
        <text x={310} y={170} textAnchor="middle" fill={C.dim} fontSize={11} {...F}>
          CHOOSE THE ANSWER
        </text>

        {options.map((opt, i) => {
          const cx = 180 + i * 130
          const isSel = selected === opt
          const isCorrectOpt = selected !== null && opt === correct
          const isWrongOpt = selected === opt && opt !== correct
          let stroke = C.dim, fillOp = 0.04
          if (isCorrectOpt) { stroke = C.accent; fillOp = 0.15 }
          if (isWrongOpt) { stroke = C.dim; fillOp = 0.08 }

          const dots = triDots(opt)
          const dotSize = 4, dGap = 12
          const boxSize = 90
          const patStartY = 195

          return (
            <g key={opt} onClick={() => { if (!selected) setSelected(opt) }}
              style={{ cursor: selected === null ? 'pointer' : 'default' }}>
              <rect x={cx - 45} y={patStartY - 10} width={boxSize} height={boxSize}
                fill={C.fg} fillOpacity={fillOp}
                stroke={stroke} strokeWidth={isSel ? 2 : 1} />
              {dots.map((d, di) => (
                <circle key={di} cx={cx - 20 + d.x * dGap} cy={patStartY + 6 + d.y * dGap}
                  r={dotSize} fill={isCorrectOpt ? C.accent : C.fg} fillOpacity={0.3}
                  stroke={isCorrectOpt ? C.accent : C.dim} strokeWidth={0.5} />
              ))}
              <text x={cx} y={patStartY + boxSize - 16} textAnchor="middle"
                fill={isCorrectOpt ? C.accent : isWrongOpt ? C.dim : C.fg}
                fontSize={16} {...F} fontWeight="bold">{opt}</text>
            </g>
          )
        })}

        {/* Result */}
        {selected === correct && (
          <text x={310} y={340} textAnchor="middle" fill={C.fg} fontSize={14} {...F} fontWeight="bold">
            CORRECT! TRIANGULAR NUMBERS: 1, 3, 6, 10
          </text>
        )}
        {selected !== null && selected !== correct && (
          <text x={310} y={340} textAnchor="middle" fill={C.dim} fontSize={12} {...F}>
            NOT QUITE. LOOK AT THE GROWTH PATTERN.
          </text>
        )}
      </svg>
      <InstructionText C={C}>STUDY THE PATTERN AND SELECT WHAT COMES NEXT</InstructionText>
    </>
  )
}

const PUZZLES = [Puzzle1, Puzzle2, Puzzle3]
const PUZZLE_TITLES = ['FILL THE CONTAINER', 'COMPLETE THE EQUATION', 'WHAT COMES NEXT']

export default function VisualPuzzles({ toolName, onBack }) {
  const C = useVizColors()
  const [puzzleIdx, setPuzzleIdx] = useState(0)
  const [key, setKey] = useState(0)

  const handleReset = () => setKey(k => k + 1)
  const PuzzleComponent = PUZZLES[puzzleIdx]

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <button style={{ ...btnStyle(false, C), opacity: puzzleIdx === 0 ? 0.3 : 1 }}
            disabled={puzzleIdx === 0}
            onClick={() => { setPuzzleIdx(p => p - 1); setKey(k => k + 1) }}
            aria-label="Previous puzzle">
            PREV
          </button>
          <StepIndicator current={puzzleIdx + 1} total={PUZZLES.length} C={C} />
          <button style={{ ...btnStyle(false, C), opacity: puzzleIdx === PUZZLES.length - 1 ? 0.3 : 1 }}
            disabled={puzzleIdx === PUZZLES.length - 1}
            onClick={() => { setPuzzleIdx(p => p + 1); setKey(k => k + 1) }}
            aria-label="Next puzzle">
            NEXT
          </button>
        </div>

        <div className="lrn-graph">
          <PuzzleComponent key={key} C={C} />
        </div>
      </div>
    </ToolShell>
  )
}
