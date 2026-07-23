// OPERATIONS ON SIGNED RATIONALS
// Visualizations for vector addition, signed arithmetic, sign rules,
// subtraction as add-opposite, and the distributive law.
// Each viz takes a `C` color object from useVizColors().
//
// REFINE pass 2026-07-02 (file rewritten):
// - Five number-line viz recomputed their frame from the live values every
//   drag (auto-scaling axes - equal arrows changed drawn length); each now
//   has a FIXED frame sized to its slider domain.
// - NegativeTimesNegativeProof, InvertAndMultiplyViz and SignRulesQuotientViz
//   were Mafs canvases used as text layouts (forbidden mode 4) - rebuilt as
//   DOM derivation chains.
// - DistributiveLawVizOSR normalized its scale to max(|xy|,|xz|,|lhs|) per
//   drag (mode 2); fixed divisor 40 (= max |xy| on the domain) now rules.
// - toFixed(4) decimals replaced with exact reduced fractions (gcd) plus ≈
//   only when genuinely inexact; size-24 → 12; equations → readout rows.
// Engine (WebSearch 2026-07-02, signed number-line / sign-rule classes):
// only banned dashboard stacks surfaced; Mafs (A) + DOM stay. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.
import React, { useState } from 'react'
import { Mafs, Coordinates, Point, Text, LaTeX, Vector } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import {
  FONT_BODY,
  FONT_CONTROL,
  FONT_FAMILY,
  FONT_LABEL,
  FONT_SMALL,
  FONT_VALUE_LG,
  LS_CONTROL,
  LS_MEDIUM,
  LS_TIGHT,
  LS_UPPER
} from '../../../scale-tokens'

// Helpers

function buttonStyle(active) {
  return {
    background: 'transparent',
    border: `1px solid ${active ? 'var(--border-default)' : 'var(--border-subtle)'}`,
    color: 'var(--text-primary)',
    padding: '5px 12px',
    cursor: 'pointer',
    fontFamily: FONT_FAMILY,
    fontSize: FONT_LABEL,
    letterSpacing: LS_UPPER,
    textTransform: 'uppercase',
    opacity: active ? 1 : 0.5
  }
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

const gcdInt = (a, b) => {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) {
    const t = a % b
    a = b
    b = t
  }
  return a
}

// zero-suppressing vector: Mafs draws a degenerate arrowhead for zero length
const Jump = ({ from, to, y, color }) =>
  from !== to ? <Vector tail={[from, y]} tip={[to, y]} color={color} /> : null

