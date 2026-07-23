// Part III inline topic-page viz - Hannay angle (?page=han).
// BUILT to house standard in this workbench: upstream sources for these three
// were NOT in the part-iii-showcase upload (audit § BLOCKER, resolved by rebuild).
// Conventions: natural units; isotropy on every panel that shows real geometry;
// equations displayed match the code that runs; ICs shown; prm suppresses
// self-start only (PLAY overrides, via useSimulation).

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
  Slider,
  Tex
} from './primitives'
import { useSimulation } from './physics'
import { FONT_LABEL, FONT_SMALL, FONT_TINY, STROKE_PRIMARY, STROKE_SECONDARY } from './scale-tokens'

const TAU = 2 * Math.PI

// Shared readout strip (house pattern: KatexInline row under the plot)
function HanReadout({ items }) {
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

// Orthographic sphere projection, house idiom (03.4.2): yaw from slider,
// fixed pitch; returns [screenX, screenY, depth]. Polar axis = +y.
function makeProj(view, pitch = 0.42) {
  const cy = Math.cos(view)
  const sy = Math.sin(view)
  const cp = Math.cos(pitch)
  const sp = Math.sin(pitch)
  return ([vx, vy, vz]) => {
    const x1 = vx * cy - vz * sy
    const z1 = vx * sy + vz * cy
    return [x1, vy * cp - z1 * sp, vy * sp + z1 * cp]
  }
}

// Split a 3D polyline into front (depth>0) / back screen segments
function splitDepth(proj, pts3) {
  const front = []
  const back = []
  let curF = []
  let curB = []
  pts3.forEach(p => {
    const [x, y, d] = proj(p)
    if (d > 0) {
      if (curB.length) {
        back.push(curB)
        curB = []
      }
      curF.push([x, y])
    } else {
      if (curF.length) {
        front.push(curF)
        curF = []
      }
      curB.push([x, y])
    }
  })
  if (curF.length) front.push(curF)
  if (curB.length) back.push(curB)
  return { front, back }
}

// Unit-sphere wireframe (house 03.4.2 layout: 5 latitudes, 6 longitudes)
function sphereWire() {
  const lines = []
  for (let m = -0.75; m <= 0.75; m += 0.375) {
    const rad = Math.sqrt(1 - m * m)
    const c = []
    for (let a = 0; a <= 64; a++) {
      const t = (a / 64) * TAU
      c.push([rad * Math.cos(t), m, rad * Math.sin(t)])
    }
    lines.push(c)
  }
  for (let k = 0; k < 6; k++) {
    const az = (k / 6) * Math.PI
    const c = []
    for (let a = 0; a <= 64; a++) {
      const th = (a / 64) * TAU
      c.push([Math.sin(th) * Math.cos(az), Math.cos(th), Math.sin(th) * Math.sin(az)])
    }
    lines.push(c)
  }
  return lines
}

// Latitude circle at height y = cosθ (colatitude θ)
function latCircle(theta, n = 96) {
  const r = Math.sin(theta)
  const y = Math.cos(theta)
  const c = []
  for (let a = 0; a <= n; a++) {
    const t = (a / n) * TAU
    c.push([r * Math.cos(t), y, r * Math.sin(t)])
  }
  return c
}

function DepthLines({ proj, pts3, frontOp, backOp, dash, strokeWidth = STROKE_SECONDARY }) {
  const { front, back } = splitDepth(proj, pts3)
  return (
    <g>
      {back.map((seg, i) =>
        seg.length > 1 ? (
          <Polyline
            key={'b' + i}
            points={seg}
            opacity={backOp}
            dash="2 4"
            strokeWidth={strokeWidth}
          />
        ) : null
      )}
      {front.map((seg, i) =>
        seg.length > 1 ? (
          <Polyline
            key={'f' + i}
            points={seg}
            opacity={frontOp}
            dash={dash}
            strokeWidth={strokeWidth}
          />
        ) : null
      )}
    </g>
  )
}

// SolidAngleHolonomy
// Parallel transport around the latitude circle at colatitude θ, computed
// exactly: in the local (east, north) frame the transported vector's angle obeys
// ψ(φ) = ψ₀ − φ cos θ, so one circuit rotates it by −2π cos θ ≡ Ω = 2π(1−cos θ)
// (mod 2π) - the solid angle of the enclosed polar cap. φ runs 0 → 2π and holds.
export function SolidAngleHolonomy() {
  const RATE = 0.63 // dφ/dt while playing
  const [theta, setTheta] = React.useState(0.9)
  const [view, setView] = React.useState(0.7)
  const [state, , { playing, setPlaying, reset }] = useSimulation(
    { u: 0 },
    (s, dt) => ({ u: Math.min(s.u + dt, TAU / RATE) }),
    { running: true }
  )
  const phi = Math.min(state.u * RATE, TAU)
  const closed = phi >= TAU - 1e-9

  const proj = makeProj(view)
  const wire = React.useMemo(() => sphereWire(), [])

  // point on the loop, local frame, transported vector (ψ₀ = π/2: starts north)
  const P = (th, ph) => [Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)]
  const eE = ph => [-Math.sin(ph), 0, Math.cos(ph)]
  const eN = (th, ph) => [-Math.cos(th) * Math.cos(ph), Math.sin(th), -Math.cos(th) * Math.sin(ph)]
  const vecAt = ph => {
    const psi = Math.PI / 2 - ph * Math.cos(theta)
    const E = eE(ph)
    const N = eN(theta, ph)
    return [0, 1, 2].map(i => Math.cos(psi) * E[i] + Math.sin(psi) * N[i])
  }

  const VL = 0.42 // drawn vector length
  const p0 = P(theta, 0)
  const v0 = vecAt(0)
  const pc = P(theta, phi)
  const vc = vecAt(phi)
  const sP0 = proj(p0)
  const sPc = proj(pc)
  const tip = i => pc[i] + VL * vc[i]
  const tip0 = i => p0[i] + VL * v0[i]

  const omega = TAU * (1 - Math.cos(theta))
  const dpsi = -phi * Math.cos(theta)

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-1.62, 1.62]} yRange={[-1.62, 1.62]} width={480} height={480}>
        {wire.map((c, i) => (
          <DepthLines
            key={i}
            proj={proj}
            pts3={c}
            frontOp={OPACITY.hair * 1.5}
            backOp={OPACITY.hair * 0.6}
          />
        ))}
        {/* polar cap interior (rings) + pole */}
        {[1, 2, 3].map(k => (
          <DepthLines
            key={'cap' + k}
            proj={proj}
            pts3={latCircle((theta * k) / 4)}
            frontOp={OPACITY.faint}
            backOp={OPACITY.hair * 0.6}
          />
        ))}
        <Dot x={proj([0, 1, 0])[0]} y={proj([0, 1, 0])[1]} r={2} opacity={OPACITY.dim} />
        <Tex
          at={[proj([0, 1, 0])[0] + 0.08, proj([0, 1, 0])[1] + 0.13]}
          tex={String.raw`\Omega`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        {/* the transport loop */}
        <DepthLines
          proj={proj}
          pts3={latCircle(theta)}
          frontOp={OPACITY.accent}
          backOp={OPACITY.faint}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* initial vector (ghost) */}
        <Arrow
          from={[sP0[0], sP0[1]]}
          to={[proj([tip0(0), tip0(1), tip0(2)])[0], proj([tip0(0), tip0(1), tip0(2)])[1]]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Dot x={sP0[0]} y={sP0[1]} r={3} fill={false} opacity={OPACITY.dim} />
        {/* transported vector */}
        <Arrow
          from={[sPc[0], sPc[1]]}
          to={[proj([tip(0), tip(1), tip(2)])[0], proj([tip(0), tip(1), tip(2)])[1]]}
          opacity={sPc[2] > 0 ? OPACITY.fg : OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={sPc[0]} y={sPc[1]} r={4} opacity={sPc[2] > 0 ? OPACITY.fg : OPACITY.dim} />
        <Tex
          at={[-1.56, 1.5]}
          tex={String.raw`\psi(\varphi)=\psi_0-\varphi\cos\theta`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-1.56, -1.42]}
          tex={String.raw`\psi_0=\tfrac{\pi}{2}\ \text{(north)},\ \varphi_0=0`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        {closed && (
          <Tex
            at={[1.56, 1.5]}
            tex={String.raw`\text{loop closed: rotated by }\Omega`}
            size={FONT_LABEL}
            opacity={OPACITY.accent}
            anchor="end"
          />
        )}
      </Plot>
      <HanReadout
        items={[
          String.raw`\varphi=${phi.toFixed(2)}`,
          String.raw`\psi-\psi_0=-\varphi\cos\theta=${dpsi.toFixed(2)}`,
          String.raw`\Omega=2\pi(1-\cos\theta)=${omega.toFixed(2)}`
        ]}
      />
      <Slider
        label={'$\\theta$'}
        value={theta}
        min={0.25}
        max={1.5}
        step={0.01}
        onChange={setTheta}
      />
      <Slider label="view" value={view} min={0} max={1.5} step={0.01} onChange={setView} />
      <PlayPause playing={playing} onToggle={() => setPlaying(p => !p)} onReset={reset} />
    </div>
  )
}

