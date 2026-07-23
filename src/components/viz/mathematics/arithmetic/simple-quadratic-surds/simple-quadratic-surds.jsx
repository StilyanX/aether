// SIMPLE QUADRATIC SURDS
// Viz for square roots, the three-case count of x² + q = 0, the surd product
// rule, √(a²) = |a|, and rationalising a denominator.
//
// REFINE pass 2026-07-03 (simple-quadratic-surds, ar.162–166):
// - Plain-text/unicode math in the <p> captions ("x² = 4.0 has solutions
//   x = ±2.000", "√(4×9) = √36 ≈ 6.0000", "a = -3.0 < 0: √(a²) = −a …") moved
//   into KatexInline readout rows in LaTeX (rule 11). On-canvas Mafs <LaTeX>
//   labels kept. Mafs stroke weights tokenized.
// - ThreeCaseDiagram + RationalisingStepDiagram were mode-4 (a case table / a
//   derivation chain drawn as SVG <text> with unicode math) - REBUILT as DOM
//   with KatexInline (same class + fix as ar.20 ThreeReasonsPanel and ar.71
//   DistributiveProofWalk). Literal fontSize/stroke removed.
// - SqrtDefinition/ProductRule/AbsoluteValueRoot are genuinely interactive
//   (sliders). Product rule √(ab)=√a·√b holds identically - the ✓ always shows
//   (that IS the lesson). Engine: Mafs (A) plots + DOM for the text panels.
import { useState } from 'react'
import { Mafs, Coordinates, Plot, Point, LaTeX, Line } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import {
  FONT_FAMILY,
  FONT_LABEL,
  FONT_SMALL,
  LS_CONTROL,
  LS_LABEL,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from '../../../scale-tokens'

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

// SQS.1 Square Root Definition
export function SqrtDefinitionPlot({ C }) {
  const [c, setC] = useState(4)
  const sqrtC = Math.sqrt(Math.max(c, 0))

  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-5, 5], y: [-3, 26] }} preserveAspectRatio={false} height={240}>
        <Coordinates.Cartesian
          xAxis={{
            lines: 1,
            labels: x => (Number.isInteger(x) && Math.abs(x) <= 4 ? String(x) : '')
          }}
          yAxis={{ lines: 5, labels: y => (y % 5 === 0 && y > 0 && y <= 25 ? String(y) : '') }}
        />
        <Plot.OfX y={x => x * x} color={C.dim} weight={STROKE_PRIMARY} />
        {c >= 0 && (
          <>
            <Line.Segment
              point1={[-5, c]}
              point2={[5, c]}
              color={C.accent}
              weight={STROKE_SECONDARY}
              style="dashed"
            />
            <Point x={sqrtC} y={c} color={C.fg} />
            <Point x={-sqrtC} y={c} color={C.fg} />
            <LaTeX at={[sqrtC + 0.5, c + 1.6]} tex={`\\sqrt{${c.toFixed(1)}}`} color={C.fg} />
            <LaTeX at={[-sqrtC - 1, c + 1.6]} tex={`-\\sqrt{${c.toFixed(1)}}`} color={C.dim} />
          </>
        )}
        <LaTeX at={[3.4, 22]} tex={`y = x^2`} color={C.dim} />
      </Mafs>
      <Slider
        label="c"
        value={c}
        min={0}
        max={20}
        step={0.5}
        onChange={setC}
        format={v => v.toFixed(1)}
      />
      <div
        aria-label="Square root definition: the solutions of x squared equals c"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`x^2 = c`} />
        </span>
        {c === 0 ? (
          <span style={{ opacity: OPACITY.dim }}>
            <KatexInline tex={`c = 0 \\Rightarrow x = 0 \\text{ (one solution)}`} />
          </span>
        ) : (
          <span style={{ opacity: OPACITY.dim }}>
            <KatexInline
              tex={`x = \\pm\\sqrt{${c.toFixed(1)}} \\approx \\pm ${sqrtC.toFixed(3)}`}
            />
          </span>
        )}
      </div>
    </div>
  )
}

