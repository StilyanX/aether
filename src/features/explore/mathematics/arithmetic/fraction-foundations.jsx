import { useState } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import { VizFigure } from '../../../../components/viz-figure'
import { Plot, Polyline, Dot, Tex, Slider, OPACITY } from '../../../../components/viz/primitives'
import { reduce as nl34_reduce } from '../../../../components/viz/math-utils'
import {
  FONT_BODY,
  FONT_CONTROL,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TINY,
  FONT_VALUE_LG
} from '../../../../components/viz/scale-tokens'

// Mathematics domain: Approved engine: hand-rolled monochrome SVG primitives.
function Nlb_NumberLineBasicRefined() {
  const C = useVizColors()
  const [n, setN] = useState(5)
  const W = 1000
  const H = 400
  const padX = 80
  const yLine = H * 0.62
  const xAt = t => padX + t * (W - 2 * padX)
  const tickH = 16
  const segY = yLine - 70
  const segHalf = 6
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8,
        padding: '12px 16px',
        boxSizing: 'border-box',
        color: C.fg,
        fontFamily: 'var(--reader-font-family)'
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', flex: 1, minHeight: 0, display: 'block' }}
      >
        <line
          x1={xAt(0)}
          y1={yLine}
          x2={xAt(1)}
          y2={yLine}
          stroke={C.fg}
          strokeWidth={2}
          strokeLinecap="square"
        />
        <line
          x1={xAt(0)}
          y1={yLine - tickH}
          x2={xAt(0)}
          y2={yLine + tickH}
          stroke={C.fg}
          strokeWidth={2}
        />
        <line
          x1={xAt(1)}
          y1={yLine - tickH}
          x2={xAt(1)}
          y2={yLine + tickH}
          stroke={C.fg}
          strokeWidth={2}
        />
        <text
          x={xAt(0)}
          y={yLine + tickH + 26}
          textAnchor="middle"
          fill={C.fg}
          fontSize="22"
          fontFamily="var(--reader-font-family)"
        >
          0
        </text>
        <text
          x={xAt(1)}
          y={yLine + tickH + 26}
          textAnchor="middle"
          fill={C.fg}
          fontSize="22"
          fontFamily="var(--reader-font-family)"
        >
          1
        </text>
        {Array.from({ length: n - 1 }, (_, i) => i + 1).map(i => {
          const t = i / n
          return (
            <line
              key={i}
              x1={xAt(t)}
              y1={yLine - tickH * 0.55}
              x2={xAt(t)}
              y2={yLine + tickH * 0.55}
              stroke={C.dim}
              strokeWidth={1.5}
            />
          )
        })}
        <line x1={xAt(0)} y1={segY} x2={xAt(1 / n)} y2={segY} stroke={C.fg} strokeWidth={3} />
        <line
          x1={xAt(0)}
          y1={segY - segHalf}
          x2={xAt(0)}
          y2={segY + segHalf}
          stroke={C.fg}
          strokeWidth={2}
        />
        <line
          x1={xAt(1 / n)}
          y1={segY - segHalf}
          x2={xAt(1 / n)}
          y2={segY + segHalf}
          stroke={C.fg}
          strokeWidth={2}
        />
        <line
          x1={xAt(0.5 / n)}
          y1={segY + 8}
          x2={xAt(0.5 / n)}
          y2={yLine - tickH - 6}
          stroke={C.dim}
          strokeWidth={1}
          strokeDasharray="3 4"
        />
        <foreignObject x={xAt(0.5 / n) - 80} y={segY - 70} width={160} height={56}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: C.fg,
              fontSize: FONT_VALUE_LG,
              lineHeight: 1
            }}
          >
            <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ borderBottom: `2px solid ${C.fg}`, padding: '0 10px 2px' }}>1</span>
              <span style={{ padding: '2px 10px 0' }}>{n}</span>
            </span>
          </div>
        </foreignObject>
        <text
          x={W / 2}
          y={H - 22}
          textAnchor="middle"
          fill={C.dim}
          fontSize="18"
          letterSpacing="2"
          fontFamily="var(--reader-font-family)"
        >
          {`${n} EQUAL PART${n === 1 ? '' : 'S'}`}
        </text>
      </svg>
      <Slider
        label="parts n"
        value={n}
        min={1}
        max={16}
        step={1}
        onChange={setN}
        format={v => String(v)}
      />
    </div>
  )
}

