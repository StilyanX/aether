import { useState } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, SliderControl, F, InstructionText } from './shared'

export default function AreaModel({ toolName, onBack }) {
  const C = useVizColors()
  const [factorA, setFactorA] = useState(23)
  const [factorB, setFactorB] = useState(14)
  const handleReset = () => { setFactorA(23); setFactorB(14) }

  const product = factorA * factorB

  // Always decompose into tens + ones (stable 2-part structure for 10+)
  const decompose = n => {
    if (n < 10) return [{ val: n, label: String(n) }]
    const tens = Math.floor(n / 10) * 10
    const ones = n % 10
    if (ones === 0) return [{ val: tens, label: String(tens) }]
    return [{ val: tens, label: String(tens) }, { val: ones, label: String(ones) }]
  }

  const partsA = decompose(factorA)
  const partsB = decompose(factorB)

  // Fixed layout
  const svgW = 620, svgH = 440
  const gx = 80, gy = 40, gw = 440, gh = 300

  // Proportional sizes with minimum visible width/height
  const minFrac = 0.12
  const toSizes = (parts, total, fullSize) => {
    if (parts.length === 1) return [fullSize]
    const rawFracs = parts.map(p => p.val / total)
    const clamped = rawFracs.map(f => Math.max(f, minFrac))
    const sum = clamped.reduce((s, v) => s + v, 0)
    return clamped.map(f => (f / sum) * fullSize)
  }

  const colWidths = toSizes(partsB, factorB, gw)
  const rowHeights = toSizes(partsA, factorA, gh)

  // Build partial product grid
  const cells = []
  let yOff = gy
  for (let r = 0; r < partsA.length; r++) {
    let xOff = gx
    for (let c = 0; c < partsB.length; c++) {
      cells.push({
        x: xOff, y: yOff, w: colWidths[c], h: rowHeights[r],
        value: partsA[r].val * partsB[c].val,
        labelA: partsA[r].label, labelB: partsB[c].label,
        ri: r, ci: c
      })
      xOff += colWidths[c]
    }
    yOff += rowHeights[r]
  }

  const partialStr = cells.map(p => p.value).join(' + ')

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <SliderControl label="FACTOR A" value={factorA} onChange={setFactorA} min={2} max={99} C={C} />
        <SliderControl label="FACTOR B" value={factorB} onChange={setFactorB} min={2} max={99} C={C} />

        <div className="lrn-graph" style={{ marginTop: 12 }}>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} width="100%" style={{ display: 'block' }}>
            {/* Cell fills */}
            {cells.map((p, i) => (
              <rect key={`f${i}`} x={p.x} y={p.y} width={p.w} height={p.h}
                fill={C.accent} fillOpacity={(p.ri + p.ci) % 2 === 0 ? 0.06 : 0.14} />
            ))}

            {/* Partition lines */}
            {partsB.length > 1 && (() => {
              const x = gx + colWidths[0]
              return <line x1={x} y1={gy} x2={x} y2={gy + gh} stroke={C.dim} strokeWidth={1} strokeDasharray="4 4" />
            })()}
            {partsA.length > 1 && (() => {
              const y = gy + rowHeights[0]
              return <line x1={gx} y1={y} x2={gx + gw} y2={y} stroke={C.dim} strokeWidth={1} strokeDasharray="4 4" />
            })()}

            {/* Outer border */}
            <rect x={gx} y={gy} width={gw} height={gh} fill="none" stroke={C.fg} strokeWidth={1.5} />

            {/* Top labels */}
            {partsB.map((p, c) => {
              const x = gx + colWidths.slice(0, c).reduce((s, v) => s + v, 0) + colWidths[c] / 2
              return <text key={`t${c}`} x={x} y={gy - 10} textAnchor="middle" fill={C.dim} fontSize={13} {...F}>{p.label}</text>
            })}

            {/* Left labels */}
            {partsA.map((p, r) => {
              const y = gy + rowHeights.slice(0, r).reduce((s, v) => s + v, 0) + rowHeights[r] / 2
              return <text key={`l${r}`} x={gx - 12} y={y + 4} textAnchor="end" fill={C.dim} fontSize={13} {...F}>{p.label}</text>
            })}

            {/* Partial product labels (only if cell is big enough) */}
            {cells.map((p, i) => {
              if (p.w < 40 || p.h < 30) return null
              return (
                <g key={`lbl${i}`}>
                  <text x={p.x + p.w / 2} y={p.y + p.h / 2 + 6} textAnchor="middle"
                    fill={C.fg} fontSize={16} fontWeight="bold" {...F}>{p.value}</text>
                </g>
              )
            })}

            {/* Result */}
            <text x={svgW / 2} y={gy + gh + 28} textAnchor="middle"
              fill={C.dim} fontSize={12} {...F}>
              {cells.length > 1 ? `${partialStr} = ${product}` : ''}
            </text>
            <text x={svgW / 2} y={gy + gh + 52} textAnchor="middle"
              fill={C.fg} fontSize={18} fontWeight="bold" {...F}>
              {factorA} x {factorB} = {product}
            </text>
          </svg>
        </div>

        <InstructionText C={C}>SLIDE TO CHANGE FACTORS AND SEE PARTIAL PRODUCTS</InstructionText>
      </div>
    </ToolShell>
  )
}
