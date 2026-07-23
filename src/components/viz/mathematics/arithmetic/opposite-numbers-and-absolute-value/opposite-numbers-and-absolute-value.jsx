// MATHEMATICS · OPPOSITE NUMBERS AND ABSOLUTE VALUE
// Mafs interactives for the Rational Numbers unit's opening topic.
// Each component accepts a `C` color object from useVizColors().
//
// REFINE pass 2026-07-02 (file rewritten):
// - Every component self-wrapped in a VizFigure - the runner already frames
//   each viz, so these rendered as a figure INSIDE a figure (same nested-
//   figure defect class as the dead estimation-and-rounding duplicate).
//   Wrappers stripped; plain divs with aria-labels.
// - Four useMovablePoint handles used the Mafs default indigo (monochrome
//   breach, same as ar.44) - now C.fg, a LITERAL ink: the runner defines no
//   --text-primary custom property and invalid var() in SVG fill computes
//   to black-on-black (verifier-confirmed).
// - MultiplyByNegativeFlip clamped z in arithmetic but let the HANDLE drag
//   past ±3 - the indicator separated from the value in use; the constraint
//   now lives in the movable point itself.
// - size-24 → 12; result equations moved to readout rows;
//   TriangleInequalityWalk gained x, y sliders on a fixed frame (was a
//   frozen 3/−2 exemplar).
// Engine (WebSearch 2026-07-02, number-line / drag classes): only banned
// dashboard stacks surfaced; Mafs (A) stays. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.

import React from 'react'
import { Mafs, Coordinates, Point, Text, Line, Polygon, LaTeX, useMovablePoint } from 'mafs'
import 'mafs/core.css'
import 'katex/dist/katex.min.css'
import { Slider, KatexInline } from '../../../primitives'
import { useState } from 'react'
import { FONT_FAMILY, FONT_LABEL, LS_CONTROL } from '../../../scale-tokens'

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

// 1. ThermometerNumberLine
// Temperature line −40…40 with the worked change −2° + 7° = 5°. Static
// exemplar by design (the topic's opening figure).
export function ThermometerNumberLine({ C }) {
  const ticks = [-40, -30, -20, -10, 0, 10, 20, 30, 40]
  const start = -2
  const after = 5
  const toX = t => t / 10

  return (
    <div style={{ width: '100%' }} aria-label="Thermometer line: a temperature change as a jump">
      <Mafs viewBox={{ x: [-5.5, 5.5], y: [-1.5, 1.6] }} preserveAspectRatio={false} height={200}>
        <Coordinates.Cartesian xAxis={{ lines: false, labels: () => '' }} yAxis={false} />
        <Line.Segment point1={[-4.5, 0]} point2={[4.5, 0]} color={C.dim} weight={1.5} />
        {ticks.map(t => (
          <React.Fragment key={t}>
            <Line.Segment
              point1={[toX(t), -0.18]}
              point2={[toX(t), 0.18]}
              color={t === 0 ? C.fg : C.dim}
              weight={t === 0 ? 2 : 1}
            />
            <Text x={toX(t)} y={-0.6} size={FONT_LABEL} attach="s" color={C.dim}>
              {String(t)}
            </Text>
          </React.Fragment>
        ))}
        <Point x={toX(start)} y={0} color={C.accent} />
        <Text x={toX(start)} y={1.05} size={FONT_LABEL} attach="n" color={C.accent}>
          start −2°
        </Text>
        <Point x={toX(after)} y={0} color={C.fg} />
        <Text x={toX(after)} y={1.05} size={FONT_LABEL} attach="n" color={C.fg}>
          after 5°
        </Text>
        <Line.Segment
          point1={[toX(start), 0.3]}
          point2={[toX(after), 0.3]}
          color={C.accent}
          weight={1.5}
          opacity={0.7}
        />
        <Text x={(toX(start) + toX(after)) / 2} y={0.62} size={FONT_LABEL} attach="n" color={C.dim}>
          +7°
        </Text>
      </Mafs>
      <div aria-label="Thermometer readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={'-2 + 7 = 5'} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          a rise of 7° from −2° crosses zero
        </span>
      </div>
    </div>
  )
}

