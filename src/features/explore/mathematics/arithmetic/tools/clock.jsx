import { useState, useCallback, useRef, useEffect } from 'react'
import ToolShell from './tool-shell'
import { useVizColors, btnStyle, F, InstructionText } from './shared'

const CX = 310, CY = 250, R = 200
const HOUR_R = 120, MIN_R = 170, TICK_OUTER = R - 8, TICK_INNER_MAJ = R - 24, TICK_INNER_MIN = R - 14
const NUM_R = R - 40, MIN_DOT_R = R - 4

function angleForMinute(m) { return (m / 60) * 360 - 90 }
function angleForHour(totalMin) { return (totalMin / 720) * 360 - 90 }
function rad(deg) { return (deg * Math.PI) / 180 }

function tipPos(angleDeg, radius) {
  const r = rad(angleDeg)
  return { x: CX + Math.cos(r) * radius, y: CY + Math.sin(r) * radius }
}

export default function Clock({ toolName, onBack }) {
  const C = useVizColors()
  const nowMinutes = () => {
    const d = new Date()
    return (d.getHours() % 12) * 60 + d.getMinutes()
  }
  const [minutes, setMinutes] = useState(nowMinutes)
  const [startMinutes, setStartMinutes] = useState(null)
  const [synced, setSynced] = useState(true)
  const [dragging, setDragging] = useState(false)
  const svgRef = useRef(null)

  // Live sync with real clock
  useEffect(() => {
    if (!synced) return
    const id = setInterval(() => setMinutes(nowMinutes()), 1000)
    return () => clearInterval(id)
  }, [synced])

  const handleReset = () => { setMinutes(nowMinutes()); setStartMinutes(null); setSynced(true) }

  const minuteVal = minutes % 60
  const hourVal = Math.floor(minutes / 60) % 12

  const minAngle = angleForMinute(minuteVal)
  const hrAngle = angleForHour(minutes)
  const minTip = tipPos(minAngle, MIN_R)
  const hrTip = tipPos(hrAngle, HOUR_R)

  const getSvgPoint = useCallback((e) => {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    const scaleX = 620 / rect.width
    const scaleY = 520 / rect.height
    return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY }
  }, [])

  const calcMinutes = useCallback((pt) => {
    const dx = pt.x - CX
    const dy = pt.y - CY
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90
    if (angle < 0) angle += 360
    return Math.round((angle / 360) * 60) % 60
  }, [])

  const handlePointerDown = useCallback((e) => {
    const pt = getSvgPoint(e)
    if (!pt) return
    const dx = pt.x - minTip.x
    const dy = pt.y - minTip.y
    if (Math.sqrt(dx * dx + dy * dy) < 30) {
      setSynced(false)
      setDragging(true)
      e.target.setPointerCapture?.(e.pointerId)
    }
  }, [getSvgPoint, minTip.x, minTip.y])

  const handlePointerMove = useCallback((e) => {
    if (!dragging) return
    const pt = getSvgPoint(e)
    if (!pt) return
    const newMin = calcMinutes(pt)
    setMinutes(prev => {
      const prevMinPart = prev % 60
      const hourPart = prev - prevMinPart
      let diff = newMin - prevMinPart
      if (diff > 30) diff -= 60
      if (diff < -30) diff += 60
      let next = hourPart + prevMinPart + diff
      if (next < 0) next += 720
      if (next >= 720) next -= 720
      return next
    })
  }, [dragging, getSvgPoint, calcMinutes])

  const handlePointerUp = useCallback(() => setDragging(false), [])

  const addMinutes = (n) => { setSynced(false); setMinutes(prev => ((prev + n) % 720 + 720) % 720) }

  const markStart = () => setStartMinutes(minutes)

  const displayHour = hourVal === 0 ? 12 : hourVal
  const displayMin = String(minuteVal).padStart(2, '0')

  // Elapsed time
  let elapsedH = 0, elapsedM = 0
  if (startMinutes !== null) {
    let diff = minutes - startMinutes
    if (diff < 0) diff += 720
    elapsedH = Math.floor(diff / 60)
    elapsedM = diff % 60
  }

  const hourNumbers = Array.from({ length: 12 }, (_, i) => {
    const num = i === 0 ? 12 : i
    const a = rad((i / 12) * 360 - 90)
    return { num, x: CX + Math.cos(a) * NUM_R, y: CY + Math.sin(a) * NUM_R }
  })

  const ticks = Array.from({ length: 60 }, (_, i) => {
    const a = rad((i / 60) * 360 - 90)
    const major = i % 5 === 0
    const inner = major ? TICK_INNER_MAJ : TICK_INNER_MIN
    return {
      x1: CX + Math.cos(a) * inner, y1: CY + Math.sin(a) * inner,
      x2: CX + Math.cos(a) * TICK_OUTER, y2: CY + Math.sin(a) * TICK_OUTER,
      major
    }
  })

  // Minute dots outside main ticks
  const minuteDots = Array.from({ length: 60 }, (_, i) => {
    if (i % 5 === 0) return null
    const a = rad((i / 60) * 360 - 90)
    return { cx: CX + Math.cos(a) * MIN_DOT_R, cy: CY + Math.sin(a) * MIN_DOT_R }
  }).filter(Boolean)

  return (
    <ToolShell title={toolName} onBack={onBack} onReset={handleReset}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '24px 16px' }}>
        <div className="lrn-graph">
          <svg
            ref={svgRef}
            viewBox="0 0 620 520"
            width="100%"
            style={{ display: 'block', cursor: dragging ? 'grabbing' : 'default', touchAction: 'none' }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* Layer 1: clock face background */}
            <circle cx={CX} cy={CY} r={R} fill={C.fg} fillOpacity={0.04} />

            {/* Layer 2: clock face border */}
            <circle cx={CX} cy={CY} r={R} fill="none" stroke={C.dim} strokeWidth={2} />

            {/* Layer 1: minute dots outside main ticks */}
            {minuteDots.map((d, i) => (
              <circle key={i} cx={d.cx} cy={d.cy} r={1.5}
                fill={C.dim} fillOpacity={0.4} />
            ))}

            {/* Layer 2: tick marks */}
            {ticks.map((t, i) => (
              <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
                stroke={t.major ? C.fg : C.dim} strokeWidth={t.major ? 2 : 1} />
            ))}

            {/* Layer 3: hour numbers */}
            {hourNumbers.map(h => (
              <text key={h.num} x={h.x} y={h.y + 6} textAnchor="middle"
                fill={C.fg} fontSize={18} {...F} fontWeight="bold">{h.num}</text>
            ))}

            {/* Layer 3: hour hand */}
            <line x1={CX} y1={CY} x2={hrTip.x} y2={hrTip.y}
              stroke={C.fg} strokeWidth={4} strokeLinecap="round" />

            {/* Layer 3: minute hand */}
            <line x1={CX} y1={CY} x2={minTip.x} y2={minTip.y}
              stroke={C.accent} strokeWidth={2} strokeLinecap="round" />

            {/* Drag handle */}
            <circle cx={minTip.x} cy={minTip.y} r={10}
              fill={dragging ? C.accent : 'transparent'} fillOpacity={dragging ? 0.3 : 0}
              stroke={C.accent} strokeWidth={2}
              style={{ cursor: 'grab' }} />

            {/* Center dot */}
            <circle cx={CX} cy={CY} r={5} fill={C.fg} />

            {/* Layer 6: digital readout */}
            <text x={CX} y={CY + 70} textAnchor="middle"
              fill={C.fg} fontSize={28} {...F} fontWeight="bold">
              {displayHour}:{displayMin}
            </text>
            <text x={CX} y={CY + 92} textAnchor="middle"
              fill={C.dim} fontSize={12} {...F}>
              {displayHour} {displayHour === 1 ? 'HOUR' : 'HOURS'}, {minuteVal} {minuteVal === 1 ? 'MINUTE' : 'MINUTES'}
            </text>

            {/* Layer 6: elapsed time display */}
            {startMinutes !== null && (
              <text x={CX} y={28} textAnchor="middle"
                fill={C.accent} fontSize={14} {...F} fontWeight="bold">
                ELAPSED: {elapsedH}H {elapsedM}M
              </text>
            )}
          </svg>
        </div>

        {/* Consolidated buttons */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
          <button style={btnStyle(false, C)} onClick={() => addMinutes(5)} aria-label="Add 5 minutes">+5 MIN</button>
          <button style={btnStyle(false, C)} onClick={() => addMinutes(15)} aria-label="Add 15 minutes">+15 MIN</button>
          <button style={btnStyle(false, C)} onClick={() => addMinutes(60)} aria-label="Add 1 hour">+1 HR</button>
          <button style={btnStyle(false, C)} onClick={() => addMinutes(-5)} aria-label="Subtract 5 minutes">-5 MIN</button>
          <button style={btnStyle(false, C)} onClick={() => addMinutes(-15)} aria-label="Subtract 15 minutes">-15 MIN</button>
          <button style={btnStyle(false, C)} onClick={() => addMinutes(-60)} aria-label="Subtract 1 hour">-1 HR</button>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}>
          <button style={btnStyle(startMinutes !== null, C)} onClick={markStart} aria-label="Mark start time">
            {startMinutes !== null ? 'UPDATE START' : 'MARK START'}
          </button>
          <button style={btnStyle(synced, C)} onClick={() => { setMinutes(nowMinutes()); setSynced(true) }} aria-label="Sync to current time">
            {synced ? 'SYNCED' : 'SYNC TO NOW'}
          </button>
        </div>

        {/* Layer 5 */}
        <InstructionText C={C}>DRAG THE MINUTE HAND OR USE BUTTONS</InstructionText>
      </div>
    </ToolShell>
  )
}
