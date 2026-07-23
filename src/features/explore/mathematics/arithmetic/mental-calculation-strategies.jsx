import { useState } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { VizFigure } from '../../../../components/viz-figure'
import {
  Plot,
  Polyline,
  Dot,
  Arrow,
  Tex,
  Label,
  Slider,
  OPACITY
} from '../../../../components/viz/primitives'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import {
  FONT_BODY,
  FONT_CONTROL,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TINY
} from '../../../../components/viz/scale-tokens'

// Inline viz · migrated 2026-05-27 from src/components/viz/arithmetic.jsx into
// the topic file, wrapped in <VizFigure>. Plus 4 new viz for prose-only
// sections (3 distributive decomposition, 6 rate/ratio, 10 geometry,
// 12 unit conversions). Engine choices follow the per-domain pattern map.
// id_prefix = 12.1.x.

// 12.1.1: Decimal Shift Strip
const SHIFT_LABELS = ['0.65', '6.5', '65', '650']
const SHIFT_OPS = ['÷10', '×10', '×100', '×1000']
const SHIFT_SUPERS = ['⁰', '¹', '²', '³']

function Mcs_DecimalShiftStripInline() {
  const C = useVizColors()
  const [exp, setExp] = useState(1)

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[-0.05, 1.05]} yRange={[-0.27, 0.54]} width={620} height={200}>
        <Polyline
          points={[
            [0, 0],
            [1, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.2}
        />
        {SHIFT_LABELS.map((lbl, i) => {
          const x = i / 3
          const active = i === exp
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, -0.08],
                  [x, 0.08]
                ]}
                opacity={active ? 1 : OPACITY.dim}
                strokeWidth={active ? 2 : 1}
              />
              <Label
                at={[x, 0.18]}
                size={active ? 13 : 10}
                opacity={active ? 1 : OPACITY.dim}
                anchor="middle"
                upper={false}
              >
                {lbl}
              </Label>
              <Label
                at={[x, -0.22]}
                size={FONT_TINY}
                opacity={active ? 0.7 : OPACITY.ghost}
                anchor="middle"
                upper={false}
              >
                {SHIFT_OPS[i]}
              </Label>
            </g>
          )
        })}
        <Dot x={exp / 3} y={0} r={5} opacity={1} />
        {exp > 0 && (
          <Arrow from={[0, 0.38]} to={[exp / 3, 0.38]} opacity={OPACITY.fg} strokeWidth={1.5} />
        )}
        <Label at={[exp / 6, 0.46]} size={FONT_SMALL} opacity={0.8} anchor="middle" upper={false}>
          {`×10${SHIFT_SUPERS[exp]} = ${SHIFT_LABELS[exp]}`}
        </Label>
      </Plot>
      <Slider
        label="power"
        value={exp}
        min={0}
        max={3}
        step={1}
        onChange={v => setExp(v | 0)}
        format={v => `×10${SHIFT_SUPERS[v]}`}
      />
    </div>
  )
}

// 12.1.2: Distributive Area Model (NEW)
// Section 3. Visualizes 43 × 6 = (40 + 3) × 6 = 240 + 18 = 258 as two
// adjacent rectangles whose widths are proportional to 40 and 3, height 6.
function Mcs_DistributiveAreaModelInline() {
  const C = useVizColors()
  const A = 40
  const B = 3
  const H = 6
  const total = A + B
  // x range padded a touch so labels don't clip
  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[-2, total + 2]} yRange={[-2.5, H + 3]} width={620} height={260}>
        {/* big rectangle (40 × 6) */}
        <Polyline
          points={[
            [0, 0],
            [A, 0],
            [A, H],
            [0, H],
            [0, 0]
          ]}
          opacity={0.85}
          strokeWidth={1.5}
        />
        {/* small rectangle (3 × 6) */}
        <Polyline
          points={[
            [A, 0],
            [A + B, 0],
            [A + B, H],
            [A, H],
            [A, 0]
          ]}
          opacity={0.85}
          strokeWidth={1.5}
        />
        {/* inside fills via diagonal hatching using opacity */}
        <Polyline
          points={[
            [0, 0],
            [A, H]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={0.6}
        />
        <Polyline
          points={[
            [A, 0],
            [A + B, H]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={0.6}
        />
        {/* width labels */}
        <Label at={[A / 2, -0.8]} size={FONT_LABEL} opacity={0.9} anchor="middle" upper={false}>
          40
        </Label>
        <Label at={[A + B / 2, -0.8]} size={FONT_LABEL} opacity={0.9} anchor="middle" upper={false}>
          3
        </Label>
        {/* height label on left */}
        <Label at={[-1, H / 2]} size={FONT_LABEL} opacity={0.9} anchor="middle" upper={false}>
          6
        </Label>
        {/* area labels inside */}
        <Tex
          at={[A / 2, H / 2 + 0.4]}
          tex={`40 \\times 6 = 240`}
          anchor="middle"
          size={FONT_TEX}
          opacity={1}
        />
        <Tex
          at={[A + B / 2, H / 2 + 0.6]}
          tex={`3{\\times}6{=}18`}
          anchor="middle"
          size={FONT_TINY}
          opacity={1}
        />
        {/* split marker */}
        <Polyline
          points={[
            [A, -1.6],
            [A, -0.4]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1}
        />
        {/* total below */}
        <Tex
          at={[(A + B) / 2, -2.0]}
          tex={`43 \\times 6 = 240 + 18 = 258`}
          anchor="middle"
          size={FONT_TEX}
          opacity={1}
        />
        {/* total width bracket */}
        <Polyline
          points={[
            [0, H + 0.6],
            [0, H + 1.0],
            [A + B, H + 1.0],
            [A + B, H + 0.6]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1}
        />
        <Label
          at={[(A + B) / 2, H + 1.7]}
          size={FONT_LABEL}
          opacity={0.85}
          anchor="middle"
          upper={false}
        >
          43 = 40 + 3
        </Label>
      </Plot>
    </div>
  )
}

// 12.1.3: Percent Bar Model
function Mcs_PercentBarModelInline() {
  const C = useVizColors()
  const [pct, setPct] = useState(10)
  const [total, setTotal] = useState(7)
  const result = (pct / 100) * total
  const resultDisp = result.toFixed(2).replace(/\.?0+$/, '')

  const segments = 10
  const filledSegs = Math.round(pct / 10)

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[-0.05, 1.12]} yRange={[-0.18, 0.78]} width={620} height={220}>
        {Array.from({ length: segments }, (_, i) => {
          const x0 = i / segments
          const x1 = (i + 1) / segments
          const filled = i < filledSegs
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x0, 0],
                  [x1, 0],
                  [x1, 0.5],
                  [x0, 0.5],
                  [x0, 0]
                ]}
                opacity={filled ? 1 : OPACITY.dim}
                strokeWidth={filled ? 2 : 1}
              />
              <Label
                at={[(x0 + x1) / 2, 0.25]}
                size={FONT_TINY}
                opacity={filled ? 0.9 : OPACITY.ghost}
                anchor="middle"
                upper={false}
              >
                {`${i * 10 + 10}%`}
              </Label>
            </g>
          )
        })}
        <Label at={[0, -0.15]} size={FONT_SMALL} opacity={0.7} anchor="start" upper={false}>
          0
        </Label>
        <Label at={[1, -0.15]} size={FONT_SMALL} opacity={0.7} anchor="end" upper={false}>
          {total}
        </Label>
        <Label
          at={[filledSegs / 10, -0.15]}
          size={FONT_LABEL}
          opacity={1}
          anchor="middle"
          upper={false}
        >
          {resultDisp}
        </Label>
        <Tex
          at={[0.5, 0.68]}
          tex={`${pct}\\% \\text{ of } ${total} = ${resultDisp}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={1}
        />
      </Plot>
      <Slider
        label="percent"
        value={pct}
        min={1}
        max={100}
        step={1}
        onChange={v => setPct(v | 0)}
        format={v => `${v}%`}
      />
      <Slider
        label="total"
        value={total}
        min={1}
        max={200}
        step={1}
        onChange={v => setTotal(v | 0)}
        format={v => v}
      />
    </div>
  )
}

// 12.1.4: Fraction–Decimal Equivalence
const FRACTION_DECIMAL_PAIRS = [
  { frac: '\\tfrac{1}{10}', dec: 0.1, label: '0.1' },
  { frac: '\\tfrac{1}{8}', dec: 0.125, label: '0.125' },
  { frac: '\\tfrac{1}{5}', dec: 0.2, label: '0.2' },
  { frac: '\\tfrac{1}{4}', dec: 0.25, label: '0.25' },
  { frac: '\\tfrac{1}{2}', dec: 0.5, label: '0.5' },
  { frac: '\\tfrac{3}{4}', dec: 0.75, label: '0.75' },
  { frac: '\\tfrac{4}{5}', dec: 0.8, label: '0.8' }
]

function Mcs_FractionDecimalEquivalenceInline() {
  const C = useVizColors()

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[-0.05, 1.05]} yRange={[-0.7, 0.7]} width={620} height={240}>
        <Polyline
          points={[
            [0, 0],
            [1, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Polyline
          points={[
            [0, -0.06],
            [0, 0.06]
          ]}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [1, -0.06],
            [1, 0.06]
          ]}
          opacity={OPACITY.fg}
        />
        <Label at={[0, -0.15]} size={FONT_SMALL} opacity={0.7} anchor="middle" upper={false}>
          0
        </Label>
        <Label at={[1, -0.15]} size={FONT_SMALL} opacity={0.7} anchor="middle" upper={false}>
          1
        </Label>
        {FRACTION_DECIMAL_PAIRS.map((p, i) => {
          const isAbove = i % 2 === 0
          const ySign = isAbove ? 1 : -1
          const yLine = ySign * 0.12
          const yLabel = ySign * (isAbove ? 0.28 : 0.32)
          const yFrac = ySign * (isAbove ? 0.48 : 0.54)
          return (
            <g key={i}>
              <Dot x={p.dec} y={0} r={3} opacity={0.9} />
              <Polyline
                points={[
                  [p.dec, 0],
                  [p.dec, yLine]
                ]}
                opacity={OPACITY.dim}
                strokeWidth={1}
              />
              <Label
                at={[p.dec, yLabel]}
                size={FONT_TINY}
                opacity={0.85}
                anchor="middle"
                upper={false}
              >
                {p.label}
              </Label>
              <Tex
                at={[p.dec, yFrac]}
                tex={p.frac}
                anchor="middle"
                size={FONT_SMALL}
                opacity={0.9}
              />
            </g>
          )
        })}
      </Plot>
    </div>
  )
}

// 12.1.5: Double Number Line · Unit Rate (NEW)
// Section 6. Two stacked axes: burgers (0..6) and dollars (0..9 in $1.50
// steps). Highlighted unit-rate tick at 1 burger ↔ $1.50.
function Mcs_DoubleNumberLineRateInline() {
  const C = useVizColors()
  const MAX_COUNT = 6
  const UNIT_PRICE = 1.5
  // Map both axes onto x ∈ [0, 1] for visual alignment.
  const ticks = Array.from({ length: MAX_COUNT + 1 }, (_, i) => i)

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[-0.11, 1.2]} yRange={[-0.56, 0.96]} width={620} height={240}>
        {/* top axis: burgers */}
        <Polyline
          points={[
            [0, 0.35],
            [1, 0.35]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {/* bottom axis: dollars */}
        <Polyline
          points={[
            [0, -0.35],
            [1, -0.35]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {ticks.map(i => {
          const x = i / MAX_COUNT
          const dollars = i * UNIT_PRICE
          const isUnit = i === 1
          return (
            <g key={i}>
              {/* top tick */}
              <Polyline
                points={[
                  [x, 0.35 - 0.06],
                  [x, 0.35 + 0.06]
                ]}
                opacity={isUnit ? 1 : OPACITY.fg}
                strokeWidth={isUnit ? 2 : 1}
              />
              {/* bottom tick */}
              <Polyline
                points={[
                  [x, -0.35 - 0.06],
                  [x, -0.35 + 0.06]
                ]}
                opacity={isUnit ? 1 : OPACITY.fg}
                strokeWidth={isUnit ? 2 : 1}
              />
              {/* connector */}
              <Polyline
                points={[
                  [x, -0.29],
                  [x, 0.29]
                ]}
                opacity={isUnit ? 0.8 : OPACITY.faint}
                strokeWidth={isUnit ? 1.5 : 0.8}
                dash={isUnit ? undefined : '2 3'}
              />
              {/* top label */}
              <Label
                at={[x, 0.55]}
                size={isUnit ? 12 : 10}
                opacity={isUnit ? 1 : OPACITY.dim}
                anchor="middle"
                upper={false}
              >
                {i}
              </Label>
              {/* bottom label */}
              <Label
                at={[x, -0.58]}
                size={isUnit ? 12 : 10}
                opacity={isUnit ? 1 : OPACITY.dim}
                anchor="middle"
                upper={false}
              >
                {`\\$${dollars.toFixed(2)}`}
              </Label>
            </g>
          )
        })}
        {/* axis labels (left) */}
        <Label at={[-0.05, 0.35]} size={FONT_SMALL} opacity={0.7} anchor="end" upper={false}>
          burgers
        </Label>
        <Label at={[-0.05, -0.35]} size={FONT_SMALL} opacity={0.7} anchor="end" upper={false}>
          dollars
        </Label>
        {/* unit rate annotation */}
        <Tex
          at={[0.5, 0.78]}
          tex={`\\text{unit rate} = \\$1.50 \\text{ per burger}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={1}
        />
      </Plot>
    </div>
  )
}

