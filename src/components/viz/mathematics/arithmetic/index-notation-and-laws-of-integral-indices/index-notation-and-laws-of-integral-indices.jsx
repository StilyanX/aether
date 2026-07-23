// INDEX NOTATION AND LAWS OF INTEGRAL INDICES
// Mafs-driven viz for the Indices and Scientific Notation unit.
//
// REFINE pass 2026-07-02 (ar.57–ar.64), file rewritten:
// - ar.59 was DISHONEST geometry (Blocker): the negative-exponent branch drew
//   2⁻¹ as a 4-unit bar while 2¹ drew at 1.5 units - the fraction bar was
//   LONGER than the whole. One linear value scale now rules every n.
// - ar.58 put y-labels 0/1/8 ~2 px apart (40 px rule); ar.64 packed sixteen
//   caret labels at ~34 px pitch. Both re-ticked.
// - caret notation ("2^x", "a^(5+3)") replaced with real TeX exponents;
//   size-24 canvas text → house 12; weight-18/20/24 lines-as-bars → Polygons;
//   result equations moved to readout rows; ar.62/ar.63 gained live inputs
//   (were static single-value diagrams); ar.64 descriptions re-anchored at
//   the TRUE log₁₀ positions of the quantities they name.
// Engine (WebSearch 2026-07-02, exponent-ladder / power-curve / log-scale
// classes): only banned dashboard stacks surfaced; Mafs (A) stays. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.

import { useState, Fragment } from 'react'
import { Mafs, Coordinates, Plot, Point, Text, Line, LaTeX, Polygon } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import { FONT_FAMILY, FONT_LABEL, LS_CONTROL } from '../../../scale-tokens'

const SLIDER_ROW = {
  display: 'flex',
  gap: 16,
  justifyContent: 'center',
  marginTop: 8,
  flexWrap: 'wrap'
}

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

// exact TeX for 2^n: integer when n ≥ 0, unit fraction when n < 0
const pow2Tex = n => (n >= 0 ? String(2 ** n) : `\\tfrac{1}{${2 ** -n}}`)

// HalvingLadder - ar.57
// 2³ down to 2⁻³ on a vertical ladder; each rung is the one above ÷ 2. The
// exponent drops by one as the value halves - 2⁰ = 1 sits exactly mid-ladder.
// Static by design: the ladder IS the complete table (logged, not mode 1).
export function HalvingLadder({ C }) {
  const exps = [3, 2, 1, 0, -1, -2, -3]
  const yOf = i => 12 - i * 2
  const xSpine = 7

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Halving ladder: exponent steps of one, value steps of divide by two"
    >
      <Mafs viewBox={{ x: [-0.5, 15], y: [-1, 14.2] }} preserveAspectRatio={false} height={320}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[xSpine, -0.3]} point2={[xSpine, 13.3]} color={C.dim} weight={1} />
        {exps.slice(0, -1).map((_, i) => (
          <Text
            key={`d${i}`}
            x={xSpine + 0.8}
            y={(yOf(i) + yOf(i + 1)) / 2}
            size={FONT_LABEL}
            attach="e"
            color={C.dim}
          >
            ÷2
          </Text>
        ))}
        {exps.map((e, i) => {
          const y = yOf(i)
          const isZero = e === 0
          return (
            <Fragment key={e}>
              <Point x={xSpine} y={y} color={isZero ? C.fg : C.accent} />
              <LaTeX at={[xSpine - 1.6, y]} tex={`2^{${e}}`} color={isZero ? C.fg : C.dim} />
              <LaTeX
                at={[xSpine + 3.4, y]}
                tex={`= ${pow2Tex(e)}`}
                color={isZero ? C.fg : C.accent}
              />
            </Fragment>
          )
        })}
        <Text x={xSpine - 1.6} y={13.7} size={FONT_LABEL} color={C.dim}>
          power
        </Text>
        <Text x={xSpine + 3.4} y={13.7} size={FONT_LABEL} color={C.dim}>
          value
        </Text>
      </Mafs>
      <div
        aria-label="Halving ladder readout: negative exponents are repeated division"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={'2^{-n} = \\tfrac{1}{2^{n}}'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          exponent down one, value halves; <KatexInline tex={'2^{0} = 1'} /> is the middle rung
        </span>
      </div>
    </div>
  )
}

