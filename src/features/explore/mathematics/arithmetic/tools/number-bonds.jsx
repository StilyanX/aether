import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, F, InstructionText, DashedConnector } from './shared'

export default function NumberBonds({ toolName, onBack }) {
  const C = useVizColors()
  const [total, setTotal] = useState(10)
  const [partA, setPartA] = useState(6)
  const partB = total - partA

  const handleReset = () => { setTotal(10); setPartA(6) }
  const handleTotalChange = v => { setTotal(v); if (partA > v) setPartA(v) }

  const cx = 310, topY = 100, botY = 250, rTop = 44, rBot = 36
  const leftX = 160, rightX = 460
  const svgH = 390


  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <div className="lrn-graph">
          <svg viewBox={`0 0 620 ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Layer 1: Subtle circle fills */}
            <circle cx={cx} cy={topY} r={rTop}
              fill={C.accent} fillOpacity={0.08} />
            <circle cx={leftX} cy={botY} r={rBot}
              fill={C.fg} fillOpacity={0.06} />
            <circle cx={rightX} cy={botY} r={rBot}
              fill={C.faint} fillOpacity={0.08} />

            {/* Layer 6: Header label */}
            <text x={cx} y={22} textAnchor="middle"
              fill={C.dim} fontSize={11} {...F} letterSpacing="0.06em">
              PART + PART = WHOLE
            </text>

            {/* Layer 4: Dashed connectors */}
            <DashedConnector x1={cx} y1={topY + rTop} x2={leftX} y2={botY - rBot} C={C} />
            <DashedConnector x1={cx} y1={topY + rTop} x2={rightX} y2={botY - rBot} C={C} />

            {/* Layer 2: Circle borders */}
            <circle cx={cx} cy={topY} r={rTop}
              fill="none" stroke={C.dim} strokeWidth={1} />
            <circle cx={leftX} cy={botY} r={rBot}
              fill="none" stroke={C.dim} strokeWidth={1} />
            <circle cx={rightX} cy={botY} r={rBot}
              fill="none" stroke={C.dim} strokeWidth={1} />

            {/* Layer 3: Circle labels */}
            <text x={cx} y={topY + 8} textAnchor="middle"
              fill={C.fg} fontSize={24} fontWeight="bold" {...F}>{total}</text>
            <text x={leftX} y={botY + 6} textAnchor="middle"
              fill={C.fg} fontSize={20} {...F}>{partA}</text>
            <text x={rightX} y={botY + 6} textAnchor="middle"
              fill={C.fg} fontSize={20} {...F}>{partB}</text>

            {/* Layer 3: Role labels */}
            <text x={cx} y={topY - rTop - 8} textAnchor="middle"
              fill={C.dim} fontSize={10} {...F} letterSpacing="0.06em">WHOLE</text>
            <text x={leftX} y={botY + rBot + 16} textAnchor="middle"
              fill={C.dim} fontSize={10} {...F} letterSpacing="0.06em">PART</text>
            <text x={rightX} y={botY + rBot + 16} textAnchor="middle"
              fill={C.dim} fontSize={10} {...F} letterSpacing="0.06em">PART</text>

            {/* Layer 6: Equation */}
            <text x={cx} y={svgH - 50} textAnchor="middle"
              fill={C.fg} fontSize={16} fontWeight="bold" {...F}>
              {partA} + {partB} = {total}
            </text>

          </svg>
        </div>

        {/* Layer 5: Instruction */}
        <InstructionText C={C}>ADJUST SLIDERS TO EXPLORE DECOMPOSITIONS</InstructionText>

        <div style={{ marginTop: 12 }}>
          <SliderControl label="TOTAL" value={total} onChange={handleTotalChange} min={1} max={20} C={C} />
          <SliderControl label="PART A" value={partA} onChange={setPartA} min={0} max={total} C={C} />
        </div>
      </div>
    </ToolShell>
  )
}