// hardcoded geometry: every coordinate derives from the (m, n) state.
function NumberLineFraction34Inline() {
  const [m, setM] = useState(3)
  const [n, setN] = useState(4)
  const mc = Math.min(m, n)
  const ticks = Array.from({ length: n + 1 }, (_, i) => i / n)
  const [rn, rd] = nl34_reduce(mc, n)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.21, 1.21]} yRange={[-0.25, 0.45]} width={620} height={240}>
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
            [0, -0.12],
            [0, 0.12]
          ]}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [1, -0.12],
            [1, 0.12]
          ]}
          opacity={OPACITY.fg}
        />
        <Tex at={[0, -0.2]} tex="0" anchor="middle" opacity={OPACITY.dim} size={FONT_LABEL} />
        <Tex at={[1, -0.2]} tex="1" anchor="middle" opacity={OPACITY.dim} size={FONT_LABEL} />
        {ticks.slice(1, -1).map((x, i) => (
          <Polyline
            key={i}
            points={[
              [x, -0.07],
              [x, 0.07]
            ]}
            opacity={OPACITY.dim}
          />
        ))}
        <Polyline
          points={[
            [0, 0.22],
            [mc / n, 0.22]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={2}
        />
        <Dot x={mc / n} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[mc / n, 0.42]}
          tex={`\\dfrac{${mc}}{${n}}${rn !== mc ? ` = \\dfrac{${rn}}{${rd}}` : ''}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="m"
        value={m}
        min={0}
        max={n}
        step={1}
        onChange={v => setM(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="n"
        value={n}
        min={1}
        max={12}
        step={1}
        onChange={v => {
          const nn = v | 0
          setN(nn)
          if (m > nn) setM(nn)
        }}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

function Nl17over4Refined() {
  // Honest computation: locate m/n on the number line by walking m copies of
  // 1/n from 0. Default 17/4 illustrates an improper fraction: q = 4 whole
  // units plus a remainder r/n = 1/4. The swept segment from 0 to m/n makes
  // the "count off m parts" procedure visible. Whole-unit ticks dominate;
  // fractional subdivisions sit at lower opacity so the unit structure stays
  // legible at any (m, n).
  const [m, setM] = useState(17)
  const [n, setN] = useState(4)
  const q = Math.floor(m / n)
  const r = m - q * n
  const x = m / n
  // Visible range adapts to m/n but always shows at least 0..5 so 17/4
  // (the default) lands comfortably.
  const total = Math.max(5, Math.ceil(x) + 1)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.25, total + 0.25]} yRange={[-0.45, 0.7]} width={620} height={240}>
        {/* base axis */}
        <Polyline
          points={[
            [0, 0],
            [total, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {/* whole-unit ticks + labels */}
        {Array.from({ length: total + 1 }, (_, i) => (
          <g key={`u${i}`}>
            <Polyline
              points={[
                [i, -0.16],
                [i, 0.16]
              ]}
              opacity={OPACITY.fg}
              strokeWidth={1.25}
            />
            <Tex
              at={[i, -0.28]}
              tex={String(i)}
              anchor="middle"
              opacity={OPACITY.dim}
              size={FONT_LABEL}
            />
          </g>
        ))}
        {/* fractional subdivisions (skip whole-unit positions) */}
        {Array.from({ length: total * n + 1 }, (_, i) =>
          i % n !== 0 ? (
            <Polyline
              key={`f${i}`}
              points={[
                [i / n, -0.07],
                [i / n, 0.07]
              ]}
              opacity={OPACITY.faint}
            />
          ) : null
        )}
        {/* swept segment from 0 to m/n: shows the m copies of 1/n */}
        <Polyline
          points={[
            [0, 0.32],
            [x, 0.32]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={2}
        />
        <Polyline
          points={[
            [0, 0.28],
            [0, 0.36]
          ]}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [x, 0.28],
            [x, 0.36]
          ]}
          opacity={OPACITY.fg}
        />
        {/* the located point */}
        <Dot x={x} y={0} r={5} opacity={OPACITY.fg} />
        {/* label: mixed form only when r > 0; reduced form when m/n is a whole */}
        <Tex
          at={[x, 0.5]}
          tex={
            r === 0 ? `\\dfrac{${m}}{${n}} = ${q}` : `\\dfrac{${m}}{${n}} = ${q}\\tfrac{${r}}{${n}}`
          }
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="m"
        value={m}
        min={0}
        max={40}
        step={1}
        onChange={v => setM(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="n"
        value={n}
        min={1}
        max={10}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

// unit square so the area reads geometrically, not as a stretched bar. Both the
// number of strips (n) and the shaded count (m) are driven by sliders, so the
// m/n → area correspondence is something the learner discovers rather than reads.
function Amf_AreaModelFraction({ n: n0 = 4, m: m0 = 3 }) {
  const C = useVizColors()
  const [n, setN] = useState(n0)
  const [m, setM] = useState(m0)
  const S = 320 // unit-square side in viewBox units
  const pad = 28 // room for the fraction label below
  const stripW = S / n
  const shaded = Math.max(0, Math.min(m, n))
  const [num, den] = amf_reduce(shaded, n)
  const labelTex = num === shaded ? `${shaded}/${n}` : `${shaded}/${n} = ${num}/${den}`
  return (
    <div style={{ width: '100%' }}>
      <svg
        viewBox={`0 0 ${S} ${S + pad}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          display: 'block',
          fontFamily: 'var(--reader-font-family)',
          color: C.fg
        }}
        aria-label={`Unit square divided into ${n} equal vertical strips; ${shaded} shaded, showing the fraction ${labelTex}.`}
      >
        {Array.from({ length: n }, (_, i) => (
          <rect
            key={i}
            x={i * stripW}
            y={0}
            width={stripW}
            height={S}
            fill={i < shaded ? C.accent : 'transparent'}
            stroke={C.fg}
            strokeWidth={1.25}
          />
        ))}
        <rect x={0} y={0} width={S} height={S} fill="none" stroke={C.fg} strokeWidth={2} />
        <text
          x={S / 2}
          y={S + pad - 8}
          textAnchor="middle"
          fill={C.fg}
          fontSize={FONT_BODY}
          style={{ fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em' }}
        >
          {labelTex}
        </text>
      </svg>
      <Slider
        label="parts n"
        value={n}
        min={1}
        max={12}
        step={1}
        onChange={v => {
          const nn = v | 0
          setN(nn)
          if (m > nn) setM(nn)
        }}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="shaded m"
        value={shaded}
        min={0}
        max={n}
        step={1}
        onChange={v => setM(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

function amf_gcd(a, b) {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a || 1
}

function amf_reduce(n, d) {
  const g = amf_gcd(n, d)
  return [n / g, d / g]
}

function Eqf_EquivalentFractionsOnNumberLine() {
  // Mathematics: hand-rolled SVG (Approved Engine Stack). Honest content:
  // the same point on [0,1] is computed two ways, k/ℓ and (nk)/(nℓ),
  // demonstrating the equivalent-fractions theorem.
  const [k, setK] = useState(2)
  const [ell, setEll] = useState(3)
  const [n, setN] = useState(3)
  const ticksTop = Array.from({ length: ell + 1 }, (_, i) => i / ell)
  const ticksBot = Array.from({ length: n * ell + 1 }, (_, i) => i / (n * ell))
  const point = k / ell // exact: equals (n*k)/(n*ell) by construction
  const safeK = Math.min(k, ell)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.1, 1.16]} yRange={[-0.85, 1.1]} width={620} height={300}>
        {/* Top line: ℓ-partition */}
        <Polyline
          points={[
            [0, 0.55],
            [1, 0.55]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {ticksTop.map((x, i) => (
          <Polyline
            key={`t${i}`}
            points={[
              [x, 0.45],
              [x, 0.65]
            ]}
            opacity={i === 0 || i === ell ? OPACITY.fg : OPACITY.dim}
          />
        ))}
        <Tex at={[0, 0.3]} tex="0" anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[1, 0.3]} tex="1" anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Dot x={safeK / ell} y={0.55} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[safeK / ell, 0.95]}
          tex={`\\dfrac{${safeK}}{${ell}}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />

        {/* Bottom line: nℓ-partition */}
        <Polyline
          points={[
            [0, -0.2],
            [1, -0.2]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {ticksBot.map((x, i) => (
          <Polyline
            key={`b${i}`}
            points={[
              [x, -0.27],
              [x, -0.13]
            ]}
            opacity={i === 0 || i === n * ell ? OPACITY.fg : OPACITY.faint}
          />
        ))}
        <Tex at={[0, -0.45]} tex="0" anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[1, -0.45]} tex="1" anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Dot x={(safeK * n) / (n * ell)} y={-0.2} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[(safeK * n) / (n * ell), -0.55]}
          tex={`\\dfrac{${safeK * n}}{${n * ell}}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />

        {/* Connector: same point */}
        <Polyline
          points={[
            [safeK / ell, 0.55],
            [safeK / ell, -0.2]
          ]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Tex
          at={[0.02, 1.05]}
          tex={`\\times \\dfrac{${n}}{${n}}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="k"
        value={safeK}
        min={0}
        max={ell}
        step={1}
        onChange={v => setK(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="ℓ"
        value={ell}
        min={1}
        max={6}
        step={1}
        onChange={v => {
          const nv = v | 0
          setEll(nv)
          if (k > nv) setK(nv)
        }}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="n"
        value={n}
        min={1}
        max={6}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

function DafvStrip({ v, y, lo, hi, ticks, place }) {
  const range = hi - lo
  return (
    <g>
      <Polyline
        points={[
          [0, y],
          [1, y]
        ]}
        opacity={OPACITY.fg}
        strokeWidth={1.2}
      />
      {Array.from({ length: ticks + 1 }, (_, i) => {
        const x = i / ticks
        const isEnd = i === 0 || i === ticks
        return (
          <g key={i}>
            <Polyline
              points={[
                [x, y - 0.05],
                [x, y + 0.05]
              ]}
              opacity={isEnd ? OPACITY.fg : OPACITY.dim}
            />
            {(isEnd || ticks <= 10) && (
              <Tex
                at={[x, y - 0.13]}
                tex={(lo + (range * i) / ticks).toFixed(place)}
                anchor="middle"
                size={FONT_TINY}
                opacity={OPACITY.dim}
              />
            )}
          </g>
        )
      })}
      <Dot x={(v - lo) / range} y={y} r={4} opacity={OPACITY.fg} />
    </g>
  )
}

// is rendered, not just stated.
function DecimalAsFractionViz() {
  const [v, setV] = useState(0.375)
  const d1 = Math.floor(v * 10)
  const d2 = Math.floor(v * 100) - d1 * 10
  const d3 = Math.floor(v * 1000) - d1 * 100 - d2 * 10
  const numer = d1 * 100 + d2 * 10 + d3
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Plot xRange={[-0.19, 1.19]} yRange={[-0.93, 1.24]} width={620} height={340}>
        <Tex
          at={[0.0, 0.92]}
          tex={`${v.toFixed(3)} = \\frac{${numer}}{1000}`}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <DafvStrip v={v} y={0.55} lo={0} hi={1} ticks={10} place={1} />
        <DafvStrip v={v} y={-0.05} lo={d1 / 10} hi={(d1 + 1) / 10} ticks={10} place={2} />
        <DafvStrip
          v={v}
          y={-0.65}
          lo={(d1 * 10 + d2) / 100}
          hi={(d1 * 10 + d2 + 1) / 100}
          ticks={10}
          place={3}
        />
        <Tex
          at={[0.99, 0.55]}
          tex={`\\frac{${d1}}{10}`}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
          dy={38}
        />
        <Tex
          at={[0.99, -0.05]}
          tex={`+\\,\\frac{${d2}}{100}`}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
          dy={38}
        />
        <Tex
          at={[0.99, -0.65]}
          tex={`+\\,\\frac{${d3}}{1000}`}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
          dy={38}
        />
      </Plot>
      <Slider
        label="x"
        value={v}
        min={0}
        max={0.999}
        step={0.001}
        onChange={setV}
        format={x => x.toFixed(3)}
      />
    </div>
  )
}

// Reduce p/q to lowest terms using Euclid's algorithm. Returns [num, den].
function dfc_reduce(p, q) {
  let a = Math.abs(p)
  let b = Math.abs(q)
  while (b) {
    const t = b
    b = a % b
    a = t
  }
  return [p / a, q / a]
}

// Render `1/n` as a point on a unit interval (top line) and the same value on
// a decimals-of-10ths/100ths grid (bottom line). A dashed connector and a
// central equivalence equation make the fraction↔decimal correspondence
// explicit. Numbers are exact: x = 1/n, decimal label = (1/n).toFixed(4).
function Dfc_DecimalFractionCompare() {
  const [n, setN] = useState(8)
  const v = 1 / n
  const [rn, rd] = dfc_reduce(1, n)
  const decimalStr = v.toFixed(4).replace(/0+$/, '').replace(/\.$/, '.0')
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.08, 1.08]} yRange={[-0.95, 0.95]} width={620} height={300}>
        {/* Top: unit interval split into n equal parts. */}
        <Polyline
          points={[
            [0, 0.55],
            [1, 0.55]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {Array.from({ length: n + 1 }, (_, i) => (
          <Polyline
            key={'t' + i}
            points={[
              [i / n, 0.47],
              [i / n, 0.63]
            ]}
            opacity={i === 0 || i === n ? OPACITY.fg : OPACITY.dim}
          />
        ))}
        <Tex at={[0, 0.4]} tex="0" anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[1, 0.4]} tex="1" anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Dot x={v} y={0.55} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[v, 0.82]}
          tex={`\\dfrac{${rn}}{${rd}}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />

        {/* Centre: the equivalence equation that anchors the section. */}
        <Tex
          at={[0.5, 0.07]}
          tex={`\\dfrac{1}{${n}} = ${decimalStr}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />

        {/* Connector: vertical dashed line from top point to bottom point. */}
        <Polyline
          points={[
            [v, 0.55],
            [v, -0.55]
          ]}
          opacity={OPACITY.dim}
          dash="3 3"
        />

        {/* Bottom: same unit interval split into 100 equal parts (hundredths)
            with 10 emphasized ticks at the tenths. */}
        <Polyline
          points={[
            [0, -0.55],
            [1, -0.55]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {Array.from({ length: 101 }, (_, i) => (
          <Polyline
            key={'h' + i}
            points={[
              [i / 100, -0.59],
              [i / 100, -0.51]
            ]}
            opacity={OPACITY.faint}
          />
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <Polyline
            key={'t10-' + i}
            points={[
              [i / 10, -0.62],
              [i / 10, -0.48]
            ]}
            opacity={i === 0 || i === 10 ? OPACITY.fg : OPACITY.dim}
          />
        ))}
        <Tex at={[0, -0.7]} tex="0.0" anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={[1, -0.7]} tex="1.0" anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Dot x={v} y={-0.55} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[v, -0.85]}
          tex={`${decimalStr}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="n"
        value={n}
        min={2}
        max={10}
        step={1}
        onChange={x => setN(x | 0)}
        format={x => x.toFixed(0)}
      />
    </div>
  )
}

// Defaults to the prose example 4/7 vs 3/5 (cross products 20 vs 21).
function CompareFractionsCrossVis() {
  const [a, setA] = useState(4)
  const [b, setB] = useState(7)
  const [c, setC] = useState(3)
  const [d, setD] = useState(5)

  const v1 = a / b
  const v2 = c / d
  const left = a * d // numerator·other-denom for a/b
  const right = c * b // numerator·other-denom for c/d
  const cmp = left < right ? '<' : left > right ? '>' : '='

  // Number-line panel: extra horizontal pad so the right-edge fraction label
  // (when v2 = 1) doesn't clip against the plot wall.
  const NL_X = [-0.08, 1.12]
  const NL_Y = [-0.6, 0.75]

  // Cross-product bar panel: scale to fit the larger product.
  const maxProd = Math.max(left, right, 1)
  // Left pad fits ~5-char labels like "9×10=90"; right pad fits the comparison.
  const BAR_X = [-0.34, 1.18]
  const BAR_Y = [-0.6, 0.6]

  // Stack v2 above v1 (rather than to the side) when v1, v2 are visually
  // close, so the staggered label can't collide with the comparison line
  // that sits below the number line.
  const close = Math.abs(v1 - v2) < 0.15
  const y1 = 0.3
  const y2 = close ? 0.62 : 0.3

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Plot xRange={NL_X} yRange={NL_Y} width={620} height={180}>
        {/* unit segment */}
        <Polyline
          points={[
            [0, 0],
            [1, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {/* endpoint ticks */}
        {[0, 1].map(t => (
          <g key={t}>
            <Polyline
              points={[
                [t, -0.1],
                [t, 0.1]
              ]}
              opacity={OPACITY.fg}
            />
            <Tex
              at={[t, -0.2]}
              tex={String(t)}
              anchor="middle"
              size={FONT_LABEL}
              opacity={OPACITY.dim}
            />
          </g>
        ))}
        {/* fraction a/b */}
        <Dot x={v1} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[v1, y1]}
          tex={`\\dfrac{${a}}{${b}}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        {/* fraction c/d */}
        <Dot x={v2} y={0} r={5} opacity={OPACITY.dim} />
        <Tex
          at={[v2, y2]}
          tex={`\\dfrac{${c}}{${d}}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        {/* result inequality */}
        <Tex
          at={[0.5, -0.46]}
          tex={`\\dfrac{${a}}{${b}}\\;${cmp}\\;\\dfrac{${c}}{${d}}`}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>

      <Plot xRange={BAR_X} yRange={BAR_Y} width={620} height={170}>
        {/* bar 1: a · d = left: label left of bar, bar to the right */}
        <Tex
          at={[-0.06, 0.3]}
          tex={`${a}\\times ${d}=${left}`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [0, 0.3],
            [left / maxProd, 0.3]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={7}
        />
        {/* bar 2: c · b = right */}
        <Tex
          at={[-0.06, -0.3]}
          tex={`${c}\\times ${b}=${right}`}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [0, -0.3],
            [right / maxProd, -0.3]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={7}
        />
        {/* cross-product inequality: centered vertically between bars */}
        <Tex
          at={[1.16, 0]}
          tex={`${left}\\;${cmp}\\;${right}`}
          anchor="end"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
      </Plot>

      <div style={{ marginTop: 2 }}>
        <Cfv_NumberPicker label="a (top of left)" value={a} min={1} max={9} onChange={setA} />
        <Cfv_NumberPicker label="b (bottom of left)" value={b} min={1} max={10} onChange={setB} />
        <Cfv_NumberPicker label="c (top of right)" value={c} min={1} max={9} onChange={setC} />
        <Cfv_NumberPicker label="d (bottom of right)" value={d} min={1} max={10} onChange={setD} />
      </div>
    </div>
  )
}

function Cfv_NumberPicker({ label, value, min, max, onChange }) {
  return (
    <Slider
      label={label}
      value={value}
      min={min}
      max={max}
      step={1}
      onChange={onChange}
      format={v => String(v)}
    />
  )
}

function Ffp_CrossMultiplyCompare() {
  const [k, setK] = useState(5)
  const [l, setL] = useState(8)
  const [m, setM] = useState(7)
  const [n, setN] = useState(11)
  const kn = k * n
  const lm = l * m
  const max = Math.max(kn, lm, 1) * 1.18
  const cmp = kn > lm ? '>' : kn < lm ? '<' : '='
  const fracCmp = cmp
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.05 * max, max]} yRange={[-1.5, 1.5]} width={620} height={300}>
        <Polyline
          points={[
            [0, -0.9],
            [max, -0.9]
          ]}
          opacity={OPACITY.hair}
        />
        <Polyline
          points={[
            [0, 0.55],
            [kn, 0.55]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={6}
        />
        <Tex
          at={[0, 0.95]}
          tex={`k\\!\\cdot\\!n = ${k}\\!\\cdot\\!${n} = ${kn}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [0, -0.15],
            [lm, -0.15]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={6}
        />
        <Tex
          at={[0, -0.55]}
          tex={`\\ell\\!\\cdot\\!m = ${l}\\!\\cdot\\!${m} = ${lm}`}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Polyline
          points={[
            [0, -1.0],
            [0, 1.0]
          ]}
          opacity={OPACITY.faint}
        />
        <Tex
          at={[max * 0.5, -1.25]}
          tex={`\\dfrac{${k}}{${l}}\\;${fracCmp}\\;\\dfrac{${m}}{${n}}`}
          anchor="middle"
          size={FONT_CONTROL}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="k"
        value={k}
        min={1}
        max={12}
        step={1}
        onChange={v => setK(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="ℓ"
        value={l}
        min={1}
        max={12}
        step={1}
        onChange={v => setL(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="m"
        value={m}
        min={1}
        max={12}
        step={1}
        onChange={v => setM(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="n"
        value={n}
        min={1}
        max={12}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

function useConfig() {
  const config = {
    cssPrefix: 'frc',
    documentTitle: 'Fraction Foundations - AETHER',
    learning: {
      category: 'Part 2',
      title: 'Fraction Foundations',
      subtitle: 'One definition. Every fraction on the number line. Complete precision.',
      sections: [
        /* SECTION 1: WHAT IS A FRACTION?
         */
        <>
          <h2>What Is a Fraction?</h2>

          <p>
            A <strong>fraction</strong> is a point on the number line. That is the complete
            definition: a precise location on a line, not a slice of something.
          </p>

          <h3>The Number Line Foundation</h3>
          <p>
            You already built the number line in Place Value and Algorithms: a straight line with 0,
            1, and the whole numbers marked at evenly spaced points. The distance from 0 to 1 is the{' '}
            <strong>unit</strong>. Fractions live in the gaps between those whole-number marks.
          </p>

          <VizFigure title="UNIT INTERVAL DIVIDED INTO n PARTS" size="body" aspect="5/2">
            <Nlb_NumberLineBasicRefined />
          </VizFigure>

          <p>{`A fraction $\\frac{m}{n}$ tells you two things:`}</p>
          <ul className="lrn-list">
            <li>
              {`$n$`} is the <strong>denominator</strong>. It says: divide each unit into {`$n$`}{' '}
              equal parts.
            </li>
            <li>
              {`$m$`} is the <strong>numerator</strong>. It says: start at 0 and count off {`$m$`}{' '}
              of those parts.
            </li>
          </ul>
          <p>{`The point you land on is the fraction $\\frac{m}{n}$.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Every point on the number line has exactly one location. When you count $m$ copies of $\\frac{1}{n}$ from 0, you arrive at precisely one point, not approximately $\\frac{m}{n}$, but exactly $\\frac{m}{n}$. That precision is what makes this a definition you can build mathematics on.`}
            </p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>If you divide [0, 1] into 4 equal parts and count 3 of them, where do you land?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`On $\\frac{3}{4}$. The worked example just below walks through every step.`}</p>
            </details>
          </div>

          <h3>Locating Fractions on the Number Line</h3>

          <p>
            <strong>{`Example: Locating $\\frac{3}{4}$`}</strong>
          </p>
          <ol className="lrn-list">
            <li>Draw the number line with 0 and 1 marked.</li>
            <li>Divide the segment [0, 1] into 4 equal parts.</li>
            <li>Starting from 0, count 3 parts to the right.</li>
            <li>{`You land on $\\frac{3}{4}$.`}</li>
          </ol>

          <VizFigure title="Locating m/n on the Unit Number Line" size="body" aspect="auto">
            <NumberLineFraction34Inline />
          </VizFigure>

          <p>
            <strong>{`Example: Locating $\\frac{17}{4}$`}</strong>
          </p>
          <p>The numerator 17 is bigger than the denominator 4. This means you go past 1.</p>
          <ol className="lrn-list">
            <li>Divide each unit segment into 4 equal parts.</li>
            <li>Starting from 0, count off 17 of these small parts.</li>
            <li>
              You pass through 1 (at the 4th part), 2 (at the 8th), 3 (at the 12th), 4 (at the
              16th).
            </li>
            <li>{`One more part puts you at $\\frac{17}{4}$, between 4 and 5.`}</li>
          </ol>
          <p>{`So $\\frac{17}{4} = 4\\frac{1}{4}$, written $4\\frac{1}{4}$ to mean 4 whole units plus $\\frac{1}{4}$ more.`}</p>

          <VizFigure title="Locating 17/4 on the Number Line" size="body" aspect="620/192">
            <Nl17over4Refined />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why can the number line handle fractions bigger than 1, while the pizza model breaks
              down?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The number line extends forever in both directions. You can always count more parts.
                The pizza model limits you to one whole. Fractions greater than 1 need multiple
                pizzas, which makes &ldquo;parts of a whole&rdquo; confusing.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Number Line</span>
              <p>Precise. Extends to any fraction. Supports all operations and proofs.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Pizza / Pie Model</span>
              <p>
                Stops at one whole, so fractions above 1 need extra pizzas. Has no clear way to
                multiply, and &ldquo;equal parts&rdquo; depends on how you cut.
              </p>
            </div>
          </div>

          <p>
            The number line fixes all of these. It gives one clear definition that works for every
            fraction, every operation, every proof.
          </p>
        </>,

        /* SECTION 2: DECIMALS AS FRACTIONS
         */
        <>
          <h2>Decimals as Fractions</h2>

          <p>
            A <strong>decimal</strong>
            {` is just a fraction whose denominator is a power of 10. Here $10^k$ means 10 multiplied by itself $k$ times: $10^2 = 100$, $10^3 = 1000$. So a decimal with $k$ places after the dot is a fraction over $10^k$.`}
          </p>

          <p>For example, 0.375 sits over a denominator of 1000:</p>
          <div className="lrn-eq lrn-eq-display">
            {`$$0.375 = \\frac{375}{1000} = \\frac{3}{8}$$`}
          </div>
          <p>
            The last step is equivalent fractions at work: dividing top and bottom by 125 names the
            same point a different way. The full rule for that move comes next.
          </p>

          <VizFigure title="Decimal as a power-of-10 fraction" size="body" aspect="16/9">
            <DecimalAsFractionViz />
          </VizFigure>

          <p>
            That is all this page needs from decimals. Converting in both directions, comparing
            decimal places, and the full place-value treatment live in Decimal Fundamentals.
          </p>
        </>,

        /* SECTION 3: THE AREA MODEL
         */
        <>
          <h2>The Area Model</h2>
          <p>
            The <strong>area model</strong> represents a fraction as a shaded part of a rectangle.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you shade 3 out of 4 equal vertical strips in a unit square, what fraction of the
              area is shaded?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{3}{4}$. Each strip is $\\frac{1}{4}$ of the total area. Three strips = $\\frac{3}{4}$.`}</p>
            </details>
          </div>

          <h3>How It Works</h3>
          <p>Take a unit square (a square with side length 1, so area = 1).</p>
          <p>{`To show $\\frac{3}{4}$:`}</p>
          <ol className="lrn-list">
            <li>Divide the square into 4 equal vertical strips.</li>
            <li>Shade 3 of them.</li>
            <li>{`The shaded area is $\\frac{3}{4}$ of the total.`}</li>
          </ol>

          <VizFigure title="Area Model of a Unit Square" size="compact" aspect="auto">
            <Amf_AreaModelFraction n={4} m={3} />
          </VizFigure>

          <p>
            This model agrees with the number line. Both give the same answer. The area model
            becomes essential for multiplication.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why must the area model agree with the number line definition?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Both models divide a unit into $n$ equal parts and select $m$ of them. The number line measures length; the area model measures area. Since the strips have width $\\frac{1}{n}$ and height 1, each strip has area $\\frac{1}{n}$. Selecting $m$ strips gives area $\\frac{m}{n}$. Same number, different shape.`}
              </p>
            </details>
          </div>
        </>,

        /* SECTION 4: EQUIVALENT FRACTIONS
         */
        <>
          <h2>Equivalent Fractions</h2>
          <p>
            Two fractions are <strong>equivalent</strong>
            {` if they name the same point on the number line. A recipe calls for $\\frac{2}{3}$ cup. You only have a $\\frac{1}{6}$-cup scoop. You need 4 scoops, because $\\frac{2}{3} = \\frac{4}{6}$.`}
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Are $\\frac{2}{3}$ and $\\frac{6}{9}$ the same point on the number line?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. $\\frac{2}{3} = \\frac{2 \\times 3}{3 \\times 3} = \\frac{6}{9}$. Both name the same point.`}</p>
            </details>
          </div>

          <h3>The Equivalent Fractions Theorem</h3>
          <p>{`For any fraction $\\frac{k}{\\ell}$ and any nonzero whole number $n$:`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$$`}</div>
          <p>{`Here $k$ is the numerator and $\\ell$ (the letter ell) is the denominator, the same roles $m$ and $n$ played in Section 1.`}</p>
          <p>
            Multiplying the numerator and denominator by the same nonzero number gives an equivalent
            fraction.
          </p>

          <h3>Proof (from the Number Line)</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <ol className="lrn-list">
                <li>{`Start with $\\frac{k}{\\ell}$: divide [0, 1] into $\\ell$ parts, take $k$ of them.`}</li>
                <li>{`Now subdivide each of those $\\ell$ parts into $n$ equal sub-parts.`}</li>
                <li>{`The unit [0, 1] now has $n\\ell$ sub-parts total.`}</li>
                <li>{`The original $k$ parts contain $nk$ sub-parts.`}</li>
                <li>{`So $\\frac{k}{\\ell}$ and $\\frac{nk}{n\\ell}$ mark the same point.`}</li>
              </ol>
            </div>
          </div>

          <VizFigure title="Equivalent Fractions" size="body" aspect="16/9">
            <Eqf_EquivalentFractionsOnNumberLine />
          </VizFigure>

          <h3>Cancellation</h3>
          <p>
            The reverse direction is called <strong>cancellation</strong> (or simplifying):
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{km}{kn} = \\frac{m}{n}$$`}</div>
          <p>
            You divide both the numerator and denominator by the same factor. To reach lowest terms
            in one step, divide by the <strong>GCF</strong>, the greatest common factor you met in
            HCF and LCM.
          </p>

          <p>
            <strong>{`Example: Reducing $\\frac{48}{54}$`}</strong>
          </p>
          <p>{`First find the GCF. $48 = 2^4 \\times 3$ and $54 = 2 \\times 3^3$, so $\\gcd(48, 54) = 2 \\times 3 = 6$. Divide both by 6:`}</p>
          <div className="lrn-eq">
            {`$$\\frac{48}{54} = \\frac{8 \\times 6}{9 \\times 6} = \\frac{8}{9}$$`}
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does dividing both numerator and denominator by 6 give the same point on the
              number line?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Cancellation is the reverse of the equivalent fractions theorem. If $\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$, then reading backwards gives $\\frac{nk}{n\\ell} = \\frac{k}{\\ell}$. Dividing by a common factor undoes the subdivision. The point does not move.`}
              </p>
            </details>
          </div>
        </>,

        /* SECTION 5: COMPARING FRACTIONS AND FFFP
         */
        <>
          <h2>Comparing Fractions</h2>
          <p>You can compare any two fractions without finding a common denominator.</p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Which is bigger: $\\frac{4}{7}$ or $\\frac{3}{5}$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{3}{5}$ is bigger. The worked example below shows the cross-multiplication that proves it.`}</p>
            </details>
          </div>

          <h3>The Cross-Multiplication Rule</h3>
          <p>
            {`For fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$ (with positive denominators):`}
          </p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\frac{k}{\\ell} < \\frac{m}{n} \\quad \\text{if and only if} \\quad kn < \\ell m$$`}
          </div>

          <div className="lrn-warning">
            <p>
              Cross-multiplication is for <strong>comparing</strong> fractions only. Do not use it
              when <strong>adding</strong>
              {` fractions. Adding tops and bottoms (like $\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$) gives the wrong answer.`}
            </p>
          </div>

          <p>
            <strong>{`Example: Compare $\\frac{4}{7}$ and $\\frac{3}{5}$`}</strong>
          </p>
          <p>{`Cross-multiply: $4 \\times 5 = 20$ and $7 \\times 3 = 21$.`}</p>
          <p>{`Since $20 < 21$, we get $\\frac{4}{7} < \\frac{3}{5}$.`}</p>

          <VizFigure title="CROSS-MULTIPLICATION COMPARE" size="body" aspect="4/3">
            <CompareFractionsCrossVis />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does comparing products $kn$ and $\\ell m$ tell you which fraction is larger?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Rewriting both fractions with common denominator $\\ell n$ gives $\\frac{kn}{\\ell n}$ and $\\frac{\\ell m}{\\ell n}$. With the same denominator, the larger numerator wins. So comparing $kn$ and $\\ell m$ is the same as comparing the fractions.`}
              </p>
            </details>
          </div>

          <h3>Proof of Cross-Multiplication</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <ol className="lrn-list">
                <li>{`Rewrite both with denominator $\\ell n$: $\\frac{k}{\\ell} = \\frac{kn}{\\ell n}$ and $\\frac{m}{n} = \\frac{m\\ell}{\\ell n}$.`}</li>
                <li>
                  Two fractions with the same denominator: the one with the bigger numerator is
                  bigger.
                </li>
                <li>{`So $\\frac{k}{\\ell} < \\frac{m}{n}$ exactly when $kn < \\ell m$.`}</li>
              </ol>
            </div>
          </div>

          <h3>The Full Rule (FFFP)</h3>
          <p>
            The same cross-products settle all three cases at once. This complete statement is the{' '}
            <strong>FFFP</strong>, the Fundamental Fact of Fraction Pairs.
          </p>
          <p>{`For fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$, compare $kn$ and $\\ell m$:`}</p>
          <ul className="lrn-list">
            <li>{`$kn = \\ell m$ means $\\frac{k}{\\ell} = \\frac{m}{n}$`}</li>
            <li>{`$kn < \\ell m$ means $\\frac{k}{\\ell} < \\frac{m}{n}$`}</li>
            <li>{`$kn > \\ell m$ means $\\frac{k}{\\ell} > \\frac{m}{n}$`}</li>
          </ul>
          <p>No common denominator needed. No decimal conversion needed.</p>

          <p>
            <strong>{`Example: Compare $\\frac{5}{8}$ and $\\frac{7}{11}$`}</strong>
          </p>
          <p>{`Cross-multiply: $5 \\times 11 = 55$ and $8 \\times 7 = 56$. Since $55 < 56$, we get $\\frac{5}{8} < \\frac{7}{11}$.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              {`For $\\frac{5}{8}$ vs $\\frac{7}{11}$ the products are 55 and 56. Why does just one unit of difference settle the comparison?`}
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Cross-multiplication is exact, not approximate. If $kn < \\ell m$ by even 1, the fractions are different and the first is smaller. There is no "margin of error." The products encode the exact positions on the number line.`}
              </p>
            </details>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'What is the definition of a fraction $\\frac{m}{n}$?',
        a: 'A fraction $\\frac{m}{n}$ is a point on the number line. You divide each unit segment into $n$ equal parts. Starting from 0, you count $m$ of those parts. The point you land on is $\\frac{m}{n}$.'
      },
      {
        q: 'Which is larger: $\\frac{5}{13}$ or $\\frac{7}{18}$? Use cross-multiplication.',
        a: '$\\frac{7}{18}$ is larger. Cross-multiply: $5 \\times 18 = 90$ and $13 \\times 7 = 91$. Since $90 < 91$, $\\frac{5}{13} < \\frac{7}{18}$.'
      },
      {
        q: 'Locate $\\frac{23}{5}$ on the number line. Between which two whole numbers does it fall?',
        a: '$\\frac{23}{5}$ falls between 4 and 5. Each unit is split into 5 parts. Count 23 parts from 0. After 20 parts you reach 4. Three more parts puts you at $\\frac{23}{5} = 4\\frac{3}{5}$.'
      },
      {
        q: 'A tank holds $\\frac{3}{8}$ of a full load. Express this as a decimal. Show your work.',
        a: '$\\frac{3}{8} = 0.375$. Since $8 = 2^3$, multiply top and bottom by $5^3 = 125$: $\\frac{3 \\times 125}{8 \\times 125} = \\frac{375}{1000} = 0.375$.'
      },
      {
        q: 'Explain why the pizza model fails for the fraction $\\frac{7}{3}$, but the number line does not.',
        a: 'The pizza model defines fractions as "parts of a whole." For $\\frac{7}{3}$, you need 7 parts when the whole has 3. This requires more than one pizza, making "parts of a whole" confusing. The number line handles it naturally: divide each unit into 3 parts, count 7 from 0. You land at $2\\frac{1}{3}$.'
      },
      {
        q: 'Prove that $\\frac{2}{3} = \\frac{8}{12}$ using the number line.',
        a: 'Start with [0,1] divided into 3 equal parts. The point $\\frac{2}{3}$ is at the second mark. Subdivide each of those 3 parts into 4 sub-parts. Now [0,1] has 12 sub-parts. The original 2 parts contain $2 \\times 4 = 8$ sub-parts. So $\\frac{2}{3}$ and $\\frac{8}{12}$ mark the same point.'
      },
      {
        q: 'Reduce $\\frac{72}{108}$ to lowest terms.',
        a: '$\\frac{72}{108} = \\frac{2}{3}$. The GCF is $\\gcd(72, 108) = 36$, since $72 = 36 \\times 2$ and $108 = 36 \\times 3$. Cancel the common factor 36: $\\frac{36 \\times 2}{36 \\times 3} = \\frac{2}{3}$.'
      },
      {
        q: 'Shade 3 out of 5 equal vertical strips in a unit square. What fraction of the area is shaded? Why does this match the number line answer?',
        a: '$\\frac{3}{5}$ of the area is shaded. Each strip has width $\\frac{1}{5}$ and height 1, so area $\\frac{1}{5}$. Three strips have total area $\\frac{3}{5}$. This matches the number line because both models divide a unit into 5 parts and count 3.'
      },
      {
        q: 'Predict: What happens to a fraction when you make the denominator larger but keep the numerator the same?',
        a: 'The fraction gets smaller. A larger denominator means each piece ($\\frac{1}{n}$) is smaller. The same count of pieces covers less distance. $\\frac{3}{5} > \\frac{3}{7} > \\frac{3}{100}$.'
      },
      {
        q: 'The number line shows 0 and 1. How do you locate $\\frac{5}{3}$?',
        a: 'Divide each unit into 3 equal parts. Count 5 parts from 0. After 3 parts you reach 1. Two more puts you at $\\frac{5}{3} = 1\\frac{2}{3}$, between 1 and 2.'
      },
      {
        q: 'Simplify $\\frac{150}{225}$ to lowest terms.',
        a: '$\\frac{150}{225} = \\frac{2}{3}$. $\\gcd(150, 225) = 75$. Divide: $150 \\div 75 = 2$, $225 \\div 75 = 3$.'
      },
      {
        q: 'Find a fraction between $\\frac{2}{7}$ and $\\frac{3}{7}$.',
        a: '$\\frac{5}{14}$. By equivalent fractions: $\\frac{2}{7} = \\frac{4}{14}$ and $\\frac{3}{7} = \\frac{6}{14}$. So $\\frac{5}{14}$ lies between them.'
      },
      {
        q: 'Why can you compare two fractions by cross-multiplying? Explain the geometry.',
        a: 'Cross-multiplication rewrites both fractions with the same denominator. With equal denominators, the bigger numerator means a bigger fraction. The products $kn$ and $\\ell m$ are those adjusted numerators.'
      },
      {
        q: 'Why does the power-of-10 trick work for converting fractions to decimals?',
        a: 'A decimal is defined as a fraction with a power-of-10 denominator. Multiplying top and bottom by the same number gives an equivalent fraction. Choosing the right multiplier makes the denominator exactly $10^k$.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Fraction Foundations',
      sections: [
        <>
          <h2>Definitions</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Fraction</span>
            <div className="lrn-definition-desc">
              {`$\\frac{m}{n}$ = point on the number line: divide each unit into $n$ parts, count $m$ from 0.`}
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Decimal</span>
            <div className="lrn-definition-desc">
              {`$0.d_1 d_2 \\ldots d_k = \\frac{d_1 d_2 \\ldots d_k}{10^k}$. A fraction with a power-of-10 denominator.`}
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Area Model</span>
            <div className="lrn-definition-desc">
              {`$\\frac{m}{n}$ = shading $m$ out of $n$ equal strips in a unit square. Gives the same value as the number line.`}
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Equivalent Fractions</span>
            <div className="lrn-definition-desc">
              {`$\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$ for any nonzero $n$. Two fractions are equivalent when they name the same point.`}
            </div>
          </div>
        </>,
        <>
          <h2>Equivalence and Comparison</h2>
          <div className="lrn-eq">{`$$\\text{Cancellation: } \\frac{km}{kn} = \\frac{m}{n}$$`}</div>
          <p>Divide both numerator and denominator by a common factor.</p>
          <div className="lrn-eq">
            {`$$\\text{Cross-multiplication: } \\frac{k}{\\ell} < \\frac{m}{n} \\text{ iff } kn < \\ell m$$`}
          </div>
          <p>Compare two fractions without finding a common denominator.</p>
          <p>
            <strong>FFFP:</strong>
            {` $kn$ vs $\\ell m$ determines the full relationship between $\\frac{k}{\\ell}$ and $\\frac{m}{n}$.`}
          </p>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function FractionFoundations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
