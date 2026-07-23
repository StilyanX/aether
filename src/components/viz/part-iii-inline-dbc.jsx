// Part III inline topic-page viz - Dirac–Bergmann constraints (?page=dbc).
// BUILT to house standard in this workbench: upstream sources for these four
// were NOT in the part-iii-showcase upload (audit § BLOCKER, resolved by rebuild).
// Conventions: natural units; isotropy on every panel with real right angles;
// equations displayed match the code that runs; ICs shown; prm suppresses
// self-start only (PLAY overrides, via useSimulation).

import React from 'react'
import {
  Arrow,
  Canvas,
  Dot,
  DragHandle,
  KatexInline,
  Label,
  OPACITY,
  Parametric,
  PlayPause,
  Plot,
  Polyline,
  Slider,
  Tex,
  FG,
  Hatch
} from './primitives'
import { useSimulation } from './physics'
import { FONT_LABEL, FONT_SMALL, FONT_TINY, STROKE_PRIMARY, STROKE_SECONDARY } from './scale-tokens'

const TAU = 2 * Math.PI

// Shared readout strip (house pattern: KatexInline row under the plot)
function DbcReadout({ items }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px 18px',
        justifyContent: 'center',
        margin: '6px 0 2px',
        fontSize: FONT_LABEL,
        opacity: OPACITY.dim
      }}
    >
      {items.map((tex, i) => (
        <KatexInline key={i} tex={tex} />
      ))}
    </div>
  )
}

