import { useState } from 'react'
import { LearningTemplate } from '../../../../components/learning/learning-template'
import { VizFigure } from '../../../../components/viz-figure'
import { FONT_LABEL, FONT_TEX } from '../../../../components/viz/scale-tokens'
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

// Local helper: mode-toggle button

function ModeBtn({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: 'transparent',
        border: `1px solid ${active ? 'var(--border-default)' : 'var(--border-subtle)'}`,
        color: 'var(--text-primary)',
        padding: '5px 12px',
        cursor: 'pointer',
        fontFamily: "'D-DIN', monospace",
        fontSize: FONT_LABEL,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        opacity: active ? 1 : 0.5
      }}
    >
      {children}
    </button>
  )
}

// Local helper: number-line baseline with ticks

function NumberLineAxis({ xRange, ticks }) {
  const [xMin, xMax] = xRange
  return (
    <>
      <Polyline
        points={[
          [xMin, 0],
          [xMax, 0]
        ]}
        opacity={OPACITY.dim}
        strokeWidth={1}
      />
      {ticks.map(t => (
        <Polyline
          key={`tk${t}`}
          points={[
            [t, -0.12],
            [t, 0.12]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1}
        />
      ))}
      {ticks.map(t => (
        <Label key={`tl${t}`} at={[t, -0.55]} anchor="middle" upper={false} size={FONT_LABEL}>
          {String(t)}
        </Label>
      ))}
    </>
  )
}

// (30.1.1) Oac_CompareTwoPoints: static

function Oac_CompareTwoPoints() {
  const x = -3
  const y = 4
  const ticks = [-6, -4, -2, 0, 2, 4, 6]
  return (
    <Plot xRange={[-7.5, 7.5]} yRange={[-2.8, 3.5]} width={600} height={300}>
      <NumberLineAxis xRange={[-7, 7]} ticks={ticks} />
      <Arrow from={[x, 1.2]} to={[y, 1.2]} opacity={OPACITY.fg} />
      <Tex at={[(x + y) / 2, 2.4]} tex="x < y" anchor="middle" />
      <Dot x={x} y={0} opacity={OPACITY.fg} r={4} />
      <Tex at={[x, -1.7]} tex={`x = ${x}`} anchor="middle" />
      <Dot x={y} y={0} opacity={OPACITY.fg} r={4} />
      <Tex at={[y, -1.7]} tex={`y = ${y}`} anchor="middle" />
    </Plot>
  )
}

// (30.1.2) Oac_IntervalRegions: three modes (toggle)

function Oac_IntervalRegions() {
  const [mode, setMode] = useState('A')
  const ticks = [-6, -4, -2, 0, 2, 4, 6]
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10
      }}
    >
      <div style={{ display: 'flex', gap: 10 }}>
        <ModeBtn active={mode === 'A'} onClick={() => setMode('A')}>
          {'x > 1'}
        </ModeBtn>
        <ModeBtn active={mode === 'B'} onClick={() => setMode('B')}>
          {'x ≤ −2'}
        </ModeBtn>
        <ModeBtn active={mode === 'C'} onClick={() => setMode('C')}>
          {'1 ≤ x < 4'}
        </ModeBtn>
      </div>
      <Plot xRange={[-8.1, 9.07]} yRange={[-0.52, 1.83]} width={600} height={260}>
        <NumberLineAxis xRange={[-7, 7]} ticks={ticks} />
        {mode === 'A' && (
          <>
            <Dot x={1} y={0} opacity={OPACITY.fg} r={5} fill={false} />
            <Arrow from={[1.2, 0.4]} to={[7, 0.4]} opacity={OPACITY.fg} />
            <Tex at={[4, 1.6]} tex="x > 1" anchor="middle" />
          </>
        )}
        {mode === 'B' && (
          <>
            <Dot x={-2} y={0} opacity={OPACITY.fg} r={5} fill={true} />
            <Arrow from={[-2.2, 0.4]} to={[-7, 0.4]} opacity={OPACITY.fg} />
            <Tex at={[-5, 1.6]} tex="x \leq -2" anchor="middle" />
          </>
        )}
        {mode === 'C' && (
          <>
            <Dot x={1} y={0} opacity={OPACITY.fg} r={5} fill={true} />
            <Dot x={4} y={0} opacity={OPACITY.fg} r={5} fill={false} />
            <Polyline
              points={[
                [1, 0.4],
                [4, 0.4]
              ]}
              opacity={OPACITY.fg}
              strokeWidth={2}
            />
            <Tex at={[2.5, 1.6]} tex="1 \leq x < 4" anchor="middle" />
          </>
        )}
      </Plot>
    </div>
  )
}

// (30.1.3) Oac_FlipMirror: slider on a

function Oac_FlipMirror() {
  const [a, setA] = useState(3)
  const neg = -a
  const ticks = [-6, -4, -2, 0, 2, 4, 6]
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}
    >
      <Plot xRange={[-8, 8]} yRange={[-0.95, 2.95]} width={600} height={320}>
        <NumberLineAxis xRange={[-7, 7]} ticks={ticks} />
        <Dot x={a} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[a, 1.4]} tex={`a = ${a}`} anchor="middle" />
        <Dot x={neg} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[neg, 1.4]} tex={`-a = ${neg}`} anchor="middle" opacity={OPACITY.dim} />
        <Arrow from={[a, 0.4]} to={[neg, 0.4]} opacity={OPACITY.faint} />
        <Label at={[0, 0.9]} anchor="middle">
          mirror
        </Label>
        <Tex
          at={[0, 2.6]}
          tex={`a = ${a} \\;\\Rightarrow\\; -a = ${neg}`}
          anchor="middle"
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="a"
        value={a}
        min={-7}
        max={7}
        step={1}
        onChange={v => setA(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}

// (30.1.4) Oac_ShiftPreserves: slider on z

function Oac_ShiftPreserves() {
  const [z, setZ] = useState(3)
  const a = -2
  const b = 3
  const aShift = a + z
  const bShift = b + z
  const ticks = [-8, -6, -4, -2, 0, 2, 4, 6, 8]
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}
    >
      <Plot xRange={[-9.5, 9.5]} yRange={[-1.95, 3.7]} width={620} height={320}>
        <NumberLineAxis xRange={[-9, 9]} ticks={ticks} />
        {/* original pair */}
        <Dot x={a} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[a, 1.4]} tex={`a = ${a}`} anchor="middle" />
        <Dot x={b} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[b, 1.4]} tex={`b = ${b}`} anchor="middle" />
        <Arrow from={[a, 0.5]} to={[b, 0.5]} opacity={OPACITY.dim} />
        {/* shifted pair */}
        <Dot x={aShift} y={0} opacity={OPACITY.dim} r={4} />
        <Tex at={[aShift, -1.5]} tex={`a + z = ${aShift}`} anchor="middle" opacity={OPACITY.dim} />
        <Dot x={bShift} y={0} opacity={OPACITY.dim} r={4} />
        <Tex at={[bShift, -1.5]} tex={`b + z = ${bShift}`} anchor="middle" opacity={OPACITY.dim} />
        <Arrow from={[aShift, -0.7]} to={[bShift, -0.7]} opacity={OPACITY.dim} />
        {/* shift indicator */}
        <Arrow from={[a, 2.7]} to={[aShift, 2.7]} opacity={OPACITY.faint} />
        <Tex
          at={[(a + aShift) / 2, 3.4]}
          tex={`z = ${z >= 0 ? '+' + z : z}`}
          anchor="middle"
          opacity={OPACITY.faint}
        />
      </Plot>
      <Slider
        label="z (shift)"
        value={z}
        min={-6}
        max={6}
        step={1}
        onChange={v => setZ(Math.round(v))}
        format={v => (v >= 0 ? '+' + Math.round(v) : String(Math.round(v)))}
      />
    </div>
  )
}

// (30.1.5) Oac_ScalePositive: slider on z > 0

function Oac_ScalePositive() {
  const [z, setZ] = useState(2)
  const a = -2
  const b = 3
  const az = a * z
  const bz = b * z
  const ticks = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}
    >
      <Plot xRange={[-12.8, 12.8]} yRange={[-1.95, 3.15]} width={640} height={320}>
        <NumberLineAxis xRange={[-11, 11]} ticks={ticks} />
        <Dot x={a} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[a, 1.3]} tex={`a = ${a}`} anchor="middle" />
        <Dot x={b} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[b, 1.3]} tex={`b = ${b}`} anchor="middle" />
        <Arrow from={[a, 0.5]} to={[b, 0.5]} opacity={OPACITY.dim} />
        <Dot x={az} y={0} opacity={OPACITY.dim} r={4} />
        <Tex at={[az, -1.5]} tex={`az = ${az}`} anchor="middle" opacity={OPACITY.dim} />
        <Dot x={bz} y={0} opacity={OPACITY.dim} r={4} />
        <Tex at={[bz, -1.5]} tex={`bz = ${bz}`} anchor="middle" opacity={OPACITY.dim} />
        <Arrow from={[az, -0.7]} to={[bz, -0.7]} opacity={OPACITY.dim} />
        <Tex
          at={[0, 2.8]}
          tex={`z = ${z} > 0:\\; a < b \\Rightarrow az < bz`}
          anchor="middle"
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="z (positive)"
        value={z}
        min={0.5}
        max={4}
        step={0.5}
        onChange={v => setZ(v)}
        format={v => v.toFixed(1)}
      />
    </div>
  )
}

