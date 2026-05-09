import { useState, useMemo } from 'react'
import katex from 'katex'
import {
  Plot,
  Polyline,
  Dot,
  Arrow,
  Tex,
  TexPx,
  Label,
  Slider,
  DragHandle,
  PlayPause,
  CircleSh,
  Parametric,
  useAnimationTime,
  useReducedMotion,
  OPACITY,
  FG
} from '../../physics-viz/primitives'
import {
  gcd,
  reduce,
  fracAdd,
  fracSub,
  fracMul,
  fracDiv,
  factor,
  stripTwosFives
} from '../arithmetic-core'

// ─── M01 FRACTION FOUNDATIONS ────────────────────────────────────────────────

export function NumberLineBasic() {
  const [n, setN] = useState(5)
  const ticks = Array.from({ length: n + 1 }, (_, i) => i / n)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.08, 1.08]} yRange={[-0.5, 0.6]} width={620} height={240}>
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
        <Tex at={[0, -0.18]} tex="0" anchor="middle" opacity={OPACITY.dim} size={11} />
        <Tex at={[1, -0.18]} tex="1" anchor="middle" opacity={OPACITY.dim} size={11} />
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
            [0, 0.28],
            [1 / n, 0.28]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={2}
        />
        <Polyline
          points={[
            [0, 0.24],
            [0, 0.32]
          ]}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [1 / n, 0.24],
            [1 / n, 0.32]
          ]}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0.5 / n, 0.4]}
          tex={`\\dfrac{1}{${n}}`}
          anchor="middle"
          opacity={OPACITY.fg}
          size={13}
        />
        <Tex
          at={[1.06, 0]}
          tex={`\\text{${n} parts}`}
          anchor="end"
          size={9}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="n"
        value={n}
        min={1}
        max={16}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

export function NumberLineFraction34() {
  const [m, setM] = useState(3)
  const [n, setN] = useState(4)
  const mc = Math.min(m, n)
  const ticks = Array.from({ length: n + 1 }, (_, i) => i / n)
  const [rn, rd] = reduce(mc, n)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.08, 1.08]} yRange={[-0.5, 0.6]} width={620} height={240}>
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
        <Tex at={[0, -0.2]} tex="0" anchor="middle" opacity={OPACITY.dim} size={11} />
        <Tex at={[1, -0.2]} tex="1" anchor="middle" opacity={OPACITY.dim} size={11} />
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
          size={12}
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