// DynamicalVsGeometricPhase
// The averaged angle equation from this section, φ̇ = ω₀ + c·Θ̇, integrated in
// closed form over one uniform parameter loop Θ = 2πt/T. The dynamical part
// ω₀T scales with the cycle duration T (slider); the geometric part c∮dΘ = 2πc
// is the T-independent gap between the two lines.
export function DynamicalVsGeometricPhase() {
  const W0 = 1
  const C = 0.35
  const [T, setT] = React.useState(10)
  const [state, , { playing, setPlaying, reset }] = useSimulation(
    { u: 0 },
    (s, dt) => ({ u: s.u + dt }),
    { running: true }
  )
  const s = (state.u / 8) % 1 // display fraction of the loop
  const theta = TAU * s
  const geom = TAU * C
  const maxY = W0 * T + geom
  const yPad = maxY * 0.1

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 220px', minWidth: 200 }}>
          <Plot xRange={[-1.45, 1.45]} yRange={[-1.45, 1.45]} width={280} height={280}>
            <Parametric
              xy={t => [Math.cos(t), Math.sin(t)]}
              t={[0, TAU]}
              samples={96}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_PRIMARY}
            />
            <Dot x={1} y={0} r={4} fill={false} opacity={OPACITY.dim} />
            <Dot x={Math.cos(theta)} y={Math.sin(theta)} r={4.5} opacity={OPACITY.fg} />
            <Arrow
              from={[Math.cos(theta), Math.sin(theta)]}
              to={[
                Math.cos(theta) - 0.34 * Math.sin(theta),
                Math.sin(theta) + 0.34 * Math.cos(theta)
              ]}
              opacity={OPACITY.fg}
            />
            <Tex
              at={[-1.38, 1.32]}
              tex={String.raw`\text{parameter loop }C`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[-1.38, -1.3]}
              tex={String.raw`\Theta=2\pi t/T`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[1.08, -0.18]}
              tex={String.raw`\Theta_0`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
          </Plot>
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 280 }}>
          <Plot xRange={[-0.07, 1.24]} yRange={[-yPad, maxY + yPad]} width={400} height={280}>
            {/* axes */}
            <Polyline
              points={[
                [0, 0],
                [1.06, 0]
              ]}
              opacity={OPACITY.faint}
            />
            <Polyline
              points={[
                [0, 0],
                [0, maxY]
              ]}
              opacity={OPACITY.faint}
            />
            {/* dynamical line, total line */}
            <Parametric
              xy={x => [x, W0 * T * x]}
              t={[0, 1]}
              samples={8}
              opacity={OPACITY.dim}
              dash="4 4"
            />
            <Parametric
              xy={x => [x, W0 * T * x + C * TAU * x]}
              t={[0, 1]}
              samples={8}
              opacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            {/* endpoint gap = geometric phase */}
            <Polyline
              points={[
                [1.03, W0 * T],
                [1.03, W0 * T + geom]
              ]}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
            />
            <Polyline
              points={[
                [1.0, W0 * T],
                [1.06, W0 * T]
              ]}
              opacity={OPACITY.accent}
            />
            <Polyline
              points={[
                [1.0, W0 * T + geom],
                [1.06, W0 * T + geom]
              ]}
              opacity={OPACITY.accent}
            />
            <Tex
              at={[1.08, W0 * T + geom * 0.5]}
              tex={String.raw`\Delta\varphi_{\rm geom}`}
              size={FONT_SMALL}
              opacity={OPACITY.accent}
            />
            {/* progress dot riding the total curve */}
            <Dot x={s} y={(W0 * T + C * TAU) * s} r={4} opacity={OPACITY.fg} />
            <Tex
              at={[0.04, maxY * 0.97]}
              tex={String.raw`\dot\varphi=\omega_0+c\,\dot\Theta`}
              size={FONT_LABEL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[0.62, W0 * T * 0.62]}
              dy={16}
              tex={String.raw`\omega_0 t`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[0.38, (W0 * T + C * TAU) * 0.38]}
              dy={-12}
              tex={String.raw`\varphi`}
              size={FONT_SMALL}
              opacity={OPACITY.fg}
            />
            <Tex
              at={[1.02, 0]}
              dy={16}
              tex={String.raw`t/T`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
              anchor="end"
            />
          </Plot>
        </div>
      </div>
      <HanReadout
        items={[
          String.raw`\omega_0=1,\ c=0.35,\ \varphi_0=0`,
          String.raw`\Delta\varphi_{\rm dyn}=\omega_0 T=${(W0 * T).toFixed(1)}`,
          String.raw`\Delta\varphi_{\rm geom}=2\pi c=${geom.toFixed(2)}\ \text{(independent of }T)`
        ]}
      />
      <Slider
        label={'$T$'}
        value={T}
        min={6}
        max={20}
        step={1}
        onChange={setT}
        format={v => v.toFixed(0)}
      />
      <PlayPause playing={playing} onToggle={() => setPlaying(p => !p)} onReset={reset} />
    </div>
  )
}