// (30.1.6) Oac_ScaleNegative: slider on z < 0

function Oac_ScaleNegative() {
  const [z, setZ] = useState(-2)
  const a = -2
  const b = 3
  const az = a * z
  const bz = b * z
  const ticks = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}
    >
      <Plot xRange={[-12.8, 12.8]} yRange={[-1.95, 3.15]} width={640} height={320}>
        <NumberLineAxis xRange={[-11, 11]} ticks={ticks} />
        <Dot x={a} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[a, 1.3]} tex={`a = ${a}`} anchor="middle" />
        <Dot x={b} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[b, 1.3]} tex={`b = ${b}`} anchor="middle" />
        <Arrow from={[a, 0.5]} to={[b, 0.5]} opacity={OPACITY.dim} />
        <Dot x={az} y={0} opacity={OPACITY.dim} r={4} />
        <Tex at={[az, -1.5]} tex={`az = ${az}`} anchor="middle" opacity={OPACITY.dim} />
        <Dot x={bz} y={0} opacity={OPACITY.dim} r={4} />
        <Tex at={[bz, -1.5]} tex={`bz = ${bz}`} anchor="middle" opacity={OPACITY.dim} />
        {/* arrow REVERSED: bz to az when z<0 */}
        <Arrow from={[bz, -0.7]} to={[az, -0.7]} opacity={OPACITY.dim} />
        <Tex
          at={[0, 2.8]}
          tex={`z = ${z} < 0:\\; a < b \\Rightarrow az > bz`}
          anchor="middle"
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="z (negative)"
        value={z}
        min={-4}
        max={-0.5}
        step={0.5}
        onChange={v => setZ(v)}
        format={v => v.toFixed(1)}
      />
    </div>
  )
}

// (30.1.7) Oac_ReciprocalSign: slider on x (non-zero)

function Oac_ReciprocalSign() {
  const [x, setX] = useState(3)
  const recip = x !== 0 ? 1 / x : null
  const recipDisplay = recip !== null ? recip.toFixed(2) : 'N/A'
  const recipClamped = recip !== null ? Math.max(-6.5, Math.min(6.5, recip)) : 0
  const sameSign = recip !== null && ((x > 0 && recip > 0) || (x < 0 && recip < 0))
  const ticks = [-6, -4, -2, 0, 2, 4, 6]
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}
    >
      <Plot xRange={[-7.5, 7.5]} yRange={[-1.95, 2.95]} width={600} height={320}>
        <NumberLineAxis xRange={[-7, 7]} ticks={ticks} />
        <Dot x={x} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[x, 1.4]} tex={`x = ${x}`} anchor="middle" />
        {recip !== null && (
          <>
            <Dot x={recipClamped} y={0} opacity={OPACITY.dim} r={4} />
            <Tex
              at={[recipClamped, -1.5]}
              tex={`\\tfrac{1}{x} = ${recipDisplay}`}
              anchor="middle"
              opacity={OPACITY.dim}
            />
          </>
        )}
        <Tex
          at={[0, 2.6]}
          tex={
            sameSign
              ? `x \\text{ and } \\tfrac{1}{x}: \\text{ same sign}`
              : `\\text{reciprocal-sign rule}`
          }
          anchor="middle"
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="x"
        value={x}
        min={-6}
        max={6}
        step={1}
        onChange={v => {
          const r = Math.round(v)
          if (r !== 0) setX(r)
        }}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}

// (30.1.8) Oac_FractionCross: static (small range, vertical stack)

function Oac_FractionCross() {
  const a = -0.5
  const b = -0.25
  const ticks = [-2, -1, 0, 1, 2]
  return (
    <Plot xRange={[-2.5, 2.5]} yRange={[-2.5, 3.5]} width={480} height={450}>
      <NumberLineAxis xRange={[-2.3, 2.3]} ticks={ticks} />
      <Dot x={a} y={0} opacity={OPACITY.fg} r={4} />
      <Tex at={[a, 0.9]} tex="-\tfrac{1}{2}" anchor="middle" />
      <Dot x={b} y={0} opacity={OPACITY.fg} r={4} />
      <Tex at={[b, 0.9]} tex="-\tfrac{1}{4}" anchor="middle" />
      <Arrow from={[a, 0.4]} to={[b, 0.4]} opacity={OPACITY.dim} />
      <Tex at={[-2.3, 2.7]} tex="-\tfrac{1}{2} < -\tfrac{1}{4}" anchor="start" />
      <Tex
        at={[-2.3, 2.0]}
        tex="\Leftrightarrow (-1)(4) < (-1)(2)"
        anchor="start"
        opacity={OPACITY.dim}
      />
      <Tex
        at={[-2.3, 1.3]}
        tex="\Leftrightarrow -4 < -2 \;\checkmark"
        anchor="start"
        opacity={OPACITY.dim}
      />
      <Tex
        at={[-2.3, -1.6]}
        tex="\text{denominators } 2, 4 \text{ both positive}"
        anchor="start"
        opacity={OPACITY.faint}
      />
    </Plot>
  )
}

// (30.1.9) Oac_PowerCompare: two modes (toggle + slider)

