import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, F, InstructionText, MeasurementBracket } from './shared'

export default function NumberPairDecomposer({ toolName, onBack }) {
  const C = useVizColors()
  const [total, setTotal] = useState(10)
  const [split, setSplit] = useState(5)
  const right = total - split

  const handleReset = () => { setTotal(10); setSplit(5) }
  const handleTotalChange = v => { setTotal(v); if (split >= v) setSplit(v - 1) }

  const padX = 40, barY = 70, barH = 60
  const barW = 620 - padX * 2
  const splitX = padX + (split / total) * barW
  const leftBracketY = barY + barH + 18
  const totalBracketY = leftBracketY + 34
  const svgH = totalBracketY + 48

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <div className="lrn-graph">
          <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Layer 6: Result header */}
            <text x={310} y={barY - 26} textAnchor="middle"
              fill={C.fg} fontSize={16} fontWeight="bold" {...F}>
              {split} + {right} = {total}
            </text>
            <text x={310} y={barY - 10} textAnchor="middle"
              fill={C.dim} fontSize={11} {...F} letterSpacing="0.06em">
              DECOMPOSITION
            </text>

            {/* Layer 1: Left portion fill */}
            <rect x={padX} y={barY} width={splitX - padX} height={barH}
              fill={C.accent} fillOpacity={0.2} />

            {/* Layer 1: Right portion fill */}
            <rect x={splitX} y={barY} width={padX + barW - splitX} height={barH}
              fill={C.faint} fillOpacity={0.08} />

            {/* Layer 2: Outer border */}
            <rect x={padX} y={barY} width={barW} height={barH}
              fill="none" stroke={C.dim} strokeWidth={1} />

            {/* Layer 2: Dividing line (dashed) */}
            <line x1={splitX} y1={barY} x2={splitX} y2={barY + barH}
              stroke={C.fg} strokeWidth={1.5} strokeDasharray="4 4" />

            {/* Layer 3: Value labels inside bar */}
            {split > 0 && (
              <text x={padX + (splitX - padX) / 2} y={barY + barH / 2 + 6}
                textAnchor="middle" fill={C.fg} fontSize={18} fontWeight="bold" {...F}>{split}</text>
            )}
            {right > 0 && (
              <text x={splitX + (padX + barW - splitX) / 2} y={barY + barH / 2 + 6}
                textAnchor="middle" fill={C.fg} fontSize={18} fontWeight="bold" {...F}>{right}</text>
            )}

            {/* Layer 4: Measurement brackets - left and right portions */}
            {split > 0 && (
              <MeasurementBracket x1={padX} x2={splitX - 1} y={leftBracketY} label={`${split}`} C={C} />
            )}
            {right > 0 && (
              <MeasurementBracket x1={splitX + 1} x2={padX + barW} y={leftBracketY} label={`${right}`} C={C} />
            )}

            {/* Layer 4: Total bracket spanning both */}
            <MeasurementBracket x1={padX} x2={padX + barW} y={totalBracketY} label={`TOTAL: ${total}`} C={C} />

            {/* Layer 6: Commutative note */}
            <text x={310} y={svgH - 6} textAnchor="middle"
              fill={C.dim} fontSize={11} {...F} letterSpacing="0.04em">
              {right} + {split} = {total} (COMMUTATIVE)
            </text>
          </svg>
        </div>

        {/* Layer 5: Instruction */}
        <InstructionText C={C}>SLIDE TO DECOMPOSE</InstructionText>

        <div style={{ marginTop: 12 }}>
          <SliderControl label="TOTAL" value={total} onChange={handleTotalChange} min={2} max={50} C={C} />
          <SliderControl label="SPLIT" value={split} onChange={setSplit} min={1} max={total - 1} C={C} />
        </div>
      </div>
    </ToolShell>
  )
}
