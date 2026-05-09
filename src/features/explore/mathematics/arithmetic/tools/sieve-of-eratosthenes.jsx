import { useState, useMemo } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, btnStyle, F, InstructionText, StepIndicator } from './shared'

const PRIMES_ORDER = [2, 3, 5, 7]

function computeSieve(step) {
  const crossed = new Set()
  for (let s = 0; s < step && s < PRIMES_ORDER.length; s++) {
    const p = PRIMES_ORDER[s]
    for (let m = p * 2; m <= 100; m += p) crossed.add(m)
  }
  return crossed
}

const STEP_INSTRUCTIONS = [
  'ALL NUMBERS FROM 1 TO 100. PRESS NEXT TO BEGIN.',
  'CROSSING OUT MULTIPLES OF 2 (KEEP 2 ITSELF)',
  'CROSSING OUT MULTIPLES OF 3 (KEEP 3 ITSELF)',
  'CROSSING OUT MULTIPLES OF 5 (KEEP 5 ITSELF)',
  'CROSSING OUT MULTIPLES OF 7 (KEEP 7 ITSELF)',
  'SIEVE COMPLETE. ALL REMAINING NUMBERS ARE PRIME.'
]

export default function SieveOfEratosthenes({ toolName, onBack }) {
  const C = useVizColors()
  const [step, setStep] = useState(0)
  const handleReset = () => setStep(0)

  const crossed = useMemo(() => computeSieve(step), [step])
  const currentPrime = step > 0 && step <= 4 ? PRIMES_ORDER[step - 1] : null
  const done = step >= 5
  const primeCount = useMemo(() => {
    let count = 0
    for (let n = 2; n <= 100; n++) if (!crossed.has(n)) count++
    return count
  }, [crossed])

  const cellSize = 50,
    padX = 56,
    padY = 40,
    headerH = 24
  const gridW = 10 * cellSize
  const svgW = gridW + padX * 2
  const svgH = 10 * cellSize + padY + headerH + 10

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        {/* Step indicator + count */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12
          }}
        >
          <StepIndicator current={step} total={5} C={C} />
          <span
            style={{
              fontFamily: 'var(--reader-font-family)',
              fontSize: 11,
              color: C.dim,
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}
          >
            {done ? `${primeCount} PRIMES FOUND` : `${crossed.size} CROSSED OUT`}
          </span>
        </div>

        <div className="lrn-graph">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Layer 6: Current action header */}
            {currentPrime && (
              <text
                x={svgW / 2}
                y={22}
                textAnchor="middle"
                fill={C.fg}
                fontSize={14}
                fontWeight="bold"
                {...F}
              >
                SIEVING MULTIPLES OF {currentPrime}
              </text>
            )}
            {done && (
              <text
                x={svgW / 2}
                y={22}
                textAnchor="middle"
                fill={C.fg}
                fontSize={14}
                fontWeight="bold"
                {...F}
              >
                {primeCount} PRIMES BELOW 100
              </text>
            )}

            {Array.from({ length: 10 }, (_, row) => {
              const y = padY + headerH + row * cellSize
              return (
                <g key={`row${row}`}>
                  {/* Layer 1: Alternating row fills */}
                  <rect
                    x={padX}
                    y={y}
                    width={gridW}
                    height={cellSize}
                    fill={C.faint}
                    fillOpacity={row % 2 === 0 ? 0.02 : 0.04}
                  />

                  {Array.from({ length: 10 }, (_, col) => {
                    const n = row * 10 + col + 1
                    const x = padX + col * cellSize
                    const isOne = n === 1
                    const isCrossed = crossed.has(n)
                    const isCurrent = currentPrime === n
                    const isPrimeSurvivor = n >= 2 && !isCrossed
                    const isBeingSievedNow =
                      currentPrime &&
                      n > currentPrime &&
                      n % currentPrime === 0 &&
                      !computeSieve(step - 1).has(n)

                    // Layer 3: Fill logic
                    let fill = 'transparent'
                    let fillOp = 0
                    if (isCurrent) {
                      fill = C.accent
                      fillOp = 0.3
                    } else if (done && isPrimeSurvivor) {
                      fill = C.accent
                      fillOp = 0.25
                    } else if (isBeingSievedNow) {
                      fill = C.faint
                      fillOp = 0.1
                    }

                    const textColor = isOne || isCrossed ? C.faint : C.fg

                    return (
                      <g key={n}>
                        {/* Layer 2: Cell border */}
                        <rect
                          x={x}
                          y={y}
                          width={cellSize}
                          height={cellSize}
                          fill={fill}
                          fillOpacity={fillOp}
                          stroke={C.faint}
                          strokeWidth={1}
                        />

                        {/* Double-ring for current prime being sieved */}
                        {isCurrent && (
                          <rect
                            x={x + 3}
                            y={y + 3}
                            width={cellSize - 6}
                            height={cellSize - 6}
                            fill="none"
                            stroke={C.accent}
                            strokeWidth={1}
                          />
                        )}

                        {/* Cell number */}
                        <text
                          x={x + cellSize / 2}
                          y={y + cellSize / 2 + 5}
                          textAnchor="middle"
                          fill={textColor}
                          fontSize={13}
                          {...F}
                        >
                          {n}
                        </text>

                        {/* Layer 3: Diagonal cross-out (corner to corner) */}
                        {isCrossed && (
                          <>
                            <line
                              x1={x + 8}
                              y1={y + 8}
                              x2={x + cellSize - 8}
                              y2={y + cellSize - 8}
                              stroke={C.faint}
                              strokeWidth={1}
                            />
                            <line
                              x1={x + cellSize - 8}
                              y1={y + 8}
                              x2={x + 8}
                              y2={y + cellSize - 8}
                              stroke={C.faint}
                              strokeWidth={1}
                            />
                          </>
                        )}
                      </g>
                    )
                  })}
                </g>
              )
            })}
          </svg>
        </div>

        {/* Layer 5: Step-specific instruction */}
        <InstructionText C={C}>{STEP_INSTRUCTIONS[step]}</InstructionText>

        <div style={{ display: 'flex', gap: 8, marginTop: 12, justifyContent: 'center' }}>
          {!done && (
            <button style={btnStyle(true, C)} onClick={() => setStep(s => Math.min(s + 1, 5))}>
              NEXT STEP
            </button>
          )}
          <button style={btnStyle(false, C)} onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
    </ToolShell>
  )
}