// PowerCurves - ar.58
// y = 2ˣ and y = 3ˣ drawn in TRUE coordinates (no remapping) on one fixed
// frame with declared gridlines every 20. The old version put y-labels
// 0/1/8 two pixels apart; the curve ends now carry de-collided tags.
export function PowerCurves({ C }) {
  const xMin = -2
  const xMax = 4
  const e2 = 16 // 2⁴
  const e3 = 81 // 3⁴

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Power curves: two to the x and three to the x in true coordinates"
    >
      <Mafs viewBox={{ x: [-2.7, 5.6], y: [-9, 92] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian
          xAxis={{
            lines: false,
            labels: n => (Number.isInteger(n) && n >= xMin && n <= xMax ? `${n}` : '')
          }}
          yAxis={false}
        />
        {[20, 40, 60, 80].map(g => (
          <Fragment key={g}>
            <Line.Segment point1={[xMin, g]} point2={[xMax + 0.15, g]} color={C.faint} weight={1} />
            <LaTeX at={[-2.4, g]} tex={String(g)} color={C.dim} />
          </Fragment>
        ))}
        <Plot.OfX y={x => (x >= xMin && x <= xMax ? 2 ** x : undefined)} color={C.fg} weight={2} />
        <Plot.OfX
          y={x => (x >= xMin && x <= xMax ? 3 ** x : undefined)}
          color={C.accent}
          weight={2}
        />
        {/* curve tags at the ends - 65 y-units apart, no collision possible */}
        <LaTeX at={[xMax + 0.75, e2]} tex={'2^{x}'} color={C.fg} />
        <LaTeX at={[xMax + 0.75, e3 - 3]} tex={'3^{x}'} color={C.accent} />
        <Point x={0} y={1} color={C.fg} />
        <LaTeX at={[0.55, 6.5]} tex={'(0,1)'} color={C.dim} />
      </Mafs>
      <div
        aria-label="Power curves readout: endpoint values and the shared intercept"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'2^{4} = 16'} />
        </span>
        <span>
          <KatexInline tex={'3^{4} = 81'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          every curve <KatexInline tex={'b^{x}'} /> passes through (0, 1),{' '}
          <KatexInline tex={'b^{0} = 1'} />
        </span>
      </div>
    </div>
  )
}

// InteractiveExponentSlider - ar.59
// REBUILT (Blocker): the old negative-n branch drew 2⁻¹ as a LONGER bar than
// 2¹. One linear value scale 0–16 now rules every n: 2⁻⁴ is honestly a
// sliver ~2 px wide - that shrinkage IS the lesson. Exact fractions below.
export function InteractiveExponentSlider({ C }) {
  const [n, setN] = useState(3)
  const value = 2 ** n // exact dyadic for |n| ≤ 4
  const W = 12 // mafs units for the full 0–16 value scale
  const barW = (value / 16) * W

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Exponent slider: one honest value scale for positive and negative powers of two"
    >
      <Mafs viewBox={{ x: [-0.6, 14.2], y: [-1.9, 2.4] }} preserveAspectRatio={false} height={190}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {/* declared value scale */}
        <Line.Segment point1={[0, 0]} point2={[W, 0]} color={C.dim} weight={1} />
        {[0, 1, 2, 4, 8, 16].map(v => (
          <Fragment key={v}>
            <Line.Segment
              point1={[(v / 16) * W, -0.18]}
              point2={[(v / 16) * W, 0.18]}
              color={C.dim}
              weight={1}
            />
            <LaTeX at={[(v / 16) * W, -0.72]} tex={String(v)} color={v === 1 ? C.fg : C.dim} />
          </Fragment>
        ))}
        {/* the bar: true width value/16 of the scale, for EVERY n */}
        <Polygon
          points={[
            [0, 0.35],
            [Math.max(barW, 0.02), 0.35],
            [Math.max(barW, 0.02), 1.15],
            [0, 1.15]
          ]}
          color={n === 0 ? C.dim : C.accent}
          fillOpacity={0.45}
        />
        {/* reference mark at 1 (= 2⁰) */}
        <Line.Segment
          point1={[W / 16, 0.35]}
          point2={[W / 16, 1.15]}
          color={C.fg}
          weight={1}
          style="dashed"
        />
      </Mafs>
      <div
        aria-label="Exponent readout: the exact value of two to the n"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`2^{${n}} = ${pow2Tex(n)}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={
              n < 0
                ? `2^{${n}} = \\tfrac{1}{2^{${-n}}}`
                : n === 0
                  ? 'b^{0} = 1'
                  : `2^{${n}} = ${'2 \\cdot '.repeat(n - 1)}2`
            }
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          {n >= 0
            ? 'each step up doubles the bar'
            : 'negative exponents shrink below 1, never negative'}
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="Exponent n"
          value={n}
          min={-4}
          max={4}
          step={1}
          onChange={setN}
          format={v => String(v)}
        />
      </div>
    </div>
  )
}

// ProductLawVisualizer - ar.60
// aᵐ · aⁿ: m factor blocks joined with n factor blocks is m + n factor
// blocks - the law is counting. Blocks are true unit rectangles.
export function ProductLawVisualizer({ C }) {
  const [m, setM] = useState(5)
  const [n, setN] = useState(3)
  const total = m + n
  const bw = 1
  const gap = 0.15
  const nStart = m * (bw + gap) + 0.55

  const Block = ({ x, y, ink }) => (
    <>
      <Polygon
        points={[
          [x, y],
          [x + bw, y],
          [x + bw, y + 0.8],
          [x, y + 0.8]
        ]}
        color={ink}
        fillOpacity={0.3}
      />
      <Text x={x + bw / 2} y={y + 0.4} size={FONT_LABEL} color={C.fg}>
        a
      </Text>
    </>
  )

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Product law: joining m factor blocks with n factor blocks gives m plus n"
    >
      <Mafs viewBox={{ x: [-0.4, 13.6], y: [-0.4, 4.6] }} preserveAspectRatio={false} height={200}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {Array.from({ length: m }, (_, i) => (
          <Block key={`m${i}`} x={i * (bw + gap)} y={2.9} ink={C.fg} />
        ))}
        <LaTeX at={[(m * (bw + gap) - gap) / 2, 4.25]} tex={`a^{${m}}`} color={C.fg} />
        {Array.from({ length: n }, (_, i) => (
          <Block key={`n${i}`} x={nStart + i * (bw + gap)} y={2.9} ink={C.accent} />
        ))}
        <LaTeX at={[nStart + (n * (bw + gap) - gap) / 2, 4.25]} tex={`a^{${n}}`} color={C.accent} />
        {/* joined row: the same blocks, one run */}
        {Array.from({ length: total }, (_, i) => (
          <Block key={`t${i}`} x={i * (bw + gap)} y={0.6} ink={i < m ? C.fg : C.accent} />
        ))}
        <LaTeX at={[(total * (bw + gap) - gap) / 2, 0.05]} tex={`a^{${total}}`} color={C.fg} />
      </Mafs>
      <div
        aria-label="Product law readout: exponents add because factors are counted"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`a^{${m}} \\cdot a^{${n}} = a^{${m}+${n}} = a^{${total}}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          multiplying powers: count the factors
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="m"
          value={m}
          min={1}
          max={6}
          step={1}
          onChange={setM}
          format={v => String(v)}
        />
        <Slider
          label="n"
          value={n}
          min={1}
          max={5}
          step={1}
          onChange={setN}
          format={v => String(v)}
        />
      </div>
    </div>
  )
}

