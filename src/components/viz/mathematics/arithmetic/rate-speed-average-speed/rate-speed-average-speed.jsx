// RATE, SPEED, AVERAGE SPEED
// Visualizations for constant rate, faucet filling, unit conversion, reduced-rate,
// cooperative work, and two-number-lines.
// Each viz takes a `C` color object from useVizColors().
//
// REFINE pass 2026-07-03 (rate-speed-average-speed, ar.136–145):
// - RSA.10 AverageSpeedTwoLegs - OFF-FRAME Blocker: v₁ = 110 ⇒ total distance
//   220 + 180 = 400 exceeded the old y-max 270; every point past ~v₁=45 left
//   the frame. Fixed honest frame y ∈ [−20, 420] holds the whole v₁ ∈ [10,110]
//   range; gridlines every 50, labels every 100 (≈66 px pitch ≥ 40).
// - RSA.7 UnitConversionChain - CONTENT BUG: garbled "85ⁱⁱ⁄₁₅" mixed number;
//   arrow 1 was labeled "× 3600 sec/hr" but that step is ×(1 mi / 5280 ft);
//   the middle box duplicated the ×3600 step. Rebuilt as a DOM flow with the
//   two conversion factors in their correct order (LaTeX, rule 11). Math is
//   exact: 85¹⁄₁₅ ft/s = 1276/15 ft/s × 1mi/5280ft = 29/1800 mi/s,
//   × 3600 s/hr = 58 mph ✓.
// - size-24 on-canvas axis captions → FONT_AXIS (11); computed slope / rate /
//   avg / ≠-mean / proportion labels moved off-canvas into KatexInline readout
//   rows (house convention: values never on the canvas). Curve/leg identifier
//   tags (D = vT, v₁, Train 1: t/10 …) stay - diagram-integral.
// - dead `3.5 > 0 ?` guard in RSA.3 removed; trivial useMemo wrappers dropped
//   (render-compute suffices).
// Engine (WebSearch 2026-07-02 session-1 gate, line/curve-plot + strip/flow
// classes): only banned dashboard stacks surfaced - Mafs (A) stays for the
// coordinate plots; hand-rolled SVG is correct for the area/bar schematics;
// DOM is the right form for the calculator-style conversion chain. No swaps.
// RSA.5/6 (Regina/Eric area + cooperative bars) verified PASS - untouched.
import React, { useState } from 'react'
import { Mafs, Coordinates, Plot, Point, LaTeX, Text } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import {
  FONT_AXIS,
  FONT_BODY,
  FONT_FAMILY,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  LS_CONTROL,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from '../../../scale-tokens'

// Readout row under the canvas - house convention (values never on canvas).
const READOUT_ROW = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px 28px',
  justifyContent: 'center',
  marginTop: 12,
  fontFamily: FONT_FAMILY,
  fontSize: FONT_LABEL,
  letterSpacing: LS_CONTROL
}

// (RSA.1) ConstantSpeedPositionTimeGraph
// Mafs plot of D = v·T through the origin with a slider for v.
// Shows that the slope of the line equals the constant rate v = D/T.

