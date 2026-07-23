// Part III inline topic-page viz - Liouville & Poincaré recurrence (?page=lpr).
// BUILT to house standard in this workbench: the upstream sources for these three
// components were NOT in the part-iii-showcase upload (audit § BLOCKER, resolved
// by rebuild). Conventions: natural units, isotropic frames where real geometry
// appears, equations shown match the code that runs, ICs shown, prm = suppress
// self-start only (PLAY overrides, via useSimulation/useAnimationTime).

import React from 'react'
import {
  Arrow,
  Dot,
  KatexInline,
  OPACITY,
  Parametric,
  PlayPause,
  Plot,
  Polyline,
  Tex,
  DragHandle,
  FG
} from './primitives'
import { useSimulation } from './physics'
import { FONT_LABEL, FONT_SMALL, LS_TITLE, STROKE_PRIMARY, STROKE_SECONDARY } from './scale-tokens'

export const PHI_INV = (Math.sqrt(5) - 1) / 2 // 1/φ = 0.6180339887…

// Shared readout strip (house pattern: KatexInline row under the plot)
function LprReadout({ items }) {
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

// Shared mode-button row (house pattern from 03.8.3)
function LprModeButtons({ value, onChange, options }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        marginTop: 12,
        flexWrap: 'wrap',
        fontSize: FONT_SMALL,
        letterSpacing: LS_TITLE,
        textTransform: 'uppercase',
        color: FG
      }}
    >
      {options.map(o => (
        <button
          key={o.key}
          onClick={() => onChange(o.key)}
          style={{
            background: 'transparent',
            border: `1px solid ${FG}`,
            color: FG,
            padding: '5px 14px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            letterSpacing: 'inherit',
            textTransform: 'inherit',
            opacity: value === o.key ? 1 : 0.4
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

// HamiltonianVectorField
// The SHO Hamiltonian vector field (q̇, ṗ) = (p, −q) drawn honestly: every arrow
// is the actual phase velocity at its base point, scaled by one fixed display
// factor K. Orbits are the circles q²+p² = 2E; a draggable probe shows tangency.
// div f = ∂q(p) + ∂p(−q) = 0 - the field neither converges nor diverges anywhere.
export function HamiltonianVectorField() {
  const K = 0.18 // single display scale for ALL arrows (honest relative lengths)
  const [probe, setProbe] = React.useState([1.4, 1.4])
  const lattice = [-2.8, -2, -1.2, -0.4, 0.4, 1.2, 2, 2.8]
  const [pq, pp] = probe
  const pr = Math.hypot(pq, pp)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3.85, 3.85]} yRange={[-3.85, 3.85]} width={520} height={520}>
        {/* axes drawn light by hand so the field stays the figure */}
        <Polyline
          points={[
            [-3.3, 0],
            [3.3, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, -3.3],
            [0, 3.3]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* energy shells: the orbits the field is everywhere tangent to */}
        {[1, 2, 3].map(r => (
          <Parametric
            key={r}
            xy={t => [r * Math.cos(t), r * Math.sin(t)]}
            t={[0, 2 * Math.PI]}
            samples={96}
            opacity={OPACITY.faint}
            dash="2 4"
          />
        ))}
        {/* the vector field itself: f(q,p) = (p, −q) at each lattice point */}
        {lattice.map(q =>
          lattice.map(p => (
            <Arrow
              key={`${q},${p}`}
              from={[q, p]}
              to={[q + K * p, p - K * q]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
              head={5}
            />
          ))
        )}
        {/* orbit through the probe + the probe's own velocity arrow (same scale K) */}
        <Parametric
          xy={t => [pr * Math.cos(t), pr * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={128}
          opacity={OPACITY.accent}
          dash="5 4"
        />
        <Arrow
          from={[pq, pp]}
          to={[pq + K * pp, pp - K * pq]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <DragHandle
          x={pq}
          y={pp}
          onChange={(x, y) => setProbe([x, y])}
          constrain={(x, y) => [Math.max(-2.9, Math.min(2.9, x)), Math.max(-2.9, Math.min(2.9, y))]}
        />
        <Tex
          at={[-3.75, 3.6]}
          tex={String.raw`(\dot q,\dot p)=(p,\,-q)`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-3.75, -3.62]}
          tex={String.raw`\operatorname{div}\mathbf{f}=\partial_q p+\partial_p(-q)=0\ \text{everywhere}`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex at={[3.7, 0.24]} tex="q" size={FONT_LABEL} opacity={OPACITY.dim} anchor="end" />
        <Tex at={[0.18, 3.6]} tex="p" size={FONT_LABEL} opacity={OPACITY.dim} />
      </Plot>
      <LprReadout
        items={[
          String.raw`(q,p)=(${pq.toFixed(2)},\ ${pp.toFixed(2)})`,
          String.raw`(\dot q,\dot p)=(${pp.toFixed(2)},\ ${(-pq).toFixed(2)})`,
          String.raw`|\mathbf{f}|=\sqrt{q^2+p^2}=${pr.toFixed(2)}`
        ]}
      />
    </div>
  )
}

// PoincareRotation
// The circle map θ_{n+1} = θ_n + 2πα, the simplest recurrence laboratory.
// Rational α = 3/7: the orbit is 7 points and θ_7 = θ_0 exactly (period-7 star).
// Irrational α = 1/φ: the orbit never closes, but the running minimum distance
// back to θ_0 keeps shrinking - recurrence "arbitrarily close", computed live.
function RotationSim({ alpha, rational }) {
  const N_CAP = 200
  const U_CAP = 8 + 0.18 * (N_CAP - 10) + 0.5
  const initState = { u: 0 }
  const step = (s, dt) => ({ u: rational ? s.u + dt : Math.min(U_CAP, s.u + dt) })
  const [state, , { playing, setPlaying, reset }] = useSimulation(initState, step, {
    running: true
  })
  const u = state.u
  // pacing: first 10 iterates slow enough to follow, then fast accumulation
  const n = u < 8 ? Math.floor(u / 0.8) : 10 + Math.floor((u - 8) / 0.18)

  const mDots = rational ? Math.min(n, 7) : Math.min(n, N_CAP)
  const pts = React.useMemo(() => {
    const arr = []
    for (let k = 0; k <= mDots; k++) {
      const th = 2 * Math.PI * alpha * k
      arr.push([Math.cos(th), Math.sin(th)])
    }
    return arr
  }, [mDots, alpha])

  // closest return to θ0 so far (irrational mode; rational returns exactly at 7)
  const best = React.useMemo(() => {
    if (rational || n < 1) return null
    let bd = Infinity
    let bk = 0
    for (let k = 1; k <= Math.min(n, N_CAP); k++) {
      const f = (k * alpha) % 1
      const d = 2 * Math.PI * Math.min(f, 1 - f)
      if (d < bd - 1e-12) {
        bd = d
        bk = k
      }
    }
    return { d: bd, k: bk }
  }, [n, alpha, rational])

  const thCur = 2 * Math.PI * alpha * n
  const cur = [Math.cos(thCur), Math.sin(thCur)]

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.45, 1.45]} yRange={[-1.45, 1.45]} width={480} height={480}>
        <Parametric
          xy={t => [Math.cos(t), Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={128}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* rational mode: chords in iteration order draw the period-7 star */}
        {rational && pts.length > 1 && (
          <Polyline points={pts} opacity={OPACITY.faint * 2} strokeWidth={STROKE_SECONDARY} />
        )}
        {/* visited points */}
        {pts.map(([x, y], k) =>
          k === 0 ? null : <Dot key={k} x={x} y={y} r={2.5} opacity={OPACITY.dim} />
        )}
        {/* start point: open ring */}
        <Dot x={1} y={0} r={6} fill={false} opacity={OPACITY.accent} />
        <Tex
          at={[1.1, -0.2]}
          tex={String.raw`\theta_0`}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        {/* current iterate */}
        <Dot x={cur[0]} y={cur[1]} r={5} opacity={OPACITY.fg} />
        <Tex
          at={[-1.4, 1.32]}
          tex={String.raw`\theta_{n+1}=\theta_n+2\pi\alpha`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-1.4, 1.04]}
          tex={
            rational
              ? String.raw`\alpha=\tfrac{3}{7}\ \text{(rational)}`
              : String.raw`\alpha=1/\varphi=0.61803\ldots\ \text{(irrational)}`
          }
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-1.4, -1.32]}
          tex={String.raw`\theta_0=0`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <LprReadout
        items={
          rational
            ? [
                String.raw`n=${n}`,
                n >= 7
                  ? String.raw`\theta_7=\theta_0\ \text{(returns exactly: 7 points, then repeats)}`
                  : String.raw`${7 - n}\ \text{steps to exact return}`
              ]
            : [
                String.raw`n=${Math.min(n, N_CAP)}`,
                best
                  ? String.raw`\min_{k\le n}|\theta_k-\theta_0|=${best.d.toFixed(4)}\ \text{at } k=${best.k}`
                  : String.raw`\text{stepping}\ldots`
              ]
        }
      />
      <PlayPause playing={playing} onToggle={() => setPlaying(p => !p)} onReset={reset} />
    </div>
  )
}

export function PoincareRotation() {
  const [mode, setMode] = React.useState('rational')
  return (
    <div style={{ width: '100%' }}>
      <RotationSim
        key={mode}
        alpha={mode === 'rational' ? 3 / 7 : PHI_INV}
        rational={mode === 'rational'}
      />
      <LprModeButtons
        value={mode}
        onChange={setMode}
        options={[
          { key: 'rational', label: '▸ rational α = 3/7' },
          { key: 'golden', label: '▸ irrational α = 1/φ' }
        ]}
      />
    </div>
  )
}

// TorusWinding
// Linear flow θ_i = ω_i t (mod 2π) on T², drawn as the fundamental square with
// identified edges (single chevrons: left↔right, double: bottom↔top).
// ω₂/ω₁ = 2/3: the orbit closes after 3 wraps of θ₁ and 2 of θ₂ (t = 6π).
// ω₂/ω₁ = 1/φ: it never closes and fills the square densely.
function WindingSim({ mode }) {
  const TWO = 2 * Math.PI
  const w2 = mode === 'rational' ? 2 / 3 : PHI_INV
  const Tmax = mode === 'rational' ? 6 * Math.PI : 60 * Math.PI
  const DT = 0.02

  const { segs, starts } = React.useMemo(() => {
    const out = []
    let cur = [[0, 0]]
    const N = Math.floor(Tmax / DT)
    for (let i = 1; i <= N; i++) {
      const t = i * DT
      const a = t % TWO
      const b = (w2 * t) % TWO
      const prev = cur[cur.length - 1]
      if (Math.abs(a - prev[0]) > Math.PI || Math.abs(b - prev[1]) > Math.PI) {
        out.push(cur)
        cur = []
      }
      cur.push([a, b])
    }
    out.push(cur)
    const st = []
    let acc = 0
    for (const s of out) {
      st.push(acc)
      acc += s.length
    }
    return { segs: out, starts: st }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  const initState = { u: 0 }
  const step = (s, dt) => ({ u: s.u + dt })
  const [state, , { playing, setPlaying, reset }] = useSimulation(initState, step, {
    running: true
  })
  const u = state.u
  // pacing: readable first wraps, then accelerated fill
  const t = Math.min(u < 10 ? 2 * u : 20 + (u - 10) * 10, Tmax)
  const idx = Math.min(
    Math.floor(t / DT),
    starts[starts.length - 1] + segs[segs.length - 1].length - 1
  )

  // segment containing idx; earlier segments draw whole (stable refs → memo hit)
  let k = 0
  while (k + 1 < starts.length && starts[k + 1] <= idx) k++
  const done = segs.slice(0, k)
  const partial = segs[k].slice(0, idx - starts[k] + 1)

  const closed = mode === 'rational' && t >= 6 * Math.PI - 1e-6
  const a = t % TWO
  const b = (w2 * t) % TWO
  const trailOp = mode === 'rational' ? OPACITY.dim : OPACITY.faint * 2

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.9, 7.18]} yRange={[-0.9, 7.18]} width={520} height={520}>
        {/* fundamental square */}
        <Polyline
          points={[
            [0, 0],
            [TWO, 0],
            [TWO, TWO],
            [0, TWO],
            [0, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* edge identifications: single chevron left/right (↑), double bottom/top (→) */}
        <Arrow from={[0, Math.PI - 0.3]} to={[0, Math.PI + 0.3]} opacity={OPACITY.dim} head={5} />
        <Arrow
          from={[TWO, Math.PI - 0.3]}
          to={[TWO, Math.PI + 0.3]}
          opacity={OPACITY.dim}
          head={5}
        />
        {[0, TWO].map(y => (
          <React.Fragment key={y}>
            <Arrow
              from={[Math.PI - 0.65, y]}
              to={[Math.PI - 0.05, y]}
              opacity={OPACITY.dim}
              head={5}
            />
            <Arrow
              from={[Math.PI + 0.05, y]}
              to={[Math.PI + 0.65, y]}
              opacity={OPACITY.dim}
              head={5}
            />
          </React.Fragment>
        ))}
        {/* completed wraps (memo-stable), then the live segment */}
        {done.map((seg, i) => (
          <Polyline
            key={i}
            points={seg}
            opacity={closed ? OPACITY.accent : trailOp}
            strokeWidth={closed ? STROKE_PRIMARY : STROKE_SECONDARY}
          />
        ))}
        {partial.length > 1 && (
          <Polyline
            points={partial}
            opacity={closed ? OPACITY.accent : OPACITY.fg * 0.8}
            strokeWidth={closed ? STROKE_PRIMARY : STROKE_SECONDARY}
          />
        )}
        {/* start + current */}
        <Dot x={0} y={0} r={5} fill={false} opacity={OPACITY.accent} />
        <Dot x={a} y={b} r={4.5} opacity={OPACITY.fg} />
        {/* corner ticks + axis labels */}
        <Tex at={[-0.18, -0.4]} tex="0" size={FONT_SMALL} opacity={OPACITY.dim} anchor="end" />
        <Tex
          at={[TWO + 0.14, -0.4]}
          tex={String.raw`2\pi`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.18, TWO - 0.05]}
          tex={String.raw`2\pi`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
          anchor="end"
        />
        <Tex
          at={[TWO - 0.1, -0.52]}
          tex={String.raw`\theta_1`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
          anchor="end"
        />
        <Tex at={[-0.78, 6.0]} tex={String.raw`\theta_2`} size={FONT_LABEL} opacity={OPACITY.dim} />
        {/* equation + status */}
        <Tex
          at={[0, TWO + 0.55]}
          tex={
            mode === 'rational'
              ? String.raw`\theta_i=\omega_i t\ (\mathrm{mod}\ 2\pi),\quad \omega_2/\omega_1=\tfrac{2}{3}`
              : String.raw`\theta_i=\omega_i t\ (\mathrm{mod}\ 2\pi),\quad \omega_2/\omega_1=1/\varphi`
          }
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        {closed && (
          <Tex
            at={[TWO, TWO + 0.55]}
            tex={String.raw`\text{closed: }3\times\theta_1,\ 2\times\theta_2`}
            size={FONT_SMALL}
            opacity={OPACITY.accent}
            anchor="end"
          />
        )}
        {mode === 'golden' && t > 10 * Math.PI && (
          <Tex
            at={[TWO, TWO + 0.55]}
            tex={String.raw`\text{never closes: dense}`}
            size={FONT_SMALL}
            opacity={OPACITY.accent}
            anchor="end"
          />
        )}
      </Plot>
      <LprReadout
        items={[
          String.raw`(\theta_1,\theta_2)(0)=(0,0)`,
          String.raw`\omega_1=1,\ \omega_2=${mode === 'rational' ? String.raw`2/3` : w2.toFixed(5)}`,
          String.raw`t=${t.toFixed(1)}`,
          String.raw`n_1=${Math.floor(t / TWO)},\ n_2=${Math.floor((w2 * t) / TWO)}`
        ]}
      />
      <PlayPause playing={playing} onToggle={() => setPlaying(p => !p)} onReset={reset} />
    </div>
  )
}

export function TorusWinding() {
  const [mode, setMode] = React.useState('rational')
  return (
    <div style={{ width: '100%' }}>
      <WindingSim key={mode} mode={mode} />
      <LprModeButtons
        value={mode}
        onChange={setMode}
        options={[
          { key: 'rational', label: '▸ rational slope 2/3' },
          { key: 'golden', label: '▸ irrational slope 1/φ' }
        ]}
      />
    </div>
  )
}
