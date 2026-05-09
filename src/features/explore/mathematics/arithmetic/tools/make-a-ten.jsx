import { useState } from 'react'
import ToolShell from './tool-shell'
import {
  useVizColors,
  SliderControl,
  btnStyle,
  F,
  InstructionText,
  MeasurementBracket,
  DashedConnector,
  StepIndicator
} from './shared'

const INIT = { a: 8, b: 5, step: 0 }

export default function MakeATen({ toolName, onBack }) {
  const C = useVizColors()
  const [state, setState] = useState(INIT)
  const { a, b, step } = state
  const set = patch => setState(s => ({ ...s, ...patch }))

  const handleReset = () => setState(INIT)

  const toMove = 10 - a
  const remainder = b - toMove
  const valid = a + b > 10 && a < 10 && b < 10 && toMove <= b && toMove > 0

  // Ten-frame layout
  const frameW = 200,
    cellW = 40,
    cellH = 50
  const frameLeftX = 60,
    frameRightX = 350
  const frameY = 60

  const cellPos = (frame, idx) => {
    const col = idx % 5
    const row = Math.floor(idx / 5)
    const fx = frame === 0 ? frameLeftX : frameRightX
    return { x: fx + col * cellW, y: frameY + row * cellH }
  }

  const svgH = 360

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <SliderControl
          label="A"
          value={a}
          onChange={v => set({ a: v, step: 0 })}
          min={1}
          max={9}
          C={C}
        />
        <SliderControl
          label="B"
          value={b}
          onChange={v => set({ b: v, step: 0 })}
          min={1}
          max={9}
          C={C}
        />

        {!valid && (
          <div
            style={{
              fontFamily: 'var(--reader-font-family)',
              fontSize: 12,
              color: C.dim,
              margin: '8px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}
          >
            CHOOSE A + B GREATER THAN 10 WITH BOTH UNDER 10
          </div>
        )}

        {valid && (
          <div style={{ display: 'flex', gap: 8, margin: '12px 0', alignItems: 'center' }}>
            <button style={btnStyle(false, C)} onClick={() => set({ step: Math.max(step - 1, 0) })}>
              PREV
            </button>
            <button style={btnStyle(false, C)} onClick={() => set({ step: Math.min(step + 1, 3) })}>
              NEXT
            </button>
            <StepIndicator current={step} total={3} C={C} />
          </div>
        )}

        <div className="lrn-graph" style={{ marginTop: 16 }}>
          <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Frame labels */}
            <text
              x={frameLeftX + frameW / 2}
              y={frameY - 12}
              textAnchor="middle"
              fill={C.dim}
              fontSize={11}
              {...F}
            >
              FRAME A
            </text>
            <text
              x={frameRightX + frameW / 2}
              y={frameY - 12}
              textAnchor="middle"
              fill={C.dim}
              fontSize={11}
              {...F}
            >
              FRAME B
            </text>

            {/* Draw both ten-frames */}
            {[0, 1].map(frame => (
              <g key={frame}>
                {Array.from({ length: 10 }, (_, i) => {
                  const { x, y } = cellPos(frame, i)
                  const col = i % 5
                  return (
                    <rect
                      key={i}
                      x={x}
                      y={y}
                      width={cellW}
                      height={cellH}
                      fill={C.fg}
                      fillOpacity={col % 2 === 0 ? 0.04 : 0.08}
                      stroke={C.faint}
                      strokeWidth={1}
                    />
                  )
                })}
                {/* Frame border */}
                <rect
                  x={frame === 0 ? frameLeftX : frameRightX}
                  y={frameY}
                  width={5 * cellW}
                  height={2 * cellH}
                  fill="none"
                  stroke={C.dim}
                  strokeWidth={1.5}
                />
              </g>
            ))}

            {/* Counters in frame A */}
            {(() => {
              const aCount = valid && step >= 2 ? Math.min(a + toMove, 10) : a
              return Array.from({ length: aCount }, (_, i) => {
                const { x, y } = cellPos(0, i)
                const isTransferred = valid && i >= a
                return (
                  <circle
                    key={`a${i}`}
                    cx={x + cellW / 2}
                    cy={y + cellH / 2}
                    r={16}
                    fill={isTransferred ? C.accent : C.fg}
                    fillOpacity={isTransferred ? 0.3 : 0.25}
                    stroke={isTransferred ? C.accent : C.fg}
                    strokeWidth={1.5}
                  />
                )
              })
            })()}

            {/* Counters in frame B */}
            {(() => {
              const bCount = valid && step >= 2 ? remainder : b
              return Array.from({ length: bCount }, (_, i) => {
                const { x, y } = cellPos(1, i)
                const willMove = valid && step === 1 && i >= b - toMove
                return (
                  <circle
                    key={`b${i}`}
                    cx={x + cellW / 2}
                    cy={y + cellH / 2}
                    r={16}
                    fill={willMove ? C.accent : C.fg}
                    fillOpacity={willMove ? 0.3 : 0.2}
                    stroke={willMove ? C.accent : C.dim}
                    strokeWidth={willMove ? 2 : 1}
                  />
                )
              })
            })()}

            {/* Layer 4: DashedConnector curved arrow at step 2 */}
            {valid &&
              step === 2 &&
              (() => {
                const fromX = frameRightX + 20
                const toX = frameLeftX + frameW - 20
                const midX = (fromX + toX) / 2
                const arcY = frameY - 30
                return (
                  <g>
                    <path
                      d={`M ${fromX} ${frameY + 10} Q ${midX} ${arcY} ${toX} ${frameY + 10}`}
                      fill="none"
                      stroke={C.dim}
                      strokeWidth={1}
                      strokeDasharray="4 4"
                    />
                    <polygon
                      points={`${toX},${frameY + 10} ${toX + 6},${frameY + 4} ${toX + 6},${frameY + 16}`}
                      fill={C.dim}
                    />
                    <text
                      x={midX}
                      y={arcY - 6}
                      textAnchor="middle"
                      fill={C.dim}
                      fontSize={10}
                      {...F}
                    >
                      MOVE {toMove}
                    </text>
                  </g>
                )
              })()}

            {/* Layer 4: MeasurementBracket below Frame A at step 1 */}
            {valid && step === 1 && (
              <MeasurementBracket
                x1={frameLeftX}
                x2={frameLeftX + frameW}
                y={frameY + 2 * cellH + 12}
                label={`NEED ${toMove} MORE`}
                C={C}
                direction="below"
                tickH={5}
              />
            )}

            {/* Layer 6: Step equation with bold changing part */}
            {valid &&
              (() => {
                const eqY = frameY + 2 * cellH + 60
                const equations = [
                  { text: `${a} + ${b}`, bold: true },
                  {
                    parts: [
                      { text: `${a} + (`, bold: false },
                      { text: `${toMove}`, bold: true },
                      { text: ` + ${remainder})`, bold: false }
                    ]
                  },
                  {
                    parts: [
                      { text: `(${a} + `, bold: false },
                      { text: `${toMove}`, bold: true },
                      { text: `) + ${remainder}`, bold: false }
                    ]
                  },
                  { text: `10 + ${remainder} = ${a + b}`, bold: true }
                ]
                const eq = equations[step]

                if (eq.parts) {
                  let xOff = 0
                  // Approximate centering
                  const fullText = eq.parts.map(p => p.text).join('')
                  const approxW = fullText.length * 9
                  const startX = 310 - approxW / 2
                  return eq.parts.map((p, pi) => {
                    const el = (
                      <text
                        key={pi}
                        x={startX + xOff}
                        y={eqY}
                        fill={p.bold ? C.fg : C.dim}
                        fontSize={16}
                        {...F}
                        fontWeight={p.bold ? 'bold' : 'normal'}
                      >
                        {p.text}
                      </text>
                    )
                    xOff += p.text.length * 9
                    return el
                  })
                }
                return (
                  <text
                    x={310}
                    y={eqY}
                    textAnchor="middle"
                    fill={C.fg}
                    fontSize={16}
                    {...F}
                    fontWeight={eq.bold ? 'bold' : 'normal'}
                  >
                    {eq.text}
                  </text>
                )
              })()}

            {/* Step description */}
            {valid && step === 1 && (
              <text x={310} y={svgH - 16} textAnchor="middle" fill={C.dim} fontSize={11} {...F}>
                TAKE {toMove} FROM B TO FILL A TO 10
              </text>
            )}
            {valid && step === 2 && (
              <text x={310} y={svgH - 16} textAnchor="middle" fill={C.dim} fontSize={11} {...F}>
                MOVE {toMove} COUNTER{toMove !== 1 ? 'S' : ''} INTO FRAME A
              </text>
            )}
            {valid && step === 3 && (
              <text
                x={310}
                y={svgH - 16}
                textAnchor="middle"
                fill={C.fg}
                fontSize={14}
                {...F}
                fontWeight="bold"
              >
                FRAME A IS FULL (10) + {remainder} REMAINING = {a + b}
              </text>
            )}
          </svg>
        </div>

        {/* Layer 5 */}
        <InstructionText C={C}>STEP THROUGH THE MAKE-A-TEN STRATEGY</InstructionText>
      </div>
    </ToolShell>
  )
}