export function ConstantSpeedPositionTimeGraph({ C }) {
  const [v, setV] = useState(3)
  // tSample = 2 keeps the sample point (2, 2v) inside y ≤ 12 for the whole v ∈ [0.5, 5]
  // range (a steeper line honestly leaves the top of the frame - the slope is the point).
  const tSample = 2
  const dSample = v * tSample
  // Identifier tag rides the line but stays in-frame: sit it where the line reaches
  // y ≈ 8 (or at x = 9 for shallow lines), never above the y = 12 ceiling.
  const xTag = Math.min(9, 8 / v)
  const yTag = Math.min(9 * v, 8) + 0.7

  return (
    <>
      <Mafs viewBox={{ x: [-0.5, 11], y: [-0.5, 12] }} height={260} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: t => (t === 0 ? '' : t), lines: 2 }}
          yAxis={{ labels: d => (d === 0 ? '' : d), lines: 2 }}
        />
        <Plot.OfX y={t => v * t} color={C.fg} />
        <Point x={tSample} y={dSample} color={C.accent} />
        <LaTeX
          at={[tSample + 0.3, dSample + 0.7]}
          tex={`(${tSample},\\,${dSample})`}
          color={C.accent}
        />
        <LaTeX at={[xTag, yTag]} tex={`D = ${v}T`} color={C.fg} />
        <Text x={5.5} y={-0.35} size={FONT_AXIS} color={C.faint} attach="center">
          {`T (time in hours)`}
        </Text>
        <Text x={1.6} y={11.4} size={FONT_AXIS} color={C.faint} attach="center">
          {`D (distance)`}
        </Text>
      </Mafs>
      <div
        aria-label="Constant speed readout: the slope of the position–time line is the speed"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\text{slope} = \\tfrac{D}{T} = ${v}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`D = ${v}\\times${tSample} = ${dSample}\\,\\text{units}`} />
        </span>
      </div>
      <Slider
        label="speed v"
        value={v}
        min={0.5}
        max={5}
        step={0.5}
        onChange={val => setV(Math.round(val * 2) / 2)}
        format={val => `${val.toFixed(1)} units/hr`}
      />
    </>
  )
}

// (RSA.2) FaucetAccumulation
// Mafs plot of accumulated volume V = r·T at constant rate r, with a slider for r.
// Slope = rate = V/T.

export function FaucetAccumulation({ C }) {
  const [r, setR] = useState(2)
  // tSample = 2 keeps the sample point (2, 2r) inside y ≤ 12 for the whole r ∈ [0.5, 5] range.
  const tSample = 2
  const vSample = r * tSample
  // Identifier tag rides the line, clamped below the y = 12 ceiling.
  const xTag = Math.min(9, 8 / r)
  const yTag = Math.min(9 * r, 8) + 0.7

  return (
    <>
      <Mafs viewBox={{ x: [-0.5, 11], y: [-0.5, 12] }} height={260} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: t => (t === 0 ? '' : t), lines: 2 }}
          yAxis={{ labels: v => (v === 0 ? '' : v), lines: 2 }}
        />
        <Plot.OfX y={t => r * t} color={C.fg} />
        <Point x={tSample} y={vSample} color={C.accent} />
        <LaTeX
          at={[tSample + 0.3, vSample + 0.7]}
          tex={`(${tSample},\\,${vSample})`}
          color={C.accent}
        />
        <LaTeX at={[xTag, yTag]} tex={`V = ${r}t`} color={C.fg} />
        <Text x={5.5} y={-0.35} size={FONT_AXIS} color={C.faint} attach="center">
          {`t (time in minutes)`}
        </Text>
        <Text x={1.8} y={11.4} size={FONT_AXIS} color={C.faint} attach="center">
          {`V (gallons)`}
        </Text>
      </Mafs>
      <div
        aria-label="Faucet accumulation readout: the slope of the volume–time line is the fill rate"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\text{rate} = \\tfrac{V}{t} = ${r}\\,\\text{gal/min}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`V = ${r}\\times${tSample} = ${vSample}\\,\\text{gal}`} />
        </span>
      </div>
      <Slider
        label="rate r"
        value={r}
        min={0.5}
        max={5}
        step={0.5}
        onChange={val => setR(Math.round(val * 2) / 2)}
        format={val => `${val.toFixed(1)} gal/min`}
      />
    </>
  )
}

// (RSA.3) FaucetFillingProportion
// Mafs plot showing two points (25, 3.5) and (t, 11.5) on a line through origin.
// Both points share the same slope r = D/T. The proportion is derived, not assumed.