export function NumberLine17over4() {
  const [m, setM] = useState(17)
  const [n, setN] = useState(4)
  const total = Math.max(4, Math.ceil(m / n) + 1)
  const q = Math.floor(m / n)
  const r = m - q * n
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.2, total + 0.2]} yRange={[-0.7, 0.7]} width={620} height={240}>
        <Polyline
          points={[
            [0, 0],
            [total, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {Array.from({ length: total + 1 }, (_, i) => (
          <g key={i}>
            <Polyline
              points={[
                [i, -0.14],
                [i, 0.14]
              ]}
              opacity={OPACITY.fg}
            />
            <Tex at={[i, -0.22]} tex={String(i)} anchor="middle" opacity={OPACITY.dim} size={11} />
          </g>
        ))}
        {Array.from({ length: total * n + 1 }, (_, i) =>
          i % n !== 0 && i / n <= total ? (
            <Polyline
              key={i}
              points={[
                [i / n, -0.06],
                [i / n, 0.06]
              ]}
              opacity={OPACITY.faint}
            />
          ) : null
        )}
        <Dot x={m / n} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[m / n, 0.32]}
          tex={`\\dfrac{${m}}{${n}} = ${q}\\tfrac{${r}}{${n}}`}
          anchor="middle"
          size={12}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="m"
        value={m}
        min={0}
        max={total * n}
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

export function AreaModelFraction() {
  const [m, setM] = useState(3)
  const [n, setN] = useState(8)
  const W = 480,
    H = 110
  const sw = W / n
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 20} ${H + 60}`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(10, 24)">
          {Array.from({ length: n }, (_, i) => (
            <rect
              key={i}
              x={i * sw}
              y={0}
              width={sw}
              height={H}
              fill={FG}
              fillOpacity={i < Math.min(m, n) ? 0.7 : 0}
              stroke={FG}
              strokeOpacity={0.6}
              strokeWidth={1}
            />
          ))}
        </g>
        <TexPx
          x={(W + 20) / 2}
          y={H + 50}
          tex={(() => {
            const mn = Math.min(m, n)
            const [rn, rd] = reduce(mn, n)
            return rn !== mn
              ? `\\tfrac{${mn}}{${n}} = \\tfrac{${rn}}{${rd}}`
              : `\\tfrac{${mn}}{${n}}`
          })()}
          anchor="middle"
          size={14}
          width={180}
          opacity={0.85}
        />
      </svg>
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
        max={16}
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

export function EquivalentFractionVis() {
  const [k, setK] = useState(3)
  const m = 2,
    n = 3
  const ticksTop = Array.from({ length: n + 1 }, (_, i) => i / n)
  const ticksBot = Array.from({ length: n * k + 1 }, (_, i) => i / (n * k))
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.08, 1.08]} yRange={[-0.7, 1.0]} width={620} height={280}>
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
            key={i}
            points={[
              [x, 0.45],
              [x, 0.65]
            ]}
            opacity={i === 0 || i === n ? OPACITY.fg : OPACITY.dim}
          />
        ))}
        <Dot x={m / n} y={0.55} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[m / n, 0.85]}
          tex={`\\dfrac{${m}}{${n}}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [0, -0.15],
            [1, -0.15]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {ticksBot.map((x, i) => (
          <Polyline
            key={i}
            points={[
              [x, -0.22],
              [x, -0.08]
            ]}
            opacity={i === 0 || i === n * k ? OPACITY.fg : OPACITY.faint}
          />
        ))}
        <Dot x={(m * k) / (n * k)} y={-0.15} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[(m * k) / (n * k), -0.42]}
          tex={`\\dfrac{${m * k}}{${n * k}}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [m / n, 0.55],
            [m / n, -0.15]
          ]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Tex
          at={[0.02, 0.93]}
          tex={`\\times \\dfrac{${k}}{${k}}`}
          anchor="start"
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="k"
        value={k}
        min={1}
        max={6}
        step={1}
        onChange={v => setK(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

export function DecimalNumberLine() {
  const [v, setV] = useState(0.473)
  const d1 = Math.floor(v * 10)
  const d2 = Math.floor(v * 100) - d1 * 10
  const d3 = Math.floor(v * 1000) - d1 * 100 - d2 * 10
  const Strip = ({ y, lo, hi, ticks, label }) => {
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
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, y - 0.05],
                  [x, y + 0.05]
                ]}
                opacity={i === 0 || i === ticks ? OPACITY.fg : OPACITY.dim}
              />
              {(i === 0 || i === ticks || ticks <= 10) && (
                <Tex
                  at={[x, y - 0.13]}
                  tex={(lo + (range * i) / ticks).toFixed(
                    label === 'tenths' ? 1 : label === 'hundredths' ? 2 : 3
                  )}
                  anchor="middle"
                  size={9}
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
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.06, 1.06]} yRange={[-1.4, 1.0]} width={620} height={340}>
        <Tex
          at={[0.0, 0.92]}
          tex={`x = ${v.toFixed(3)}`}
          anchor="start"
          size={12}
          opacity={OPACITY.fg}
        />
        <Strip y={0.55} lo={0} hi={1} ticks={10} label="tenths" />
        <Strip y={-0.05} lo={d1 / 10} hi={(d1 + 1) / 10} ticks={10} label="hundredths" />
        <Strip
          y={-0.65}
          lo={(d1 * 10 + d2) / 100}
          hi={(d1 * 10 + d2 + 1) / 100}
          ticks={10}
          label="thousandths"
        />
        <Tex
          at={[0.99, 0.55]}
          tex={`${d1}\\,\\text{tenths}`}
          anchor="end"
          size={9}
          opacity={OPACITY.dim}
          dy={20}
        />
        <Tex
          at={[0.99, -0.05]}
          tex={`+\\,${d2}\\,\\text{hundredths}`}
          anchor="end"
          size={9}
          opacity={OPACITY.dim}
          dy={20}
        />
        <Tex
          at={[0.99, -0.65]}
          tex={`+\\,${d3}\\,\\text{thousandths}`}
          anchor="end"
          size={9}
          opacity={OPACITY.dim}
          dy={20}
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

function DecimalFractionCompareInner({ n }) {
  const v = 1 / n
  return (
    <Plot xRange={[-0.08, 1.08]} yRange={[-0.85, 0.85]} width={620} height={280}>
      <Polyline
        points={[
          [0, 0.45],
          [1, 0.45]
        ]}
        opacity={OPACITY.fg}
        strokeWidth={1.5}
      />
      {Array.from({ length: n + 1 }, (_, i) => (
        <Polyline
          key={i}
          points={[
            [i / n, 0.36],
            [i / n, 0.54]
          ]}
          opacity={i === 0 || i === n ? OPACITY.fg : OPACITY.dim}
        />
      ))}
      <Dot x={v} y={0.45} r={5} opacity={OPACITY.fg} />
      <Tex at={[v, 0.72]} tex={`\\dfrac{1}{${n}}`} anchor="middle" size={12} opacity={OPACITY.fg} />
      <Polyline
        points={[
          [0, -0.45],
          [1, -0.45]
        ]}
        opacity={OPACITY.fg}
        strokeWidth={1.5}
      />
      {Array.from({ length: 11 }, (_, i) => (
        <Polyline
          key={i}
          points={[
            [i / 10, -0.52],
            [i / 10, -0.38]
          ]}
          opacity={i === 0 || i === 10 ? OPACITY.fg : OPACITY.dim}
        />
      ))}
      {Array.from({ length: 101 }, (_, i) => (
        <Polyline
          key={'h' + i}
          points={[
            [i / 100, -0.49],
            [i / 100, -0.41]
          ]}
          opacity={OPACITY.faint}
        />
      ))}
      <Dot x={v} y={-0.45} r={5} opacity={OPACITY.fg} />
      <Tex
        at={[v, -0.78]}
        tex={`\\approx ${v.toFixed(4)}`}
        anchor="middle"
        size={12}
        opacity={OPACITY.fg}
      />
      <Polyline
        points={[
          [v, 0.45],
          [v, -0.45]
        ]}
        opacity={OPACITY.dim}
        dash="3 3"
      />
    </Plot>
  )
}

export function DecimalFractionCompare() {
  const [n, setN] = useState(5)
  return (
    <div style={{ width: '100%' }}>
      <DecimalFractionCompareInner n={n} />
      <Slider
        label="n"
        value={n}
        min={2}
        max={10}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

export function CompareFractionsVis() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(5)
  const [c, setC] = useState(4)
  const [d, setD] = useState(7)
  const v1 = a / b,
    v2 = c / d
  const cross = a * d - c * b
  const cmp = cross > 0 ? '>' : cross < 0 ? '<' : '='
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.08, 1.08]} yRange={[-0.6, 0.7]} width={620} height={260}>
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
        <Tex at={[0, -0.22]} tex="0" anchor="middle" opacity={OPACITY.dim} size={11} />
        <Tex at={[1, -0.22]} tex="1" anchor="middle" opacity={OPACITY.dim} size={11} />
        <Dot x={v1} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={v2} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[v1, 0.22]}
          tex={`\\dfrac{${a}}{${b}}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[v2, 0.42]}
          tex={`\\dfrac{${c}}{${d}}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[0.5, -0.45]}
          tex={`\\dfrac{${a}}{${b}}\\;${cmp}\\;\\dfrac{${c}}{${d}}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="a"
        value={a}
        min={1}
        max={9}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={10}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="c"
        value={c}
        min={1}
        max={9}
        step={1}
        onChange={v => setC(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="d"
        value={d}
        min={1}
        max={10}
        step={1}
        onChange={v => setD(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

export function FFPVis() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(5)
  const [c, setC] = useState(4)
  const [d, setD] = useState(7)
  const ad = a * d,
    bc = b * c
  const max = Math.max(ad, bc) * 1.15
  const cmp = ad > bc ? '>' : ad < bc ? '<' : '='
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.05 * max, max]} yRange={[-1.2, 1.4]} width={620} height={280}>
        <Polyline
          points={[
            [0, 0.6],
            [ad, 0.6]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={6}
        />
        <Tex
          at={[ad, 0.95]}
          tex={`a\\!\\cdot\\!d = ${ad}`}
          anchor="end"
          size={12}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [0, -0.1],
            [bc, -0.1]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={6}
        />
        <Tex
          at={[bc, -0.45]}
          tex={`b\\!\\cdot\\!c = ${bc}`}
          anchor="end"
          size={12}
          opacity={OPACITY.accent}
        />
        <Polyline
          points={[
            [0, -0.7],
            [0, 1.0]
          ]}
          opacity={OPACITY.faint}
        />
        <Tex
          at={[max * 0.5, -0.95]}
          tex={`\\dfrac{${a}}{${b}}\\;${cmp}\\;\\dfrac{${c}}{${d}}`}
          anchor="middle"
          size={13}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="a"
        value={a}
        min={1}
        max={9}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={9}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="c"
        value={c}
        min={1}
        max={9}
        step={1}
        onChange={v => setC(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="d"
        value={d}
        min={1}
        max={9}
        step={1}
        onChange={v => setD(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

// ─── M02 FRACTION OPERATIONS ─────────────────────────────────────────────────

export function AdditionNumberLine() {
  const [a, setA] = useState(1),
    [b, setB] = useState(3)
  const [c, setC] = useState(1),
    [d, setD] = useState(4)
  const v1 = a / b,
    v2 = c / d
  const sum = v1 + v2
  const [sn, sd] = fracAdd([a, b], [c, d])
  const xMax = Math.max(1.2, sum + 0.2)
  const lcdT = b * d
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.06 * xMax, xMax]} yRange={[-0.7, 0.85]} width={620} height={260}>
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
        <Polyline
          points={[
            [1, -0.12],
            [1, 0.12]
          ]}
          opacity={OPACITY.fg}
        />
        <Tex at={[0, -0.22]} tex="0" anchor="middle" size={11} opacity={OPACITY.dim} />
        <Tex at={[1, -0.22]} tex="1" anchor="middle" size={11} opacity={OPACITY.dim} />
        <Polyline
          points={[
            [0, 0.28],
            [v1, 0.28]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={2}
        />
        <Polyline
          points={[
            [v1, 0.24],
            [v1, 0.32]
          ]}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[v1 / 2, 0.42]}
          tex={`\\tfrac{${a}}{${b}}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [v1, 0.28],
            [sum, 0.28]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={2}
        />
        <Polyline
          points={[
            [sum, 0.24],
            [sum, 0.32]
          ]}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[(v1 + sum) / 2, 0.42]}
          tex={`\\tfrac{${c}}{${d}}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Dot x={sum} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[sum, -0.45]}
          tex={`\\dfrac{${a}}{${b}}+\\dfrac{${c}}{${d}} = \\dfrac{${sn}}{${sd}}`}
          anchor="middle"
          size={12}
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

export function SubtractionNumberLine() {
  const [a, setA] = useState(3),
    [b, setB] = useState(4)
  const [c, setC] = useState(1),
    [d, setD] = useState(3)
  const v1 = a / b,
    v2 = c / d
  const [sn, sd] = fracSub([a, b], [c, d])
  const xMax = Math.max(1.1, Math.max(v1, v2) + 0.15)
  const lo = Math.min(v1, v2),
    hi = Math.max(v1, v2)
  const lcdT = b * d
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.05, xMax]} yRange={[-0.85, 0.7]} width={620} height={260}>
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
        <Tex at={[0, -0.22]} tex="0" anchor="middle" size={11} opacity={OPACITY.dim} />
        <Dot x={v1} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={v2} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[v1, 0.22]}
          tex={`\\tfrac{${a}}{${b}}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[v2, -0.32]}
          tex={`\\tfrac{${c}}{${d}}`}
          anchor="middle"
          size={11}
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
          size={12}
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

export function FractionMultiplicationArea() {
  const [a, setA] = useState(2),
    [b, setB] = useState(3)
  const [c, setC] = useState(3),
    [d, setD] = useState(4)
  const W = 320,
    H = 220
  const cw = W / b,
    ch = H / d
  const aClamp = Math.min(a, b),
    cClamp = Math.min(c, d)
  const [pn, pd] = fracMul([aClamp, b], [cClamp, d])
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 200} ${H + 60}`} width="100%" style={{ display: 'block' }}>
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
                  fill={FG}
                  fillOpacity={sel ? 0.7 : 0}
                  stroke={FG}
                  strokeOpacity={0.55}
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
            stroke={FG}
            strokeWidth={2}
          />
        </g>
        <TexPx
          x={W + 32}
          y={H / 2 - 2}
          size={13}
          width={180}
          tex={`\\tfrac{${aClamp}}{${b}} \\times \\tfrac{${cClamp}}{${d}}`}
        />
        <TexPx
          x={W + 32}
          y={H / 2 + 26}
          size={13}
          width={120}
          opacity={0.7}
          tex={`= \\tfrac{${aClamp * cClamp}}{${b * d}}`}
        />
        <TexPx
          x={W + 32}
          y={H / 2 + 50}
          size={13}
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

export function FractionDistributiveLaw() {
  const [A, setA] = useState(2)
  const [B, setB] = useState(3)
  const [C, setC] = useState(2)
  const W = 460,
    H = 160
  const total = B + C
  const wB = (B / total) * W,
    wC = (C / total) * W
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 60} ${H + 80}`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(20, 30)">
          <rect
            x={0}
            y={0}
            width={wB}
            height={H}
            fill={FG}
            fillOpacity={0.55}
            stroke={FG}
            strokeWidth={1}
          />
          <rect
            x={wB}
            y={0}
            width={wC}
            height={H}
            fill={FG}
            fillOpacity={0.25}
            stroke={FG}
            strokeWidth={1}
          />
          <text
            x={wB / 2}
            y={H / 2 + 4}
            fill="#000"
            fontSize={14}
            textAnchor="middle"
            fontFamily="'D-DIN', ui-monospace, monospace"
          >{`${A}·${B}`}</text>
          <text
            x={wB + wC / 2}
            y={H / 2 + 4}
            fill={FG}
            fontSize={14}
            textAnchor="middle"
            fontFamily="'D-DIN', ui-monospace, monospace"
          >{`${A}·${C}`}</text>
          <text
            x={-12}
            y={H / 2 + 4}
            fill={FG}
            fontSize={12}
            textAnchor="end"
            fontFamily="'D-DIN', ui-monospace, monospace"
            opacity={0.7}
          >{`A=${A}`}</text>
          <text
            x={wB / 2}
            y={-8}
            fill={FG}
            fontSize={12}
            textAnchor="middle"
            fontFamily="'D-DIN', ui-monospace, monospace"
            opacity={0.7}
          >{`B=${B}`}</text>
          <text
            x={wB + wC / 2}
            y={-8}
            fill={FG}
            fontSize={12}
            textAnchor="middle"
            fontFamily="'D-DIN', ui-monospace, monospace"
            opacity={0.7}
          >{`C=${C}`}</text>
        </g>
        <text
          x={(W + 60) / 2}
          y={H + 65}
          fill={FG}
          fontSize={13}
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

export function FractionOfNumberLine() {
  const [m, setM] = useState(2),
    [n, setN] = useState(3)
  const [k, setK] = useState(3),
    [l, setL] = useState(4)
  const seg = k / l
  const v = (m / n) * seg
  const [pn, pd] = fracMul([m, n], [k, l])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.06, 1.08]} yRange={[-0.8, 0.6]} width={620} height={260}>
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
        <Tex at={[0, -0.22]} tex="0" anchor="middle" size={11} opacity={OPACITY.dim} />
        <Tex at={[1, -0.22]} tex="1" anchor="middle" size={11} opacity={OPACITY.dim} />
        <Polyline
          points={[
            [0, 0.28],
            [seg, 0.28]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={2}
        />
        <Polyline
          points={[
            [seg, 0.22],
            [seg, 0.34]
          ]}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[seg / 2, 0.42]}
          tex={`\\tfrac{${k}}{${l}}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        {Array.from({ length: n + 1 }, (_, i) => (
          <Polyline
            key={i}
            points={[
              [(i / n) * seg, -0.06],
              [(i / n) * seg, 0.06]
            ]}
            opacity={i === 0 || i === n ? OPACITY.fg : OPACITY.accent}
          />
        ))}
        <Polyline
          points={[
            [0, 0],
            [v, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={3}
        />
        <Dot x={v} y={0} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[v, -0.5]}
          tex={`\\dfrac{${m}}{${n}}\\cdot\\dfrac{${k}}{${l}} = \\dfrac{${pn}}{${pd}}`}
          anchor="middle"
          size={12}
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
        max={6}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="k"
        value={k}
        min={0}
        max={l}
        step={1}
        onChange={v => setK(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="l"
        value={l}
        min={1}
        max={6}
        step={1}
        onChange={v => setL(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

export function DivisionNumberLine() {
  const [a, setA] = useState(7),
    [b, setB] = useState(4)
  const [c, setC] = useState(1),
    [d, setD] = useState(3)
  const A = a / b,
    B = c / d
  const fits = Math.floor(A / B)
  const remainder = A - fits * B
  const [qn, qd] = fracDiv ? fracDiv([a, b], [c, d]) : [a * d, b * c]
  const xMax = Math.max(1.05, A + 0.1)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.04, xMax]} yRange={[-0.85, 0.6]} width={620} height={260}>
        <Polyline
          points={[
            [0, 0],
            [A, 0]
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
            [A, -0.12],
            [A, 0.12]
          ]}
          opacity={OPACITY.fg}
        />
        <Tex at={[0, -0.22]} tex="0" anchor="middle" size={10} opacity={OPACITY.dim} />
        <Tex
          at={[A, -0.22]}
          tex={`\\tfrac{${a}}{${b}}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
        {Array.from({ length: fits }, (_, i) => (
          <g key={i}>
            <Polyline
              points={[
                [i * B, 0.18],
                [(i + 1) * B, 0.18]
              ]}
              opacity={OPACITY.fg}
              strokeWidth={2}
            />
            <Polyline
              points={[
                [i * B, 0.12],
                [i * B, 0.24]
              ]}
              opacity={OPACITY.fg}
            />
            <Polyline
              points={[
                [(i + 1) * B, 0.12],
                [(i + 1) * B, 0.24]
              ]}
              opacity={OPACITY.fg}
            />
          </g>
        ))}
        {remainder > 1e-9 && (
          <g>
            <Polyline
              points={[
                [fits * B, 0.18],
                [A, 0.18]
              ]}
              opacity={OPACITY.accent}
              strokeWidth={2}
              dash="3 3"
            />
            <Tex
              at={[(fits * B + A) / 2, 0.34]}
              tex="r"
              anchor="middle"
              size={10}
              opacity={OPACITY.accent}
            />
          </g>
        )}
        <Tex
          at={[A / 2, -0.55]}
          tex={`\\dfrac{${a}}{${b}}\\div\\dfrac{${c}}{${d}} = \\dfrac{${qn}}{${qd}}`}
          anchor="middle"
          size={12}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="a"
        value={a}
        min={0}
        max={9}
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
        min={1}
        max={9}
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

export function FiniteDecimalVis() {
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
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 520 240" width="100%" style={{ display: 'block' }}>
        <g fontFamily="'D-DIN', ui-monospace, monospace">
          <text x={260} y={32} fill={FG} textAnchor="middle" fontSize={20}>
            {n}
          </text>
          {list.map((p, i) => {
            const x = 60 + (i + 0.5) * (400 / Math.max(1, list.length))
            const okP = p === 2 || p === 5
            return (
              <g key={i}>
                <line x1={260} y1={42} x2={x} y2={178} stroke={FG} strokeOpacity={0.4} />
                <circle
                  cx={x}
                  cy={200}
                  r={16}
                  fill="none"
                  stroke={FG}
                  strokeOpacity={okP ? 1 : 0.4}
                  strokeWidth={okP ? 2 : 1}
                  strokeDasharray={okP ? null : '3 3'}
                />
                <text
                  x={x}
                  y={205}
                  fill={FG}
                  fillOpacity={okP ? 1 : 0.5}
                  textAnchor="middle"
                  fontSize={13}
                >
                  {p}
                </text>
              </g>
            )
          })}
          <TexPx
            x={218}
            y={222}
            tex={`\\tfrac{1}{${n}}`}
            anchor="start"
            size={12}
            width={50}
            opacity={0.85}
          />
          <text
            x={272}
            y={228}
            fill={FG}
            textAnchor="start"
            fontSize={12}
            opacity={0.85}
            letterSpacing="0.06em"
          >
            {ok ? 'TERMINATES' : 'REPEATS'}
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

// ─── M03 FRACTION APPLICATIONS ───────────────────────────────────────────────

export function PercentBarVis() {
  const [pct, setPct] = useState(35)
  const W = 480,
    H = 36
  const [pn, pd] = reduce(pct, 100)
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 40} ${H + 80}`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(20, 30)">
          <rect x={0} y={0} width={W} height={H} fill="none" stroke={FG} strokeWidth={1} />
          <rect x={0} y={0} width={(W * pct) / 100} height={H} fill={FG} fillOpacity={0.65} />
          {Array.from({ length: 11 }, (_, i) => (
            <line
              key={i}
              x1={(W * i) / 10}
              y1={H}
              x2={(W * i) / 10}
              y2={H + 6}
              stroke={FG}
              strokeOpacity={0.5}
            />
          ))}
          {Array.from({ length: 11 }, (_, i) => (
            <text
              key={i}
              x={(W * i) / 10}
              y={H + 18}
              fill={FG}
              opacity={0.5}
              fontSize={10}
              textAnchor="middle"
              fontFamily="'D-DIN', ui-monospace, monospace"
            >
              {i * 10}
            </text>
          ))}
        </g>
        <text
          x={(W + 40) / 2}
          y={H + 70}
          fill={FG}
          fontSize={13}
          textAnchor="middle"
          fontFamily="'D-DIN', ui-monospace, monospace"
          letterSpacing="0.06em"
        >
          {`${pct}% = ${pn}/${pd} = ${(pct / 100).toFixed(2)}`}
        </text>
      </svg>
      <Slider
        label="%"
        value={pct}
        min={0}
        max={100}
        step={1}
        onChange={v => setPct(v | 0)}
        format={v => v.toFixed(0) + '%'}
      />
    </div>
  )
}

export function RatioBarVis() {
  const [a, setA] = useState(2),
    [b, setB] = useState(5)
  const W = 480,
    H = 36
  const wa = (a / (a + b)) * W
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 40} ${H + 80}`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(20, 30)">
          <rect x={0} y={0} width={wa} height={H} fill={FG} fillOpacity={0.6} stroke={FG} />
          <rect x={wa} y={0} width={W - wa} height={H} fill={FG} fillOpacity={0.2} stroke={FG} />
          <text
            x={wa / 2}
            y={H / 2 + 5}
            fill="#000"
            fontSize={13}
            textAnchor="middle"
            fontFamily="'D-DIN', ui-monospace, monospace"
          >
            {a}
          </text>
          <text
            x={wa + (W - wa) / 2}
            y={H / 2 + 5}
            fill={FG}
            fontSize={13}
            textAnchor="middle"
            fontFamily="'D-DIN', ui-monospace, monospace"
          >
            {b}
          </text>
        </g>
        <text
          x={(W + 40) / 2}
          y={H + 70}
          fill={FG}
          fontSize={13}
          textAnchor="middle"
          fontFamily="'D-DIN', ui-monospace, monospace"
          letterSpacing="0.06em"
        >
          {`${a} : ${b}    →    ${a}/${a + b}, ${b}/${a + b}`}
        </text>
      </svg>
      <Slider
        label="a"
        value={a}
        min={1}
        max={9}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={9}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

export function RateGraphVis() {
  const [r, setR] = useState(1.5)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, 6]} yRange={[-1, 14]} width={620} height={300}>
        <Polyline
          points={[
            [0, 0],
            [6, 0]
          ]}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [0, -0.5],
            [0, 14]
          ]}
          opacity={OPACITY.dim}
        />
        {Array.from({ length: 7 }, (_, i) => (
          <Polyline
            key={i}
            points={[
              [i, -0.2],
              [i, 0.2]
            ]}
            opacity={OPACITY.faint}
          />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <Polyline
            key={i}
            points={[
              [-0.1, i * 2],
              [0.1, i * 2]
            ]}
            opacity={OPACITY.faint}
          />
        ))}
        <Tex at={[5.95, 0]} tex="t" anchor="end" size={11} opacity={OPACITY.dim} dy={18} />
        <Tex at={[0, 13.7]} tex="y" anchor="start" size={11} opacity={OPACITY.dim} dx={6} />
        <Polyline
          points={[
            [0, 0],
            [5.5, r * 5.5]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={2}
        />
        <Dot x={3} y={3 * r} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[3, 3 * r]}
          tex={`(3,\\,${(3 * r).toFixed(2)})`}
          anchor="start"
          dx={8}
          dy={-4}
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[0.4, 12]}
          tex={`y = ${r.toFixed(2)}\\cdot t`}
          anchor="start"
          size={12}
          opacity={OPACITY.fg}
        />
      </Plot>
      <Slider
        label="rate"
        value={r}
        min={0.1}
        max={2.5}
        step={0.05}
        onChange={setR}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}

export function CoopWorkVis() {
  const [a, setA] = useState(4),
    [b, setB] = useState(6)
  const ra = 1 / a,
    rb = 1 / b
  const total = ra + rb
  const T = 1 / total
  const W = 480
  const wa = (ra / total) * W,
    wb = (rb / total) * W
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 40} 110`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(20, 24)">
          <rect x={0} y={0} width={wa} height={28} fill={FG} fillOpacity={0.6} stroke={FG} />
          <rect x={wa} y={0} width={wb} height={28} fill={FG} fillOpacity={0.3} stroke={FG} />
          <TexPx x={wa / 2} y={18} tex={`\\tfrac{1}{${a}}`} anchor="middle" size={11} width={40} />
          <TexPx
            x={wa + wb / 2}
            y={18}
            tex={`\\tfrac{1}{${b}}`}
            anchor="middle"
            size={11}
            width={40}
          />
        </g>
        <TexPx
          x={(W + 40) / 2}
          y={84}
          tex={`\\text{rate} = \\tfrac{1}{${a}} + \\tfrac{1}{${b}} = ${total.toFixed(3)}\\text{/hr}`}
          anchor="middle"
          size={13}
          width={280}
        />
        <text
          x={(W + 40) / 2}
          y={102}
          textAnchor="middle"
          fill={FG}
          opacity={0.65}
          fontSize={12}
          fontFamily="'D-DIN', ui-monospace, monospace"
          letterSpacing="0.04em"
        >
          {`time to finish = ${T.toFixed(2)} hr`}
        </text>
      </svg>
      <Slider
        label="a"
        value={a}
        min={1}
        max={12}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={12}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

export function ComplexFractionVis() {
  const [a, setA] = useState(2),
    [b, setB] = useState(3)
  const [c, setC] = useState(4),
    [d, setD] = useState(5)
  const num = a * d,
    den = b * c
  const g = gcd(num, den)
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 520 220" width="100%" style={{ display: 'block' }}>
        <g fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          <text x={120} y={56} fontSize={20} textAnchor="middle">
            {a}
          </text>
          <line x1={100} y1={66} x2={140} y2={66} stroke={FG} strokeWidth={1} />
          <text x={120} y={92} fontSize={20} textAnchor="middle">
            {b}
          </text>
          <line x1={70} y1={110} x2={170} y2={110} stroke={FG} strokeWidth={1.5} />
          <text x={120} y={134} fontSize={20} textAnchor="middle">
            {c}
          </text>
          <line x1={100} y1={144} x2={140} y2={144} stroke={FG} strokeWidth={1} />
          <text x={120} y={170} fontSize={20} textAnchor="middle">
            {d}
          </text>
          <text x={210} y={114} fontSize={26} textAnchor="middle">
            =
          </text>
          <text x={290} y={102} fontSize={20} textAnchor="middle">{`${a}·${d}`}</text>
          <line x1={250} y1={114} x2={330} y2={114} stroke={FG} strokeWidth={1.5} />
          <text x={290} y={138} fontSize={20} textAnchor="middle">{`${b}·${c}`}</text>
          <text x={368} y={114} fontSize={26} textAnchor="middle">
            =
          </text>
          <text x={430} y={102} fontSize={20} textAnchor="middle">
            {num}
          </text>
          <line x1={400} y1={114} x2={460} y2={114} stroke={FG} strokeWidth={1.5} />
          <text x={430} y={138} fontSize={20} textAnchor="middle">
            {den}
          </text>
          {g > 1 && (
            <TexPx
              x={260}
              y={200}
              tex={`\\text{reduce by } ${g}: \\tfrac{${num / g}}{${den / g}}`}
              anchor="middle"
              size={12}
              width={200}
              opacity={0.65}
            />
          )}
        </g>
      </svg>
      <Slider
        label="a"
        value={a}
        min={1}
        max={9}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={9}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="c"
        value={c}
        min={1}
        max={9}
        step={1}
        onChange={v => setC(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="d"
        value={d}
        min={1}
        max={9}
        step={1}
        onChange={v => setD(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

// ─── M04 FRACTION ADVANCED ───────────────────────────────────────────────────

export function HarmonicMeanVis() {
  const [a, setA] = useState(1),
    [b, setB] = useState(4)
  const am = (a + b) / 2
  const gm = Math.sqrt(a * b)
  const hm = (2 * a * b) / (a + b)
  const xMin = a - (b - a) * 0.1,
    xMax = b + (b - a) * 0.1
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[-1.0, 1.6]} width={620} height={280}>
        <Polyline
          points={[
            [a, 0],
            [b, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Polyline
          points={[
            [a, -0.18],
            [a, 0.18]
          ]}
          opacity={OPACITY.fg}
        />
        <Polyline
          points={[
            [b, -0.18],
            [b, 0.18]
          ]}
          opacity={OPACITY.fg}
        />
        <Tex at={[a, -0.32]} tex={`a=${a}`} anchor="middle" size={11} opacity={OPACITY.dim} />
        <Tex at={[b, -0.32]} tex={`b=${b}`} anchor="middle" size={11} opacity={OPACITY.dim} />
        <Dot x={hm} y={0} r={5} opacity={OPACITY.fg} />
        <Tex at={[hm, 0.32]} tex="H" anchor="middle" size={11} opacity={OPACITY.fg} />
        <Dot x={gm} y={0} r={5} opacity={OPACITY.accent} />
        <Tex at={[gm, 0.62]} tex="G" anchor="middle" size={11} opacity={OPACITY.accent} />
        <Dot x={am} y={0} r={5} opacity={OPACITY.fg} />
        <Tex at={[am, 0.92]} tex="A" anchor="middle" size={11} opacity={OPACITY.fg} />
        <Tex
          at={[(xMin + xMax) / 2, -0.65]}
          tex={`H = ${hm.toFixed(2)} \\le G = ${gm.toFixed(2)} \\le A = ${am.toFixed(2)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="a"
        value={a}
        min={0.5}
        max={4}
        step={0.1}
        onChange={setA}
        format={v => v.toFixed(2)}
      />
      <Slider
        label="b"
        value={b}
        min={0.5}
        max={8}
        step={0.1}
        onChange={setB}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}

export function CucumberVis() {
  const [waterPct, setW] = useState(98)
  const initialMass = 100,
    initialWater = 99
  const dryMass = initialMass - initialWater
  const newMass = dryMass / (1 - waterPct / 100)
  const newWater = newMass - dryMass
  const W = 220,
    H0 = 160,
    scale = H0 / initialMass
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 520 240" width="100%" style={{ display: 'block' }}>
        <g fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          <g transform="translate(40, 30)">
            <rect x={0} y={0} width={120} height={H0} fill="none" stroke={FG} strokeWidth={1} />
            <rect
              x={0}
              y={(initialMass - initialWater) * scale}
              width={120}
              height={initialWater * scale}
              fill={FG}
              fillOpacity={0.45}
            />
            <text x={60} y={-8} textAnchor="middle" fontSize={11}>
              BEFORE
            </text>
            <text x={60} y={H0 + 20} textAnchor="middle" fontSize={11}>
              100 kg · 99% water
            </text>
          </g>
          <text x={210} y={120} textAnchor="middle" fontSize={20} opacity={0.5}>
            →
          </text>
          <g transform={`translate(260, ${30 + H0 - newMass * scale})`}>
            <rect
              x={0}
              y={0}
              width={120}
              height={newMass * scale}
              fill="none"
              stroke={FG}
              strokeWidth={1}
            />
            <rect
              x={0}
              y={dryMass * scale}
              width={120}
              height={newWater * scale}
              fill={FG}
              fillOpacity={0.45}
            />
            <text x={60} y={-8} textAnchor="middle" fontSize={11}>
              AFTER
            </text>
            <text
              x={60}
              y={newMass * scale + 20}
              textAnchor="middle"
              fontSize={11}
            >{`${newMass.toFixed(1)} kg · ${waterPct}% water`}</text>
          </g>
          <text x={460} y={50} textAnchor="end" fontSize={11} opacity={0.7}>
            dry mass
          </text>
          <text x={460} y={68} textAnchor="end" fontSize={13}>{`= ${dryMass} kg (fixed)`}</text>
        </g>
      </svg>
      <Slider
        label="water%"
        value={waterPct}
        min={50}
        max={98.99}
        step={0.1}
        onChange={setW}
        format={v => v.toFixed(1) + '%'}
      />
    </div>
  )
}

export function WineTeaVis() {
  const [V, setV] = useState(100)
  const [s, setS] = useState(20)
  const teaInWine = (s * V) / (V + s)
  const wineInTeaFinal = (s * V) / (V + s)
  const Wpx = 480,
    Hpx = 100
  const half = Wpx / 2
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${Wpx + 40} ${Hpx + 80}`} width="100%" style={{ display: 'block' }}>
        <g fontFamily="'D-DIN', ui-monospace, monospace" fill={FG} transform="translate(20,30)">
          <g>
            <rect x={0} y={0} width={half - 20} height={Hpx} fill="none" stroke={FG} />
            <rect
              x={0}
              y={Hpx * (teaInWine / V)}
              width={half - 20}
              height={Hpx * ((V - teaInWine) / V)}
              fill={FG}
              fillOpacity={0.55}
            />
            <rect
              x={0}
              y={0}
              width={half - 20}
              height={Hpx * (teaInWine / V)}
              fill={FG}
              fillOpacity={0.2}
            />
            <text x={(half - 20) / 2} y={-8} textAnchor="middle" fontSize={11}>
              WINE GLASS
            </text>
            <text
              x={(half - 20) / 2}
              y={Hpx + 18}
              textAnchor="middle"
              fontSize={11}
              opacity={0.7}
            >{`tea = ${teaInWine.toFixed(2)}`}</text>
          </g>
          <g transform={`translate(${half + 20}, 0)`}>
            <rect x={0} y={0} width={half - 20} height={Hpx} fill="none" stroke={FG} />
            <rect
              x={0}
              y={Hpx * (wineInTeaFinal / V)}
              width={half - 20}
              height={Hpx * ((V - wineInTeaFinal) / V)}
              fill={FG}
              fillOpacity={0.2}
            />
            <rect
              x={0}
              y={0}
              width={half - 20}
              height={Hpx * (wineInTeaFinal / V)}
              fill={FG}
              fillOpacity={0.55}
            />
            <text x={(half - 20) / 2} y={-8} textAnchor="middle" fontSize={11}>
              TEA GLASS
            </text>
            <text
              x={(half - 20) / 2}
              y={Hpx + 18}
              textAnchor="middle"
              fontSize={11}
              opacity={0.7}
            >{`wine = ${wineInTeaFinal.toFixed(2)}`}</text>
          </g>
          <text
            x={Wpx / 2}
            y={Hpx + 50}
            textAnchor="middle"
            fontSize={12}
          >{`wine in tea = tea in wine = ${wineInTeaFinal.toFixed(2)}`}</text>
        </g>
      </svg>
      <Slider
        label="V"
        value={V}
        min={50}
        max={200}
        step={1}
        onChange={v => setV(v | 0)}
        format={v => v.toFixed(0)}
      />
      <Slider
        label="spoon"
        value={s}
        min={1}
        max={V / 2}
        step={1}
        onChange={v => setS(v | 0)}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

// ─── M05 RATIONAL NUMBERS ────────────────────────────────────────────────────

export function MirrorReflectionDiagram() {
  const [p, setP] = useState(2.5)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5, 5]} yRange={[-1.4, 1.4]} width={620} height={260}>
        <Polyline
          points={[
            [-5, 0],
            [5, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {Array.from({ length: 11 }, (_, i) => {
          const x = i - 5
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, -0.12],
                  [x, 0.12]
                ]}
                opacity={x === 0 ? OPACITY.fg : OPACITY.dim}
              />
              <Tex
                at={[x, -0.32]}
                tex={String(x)}
                anchor="middle"
                size={10}
                opacity={OPACITY.dim}
              />
            </g>
          )
        })}
        <Polyline
          points={[
            [0, -1.0],
            [0, 1.0]
          ]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Dot x={p} y={0} r={5} opacity={OPACITY.fg} />
        <Dot x={-p} y={0} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[p, 0.6]}
          tex={`p = ${p.toFixed(2)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-p, 0.6]}
          tex={`-p = ${(-p).toFixed(2)}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Arrow from={[p * 0.05, 0.35]} to={[-p * 0.95, 0.35]} opacity={OPACITY.dim} head={6} />
      </Plot>
      <Slider
        label="p"
        value={p}
        min={0.1}
        max={4.5}
        step={0.05}
        onChange={setP}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}

export function TwoSidedNumberLine() {
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-5.5, 5.5]} yRange={[-1.0, 1.0]} width={620} height={220}>
        <Polyline
          points={[
            [-5.5, 0],
            [5.5, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {Array.from({ length: 11 }, (_, i) => {
          const x = i - 5
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, -0.16],
                  [x, 0.16]
                ]}
                opacity={x === 0 ? OPACITY.fg : OPACITY.dim}
              />
              <Tex
                at={[x, -0.4]}
                tex={x > 0 ? `+${x}` : String(x)}
                anchor="middle"
                size={11}
                opacity={OPACITY.dim}
              />
            </g>
          )
        })}
        <Arrow from={[-5.0, 0]} to={[-5.4, 0]} opacity={OPACITY.dim} head={6} />
        <Arrow from={[5.0, 0]} to={[5.4, 0]} opacity={OPACITY.dim} head={6} />
        <Tex
          at={[-2.5, 0.5]}
          tex="\text{negatives}"
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[2.5, 0.5]}
          tex="\text{positives}"
          anchor="middle"
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex at={[0, 0.78]} tex="0" anchor="middle" size={12} opacity={OPACITY.fg} />
      </Plot>
    </div>
  )
}

export function VectorAdditionDiagram() {
  const [a, setA] = useState(3)
  const [b, setB] = useState(-5)
  const sum = a + b
  const lo = Math.min(0, a, sum) - 1,
    hi = Math.max(0, a, sum) + 1
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[lo, hi]} yRange={[-1.2, 1.6]} width={620} height={280}>
        <Polyline
          points={[
            [lo, 0],
            [hi, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.2}
        />
        {Array.from({ length: hi - lo + 1 }, (_, i) => {
          const x = lo + i
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, -0.1],
                  [x, 0.1]
                ]}
                opacity={x === 0 ? OPACITY.fg : OPACITY.faint}
              />
              <Tex
                at={[x, -0.3]}
                tex={String(x)}
                anchor="middle"
                size={10}
                opacity={x === 0 ? OPACITY.dim : OPACITY.faint}
              />
            </g>
          )
        })}
        <Arrow from={[0, 0.36]} to={[a, 0.36]} opacity={OPACITY.fg} head={7} strokeWidth={1.5} />
        <Tex at={[a / 2, 0.6]} tex={`a=${a}`} anchor="middle" size={11} opacity={OPACITY.fg} />
        <Arrow
          from={[a, 0.78]}
          to={[sum, 0.78]}
          opacity={OPACITY.accent}
          head={7}
          strokeWidth={1.5}
        />
        <Tex
          at={[(a + sum) / 2, 1.02]}
          tex={`b=${b}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Dot x={sum} y={0} r={5} opacity={OPACITY.fg} />
        <Tex at={[sum, -0.6]} tex={`a+b = ${sum}`} anchor="middle" size={12} opacity={OPACITY.fg} />
      </Plot>
      <Slider
        label="a"
        value={a}
        min={-6}
        max={6}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => (v >= 0 ? '+' : '') + v}
      />
      <Slider
        label="b"
        value={b}
        min={-6}
        max={6}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => (v >= 0 ? '+' : '') + v}
      />
    </div>
  )
}

export function InequalityFlipDiagram() {
  const [a, setA] = useState(2)
  const [b, setB] = useState(4)
  const [k, setK] = useState(-1)
  const ka = k * a,
    kb = k * b
  const lo = Math.min(0, a, b, ka, kb) - 1,
    hi = Math.max(0, a, b, ka, kb) + 1
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[lo, hi]} yRange={[-1.2, 1.6]} width={620} height={280}>
        <Polyline
          points={[
            [lo, 0.6],
            [hi, 0.6]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.2}
        />
        {Array.from({ length: hi - lo + 1 }, (_, i) => (
          <Polyline
            key={i}
            points={[
              [lo + i, 0.55],
              [lo + i, 0.65]
            ]}
            opacity={lo + i === 0 ? OPACITY.fg : OPACITY.faint}
          />
        ))}
        <Dot x={a} y={0.6} r={5} opacity={OPACITY.fg} />
        <Dot x={b} y={0.6} r={5} opacity={OPACITY.accent} />
        <Tex at={[a, 0.85]} tex={`a=${a}`} anchor="middle" size={11} opacity={OPACITY.fg} />
        <Tex at={[b, 0.85]} tex={`b=${b}`} anchor="middle" size={11} opacity={OPACITY.accent} />
        <Tex
          at={[lo + 0.3, 1.18]}
          tex={a < b ? 'a < b' : a > b ? 'a > b' : 'a = b'}
          anchor="start"
          size={12}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [lo, -0.4],
            [hi, -0.4]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.2}
        />
        {Array.from({ length: hi - lo + 1 }, (_, i) => (
          <Polyline
            key={i}
            points={[
              [lo + i, -0.45],
              [lo + i, -0.35]
            ]}
            opacity={lo + i === 0 ? OPACITY.fg : OPACITY.faint}
          />
        ))}
        <Dot x={ka} y={-0.4} r={5} opacity={OPACITY.fg} />
        <Dot x={kb} y={-0.4} r={5} opacity={OPACITY.accent} />
        <Tex at={[ka, -0.65]} tex={`${k}a=${ka}`} anchor="middle" size={11} opacity={OPACITY.fg} />
        <Tex
          at={[kb, -0.65]}
          tex={`${k}b=${kb}`}
          anchor="middle"
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[lo + 0.3, -1.0]}
          tex={ka < kb ? `${k}a < ${k}b` : ka > kb ? `${k}a > ${k}b` : `${k}a = ${k}b`}
          anchor="start"
          size={12}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="a"
        value={a}
        min={-5}
        max={5}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="b"
        value={b}
        min={-5}
        max={5}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
      <Slider
        label="k"
        value={k}
        min={-3}
        max={3}
        step={1}
        onChange={v => setK(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function AbsoluteValueDiagram() {
  const [c, setC] = useState(3)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-6, 6]} yRange={[-0.9, 1.1]} width={620} height={260}>
        <Polyline
          points={[
            [-6, 0],
            [6, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {Array.from({ length: 13 }, (_, i) => {
          const x = i - 6
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, -0.1],
                  [x, 0.1]
                ]}
                opacity={x === 0 ? OPACITY.fg : OPACITY.faint}
              />
              <Tex
                at={[x, -0.28]}
                tex={String(x)}
                anchor="middle"
                size={10}
                opacity={OPACITY.faint}
              />
            </g>
          )
        })}
        <Polyline
          points={[
            [-c, 0.18],
            [c, 0.18]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={2.5}
        />
        <Dot x={-c} y={0.18} r={4} opacity={OPACITY.fg} fill={false} />
        <Dot x={c} y={0.18} r={4} opacity={OPACITY.fg} fill={false} />
        <Tex at={[-c, 0.4]} tex={`-${c}`} anchor="middle" size={11} opacity={OPACITY.fg} />
        <Tex at={[c, 0.4]} tex={`+${c}`} anchor="middle" size={11} opacity={OPACITY.fg} />
        <Tex at={[0, 0.75]} tex={`|x| < ${c}`} anchor="middle" size={13} opacity={OPACITY.fg} />
      </Plot>
      <Slider
        label="c"
        value={c}
        min={1}
        max={5}
        step={1}
        onChange={v => setC(v | 0)}
        format={v => v}
      />
    </div>
  )
}

// ─── M06 PLACE VALUE AND ALGORITHMS ──────────────────────────────────────────

export function PlaceValueNumberLine() {
  const [v, setV] = useState(3.476)
  const i1 = Math.floor(v)
  const t1 = Math.floor(v * 10) / 10
  const t2 = Math.floor(v * 100) / 100
  const Strip = ({ y, lo, hi, label }) => {
    const N = 10
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
        {Array.from({ length: N + 1 }, (_, i) => {
          const x = i / N
          return (
            <g key={i}>
              <Polyline
                points={[
                  [x, y - 0.05],
                  [x, y + 0.05]
                ]}
                opacity={i === 0 || i === N ? OPACITY.fg : OPACITY.dim}
              />
              <Tex
                at={[x, y - 0.13]}
                tex={(lo + ((hi - lo) * i) / N).toFixed(label === 't' ? 1 : label === 'h' ? 2 : 3)}
                anchor="middle"
                size={9}
                opacity={OPACITY.dim}
              />
            </g>
          )
        })}
        <Dot x={(v - lo) / (hi - lo)} y={y} r={4} opacity={OPACITY.fg} />
      </g>
    )
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.06, 1.06]} yRange={[-1.4, 1.0]} width={620} height={340}>
        <Tex
          at={[0.0, 0.92]}
          tex={`x = ${v.toFixed(3)}`}
          anchor="start"
          size={12}
          opacity={OPACITY.fg}
        />
        <Strip y={0.55} lo={i1} hi={i1 + 1} label="t" />
        <Strip y={-0.05} lo={t1} hi={t1 + 0.1} label="h" />
        <Strip y={-0.65} lo={t2} hi={t2 + 0.01} label="th" />
      </Plot>
      <Slider
        label="x"
        value={v}
        min={0}
        max={9.999}
        step={0.001}
        onChange={setV}
        format={x => x.toFixed(3)}
      />
    </div>
  )
}

export function WholeDistributiveLawArea() {
  const [a, setA] = useState(23),
    [b, setB] = useState(47)
  const a1 = Math.floor(a / 10) * 10,
    a2 = a - a1
  const b1 = Math.floor(b / 10) * 10,
    b2 = b - b1
  const W = 360,
    H = 240
  const wA1 = (a1 / a) * W,
    wA2 = (a2 / a) * W
  const hB1 = (b1 / b) * H,
    hB2 = (b2 / b) * H
  const cells = [
    { x: 0, y: 0, w: wA1, h: hB1, label: `${a1}·${b1}=${a1 * b1}`, op: 0.55 },
    { x: wA1, y: 0, w: wA2, h: hB1, label: `${a2}·${b1}=${a2 * b1}`, op: 0.4 },
    { x: 0, y: hB1, w: wA1, h: hB2, label: `${a1}·${b2}=${a1 * b2}`, op: 0.3 },
    { x: wA1, y: hB1, w: wA2, h: hB2, label: `${a2}·${b2}=${a2 * b2}`, op: 0.2 }
  ]
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 50} ${H + 70}`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(30, 30)" fontFamily="'D-DIN', ui-monospace, monospace">
          {cells.map((c, i) => (
            <g key={i}>
              <rect
                x={c.x}
                y={c.y}
                width={c.w}
                height={c.h}
                fill={FG}
                fillOpacity={c.op}
                stroke={FG}
                strokeWidth={1}
              />
              <text
                x={c.x + c.w / 2}
                y={c.y + c.h / 2 + 4}
                textAnchor="middle"
                fill={c.op > 0.4 ? '#000' : FG}
                fontSize={11}
              >
                {c.label}
              </text>
            </g>
          ))}
          <text x={wA1 / 2} y={-10} textAnchor="middle" fill={FG} fontSize={11} opacity={0.7}>
            {a1}
          </text>
          <text x={wA1 + wA2 / 2} y={-10} textAnchor="middle" fill={FG} fontSize={11} opacity={0.7}>
            {a2}
          </text>
          <text x={-10} y={hB1 / 2 + 4} textAnchor="end" fill={FG} fontSize={11} opacity={0.7}>
            {b1}
          </text>
          <text
            x={-10}
            y={hB1 + hB2 / 2 + 4}
            textAnchor="end"
            fill={FG}
            fontSize={11}
            opacity={0.7}
          >
            {b2}
          </text>
          <text
            x={W / 2}
            y={H + 38}
            textAnchor="middle"
            fill={FG}
            fontSize={13}
          >{`${a} × ${b} = ${a * b}`}</text>
        </g>
      </svg>
      <Slider
        label="a"
        value={a}
        min={11}
        max={99}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="b"
        value={b}
        min={11}
        max={99}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function AdditionCarryVis() {
  const [a, setA] = useState(467),
    [b, setB] = useState(289)
  const [step, setStep] = useState(0)
  const ad = String(a).padStart(4, ' ').split('')
  const bd = String(b).padStart(4, ' ').split('')
  const sum = a + b
  const sd = String(sum).padStart(4, ' ').split('')
  const carries = [0, 0, 0, 0]
  let carry = 0
  for (let i = 3; i >= 0; i--) {
    const da = parseInt(ad[i] || '0', 10) || 0
    const db = parseInt(bd[i] || '0', 10) || 0
    const s = da + db + carry
    carries[i] = s >= 10 ? 1 : 0
    carry = carries[i]
  }
  const W = 380,
    H = 220,
    cw = W / 5
  const colsRevealed = step
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 60} ${H + 30}`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(30, 24)" fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          {carries.map((c, i) =>
            i >= 4 - colsRevealed && c === 1 ? (
              <text
                key={i}
                x={(i - 0.5) * cw + cw}
                y={20}
                fontSize={14}
                opacity={0.7}
                textAnchor="middle"
              >
                1
              </text>
            ) : null
          )}
          {ad.map((c, i) => (
            <text key={i} x={i * cw + cw} y={70} fontSize={28} textAnchor="middle">
              {c}
            </text>
          ))}
          <text x={cw * 0.4} y={120} fontSize={28} textAnchor="middle">
            +
          </text>
          {bd.map((c, i) => (
            <text key={i} x={i * cw + cw} y={120} fontSize={28} textAnchor="middle">
              {c}
            </text>
          ))}
          <line x1={cw * 0.2} y1={140} x2={cw * 4.6} y2={140} stroke={FG} strokeWidth={1.5} />
          {sd.map((c, i) =>
            i >= 4 - colsRevealed ? (
              <text key={i} x={i * cw + cw} y={180} fontSize={28} textAnchor="middle">
                {c}
              </text>
            ) : null
          )}
          {step >= 1 && step <= 4 && (
            <rect
              x={(4 - step) * cw + cw * 0.55}
              y={40}
              width={cw * 0.9}
              height={150}
              fill="none"
              stroke={FG}
              strokeOpacity={0.7}
              strokeDasharray="3 3"
            />
          )}
        </g>
      </svg>
      <Slider
        label="a"
        value={a}
        min={1}
        max={9999}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={9999}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
      <Slider
        label="step"
        value={step}
        min={0}
        max={4}
        step={1}
        onChange={v => setStep(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function SubtractionTradingVis() {
  const [a, setA] = useState(503),
    [b, setB] = useState(247)
  const [step, setStep] = useState(0)
  const result = a - b
  const W = 380,
    H = 200,
    cw = W / 5
  const aOrig = String(a).padStart(4, ' ').split('')
  const bOrig = String(b).padStart(4, ' ').split('')
  const rd = String(result).padStart(4, ' ').split('')
  const colsRevealed = step
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 60} ${H + 30}`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(30, 24)" fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          {aOrig.map((c, i) => (
            <text key={i} x={i * cw + cw} y={48} fontSize={28} textAnchor="middle">
              {c}
            </text>
          ))}
          <text x={cw * 0.4} y={100} fontSize={28} textAnchor="middle">
            −
          </text>
          {bOrig.map((c, i) => (
            <text key={i} x={i * cw + cw} y={100} fontSize={28} textAnchor="middle">
              {c}
            </text>
          ))}
          <line x1={cw * 0.2} y1={120} x2={cw * 4.6} y2={120} stroke={FG} strokeWidth={1.5} />
          {rd.map((c, i) =>
            i >= 4 - colsRevealed ? (
              <text key={i} x={i * cw + cw} y={160} fontSize={28} textAnchor="middle">
                {c}
              </text>
            ) : null
          )}
          {step >= 1 && step <= 4 && (
            <rect
              x={(4 - step) * cw + cw * 0.55}
              y={20}
              width={cw * 0.9}
              height={155}
              fill="none"
              stroke={FG}
              strokeOpacity={0.7}
              strokeDasharray="3 3"
            />
          )}
        </g>
      </svg>
      <Slider
        label="a"
        value={a}
        min={b + 1}
        max={9999}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="b"
        value={b}
        min={1}
        max={Math.min(a - 1, 9998)}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
      <Slider
        label="step"
        value={step}
        min={0}
        max={4}
        step={1}
        onChange={v => setStep(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function WholeMultiplicationArea() {
  const [a, setA] = useState(34),
    [b, setB] = useState(28)
  const a1 = Math.floor(a / 10) * 10,
    a2 = a - a1
  const b1 = Math.floor(b / 10) * 10,
    b2 = b - b1
  const W = 360,
    H = 240
  const wA1 = (a1 / Math.max(a, 1)) * W,
    wA2 = (a2 / Math.max(a, 1)) * W
  const hB1 = (b1 / Math.max(b, 1)) * H,
    hB2 = (b2 / Math.max(b, 1)) * H
  const product = a * b
  const parts = [a1 * b1, a2 * b1, a1 * b2, a2 * b2]
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 200} ${H + 60}`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(20, 30)" fontFamily="'D-DIN', ui-monospace, monospace">
          <rect x={0} y={0} width={wA1} height={hB1} fill={FG} fillOpacity={0.55} stroke={FG} />
          <rect x={wA1} y={0} width={wA2} height={hB1} fill={FG} fillOpacity={0.4} stroke={FG} />
          <rect x={0} y={hB1} width={wA1} height={hB2} fill={FG} fillOpacity={0.3} stroke={FG} />
          <rect x={wA1} y={hB1} width={wA2} height={hB2} fill={FG} fillOpacity={0.18} stroke={FG} />
          <text x={wA1 / 2} y={hB1 / 2 + 4} fill="#000" fontSize={11} textAnchor="middle">
            {parts[0]}
          </text>
          <text x={wA1 + wA2 / 2} y={hB1 / 2 + 4} fill={FG} fontSize={11} textAnchor="middle">
            {parts[1]}
          </text>
          <text x={wA1 / 2} y={hB1 + hB2 / 2 + 4} fill={FG} fontSize={11} textAnchor="middle">
            {parts[2]}
          </text>
          <text x={wA1 + wA2 / 2} y={hB1 + hB2 / 2 + 4} fill={FG} fontSize={11} textAnchor="middle">
            {parts[3]}
          </text>
        </g>
        <g
          transform={`translate(${W + 40}, 50)`}
          fill={FG}
          fontSize={12}
          fontFamily="'D-DIN', ui-monospace, monospace"
        >
          {parts.map((p, i) => (
            <text
              key={i}
              x={0}
              y={i * 22}
            >{`${[a1, a2, a1, a2][i]}·${[b1, b1, b2, b2][i]} = ${p}`}</text>
          ))}
          <line x1={0} y1={4 * 22 - 10} x2={140} y2={4 * 22 - 10} stroke={FG} strokeWidth={1} />
          <text x={0} y={4 * 22 + 10}>{`= ${product}`}</text>
        </g>
      </svg>
      <Slider
        label="a"
        value={a}
        min={11}
        max={99}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="b"
        value={b}
        min={11}
        max={99}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function LongDivisionStepVis() {
  const [N, setN] = useState(3724)
  const [D, setD] = useState(7)
  const [step, setStep] = useState(0)
  const Nd = String(N).split('').map(Number)
  const steps = []
  let curr = 0,
    q = ''
  for (let i = 0; i < Nd.length; i++) {
    curr = curr * 10 + Nd[i]
    const qd = Math.floor(curr / D)
    const sub = qd * D
    const rem = curr - sub
    q += String(qd)
    steps.push({ digit: Nd[i], curr, qd, sub, rem })
    curr = rem
  }
  const W = 360,
    H = 240,
    cw = 40
  const visible = Math.min(step, steps.length)
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 60} ${H + 20}`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(60, 30)" fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          <text x={-30} y={28} fontSize={20} textAnchor="end">
            {D}
          </text>
          <line x1={-12} y1={6} x2={-12} y2={36} stroke={FG} />
          <line x1={-12} y1={6} x2={Nd.length * cw} y2={6} stroke={FG} />
          {Nd.map((d, i) => (
            <text key={i} x={i * cw + cw / 2} y={28} fontSize={20} textAnchor="middle">
              {d}
            </text>
          ))}
          {steps.slice(0, visible).map((s, i) => (
            <text key={i} x={i * cw + cw / 2} y={-6} fontSize={20} textAnchor="middle">
              {s.qd}
            </text>
          ))}
          {steps.slice(0, visible).map((s, i) => {
            const yBase = 50 + i * 38
            return (
              <g key={i}>
                <text
                  x={i * cw + cw / 2}
                  y={yBase}
                  fontSize={16}
                  textAnchor="middle"
                  opacity={0.85}
                >
                  −
                </text>
                <text x={(i + 0.7) * cw + cw / 2} y={yBase} fontSize={16} textAnchor="middle">
                  {s.sub}
                </text>
                <line
                  x1={(i - 0.2) * cw}
                  y1={yBase + 6}
                  x2={(i + 1.2) * cw}
                  y2={yBase + 6}
                  stroke={FG}
                  strokeWidth={1}
                />
                <text x={(i + 0.7) * cw + cw / 2} y={yBase + 24} fontSize={16} textAnchor="middle">
                  {s.rem}
                </text>
              </g>
            )
          })}
          {visible === steps.length && (
            <text
              x={Nd.length * cw + 60}
              y={28}
              fontSize={14}
            >{`= ${q}  r ${steps[steps.length - 1].rem}`}</text>
          )}
        </g>
      </svg>
      <Slider
        label="N"
        value={N}
        min={10}
        max={9999}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v}
      />
      <Slider
        label="D"
        value={D}
        min={2}
        max={99}
        step={1}
        onChange={v => setD(v | 0)}
        format={v => v}
      />
      <Slider
        label="step"
        value={step}
        min={0}
        max={steps.length}
        step={1}
        onChange={v => setStep(v | 0)}
        format={v => v}
      />
    </div>
  )
}

// ─── M07 NUMBER LINE AND NUMBER SYSTEMS ───────────────────────────────────────

export function OperationsOnNumberLine() {
  const [op, setOp] = useState('+')
  const [a, setA] = useState(2.5),
    [b, setB] = useState(1.5)
  let result = 0
  if (op === '+') result = a + b
  else if (op === '−') result = a - b
  else if (op === '×') result = a * b
  else if (op === '÷') result = b !== 0 ? a / b : NaN
  const xMax = 10,
    xMin = -2
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginBottom: 8 }}>
        {['+', '−', '×', '÷'].map(o => (
          <button
            key={o}
            onClick={() => setOp(o)}
            style={{
              background: 'transparent',
              color: FG,
              border: '1px solid rgba(240,240,250,0.2)',
              padding: '4px 12px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              opacity: op === o ? 1 : 0.4,
              fontSize: 12
            }}
          >
            {o}
          </button>
        ))}
      </div>
      <Plot xRange={[xMin, xMax]} yRange={[-1.5, 1.5]} width={620} height={240}>
        <Polyline
          points={[
            [xMin, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.fg}
        />
        {Array.from({ length: 13 }, (_, i) => i - 2).map(t => (
          <g key={t}>
            <Polyline
              points={[
                [t, -0.08],
                [t, 0.08]
              ]}
              opacity={OPACITY.dim}
            />
            <Tex at={[t, -0.18]} tex={String(t)} anchor="middle" size={10} opacity={OPACITY.dim} />
          </g>
        ))}
        {op === '+' && (
          <>
            <Arrow from={[0, 0.4]} to={[a, 0.4]} opacity={OPACITY.fg} />
            <Arrow from={[a, 0.7]} to={[a + b, 0.7]} opacity={OPACITY.accent} />
            <Dot x={result} y={0} r={4} />
          </>
        )}
        {op === '−' && (
          <>
            <Arrow from={[0, 0.4]} to={[a, 0.4]} opacity={OPACITY.fg} />
            <Arrow from={[a, 0.7]} to={[a - b, 0.7]} opacity={OPACITY.accent} />
            <Dot x={result} y={0} r={4} />
          </>
        )}
        {op === '×' && (
          <>
            {Array.from({ length: Math.min(Math.abs(Math.round(b)), 10) }, (_, i) => i).map(i => (
              <Arrow
                key={i}
                from={[i * a, 0.4 + i * 0.05]}
                to={[(i + 1) * a, 0.4 + i * 0.05]}
                opacity={0.5 + 0.05 * i}
              />
            ))}
            <Dot x={result} y={0} r={4} />
          </>
        )}
        {op === '÷' && (
          <>
            {Array.from({ length: Math.max(0, Math.floor(Math.abs(a / b))) }, (_, i) => i).map(
              i => (
                <Polyline
                  key={i}
                  points={[
                    [i * b, 0.4],
                    [(i + 1) * b, 0.4]
                  ]}
                  opacity={OPACITY.fg}
                  strokeWidth={2}
                />
              )
            )}
            <Arrow from={[0, 0.7]} to={[a, 0.7]} opacity={OPACITY.dim} />
            <Tex
              at={[xMax - 1, 1.1]}
              tex={`${a.toFixed(2)} \\div ${b.toFixed(2)} = ${result.toFixed(3)}`}
              anchor="end"
              size={11}
            />
          </>
        )}
        {op !== '÷' && (
          <Tex
            at={[xMax - 1, 1.1]}
            tex={`${a.toFixed(2)} ${op} ${b.toFixed(2)} = ${result.toFixed(3)}`}
            anchor="end"
            size={11}
          />
        )}
      </Plot>
      <Slider label="a" value={a} min={-2} max={8} step={0.1} onChange={setA} />
      <Slider label="b" value={b} min={op === '÷' ? 0.1 : -2} max={8} step={0.1} onChange={setB} />
    </div>
  )
}

export function NumberLineWithTypes() {
  const [showSet, setShowSet] = useState({ N: true, Z: true, Q: true, R: true })
  const xMin = -3.5,
    xMax = 6.5
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[-2.2, 2.0]} width={620} height={300}>
        <Polyline
          points={[
            [xMin, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.fg}
        />
        {Array.from({ length: 11 }, (_, i) => i - 4).map(t => (
          <g key={t}>
            <Polyline
              points={[
                [t, -0.08],
                [t, 0.08]
              ]}
              opacity={OPACITY.dim}
            />
            <Tex at={[t, -0.22]} tex={String(t)} anchor="middle" size={10} opacity={OPACITY.dim} />
          </g>
        ))}
        {showSet.R && (
          <g>
            <Polyline
              points={[
                [xMin + 0.2, 1.3],
                [xMax - 0.2, 1.3]
              ]}
              opacity={0.5}
              strokeWidth={3}
            />
            <Tex at={[xMin + 0.3, 1.5]} tex="\mathbb{R}" anchor="start" size={12} />
          </g>
        )}
        {showSet.Q && (
          <g>
            {[
              [-3, 1],
              [-7, 3],
              [-5, 2],
              [-2, 1],
              [-3, 2],
              [-1, 1],
              [-1, 3],
              [0, 1],
              [1, 3],
              [1, 2],
              [2, 3],
              [1, 1],
              [4, 3],
              [3, 2],
              [5, 3],
              [2, 1],
              [7, 3],
              [5, 2],
              [3, 1],
              [10, 3],
              [7, 2],
              [4, 1],
              [9, 2],
              [5, 1],
              [11, 2],
              [6, 1]
            ].map((pq, i) => {
              const v = pq[0] / pq[1]
              return v > xMin && v < xMax ? (
                <Dot key={i} x={v} y={0.85} r={1.6} opacity={0.7} />
              ) : null
            })}
            <Tex at={[xMin + 0.3, 1.0]} tex="\mathbb{Q}" anchor="start" size={12} />
          </g>
        )}
        {showSet.Z && (
          <g>
            {Array.from({ length: 11 }, (_, i) => i - 4).map(t => (
              <Dot key={t} x={t} y={0.4} r={3} opacity={0.85} />
            ))}
            <Tex at={[xMin + 0.3, 0.55]} tex="\mathbb{Z}" anchor="start" size={12} />
          </g>
        )}
        {showSet.N && (
          <g>
            {Array.from({ length: 7 }, (_, i) => i + 1).map(t => (
              <Dot key={t} x={t} y={-0.55} r={3.2} opacity={1} />
            ))}
            <Tex at={[xMin + 0.3, -0.4]} tex="\mathbb{N}" anchor="start" size={12} />
          </g>
        )}
        {showSet.R && (
          <g>
            <Dot x={Math.sqrt(2)} y={1.3} r={3} opacity={1} />
            <Dot x={Math.PI} y={1.3} r={3} opacity={1} />
            <Dot x={Math.E} y={1.3} r={3} opacity={1} />
            <Tex at={[Math.sqrt(2), 1.55]} tex="\sqrt{2}" anchor="middle" size={9} opacity={0.85} />
            <Tex at={[Math.PI, 1.55]} tex="\pi" anchor="middle" size={9} opacity={0.85} />
            <Tex at={[Math.E, 1.55]} tex="e" anchor="middle" size={9} opacity={0.85} />
          </g>
        )}
      </Plot>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8 }}>
        {['N', 'Z', 'Q', 'R'].map(s => (
          <button
            key={s}
            onClick={() => setShowSet({ ...showSet, [s]: !showSet[s] })}
            style={{
              background: 'transparent',
              color: FG,
              border: '1px solid rgba(240,240,250,0.2)',
              padding: '4px 12px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              opacity: showSet[s] ? 1 : 0.3,
              fontSize: 11
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}

export function RoundingVisualization() {
  const [v, setV] = useState(3.47)
  const [place, setPlace] = useState(0)
  const unit = Math.pow(10, -place)
  const lo = Math.floor(v / unit) * unit
  const hi = lo + unit
  const mid = (lo + hi) / 2
  const rounded = Math.round(v / unit) * unit
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[lo - unit * 0.2, hi + unit * 0.2]}
        yRange={[-0.8, 0.8]}
        width={620}
        height={240}
       
      >
        <Polyline
          points={[
            [lo - unit * 0.2, 0],
            [hi + unit * 0.2, 0]
          ]}
          opacity={OPACITY.fg}
        />
        {[lo, mid, hi].map((t, i) => (
          <g key={i}>
            <Polyline
              points={[
                [t, -0.12],
                [t, 0.12]
              ]}
              opacity={i === 1 ? OPACITY.faint : OPACITY.fg}
              dash={i === 1 ? '2 3' : null}
            />
            <Tex
              at={[t, -0.28]}
              tex={t.toFixed(Math.max(0, place))}
              anchor="middle"
              size={10}
              opacity={i === 1 ? OPACITY.dim : OPACITY.fg}
            />
          </g>
        ))}
        <Polyline
          points={[
            [lo, 0.35],
            [rounded, 0.35]
          ]}
          opacity={0.85}
          strokeWidth={2}
        />
        <Dot x={v} y={0} r={3.5} opacity={1} />
        <Tex at={[v, 0.18]} tex={`x = ${v.toFixed(3)}`} anchor="middle" size={10} />
        <Tex
          at={[(lo + hi) / 2, 0.55]}
          tex={`\\to ${rounded.toFixed(Math.max(0, place))}`}
          anchor="middle"
          size={11}
          opacity={0.85}
        />
      </Plot>
      <Slider
        label="x"
        value={v}
        min={0}
        max={10}
        step={0.001}
        onChange={setV}
        format={x => x.toFixed(3)}
      />
      <Slider
        label="place"
        value={place}
        min={-1}
        max={2}
        step={1}
        onChange={p => setPlace(p | 0)}
        format={p => ['tens', 'ones', 'tenths', 'hundredths'][p + 1]}
      />
    </div>
  )
}

export function BaseConversionVis() {
  const [n, setN] = useState(73)
  const [base, setBase] = useState(2)
  const steps = []
  let cur = n
  while (cur > 0 && steps.length < 24) {
    const r = cur % base,
      q = Math.floor(cur / base)
    steps.push({ cur, q, r })
    cur = q
  }
  const digits = steps.map(s => s.r).reverse()
  const digitChar = d => (d < 10 ? String(d) : String.fromCharCode(55 + d))
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 520 280" width="100%" style={{ display: 'block' }}>
        <g
          transform="translate(40, 30)"
          fontFamily="'D-DIN', ui-monospace, monospace"
          fill={FG}
          fontSize={13}
        >
          {steps.map((s, i) => (
            <g key={i} transform={`translate(0, ${i * 26})`}>
              <text x={0}>{`${s.cur} ÷ ${base}`}</text>
              <text x={120}>{`= ${s.q}`}</text>
              <text x={210} opacity={0.5}>
                r =
              </text>
              <text x={250} fontWeight="600">
                {digitChar(s.r)}
              </text>
            </g>
          ))}
          <line
            x1={0}
            y1={steps.length * 26 + 4}
            x2={300}
            y2={steps.length * 26 + 4}
            stroke={FG}
            opacity={0.4}
          />
          <text x={0} y={steps.length * 26 + 28} opacity={0.6} fontSize={11}>
            Read remainders bottom-up:
          </text>
          <text x={0} y={steps.length * 26 + 50} fontSize={20}>
            {n}
            <tspan fontSize={11} dy={4}>{`(10)`}</tspan>
            <tspan dx={12}>=</tspan>
            <tspan dx={12}>{digits.map(digitChar).join('')}</tspan>
            <tspan fontSize={11} dy={4}>{`(${base})`}</tspan>
          </text>
        </g>
      </svg>
      <Slider
        label="n"
        value={n}
        min={1}
        max={2000}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v}
      />
      <Slider
        label="base"
        value={base}
        min={2}
        max={16}
        step={1}
        onChange={v => setBase(v | 0)}
        format={v => v}
      />
    </div>
  )
}

// ─── M08 NUMBER THEORY ────────────────────────────────────────────────────────

function extGcd8(a, b) {
  if (b === 0) return [a, 1, 0]
  const [g, s1, t1] = extGcd8(b, a % b)
  return [g, t1, s1 - Math.floor(a / b) * t1]
}
function primeFactors8(n) {
  const out = {}
  for (let p = 2; p * p <= n; p++)
    while (n % p === 0) {
      out[p] = (out[p] || 0) + 1
      n /= p
    }
  if (n > 1) out[n] = (out[n] || 0) + 1
  return out
}

export function DivisionRemainderVis() {
  const [n, setN] = useState(47)
  const [d, setD] = useState(7)
  const q = Math.floor(n / d)
  const r = n - q * d
  const xMax = Math.max(n + 2, 12)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, xMax]} yRange={[-1.0, 1.2]} width={620} height={240}>
        <Polyline
          points={[
            [0, 0],
            [n, 0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {Array.from({ length: q }, (_, i) => (
          <g key={i}>
            <Polyline
              points={[
                [i * d, 0],
                [i * d, 0.3]
              ]}
              opacity={OPACITY.fg}
              strokeWidth={1.5}
            />
            <Polyline
              points={[
                [i * d, 0.3],
                [(i + 1) * d, 0.3]
              ]}
              opacity={0.85}
              strokeWidth={2}
            />
            <Polyline
              points={[
                [(i + 1) * d, 0],
                [(i + 1) * d, 0.3]
              ]}
              opacity={OPACITY.fg}
              strokeWidth={1.5}
            />
            <Tex
              at={[(i + 0.5) * d, 0.5]}
              tex={String(d)}
              anchor="middle"
              size={10}
              opacity={0.7}
            />
          </g>
        ))}
        {r > 0 && (
          <g>
            <Polyline
              points={[
                [q * d, 0],
                [q * d, -0.3]
              ]}
              opacity={OPACITY.fg}
              strokeWidth={1.5}
            />
            <Polyline
              points={[
                [q * d, -0.3],
                [n, -0.3]
              ]}
              opacity={0.85}
              strokeWidth={2}
              dash="3 2"
            />
            <Polyline
              points={[
                [n, 0],
                [n, -0.3]
              ]}
              opacity={OPACITY.fg}
              strokeWidth={1.5}
            />
            <Tex at={[(q * d + n) / 2, -0.5]} tex={`r = ${r}`} anchor="middle" size={10} />
          </g>
        )}
        {Array.from({ length: n + 1 }, (_, i) => i).map(i => (
          <Polyline
            key={i}
            points={[
              [i, -0.05],
              [i, 0.05]
            ]}
            opacity={OPACITY.dim}
          />
        ))}
        <Tex at={[0, -0.85]} tex={`${n} = ${q} \\cdot ${d} + ${r}`} anchor="start" size={12} />
      </Plot>
      <Slider
        label="n"
        value={n}
        min={1}
        max={120}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v}
      />
      <Slider
        label="d"
        value={d}
        min={1}
        max={20}
        step={1}
        onChange={v => setD(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function SieveVis() {
  const [step, setStep] = useState(0)
  const N = 100
  const state = useMemo(() => {
    const isPrime = Array(N + 1).fill(true)
    isPrime[0] = isPrime[1] = false
    const crossed = Array(N + 1).fill(false)
    const primesProcessed = []
    let s = 0
    for (let p = 2; p * p <= N && s < step; p++) {
      if (isPrime[p]) {
        primesProcessed.push(p)
        for (let m = p * p; m <= N; m += p) {
          isPrime[m] = false
          crossed[m] = true
        }
        s++
      }
    }
    return { isPrime, crossed, primesProcessed }
  }, [step])
  const cell = 26,
    gridSize = 10
  const W = cell * gridSize,
    H = cell * gridSize
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 30} ${H + 30}`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(15, 15)" fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          {Array.from({ length: N }, (_, i) => i + 1).map(n => {
            const x = ((n - 1) % gridSize) * cell
            const y = Math.floor((n - 1) / gridSize) * cell
            const prime = state.isPrime[n]
            const crossed = state.crossed[n]
            const last = state.primesProcessed[state.primesProcessed.length - 1]
            const justSieved = last && n > last && n % last === 0
            return (
              <g key={n}>
                <rect
                  x={x}
                  y={y}
                  width={cell}
                  height={cell}
                  fill="none"
                  stroke={FG}
                  strokeOpacity={0.15}
                />
                <text
                  x={x + cell / 2}
                  y={y + cell * 0.65}
                  fontSize={11}
                  textAnchor="middle"
                  opacity={n === 1 ? 0.3 : crossed ? 0.3 : 1}
                  fontWeight={prime && n > 1 ? '600' : '400'}
                >
                  {n}
                </text>
                {crossed && (
                  <line
                    x1={x + 4}
                    y1={y + cell - 4}
                    x2={x + cell - 4}
                    y2={y + 4}
                    stroke={FG}
                    strokeOpacity={justSieved ? 0.85 : 0.4}
                    strokeWidth={1}
                  />
                )}
              </g>
            )
          })}
        </g>
      </svg>
      <Slider
        label="step"
        value={step}
        min={0}
        max={4}
        step={1}
        onChange={s => setStep(s | 0)}
        format={s => (s === 0 ? 'none' : `p ≤ ${[2, 3, 5, 7][s - 1]}`)}
      />
    </div>
  )
}

export function GcdLinearCombinationVis() {
  const [a, setA] = useState(48),
    [b, setB] = useState(18)
  const [g, s, t] = extGcd8(a, b)
  const Ascale = 360 / Math.max(Math.abs(s * a), Math.abs(t * b), Math.abs(g))
  const W = 480
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 60} 220`} width="100%" style={{ display: 'block' }}>
        <g
          transform="translate(30, 30)"
          fontFamily="'D-DIN', ui-monospace, monospace"
          fill={FG}
          fontSize={12}
        >
          <text x={-10} y={20} textAnchor="end">{`${s}·${a} = ${s * a}`}</text>
          <line
            x1={W / 2}
            y1={20}
            x2={W / 2 + s * a * Ascale * 0.5}
            y2={20}
            stroke={FG}
            strokeWidth={3}
            opacity={s * a >= 0 ? 0.8 : 0.5}
          />
          <line x1={W / 2} y1={10} x2={W / 2} y2={30} stroke={FG} opacity={0.4} />
          <text x={-10} y={60} textAnchor="end">{`${t}·${b} = ${t * b}`}</text>
          <line
            x1={W / 2}
            y1={60}
            x2={W / 2 + t * b * Ascale * 0.5}
            y2={60}
            stroke={FG}
            strokeWidth={3}
            opacity={t * b >= 0 ? 0.8 : 0.5}
          />
          <line x1={W / 2} y1={50} x2={W / 2} y2={70} stroke={FG} opacity={0.4} />
          <text x={-10} y={120} textAnchor="end">{`= ${g}`}</text>
          <line
            x1={W / 2}
            y1={120}
            x2={W / 2 + g * Ascale * 0.5}
            y2={120}
            stroke={FG}
            strokeWidth={4}
            opacity={1}
          />
          <line x1={W / 2} y1={110} x2={W / 2} y2={130} stroke={FG} opacity={0.4} />
          <text
            x={0}
            y={170}
            fontSize={13}
          >{`${s}·${a} + ${t}·${b} = gcd(${a}, ${b}) = ${g}`}</text>
        </g>
      </svg>
      <Slider
        label="a"
        value={a}
        min={2}
        max={120}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="b"
        value={b}
        min={2}
        max={120}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function EAStepperVis() {
  const [a, setA] = useState(252),
    [b, setB] = useState(105)
  const steps = []
  let x = a,
    y = b
  while (y !== 0 && steps.length < 20) {
    const q = Math.floor(x / y),
      r = x - q * y
    steps.push({ x, y, q, r })
    x = y
    y = r
  }
  const g = x
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 520 ${steps.length * 28 + 60}`} width="100%" style={{ display: 'block' }}>
        <g
          transform="translate(20, 24)"
          fontFamily="'D-DIN', ui-monospace, monospace"
          fill={FG}
          fontSize={13}
        >
          {steps.map((s, i) => (
            <g key={i} transform={`translate(0, ${i * 28})`}>
              <text x={0}>{`${s.x}`}</text>
              <text x={70} opacity={0.5}>
                =
              </text>
              <text x={90}>{`${s.q}`}</text>
              <text x={130} opacity={0.5}>
                ·
              </text>
              <text x={150}>{`${s.y}`}</text>
              <text x={195} opacity={0.5}>
                +
              </text>
              <text x={215} fontWeight={s.r === 0 ? '400' : '600'}>{`${s.r}`}</text>
              <line
                x1={290}
                y1={-4}
                x2={290 + s.x * 0.5}
                y2={-4}
                stroke={FG}
                opacity={0.4}
                strokeWidth={2}
              />
              <line
                x1={290}
                y1={6}
                x2={290 + s.y * 0.5}
                y2={6}
                stroke={FG}
                opacity={0.85}
                strokeWidth={2}
              />
            </g>
          ))}
          <text
            x={0}
            y={steps.length * 28 + 16}
            fontSize={14}
            opacity={1}
          >{`gcd(${a}, ${b}) = ${g}`}</text>
        </g>
      </svg>
      <Slider
        label="a"
        value={a}
        min={2}
        max={500}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="b"
        value={b}
        min={2}
        max={500}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function GcdLcmVennVis() {
  const [a, setA] = useState(60),
    [b, setB] = useState(84)
  const fA = primeFactors8(a),
    fB = primeFactors8(b)
  const allP = Array.from(new Set([...Object.keys(fA), ...Object.keys(fB)]))
    .map(Number)
    .sort((x, y) => x - y)
  const inter = [],
    onlyA = [],
    onlyB = []
  allP.forEach(p => {
    const ea = fA[p] || 0,
      eb = fB[p] || 0,
      mn = Math.min(ea, eb)
    for (let i = 0; i < mn; i++) inter.push(p)
    for (let i = 0; i < ea - mn; i++) onlyA.push(p)
    for (let i = 0; i < eb - mn; i++) onlyB.push(p)
  })
  const g = inter.reduce((a, b) => a * b, 1)
  const l = (a * b) / g
  const W = 460,
    H = 240,
    r = 90
  const cx1 = W / 2 - 60,
    cx2 = W / 2 + 60,
    cy = H / 2
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W} ${H + 40}`} width="100%" style={{ display: 'block' }}>
        <g fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          <circle cx={cx1} cy={cy} r={r} fill="none" stroke={FG} opacity={0.5} />
          <circle cx={cx2} cy={cy} r={r} fill="none" stroke={FG} opacity={0.5} />
          <text x={cx1 - r * 0.7} y={cy - r - 6} fontSize={11} opacity={0.7}>{`a = ${a}`}</text>
          <text
            x={cx2 + r * 0.7}
            y={cy - r - 6}
            textAnchor="end"
            fontSize={11}
            opacity={0.7}
          >{`b = ${b}`}</text>
          {onlyA.map((p, i) => (
            <text key={'a' + i} x={cx1 - 50} y={cy - 30 + i * 18} fontSize={13}>
              {p}
            </text>
          ))}
          {onlyB.map((p, i) => (
            <text key={'b' + i} x={cx2 + 30} y={cy - 30 + i * 18} fontSize={13}>
              {p}
            </text>
          ))}
          {inter.map((p, i) => (
            <text
              key={'i' + i}
              x={(cx1 + cx2) / 2}
              y={cy - 25 + i * 18}
              fontSize={13}
              textAnchor="middle"
            >
              {p}
            </text>
          ))}
          <text x={W / 2} y={H + 16} textAnchor="middle" fontSize={12}>
            {`gcd = ${g}`}
            <tspan dx={20}>{`lcm = ${l}`}</tspan>
          </text>
        </g>
      </svg>
      <Slider
        label="a"
        value={a}
        min={2}
        max={300}
        step={1}
        onChange={v => setA(v | 0)}
        format={v => v}
      />
      <Slider
        label="b"
        value={b}
        min={2}
        max={300}
        step={1}
        onChange={v => setB(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function PythagoreanTripleVis() {
  const [m, setM] = useState(3),
    [n, setN] = useState(2)
  const a = m * m - n * n,
    b = 2 * m * n,
    c = m * m + n * n
  const primitive = m > n && gcd(m, n) === 1 && m % 2 !== n % 2
  const scale = 220 / Math.max(a, b, 1)
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 360 280" width="100%" style={{ display: 'block' }}>
        <g transform="translate(60, 40)" fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          {m > n && (
            <g>
              <polygon
                points={`0,${b * scale} ${a * scale},${b * scale} 0,0`}
                fill={FG}
                fillOpacity={0.1}
                stroke={FG}
                strokeWidth={1.5}
              />
              <text
                x={(a * scale) / 2}
                y={b * scale + 18}
                fontSize={12}
                textAnchor="middle"
              >{`a = ${a}`}</text>
              <text
                x={-10}
                y={(b * scale) / 2 + 4}
                fontSize={12}
                textAnchor="end"
              >{`b = ${b}`}</text>
              <text
                x={(a * scale) / 2 + 6}
                y={(b * scale) / 2 - 6}
                fontSize={12}
                transform={`rotate(${(-Math.atan2(b * scale, a * scale) * 180) / Math.PI}, ${(a * scale) / 2 + 6}, ${(b * scale) / 2 - 6})`}
              >{`c = ${c}`}</text>
              <text
                x={0}
                y={-20}
                fontSize={11}
                opacity={0.7}
              >{`(${a})² + (${b})² = ${a * a + b * b} = (${c})²`}</text>
              <text x={0} y={b * scale + 42} fontSize={11} opacity={0.85}>
                {primitive ? 'primitive' : `not primitive (gcd = ${gcd(gcd(a, b), c)})`}
              </text>
            </g>
          )}
        </g>
      </svg>
      <Slider
        label="m"
        value={m}
        min={2}
        max={9}
        step={1}
        onChange={v => setM(v | 0)}
        format={v => v}
      />
      <Slider
        label="n"
        value={n}
        min={1}
        max={Math.max(1, m - 1)}
        step={1}
        onChange={v => setN(Math.min(m - 1, v | 0))}
        format={v => v}
      />
    </div>
  )
}

export function PerfectSquareParityVis() {
  const [k, setK] = useState(20)
  const cell = 22,
    cols = 4
  const W = cell * cols + 60,
    H = cell * (k + 1) + 80
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 80} ${H}`} width="100%" style={{ display: 'block' }}>
        <g
          transform="translate(40, 24)"
          fontFamily="'D-DIN', ui-monospace, monospace"
          fill={FG}
          fontSize={11}
        >
          {[0, 1, 2, 3].map(c => (
            <text
              key={c}
              x={c * cell + cell / 2}
              y={-4}
              textAnchor="middle"
              opacity={0.6}
            >{`≡${c}`}</text>
          ))}
          {Array.from({ length: k + 1 }, (_, i) => {
            const sq = i * i,
              m = sq % 4
            const x = m * cell,
              y = i * (cell + 2)
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width={cell}
                  height={cell - 2}
                  fill={FG}
                  fillOpacity={0.25}
                  stroke={FG}
                  strokeOpacity={0.6}
                />
                <text x={x + cell / 2} y={y + cell * 0.65} textAnchor="middle">
                  {sq}
                </text>
                <text x={-12} y={y + cell * 0.65} textAnchor="end" opacity={0.5}>
                  {i}
                </text>
              </g>
            )
          })}
          <text x={0} y={(k + 2) * (cell + 2) + 12} fontSize={11} opacity={0.85}>
            Squares only land in residues 0 and 1 (mod 4).
          </text>
        </g>
      </svg>
      <Slider
        label="k"
        value={k}
        min={4}
        max={20}
        step={1}
        onChange={v => setK(v | 0)}
        format={v => v}
      />
    </div>
  )
}

// ─── M09 DECIMAL FUNDAMENTALS ─────────────────────────────────────────────────

export function FractionToDecimalVis() {
  const v1 = 2 / 9,
    v2 = 3 / 11
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.02, 0.5]} yRange={[-1.0, 1.2]} width={620} height={240}>
        <Polyline
          points={[
            [0, 0],
            [0.5, 0]
          ]}
          opacity={OPACITY.fg}
        />
        {Array.from({ length: 6 }, (_, i) => i / 10).map(t => (
          <g key={t}>
            <Polyline
              points={[
                [t, -0.06],
                [t, 0.06]
              ]}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[t, -0.18]}
              tex={t.toFixed(1)}
              anchor="middle"
              size={9}
              opacity={OPACITY.dim}
            />
          </g>
        ))}
        <Dot x={v1} y={0} r={4} />
        <Tex at={[v1, 0.22]} tex={`\\tfrac{2}{9} = 0.\\overline{2}`} anchor="middle" size={11} />
        <Dot x={v2} y={0} r={4} />
        <Tex at={[v2, -0.45]} tex={`\\tfrac{3}{11} = 0.\\overline{27}`} anchor="middle" size={11} />
      </Plot>
    </div>
  )
}

export function NumberLinePlacement() {
  const [v, setV] = useState(41.15)
  const lo1 = Math.floor(v),
    hi1 = lo1 + 1
  const lo2 = Math.floor(v * 10) / 10,
    hi2 = lo2 + 0.1
  const Strip = ({ y, lo, hi, decimals }) => (
    <g>
      <Polyline
        points={[
          [0, y],
          [1, y]
        ]}
        opacity={OPACITY.fg}
      />
      {Array.from({ length: 11 }, (_, i) => i / 10).map(t => (
        <g key={t}>
          <Polyline
            points={[
              [t, y - 0.06],
              [t, y + 0.06]
            ]}
            opacity={t === 0 || t === 1 ? OPACITY.fg : OPACITY.dim}
          />
          {(t === 0 || t === 1 || t === 0.5) && (
            <Tex
              at={[t, y - 0.16]}
              tex={(lo + (hi - lo) * t).toFixed(decimals)}
              anchor="middle"
              size={9}
              opacity={OPACITY.dim}
            />
          )}
        </g>
      ))}
      <Dot x={(v - lo) / (hi - lo)} y={y} r={4} />
    </g>
  )
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.05, 1.05]} yRange={[-1.5, 1.0]} width={620} height={300}>
        <Strip y={0.55} lo={lo1} hi={hi1} decimals={0} />
        <Strip y={-0.05} lo={lo2} hi={hi2} decimals={1} />
        <Tex at={[0, 0.92]} tex={`x = ${v.toFixed(2)}`} anchor="start" size={12} />
      </Plot>
      <Slider
        label="x"
        value={v}
        min={41}
        max={42}
        step={0.01}
        onChange={setV}
        format={x => x.toFixed(2)}
      />
    </div>
  )
}

export function DecimalComparisonVis() {
  const [a, setA] = useState(0.4),
    [b, setB] = useState(0.38972)
  const aD = a.toFixed(5).split('')
  const bD = b.toFixed(5).split('')
  let firstDiff = -1
  for (let i = 0; i < aD.length; i++)
    if (aD[i] !== bD[i]) {
      firstDiff = i
      break
    }
  const W = 360,
    cw = 36
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 100} 180`} width="100%" style={{ display: 'block' }}>
        <g transform="translate(40, 30)" fontFamily="'D-DIN', ui-monospace, monospace" fill={FG}>
          {aD.map((c, i) => (
            <text
              key={'a' + i}
              x={i * cw + cw / 2}
              y={40}
              fontSize={26}
              textAnchor="middle"
              opacity={
                firstDiff >= 0 && i === firstDiff ? 1 : firstDiff >= 0 && i > firstDiff ? 0.4 : 1
              }
            >
              {c}
            </text>
          ))}
          {bD.map((c, i) => (
            <text
              key={'b' + i}
              x={i * cw + cw / 2}
              y={90}
              fontSize={26}
              textAnchor="middle"
              opacity={
                firstDiff >= 0 && i === firstDiff ? 1 : firstDiff >= 0 && i > firstDiff ? 0.4 : 1
              }
            >
              {c}
            </text>
          ))}
          {firstDiff >= 0 && (
            <rect
              x={firstDiff * cw + 4}
              y={10}
              width={cw - 8}
              height={100}
              fill="none"
              stroke={FG}
              strokeOpacity={0.7}
              strokeDasharray="3 3"
            />
          )}
          <text x={0} y={140} fontSize={13}>{`${a} ${a > b ? '>' : a < b ? '<' : '='} ${b}`}</text>
        </g>
      </svg>
      <Slider
        label="a"
        value={a}
        min={0}
        max={1}
        step={0.0001}
        onChange={setA}
        format={x => x.toFixed(5)}
      />
      <Slider
        label="b"
        value={b}
        min={0}
        max={1}
        step={0.0001}
        onChange={setB}
        format={x => x.toFixed(5)}
      />
    </div>
  )
}

export function ScientificNotationVis() {
  const [m, setM] = useState(3.5)
  const [k, setK] = useState(2)
  const v = m * Math.pow(10, k)
  const xMin = -4,
    xMax = 8
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[xMin - 0.4, xMax + 0.4]}
        yRange={[-0.8, 1.0]}
        width={620}
        height={240}
       
      >
        <Polyline
          points={[
            [xMin, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.fg}
        />
        {Array.from({ length: xMax - xMin + 1 }, (_, i) => i + xMin).map(e => (
          <g key={e}>
            <Polyline
              points={[
                [e, -0.08],
                [e, 0.08]
              ]}
              opacity={OPACITY.dim}
            />
            <Tex at={[e, -0.22]} tex={`10^{${e}}`} anchor="middle" size={9} opacity={OPACITY.dim} />
          </g>
        ))}
        {Array.from({ length: 10 }, (_, i) => i + 1).map(mm => (
          <Polyline
            key={mm}
            points={[
              [k + Math.log10(mm), -0.04],
              [k + Math.log10(mm), 0.04]
            ]}
            opacity={OPACITY.faint}
          />
        ))}
        <Dot x={k + Math.log10(m)} y={0} r={4} />
        <Tex
          at={[k + Math.log10(m), 0.28]}
          tex={`${m.toFixed(2)} \\times 10^{${k}}`}
          anchor="middle"
          size={11}
        />
        <Tex at={[xMin, 0.7]} tex={`= ${v.toExponential(3)}`} anchor="start" size={11} />
      </Plot>
      <Slider
        label="m"
        value={m}
        min={1}
        max={9.99}
        step={0.01}
        onChange={setM}
        format={v => v.toFixed(2)}
      />
      <Slider
        label="k"
        value={k}
        min={xMin}
        max={xMax}
        step={1}
        onChange={v => setK(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function PlaceValueVis() {
  const [v, setV] = useState(35.2647)
  const intPart = Math.floor(v)
  const intDigits = String(intPart).split('').map(Number)
  const intPlaces = intDigits.map((d, i) => intDigits.length - 1 - i)
  const fracStr = v.toFixed(4).split('.')[1] || ''
  const fracDigits = fracStr.split('').map(Number)
  const all = [
    ...intDigits.map((d, i) => ({ d, p: intPlaces[i], val: d * Math.pow(10, intPlaces[i]) })),
    ...fracDigits.map((d, i) => ({ d, p: -(i + 1), val: d * Math.pow(10, -(i + 1)) }))
  ]
  const W = 480,
    barH = 24,
    maxBar = 320
  return (
    <div style={{ width: '100%' }}>
      <svg
        viewBox={`0 0 ${W + 60} ${all.length * (barH + 6) + 50}`}
        width="100%"
        style={{ display: 'block' }}
      >
        <g
          transform="translate(20, 24)"
          fontFamily="'D-DIN', ui-monospace, monospace"
          fill={FG}
          fontSize={12}
        >
          <text x={0} y={-6} fontSize={14}>{`${v.toFixed(4)}`}</text>
          {all.map((it, i) => {
            const w = (Math.abs(it.val) / v) * maxBar
            return (
              <g key={i} transform={`translate(0, ${i * (barH + 6) + 12})`}>
                <text x={0} y={barH * 0.65}>
                  {it.d}
                </text>
                <text x={20} y={barH * 0.65} opacity={0.6}>
                  <tspan>{'× 10'}</tspan>
                  <tspan dy={-5} fontSize={9}>
                    {it.p}
                  </tspan>
                </text>
                <text x={120} y={barH * 0.65} opacity={0.6}>{`= ${it.val}`}</text>
                <rect
                  x={210}
                  y={4}
                  width={Math.max(2, w)}
                  height={barH - 8}
                  fill={FG}
                  fillOpacity={0.4}
                  stroke={FG}
                  strokeOpacity={0.8}
                />
              </g>
            )
          })}
        </g>
      </svg>
      <Slider
        label="v"
        value={v}
        min={0.0001}
        max={99.9999}
        step={0.0001}
        onChange={setV}
        format={x => x.toFixed(4)}
      />
    </div>
  )
}

// ─── M10 INFINITE AND REPEATING DECIMALS ─────────────────────────────────────

export function SqueezingVis() {
  const [n, setN] = useState(3)
  const lower = 1 - Math.pow(10, -n)
  const xLo = lower - Math.pow(10, -n) * 0.5
  const xHi = 1 + Math.pow(10, -n) * 0.5
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xLo, xHi]} yRange={[-1.0, 1.2]} width={620} height={260}>
        <Polyline
          points={[
            [xLo, 0],
            [xHi, 0]
          ]}
          opacity={OPACITY.fg}
        />
        <Dot x={1} y={0} r={4} />
        <Tex at={[1, 0.18]} tex="1" anchor="middle" size={11} />
        {Array.from({ length: n }, (_, i) => i + 1).map(k => {
          const lk = 1 - Math.pow(10, -k)
          return lk >= xLo && lk <= xHi ? (
            <g key={k}>
              <Dot x={lk} y={-0.25 - k * 0.1} r={3} opacity={0.7} />
              <Tex
                at={[lk, -0.4 - k * 0.1]}
                tex={`0.${'9'.repeat(k)}`}
                anchor="middle"
                size={9}
                opacity={0.7}
              />
            </g>
          ) : null
        })}
        <Tex
          at={[xLo + 0.0005, 0.85]}
          tex={`\\lim_{n \\to \\infty} \\sum_{i=1}^n \\frac{9}{10^i} = 1`}
          anchor="start"
          size={12}
        />
      </Plot>
      <Slider
        label="n"
        value={n}
        min={1}
        max={6}
        step={1}
        onChange={v => setN(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function MultiplySubtractVis() {
  const [pre, setPre] = useState(0)
  const [rep, setRep] = useState(27)
  const [repLen, setRepLen] = useState(2)
  const preLen = pre === 0 ? 0 : String(pre).length
  const N = Math.pow(10, preLen + repLen)
  const M = Math.pow(10, preLen)
  const num = pre * (Math.pow(10, repLen) - 1) + rep
  const den = N - M
  const repStr = String(rep).padStart(repLen, '0')
  const decStr = `${preLen ? '0.' + String(pre).padStart(preLen, '0') : '0.'}\\overline{${repStr}}`
  const renderKatex = (el, tex) => {
    if (el)
      try {
        katex.render(tex, el, { throwOnError: false })
      } catch (_) {
        el.textContent = tex
      }
  }
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 520 200" width="100%" style={{ display: 'block' }}>
        <g
          transform="translate(20, 30)"
          fontFamily="'D-DIN', ui-monospace, monospace"
          fontSize={13}
          fill={FG}
        >
          <foreignObject x={0} y={0} width={500} height={28}>
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: FG, fontSize: 14 }}>
              <span ref={el => renderKatex(el, `x = ${decStr}`)} />
            </div>
          </foreignObject>
          <foreignObject x={0} y={36} width={500} height={28}>
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: FG, fontSize: 14 }}>
              <span
                ref={el =>
                  renderKatex(
                    el,
                    `10^{${preLen + repLen}} x = ${pre}${repStr}.\\overline{${repStr}}`
                  )
                }
              />
            </div>
          </foreignObject>
          <foreignObject x={0} y={72} width={500} height={28}>
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: FG, fontSize: 14 }}>
              <span
                ref={el =>
                  renderKatex(
                    el,
                    `10^{${preLen}} x = ${preLen ? String(pre) : '0'}.\\overline{${repStr}}`
                  )
                }
              />
            </div>
          </foreignObject>
          <line x1={0} y1={108} x2={300} y2={108} stroke={FG} strokeOpacity={0.4} />
          <foreignObject x={0} y={114} width={500} height={28}>
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: FG, fontSize: 14 }}>
              <span
                ref={el => renderKatex(el, `(10^{${preLen + repLen}} - 10^{${preLen}}) x = ${num}`)}
              />
            </div>
          </foreignObject>
          <foreignObject x={0} y={150} width={500} height={28}>
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: FG, fontSize: 14 }}>
              <span ref={el => renderKatex(el, `x = \\dfrac{${num}}{${den}}`)} />
            </div>
          </foreignObject>
        </g>
      </svg>
      <Slider
        label="rep"
        value={rep}
        min={1}
        max={Math.pow(10, repLen) - 1}
        step={1}
        onChange={v => setRep(v | 0)}
        format={v => String(v).padStart(repLen, '0')}
      />
      <Slider
        label="repLen"
        value={repLen}
        min={1}
        max={4}
        step={1}
        onChange={v => setRepLen(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function LongDivisionVis() {
  const [p, setP] = useState(1)
  const [q, setQ] = useState(7)
  const steps = []
  let rem = p % q
  const seenRems = new Map()
  let digits = '',
    cycleStart = -1
  for (let i = 0; i < 30; i++) {
    if (seenRems.has(rem)) {
      cycleStart = seenRems.get(rem)
      break
    }
    seenRems.set(rem, i)
    rem = rem * 10
    const d = Math.floor(rem / q)
    rem = rem - d * q
    digits += d
    steps.push({ rem, digit: d })
    if (rem === 0) break
  }
  const intPart = Math.floor(p / q)
  return (
    <div style={{ width: '100%' }}>
      <svg
        viewBox={`0 0 520 ${Math.max(steps.length, 6) * 22 + 80}`}
        width="100%"
        style={{ display: 'block' }}
      >
        <g
          transform="translate(20, 30)"
          fontFamily="'D-DIN', ui-monospace, monospace"
          fontSize={12}
          fill={FG}
        >
          <TexPx
            x={0}
            y={4}
            size={14}
            width={400}
            tex={`\\tfrac{${p}}{${q}} = ${intPart}.${cycleStart >= 0 ? digits.slice(0, cycleStart) + '\\overline{' + digits.slice(cycleStart) + '}' : digits}`}
          />
          {steps.map((s, i) => (
            <g key={i} transform={`translate(0, ${20 + i * 22})`}>
              <text x={0} opacity={0.6}>{`step ${i + 1}:`}</text>
              <text x={70}>{`digit = ${s.digit}`}</text>
              <text x={170}>{`remainder = ${s.rem}`}</text>
              {cycleStart >= 0 && i === cycleStart && (
                <text x={310} opacity={0.85}>
                  ← cycle starts
                </text>
              )}
            </g>
          ))}
          <text x={0} y={20 + steps.length * 22 + 14} fontSize={11} opacity={0.7}>
            {cycleStart >= 0
              ? `Period = ${steps.length - cycleStart}`
              : 'Terminates (remainder hit 0)'}
          </text>
        </g>
      </svg>
      <Slider
        label="p"
        value={p}
        min={1}
        max={50}
        step={1}
        onChange={v => setP(v | 0)}
        format={v => v}
      />
      <Slider
        label="q"
        value={q}
        min={2}
        max={50}
        step={1}
        onChange={v => setQ(v | 0)}
        format={v => v}
      />
    </div>
  )
}

// ─── M11 DECIMAL EXPANSION PROOFS ────────────────────────────────────────────

function pf11(n) {
  const out = []
  for (let p = 2; p * p <= n; p++)
    while (n % p === 0) {
      out.push(p)
      n /= p
    }
  if (n > 1) out.push(n)
  return out
}

function ord11(a, m) {
  let x = a % m
  for (let k = 1; k <= m + 1; k++) {
    if (x === 1) return k
    x = (x * a) % m
  }
  return -1
}

export function FactorTreeVis() {
  const [q, setQ] = useState(75)
  const factors = pf11(q)
  const twos = factors.filter(f => f === 2).length
  const fives = factors.filter(f => f === 5).length
  const residue = factors.filter(f => f !== 2 && f !== 5)
  const r = residue.reduce((a, b) => a * b, 1)
  const terminates = r === 1
  const period = terminates ? 0 : ord11(10, r)
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 520 240" width="100%" style={{ display: 'block' }}>
        <g
          transform="translate(40, 30)"
          fontFamily="'D-DIN', ui-monospace, monospace"
          fontSize={13}
          fill={FG}
        >
          <text x={0} y={0} fontSize={14}>{`q = ${q}`}</text>
          <text x={0} y={28} opacity={0.6}>{`= ${factors.join(' · ')}`}</text>
          <text x={0} y={60}>{`2-power: ${twos}`}</text>
          <text x={120} y={60}>{`5-power: ${fives}`}</text>
          <text
            x={240}
            y={60}
            fontWeight={600}
          >{`residue = ${r}${residue.length ? ' = ' + residue.join('·') : ''}`}</text>
          <line x1={0} y1={80} x2={460} y2={80} stroke={FG} strokeOpacity={0.3} />
          <TexPx
            x={0}
            y={112}
            size={14}
            width={380}
            tex={
              terminates
                ? `\\tfrac{1}{${q}} \\text{ terminates (residue = 1)}`
                : `\\tfrac{1}{${q}} \\text{ repeats, period } ${period}`
            }
          />
          <TexPx
            x={0}
            y={144}
            size={12}
            width={400}
            opacity={0.7}
            tex={`\\tfrac{1}{${q}} = ${(1 / q).toFixed(Math.max(period * 2 + 4, 8))}\\ldots`}
          />
        </g>
      </svg>
      <Slider
        label="q"
        value={q}
        min={2}
        max={200}
        step={1}
        onChange={v => setQ(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function RepeatingDecimalVis() {
  const [q, setQ] = useState(7)
  const factors = pf11(q)
  const cleanQ = factors.filter(f => f !== 2 && f !== 5).reduce((a, b) => a * b, 1) || 1
  const period = ord11(10, cleanQ)
  const W = 280,
    R = 100,
    cx = W / 2,
    cy = W / 2
  const pts = []
  let v = 1
  for (let k = 0; k < period && k < 24; k++) {
    pts.push({ k, val: v })
    v = (v * 10) % cleanQ
  }
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W + 200} ${W + 30}`} width="100%" style={{ display: 'block' }}>
        <g fontFamily="'D-DIN', ui-monospace, monospace" fontSize={11} fill={FG}>
          <circle cx={cx} cy={cy} r={R} fill="none" stroke={FG} strokeOpacity={0.3} />
          {pts.map((p, i) => {
            const a = (i / pts.length) * 2 * Math.PI - Math.PI / 2
            const x = cx + R * Math.cos(a),
              y = cy + R * Math.sin(a)
            const ax = cx + (R + 18) * Math.cos(a),
              ay = cy + (R + 18) * Math.sin(a)
            const a2 = ((i + 1) / pts.length) * 2 * Math.PI - Math.PI / 2
            const x2 = cx + R * Math.cos(a2),
              y2 = cy + R * Math.sin(a2)
            return (
              <g key={i}>
                <line x1={x} y1={y} x2={x2} y2={y2} stroke={FG} strokeOpacity={0.6} />
                <circle cx={x} cy={y} r={3} fill={FG} />
                <text x={ax} y={ay + 4} textAnchor="middle">
                  {p.val}
                </text>
              </g>
            )
          })}
          <g transform={`translate(${W + 10}, 30)`}>
            <text x={0} y={0} fontSize={14}>{`q = ${q}`}</text>
            <text x={0} y={24} opacity={0.7}>{`coprime part = ${cleanQ}`}</text>
            <text x={0} y={48} fontSize={14}>{`period = ${period}`}</text>
            <TexPx
              x={0}
              y={72}
              tex={`= \\operatorname{ord}_{${cleanQ}}(10)`}
              size={11}
              width={180}
              opacity={0.7}
            />
          </g>
        </g>
      </svg>
      <Slider
        label="q"
        value={q}
        min={3}
        max={50}
        step={1}
        onChange={v => setQ(v | 0)}
        format={v => v}
      />
    </div>
  )
}

export function PigeonholeVis() {
  const [q, setQ] = useState(7)
  const rems = []
  let r = 1
  const seen = new Map()
  let cycleAt = -1
  for (let k = 0; k < q + 2; k++) {
    if (seen.has(r)) {
      cycleAt = seen.get(r)
      rems.push({ r, k, repeat: true })
      break
    }
    seen.set(r, k)
    rems.push({ r, k })
    r = (r * 10) % q
    if (r === 0) {
      rems.push({ r: 0, k: k + 1, terminate: true })
      break
    }
  }
  const cell = 28
  const W = Math.max((q + 1) * cell + 40, rems.length * 38 + 60)
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox={`0 0 ${W} 220`} width="100%" style={{ display: 'block' }}>
        <g
          transform="translate(20, 24)"
          fontFamily="'D-DIN', ui-monospace, monospace"
          fontSize={11}
          fill={FG}
        >
          <text x={0} y={0}>
            Pigeonholes (possible nonzero remainders):
          </text>
          {Array.from({ length: q - 1 }, (_, i) => i + 1).map(i => {
            const x = (i - 1) * cell
            const used = rems.some(s => s.r === i)
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={10}
                  width={cell - 4}
                  height={cell}
                  fill="none"
                  stroke={FG}
                  strokeOpacity={used ? 0.85 : 0.3}
                />
                <text x={x + (cell - 4) / 2} y={28} textAnchor="middle">
                  {i}
                </text>
              </g>
            )
          })}
          <text
            x={0}
            y={70}
            opacity={0.7}
          >{`Sequence of remainders (long division of 1/${q}):`}</text>
          {rems.map((s, i) => (
            <g key={i} transform={`translate(${i * 38}, 84)`}>
              <text x={0} y={14} fontSize={13}>
                {s.r}
              </text>
              {s.repeat && (
                <text x={0} y={32} opacity={0.85} fontSize={10}>
                  ↻
                </text>
              )}
              {s.terminate && (
                <text x={0} y={32} opacity={0.85} fontSize={10}>
                  0
                </text>
              )}
            </g>
          ))}
          <text x={0} y={160} fontSize={12}>
            {cycleAt >= 0
              ? `By pigeonhole, a remainder repeats within ${q - 1} steps. Period = ${rems.length - 1 - cycleAt}.`
              : 'Remainder hit 0 — decimal terminates.'}
          </text>
        </g>
      </svg>
      <Slider
        label="q"
        value={q}
        min={3}
        max={20}
        step={1}
        onChange={v => setQ(v | 0)}
        format={v => v}
      />
    </div>
  )
}