// SQS.2 Three-Case count of x² + q = 0 (DOM - rebuilt from an SVG text panel)
export function ThreeCaseDiagram({ C }) {
  const cases = [
    {
      n: '01',
      cond: 'q < 0,\\ \\text{i.e. } c > 0',
      result: 'x = \\pm\\sqrt{c}',
      sub: 'two solutions',
      bright: true
    },
    {
      n: '02',
      cond: 'q = 0,\\ \\text{i.e. } c = 0',
      result: 'x = 0',
      sub: 'one solution',
      bright: true
    },
    {
      n: '03',
      cond: 'q > 0,\\ \\text{i.e. } c < 0',
      result: '\\text{no real solution}',
      sub: '',
      bright: false
    }
  ]
  const card = {
    flex: '1 1 0',
    minWidth: 0,
    border: `1px solid ${C.dim}`,
    borderRadius: 0,
    padding: '16px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    textAlign: 'center'
  }
  return (
    <div style={{ width: '100%', fontFamily: FONT_FAMILY }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'stretch' }}>
        {cases.map(c => (
          <div key={c.n} style={{ ...card, opacity: c.bright ? 1 : OPACITY.dim }}>
            <div style={{ fontSize: FONT_SMALL, color: C.dim, letterSpacing: LS_LABEL }}>{c.n}</div>
            <div style={{ color: C.dim }}>
              <KatexInline tex={c.cond} />
            </div>
            <div style={{ color: c.bright ? C.fg : C.dim, fontSize: FONT_LABEL }}>
              <KatexInline tex={c.result} />
            </div>
            {c.sub && (
              <div
                style={{
                  fontSize: FONT_SMALL,
                  color: C.dim,
                  letterSpacing: LS_LABEL,
                  textTransform: 'uppercase'
                }}
              >
                {c.sub}
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        aria-label="The three cases come from x squared equals c"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`x^2 + q = 0 \\;\\Rightarrow\\; x^2 = c \\quad (c = -q)`} />
        </span>
      </div>
    </div>
  )
}

// SQS.4 Product Rule: √(ab) = √a · √b
export function ProductRulePlot({ C }) {
  const [a, setA] = useState(4)
  const [b, setB] = useState(9)
  const ab = a * b
  const sqrtAB = Math.sqrt(ab)
  const product = Math.sqrt(a) * Math.sqrt(b)

  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-0.5, 12], y: [-1.5, 2] }} preserveAspectRatio={false} height={160}>
        <Coordinates.Cartesian
          xAxis={{ lines: 2, labels: x => (x % 2 === 0 && x > 0 && x <= 12 ? String(x) : '') }}
          yAxis={false}
        />
        <Point x={sqrtAB} y={0.5} color={C.fg} />
        <LaTeX at={[sqrtAB, 1.3]} tex={`\\sqrt{${ab}}`} color={C.fg} />
        <Point x={product} y={-0.6} color={C.accent} />
        <LaTeX at={[product, -1.25]} tex={`\\sqrt{${a}}\\cdot\\sqrt{${b}}`} color={C.accent} />
      </Mafs>
      <Slider
        label="a"
        value={a}
        min={1}
        max={9}
        step={1}
        onChange={setA}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={9}
        step={1}
        onChange={setB}
        format={v => String(Math.round(v))}
      />
      <div aria-label="Product rule for surds" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={`\\sqrt{ab} = \\sqrt{a}\\cdot\\sqrt{b}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\sqrt{${ab}} \\approx ${sqrtAB.toFixed(4)}`} />
        </span>
      </div>
    </div>
  )
}

// SQS.5 Absolute Value: √(a²) = |a|
export function AbsoluteValueRootPlot({ C }) {
  const [a, setA] = useState(-3)
  const absA = Math.abs(a)

  return (
    <div style={{ width: '100%' }}>
      <Mafs viewBox={{ x: [-6, 6], y: [-1.5, 2] }} preserveAspectRatio={false} height={160}>
        <Coordinates.Cartesian
          xAxis={{
            lines: 1,
            labels: x => (Number.isInteger(x) && Math.abs(x) <= 6 ? String(x) : '')
          }}
          yAxis={false}
        />
        <Point x={a} y={0.5} color={C.dim} />
        <LaTeX at={[a, 1.3]} tex={`a = ${a}`} color={C.dim} />
        <Point x={absA} y={-0.5} color={C.fg} />
        <LaTeX at={[absA, -1.25]} tex={`\\sqrt{a^2} = |a| = ${absA}`} color={C.fg} />
        <Line.Segment
          point1={[a, 0.4]}
          point2={[absA, -0.4]}
          color={C.accent}
          weight={STROKE_SECONDARY}
          style="dashed"
        />
      </Mafs>
      <Slider
        label="a"
        value={a}
        min={-5}
        max={5}
        step={0.5}
        onChange={setA}
        format={v => v.toFixed(1)}
      />
      <div
        aria-label="Square root of a squared equals the absolute value of a"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`\\sqrt{a^2} = |a|`} />
        </span>
        {a >= 0 ? (
          <span style={{ opacity: OPACITY.dim }}>
            <KatexInline tex={`a \\ge 0 \\Rightarrow \\sqrt{a^2} = a = ${absA.toFixed(2)}`} />
          </span>
        ) : (
          <span style={{ opacity: OPACITY.dim }}>
            <KatexInline
              tex={`a < 0 \\Rightarrow \\sqrt{a^2} = -a = ${absA.toFixed(2)} \\ne ${a.toFixed(1)}`}
            />
          </span>
        )}
      </div>
    </div>
  )
}

// SQS.6 Rationalising the Denominator (DOM - rebuilt from an SVG text panel)
export function RationalisingStepDiagram({ C }) {
  const sqrt3 = Math.sqrt(3)
  const steps = [
    `\\dfrac{1}{2 + \\sqrt{3}}`,
    `= \\dfrac{2 - \\sqrt{3}}{(2 + \\sqrt{3})(2 - \\sqrt{3})}`,
    `= \\dfrac{2 - \\sqrt{3}}{4 - 3}`,
    `= 2 - \\sqrt{3} \\approx ${(2 - sqrt3).toFixed(4)}`
  ]
  return (
    <div style={{ width: '100%', fontFamily: FONT_FAMILY }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'center',
          padding: '8px 0'
        }}
      >
        {steps.map((s, i) => (
          <div key={i} style={{ color: i === steps.length - 1 ? C.fg : C.dim }}>
            <KatexInline tex={s} />
          </div>
        ))}
      </div>
      <div
        aria-label="Rationalising the denominator with the conjugate"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          conjugate flips the surd sign: denominator becomes <KatexInline tex={'a^2 - b'} />
        </span>
      </div>
    </div>
  )
}