export function FaucetFillingProportion({ C }) {
  const r = 3.5 / 25 // constant rate
  const t2 = 11.5 / r // = 575/7 = 82 1/7 sec (exact)

  return (
    <>
      <Mafs viewBox={{ x: [-2, 95], y: [-0.3, 13] }} height={260} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: t => (t % 20 === 0 && t > 0 ? t : ''), lines: 20 }}
          yAxis={{ labels: v => (v % 2 === 0 && v > 0 ? v : ''), lines: 2 }}
        />
        <Plot.OfX y={t => r * t} color={C.fg} />
        <Point x={25} y={3.5} color={C.dim} />
        <Point x={t2} y={11.5} color={C.accent} />
        <LaTeX at={[27, 4.4]} tex={`(25,\\;3\\tfrac{1}{2})`} color={C.dim} />
        <LaTeX at={[t2 - 24, 12.2]} tex={`(82\\tfrac{1}{7},\\;11\\tfrac{1}{2})`} color={C.accent} />
        <Text x={47} y={-0.22} size={FONT_AXIS} color={C.faint} attach="center">
          {`t (seconds)`}
        </Text>
        <Text x={11} y={12.5} size={FONT_AXIS} color={C.faint} attach="center">
          {`V (litres)`}
        </Text>
      </Mafs>
      <div
        aria-label="Filling proportion readout: equal slopes give the proportion that solves for t"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`r = \\tfrac{3\\tfrac{1}{2}}{25} = \\tfrac{11\\tfrac{1}{2}}{t}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`t = 82\\tfrac{1}{7}\\,\\text{s}`} />
        </span>
      </div>
    </>
  )
}

// (RSA.4) ReducedRateCurve
// Mafs plot of t = 15 × 100/(100 − N) for N ∈ [0, 70].
// Marker slides with a slider at N = 15 by default.

export function ReducedRateCurve({ C }) {
  const [N, setN] = useState(15)
  const k = 15 // original time in minutes
  const t = (k * 100) / (100 - N)

  return (
    <>
      <Mafs viewBox={{ x: [-3, 75], y: [-1, 65] }} height={280} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: n => (n % 20 === 0 && n >= 0 ? `${n}%` : ''), lines: 20 }}
          yAxis={{ labels: tt => (tt % 10 === 0 && tt >= 0 ? tt : ''), lines: 10 }}
        />
        <Plot.OfX y={n => (n < 99 ? (k * 100) / (100 - n) : undefined)} color={C.fg} />
        <Point x={N} y={t} color={C.accent} />
        <LaTeX at={[5, 55]} tex={`t = \\tfrac{15 \\times 100}{100 - N}`} color={C.fg} />
        <Text x={37} y={-0.8} size={FONT_AXIS} color={C.faint} attach="center">
          {`N (% rate reduction)`}
        </Text>
        <Text x={9} y={62} size={FONT_AXIS} color={C.faint} attach="center">
          {`t (minutes)`}
        </Text>
      </Mafs>
      <div
        aria-label="Reduced-rate readout: the job time as the rate is cut by N percent"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`N = ${N}\\% \\Rightarrow t \\approx ${t.toFixed(1)}\\,\\text{min}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          lower rate, longer job
        </span>
      </div>
      <Slider
        label="N (rate reduction %)"
        value={N}
        min={0}
        max={70}
        step={5}
        onChange={val => setN(Math.round(val / 5) * 5)}
        format={val => `${Math.round(val)}%`}
      />
    </>
  )
}

// (RSA.5) ReginaEricAreaModel
// Hand-rolled SVG: 60-cell rectangle (10 cols × 6 rows).
// Shade Regina's share (1/10 per hour = 6 cells), Eric's (1/12 per hour = 5 cells).
// Shows combined rate 11/60 per hour; whole lawn takes 60/11 hours. Verified PASS.