// 12.1.6: Time Elapsed Arc
// Interactive: two sliders set start/end time (in minutes, step 5).
// Arc sweeps clockwise on the 12-hour cycle. Right panel shows the
// count-up breakdown (start → next hour, full hours, last hour → end).
const TIME_ARC_CX = 165
const TIME_ARC_CY = 135
const TIME_ARC_R = 92
const _timeRad = deg => (deg * Math.PI) / 180
const _onCircle = (deg, radius) => ({
  x: TIME_ARC_CX + radius * Math.cos(_timeRad(deg)),
  y: TIME_ARC_CY + radius * Math.sin(_timeRad(deg))
})
// Time (in minutes from 0:00) → clock angle in degrees on a 12-hour cycle.
// 12 → -90°, 3 → 0°, 6 → 90°, 9 → 180°.
const _timeToDeg = m => (m % 720) / 2 - 90
const _fmtTime = m => `${Math.floor(m / 60) % 24}:${String(m % 60).padStart(2, '0')}`
const _fmtElapsed = m => {
  const h = Math.floor(m / 60)
  const mm = m % 60
  if (h === 0) return `${mm} min`
  if (mm === 0) return `${h} h`
  return `${h} h ${mm} min`
}
const TIME_ARC_HOUR_TICKS = Array.from({ length: 12 }, (_, i) => {
  const deg = i * 30 - 90
  return {
    inner: _onCircle(deg, TIME_ARC_R - 8),
    outer: _onCircle(deg, TIME_ARC_R),
    label: _onCircle(deg, TIME_ARC_R + 14),
    text: i === 0 ? 12 : i
  }
})

function Mcs_TimeElapsedArcInline() {
  const C = useVizColors()
  const [startMin, setStartMin] = useState(5 * 60 + 20) // 5:20
  const [endMin, setEndMin] = useState(6 * 60 + 10) // 6:10

  // Elapsed minutes, allowing wrap (end can be earlier in the day).
  const elapsed = (((endMin - startMin) % 1440) + 1440) % 1440

  // Count-up breakdown: start → next hour boundary → full hours → end.
  const sameHour = Math.floor(startMin / 60) === Math.floor(endMin / 60) && endMin >= startMin
  let stage1 = 0,
    stage2 = 0,
    stage3 = 0,
    boundaryA = startMin,
    boundaryB = endMin
  if (elapsed === 0) {
    /* nothing */
  } else if (sameHour) {
    stage3 = endMin - startMin
    boundaryA = startMin
    boundaryB = endMin
  } else {
    boundaryA = Math.ceil(startMin / 60) * 60 // next hour after start
    boundaryB = Math.floor(endMin / 60) * 60 // last hour boundary at/before end
    if (startMin % 60 === 0) boundaryA = startMin // already on the hour
    stage1 = boundaryA - startMin
    stage3 = endMin - boundaryB
    stage2 = elapsed - stage1 - stage3
  }

  // Arc geometry. Sweep clockwise from start. If elapsed > 720 min (12 h),
  // cap visible arc at one full revolution so it stays sensible.
  const startDeg = _timeToDeg(startMin)
  const endDeg = _timeToDeg(endMin)
  const startPt = _onCircle(startDeg, TIME_ARC_R)
  const endPt = _onCircle(endDeg, TIME_ARC_R)
  const startLabelPt = _onCircle(startDeg, TIME_ARC_R + 26)
  const endLabelPt = _onCircle(endDeg, TIME_ARC_R + 26)
  // Clockwise sweep on the 12-hour clock.
  const sweep = (((endDeg - startDeg) % 360) + 360) % 360
  const isLarge = sweep > 180 ? 1 : 0
  const fullCycle = elapsed >= 720 // ≥ one full 12-hour revolution; render as overlay circle
  const arcPath = fullCycle
    ? null
    : `M ${startPt.x} ${startPt.y} A ${TIME_ARC_R} ${TIME_ARC_R} 0 ${isLarge} 1 ${endPt.x} ${endPt.y}`

  const ANNO_X = 305
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 460 300" style={{ width: '100%' }}>
        {/* clock face */}
        <circle
          cx={TIME_ARC_CX}
          cy={TIME_ARC_CY}
          r={TIME_ARC_R}
          fill="none"
          stroke={C.fg}
          strokeOpacity={0.25}
          strokeWidth={1.5}
        />
        {TIME_ARC_HOUR_TICKS.map((t, i) => (
          <g key={i}>
            <line
              x1={t.inner.x}
              y1={t.inner.y}
              x2={t.outer.x}
              y2={t.outer.y}
              stroke={C.fg}
              strokeOpacity={0.5}
              strokeWidth={1}
            />
            <text
              x={t.label.x}
              y={t.label.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={FONT_TINY}
              fill={C.fg}
              fillOpacity={0.6}
            >
              {t.text}
            </text>
          </g>
        ))}
        {/* elapsed arc: single arc for < 12 h, full ring overlay for ≥ 12 h */}
        {elapsed > 0 && fullCycle && (
          <circle
            cx={TIME_ARC_CX}
            cy={TIME_ARC_CY}
            r={TIME_ARC_R}
            fill="none"
            stroke={C.fg}
            strokeOpacity={0.9}
            strokeWidth={4}
          />
        )}
        {elapsed > 0 && !fullCycle && (
          <path d={arcPath} fill="none" stroke={C.fg} strokeOpacity={0.9} strokeWidth={4} />
        )}
        {/* start + end dots */}
        <circle cx={startPt.x} cy={startPt.y} r={5} fill={C.fg} fillOpacity={0.9} />
        <circle cx={endPt.x} cy={endPt.y} r={5} fill={C.fg} fillOpacity={0.9} />
        {/* start + end labels */}
        <text
          x={startLabelPt.x}
          y={startLabelPt.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.95}
          stroke="#000"
          strokeWidth={3}
          paintOrder="stroke"
        >
          {_fmtTime(startMin)}
        </text>
        <text
          x={endLabelPt.x}
          y={endLabelPt.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.95}
          stroke="#000"
          strokeWidth={3}
          paintOrder="stroke"
        >
          {_fmtTime(endMin)}
        </text>
        {/* centre elapsed readout */}
        <text
          x={TIME_ARC_CX}
          y={TIME_ARC_CY}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_TEX}
          fill={C.fg}
          fillOpacity={1}
          fontWeight="bold"
        >
          {_fmtElapsed(elapsed)}
        </text>
        {/* right annotation panel: count-up breakdown */}
        <text x={ANNO_X} y={50} fontSize={FONT_SMALL} fill={C.fg} fillOpacity={0.55}>
          COUNT-UP BREAKDOWN
        </text>
        {stage1 > 0 && (
          <>
            <text x={ANNO_X} y={75} fontSize={FONT_LABEL} fill={C.fg} fillOpacity={0.8}>
              {`${_fmtTime(startMin)} → ${_fmtTime(boundaryA)}`}
            </text>
            <text x={ANNO_X} y={92} fontSize={FONT_LABEL} fill={C.fg} fillOpacity={1}>
              {`= ${stage1} min`}
            </text>
          </>
        )}
        {stage2 > 0 && (
          <>
            <text x={ANNO_X} y={120} fontSize={FONT_LABEL} fill={C.fg} fillOpacity={0.8}>
              {`${_fmtTime(boundaryA)} → ${_fmtTime(boundaryB)}`}
            </text>
            <text x={ANNO_X} y={137} fontSize={FONT_LABEL} fill={C.fg} fillOpacity={1}>
              {`= ${Math.floor(stage2 / 60)} h`}
            </text>
          </>
        )}
        {stage3 > 0 && (
          <>
            <text x={ANNO_X} y={165} fontSize={FONT_LABEL} fill={C.fg} fillOpacity={0.8}>
              {`${_fmtTime(sameHour ? startMin : boundaryB)} → ${_fmtTime(endMin)}`}
            </text>
            <text x={ANNO_X} y={182} fontSize={FONT_LABEL} fill={C.fg} fillOpacity={1}>
              {`= ${stage3} min`}
            </text>
          </>
        )}
        <line
          x1={ANNO_X}
          y1={200}
          x2={440}
          y2={200}
          stroke={C.fg}
          strokeOpacity={0.4}
          strokeWidth={1}
        />
        <text x={ANNO_X} y={222} fontSize={FONT_TEX} fill={C.fg} fillOpacity={1} fontWeight="bold">
          {`Total: ${_fmtElapsed(elapsed)}`}
        </text>
      </svg>
      <Slider
        label="start"
        value={startMin}
        min={0}
        max={1435}
        step={5}
        onChange={v => setStartMin(Math.round(v / 5) * 5)}
        format={v => _fmtTime(v)}
      />
      <Slider
        label="end"
        value={endMin}
        min={0}
        max={1435}
        step={5}
        onChange={v => setEndMin(Math.round(v / 5) * 5)}
        format={v => _fmtTime(v)}
      />
    </div>
  )
}

// 12.1.7: Average Balance Bars
function Mcs_AverageBalanceBarsInline() {
  const C = useVizColors()
  const [vals, setVals] = useState([2, 5, 8])
  const mean = vals.reduce((a, b) => a + b, 0) / vals.length
  const maxVal = Math.max(...vals, mean) + 1
  const setAt = idx => v => setVals(prev => prev.map((x, j) => (j === idx ? v | 0 : x)))

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[-0.06, 1.13]} yRange={[-0.12, 1.06]} width={620} height={280}>
        {vals.map((v, i) => {
          const x = (i + 0.5) / vals.length
          const barW = 0.18
          const h = v / maxVal
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x - barW / 2, 0],
                  [x - barW / 2, h],
                  [x + barW / 2, h],
                  [x + barW / 2, 0]
                ]}
                opacity={OPACITY.fg}
                strokeWidth={1.5}
              />
              <Label at={[x, h + 0.06]} size={FONT_LABEL} opacity={1} anchor="middle" upper={false}>
                {v}
              </Label>
              <Label at={[x, -0.07]} size={FONT_TINY} opacity={0.6} anchor="middle" upper={false}>
                value {i + 1}
              </Label>
            </g>
          )
        })}
        <Polyline
          points={[
            [0.02, mean / maxVal],
            [0.98, mean / maxVal]
          ]}
          opacity={0.8}
          strokeWidth={2}
        />
        <Label
          at={[1.02, mean / maxVal]}
          size={FONT_LABEL}
          opacity={1}
          anchor="start"
          upper={false}
        >
          {`mean = ${mean.toFixed(1)}`}
        </Label>
      </Plot>
      <Slider
        label="value 1"
        value={vals[0]}
        min={1}
        max={20}
        step={1}
        onChange={setAt(0)}
        format={v => v}
      />
      <Slider
        label="value 2"
        value={vals[1]}
        min={1}
        max={20}
        step={1}
        onChange={setAt(1)}
        format={v => v}
      />
      <Slider
        label="value 3"
        value={vals[2]}
        min={1}
        max={20}
        step={1}
        onChange={setAt(2)}
        format={v => v}
      />
    </div>
  )
}

// 12.1.8: Speed–Distance–Time Triangle
function Mcs_SpeedDistanceTimeTriangleInline() {
  const C = useVizColors()
  const [speed, setSpeed] = useState(60)
  const [time, setTime] = useState(2)
  const dist = speed * time

  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 320 220" style={{ width: '100%' }}>
        <polygon
          points="160,30 60,190 260,190"
          fill="none"
          stroke={C.fg}
          strokeOpacity={0.35}
          strokeWidth={2}
        />
        <line
          x1={110}
          y1={110}
          x2={210}
          y2={110}
          stroke={C.fg}
          strokeOpacity={0.35}
          strokeWidth={1.5}
        />
        <line
          x1={160}
          y1={110}
          x2={160}
          y2={190}
          stroke={C.fg}
          strokeOpacity={0.35}
          strokeWidth={1.5}
        />
        <text
          x={160}
          y={80}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_CONTROL}
          fill={C.fg}
          fillOpacity={1}
          fontWeight="bold"
        >
          d = {dist}
        </text>
        <text
          x={108}
          y={155}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_TEX}
          fill={C.fg}
          fillOpacity={0.9}
        >
          s = {speed}
        </text>
        <text
          x={212}
          y={155}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_TEX}
          fill={C.fg}
          fillOpacity={0.9}
        >
          t = {time}
        </text>
        <text
          x={160}
          y={210}
          textAnchor="middle"
          fontSize={FONT_SMALL}
          fill={C.fg}
          fillOpacity={0.55}
        >
          d = s × t
        </text>
      </svg>
      <Slider
        label="speed (km/h)"
        value={speed}
        min={10}
        max={200}
        step={5}
        onChange={v => setSpeed(v | 0)}
        format={v => v}
      />
      <Slider
        label="time (hours)"
        value={time}
        min={0.5}
        max={10}
        step={0.5}
        onChange={v => setTime(v)}
        format={v => v}
      />
    </div>
  )
}

// 12.1.9: Geometry Shapes: rectangle + triangle (NEW)
// Section 10. Side-labeled rectangle (5×4) + triangle with two known angles.
function Mcs_GeometryShapesInline() {
  const C = useVizColors()
  // Two side-by-side panels in a single SVG.
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 640 260" style={{ width: '100%' }}>
        {/* PANEL A: rectangle 5 × 4 */}
        {/* dims: rect at x=60..260, y=70..230 (200 wide, 160 tall = 5×4 proportions) */}
        <rect
          x={60}
          y={70}
          width={200}
          height={160}
          fill="none"
          stroke={C.fg}
          strokeOpacity={0.85}
          strokeWidth={2}
        />
        {/* light fill diagonals for area */}
        <line
          x1={60}
          y1={230}
          x2={260}
          y2={70}
          stroke={C.fg}
          strokeOpacity={0.08}
          strokeWidth={0.6}
        />
        <line
          x1={60}
          y1={70}
          x2={260}
          y2={230}
          stroke={C.fg}
          strokeOpacity={0.08}
          strokeWidth={0.6}
        />
        {/* length label (bottom) */}
        <text
          x={160}
          y={250}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.9}
        >
          l = 5
        </text>
        {/* width label (left, rotated) */}
        <text
          x={40}
          y={150}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.9}
          transform="rotate(-90, 40, 150)"
        >
          w = 4
        </text>
        {/* formulas */}
        <text
          x={160}
          y={40}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.85}
        >
          P = 2(l + w) = 18
        </text>
        <text
          x={160}
          y={56}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.85}
        >
          A = l × w = 20
        </text>
        {/* panel title */}
        <text
          x={160}
          y={20}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_SMALL}
          fill={C.fg}
          fillOpacity={0.55}
        >
          RECTANGLE
        </text>

        {/* PANEL B: triangle, two known angles */}
        {/* vertices: A=(370,210)  B=(610,210)  C=(405,135): apex set so base angles are 65° / 20° */}
        <polygon
          points="370,210 610,210 405,135"
          fill="none"
          stroke={C.fg}
          strokeOpacity={0.85}
          strokeWidth={2}
        />
        {/* angle marker A (65°) - small arc */}
        <path
          d="M 392 210 A 22 22 0 0 0 379 190"
          fill="none"
          stroke={C.fg}
          strokeOpacity={0.5}
          strokeWidth={1}
        />
        <text
          x={401}
          y={190}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.9}
        >
          65°
        </text>
        {/* angle marker B (20°) */}
        <path
          d="M 588 210 A 22 22 0 0 1 589 202"
          fill="none"
          stroke={C.fg}
          strokeOpacity={0.5}
          strokeWidth={1}
        />
        <text
          x={568}
          y={201}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.9}
        >
          20°
        </text>
        {/* angle marker C (?) */}
        <path
          d="M 397 151 A 18 18 0 0 0 422 141"
          fill="none"
          stroke={C.fg}
          strokeOpacity={0.5}
          strokeWidth={1}
        />
        <text
          x={418}
          y={165}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={1}
          fontWeight="bold"
        >
          ?
        </text>
        {/* solution */}
        <text
          x={490}
          y={40}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.85}
        >
          ? = 180 − 65 − 20
        </text>
        <text
          x={490}
          y={56}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={1}
          fontWeight="bold"
        >
          = 95°
        </text>
        {/* panel title */}
        <text
          x={490}
          y={20}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_SMALL}
          fill={C.fg}
          fillOpacity={0.55}
        >
          TRIANGLE (180° SUM)
        </text>
      </svg>
    </div>
  )
}