// ConstraintSurfaceDiagram
// The singular Legendre map, fully concrete: L = ½(q̇₁−q̇₂)² has Hessian rank 1
// (N=2, M′=1), momenta p₁ = q̇₁−q̇₂ = −p₂. Drag the velocity point: every fiber
// q̇₁−q̇₂ = const (dashed diagonals) collapses to ONE point of the line
// φ = p₁+p₂ = 0 - the primary constraint surface. Points off the line are not
// in the image of FL at all.
export function ConstraintSurfaceDiagram() {
  const [v, setV] = React.useState([1.2, -0.3])
  const d = v[0] - v[1] // = p₁ = −p₂
  const fibers = [-2, -1, 0, 1, 2]
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <Plot xRange={[-2.3, 2.3]} yRange={[-2.3, 2.3]} width={300} height={300}>
            <Polyline
              points={[
                [-2.3, 0],
                [2.3, 0]
              ]}
              opacity={OPACITY.faint}
            />
            <Polyline
              points={[
                [0, -2.3],
                [0, 2.3]
              ]}
              opacity={OPACITY.faint}
            />
            {/* fibers q̇₁−q̇₂ = c: lines of slope 1, clamped to the frame */}
            {fibers.map(c => (
              <Parametric
                key={c}
                xy={t => [t, t - c]}
                t={[Math.max(-2.3, c - 2.3), Math.min(2.3, c + 2.3)]}
                samples={4}
                opacity={OPACITY.hair * 1.6}
                dash="3 4"
              />
            ))}
            {/* fiber through the handle */}
            <Parametric
              xy={t => [t, t - d]}
              t={[Math.max(-2.3, d - 2.3), Math.min(2.3, d + 2.3)]}
              samples={4}
              opacity={OPACITY.accent}
              dash="5 4"
            />
            <DragHandle
              x={v[0]}
              y={v[1]}
              onChange={(x, y) => setV([x, y])}
              constrain={(x, y) => {
                // keep the image point (d, −d) inside the right panel's frame
                const dd = Math.max(-2.0, Math.min(2.0, x - y))
                const m = (x + y) / 2
                const mm = Math.max(-1.9, Math.min(1.9, m))
                return [mm + dd / 2, mm - dd / 2]
              }}
            />
            <Tex
              at={[2.2, 0.16]}
              tex={String.raw`\dot q_1`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
              anchor="end"
            />
            <Tex
              at={[0.12, 2.16]}
              tex={String.raw`\dot q_2`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[-2.2, 2.12]}
              tex={String.raw`\text{velocity space}`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[-2.2, -2.12]}
              tex={String.raw`\text{fibers }\dot q_1-\dot q_2=\text{const}`}
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
          </Plot>
        </div>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <Plot xRange={[-2.3, 2.3]} yRange={[-2.3, 2.3]} width={300} height={300}>
            <Polyline
              points={[
                [-2.3, 0],
                [2.3, 0]
              ]}
              opacity={OPACITY.faint}
            />
            <Polyline
              points={[
                [0, -2.3],
                [0, 2.3]
              ]}
              opacity={OPACITY.faint}
            />
            {/* the primary constraint surface p₂ = −p₁ */}
            <Parametric
              xy={t => [t, -t]}
              t={[-2.3, 2.3]}
              samples={4}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
            />
            {/* images of the drawn fibers */}
            {fibers.map(c => (
              <Dot key={c} x={c} y={-c} r={2.5} opacity={OPACITY.dim} />
            ))}
            {/* image of the dragged point */}
            <Dot x={d} y={-d} r={5} opacity={OPACITY.fg} />
            <Tex
              at={[2.2, 0.16]}
              tex={String.raw`p_1`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
              anchor="end"
            />
            <Tex at={[0.12, 2.16]} tex={String.raw`p_2`} size={FONT_SMALL} opacity={OPACITY.dim} />
            <Tex
              at={[-2.2, 2.12]}
              tex={String.raw`\text{phase space (momenta)}`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[0.7, -1.45]}
              tex={String.raw`\phi=p_1+p_2=0`}
              size={FONT_SMALL}
              opacity={OPACITY.accent}
            />
            <Tex
              at={[-2.2, -2.12]}
              tex={String.raw`\text{off the line: not in the image of }FL`}
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
          </Plot>
        </div>
      </div>
      <DbcReadout
        items={[
          String.raw`L=\tfrac{1}{2}(\dot q_1-\dot q_2)^2`,
          String.raw`(\dot q_1,\dot q_2)=(${v[0].toFixed(2)},\ ${v[1].toFixed(2)})`,
          String.raw`p_1=-p_2=\dot q_1-\dot q_2=${d.toFixed(2)}`,
          String.raw`N=2,\ M'=1\ \Rightarrow\ \dim=2N-M'=3`
        ]}
      />
    </div>
  )
}

// FirstVsSecondClassContrast
// The two minimal examples, side by side. Left: φ = p ≈ 0 - its own flow
// X_φ = ([q,p],[p,p]) = (1,0) is tangent to the surface: first class, gauge.
// Right: χ₁ = q, χ₂ = p - the surface is one point; X_{χ₁} = (0,−1) and
// X_{χ₂} = (1,0) both leave it. C = [χ_α,χ_β] is invertible: second class.
export function FirstVsSecondClassContrast() {
  const sites = [-1.5, -0.75, 0, 0.75, 1.5]
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <Plot xRange={[-2.05, 2.05]} yRange={[-2.05, 2.05]} width={300} height={300}>
            <Polyline
              points={[
                [0, -2.05],
                [0, 2.05]
              ]}
              opacity={OPACITY.hair * 1.6}
            />
            {/* constraint surface p = 0 */}
            <Polyline
              points={[
                [-2.05, 0],
                [2.05, 0]
              ]}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
            />
            {/* gauge flow X_φ = (1,0) along the surface */}
            {sites.map(q => (
              <Arrow key={q} from={[q, 0]} to={[q + 0.5, 0]} opacity={OPACITY.fg} head={5} />
            ))}
            {/* the same field off the surface, faint (it is global) */}
            {sites.map(q => (
              <React.Fragment key={'o' + q}>
                <Arrow from={[q, 1.1]} to={[q + 0.5, 1.1]} opacity={OPACITY.faint} head={4} />
                <Arrow from={[q, -1.1]} to={[q + 0.5, -1.1]} opacity={OPACITY.faint} head={4} />
              </React.Fragment>
            ))}
            <Tex
              at={[-1.95, 1.86]}
              tex={String.raw`\text{first class}`}
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
            <Tex
              at={[-1.95, 1.52]}
              tex={String.raw`\phi=p\approx 0`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[1.95, 0.3]}
              tex={String.raw`X_\phi=(1,0)`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
              anchor="end"
            />
            <Tex
              at={[-1.95, -1.6]}
              tex={String.raw`\text{flow stays on }\phi=0:\ \text{gauge}`}
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[1.98, 1.86]}
              tex={String.raw`q`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
              anchor="end"
            />
          </Plot>
        </div>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <Plot xRange={[-2.05, 2.05]} yRange={[-2.05, 2.05]} width={300} height={300}>
            {/* the two constraint loci */}
            <Polyline
              points={[
                [-2.05, 0],
                [2.05, 0]
              ]}
              opacity={OPACITY.dim}
              dash="4 4"
            />
            <Polyline
              points={[
                [0, -2.05],
                [0, 2.05]
              ]}
              opacity={OPACITY.dim}
              dash="4 4"
            />
            {/* their intersection: the whole constraint surface */}
            <Dot x={0} y={0} r={5} opacity={OPACITY.fg} />
            {/* both generated flows leave the point */}
            <Arrow from={[0, 0]} to={[0, -0.8]} opacity={OPACITY.fg} />
            <Arrow from={[0, 0]} to={[0.8, 0]} opacity={OPACITY.fg} />
            <Tex
              at={[-1.95, 1.86]}
              tex={String.raw`\text{second class}`}
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
            <Tex
              at={[-1.95, 1.52]}
              tex={String.raw`\chi_1=q\approx 0,\ \chi_2=p\approx 0`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[0.16, -0.86]}
              tex={String.raw`X_{\chi_1}=(0,-1)`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[0.92, 0.24]}
              tex={String.raw`X_{\chi_2}=(1,0)`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[-1.95, -1.6]}
              tex={String.raw`\text{no flow preserves both: no gauge}`}
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[1.5, -1.42]}
              tex={String.raw`\chi_1=0`}
              size={FONT_TINY}
              opacity={OPACITY.dim}
              anchor="end"
            />
            <Tex
              at={[0.14, 1.86]}
              tex={String.raw`\chi_2=0`}
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
          </Plot>
        </div>
      </div>
      <DbcReadout
        items={[
          String.raw`[\phi,\phi]=0\ \Rightarrow\ \det C=0`,
          String.raw`[\chi_1,\chi_2]=1\ \Rightarrow\ C=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\ \det C=1\neq 0`
        ]}
      />
    </div>
  )
}

