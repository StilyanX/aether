import { useState, useRef, useEffect, useMemo } from 'react'
import katex from 'katex'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { useVizColors } from '../../../../hooks/use-viz-colors'
import { VizFigure } from '../../../../components/viz-figure'
import {
  Plot,
  Polyline,
  Dot,
  Tex,
  TexPx,
  Slider,
  OPACITY
} from '../../../../components/viz/primitives'
import { fracAdd, fracSub, fracMul, factor } from '../../../../components/viz/math-utils'
import {
  FONT_BODY,
  FONT_CONTROL,
  FONT_LABEL,
  FONT_TEX,
  FONT_VALUE
} from '../../../../components/viz/scale-tokens'

// Inline viz: 02.1.4 Fraction Distributive Law
// Hand-rolled SVG (Approved Engine Stack: Mathematics → hand-rolled SVG).
// 2D area decomposition: a rectangle of side A and (B+C) splits geometrically
// into two adjacent rectangles of areas A·B and A·C, demonstrating
// A(B+C) = AB + AC.
function Fo_FractionDistributiveLawRefined() {
  const C_ = useVizColors()
  const [A, setA] = useState(2)
  const [B, setB] = useState(3)
  const [C, setC] = useState(2)
  const W = 460
  const H = 160
  const total = B + C
  const wB = (B / total) * W
  const wC = (C / total) * W
  return (
    <div style={{ width: '100%' }}>
      <svg
        viewBox={`0 0 ${W + 60} ${H + 80}`}
        width="100%"
        style={{ display: 'block', color: C_.fg }}
        aria-label={`Rectangle with side A=${A} and width B+C=${B + C} split into two parts: A·B=${A * B} and A·C=${A * C}.`}
      >
        <g transform="translate(20, 30)">
          <rect
            x={0}
            y={0}
            width={wB}
            height={H}
            fill={C_.fg}
            fillOpacity={0.55}
            stroke={C_.fg}
            strokeWidth={1}
          />
          <rect
            x={wB}
            y={0}
            width={wC}
            height={H}
            fill={C_.fg}
            fillOpacity={0.25}
            stroke={C_.fg}
            strokeWidth={1}
          />
          <text
            x={wB / 2}
            y={H / 2 + 4}
            fill={C_.fg}
            fontSize={FONT_CONTROL}
            textAnchor="middle"
            fontFamily="'D-DIN', ui-monospace, monospace"
          >{`${A}·${B}`}</text>
          <text
            x={wB + wC / 2}
            y={H / 2 + 4}
            fill={C_.fg}
            fontSize={FONT_CONTROL}
            textAnchor="middle"
            fontFamily="'D-DIN', ui-monospace, monospace"
          >{`${A}·${C}`}</text>
          <text
            x={-12}
            y={H / 2 + 4}
            fill={C_.dim}
            fontSize={FONT_LABEL}
            textAnchor="end"
            fontFamily="'D-DIN', ui-monospace, monospace"
          >{`A=${A}`}</text>
          <text
            x={wB / 2}
            y={-8}
            fill={C_.dim}
            fontSize={FONT_LABEL}
            textAnchor="middle"
            fontFamily="'D-DIN', ui-monospace, monospace"
          >{`B=${B}`}</text>
          <text
            x={wB + wC / 2}
            y={-8}
            fill={C_.dim}
            fontSize={FONT_LABEL}
            textAnchor="middle"
            fontFamily="'D-DIN', ui-monospace, monospace"
          >{`C=${C}`}</text>
        </g>
        <text
          x={(W + 60) / 2}
          y={H + 65}
          fill={C_.fg}
          fontSize={FONT_TEX}
          textAnchor="middle"
          fontFamily="'D-DIN', ui-monospace, monospace"
          letterSpacing="0.04em"
        >
          {`A(B+C) = ${A}·${B + C} = ${A * (B + C)} = ${A * B} + ${A * C}`}
        </text>
      </svg>
      <Slider
        label="A"
        value={A}
        min={1}
        max={5}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="B"
        value={B}
        min={1}
        max={6}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="C"
        value={C}
        min={1}
        max={6}
        step={1}
        onChange={v => setC(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

// Inline viz: 02.1.1 Addition on the Number Line
// Hand-rolled monochrome SVG. Computed sum locates (a/b) + (c/d) by walking the
// two segments end to end from 0; landing point sn/sd is the reduced result.
function Fo_AdditionNumberLineRefined() {
  const C = useVizColors()
  const [a, setA] = useState(1)
  const [b, setB] = useState(3)
  const [c, setC] = useState(1)
  const [d, setD] = useState(4)
  const v1 = a / b
  const v2 = c / d
  const sum = v1 + v2
  const [sn, sd] = fracAdd([a, b], [c, d])
  const xMax = Math.max(1.2, sum + 0.2)
  const lcdT = b * d
  const W = 1000
  const H = 360
  const padL = 60
  const padR = 60
  const yLine = 220
  const xAt = t => padL + (t / xMax) * (W - padL - padR)
  const tickH = 14
  const yA = yLine - 70
  const yB = yLine - 110
  const segHalf = 6
  const subCount = Math.min(Math.ceil(xMax * lcdT), 200)

  const eqRef = useRef(null)
  useEffect(() => {
    if (!eqRef.current) return
    try {
      katex.render(
        `\\dfrac{${a}}{${b}}+\\dfrac{${c}}{${d}} = \\dfrac{${sn}}{${sd}}`,
        eqRef.current,
        { throwOnError: false, displayMode: false }
      )
    } catch {
      eqRef.current.textContent = `${a}/${b} + ${c}/${d} = ${sn}/${sd}`
    }
  }, [a, b, c, d, sn, sd])

  const labelARef = useRef(null)
  const labelBRef = useRef(null)
  useEffect(() => {
    if (labelARef.current) {
      try {
        katex.render(`\\tfrac{${a}}{${b}}`, labelARef.current, {
          throwOnError: false,
          displayMode: false
        })
      } catch {
        labelARef.current.textContent = `${a}/${b}`
      }
    }
    if (labelBRef.current) {
      try {
        katex.render(`\\tfrac{${c}}{${d}}`, labelBRef.current, {
          throwOnError: false,
          displayMode: false
        })
      } catch {
        labelBRef.current.textContent = `${c}/${d}`
      }
    }
  }, [a, b, c, d])

  const sliderRow = (label, value, min, max, onChange) => (
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

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: '12px 16px',
        boxSizing: 'border-box',
        color: C.fg,
        fontFamily: 'var(--reader-font-family)'
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', display: 'block' }}
        aria-label={`Number-line addition: ${a}/${b} plus ${c}/${d} equals ${sn}/${sd}.`}
      >
        {Array.from({ length: subCount + 1 }, (_, i) => {
          const t = i / lcdT
          if (t > xMax) return null
          return (
            <line
              key={`sub${i}`}
              x1={xAt(t)}
              y1={yLine - 4}
              x2={xAt(t)}
              y2={yLine + 4}
              stroke={C.faint}
              strokeWidth={1}
            />
          )
        })}
        <line
          x1={xAt(0)}
          y1={yLine}
          x2={xAt(xMax)}
          y2={yLine}
          stroke={C.fg}
          strokeWidth={2}
          strokeLinecap="square"
        />
        {Array.from({ length: Math.floor(xMax) + 1 }, (_, i) => (
          <g key={`u${i}`}>
            <line
              x1={xAt(i)}
              y1={yLine - tickH}
              x2={xAt(i)}
              y2={yLine + tickH}
              stroke={C.fg}
              strokeWidth={2}
            />
            <text
              x={xAt(i)}
              y={yLine + tickH + 22}
              textAnchor="middle"
              fill={C.dim}
              fontSize="18"
              fontFamily="var(--reader-font-family)"
            >
              {i}
            </text>
          </g>
        ))}
        <line
          x1={xAt(0)}
          y1={yA}
          x2={xAt(v1)}
          y2={yA}
          stroke={C.fg}
          strokeWidth={3}
          strokeLinecap="square"
        />
        <line
          x1={xAt(0)}
          y1={yA - segHalf}
          x2={xAt(0)}
          y2={yA + segHalf}
          stroke={C.fg}
          strokeWidth={2}
        />
        <line
          x1={xAt(v1)}
          y1={yA - segHalf}
          x2={xAt(v1)}
          y2={yA + segHalf}
          stroke={C.fg}
          strokeWidth={2}
        />
        <line
          x1={xAt(v1)}
          y1={yA + segHalf}
          x2={xAt(v1)}
          y2={yLine - tickH}
          stroke={C.dim}
          strokeWidth={1}
          strokeDasharray="3 4"
        />
        <foreignObject x={xAt(v1 / 2) - 50} y={yA - 38} width={100} height={28}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: C.fg,
              fontSize: FONT_BODY,
              lineHeight: 1
            }}
          >
            <span ref={labelARef} />
          </div>
        </foreignObject>
        <line
          x1={xAt(v1)}
          y1={yB}
          x2={xAt(sum)}
          y2={yB}
          stroke={C.dim}
          strokeWidth={3}
          strokeLinecap="square"
          strokeDasharray="6 3"
        />
        <line
          x1={xAt(v1)}
          y1={yB - segHalf}
          x2={xAt(v1)}
          y2={yB + segHalf}
          stroke={C.dim}
          strokeWidth={2}
        />
        <line
          x1={xAt(sum)}
          y1={yB - segHalf}
          x2={xAt(sum)}
          y2={yB + segHalf}
          stroke={C.dim}
          strokeWidth={2}
        />
        <line
          x1={xAt(sum)}
          y1={yB + segHalf}
          x2={xAt(sum)}
          y2={yLine - tickH}
          stroke={C.dim}
          strokeWidth={1}
          strokeDasharray="3 4"
        />
        <foreignObject x={xAt((v1 + sum) / 2) - 50} y={yB - 38} width={100} height={28}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: C.dim,
              fontSize: FONT_BODY,
              lineHeight: 1
            }}
          >
            <span ref={labelBRef} />
          </div>
        </foreignObject>
        <circle cx={xAt(sum)} cy={yLine} r={5} fill={C.fg} stroke={C.fg} strokeWidth={1} />
        <foreignObject x={W / 2 - 280} y={yLine + 48} width={560} height={60}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: C.fg,
              fontSize: FONT_VALUE,
              lineHeight: 1
            }}
          >
            <span ref={eqRef} />
          </div>
        </foreignObject>
      </svg>
      {sliderRow('numerator a', a, 0, 6, v => setA(v))}
      {sliderRow('denominator b', b, 1, 8, v => setB(v))}
      {sliderRow('numerator c', c, 0, 6, v => setC(v))}
      {sliderRow('denominator d', d, 1, 8, v => setD(v))}
    </div>
  )
}