export function ReginaEricAreaModel({ C }) {
  const COLS = 10
  const ROWS = 6
  const TOTAL = COLS * ROWS // 60 cells
  const CELL_W = 28
  const CELL_H = 28
  const PAD = 16
  const W = COLS * CELL_W + PAD * 2
  const H = ROWS * CELL_H + PAD * 2 + 48

  // Regina: 6 cells per hour (1/10 of 60); shade first 6 cells (top-left, row-major)
  const REGINA = 6
  // Eric: 5 cells per hour (1/12 of 60)
  const ERIC = 5

  function cellColor(idx) {
    if (idx < REGINA) return C.fg
    if (idx < REGINA + ERIC) return C.accent
    return 'none'
  }
  function cellStroke(idx) {
    if (idx < REGINA + ERIC) return C.fg
    return C.dim
  }

  return (
    <>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}
      >
        {Array.from({ length: TOTAL }).map((_, idx) => {
          const col = idx % COLS
          const row = Math.floor(idx / COLS)
          const x = PAD + col * CELL_W
          const y = PAD + row * CELL_H
          return (
            <rect
              key={idx}
              x={x + 1}
              y={y + 1}
              width={CELL_W - 2}
              height={CELL_H - 2}
              fill={cellColor(idx)}
              fillOpacity={idx < REGINA + ERIC ? 0.25 : 0}
              stroke={cellStroke(idx)}
              strokeOpacity={idx < REGINA ? 1 : idx < REGINA + ERIC ? 0.7 : 0.18}
              strokeWidth={STROKE_SECONDARY}
            />
          )
        })}
        {/* Legend - names + integer cell counts only; the fraction rates live in the readout (rule 11) */}
        <rect
          x={PAD}
          y={H - 40}
          width={14}
          height={14}
          fill={C.fg}
          fillOpacity={0.3}
          stroke={C.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <text x={PAD + 20} y={H - 29} fill={C.fg} fontSize={FONT_LABEL} fontFamily={FONT_FAMILY}>
          Regina: 6 cells/hr
        </text>
        <rect
          x={PAD}
          y={H - 22}
          width={14}
          height={14}
          fill={C.accent}
          fillOpacity={0.3}
          stroke={C.accent}
          strokeWidth={STROKE_SECONDARY}
        />
        <text x={PAD + 20} y={H - 11} fill={C.fg} fontSize={FONT_LABEL} fontFamily={FONT_FAMILY}>
          Eric: 5 cells/hr
        </text>
      </svg>
      <div
        aria-label="Cooperative rate readout: the two fraction rates add to the combined rate, which sets the whole-lawn time"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\tfrac{1}{10}+\\tfrac{1}{12}=\\tfrac{11}{60}\\text{ lawn/hr}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`T=\\tfrac{60}{11}=5\\tfrac{5}{11}\\text{ hr}`} />
        </span>
      </div>
    </>
  )
}

// (RSA.6) CooperativeRateBars
// Hand-rolled SVG: horizontal bars showing each person's fraction-per-hour rate,
// stacked to show combined rate for Regina/Eric. Verified PASS.

