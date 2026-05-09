import { useState, useCallback } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, F, InstructionText, ToggleButtonGroup } from './shared'
import { isPrime } from './shared'

const PROPERTIES = {
  'EVEN': n => n % 2 === 0,
  'ODD': n => n % 2 !== 0,
  'MULT OF 3': n => n % 3 === 0,
  'MULT OF 5': n => n % 5 === 0,
  'PRIME': n => isPrime(n),
  '>10': n => n > 10,
  'SQUARE': n => { const s = Math.sqrt(n); return s === Math.floor(s) }
}

const PROP_KEYS = Object.keys(PROPERTIES)
const POOL = Array.from({ length: 20 }, (_, i) => i + 1)

function getRegion(n, p1, p2) {
  const in1 = PROPERTIES[p1](n)
  const in2 = PROPERTIES[p2](n)
  if (in1 && in2) return 'both'
  if (in1) return 'left'
  if (in2) return 'right'
  return 'outside'
}

// Two overlapping circles
const LCX = 230, RCX = 390, CY = 210, CR = 140

function inCircle(px, py, cx, cy, r) {
  return (px - cx) ** 2 + (py - cy) ** 2 <= r * r
}

function regionFromPoint(px, py) {
  const inL = inCircle(px, py, LCX, CY, CR)
  const inR = inCircle(px, py, RCX, CY, CR)
  if (inL && inR) return 'both'
  if (inL) return 'left'
  if (inR) return 'right'
  return 'outside'
}

function layoutNums(placements, region) {
  const nums = Object.entries(placements)
    .filter(([, r]) => r === region)
    .map(([n]) => +n)
    .sort((a, b) => a - b)

  let cx
  if (region === 'left') cx = 175
  else if (region === 'right') cx = 445
  else if (region === 'both') cx = 310
  else cx = 310

  const startY = region === 'outside' ? 370 : 160
  const colSize = 4

  return nums.map((n, i) => {
    const col = Math.floor(i / colSize)
    const row = i % colSize
    const totalCols = Math.ceil(nums.length / colSize)
    const offsetX = cx - (totalCols - 1) * 14
    return { n, x: offsetX + col * 28, y: startY + row * 24 }
  })
}

