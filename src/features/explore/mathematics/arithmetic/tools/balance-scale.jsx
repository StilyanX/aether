import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, btnStyle, F, InstructionText } from './shared'

export default function BalanceScale({ toolName, onBack }) {
  const C = useVizColors()
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const handleReset = () => { setLeft(0); setRight(0) }

  const diff = left - right
  const angle = Math.max(-8, Math.min(8, diff * 0.4))
  const balanced = left === right && left > 0
  const symbol = left === right ? '=' : left > right ? '>' : '<'

  const svgW = 620, cx = 310, fulcrumY = 120, beamLen = 200
  const rad = (angle * Math.PI) / 180
  const lx = cx - Math.cos(rad) * beamLen
  const ly = fulcrumY - Math.sin(rad) * beamLen
  const rx = cx + Math.cos(rad) * beamLen
  const ry = fulcrumY + Math.sin(rad) * beamLen

  const stringLen = 50
  const panW = 120, panH = 60
  const lPanY = ly + stringLen
  const rPanY = ry + stringLen
  const svgH = 320

  // Draw weight number inside pan
  const renderWeight = (val, panCx, panY) => {
    if (val === 0) return null
    return (
      <text x={panCx} y={panY + panH / 2 + 6}
        textAnchor="middle" fill={C.fg} fontSize={20} {...F} fontWeight="bold">
        {val}
      </text>
    )
  }

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <SliderControl label="LEFT" value={left} onChange={setLeft} min={0} max={50} C={C} />
        <SliderControl label="RIGHT" value={right} onChange={setRight} min={0} max={50} C={C} />

        <div className="lrn-graph" style={{ marginTop: 12 }}>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Fulcrum */}
            <polygon
              points={`${cx},${fulcrumY} ${cx - 14},${fulcrumY + 20} ${cx + 14},${fulcrumY + 20}`}
              fill={C.dim} fillOpacity={0.3} stroke={C.dim} strokeWidth={1} />
            <rect x={cx - 36} y={fulcrumY + 20} width={72} height={5}
              fill={C.dim} fillOpacity={0.2} stroke={C.dim} strokeWidth={1} />

            {/* Beam */}
            <line x1={lx} y1={ly} x2={rx} y2={ry}
              stroke={C.fg} strokeWidth={3}
               />

            {/* Left string + pan */}
            <line x1={lx} y1={ly} x2={lx} y2={lPanY}
              stroke={C.dim} strokeWidth={1}  />
            <rect x={lx - panW / 2} y={lPanY} width={panW} height={panH}
              fill={C.fg} fillOpacity={0.04} stroke={C.dim} strokeWidth={1}
               />
            <g>
              {renderWeight(left, lx, lPanY)}
            </g>

            {/* Right string + pan */}
            <line x1={rx} y1={ry} x2={rx} y2={rPanY}
              stroke={C.dim} strokeWidth={1}  />
            <rect x={rx - panW / 2} y={rPanY} width={panW} height={panH}
              fill={C.fg} fillOpacity={0.04} stroke={C.dim} strokeWidth={1}
               />
            <g>
              {renderWeight(right, rx, rPanY)}
            </g>

            {/* Result */}
            <text x={cx} y={svgH - 20} textAnchor="middle"
              fill={balanced ? '#5a9' : C.fg} fontSize={18} {...F} fontWeight="bold">
              {left} {symbol} {right}
            </text>
            {balanced && (
              <text x={cx} y={svgH - 2} textAnchor="middle"
                fill="#5a9" fontSize={11} {...F} letterSpacing="0.06em">
                BALANCED
              </text>
            )}
          </svg>
        </div>

        <InstructionText C={C}>ADJUST SLIDERS TO COMPARE VALUES</InstructionText>
      </div>
    </ToolShell>
  )
}