// PowerOfPowerVisualizer - ar.61
// (aᵐ)ⁿ: n rows of m factor blocks = m·n blocks. The grid is the proof.
export function PowerOfPowerVisualizer({ C }) {
  const [m, setM] = useState(2)
  const [n, setN] = useState(3)
  const total = m * n
  const bw = 0.9
  const gap = 0.12
  const rowGap = 1.35

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Power of a power: n rows of m factor blocks make m times n blocks"
    >
      <Mafs
        viewBox={{ x: [-2.6, 12.4], y: [-0.5, 4 * rowGap + 0.8] }}
        preserveAspectRatio={false}
        height={220}
      >
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {Array.from({ length: n }, (_, row) => {
          const y = (n - 1 - row) * rowGap + 0.35
          return (
            <Fragment key={row}>
              <LaTeX at={[-1.5, y + 0.4]} tex={`a^{${m}}`} color={C.accent} />
              {Array.from({ length: m }, (_, col) => {
                const x = col * (bw + gap)
                return (
                  <Fragment key={col}>
                    <Polygon
                      points={[
                        [x, y],
                        [x + bw, y],
                        [x + bw, y + 0.8],
                        [x, y + 0.8]
                      ]}
                      color={C.fg}
                      fillOpacity={0.3}
                    />
                    <Text x={x + bw / 2} y={y + 0.4} size={FONT_LABEL} color={C.fg}>
                      a
                    </Text>
                  </Fragment>
                )
              })}
            </Fragment>
          )
        })}
      </Mafs>
      <div
        aria-label="Power of a power readout: exponents multiply because the grid is rows times columns"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`(a^{${m}})^{${n}} = a^{${m} \\times ${n}} = a^{${total}}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          {n} rows of {m} blocks: {total} factors of a
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="m (inner)"
          value={m}
          min={1}
          max={4}
          step={1}
          onChange={setM}
          format={v => String(v)}
        />
        <Slider
          label="n (outer)"
          value={n}
          min={1}
          max={4}
          step={1}
          onChange={setN}
          format={v => String(v)}
        />
      </div>
    </div>
  )
}

// FactorBlockDiagram - ar.62
// bⁿ as n labeled factor blocks. Now live: base and exponent sliders - the
// old version was a frozen 2⁴ (mode-1 class). Value computed exactly.
export function FactorBlockDiagram({ C }) {
  const [base, setBase] = useState(2)
  const [exp, setExp] = useState(4)
  const value = base ** exp // ≤ 5⁵ = 3125, exact
  const bw = 1.6
  const gap = 0.4

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Factor blocks: the exponent counts how many copies of the base are multiplied"
    >
      <Mafs viewBox={{ x: [-0.5, 10.5], y: [-0.4, 3.4] }} preserveAspectRatio={false} height={170}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {Array.from({ length: exp }, (_, i) => {
          const x = i * (bw + gap)
          return (
            <Fragment key={i}>
              <Polygon
                points={[
                  [x, 1],
                  [x + bw, 1],
                  [x + bw, 2],
                  [x, 2]
                ]}
                color={C.fg}
                fillOpacity={0.3}
              />
              <Text x={x + bw / 2} y={1.5} size={FONT_LABEL} color={C.fg}>
                {String(base)}
              </Text>
              {i < exp - 1 && (
                <Text x={x + bw + gap / 2} y={1.5} size={FONT_LABEL} color={C.dim}>
                  ×
                </Text>
              )}
            </Fragment>
          )
        })}
        <LaTeX at={[(exp * (bw + gap) - gap) / 2, 2.7]} tex={`${base}^{${exp}}`} color={C.accent} />
        <Text x={(exp * (bw + gap) - gap) / 2} y={0.45} size={FONT_LABEL} color={C.dim}>
          {`${exp} factor${exp > 1 ? 's' : ''}`}
        </Text>
      </Mafs>
      <div
        aria-label="Factor block readout: the exact value of base to the exponent"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`${base}^{${exp}} = ${Array.from({ length: exp }, () => base).join(' \\times ')} = ${value}`}
          />
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="Base"
          value={base}
          min={2}
          max={5}
          step={1}
          onChange={setBase}
          format={v => String(v)}
        />
        <Slider
          label="Exponent"
          value={exp}
          min={1}
          max={5}
          step={1}
          onChange={setExp}
          format={v => String(v)}
        />
      </div>
    </div>
  )
}

// QuotientLawCancellation - ar.63
// aᵐ / aⁿ: n pairs cancel across the fraction bar, m − n survive. Now live
// (was frozen at 5/3), and the DENOMINATOR blocks strike out too - the old
// version struck only the numerator, leaving the cancellation half-told.
export function QuotientLawCancellation({ C }) {
  const [m, setM] = useState(5)
  const [nRaw, setNRaw] = useState(3)
  const n = Math.min(nRaw, m - 1) // keep a positive result: n < m
  const result = m - n
  const bw = 1.3
  const gap = 0.28
  const yTop = 2.6
  const yBot = 0.6
  const yBar = 2.05

  const Strike = ({ x, y }) => (
    <Line.Segment
      point1={[x - 0.12, y - 0.28]}
      point2={[x + bw + 0.12, y + 1.08]}
      color={C.dim}
      weight={1.5}
    />
  )

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Quotient law: matching factor pairs cancel across the fraction bar"
    >
      <Mafs viewBox={{ x: [-0.5, 12], y: [-0.2, 4.4] }} preserveAspectRatio={false} height={210}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {Array.from({ length: m }, (_, i) => {
          const x = i * (bw + gap)
          const cancelled = i < n
          return (
            <Fragment key={`t${i}`}>
              <Polygon
                points={[
                  [x, yTop],
                  [x + bw, yTop],
                  [x + bw, yTop + 0.8],
                  [x, yTop + 0.8]
                ]}
                color={cancelled ? C.dim : C.accent}
                fillOpacity={cancelled ? 0.12 : 0.35}
              />
              <Text
                x={x + bw / 2}
                y={yTop + 0.4}
                size={FONT_LABEL}
                color={cancelled ? C.dim : C.fg}
              >
                a
              </Text>
              {cancelled && <Strike x={x} y={yTop} />}
            </Fragment>
          )
        })}
        <Line.Segment
          point1={[0, yBar]}
          point2={[m * (bw + gap) - gap, yBar]}
          color={C.fg}
          weight={1.5}
        />
        {Array.from({ length: n }, (_, i) => {
          const x = i * (bw + gap)
          return (
            <Fragment key={`b${i}`}>
              <Polygon
                points={[
                  [x, yBot],
                  [x + bw, yBot],
                  [x + bw, yBot + 0.8],
                  [x, yBot + 0.8]
                ]}
                color={C.dim}
                fillOpacity={0.12}
              />
              <Text x={x + bw / 2} y={yBot + 0.4} size={FONT_LABEL} color={C.dim}>
                a
              </Text>
              <Strike x={x} y={yBot} />
            </Fragment>
          )
        })}
      </Mafs>
      <div
        aria-label="Quotient law readout: exponents subtract because pairs cancel"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\dfrac{a^{${m}}}{a^{${n}}} = a^{${m}-${n}} = a^{${result}}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          {n} pair{n > 1 ? 's' : ''} cancel, {result} factor{result > 1 ? 's' : ''} survive
          {result === 1 ? 's' : ''}
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <Slider
          label="m (top)"
          value={m}
          min={2}
          max={6}
          step={1}
          onChange={setM}
          format={v => String(v)}
        />
        <Slider
          label="n (bottom)"
          value={n}
          min={1}
          max={5}
          step={1}
          onChange={setNRaw}
          format={v => String(v)}
        />
      </div>
    </div>
  )
}

// StandardFormScale - ar.64
// Declared log₁₀ metre scale from 10⁻⁴ to 10¹². Reference objects sit at the
// log₁₀ of their TRUE sizes (hair 10⁻⁴ m; Everest 8.8×10³ → 3.94; Earth
// diameter 1.27×10⁷ → 7.10; Moon distance 3.84×10⁸ → 8.58; Earth–Sun
// 1.496×10¹¹ → 11.18) - the old version rounded them onto decade ticks
// (Moon at 10⁹ is 2.6× too far) and packed 16 caret labels at ~34 px pitch.
export function StandardFormScale({ C }) {
  const expMin = -4
  const expMax = 12
  const X = 14 / (expMax - expMin)
  const mx = e => (e - expMin) * X

  // true log₁₀ positions, hand-computed in the header
  const marks = [
    { e: -4, desc: 'hair width' },
    { e: 0.26, desc: 'person (1.8 m)' },
    { e: 3.94, desc: 'Everest' },
    { e: 7.1, desc: 'Earth diameter' },
    { e: 8.58, desc: 'Moon distance' },
    { e: 11.18, desc: 'Earth–Sun' }
  ]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Standard form scale: reference objects at their true positions on a log metre line"
    >
      <Mafs viewBox={{ x: [-0.6, 14.8], y: [-3.1, 3.4] }} preserveAspectRatio={false} height={240}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[0, 0]} point2={[14.2, 0]} color={C.dim} weight={1} />
        {/* decade ticks; labels every 4 decades ⇒ ~130 px pitch */}
        {Array.from({ length: expMax - expMin + 1 }, (_, i) => {
          const e = expMin + i
          return (
            <Fragment key={e}>
              <Line.Segment
                point1={[mx(e), -0.16]}
                point2={[mx(e), 0.16]}
                color={C.dim}
                weight={1}
              />
              {e % 4 === 0 && <LaTeX at={[mx(e), -0.75]} tex={`10^{${e}}`} color={C.dim} />}
            </Fragment>
          )
        })}
        <Text x={14.5} y={-0.75} size={FONT_LABEL} attach="e" color={C.dim}>
          metres
        </Text>
        {marks.map((pt, i) => {
          const above = i % 2 === 0
          return (
            <Fragment key={pt.desc}>
              <Point x={mx(pt.e)} y={0} color={C.accent} />
              <Line.Segment
                point1={[mx(pt.e), above ? 0.2 : -0.2]}
                point2={[mx(pt.e), above ? 1.35 : -1.35]}
                color={C.accent}
                weight={1}
              />
              <Text x={mx(pt.e)} y={above ? 1.75 : -1.75} size={FONT_LABEL} color={C.fg}>
                {pt.desc}
              </Text>
            </Fragment>
          )
        })}
      </Mafs>
      <div
        aria-label="Standard form readout: sample true sizes in scientific notation"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'\\text{Everest} \\approx 8.8 \\times 10^{3}\\ \\text{m}'} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'\\text{Moon} \\approx 3.84 \\times 10^{8}\\ \\text{m}'} />
        </span>
        <span>
          <KatexInline tex={'\\text{Earth–Sun} \\approx 1.496 \\times 10^{11}\\ \\text{m}'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          equal steps multiply by ten
        </span>
      </div>
    </div>
  )
}