// (1) VectorAddSameSign - fixed frame [−13.5, 13.5] (|x|,|y| ≤ 6 ⇒ |sum| ≤ 12)
export function VectorAddSameSign({ C }) {
  const [absX, setAbsX] = useState(3)
  const [absY, setAbsY] = useState(2)
  const [sign, setSign] = useState('positive')

  const x = sign === 'positive' ? absX : -absX
  const y = sign === 'positive' ? absY : -absY
  const sum = x + y

  return (
    <>
      <Mafs viewBox={{ x: [-13.5, 13.5], y: [-1.6, 3.2] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (n % 4 === 0 ? `${n}` : '') }}
          yAxis={{ labels: false, lines: false }}
        />
        <Jump from={0} to={x} y={1.6} color={C.fg} />
        <LaTeX at={[x / 2, 2.4]} tex={'x'} color={C.fg} />
        <Jump from={x} to={sum} y={0.5} color={C.dim} />
        <LaTeX at={[(x + sum) / 2, 1.25]} tex={'y'} color={C.dim} />
        <Point x={sum} y={0} color={C.fg} />
        <Point x={0} y={0} color={C.faint} />
      </Mafs>
      <div aria-label="Same-sign addition readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={`${x} + (${y}) = ${sum}`} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          same signs: magnitudes add, sign stays
        </span>
      </div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 8, marginTop: 8 }}>
        {['positive', 'negative'].map(s => (
          <button key={s} onClick={() => setSign(s)} style={buttonStyle(sign === s)}>
            {s}
          </button>
        ))}
      </div>
      <Slider
        label="|x|"
        value={absX}
        min={1}
        max={6}
        step={1}
        onChange={v => setAbsX(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="|y|"
        value={absY}
        min={1}
        max={6}
        step={1}
        onChange={v => setAbsY(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </>
  )
}

// (2) VectorAddOppositeSign - fixed frame (x ≤ 8, sum ∈ [−7, 7])
export function VectorAddOppositeSign({ C }) {
  const [xVal, setXVal] = useState(5)
  const [yVal, setYVal] = useState(3)
  const sum = xVal - yVal

  return (
    <>
      <Mafs viewBox={{ x: [-9, 9.5], y: [-1.6, 3.4] }} height={210} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (n % 2 === 0 ? `${n}` : '') }}
          yAxis={{ labels: false, lines: false }}
        />
        <Jump from={0} to={xVal} y={1.8} color={C.fg} />
        <LaTeX at={[xVal / 2, 2.6]} tex={'x'} color={C.fg} />
        <Jump from={xVal} to={sum} y={0.5} color={C.dim} />
        <LaTeX at={[(xVal + sum) / 2, 1.25]} tex={'-y'} color={C.dim} />
        <Point x={sum} y={0} color={C.fg} />
        <Point x={0} y={0} color={C.faint} />
      </Mafs>
      <div aria-label="Opposite-sign addition readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline
            tex={
              sum >= 0
                ? `${xVal} + (${-yVal}) = ${xVal} - ${yVal} = ${sum}`
                : `${xVal} + (${-yVal}) = -(${yVal} - ${xVal}) = ${sum}`
            }
          />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          opposite signs: magnitudes subtract, larger side wins
        </span>
      </div>
      <Slider
        label="x (positive)"
        value={xVal}
        min={1}
        max={8}
        step={1}
        onChange={v => setXVal(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="y (positive, subtracted)"
        value={yVal}
        min={1}
        max={8}
        step={1}
        onChange={v => setYVal(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </>
  )
}

// (3) SumOfOppositesViz - fixed symmetric frame (x ≤ 7)
export function SumOfOppositesViz({ C }) {
  const [x, setX] = useState(4)

  return (
    <>
      <Mafs viewBox={{ x: [-8.5, 8.5], y: [-1.4, 3.2] }} height={190} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (n % 2 === 0 ? `${n}` : '') }}
          yAxis={{ labels: false, lines: false }}
        />
        <Jump from={0} to={x} y={1.6} color={C.fg} />
        <LaTeX at={[x / 2, 2.4]} tex={'x'} color={C.fg} />
        <Jump from={0} to={-x} y={0.5} color={C.dim} />
        <LaTeX at={[-x / 2, 1.25]} tex={'-x'} color={C.dim} />
        <Point x={0} y={0} color={C.fg} />
      </Mafs>
      <div aria-label="Sum of opposites readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={`${x} + (${-x}) = 0`} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          equal pulls in opposite directions cancel
        </span>
      </div>
      <Slider
        label="x"
        value={x}
        min={1}
        max={7}
        step={1}
        onChange={v => setX(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </>
  )
}

// (4) SubtractionAsAddOpposite - fixed frame (x ≤ 10, result ∈ [−8, 9])
export function SubtractionAsAddOpposite({ C }) {
  const [x, setX] = useState(7)
  const [y, setY] = useState(3)
  const result = x - y

  return (
    <>
      <Mafs viewBox={{ x: [-9.5, 11.5], y: [-1.6, 3.6] }} height={210} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (n % 2 === 0 ? `${n}` : '') }}
          yAxis={{ labels: false, lines: false }}
        />
        <Jump from={0} to={x} y={1.8} color={C.fg} />
        <LaTeX at={[x / 2, 2.6]} tex={'x'} color={C.fg} />
        <Jump from={x} to={result} y={0.5} color={C.dim} />
        <LaTeX at={[(x + result) / 2, 1.25]} tex={'-y'} color={C.dim} />
        <Point x={result} y={0} color={C.fg} />
        <Point x={0} y={0} color={C.faint} />
      </Mafs>
      <div aria-label="Subtraction as add-opposite readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={`${x} - ${y} = ${x} + (${-y}) = ${result}`} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          subtracting is adding the opposite
        </span>
      </div>
      <Slider
        label="x"
        value={x}
        min={2}
        max={10}
        step={1}
        onChange={v => setX(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="y"
        value={y}
        min={1}
        max={10}
        step={1}
        onChange={v => setY(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </>
  )
}

// (5) SignRuleGrid - DOM table + toggles (right engine). Unchanged logic.
export function SignRuleGrid({ C }) {
  const [sx, setSx] = useState(1)
  const [sy, setSy] = useState(1)
  const product = sx * sy
  const label = s => (s === 1 ? '+' : '−')

  const rows = [
    { xs: 1, ys: 1 },
    { xs: 1, ys: -1 },
    { xs: -1, ys: 1 },
    { xs: -1, ys: -1 }
  ]
  const numCell = {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_VALUE_LG,
    padding: '8px 16px',
    textAlign: 'center',
    border: '1px solid var(--border-subtle)',
    color: C.fg
  }

  return (
    <div style={{ fontFamily: FONT_FAMILY }}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
        {[
          { title: 'Sign of x', val: sx, set: setSx },
          { title: 'Sign of y', val: sy, set: setSy }
        ].map(({ title, val, set }) => (
          <div key={title}>
            <div
              style={{
                fontSize: FONT_LABEL,
                letterSpacing: LS_UPPER,
                textTransform: 'uppercase',
                opacity: 0.6,
                marginBottom: 6
              }}
            >
              {title}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[1, -1].map(s => (
                <button key={s} onClick={() => set(s)} style={buttonStyle(val === s)}>
                  {label(s)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <table style={{ borderCollapse: 'collapse', marginBottom: 16 }}>
        <thead>
          <tr>
            {['sign of x', 'sign of y', '×', 'sign of xy'].map(h => (
              <th
                key={h}
                style={{
                  fontFamily: FONT_FAMILY,
                  fontSize: FONT_SMALL,
                  letterSpacing: LS_MEDIUM,
                  textTransform: 'uppercase',
                  padding: '6px 8px',
                  textAlign: 'center',
                  borderBottom: '1px solid var(--border-subtle)',
                  color: C.dim
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ xs, ys }, i) => {
            const active = xs === sx && ys === sy
            return (
              <tr
                key={i}
                style={{
                  opacity: active ? 1 : 0.3,
                  background: active ? 'var(--border-subtle)' : 'transparent'
                }}
              >
                <td style={numCell}>{label(xs)}</td>
                <td style={numCell}>{label(ys)}</td>
                <td style={{ ...numCell, fontSize: FONT_BODY, border: 'none' }}>{'×'}</td>
                <td style={numCell}>{label(xs * ys)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div style={{ fontSize: FONT_LABEL, letterSpacing: LS_TIGHT, opacity: 0.85 }}>
        {`(${label(sx)})(${label(sy)}) = ${label(product)}: `}
        {product === 1 ? 'same signs give positive' : 'opposite signs give negative'}
      </div>
    </div>
  )
}

// (6) NegativeTimesNegativeProof - REBUILT as DOM (was Mafs text panel).
export function NegativeTimesNegativeProof({ C }) {
  const [step, setStep] = useState(0)
  const steps = [
    { note: 'let x be the product in question', tex: 'x = (-1)(-1)' },
    { note: 'add (−1) to both sides', tex: '(-1) + x = (-1) + (-1)(-1)' },
    { note: 'write (−1) as (−1)·1, then factor', tex: '(-1) + x = (-1)\\,(1 + (-1))' },
    { note: '1 + (−1) = 0, and anything times 0 is 0', tex: '(-1) + x = (-1)(0) = 0' },
    { note: 'x is what cancels (−1), that is +1', tex: 'x = 1 \\;\\Rightarrow\\; (-1)(-1) = 1' }
  ]

  return (
    <div style={{ fontFamily: FONT_FAMILY }}>
      <div
        aria-label="Proof that negative one times negative one is one"
        style={{ display: 'flex', flexDirection: 'column', gap: 10, minHeight: 170 }}
      >
        {steps.slice(0, step + 1).map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
            <span style={{ fontSize: FONT_LABEL, color: C.dim, minWidth: 18 }}>{i + 1}.</span>
            <span
              style={{ fontSize: FONT_CONTROL, color: i === step ? C.fg : C.dim, minWidth: 230 }}
            >
              <KatexInline tex={s.tex} />
            </span>
            <span
              style={{ fontSize: FONT_LABEL, color: C.dim, letterSpacing: LS_TIGHT, opacity: 0.8 }}
            >
              {s.note}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
        {steps.map((_, i) => (
          <button key={i} onClick={() => setStep(i)} style={buttonStyle(step === i)}>
            {`step ${i + 1}`}
          </button>
        ))}
      </div>
    </div>
  )
}

// (7) DistributiveLawVizOSR - fixed scale (was normalized to the live max)
export function DistributiveLawVizOSR({ C }) {
  const [x, setX] = useState(3)
  const [y, setY] = useState(4)
  const [z, setZ] = useState(2)

  const lhs = x * (y - z)
  const rhs = x * y - x * z
  // fixed: max |xy| on the domain is 5·8 = 40 → scale to half-width 5
  const scale = v => (v / 40) * 5

  return (
    <>
      <Mafs viewBox={{ x: [-6, 6], y: [-1.6, 3.4] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        {/* value axis with declared ticks every 10 */}
        {[-40, -20, 0, 20, 40].map(v => (
          <React.Fragment key={v}>
            <Text x={scale(v)} y={-0.75} size={FONT_LABEL} color={C.dim}>
              {String(v)}
            </Text>
          </React.Fragment>
        ))}
        <Jump from={-5} to={5} y={0} color={C.dim} />
        <Jump from={0} to={scale(x * y)} y={1.8} color={C.fg} />
        <LaTeX at={[scale(x * y) / 2, 2.55]} tex={'xy'} color={C.fg} />
        <Jump from={scale(x * y)} to={scale(x * y) - scale(x * z)} y={0.6} color={C.dim} />
        <LaTeX at={[scale(x * y) - scale(x * z) / 2, 1.3]} tex={'-xz'} color={C.dim} />
        <Point x={scale(lhs)} y={0} color={C.fg} />
      </Mafs>
      <div
        aria-label="Distributive law readout: both sides computed"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`x(y-z) = ${x}(${y} - ${z}) = ${lhs}`} />
        </span>
        <span style={{ opacity: 0.55 }}>
          <KatexInline tex={`xy - xz = ${x * y} - ${x * z} = ${rhs}`} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          both routes land on the same point
        </span>
      </div>
      <Slider
        label="x"
        value={x}
        min={1}
        max={5}
        step={1}
        onChange={v => setX(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="y"
        value={y}
        min={2}
        max={8}
        step={1}
        onChange={v => setY(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="z"
        value={z}
        min={1}
        max={7}
        step={1}
        onChange={v => setZ(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </>
  )
}

// (8) AdditionFormulasViz - three fixed exemplar cases (frames constant per case)
export function AdditionFormulasViz({ C }) {
  const [caseIdx, setCaseIdx] = useState(0)
  const cases = [
    { label: 'both negative: (−3) + (−2)', s: 3, t: 2, mode: 'both-neg' },
    { label: '5 + (−3): positive wins', s: 5, t: 3, mode: 'pos-neg-large' },
    { label: '2 + (−5): negative wins', s: 2, t: 5, mode: 'pos-neg-small' }
  ]
  const { s, t, mode } = cases[caseIdx]

  let x, sum, sumTex
  if (mode === 'both-neg') {
    x = -s
    sum = -(s + t)
    sumTex = `(-${s}) + (-${t}) = -(${s}+${t}) = ${sum}`
  } else if (mode === 'pos-neg-large') {
    x = s
    sum = s - t
    sumTex = `${s} + (-${t}) = ${s} - ${t} = ${sum}`
  } else {
    x = s
    sum = -(t - s)
    sumTex = `${s} + (-${t}) = -(${t} - ${s}) = ${sum}`
  }

  return (
    <>
      <Mafs viewBox={{ x: [-7, 7], y: [-1.6, 3.4] }} height={200} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (n % 2 === 0 ? `${n}` : '') }}
          yAxis={{ labels: false, lines: false }}
        />
        <Jump from={0} to={x} y={1.8} color={C.fg} />
        <Jump from={x} to={sum} y={0.5} color={C.dim} />
        <Point x={sum} y={0} color={C.fg} />
        <Point x={0} y={0} color={C.faint} />
      </Mafs>
      <div
        aria-label="Addition formula readout for the selected case"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={sumTex} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>{cases[caseIdx].label}</span>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
        {cases.map((c, i) => (
          <button key={i} onClick={() => setCaseIdx(i)} style={buttonStyle(caseIdx === i)}>
            {`case ${i + 1}`}
          </button>
        ))}
      </div>
    </>
  )
}

// (9) InvertAndMultiplyViz - REBUILT as DOM (was Mafs text panel);
// result as an EXACT reduced fraction, ≈ decimal only when inexact.
export function InvertAndMultiplyViz({ C }) {
  const [X, setX] = useState(3)
  const [Y, setY] = useState(5)
  const [Z, setZ] = useState(2)
  const [W, setW] = useState(7)

  const num = X * W
  const den = Y * Z
  const g = gcdInt(num, den)
  const rn = num / g
  const rd = den / g
  const exact = rd === 1

  return (
    <div style={{ fontFamily: FONT_FAMILY }}>
      <div
        aria-label="Invert and multiply: the division rewritten and evaluated exactly"
        style={{ display: 'flex', flexDirection: 'column', gap: 12, color: C.fg }}
      >
        <div style={{ fontSize: FONT_BODY }}>
          <KatexInline
            tex={`\\frac{${X}}{${Y}} \\div \\frac{${Z}}{${W}} = \\frac{${X}}{${Y}} \\times \\frac{${W}}{${Z}}`}
          />
          <span
            style={{ fontSize: FONT_LABEL, color: C.dim, marginLeft: 14, letterSpacing: LS_TIGHT }}
          >
            invert the divisor
          </span>
        </div>
        <div style={{ fontSize: FONT_BODY }}>
          <KatexInline
            tex={`= \\frac{${X} \\times ${W}}{${Y} \\times ${Z}} = \\frac{${num}}{${den}}${
              g > 1 ? ` = \\frac{${rn}}{${rd}}` : ''
            }${exact ? ` = ${rn}` : ''}`}
          />
          {!exact && (
            <span style={{ fontSize: FONT_LABEL, color: C.dim, marginLeft: 14 }}>
              <KatexInline tex={`\\approx ${(num / den).toFixed(4)}`} />
            </span>
          )}
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <Slider
          label="X (numerator 1)"
          value={X}
          min={1}
          max={9}
          step={1}
          onChange={v => setX(Math.round(v))}
          format={v => String(Math.round(v))}
        />
        <Slider
          label="Y (denominator 1)"
          value={Y}
          min={1}
          max={9}
          step={1}
          onChange={v => setY(Math.round(v))}
          format={v => String(Math.round(v))}
        />
        <Slider
          label="Z (numerator 2)"
          value={Z}
          min={1}
          max={9}
          step={1}
          onChange={v => setZ(Math.round(v))}
          format={v => String(Math.round(v))}
        />
        <Slider
          label="W (denominator 2)"
          value={W}
          min={1}
          max={9}
          step={1}
          onChange={v => setW(Math.round(v))}
          format={v => String(Math.round(v))}
        />
      </div>
    </div>
  )
}

// (11) FoundationsMirrorViz - fixed symmetric frame (|x| ≤ 7)
export function FoundationsMirrorViz({ C }) {
  const [absX, setAbsX] = useState(4)

  return (
    <>
      <Mafs viewBox={{ x: [-9, 9], y: [-1.4, 3.2] }} height={190} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (n % 2 === 0 ? `${n}` : '') }}
          yAxis={{ labels: false, lines: false }}
        />
        <Jump from={0} to={absX} y={1.6} color={C.fg} />
        <LaTeX at={[absX / 2, 2.4]} tex={'x'} color={C.fg} />
        <Jump from={0} to={-absX} y={0.5} color={C.dim} />
        <LaTeX at={[-absX / 2, 1.25]} tex={'x^* = -x'} color={C.dim} />
        <Point x={absX} y={0} color={C.fg} />
        <Point x={-absX} y={0} color={C.dim} />
        <Point x={0} y={0} color={C.faint} />
      </Mafs>
      <div
        aria-label="Mirror readout: the point, its opposite, and the shared distance"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`x = ${absX},\\;\\; x^* = ${-absX}`} />
        </span>
        <span style={{ opacity: 0.55 }}>
          <KatexInline tex={`|x| = |x^*| = ${absX}`} />
        </span>
      </div>
      <Slider
        label="|x|"
        value={absX}
        min={1}
        max={7}
        step={1}
        onChange={v => setAbsX(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </>
  )
}

// (12) ParenthesisRemovalViz - fixed exemplar, fixed frame
export function ParenthesisRemovalViz({ C }) {
  const [mode, setMode] = useState('with')
  const result = mode === 'with' ? 3 - (4 + 5) : 3 - 4 + 5

  return (
    <>
      <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
        {[
          { key: 'with', label: '3 − (4 + 5)' },
          { key: 'without', label: '3 − 4 + 5' }
        ].map(({ key, label }) => (
          <button key={key} onClick={() => setMode(key)} style={buttonStyle(mode === key)}>
            {label}
          </button>
        ))}
      </div>
      <Mafs viewBox={{ x: [-7.5, 6], y: [-1.6, 3.6] }} height={210} preserveAspectRatio={false}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (n % 2 === 0 ? `${n}` : '') }}
          yAxis={{ labels: false, lines: false }}
        />
        <Jump from={0} to={3} y={1.8} color={C.fg} />
        <LaTeX at={[1.5, 2.6]} tex={'3'} color={C.fg} />
        {mode === 'with' ? (
          <>
            <Jump from={3} to={result} y={0.5} color={C.dim} />
            <LaTeX at={[(3 + result) / 2, 1.25]} tex={'-(4+5)'} color={C.dim} />
          </>
        ) : (
          <>
            <Jump from={3} to={-1} y={0.5} color={C.dim} />
            <LaTeX at={[1, 1.25]} tex={'-4'} color={C.dim} />
            <Jump from={-1} to={4} y={0.9} color={C.accent} />
            <LaTeX at={[1.5, 1.62]} tex={'+5'} color={C.accent} />
          </>
        )}
        <Point x={result} y={0} color={C.fg} />
        <Point x={0} y={0} color={C.faint} />
      </Mafs>
      <div
        aria-label="Parenthesis removal readout: the two different results"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={mode === 'with' ? '3 - (4+5) = -6' : '3 - 4 + 5 = 4'} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          the minus distributes over BOTH terms inside
        </span>
      </div>
    </>
  )
}

// (10) SignRulesQuotientViz - REBUILT as DOM (was Mafs text panel);
// quotient as an exact signed fraction, ≈ decimal alongside.
export function SignRulesQuotientViz({ C }) {
  const [signA, setSignA] = useState(1)
  const [signB, setSignB] = useState(1)
  const a = 3
  const b = 7
  const positive = signA * signB === 1
  const fmt = s => (s === 1 ? '+' : '−')

  return (
    <div style={{ fontFamily: FONT_FAMILY }}>
      <div style={{ display: 'flex', gap: 20, marginBottom: 14, flexWrap: 'wrap' }}>
        {[
          { title: 'Sign of numerator', val: signA, set: setSignA },
          { title: 'Sign of denominator', val: signB, set: setSignB }
        ].map(({ title, val, set }) => (
          <div key={title}>
            <div
              style={{
                fontSize: FONT_LABEL,
                letterSpacing: LS_UPPER,
                textTransform: 'uppercase',
                opacity: 0.6,
                marginBottom: 6
              }}
            >
              {title}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[1, -1].map(s => (
                <button key={s} onClick={() => set(s)} style={buttonStyle(val === s)}>
                  {fmt(s)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        aria-label="Quotient sign readout: exact fraction and its sign rule"
        style={{ display: 'flex', flexDirection: 'column', gap: 10, color: C.fg }}
      >
        <div style={{ fontSize: FONT_BODY }}>
          <KatexInline
            tex={`\\frac{${signA === -1 ? '-' : ''}${a}}{${signB === -1 ? '-' : ''}${b}} = ${
              positive ? '' : '-'
            }\\frac{${a}}{${b}}`}
          />
          <span style={{ fontSize: FONT_LABEL, color: C.dim, marginLeft: 14 }}>
            <KatexInline tex={`\\approx ${((signA * a) / (signB * b)).toFixed(4)}`} />
          </span>
        </div>
        <div
          style={{
            fontSize: FONT_LABEL,
            color: C.dim,
            letterSpacing: LS_TIGHT,
            textTransform: 'uppercase'
          }}
        >
          {positive ? 'same signs: positive quotient' : 'opposite signs: negative quotient'}
        </div>
      </div>
    </div>
  )
}