// GaugeOrbitSweep
// Pure-gauge system: H_T = v(t)·φ with φ = ½(q²+p²−1) ≈ 0. The flow
// q̇ = v p, ṗ = −v q is a rotation by α(t) = ∫v dt′, so the constraint surface
// (unit circle) is preserved EXACTLY - it is also the gauge orbit. Two copies
// of the same initial state evolve under different multipliers v(t); they
// separate, yet both remain the same physical state.
export function GaugeOrbitSweep() {
  const [state, , { playing, setPlaying, reset }] = useSimulation(
    { u: 0 },
    (s, dt) => ({ u: s.u + dt }),
    { running: true }
  )
  const t = state.u
  // exact: α_i = ∫₀ᵗ v_i dt′ for v₁ = 1, v₂ = 1 + 0.8 sin t
  const a1 = t
  const a2 = t + 0.8 * (1 - Math.cos(t))
  const pos = a => [Math.cos(a), -Math.sin(a)]
  const [q1, p1] = pos(a1)
  const [q2, p2] = pos(a2)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.75, 1.75]} yRange={[-1.75, 1.75]} width={440} height={440}>
        <Polyline
          points={[
            [-1.75, 0],
            [1.75, 0]
          ]}
          opacity={OPACITY.hair * 1.6}
        />
        <Polyline
          points={[
            [0, -1.75],
            [0, 1.75]
          ]}
          opacity={OPACITY.hair * 1.6}
        />
        {/* constraint surface = gauge orbit */}
        <Parametric
          xy={s => [Math.cos(s), Math.sin(s)]}
          t={[0, TAU]}
          samples={128}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* shared initial state */}
        <Dot x={1} y={0} r={5} fill={false} opacity={OPACITY.dim} />
        <Tex
          at={[1.1, -0.3]}
          tex={String.raw`(q,p)_0=(1,0)`}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* trails (last stretch of each arc) */}
        <Parametric
          xy={s => [Math.cos(s), -Math.sin(s)]}
          t={[Math.max(0, a1 - 0.7), a1]}
          samples={24}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={s => [Math.cos(s), -Math.sin(s)]}
          t={[Math.max(0, a2 - 0.7), a2]}
          samples={24}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={q1} y={p1} r={4.5} opacity={OPACITY.fg} />
        <Dot x={q2} y={p2} r={4.5} fill={false} opacity={OPACITY.fg} />
        <Tex
          at={[-1.68, 1.62]}
          tex={String.raw`H_T=v(t)\,\phi,\quad \phi=\tfrac{1}{2}(q^2+p^2-1)`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-1.68, 1.32]}
          tex={String.raw`\dot q=v\,p,\quad \dot p=-v\,q`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-1.68, -1.36]}
          tex={String.raw`\bullet\ v_1=1\qquad \circ\ v_2=1+0.8\sin t`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-1.68, -1.62]}
          tex={String.raw`\text{gauge orbit}=\text{one physical state}`}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[1.68, 0.18]}
          tex={String.raw`q`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
          anchor="end"
        />
        <Tex at={[0.12, 1.62]} tex={String.raw`p`} size={FONT_SMALL} opacity={OPACITY.dim} />
      </Plot>
      <DbcReadout
        items={[
          String.raw`\alpha_1=\textstyle\int v_1\,dt=${a1.toFixed(2)}`,
          String.raw`\alpha_2=\textstyle\int v_2\,dt=${a2.toFixed(2)}`,
          String.raw`\phi=0\ \text{exactly for both (rotation preserves }q^2+p^2)`
        ]}
      />
      <PlayPause playing={playing} onToggle={() => setPlaying(p => !p)} onReset={reset} />
    </div>
  )
}