export function CooperativeRateBars({ C }) {
  const BAR_W = 300
  const H = 200
  const PAD = 16
  const ROW_H = 32
  const GAP = 8

  const workers = [
    { name: 'Regina', rate: 1 / 10 },
    { name: 'Eric', rate: 1 / 12 },
    { name: 'Combined', rate: 11 / 60, combined: true }
  ]

  const maxRate = 11 / 60

  return (
    <>
      <svg
        viewBox={`0 0 ${BAR_W + PAD * 2 + 120} ${H}`}
        style={{ width: '100%', maxWidth: 460, display: 'block', margin: '0 auto' }}
      >
        {workers.map((w, i) => {
          const y = PAD + i * (ROW_H + GAP)
          const barLen = (w.rate / maxRate) * BAR_W
          return (
            <g key={w.name}>
              <rect
                x={PAD + 90}
                y={y}
                width={barLen}
                height={ROW_H - 4}
                fill={w.combined ? C.accent : C.fg}
                fillOpacity={w.combined ? 0.3 : 0.18}
                stroke={w.combined ? C.accent : C.fg}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={PAD + 85}
                y={y + ROW_H / 2 + 4}
                textAnchor="end"
                fill={C.fg}
                fontSize={FONT_LABEL}
                fontFamily={FONT_FAMILY}
              >
                {w.name}
              </text>
            </g>
          )
        })}
      </svg>
      <div
        aria-label="Cooperative rate readout: each worker's fraction-per-hour rate, their sum, and the resulting time"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`\\text{Regina }\\tfrac{1}{10},\\ \\text{Eric }\\tfrac{1}{12}\\text{ /hr}`}
          />
        </span>
        <span>
          <KatexInline tex={`\\text{combined}=\\tfrac{11}{60}\\text{ /hr}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`T=1\\div\\tfrac{11}{60}=\\tfrac{60}{11}=5\\tfrac{5}{11}\\text{ hr}`} />
        </span>
      </div>
    </>
  )
}

// (RSA.7) UnitConversionChain
// DOM flow of the two conversion factors IN ORDER (rebuilt - the SVG version
// mislabeled arrow 1 and duplicated the ×3600 box). LaTeX for all math (rule 11).
// 85 1/15 ft/s × (1 mi / 5280 ft) ▶ 29/1800 mi/s × (3600 s / 1 hr) ▶ 58 mph

export function UnitConversionChain({ C }) {
  const boxStyle = accent => ({
    border: `1px solid ${accent ? C.accent : 'rgba(240,240,250,0.35)'}`,
    padding: '10px 16px',
    minWidth: 76,
    textAlign: 'center',
    color: accent ? C.accent : C.fg,
    flex: '0 0 auto'
  })
  const stepStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    color: C.dim,
    flex: '0 0 auto'
  }
  const unitStyle = {
    fontSize: FONT_SMALL,
    opacity: OPACITY.dim,
    marginTop: 4,
    fontFamily: FONT_FAMILY
  }

  return (
    <div style={{ width: '100%', color: C.fg, fontFamily: FONT_FAMILY }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 12,
          padding: '12px 0'
        }}
      >
        <div style={boxStyle(false)}>
          <div style={{ fontSize: FONT_TEX }}>
            <KatexInline tex={`85\\tfrac{1}{15}`} />
          </div>
          <div style={unitStyle}>ft / s</div>
        </div>

        <div style={stepStyle}>
          <KatexInline tex={`\\times\\,\\tfrac{1\\,\\text{mi}}{5280\\,\\text{ft}}`} />
          <span style={{ fontSize: FONT_BODY, lineHeight: 1, opacity: OPACITY.dim }}>&#8594;</span>
        </div>

        <div style={boxStyle(false)}>
          <div style={{ fontSize: FONT_TEX }}>
            <KatexInline tex={`\\tfrac{29}{1800}`} />
          </div>
          <div style={unitStyle}>mi / s</div>
        </div>

        <div style={stepStyle}>
          <KatexInline tex={`\\times\\,\\tfrac{3600\\,\\text{s}}{1\\,\\text{hr}}`} />
          <span style={{ fontSize: FONT_BODY, lineHeight: 1, opacity: OPACITY.dim }}>&#8594;</span>
        </div>

        <div style={boxStyle(true)}>
          <div style={{ fontSize: FONT_TEX, fontWeight: 'bold' }}>58</div>
          <div style={unitStyle}>mph</div>
        </div>
      </div>
      <div
        aria-label="Unit conversion readout: the full chain of factors reducing ft/s to mph"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`85\\tfrac{1}{15}\\,\\tfrac{\\text{ft}}{\\text{s}} \\times \\tfrac{1\\,\\text{mi}}{5280\\,\\text{ft}} \\times \\tfrac{3600\\,\\text{s}}{1\\,\\text{hr}} = 58\\,\\text{mph}`}
          />
        </span>
      </div>
    </div>
  )
}

// (RSA.8) TwoNumberLines
// Small SVG showing M (distance, miles) on one number line and N (time, hours)
// on another, with a unit-identification arrow between them.

export function TwoNumberLines({ C }) {
  const W = 380
  const H = 200
  const PAD = 24
  const LINE_W = W - PAD * 2
  const TICKS = 6
  const yTop = 60
  const yBot = 150

  function tickX(i) {
    return PAD + (i / TICKS) * LINE_W
  }

  return (
    <>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', maxWidth: W, display: 'block', margin: '0 auto' }}
      >
        {/* Top number line: Distance M (miles) */}
        <line
          x1={PAD}
          y1={yTop}
          x2={W - PAD}
          y2={yTop}
          stroke={C.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {Array.from({ length: TICKS + 1 }).map((_, i) => (
          <g key={`m${i}`}>
            <line
              x1={tickX(i)}
              y1={yTop - 5}
              x2={tickX(i)}
              y2={yTop + 5}
              stroke={C.fg}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={tickX(i)}
              y={yTop - 12}
              textAnchor="middle"
              fill={C.dim}
              fontSize={FONT_SMALL}
              fontFamily={FONT_FAMILY}
            >
              {i * 10}
            </text>
          </g>
        ))}
        <text
          x={W - PAD + 4}
          y={yTop + 4}
          fill={C.fg}
          fontSize={FONT_LABEL}
          fontFamily={FONT_FAMILY}
        >
          M (mi)
        </text>

        {/* Bottom number line: Time N (hours) */}
        <line
          x1={PAD}
          y1={yBot}
          x2={W - PAD}
          y2={yBot}
          stroke={C.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        {Array.from({ length: TICKS + 1 }).map((_, i) => (
          <g key={`n${i}`}>
            <line
              x1={tickX(i)}
              y1={yBot - 5}
              x2={tickX(i)}
              y2={yBot + 5}
              stroke={C.accent}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={tickX(i)}
              y={yBot + 18}
              textAnchor="middle"
              fill={C.dim}
              fontSize={FONT_SMALL}
              fontFamily={FONT_FAMILY}
            >
              {i}
            </text>
          </g>
        ))}
        <text
          x={W - PAD + 4}
          y={yBot + 4}
          fill={C.accent}
          fontSize={FONT_LABEL}
          fontFamily={FONT_FAMILY}
        >
          N (hr)
        </text>

        {/* Unit-identification connector from the distance line to the time line */}
        <line
          x1={tickX(3)}
          y1={yTop + 8}
          x2={tickX(3)}
          y2={yBot - 8}
          stroke={C.dim}
          strokeDasharray="3 3"
          strokeWidth={STROKE_SECONDARY}
        />
      </svg>
      <div
        aria-label="Two number lines readout: distance over time defines the rate"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`\\text{rate} = \\tfrac{M}{N} = \\tfrac{\\text{distance}}{\\text{time}}`}
          />
        </span>
      </div>
    </>
  )
}

// (RSA.10) AverageSpeedTwoLegs
// Mafs position-time graph: two-leg journey.
// Leg 1 at slope v1 for time t1, Leg 2 at slope v2 for time t2.
// Dashed line from origin to endpoint = average speed (not the arithmetic mean).
// Slider adjusts v1 to show how average speed shifts as legs change.
// Fixed honest frame y ∈ [−20, 420] holds total distance ≤ 220 + 180 = 400.

export function AverageSpeedTwoLegs({ C }) {
  const [v1, setV1] = useState(30)
  const v2 = 120
  const t1 = 2 // hours for leg 1
  const t2 = 1.5 // hours for leg 2
  const d1 = v1 * t1
  const d2 = v2 * t2
  const totalDist = d1 + d2
  const totalTime = t1 + t2
  const avgSpeed = totalDist / totalTime
  const arithmeticMean = (v1 + v2) / 2

  return (
    <>
      <Mafs viewBox={{ x: [-0.2, 4.5], y: [-20, 420] }} height={300} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: t => (t >= 0 && t % 1 === 0 ? `${t}h` : ''), lines: 1 }}
          yAxis={{ labels: d => (d >= 0 && d % 100 === 0 ? d : ''), lines: 50 }}
        />
        {/* Leg 1: origin to (t1, d1) */}
        <Plot.Parametric xy={t => [t, v1 * t]} t={[0, t1]} color={C.fg} />
        {/* Leg 2: (t1, d1) to (t1+t2, d1+d2) */}
        <Plot.Parametric xy={t => [t1 + t, d1 + v2 * t]} t={[0, t2]} color={C.dim} />
        {/* Dashed average-speed line from origin to endpoint */}
        <Plot.Parametric
          xy={t => [t, avgSpeed * t]}
          t={[0, totalTime]}
          color={C.accent}
          style="dashed"
        />
        {/* Endpoint */}
        <Point x={totalTime} y={totalDist} color={C.accent} />
        <LaTeX at={[0.25, d1 * 0.5 + 14]} tex={`v_1 = ${v1}`} color={C.fg} />
        <LaTeX at={[t1 + 0.1, d1 + d2 * 0.5]} tex={`v_2 = ${v2}`} color={C.dim} />
        <Text x={2.2} y={-14} size={FONT_AXIS} color={C.faint} attach="center">
          {`t (hours)`}
        </Text>
        <Text x={0.8} y={388} size={FONT_AXIS} color={C.faint} attach="center">
          {`d (km)`}
        </Text>
      </Mafs>
      <div
        aria-label="Average speed readout: total distance over total time, not the mean of the speeds"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`\\overline{v} = \\tfrac{${totalDist}}{${totalTime}} \\approx ${avgSpeed.toFixed(1)}\\,\\text{km/h}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\tfrac{v_1 + v_2}{2} = ${arithmeticMean}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          average speed ≠ mean of the speeds
        </span>
      </div>
      <Slider
        label="leg 1 speed v₁"
        value={v1}
        min={10}
        max={110}
        step={10}
        onChange={val => setV1(Math.round(val / 10) * 10)}
        format={val => `${val} km/h`}
      />
    </>
  )
}