export default function VennDiagram({ toolName, onBack }) {
  const C = useVizColors()
  const [prop1, setProp1] = useState('EVEN')
  const [prop2, setProp2] = useState('MULT OF 3')
  const [placements, setPlacements] = useState({})
  const [selNum, setSelNum] = useState(null)
  const [flash, setFlash] = useState(null)

  const handleReset = () => { setPlacements({}); setSelNum(null) }

  const handleProp = (which, val) => {
    if (which === 1) setProp1(val); else setProp2(val)
    setPlacements({}); setSelNum(null)
  }

  const handleClick = useCallback(e => {
    if (selNum === null) return
    const svg = e.currentTarget
    const rect = svg.getBoundingClientRect()
    const px = (e.clientX - rect.left) * (620 / rect.width)
    const py = (e.clientY - rect.top) * (460 / rect.height)

    const clicked = regionFromPoint(px, py)
    const correct = getRegion(selNum, prop1, prop2)

    if (clicked === correct) {
      setPlacements(prev => ({ ...prev, [selNum]: clicked }))
      setSelNum(null)
    } else {
      setFlash(correct)
      setTimeout(() => setFlash(null), 600)
    }
  }, [selNum, prop1, prop2])

  const placed = new Set(Object.keys(placements).map(Number))
  const poolNums = POOL.filter(n => !placed.has(n))
  const allLayout = ['left', 'right', 'both', 'outside'].flatMap(r => layoutNums(placements, r))

  const propOptions = PROP_KEYS.map(k => ({ value: k, label: k }))
  const placedCount = placed.size

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
            <span style={{ ...F, fontSize: 11, color: C.accent, minWidth: 40, textTransform: 'uppercase', letterSpacing: '0.06em' }}>LEFT</span>
            <ToggleButtonGroup options={propOptions} value={prop1} onChange={v => handleProp(1, v)} C={C} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ ...F, fontSize: 11, color: C.fg, minWidth: 40, textTransform: 'uppercase', letterSpacing: '0.06em' }}>RIGHT</span>
            <ToggleButtonGroup options={propOptions} value={prop2} onChange={v => handleProp(2, v)} C={C} />
          </div>
        </div>

        <div className="lrn-graph">
          <svg viewBox="0 0 620 460" width="100%" style={{ display: 'block' }} onClick={handleClick}>
            {/* Circle fills */}
            <circle cx={LCX} cy={CY} r={CR}
              fill={C.accent} fillOpacity={flash === 'left' ? 0.15 : 0.04} />
            <circle cx={RCX} cy={CY} r={CR}
              fill={C.fg} fillOpacity={flash === 'right' ? 0.15 : 0.04} />
            {flash === 'both' && (
              <>
                <circle cx={LCX} cy={CY} r={CR} fill={C.accent} fillOpacity={0.1} style={{ pointerEvents: 'none' }} />
                <circle cx={RCX} cy={CY} r={CR} fill={C.fg} fillOpacity={0.1} style={{ pointerEvents: 'none' }} />
              </>
            )}

            {/* Circle outlines */}
            <circle cx={LCX} cy={CY} r={CR} fill="none" stroke={C.dim} strokeWidth={1.5} />
            <circle cx={RCX} cy={CY} r={CR} fill="none" stroke={C.dim} strokeWidth={1.5} />

            {/* Labels */}
            <text x={LCX - 60} y={CY - CR - 10} textAnchor="middle" fill={C.accent} fontSize={12} {...F}>{prop1}</text>
            <text x={RCX + 60} y={CY - CR - 10} textAnchor="middle" fill={C.fg} fontSize={12} {...F}>{prop2}</text>

            {/* Placed numbers */}
            {allLayout.map(item => (
              <text key={item.n} x={item.x} y={item.y} textAnchor="middle"
                fill={C.fg} fontSize={13} {...F} fontWeight="bold">{item.n}</text>
            ))}

            {/* Number pool */}
            <line x1={40} y1={CY + CR + 30} x2={580} y2={CY + CR + 30} stroke={C.dim} strokeWidth={0.5} />

            {poolNums.map((n, i) => {
              const cols = Math.min(poolNums.length, 10)
              const row = Math.floor(i / cols)
              const col = i % cols
              const rowCount = Math.min(poolNums.length - row * cols, cols)
              const totalW = rowCount * 38
              const sx = (620 - totalW) / 2 + col * 38 + 16
              const sy = CY + CR + 50 + row * 38
              const sel = selNum === n

              return (
                <g key={n} onClick={e => { e.stopPropagation(); setSelNum(sel ? null : n) }}
                  style={{ cursor: 'pointer' }}>
                  <circle cx={sx} cy={sy} r={16}
                    fill={sel ? C.fg : 'transparent'} fillOpacity={sel ? 0.1 : 0}
                    stroke={sel ? C.accent : C.dim} strokeWidth={sel ? 2 : 1} />
                  <text x={sx} y={sy + 5} textAnchor="middle"
                    fill={sel ? C.accent : C.fg} fontSize={13} {...F}
                    fontWeight={sel ? 'bold' : 'normal'}>{n}</text>
                </g>
              )
            })}
          </svg>
        </div>

        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
          <div style={{ flex: 1, height: 4, background: `${C.dim}33` }}>
            <div style={{
              width: `${(placedCount / 20) * 100}%`, height: '100%',
              background: C.fg, opacity: 0.7
            }} />
          </div>
          <span style={{ ...F, fontSize: 11, color: C.dim, letterSpacing: '0.06em' }}>
            {placedCount} / 20
          </span>
        </div>

        <InstructionText C={C}>
          {selNum !== null
            ? `PLACE ${selNum} IN THE CORRECT REGION`
            : 'SELECT A NUMBER, THEN CLICK THE CORRECT REGION'}
        </InstructionText>
      </div>
    </ToolShell>
  )
}