// FoucaultPrecession
// Left: the parameter loop - local "up" rides the latitude circle as the Earth
// turns. Right: plan view of the pendulum; the swing plane precesses by exactly
// ψ(t) = −2π sin λ per day (the Hannay angle of the cap), drawn live with a fan
// of past orientations every 1/12 day. The fast swing is decorative pacing; the
// precession angle is the physics and follows the displayed formula exactly.
export function FoucaultPrecession() {
  const T_DAY = 16 // seconds of wall time per day
  const SWING_T = 1.6 // seconds per bob swing (display pacing)
  const [lam, setLam] = React.useState(49)
  const [state, , { playing, setPlaying, reset }] = useSimulation(
    { u: 0 },
    (s, dt) => ({ u: s.u + dt }),
    { running: true }
  )
  const u = state.u
  const d = u / T_DAY // days elapsed
  const lr = (lam * Math.PI) / 180
  const psi = -TAU * Math.sin(lr) * d
  const proj = makeProj(0.7)
  const wire = React.useMemo(() => sphereWire(), [])

  // pendulum site on the globe: latitude λ, longitude advancing 2π per day
  const colat = Math.PI / 2 - lr
  const phiE = TAU * d
  const site = [Math.sin(colat) * Math.cos(phiE), Math.cos(colat), Math.sin(colat) * Math.sin(phiE)]
  const sSite = proj(site)

  // fan of past swing-plane orientations, one per 1/12 day, last two days
  const K = 12
  const nGhost = Math.floor(d * K)
  const ghosts = []
  for (let j = Math.max(0, nGhost - 2 * K); j < nGhost; j++) {
    ghosts.push({ a: -TAU * Math.sin(lr) * (j / K), age: nGhost - j })
  }

  const bobS = 0.85 * Math.cos((TAU * u) / SWING_T)

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 220px', minWidth: 200 }}>
          <Plot xRange={[-1.45, 1.45]} yRange={[-1.45, 1.45]} width={300} height={300}>
            {wire.map((c, i) => (
              <DepthLines
                key={i}
                proj={proj}
                pts3={c}
                frontOp={OPACITY.hair * 1.5}
                backOp={OPACITY.hair * 0.6}
              />
            ))}
            <DepthLines
              proj={proj}
              pts3={latCircle(colat)}
              frontOp={OPACITY.accent}
              backOp={OPACITY.faint}
              strokeWidth={STROKE_PRIMARY}
            />
            <Dot
              x={sSite[0]}
              y={sSite[1]}
              r={4}
              opacity={sSite[2] > 0 ? OPACITY.fg : OPACITY.dim}
            />
            <Dot x={proj([0, 1, 0])[0]} y={proj([0, 1, 0])[1]} r={2} opacity={OPACITY.dim} />
            <Tex
              at={[proj([0, 1, 0])[0] + 0.08, proj([0, 1, 0])[1] + 0.12]}
              tex={String.raw`N`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[-1.38, -1.3]}
              tex={String.raw`\text{loop of local "up", once per day}`}
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
          </Plot>
        </div>
        <div style={{ flex: '1 1 240px', minWidth: 220 }}>
          <Plot xRange={[-1.3, 1.3]} yRange={[-1.3, 1.3]} width={300} height={300}>
            <Parametric
              xy={t => [Math.cos(t), Math.sin(t)]}
              t={[0, TAU]}
              samples={96}
              opacity={OPACITY.faint}
            />
            {ghosts.map((g, i) => (
              <Polyline
                key={i}
                points={[
                  [-Math.cos(g.a), -Math.sin(g.a)],
                  [Math.cos(g.a), Math.sin(g.a)]
                ]}
                opacity={OPACITY.hair * (1 - g.age / (2 * K + 2)) * 1.6}
              />
            ))}
            <Polyline
              points={[
                [-Math.cos(psi), -Math.sin(psi)],
                [Math.cos(psi), Math.sin(psi)]
              ]}
              opacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <Dot x={bobS * Math.cos(psi)} y={bobS * Math.sin(psi)} r={4.5} opacity={OPACITY.fg} />
            <Tex
              at={[-1.24, 1.18]}
              tex={String.raw`\psi(t)=-2\pi\sin\lambda\cdot t\quad(t\ \text{in days})`}
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[-1.24, -1.18]}
              tex={String.raw`\text{swing pace decorative; }\psi\ \text{exact}`}
              size={FONT_TINY}
              opacity={OPACITY.hair * 4}
            />
          </Plot>
        </div>
      </div>
      <HanReadout
        items={[
          String.raw`\lambda=${lam.toFixed(0)}\degree`,
          String.raw`\Delta\psi/\text{day}=-2\pi\sin\lambda=${(-TAU * Math.sin(lr)).toFixed(2)}=${(-360 * Math.sin(lr)).toFixed(0)}\degree`,
          String.raw`t=${d.toFixed(2)}\ \text{days}`,
          String.raw`\psi_0=0`
        ]}
      />
      <Slider
        label={'$\\lambda$'}
        value={lam}
        min={0}
        max={90}
        step={1}
        onChange={setLam}
        format={v => v.toFixed(0) + '°'}
      />
      <PlayPause playing={playing} onToggle={() => setPlaying(p => !p)} onReset={reset} />
    </div>
  )
}