// 2. OppositeReflectionLine
// Drag p; −p mirrors it across zero.
export function OppositeReflectionLine({ C }) {
  const p = useMovablePoint([3, 0], { constrain: 'horizontal', color: C.fg })
  const px = p.point[0]
  const negX = -px

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Opposite numbers: drag p, its opposite mirrors across zero"
    >
      <Mafs viewBox={{ x: [-6.5, 6.5], y: [-1.3, 1.5] }} preserveAspectRatio={false} height={210}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (Number.isInteger(n) && n !== 0 ? String(n) : '') }}
          yAxis={false}
        />
        <Line.Segment point1={[-6.5, 0]} point2={[6.5, 0]} color={C.dim} weight={1.5} />
        <Line.Segment
          point1={[negX, 0.35]}
          point2={[px, 0.35]}
          color={C.dim}
          weight={1}
          opacity={0.5}
        />
        <Line.Segment point1={[0, -0.2]} point2={[0, 0.2]} color={C.fg} weight={2} />
        <Point x={negX} y={0} color={C.dim} />
        <LaTeX at={[negX, 1.0]} tex={'-p'} color={C.dim} />
        {p.element}
        <LaTeX at={[px, -0.85]} tex={'p'} color={C.accent} />
      </Mafs>
      <div aria-label="Opposite readout: live values" style={{ ...READOUT_ROW, color: C.fg }}>
        <span>
          <KatexInline tex={`p = ${px.toFixed(1)}`} />
        </span>
        <span style={{ opacity: 0.55 }}>
          <KatexInline tex={`-p = ${negX.toFixed(1)}`} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          same distance, opposite side
        </span>
      </div>
    </div>
  )
}

// 3. SignWalkNumberLine
// Three worked walks stacked over one shared axis; equations below.
export function SignWalkNumberLine({ C }) {
  const walks = [
    { start: -1, step: 4, result: 3, tex: '-1 + 4 = 3', above: true },
    { start: -2, step: -3, result: -5, tex: '-2 - 3 = -5', above: false },
    { start: 4, step: -6, result: -2, tex: '4 - 6 = -2', above: true }
  ]
  const rowY = [1.2, 0, -1.2]

  return (
    <div style={{ width: '100%' }} aria-label="Three signed walks on the number line">
      <Mafs viewBox={{ x: [-6.5, 5.5], y: [-2.0, 2.0] }} preserveAspectRatio={false} height={260}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (Number.isInteger(n) ? String(n) : '') }}
          yAxis={false}
        />
        <Line.Segment point1={[-6.5, 0]} point2={[5.5, 0]} color={C.dim} weight={1} opacity={0.4} />
        {walks.map(({ start, step, result, above }, i) => {
          const y = rowY[i]
          const arrowY = y + (above ? 0.3 : -0.3)
          return (
            <React.Fragment key={i}>
              <Point x={start} y={y} color={C.dim} />
              <Line.Segment
                point1={[start, arrowY]}
                point2={[result, arrowY]}
                color={C.accent}
                weight={1.5}
                opacity={0.75}
              />
              <Text
                x={(start + result) / 2}
                y={arrowY + (above ? 0.28 : -0.28)}
                size={FONT_LABEL}
                attach={above ? 'n' : 's'}
                color={C.dim}
              >
                {step > 0 ? `+${step}` : String(step)}
              </Text>
              <Point x={result} y={y} color={C.accent} />
            </React.Fragment>
          )
        })}
      </Mafs>
      <div
        aria-label="Sign walk readout: the three equations"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        {walks.map(w => (
          <span key={w.tex}>
            <KatexInline tex={w.tex} />
          </span>
        ))}
      </div>
    </div>
  )
}

