import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, btnStyle, F, InstructionText } from './shared'

const INIT = { jumps: [], startPoint: 0, jumpSize: 3, mode: 'add' }

export default function NumberLine({ toolName, onBack }) {
  const C = useVizColors()
  const [state, setState] = useState(INIT)
  const { jumps, startPoint, jumpSize, mode } = state
  const set = patch => setState(s => ({ ...s, ...patch }))
  const handleReset = () => setState(INIT)

  const currentPos = jumps.length === 0
    ? startPoint
    : jumps[jumps.length - 1].from + jumps[jumps.length - 1].size

  const addJump = () => {
    const from = jumps.length === 0 ? startPoint : currentPos
    const size = mode === 'add' ? Math.abs(jumpSize) : -Math.abs(jumpSize)
    set({ jumps: [...jumps, { from, size }] })
  }

  // Auto-compute range from all points
  const allPoints = [startPoint]
  let pos = startPoint
  for (const j of jumps) { pos = j.from + j.size; allPoints.push(j.from, pos) }
  // Also include where next jump would land
  const nextSize = mode === 'add' ? Math.abs(jumpSize) : -Math.abs(jumpSize)
  allPoints.push(currentPos + nextSize)

  const dataMin = Math.min(...allPoints)
  const dataMax = Math.max(...allPoints)
  const rangeStart = Math.min(dataMin - 2, -1)
  const rangeEnd = Math.max(dataMax + 2, 20)

  // SVG layout
  const padX = 40, lineY = 100, svgW = 620
  const lineLeft = padX + 10, lineRight = svgW - padX - 10
  const lineLen = lineRight - lineLeft
  const range = rangeEnd - rangeStart || 1

  const toX = val => lineLeft + ((val - rangeStart) / range) * lineLen

  // Tick spacing
  const rawStep = range <= 20 ? 1 : range <= 50 ? 5 : 10
  const ticks = []
  for (let v = Math.ceil(rangeStart / rawStep) * rawStep; v <= rangeEnd; v += rawStep) ticks.push(v)

  // Expression string
  let expr = ''
  if (jumps.length > 0) {
    expr = `${jumps[0].from}`
    for (const j of jumps) {
      expr += j.size >= 0 ? ` + ${j.size}` : ` - ${Math.abs(j.size)}`
    }
    expr += ` = ${currentPos}`
  }

  const svgH = 180

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <SliderControl label="START" value={startPoint} onChange={v => set({ startPoint: v, jumps: [] })} min={-20} max={50} C={C} />
        <SliderControl label="JUMP SIZE" value={jumpSize} onChange={v => set({ jumpSize: v })} min={1} max={20} C={C} />

        <div style={{ display: 'flex', gap: 8, margin: '12px 0', flexWrap: 'wrap' }}>
          <button style={btnStyle(mode === 'add', C)} onClick={() => set({ mode: 'add' })}>ADD</button>
          <button style={btnStyle(mode === 'subtract', C)} onClick={() => set({ mode: 'subtract' })}>SUBTRACT</button>
          <button style={{ ...btnStyle(false, C), borderColor: C.accent }} onClick={addJump}>ADD JUMP</button>
          <button style={{ ...btnStyle(false, C), opacity: jumps.length ? 1 : 0.3 }}
            disabled={!jumps.length} onClick={() => set({ jumps: [] })}>CLEAR</button>
        </div>

        <div className="lrn-graph">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Alternating fills */}
            {ticks.map((v, i) => {
              if (i >= ticks.length - 1) return null
              const x1 = toX(v), x2 = toX(ticks[i + 1])
              return (
                <rect key={`bg-${i}`} x={x1} y={lineY - 24} width={x2 - x1} height={48}
                  fill={C.fg} fillOpacity={i % 2 === 0 ? 0.03 : 0.06} />
              )
            })}

            {/* Number line */}
            <line x1={lineLeft} y1={lineY} x2={lineRight} y2={lineY}
              stroke={C.dim} strokeWidth={2} />

            {/* Ticks */}
            {ticks.map(v => (
              <g key={v}>
                <line x1={toX(v)} y1={lineY - 6} x2={toX(v)} y2={lineY + 6}
                  stroke={C.dim} strokeWidth={1} />
                <text x={toX(v)} y={lineY + 20} textAnchor="middle"
                  fill={C.dim} fontSize={11} {...F}>
                  {v}
                </text>
              </g>
            ))}

            {/* Jump arcs */}
            {jumps.map((j, i) => {
              const x1 = toX(j.from)
              const x2 = toX(j.from + j.size)
              const arcH = 20 + Math.min(Math.abs(x2 - x1) * 0.3, 50)
              const midX = (x1 + x2) / 2
              const isForward = j.size >= 0
              const color = isForward ? C.fg : C.accent
              const markerId = `arrow-${i}`

              return (
                <g key={i}>
                  <defs>
                    <marker id={markerId} viewBox="0 0 10 10" refX="8" refY="5"
                      markerWidth={5} markerHeight={5} orient="auto-start-reverse">
                      <path d="M 0 1 L 10 5 L 0 9 z" fill={color} />
                    </marker>
                  </defs>
                  <path
                    d={`M ${x1} ${lineY} Q ${midX} ${lineY - arcH} ${x2} ${lineY}`}
                    fill="none" stroke={color} strokeWidth={1.5}
                    markerEnd={`url(#${markerId})`} />
                  <text x={midX} y={lineY - arcH - 4} textAnchor="middle"
                    fill={color} fontSize={12} {...F} fontWeight="bold">
                    {j.size >= 0 ? `+${j.size}` : j.size}
                  </text>
                </g>
              )
            })}

            {/* Start point */}
            <circle cx={toX(startPoint)} cy={lineY} r={5}
              fill={C.accent} fillOpacity={0.3} stroke={C.fg} strokeWidth={1.5} />

            {/* Current position dot */}
            {jumps.length > 0 && (
              <circle cx={toX(currentPos)} cy={lineY} r={5}
                fill={C.fg} stroke={C.fg} strokeWidth={1.5} />
            )}

            {/* Expression */}
            {expr && (
              <text x={svgW / 2} y={svgH - 10} textAnchor="middle"
                fill={C.fg} fontSize={14} {...F} fontWeight="bold">
                {expr}
              </text>
            )}
          </svg>
        </div>

        <InstructionText C={C}>SET START AND JUMP SIZE, THEN ADD JUMPS</InstructionText>
      </div>
    </ToolShell>
  )
}
