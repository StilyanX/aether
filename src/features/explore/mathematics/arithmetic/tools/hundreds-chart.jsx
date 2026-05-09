import { useState, useMemo } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, F, InstructionText, ToggleButtonGroup, isPrime } from './shared'

const MODES = [
  { value: 'click', label: 'CLICK' },
  { value: 'multiples-of-2', label: '2S' },
  { value: 'multiples-of-3', label: '3S' },
  { value: 'multiples-of-5', label: '5S' },
  { value: 'multiples-of-10', label: '10S' },
  { value: 'primes', label: 'PRIMES' },
  { value: 'odd-even', label: 'ODD / EVEN' }
]

const INSTRUCTION_MAP = {
  'click': 'CLICK CELLS TO HIGHLIGHT',
  'multiples-of-2': 'MULTIPLES OF 2 HIGHLIGHTED',
  'multiples-of-3': 'MULTIPLES OF 3 HIGHLIGHTED',
  'multiples-of-5': 'MULTIPLES OF 5 HIGHLIGHTED',
  'multiples-of-10': 'MULTIPLES OF 10 HIGHLIGHTED',
  'primes': 'PRIME NUMBERS HIGHLIGHTED',
  'odd-even': 'ODD NUMBERS HIGHLIGHTED'
}

function getAutoHighlighted(mode) {
  const s = new Set()
  for (let n = 1; n <= 100; n++) {
    if (mode === 'multiples-of-2' && n % 2 === 0) s.add(n)
    else if (mode === 'multiples-of-3' && n % 3 === 0) s.add(n)
    else if (mode === 'multiples-of-5' && n % 5 === 0) s.add(n)
    else if (mode === 'multiples-of-10' && n % 10 === 0) s.add(n)
    else if (mode === 'primes' && isPrime(n)) s.add(n)
    else if (mode === 'odd-even' && n % 2 === 1) s.add(n)
  }
  return s
}

export default function HundredsChart({ toolName, onBack }) {
  const C = useVizColors()
  const [mode, setMode] = useState('click')
  const [clicked, setClicked] = useState(new Set())

  const highlighted = useMemo(() => mode === 'click' ? clicked : getAutoHighlighted(mode), [mode, clicked])
  const handleReset = () => { setMode('click'); setClicked(new Set()) }

  const cellSize = 50, padX = 56, padY = 40, headerH = 24
  const gridW = 10 * cellSize
  const gridH = 10 * cellSize
  const svgW = gridW + padX * 2
  const svgH = gridH + padY + headerH + 30

  const toggleCell = n => {
    if (mode !== 'click') return
    setClicked(prev => { const s = new Set(prev); s.has(n) ? s.delete(n) : s.add(n); return s })
  }

  const pct = ((highlighted.size / 100) * 100).toFixed(0)

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Mode selector using ToggleButtonGroup */}
        <ToggleButtonGroup options={MODES} value={mode} onChange={setMode} C={C} />

        <div className="lrn-graph" style={{ marginTop: 16 }}>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Layer 6: Count + percentage header */}
            <text x={svgW / 2} y={20} textAnchor="middle"
              fill={C.fg} fontSize={14} fontWeight="bold" {...F}>
              {highlighted.size} HIGHLIGHTED ({pct}%)
            </text>

            {/* Layer 2: Column headers 1-10 */}
            {Array.from({ length: 10 }, (_, col) => (
              <text key={`ch${col}`} x={padX + col * cellSize + cellSize / 2} y={padY + headerH - 6}
                textAnchor="middle" fill={C.dim} fontSize={10} {...F} letterSpacing="0.04em">
                {col + 1}
              </text>
            ))}

            {Array.from({ length: 10 }, (_, row) => {
              const y = padY + headerH + row * cellSize
              return (
                <g key={`row${row}`}>
                  {/* Layer 1: Alternating row fills */}
                  <rect x={padX} y={y} width={gridW} height={cellSize}
                    fill={C.faint} fillOpacity={row % 2 === 0 ? 0.03 : 0.06} />

                  {/* Layer 2: Decade labels on left */}
                  <text x={padX - 10} y={y + cellSize / 2 + 4}
                    textAnchor="end" fill={C.dim} fontSize={10} {...F}>
                    {row * 10 + 1}-{row * 10 + 10}
                  </text>

                  {/* Cells in this row */}
                  {Array.from({ length: 10 }, (_, col) => {
                    const n = row * 10 + col + 1
                    const x = padX + col * cellSize
                    const on = highlighted.has(n)
                    return (
                      <g key={n} onClick={() => toggleCell(n)}
                        style={{ cursor: mode === 'click' ? 'pointer' : 'default' }}
                        role="button" tabIndex={0} aria-label={`Number ${n}`}
                        onKeyDown={e => { if (e.key === 'Enter') toggleCell(n) }}>
                        {/* Layer 3: Highlight fill */}
                        <rect x={x} y={y} width={cellSize} height={cellSize}
                          fill={on ? C.accent : 'transparent'}
                          fillOpacity={on ? 0.25 : 0}
                          stroke={C.faint} strokeWidth={1} />
                        <text x={x + cellSize / 2} y={y + cellSize / 2 + 5} textAnchor="middle"
                          fill={on ? C.fg : C.dim} fontSize={13} {...F}>
                          {n}
                        </text>
                      </g>
                    )
                  })}
                </g>
              )
            })}
          </svg>
        </div>

        {/* Layer 5: Instruction per mode */}
        <InstructionText C={C}>{INSTRUCTION_MAP[mode]}</InstructionText>
      </div>
    </ToolShell>
  )
}
