import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, F, InstructionText } from './shared'

export default function ArrayBuilder({ toolName, onBack }) {
  const C = useVizColors()
  const [rows, setRows] = useState(3)
  const [cols, setCols] = useState(4)
  const total = rows * cols
  const handleReset = () => { setRows(3); setCols(4) }

  const dotR = 8, spacing = 36
  const svgW = 620, svgH = 500

  // Center the grid in the fixed SVG
  const gridW = cols * spacing
  const gridH = rows * spacing
  const startX = (svgW - gridW) / 2 + spacing / 2
  const startY = 60 + spacing / 2

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <SliderControl label="ROWS" value={rows} onChange={setRows} min={1} max={12} C={C} />
        <SliderControl label="COLUMNS" value={cols} onChange={setCols} min={1} max={12} C={C} />

        <div className="lrn-graph" style={{ marginTop: 12 }}>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Result */}
            <text x={svgW / 2} y={30} textAnchor="middle"
              fill={C.fg} fontSize={18} fontWeight="bold" {...F}>
              {rows} x {cols} = {total}
            </text>

            {/* Dots */}
            {Array.from({ length: rows }, (_, r) =>
              Array.from({ length: cols }, (_, c) => (
                <circle key={`${r}-${c}`}
                  cx={startX + c * spacing}
                  cy={startY + r * spacing}
                  r={dotR}
                  fill={C.accent}
                  fillOpacity={0.3}
                  stroke={C.fg} strokeWidth={1} />
              ))
            )}

            {/* Dimension labels */}
            <text x={svgW / 2} y={startY + gridH + 20} textAnchor="middle"
              fill={C.dim} fontSize={11} {...F} letterSpacing="0.06em">
              {cols} x {rows} = {total}
            </text>
          </svg>
        </div>

        <InstructionText C={C}>ADJUST SLIDERS TO BUILD AN ARRAY</InstructionText>
      </div>
    </ToolShell>
  )
}
