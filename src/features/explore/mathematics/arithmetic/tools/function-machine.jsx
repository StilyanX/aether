import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, ToggleButtonGroup, F, InstructionText } from './shared'

const OPS = [
  { value: '+', label: '+' },
  { value: '-', label: '-' },
  { value: 'x', label: '\u00d7' },
  { value: 'div', label: '\u00f7' }
]

const OP_DISPLAY = { '+': '+', '-': '-', 'x': '\u00d7', 'div': '\u00f7' }

function compute(input, op, operand) {
  switch (op) {
    case '+': return input + operand
    case '-': return input - operand
    case 'x': return input * operand
    case 'div': return operand !== 0 ? Math.round((input / operand) * 100) / 100 : 0
    default: return input
  }
}

const SVG_W = 620
const SVG_H = 160
const BOX_W = 120
const BOX_H = 70
const BOX_X = (SVG_W - BOX_W) / 2
const BOX_Y = 45
const MID_Y = BOX_Y + BOX_H / 2

export default function FunctionMachine({ toolName, onBack }) {
  const C = useVizColors()
  const [input, setInput] = useState(5)
  const [op, setOp] = useState('+')
  const [operand, setOperand] = useState(3)

  const handleReset = () => { setInput(5); setOp('+'); setOperand(3) }

  const output = compute(input, op, operand)
  const eqStr = `${input} ${OP_DISPLAY[op]} ${operand} = ${output}`

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <SliderControl label="INPUT" value={input} onChange={setInput} min={0} max={100} C={C} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
          <span style={{ ...F, fontSize: 11, color: C.dim, minWidth: 100, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            OPERATION
          </span>
          <ToggleButtonGroup options={OPS} value={op} onChange={setOp} C={C} />
        </div>

        <SliderControl label="OPERAND" value={operand} onChange={setOperand} min={1} max={50} C={C} />

        <div className="lrn-graph" style={{ marginTop: 12 }}>
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} width="100%" style={{ display: 'block' }}>
            {/* Input arrow */}
            <line x1={80} y1={MID_Y} x2={BOX_X - 2} y2={MID_Y}
              stroke={C.dim} strokeWidth={1.5} />
            <polygon points={`${BOX_X - 8},${MID_Y - 4} ${BOX_X},${MID_Y} ${BOX_X - 8},${MID_Y + 4}`}
              fill={C.dim} />

            {/* Input value */}
            <text x={80} y={MID_Y - 12} textAnchor="start"
              fill={C.fg} fontSize={18} {...F} fontWeight="bold">
              {input}
            </text>

            {/* Machine box */}
            <rect x={BOX_X} y={BOX_Y} width={BOX_W} height={BOX_H}
              fill={C.fg} fillOpacity={0.06} stroke={C.fg} strokeWidth={1.5} />

            {/* Operation label inside box */}
            <text x={BOX_X + BOX_W / 2} y={MID_Y + 7} textAnchor="middle"
              fill={C.fg} fontSize={24} {...F} fontWeight="bold">
              {OP_DISPLAY[op]} {operand}
            </text>

            {/* Output arrow */}
            <line x1={BOX_X + BOX_W} y1={MID_Y} x2={BOX_X + BOX_W + 80} y2={MID_Y}
              stroke={C.dim} strokeWidth={1.5} />
            <polygon points={`${BOX_X + BOX_W + 74},${MID_Y - 4} ${BOX_X + BOX_W + 82},${MID_Y} ${BOX_X + BOX_W + 74},${MID_Y + 4}`}
              fill={C.dim} />

            {/* Output value */}
            <text x={BOX_X + BOX_W + 90} y={MID_Y - 12} textAnchor="start"
              fill={C.fg} fontSize={18} {...F} fontWeight="bold">
              {output}
            </text>

            {/* Equation */}
            <text x={SVG_W / 2} y={BOX_Y + BOX_H + 36} textAnchor="middle"
              fill={C.fg} fontSize={16} {...F} fontWeight="bold">
              {eqStr}
            </text>
          </svg>
        </div>

        <InstructionText C={C}>SLIDE TO CHANGE INPUT AND OPERATION</InstructionText>
      </div>
    </ToolShell>
  )
}