// Inline viz: 02.1.2 Subtraction on the Number Line
// Hand-rolled SVG via Plot primitive. A − B is the gap from B to A; common
// denominator b·d gives the tick subdivision so the gap reads in integer units
// of 1/(b·d).
function Fo_SubtractionNumberLineRefined() {
  useVizColors()
  const [a, setA] = useState(3)
  const [b, setB] = useState(4)
  const [c, setC] = useState(1)
  const [d, setD] = useState(3)
  const v1 = a / b
  const v2 = c / d
  const [sn, sd] = fracSub([a, b], [c, d])
  const xMax = Math.max(1.1, Math.max(v1, v2) + 0.15)
  const lo = Math.min(v1, v2)
  const hi = Math.max(v1, v2)
  const lcdT = b * d
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.05, xMax]} yRange={[-0.45, 0.7]} width={620} height={260}>
        <Polyline
          points={[
            [0, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {Array.from({ length: Math.ceil(xMax * lcdT) + 1 }, (_, i) =>
          i / lcdT <= xMax ? (
            <Polyline
              key={i}
              points={[
                [i / lcdT, -0.05],
                [i / lcdT, 0.05]
              ]}
              opacity={OPACITY.faint}
            />
          ) : null
        )}
        <Polyline
          points={[
            [0, -0.12],
            [0, 0.12]
          ]}
          opacity={OPACITY.fg}
        />
        <Tex at={[0, -0.22]} tex="0" anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Dot x={v1} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={v2} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[v1, 0.22]}
          tex={`\\tfrac{${a}}{${b}}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[v2, -0.32]}
          tex={`\\tfrac{${c}}{${d}}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Polyline
          points={[
            [lo, 0.46],
            [hi, 0.46]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Polyline
          points={[
            [lo, 0.42],
            [lo, 0.5]
          ]}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [hi, 0.42],
            [hi, 0.5]
          ]}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[(lo + hi) / 2, 0.66]}
          tex={`\\dfrac{${a}}{${b}}-\\dfrac{${c}}{${d}} = \\dfrac{${sn}}{${sd}}`}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="a"
        value={a}
        min={0}
        max={6}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={8}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="c"
        value={c}
        min={0}
        max={6}
        step={1}
        onChange={v => setC(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="d"
        value={d}
        min={1}
        max={8}
        step={1}
        onChange={v => setD(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

// Inline viz: 02.1.3 Fraction Multiplication Area
// Unit square split into b columns and d rows; shaded a×c sub-rectangle has
// area (a/b)·(c/d) = (a·c)/(b·d). Each cell carries area 1/(b·d); the count of
// shaded cells IS the product.
function Fo_FractionMultiplicationAreaRefined() {
  const C = useVizColors()
  const [a, setA] = useState(2)
  const [b, setB] = useState(3)
  const [c, setC] = useState(3)
  const [d, setD] = useState(4)
  const W = 320
  const H = 220
  const cw = W / b
  const ch = H / d
  const aClamp = Math.min(a, b)
  const cClamp = Math.min(c, d)
  const [pn, pd] = fracMul([aClamp, b], [cClamp, d])
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '12px 16px',
        boxSizing: 'border-box',
        color: C.fg,
        fontFamily: 'var(--reader-font-family)'
      }}
    >
      <svg
        viewBox={`0 0 ${W + 200} ${H + 60}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', flex: 1, minHeight: 0, display: 'block' }}
      >
        <g transform="translate(20, 20)">
          {Array.from({ length: b }, (_, i) =>
            Array.from({ length: d }, (_, j) => {
              const sel = i < aClamp && j < cClamp
              return (
                <rect
                  key={`${i}-${j}`}
                  x={i * cw}
                  y={j * ch}
                  width={cw}
                  height={ch}
                  fill={sel ? C.accent : 'transparent'}
                  stroke={C.dim}
                  strokeWidth={1}
                />
              )
            })
          )}
          <rect
            x={0}
            y={0}
            width={aClamp * cw}
            height={cClamp * ch}
            fill="none"
            stroke={C.fg}
            strokeWidth={2}
          />
        </g>
        <TexPx
          x={W + 32}
          y={H / 2 - 2}
          size={FONT_TEX}
          width={180}
          tex={`\\tfrac{${aClamp}}{${b}} \\times \\tfrac{${cClamp}}{${d}}`}
        />
        <TexPx
          x={W + 32}
          y={H / 2 + 26}
          size={FONT_TEX}
          width={120}
          opacity={0.7}
          tex={`= \\tfrac{${aClamp * cClamp}}{${b * d}}`}
        />
        <TexPx
          x={W + 32}
          y={H / 2 + 50}
          size={FONT_TEX}
          width={100}
          opacity={0.5}
          tex={pn !== aClamp * cClamp ? `= \\tfrac{${pn}}{${pd}}` : ''}
        />
      </svg>
      <Slider
        label="a"
        value={a}
        min={0}
        max={b}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={8}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="c"
        value={c}
        min={0}
        max={d}
        step={1}
        onChange={v => setC(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="d"
        value={d}
        min={1}
        max={8}
        step={1}
        onChange={v => setD(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

// Inline viz: 02.1.5 Fraction of a Number Line
// Divide [0, k/l] into n equal parts; take m of them. The highlighted segment
// on the main number line ends at v = (m/n)·(k/l) = (m·k)/(n·l).
function Fo_gcd(a, b) {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) {
    ;[a, b] = [b, a % b]
  }
  return a || 1
}

function Fo_NumberPicker({ label, value, min, max, onChange }) {
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

function Fo_FractionOfNumberLineRefined() {
  const C = useVizColors()
  const [m, setM] = useState(2)
  const [n, setN] = useState(3)
  const [k, setK] = useState(3)
  const [l, setL] = useState(4)
  const mc = Math.min(m, n)
  const kc = Math.min(k, l)
  const seg = kc / l
  const v = (mc / n) * seg
  const pNum = mc * kc
  const pDen = n * l
  const g = Fo_gcd(pNum, pDen)
  const rNum = pNum / g
  const rDen = pDen / g

  const W = 1000
  const H = 420
  const padX = 80
  const yMain = H * 0.62
  const ySeg = yMain - 80
  const xAt = t => padX + t * (W - 2 * padX)
  const tickH = 16
  const segTickH = 10

  const segLabelTex = useMemo(
    () =>
      katex.renderToString(`\\dfrac{${kc}}{${l}}`, {
        throwOnError: false,
        displayMode: false
      }),
    [kc, l]
  )
  const resultTex = useMemo(() => {
    const lhs = `\\dfrac{${mc}}{${n}}\\cdot\\dfrac{${kc}}{${l}}`
    const rhs =
      rNum === pNum
        ? `\\dfrac{${pNum}}{${pDen}}`
        : `\\dfrac{${pNum}}{${pDen}} = \\dfrac{${rNum}}{${rDen}}`
    return katex.renderToString(`${lhs} = ${rhs}`, {
      throwOnError: false,
      displayMode: false
    })
  }, [mc, n, kc, l, pNum, pDen, rNum, rDen])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
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
          y1={yMain}
          x2={xAt(1)}
          y2={yMain}
          stroke={C.fg}
          strokeWidth={2}
          strokeLinecap="square"
        />
        <line
          x1={xAt(0)}
          y1={yMain - tickH}
          x2={xAt(0)}
          y2={yMain + tickH}
          stroke={C.fg}
          strokeWidth={2}
        />
        <line
          x1={xAt(1)}
          y1={yMain - tickH}
          x2={xAt(1)}
          y2={yMain + tickH}
          stroke={C.fg}
          strokeWidth={2}
        />
        <text
          x={xAt(0)}
          y={yMain + tickH + 26}
          textAnchor="middle"
          fill={C.fg}
          fontSize="20"
          fontFamily="var(--reader-font-family)"
        >
          0
        </text>
        <text
          x={xAt(1)}
          y={yMain + tickH + 26}
          textAnchor="middle"
          fill={C.fg}
          fontSize="20"
          fontFamily="var(--reader-font-family)"
        >
          1
        </text>
        <line x1={xAt(0)} y1={ySeg} x2={xAt(seg)} y2={ySeg} stroke={C.dim} strokeWidth={2} />
        <line
          x1={xAt(seg)}
          y1={ySeg - segTickH}
          x2={xAt(seg)}
          y2={ySeg + segTickH}
          stroke={C.dim}
          strokeWidth={2}
        />
        <line
          x1={xAt(0)}
          y1={ySeg - segTickH}
          x2={xAt(0)}
          y2={ySeg + segTickH}
          stroke={C.dim}
          strokeWidth={2}
        />
        <foreignObject x={xAt(seg / 2) - 80} y={ySeg - 78} width={160} height={72}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: C.dim,
              fontSize: FONT_VALUE,
              lineHeight: 1.2
            }}
            dangerouslySetInnerHTML={{ __html: segLabelTex }}
          />
        </foreignObject>
        <line
          x1={xAt(seg)}
          y1={ySeg + segTickH + 2}
          x2={xAt(seg)}
          y2={yMain - tickH - 2}
          stroke={C.faint}
          strokeWidth={1}
          strokeDasharray="3 4"
        />
        {Array.from({ length: n + 1 }, (_, i) => {
          const x = (i / n) * seg
          const isEnd = i === 0 || i === n
          return (
            <line
              key={`sub-${i}`}
              x1={xAt(x)}
              y1={yMain - tickH * 0.45}
              x2={xAt(x)}
              y2={yMain + tickH * 0.45}
              stroke={isEnd ? C.fg : C.faint}
              strokeWidth={1.5}
            />
          )
        })}
        <line
          x1={xAt(0)}
          y1={yMain}
          x2={xAt(v)}
          y2={yMain}
          stroke={C.fg}
          strokeWidth={4}
          strokeLinecap="square"
        />
        <circle cx={xAt(v)} cy={yMain} r={6} fill={C.fg} stroke={C.fg} strokeWidth={1} />
        <foreignObject x={W / 2 - 360} y={yMain + tickH + 40} width={720} height={88}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: C.fg,
              fontSize: FONT_VALUE,
              lineHeight: 1.2
            }}
            dangerouslySetInnerHTML={{ __html: resultTex }}
          />
        </foreignObject>
      </svg>
      <div>
        <Fo_NumberPicker label="m" value={mc} min={0} max={n} onChange={setM} C={C} />
        <Fo_NumberPicker
          label="n"
          value={n}
          min={1}
          max={6}
          onChange={v => {
            const nv = v | 0
            setN(nv)
            if (m > nv) setM(nv)
          }}
          C={C}
        />
        <Fo_NumberPicker label="k" value={kc} min={0} max={l} onChange={setK} C={C} />
        <Fo_NumberPicker
          label="l"
          value={l}
          min={1}
          max={6}
          onChange={v => {
            const nv = v | 0
            setL(nv)
            if (k > nv) setK(nv)
          }}
          C={C}
        />
      </div>
    </div>
  )
}

// Inline viz: 02.1.7 Finite Decimal Expansion
// Factor n, show its prime list; n=2^a·5^b implies 1/n terminates. Otherwise
// repeats. Computed live from factor(n).
function Fo_FiniteDecimalVisRefined() {
  const C = useVizColors()
  const [n, setN] = useState(40)
  const f = factor(n)
  const primes = Object.keys(f)
    .map(Number)
    .sort((a, b) => a - b)
  const ok = primes.every(p => p === 2 || p === 5)
  const list = []
  primes.forEach(p => {
    for (let i = 0; i < f[p]; i++) list.push(p)
  })
  return (
    <div style={{ width: '100%', color: C.fg }}>
      <svg viewBox="0 0 520 275" width="100%" style={{ display: 'block' }}>
        <g fontFamily="'D-DIN', ui-monospace, monospace">
          <text x={260} y={32} fill={C.fg} textAnchor="middle" fontSize={FONT_VALUE}>
            {n}
          </text>
          {list.map((p, i) => {
            const x = 60 + (i + 0.5) * (400 / Math.max(1, list.length))
            const okP = p === 2 || p === 5
            return (
              <g key={i}>
                <line x1={260} y1={42} x2={x} y2={178} stroke={C.dim} />
                <circle
                  cx={x}
                  cy={200}
                  r={16}
                  fill="none"
                  stroke={okP ? C.fg : C.dim}
                  strokeWidth={okP ? 2 : 1}
                  strokeDasharray={okP ? null : '3 3'}
                />
                <text
                  x={x}
                  y={205}
                  fill={okP ? C.fg : C.dim}
                  textAnchor="middle"
                  fontSize={FONT_TEX}
                >
                  {p}
                </text>
              </g>
            )
          })}
          <text
            x={260}
            y={258}
            fill={C.fg}
            textAnchor="middle"
            fontSize={FONT_CONTROL}
            opacity={0.85}
            letterSpacing="0.04em"
          >
            <tspan>{`1/${n}`}</tspan>
            <tspan dx={10} letterSpacing="0.06em">
              {ok ? 'TERMINATES' : 'REPEATS'}
            </tspan>
          </text>
        </g>
      </svg>
      <Slider
        label="n"
        value={n}
        min={2}
        max={120}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

function useConfig() {
  const C = useVizColors()
  const config = {
    cssPrefix: 'frc',
    documentTitle: 'Fraction Operations - AETHER',
    learning: {
      category: 'Part 2',
      title: 'Fraction Operations',
      subtitle:
        'Addition, subtraction, multiplication, and division of fractions. Every formula proved from one definition.',
      sections: [
        /* ADDITION */
        <>
          <h2>Addition of Fractions</h2>
          <p>
            <strong>Addition</strong> of fractions means joining two segments end to end on the
            number line.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              {`You place a segment of length $\\frac{2}{3}$ and one of length $\\frac{5}{7}$ end to end from 0. Where do you land?`}
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{2}{3} + \\frac{5}{7} = \\frac{14 + 15}{21} = \\frac{29}{21} = 1\\frac{8}{21}$.`}</p>
            </details>
          </div>

          <h3>The Addition Formula</h3>
          <p>{`For any fractions $\\frac{k}{\\ell}$ and $\\frac{m}{n}$:`}</p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\frac{k}{\\ell} + \\frac{m}{n} = \\frac{kn + \\ell m}{\\ell n}$$`}
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Correct: Common Denominator</span>
              <p>{`$\\frac{1}{2} + \\frac{1}{3} = \\frac{3+2}{6} = \\frac{5}{6}$`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Wrong: Adding Tops and Bottoms</span>
              <p>{`$\\frac{1}{2} + \\frac{1}{3} \\neq \\frac{2}{5}$. Different-sized pieces cannot be added directly. That tops-and-bottoms result has a name, the mediant, but it is not the sum.`}</p>
            </div>
          </div>

          <h3>Derivation from the Number Line</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <ol className="lrn-list">
                <li>{`Rewrite with common denominator $\\ell n$: $\\frac{k}{\\ell} = \\frac{kn}{\\ell n}$ and $\\frac{m}{n} = \\frac{m\\ell}{\\ell n}$.`}</li>
                <li>{`Now both fractions measure in units of $\\frac{1}{\\ell n}$.`}</li>
                <li>{`Joining $kn$ units with $m\\ell$ units gives $kn + m\\ell$ units.`}</li>
                <li>{`Total: $\\frac{kn + m\\ell}{\\ell n}$.`}</li>
              </ol>
            </div>
          </div>

          <p>
            <strong>{`Example: $\\frac{2}{3} + \\frac{5}{7}$`}</strong>
          </p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\frac{2}{3} + \\frac{5}{7} = \\frac{2 \\times 7 + 3 \\times 5}{3 \\times 7} = \\frac{14 + 15}{21} = \\frac{29}{21} = 1\\frac{8}{21}$$`}
          </div>

          <VizFigure title="Fraction Addition" size="body" aspect="auto">
            <Fo_AdditionNumberLineRefined />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does using a common denominator let you just add the numerators?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`A common denominator means both fractions use the same-sized pieces. Like adding 3 apples and 5 apples: same unit, so just add the counts. With denominator $\\ell n$, you add $kn$ pieces to $m\\ell$ pieces.`}
              </p>
            </details>
          </div>

          <h3>Same-Denominator Shortcut</h3>
          <p>{`Same-sized pieces just add. So $\\frac{2}{5} + \\frac{1}{5} = \\frac{3}{5}$. When the denominators match:`}</p>
          <div className="lrn-eq">{`$$\\frac{k}{\\ell} + \\frac{m}{\\ell} = \\frac{k + m}{\\ell}$$`}</div>

          <h3>Mixed Numbers</h3>
          <p>
            A <strong>mixed number</strong> combines a whole number with a proper fraction.
          </p>
          <p>
            <strong>{`Example: $4\\frac{2}{3}$`}</strong>
          </p>
          <p>{`This means $4 + \\frac{2}{3}$. To convert to an improper fraction:`}</p>
          <div className="lrn-eq">{`$$4\\frac{2}{3} = \\frac{4 \\times 3 + 2}{3} = \\frac{14}{3}$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Because $4 = \\frac{12}{3}$, and $\\frac{12}{3} + \\frac{2}{3} = \\frac{14}{3}$.`}</p>
          </div>

          <h3>LCM Refinement</h3>
          <p>{`The formula always works. Using the LCM (least common multiple) instead gives smaller intermediate numbers.`}</p>
          <p>
            <strong>{`Example: $\\frac{5}{6} + \\frac{7}{4}$`}</strong>
          </p>
          <p>{`Formula: $\\frac{20 + 42}{24} = \\frac{62}{24} = \\frac{31}{12}$. LCM(6, 4) = 12: $\\frac{10}{12} + \\frac{21}{12} = \\frac{31}{12}$.`}</p>
          <p>Both give the same answer. The LCM method starts with a smaller denominator.</p>

          <h3>Addition of Decimals</h3>
          <p>Adding decimals is fraction addition in disguise.</p>
          <p>
            <strong>{`Example: $4.0451 + 3.27$`}</strong>
          </p>
          <p>{`Align decimal places: $4.0451 + 3.2700 = 7.3151$. Aligning creates equal denominators (both in ten-thousandths), so the numerators add directly.`}</p>
        </>,

        /* SUBTRACTION */
        <>
          <h2>Subtraction of Fractions</h2>
          <p>
            <strong>Subtraction</strong> is the reverse of addition. On the number line, {`$A - B$`}{' '}
            is the distance from {`$B$`} to {`$A$`}.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What is {`$\\frac{7}{9}$`} minus {`$\\frac{5}{11}$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{7}{9} - \\frac{5}{11} = \\frac{77 - 45}{99} = \\frac{32}{99}$.`}</p>
            </details>
          </div>

          <h3>The Subtraction Formula</h3>
          <p>{`For $\\frac{k}{\\ell} \\geq \\frac{m}{n}$:`}</p>
          <div className="lrn-eq lrn-eq-display">
            {`$$\\frac{k}{\\ell} - \\frac{m}{n} = \\frac{kn - \\ell m}{\\ell n}$$`}
          </div>
          <p>{`When the denominators match, just subtract the tops: $\\frac{4}{7} - \\frac{1}{7} = \\frac{3}{7}$. In general $\\frac{k}{\\ell} - \\frac{m}{\\ell} = \\frac{k - m}{\\ell}$.`}</p>

          <VizFigure title="Fraction Subtraction" size="body" aspect="620/208">
            <Fo_SubtractionNumberLineRefined />
          </VizFigure>

          <h3>Proof from Addition</h3>
          <p>{`$A - B = C$ means $C + B = A$. So $\\frac{k}{\\ell} - \\frac{m}{n}$ is the $C$ with $C + \\frac{m}{n} = \\frac{k}{\\ell}$.`}</p>
          <div className="lrn-eq">
            {`$$\\frac{kn - \\ell m}{\\ell n} + \\frac{m}{n} = \\frac{(kn - \\ell m) + \\ell m}{\\ell n} = \\frac{kn}{\\ell n} = \\frac{k}{\\ell}$$`}
          </div>
          <p>
            Adding {`$B$`} back to the result lands on {`$A$`} again. That is the test of a correct
            subtraction. One common-denominator rewrite drives both. Addition joins segments.
            Subtraction measures the gap.
          </p>

          <h3>Comparing Fractions by Subtraction</h3>
          <p>
            <strong>{`Example: Which is closer to 1: $\\frac{7}{9}$ or $\\frac{5}{11}$?`}</strong>
          </p>
          <p>Compute the distance from each to 1:</p>
          <div className="lrn-eq">
            <span>{`$$1 - \\frac{7}{9} = \\frac{2}{9}$$`}</span>
            <span>{`$$1 - \\frac{5}{11} = \\frac{6}{11}$$`}</span>
          </div>
          <p>{`Cross-multiply: $2 \\times 11 = 22$ and $9 \\times 6 = 54$. Since $22 < 54$, $\\frac{2}{9} < \\frac{6}{11}$.`}</p>
          <p>{`So $\\frac{7}{9}$ is closer to 1.`}</p>
        </>,

        /* CONCEPT OF "m/n OF k/l" */
        <>
          <h2>{`The Concept of "$\\frac{m}{n}$ of $\\frac{k}{\\ell}$"`}</h2>
          <p>
            {`The phrase "$\\frac{m}{n}$ of $\\frac{k}{\\ell}$" means: divide $\\frac{k}{\\ell}$ into $n$ equal parts and take $m$ of them. You ran $\\frac{3}{4}$ of a $\\frac{5}{8}$-mile track. How far? This section answers that.`}
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`What is $\\frac{2}{3}$ of $\\frac{5}{7}$?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{2}{3}$ of $\\frac{5}{7} = \\frac{2 \\times 5}{3 \\times 7} = \\frac{10}{21}$.`}</p>
            </details>
          </div>

          <h3>How It Works</h3>
          <p>{`To find $\\frac{m}{n}$ of $\\frac{k}{\\ell}$:`}</p>
          <ol className="lrn-list">
            <li>{`Divide the segment from 0 to $\\frac{k}{\\ell}$ into $n$ equal parts. Each part has length $\\frac{k}{n\\ell}$.`}</li>
            <li>{`Take $m$ of those parts. Total length: $\\frac{mk}{n\\ell}$.`}</li>
          </ol>
          <p>{`This is the same as $\\frac{m}{n} \\times \\frac{k}{\\ell}$. We prove this formally below.`}</p>

          <VizFigure title="Fraction of a Number" size="body" aspect="16/9">
            <Fo_FractionOfNumberLineRefined />
          </VizFigure>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`"$\\frac{2}{3}$ of $\\frac{1}{2}$"`}</span>
              <p>{`Means $\\frac{2}{3} \\times \\frac{1}{2} = \\frac{1}{3}$. Multiplication.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`"$\\frac{2}{3} + \\frac{1}{2}$"`}</span>
              <p>{`Means $\\frac{7}{6} = 1\\frac{1}{6}$. Addition. Completely different.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`You compute $\\frac{2}{3}$ of $\\frac{5}{7}$ and get $\\frac{10}{21}$. Why is this less than $\\frac{5}{7}$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Taking 2 out of 3 equal parts gives you less than the whole. Since $\\frac{2}{3} < 1$, multiplying $\\frac{5}{7}$ by something less than 1 shrinks it. The result $\\frac{10}{21}$ is smaller than $\\frac{5}{7} = \\frac{15}{21}$.`}</p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Equivalent fractions give $\\frac{k}{\\ell} = \\frac{nk}{n\\ell}$. Dividing $[0, \\frac{k}{\\ell}]$ into $n$ equal parts means each part is $\\frac{k}{n\\ell}$. Taking $m$ of them gives $\\frac{mk}{n\\ell}$.`}
            </p>
          </div>
        </>,

        /* MULTIPLICATION */
        <>
          <h2>Multiplication of Fractions</h2>
          <p>
            <strong>Multiplication</strong> of fractions is defined as the area of a rectangle.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What is the area of a rectangle with sides {`$\\frac{1}{3}$`} and {`$\\frac{1}{4}$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12}$.`}</p>
            </details>
          </div>

          <h3>The Product Formula</h3>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{m}{n} \\times \\frac{k}{\\ell} = \\frac{mk}{n\\ell}$$`}</div>
          <p>Multiply the numerators. Multiply the denominators.</p>

          <h3>Derivation from the Area Model</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <ol className="lrn-list">
                <li>{`A unit square has area 1. Divide it into $n$ rows and $\\ell$ columns.`}</li>
                <li>{`This creates $n\\ell$ small rectangles, each with area $\\frac{1}{n\\ell}$.`}</li>
                <li>{`A rectangle with sides $\\frac{m}{n}$ and $\\frac{k}{\\ell}$ covers $m$ rows and $k$ columns.`}</li>
                <li>{`It contains $mk$ small rectangles. Its area is $\\frac{mk}{n\\ell}$.`}</li>
              </ol>
            </div>
          </div>

          <p>
            <strong>{`Example: $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$`}</strong>
          </p>

          <VizFigure title="Fraction Multiplication Area" size="body" aspect="4/3">
            <Fo_FractionMultiplicationAreaRefined />
          </VizFigure>

          <h3>Multiplication of Decimals</h3>
          <p>
            A decimal is just a fraction with a power of ten on the bottom. So the fraction product
            rule handles decimals too.
          </p>
          <div className="lrn-eq">{`$$1.25 \\times 0.064 = \\frac{125}{100} \\times \\frac{64}{1000} = \\frac{8000}{100000} = 0.08$$`}</div>
          <p>{`The bottoms multiply: $100 \\times 1000 = 10^5$. So you add the decimal places: two plus three gives five.`}</p>

          <h3>The Distributive Law</h3>
          <div className="lrn-eq lrn-eq-display">{`$$A(B + C) = AB + AC$$`}</div>
          <p>
            {`The same distributive law you know for whole numbers now holds over fractions. A rectangle with sides $A$ and $(B + C)$ splits into two: one of area $AB$, the other $AC$.`}
          </p>

          <VizFigure title="Fraction Distributive Law" size="body" aspect="16/9">
            <Fo_FractionDistributiveLawRefined />
          </VizFigure>

          <h3>Whole Number Times Fraction</h3>
          <p>{`$m \\times \\frac{k}{\\ell} = \\frac{mk}{\\ell}$. This is $m$ copies joined end to end.`}</p>
          <p>
            <strong>{`Example: $5 \\times \\frac{2}{3} = \\frac{10}{3} = 3\\frac{1}{3}$`}</strong>
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Because $5 \\times \\frac{2}{3}$ means $\\frac{2}{3} + \\frac{2}{3} + \\frac{2}{3} + \\frac{2}{3} + \\frac{2}{3} = \\frac{10}{3}$.`}</p>
          </div>
        </>,

        /* SECOND INTERPRETATION (17.7) */
        <>
          <h2>Multiplication as &ldquo;Of&rdquo;</h2>
          <p>
            {`The area model defines multiplication one way. The "of" idea defines it another. This section proves they always agree.`}
          </p>

          <p>
            {`One fact powers the proof: for any fraction $A$ and any nonzero fraction $B$, exactly one fraction $C$ satisfies $A = CB$. That $C$ is what we call $A/B$. This is the `}
            <strong>uniqueness lemma</strong>
            {`.`}
          </p>
          <p>
            {`At least one $C$ exists: multiply $A$ by the flipped $B$ and you have one. Only one can work. Try $C \\times \\frac{2}{3} = 1$: only $C = \\frac{3}{2}$ fits. Check: $\\frac{3}{2} \\times \\frac{2}{3} = \\frac{6}{6} = 1$. No other fraction lands on 1. One target, one answer.`}
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A bucket holds 4.5 gallons. You need $5\\frac{2}{3}$ buckets. How many gallons total?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{17}{3} \\times \\frac{9}{2} = \\frac{153}{6} = 25.5$ gallons.`}</p>
            </details>
          </div>

          <h3>Proof (Three Cases)</h3>
          <p>
            <strong>{`Case I ($n = 1$):`}</strong>
            {` $m \\times \\frac{k}{\\ell} = m$ copies of $\\frac{k}{\\ell}$. Repeated addition.`}
          </p>
          <p>
            <strong>{`Case II ($m = 1$):`}</strong>
            {` $\\frac{1}{n} \\times \\frac{k}{\\ell} = \\frac{k}{n\\ell}$. One part when $\\frac{k}{\\ell}$ is split into $n$ parts.`}
          </p>
          <p>
            <strong>Case III (general):</strong>
            {` $\\frac{m}{n} \\times \\frac{k}{\\ell} = m \\times (\\frac{1}{n} \\times \\frac{k}{\\ell})$. Take $m$ joined parts after splitting $\\frac{k}{\\ell}$ into $n$ parts.`}
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does breaking $\\frac{m}{n}$ into $m$ copies of $\\frac{1}{n}$ simplify the proof?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Case II handles $\\frac{1}{n}$ (one part). Case III takes $m$ copies of that one part. The general case reduces to two simpler cases already proved.`}</p>
            </details>
          </div>

          <h3>Worked Examples</h3>
          <p>
            <strong>Example 1:</strong>
            {` A container holds $6\\frac{1}{3}$ gallons. A bucket holds $2\\frac{1}{2}$ gallons. How many buckets?`}
          </p>
          <p>{`We need $C$ with $C \\times \\frac{5}{2} = \\frac{19}{3}$. By the uniqueness lemma, $C = \\frac{19}{3} \\times \\frac{2}{5} = \\frac{38}{15}$.`}</p>

          <p>
            <strong>Example 2:</strong>
            {` A ribbon makes $11\\frac{1}{3}$ bows, each $\\frac{7}{8}$ foot. How long is the ribbon?`}
          </p>
          <div className="lrn-eq">{`$$\\frac{34}{3} \\times \\frac{7}{8} = \\frac{238}{24} = \\frac{119}{12} = 9\\frac{11}{12} \\text{ feet}$$`}</div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>In Example 1, why must you use the uniqueness lemma instead of guessing?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The lemma guarantees exactly one fraction $C$ satisfies $A = CB$. It also gives the formula: $C = A \\times B^{-1}$. Guessing might work but does not prove the answer is unique.`}</p>
            </details>
          </div>

          <h3>The Word &ldquo;Of&rdquo;</h3>
          <p>
            {`"Three-fifths of a rod" equals $\\frac{3}{5} \\times (\\text{rod length})$. The word "of" is not a definition. It is a result of the area-based multiplication theorem.`}
          </p>
          <p>
            Start with the precise definition (area). Then prove that &ldquo;of&rdquo; works. The
            three cases above cover every fraction, so nothing is left out.
          </p>
        </>,

        /* DIVISION */
        <>
          <h2>Division of Fractions</h2>
          <p>
            <strong>Division</strong>
            {` is defined by: $\\frac{A}{B} = C$ means the same as $A = CB$.`}
          </p>

          <div className="lrn-warning">
            <p>{`You cannot divide by zero. $B = 0$ is not allowed because no number $C$ satisfies $A = C \\times 0$ when $A \\neq 0$.`}</p>
          </div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`How many pieces of $\\frac{5}{3}$ meters fit in a $43\\frac{3}{8}$ meter rod?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Divide the rod length by the piece length: $\\frac{347}{8} \\div \\frac{5}{3}$. Invert and multiply, then read off the whole-number part. The full solve is in Applications below.`}</p>
            </details>
          </div>

          <h3>Informal Overview</h3>
          <p>
            <strong>Key idea:</strong> Division asks &ldquo;how many copies of B make up A?&rdquo;
          </p>
          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Example 1</span>
              <p className="lrn-step-content">{`$\\frac{1}{\\frac{1}{n}} = n$. How many copies of $\\frac{1}{n}$ make 1? Answer: $n$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Example 2</span>
              <p className="lrn-step-content">{`$\\frac{5}{\\frac{1}{3}} = 15$. Three copies of $\\frac{1}{3}$ make 1. So 15 copies make 5.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Example 3</span>
              <p className="lrn-step-content">{`$\\frac{\\frac{15}{4}}{\\frac{3}{4}} = 5$. Both share denominator 4, so in units of $\\frac{1}{4}$ this is just $\\frac{15 \\text{ units}}{3 \\text{ units}} = 5$.`}</p>
            </div>
          </div>

          <h3>The Invert-and-Multiply Rule</h3>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{\\frac{m}{n}}{\\frac{k}{\\ell}} = \\frac{m}{n} \\times \\frac{\\ell}{k}$$`}</div>
          <p>To divide by a fraction, multiply by its reciprocal (flip it).</p>

          <h3>Derivation</h3>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <ol className="lrn-list">
                <li>{`We need $C$ such that $\\frac{m}{n} = C \\times \\frac{k}{\\ell}$.`}</li>
                <li>By the uniqueness lemma, exactly one such C exists.</li>
                <li>{`The reciprocal of $\\frac{k}{\\ell}$ is $\\frac{\\ell}{k}$, satisfying $\\frac{k}{\\ell} \\times \\frac{\\ell}{k} = 1$.`}</li>
                <li>{`Multiply both sides by $\\frac{\\ell}{k}$: $\\frac{m}{n} \\times \\frac{\\ell}{k} = C \\times 1 = C$.`}</li>
              </ol>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Invert-and-multiply is not a separate rule. It follows directly from the definition: division asks for $C$ with $A = CB$. The uniqueness lemma gives $C = A \\times B^{-1}$.`}</p>
          </div>

          <h3>The Reciprocal</h3>
          <p>{`The reciprocal of $B = \\frac{k}{\\ell}$ is $B^{-1} = \\frac{\\ell}{k}$. It satisfies $B \\times B^{-1} = 1$.`}</p>

          <h3>Applications</h3>
          <p>
            <strong>Cutting a rod.</strong>
            {` Rod is $43\\frac{3}{8}$ m. Pieces are $\\frac{5}{3}$ m each.`}
          </p>
          <div className="lrn-eq">{`$$\\frac{\\frac{347}{8}}{\\frac{5}{3}} = \\frac{347}{8} \\times \\frac{3}{5} = \\frac{1041}{40} = 26\\frac{1}{40}$$`}</div>
          <p>{`26 complete pieces. The leftover is $\\frac{1}{40}$ of one piece length.`}</p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the fractional part {`$\\frac{1}{40}$`} represent a fraction of the piece,
              not the rod?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$\\frac{A}{B} = 26\\frac{1}{40}$ means $A = 26\\frac{1}{40} \\times B$. The $\\frac{1}{40}$ multiplies $B$ (piece length), not $A$ (rod length).`}</p>
            </details>
          </div>

          <p>
            <strong>Hiking.</strong>
            {` Trail is $12\\frac{1}{3}$ miles. Speed is $3\\frac{1}{2}$ mph.`}
          </p>
          <div className="lrn-eq">{`$$T = \\frac{\\frac{37}{3}}{\\frac{7}{2}} = \\frac{37}{3} \\times \\frac{2}{7} = \\frac{74}{21} = 3\\frac{11}{21} \\text{ hours}$$`}</div>
        </>,

        /* FALSE DOCTRINES */
        <>
          <h2>False Doctrines in Division</h2>
          <p>
            Three common approaches to fraction division are wrong. Knowing why protects you from
            circular reasoning.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If someone says &ldquo;division is repeated subtraction&rdquo; for fractions, what
              goes wrong?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It gives two numbers (quotient and remainder), not one. It also breaks when the
                divisor exceeds the dividend.
              </p>
            </details>
          </div>

          <h3>False Doctrine 1: Repeated Subtraction</h3>
          <p>{`Subtract $\\frac{3}{4}$ from 5 repeatedly. After 6 times, $\\frac{1}{2}$ remains. The "answer" is 6 with remainder $\\frac{1}{2}$.`}</p>
          <div className="lrn-warning">
            <p>{`Division must give one number, not a pair. This also fails for "$\\frac{5}{3}$'s in $\\frac{1}{8}$" since you cannot subtract even once.`}</p>
          </div>

          <h3>False Doctrine 2: Circular Equivalent Fractions</h3>
          <p>{`This writes: $\\frac{m/n}{k/\\ell} = \\frac{(m/n) \\times \\ell n}{(k/\\ell) \\times \\ell n} = \\frac{m\\ell}{nk}$`}</p>
          <div className="lrn-warning">
            <p>
              The equivalent fractions theorem applies to whole number multipliers only. This
              argument uses it with fraction multipliers. We have not proved that step yet. The
              argument assumes what it tries to prove.
            </p>
          </div>

          <h3>False Doctrine 3: &ldquo;New Unit&rdquo;</h3>
          <div className="lrn-warning">
            <p>
              Same circular reasoning as Doctrine 2, just disguised differently. It declares the
              divisor the new unit. Then it computes in those new units. But computing in fractional
              units needs fraction multiplication. And that needs fraction division to be defined
              first.
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does circular reasoning produce a correct answer but still fail as a proof?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A circular proof assumes its conclusion. It gives the right answer by accident, not
                by logic. It cannot tell you WHY the answer is right or guarantee it works in all
                cases.
              </p>
            </details>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The correct proof starts from the definition ($A = CB$) and uses the uniqueness lemma. No circular step. Every line follows from something already proved.`}</p>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Correct Approach</span>
              <p>{`Derive from $A = CB$ and the uniqueness lemma. Rigorous.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">False Approaches</span>
              <p>Assume division works before defining it. Circular.</p>
            </div>
          </div>
        </>,

        /* DIVISION OF DECIMALS */
        <>
          <h2>Division of Decimals</h2>
          <p>
            A decimal is just a fraction with a power of ten on the bottom. So every fraction rule
            you just learned applies. To divide decimals, write each as a fraction and invert and
            multiply.
          </p>
          <div className="lrn-eq">{`$$\\frac{2.0498}{14.3} = \\frac{20498}{10000} \\times \\frac{10}{143} = \\frac{20498}{143000}$$`}</div>
          <p>
            {`Now $143000 = 2^3 \\times 5^3 \\times 11 \\times 13$. The 11 and 13 are not 2 or 5, so this answer does not become a finite decimal. It repeats forever. The next section explains exactly when a fraction terminates.`}
          </p>
        </>,

        /* FINITE VS INFINITE DECIMALS */
        <>
          <h2>Finite vs. Infinite Decimals</h2>
          <p>
            Multiplying fractions tells you when a fraction becomes a finite decimal. A finite
            decimal is just a fraction with a power of ten on the bottom. So {`$\\frac{3}{8}$`} is
            finite because {`$\\frac{3}{8} = \\frac{375}{1000} = 0.375$`}. You can rewrite the
            bottom as a power of ten.
          </p>
          <p>
            This works only when {`$n$`}&rsquo;s only prime factors are 2 and 5. The reason:{' '}
            {`$10^k = 2^k \\times 5^k$`}, so a power of ten is built from just 2s and 5s. A 3 or a 7
            on the bottom can never be cancelled into a power of ten. That is why{' '}
            {`$\\frac{1}{3} = 0.333\\ldots$`} never stops.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Is {`$\\frac{7}{12}$`} a finite or infinite decimal? What about {`$\\frac{7}{40}$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$\\frac{7}{12}$ is infinite ($12 = 2^2 \\times 3$, the 3 prevents it). $\\frac{7}{40}$ is finite ($40 = 2^3 \\times 5$, only 2s and 5s).`}</p>
            </details>
          </div>

          <div className="lrn-insight">
            <p>{`A reduced fraction $\\frac{m}{n}$ is a finite decimal in one case only. That case: $n = 2^a \\times 5^b$, so $n$'s only prime factors are 2 and 5.`}</p>
          </div>

          <VizFigure title="Finite Decimal Expansion" size="body" aspect="16/9">
            <Fo_FiniteDecimalVisRefined />
          </VizFigure>
          <p>{`Slide $n$ and watch: when every prime factor is a 2 or a 5, $\\frac{1}{n}$ terminates. Any other prime makes it repeat.`}</p>
        </>
      ]
    },

    practice: [
      {
        q: 'Compute $\\frac{3}{8} + \\frac{5}{12}$. Show every step.',
        a: '$\\frac{3}{8} + \\frac{5}{12} = \\frac{3 \\times 12 + 8 \\times 5}{8 \\times 12} = \\frac{36 + 40}{96} = \\frac{76}{96} = \\frac{19}{24}$. Cancel by 4.'
      },
      {
        q: 'Compute $\\frac{7}{9} - \\frac{4}{15}$.',
        a: '$\\frac{7}{9} - \\frac{4}{15} = \\frac{7 \\times 15 - 9 \\times 4}{9 \\times 15} = \\frac{105 - 36}{135} = \\frac{69}{135} = \\frac{23}{45}$.'
      },
      {
        q: 'A recipe needs $\\frac{2}{3}$ cup of sugar and $\\frac{5}{8}$ cup of butter. What is the total?',
        a: '$\\frac{2}{3} + \\frac{5}{8} = \\frac{16 + 15}{24} = \\frac{31}{24} = 1\\frac{7}{24}$ cups.'
      },
      {
        q: 'What is $\\frac{2}{5}$ of $\\frac{3}{7}$? Compute it.',
        a: '"$\\frac{2}{5}$ of $\\frac{3}{7}$" means divide $[0, \\frac{3}{7}]$ into 5 parts and take 2. Each part is $\\frac{3}{35}$. Two parts: $\\frac{6}{35}$. This equals $\\frac{2}{5} \\times \\frac{3}{7} = \\frac{6}{35}$.'
      },
      {
        q: 'Compute $\\frac{3}{7} \\times \\frac{14}{9}$.',
        a: '$\\frac{3 \\times 14}{7 \\times 9} = \\frac{42}{63} = \\frac{2}{3}$. Cancel 21 from both.'
      },
      {
        q: 'A garden is $\\frac{2}{3}$ acre. You plant flowers on $\\frac{3}{4}$ of it. How many acres of flowers?',
        a: '$\\frac{3}{4} \\times \\frac{2}{3} = \\frac{6}{12} = \\frac{1}{2}$ acre.'
      },
      {
        q: 'Compute $\\frac{5}{8} \\div \\frac{3}{4}$. Show why invert-and-multiply works.',
        a: '$\\frac{5}{8} \\times \\frac{4}{3} = \\frac{20}{24} = \\frac{5}{6}$. We need $C$ with $\\frac{5}{8} = C \\times \\frac{3}{4}$. The uniqueness lemma gives $C = \\frac{5}{8} \\times \\frac{4}{3}$. Check: $\\frac{5}{6} \\times \\frac{3}{4} = \\frac{15}{24} = \\frac{5}{8}$.'
      },
      {
        q: 'A rod is $15\\frac{3}{4}$ meters long. You cut pieces of $\\frac{7}{8}$ meter. How many complete pieces?',
        a: '$\\frac{63}{4} \\div \\frac{7}{8} = \\frac{63}{4} \\times \\frac{8}{7} = \\frac{504}{28} = 18$ pieces exactly.'
      },
      {
        q: 'Convert $7\\frac{2}{5}$ to an improper fraction.',
        a: '$7\\frac{2}{5} = \\frac{7 \\times 5 + 2}{5} = \\frac{37}{5}$. Rewrite 7 as $\\frac{35}{5}$, then $\\frac{35}{5} + \\frac{2}{5} = \\frac{37}{5}$.'
      },
      {
        q: 'Why does the LCM method give the same answer as the general formula?',
        a: 'Both produce equivalent fractions. The formula gives $\\frac{kn + lm}{ln}$. The LCM method gives a smaller common denominator. Both name the same point on the number line.'
      },
      {
        q: 'Verify the distributive law: $\\frac{2}{3} \\times (\\frac{1}{4} + \\frac{5}{6})$.',
        a: 'Left: $\\frac{2}{3} \\times \\frac{13}{12} = \\frac{26}{36} = \\frac{13}{18}$. Right: $\\frac{2}{3} \\times \\frac{1}{4} + \\frac{2}{3} \\times \\frac{5}{6} = \\frac{1}{6} + \\frac{5}{9} = \\frac{3}{18} + \\frac{10}{18} = \\frac{13}{18}$. Equal.'
      },
      {
        q: 'Compute 1.25 x 0.064 and explain why decimal places add.',
        a: '0.08. Denominators multiply: 100 x 1000 = $10^5$. Product has 5 decimal places (2 + 3).'
      },
      {
        q: "A bucket holds 4.5 gallons. A tank needs $5\\frac{2}{3}$ buckets. What is the tank's capacity?",
        a: '$\\frac{17}{3} \\times \\frac{9}{2} = \\frac{153}{6} = 25.5$ gallons.'
      },
      {
        q: 'What is the multiplicative inverse of $\\frac{7}{11}$? Why does it matter?',
        a: '$\\frac{11}{7}$, because $\\frac{7}{11} \\times \\frac{11}{7} = 1$. Division by $\\frac{7}{11}$ equals multiplication by $\\frac{11}{7}$.'
      },
      {
        q: 'A trail is $12\\frac{1}{3}$ miles. Speed is $3\\frac{1}{2}$ mph. How long is the hike?',
        a: '$\\frac{37}{3} \\div \\frac{7}{2} = \\frac{37}{3} \\times \\frac{2}{7} = \\frac{74}{21} = 3\\frac{11}{21}$ hours.'
      },
      {
        q: 'Why is the "repeated subtraction" approach to fraction division wrong?',
        a: 'It gives a pair (quotient + remainder), not one number. Division must produce exactly one number. It also fails when the divisor exceeds the dividend.'
      },
      {
        q: 'What is wrong with proving invert-and-multiply using equivalent fractions?',
        a: 'The equivalent fractions theorem applies to whole number multipliers only. The argument uses fraction multipliers without proof. It assumes what it tries to prove. Circular reasoning.'
      },
      {
        q: 'Is $\\frac{7}{12}$ a finite or infinite decimal? Is $\\frac{7}{40}$?',
        a: "$\\frac{7}{12}$ is infinite: $12 = 2^2 \\times 3$, and 3 is not 2 or 5. $\\frac{7}{40}$ is finite: $40 = 2^3 \\times 5$, only 2's and 5's."
      },
      {
        q: 'Convert $\\frac{15}{32}$ to a decimal.',
        a: '$0.46875$. Since $32 = 2^5$, use $10^5$: $\\frac{15 \\times 100000}{32} = 46875$. So $\\frac{15}{32} = 0.46875$.'
      },
      {
        q: 'Express the division $\\frac{2.0498}{14.3}$ as whole number division. Does it terminate?',
        a: '$\\frac{20498}{143000}$. Convert: $2.0498 = \\frac{20498}{10000}$, $14.3 = \\frac{143}{10}$. Then $\\frac{20498}{10000} \\times \\frac{10}{143} = \\frac{20498}{143000}$. It does not terminate: $143000 = 2^3 \\times 5^3 \\times 11 \\times 13$, and 11 and 13 are not 2 or 5, so the decimal repeats forever.'
      },
      {
        q: 'Which fraction is closer to 1: $\\frac{11}{13}$ or $\\frac{8}{9}$?',
        a: '$\\frac{8}{9}$ is closer. Distance of $\\frac{11}{13}$ from 1: $\\frac{2}{13}$. Distance of $\\frac{8}{9}$: $\\frac{1}{9}$. Cross-multiply: $2 \\times 9 = 18 > 13 \\times 1 = 13$. So $\\frac{2}{13} > \\frac{1}{9}$, meaning $\\frac{8}{9}$ is closer.'
      },
      {
        q: 'Compute $\\frac{11}{15} - \\frac{3}{10}$.',
        a: '$\\frac{110 - 45}{150} = \\frac{65}{150} = \\frac{13}{30}$.'
      },
      {
        q: 'What is $\\frac{7}{8} \\times \\frac{4}{21}$?',
        a: '$\\frac{28}{168} = \\frac{1}{6}$.'
      },
      {
        q: 'Compute $\\frac{9}{4} \\div \\frac{3}{8}$.',
        a: '$\\frac{9}{4} \\times \\frac{8}{3} = \\frac{72}{12} = 6$. Check: $6 \\times \\frac{3}{8} = \\frac{18}{8} = \\frac{9}{4}$.'
      },
      {
        q: 'Explain why adding fractions by "adding tops and bottoms" ($\\frac{1}{2} + \\frac{1}{3} = \\frac{2}{5}$) is wrong.',
        a: '$\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$, not $\\frac{2}{5}$. Without common denominators, the numerators count different-sized pieces. Adding them is like adding 3 feet and 2 meters.'
      },
      {
        q: 'Prove that $\\frac{k}{l} \\times \\frac{l}{k} = 1$.',
        a: '$\\frac{k}{l} \\times \\frac{l}{k} = \\frac{kl}{lk} = 1$. Any nonzero number times its reciprocal equals 1.'
      },
      {
        q: 'If $A$ and $B$ are positive fractions with $A < B$, prove that $\\frac{1}{A} > \\frac{1}{B}$.',
        a: '$A < B$ means $kn < lm$. Reciprocals: $\\frac{1}{A} = \\frac{l}{k}$, $\\frac{1}{B} = \\frac{n}{m}$. Cross-multiply the reciprocals: $lm$ vs $kn$. Since $kn < lm$, the inequality reverses.'
      },
      {
        q: 'What is the cancellation property for products? Show $\\frac{l}{k} \\times \\frac{kn}{lm} = \\frac{n}{m}$.',
        a: '$\\frac{l}{k} \\times \\frac{kn}{lm} = \\frac{lkn}{klm}$. Cancel $l$ from top and bottom: $\\frac{kn}{km}$. Cancel $k$: $\\frac{n}{m}$.'
      },
      {
        q: 'A ribbon is $9\\frac{11}{12}$ feet. How many bows of $\\frac{7}{8}$ foot?',
        a: '$\\frac{119}{12} \\div \\frac{7}{8} = \\frac{119}{12} \\times \\frac{8}{7} = \\frac{952}{84} = \\frac{34}{3} = 11\\frac{1}{3}$. So 11 complete bows.'
      },
      {
        q: 'Predict: If you multiply $\\frac{8}{9}$ by a number less than 1, is the result bigger or smaller than $\\frac{8}{9}$?',
        a: 'Smaller. Multiplying by less than 1 shrinks the value.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Fraction Operations',
      sections: [
        <>
          <h2>Four Operations</h2>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Addition: } \\frac{k}{\\ell} + \\frac{m}{n} = \\frac{kn + \\ell m}{\\ell n}$$`}</div>
          <div className="lrn-eq">{`$$\\text{Same denom: } \\frac{k}{\\ell} + \\frac{m}{\\ell} = \\frac{k + m}{\\ell}$$`}</div>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Subtraction: } \\frac{k}{\\ell} - \\frac{m}{n} = \\frac{kn - \\ell m}{\\ell n}$$`}</div>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Product: } \\frac{m}{n} \\times \\frac{k}{\\ell} = \\frac{mk}{n\\ell}$$`}</div>
          <div className="lrn-eq">{`$$\\text{Distributive: } A(B + C) = AB + AC$$`}</div>
          <div className="lrn-eq lrn-eq-display">{`$$\\text{Division: } \\frac{m/n}{k/\\ell} = \\frac{m}{n} \\times \\frac{\\ell}{k}$$`}</div>
          <p>
            <strong>Mixed number:</strong>
            {` $a\\frac{b}{c} = \\frac{ac + b}{c}$`}
          </p>
          <p>
            <strong>Reciprocal:</strong>
            {` $B^{-1} = \\frac{\\ell}{k}$ when $B = \\frac{k}{\\ell}$`}
          </p>
        </>,
        <>
          <h2>Decimals</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Finite Decimal Test</span>
            <div className="lrn-definition-desc">{`$\\frac{m}{n}$ (reduced) terminates iff $n = 2^a \\times 5^b$.`}</div>
          </div>
          <p>
            <strong>Reciprocal inequality:</strong>
            {` $A < B \\Rightarrow \\frac{1}{A} > \\frac{1}{B}$ (positive fractions)`}
          </p>
        </>,
        <>
          <h2>False Doctrines</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Error</span>
              <ul className="lrn-list">
                <li>Division = repeated subtraction</li>
                <li>Equivalent fractions proof of invert-and-multiply</li>
                <li>&ldquo;New unit&rdquo; proof</li>
                <li>Adding tops and bottoms</li>
              </ul>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Why It Fails</span>
              <ul className="lrn-list">
                <li>Gives a pair, not one number</li>
                <li>Circular reasoning</li>
                <li>Same circular reasoning in disguise</li>
                <li>Gives the mediant, not the sum</li>
              </ul>
            </div>
          </div>
        </>
      ]
    },

    customCss: null
  }
  return config
}

export default function FractionOperations() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