// (RSA.9) TwoTrainsMeetingGraph
// Mafs position-time graph for the shuttle trains activity.
// Train 1 travels A to B in 10 hours; Train 2 travels B to A in 12 hours.
// They start at opposite ends simultaneously. The graph shows where they meet.

export function TwoTrainsMeetingGraph({ C }) {
  const T1 = 10 // hours A→B
  const T2 = 12 // hours B→A
  // Normalize: let distance A-B = 1. Train1 pos: t/10; Train2 pos: 1 - t/12
  // They meet when t/10 + t/12 = 1 → t = T1·T2/(T1+T2) = 120/22 = 60/11 ≈ 5.45
  const tMeet = (T1 * T2) / (T1 + T2)
  const posMeet = tMeet / T1

  return (
    <>
      <Mafs viewBox={{ x: [-0.5, 13], y: [-0.1, 1.3] }} height={240} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: t => (t % 2 === 0 && t >= 0 ? t : ''), lines: 2 }}
          yAxis={{ labels: p => (p === 0 ? 'A' : p === 1 ? 'B' : ''), lines: 1 }}
        />
        <Plot.OfX y={t => t / T1} color={C.fg} />
        <Plot.OfX y={t => 1 - t / T2} color={C.dim} />
        <Point x={tMeet} y={posMeet} color={C.accent} />
        <LaTeX at={[1.5, 0.25]} tex={`\\text{Train 1: }\\tfrac{t}{10}`} color={C.fg} />
        <LaTeX at={[8, 0.82]} tex={`\\text{Train 2: }1-\\tfrac{t}{12}`} color={C.dim} />
        <Text x={6.5} y={-0.07} size={FONT_AXIS} color={C.faint} attach="center">
          {`t (hours)`}
        </Text>
        <Text x={1.4} y={1.22} size={FONT_AXIS} color={C.faint} attach="center">
          {`position (A\u2192B)`}
        </Text>
      </Mafs>
      <div
        aria-label="Meeting-time readout: the two trains meet after 60/11 hours"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`t_{\\text{meet}} = \\tfrac{T_1 T_2}{T_1 + T_2} = \\tfrac{60}{11} \\approx 5.45\\,\\text{hr}`}
          />
        </span>
      </div>
    </>
  )
}