// 4. InequalityNegationFlip
// x=2 < y=5 above; −x, −y below with the order reversed. Static theorem figure.
export function InequalityNegationFlip({ C }) {
  return (
    <div
      style={{ width: '100%' }}
      aria-label="Negation flips inequality: mirrored pair on two lines"
    >
      <Mafs viewBox={{ x: [-7, 7], y: [-2.3, 2.3] }} preserveAspectRatio={false} height={260}>
        <Line.Segment point1={[-6.5, 1.0]} point2={[6.5, 1.0]} color={C.dim} weight={1.5} />
        <Text x={-6.2} y={1.55} size={FONT_LABEL} attach="n" color={C.dim}>
          original
        </Text>
        <Line.Segment point1={[0, 0.8]} point2={[0, 1.2]} color={C.fg} weight={2} />
        <Point x={2} y={1.0} color={C.accent} />
        <Text x={2} y={1.5} size={FONT_LABEL} attach="n" color={C.accent}>
          x = 2
        </Text>
        <Point x={5} y={1.0} color={C.fg} />
        <Text x={5} y={1.5} size={FONT_LABEL} attach="n" color={C.fg}>
          y = 5
        </Text>
        <Line.Segment point1={[-6.5, -1.0]} point2={[6.5, -1.0]} color={C.dim} weight={1.5} />
        <Text x={-6.2} y={-1.55} size={FONT_LABEL} attach="s" color={C.dim}>
          negated
        </Text>
        <Line.Segment point1={[0, -0.8]} point2={[0, -1.2]} color={C.fg} weight={2} />
        <Point x={-2} y={-1.0} color={C.accent} />
        <Text x={-2} y={-1.5} size={FONT_LABEL} attach="s" color={C.accent}>
          −x = −2
        </Text>
        <Point x={-5} y={-1.0} color={C.fg} />
        <Text x={-5} y={-1.5} size={FONT_LABEL} attach="s" color={C.fg}>
          −y = −5
        </Text>
        {/* reflection connectors */}
        <Line.Segment
          point1={[2, 0.75]}
          point2={[-2, -0.75]}
          color={C.dim}
          weight={1}
          opacity={0.4}
        />
        <Line.Segment
          point1={[5, 0.75]}
          point2={[-5, -0.75]}
          color={C.dim}
          weight={1}
          opacity={0.4}
        />
      </Mafs>
      <div aria-label="Negation flip readout" style={{ ...READOUT_ROW, color: C.fg }}>
        <span style={{ opacity: 0.55 }}>
          <KatexInline tex={'2 < 5'} />
        </span>
        <span>
          <KatexInline tex={'-5 < -2 \\;\\Rightarrow\\; -x > -y'} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          reflection across zero reverses order
        </span>
      </div>
    </div>
  )
}

// 5. MultiplyByNegativeFlip
// Drag z (constrained to [−3, 3] IN the handle); z·x and z·y track live.
export function MultiplyByNegativeFlip({ C }) {
  const zPoint = useMovablePoint([1, 0], {
    color: C.fg,
    constrain: ([xv]) => [Math.max(-3, Math.min(3, xv)), 0]
  })
  const z = zPoint.point[0]
  const zx = 2 * z
  const zy = 5 * z
  const flipped = z < 0

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Multiplying an inequality by z: drag z through zero to flip the order"
    >
      <Mafs viewBox={{ x: [-16, 16], y: [-1.6, 2.2] }} preserveAspectRatio={false} height={230}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (n % 5 === 0 ? String(n) : '') }}
          yAxis={false}
        />
        <Line.Segment point1={[-15, 0]} point2={[15, 0]} color={C.dim} weight={1.5} />
        <Point x={2} y={0} color={C.dim} />
        <Text x={2} y={0.55} size={FONT_LABEL} attach="n" color={C.dim}>
          x=2
        </Text>
        <Point x={5} y={0} color={C.dim} />
        <Text x={5} y={0.55} size={FONT_LABEL} attach="n" color={C.dim}>
          y=5
        </Text>
        <Point x={zx} y={0} color={C.accent} />
        <Text x={zx} y={-0.65} size={FONT_LABEL} attach="s" color={C.accent}>
          z·x
        </Text>
        <Point x={zy} y={0} color={flipped ? C.fg : C.accent} />
        <Text x={zy} y={0.62} size={FONT_LABEL} attach="n" color={flipped ? C.fg : C.accent}>
          z·y
        </Text>
        {zPoint.element}
        <LaTeX at={[z, 1.6]} tex={'z'} color={C.accent} />
      </Mafs>
      <div
        aria-label="Multiply-by-z readout: products and order verdict"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`z = ${z.toFixed(1)}`} />
        </span>
        <span style={{ opacity: 0.55 }}>
          <KatexInline tex={`zx = ${zx.toFixed(1)},\\; zy = ${zy.toFixed(1)}`} />
        </span>
        <span style={{ textTransform: 'uppercase' }}>
          {z === 0
            ? 'z = 0: both products are 0'
            : flipped
              ? 'z < 0: order flipped'
              : 'z > 0: order preserved'}
        </span>
      </div>
    </div>
  )
}