// 12.1.10: Square Root Bracket
function Mcs_SquareRootBracketInline() {
  const C = useVizColors()
  const [n, setN] = useState(58)
  const lo = Math.floor(Math.sqrt(n))
  const hi = lo + 1
  const loSq = lo * lo
  const hiSq = hi * hi
  const xMax = hiSq + 2
  const xScale = 1 / xMax

  return (
    <div style={{ width: '100%', color: C.fg }}>
      <Plot xRange={[-0.02, 1.06]} yRange={[-0.27, 0.66]} width={620} height={200}>
        <Polyline
          points={[
            [0, 0],
            [1, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.2}
        />
        <Polyline
          points={[
            [loSq * xScale, -0.1],
            [loSq * xScale, 0.1]
          ]}
          opacity={0.8}
          strokeWidth={2}
        />
        <Label
          at={[loSq * xScale, -0.22]}
          size={FONT_SMALL}
          opacity={0.8}
          anchor="middle"
          upper={false}
        >
          {loSq}
        </Label>
        <Tex
          at={[loSq * xScale, 0.26]}
          tex={`${lo}^2`}
          anchor="middle"
          size={FONT_SMALL}
          opacity={0.7}
        />
        <Polyline
          points={[
            [hiSq * xScale, -0.1],
            [hiSq * xScale, 0.1]
          ]}
          opacity={0.8}
          strokeWidth={2}
        />
        <Label
          at={[hiSq * xScale, -0.22]}
          size={FONT_SMALL}
          opacity={0.8}
          anchor="middle"
          upper={false}
        >
          {hiSq}
        </Label>
        <Tex
          at={[hiSq * xScale, 0.26]}
          tex={`${hi}^2`}
          anchor="middle"
          size={FONT_SMALL}
          opacity={0.7}
        />
        <Dot x={n * xScale} y={0} r={5} opacity={1} />
        <Label at={[n * xScale, -0.22]} size={FONT_LABEL} opacity={1} anchor="middle" upper={false}>
          {n}
        </Label>
        <Polyline
          points={[
            [loSq * xScale, 0.42],
            [loSq * xScale, 0.52],
            [hiSq * xScale, 0.52],
            [hiSq * xScale, 0.42]
          ]}
          opacity={0.6}
          strokeWidth={1.2}
        />
        <Tex
          at={[((loSq + hiSq) / 2) * xScale, 0.6]}
          tex={`${lo} < \\sqrt{${n}} < ${hi}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={0.9}
        />
      </Plot>
      <Slider
        label="N"
        value={n}
        min={2}
        max={200}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v}
      />
    </div>
  )
}

// 12.1.11: Unit Conversion Ladder (NEW)
// Section 12. Metric prefix ladder mm → cm → m → km, with ×10/×100/×1000
// arrows. Below: base-60 time ladder (s → min → hour → day) as the trap.
function Mcs_UnitConversionLadderInline() {
  const C = useVizColors()
  const metric = ['mm', 'cm', 'm', 'km']
  const metricFactors = ['× 10', '× 100', '× 1000']
  const time = ['s', 'min', 'hour', 'day']
  const timeFactors = ['× 60', '× 60', '× 24']
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 640 320" style={{ width: '100%' }}>
        {/* METRIC LADDER (top) */}
        <text x={20} y={32} fontSize={FONT_SMALL} fill={C.fg} fillOpacity={0.55}>
          BASE 10: DECIMAL SHIFT
        </text>
        {metric.map((unit, i) => {
          const x = 80 + i * 160
          return (
            <g key={`m${i}`}>
              <rect
                x={x - 38}
                y={56}
                width={76}
                height={48}
                fill="none"
                stroke={C.fg}
                strokeOpacity={0.85}
                strokeWidth={1.5}
              />
              <text
                x={x}
                y={84}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={FONT_BODY}
                fill={C.fg}
                fillOpacity={1}
                fontWeight="bold"
              >
                {unit}
              </text>
            </g>
          )
        })}
        {metricFactors.map((f, i) => {
          const x1 = 80 + i * 160 + 40
          const x2 = 80 + (i + 1) * 160 - 40
          const xm = (x1 + x2) / 2
          return (
            <g key={`mf${i}`}>
              <line
                x1={x1}
                y1={80}
                x2={x2 - 8}
                y2={80}
                stroke={C.fg}
                strokeOpacity={0.7}
                strokeWidth={1.2}
              />
              <polygon
                points={`${x2 - 8},76 ${x2 - 8},84 ${x2},80`}
                fill={C.fg}
                fillOpacity={0.7}
              />
              <text
                x={xm}
                y={70}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={FONT_LABEL}
                fill={C.fg}
                fillOpacity={0.9}
              >
                {f}
              </text>
            </g>
          )
        })}
        <text
          x={320}
          y={130}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.7}
        >
          smaller unit → larger unit: divide by the same factor
        </text>

        {/* Divider */}
        <line
          x1={20}
          y1={170}
          x2={620}
          y2={170}
          stroke={C.fg}
          strokeOpacity={0.25}
          strokeWidth={1}
          strokeDasharray="4 4"
        />

        {/* TIME LADDER (bottom) */}
        <text x={20} y={196} fontSize={FONT_SMALL} fill={C.fg} fillOpacity={0.55}>
          BASE 60 / 24: NOT A DECIMAL SHIFT
        </text>
        {time.map((unit, i) => {
          const x = 80 + i * 160
          return (
            <g key={`t${i}`}>
              <rect
                x={x - 38}
                y={216}
                width={76}
                height={48}
                fill="none"
                stroke={C.fg}
                strokeOpacity={0.5}
                strokeWidth={1.5}
                strokeDasharray="3 2"
              />
              <text
                x={x}
                y={244}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={FONT_CONTROL}
                fill={C.fg}
                fillOpacity={0.9}
              >
                {unit}
              </text>
            </g>
          )
        })}
        {timeFactors.map((f, i) => {
          const x1 = 80 + i * 160 + 40
          const x2 = 80 + (i + 1) * 160 - 40
          const xm = (x1 + x2) / 2
          return (
            <g key={`tf${i}`}>
              <line
                x1={x1}
                y1={240}
                x2={x2 - 8}
                y2={240}
                stroke={C.fg}
                strokeOpacity={0.55}
                strokeWidth={1.2}
              />
              <polygon
                points={`${x2 - 8},236 ${x2 - 8},244 ${x2},240`}
                fill={C.fg}
                fillOpacity={0.55}
              />
              <text
                x={xm}
                y={230}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={FONT_LABEL}
                fill={C.fg}
                fillOpacity={0.85}
              >
                {f}
              </text>
            </g>
          )
        })}
        <text
          x={320}
          y={296}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={FONT_LABEL}
          fill={C.fg}
          fillOpacity={0.7}
        >
          Time conversions: true multiply/divide, never a decimal shift.
        </text>
      </svg>
    </div>
  )
}

// 12.1.12: Math Magic Complement
const MAGIC_ROW = { fontSize: FONT_TEX }
const MAGIC_DIM = { fontSize: FONT_LABEL, fillOpacity: 0.55 }
const MAGIC_BOLD = { fontSize: FONT_TEX, fontWeight: 'bold' }

function Mcs_MathMagicComplementInline() {
  const colors = useVizColors()
  const [A, setA] = useState(47563)
  const [B, setB] = useState(25608)
  const [Cval, setCval] = useState(87265)
  const D = 99999 - B
  const E = 99999 - Cval
  const total = A + B + Cval + D + E
  const quickAnswer = A - 2

  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 380 310" style={{ width: '100%' }}>
        <g fill={colors.fg}>
          <text x={30} y={28} style={MAGIC_DIM}>
            Number
          </text>
          <text x={200} y={28} style={MAGIC_DIM}>
            Role
          </text>
          <text x={310} y={28} style={MAGIC_DIM}>
            Value
          </text>
          <line
            x1={10}
            y1={36}
            x2={370}
            y2={36}
            stroke={colors.fg}
            strokeOpacity={0.2}
            strokeWidth={1}
          />

          <text x={30} y={62} style={MAGIC_BOLD}>
            A (your friend picks)
          </text>
          <text x={310} y={62} style={MAGIC_BOLD}>
            {A}
          </text>

          <text x={30} y={90} style={MAGIC_ROW}>
            B (you pick freely)
          </text>
          <text x={310} y={90} style={MAGIC_ROW}>
            {B}
          </text>

          <text x={30} y={118} style={MAGIC_ROW}>
            C (you pick freely)
          </text>
          <text x={310} y={118} style={MAGIC_ROW}>
            {Cval}
          </text>

          <line
            x1={10}
            y1={130}
            x2={370}
            y2={130}
            stroke={colors.fg}
            strokeOpacity={0.15}
            strokeWidth={1}
          />

          <text x={30} y={155} style={MAGIC_ROW}>
            D = 99,999 − B
          </text>
          <text x={200} y={155} style={MAGIC_DIM}>
            B+D = 99,999
          </text>
          <text x={310} y={155} style={MAGIC_ROW}>
            {D}
          </text>

          <line
            x1={185}
            y1={82}
            x2={185}
            y2={163}
            stroke={colors.fg}
            strokeOpacity={0.4}
            strokeWidth={1}
            strokeDasharray="3 2"
          />

          <text x={30} y={183} style={MAGIC_ROW}>
            E = 99,999 − C
          </text>
          <text x={200} y={183} style={MAGIC_DIM}>
            C+E = 99,999
          </text>
          <text x={310} y={183} style={MAGIC_ROW}>
            {E}
          </text>

          <line
            x1={185}
            y1={110}
            x2={185}
            y2={191}
            stroke={colors.fg}
            strokeOpacity={0.4}
            strokeWidth={1}
            strokeDasharray="3 2"
          />

          <line
            x1={10}
            y1={196}
            x2={370}
            y2={196}
            stroke={colors.fg}
            strokeOpacity={0.35}
            strokeWidth={2}
          />

          <text x={30} y={220} style={MAGIC_BOLD}>
            Total = A + 199,998
          </text>
          <text x={310} y={220} style={MAGIC_BOLD}>
            {total.toLocaleString()}
          </text>

          <text x={30} y={248} style={MAGIC_DIM}>
            {'= A + 99,999 + 99,999'}
          </text>
          <text x={30} y={268} style={MAGIC_DIM}>
            {'Quick answer: "2" then (A−2) ='}
          </text>
          <text x={310} y={268} style={MAGIC_BOLD}>{`2${quickAnswer}`}</text>
        </g>
      </svg>
      <Slider
        label="A"
        value={A}
        min={10000}
        max={99999}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="B"
        value={B}
        min={10000}
        max={89999}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
      <Slider
        label="C"
        value={Cval}
        min={10000}
        max={89999}
        step={1}
        onChange={v => setCval(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export default function MentalCalculationStrategies() {
  const config = {
    cssPrefix: 'mcs',
    documentTitle: 'Mental Calculation Strategies - AETHER',
    learning: {
      groupTitle: 'Whole Numbers',
      category: 'Arithmetic',
      title: 'Mental Calculation Strategies',
      subtitle:
        'Doing arithmetic in your head with structured shortcuts and place-value reasoning.',
      sections: [
        /* SECTION 1: WHAT MENTAL ARITHMETIC IS
         */
        <>
          <h2>What Mental Arithmetic Is</h2>

          <p>
            Mental arithmetic means doing the whole calculation in your head. You read or hear the
            question once, think, and say the answer.
          </p>

          <div className="lrn-callout">
            <p>
              <strong>The promise.</strong> Once you know the shortcuts on this page, you outrun a
              calculator on every problem in this lesson. The trick is not raw speed. It is choosing
              the right shortcut before the numbers distract you.
            </p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You hear: "Find the cost of ten books at 35 cents each." You have 30 seconds. How
              would you get the answer without writing anything down?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Ten times any number just shifts the decimal one place right (we prove this in the next section). $35$ cents becomes $350$ cents, which equals $\\$3.50$. Write $\\$3.50$.`}
              </p>
            </details>
          </div>

          <p>
            Mental arithmetic builds on three core ideas. Our number system is built on powers of
            10, so most shortcuts below are just a shift.
          </p>
          <ul className="lrn-list">
            <li>
              <strong>Place value.</strong> Knowing what each digit means lets you shift and scale
              numbers instantly.
            </li>
            <li>
              <strong>Fact fluency.</strong> Times tables, fraction-decimal pairs, and percentage
              benchmarks you recall without computing.
            </li>
            <li>
              <strong>Strategy selection.</strong> Spotting which shortcut applies (scale, share,
              time, convert) the moment you hear the question.
            </li>
          </ul>
        </>,

        /* SECTION 2: DECIMAL SHIFTS
         */
        <>
          <h2>Decimal Shifts: Multiplying and Dividing by 10, 100, 1000</h2>

          <p>
            The decimal point splits whole numbers from parts. The first place after it is tenths
            (0.1), the second is hundredths (0.01), the third is thousandths (0.001). So 0.605 means
            6 tenths, 0 hundredths, and 5 thousandths.
          </p>

          <p>
            Multiplying by 10 moves every digit one place to the left. Dividing by 10 moves every
            digit one place to the right. The number of zeros in 10, 100, or 1000 tells you how many
            places to shift.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Decimal Shift Rule</span>
            <div className="lrn-definition-desc">
              <p>{`Here $10^n$ just means 1 followed by $n$ zeros: $10^1 = 10$, $10^2 = 100$, $10^3 = 1000$.`}</p>
              <p>{`Multiply by $10^n$: move the decimal point $n$ places right.`}</p>
              <p>{`Divide by $10^n$: move the decimal point $n$ places left.`}</p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> any time you see "times 10", "times 100", "times
            1000", "tenth of", "hundredth of", or a question that mentions cost for 10 or 100
            identical items.
          </p>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Read the scale factor in the question ("ten times", "a hundredth of", etc.).</li>
              <li>Count the zeros: 10 has one zero, 100 has two, 1000 has three.</li>
              <li>Multiply shifts digits left; divide shifts digits right.</li>
              <li>Move the decimal point that many places. Fill empty columns with zeros.</li>
              <li>
                Sanity-check: multiplying always gives a bigger number; dividing gives a smaller
                one.
              </li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A question asks: "What number is a hundred times as big as $0.605$?" Before you calculate, predict: will the answer be less than 1, between 1 and 10, or greater than 10?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Greater than 10. Multiplying $0.605$ by $100$ moves the decimal two places right: $60.5$.`}
              </p>
            </details>
          </div>

          <h3>Worked Example</h3>

          <div className="lrn-steps">
            <p>"What number is a hundred times as big as 0.605?"</p>
            <ol className="lrn-list">
              <li>Multiply by 100: shift decimal two places right.</li>
              <li>{`$0.605 \\times 100 = 60.5$`}</li>
            </ol>
            <p>
              <strong>Answer: 60.5</strong>
            </p>
          </div>

          <VizFigure title="Decimal Shift Strip" size="body" aspect="620/160">
            <Mcs_DecimalShiftStripInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $0.605 \\times 100 = 60.5$ and not $60.05$ or $605$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The decimal point moves exactly two places right because $100 = 10^2$. Starting from $0.605$: one step right gives $6.05$, a second step gives $60.5$. Stopping at $60.05$ would only be one shift; $605$ would require three shifts (multiplying by 1000).`}
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                "A tenth of" means divide by 10, not multiply. It makes the number smaller, not
                bigger.
              </li>
              <li>
                {`"Three tenths of" means $\\div 10$ then $\\times 3$, not $\\div 3$. The fraction word names the share, the decimal shift moves the size.`}
              </li>
              <li>
                Confusing "ten times bigger" (multiply) with "tenth of" (divide). Both mention ten
                but they go opposite directions.
              </li>
            </ul>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Our number system is base 10. Each column is worth 10 times the column to its right. Multiplying by $10^n$ promotes every digit $n$ ranks left, so each digit becomes worth 10 times more $n$ times over. Division reverses the move. Three zeros in 1000 give three shifts, every time, no exceptions.`}
            </p>
          </div>
        </>,

        /* SECTION 2.5: DISTRIBUTIVE DECOMPOSITION FOR MULTIPLICATION
         */
        <>
          <h2>Distributive Decomposition for Multiplication</h2>

          <p>
            The distributive law turns one hard multiplication into two easy ones. The{' '}
            <em>Place Value and Algorithms</em> page proves it with an area model. Here you use it
            as a mental shortcut: split one factor, multiply each part, add the results.
          </p>

          <p>
            For example, {`$6 \\times 23$`} splits into {`$6 \\times 20$`} plus {`$6 \\times 3$`},
            which is {`$120 + 18 = 138$`}. The decomposition is the whole trick.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Distributive Law (as a mental tool)</span>
            <div className="lrn-definition-desc">
              <p>{`$$m(n + \\ell) = mn + m\\ell$$`}</p>
              <p>
                Two letters written side by side mean multiply, so {`$mn$`} is {`$m$`} times {`$n$`}
                . Pick the easier split. Two-digit numbers usually split as tens plus ones. Numbers
                near a round value split as "round minus a little".
              </p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> a two-digit number times a single digit, or any
            multiplication where one factor sits close to a round number.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Rounding and Compensating</span>
            <div className="lrn-definition-desc">
              <p>
                A round number ends in zero, like 10, 20, or 80. To round to the nearest ten, look
                at the ones digit. If it is 5 or more, round up. If it is 4 or less, round down.
              </p>
              <p>
                Compensating means you fix the answer afterward. If you rounded a number down by 1,
                add 1 back at the end. If you rounded it up by 1, take 1 back off. So 79 becomes 80,
                and you remember to subtract one extra at the finish.
              </p>
            </div>
          </div>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                Pick one factor. Split it by place value or as "round number plus/minus a bit".
              </li>
              <li>Multiply each piece by the other factor.</li>
              <li>Add (or subtract) the partial products.</li>
              <li>
                Sanity-check: the result should sit between the two partial products' ballparks.
              </li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Compute $53 \\times 7$ mentally. Which split is easier: $(50 + 3) \\times 7$ or $(53) \\times (5 + 2)$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$(50 + 3) \\times 7 = 350 + 21 = 371$. Splitting the two-digit factor is easier because $50 \\times 7$ is a one-step shift.`}</p>
            </details>
          </div>

          <h3>Worked Example</h3>

          <div className="lrn-steps">
            <p>{`"Compute $43 \\times 6$."`}</p>
            <ol className="lrn-list">
              <li>{`Split: $43 = 40 + 3$`}</li>
              <li>{`$40 \\times 6 = 240$`}</li>
              <li>{`$3 \\times 6 = 18$`}</li>
              <li>{`$240 + 18 = 258$`}</li>
            </ol>
            <p>
              <strong>{`Answer: $43 \\times 6 = 258$`}</strong>
            </p>
          </div>

          <VizFigure title="Distributive Area Model" size="body" aspect="auto">
            <Mcs_DistributiveAreaModelInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does $79 \\times 5$ become easier if you split $79$ as $80 - 1$ instead of $70 + 9$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$79 \\times 5 = (80 - 1) \\times 5 = 400 - 5 = 395$. Both pieces ($80 \\times 5$ and $1 \\times 5$) are immediate. The $70 + 9$ split needs $70 \\times 5 = 350$ then $9 \\times 5 = 45$, then $350 + 45 = 395$. Same answer, more steps.`}</p>
            </details>
          </div>

          <h3>Subtracting Near a Round Number</h3>

          <p>
            The same trick works for subtraction when no place needs a trade. The{' '}
            <em>Place Value and Algorithms</em> page proves why trading works; here you avoid it.
            Take {`$1000 - 387$`}: rewrite 1000 as {`$999 + 1$`}, subtract from 999 with no trades,
            then add the 1 back.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Decomposed Subtraction</span>
            <div className="lrn-definition-desc">
              <p>
                Subtract each column on its own, but only when the top digit in every column is at
                least as big as the digit below it. If the number you subtract from is a round power
                of 10, rewrite it first. Then every place is at least as large as the digit below
                it.
              </p>
            </div>
          </div>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>{`Round the top number down by 1 (so $1000$ becomes $999$).`}</li>
              <li>Subtract column by column. No column needs a trade now.</li>
              <li>Add the 1 back to your answer.</li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Compute $1000 - 387$ without trading. What is $1000$ rewritten as $999 + 1$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$1000 - 387 = (999 - 387) + 1 = 612 + 1 = 613$. Subtracting from $999$ needs no trades: each digit of $387$ subtracts from $9$ directly.`}</p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                The decomposed-subtraction rule fails the moment any place needs a trade. Switch to
                the standard algorithm if so.
              </li>
              <li>{`Splitting a factor only helps if both pieces are easy. Splitting $47$ as $40 + 7$ is good; splitting it as $23 + 24$ is not.`}</li>
              <li>{`Round-down splits (like $79 = 80 - 1$) require subtraction of partial products. Sign errors are common: $400 - 5$, not $400 + 5$.`}</li>
            </ul>
          </div>
        </>,

        /* SECTION 3: PERCENTAGES OF A QUANTITY
         */
        <>
          <h2>Percentages by Benchmark Building</h2>

          <p>
            A percentage is a decimal shift with the divisor 100 already attached. "P% of X" means{' '}
            {`$\\frac{P}{100} \\times X$`}, and the fastest mental route is to build any percentage
            from a few benchmarks you already know. Find 10% by dividing by 10. Find 1% by dividing
            by 100. Everything else is addition, halving, or doubling on top.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage Benchmarks</span>
            <div className="lrn-definition-desc">
              <p>Memorise these. Build all others from them.</p>
              <ul className="lrn-list">
                <li>{`$1\\% = \\div 100$`}</li>
                <li>{`$10\\% = \\div 10$`}</li>
                <li>{`$5\\% = 10\\% \\div 2$`}</li>
                <li>{`$15\\% = 10\\% + 5\\%$`}</li>
                <li>{`$25\\% = \\div 4$`}</li>
                <li>{`$50\\% = \\div 2$`}</li>
              </ul>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> questions using "per cent", "%", "what percentage",
            or asking for a new price after a percentage increase or decrease.
          </p>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                Look at the percentage. Match it to the nearest benchmark (1%, 5%, 10%, 25%, 50%).
              </li>
              <li>Solve that benchmark: divide the quantity by 10, 4, or 2 as needed.</li>
              <li>Build the target from pieces: 15% = 10% + 5%; 20% = 2 × 10%; 30% = 3 × 10%.</li>
              <li>Add the pieces together to get the final percentage amount.</li>
              <li>
                For percentage increase, add the amount to the original. For decrease, subtract it.
              </li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A question says: "Ten per cent of students play hockey, 15% play basketball, the rest
              play football. What percentage play football?" Before solving, predict: do you need to
              multiply anything?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No multiplication needed. The percentages must add to 100%.{' '}
                {`$100 - 10 - 15 = 75\\%$.`}
              </p>
            </details>
          </div>

          <h3>Worked Example</h3>

          <div className="lrn-steps">
            <p>"Work out 15% of $40."</p>
            <ol className="lrn-list">
              <li>{`$10\\%$ of $\\$40 = \\$4$`}</li>
              <li>{`$5\\%$ of $\\$40 = \\$2$ (half of $10\\%$)`}</li>
              <li>{`$15\\% = \\$4 + \\$2 = \\$6$`}</li>
            </ol>
            <p>
              <strong>Answer: $6</strong>
            </p>
          </div>

          <VizFigure title="Percent Bar Model" size="body" aspect="620/176">
            <Mcs_PercentBarModelInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the 15% example, why is 5% exactly half of 10%? What would break if you used
              something other than half?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`$5 = \\tfrac{1}{2} \\times 10$, so $5\\%$ of any amount is exactly half of $10\\%$ of that amount. Doubling the percentage doubles the amount, and halving it halves the amount. If you took a third of $10\\%$ you would get $3.33\\%$, not $5\\%$.`}
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                5% is <strong>half</strong> of 10%, not double. Doubling 10% gives 20%, not 5%.
              </li>
              <li>
                "A 25% reduction" means the new price is 75% of the original. Multiplying by 0.75,
                not 1.25.
              </li>
              <li>
                {`Rounding $10\\%$ too early on amounts with cents (like $\\$7$) can throw off $5\\%$ and $15\\%$ by a few cents.`}
              </li>
            </ul>
          </div>

          <h3>Percentage Increase and Decrease</h3>

          <p>
            {`To find a new amount after a change, find the percentage first, then add it for an increase or subtract it for a decrease. Example: a $\\$3.50$ fare rises $10\\%$. $10\\%$ of $\\$3.50$ is $\\$0.35$, so the new fare is $\\$3.85$. The `}
            <em>Discount, Profit, Loss</em>
            {` page drills this in full.`}
          </p>

          <h3>Working Backward: Find the Original Price</h3>

          <p>
            Sometimes you know the final price after a discount and need the price before it. A 25%
            cut leaves 75% of the original. So the sale price is 0.75 of what it was. To undo the
            cut, divide by 0.75.
          </p>

          <div className="lrn-steps">
            <p>"A cap sells for $12 after a 25% reduction. What was the original price?"</p>
            <ol className="lrn-list">
              <li>A 25% cut leaves 75% of the original.</li>
              <li>{`So $\\$12$ is $0.75$ of the original price.`}</li>
              <li>{`Original: $\\$12 \\div 0.75 = \\$16$`}</li>
              <li>{`Check: $25\\%$ of $\\$16 = \\$4$, and $\\$16 - \\$4 = \\$12$. Correct.`}</li>
            </ol>
            <p>
              <strong>Answer: $16</strong>
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              "Per cent" comes from <em>per centum</em>: per hundred. So 15% means 15 parts out of
              every 100. Dividing by 10, 4, or 2 is fast; dividing by 15 is not. The benchmark
              method swaps a hard division for two easy ones plus an addition.
            </p>
            <p>
              {`A percentage increase multiplies the original by $(1 + P/100)$. "Find P%, then add" is that same multiplication, split into two steps your head can hold at once.`}
            </p>
          </div>
        </>,

        /* SECTION 4: FRACTIONS OF QUANTITIES AND FRACTION↔DECIMAL CONVERSION
         */
        <>
          <h2>Fractions of Quantities and Fraction-to-Decimal Conversion</h2>

          <p>
            {`A fraction, a decimal, and a percentage are three notations for one quantity. $\\tfrac{3}{4}$, $0.75$, and $75\\%$ all mean the same number. "$\\tfrac{3}{4}$ of 20" means: split 20 into 4 equal parts and take 3 of them. The word "of" means multiply. Memorising the key fraction-to-decimal pairs lets you skip the division entirely.`}
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Key Fraction-Decimal Pairs</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>{`$\\tfrac{1}{2} = 0.5$`}</li>
                <li>{`$\\tfrac{1}{4} = 0.25$`}</li>
                <li>{`$\\tfrac{3}{4} = 0.75$`}</li>
                <li>{`$\\tfrac{1}{5} = 0.2$`}</li>
                <li>{`$\\tfrac{1}{8} = 0.125$`}</li>
                <li>{`$\\tfrac{1}{10} = 0.1$`}</li>
              </ul>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> questions using words like "three quarters of", "half
            of", "three-eighths of", or asking you to write a fraction as a decimal.
          </p>

          <p>
            In a fraction, the bottom number is the denominator and the top number is the numerator.
            In three-quarters, 4 is the denominator and 3 is the numerator.
          </p>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Identify the fraction ("three-quarters", "one-eighth", etc.).</li>
              <li>Check whether you know the decimal equivalent from memory. Use it if you do.</li>
              <li>
                If not, divide the quantity by the denominator (the bottom number) to find one part.
              </li>
              <li>
                Multiply that one part by the numerator (the top number) to get the fraction's
                share.
              </li>
              <li>
                Sanity-check: the result must be smaller than the whole when the fraction is less
                than 1.
              </li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`A question asks: "Work out $\\tfrac{1}{2} + \\tfrac{1}{4}$ and give the answer as a decimal." Before converting, predict whether the decimal will be less than 1.`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`Yes, it will be less than 1. $\\tfrac{1}{2} + \\tfrac{1}{4} = \\tfrac{3}{4} = 0.75$.`}
              </p>
            </details>
          </div>

          <h3>Worked Example</h3>

          <div className="lrn-steps">
            <p>"Work out three-eighths of $100."</p>
            <ol className="lrn-list">
              <li>
                {`$\\tfrac{1}{8}$ of $\\$100 = \\$12.50$`} (since {`$100 \\div 8 = 12.5$`})
              </li>
              <li>{`$\\tfrac{3}{8} = 3 \\times \\$12.50 = \\$37.50$`}</li>
            </ol>
            <p>
              <strong>Answer: $37.50</strong>
            </p>
          </div>

          <VizFigure title="Fraction–Decimal Equivalence" size="body" aspect="auto">
            <Mcs_FractionDecimalEquivalenceInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`Why do you divide by 8 first and then multiply by 3, rather than multiplying 3 × \\$100 first?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Dividing first keeps the numbers small. $100 \\div 8 = 12.5$, then $12.5 \\times 3 = 37.5$. The other order gives $3 \\times 100 = 300$, then $300 \\div 8 = 37.5$. Both are correct, but dividing first means you never handle a number larger than 100.`}
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                Confusing {`$\\tfrac{1}{8} = 0.125$`} with {`$\\tfrac{1}{5} = 0.2$`}. They look
                similar but differ by 0.075.
              </li>
              <li>
                Thinking {`$\\tfrac{3}{4}$`} of 60 means subtracting {`$60 \\div 4$`}. It means
                adding three lots of {`$60 \\div 4$`}.
              </li>
              <li>
                Expecting one-third to stop as a decimal. It doesn't.{' '}
                {`$\\tfrac{1}{3} = 0.333\\ldots$`} goes on forever.
              </li>
            </ul>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`A fraction names a division: $\\tfrac{3}{4}$ is 3 divided by 4. "Of" in English means multiply when applied to a fraction, so "$\\tfrac{3}{4}$ of 20" is $\\tfrac{3}{4} \\times 20$. This equals $3 \\times 20 \\div 4 = 15$.`}
            </p>
            <p>
              {`A fraction-to-decimal pair is worth memorising only when the decimal stops. The decimal stops only when the denominator divides some power of 10. The denominators 2, 4, 5, 8, 10, 20, and 25 all do. Denominators like 3, 6, 7, and 9 never do, which is why $\\tfrac{1}{3} = 0.333\\ldots$ runs forever.`}
            </p>
          </div>
        </>,

        /* SECTION 5: RATE, RATIO, AND SHARING
         */
        <>
          <h2>Rate, Ratio, and Sharing</h2>

          <p>
            A rate is a quantity per single unit of another: dollars per book, kilometres per hour,
            litres per minute. Find the unit rate first and any total is one multiplication away.
            This is the same place-value logic as before, applied to two different units instead of
            two different decimal places.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Unit Rate Strategy</span>
            <div className="lrn-definition-desc">
              <p>
                Step 1: find the cost (or amount) for one unit. Step 2: multiply by the number of
                units you need.
              </p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> questions saying "each", "per", "shared equally
            between", "how many … for $X?".
          </p>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Identify what is shared and what stays the same (the rate).</li>
              <li>Find the unit rate: divide the total by the quantity given.</li>
              <li>Multiply the unit rate by the new quantity you need.</li>
              <li>
                Sanity-check the direction: more items means more cost; faster speed means less
                time.
              </li>
              <li>Watch the units: currency stays in dollars and cents, not mixed.</li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              "Three books cost $6. How much will five books cost?" Before you solve it, predict
              whether you need division, multiplication, or both.
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Both. Divide first to find the cost per book, then multiply to find the cost of
                five.
              </p>
            </details>
          </div>

          <h3>Worked Example</h3>

          <div className="lrn-steps">
            <p>"The cost of five vegeburgers is $7.50. How much will six cost?"</p>
            <ol className="lrn-list">
              <li>{`Cost per burger: $\\$7.50 \\div 5 = \\$1.50$`}</li>
              <li>{`Cost of 6: $\\$1.50 \\times 6 = \\$9.00$`}</li>
            </ol>
            <p>
              <strong>Answer: $9.00</strong>
            </p>
          </div>

          <VizFigure title="Double Number Line · Unit Rate" size="body" aspect="620/192">
            <Mcs_DoubleNumberLineRateInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why do you divide $7.50 by 5 first, instead of trying to scale 5 burgers to 6
              directly?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Finding the unit rate (one burger) gives you a general anchor. From one you can
                reach any quantity with a single multiplication. Trying to scale 5 to 6 directly
                requires a fractional multiplier ({`$\\tfrac{6}{5}$`}), which is harder to apply
                mentally.
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                Dividing when you should multiply, or vice versa. More items always means more cost.
                Check your answer goes in the right direction.
              </li>
              <li>
                Mixing up the currency and the item count. "$6 for 3 books" means 6 is the dollars
                and 3 is the count, not the other way around.
              </li>
              <li>A dozen is 12 items, not 10. "Price per dozen" divided by 12, not by 10.</li>
            </ul>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Sharing equally means division by the number of shares. Scaling a per-unit rate to a
              new quantity means multiplication. Rate problems always do both, and always in that
              order: divide first to land on one, multiply second to reach the new total. Going
              through one is what makes the rest a single step.
            </p>
          </div>
        </>,

        /* SECTION 6: TIME ARITHMETIC AND THE 24-HOUR CLOCK
         */
        <>
          <h2>Time Arithmetic and the 24-Hour Clock</h2>

          <p>
            Time is the one place mental arithmetic breaks from base 10. Minutes and seconds run in
            base 60, hours in base 24. You cannot shift a decimal point to convert hours into
            minutes. Instead you count past natural boundaries, and the hour mark is the checkpoint.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Elapsed Time Strategy</span>
            <div className="lrn-definition-desc">
              <p>Count up from the start time to the end time in stages.</p>
              <p>
                Stage 1: count up to the next whole hour. Stage 2: count remaining full hours. Stage
                3: add leftover minutes.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">24-Hour Clock Rule</span>
            <div className="lrn-definition-desc">
              <p>For p.m. times, add 12 to the hour. For a.m. times, the hour stays the same.</p>
              <p>
                To convert back: subtract 12 from any hour greater than 12. Write four digits (e.g.
                "twenty to four" = 15:40).
              </p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> questions asking for elapsed time, departure or
            arrival times, or 24-hour clock conversions.
          </p>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>For elapsed time: identify the start time and the end time.</li>
              <li>Count from the start to the next whole hour. Note the minutes.</li>
              <li>Count full hours from that whole hour to the hour before the end.</li>
              <li>Add the remaining minutes from the last whole hour to the end time.</li>
              <li>
                For 24-hour conversion: a.m. stays the same; p.m. add 12. Midnight is 00:00, not
                24:00.
              </li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              "I arrive at 5:20 p.m. My train leaves at 6:10 p.m. How long do I wait?" Before
              computing, predict: is the wait more or less than one hour?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Less than one hour. The gap is under 60 minutes. Count: 5:20 to 6:00 is 40 minutes.
                6:00 to 6:10 is 10 minutes. Total: 50 minutes.
              </p>
            </details>
          </div>

          <h3>Worked Example</h3>

          <div className="lrn-steps">
            <p>"I arrive at 5:20 p.m., train due at 6:10 p.m. How long do I wait?"</p>
            <ol className="lrn-list">
              <li>5:20 to 6:00: 40 minutes</li>
              <li>6:00 to 6:10: 10 minutes</li>
              <li>Total: 40 + 10 = 50 minutes</li>
            </ol>
            <p>
              <strong>Answer: 50 minutes</strong>
            </p>
          </div>

          <VizFigure title="Time Elapsed Arc" size="body" aspect="auto">
            <Mcs_TimeElapsedArcInline />
          </VizFigure>

          <h3>Worked Example: 24-Hour Conversion</h3>

          <div className="lrn-steps">
            <p>"Write 6:30 p.m. on the 24-hour clock."</p>
            <ol className="lrn-list">
              <li>{`The time is p.m., so add 12 to the hour: $6 + 12 = 18$.`}</li>
              <li>Keep the minutes the same: 30.</li>
            </ol>
            <p>
              <strong>Answer: 18:30</strong>
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does counting in two stages (to the hour, then past) work better than subtracting
              5:20 from 6:10 directly?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Direct subtraction gives 50 minutes in this case, but when the minutes are bigger at
                the start (e.g., 5:50 to 6:10), you would have to borrow 60 minutes from the hours
                column. Counting in stages avoids borrowing because each stage stays within a
                natural boundary (the hour).
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                12:00 a.m. is midnight, not noon. 12:00 p.m. is noon. These two are the most common
                mix-ups.
              </li>
              <li>
                Elapsed time problems that cross midnight: the end time is earlier on the clock but
                the next day. Add 24 hours to the end time before subtracting.
              </li>
              <li>12 noon in 24-hour format is 12:00, not 00:00. Only midnight is 00:00.</li>
            </ul>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Bridge-the-hour works because the hour mark is the only place the count rolls over.
              Cross the hour first and you never have to borrow 60 minutes from the hours column.
              Crossing midnight is the same idea one column up: add 24 hours to the end time, then
              subtract.
            </p>
            <p>
              The 24-hour clock is a relabel, not new maths. 1 p.m. becomes 13:00 because{' '}
              {`$1 + 12 = 13$`}. The relabel removes the a.m./p.m. tag, which matters when schedules
              cross noon or cross time zones.
            </p>
          </div>
        </>,

        /* SECTION 7: AVERAGES (FORWARD AND BACKWARD)
         */
        <>
          <h2>Averages (Mean): Forward and Backward</h2>

          <p>
            The mean is the total divided by the count. It sits at the balance point of the numbers.
            Picture each value as a weight on a ruler. The mean is the spot where the ruler balances
            flat.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Mean Formula</span>
            <div className="lrn-definition-desc">
              <p>{`Mean $= \\dfrac{\\text{sum of all values}}{\\text{count of values}}$`}</p>
              <p>
                Backward version: if you know the mean and the count, the total{' '}
                {`$= \\text{mean} \\times \\text{count}$`}.
              </p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> questions with "find the average", "find the mean",
            or (backwards) "the mean is X, one value is missing, find it."
          </p>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>For forward mean: add all the values together.</li>
              <li>Divide the sum by how many values there are.</li>
              <li>Sanity-check: the mean must lie between the smallest and the largest values.</li>
              <li>For backward mean: multiply the mean by the count to find the total sum.</li>
              <li>Subtract the known values from the total. What remains is the missing value.</li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              "Find the average of 2, 5, and 8." Before computing, predict the answer. The three
              numbers are evenly spaced. What does that tell you about the mean?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                For evenly spaced numbers the mean equals the middle value. The middle value here is
                5.
              </p>
            </details>
          </div>

          <h3>Worked Example</h3>

          <div className="lrn-steps">
            <p>"Find the average of 2, 5, and 8."</p>
            <ol className="lrn-list">
              <li>{`Sum: $2 + 5 + 8 = 15$`}</li>
              <li>{`Mean: $15 \\div 3 = 5$`}</li>
            </ol>
            <p>
              <strong>Answer: 5</strong>
            </p>
          </div>

          <VizFigure title="Average Balance Bars" size="body" aspect="620/224">
            <Mcs_AverageBalanceBarsInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is the mean of 2, 5, and 8 exactly 5, and not 4 or 6? What makes 5 the balance
              point?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`At the mean, the amounts above and below balance. $8 - 5 = 3$ (above) and $5 - 2 = 3$ (below). The excess above exactly equals the deficit below. Any other value would leave more on one side than the other.`}
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                Rounding values mid-calculation. Always add the exact values first, then divide once
                at the end.
              </li>
              <li>
                Off-by-one in the count. "Three girls" means divide by 3, not 2. Count the values,
                don't guess.
              </li>
              <li>
                The mean only lands on the middle value when the numbers are evenly spaced. Do not
                assume it always sits in the middle.
              </li>
            </ul>
          </div>

          <h3>Backward Mean: Finding a Missing Value</h3>

          <p>
            Sometimes you know the mean and need a missing value. Run the formula backward: total
            equals mean times count. Find the total, subtract what you know, and the gap is the
            missing value.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              "The mean age of three girls is 12. Two girls are 9 and 16. How old is the third?"
              Before solving, predict: must the third age be above or below 12?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Below 12. The two known ages (9 and 16) already average 12.5, just above the target.
                So the third must pull the mean down.
              </p>
            </details>
          </div>

          <div className="lrn-steps">
            <p>
              "The mean age of three girls is 12. Two girls are 9 and 16. How old is the third?"
            </p>
            <ol className="lrn-list">
              <li>{`Total for 3 girls: $12 \\times 3 = 36$`}</li>
              <li>{`Two known: $9 + 16 = 25$`}</li>
              <li>{`Third: $36 - 25 = 11$`}</li>
            </ol>
            <p>
              <strong>Answer: 11 years old</strong>
            </p>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Mean times count always equals the total, no matter how the individual values are arranged. That single fact runs both directions. Forward: divide the total by the count to get the mean. Backward: multiply the mean by the count to get the total, then subtract the known values to isolate the unknown.`}
            </p>
          </div>
        </>,

        /* SECTION 8: SPEED, DISTANCE, TIME
         */
        <>
          <h2>Speed, Distance, Time</h2>

          <p>
            Speed is a rate: kilometres per hour is the same structure as dollars per book. The
            unit-rate move from the rate section is the engine here. Know any two of speed,
            distance, and time and the third is one multiplication or one division away.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">The Three-Way Relationship</span>
            <div className="lrn-definition-desc">
              <p>{`$\\text{Distance} = \\text{Speed} \\times \\text{Time}$`}</p>
              <p>{`$\\text{Speed} = \\dfrac{\\text{Distance}}{\\text{Time}}$`}</p>
              <p>{`$\\text{Time} = \\dfrac{\\text{Distance}}{\\text{Speed}}$`}</p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> questions mentioning km per hour (or miles per hour),
            travel time, or journey distance.
          </p>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Write {`$d = s \\times t$`}. Cover the unknown with a finger.</li>
              <li>
                The two visible quantities show what to do: cover {`$d$`} and you multiply; cover{' '}
                {`$t$`} and you divide {`$d \\div s$`}; cover {`$s$`} and you divide {`$d \\div t$`}
                .
              </li>
              <li>Convert time to hours before you multiply or divide. 30 minutes is 0.5 hours.</li>
              <li>
                Convert speed if the time unit differs (km/h with minutes: convert minutes to hours
                first).
              </li>
              <li>Sanity-check: slower speed means more time for the same distance, not less.</li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              "A car travels at 80 km per hour and takes 30 minutes. Then the speed halves to 40 km
              per hour." Predict: does the journey time double, halve, or stay the same?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It doubles. When speed halves and distance stays fixed, time must double. This is
                inverse proportion: when one quantity goes up, the other goes down by the same
                factor.
              </p>
            </details>
          </div>

          <h3>Worked Example</h3>

          <div className="lrn-steps">
            <p>"A car at 80 km per hour takes 30 minutes. How long at 40 km per hour?"</p>
            <ol className="lrn-list">
              <li>
                {`Distance: $80 \\times \\tfrac{1}{2} = 40$ km (30 min $= \\tfrac{1}{2}$ hour)`}
              </li>
              <li>{`Time at 40 km per hour: $40 \\div 40 = 1$ hour`}</li>
            </ol>
            <p>
              <strong>Answer: 1 hour</strong>
            </p>
          </div>

          <VizFigure title="Speed–Distance–Time Triangle" size="body" aspect="auto">
            <Mcs_SpeedDistanceTimeTriangleInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is 30 minutes converted to {`$\\tfrac{1}{2}$`} hour before multiplying by speed?
              What would go wrong without this step?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Speed is measured in km per hour. Time must be in hours to get distance in km. Using
                30 (minutes) instead of 0.5 (hours) would give {`$80 \\times 30 = 2400$`} km, which
                is wrong.
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                Mismatched units: if speed is in km/h, time must be in hours. Convert minutes to
                hours before calculating.
              </li>
              <li>
                30 minutes is 0.5 hours, not 0.3. Do not treat the decimal as if it were base 10
                time.
              </li>
              <li>
                Halving the speed does not halve the distance unless time also stays the same. Speed
                and time are inversely related for a fixed distance.
              </li>
            </ul>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Speed is defined as distance covered per unit time. So $d = s \\times t$ by definition. The other two forms are just algebraic rearrangements: divide both sides by $s$ to get $t$, or by $t$ to get $s$. The "triangle" trick is just that algebra made visual.`}
            </p>
          </div>
        </>,

        /* SECTION 9: PERIMETER, AREA, AND GEOMETRY
         */
        <>
          <h2>Perimeter, Area, and Geometry</h2>

          <p>
            Geometry in mental arithmetic rests on three formulas and two angle facts. Perimeter
            adds lengths because it walks the edge. Area multiplies them because it counts the unit
            squares that tile the shape. The angle facts are constants you memorise once: 180° in a
            triangle, 360° in a full turn.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Key Formulas</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>
                  <strong>Perimeter of rectangle:</strong> {`$P = 2(l + w)$`}
                </li>
                <li>
                  <strong>Area of rectangle:</strong> {`$A = l \\times w$`}
                </li>
                <li>
                  <strong>Angles in a triangle sum to 180°.</strong>
                </li>
                <li>
                  <strong>Clock angle:</strong> 30° per hour (360° in 12 hours).
                </li>
                <li>
                  <strong>Pie chart sector angle:</strong>{' '}
                  {`$(\\text{percentage} \\div 100) \\times 360°$`}. A sector is one slice of the
                  pie chart.
                </li>
              </ul>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> questions mentioning "distance around", "area",
            "angle", or "triangle".
          </p>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>For perimeter of a rectangle: add length and width, then double the sum.</li>
              <li>
                For area of a rectangle: multiply length by width. The answer is in square units.
              </li>
              <li>
                For a missing triangle angle: add the two known angles, then subtract from 180.
              </li>
              <li>For a clock angle: count the hours between the hands, then multiply by 30.</li>
              <li>
                For a pie sector: multiply the percentage by 3.6 (since 360 divided by 100 is 3.6).
              </li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              "A hockey pitch is 25 m by 40 m. Find the distance around it." Predict: is the
              perimeter about 100 m, 130 m, or 200 m?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Closer to 130 m. $2 \\times (25 + 40) = 2 \\times 65 = 130$ m.`}</p>
            </details>
          </div>

          <h3>Worked Examples</h3>

          <div className="lrn-steps">
            <p>"A hockey pitch is 25 m by 40 m. Find the distance around it."</p>
            <ol className="lrn-list">
              <li>{`Add length and width: $25 + 40 = 65$`}</li>
              <li>{`Double the sum: $2 \\times 65 = 130$ m`}</li>
            </ol>
            <p>
              <strong>Answer: 130 m</strong>
            </p>
          </div>

          <div className="lrn-steps">
            <p>"A lawn is 15 m long and 7 m wide. Find its area."</p>
            <ol className="lrn-list">
              <li>{`Multiply length by width: $15 \\times 7$`}</li>
              <li>{`Split for ease: $15 \\times 7 = 70 + 35 = 105$`}</li>
            </ol>
            <p>
              <strong>{`Answer: 105 m$^2$`}</strong>
            </p>
          </div>

          <div className="lrn-steps">
            <p>"What angle is between the clock hands at 5 o'clock?"</p>
            <ol className="lrn-list">
              <li>Count the hour marks from 12 to 5: that is 5 positions.</li>
              <li>{`Multiply by 30°: $5 \\times 30 = 150°$`}</li>
            </ol>
            <p>
              <strong>Answer: 150°</strong>
            </p>
          </div>

          <div className="lrn-steps">
            <p>"A pie chart slice is 20% of the data. Find its sector angle."</p>
            <ol className="lrn-list">
              <li>{`A full circle is 360°, so each 1% is $360 \\div 100 = 3.6°$.`}</li>
              <li>{`Multiply: $20 \\times 3.6 = 72°$`}</li>
            </ol>
            <p>
              <strong>Answer: 72°</strong>
            </p>
          </div>

          <div className="lrn-steps">
            <p>"Two angles of a triangle are 65° and 20°. Find the third."</p>
            <ol className="lrn-list">
              <li>{`$65 + 20 = 85°$`}</li>
              <li>{`Third angle: $180 - 85 = 95°$`}</li>
            </ol>
            <p>
              <strong>Answer: 95°</strong>
            </p>
          </div>

          <VizFigure title="Rectangle and Triangle" size="body" aspect="auto">
            <Mcs_GeometryShapesInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does 30° per hour work for clock angles? Where does 30° come from?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A full circle is 360°. The clock face has 12 hour positions. $360° \\div 12 = 30°$ per position. Each hour the minute hand completes one full circle (360°) and the hour hand advances exactly 30°.`}
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                Confusing area (square units: {`$\\text{m}^2$`}) with perimeter (linear units: m).
                They measure different things and cannot be compared.
              </li>
              <li>
                Using length times width for a triangle. A triangle's area is{' '}
                {`$\\tfrac{1}{2} \\times \\text{base} \\times \\text{height}$`}, not base times
                height.
              </li>
              <li>
                Angles around a full point sum to 360°, not 180°. The 180° rule applies only to
                angles on a straight line or inside a triangle.
              </li>
            </ul>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Perimeter is the total distance around the edge, so you add all side lengths. For a
              rectangle two sides are length and two are width, giving {`$2(l + w)$`}. Area counts
              how many unit squares tile the shape: a rectangle {`$l$`} units wide and {`$w$`} units
              tall fits exactly {`$l \\times w$`} squares.
            </p>
            <p>
              The triangle angle-sum rule comes from parallel lines. Draw a line through the top
              corner parallel to the base. The three angles at that line match the triangle's three
              inside corners. Together they fill exactly a straight line (180°).
            </p>
            <p>
              A pie chart slice grows in step with its percentage. A full circle is 100% of the
              data, so every 1% is worth 3.6°.
            </p>
          </div>
        </>,

        /* SECTION 10: POWERS, ROOTS, AND APPROXIMATION
         */
        <>
          <h2>Powers, Roots, and Approximation</h2>

          <p>
            You meet powers and roots when you square a side, step between two whole-number roots,
            or hear "between which two whole numbers." The mental move is bracketing. Find the
            perfect squares just below and just above your target. The square root sits between
            their roots, no calculator needed.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Perfect Squares to Know</span>
            <div className="lrn-definition-desc">
              <p>A perfect square is a number you get by squaring a whole number.</p>
              <p>{`$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, \\ldots$`}</p>
              <p>
                If a number falls between two perfect squares that sit next to each other, its
                square root lies between the two whole numbers those squares came from.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Perfect Cubes to Know</span>
            <div className="lrn-definition-desc">
              <p>{`$1, 8, 27, 64, 125, 216, 343, 512, 729, 1000$`}</p>
              <p>
                A cube is a number times itself three times. So{' '}
                {`$4^3 = 4 \\times 4 \\times 4 = 64$`}. A cube root undoes that: the cube root of 64
                is 4. Memorise these ten and you read most cube-root questions straight off the
                list.
              </p>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> questions with "squared", "cubed", "square root",
            "cube root", "to the nearest centimetre", or "between which two consecutive whole
            numbers."
          </p>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>
                Find the largest perfect square (or cube) that is still smaller than your target.
              </li>
              <li>Find the next perfect square (or cube) above your target.</li>
              <li>The root lies between the roots of those two brackets.</li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              "Between which two whole numbers does the square root of 58 lie?" Before checking,
              which two perfect squares is 58 between?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                {`$49 = 7^2$ and $64 = 8^2$. Since $49 < 58 < 64$, we have $7 < \\sqrt{58} < 8$.`}
              </p>
            </details>
          </div>

          <h3>Worked Example</h3>

          <div className="lrn-steps">
            <p>"Between which two whole numbers does the square root of 58 lie?"</p>
            <ol className="lrn-list">
              <li>{`$7^2 = 49$ and $8^2 = 64$`}</li>
              <li>{`$49 < 58 < 64$`}</li>
              <li>{`Therefore $7 < \\sqrt{58} < 8$`}</li>
            </ol>
            <p>
              <strong>Answer: between 7 and 8</strong>
            </p>
          </div>

          <VizFigure title="Square Root Bracket" size="body" aspect="620/160">
            <Mcs_SquareRootBracketInline />
          </VizFigure>

          <h3>Worked Example: Cube Root</h3>

          <div className="lrn-steps">
            <p>"What is the cube root of 125?"</p>
            <ol className="lrn-list">
              <li>The cube root asks: what number times itself three times gives 125?</li>
              <li>{`Scan the cube list: $4^3 = 64$ is too small, $5^3 = 125$ matches.`}</li>
            </ol>
            <p>
              <strong>Answer: 5</strong>
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does knowing {`$7^2 = 49$`} and {`$8^2 = 64$`} tell you where {`$\\sqrt{58}$`}{' '}
              lies, without computing it exactly?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Bigger numbers have bigger roots, so $49 < 58 < 64$ forces $7 < \\sqrt{58} < 8$. The squares page proves why this always holds; here you just use it for speed.`}
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                {`$\\sqrt{58}$ is about 7.6, not 7.5. The square-root curve bends, so the midpoint between $\\sqrt{49}$ and $\\sqrt{64}$ is not the root of the midpoint of 49 and 64.`}
              </li>
              <li>
                Squaring and doubling are different operations. {`$4^2 = 16$`}, not 8. Don't confuse{' '}
                {`$n^2$`} with {`$2n$`}.
              </li>
            </ul>
          </div>
        </>,

        /* SECTION 11: UNIT CONVERSIONS
         */
        <>
          <h2>Unit Conversions</h2>

          <p>
            Unit conversion relabels a quantity without changing what it measures. For length, mass,
            and capacity the relabel is a decimal shift in disguise: "milli", "centi", and "kilo"
            are 1/1000, 1/100, and 1000. Time is the one trap, because it runs in base 60. Treat
            time conversions separately.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Key Conversion Factors</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>10 mm = 1 cm; 100 cm = 1 m; 1000 m = 1 km</li>
                <li>1000 g = 1 kg</li>
                <li>60 s = 1 min; 60 min = 1 hour; 24 hours = 1 day; 7 days = 1 week</li>
              </ul>
            </div>
          </div>

          <p>
            <strong>When to use this:</strong> questions mixing millimetres and centimetres,
            kilometres and metres, grams and kilograms, or minutes and hours.
          </p>

          <h3>How To Do This In Your Head</h3>

          <div className="lrn-steps">
            <ol className="lrn-list">
              <li>Identify the source unit and the target unit (e.g. cm to mm).</li>
              <li>Find the scale factor between them (1 cm = 10 mm, so the factor is 10).</li>
              <li>Going to a smaller unit: multiply. Going to a larger unit: divide.</li>
              <li>
                Apply the scale factor. The physical amount stays the same; only the label changes.
              </li>
              <li>
                Sanity-check: more of a smaller unit, fewer of a larger unit. 55 mm is more than 5.5
                cm in number, but the same length.
              </li>
            </ol>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              "How many millimetres are in 5½ cm?" Before computing, predict: will the answer be
              bigger or smaller than 5½?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>Bigger. Millimetres are smaller than centimetres, so you need more of them.</p>
            </details>
          </div>

          <h3>Worked Example</h3>

          <div className="lrn-steps">
            <p>"How many minutes are in 8 hours?"</p>
            <ol className="lrn-list">
              <li>1 hour = 60 minutes</li>
              <li>{`$8 \\times 60 = 480$ minutes`}</li>
            </ol>
            <p>
              <strong>Answer: 480 minutes</strong>
            </p>
          </div>

          <VizFigure title="Unit Conversion Ladder" size="body" aspect="auto">
            <Mcs_UnitConversionLadderInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the millimetre example, why does converting from cm to mm require multiplication
              rather than division?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                You are converting to a smaller unit. Each centimetre contains 10 millimetres, so
                you get more of them. Going to a smaller unit always means multiplying. Going to a
                larger unit always means dividing.
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                1 kg is 1000 g, but 1 kg is 1,000,000 mg (milligrams). Don't confuse grams with
                milligrams when the question mentions "mg".
              </li>
              <li>
                Converting in the wrong direction: going from km to m multiplies by 1000; going from
                m to km divides by 1000. Make sure you know which way you are going.
              </li>
              <li>
                2.5 hours is 150 minutes, not 250. Time is base 60, not base 10. Do not multiply 2.5
                by 100.
              </li>
            </ul>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Metric prefixes are powers of 10, so every metric conversion is the decimal shift from
              Section 2 with a unit label attached. 1 km to metres is the same physical move as 1 to
              1000 in decimal-shift terms.
            </p>
            <p>
              Time runs on base 60 by historical convention. 60 minutes per hour is not a design
              choice you can shift around. Time conversions need true multiplication or division by
              60, never a decimal shift.
            </p>
          </div>
        </>,

        /* SECTION 12: MATHEMATICAL MAGIC (THE STAR SECTION)
         */
        <>
          <h2>Mathematical Magic: Adding Five Numbers in Seconds</h2>

          <p>
            You can add five five-digit numbers faster than a calculator. The move is a complement:
            for every awkward addition, you secretly pair it with another number so the two sum to
            99,999. Complements turn hard addition into a one-step lookup. The same logic powers
            "25% off means 75% remains" and any "how far to the next round number" question.
          </p>

          <div className="lrn-callout">
            <p>
              <strong>The Challenge.</strong> A friend picks a number A between 10,000 and 99,999.
              You pick B and C freely, then quietly pick D and E using the rule below. The friend
              types all five numbers into a calculator. You announce the total before they finish
              the last digit.
            </p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A = 47563. The total of all five numbers will start with the digit 2. Why do you think
              that is?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Because the total is always close to 200,000, and specifically it equals A + 199,998
                (which for A near 47,000 gives 247,561). The leading digit is 2.
              </p>
            </details>
          </div>

          <h3>The Secret Rule</h3>

          <p>
            You pick D so that {`$B + D = 99{,}999$`}. You pick E so that {`$C + E = 99{,}999$`}.
          </p>
          <p>To find D from B: subtract each digit of B from 9. Do the same for E from C.</p>

          <div className="lrn-proof">
            <span className="lrn-proof-label">DERIVATION</span>
            <p>The five numbers are A, B, C, D, E.</p>
            <p>{`By the secret rule: $B + D = 99{,}999$ and $C + E = 99{,}999$.`}</p>
            <p>So the total is:</p>
            <div className="lrn-eq">{`$$A + B + C + D + E = A + (B + D) + (C + E)$$`}</div>
            <div className="lrn-eq">{`$$= A + 99{,}999 + 99{,}999$$`}</div>
            <div className="lrn-eq">{`$$= A + 199{,}998$$`}</div>
            <p>
              Now write the answer as a number in the hundred-thousands. Since {`$A$`} is between
              10,000 and 99,999, the total lies between 209,998 and 299,997.
            </p>
            <p>
              {`The leading digit is always $\\mathbf{2}$. The remaining five digits equal $A - 2$.`}
            </p>
            <div className="lrn-eq">{`$$\\text{Answer} = 200{,}000 + (A - 2)$$`}</div>
            <p>
              <strong>To state the answer instantly:</strong> say "2", then say the number A minus
              2.
            </p>
          </div>

          <VizFigure title="Math Magic Complement" size="body" aspect="auto">
            <Mcs_MathMagicComplementInline />
          </VizFigure>

          <h3>Worked Examples</h3>

          <div className="lrn-steps">
            <p>A = 47563, B = 25608, C = 87265.</p>
            <ol className="lrn-list">
              <li>
                D = 99999 − 25608 = 74391 (subtract each digit of B from 9: 9−2=7, 9−5=4, 9−6=3,
                9−0=9, 9−8=1).
              </li>
              <li>E = 99999 − 87265 = 12734 (9−8=1, 9−7=2, 9−2=7, 9−6=3, 9−5=4).</li>
              <li>{`Total = $A + 199{,}998 = 47{,}563 + 199{,}998 = 247{,}561$`}</li>
              <li>{`Quick answer: "2" then $47563 - 2 = 47561$. Total: $247{,}561$.`}</li>
            </ol>
            <p>
              <strong>Answer: 247,561</strong> (verify: 47563 + 25608 + 87265 + 74391 + 12734 =
              247,561)
            </p>
          </div>

          <div className="lrn-steps">
            <p>A = 58627, B = 43817, C = 38065.</p>
            <ol className="lrn-list">
              <li>D = 99999 − 43817 = 56182</li>
              <li>E = 99999 − 38065 = 61934</li>
              <li>{`Total: "2" then $58627 - 2 = 58625$. Total: $258{,}625$.`}</li>
            </ol>
            <p>
              <strong>Answer: 258,625</strong>
            </p>
          </div>

          <div className="lrn-faded">
            <span className="lrn-faded-label">FADED EXERCISE</span>
            <p>A = 31400, B = 72195, C = 54830. Apply the trick.</p>
            <ol className="lrn-list">
              <li>D = 99999 − 72195 = ______</li>
              <li>E = 99999 − 54830 = ______</li>
              <li>Quick answer: "2" then 31400 − 2 = ______. Total: ______</li>
            </ol>
            <details className="lrn-faded-reveal">
              <summary>Full solution</summary>
              <p>
                D = 27804. E = 45169. Quick answer: "2" then 31398. Total: 231,398. Verify:{' '}
                {`$31{,}400 + 72{,}195 + 54{,}830 + 27{,}804 + 45{,}169 = 231{,}398$.`}
              </p>
            </details>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The derivation says the total equals A + 199,998. Why does A + 199,998 always produce
              a number whose first digit is 2?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A is in the ten-thousands, so $10{,}000 \\leq A \\leq 99{,}999$. Adding $199{,}998$ gives a range of $209{,}998$ to $299{,}997$. Every number in this range starts with 2. The second digit is never 0 either, because $A \\geq 10{,}000$ pushes the total above $209{,}998$.`}
              </p>
            </details>
          </div>

          <div className="lrn-callout">
            <span className="lrn-callout-label">Watch For</span>
            <ul className="lrn-list">
              <li>
                D must equal 99999 minus B exactly. One off-by-one error ruins the trick and the
                total will be wrong by 1 or more.
              </li>
              <li>
                The "2" prefix only works if A is at least 10000. If A were smaller (which the rules
                prevent), the borrow would cascade.
              </li>
              <li>
                This trick requires subtracting B from 99999 and C from 99999 quickly. Practise
                nines-complement subtraction (each digit subtracted from 9) separately before
                performing the trick in public.
              </li>
            </ul>
          </div>

          <div className="lrn-callout">
            <p>
              <strong>Try it.</strong> Once the nines-complement subtraction is automatic, race a
              friend with a calculator. Your brain finishes before their last digit lands.
            </p>
          </div>
        </>
      ]
    },

    /* PRACTICE CARDS (~42 cards, interleaved across sections)
     */
    practice: [
      {
        q: 'Find the cost in dollars of ten books at 35 cents each.',
        a: 'Result: $\\$3.50$. Multiply 35 cents by 10: shift the decimal one place right. 35 cents becomes 350 cents = $\\$3.50$.'
      },
      {
        q: 'Ten per cent of students play hockey, 15% play basketball. What percentage play football?',
        a: 'Result: 75%. The three percentages must sum to 100, so the football share is what is left: 100 − 10 − 15 = 75. No multiplication needed.'
      },
      {
        q: 'I arrive at the railway station at 5:20 p.m. My train is due at 6:10 p.m. How long do I wait?',
        a: 'Result: 50 minutes. Count up in two stages: 5:20 to 6:00 is 40 minutes. 6:00 to 6:10 is 10 minutes. 40 + 10 = 50 minutes. Counting through the hour boundary avoids borrowing in the minutes column.'
      },
      {
        q: 'What number is ten times as big as 0.65?',
        a: 'Result: 6.5. Multiplying by 10 shifts the decimal one place right. 0.65 becomes 6.5. Each place in our number system is exactly 10 times the place to its right.'
      },
      {
        q: 'In a room of 20 people, three quarters were women. How many women were there?',
        a: 'Result: 15 women. Divide 20 into 4 equal parts: 20 ÷ 4 = 5. Take 3 parts: 5 × 3 = 15. "Three quarters of X" means divide by 4 then multiply by 3.'
      },
      {
        q: 'Find the average of 12 and 20.',
        a: 'Result: 16. Add: 12 + 20 = 32. Divide by 2: 32 ÷ 2 = 16. The mean is the total divided by the count. For two numbers it always falls exactly halfway between them.'
      },
      {
        q: 'A car travelling at 80 km per hour takes 30 minutes for a journey. How long will it take at 40 km per hour?',
        a: 'Result: 1 hour (60 minutes). First find the distance: 80 × 0.5 = 40 km (30 min = 0.5 hour). Then divide by the new speed: 40 ÷ 40 = 1 hour. When speed halves and distance stays fixed, time doubles. This is inverse proportion.'
      },
      {
        q: 'Work out 1% of $\\$600$.',
        a: 'Result: $\\$6$. 1% means divide by 100. $\\$600$ ÷ 100 = $\\$6$. Dividing by 100 shifts the decimal two places left.'
      },
      {
        q: 'Three books cost $\\$6$. How much will five books cost?',
        a: 'Result: $\\$10$. Cost per book: $\\$6$ ÷ 3 = $\\$2$. Cost of 5: $\\$2$ × 5 = $\\$10$. Unit-rate problems always work in two steps: find the cost of one, then scale up to the quantity you need.'
      },
      {
        q: 'What number is a hundred times as big as 0.605?',
        a: 'Result: 60.5. Multiplying by 100 shifts the decimal two places right. 0.605 → 6.05 → 60.5. Moving the decimal once gives 6.05; a second move gives 60.5. Three moves would give 605, which is multiplication by 1000.'
      },
      {
        q: 'Write one-fifth as a decimal.',
        a: 'Result: 0.2. One-fifth equals 2/10. Write 2/10 as a decimal: 0.2. Multiplying top and bottom by 2 gives an equivalent fraction with denominator 10, which is easy to read as a decimal.'
      },
      {
        q: 'A prize of $\\$400 000$ is shared equally between 100 people. How much does each person receive?',
        a: 'Result: $\\$4,000$. Divide by 100: shift the decimal two places left. $\\$400,000$ ÷ 100 = $\\$4,000$. Dividing by 100 is the same as dividing by 10 twice.'
      },
      {
        q: 'Find the average of 3, 7 and 8.',
        a: 'Result: 6. Sum: 3 + 7 + 8 = 18. Mean: 18 ÷ 3 = 6. These numbers are not evenly spaced, so add them all first, then divide by the count.'
      },
      {
        q: 'What is 6:30 a.m. on the 24-hour clock?',
        a: 'Result: 06:30. 6:30 a.m. is before noon, so the hour stays 6. Write with four digits: 06:30. For p.m. times you would add 12; for a.m. times the hour is unchanged.'
      },
      {
        q: 'A hockey pitch measures 25 metres by 40 metres. Find the distance around the pitch.',
        a: 'Result: 130 m. Perimeter of a rectangle: 2 × (length + width). 2 × (25 + 40) = 2 × 65 = 130 m. Adding the two different sides first, then doubling, is faster than adding all four sides.'
      },
      {
        q: 'How many millimetres are there in 5½ cm?',
        a: 'Result: 55 mm. 1 cm = 10 mm. 5.5 × 10 = 55 mm. Converting to a smaller unit always means multiplying. "Milli-" means one-thousandth, so a millimetre is smaller than a centimetre.'
      },
      {
        q: 'Two angles of a triangle are 65° and 20°. What is the third angle?',
        a: 'Result: 95°. Angles in any triangle sum to 180°. 65 + 20 = 85. Third angle: 180 − 85 = 95°. This rule comes from parallel lines: the three angles together fill exactly a straight angle.'
      },
      {
        q: 'Between which two consecutive whole numbers does the square root of 30 lie?',
        a: 'Result: between 5 and 6. 5² = 25 and 6² = 36. Since 25 < 30 < 36, we have 5 < √30 < 6.'
      },
      {
        q: 'What is 10% of $\\$7$?',
        a: 'Result: $\\$0.70$. 10% means divide by 10. $\\$7$ ÷ 10 = $\\$0.70$. Dividing by 10 shifts the decimal one place left. This is the most useful percentage benchmark because all others build from it.'
      },
      {
        q: 'Work out 15% of $\\$60$.',
        a: 'Result: $\\$9$. Build from 10%: 10% of $\\$60$ = $\\$6$. 5% = half of 10% = $\\$3$. 15% = $\\$6$ + $\\$3$ = $\\$9$. Breaking an unusual percentage into benchmark parts (10% + 5%) is faster than multiplying 0.15 × 60 in your head.'
      },
      {
        q: 'The mean age of three girls is 12 years. Two girls are aged 9 and 16. How old is the third?',
        a: 'Result: 11 years. Total for 3 girls: 12 × 3 = 36. Known total: 9 + 16 = 25. Third age: 36 − 25 = 11. Mean × count always equals the total; this lets you work backward from a known mean.'
      },
      {
        q: 'Work out ½ plus ¼ and give the answer as a decimal.',
        a: 'Result: 0.75. ½ + ¼ = 2/4 + 1/4 = 3/4. ¾ = 0.75. Converting ½ to 2/4 gives a common denominator. Three-quarters as a decimal is a key pair to memorise.'
      },
      {
        q: 'How long will a car take to travel 320 km at an average speed of 60 km per hour?',
        a: 'Result: 5 hours 20 minutes. Time = distance ÷ speed. 320 ÷ 60 = 16/3 hours. 16/3 = 5 remainder 1/3. One-third of 60 minutes = 20 minutes. So: 5 hours 20 minutes. Always convert the fractional hour to minutes at the end.'
      },
      {
        q: 'A pie chart has a red sector representing 20% of the whole. What is the angle of the sector?',
        a: 'Result: 72°. A full circle is 360°. 20% of 360° = 0.20 × 360 = 72°. Pie chart sectors are proportional to their percentages because the full circle represents 100% of the data.'
      },
      {
        q: "What is the angle between the hands of a clock at 5 o'clock?",
        a: "Result: 150°. The clock face is 360° for 12 hours, so each hour mark is 360 ÷ 12 = 30° apart. At 5 o'clock the hour hand is 5 positions past 12. 5 × 30° = 150°."
      },
      {
        q: 'A train travels at an average speed of 30 km per hour for 1½ hours. How far does it travel?',
        a: 'Result: 45 km. Distance = speed × time. Convert 1½ hours to 1.5 first, then 30 × 1.5 = 45 km. Speed in km per hour demands time in hours.'
      },
      {
        q: 'True or false: 1/10 is greater than 0.2?',
        a: 'Result: false. Convert first, then compare: 1/10 = 0.1, and 0.1 < 0.2. Two decimals share the same place value, so the larger digit in the tenths column wins.'
      },
      {
        q: 'Work out the area of a rectangular lawn 7 m wide and 15 m long.',
        a: 'Result: 105 m². Area of a rectangle = length × width. 7 × 15 = 105 m². Break this into 7 × 10 + 7 × 5 = 70 + 35 = 105.'
      },
      {
        q: 'Work out four squared plus three squared.',
        a: 'Result: 25. 4² = 16, 3² = 9. 16 + 9 = 25.'
      },
      {
        q: 'What is the cube root of 216?',
        a: 'Result: 6. The cube root asks: what number multiplied by itself three times gives the target? 6 × 6 × 6 = 216, so the cube root is 6.'
      },
      {
        q: 'How many minutes are there between 6:25 p.m. and 8:00 p.m.?',
        a: 'Result: 95 minutes. Count in stages: 6:25 to 7:00 = 35 minutes. 7:00 to 8:00 = 60 minutes. 35 + 60 = 95 minutes. Counting through each hour boundary is the safest way to avoid borrowing errors.'
      },
      {
        q: 'A train covers 240 km in 3 hours. What is its average speed?',
        a: 'Result: 80 km per hour. Speed = distance ÷ time = 240 ÷ 3 = 80.'
      },
      {
        q: 'Train fares rise by 10%. The old fare was $\\$3.50$. What is the new fare?',
        a: 'Result: $\\$3.85$. 10% of $\\$3.50$ = $\\$0.35$. New fare: $\\$3.50$ + $\\$0.35$ = $\\$3.85$. Find 10% by dividing by 10, then add it to the original. This splits the calculation into two steps, each easy to do mentally.'
      },
      {
        q: 'How many hours will it take a pump to remove 1800 litres at 6 litres per minute?',
        a: 'Result: 5 hours. Minutes needed: 1800 ÷ 6 = 300 minutes. Convert to hours: 300 ÷ 60 = 5 hours. Always convert units at the end: the rate is per minute but the answer must be in hours.'
      },
      {
        q: 'A baseball cap is on sale for $\\$12$ after a 25% reduction. What was the original price?',
        a: 'Result: $\\$16$. After a 25% reduction, $\\$12$ is 75% of the original. Original = $\\$12$ ÷ 0.75 = $\\$16$. Check: 25% of $\\$16$ = $\\$4$. $\\$16$ − $\\$4$ = $\\$12$. ✓ Reversing a percentage decrease means dividing by the fraction that remains.'
      },
      {
        q: 'Between which two consecutive whole numbers does the square root of 80 lie?',
        a: 'Result: between 8 and 9. 8² = 64 and 9² = 81. Since 64 < 80 < 81, we have 8 < √80 < 9. 80 is just one below 81, so √80 is just below 9 (very close to 9).'
      },
      {
        q: 'What number is a thousand times as big as 0.2?',
        a: 'Result: 200. Multiplying by 1000 shifts the decimal three places right. 0.2 → 2 → 20 → 200. Each shift multiplies by 10; three shifts multiply by 1000.'
      },
      {
        q: 'The cost of five vegeburgers is $\\$7.50$. How much will six cost?',
        a: 'Result: $\\$9.00$. Cost per burger: $\\$7.50$ ÷ 5 = $\\$1.50$. Cost of 6: $\\$1.50$ × 6 = $\\$9.00$. Find the unit price first, then scale to the new quantity. This two-step method works for any unit-rate problem.'
      },
      {
        q: 'Explain why the mathematical magic trick always produces an answer starting with "2".',
        a: 'Because the total always equals A + 199,998. A is in the ten-thousands (at least 10,000). So the minimum total is 10,000 + 199,998 = 209,998 and the maximum is 99,999 + 199,998 = 299,997. Every number in this range starts with 2. No other leading digit is possible for inputs in the ten-thousands.'
      },
      {
        q: 'Work out five-sixths of 90.',
        a: 'Result: 75. One-sixth of 90: 90 ÷ 6 = 15. Five-sixths: 15 × 5 = 75. Always find the unit fraction first (one-sixth), then multiply by the numerator (5).'
      },
      {
        q: 'If a woman earns $\\$8.40$ per hour, how much does she earn in ten hours?',
        a: 'Result: $\\$84$. Multiply by 10 by shifting the decimal one place right: $\\$8.40$ × 10 = $\\$84.00$. Not a long multiplication.'
      },
      {
        q: 'Use the distributive law to compute $98 \\times 4$ mentally.',
        a: 'Result: 392. Split $98$ as $100 - 2$: $98 \\times 4 = (100 - 2) \\times 4 = 400 - 8 = 392$. The round-down split makes both partial products one-step.'
      },
      {
        q: 'Compute $2000 - 643$ without trading across zeros.',
        a: 'Result: 1357. Rewrite $2000$ as $1999 + 1$: $2000 - 643 = (1999 - 643) + 1 = 1356 + 1 = 1357$. Subtracting from $1999$ needs no trades because every digit of $643$ is at most $9$.'
      }
    ],

    /* REFERENCE
     */
    reference: {
      category: 'Quick Reference',
      title: 'Mental Calculation Strategies',
      sections: [
        <>
          <h2>Decimal Shifts</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Rule</span>
            <div className="lrn-definition-desc">
              <p>{`Multiply by $10^n$: move decimal $n$ places right.`}</p>
              <p>{`Divide by $10^n$: move decimal $n$ places left.`}</p>
              <p>
                <strong>When to use:</strong> questions with "times 10", "times 100", "times 1000",
                "tenth of", "hundredth of", or cost of 10/100/1000 identical items.
              </p>
            </div>
          </div>
          <div className="lrn-eq">{`$$0.65 \\xrightarrow{\\times 10} 6.5 \\xrightarrow{\\times 10} 65 \\xrightarrow{\\times 10} 650$$`}</div>
        </>,

        <>
          <h2>Distributive Decomposition</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Distributive Law</span>
            <div className="lrn-definition-desc">
              <p>{`$$m(n + \\ell) = mn + m\\ell$$`}</p>
              <p>
                <strong>When to use:</strong> a two-digit factor times a single digit, or any
                multiplication with one factor near a round number.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Decomposed Subtraction</span>
            <div className="lrn-definition-desc">
              <p>{`$$(\\ell + m + n) - (a + b + c) = (\\ell - a) + (m - b) + (n - c)$$`}</p>
              <p>{`Requires $\\ell \\geq a$, $m \\geq b$, $n \\geq c$. For round powers of 10, rewrite first: $1000 - x = (999 - x) + 1$.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Percentages</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Benchmarks</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>{`$1\\% = \\div 100$`}</li>
                <li>{`$10\\% = \\div 10$`}</li>
                <li>{`$5\\% = \\tfrac{1}{2} \\times 10\\%$`}</li>
                <li>{`$15\\% = 10\\% + 5\\%$`}</li>
                <li>{`$25\\% = \\div 4$`}</li>
                <li>{`$50\\% = \\div 2$`}</li>
              </ul>
              <p>
                <strong>When to use:</strong> "P% of X", percentage increase/decrease, reversing a
                percentage change.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Percentage Increase / Decrease</span>
            <div className="lrn-definition-desc">
              <p>{`New = Old $\\times (1 + P/100)$ for increase.`}</p>
              <p>{`New = Old $\\times (1 - P/100)$ for decrease.`}</p>
              <p>
                <strong>When to use:</strong> questions giving a starting price and a percentage
                change.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Fractions and Decimals</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Key Pairs</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>{`$\\tfrac{1}{2} = 0.5$`}</li>
                <li>{`$\\tfrac{1}{4} = 0.25$`}</li>
                <li>{`$\\tfrac{3}{4} = 0.75$`}</li>
                <li>{`$\\tfrac{1}{5} = 0.2$`}</li>
                <li>{`$\\tfrac{1}{8} = 0.125$`}</li>
                <li>{`$\\tfrac{1}{10} = 0.1$`}</li>
              </ul>
              <p>
                <strong>When to use:</strong> converting fractions to decimals; "fraction of a
                quantity" = divide by denominator, multiply by numerator.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Rate, Ratio, and Sharing</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Unit Rate</span>
            <div className="lrn-definition-desc">
              <p>Step 1: find cost per unit (divide total by count).</p>
              <p>Step 2: multiply by the number of units needed.</p>
              <p>
                <strong>When to use:</strong> "each", "per", "shared equally", "how many for $X".
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Time</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Elapsed Time</span>
            <div className="lrn-definition-desc">
              <p>Count up to the next whole hour, then count remaining minutes.</p>
              <p>
                <strong>When to use:</strong> "how long between X and Y" clock times.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">24-Hour Clock</span>
            <div className="lrn-definition-desc">
              <p>p.m.: add 12 to the hour. a.m.: hour stays the same.</p>
              <p>Write four digits with a colon between hour and minute (e.g. 15:40).</p>
              <p>
                <strong>When to use:</strong> 24-hour conversion questions.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Key Time Conversions</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>60 s = 1 min</li>
                <li>60 min = 1 hour</li>
                <li>24 hours = 1 day</li>
                <li>7 days = 1 week</li>
                <li>52 weeks = 1 year (approx.)</li>
              </ul>
              <p>
                <strong>When to use:</strong> unit conversion between time measures.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Averages</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Mean</span>
            <div className="lrn-definition-desc">
              <p>{`Mean $= \\dfrac{\\text{sum}}{\\text{count}}$`}</p>
              <p>{`Total $= \\text{mean} \\times \\text{count}$ (backward version)`}</p>
              <p>
                <strong>When to use:</strong> "find the average", "find the mean", or finding a
                missing value when the mean is given.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Speed, Distance, Time</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Formulas</span>
            <div className="lrn-definition-desc">
              <p>{`$d = s \\times t$`}</p>
              <p>{`$s = d / t$`}</p>
              <p>{`$t = d / s$`}</p>
              <p>
                <strong>When to use:</strong> any question involving km per hour, travel time, or
                journey distance. Convert time to hours before multiplying.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Inverse Proportion</span>
            <div className="lrn-definition-desc">
              <p>If speed halves, time doubles (for fixed distance).</p>
              <p>
                <strong>When to use:</strong> "if speed changes from X to Y, how does time change?"
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Geometry</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Perimeter and Area</span>
            <div className="lrn-definition-desc">
              <p>{`Perimeter of rectangle: $P = 2(l + w)$`}</p>
              <p>{`Area of rectangle: $A = l \\times w$`}</p>
              <p>
                <strong>When to use:</strong> "distance around" = perimeter; "how much space" =
                area.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Angles</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>Triangle: angles sum to 180°.</li>
                <li>Clock: 30° per hour interval.</li>
                <li>
                  {`Pie sector: $\\text{percentage} \\times 3.6°$`} (i.e.{' '}
                  {`$\\text{percentage} \\div 100 \\times 360°$`}).
                </li>
              </ul>
              <p>
                <strong>When to use:</strong> third angle of triangle, clock-hand angle, pie chart
                sector.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Powers, Roots, and Approximation</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Perfect Squares</span>
            <div className="lrn-definition-desc">
              <p>{`$1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169$`}</p>
              <p>
                If a number lies between two consecutive perfect squares, its square root lies
                between the two corresponding integers.
              </p>
              <p>
                <strong>When to use:</strong> "between which two whole numbers does √N lie?"
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Cubes</span>
            <div className="lrn-definition-desc">
              <p>{`$2^3 = 8$, $3^3 = 27$, $4^3 = 64$, $5^3 = 125$`}</p>
              <p>
                <strong>When to use:</strong> "cube root of X" questions.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Unit Conversions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Length</span>
            <div className="lrn-definition-desc">
              <p>10 mm = 1 cm. 100 cm = 1 m. 1000 m = 1 km.</p>
              <p>
                <strong>When to use:</strong> mixing mm/cm/m/km in the same question.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Mass</span>
            <div className="lrn-definition-desc">
              <p>1000 g = 1 kg.</p>
              <p>
                <strong>When to use:</strong> mixing g and kg in the same question.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Mathematical Magic Shortcut</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">The Rule</span>
            <div className="lrn-definition-desc">
              <p>
                Given A (your friend's number), choose B and C freely. Set {`$D = 99{,}999 - B$`}{' '}
                and {`$E = 99{,}999 - C$`}.
              </p>
              <p>{`Total $= A + 199{,}998$. Announce: "2" then $(A - 2)$.`}</p>
              <p>
                <strong>When to use:</strong> the five-number addition magic trick.
              </p>
            </div>
          </div>
          <div className="lrn-eq">{`$$A + B + C + D + E = A + 199{,}998$$`}</div>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