// PhaseSpaceDimensionCount
// The counting rule 2N_phys = 2N − 2A − B as a cell diagram: 2N phase-space
// dimensions; each first-class constraint removes 2 (the constraint + its gauge
// orbit); each second-class constraint removes 1 (B even). Sliders clamp to
// 2A + B ≤ 2N. Defaults: electromagnetism (N=4, A=2, B=0 → 2 physical dof).
export function PhaseSpaceDimensionCount() {
  const [n, setN] = React.useState(4)
  const [a, setA] = React.useState(2)
  const [b, setB] = React.useState(0)
  const setNc = v => {
    const N = Math.round(v)
    const A = Math.min(a, N)
    const Bmax = 2 * N - 2 * A
    setN(N)
    setA(A)
    setB(Math.min(b, Bmax))
  }
  const setAc = v => setA(Math.min(Math.round(v), Math.floor((2 * n - b) / 2)))
  const setBc = v => setB(Math.min(2 * Math.round(v / 2), 2 * n - 2 * a))
  const phys = 2 * n - 2 * a - b

  const W = 560
  const H = 168
  const cell = 34
  const gap = 6
  const total = 2 * n
  const x0 = (W - (total * cell + (total - 1) * gap)) / 2
  const yTop = 74
  const cells = []
  for (let i = 0; i < total; i++) {
    const kind = i < 2 * a ? 'fc' : i < 2 * a + b ? 'sc' : 'ph'
    cells.push({ x: x0 + i * (cell + gap), kind })
  }
  const regionLabel = (from, count, text) => {
    if (count < 2) return null
    const cx = x0 + from * (cell + gap) + (count * cell + (count - 1) * gap) / 2
    return (
      <Label x={cx} y={yTop - 18} size={FONT_SMALL} anchor="middle" opacity={OPACITY.dim}>
        {text}
      </Label>
    )
  }
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <Hatch id="dbc-fc" angle={45} gap={4} opacity={0.35} />
        <Hatch id="dbc-sc" angle={-45} gap={3} opacity={0.35} />
        {cells.map((c, i) => (
          <rect
            key={i}
            x={c.x}
            y={yTop}
            width={cell}
            height={cell}
            fill={c.kind === 'fc' ? 'url(#dbc-fc)' : c.kind === 'sc' ? 'url(#dbc-sc)' : FG}
            fillOpacity={c.kind === 'ph' ? 0.22 : 1}
            stroke={FG}
            strokeWidth={STROKE_SECONDARY}
            opacity={c.kind === 'ph' ? OPACITY.fg : OPACITY.dim}
          />
        ))}
        {/* pair ties under each first-class pair: constraint + its gauge orbit */}
        {Array.from({ length: a }).map((_, k) => {
          const xL = x0 + 2 * k * (cell + gap)
          return (
            <path
              key={k}
              d={`M ${xL + 3} ${yTop + cell + 7} H ${xL + 2 * cell + gap - 3}`}
              stroke={FG}
              strokeWidth={STROKE_SECONDARY}
              opacity={OPACITY.dim}
              fill="none"
            />
          )
        })}
        {regionLabel(0, 2 * a, 'first class: constraint + gauge orbit')}
        {regionLabel(2 * a, b, 'second class')}
        {regionLabel(2 * a + b, phys, 'physical')}
        <Label x={W / 2} y={H - 22} size={FONT_SMALL} anchor="middle" opacity={OPACITY.dim}>
          {`${total} dimensions = ${2 * a} + ${b} + ${phys}`}
        </Label>
      </Canvas>
      <DbcReadout
        items={[
          String.raw`2N_{\rm phys}=2N-2A-B=${2 * n}-${2 * a}-${b}=${phys}`,
          String.raw`N_{\rm phys}=${phys / 2}`
        ]}
      />
      <Slider
        label={'$N$'}
        value={n}
        min={1}
        max={6}
        step={1}
        onChange={setNc}
        format={v => v.toFixed(0)}
      />
      <Slider
        label={'$A$'}
        value={a}
        min={0}
        max={6}
        step={1}
        onChange={setAc}
        format={v => v.toFixed(0)}
      />
      <Slider
        label={'$B$'}
        value={b}
        min={0}
        max={8}
        step={2}
        onChange={setBc}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}