// 6. AbsoluteValueDistance
// Drag x; the thick segment from 0 IS |x|.
export function AbsoluteValueDistance({ C }) {
  const xPt = useMovablePoint([3, 0], { constrain: 'horizontal', color: C.fg })
  const x = xPt.point[0]
  const abs = Math.abs(x)

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Absolute value as distance from zero: drag the point"
    >
      <Mafs viewBox={{ x: [-6.5, 6.5], y: [-1.1, 1.3] }} preserveAspectRatio={false} height={190}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (Number.isInteger(n) && n !== 0 ? String(n) : '') }}
          yAxis={false}
        />
        <Line.Segment point1={[-6.5, 0]} point2={[6.5, 0]} color={C.dim} weight={1.5} />
        <Line.Segment point1={[0, -0.22]} point2={[0, 0.22]} color={C.fg} weight={2} />
        <Line.Segment
          point1={[0, 0.28]}
          point2={[x, 0.28]}
          color={C.accent}
          weight={3}
          opacity={0.7}
        />
        {xPt.element}
        <LaTeX at={[x / 2, 0.8]} tex={'|x|'} color={C.accent} />
      </Mafs>
      <div
        aria-label="Absolute value readout: live x and its distance"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`x = ${x.toFixed(2)}`} />
        </span>
        <span>
          <KatexInline tex={`|x| = ${abs.toFixed(2)}`} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          distance is never negative
        </span>
      </div>
    </div>
  )
}

// 7. AbsoluteValueIntervalShade
// Drag b; the band (−b, b) is exactly the solution set of |x| < b.
export function AbsoluteValueIntervalShade({ C }) {
  const bPt = useMovablePoint([3, 0], {
    color: C.fg,
    constrain: ([xv]) => [Math.max(0.5, Math.min(6, Math.abs(xv))), 0]
  })
  const b = bPt.point[0]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Absolute value inequality: the open band from minus b to b"
    >
      <Mafs viewBox={{ x: [-7, 7], y: [-1.1, 1.3] }} preserveAspectRatio={false} height={190}>
        <Coordinates.Cartesian
          xAxis={{ lines: false, labels: n => (Number.isInteger(n) ? String(n) : '') }}
          yAxis={false}
        />
        <Line.Segment point1={[-7, 0]} point2={[7, 0]} color={C.dim} weight={1.5} />
        <Polygon
          points={[
            [-b, -0.15],
            [b, -0.15],
            [b, 0.15],
            [-b, 0.15]
          ]}
          color={C.accent}
          fillOpacity={0.2}
        />
        <Point x={-b} y={0} color={C.dim} />
        {bPt.element}
        <LaTeX at={[b, 0.75]} tex={'b'} color={C.accent} />
        <LaTeX at={[-b, 0.75]} tex={'-b'} color={C.accent} />
      </Mafs>
      <div
        aria-label="Interval readout: the inequality and interval"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`|x| < ${b.toFixed(1)} \\;\\Leftrightarrow\\; x \\in (-${b.toFixed(1)},\\, ${b.toFixed(1)})`}
          />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          open endpoints: strict inequality
        </span>
      </div>
    </div>
  )
}