function Oac_PowerCompare() {
  const [mode, setMode] = useState('I')
  const [n, setN] = useState(2)
  const ns = [0, 1, 2, 3, 4, 5]
  const l3 = Math.log2(3)
  // value axis is logarithmic: y = log2(value). Equal steps = equal ×2 ratios,
  // so growth and decay both read as straight lines and the magnitudes (32 down
  // to 1/32) all fit honestly on one axis.
  const valI = e => (e >= 0 ? String(2 ** e) : '1/' + 2 ** -e)
  const valJ = e => String(2 ** e)
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}
    >
      <div style={{ display: 'flex', gap: 10 }}>
        <ModeBtn active={mode === 'I'} onClick={() => setMode('I')}>
          Fact I: one base, varying power
        </ModeBtn>
        <ModeBtn active={mode === 'J'} onClick={() => setMode('J')}>
          Fact J: two bases, same power
        </ModeBtn>
      </div>

      {mode === 'I' && (
        <Plot xRange={[-1.6, 6.2]} yRange={[-6.4, 6.4]} width={560} height={440}>
          {/* value gridlines (each step = ×2); value = 1 line emphasised */}
          {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map(e => (
            <Polyline
              key={`hg${e}`}
              points={[
                [-0.3, e],
                [5.3, e]
              ]}
              opacity={e === 0 ? OPACITY.dim : OPACITY.faint}
              strokeWidth={1}
            />
          ))}
          {ns.map(k => (
            <Polyline
              key={`vg${k}`}
              points={[
                [k, -5.2],
                [k, 5.2]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={1}
            />
          ))}
          {/* value labels (left) and power labels (bottom) */}
          {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map(e => (
            <Label key={`vl${e}`} at={[-0.45, e]} anchor="end" upper={false}>
              {valI(e)}
            </Label>
          ))}
          {ns.map(k => (
            <Label key={`nl${k}`} at={[k, -5.9]} anchor="middle" upper={false}>
              {String(k)}
            </Label>
          ))}
          <Label at={[-1.5, 6.2]} anchor="start">
            VALUE
          </Label>
          <Label at={[5.5, -5.9]} anchor="end" upper={false}>
            n
          </Label>
          {/* the two sequences as mirror-image lines */}
          <Polyline points={ns.map(k => [k, k])} opacity={OPACITY.fg} strokeWidth={1.6} />
          <Polyline points={ns.map(k => [k, -k])} opacity={OPACITY.dim} strokeWidth={1.6} />
          {ns.map(k => (
            <g key={`p${k}`}>
              <Dot x={k} y={k} opacity={OPACITY.fg} r={4} />
              <Dot x={k} y={-k} opacity={OPACITY.dim} r={4} />
            </g>
          ))}
          {/* identity + the lesson, placed clear of the curves */}
          <Tex at={[2.0, 4.9]} tex={`2^n\\ (>1):\\ \\text{grows}`} />
          <Tex at={[2.0, -4.9]} tex={`0.5^n\\ (<1):\\ \\text{shrinks}`} opacity={OPACITY.dim} />
        </Plot>
      )}

      {mode === 'J' && (
        <Plot xRange={[-1.6, 6.2]} yRange={[-1.4, 9]} width={560} height={420}>
          {/* value gridlines (each step = ×2) up to 256 */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(e => (
            <Polyline
              key={`hg${e}`}
              points={[
                [-0.3, e],
                [5.3, e]
              ]}
              opacity={e === 0 ? OPACITY.dim : OPACITY.faint}
              strokeWidth={1}
            />
          ))}
          {ns.map(k => (
            <Polyline
              key={`vg${k}`}
              points={[
                [k, -0.4],
                [k, 8.4]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={1}
            />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(e => (
            <Label key={`vl${e}`} at={[-0.45, e]} anchor="end" upper={false}>
              {valJ(e)}
            </Label>
          ))}
          {ns.map(k => (
            <Label key={`nl${k}`} at={[k, -0.95]} anchor="middle" upper={false}>
              {String(k)}
            </Label>
          ))}
          <Label at={[-1.5, 8.7]} anchor="start">
            VALUE
          </Label>
          <Label at={[5.5, -0.95]} anchor="end" upper={false}>
            n
          </Label>
          {/* both grow; larger base = steeper line */}
          <Polyline points={ns.map(k => [k, k])} opacity={OPACITY.dim} strokeWidth={1.6} />
          <Polyline points={ns.map(k => [k, k * l3])} opacity={OPACITY.fg} strokeWidth={1.6} />
          {ns.map(k => {
            const active = k === n
            return (
              <g key={`p${k}`}>
                <Dot x={k} y={k} opacity={active ? OPACITY.fg : OPACITY.faint} r={4} />
                <Dot x={k} y={k * l3} opacity={active ? OPACITY.fg : OPACITY.faint} r={4} />
                {active && k > 0 && (
                  <Arrow from={[k, k + 0.25]} to={[k, k * l3 - 0.25]} opacity={OPACITY.dim} />
                )}
                {active && (
                  <>
                    <Tex
                      at={[k + 0.2, k]}
                      dy={2}
                      tex={`2^{${k}} = ${2 ** k}`}
                      opacity={OPACITY.dim}
                    />
                    <Tex at={[k + 0.2, k * l3]} dy={-2} tex={`3^{${k}} = ${3 ** k}`} />
                  </>
                )}
              </g>
            )
          })}
          <Tex at={[0.1, 8.4]} tex={`3^n\\ \\text{(larger base, steeper)}`} />
          <Tex at={[3.2, 2.4]} tex={`2^n`} opacity={OPACITY.dim} />
        </Plot>
      )}

      {mode === 'J' && (
        <Slider
          label="n"
          value={n}
          min={0}
          max={5}
          step={1}
          onChange={v => setN(Math.round(v))}
          format={v => String(Math.round(v))}
        />
      )}
    </div>
  )
}

// (30.1.10) Oac_AbsoluteDistance: sliders on x and b

function Oac_AbsoluteDistance() {
  const [x, setX] = useState(3)
  const [b, setB] = useState(4)
  const absX = Math.abs(x)
  const ticks = [-6, -4, -2, 0, 2, 4, 6]
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}
    >
      <Plot xRange={[-8, 8]} yRange={[-1.95, 3.2]} width={620} height={320}>
        <NumberLineAxis xRange={[-7, 7]} ticks={ticks} />
        {/* interval (-b, b) below the line */}
        <Arrow from={[-b, -0.6]} to={[b, -0.6]} opacity={OPACITY.faint} />
        <Tex at={[0, -1.5]} tex={`(-${b},\\,${b})`} anchor="middle" opacity={OPACITY.faint} />
        {/* distance bar from 0 to x */}
        <Arrow from={[0, 1.1]} to={[x, 1.1]} opacity={OPACITY.fg} />
        <Tex at={[x / 2, 1.9]} tex={`|x| = ${absX}`} anchor="middle" />
        {/* x marker */}
        <Dot x={x} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[x, 2.9]} tex={`x = ${x}`} anchor="middle" />
        {/* boundary markers */}
        <Dot x={-b} y={0} opacity={OPACITY.dim} r={4} />
        <Dot x={b} y={0} opacity={OPACITY.dim} r={4} />
        <Tex at={[-b, 2.0]} tex={`-b = ${-b}`} anchor="middle" opacity={OPACITY.dim} />
        <Tex at={[b, 2.0]} tex={`b = ${b}`} anchor="middle" opacity={OPACITY.dim} />
      </Plot>
      <Slider
        label="x"
        value={x}
        min={-7}
        max={7}
        step={1}
        onChange={v => setX(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="b (bound)"
        value={b}
        min={1}
        max={7}
        step={1}
        onChange={v => setB(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}

// (30.1.11) Oac_TimeDuration: sliders on t1 and t2

function Oac_TimeDuration() {
  const [t1, setT1] = useState(2)
  const [t2, setT2] = useState(7)
  const dur = Math.abs(t2 - t1)
  const ticks = [0, 2, 4, 6, 8, 10, 12]
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}
    >
      <Plot xRange={[-1.75, 13.75]} yRange={[-1.74, 2.94]} width={620} height={320}>
        <NumberLineAxis xRange={[-0.5, 12.5]} ticks={ticks} />
        <Dot x={t1} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[t1, 1.4]} tex={`t_1 = ${t1}`} anchor="middle" />
        <Dot x={t2} y={0} opacity={OPACITY.fg} r={4} />
        <Tex at={[t2, 1.4]} tex={`t_2 = ${t2}`} anchor="middle" opacity={OPACITY.dim} />
        <Arrow
          from={[Math.min(t1, t2), -0.7]}
          to={[Math.max(t1, t2), -0.7]}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[(t1 + t2) / 2, -1.6]}
          tex={`|t_2 - t_1| = ${dur}`}
          anchor="middle"
          opacity={OPACITY.dim}
        />
        {t1 < t2 && (
          <Tex
            at={[6, 2.6]}
            tex="t_1 < t_2:\;t_1 \text{ is earlier}"
            anchor="middle"
            opacity={OPACITY.faint}
          />
        )}
        {t1 > t2 && (
          <Tex
            at={[6, 2.6]}
            tex="t_2 < t_1:\;t_2 \text{ is earlier}"
            anchor="middle"
            opacity={OPACITY.faint}
          />
        )}
        {t1 === t2 && (
          <Tex
            at={[6, 2.6]}
            tex="t_1 = t_2:\;\text{same moment}"
            anchor="middle"
            opacity={OPACITY.faint}
          />
        )}
      </Plot>
      <Slider
        label="t1"
        value={t1}
        min={0}
        max={12}
        step={1}
        onChange={v => setT1(Math.round(v))}
        format={v => String(Math.round(v))}
      />
      <Slider
        label="t2"
        value={t2}
        min={0}
        max={12}
        step={1}
        onChange={v => setT2(Math.round(v))}
        format={v => String(Math.round(v))}
      />
    </div>
  )
}

function useConfig() {
  const config = {
    cssPrefix: 'oac',
    documentTitle: 'Ordering and Comparison - AETHER',
    learning: {
      groupTitle: 'Number Systems and the Number Line',
      category: 'Module 31',
      title: 'Ordering and Comparison',
      subtitle:
        'Position on the number line decides which number is larger. Eight rules govern every move with <, >, and absolute value.',
      sections: [
        // Section 0: What Inequality Means
        <>
          <h2>What Inequality Means</h2>
          <p>
            {`You compare numbers every day: temperatures, prices, speeds. The number line gives those comparisons a precise meaning. Every number has a fixed position. Order comes from position: $x$ is less than $y$ when $x$ sits to the left of $y$.`}
          </p>
          <p>
            {`The number line keeps going to the left of zero. The points to the left of zero are the negative numbers, like $-1$, $-2$, and $-3$. The further left a point sits, the smaller the number. So $-3$ is smaller than $-1$, because $-3$ sits further left.`}
          </p>
          <p>
            {`$x < y$ means "$x$ is less than $y$." $x > y$ means "$x$ is greater than $y$." Add an equals bar to get $\\leq$ or $\\geq$, which allow the two sides to be equal.`}
          </p>
          <p>
            {`Two arrows join statements. A double arrow $\\Leftrightarrow$ means each side forces the other: both are true together or both are false together. This is "if and only if." A single arrow $\\Rightarrow$ means the left side forces the right side, in that one direction only. The long forms $\\Longleftrightarrow$ and $\\Longrightarrow$ are the same symbols, just drawn wider.`}
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$x < y$`}</span>
            <div className="lrn-definition-desc">
              <p>{`$x$ sits to the left of $y$ on the number line. The gap between them is positive: $y - x > 0$.`}</p>
            </div>
          </div>
          <VizFigure title="Compare Two Points on a Line" size="body" aspect="5/2">
            <Oac_CompareTwoPoints />
          </VizFigure>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Which is true: $-7 < -3$ or $-3 < -7$? Think about position on the number line first.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$-7 < -3$. On the number line, $-7$ sits further left than $-3$. Left means smaller, even when both numbers are negative.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The further left, the smaller. Negative numbers are not "big negatives." They are genuinely small. $-100$ is much smaller than $-1$ because $-100$ sits far to the left.`}</p>
          </div>
        </>,

        // Section 1: Reading Inequalities on the Number Line
        <>
          <h2>Reading Inequalities on the Number Line</h2>
          <p>
            {`Open and filled circles tell you whether an endpoint counts. An open circle excludes the endpoint. A filled circle includes it.`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Open circle</span>
              <p>{`Use it for strict inequalities ($<$ or $>$). Strict means the two sides can never be equal.`}</p>
              <p>{`The endpoint does not satisfy the inequality.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Filled circle</span>
              <p>{`Use it for non-strict inequalities ($\\leq$ or $\\geq$). Non-strict means the two sides are allowed to be equal.`}</p>
              <p>{`The endpoint satisfies the inequality.`}</p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$x < y$ (strict)`}</span>
              <p>{`The endpoint $y$ is not included. Open circle at $y$.`}</p>
              <p>{`Example: $x < 3$. Open circle at 3.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$x \\leq y$ (non-strict)`}</span>
              <p>{`The endpoint $y$ is included. Filled circle at $y$.`}</p>
              <p>{`Example: $x \\leq 3$. Filled circle at 3.`}</p>
            </div>
          </div>
          <p>
            {`When to use this: draw solution sets on a number line or read a diagram to check whether endpoints are included.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Draw $1 \\leq x < 4$ on the number line. Which endpoint gets an open circle and which gets a filled circle?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$x = 1$ satisfies $\\leq$, so filled circle at 1. $x = 4$ fails $< 4$, so open circle at 4. The segment runs from the filled circle to the open one.`}</p>
            </details>
          </div>
          <VizFigure title="Inequality Regions" size="body" aspect="600/208">
            <Oac_IntervalRegions />
          </VizFigure>
          <h3>Example: Drawing $x \\geq -2$</h3>
          <p>{`Draw $x \\geq -2$. The sign $\\geq$ is non-strict, so $x = -2$ counts. Put a filled circle at $-2$. Then shade the line to the right, toward larger numbers. Every point from $-2$ rightward satisfies $x \\geq -2$.`}</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The interval $1 \\leq x < 4$ is written as $[1, 4)$ in interval notation. Explain what the square bracket and the round bracket each mean.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$[1$ means 1 is included ($\\leq$, filled circle). $4)$ means 4 is excluded ($<$, open circle). The bracket type matches the circle type on the number line.`}</p>
            </details>
          </div>
        </>,

        // Section 2: Flipping Signs Flips Order (Fact A)
        <>
          <h2>Flipping Signs Flips Order</h2>
          <p>
            {`Negating both sides of an inequality reverses the direction. If $x < y$, then $-x > -y$.`}
          </p>
          <p>
            {`Real-world example: $-10^\\circ$C is colder than $-4^\\circ$C, so $-10 < -4$. Negate both: $10 > 4$. The direction flipped.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$x < y \\;\\Longleftrightarrow\\; -x > -y$$`}</div>
          <p>
            {`When to use this: any time you multiply or divide both sides by $-1$, flip the direction.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`We know $1 < 2$. Predict what the sign-flip rule says about $-1$ and $-2$, then check against the worked example below.`}</p>
          </div>
          <h3>Example: Negation on the Number Line</h3>
          <p>{`Start with $1 < 2$. Negate both sides: $-1 > -2$. The arrow showing $1 < 2$ points right. After negation, the arrow showing $-1 > -2$ points left. The picture is a mirror image across zero.`}</p>
          <VizFigure title="Negation as Mirror Across Zero" size="body" aspect="600/256">
            <Oac_FlipMirror />
          </VizFigure>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Drag the slider to $a = -3$. Now $a < 0$. What does $-a$ equal? Is $-a > 0$? Why does the mirror still work?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`When $a = -3$, $-a = 3 > 0$. The mirror flips every point across zero. A negative number negated becomes positive. The inequality direction flips because left and right swap under reflection.`}</p>
            </details>
          </div>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of the sign-flip rule</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Case $x < y < 0$: both negative. On the line, $x$ is further from zero. So $-x$ is further right than $-y$: $-x > -y$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`Case $0 < x < y$: both positive. Negating flips both to the left side. $-x$ is closer to zero than $-y$: $-x > -y$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Both cases confirm: $x < y \\Rightarrow -x > -y$.`}</div>
            </div>
            <div className="lrn-qed">Proven.</div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY DOES NEGATION REVERSE ORDER?</span>
            <p>{`Negation reflects the number line across zero. Every point on the right swings to the left, and every point on the left swings to the right. The number that was further right is now further left. Reflection always reverses order.`}</p>
          </div>
        </>,

        // Section 3: Adding Preserves Order (Facts B and C)
        <>
          <h2>Adding the Same Number Preserves Order</h2>
          <p>
            {`Shifting both numbers by the same amount does not change which one is larger. If $x < y$, then $x + z < y + z$ for any $z$.`}
          </p>
          <p>
            {`Subtraction now reaches across zero. A difference can be negative, so $y - x$ is positive exactly when $y$ sits to the right of $x$. The difference test is the algebraic version: $x < y$ means $y - x > 0$. To check an inequality, compute the difference.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$x < y \\;\\Longleftrightarrow\\; y - x > 0$$`}</div>
          <p>
            {`When to use these: the shift rule moves a term across the inequality by adding its opposite, keeping the direction. The difference test checks an inequality by computing $y - x$ and asking whether it is positive.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`We know $2 < 4$. Add $z = 25$ to both sides, then add $z = -55$ to both sides. Predict whether the inequality still holds each time, then check against the worked example below.`}</p>
          </div>
          <h3>Example: Shifting by 25 and by −55</h3>
          <p>{`Start with $2 < 4$. Add $z = 25$: $27 < 29$. Add $z = -55$: $-53 < -51$. The gap is always $4 - 2 = 2$ regardless of $z$.`}</p>
          <VizFigure title="Shift Preserves Order" size="body" aspect="620/256">
            <Oac_ShiftPreserves />
          </VizFigure>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The gap between the two points never changes as you move the slider. Why? What does that tell you about the direction of the inequality?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`The gap is $(b + z) - (a + z) = b - a$. The shift $z$ cancels. The gap stays fixed, so the point that was to the right stays to the right. The direction cannot flip.`}</p>
            </details>
          </div>
        </>,

        // Section 4: Multiplying by a Positive (Fact D)
        <>
          <h2>Multiplying by a Positive Preserves Order</h2>
          <p>
            {`First, the sign of a product. Two numbers with the same sign multiply to a positive. Two numbers with opposite signs multiply to a negative. So a positive times a positive is positive, a negative times a negative is positive, and a positive times a negative is negative.`}
          </p>
          <div className="lrn-insight">
            <p>{`Same signs give a positive product: $2 \\times 4 = 8$ and $(-2) \\times (-4) = 8$. Opposite signs give a negative product: $2 \\times (-4) = -8$.`}</p>
          </div>
          <p>
            {`If $z > 0$, multiplying both sides by $z$ scales the number line outward from zero. The order stays the same.`}
          </p>
          <p>
            {`Real-world example: car A goes 60 km/h, car B goes 80 km/h, so $60 < 80$. After 3 hours, A travels 180 km and B travels 240 km. Multiplying both speeds by 3 keeps the order: $180 < 240$.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$z > 0,\\; x < y \\;\\Longrightarrow\\; xz < yz$$`}</div>
          <p>
            {`When to use this: cross-multiplying in an inequality when you know the multiplier is positive. Safe to multiply without flipping.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`We know $287 > 0$ and $-23 < 0$. Multiply both by $z = 5$. Predict the sign of $5 \\times 287$ and the sign of $5 \\times (-23)$, then check against the worked example below.`}</p>
          </div>
          <h3>Example with z = 5</h3>
          <p>{`$287 > 0 \\Rightarrow 5 \\times 287 = 1435 > 0$. True.`}</p>
          <p>{`$-23 < 0 \\Rightarrow 5 \\times (-23) = -115 < 0$. True.`}</p>
          <VizFigure title="Scale by Positive (Order Stays)" size="body" aspect="5/2">
            <Oac_ScalePositive />
          </VizFigure>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof via the difference test</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$x < y$ means $y - x > 0$ (by the difference test).`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$z > 0$ and $y - x > 0$, so $(y - x)z > 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$(y - x)z = yz - xz > 0$, so $xz < yz$ by the difference test.`}</div>
            </div>
            <div className="lrn-qed">Proven.</div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Move the slider so $z > 1$. The two points spread apart. Now move to $0 < z < 1$. The points squeeze toward zero. Why does the inequality direction still hold in both cases?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Multiplying both numbers by the same positive $z$ scales the entire line from zero. Distances change, but no point jumps over another. Left stays left and right stays right because no reflection happens. The order of any two points is preserved.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY DOES POSITIVE SCALING PRESERVE ORDER?</span>
            <p>{`A positive multiplier zooms the number line from zero. Every point keeps its side: positive numbers stay positive, negative numbers stay negative. No two points swap places. The gap grows or shrinks, but the relative order is locked in by the geometry.`}</p>
          </div>
        </>,

        // Section 5: Multiplying by a Negative Flips Order (Fact E)
        <>
          <h2>Multiplying by a Negative Flips Order</h2>
          <p>
            {`This is the rule students most often forget. If $z < 0$, multiplying both sides flips the direction.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$z < 0,\\; x < y \\;\\Longrightarrow\\; xz > yz$$`}</div>
          <p>
            {`When to use this: any time you multiply or divide both sides by a negative number, flip the direction. No exceptions.`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Multiply by positive</span>
              <p>{`$2 < 3 \\Rightarrow 2 \\times 5 < 3 \\times 5$`}</p>
              <p>{`$10 < 15$. Direction stays.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Multiply by negative</span>
              <p>{`$2 < 3 \\Rightarrow 2 \\times (-5) > 3 \\times (-5)$`}</p>
              <p>{`$-10 > -15$. Direction flips.`}</p>
            </div>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`We know $\\tfrac{1}{3} < \\tfrac{1}{2}$. Multiply both sides by $z = -5$. Predict what happens to the direction, then check against the worked example below.`}</p>
          </div>
          <h3>Example with z = −5</h3>
          <p>{`$2 < 3$, multiply by $-5$: $-10 > -15$. Direction flips.`}</p>
          <p>{`$-5 < 1$, multiply by $-5$: $25 > -5$. Direction flips.`}</p>
          <p>{`$\\tfrac{1}{3} < \\tfrac{1}{2}$, multiply by $-5$: $-\\tfrac{5}{3} > -\\tfrac{5}{2}$. Direction flips.`}</p>
          <VizFigure title="Scale by Negative (Order Flips)" size="body" aspect="5/2">
            <Oac_ScaleNegative />
          </VizFigure>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Move the slider to $z = -1$. The two scaled points are now $-a$ and $-b$. Why does their order reverse compared to $a$ and $b$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Multiplying by $-1$ reflects both points across zero. Left becomes right, right becomes left. So the point that was further right is now further left. The inequality direction reverses.`}</p>
            </details>
          </div>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of the negative-multiply flip</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Let $z = -w$ where $w > 0$. Then $xz = -xw$ and $yz = -yw$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$x < y \\Rightarrow xw < yw$ (positive-multiply rule, since $w > 0$).`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$xw < yw \\Rightarrow -xw > -yw$ (sign-flip rule). So $xz > yz$.`}</div>
            </div>
            <div className="lrn-qed">Proven.</div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS THE MOST COMMON ERROR?</span>
            <p>{`Students who learned "multiply both sides" from equations apply it to inequalities without flipping. In equations, multiplying by a negative is fine: both sides stay equal. In inequalities, equal is not the goal. Order is the goal, and order reflects when you negate.`}</p>
          </div>
        </>,

        // Section 6: Dividing and Reciprocals (Facts F and G)
        <>
          <h2>Reciprocals and Division</h2>
          <p>
            {`The reciprocal of a number is 1 divided by that number. A positive number always has a positive reciprocal. A negative number always has a negative reciprocal. The sign of $\\tfrac{1}{x}$ always matches the sign of $x$. Dividing by $z$ is the same as multiplying by $\\tfrac{1}{z}$, so the division rules follow directly from the multiplication rules.`}
          </p>
          <p>
            {`$\\tfrac{1}{2}$ is positive and $-\\tfrac{1}{3}$ is negative: the reciprocal keeps the sign of the original number.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$x > 0 \\;\\Longleftrightarrow\\; \\tfrac{1}{x} > 0$$`}</div>
          <div className="lrn-eq">{`$$z > 0:\\; x < y \\Rightarrow \\tfrac{x}{z} < \\tfrac{y}{z} \\qquad z < 0:\\; x < y \\Rightarrow \\tfrac{x}{z} > \\tfrac{y}{z}$$`}</div>
          <p>
            {`When to use the division rule: dividing by $z$ means multiplying by $\\tfrac{1}{z}$. Since $\\tfrac{1}{z}$ shares the sign of $z$, you flip exactly when $z < 0$. For example, dividing by $-3$ means multiplying by $-\\tfrac{1}{3}$, a negative, so the direction flips.`}
          </p>
          <VizFigure title="Reciprocal Preserves Sign" size="body" aspect="600/256">
            <Oac_ReciprocalSign />
          </VizFigure>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Divide by positive</span>
              <p>{`$6 < 10 \\Rightarrow \\tfrac{6}{2} < \\tfrac{10}{2}$`}</p>
              <p>{`$3 < 5$. Direction stays.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Divide by negative</span>
              <p>{`$6 < 10 \\Rightarrow \\tfrac{6}{-2} > \\tfrac{10}{-2}$`}</p>
              <p>{`$-3 > -5$. Direction flips.`}</p>
            </div>
          </div>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of the reciprocal-sign rule</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$x \\cdot \\tfrac{1}{x} = 1 > 0$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`A product is positive only when both factors share the same sign. So $x$ and $\\tfrac{1}{x}$ must have the same sign.`}</div>
            </div>
            <div className="lrn-qed">Proven.</div>
          </div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`We know $\\tfrac{1}{3} < \\tfrac{1}{2}$. Take reciprocals of both sides. Does the direction stay or flip?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Reciprocals of $\\tfrac{1}{3}$ and $\\tfrac{1}{2}$ are $3$ and $2$. We have $3 > 2$, so the direction flips. For positive numbers, taking reciprocals reverses order: the smaller fraction has the larger reciprocal.`}</p>
            </details>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">WORKED EXAMPLE: DIVIDING BY A NEGATIVE</span>
            <p>{`Solve $-4x > 20$.`}</p>
            <p className="lrn-faded-phase">COMPLETE EXAMPLE</p>
            <ol className="lrn-list">
              <li>{`Start with $-4x > 20$.`}</li>
              <li>{`Divide both sides by $-4$. Since $-4 < 0$, flip the direction.`}</li>
              <li>{`$x < \\tfrac{20}{-4} = -5$.`}</li>
              <li>{`Answer: $x < -5$.`}</li>
            </ol>
            <p className="lrn-faded-phase">YOUR TURN: PARTIAL</p>
            <ol className="lrn-list">
              <li>{`Start with $-6x > 18$.`}</li>
              <li>{`Divide both sides by $-6$. What happens to the direction? [FILL IN]`}</li>
              <li>{`$x$ [FILL IN] $\\tfrac{18}{-6}$.`}</li>
              <li>{`Answer: $x$ [FILL IN] $-3$.`}</li>
            </ol>
            <p className="lrn-faded-phase">INDEPENDENT PRACTICE</p>
            <p>{`Solve $-2x > 14$ on your own. Show the step where you flip the direction.`}</p>
          </div>
          <h3>Worked Example: A Two-Step Solve</h3>
          <p>{`Solve $-2x + 3 > 7$. This needs two steps: first undo the addition, then undo the multiplication.`}</p>
          <ol className="lrn-list">
            <li>{`Start with $-2x + 3 > 7$.`}</li>
            <li>{`Undo the $+3$. Subtract 3 from both sides. Adding the opposite keeps the direction: $-2x > 4$.`}</li>
            <li>{`Undo the $-2$. Divide both sides by $-2$. Since $-2 < 0$, flip the direction: $x < \\tfrac{4}{-2} = -2$.`}</li>
            <li>{`Answer: $x < -2$.`}</li>
          </ol>
          <p>{`The order matters. Undo the addition first, while the direction stays. Then divide by the negative and flip once. Now you can solve any one-variable linear inequality.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS NOT A NEW RULE?</span>
            <p>{`Division by $z$ is multiplication by $\\tfrac{1}{z}$. Once you know $\\tfrac{1}{z}$ shares the sign of $z$, the division rule falls out of the multiplication rules. You need no new theorem. The reciprocal-sign rule plus the multiply rules cover everything about division.`}</p>
          </div>
        </>,

        // Section 7: Comparing Fractions (Fact H)
        <>
          <h2>Comparing Fractions: Cross-Multiplication</h2>
          <p>
            {`Fraction Foundations proves cross-multiplication for positive fractions: to compare $\\tfrac{x}{y}$ and $\\tfrac{z}{w}$, multiply across the diagonal. Here we extend it to fractions that can carry a sign.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$\\frac{x}{y} < \\frac{z}{w} \\;\\Longleftrightarrow\\; xw < zy \\qquad (y > 0,\\; w > 0)$$`}</div>
          <p>
            {`The new part is the sign rule: this works only when both denominators are positive.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Compare $-\\tfrac{1}{2}$ and $-\\tfrac{1}{4}$. Both denominators are positive. Predict which cross-product will be smaller, then check against the worked example below.`}</p>
          </div>
          <h3>Example: Negative Fractions</h3>
          <p>{`Compare $-\\tfrac{1}{2}$ and $-\\tfrac{1}{4}$. Denominators $2$ and $4$ are both positive. Cross-multiply: $(-1)(4) = -4$ and $(-1)(2) = -2$. Since $-4 < -2$, we get $-\\tfrac{1}{2} < -\\tfrac{1}{4}$.`}</p>
          <p>{`Always check denominator signs first. Cross-multiplying multiplies both sides by $yw$. If $yw < 0$, the direction flips and the algorithm gives the wrong answer. So rewrite to positive denominators before cross-multiplying.`}</p>
          <VizFigure title="Cross-Multiplication Test" size="body" aspect="4/3">
            <Oac_FractionCross />
          </VizFigure>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cross-multiplication</span>
              <p>{`$\\tfrac{x}{y} < \\tfrac{z}{w} \\Leftrightarrow xw < zy$`}</p>
              <p>{`Fast for two fractions. Requires $y, w > 0$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Common denominator</span>
              <p>{`Convert both to the same base, then compare numerators.`}</p>
              <p>{`Works always, but finding the common denominator takes longer.`}</p>
            </div>
          </div>
          <div className="lrn-faded">
            <span className="lrn-faded-label">WORKED EXAMPLE: SIGNED CROSS-MULTIPLICATION</span>
            <p>{`Compare $-\\tfrac{2}{3}$ and $-\\tfrac{3}{4}$.`}</p>
            <p className="lrn-faded-phase">COMPLETE EXAMPLE</p>
            <ol className="lrn-list">
              <li>{`Check denominators: 3 and 4 are both positive. Safe to cross-multiply.`}</li>
              <li>{`Cross-products: $(-2) \\times 4 = -8$ and $(-3) \\times 3 = -9$.`}</li>
              <li>{`Since $-8 > -9$, we get $-\\tfrac{2}{3} > -\\tfrac{3}{4}$.`}</li>
            </ol>
            <p className="lrn-faded-phase">YOUR TURN: PARTIAL</p>
            <ol className="lrn-list">
              <li>{`Compare $-\\tfrac{2}{5}$ and $-\\tfrac{3}{7}$. Denominators: [CHECK SIGNS].`}</li>
              <li>{`Cross-products: $(-2) \\times 7 = $ [FILL IN] and $(-3) \\times 5 = $ [FILL IN].`}</li>
              <li>{`Since [FILL IN], we get $-\\tfrac{2}{5}$ [FILL IN] $-\\tfrac{3}{7}$.`}</li>
            </ol>
            <p className="lrn-faded-phase">INDEPENDENT PRACTICE</p>
            <p>{`Compare $\\tfrac{3}{-4}$ and $\\tfrac{5}{-6}$ using cross-multiplication. Rewrite to positive denominators first, then show each step.`}</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`If the denominators are positive, why is cross-multiplication equivalent to comparing fractions on the number line? Walk through it from first principles.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Multiply both sides of $\\tfrac{x}{y} < \\tfrac{z}{w}$ by $yw > 0$. The positive-multiply rule keeps the direction. The left becomes $xw$ and the right becomes $zy$. So the original fraction inequality becomes $xw < zy$. The two statements say the same thing because we only used the positive-multiply rule.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY DOES THE DENOMINATOR SIGN MATTER?</span>
            <p>{`Cross-multiplication relies on multiplying both sides by $yw$. If both denominators are positive, $yw > 0$ and the direction is kept. If one denominator is negative, $yw < 0$ and the direction flips during the cross-multiply, breaking the algorithm. Always rewrite a fraction with a negative denominator before applying the rule.`}</p>
          </div>
        </>,

        // Section 8: Powers and Order (Facts I and J)
        <>
          <h2>Powers and Order</h2>
          <p>
            {`Recall power notation from mental calculation: $x^n$ is $x$ multiplied by itself $n$ times. Raising a number to higher powers behaves differently depending on whether the base is above or below 1.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$x > 1:\\; m > n \\Rightarrow x^m > x^n$$`}</div>
          <div className="lrn-eq">{`$$0 < x < 1:\\; m > n \\Rightarrow x^m < x^n$$`}</div>
          <p>{`Larger-base rule: if $0 < x < y$, then $x^n < y^n$ for any whole number $n > 0$.`}</p>
          <p>
            {`When to use these: the same-base power rule tells you whether a higher power is larger or smaller without calculating. The answer depends only on which side of 1 the base sits. The larger-base rule compares two positive bases at the same power, where the larger base always wins.`}
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`For $x = 3$: is $3^5$ bigger or smaller than $3^3$? For $x = \\tfrac{2}{7}$: is $\\left(\\tfrac{2}{7}\\right)^2$ bigger or smaller than $\\tfrac{2}{7}$? Predict each, then check against the worked example below.`}</p>
          </div>
          <h3>Example: Two Cases</h3>
          <p>{`$3^2 = 9 > 3$ and $5^2 = 25 > 5$. Both bases exceed 1, so squaring makes them larger.`}</p>
          <p>{`$\\left(\\tfrac{1}{2}\\right)^2 = \\tfrac{1}{4} < \\tfrac{1}{2}$ and $\\left(\\tfrac{2}{7}\\right)^2 = \\tfrac{4}{49} < \\tfrac{2}{7}$. Both bases are between 0 and 1, so squaring makes them smaller.`}</p>
          <VizFigure title="Powers and Order (Two Modes)" size="body" aspect="4/3">
            <Oac_PowerCompare />
          </VizFigure>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`x > 1`}</span>
              <p>{`Higher power means larger. $x^m > x^n$ when $m > n$.`}</p>
              <p>{`Example: $2^5 = 32 > 2^3 = 8$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`0 < x < 1`}</span>
              <p>{`Higher power means smaller. $x^m < x^n$ when $m > n$.`}</p>
              <p>{`Example: $\\left(\\tfrac{1}{2}\\right)^5 = \\tfrac{1}{32} < \\left(\\tfrac{1}{2}\\right)^3 = \\tfrac{1}{8}$.`}</p>
            </div>
          </div>
          <div className="lrn-callout">
            <p>{`Caution: the same-base power rule requires $x > 0$. If $x$ is negative, the rule does not apply. For example, $(-4)^2 = 16 > -4$, even though $-4 < 1$.`}</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The larger-base rule says: if $0 < x < y$, then $x^n < y^n$. Explain in your own words why the larger base produces the larger power.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Start with $x < y$. Multiply both sides by $x > 0$ using the positive-multiply rule: $x^2 < xy$. Multiply both sides by $y > 0$: $xy < y^2$. So $x^2 < y^2$. Repeat to get $x^3 < y^3$. Each step adds one factor, keeping the inequality valid because both bases are positive.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">
              WHY DOES THE BASE'S RELATION TO ONE DECIDE EVERYTHING?
            </span>
            <p>{`The number 1 is the pivot for multiplication. Multiplying by a number above 1 grows the product. Multiplying by a number between 0 and 1 shrinks the product. Each extra power repeats the same growth or shrinkage. So which side of 1 the base sits on decides whether $x^m$ stays above or below $x^n$.`}</p>
          </div>
        </>,

        // Section 9: Absolute Value as Distance
        <>
          <h2>Absolute Value as Distance</h2>
          <p>
            {`The absolute value of a number is its distance from zero on the number line. Distance is never negative.`}
          </p>
          <div className="lrn-eq lrn-eq-hero">{`$$|x| = \\text{distance from } x \\text{ to } 0$$`}</div>
          <p>
            {`When to use this: any time you need to say "how far" without caring about direction. Measurement errors, engineering tolerances, and distance in physics all use absolute value.`}
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$|x|$ (never below zero)`}</span>
              <p>{`$|5| = 5$ and $|-5| = 5$. Distance is always positive or zero.`}</p>
              <p>{`$|x| = -x$ when $x < 0$ (not "take off the minus sign": it becomes positive).`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$x$ (can be negative)`}</span>
              <p>{`$x = -5$ is negative. $|x| = 5$ is positive.`}</p>
              <p>{`$|x| = x$ only when $x \\geq 0$.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Absolute Value Inequality</span>
            <div className="lrn-definition-desc">
              <p>{`$|x| < b$ means $x$ is within distance $b$ of zero. That is the same as $-b < x < b$, which describes the open interval $(-b, b)$. An open interval $(-b, b)$ is all numbers strictly between $-b$ and $b$. The endpoints are not included.`}</p>
            </div>
          </div>
          <p>{`The symbol $\\in$ means x lies in, or belongs to, the interval.`}</p>
          <div className="lrn-eq">{`$$|x| < b \\;\\Longleftrightarrow\\; x \\in (-b, b)$$`}</div>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Solve $|x| < 3$. Write the answer as a double inequality and as an interval.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`$|x| < 3$ means $-3 < x < 3$, i.e. $x \\in (-3, 3)$. Any $x$ within distance 3 of zero satisfies this.`}</p>
            </details>
          </div>
          <VizFigure title="Absolute Value as Distance" size="body" aspect="620/256">
            <Oac_AbsoluteDistance />
          </VizFigure>
          <h3>Key Properties</h3>
          <p>{`Product: $|x| \\cdot |y| = |xy|$. The absolute value of a product equals the product of the absolute values.`}</p>
          <p>{`Triangle inequality: $|x + y| \\leq |x| + |y|$. The distance from 0 to $x + y$ is at most $|x| + |y|$.`}</p>
          <p>{`The two sides are equal only when $x$ and $y$ share a sign. Same signs push in the same direction, so their sizes add up fully. Opposite signs cancel part of the sum, making $|x + y|$ smaller.`}</p>
          <h3>Real-World Application: Manufacturing Tolerance</h3>
          <p>{`A machinist cuts a bolt to length $50.00 \\pm 0.02$ mm. The actual length $L$ satisfies $|L - 50.00| \\leq 0.02$. The $\\pm 0.02$ marks the tolerance: any bolt within $0.02$ mm of $50.00$ passes inspection.`}</p>
          <p>{`This applies $|x| < b \\Leftrightarrow x \\in (-b, b)$ with $x = L - 50.00$ and $b = 0.02$.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`± notation (engineering)`}</span>
              <p>{`$50.00 \\pm 0.02$ mm`}</p>
              <p>{`Convenient shorthand on a blueprint.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Absolute value inequality</span>
              <p>{`$|L - 50.00| \\leq 0.02$`}</p>
              <p>{`Exact algebra form needed in proofs and quality control.`}</p>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">
              WHY DOES ABSOLUTE VALUE MATTER BEYOND SCHOOL?
            </span>
            <p>{`School often teaches absolute value as "take off the minus sign." That description only works for single numbers. The real idea is distance from 0. It answers one question: how close are two numbers? You write that as $|a - b|$, the distance between $a$ and $b$. Engineering tolerances, error bars, and gaps on a timeline all measure this kind of closeness.`}</p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`If $|x| < 5$ and $|y| < 5$, what is the largest possible value of $|x + y|$?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`By the triangle inequality, $|x + y| \\leq |x| + |y| < 5 + 5 = 10$. So $|x + y| < 10$. The triangle inequality bounds the size of a sum by the sum of the sizes. The bound is reached when $x$ and $y$ have the same sign.`}</p>
            </details>
          </div>
        </>,

        // Section 10: Time as Ordered Distance
        <>
          <h2>Time as Ordered Distance</h2>
          <p>
            {`Time is naturally ordered. Earlier events come before later ones. A timeline is a number line where position represents time.`}
          </p>
          <p>
            {`Duration is distance on the timeline. The duration between time $t_1$ and time $t_2$ is $|t_2 - t_1|$. The absolute value handles subtraction in either order.`}
          </p>
          <p>
            {`When to use this: ordering events in history, calculating time differences, and comparing durations all use the number-line model of time.`}
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Timeline ordering</span>
            <div className="lrn-definition-desc">
              <p>{`If event $A$ happened at time $t_A$ and event $B$ at time $t_B$, then $A$ is earlier when $t_A < t_B$. Duration between them: $|t_B - t_A|$.`}</p>
            </div>
          </div>
          <VizFigure title="Time as Ordered Distance" size="body" aspect="5/2">
            <Oac_TimeDuration />
          </VizFigure>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A train leaves at $t_1 = 07{:}10$ and arrives at $t_2 = 10{:}27$. How long does the journey take? Write the duration using absolute value.`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Duration is $|t_2 - t_1| = |10{:}27 - 07{:}10| = 3$ hours $17$ minutes. The absolute value handles the case where you subtract in either order: $|t_2 - t_1| = |t_1 - t_2|$, so direction does not matter.`}</p>
            </details>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`The duration formula is $|t_2 - t_1|$. Why does the absolute value appear here? Connect it back to the definition $|x| = $ distance from $x$ to 0.`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`$|t_2 - t_1|$ is the distance between $t_2$ and $t_1$ on the number line. If you let $x = t_2 - t_1$, then $|x|$ is the distance from $x$ to 0. That distance equals how far apart $t_1$ and $t_2$ are, regardless of which comes first. The absolute value makes duration always positive.`}</p>
            </details>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY DOES ORDERING UNIFY ALGEBRA AND TIME?</span>
            <p>{`The ordering rules you learned are not just algebra. They describe time, space, and any quantity that can be larger or smaller. The number line is the geometric picture. The rules (especially the flip when multiplying by a negative) apply to inequalities everywhere, including in physics and statistics.`}</p>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: 'Is $-7 < -3$ or $-3 < -7$? Which sits further left on the number line?',
        a: '$-7 < -3$. On the number line, $-7$ sits further left than $-3$. Left means smaller, even for negatives. Check: $-3 - (-7) = 4 > 0$, confirming $-7 < -3$.'
      },
      {
        q: 'Use the difference test to check: is $-5 < -1$?',
        a: 'The difference test says $x < y$ when $y - x > 0$. Compute $(-1) - (-5) = 4 > 0$. Since the difference is positive, yes, $-5 < -1$. This matches the number line: $-5$ sits further left than $-1$.'
      },
      {
        q: 'Draw $x > 1$ on the number line. Does $x = 1$ satisfy it? What kind of circle goes at 1?',
        a: 'No, $x = 1$ does not satisfy $x > 1$ (the inequality is strict). An open circle goes at 1. The arrow points right from the open circle.'
      },
      {
        q: 'Draw $x \\leq -2$ on the number line. Does $x = -2$ satisfy it? What kind of circle goes at $-2$?',
        a: 'Yes, $x = -2$ satisfies $x \\leq -2$. A filled (closed) circle goes at $-2$. The arrow points left from the filled circle.'
      },
      {
        q: 'We know $1 < 2$. Use the sign-flip rule to write an inequality with $-1$ and $-2$.',
        a: 'Negate both sides and flip the direction: $-1 > -2$. The sign-flip rule says $x < y \\Leftrightarrow -x > -y$. Here $x = 1$, $y = 2$, so $-1 > -2$. The direction flipped because you negated both sides.'
      },
      {
        q: 'Temperature $A = -10^{\\circ}$ and temperature $B = -4^{\\circ}$. Which is colder? Apply the sign-flip rule to compare $-A$ and $-B$.',
        a: '$-10 < -4$, so $A < B$: temperature $A$ is colder. By the sign-flip rule, $-(-10) > -(-4)$, i.e. $10 > 4$. Negating both flips the direction. The colder temperature has the larger positive value when negated.'
      },
      {
        q: 'We know $2 < 4$. Add $z = 25$ to both sides. Does the inequality still hold?',
        a: '$2 + 25 = 27$ and $4 + 25 = 29$. Since $27 < 29$, yes. The shift rule guarantees this: adding any $z$ keeps the direction. The gap stays $4 - 2 = 2$ regardless of $z$.'
      },
      {
        q: 'Why can you add any number to both sides of an inequality without flipping the direction? Explain from first principles.',
        a: 'Adding $z$ shifts both points by the same amount. The gap $(y + z) - (x + z) = y - x$ is unchanged. Since $y - x > 0$ was the reason $x < y$, the same reason still applies after the shift. The direction cannot change.'
      },
      {
        q: 'Use the difference test to check: is $-53 < -51$?',
        a: 'The difference test says $x < y \\Leftrightarrow y - x > 0$. Compute $(-51) - (-53) = 2 > 0$. Since the difference is positive, yes, $-53 < -51$. This matches the number line: $-53$ sits further left than $-51$.'
      },
      {
        q: 'Predict: will $287 > 0$ and $-23 < 0$ both stay the same after multiplying by $z = 5$?',
        a: 'Yes. The positive-multiply rule says: multiply by $z = 5 > 0$, direction preserved. $5 \\times 287 = 1435 > 0$. $5 \\times (-23) = -115 < 0$. Positive stays positive, negative stays negative.'
      },
      {
        q: 'We know $2 < 3$. Multiply both sides by $-5$. Write the result with the correct direction.',
        a: 'Multiply by $-5 < 0$: the negative-multiply rule says flip the direction. $2 \\times (-5) = -10$ and $3 \\times (-5) = -15$. After the flip: $-10 > -15$. Check: $-10$ is further right than $-15$. Correct.'
      },
      {
        q: 'Solve $-3x > 12$ for $x$. State which rule you use and when you flip.',
        a: 'Divide both sides by $-3 < 0$. The division rule says flip the direction. $x < \\tfrac{12}{-3} = -4$. So $x < -4$. The flip happens because you divide by a negative.'
      },
      {
        q: 'Why does multiplying by a negative number flip the inequality direction? Explain from first principles using the mirror image idea.',
        a: 'Multiplying by $-1$ reflects every point across zero. Left becomes right and right becomes left. The point that was further right is now further left, so the inequality reverses. Multiplying by any $z < 0$ also scales the distance, but the reflection still flips the order.'
      },
      {
        q: 'Is $\\tfrac{1}{-7}$ positive or negative? Use the reciprocal-sign rule to justify.',
        a: '$-7 < 0$. The reciprocal-sign rule says $x > 0 \\Leftrightarrow \\tfrac{1}{x} > 0$, so a negative number has a negative reciprocal. $\\tfrac{1}{-7} = -\\tfrac{1}{7} < 0$. Reciprocals always carry the same sign as the original number.'
      },
      {
        q: 'Solve $-\\tfrac{x}{3} > 4$. State whether you flip the direction and why.',
        a: 'Multiply both sides by $-3 < 0$. The negative-multiply rule says flip the direction. $x < 4 \\times (-3) = -12$. So $x < -12$. The flip happens because $-3$ is negative.'
      },
      {
        q: 'Compare $-\\tfrac{1}{2}$ and $-\\tfrac{1}{4}$ using cross-multiplication. Which is larger?',
        a: 'Denominators $2$ and $4$ are both positive, so cross-multiplication applies. $(-1)(4) = -4$ and $(-1)(2) = -2$. Since $-4 < -2$, we get $-\\tfrac{1}{2} < -\\tfrac{1}{4}$. So $-\\tfrac{1}{4}$ is larger.'
      },
      {
        q: 'A student compares $\\tfrac{3}{-4}$ and $\\tfrac{5}{-6}$. The two cross-products are $3 \\times (-6) = -18$ and $5 \\times (-4) = -20$. The student concludes $\\tfrac{3}{-4} < \\tfrac{5}{-6}$. Is this correct?',
        a: 'No. Cross-multiplication requires both denominators to be positive. Here the denominators are $-4$ and $-6$. The algorithm gives the wrong direction. Rewrite first: $\\tfrac{3}{-4} = -\\tfrac{3}{4}$ and $\\tfrac{5}{-6} = -\\tfrac{5}{6}$, then cross-multiply with positive denominators.'
      },
      {
        q: 'Why must both denominators be positive for cross-multiplication to work? Explain the algebraic reason.',
        a: 'Cross-multiplication means multiplying both sides by $yw$. If $y > 0$ and $w > 0$, then $yw > 0$ and the positive-multiply rule keeps the direction. If one denominator is negative, $yw < 0$ and the negative-multiply rule flips the direction, breaking the algorithm.'
      },
      {
        q: 'Without calculating, is $3^5$ bigger or smaller than $3^3$? State which rule you used.',
        a: '$3 > 1$, so by the same-base power rule, higher powers are larger. $3^5 > 3^3$. Compute: $243 > 27$. Correct. Each extra factor of 3 scales the product up because the base exceeds 1.'
      },
      {
        q: 'Without calculating, is $\\left(\\tfrac{2}{7}\\right)^2$ bigger or smaller than $\\tfrac{2}{7}$? State which rule you used.',
        a: '$\\tfrac{2}{7} < 1$, so by the same-base power rule, higher powers are smaller. $\\left(\\tfrac{2}{7}\\right)^2 < \\tfrac{2}{7}$. Compute: $\\tfrac{4}{49} \\approx 0.082 < 0.286$. Correct. Each extra factor of $\\tfrac{2}{7}$ shrinks the product.'
      },
      {
        q: 'A student says: "$-4 < 1$, so $(-4)^2 < (-4)^1$." Find and fix the error.',
        a: 'Error: the same-base power rule requires a positive base. $-4 < 0$, so the rule does not apply. In fact $(-4)^2 = 16 > -4 = (-4)^1$. Never apply the rule to a negative base. Squaring a negative gives a positive result, which is always larger than the negative original.'
      },
      {
        q: 'Why do higher powers make a number greater than 1 grow larger, but make a number between 0 and 1 shrink? Explain from first principles.',
        a: 'If $x > 1$, each extra multiplication by $x$ makes the product larger (positive-multiply rule with $x > 1$). If $0 < x < 1$, each multiplication by $x$ makes the product smaller (positive-multiply with $x < 1$ brings the product closer to zero). The same operation has opposite effects because $x$ sits on opposite sides of 1.'
      },
      {
        q: 'We know $2 < 3$. Apply the larger-base rule to compare $2^4$ and $3^4$.',
        a: 'The larger-base rule says $0 < 2 < 3 \\Rightarrow 2^4 < 3^4$. Compute: $16 < 81$. Correct. The larger base raised to the same positive power always gives the larger result.'
      },
      {
        q: 'Solve $|x| < 3$. Write as a double inequality and as an interval.',
        a: '$|x| < 3$ means the distance from $x$ to 0 is less than 3. So $-3 < x < 3$, i.e. $x \\in (-3, 3)$.'
      },
      {
        q: 'A bolt is machined to $50.00 \\pm 0.02$ mm. Write this as an absolute value inequality.',
        a: '$|L - 50.00| \\leq 0.02$. The $\\pm 0.02$ means the actual length $L$ stays within 0.02 mm of 50.00. That is exactly what $|L - 50.00| \\leq 0.02$ says.'
      },
      {
        q: 'If $|a| \\leq 3$ and $|b| \\leq 4$, what is the largest possible value of $|a + b|$?',
        a: 'By the triangle inequality, $|a + b| \\leq |a| + |b| \\leq 3 + 4 = 7$. The bound $7$ is reached when $a$ and $b$ have the same sign, for example $a = 3$ and $b = 4$.'
      },
      {
        q: 'Event $A$ happens at time $t_A = 3$ and event $B$ at $t_B = 11$. Which is earlier? What is the duration between them?',
        a: '$t_A = 3 < t_B = 11$, so event $A$ is earlier. Duration: $|t_B - t_A| = |11 - 3| = 8$ units of time. The absolute value means you get the same answer whether you compute $t_B - t_A$ or $t_A - t_B$.'
      },
      {
        q: 'Solve $-2x + 3 > 7$ and draw the solution on a number line.',
        a: 'Subtract 3: $-2x > 4$. Divide by $-2 < 0$, flip the direction: $x < -2$. On the number line: open circle at $-2$, arrow pointing left.'
      },
      {
        q: 'Without solving, predict the sign of $x$ in $-5x > 20$. Will $x$ be positive or negative?',
        a: 'Negative. Dividing by $-5 < 0$ flips the direction. So $x < \\tfrac{20}{-5} = -4$. $x$ must be less than $-4$, which is negative.'
      },
      {
        q: 'Explain why the eight basic ordering rules are not arbitrary but necessary consequences of the number line.',
        a: 'Order on the number line is defined by position: $x < y$ means $x$ is to the left of $y$. Every rule follows from this. Adding $z$ shifts both points together, leaving relative position unchanged (rule B). Negating reflects across zero, so left becomes right (rule A). Multiplying by a positive scales without flipping, so relative order stays (rule D). Multiplying by a negative scales and reflects, so order flips (rule E). Each rule is forced by the geometry, not chosen for convenience.'
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Ordering and Comparison',
      sections: [
        <>
          <h2>Inequality Symbols</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$x < y$`}</span>
            <div className="lrn-definition-desc">
              <p>{`$x$ is to the left of $y$ on the number line. Equivalent to $y - x > 0$.`}</p>
              <p>{`When to use: to say one number is strictly smaller than another.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">{`$x \\leq y$`}</span>
            <div className="lrn-definition-desc">
              <p>{`$x < y$ or $x = y$. Includes the boundary.`}</p>
              <p>{`When to use: when equality is also allowed.`}</p>
            </div>
          </div>

          <h2>The Eight Basic Facts</h2>

          <div className="lrn-eq lrn-eq-hero">{`$$(A)\\quad x < y \\;\\Longleftrightarrow\\; -x > -y$$`}</div>
          <p>{`When to use: any time you multiply or divide by $-1$. Flip the direction.`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$(B)\\quad x < y \\;\\Longrightarrow\\; x + z < y + z$$`}</div>
          <p>{`When to use: add or subtract the same number from both sides. Direction stays.`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$(C)\\quad x < y \\;\\Longleftrightarrow\\; y - x > 0$$`}</div>
          <p>{`When to use: check an inequality by computing the difference. If $y - x > 0$, then $x < y$.`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$(D)\\quad z > 0,\\; x < y \\;\\Longrightarrow\\; xz < yz$$`}</div>
          <p>{`When to use: multiply or divide both sides by a positive number. Direction stays.`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$(E)\\quad z < 0,\\; x < y \\;\\Longrightarrow\\; xz > yz$$`}</div>
          <p>{`When to use: multiply or divide both sides by a negative number. FLIP the direction.`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$(F)\\quad x > 0 \\;\\Longleftrightarrow\\; \\tfrac{1}{x} > 0$$`}</div>
          <p>{`When to use: determining the sign of a reciprocal. Same sign as the original.`}</p>

          <div className="lrn-eq">{`$$\\begin{aligned}(G)\\quad & z > 0:\\; x < y \\Rightarrow \\tfrac{x}{z} < \\tfrac{y}{z}\\\\ & z < 0:\\; x < y \\Rightarrow \\tfrac{x}{z} > \\tfrac{y}{z}\\end{aligned}$$`}</div>
          <p>{`When to use: dividing both sides by $z$. Same rule as multiplication (via Fact F).`}</p>

          <div className="lrn-eq lrn-eq-hero">{`$$(H)\\quad \\frac{x}{y} < \\frac{z}{w} \\;\\Longleftrightarrow\\; xw < zy \\quad (y > 0,\\; w > 0)$$`}</div>
          <p>{`When to use: comparing two fractions with positive denominators. Cross-multiply and compare.`}</p>

          <h2>Sign Rules: Multiply/Divide</h2>
          <table
            style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'D-DIN', monospace" }}
          >
            <thead>
              <tr>
                {['Multiplier $z$', 'Effect on direction', 'Rule'].map((h, i) => (
                  <th
                    key={i}
                    style={{
                      textAlign: 'left',
                      padding: '6px 10px',
                      borderBottom: '1px solid var(--border-default)',
                      fontSize: FONT_LABEL,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['$z > 0$', 'Stays the same', 'Fact (D)'],
                ['$z = 0$', 'Destroys the inequality', 'Both sides become 0'],
                ['$z < 0$', 'FLIPS', 'Fact (E)']
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      style={{
                        padding: '6px 10px',
                        borderBottom: '1px solid var(--border-subtle)',
                        fontSize: FONT_TEX
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Powers and Order</h2>
          <div className="lrn-eq">{`$$\\text{Fact (I), case 1}: x > 1 \\Rightarrow x^m > x^n \\text{ for } m > n$$`}</div>
          <div className="lrn-eq">{`$$\\text{Fact (I), case 2}: 0 < x < 1 \\Rightarrow x^m < x^n \\text{ for } m > n$$`}</div>
          <div className="lrn-eq">{`$$\\text{Fact (J)}: 0 < x < y \\Rightarrow x^n < y^n \\text{ for } n > 0$$`}</div>
          <p>{`When to use Fact (I): comparing $x^m$ and $x^n$ for the same base. Check whether $x > 1$ or $0 < x < 1$.`}</p>
          <p>{`When to use Fact (J): comparing two different positive bases at the same power.`}</p>

          <h2>Absolute Value</h2>
          <div className="lrn-eq lrn-eq-hero">{`$$|x| = \\text{distance from } x \\text{ to } 0$$`}</div>
          <div className="lrn-eq lrn-eq-hero">{`$$|x| < b \\;\\Longleftrightarrow\\; -b < x < b \\;\\Longleftrightarrow\\; x \\in (-b, b)$$`}</div>
          <p>{`When to use: converting $\\pm$ notation to algebra; checking whether a value is within a tolerance.`}</p>
          <ul className="lrn-list">
            <li>{`$|x| \\cdot |y| = |xy|$`}</li>
            <li>{`$|x + y| \\leq |x| + |y|$ (triangle inequality)`}</li>
          </ul>

          <h2>Time as Ordered Distance</h2>
          <div className="lrn-eq">{`$$\\text{Duration} = |t_2 - t_1|$$`}</div>
          <p>{`$t_A < t_B$ means event $A$ is earlier than event $B$. Duration is always positive because of the absolute value.`}</p>

          <h2>Number Line Notation</h2>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Open circle</span>
              <p>{`Strict inequality ($<$ or $>$). Endpoint excluded.`}</p>
              <p>{`Interval: parenthesis $($ or $)$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Filled circle</span>
              <p>{`Non-strict ($\\leq$ or $\\geq$). Endpoint included.`}</p>
              <p>{`Interval: bracket $[$ or $]$.`}</p>
            </div>
          </div>
        </>
      ]
    }
  }
  return config
}

export default function OrderingAndComparison() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