// 8. TriangleInequalityWalk
// |x + y| ≤ |x| + |y|: the walk (top) vs the sizes laid end to end (bottom).
// Live x, y on a FIXED frame (was a frozen 3/−2 exemplar); equality holds
// exactly when x and y point the same way.
export function TriangleInequalityWalk({ C }) {
  const [x, setX] = useState(3)
  const [y, setY] = useState(-2)
  const sum = x + y
  const absX = Math.abs(x)
  const absY = Math.abs(y)
  const absSum = Math.abs(sum)
  const topY = 0.9
  const botY = -0.9

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Triangle inequality: the walk versus the sizes laid end to end"
    >
      <Mafs viewBox={{ x: [-9.8, 9.5], y: [-2.0, 2.0] }} preserveAspectRatio={false} height={250}>
        {/* frame holds the full walk reach: x,y ∈ [−4,4] ⇒ sum ∈ [−8,8]
            (both-negative case x=y=−4 lands the endpoint at −8) */}
        <Text x={-9.2} y={topY + 0.42} size={FONT_LABEL} attach="n" color={C.dim}>
          walk
        </Text>
        <Line.Segment
          point1={[-8.5, topY]}
          point2={[9, topY]}
          color={C.dim}
          weight={1}
          opacity={0.3}
        />
        <Point x={0} y={topY} color={C.dim} />
        {x !== 0 && (
          <Line.Segment
            point1={[0, topY]}
            point2={[x, topY]}
            color={C.accent}
            weight={3}
            opacity={0.8}
          />
        )}
        <Text x={x / 2} y={topY + 0.35} size={FONT_LABEL} attach="n" color={C.accent}>
          x
        </Text>
        <Point x={x} y={topY} color={C.accent} />
        {y !== 0 && (
          <Line.Segment
            point1={[x, topY]}
            point2={[sum, topY]}
            color={C.fg}
            weight={3}
            opacity={0.7}
          />
        )}
        <Text x={x + y / 2} y={topY - 0.35} size={FONT_LABEL} attach="s" color={C.fg}>
          y
        </Text>
        <Point x={sum} y={topY} color={C.fg} />

        <Text x={-9.2} y={botY + 0.42} size={FONT_LABEL} attach="n" color={C.dim}>
          sizes
        </Text>
        <Line.Segment
          point1={[-8.5, botY]}
          point2={[9, botY]}
          color={C.dim}
          weight={1}
          opacity={0.3}
        />
        <Point x={0} y={botY} color={C.dim} />
        {absX > 0 && (
          <Line.Segment
            point1={[0, botY]}
            point2={[absX, botY]}
            color={C.accent}
            weight={3}
            opacity={0.8}
          />
        )}
        <Text x={absX / 2} y={botY + 0.35} size={FONT_LABEL} attach="n" color={C.accent}>
          |x|
        </Text>
        {absY > 0 && (
          <Line.Segment
            point1={[absX, botY]}
            point2={[absX + absY, botY]}
            color={C.fg}
            weight={3}
            opacity={0.7}
          />
        )}
        <Text x={absX + absY / 2} y={botY - 0.35} size={FONT_LABEL} attach="s" color={C.fg}>
          |y|
        </Text>
        <Point x={absX + absY} y={botY} color={C.fg} />
      </Mafs>
      <div
        aria-label="Triangle inequality readout: both sides computed live"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`|x+y| = ${absSum}`} />
        </span>
        <span>
          <KatexInline tex={`|x| + |y| = ${absX + absY}`} />
        </span>
        <span style={{ opacity: 0.55, textTransform: 'uppercase' }}>
          {absSum === absX + absY
            ? 'equal: x and y point the same way'
            : 'strict: the backtrack wastes distance'}
        </span>
      </div>
      <Slider
        label="x"
        value={x}
        min={-4}
        max={4}
        step={1}
        onChange={v => setX(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="y"
        value={y}
        min={-4}
        max={4}
        step={1}
        onChange={v => setY(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}
