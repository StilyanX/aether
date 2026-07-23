import React, { lazy, Suspense, useMemo, useRef, useState } from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { VizFigure } from '../../../../../components/viz-figure'
import {
  Plot,
  Axes,
  Arrow,
  Polyline,
  Dot,
  CircleSh,
  Parametric,
  Tex,
  Label,
  Slider,
  DragHandle,
  PlayPause,
  VizCaption,
  OPACITY,
  useAnimationTime
} from '../../../../../components/viz/primitives'
import { useSimulation, rk4Step } from '../../../../../components/viz/physics'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  FONT_BODY,
  FONT_CONTROL,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TINY,
  FONT_VALUE
} from '../../../../../components/viz/scale-tokens'

// Inline viz · rebuilt 2026-05 to masterpiece fidelity.
//   • hand-rolled SVG primitives: 2D vector geometry, sims, schematics (×10)
//   • @react-three/fiber         : true 3D conical pendulum (×1)
// All viz wrap in <VizFigure> at the call-sites inside the sections array.

// 01.5.1 L = r × p geometry (interactive)
// Drag the particle (r) or the tip of p and watch one signed number L_z arrive
// three ways in lockstep: the cross product x p_y − y p_x, the lever arm
// r_perp · p, and twice the swept triangle area 2A. All three carry the SAME
// sign: negative = clockwise sweep. The axes use one scale (ux = uy) so the
// dropped perpendicular renders at a true 90°.
//
// Equal-scale axes: innerW 608 / x-span 9.6 = 63.33 px/u = innerH 304 / y-span 4.8
// (W 640, H 336, pad 16). Keep these locked together: changing one range or
// dimension without the other re-introduces axis skew and the right angle
// stops looking like a right angle.
export function Amr_AngMomGeom() {
  const [P, setP] = useState([2.6, 1.3])
  const [T, setT] = useState([5.2, 0.4])
  const p = [T[0] - P[0], T[1] - P[1]]
  const pmag = Math.hypot(p[0], p[1]) || 1e-6
  const u = [p[0] / pmag, p[1] / pmag]

  const Lz = P[0] * p[1] - P[1] * p[0]
  const sgn = Lz >= 0 ? 1 : -1
  const senseLabel = sgn >= 0 ? 'counter-clockwise' : 'clockwise'
  const lzStr = (Lz < 0 ? '-' : '+') + Math.abs(Lz).toFixed(2)

  const tFoot = -(P[0] * p[0] + P[1] * p[1]) / (pmag * pmag)
  const Q = [P[0] + tFoot * p[0], P[1] + tFoot * p[1]]

  const ext = 3.0
  const lineA = [P[0] - ext * u[0], P[1] - ext * u[1]]
  const lineB = [T[0] + ext * u[0], T[1] + ext * u[1]]

  const s = 0.18
  const dToP = (() => {
    const d = [P[0] - Q[0], P[1] - Q[1]]
    const l = Math.hypot(d[0], d[1]) || 1
    return [d[0] / l, d[1] / l]
  })()
  const nToO = (() => {
    const l = Math.hypot(Q[0], Q[1]) || 1
    return [-Q[0] / l, -Q[1] / l]
  })()
  const corner = [
    [Q[0] + s * dToP[0], Q[1] + s * dToP[1]],
    [Q[0] + s * dToP[0] + s * nToO[0], Q[1] + s * dToP[1] + s * nToO[1]],
    [Q[0] + s * nToO[0], Q[1] + s * nToO[1]]
  ]

  const aP = Math.atan2(P[1], P[0])
  const aT = Math.atan2(T[1], T[0])
  const dA = Math.atan2(Math.sin(aT - aP), Math.cos(aT - aP))
  const rr = 0.62
  const arc = Array.from({ length: 25 }, (_, i) => {
    const th = aP + dA * (i / 24)
    return [rr * Math.cos(th), rr * Math.sin(th)]
  })
  const arcHeadFrom = arc[22]
  const arcHeadTo = arc[24]

  const rMid = [P[0] / 2, P[1] / 2]
  const pMid = [(P[0] + T[0]) / 2, (P[1] + T[1]) / 2]

  const clampP = (x, y) => [Math.max(0.4, x), y]
  const clampT = (x, y) => {
    const dx = x - P[0],
      dy = y - P[1]
    const l = Math.hypot(dx, dy)
    if (l < 0.8) return [P[0] + (dx / (l || 1)) * 0.8, P[1] + (dy / (l || 1)) * 0.8]
    return [x, y]
  }

  return (
    <Plot xRange={[-2.4, 7.2]} yRange={[-2.4, 2.4]} width={640} height={336}>
      <Axes step={1} showGrid={false} />

      <Polyline points={[lineA, lineB]} opacity={OPACITY.faint} dash="3 5" />

      <Polyline points={arc} opacity={OPACITY.dim} strokeWidth={1} />
      <Arrow from={arcHeadFrom} to={arcHeadTo} opacity={OPACITY.dim} head={5} />

      <Arrow from={[0, 0]} to={P} opacity={OPACITY.dim} strokeWidth={1.5} />
      <Polyline points={[[0, 0], Q]} opacity={OPACITY.accent} strokeWidth={2} />
      <Polyline points={corner} opacity={OPACITY.accent} strokeWidth={1} />
      <Arrow from={P} to={T} opacity={OPACITY.fg} strokeWidth={2.5} head={9} />

      <Tex
        at={rMid}
        dx={-26}
        dy={2}
        tex={String.raw`\mathbf{r}`}
        size={FONT_CONTROL}
        opacity={OPACITY.dim}
      />
      <Tex at={pMid} dx={6} dy={-6} tex={String.raw`\mathbf{p}`} size={FONT_CONTROL} />
      <Tex
        at={Q}
        dx={10}
        dy={-4}
        tex={String.raw`r_\perp`}
        size={FONT_LABEL}
        opacity={OPACITY.accent}
      />
      <Tex
        at={[0, 0]}
        dx={-16}
        dy={16}
        tex={String.raw`O`}
        size={FONT_LABEL}
        opacity={OPACITY.dim}
      />

      <Tex
        at={[-2.3, 2.18]}
        tex={String.raw`L_z = (\mathbf{r}\times\mathbf{p})_z`}
        size={FONT_TEX}
      />
      <Tex at={[-2.3, -0.02]} tex={`L_z = ${lzStr}`} size={FONT_BODY} />
      <Tex
        at={[-2.3, -0.58]}
        tex={`\\text{${senseLabel}}`}
        size={FONT_SMALL}
        opacity={OPACITY.dim}
      />

      <DragHandle x={P[0]} y={P[1]} onChange={(x, y) => setP(clampP(x, y))} label="r" />
      <DragHandle x={T[0]} y={T[1]} onChange={(x, y) => setT(clampT(x, y))} label="p" />

      <Tex
        at={[-2.3, -2.0]}
        tex={String.raw`\text{drag } \mathbf{r} \text{ or the tip of } \mathbf{p}`}
        size={FONT_SMALL}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}

// 01.5.2 Sliding block, two origins
// The same block at the same velocity carries two different angular momenta.
// About A on the line of motion r ∥ v, so L_A = 0. About B a perpendicular
// distance ℓ off the line the lever arm survives, giving L_B = m v ℓ: and
// that number never changes as the block slides, though r_B and its angle
// both do. Drag B toward the line to watch L_B shrink to L_A. The shaded
// sliver is the area r_B sweeps each Δt (½ v ℓ Δt, equal in equal times).
export function Amr_SlidingBlock() {
  // Two off-line origins A and B at different perpendicular distances. The same
  // straight-line, force-free motion gives L = m v ℓ about each: different ℓ ⇒
  // different L, yet each L is CONSTANT in time because dL/dt = τ = r × F = 0
  // (no force). The swept-area triangles make the constancy literal: each origin
  // sweeps area at rate L/(2m), so its triangle has fixed area as the block slides.
  const [playing, setPlaying] = useState(true)
  const tBase = useRef(0)
  const tAnim = useAnimationTime(playing, 1)
  const t = playing ? tAnim + tBase.current : tBase.current
  const togglePlay = () => {
    if (playing) tBase.current = tAnim + tBase.current
    setPlaying(p => !p)
  }
  const resetAnim = () => {
    tBase.current = 0
    setPlaying(true)
  }
  const [Apt, setApt] = useState([0, 0.9]) // origin A, above the line
  const [Bpt, setBpt] = useState([0, -1.5]) // origin B, below the line
  const m = 1
  const v = 1.2 // speed (units/s)
  const ellA = Math.abs(Apt[1]) // perpendicular distance |A| to line of motion
  const ellB = Math.abs(Bpt[1]) // perpendicular distance |B| to line of motion
  const x = ((t * v) % 6) - 3 // block position, wraps left→right
  const block = [x, 0]
  const A = [0, Apt[1]]
  const B = [0, Bpt[1]]
  const LA = m * v * ellA // |L_A| = m v ℓ_A
  const LB = m * v * ellB // |L_B| = m v ℓ_B
  const dt = 0.7 // window for the swept triangle
  const xPrev = Math.max(-3, x - v * dt) // clamp trailing edge inside the frame
  const vTip = [x + 0.7, 0]
  // foot of each perpendicular sits at the origin's x (=0) on the line of motion
  const footA = [0, 0]
  const footB = [0, 0]
  const showSweep = x - xPrev > 0.05
  return (
    <div>
      <Plot xRange={[-3.8, 3.9]} yRange={[-2.6, 1.9]} width={620} height={376}>
        {/* line of motion */}
        <Polyline
          points={[
            [-3.8, 0],
            [3.9, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {/* areas swept over the last Δt about each origin: fixed area as block slides */}
        {showSweep && (
          <Polyline
            points={[A, [xPrev, 0], block]}
            closed
            fillOpacity={0.1}
            opacity={OPACITY.faint}
          />
        )}
        {showSweep && (
          <Polyline
            points={[B, [xPrev, 0], block]}
            closed
            fillOpacity={0.16}
            opacity={OPACITY.faint}
          />
        )}
        {/* r_A and r_B: swing in length and angle as the block slides */}
        <Polyline points={[A, block]} opacity={OPACITY.dim} dash="3 4" />
        <Polyline points={[B, block]} opacity={OPACITY.dim} dash="3 4" />
        {/* lever arms ℓ_A, ℓ_B: the fixed perpendicular distances */}
        <Polyline points={[A, footA]} opacity={OPACITY.fg} strokeWidth={1.6} />
        <Polyline points={[B, footB]} opacity={OPACITY.fg} strokeWidth={1.6} />
        {/* right-angle markers where each perpendicular meets the line */}
        <Polyline
          points={[
            [0.16, 0],
            [0.16, 0.16],
            [0, 0.16]
          ]}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [0.16, 0],
            [0.16, -0.16],
            [0, -0.16]
          ]}
          opacity={OPACITY.dim}
        />
        {/* velocity (accent): same for both origins, the motion is shared */}
        <Arrow from={block} to={vTip} opacity={OPACITY.accent} strokeWidth={1.4} />
        {/* the sliding block + the two origins */}
        <Dot x={block[0]} y={0} r={6} />
        <Dot x={A[0]} y={A[1]} r={3} />
        <Dot x={B[0]} y={B[1]} r={3} />
        {/* velocity label */}
        <Tex
          at={vTip}
          dx={5}
          dy={-6}
          tex={`\\mathbf{v}`}
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
        {/* lever-arm labels, staggered left/right of the vertical so neither hits r */}
        <Tex at={[0, ellA / 2]} dx={9} tex={`\\ell_A`} size={FONT_TEX} />
        <Tex at={[0, -ellB / 2]} dx={9} tex={`\\ell_B`} size={FONT_TEX} />
        {/* The shaded slivers are named by the caption, not by in-canvas labels:
            a label that rides the moving centroid inevitably crosses the
            sweeping r_A / r_B lines at some phase of the animation. */}
        {/* origin tags, offset away from the line so they never overlap the markers */}
        <Tex at={A} dx={-7} dy={-9} anchor="end" tex={`A`} size={FONT_TEX} opacity={OPACITY.dim} />
        <Tex at={B} dx={-7} dy={9} anchor="end" tex={`B`} size={FONT_TEX} opacity={OPACITY.dim} />
        {/* live readout: both L nonzero, both constant in time (dL/dt = 0) */}
        <Tex at={[-3.7, 1.75]} tex={`L_A = m\\,v\\,\\ell_A = ${LA.toFixed(2)}`} size={FONT_TEX} />
        <Tex at={[-3.7, 1.28]} tex={`L_B = m\\,v\\,\\ell_B = ${LB.toFixed(2)}`} size={FONT_TEX} />
        <Tex
          at={[-3.7, 0.83]}
          tex={`\\tfrac{dL}{dt}=\\tau = r\\times F = 0`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        {/* draggable origins: vertical only, each sets its own lever arm */}
        <DragHandle
          x={A[0]}
          y={A[1]}
          label="A"
          onChange={(nx, ny) => setApt([0, ny])}
          constrain={(nx, ny) => [0, Math.max(0, Math.min(1.7, ny))]}
        />
        <DragHandle
          x={B[0]}
          y={B[1]}
          label="B"
          onChange={(nx, ny) => setBpt([0, ny])}
          constrain={(nx, ny) => [0, Math.max(-2.3, Math.min(-0.18, ny))]}
        />
      </Plot>
      <VizCaption>
        shaded: area swept about each origin in the last Δt, constant as the block slides, dA/dt =
        L/2m
      </VizCaption>
      <PlayPause playing={playing} onToggle={togglePlay} onReset={resetAnim} />
    </div>
  )
}

// Conical-pendulum 3D scene lives in components/viz/scenes-3d so three.js
// loads on demand (dynamic import) instead of in the eager content-physics
// chunk. Self-wrapping Suspense keeps the showcase (INLINE_NS['amr']) and the
// lesson call-site working through this same export.
const Amr_ConicalPendulumInner = lazy(
  () => import('../../../../../components/viz/scenes-3d/amr-conical-pendulum')
)
export function Amr_ConicalPendulum() {
  return (
    <Suspense fallback={<div style={{ minHeight: 440 }} />}>
      <Amr_ConicalPendulumInner />
    </Suspense>
  )
}

// 01.5.4 Torque & lever arm (interactive)
// Drag P to move where the force acts; drag the tip to change the force itself.
// The dropped perpendicular r_perp (with its right-angle mark) and the right
// triangle O-Q-P make the lever arm visible, and the readout closes the loop:
// the component form x F_y - y F_x and the lever-arm form r_perp |F| compute to
// the same number, live.
export function Amr_TorqueLever() {
  // Application point P (where F acts) and the force vector F are independent
  // state. The tip T = P + F is derived, so dragging P translates the whole
  // force (F constant, lever arm changes) while dragging the tip changes F
  // (angle + magnitude) with P fixed.
  const [P, setP] = useState([2.4, 1.0])
  const [F, setF] = useState([1.5, 1.7])
  const T = [P[0] + F[0], P[1] + F[1]]
  const Fmag = Math.hypot(F[0], F[1]) || 1e-6
  const ux = F[0] / Fmag
  const uy = F[1] / Fmag
  const tau = P[0] * F[1] - P[1] * F[0]
  const sgn = tau >= 0 ? 1 : -1
  // Foot Q of the perpendicular dropped from O onto the line of action.
  const s = -(P[0] * F[0] + P[1] * F[1]) / (Fmag * Fmag)
  const Q = [P[0] + s * F[0], P[1] + s * F[1]]
  const rperp = Math.hypot(Q[0], Q[1]) // == |tau| / Fmag, exactly
  // Line of action, extended past Q on one side and a little past P on the other.
  const sQ = s * Fmag // signed distance P->Q along the unit direction
  const back = Math.min(sQ, 0) - 1.1
  const fwd = Math.max(sQ, 0) + 1.4
  const lineA = [P[0] + back * ux, P[1] + back * uy]
  const lineB = [P[0] + fwd * ux, P[1] + fwd * uy]
  // Outward normal of the moment arm (O->Q direction), used to push the
  // r_perp label clear of both legs of the right triangle.
  const nx = rperp > 1e-6 ? Q[0] / rperp : 0
  const ny = rperp > 1e-6 ? Q[1] / rperp : 0
  // Midpoint of r = O->P, nudged AWAY from the triangle interior so the label
  // never lands on the fill or the r_perp leg.
  const rMid = [P[0] / 2 - ny * 0.32, P[1] / 2 + nx * 0.32]

  const constrainP = (x, y) => {
    let px = Math.max(-2.4, Math.min(3.2, x))
    let py = Math.max(-1.6, Math.min(2.6, y))
    const r = Math.hypot(px, py)
    if (r < 0.7) {
      const k = 0.7 / (r || 1)
      px *= k
      py *= k
    }
    return [px, py]
  }
  const constrainT = (x, y) => [Math.max(-2.7, Math.min(4.8, x)), Math.max(-1.8, Math.min(2.85, y))]

  return (
    <div>
      <Plot xRange={[-3, 5]} yRange={[-2, 3]} width={560} height={362}>
        <Axes step={1} showGrid={false} />

        {/* TERTIARY: line of action (infinite line F lives on) */}
        <Polyline points={[lineA, lineB]} opacity={OPACITY.faint} dash="3 4" />

        {/* SECONDARY: position vector r = O->P */}
        <Arrow from={[0, 0]} to={P} opacity={OPACITY.dim} strokeWidth={1} />

        {/* PRIMARY (lesson): moment arm r_perp = O->Q with true 90° mark at Q */}
        <Polyline points={[[0, 0], Q]} opacity={OPACITY.accent} strokeWidth={1.5} />
        {rperp > 0.22 &&
          (() => {
            const d = 0.2
            // toward O from Q, and toward P from Q (the two perpendicular legs)
            const aL = [-Q[0] / rperp, -Q[1] / rperp]
            const dPQ = Math.hypot(P[0] - Q[0], P[1] - Q[1]) || 1
            const bL = [(P[0] - Q[0]) / dPQ, (P[1] - Q[1]) / dPQ]
            const corner = [
              Q,
              [Q[0] + d * aL[0], Q[1] + d * aL[1]],
              [Q[0] + d * (aL[0] + bL[0]), Q[1] + d * (aL[1] + bL[1])],
              [Q[0] + d * bL[0], Q[1] + d * bL[1]]
            ]
            return <Polyline points={corner} closed opacity={OPACITY.accent} strokeWidth={1} />
          })()}
        {/* foot of the perpendicular: where r_perp meets the line of action */}
        {rperp > 0.22 && <Dot x={Q[0]} y={Q[1]} r={2.6} opacity={OPACITY.accent} />}

        {/* PRIMARY: the force F = P->T, acting at point P */}
        <Arrow from={P} to={T} opacity={OPACITY.fg} strokeWidth={2} head={7} />
        <Dot x={P[0]} y={P[1]} r={3} opacity={OPACITY.fg} />

        {/* rotation sense at O: arc + the out-of/into-page axis it drives */}
        {(() => {
          const rad = 0.6
          const a0 = 0.4
          const a1 = a0 + sgn * 1.9
          const end = [rad * Math.cos(a1), rad * Math.sin(a1)]
          const pre = [rad * Math.cos(a1 - sgn * 0.28), rad * Math.sin(a1 - sgn * 0.28)]
          const mid = (a0 + a1) / 2
          return (
            <>
              <Parametric
                xy={ang => [rad * Math.cos(ang), rad * Math.sin(ang)]}
                t={[Math.min(a0, a1), Math.max(a0, a1)]}
                opacity={OPACITY.dim}
              />
              <Arrow from={pre} to={end} opacity={OPACITY.dim} head={5} />
              <Tex
                at={[(rad + 0.5) * Math.cos(mid), (rad + 0.5) * Math.sin(mid)]}
                tex={sgn > 0 ? String.raw`+\hat{\mathbf{z}}` : String.raw`-\hat{\mathbf{z}}`}
                size={11}
                anchor="middle"
                opacity={OPACITY.dim}
              />
            </>
          )
        })()}

        {/* point + vector labels: staggered so none overlaps a leg or the fill */}
        <Tex
          at={[0, 0]}
          dx={-15}
          dy={16}
          tex={String.raw`O`}
          size={FONT_LABEL}
          anchor="end"
          opacity={OPACITY.dim}
        />
        <Tex
          at={rMid}
          dx={-6}
          dy={2}
          tex={String.raw`\mathbf{r}`}
          size={FONT_TEX}
          anchor="end"
          opacity={OPACITY.dim}
        />
        <Tex at={P} dx={9} dy={17} tex={String.raw`P`} size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex at={T} dx={9} dy={2} tex={String.raw`\mathbf{F}`} size={FONT_CONTROL} />
        <Tex
          at={[Q[0] / 2 + nx * 0.26, Q[1] / 2 + ny * 0.26]}
          dx={0}
          dy={2}
          tex={String.raw`r_{\perp}`}
          size={FONT_LABEL}
          anchor="middle"
          opacity={OPACITY.accent}
        />

        {/* readout: component form and lever-arm form, equal in value AND sign */}
        <Tex
          at={[-2.85, 2.78]}
          tex={String.raw`\tau_z = xF_y - yF_x = ${tau.toFixed(2)}`}
          size={FONT_TEX}
        />
        <Tex
          at={[-2.85, 2.18]}
          tex={String.raw`\tau_z = \pm\, r_{\perp}|\mathbf{F}| = ${sgn > 0 ? '+' : '-'}(${rperp.toFixed(2)})(${Fmag.toFixed(2)}) = ${(sgn * rperp * Fmag).toFixed(2)}`}
          size={12}
          opacity={OPACITY.accent}
        />

        <DragHandle x={P[0]} y={P[1]} onChange={(x, y) => setP([x, y])} constrain={constrainP} />
        <DragHandle
          x={T[0]}
          y={T[1]}
          onChange={(x, y) => setF([x - P[0], y - P[1]])}
          constrain={constrainT}
        />
      </Plot>
      <p
        style={{
          fontFamily: "'D-DIN', sans-serif",
          fontSize: FONT_LABEL,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-primary)',
          opacity: 0.5,
          textAlign: 'center',
          margin: '6px 0 0'
        }}
      >
        Drag the tip to change the force · drag P to move where it acts
      </p>
    </div>
  )
}

// 01.5.5 Moments of inertia (interactive Riemann-sum builder)
// Replaces the old static lookup table. Each shape is discretized into mass
// elements at perpendicular distance rho from the axis; I = sum_j m_j rho_j^2
// is computed live and the per-element contribution is plotted, so the rho^2
// weighting (far mass dominates) is visible. The running coefficient converges
// to the exact 1, 1/2, 1/12, 1/3, 2/5 as the element count N grows.
//
// Element weights (geometry normalized: R=1 for radial shapes, L=1 for sticks):
//   hoop     single shell at rho=1                  -> coef 1
//   disk     rings, w prop rho (circumference)      -> coef 1/2
//   sphere   cylindrical shells, w prop rho*sqrt(1-rho^2) -> coef 2/5
//   stick-c  uniform, rho=|x|, x in [-1/2,1/2]      -> coef 1/12
//   stick-e  uniform, rho=x,  x in [0,1]            -> coef 1/3
const AMR_SHAPES = {
  hoop: { label: 'Hoop', unit: 'R', exactTex: 'MR^2', fixedN: true },
  disk: { label: 'Disk', unit: 'R', exactTex: '\\tfrac{1}{2}MR^2' },
  'stick-c': {
    label: 'Stick · centre',
    unit: 'L',
    exactTex: '\\tfrac{1}{12}ML^2'
  },
  'stick-e': { label: 'Stick · end', unit: 'L', exactTex: '\\tfrac{1}{3}ML^2' },
  sphere: { label: 'Sphere', unit: 'R', exactTex: '\\tfrac{2}{5}MR^2' }
}
function amrBuildElements(shape, N) {
  const els = []
  if (shape === 'hoop') {
    els.push({ rho: 1, w: 1 })
  } else if (shape === 'disk') {
    for (let i = 1; i <= N; i++) {
      const rho = (i - 0.5) / N
      els.push({ rho, w: rho })
    }
  } else if (shape === 'sphere') {
    for (let i = 1; i <= N; i++) {
      const rho = (i - 0.5) / N
      els.push({ rho, w: rho * Math.sqrt(Math.max(0, 1 - rho * rho)) })
    }
  } else if (shape === 'stick-c') {
    for (let i = 1; i <= N; i++) {
      const x = -0.5 + (i - 0.5) / N
      els.push({ rho: Math.abs(x), x, w: 1 })
    }
  } else if (shape === 'stick-e') {
    for (let i = 1; i <= N; i++) {
      const x = (i - 0.5) / N
      els.push({ rho: x, x, w: 1 })
    }
  }
  return els
}
function AmrShapeBtn({ active, onClick, children, C }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        fontFamily: "'D-DIN', ui-monospace, monospace",
        fontSize: FONT_SMALL,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        padding: '6px 11px',
        cursor: 'pointer',
        background: active ? C.faint : 'transparent',
        border: `1px solid ${active ? C.fg : C.dim}`,
        color: active ? C.fg : C.dim,
        borderRadius: 0,
        transition: 'all 0.15s cubic-bezier(0.4,0,0.2,1)'
      }}
    >
      {children}
    </button>
  )
}
export function Amr_InertiaBuilder() {
  const C = useVizColors()
  const [shape, setShape] = useState('disk')
  const [N, setN] = useState(14)
  const meta = AMR_SHAPES[shape]
  const n = meta.fixedN ? 1 : N
  const els = useMemo(() => amrBuildElements(shape, n), [shape, n])

  const sumW = els.reduce((a, e) => a + e.w, 0)
  const contrib = els.map(e => e.w * e.rho * e.rho)
  const maxC = Math.max(...contrib, 1e-9)
  const totalI = els.reduce((a, e) => a + e.w * e.rho * e.rho, 0)
  const coef = totalI / (sumW || 1)
  const maxRho = Math.max(...els.map(e => e.rho), 1e-9)
  const shade = c => 0.16 + 0.82 * (c / maxC)

  // geometry block (left)
  const gx = -2.05
  const gy = 0.05
  const G = 1.28 // R=1 -> 1.28 plot units
  const Ls = 2.85 // stick length in plot units
  const isFaceOn = shape === 'hoop' || shape === 'disk'
  const isStick = shape === 'stick-c' || shape === 'stick-e'

  // contribution bars (right): the rho^2 weighting profile
  const bx0 = 1.5
  const bx1 = 4.45
  const y0b = -1.85
  const barH = 3.1
  const bw = Math.min(0.32, ((bx1 - bx0) / Math.max(n, 1)) * 0.72)
  const maxLabel =
    isFaceOn || shape === 'sphere' ? 'R' : shape === 'stick-e' ? 'L' : '\\tfrac{L}{2}'
  const xOfRho = r => bx0 + (r / maxRho) * (bx1 - bx0)

  // rho^2 reference law, traced across the same rho axis the bars use. Scaled to
  // the bar field so the curve hugs the bar tops where w is roughly uniform.
  const rho2Pts = []
  for (let k = 0; k <= 40; k++) {
    const r = (k / 40) * maxRho
    rho2Pts.push([xOfRho(r), y0b + ((r * r) / (maxRho * maxRho)) * barH])
  }

  const geom = []
  if (isFaceOn) {
    // face-on view: concentric rings, axis is a point (out of page)
    els.forEach((e, i) =>
      geom.push(
        <CircleSh key={`ring${i}`} cx={gx} cy={gy} r={e.rho * G} opacity={shade(contrib[i])} />
      )
    )
    geom.push(<CircleSh key="axdot" cx={gx} cy={gy} r={0.12} opacity={OPACITY.accent} />)
    geom.push(<Dot key="axc" x={gx} y={gy} r={1.8} opacity={OPACITY.accent} color={C.accent} />)
    geom.push(
      <Tex
        key="axlbl"
        at={[gx, gy - G - 0.32]}
        tex={`\\odot\\;\\text{axis}\\perp\\text{plane}`}
        size={FONT_LABEL}
        anchor="middle"
        opacity={OPACITY.dim}
      />
    )
  } else if (shape === 'sphere') {
    // side view: sphere outline + cylindrical shells as vertical chord pairs
    geom.push(<CircleSh key="outline" cx={gx} cy={gy} r={G} opacity={OPACITY.faint} />)
    geom.push(
      <Polyline
        key="axis"
        points={[
          [gx, gy - G - 0.32],
          [gx, gy + G + 0.32]
        ]}
        opacity={OPACITY.accent}
        dash="4 4"
      />
    )
    els.forEach((e, i) => {
      const h = Math.sqrt(Math.max(0, 1 - e.rho * e.rho)) * G
      const op = shade(contrib[i])
      ;[-1, 1].forEach(s =>
        geom.push(
          <Polyline
            key={`shell${i}${s}`}
            points={[
              [gx + s * e.rho * G, gy - h],
              [gx + s * e.rho * G, gy + h]
            ]}
            opacity={op}
            strokeWidth={1.5}
          />
        )
      )
    })
    geom.push(
      <Tex
        key="axlbl"
        at={[gx, gy + G + 0.5]}
        tex={`\\text{axis}`}
        size={FONT_LABEL}
        anchor="middle"
        opacity={OPACITY.dim}
      />
    )
  } else if (isStick) {
    // side view: horizontal rod, vertical axis, elements as ticks
    const x0 = shape === 'stick-c' ? gx - Ls / 2 : gx
    const x1 = shape === 'stick-c' ? gx + Ls / 2 : gx + Ls
    geom.push(
      <Polyline
        key="rod"
        points={[
          [x0, gy],
          [x1, gy]
        ]}
        opacity={OPACITY.dim}
        strokeWidth={2}
      />
    )
    geom.push(
      <Polyline
        key="axis"
        points={[
          [gx, gy - 1.0],
          [gx, gy + 1.0]
        ]}
        opacity={OPACITY.accent}
        dash="4 4"
      />
    )
    els.forEach((e, i) => {
      const xp = gx + e.x * Ls
      geom.push(
        <Polyline
          key={`tick${i}`}
          points={[
            [xp, gy - 0.22],
            [xp, gy + 0.22]
          ]}
          opacity={shade(contrib[i])}
          strokeWidth={2}
        />
      )
    })
    geom.push(
      <Tex
        key="axlbl"
        at={[gx, gy + 1.2]}
        tex={`\\text{axis}`}
        size={FONT_LABEL}
        anchor="middle"
        opacity={OPACITY.dim}
      />
    )
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: 6,
          justifyContent: 'center',
          marginBottom: 12,
          flexWrap: 'wrap'
        }}
      >
        {Object.keys(AMR_SHAPES).map(id => (
          <AmrShapeBtn key={id} active={shape === id} onClick={() => setShape(id)} C={C}>
            {AMR_SHAPES[id].label}
          </AmrShapeBtn>
        ))}
      </div>
      <Plot xRange={[-3.7, 4.85]} yRange={[-2.65, 2.85]} width={600} height={400}>
        {/* live equation (left column, vertically separated to avoid collision) */}
        <Tex at={[-3.6, 2.6]} tex={`I=\\sum_j m_j\\,\\rho_j^2`} size={FONT_CONTROL} />
        <Tex
          at={[-3.6, 1.92]}
          tex={`\\approx ${coef.toFixed(4)}\\,M${meta.unit}^2`}
          size={FONT_TEX}
          opacity={OPACITY.accent}
          color={C.accent}
        />
        {geom}

        {/* contribution column header: live coef = exact, vertically clear */}
        <Tex
          at={[(bx0 + bx1) / 2, 2.6]}
          tex={`\\underbrace{${coef.toFixed(3)}}_{\\text{discrete}}\\to ${meta.exactTex}`}
          size={FONT_LABEL}
          anchor="middle"
          opacity={OPACITY.dim}
        />

        {/* contribution-per-element bars: the rho^2 weighting profile */}
        <Polyline
          points={[
            [bx0 - 0.12, y0b],
            [bx1 + 0.18, y0b]
          ]}
          opacity={OPACITY.dim}
        />
        {/* rho^2 reference law overlaid on the bar field */}
        <Polyline points={rho2Pts} opacity={OPACITY.faint} dash="2 4" />
        <Tex
          at={[xOfRho(maxRho * 0.74), y0b + barH * 0.5]}
          tex={`\\rho^2`}
          size={FONT_LABEL}
          anchor="middle"
          opacity={OPACITY.faint}
        />
        {els.map((e, i) => {
          const xb = xOfRho(e.rho)
          const h = (contrib[i] / maxC) * barH
          const op = shade(contrib[i])
          return (
            <Polyline
              key={`bar${i}`}
              points={[
                [xb - bw / 2, y0b],
                [xb + bw / 2, y0b],
                [xb + bw / 2, y0b + h],
                [xb - bw / 2, y0b + h]
              ]}
              closed
              opacity={op}
              fillOpacity={op * 0.45}
            />
          )
        })}
        <Tex at={[bx0 - 0.12, y0b + barH + 0.32]} tex={`m_j\\,\\rho_j^2`} size={FONT_LABEL} />
        <Tex
          at={[bx0 - 0.12, y0b - 0.22]}
          tex={`0`}
          size={FONT_LABEL}
          anchor="middle"
          opacity={OPACITY.dim}
        />
        <Tex
          at={[bx1 + 0.18, y0b - 0.22]}
          tex={maxLabel}
          size={FONT_LABEL}
          anchor="middle"
          opacity={OPACITY.dim}
        />
        <Tex
          at={[(bx0 + bx1) / 2, y0b - 0.62]}
          tex={`\\rho\\;\\text{(distance to axis)}\\rightarrow`}
          size={FONT_LABEL}
          anchor="middle"
          opacity={OPACITY.dim}
        />
      </Plot>
      {!meta.fixedN && (
        <Slider
          label="elements"
          value={N}
          min={2}
          max={48}
          step={1}
          onChange={v => setN(Math.round(v))}
          format={v => String(Math.round(v))}
        />
      )}
    </div>
  )
}

// 01.5.6 Parallel axis theorem (interactive)
// Slide the offset distance d; the moment about the offset axis grows as
// I = I_cm + M d^2.
export function Amr_ParallelAxis() {
  const [d, setD] = useState(1.6)
  // Uniform disk, M = 1 kg, R = 1 m ⇒ I_cm = (1/2) M R^2 = 0.5 kg·m^2.
  const M = 1
  const I0 = 0.5
  const Md2 = M * d * d // the d-dependent shift term
  const I = I0 + Md2 // parallel-axis (Huygens–Steiner): exact, quadratic in d

  // One Plot, three honest panels sharing the same vertical I-scale so the
  // disk, the parabola, and the decomposition bar are all read off ONE ruler.
  //   Plot coords: x ∈ [-4.3, 6.2], y ∈ [-2.5, 3.0]
  //   The I → y map is global: yOfI(II) = baseY + II * Iscale.
  const baseY = -1.95 // common floor (I = 0) for parabola + bar
  const Imax = 5.5 // top of the I-scale (covers d up to ~2.24)
  const topY = 2.5 // screen height the I-axis reaches
  const Iscale = (topY - baseY) / Imax // vertical units per unit I
  const yOfI = II => baseY + II * Iscale
  const yI0 = yOfI(I0)
  const yI = yOfI(I)

  // Panel A · physical disk with cm axis + offset pivot axis (far left)
  const cmx = -3.15
  const cmcy = 0.55
  const Rd = 0.78
  const dmax = 2.24
  const dDraw = 1.55 // x-span the max offset is drawn across
  const pivotx = cmx + (d / dmax) * dDraw
  const diskY = 0.2 // y where the d-measure arrow sits (below the disk)

  // Panel B · I(d) parabola with its own d-axis (centre)
  const ox = -0.6 // I-axis (d = 0) sits here
  const dpx = 1.55 // horizontal units per unit d
  const xOfd = dd => ox + dd * dpx
  const Xd = xOfd(d)

  // Panel C · stacked decomposition bar (far right, shares I-scale)
  const barX = 5.45 // bar centre
  const bw = 0.42 // bar half-width: a real chart column, not a hairline

  return (
    <div>
      <Plot xRange={[-4.3, 6.2]} yRange={[-2.5, 3.0]} width={640} height={360}>
        {/* Live equation readout, single line, color-coded to the bar */}
        <Tex at={[-4.2, 2.85]} tex={`I = I_{cm} + Md^2`} size={FONT_TEX} opacity={OPACITY.fg} />
        <Tex
          at={[-0.9, 2.85]}
          tex={`= ${I0.toFixed(2)} + ${Md2.toFixed(2)} = ${I.toFixed(2)}`}
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />

        {/* PANEL A · the physical disk */}
        <CircleSh cx={cmx} cy={cmcy} r={Rd} opacity={OPACITY.dim} fill fillOpacity={0.05} />
        {/* cm axis (solid emphasis) */}
        <Polyline
          points={[
            [cmx, -0.95],
            [cmx, 1.7]
          ]}
          opacity={OPACITY.fg}
          dash="4 4"
        />
        {/* offset pivot axis (accent) */}
        <Polyline
          points={[
            [pivotx, -0.95],
            [pivotx, 1.7]
          ]}
          opacity={OPACITY.accent}
          dash="4 4"
        />
        <Dot x={cmx} y={cmcy} r={3} />
        {/* d-measure between the two axes */}
        <Arrow
          from={[cmx, diskY - 1.0]}
          to={[pivotx, diskY - 1.0]}
          opacity={OPACITY.dim}
          head={5}
        />
        <Tex
          at={[(cmx + pivotx) / 2, diskY - 1.0]}
          dy={-8}
          tex={`d = ${d.toFixed(2)}`}
          size={FONT_LABEL}
          anchor="middle"
          opacity={OPACITY.dim}
        />
        {/* axis labels: staggered: cm sits high-left, PIVOT high-right */}
        <Label at={[cmx, 1.7]} dy={-5} size={FONT_TINY} anchor="middle" opacity={OPACITY.fg}>
          CM AXIS
        </Label>
        <Label
          at={[pivotx, -0.95]}
          dy={16}
          size={FONT_TINY}
          anchor="middle"
          opacity={OPACITY.accent}
        >
          PIVOT
        </Label>

        {/* PANEL B · the I(d) parabola */}
        {/* local axes */}
        <Arrow from={[ox, baseY]} to={[ox, topY]} opacity={OPACITY.dim} head={5} />
        <Arrow from={[ox, baseY]} to={[xOfd(2.35), baseY]} opacity={OPACITY.dim} head={5} />
        <Tex
          at={[ox, topY]}
          dx={-6}
          dy={-1}
          tex={`I`}
          size={FONT_LABEL}
          anchor="end"
          opacity={OPACITY.dim}
        />
        <Tex
          at={[xOfd(2.35), baseY]}
          dx={8}
          dy={4}
          tex={`d`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />

        {/* I-axis ticks + numbers (1, 3, 5) on the LEFT of the I-axis */}
        {[1, 3, 5].map(k => (
          <React.Fragment key={`it${k}`}>
            <Polyline
              points={[
                [ox - 0.07, yOfI(k)],
                [ox + 0.07, yOfI(k)]
              ]}
              opacity={OPACITY.dim}
            />
            <Label
              at={[ox, yOfI(k)]}
              dx={-9}
              dy={3}
              size={FONT_TINY}
              anchor="end"
              upper={false}
              opacity={OPACITY.dim}
            >
              {String(k)}
            </Label>
          </React.Fragment>
        ))}
        {/* d-axis ticks + numbers (1, 2) BELOW the d-axis */}
        {[1, 2].map(k => (
          <React.Fragment key={`dt${k}`}>
            <Polyline
              points={[
                [xOfd(k), baseY - 0.07],
                [xOfd(k), baseY + 0.07]
              ]}
              opacity={OPACITY.dim}
            />
            <Label
              at={[xOfd(k), baseY]}
              dy={15}
              size={FONT_TINY}
              anchor="middle"
              upper={false}
              opacity={OPACITY.dim}
            >
              {String(k)}
            </Label>
          </React.Fragment>
        ))}

        {/* I_cm floor line: the parabola's minimum sits at the cm axis (d = 0) */}
        <Polyline
          points={[
            [ox, yI0],
            [xOfd(2.3), yI0]
          ]}
          opacity={OPACITY.dim}
          dash="3 4"
        />
        <Tex
          at={[ox, yI0]}
          dx={-9}
          dy={3}
          tex={`I_{cm}`}
          size={FONT_SMALL}
          anchor="end"
          opacity={OPACITY.dim}
        />

        {/* full parabola (faint) + emphasised arc up to current d */}
        <Parametric
          xy={t => [xOfd(t), yOfI(I0 + t * t)]}
          t={[0, 2.3]}
          opacity={OPACITY.dim}
          strokeWidth={1}
        />
        <Parametric
          xy={t => [xOfd(t), yOfI(I0 + t * t)]}
          t={[0, Math.max(0.001, d)]}
          opacity={OPACITY.fg}
          strokeWidth={2}
        />

        {/* current point on the curve + drop line down to the d-axis */}
        <Polyline
          points={[
            [Xd, baseY],
            [Xd, yI]
          ]}
          opacity={OPACITY.faint}
          dash="2 4"
        />
        <Dot x={Xd} y={yI} r={3.5} />

        {/* PANEL C · stacked decomposition bar */}
        {/* zone divider between parabola and the chart */}
        <Polyline
          points={[
            [4.55, baseY],
            [4.55, topY]
          ]}
          opacity={OPACITY.faint}
        />
        {/* shared baseline tick so the column reads off the same I-ruler */}
        <Polyline
          points={[
            [barX - bw - 0.1, baseY],
            [barX + bw + 0.1, baseY]
          ]}
          opacity={OPACITY.dim}
        />
        {/* lower segment = I_cm (constant, dim) */}
        <Polyline
          points={[
            [barX - bw, baseY],
            [barX + bw, baseY],
            [barX + bw, yI0],
            [barX - bw, yI0]
          ]}
          closed
          opacity={OPACITY.dim}
          fillOpacity={0.16}
        />
        {/* upper segment = M·d² (grows as d², accent) */}
        <Polyline
          points={[
            [barX - bw, yI0],
            [barX + bw, yI0],
            [barX + bw, yI],
            [barX - bw, yI]
          ]}
          closed
          opacity={OPACITY.accent}
          fillOpacity={0.28}
        />
        {/* tie-line: the bar's total height equals the parabola's height at d */}
        <Polyline
          points={[
            [Xd, yI],
            [barX - bw, yI]
          ]}
          opacity={OPACITY.faint}
          dash="2 4"
        />
        {/* segment labels: staggered left of the column so they never cross it */}
        <Tex
          at={[barX - bw, (baseY + yI0) / 2]}
          dx={-6}
          tex={`I_{cm} = ${I0.toFixed(2)}`}
          size={FONT_SMALL}
          anchor="end"
          opacity={OPACITY.dim}
        />
        <Tex
          at={[barX - bw, (yI0 + yI) / 2]}
          dx={-6}
          tex={`Md^2 = ${Md2.toFixed(2)}`}
          size={FONT_SMALL}
          anchor="end"
          opacity={OPACITY.accent}
        />
        {/* total atop the column */}
        <Tex
          at={[barX, yI]}
          dy={-9}
          tex={`I = ${I.toFixed(2)}`}
          size={FONT_LABEL}
          anchor="middle"
          opacity={OPACITY.fg}
        />
      </Plot>
      <div
        style={{
          fontFamily: "'D-DIN', ui-monospace, monospace",
          fontSize: FONT_SMALL,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          opacity: OPACITY.dim,
          textAlign: 'center',
          margin: '2px 0 6px'
        }}
      >
        {'M = 1 kg  ·  R = 1 m  ·  I in kg·m²'}
      </div>
      <Slider label="d" value={d} min={0} max={2.2} step={0.01} onChange={setD} />
    </div>
  )
}

// 01.5.7 Physical pendulum vs. its equivalent simple pendulum (RK4)
// Two pendulums hang from one ceiling. Left: a uniform rod (extended body)
// pivoted a distance d above its centre of mass. Right: a simple point bob on
// a string of length ell_eq = I/(md). Both integrate theta'' = -(g/ell_eq)
// sin theta = -(mgd/I) sin theta: the SAME equation: so they swing in exact
// lockstep at every amplitude. The level dashed tie-line joins the rod's centre
// of oscillation to the simple bob and stays horizontal through the whole
// swing: that is the proof they keep identical time. Drag d to slide the pivot;
// T and ell_eq update live and bottom out at the radius-of-gyration minimum.
export function Amr_PhysicalPendulum() {
  const m = 1,
    g = 9.81,
    Lrod = 1.7
  const Icm = (m * Lrod * Lrod) / 12 // uniform rod about its centre
  const [d, setD] = useState(0.72) // pivot-to-CM distance
  const I = Icm + m * d * d // parallel-axis: inertia about the pivot
  const Lq = I / (m * d) // centre of oscillation = equivalent simple-pendulum length
  const w0sq = (m * g * d) / I // = g / Lq
  const w0sqRef = useRef(w0sq)
  w0sqRef.current = w0sq // step() reads this so the slider stays live
  const T = 2 * Math.PI * Math.sqrt(I / (m * g * d))

  // released from rest at +TH0; the swing amplitude is exactly this angle.
  const TH0 = 0.5
  const initial = useMemo(() => ({ th: TH0, w: 0, t: 0 }), [])
  const step = (st, dt) => {
    if (dt === 0) return st
    const f = (_, y) => [y[1], -w0sqRef.current * Math.sin(y[0])]
    const n = rk4Step(f, st.t, [st.th, st.w], dt)
    return { th: n[0], w: n[1], t: st.t + dt }
  }
  const [s, , ctl] = useSimulation(initial, step, { running: true })
  const th = s.th
  const thDeg = (th * 180) / Math.PI

  // geometry: both pivots sit on the ceiling (y = 0)
  const Xp = -1.35, // physical-pendulum pivot
    Xs = 1.35 // simple-pendulum pivot
  const ux = Math.sin(th),
    uy = -Math.cos(th) // unit vector down the swing line
  const nx = Math.cos(th),
    ny = Math.sin(th) // perpendicular, for the rod's width
  const hw = 0.05 // rod half-width
  const aTop = d - Lrod / 2, // rod ends, measured along the rod from the pivot
    aBot = d + Lrod / 2
  const onRod = (a, side) => [Xp + ux * a + nx * hw * side, uy * a + ny * hw * side]
  const rodQuad = [onRod(aTop, 1), onRod(aBot, 1), onRod(aBot, -1), onRod(aTop, -1)]
  const cm = [Xp + ux * d, uy * d]
  const oscP = [Xp + ux * Lq, uy * Lq] // centre of oscillation, on the rod
  const bob = [Xs + ux * Lq, uy * Lq] // simple bob, same distance from its pivot

  // swept envelope: sample the swing line from −TH0 to +TH0 at radius Lq.
  // Both pendulums share this radius, so the two equal arcs ARE the equal period.
  const arc = (Xc, R) => {
    const pts = []
    for (let k = 0; k <= 24; k++) {
      const a = -TH0 + (k / 24) * 2 * TH0
      pts.push([Xc + Math.sin(a) * R, -Math.cos(a) * R])
    }
    return pts
  }
  const arcP = arc(Xp, Lq)
  const arcS = arc(Xs, Lq)

  // small angle wedge at each pivot: from vertical down to the live swing line.
  const wedge = Xc => {
    const r = 0.32
    const pts = [[Xc, 0]]
    const steps = 10
    for (let k = 0; k <= steps; k++) {
      const a = (k / steps) * th
      pts.push([Xc + Math.sin(a) * r, -Math.cos(a) * r])
    }
    return pts
  }

  // pivot bracket triangle, drawn in math coords above the ceiling.
  const piv = Xc => [
    [Xc - 0.1, 0.16],
    [Xc + 0.1, 0.16],
    [Xc, 0]
  ]

  return (
    <div>
      <Plot xRange={[-2.48, 2.48]} yRange={[-2.05, 0.62]} width={540} height={305}>
        {/* shared ceiling + pivot brackets */}
        <Polyline
          points={[
            [-2.25, 0],
            [2.25, 0]
          ]}
          opacity={OPACITY.dim}
        />
        <Polyline points={piv(Xp)} closed fill fillOpacity={0.12} opacity={OPACITY.dim} />
        <Polyline points={piv(Xs)} closed fill fillOpacity={0.12} opacity={OPACITY.dim} />

        {/* swept envelopes: equal radius ⇒ equal period (the whole point) */}
        <Polyline points={arcP} opacity={OPACITY.faint} strokeWidth={1} dash="1 4" />
        <Polyline points={arcS} opacity={OPACITY.faint} strokeWidth={1} dash="1 4" />

        {/* live angle wedges at each pivot, phase-locked */}
        <Polyline points={wedge(Xp)} closed fill fillOpacity={0.08} opacity={OPACITY.dim} />
        <Polyline points={wedge(Xs)} closed fill fillOpacity={0.08} opacity={OPACITY.dim} />
        {/* dashed vertical references */}
        <Polyline
          points={[
            [Xp, 0],
            [Xp, -0.42]
          ]}
          opacity={OPACITY.faint}
          dash="2 4"
          strokeWidth={1}
        />
        <Polyline
          points={[
            [Xs, 0],
            [Xs, -0.42]
          ]}
          opacity={OPACITY.faint}
          dash="2 4"
          strokeWidth={1}
        />

        {/* physical pendulum: the extended rod */}
        <Polyline
          points={rodQuad}
          closed
          fill
          fillOpacity={0.1}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Dot x={Xp} y={0} r={3.5} />
        <Dot x={cm[0]} y={cm[1]} r={3} fill={false} opacity={OPACITY.dim} />
        <Dot x={oscP[0]} y={oscP[1]} r={4.5} opacity={OPACITY.accent} />

        {/* simple pendulum of length ell_eq */}
        <Polyline points={[[Xs, 0], bob]} opacity={OPACITY.dim} />
        <Dot x={Xs} y={0} r={3.5} />
        <CircleSh
          cx={bob[0]}
          cy={bob[1]}
          r={0.11}
          opacity={OPACITY.accent}
          fill
          fillOpacity={0.2}
        />

        {/* the proof: level tie-line from osc. point to simple bob */}
        <Polyline points={[oscP, bob]} opacity={OPACITY.accent} dash="2 5" strokeWidth={1} />

        {/* pivot headings, above the ceiling */}
        <Tex
          at={[Xp, 0.18]}
          dy={-3}
          anchor="middle"
          tex={`\\text{extended body}`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[Xs, 0.18]}
          dy={-3}
          anchor="middle"
          tex={`\\text{simple, }\\ell_{eq}`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        {/* cm below the line, osc. above: staggered so they never collide */}
        <Tex
          at={cm}
          dx={10}
          dy={9}
          anchor="start"
          tex={`\\text{cm}`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={oscP}
          dx={10}
          dy={-7}
          anchor="start"
          tex={`\\text{osc. centre}`}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />

        {/* live angle readout, anchored at the physical pivot wedge */}
        <Tex
          at={[Xp + 0.42, -0.18]}
          anchor="start"
          tex={`\\theta = ${thDeg >= 0 ? '' : '-'}${Math.abs(thDeg).toFixed(0)}^\\circ`}
          size={11}
          opacity={OPACITY.dim}
        />

        {/* readouts, in the clear band below centre */}
        <Tex
          at={[-1.05, -1.66]}
          anchor="start"
          tex={`T = 2\\pi\\sqrt{\\tfrac{I}{mgd}} = ${T.toFixed(2)}\\,\\text{s}`}
          size={FONT_TEX}
        />
        <Tex
          at={[-1.05, -1.96]}
          anchor="start"
          tex={`\\ell_{eq} = \\tfrac{I}{md} = ${Lq.toFixed(2)}\\,\\text{m}`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="d"
        value={d}
        min={0.4}
        max={0.85}
        step={0.005}
        onChange={setD}
        format={v => `${v.toFixed(2)} m`}
      />
      <PlayPause
        playing={ctl.playing}
        onToggle={() => ctl.setPlaying(v => !v)}
        onReset={ctl.reset}
      />
    </div>
  )
}

// 01.5.8 Rolling wheel (cycloid)
// Two computed panels, one engine. Panel 1: the decomposition v_P = v_cm + ω×r'
// drawn as translation ⊕ rotation = rolling, which proves top = 2 v_cm and
// bottom = 0 by literal vector addition. Panel 2: the animated wheel: its
// instantaneous velocity field about the contact point, plus a tracer that
// rides the rim and draws the cycloid.
export function Amr_RollingWheel() {
  const t = useAnimationTime(true, 1)

  // Panel 1 · decomposition triptych (static)
  // Same 8 rim points in each wheel; only the velocity rule changes. The drawn
  // length of v_cm is set equal to ωR, so the rotation arrows match it in size
  // and the rolling panel is a head-to-tail sum of the first two.
  const Rt = 0.68
  const L = 0.6 // displayed |v_cm| = ωR
  const yc = Rt // wheels rest on a shared baseline at y = 0
  const betas = Array.from({ length: 8 }, (_, k) => (k / 8) * 2 * Math.PI)
  const panels = [
    { cx: 1.4, mode: 'trans', title: '\\text{translation}' },
    { cx: 4.7, mode: 'rot', title: '\\text{rotation}' },
    { cx: 8.0, mode: 'roll', title: '\\text{rolling}' }
  ]
  const vAt = (mode, b) => {
    const tr = [L, 0] // every point shares v_cm
    const ro = [L * Math.sin(b), -L * Math.cos(b)] // ω×r', clockwise spin
    if (mode === 'trans') return tr
    if (mode === 'rot') return ro
    return [tr[0] + ro[0], tr[1] + ro[1]]
  }

  // Panel 2 · the rolling wheel + cycloid (animated)
  // No-slip kinematics enforced exactly: v_cm = ω R. The wheel centre advances
  // x_c = R φ as the wheel turns by φ, so the contact arc equals the ground arc.
  const R = 0.7
  const vcm = 0.92
  const om = vcm / R // ω = v_cm / R  (the no-slip law, made explicit)
  const phi = (t * 0.7) % (2 * Math.PI) // one revolution traces one arch
  const xc = R * phi // centre rides forward by exactly the arc rolled
  // The rim point that started at contact (φ = 0) draws a cycloid as a true
  // parametric curve x = R(f − sin f), y = R(1 − cos f); we reveal it up to the
  // current φ so the path grows with the wheel.
  const cyc = f => [R * (f - Math.sin(f)), R * (1 - Math.cos(f))]
  const trace = cyc(phi)
  // Instantaneous velocity field at 12 fixed rim angles (offset so none lands on
  // the top/bottom the bold headline arrows own). Every point turns about the
  // contact C = (x_c, 0): v = ω × (P − C), so each arrow is ⊥ the spoke C→P and
  // its length = ω·|P − C| grows linearly with distance from C. That linearity
  // is the whole proof: |P−C| = 0 at the bottom (v = 0) and = 2R at the top
  // (v = ω·2R = 2 v_cm).

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Plot xRange={[-0.3, 9.9]} yRange={[-0.95, 1.85]} width={680} height={210}>
        <Tex
          at={[4.7, 1.62]}
          tex={String.raw`\mathbf{v}_P = \mathbf{v}_{cm} + \boldsymbol{\omega}\times\mathbf{r}'`}
          size={FONT_TEX}
          anchor="middle"
        />
        {panels.map((pn, pi) => (
          <g key={pi}>
            <CircleSh cx={pn.cx} cy={yc} r={Rt} opacity={OPACITY.dim} />
            <Dot x={pn.cx} y={yc} r={2.4} opacity={pn.mode === 'rot' ? OPACITY.dim : OPACITY.fg} />
            {pn.mode !== 'rot' && (
              <Arrow from={[pn.cx, yc]} to={[pn.cx + L, yc]} opacity={OPACITY.dim} head={5} />
            )}
            {betas.map((b, bi) => {
              const P = [pn.cx + Rt * Math.cos(b), yc + Rt * Math.sin(b)]
              const v = vAt(pn.mode, b)
              const zero = Math.hypot(v[0], v[1]) < 0.04
              return (
                <g key={bi}>
                  <Dot x={P[0]} y={P[1]} r={1.6} opacity={OPACITY.dim} />
                  {zero ? (
                    <Dot x={P[0]} y={P[1]} r={3.2} opacity={OPACITY.fg} fill={false} />
                  ) : (
                    <Arrow
                      from={P}
                      to={[P[0] + v[0], P[1] + v[1]]}
                      opacity={OPACITY.accent}
                      head={4.5}
                    />
                  )}
                </g>
              )
            })}
            <Tex
              at={[pn.cx, -0.55]}
              tex={pn.title}
              size={FONT_LABEL}
              anchor="middle"
              opacity={OPACITY.dim}
            />
          </g>
        ))}
        <Tex
          at={[3.05, yc]}
          tex={String.raw`+`}
          size={FONT_VALUE}
          anchor="middle"
          opacity={OPACITY.dim}
        />
        <Tex
          at={[6.35, yc]}
          tex={String.raw`=`}
          size={FONT_VALUE}
          anchor="middle"
          opacity={OPACITY.dim}
        />
        {/* representative magnitudes tie the arrows to the algebra */}
        <Tex
          at={[1.4 + L, yc + Rt]}
          dx={4}
          dy={-3}
          tex={String.raw`v_{cm}`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[4.7 + Rt, yc - L]}
          dx={5}
          dy={2}
          tex={String.raw`\omega R`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[8.0 + 2 * L, yc + Rt]}
          dx={4}
          dy={-3}
          tex={String.raw`2v_{cm}`}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[8.0, 0]}
          dx={8}
          dy={13}
          tex={String.raw`0`}
          size={FONT_SMALL}
          anchor="middle"
          opacity={OPACITY.accent}
        />
      </Plot>

      <Plot xRange={[-0.6, 6.8]} yRange={[-0.72, 2.28]} width={680} height={295}>
        <Polyline
          points={[
            [-0.6, 0],
            [6.8, 0]
          ]}
          opacity={OPACITY.dim}
        />
        {/* the full arch the rim point will trace, computed parametrically */}
        <Parametric xy={cyc} t={[0, 2 * Math.PI]} samples={200} opacity={OPACITY.faint} />
        {/* the part already swept: drawn solid so the path grows with the wheel */}
        <Parametric xy={cyc} t={[0, phi]} samples={120} opacity={OPACITY.dim} />
        {/* diameter through contact and top: the v = 0 and 2 v_cm extremes */}
        <Polyline
          points={[
            [xc, 0],
            [xc, 2 * R]
          ]}
          opacity={OPACITY.faint}
          dash="2 5"
        />
        <CircleSh cx={xc} cy={R} r={R} opacity={OPACITY.fg} />
        {/* body-fixed cross: two perpendicular diameters make rotation unmistakable */}
        <Polyline
          points={[[xc + R * Math.sin(phi), R + R * Math.cos(phi)], trace]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        <Polyline
          points={[
            [xc + R * Math.cos(phi), R - R * Math.sin(phi)],
            [xc - R * Math.cos(phi), R + R * Math.sin(phi)]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1.2}
        />
        <Arrow from={[xc, R]} to={[xc + vcm, R]} opacity={OPACITY.fg} strokeWidth={1.6} head={7} />
        <Tex at={[xc + vcm, R]} dx={7} dy={-5} tex={String.raw`v_{cm}`} size={FONT_LABEL} />
        <Arrow
          from={[xc, 2 * R]}
          to={[xc + 2 * vcm, 2 * R]}
          opacity={OPACITY.accent}
          strokeWidth={1.6}
          head={7}
        />
        <Tex
          at={[xc, 2 * R]}
          dx={7}
          dy={-16}
          tex={String.raw`v_{top}=2v_{cm}`}
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Dot x={xc} y={R} r={3} />
        <Dot x={xc} y={2 * R} r={3} opacity={OPACITY.accent} />
        {/* the pivot ring: C is the instantaneous centre the whole wheel turns about */}
        <Dot x={xc} y={0} r={7.5} fill={false} opacity={OPACITY.dim} />
        <Dot x={xc} y={0} r={3.6} opacity={OPACITY.accent} />
        <Tex
          at={[xc, 0]}
          dx={9}
          dy={16}
          tex={String.raw`v=0`}
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[xc, 0]}
          dx={9}
          dy={31}
          tex={String.raw`\text{(inst. centre)}`}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* the rim point riding the wheel; it draws the cycloid above */}
        <Dot x={trace[0]} y={trace[1]} r={3.4} opacity={OPACITY.accent} />
        <Tex
          at={trace}
          dx={6}
          dy={-6}
          tex={String.raw`\text{rim pt}`}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

// 01.5.9 Drum rolling down an incline (RK4)
// Integrates the rolling drum. A radial spoke makes the rotation visible
// (phi = s / b is the no-slip constraint); gravity-along-plane and friction
// are drawn. Solid cylinder gives a = (2/3) g sin theta.
export function Amr_DrumOnIncline() {
  // Hand-rolled SVG + exact constant-accel integration (physics.js useSimulation).
  // A uniform drum (I = ½Mb²) rolls without slipping: a = ⅔ g sinθ. Research-confirmed
  // (OpenStax §11.2, Texas PHY301 node108): the SAME factor 1/(1+I/Mb²) = 2/3 shows up
  // three independent ways, drawn here side by side so they visibly agree:
  //   (1) FORCE LAW   Ma = mg sinθ − f, with static friction f = ⅓ mg sinθ UP the plane.
  //                   The two arrows at their true application points sum to the ⅔ result.
  //   (2) TORQUE LAW  about the centre: f·b = Iα = (½Mb²)(a/b) ⇒ f = ½Ma. The live spoke
  //                   rotates by φ = s/b (the no-slip constraint), so the same f both
  //                   slows the slide and spins the drum.
  //   (3) ENERGY      a live bar fills as the drum descends and always splits ⅔ ½Mv²
  //                   translation | ⅓ ¼Mv² spin: the identical 1/(1+I/Mb²) factor.
  // A ghost frictionless slider (a = g sinθ, no spin) runs alongside and ends 3/2 as far,
  // so the roller is always ⅔ down-plane: the ⅔ made geometric.
  // Equal-scale axes (ux = uy enforced by the range/size ratio) keep the drum circular.
  const g = 9.81
  const b = 0.42
  const S_MAX = 3.0 // roller stop; slider (×3/2) reaches 4.5, still on-plane
  const [angDeg, setAngDeg] = useState(25)
  const ang = (angDeg * Math.PI) / 180
  const sinT = Math.sin(ang)
  const aRoll = (2 / 3) * g * sinT // honest result, integrated below
  const aRef = useRef(aRoll)
  aRef.current = aRoll
  const initial = useMemo(() => ({ s: 0, v: 0, t: 0 }), [])
  const step = (stt, dt) => {
    if (dt === 0) return stt
    const a = aRef.current
    let v = stt.v + a * dt
    let s = stt.s + stt.v * dt + 0.5 * a * dt * dt
    if (s > S_MAX) {
      s = 0
      v = 0
    }
    return { s, v, t: stt.t + dt }
  }
  const [st, , ctl] = useSimulation(initial, step, { running: true })

  const u = [Math.cos(ang), -Math.sin(ang)] // down-plane unit
  const n = [Math.sin(ang), Math.cos(ang)] // outward normal
  const s = st.s
  const v = st.v
  const frac = s / S_MAX // 0..1 progress, drives the live energy bar

  // rolling drum geometry
  const C = [s * u[0], s * u[1]] // contact point on the plane
  const ctr = [C[0] + b * n[0], C[1] + b * n[1]] // centre
  const phi = s / b // rolling constraint: φ = s/b
  const dir = [
    Math.cos(phi) * n[0] + Math.sin(phi) * u[0],
    Math.cos(phi) * n[1] + Math.sin(phi) * u[1]
  ]
  const rim = [ctr[0] + b * dir[0], ctr[1] + b * dir[1]]
  // second spoke a quarter-turn round, so the spin reads even near a cusp
  const dir2 = [
    Math.cos(phi + Math.PI / 2) * n[0] + Math.sin(phi + Math.PI / 2) * u[0],
    Math.cos(phi + Math.PI / 2) * n[1] + Math.sin(phi + Math.PI / 2) * u[1]
  ]
  const rim2 = [ctr[0] + b * dir2[0], ctr[1] + b * dir2[1]]

  // cycloid trail of the rim paint-dot over the distance already rolled
  const trail = []
  if (s > 0.04) {
    const N = 64
    for (let i = 0; i <= N; i++) {
      const sig = (i / N) * s
      const ph = sig / b
      trail.push([
        sig * u[0] + b * n[0] + b * (Math.cos(ph) * n[0] + Math.sin(ph) * u[0]),
        sig * u[1] + b * n[1] + b * (Math.cos(ph) * n[1] + Math.sin(ph) * u[1])
      ])
    }
  }

  // plane drawn a touch beyond the travel so it reads as a ramp
  const pA = [-0.3 * u[0], -0.3 * u[1]]
  const pB = [5.4 * u[0], 5.4 * u[1]]

  // LIVE energy-split bar (top-right corner, clear of the ramp)
  // total KE grows ∝ s; it always splits ⅔ translation | ⅓ spin.
  const bx0 = 3.75,
    bx1 = 6.05,
    byT = 0.92, // bar top
    bh = 0.24
  const full = (bx1 - bx0) * frac // current filled width
  const sxFull = bx0 + full // right edge of the filled region
  const sxSplit = bx0 + full * (2 / 3) // ⅔ / ⅓ divider inside the fill

  return (
    <div>
      {/* Uniform scale: 668/7.05 ≈ 94.7 px/u on both axes — the drum is drawn
          truly tangent to the incline and the cycloid keeps its shape. */}
      <Plot xRange={[-0.85, 6.2]} yRange={[-2.6, 1.15]} width={700} height={387}>
        {/* incline + hatching */}
        <Polyline points={[pA, pB]} opacity={OPACITY.dim} />
        {Array.from({ length: 13 }, (_, i) => {
          const sig = 0.1 + i * 0.45
          const base = [sig * u[0], sig * u[1]]
          return (
            <Polyline
              key={i}
              points={[base, [base[0] - 0.22 * n[0], base[1] - 0.22 * n[1]]]}
              opacity={OPACITY.faint}
            />
          )
        })}

        {/* headline: one line, above the drum's start position (top ≤ 0.89) */}
        <Tex
          at={[-0.8, 1.02]}
          tex={String.raw`a = \tfrac{2}{3}\,g\sin\theta = ${aRoll.toFixed(2)}\;\mathrm{m/s^2}`}
          size={FONT_TEX}
        />

        {/* (3) LIVE energy of motion: ⅔ translation | ⅓ spin */}
        <Label at={[bx0, byT + 0.18]} size={FONT_SMALL} opacity={OPACITY.dim}>
          KINETIC ENERGY ¾ MV² = MGS·SINθ
        </Label>
        {/* empty track */}
        <Polyline
          points={[
            [bx0, byT],
            [bx1, byT],
            [bx1, byT - bh],
            [bx0, byT - bh]
          ]}
          closed
          opacity={OPACITY.faint}
        />
        {/* translational ⅔ of the current fill */}
        {full > 0.001 && (
          <Polyline
            points={[
              [bx0, byT],
              [sxSplit, byT],
              [sxSplit, byT - bh],
              [bx0, byT - bh]
            ]}
            closed
            fillOpacity={0.32}
            opacity={OPACITY.dim}
          />
        )}
        {/* rotational ⅓ of the current fill */}
        {full > 0.001 && (
          <Polyline
            points={[
              [sxSplit, byT],
              [sxFull, byT],
              [sxFull, byT - bh],
              [sxSplit, byT - bh]
            ]}
            closed
            fillOpacity={0.12}
            opacity={OPACITY.dim}
          />
        )}
        <Tex
          at={[(bx0 + (bx0 + (bx1 - bx0) * (2 / 3))) / 2, byT - bh / 2]}
          tex={String.raw`\tfrac{2}{3}`}
          size={FONT_LABEL}
          anchor="middle"
        />
        <Tex
          at={[(bx0 + (bx1 - bx0) * (2 / 3) + bx1) / 2, byT - bh / 2]}
          tex={String.raw`\tfrac{1}{3}`}
          size={FONT_LABEL}
          anchor="middle"
          opacity={OPACITY.dim}
        />
        <Label
          at={[bx0 + (bx1 - bx0) / 3, byT - bh - 0.13]}
          size={FONT_TINY}
          anchor="middle"
          opacity={OPACITY.dim}
        >
          TRANSLATION ½MV²
        </Label>
        <Label
          at={[bx0 + (bx1 - bx0) * (5 / 6), byT - bh - 0.13]}
          size={FONT_TINY}
          anchor="middle"
          opacity={OPACITY.faint}
        >
          SPIN ¼MV²
        </Label>

        {/* the rolling drum: cycloid trail + two spokes (spin tied to φ = s/b) */}
        <Polyline points={trail} opacity={OPACITY.faint} />
        <CircleSh cx={ctr[0]} cy={ctr[1]} r={b} opacity={OPACITY.fg} />
        <Polyline points={[ctr, rim]} opacity={OPACITY.dim} />
        <Polyline points={[ctr, rim2]} opacity={OPACITY.faint} />
        <Dot x={rim[0]} y={rim[1]} r={3.5} opacity={OPACITY.accent} />

        {/* (1) FORCE LAW: gravity component (centre) − friction (contact) */}
        {/* gravity component pulls the centre down-plane */}
        <Arrow
          from={ctr}
          to={[ctr[0] + u[0] * 0.95, ctr[1] + u[1] * 0.95]}
          opacity={OPACITY.fg}
          strokeWidth={2.5}
        />
        <Tex
          at={[ctr[0] + u[0] * 0.95, ctr[1] + u[1] * 0.95]}
          dx={4}
          dy={13}
          tex={String.raw`Mg\sin\theta`}
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        {/* static friction UP the plane at the contact point; the arrow carries
            the short symbol — the formula lives in the force-law column so the
            label can never leave the frame at roll start */}
        <Arrow
          from={C}
          to={[C[0] - u[0] * 0.62, C[1] - u[1] * 0.62]}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
        />
        <Tex
          at={[C[0] - u[0] * 0.62, C[1] - u[1] * 0.62]}
          dx={-3}
          dy={-6}
          tex={String.raw`f`}
          size={FONT_SMALL}
          anchor="end"
          opacity={OPACITY.accent}
        />
        {/* normal reaction (no torque, no work) */}
        <Arrow from={C} to={[C[0] + n[0] * 0.55, C[1] + n[1] * 0.55]} opacity={OPACITY.faint} />
        <Tex
          at={[C[0] + n[0] * 0.55, C[1] + n[1] * 0.55]}
          dx={4}
          tex={String.raw`N`}
          size={FONT_SMALL}
          opacity={OPACITY.faint}
        />
        <Dot x={C[0]} y={C[1]} r={2.5} opacity={OPACITY.accent} />

        {/* (2) TORQUE LAW + no-slip readout (lower-left text column) */}
        <Label at={[-0.8, -1.18]} size={FONT_SMALL} opacity={OPACITY.dim}>
          FORCE LAW
        </Label>
        <Tex
          at={[-0.8, -1.44]}
          tex={String.raw`Ma = Mg\sin\theta - f`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.8, -1.68]}
          tex={String.raw`f=\tfrac{1}{3}Mg\sin\theta`}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Label at={[-0.8, -1.94]} size={FONT_SMALL} opacity={OPACITY.dim}>
          TORQUE LAW · NO SLIP
        </Label>
        <Tex
          at={[-0.8, -2.18]}
          tex={String.raw`fb = I\alpha,\;\; b\omega = v = ${v.toFixed(2)}\;\mathrm{m/s}`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.8, -2.46]}
          tex={String.raw`\dfrac{1}{1+I/Mb^{2}}=\dfrac{1}{1+\tfrac12}=\tfrac{2}{3}`}
          size={FONT_SMALL}
          opacity={OPACITY.faint}
        />
      </Plot>
      <Slider
        label="ANGLE θ"
        value={angDeg}
        min={12}
        max={28}
        step={1}
        onChange={d => {
          setAngDeg(d)
          ctl.reset()
        }}
        format={d => `${d.toFixed(0)}°`}
      />
      <PlayPause
        playing={ctl.playing}
        onToggle={() => ctl.setPlaying(p => !p)}
        onReset={ctl.reset}
      />
    </div>
  )
}

// 01.5.10 Bohr atom (orbits + energy-level diagram)
// One coupled scene. Left: quantized orbits drawn at r_n = n^2·a0 (1 : 4 : 9),
// proven by a radial spoke ticked at a0 / 4a0 / 9a0. The electron orbits with a
// tangential velocity vector and a live L = nℏ readout; faster on the inner
// orbit (v ∝ 1/n). Right: the term diagram E_n = -13.6/n^2 eV, levels crowding
// toward 0. On the n=3 → n=2 jump a wavy photon is emitted that physically
// bridges the orbit collapse to the ladder transition: same event, both
// panels: carrying the real Balmer-α energy 1.89 eV / 656 nm (Hα).
export function Amr_BohrAtom() {
  const t = useAnimationTime(true, 1)
  const XL = 0
  const a0 = 0.3
  const radii = [a0, a0 * 4, a0 * 9] // r_n = n²a₀ → 1:4:9

  // electron on n=2 orbit; ω₂ = ω₁/8 (T ∝ n³)
  const spin = t * 1.8
  const r2 = radii[1]
  const ex = XL + r2 * Math.cos(spin),
    ey = r2 * Math.sin(spin)
  const tang = [-Math.sin(spin), Math.cos(spin)]
  const vScale = 0.55

  const th = (128 * Math.PI) / 180
  const sdx = Math.cos(th),
    sdy = Math.sin(th)
  const rLab = ['a_0', '4a_0', '9a_0']

  const thN = (-33 * Math.PI) / 180
  const ndx = Math.cos(thN),
    ndy = Math.sin(thN)

  return (
    <Plot xRange={[-3.5, 3.5]} yRange={[-3.9, 3.5]} width={520} height={548}>
      <Tex at={[-3.4, 3.38]} tex={`L_n = n\\hbar,\\quad r_n = n^2 a_0`} size={FONT_LABEL} />

      {radii.map((r, i) => (
        <CircleSh
          key={`o${i}`}
          cx={XL}
          cy={0}
          r={r}
          opacity={i === 1 ? OPACITY.fg : OPACITY.faint}
          dash="3 5"
        />
      ))}

      <Polyline
        points={[
          [XL, 0],
          [XL + radii[2] * sdx, radii[2] * sdy]
        ]}
        opacity={OPACITY.faint}
      />
      {radii.map((r, i) => {
        const cx = XL + r * sdx,
          cy = r * sdy
        const tx = -sdy * 0.13,
          ty = sdx * 0.13
        return (
          <Polyline
            key={`tk${i}`}
            points={[
              [cx - tx, cy - ty],
              [cx + tx, cy + ty]
            ]}
            opacity={OPACITY.dim}
          />
        )
      })}
      {radii.map((r, i) => (
        <Tex
          key={`rl${i}`}
          at={[XL + r * sdx, r * sdy]}
          dx={-7}
          dy={i === 0 ? -7 : 0}
          anchor="end"
          tex={rLab[i]}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      ))}

      {radii.map((r, i) => (
        <Tex
          key={`nl${i}`}
          at={[XL + r * ndx, r * ndy]}
          dx={5}
          dy={2}
          tex={`n=${i + 1}`}
          size={FONT_SMALL}
          opacity={i === 1 ? OPACITY.fg : OPACITY.dim}
        />
      ))}

      <Dot x={XL} y={0} r={5} />
      <Tex at={[XL, 0]} dx={9} dy={-4} tex={`+`} size={FONT_LABEL} />

      <Dot x={ex} y={ey} r={3.5} />
      <Arrow
        from={[ex, ey]}
        to={[ex + tang[0] * vScale, ey + tang[1] * vScale]}
        opacity={OPACITY.accent}
        head={5}
      />
      {/* v label rides past the arrow tip AND 0.26 radially outward, so its
          orbit-following path clears the radius tick labels (which sit inside
          the spoke, anchor="end") at every phase of the revolution */}
      <Tex
        at={[
          ex + tang[0] * (vScale + 0.3) + Math.cos(spin) * 0.26,
          ey + tang[1] * (vScale + 0.3) + Math.sin(spin) * 0.26
        ]}
        anchor="middle"
        tex={`v`}
        size={FONT_SMALL}
        opacity={OPACITY.accent}
      />

      <Label at={[XL, -3.35]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
        ANGULAR MOMENTUM
      </Label>
      <Tex at={[XL, -3.68]} anchor="middle" tex={`L = 2\\hbar`} size={FONT_LABEL} />
    </Plot>
  )
}

// 01.5.11 Chasles two-mass rod
// Chasles' theorem made visible: the proof is in the traces. The CM glides
// along a straight line (translation); each mass winds a trochoid about that
// line (rotation about the CM). Position is exact analytic kinematics -
//   x_c = X0 + c·φ,   m1,2 = x_c ∓ L(cos φ, sin φ),
// so each mass path is the literal locus, and its instantaneous velocity is
// the derivative v = v_cm + ω×r', drawn head-to-tail at the live mass.
export function Amr_ChaslesRod() {
  const t = useAnimationTime(true, 1)
  const [c, setC] = useState(0.45) // CM advance per radian of spin (x_c = X0 + c·φ)
  const L = 0.7 // half-rod length = rotation radius |r'|
  const X0 = -2.3 // CM start
  const PHI_MAX = 2 * Math.PI // one revolution across the panel
  const vs = 0.7 // velocity-arrow scale (drawn length per unit speed)

  const m1Of = ph => [X0 + c * ph - L * Math.cos(ph), -L * Math.sin(ph)]
  const m2Of = ph => [X0 + c * ph + L * Math.cos(ph), L * Math.sin(ph)]

  // Full computed loci (static): straight CM line + two trochoid mass paths.
  const cmLine = useMemo(
    () => [
      [X0, 0],
      [X0 + c * PHI_MAX, 0]
    ],
    [c]
  )
  const trace1 = useMemo(() => {
    const a = []
    for (let k = 0; k <= 240; k++) a.push(m1Of((k / 240) * PHI_MAX))
    return a
  }, [c])
  const trace2 = useMemo(() => {
    const a = []
    for (let k = 0; k <= 240; k++) a.push(m2Of((k / 240) * PHI_MAX))
    return a
  }, [c])

  // Live state. φ̇ = 1 ⇒ ω = 1 (CCW) and v_cm = (c, 0).
  const ph = (t * 1.0) % PHI_MAX
  const xc = X0 + c * ph
  const m1 = m1Of(ph)
  const m2 = m2Of(ph)

  // v = v_cm + ω×r' : shared translation, opposite rotation terms.
  const vcm = [vs * c, 0]
  const rot1 = [vs * L * Math.sin(ph), -vs * L * Math.cos(ph)] // ω×r'₁
  const rot2 = [-vs * L * Math.sin(ph), vs * L * Math.cos(ph)] // ω×r'₂
  // Instantaneous center of rotation: v = 0 at cm + (0, c): the body spins
  // about this gliding pivot at this instant.
  const icr = [xc, c]

  const arcR = 0.4
  const aEnd = ph + 1.6

  const decomp = (m, rot) => {
    const transTip = [m[0] + vcm[0], m[1] + vcm[1]]
    const totalTip = [transTip[0] + rot[0], transTip[1] + rot[1]]
    return { transTip, totalTip }
  }
  const d1 = decomp(m1, rot1)
  const d2 = decomp(m2, rot2)

  return (
    <div>
      {/* Uniform scale: 648/6.4 ≈ 304/3.0 ≈ 101 px/u — the trochoids keep
          their true shape. Moving-frame texts live in the caption: any fixed
          in-canvas label is eventually run over by the rod or a mass. */}
      <Plot xRange={[-2.9, 3.5]} yRange={[-1.35, 1.65]} width={680} height={336}>
        <Tex
          at={[0.3, 1.5]}
          anchor="middle"
          tex={`\\mathbf{v}_P = \\mathbf{v}_{cm} + \\boldsymbol{\\omega}\\times\\mathbf{r}'`}
          size={FONT_TEX}
        />

        {/* computed loci: faint background layer */}
        <Polyline points={trace1} opacity={OPACITY.faint} />
        <Polyline points={trace2} opacity={OPACITY.faint} />
        <Polyline points={cmLine} opacity={OPACITY.faint} dash="2 4" />

        {/* instantaneous center of rotation + spokes to each mass */}
        <Polyline points={[icr, m1]} opacity={OPACITY.faint} dash="2 3" />
        <Polyline points={[icr, m2]} opacity={OPACITY.faint} dash="2 3" />
        <Dot x={icr[0]} y={icr[1]} r={3.5} fill={false} opacity={OPACITY.dim} />

        {/* live rigid body */}
        <Polyline points={[m1, m2]} opacity={OPACITY.fg} strokeWidth={1.5} />
        <Dot x={m1[0]} y={m1[1]} r={5} />
        <Dot x={m2[0]} y={m2[1]} r={5} />
        <Tex
          at={m1}
          dx={-6}
          dy={4}
          anchor="end"
          tex={`m_1`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex at={m2} dx={6} dy={4} tex={`m_2`} size={FONT_SMALL} opacity={OPACITY.dim} />
        <Dot x={xc} y={0} r={3} fill={false} />
        <Tex
          at={[xc, 0]}
          dx={4}
          dy={13}
          tex={`\\text{cm}`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />

        {/* rotation about the CM */}
        <Parametric
          xy={a => [xc + arcR * Math.cos(a), arcR * Math.sin(a)]}
          t={[ph, aEnd]}
          opacity={OPACITY.dim}
        />
        <Arrow
          from={[xc + arcR * Math.cos(aEnd - 0.22), arcR * Math.sin(aEnd - 0.22)]}
          to={[xc + arcR * Math.cos(aEnd), arcR * Math.sin(aEnd)]}
          opacity={OPACITY.dim}
          head={5}
        />
        {/* ω sense is shown by the arc's arrowhead; the symbol lives in the
            readout line (ω = 1) — an orbiting ω label crosses the inst.-centre
            marker whenever c ≈ arc radius */}

        {/* velocity decomposition at BOTH masses, head-to-tail — legs are
            identified by the caption legend (weight/opacity), not by roaming
            labels, which inevitably cross the rod or traces at some phase */}
        <Arrow from={m1} to={d1.transTip} opacity={OPACITY.accent} head={5} />
        <Arrow from={d1.transTip} to={d1.totalTip} opacity={OPACITY.faint} head={5} />
        <Arrow from={m1} to={d1.totalTip} opacity={OPACITY.fg} head={6} strokeWidth={2.0} />

        <Arrow from={m2} to={d2.transTip} opacity={OPACITY.accent} head={5} />
        <Arrow from={d2.transTip} to={d2.totalTip} opacity={OPACITY.faint} head={5} />
        <Arrow from={m2} to={d2.totalTip} opacity={OPACITY.fg} head={6} strokeWidth={2.0} />

        <Tex
          at={[-2.85, -1.2]}
          anchor="start"
          tex={`\\mathbf{v}_{cm}=(${c.toFixed(2)},0),\\ \\ \\omega = 1`}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <VizCaption>
        accent: shared v_cm · faint leg: ω×r′ · bold: total v at each mass · faint loops: trochoid
        mass paths · dashed: straight cm path · ○ instantaneous centre (v = 0)
      </VizCaption>
      <Slider
        label="c · cm advance/turn"
        value={c}
        min={0}
        max={0.7}
        step={0.01}
        onChange={setC}
        format={v => (v === 0 ? '0 · pure spin' : v.toFixed(2))}
      />
    </div>
  )
}

// 01.5.12 Kepler equal areas (areal velocity)
// Under a central force tau = 0, so L is constant and dA/dt = L/2m is constant.
// The whole orbit is sliced into N sectors of EQUAL TIME by stepping the mean
// anomaly M = n*t in equal increments and solving Kepler's equation E - e sinE
// = M for each boundary. Every sector then encloses the same area (= pi*a*b/N),
// checked live by the shoelace formula and shown for the perihelion vs aphelion
// slice. The equal-time boundary marks bunch up at aphelion (slow) and spread
// apart at perihelion (fast); the body races the wide slices and crawls the
// narrow ones, making "equal area in equal time" visibly computed, not drawn.
export function Amr_EqualAreas() {
  const t = useAnimationTime(true, 1)
  const [e, setE] = useState(0.6)
  const a = 2.4
  const N = 12
  const b = a * Math.sqrt(1 - e * e)
  const solveE = M => {
    let E = M
    for (let i = 0; i < 8; i++) E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E))
    return E
  }
  const pos = M => {
    const E = solveE(M)
    return [a * (Math.cos(E) - e), b * Math.sin(E)]
  }
  // shoelace area of a closed polygon (apex at the Sun)
  const polyArea = pts => {
    let s = 0
    for (let i = 0; i < pts.length - 1; i++)
      s += pts[i][0] * pts[i + 1][1] - pts[i + 1][0] * pts[i][1]
    return Math.abs(s) / 2
  }
  const ellipse = useMemo(() => {
    const p = []
    for (let i = 0; i <= 160; i++) {
      const E = (i / 160) * 2 * Math.PI
      p.push([a * (Math.cos(E) - e), b * Math.sin(E)])
    }
    return p
  }, [a, b, e])
  // N equal-time sectors: equal step in mean anomaly => equal step in time.
  // sub = 120 boundary samples per sector keep the shoelace discretization
  // error ~1e-5, so the displayed spread reflects the physics (exact equality),
  // not the sampling.
  const sectors = useMemo(() => {
    const step = (2 * Math.PI) / N
    const sub = 120
    const out = []
    for (let k = 0; k < N; k++) {
      const pts = [[0, 0]]
      for (let i = 0; i <= sub; i++) pts.push(pos(k * step + (step * i) / sub))
      pts.push([0, 0])
      out.push({ k, pts, area: polyArea(pts) })
    }
    return out
  }, [a, b, e])
  // equal-time boundary positions on the orbit (these mark equal clock ticks)
  const ticks = useMemo(() => {
    const step = (2 * Math.PI) / N
    return Array.from({ length: N }, (_, k) => pos(k * step))
  }, [a, b, e])
  const areas = sectors.map(s => s.area)
  const Amean = areas.reduce((s, v) => s + v, 0) / N
  const Aspread = Math.max(...areas) - Math.min(...areas)
  const step = (2 * Math.PI) / N
  // cumulative swept area at each equal-time boundary: a straight ramp
  const cum = [0]
  for (let k = 0; k < N; k++) cum.push(cum[k] + areas[k])
  const total = cum[N]
  const ramp = cum.map((A, k) => [k * step, A])
  const M = (t * 0.55) % (2 * Math.PI)
  const curK = Math.floor(M / step) % N
  // live measured swept area from perihelion to the body (shoelace)
  const sweptNow = (() => {
    const pts = [[0, 0]]
    const steps = Math.max(2, Math.round((M / (2 * Math.PI)) * 220))
    for (let i = 0; i <= steps; i++) pts.push(pos((M * i) / steps))
    pts.push([0, 0])
    return polyArea(pts)
  })()
  const body = pos(M)
  const peri = pos(0)
  const aph = pos(Math.PI)
  // Frame tracks the geometry: x-extent of the orbit is [-a(1+e), a(1-e)],
  // plus a fixed 1.05-unit margin each side sized for the apse labels
  // (total span 2a + 2.1, constant, so the scale never jumps with e).
  const xMin = -a * (1 + e) - 1.05
  const xMax = a * (1 - e) + 1.05
  // Uniform scale: 608px / 6.9u = 88.1 px/u horizontally, 468px / 5.3u =
  // 88.3 px/u vertically, the drawn ellipse carries the true eccentricity.
  return (
    <div>
      <Plot xRange={[xMin, xMax]} yRange={[-2.65, 2.65]} width={640} height={500}>
        {/* equal-time sectors: alternating fill, current slice lit */}
        {sectors.map(s => (
          <Polyline
            key={s.k}
            points={s.pts}
            closed
            opacity={s.k === curK ? OPACITY.accent : OPACITY.faint}
            fillOpacity={s.k === curK ? 0.34 : s.k % 2 === 0 ? 0.16 : 0.06}
          />
        ))}
        {/* the orbit */}
        <Polyline points={ellipse} closed opacity={OPACITY.dim} />
        {/* equal-clock-tick marks: bunch at aphelion, spread at perihelion */}
        {ticks.map((p, i) => (
          <Dot key={`tk${i}`} x={p[0]} y={p[1]} r={2.2} opacity={OPACITY.dim} />
        ))}
        {/* live radius vector + planet */}
        <Polyline points={[[0, 0], body]} opacity={OPACITY.fg} strokeWidth={1.4} />
        <Dot x={0} y={0} r={4} />
        <Dot x={body[0]} y={body[1]} r={4} />
        {/* apse markers */}
        <Label at={peri} dx={6} dy={16} size={FONT_TINY} opacity={OPACITY.accent}>
          perihelion · fast
        </Label>
        <Label at={aph} dx={-6} dy={16} size={FONT_TINY} anchor="end" opacity={OPACITY.accent}>
          aphelion · slow
        </Label>
        <Label at={[0, 0]} dx={9} dy={-8} size={FONT_SMALL} opacity={OPACITY.dim}>
          Sun
        </Label>
        {/* law + live equal-area proof — longer line on top where the orbit
            apex (b ≤ 2.4) never reaches; both verified clear of the curve at
            the extreme eccentricities of the slider */}
        <Tex
          at={[xMin + 0.1, 2.45]}
          tex={`\\text{all 12 sectors: } A_k = ${Amean.toFixed(3)}\\ (\\pm ${Aspread.toExponential(0)})`}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[xMin + 0.1, 1.9]}
          tex={`\\dfrac{dA}{dt} = \\dfrac{L_z}{2m} = \\text{const}`}
          size={FONT_LABEL}
        />
      </Plot>
      <VizCaption>
        12 sectors, equal time each · ticks crowd at aphelion, spread at perihelion
      </VizCaption>

      {/* A(t): swept area accumulates as a straight ramp: dA/dt is constant */}
      <Plot xRange={[0, 2 * Math.PI]} yRange={[0, total * 1.1]} width={640} height={150}>
        <Polyline
          points={[
            [0, 0],
            [2 * Math.PI, total]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={1.4}
        />
        {ramp.map(([x, y], k) => (
          <Dot key={k} x={x} y={y} r={2.6} opacity={OPACITY.accent} />
        ))}
        <Polyline
          points={[
            [M, 0],
            [M, sweptNow]
          ]}
          opacity={OPACITY.faint}
          dash="2 3"
        />
        <Dot x={M} y={sweptNow} r={4} opacity={OPACITY.fg} />
        <Tex
          at={[0.12, total * 1.0]}
          anchor="start"
          tex={`A(t)=\\tfrac{L}{2m}\\,t`}
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[2 * Math.PI - 0.1, total * 0.12]}
          anchor="end"
          tex={`t`}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label at={[0.12, total * 0.12]} size={FONT_TINY} opacity={OPACITY.dim}>
          swept area · measured dots land on the line
        </Label>
      </Plot>

      <Slider
        label="eccentricity"
        value={e}
        min={0.05}
        max={0.82}
        step={0.01}
        onChange={setE}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}

export default function AngularMomentumAndRotation() {
  const config = {
    cssPrefix: 'amr',
    documentTitle: 'Angular Momentum and Fixed-Axis Rotation - AETHER',
    learning: {
      groupTitle: 'Newtonian Mechanics',
      category: 'Module 6',
      title: 'Angular Momentum and Fixed-Axis Rotation',
      subtitle:
        'Three quantities describe rotation. Angular momentum measures how much a body is turning about a chosen point. Torque drives changes in that turning. Moment of inertia sets how hard a body is to spin up. Together they predict every rolling, swinging, and orbiting motion, from a falling yo-yo to a hydrogen atom.',
      sections: [
        <>
          <h2>What Angular Momentum Means</h2>
          <p>
            Angular momentum is the rotational counterpart of linear momentum. For one particle it
            is the cross product of its position and its momentum, taken about a chosen reference
            point. A cross product takes two vectors and gives a third vector at right angles to
            both. That single construction is what lets Newton's law carry over to rotation.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`A yo-yo falls while a string unwinds from its axle. Why can you not solve this with $F = ma$ on the center of mass alone?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The center of the yo-yo drops while the body spins about its own axle. The linear
                law tracks only the dropping. To pin down the spin, and the tension that connects
                the two, you need a separate rotational law.
              </p>
            </details>
          </div>
          <p>
            A falling yo-yo makes the issue concrete. Hold the string at your finger and let go: the
            center of the yo-yo drops, and the body spins about its own axle as the string pays out.
            One law for translation will not pin down both motions, because the string tension and
            the spin rate are linked through the geometry.
          </p>
          <p>
            Real bodies are made of many particles, but we never have to track them individually.
            Any small motion of a rigid body splits cleanly into a translation of its center of mass
            plus a rotation about that center. This is Chasles' theorem, proved at the end of the
            module. The split works because rigid distances are fixed: once you subtract the common
            motion of the center of mass, only a rigid rotation can remain.
          </p>
          <p>
            Three new quantities mirror the linear ones. Torque plays the role of force, angular
            momentum the role of linear momentum, and moment of inertia the role of mass. The
            Newton-style laws then carry over directly.
          </p>
          <VizFigure title="L = r × p geometry" size="body" aspect="auto">
            <Amr_AngMomGeom />
          </VizFigure>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Linear momentum</span>
              <p>{`Equal to $m\\mathbf{v}$. The same vector at every origin.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Angular momentum</span>
              <p>{`Equal to $\\mathbf{r} \\times \\mathbf{p}$. Different at every origin, because $\\mathbf{r}$ is measured from there.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Defining Angular Momentum of a Particle</h2>
          <p>The angular momentum of a particle around an origin is</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$$`}</span>
          </div>
          <p>{`Here $\\mathbf{r}$ is the vector from the origin to the particle, and $\\mathbf{p} = m\\mathbf{v}$ is its linear momentum. The SI units are $\\text{kg}\\,\\text{m}^2/\\text{s}$. The cross product points perpendicular to the plane spanned by $\\mathbf{r}$ and $\\mathbf{p}$, with the right-hand rule fixing the sign. To use the right-hand rule, point your fingers along $\\mathbf{r}$, curl them toward $\\mathbf{p}$, and your thumb points along $\\mathbf{L}$.`}</p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A block slides in a straight line at constant speed. Can its angular momentum be
              nonzero about some origin?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Yes. If the origin sits off the line of motion at perpendicular distance $\\ell$, then $L = m\\ell v$. Only an origin on the line gives zero, because there $\\mathbf{r}$ and $\\mathbf{v}$ are parallel and the cross product collapses.`}</p>
            </details>
          </div>
          <p>{`For motion in the $xy$ plane $\\mathbf{L}$ points along $\\pm \\hat{\\mathbf{k}}$: counterclockwise motion gives $+L_z$, clockwise gives $-L_z$.`}</p>

          <h3>{`Three ways to compute $L_z$`}</h3>
          <p>{`In a plane the same number $L_z$ comes out three ways. Use whichever the geometry hands you for free.`}</p>
          <p>
            <strong>By angle.</strong>
          </p>
          <div className="lrn-eq">
            <span>{`$$L_z = r p \\sin\\phi$$`}</span>
          </div>
          <p>{`with $\\phi$ the angle between $\\mathbf{r}$ and $\\mathbf{p}$.`}</p>
          <p>
            <strong>By lever arm.</strong>{' '}
            {`Drop a perpendicular from the origin to the line the particle moves along (this perpendicular distance is the lever arm), and call its length $r_\\perp$. Then`}
          </p>
          <div className="lrn-eq">
            <span>{`$$L_z = r_\\perp p$$`}</span>
          </div>
          <p>
            <strong>By split momentum.</strong>{' '}
            {`Decompose $\\mathbf{p}$ into a piece along $\\mathbf{r}$ and a piece $p_\\perp$ across it. The parallel piece carries no angular momentum, leaving`}
          </p>
          <div className="lrn-eq">
            <span>{`$$L_z = r p_\\perp$$`}</span>
          </div>
          <p>{`All three forms are the same identity, $L_z = r p \\sin\\phi$, with the sine absorbed into a different factor each time.`}</p>

          <h3>Component Form</h3>
          <p>In Cartesian components the cross product gives</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L} = \\begin{vmatrix} \\hat{\\mathbf{i}} & \\hat{\\mathbf{j}} & \\hat{\\mathbf{k}} \\\\ x & y & z \\\\ p_x & p_y & p_z \\end{vmatrix}$$`}</span>
          </div>
          <p>{`For motion in the $xy$ plane this reduces to`}</p>
          <div className="lrn-eq">
            <span>{`$$L_z = x p_y - y p_x$$`}</span>
          </div>
          <p>This form is the cleanest one in code or with raw coordinates.</p>

          <h3>Origin Dependence</h3>
          <p>{`Shift the origin and $\\mathbf{r}$ changes, so $\\mathbf{L}$ changes too. Always name the origin before quoting an angular momentum.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Force</span>
              <p>
                Same vector at every origin. The push on the body does not care where you choose to
                measure positions from.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Torque</span>
              <p>{`$\\mathbf{r} \\times \\mathbf{F}$. Move the origin and the lever arm changes, so the same force gives a different torque.`}</p>
            </div>
          </div>

          <h3>Example: a sliding block</h3>
          <p>{`A block slides freely along the $x$ axis with velocity $v\\hat{\\mathbf{i}}$. Pick origin $A$ on the line of motion. Then $\\mathbf{r}$ and $\\mathbf{v}$ are parallel, the cross product vanishes, and`}</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L}_A = 0$$`}</span>
          </div>
          <p>{`Pick origin $B$ instead at perpendicular distance $\\ell$ from the line. The lever arm is $\\ell$, so`}</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L}_B = m\\ell v\\,\\hat{\\mathbf{k}}$$`}</span>
          </div>
          <p>
            The same block, the same motion, two different angular momenta. Both are correct: each
            is the angular momentum about its own origin.
          </p>
          <VizFigure title="Sliding block" size="body" aspect="auto">
            <Amr_SlidingBlock />
          </VizFigure>

          <h3>Example: the conical pendulum</h3>
          <p>{`A bob of mass $M$ swings in a horizontal circle of radius $r$, suspended by a string of length $\\ell$ at angle $\\alpha$ from the vertical. The bob's angular speed is $\\omega$, so its tangential speed is $v = r\\omega$.`}</p>
          <p>{`The tilt angle $\\alpha$ itself, and why the circle only exists above a critical spin rate, come from force balance on the Newton's laws page. Here the question is different: what is this bob's angular momentum, and how much does the answer depend on where you put the origin?`}</p>
          <p>{`Pick origin $A$ at the center of the horizontal circle, in the plane of the orbit. The position $\\mathbf{r}$ and velocity $\\mathbf{v}$ are perpendicular and both lie in the plane, giving`}</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L}_A = M r^2 \\omega\\,\\hat{\\mathbf{k}}$$`}</span>
          </div>
          <p>
            This vector points up along the symmetry axis, and is constant in both size and
            direction.
          </p>
          <p>{`Now move the origin to $B$ at the pivot above the circle. The new position $\\mathbf{r}_B$ has length $\\ell$ and stays perpendicular to $\\mathbf{v}$, so`}</p>
          <div className="lrn-eq">
            <span>{`$$|\\mathbf{L}_B| = M\\ell r \\omega$$`}</span>
          </div>
          <p>{`The size is constant, but $\\mathbf{r}_B$ tilts toward a moving bob, so $\\mathbf{L}_B$ itself sweeps out a cone. Only its $z$ component stays put. Same physical motion, two very different vectors.`}</p>
          <VizFigure title="Conical pendulum" size="body" aspect="auto">
            <Amr_ConicalPendulum />
          </VizFigure>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Origin A (circle center)</span>
              <p>{`$\\mathbf{L}_A = M r^2 \\omega \\hat{\\mathbf{k}}$. Constant in size and direction; points along the symmetry axis.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Origin B (pivot)</span>
              <p>{`$|\\mathbf{L}_B| = M\\ell r\\omega$. Constant in size; direction traces a cone with the bob.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Torque and the Rotation Law</h2>
          <p>{`Torque is the rotational counterpart of force, the same cross product you first met as a worked example of $\\mathbf{r} \\times \\mathbf{F}$. For one force $\\mathbf{F}$ applied at position $\\mathbf{r}$,`}</p>
          <div className="lrn-eq">
            <span>{`$$\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$$`}</span>
          </div>
          <VizFigure title="Torque & lever arm" size="body" aspect="auto">
            <Amr_TorqueLever />
          </VizFigure>
          <p>
            Like angular momentum, torque depends on the origin. The same force can have a large
            torque about one point and zero torque about another.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two equal forces push on a wheel from opposite sides in opposite directions. The total
              force is zero. Is the torque zero?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. The forces cancel as a sum, but their torques add because they act along
                different lines. Such a pair is called a couple, and it is the cleanest example of
                zero net force with nonzero net torque.
              </p>
            </details>
          </div>

          <h3>Three cases</h3>
          <p>
            <strong>Torque without net force.</strong> Push opposite sides of a free wheel with
            equal forces in opposite directions. The pushes cancel, but the wheel spins up because
            each force has its own lever arm and the two torques add.
          </p>
          <p>
            <strong>Force without net torque.</strong> Push a block straight through its center
            along its line of motion. It accelerates without spinning, because the line of force
            passes through the chosen reference point.
          </p>
          <p>
            <strong>Both at once.</strong> Push a hockey stick off-center on the ice. The center of
            mass slides and the stick spins at the same time.
          </p>

          <h3>The rotation law</h3>
          <p>{`Differentiate $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$ in time:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{d\\mathbf{L}}{dt} = \\frac{d\\mathbf{r}}{dt} \\times \\mathbf{p} + \\mathbf{r} \\times \\frac{d\\mathbf{p}}{dt}$$`}</span>
          </div>
          <p>{`The first term is $\\mathbf{v} \\times m\\mathbf{v}$, which is zero because the cross product of a vector with itself vanishes. The second term uses Newton's second law $\\frac{d\\mathbf{p}}{dt} = \\mathbf{F}$, leaving`}</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\boxed{\\boldsymbol{\\tau} = \\frac{d\\mathbf{L}}{dt}}$$`}</span>
          </div>
          <p>{`The exact rotational mirror of $\\mathbf{F} = \\frac{d\\mathbf{p}}{dt}$. For a single particle the content is the same as Newton's law; the rotational form earns its keep when summed over a body of many particles, where many internal forces drop out.`}</p>
          <p>{`If $\\boldsymbol{\\tau} = 0$ then $\\mathbf{L}$ is constant: angular momentum is conserved.`}</p>

          <h3>The law of equal areas</h3>
          <p>{`A central force points along $\\mathbf{r}$, so its torque about the force center is zero and $\\mathbf{L}$ stays fixed. Written in this lesson's notation, the rate at which the position vector sweeps area is`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{dA}{dt} = \\frac{L_z}{2m}$$`}</span>
          </div>
          <p>
            Constant angular momentum therefore means constant areal speed. This is Kepler's second
            law, and it holds for any central force, not just gravity. The full sweep-rate
            derivation and the planetary application come with central-force motion in a later
            topic; here the corollary is all the capture problem below needs.
          </p>
          <VizFigure title="Kepler equal areas" size="body" aspect="auto">
            <Amr_EqualAreas />
          </VizFigure>

          <h3>The capture cross section</h3>
          <p>{`A spaceship far from a planet fires a package at speed $v_0$ aimed near a planet of radius $R$ and mass $M$. Let $b'$ be the impact parameter, the perpendicular distance from the planet's center to the package's straight-line trajectory at infinity. Gravity bends the path inward, so the package can hit the planet even when it would have missed in straight-line geometry. The effective target area is therefore larger than the geometric one $A_0 = \\pi R^2$.`}</p>
          <p>{`Conserve energy between infinity and the grazing radius $r = R$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tfrac{1}{2} m v_0^2 = \\tfrac{1}{2} m v_R^2 - \\frac{m M G}{R}$$`}</span>
          </div>
          <p>Conserve angular momentum:</p>
          <div className="lrn-eq">
            <span>{`$$m b' v_0 = m R v_R$$`}</span>
          </div>
          <p>{`Solve for $b'^2$ and multiply by $\\pi$:`}</p>
          <div className="lrn-eq">
            <span>{`$$A_{\\text{eff}} = A_0\\left(1 + \\frac{2GM}{R\\, v_0^2}\\right) = A_0\\left(1 - \\frac{U(R)}{E}\\right)$$`}</span>
          </div>
          <p>{`The cross section diverges as the launch energy $E \\to 0$. You cannot miss a planet from rest. Physically, a slow projectile lingers near the planet long enough for gravity to pull it in from any direction.`}</p>
          <p>{`This is one gravitational special case. The general tool of cross sections and impact parameters, for any force law, comes in a later topic. Here you need only this result, and it follows from the two conservation laws alone.`}</p>

          <h3>Torque on a sliding block</h3>
          <p>{`A block slides in $+x$ against friction $\\mathbf{f} = -f\\hat{\\mathbf{i}}$. Pick origin $B$ at perpendicular distance $\\ell$ in $+y$ off the line of motion. The torque about $B$ is`}</p>
          <div className="lrn-eq">
            <span>{`$$\\boldsymbol{\\tau}_B = \\ell\\hat{\\mathbf{j}} \\times (-f\\hat{\\mathbf{i}}) = -\\ell f\\,\\hat{\\mathbf{k}}$$`}</span>
          </div>
          <p>{`Check it against $\\frac{d\\mathbf{L}_B}{dt}$. With $L_B = \\ell p$ along $+\\hat{\\mathbf{k}}$ and $p$ falling at rate $f$, the time derivative is $-\\ell f\\,\\hat{\\mathbf{k}}$, the same vector. The match works only because both $\\boldsymbol{\\tau}$ and $\\mathbf{L}$ are taken about the same origin; this is built into the derivation of the rotation law and cannot be relaxed.`}</p>

          <h3>Torque on the conical pendulum</h3>
          <p>{`Back to the conical pendulum. About origin $A$ in the plane of the orbit, gravity points down through the center of the circle, antiparallel to $\\mathbf{r}_A$. The torque vanishes, consistent with the constant $\\mathbf{L}_A$ found earlier.`}</p>
          <p>{`About origin $B$ at the pivot, gravity has a lever arm and the torque magnitude is`}</p>
          <div className="lrn-eq">
            <span>{`$$|\\boldsymbol{\\tau}_B| = M g \\ell \\sin\\alpha$$`}</span>
          </div>
          <p>{`pointing tangent to the bob's path. Split $\\mathbf{L}_B = \\mathbf{L}_z + \\mathbf{L}_r$. The vertical piece is the constant $\\mathbf{L}_A$ found above. The radial piece $\\mathbf{L}_r$ has fixed length $M\\ell r\\omega \\sin\\alpha$ but rotates with the bob, so it changes only by direction. Using the standard result that a vector of fixed length $A$ sweeping at rate $\\dot\\theta$ has $|\\frac{d\\mathbf{A}}{dt}| = A\\,\\dot\\theta$ perpendicular to itself, plug in $\\dot\\theta = \\omega$ and the bookkeeping reproduces $|\\boldsymbol{\\tau}_B|$ exactly.`}</p>

          <h3>Torque from gravity acts at the center of mass</h3>
          <p>{`For a body in a uniform gravity field $\\mathbf{g}$, the total torque about any point is`}</p>
          <div className="lrn-eq">
            <span>{`$$\\boldsymbol{\\tau} = \\sum_j \\mathbf{r}_j \\times m_j\\mathbf{g} = \\left(\\sum_j m_j \\mathbf{r}_j\\right) \\times \\mathbf{g} = M\\mathbf{R} \\times \\mathbf{g} = \\mathbf{R} \\times \\mathbf{W}$$`}</span>
          </div>
          <p>{`The factor pulls out because $\\mathbf{g}$ is the same at every particle, and $\\sum m_j\\mathbf{r}_j = M\\mathbf{R}$ is just the definition of the center of mass. Gravity therefore acts as if the entire weight were concentrated at $\\mathbf{R}$. The corollary: a body balances on a pivot only when the pivot sits directly below (or at) the center of mass, where $\\mathbf{R} = 0$ kills the torque.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Net force: origin-free</span>
              <p>
                The sum of forces is the same vector at every origin. It is a property of the
                loading, not the choice of reference point.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Net torque: origin-tied</span>
              <p>{`$\\sum \\mathbf{r}_j \\times \\mathbf{F}_j$. Shift the origin and every $\\mathbf{r}_j$ shifts, so the same forces give a different total torque.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>Angular Momentum and Fixed-Axis Rotation</h2>
          <p>
            A body rotates about a <em>fixed axis</em> when the direction of the spin axis is
            locked, even if the axis itself slides through space. The wheel of a car driving
            straight rotates about a fixed axis; the wheel of a car going into a wobble does not.
            With one direction locked, all the rotational geometry collapses to a single number, the
            angular speed.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>{`Take the rotation axis as the $z$ axis. For a particle in the body, in what direction does its velocity point?`}</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Tangent to the circle the particle sweeps. The velocity is perpendicular both to the axis and to the radial vector $\\boldsymbol{\\rho}_j$ that runs from the axis straight out to the particle.`}</p>
            </details>
          </div>
          <p>{`Take the axis as $\\hat{\\mathbf{k}}$, and let $\\rho_j$ be the perpendicular distance from particle $j$ to the axis. Each particle traces a circle of radius $\\rho_j$ at tangential speed`}</p>
          <div className="lrn-eq">
            <span>{`$$v_j = \\omega \\rho_j$$`}</span>
          </div>
          <p>{`The whole body shares the same $\\omega$ (that is what makes it rigid), so each particle's speed scales linearly with how far it sits from the axis.`}</p>

          <h3>{`From particles to $L_z = I\\omega$`}</h3>
          <p>{`The $z$ component of angular momentum for particle $j$ is`}</p>
          <div className="lrn-eq">
            <span>{`$$L_z(j) = m_j v_j \\rho_j = m_j \\rho_j^2 \\omega$$`}</span>
          </div>
          <p>Sum over all particles in the body:</p>
          <div className="lrn-eq">
            <span>{`$$L_z = \\sum_j m_j \\rho_j^2 \\omega = \\omega \\sum_j m_j \\rho_j^2$$`}</span>
          </div>
          <p>Define the moment of inertia about the axis as</p>
          <div className="lrn-eq">
            <span>{`$$I = \\sum_j m_j \\rho_j^2$$`}</span>
          </div>
          <p>Then</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\boxed{L_z = I\\omega}$$`}</span>
          </div>
          <p>{`Read this as a statement about the component along the rotation axis. The scalar form $L_z = I\\omega$ holds when the body turns about a fixed axis, or about a symmetry axis. For a general body spinning about a slanted axis, $\\mathbf{L}$ need not point along $\\boldsymbol{\\omega}$, and the single number $I$ grows into a moment-of-inertia tensor. That full case waits for a later topic; here every body turns about a fixed axis.`}</p>
          <p>For a continuous body the sum becomes an integral:</p>
          <div className="lrn-eq">
            <span>{`$$I = \\int \\rho^2\\, dm = \\int (x^2 + y^2)\\, w\\, dV$$`}</span>
          </div>
          <p>{`Here $w$ is the mass density. The squared distance is what makes mass far from the axis dominate the integral, by a lot. Move a kilogram from 1 m out to 2 m out and its contribution quadruples. Keep $\\rho$ (distance to the axis) distinct from $r$ (distance to the chosen origin); the two coincide only when the origin happens to lie on the axis.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$\\rho$: to the axis`}</span>
              <p>{`Perpendicular distance from a particle to the rotation axis. Enters $I = \\sum m_j \\rho_j^2$.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">{`$r$: to the origin`}</span>
              <p>{`Distance from a particle to the chosen origin. Enters $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$.`}</p>
            </div>
          </div>

          <h3>Five canonical moments of inertia</h3>
          <p>
            Five results show up everywhere downstream. Each one is a one-line application of the
            integral form.
          </p>
          <p>
            <strong>Thin hoop, axis through the center, perpendicular to the plane.</strong>{' '}
            {`Every mass element sits at radius $R$, so`}
          </p>
          <div className="lrn-eq">
            <span>{`$$I = M R^2$$`}</span>
          </div>
          <p>
            <strong>Uniform disk, axis through center, perpendicular to plane.</strong>{' '}
            {`Use polar coordinates with mass density $\\sigma = \\frac{M}{\\pi R^2}$:`}
          </p>
          <div className="lrn-eq">
            <span>{`$$I = \\int_0^R \\rho^2 (\\sigma\\, 2\\pi\\rho\\, d\\rho) = 2\\pi\\sigma \\int_0^R \\rho^3\\, d\\rho = \\tfrac{1}{2} M R^2$$`}</span>
          </div>
          <p>
            <strong>{`Uniform thin stick of length $L$, axis through midpoint, perpendicular to stick.`}</strong>{' '}
            {`Linear density is $\\frac{M}{L}$:`}
          </p>
          <div className="lrn-eq">
            <span>{`$$I = \\int_{-\\frac{L}{2}}^{\\frac{L}{2}} x^2 \\tfrac{M}{L}\\, dx = \\tfrac{1}{12} M L^2$$`}</span>
          </div>
          <p>
            <strong>Uniform thin stick, axis through one end, perpendicular to stick.</strong>{' '}
            {`Same integral but from $0$ to $L$:`}
          </p>
          <div className="lrn-eq">
            <span>{`$$I = \\int_0^L x^2 \\tfrac{M}{L}\\, dx = \\tfrac{1}{3} M L^2$$`}</span>
          </div>
          <p>
            <strong>Uniform sphere about a diameter.</strong> This needs a triple integral. The
            result is
          </p>
          <div className="lrn-eq">
            <span>{`$$I = \\tfrac{2}{5} M R^2$$`}</span>
          </div>
          <VizFigure title="Moments of Inertia" size="body" aspect="auto">
            <Amr_InertiaBuilder />
          </VizFigure>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the stick about its end have four times the moment of inertia of the stick
              about its midpoint?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>{`Compare the two integrals you just did. About the midpoint the mass runs from $-\\frac{L}{2}$ to $\\frac{L}{2}$, so each piece sits at most $\\frac{L}{2}$ from the axis. About the end the mass runs from $0$ to $L$, so far pieces now sit up to $L$ away. Because $I$ weights distance squared, the far half dominates: $\\tfrac{1}{3} M L^2$ is exactly four times $\\tfrac{1}{12} M L^2$. We will see this same jump fall out of the parallel axis theorem in the next section.`}</p>
            </details>
          </div>
        </>,

        <>
          <h2>Pure Rotation About an Axis</h2>
          <p>
            Pure rotation means the axis is fixed in space, not just fixed in direction: a flywheel
            on a stationary axle, a door swinging on its hinges. Internal torques between the body's
            own particles cancel pairwise. We take this as given here; the proof from Newton's third
            law follows in the next module.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A flywheel spins on a fixed axle under a constant external torque. How does its
              angular speed change with time?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Linearly. Constant torque on a constant moment of inertia gives constant angular acceleration $\\alpha = \\frac{\\tau}{I}$, so $\\omega(t) = \\omega_0 + \\alpha t$, the rotational analog of constant-force, constant-acceleration kinematics.`}</p>
            </details>
          </div>
          <p>{`Differentiate $L_z = I\\omega$ in time. With $I$ fixed for a rigid body about a fixed axis, only $\\omega$ varies, so`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tau = I \\frac{d\\omega}{dt} = I\\alpha$$`}</span>
          </div>
          <p>{`This is the rotational $F = ma$, with mass $\\to I$, acceleration $\\to \\alpha$, and force $\\to \\tau$. Each linear law has a rotational twin built the same way.`}</p>

          <h3>Rotational kinetic energy</h3>
          <p>{`Each particle carries $\\tfrac{1}{2} m_j v_j^2 = \\tfrac{1}{2} m_j \\rho_j^2 \\omega^2$. Sum over the body and pull the common $\\omega^2$ out:`}</p>
          <div className="lrn-eq">
            <span>{`$$K = \\tfrac{1}{2} \\omega^2 \\sum_j m_j \\rho_j^2 = \\tfrac{1}{2} I \\omega^2$$`}</span>
          </div>
          <p>{`The same swap as in the dynamics: $\\tfrac{1}{2} m v^2$ has $m \\to I$ and $v \\to \\omega$.`}</p>

          <h3>The parallel axis theorem</h3>
          <p>{`Take an axis through the center of mass and a parallel axis offset by perpendicular distance $\\ell$. If $I_0$ is the moment of inertia about the central axis and $I$ about the offset one, then`}</p>
          <div className="lrn-eq">
            <span>{`$$I = I_0 + M\\ell^2$$`}</span>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>Vector proof of the parallel axis theorem.</p>
              <ol className="lrn-list">
                <li>{`Write $\\boldsymbol{\\rho}_j = \\boldsymbol{\\rho}'_j + \\mathbf{R}_\\perp$, where $\\boldsymbol{\\rho}'_j$ is measured from the center of mass and $\\mathbf{R}_\\perp$ is the offset between axes.`}</li>
                <li>{`Square: $\\rho_j^2 = \\rho_j'^2 + 2\\boldsymbol{\\rho}'_j \\cdot \\mathbf{R}_\\perp + R_\\perp^2$.`}</li>
                <li>{`Multiply by $m_j$ and sum over $j$.`}</li>
                <li>{`Use $\\sum m_j \\boldsymbol{\\rho}'_j = 0$ to kill the cross term.`}</li>
                <li>{`Result: $I = I_0 + M\\ell^2$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>Apply the same proof to a thin stick about its end, given the central moment.</p>
              <ol className="lrn-list">
                <li>{`Start with $I_0 = \\tfrac{1}{12} M L^2$ for the central axis.`}</li>
                <li>{`The offset to the end axis is $\\ell = \\frac{L}{2}$.`}</li>
                <li>Add the offset term and simplify.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Use the parallel axis theorem to find the moment of inertia of a uniform disk about an axis at the rim, perpendicular to the disk plane.`}</p>
            </div>
          </div>
          <VizFigure title="Parallel Axis: I = I_cm + Md²" size="body" aspect="auto">
            <Amr_ParallelAxis />
          </VizFigure>
          <p>
            One central moment of inertia gives you every parallel one for free. Two checks confirm
            the formula: the stick about its end,
          </p>
          <div className="lrn-eq">
            <span>{`$$I = \\tfrac{1}{12} M L^2 + M(\\frac{L}{2})^2 = \\tfrac{1}{3} M L^2$$`}</span>
          </div>
          <p>
            matches the direct integral, and the disk about an axis at its rim, perpendicular to the
            plane,
          </p>
          <div className="lrn-eq">
            <span>{`$$I = \\tfrac{1}{2} M R^2 + M R^2 = \\tfrac{3}{2} M R^2$$`}</span>
          </div>
          <p>is what we will need shortly for the rolling wheel.</p>

          <h3>Atwood with a massive pulley</h3>
          <p>{`Two masses $M_1 > M_2$ hang over a pulley of mass $M_p$ and radius $R$, modeled as a uniform disk so $I = \\tfrac{1}{2} M_p R^2$. The string does not slip on the pulley, which forces $a = \\alpha R$. Let $T_1$ and $T_2$ be the tensions on the two sides.`}</p>
          <p>Newton's law on each mass:</p>
          <div className="lrn-eq">
            <span>{`$$M_1 g - T_1 = M_1 a$$`}</span>
            <span>{`$$T_2 - M_2 g = M_2 a$$`}</span>
          </div>
          <p>{`The rotation law on the pulley, with the two tensions providing the only torques about the axle:`}</p>
          <div className="lrn-eq">
            <span>{`$$T_1 R - T_2 R = I\\alpha = \\tfrac{1}{2} M_p R^2 \\cdot \\frac{a}{R}$$`}</span>
          </div>
          <p>Three equations, three unknowns. Eliminate the tensions:</p>
          <div className="lrn-eq">
            <span>{`$$a = \\frac{(M_1 - M_2) g}{M_1 + M_2 + \\frac{M_p}{2}}$$`}</span>
          </div>
          <p>{`The pulley adds itself to the inertia, but only at half-strength: the disk shape stores rotational kinetic energy at half the rate of a hoop, and that factor of $\\tfrac{1}{2}$ is exactly what survives the algebra.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Massless pulley</span>
              <p>{`Same tension on both sides; $a = \\frac{(M_1 - M_2)g}{M_1 + M_2}$. The pulley plays no dynamical role.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Massive pulley</span>
              <p>{`Tensions differ. The difference is the torque that spins the pulley up. The system carries an extra $\\frac{M_p}{2}$ of effective inertia, slowing the acceleration.`}</p>
            </div>
          </div>
        </>,

        <>
          <h2>The Physical Pendulum</h2>
          <p>
            A pendulum is any body free to swing about a fixed pivot under gravity. Three forms
            cover almost everything you meet: the idealized simple pendulum, an extended physical
            pendulum, and the precision-engineered Kater's pendulum. The same equation of motion
            governs all three; the only difference is what plays the role of the moment of inertia.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two pendulums have the same length but different bob shapes. Will their periods match?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                If the bob is small enough to count as a point mass on the string, no: only string
                length and gravity matter, and the periods agree. As soon as the bob has appreciable
                size, its shape changes the moment of inertia about the pivot and the periods part
                ways.
              </p>
            </details>
          </div>
          <VizFigure title="Physical pendulum" size="body" aspect="auto">
            <Amr_PhysicalPendulum />
          </VizFigure>
          <h3>The simple pendulum</h3>
          <p>{`A bob of mass $m$ hangs from a massless string of length $\\ell$, swinging at angle $\\phi$ from vertical. Gravity pulls back toward $\\phi = 0$, with torque about the pivot`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tau = -mg\\ell\\sin\\phi$$`}</span>
          </div>
          <p>{`The minus sign encodes the restoring direction. The bob is a point mass at distance $\\ell$, so $I = m\\ell^2$, and $\\tau = I\\ddot\\phi$ becomes`}</p>
          <div className="lrn-eq">
            <span>{`$$m\\ell^2\\ddot\\phi = -mg\\ell\\sin\\phi$$`}</span>
          </div>
          <p>{`Divide out the mass (gravitational and inertial $m$ cancel exactly), then apply $\\sin\\phi \\approx \\phi$ for small swings:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\ddot\\phi + \\frac{g}{\\ell}\\phi = 0$$`}</span>
          </div>
          <p>Simple harmonic motion, with period</p>
          <div className="lrn-eq">
            <span>{`$$T = 2\\pi\\sqrt{\\frac{\\ell}{g}}$$`}</span>
          </div>
          <p>
            independent of mass and amplitude. That is why every simple pendulum of the same length
            keeps the same time.
          </p>
          <h3>The physical pendulum</h3>
          <p>{`Replace the point bob with a body of mass $M$, center-of-mass distance $\\ell$ below the pivot, and moment of inertia $I_p$ about the pivot. Gravity still acts as if all the weight were at the center of mass, so the torque is $-Mg\\ell\\sin\\phi$ and the equation of motion reads`}</p>
          <div className="lrn-eq">
            <span>{`$$I_p\\ddot\\phi + Mg\\ell\\sin\\phi = 0$$`}</span>
          </div>
          <p>For small angles, the angular frequency is</p>
          <div className="lrn-eq">
            <span>{`$$\\omega = \\sqrt{\\frac{Mg\\ell}{I_p}}$$`}</span>
          </div>
          <h3>Radius of gyration</h3>
          <p>{`To compare different shapes on equal footing, define the radius of gyration about the center of mass:`}</p>
          <div className="lrn-eq">
            <span>{`$$k = \\sqrt{\\frac{I_0}{M}}$$`}</span>
          </div>
          <p>{`This packages the mass distribution into a single length, so that $I_0 = Mk^2$. The parallel axis theorem then gives $I_p = M(k^2 + \\ell^2)$, and`}</p>
          <div className="lrn-eq">
            <span>{`$$\\omega = \\sqrt{\\frac{g\\ell}{k^2 + \\ell^2}}$$`}</span>
          </div>
          <p>{`Canonical values: $k = R$ for a hoop, $k = \\frac{R}{\\sqrt{2}}$ for a disk, $k = \\sqrt{\\tfrac{2}{5}}\\,R$ for a sphere.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Simple pendulum</span>
              <p>
                All mass at the bob. Period set by string length and gravity alone; shape and mass
                are invisible.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Physical pendulum</span>
              <p>
                Mass spread over the body. Period set by both the pivot-to-CM distance and the
                radius of gyration, so both shape and pivot location change the answer.
              </p>
            </div>
          </div>
          <h3>Worked example: a swinging rod</h3>
          <p>{`Take a uniform rod of length $L = 1$ m, pivoted at one end, swinging in small arcs. Find its period. The moment of inertia about the end is $I_p = \\tfrac{1}{3} M L^2$, and the center of mass sits at $\\ell = \\frac{L}{2}$ below the pivot.`}</p>
          <p>Drop both into the angular-frequency formula. The mass cancels:</p>
          <div className="lrn-eq">
            <span>{`$$\\omega = \\sqrt{\\frac{M g\\ell}{I_p}} = \\sqrt{\\frac{M g (L/2)}{\\tfrac{1}{3} M L^2}} = \\sqrt{\\frac{3g}{2L}}$$`}</span>
          </div>
          <p>{`With $g = 9.8$ m/s$^2$ and $L = 1$ m, $\\omega = \\sqrt{\\frac{3(9.8)}{2}} \\approx 3.83$ rad/s, so`}</p>
          <div className="lrn-eq">
            <span>{`$$T = \\frac{2\\pi}{\\omega} \\approx 1.64\\text{ s}$$`}</span>
          </div>
          <p>{`A simple pendulum that keeps the same time would need length $\\ell_{eq} = \\frac{I_p}{M\\ell} = \\frac{2}{3}L \\approx 0.67$ m, shorter than the rod itself. The mass spread along the rod makes it swing faster than a point bob hung at the rod's far tip.`}</p>
          <h3>Grandfather's clock</h3>
          <p>Beyond the small-angle limit, the period gains an amplitude correction:</p>
          <div className="lrn-eq">
            <span>{`$$T = T_0\\left(1 + \\tfrac{1}{16}\\phi_0^2 + \\dots\\right)$$`}</span>
          </div>
          <p>{`Numbers for a typical clock: $T_0 = 2$ s, $\\ell = 1$ m, half-swing 4 cm, so $\\phi_0 = 4 \\times 10^{-2}$ rad. The correction is $T_0\\frac{\\phi_0^2}{16} \\approx 2 \\times 10^{-4}$ s per swing. That fixed offset can be calibrated out by adjusting the pendulum length. The real drift comes from changes in amplitude. A 10 percent change in $\\phi_0$ shifts the correction by about $4 \\times 10^{-5}$ s per swing. Over the roughly 43,200 swings in a day that builds to about 2 s. Tiny relative errors become visible because the clock counts so many periods.`}</p>
          <h3>Kater's pendulum</h3>
          <p>{`A precision trick for measuring $g$. Mount two knife-edge pivots on opposite sides of the body, at distances $\\ell_A$ and $\\ell_B$ from the center of mass. Shift mass along the rod until both pivots give the same period. Equating $\\omega = \\sqrt{\\frac{g\\ell}{k^2+\\ell^2}}$ at the two pivots:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{g\\ell_A}{k^2 + \\ell_A^2} = \\frac{g\\ell_B}{k^2 + \\ell_B^2}$$`}</span>
          </div>
          <p>Cross-multiply, and the radius of gyration falls out as</p>
          <div className="lrn-eq">
            <span>{`$$k^2 = \\ell_A \\ell_B$$`}</span>
          </div>
          <p>Substitute back into the period formula:</p>
          <div className="lrn-eq">
            <span>{`$$T = 2\\pi\\sqrt{\\frac{\\ell_A + \\ell_B}{g}}$$`}</span>
          </div>
          <p>
            The period depends only on the distance between the two knife edges, which can be
            machined and measured with high precision. The hard-to-measure shape parameters never
            enter, which is why Kater's pendulum was the standard for measuring gravity throughout
            the 19th century.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Naive physical pendulum</span>
              <p>
                Needs both the pivot-to-CM distance and the radius of gyration. Measuring these on a
                real body is messy; the errors in them limit how accurately you can pin down g.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Kater's pendulum</span>
              <p>
                Tune two pivots to share a period. The shape parameters cancel algebraically, and
                only the easily measured pivot-to-pivot distance survives.
              </p>
            </div>
          </div>
          <h3>The center of percussion</h3>
          <p>{`A door hinged at one side strikes a stop at distance $\\ell$ from the hinge. Let $\\ell'$ be the hinge-to-CM distance and $I$ the moment of inertia about the hinge. Pick`}</p>
          <div className="lrn-eq">
            <span>{`$$\\ell = \\frac{I}{M\\ell'}$$`}</span>
          </div>
          <p>{`At this distance the impulse from the stop tries to push the door sideways and to spin it about the center of mass at exactly the same rate the hinge would otherwise move. The two effects cancel, the hinge feels no impulsive force, and the door simply pivots about it. For a uniform door of width $w$, $I = \\frac{Mw^2}{3}$ and $\\ell' = \\frac{w}{2}$, giving`}</p>
          <div className="lrn-eq">
            <span>{`$$\\ell = \\tfrac{2}{3} w$$`}</span>
          </div>
          <p>
            This is the center of percussion, and it is the same point as the sweet spot of a
            baseball bat: hit the ball there and your hands feel no sting.
          </p>
        </>,

        <>
          <h2>Combined Translation and Rotation</h2>
          <p>
            Most real motion has both pieces at once: a rolling wheel slides forward and spins, a
            thrown wrench tumbles as its center of mass arcs through the air. Two laws now run in
            parallel, one for the center of mass and one for the spin about it, coupled through
            constraints such as the no-slip condition of rolling.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A wheel rolls without slipping. Is its angular momentum about a ground point the same
              as its angular momentum about its own center?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. About the center, only the spin counts. About a ground point, you also pick up
                an orbital piece from the center of mass moving past that point. The two answers
                differ by exactly that orbital term, and we will compute it shortly.
              </p>
            </details>
          </div>
          <h3>Splitting angular momentum</h3>
          <p>{`Write each particle's position as $\\mathbf{r}_j = \\mathbf{R} + \\mathbf{r}'_j$, where $\\mathbf{R}$ is the center of mass and $\\mathbf{r}'_j$ is the offset from it. Plug into`}</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L} = \\sum_j \\mathbf{r}_j \\times m_j\\dot{\\mathbf{r}}_j$$`}</span>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Spin plus orbital decomposition: expand the cross product into four pieces and
                identify which survive.
              </p>
              <ol className="lrn-list">
                <li>{`Substitute $\\mathbf{r}_j = \\mathbf{R} + \\mathbf{r}'_j$ and $\\dot{\\mathbf{r}}_j = \\mathbf{V} + \\dot{\\mathbf{r}}'_j$ into the sum.`}</li>
                <li>{`Expand the cross product to get four terms: $\\mathbf{R} \\times M\\mathbf{V}$, $\\mathbf{R} \\times \\sum m_j \\dot{\\mathbf{r}}'_j$, $(\\sum m_j \\mathbf{r}'_j) \\times \\mathbf{V}$, and $\\sum \\mathbf{r}'_j \\times m_j \\dot{\\mathbf{r}}'_j$.`}</li>
                <li>{`Use $\\sum m_j \\mathbf{r}'_j = 0$ from the definition of center of mass to kill two terms.`}</li>
                <li>{`Result: $\\mathbf{L} = \\mathbf{R} \\times M\\mathbf{V} + \\sum_j \\mathbf{r}'_j \\times m_j\\dot{\\mathbf{r}}'_j$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Try the parallel decomposition for the kinetic energy. The first two steps are
                filled in.
              </p>
              <ol className="lrn-list">
                <li>{`Write each velocity as $\\dot{\\mathbf{r}}_j = \\mathbf{V} + \\dot{\\mathbf{r}}'_j$ and form $\\tfrac{1}{2}\\sum m_j \\dot{\\mathbf{r}}_j \\cdot \\dot{\\mathbf{r}}_j$.`}</li>
                <li>{`Expand the dot product into three terms.`}</li>
                <li>{`Identify the cross term that vanishes by the center-of-mass condition.`}</li>
                <li>{`Read off the surviving translational and rotational kinetic energies.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>Now derive the analogous split for the torque about an external origin.</p>
              <ol className="lrn-list">
                <li>{`Write each force application point as $\\mathbf{R} + \\mathbf{r}'_j$ and sum $\\mathbf{r}_j \\times \\mathbf{f}_j$.`}</li>
                <li>{`Use $\\sum \\mathbf{f}_j = \\mathbf{F}$ to collect the center-of-mass piece.`}</li>
                <li>{`Identify the spin torque about the center of mass as the remaining sum.`}</li>
              </ol>
            </div>
          </div>
          <p>The two surviving terms package the total angular momentum as</p>
          <div className="lrn-eq">
            <span>{`$$\\mathbf{L} = \\mathbf{R} \\times M\\mathbf{V} + \\sum_j \\mathbf{r}'_j \\times m_j\\dot{\\mathbf{r}}'_j$$`}</span>
          </div>
          <p>{`For a body spinning about a fixed axis through its center of mass, the second sum is just $I_0\\omega\\hat{\\mathbf{k}}$, so`}</p>
          <div className="lrn-eq">
            <span>{`$$L_z = I_0\\omega + (\\mathbf{R} \\times M\\mathbf{V})_z$$`}</span>
          </div>
          <p>
            The first piece is the <em>spin</em>: rotation of the body about its own center of mass,
            measured with positions read from that center, so it does not depend on where the
            external origin sits. The second piece is the <em>orbital</em> term: the cross product
            of the center-of-mass position with the total momentum, which does depend on the origin
            and vanishes whenever the origin lies on the line of motion of the center of mass. Earth
            makes the split tangible: its daily rotation is spin; its yearly motion around the Sun
            is orbital.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Spin</span>
              <p>
                Rotation about the body's own center of mass. Uses the moment of inertia about a
                body axis through that center. Same value at every external origin.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Orbital</span>
              <p>
                Center-of-mass position crossed with total momentum. Depends on the origin; zero
                only when the origin sits on the line of motion of the center of mass.
              </p>
            </div>
          </div>
          <h3>The rolling wheel</h3>
          <p>{`A uniform wheel of mass $M$ and radius $b$ rolls without slipping at speed $V$. The no-slip condition fixes $\\omega = \\frac{V}{b}$. With the convention that positive $\\omega$ rolls the wheel in $-x$, the center-of-mass velocity is $\\mathbf{V} = -b\\omega\\,\\hat{\\mathbf{i}}$.`}</p>
          <p>{`The spin about the center, with $I_0 = \\tfrac{1}{2}Mb^2$, is`}</p>
          <div className="lrn-eq">
            <span>{`$$L_0 = -\\tfrac{1}{2} M b^2 \\omega\\,\\hat{\\mathbf{k}}$$`}</span>
          </div>
          <p>{`Now take the origin at a point on the ground directly below the wheel. The center of mass sits a height $b$ above and moves horizontally, so`}</p>
          <div className="lrn-eq">
            <span>{`$$(\\mathbf{R} \\times M\\mathbf{V})_z = -M b V = -M b^2 \\omega$$`}</span>
          </div>
          <p>The total angular momentum about that ground point is the sum:</p>
          <div className="lrn-eq">
            <span>{`$$L_z = -\\tfrac{1}{2} M b^2\\omega - M b^2\\omega = -\\tfrac{3}{2} M b^2\\omega$$`}</span>
          </div>
          <p>
            The orbital piece contributes even though the wheel travels in a straight line: as long
            as the ground origin is offset from the line of the center of mass, the cross product of
            that offset with the total momentum is nonzero.
          </p>
          <VizFigure title="Rolling wheel" size="body" aspect="auto">
            <Amr_RollingWheel />
          </VizFigure>
          <h3>Splitting the torque</h3>
          <p>{`The same split runs through for torque. With each force acting at $\\mathbf{R} + \\mathbf{r}'_j$,`}</p>
          <div className="lrn-eq">
            <span>{`$$\\boldsymbol{\\tau} = \\sum_j \\mathbf{r}'_j \\times \\mathbf{f}_j + \\mathbf{R} \\times \\mathbf{F}$$`}</span>
          </div>
          <p>So</p>
          <div className="lrn-eq">
            <span>{`$$\\tau_z = \\tau_{0z} + (\\mathbf{R} \\times \\mathbf{F})_z$$`}</span>
          </div>
          <p>{`Combine with $\\frac{dL_z}{dt} = I_0\\alpha + (\\mathbf{R} \\times M\\mathbf{a})_z$. The center of mass terms cancel because $\\mathbf{F} = M\\mathbf{a}$. The surviving result is`}</p>
          <div className="lrn-eq lrn-eq-display">
            <span>{`$$\\boxed{\\tau_0 = I_0\\alpha}$$`}</span>
          </div>
          <p>{`This is a striking simplification. The center of mass can fly through the air in any trajectory whatever, but the spin about that center is still governed by the simple law $\\tau_0 = I_0\\alpha$, with the moment of inertia computed about a body axis through the center of mass. The result holds because we are working in an inertial frame, and the cross terms involving $\\mathbf{R}$ exactly cancel between the angular momentum and torque sides.`}</p>
          <h3>Kinetic energy decomposition</h3>
          <p>By the same trick, the kinetic energy splits cleanly into spin and translation:</p>
          <div className="lrn-eq">
            <span>{`$$K = \\tfrac{1}{2} I\\omega^2 + \\tfrac{1}{2} M V^2$$`}</span>
          </div>
          <p>The two pieces are independent: each is a clean function of one variable.</p>
          <h3>The work-energy theorem</h3>
          <p>
            The total work over a path equals the change in total kinetic energy, and it splits the
            same way:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\int \\mathbf{F} \\cdot d\\mathbf{R} = \\tfrac{1}{2} M V_b^2 - \\tfrac{1}{2} M V_a^2$$`}</span>
          </div>
          <div className="lrn-eq">
            <span>{`$$\\int \\tau_0\\, d\\theta = \\tfrac{1}{2} I_0 \\omega_b^2 - \\tfrac{1}{2} I_0 \\omega_a^2$$`}</span>
          </div>
          <p>
            The first line is translational work; the second is rotational. The two budgets are
            independent and can be applied separately.
          </p>
          <h3>A disk on ice</h3>
          <p>{`A disk of mass $M$ and radius $b$ sits on frictionless ice while a tape pulls its rim with force $F$ tangent to the disk. Two routes solve the problem; both must give the same answer.`}</p>
          <p>
            <strong>Method 1: about the center of mass.</strong>{' '}
            {`The only horizontal force is $F$, so the center accelerates at`}
          </p>
          <div className="lrn-eq">
            <span>{`$$a = \\frac{F}{M}$$`}</span>
          </div>
          <p>{`The torque about the center is $\\tau_0 = b F$. Use $\\tau_0 = I_0\\alpha$ with $I_0 = \\tfrac{1}{2} M b^2$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\alpha = \\frac{bF}{I_0} = \\frac{2F}{Mb}$$`}</span>
          </div>
          <p>
            <strong>Method 2.</strong>{' '}
            {`Take the origin on the line of the force. The lever arm of $F$ about this origin is zero. So the torque about this origin is`}
          </p>
          <div className="lrn-eq">
            <span>{`$$\\boldsymbol{\\tau} = 0$$`}</span>
          </div>
          <p>
            Therefore the total angular momentum about this origin stays constant. Use the spin plus
            orbital split
          </p>
          <div className="lrn-eq">
            <span>{`$$L_z = I_0\\omega + (\\mathbf{R} \\times M\\mathbf{V})_z$$`}</span>
          </div>
          <p>{`Let $b$ be the perpendicular distance from the origin to the line of the center of mass. The orbital piece is $-MbV$ (sign from the geometry). So`}</p>
          <div className="lrn-eq">
            <span>{`$$L_z = I_0\\omega - MbV$$`}</span>
          </div>
          <p>{`Differentiate in time. Since $L_z$ is constant, $\\frac{dL_z}{dt} = 0$:`}</p>
          <div className="lrn-eq">
            <span>{`$$I_0\\alpha - Mb\\,a = 0$$`}</span>
          </div>
          <p>{`The center of mass obeys $F = Ma$, so $a = \\frac{F}{M}$. Plug in and solve for $\\alpha$:`}</p>
          <div className="lrn-eq">
            <span>{`$$I_0\\alpha = Mb \\cdot \\frac{F}{M} = bF \\quad\\Rightarrow\\quad \\alpha = \\frac{bF}{I_0}$$`}</span>
          </div>
          <p>{`Both methods give $\\alpha = \\frac{bF}{I_0}$ and $a = \\frac{F}{M}$. They give the same physics through different bookkeeping.`}</p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Method 1: About CM</span>
              <p>
                You apply Newton's second law to the center of mass and the spin law about the
                center. Each force enters with its own lever arm about the center. The two equations
                decouple cleanly.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Method 2: Remote Origin</span>
              <p>
                You pick an origin where the applied force has zero lever arm. Total angular
                momentum about that point is conserved. The constraint then ties the angular and
                linear accelerations together.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the angular momentum stay conserved about a point on the line of F?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Torque equals position cross force. When the origin sits on the line of the force,
                the position vector to the application point is parallel to the force. The cross
                product is zero. With zero torque, angular momentum about that origin does not
                change.
              </p>
            </details>
          </div>
          <h3>The falling yo-yo</h3>
          <p>{`The yo-yo from the opening now falls out of the same method. A yo-yo of mass $M$ and moment of inertia $I_0$ hangs from a string wrapped around its axle of radius $b$. Let $T$ be the string tension and take down as positive. The center obeys Newton's law, the axle feels the torque from the tension, and the unwinding string ties the two motions together:`}</p>
          <div className="lrn-eq">
            <span>{`$$Mg - T = Ma, \\qquad Tb = I_0\\alpha, \\qquad a = b\\alpha$$`}</span>
          </div>
          <p>{`Eliminate $T$ and $\\alpha$ to get the acceleration:`}</p>
          <div className="lrn-eq">
            <span>{`$$a = \\frac{g}{1 + \\frac{I_0}{Mb^2}}$$`}</span>
          </div>
          <p>{`The denominator is larger than 1, so the yo-yo falls slower than free fall. The spin soaks up part of the drop. For a solid-disk yo-yo, $I_0 = \\tfrac{1}{2} M b^2$ gives $a = \\tfrac{2}{3} g$. That answers the opening question: one law for the drop and one for the spin, linked by the string.`}</p>
          <h3>Drum Rolling Down a Plane</h3>
          <p>{`A uniform drum of mass $M$, radius $b$, rolls without slipping down a plane of angle $\\theta$.`}</p>
          <VizFigure title="Drum on Incline" size="body" aspect="auto">
            <Amr_DrumOnIncline />
          </VizFigure>
          <p>
            <strong>Method 1.</strong> Forces on the center of mass:
          </p>
          <div className="lrn-eq">
            <span>{`$$M g\\sin\\theta - f = M a$$`}</span>
          </div>
          <p>Torque about the center:</p>
          <div className="lrn-eq">
            <span>{`$$b f = I_0\\alpha = \\tfrac{1}{2} M b^2 \\alpha$$`}</span>
          </div>
          <p>{`Rolling constraint: $a = b\\alpha$. Combine:`}</p>
          <div className="lrn-eq">
            <span>{`$$a = \\tfrac{2}{3} g\\sin\\theta$$`}</span>
          </div>
          <p>
            <strong>Method 2.</strong>{' '}
            {`Take the origin at the contact point. There $f$ and $N$ act with zero lever arm, so both drop out of the torque equation. Only gravity contributes. Its component along the plane, $M g\\sin\\theta$, acts at the center a distance $b$ above the contact point, giving torque $M g b\\sin\\theta$.`}
          </p>
          <p>{`The moment of inertia about the contact point follows from the parallel axis theorem: $I_{contact} = I_0 + M b^2 = \\tfrac{1}{2} M b^2 + M b^2 = \\tfrac{3}{2} M b^2$. The drum turns about the contact point at angular acceleration $\\alpha = \\frac{a}{b}$, so`}</p>
          <div className="lrn-eq">
            <span>{`$$M g b\\sin\\theta = \\tfrac{3}{2} M b^2\\,\\frac{a}{b} \\quad\\Rightarrow\\quad a = \\tfrac{2}{3} g\\sin\\theta$$`}</span>
          </div>
          <p>
            {`Same answer, with no unknown friction force to eliminate. Choosing the origin at the contact point traded one equation for a single clean one.`}
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the contact point as origin make f and N disappear?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Both friction and the normal force act at the contact point itself. So their
                position vectors from that origin are zero. The cross product of zero with any force
                is zero, so neither contributes to the torque about that point.
              </p>
            </details>
          </div>
          <h3>Drum by Energy Method</h3>
          <p>Same drum. Translational work-energy:</p>
          <div className="lrn-eq">
            <span>{`$$(W\\sin\\theta - f)\\ell = \\tfrac{1}{2} M V^2$$`}</span>
          </div>
          <p>Rotational work-energy:</p>
          <div className="lrn-eq">
            <span>{`$$f b\\theta = \\tfrac{1}{2} I_0\\omega^2$$`}</span>
          </div>
          <p>{`Add the two and use $\\omega = \\frac{V}{b}$ and $b\\theta = \\ell$:`}</p>
          <div className="lrn-eq">
            <span>{`$$W \\ell\\sin\\theta = \\tfrac{1}{2} M V^2 + \\tfrac{1}{2}\\cdot\\tfrac{1}{2} M V^2 = \\tfrac{3}{4} M V^2$$`}</span>
          </div>
          <p>{`With $h = \\ell\\sin\\theta$:`}</p>
          <div className="lrn-eq">
            <span>{`$$V = \\sqrt{\\tfrac{4 g h}{3}}$$`}</span>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Force Method</span>
              <p>
                You write Newton's second law for the center of mass and the rotational law about
                the center. The rolling constraint links them. You solve for the linear and angular
                accelerations.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Energy Method</span>
              <p>
                You set the lost gravitational potential equal to the gained kinetic energy. The
                kinetic energy splits into translational and rotational pieces. You get the speed at
                the bottom directly.
              </p>
            </div>
          </div>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rolling Without Slipping</span>
              <p>
                The contact point has zero instantaneous velocity. Static friction adjusts to
                whatever value is needed to keep the constraint. No energy is dissipated.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Slipping</span>
              <p>
                The contact point moves relative to the surface. Kinetic friction acts at a fixed
                magnitude opposing the slip. Energy is lost as heat at the contact.
              </p>
            </div>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why is static friction able to do positive rotational work and negative translational
              work at the same time?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The translational work uses the displacement of the center of mass, while the
                rotational work uses the angular displacement times the lever arm. Friction points
                up the plane, so it does negative work on the center moving down. About the center,
                friction's torque spins the drum in the rolling direction, doing positive rotational
                work.
              </p>
            </details>
          </div>
          <h3>The Falling Stick</h3>
          <p>{`A uniform stick of length $\\ell$ and mass $M$ stands upright on a frictionless table. It tips and falls. The center of mass drops straight down: with no horizontal force, $M\\ddot{X} = 0$. The momentum topic works through why that holds; here we use it to set up the rotation.`}</p>
          <p>{`Let $y$ be the height drop and $\\theta$ the angle from vertical. The constraint is`}</p>
          <div className="lrn-eq">
            <span>{`$$y = \\tfrac{\\ell}{2}(1 - \\cos\\theta)$$`}</span>
          </div>
          <p>{`So $\\dot{y} = \\tfrac{\\ell}{2}\\sin\\theta\\,\\dot\\theta$.`}</p>
          <p>Energy conservation:</p>
          <div className="lrn-eq">
            <span>{`$$M g y = \\tfrac{1}{2} M\\dot{y}^2 + \\tfrac{1}{2} I_0\\dot\\theta^2$$`}</span>
          </div>
          <p>{`With $I_0 = \\tfrac{1}{12} M\\ell^2$ and the constraint, solve for $\\dot{y}^2$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\dot{y}^2 = \\frac{6 g y \\sin^2\\theta}{3\\sin^2\\theta + 1}$$`}</span>
          </div>
        </>,

        <>
          <h2>The Bohr Atom</h2>
          <p>
            The module ends with a famous application. Niels Bohr explained the hydrogen spectrum
            using angular momentum quantization.
          </p>
          <p>
            <strong>When to use this:</strong> use the Bohr model when you need the energy levels
            and emission lines of hydrogen at first-pass accuracy.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A classical electron orbits a proton. Classical theory says it must radiate. What goes
              wrong?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                An accelerating charge radiates electromagnetic waves and loses energy. So a
                classical orbiting electron should spiral into the proton in a tiny fraction of a
                second. Atoms would not be stable, which contradicts everything we see.
              </p>
            </details>
          </div>
          <VizFigure title="Bohr atom" size="body" aspect="auto">
            <Amr_BohrAtom />
          </VizFigure>
          <h3>The Spectrum Puzzle</h3>
          <p>
            In the 1800s, spectroscopists found that hot gases emit only at sharp wavelengths.
            Hydrogen had the simplest spectrum. Balmer fitted the visible lines empirically:
          </p>
          <div className="lrn-eq">
            <span>{`$$\\frac{1}{\\lambda} = R_y\\left(\\frac{1}{m^2} - \\frac{1}{n^2}\\right)$$`}</span>
          </div>
          <p>{`Here $R_y \\approx 109{,}700\\,\\text{cm}^{-1}$ is the Rydberg constant. The integers $m < n$. No classical theory could derive this.`}</p>
          <h3>Bohr's Postulates</h3>
          <p>Bohr made four bold guesses:</p>
          <ol className="lrn-list">
            <li>The atom has stationary states. In them the electron does not radiate.</li>
            <li>{`A transition between states $a$ and $b$ emits or absorbs a photon. The frequency obeys $h\\nu = E_a - E_b$.`}</li>
            <li>Inside a stationary state, the electron obeys classical mechanics.</li>
            <li>{`Angular momentum is quantized: $L = \\frac{nh}{2\\pi}$.`}</li>
          </ol>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Classical Orbiting Electron</span>
              <p>
                The electron can orbit at any radius and any energy. It accelerates in its circular
                path, so it must emit radiation continuously. It would spiral into the nucleus in
                nanoseconds.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Bohr Quantized Orbit</span>
              <p>
                Only discrete radii are allowed, set by integer angular momentum. Inside an allowed
                orbit the electron does not radiate at all. Light comes only from jumps between
                orbits.
              </p>
            </div>
          </div>
          <h3>The Hydrogen Derivation</h3>
          <p>{`This derivation uses Gaussian units, where the Coulomb force between two charges $e$ a distance $r$ apart is written $\\frac{e^2}{r^2}$ with no factor of $4\\pi\\varepsilon_0$. In SI units that same force is $\\frac{e^2}{4\\pi\\varepsilon_0 r^2}$; every $e^2$ below would carry a $\\frac{1}{4\\pi\\varepsilon_0}$ in SI.`}</p>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Bohr atom derivation chain. Use the radial equation, the energy expression, and the
                quantization rule.
              </p>
              <ol className="lrn-list">
                <li>{`Set the Coulomb force equal to the centripetal force: $\\frac{m_e v^2}{r} = \\frac{e^2}{r^2}$.`}</li>
                <li>{`Write the total energy: $E = \\tfrac{1}{2} m_e v^2 - \\frac{e^2}{r}$.`}</li>
                <li>{`Use step 1 to replace the kinetic energy and get $E = -\\frac{\\tfrac{1}{2} e^2}{r}$.`}</li>
                <li>{`Apply quantization $m_e v r = \\frac{nh}{2\\pi}$ to solve for $v$.`}</li>
                <li>{`Substitute $v$ into the radial equation and solve for $r_n$.`}</li>
                <li>{`Plug $r_n$ back into the energy formula to get $E_n$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>
                Apply the same method to a hydrogen-like ion of nuclear charge Ze. The first step is
                filled in.
              </p>
              <ol className="lrn-list">
                <li>{`Replace the Coulomb force with $\\frac{Ze^2}{r^2}$ in the centripetal equation.`}</li>
                <li>Repeat the energy expression with the new potential.</li>
                <li>Apply the same angular momentum quantization rule.</li>
                <li>Solve for the new radii and energies in terms of Z.</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>Derive the Rydberg constant in cgs units from your final formula.</p>
              <ol className="lrn-list">
                <li>{`Write the photon frequency for a transition between integers $m$ and $n$.`}</li>
                <li>{`Convert frequency to inverse wavelength using $\\nu = \\frac{c}{\\lambda}$.`}</li>
                <li>Read off the prefactor and identify it as the Rydberg constant.</li>
              </ol>
            </div>
          </div>
          <p>Step 1. The Coulomb force gives the centripetal equation:</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{m_e v^2}{r} = \\frac{e^2}{r^2}$$`}</span>
          </div>
          <p>Step 2. The total energy is kinetic plus potential:</p>
          <div className="lrn-eq">
            <span>{`$$E = \\tfrac{1}{2} m_e v^2 - \\frac{e^2}{r}$$`}</span>
          </div>
          <p>{`Step 3. From step 1, $\\tfrac{1}{2} m_e v^2 = \\frac{\\tfrac{1}{2} e^2}{r}$. So`}</p>
          <div className="lrn-eq">
            <span>{`$$E = -\\tfrac{1}{2}\\frac{e^2}{r}$$`}</span>
          </div>
          <p>{`Step 4. Apply the quantization rule $L = m_e v r = \\frac{nh}{2\\pi}$:`}</p>
          <div className="lrn-eq">
            <span>{`$$v = \\frac{n h}{2\\pi m_e r}$$`}</span>
          </div>
          <p>Step 5. Substitute into the radial equation:</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{m_e}{r}\\left(\\frac{n h}{2\\pi m_e r}\\right)^2 = \\frac{e^2}{r^2}$$`}</span>
          </div>
          <p>{`Solve for $r$:`}</p>
          <div className="lrn-eq">
            <span>{`$$r_n = \\frac{n^2 h^2}{4\\pi^2 m_e e^2}$$`}</span>
          </div>
          <p>Step 6. Plug back into the energy expression:</p>
          <div className="lrn-eq">
            <span>{`$$E_n = -\\frac{2\\pi^2 m_e e^4}{n^2 h^2}$$`}</span>
          </div>
          <p>{`Step 7. Apply Bohr's frequency rule for a transition from $n$ to $m$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\nu = \\frac{2\\pi^2 m_e e^4}{h^3}\\left(\\frac{1}{m^2} - \\frac{1}{n^2}\\right)$$`}</span>
          </div>
          <p>{`Use $\\nu = \\frac{c}{\\lambda}$ to get`}</p>
          <div className="lrn-eq">
            <span>{`$$\\frac{1}{\\lambda} = \\frac{2\\pi^2 m_e e^4}{c h^3}\\left(\\frac{1}{m^2} - \\frac{1}{n^2}\\right)$$`}</span>
          </div>
          <p>
            This is Balmer's formula. The Rydberg constant comes out of fundamental constants. The
            match with experiment was a triumph.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>{`Why does fixing the angular momentum to integer multiples of $\\frac{h}{2\\pi}$ pick out discrete energies?`}</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The centripetal equation ties the speed to the radius. The quantization rule ties
                the product of speed and radius to an integer. Together they force only specific
                radii, and each radius gives its own fixed energy through the energy formula.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Why Rigid-Body Motion Splits into Translation and Rotation</h2>
          <p>This section proves Chasles' theorem for the simplest rigid body: a two-mass rod.</p>
          <p>
            <strong>When to use this:</strong> use this proof when you want to know why the
            center-of-mass plus rotation split is exact, not approximate.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>For a rigid body, does the rigidity condition allow any internal sliding?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                No. Rigidity means every pair of particles keeps a fixed distance. Any sliding
                between two particles would change their separation. So the only allowed internal
                motion is rotation, which preserves all distances.
              </p>
            </details>
          </div>
          <p>
            A rigid body must keep all distances between particles fixed. For two particles 1 and 2,
            this means
          </p>
          <div className="lrn-eq">
            <span>{`$$|\\mathbf{r}_2 - \\mathbf{r}_1|^2 = \\text{const}$$`}</span>
          </div>
          <p>Differentiate:</p>
          <div className="lrn-eq">
            <span>{`$$(\\mathbf{r}_2 - \\mathbf{r}_1) \\cdot (d\\mathbf{r}_2 - d\\mathbf{r}_1) = 0$$`}</span>
          </div>
          <p>
            So the relative displacement of the two ends is perpendicular to the rod direction. No
            stretching.
          </p>
          <p>Define the residual displacement of each end as</p>
          <div className="lrn-eq">
            <span>{`$$d\\mathbf{r}'_j = d\\mathbf{r}_j - d\\mathbf{R}$$`}</span>
          </div>
          <p>{`Here $d\\mathbf{R}$ is the displacement of the center of mass. Subtract the same vector from both end displacements. The relative motion does not change. The residuals therefore satisfy the same perpendicularity condition. They can only correspond to a rigid rotation about the center of mass.`}</p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`A rotation by angle $d\\theta$ about the center of mass moves each end through a tangential arc. Both ends share the same $d\\theta$. So the residuals are exactly a common rotation.`}</p>
          </div>
          <p>{`So any rigid displacement breaks into a translation $d\\mathbf{R}$ plus a rotation $d\\theta$ about the center of mass. The split is unique.`}</p>
          <VizFigure title="Chasles two-mass rod" size="body" aspect="auto">
            <Amr_ChaslesRod />
          </VizFigure>
        </>,

        <>
          <h2>The Pendulum Beyond Small Angles</h2>
          <p>
            The small angle pendulum is too simple for high precision. We now keep the full sine
            term.
          </p>
          <p>
            <strong>When to use this:</strong> use this when you need the period of a pendulum at
            amplitudes the small-angle limit cannot handle.
          </p>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              As you increase a pendulum's amplitude, does its period grow, shrink, or stay the
              same?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The period grows with amplitude. The small angle formula gives a period that ignores
                higher order terms. When you keep the full sine, the restoring torque grows slower
                than the angle, so the bob takes longer to complete each swing.
              </p>
            </details>
          </div>
          <p>{`Energy conservation for the simple pendulum at angle $\\phi$ from vertical, with bob speed $v = \\ell\\dot\\phi$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\tfrac{1}{2} m\\ell^2\\dot\\phi^2 + m g\\ell(1 - \\cos\\phi) = m g\\ell(1 - \\cos\\phi_0)$$`}</span>
          </div>
          <p>{`Solve for $\\dot\\phi$:`}</p>
          <div className="lrn-eq">
            <span>{`$$\\dot\\phi = \\sqrt{\\frac{2g}{\\ell}}\\sqrt{\\cos\\phi - \\cos\\phi_0}$$`}</span>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Period as an elliptic integral. Convert the energy equation into a definite integral
                over a quarter period.
              </p>
              <ol className="lrn-list">
                <li>{`Separate variables: $dt = \\frac{d\\phi}{\\dot\\phi}$ using the energy formula above.`}</li>
                <li>{`Integrate from $\\phi = 0$ to $\\phi = \\phi_0$ for a quarter period, then multiply by 4.`}</li>
                <li>{`Substitute $\\sin\\frac{\\phi}{2} = \\sin\\frac{\\phi_0}{2}\\sin\\psi$ to fold $\\phi_0$ into the integrand.`}</li>
                <li>{`Recognize the result as a complete elliptic integral of the first kind.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>Expand the elliptic integrand for small amplitude. The first step is filled in.</p>
              <ol className="lrn-list">
                <li>{`Use $(1 - x)^{-\\tfrac{1}{2}} \\approx 1 + \\tfrac{1}{2} x + \\dots$ on the integrand.`}</li>
                <li>{`Identify $x = \\sin^2\\frac{\\phi_0}{2}\\sin^2\\psi$ and keep through second order.`}</li>
                <li>{`Integrate the leading correction term over $\\psi$ from $0$ to $\\frac{\\pi}{2}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>Estimate the period correction for a 30 degree amplitude pendulum.</p>
              <ol className="lrn-list">
                <li>{`Convert 30 degrees to radians for $\\phi_0$.`}</li>
                <li>{`Compute the leading correction $\\tfrac{1}{16}\\phi_0^2$.`}</li>
                <li>
                  Compare the corrected period to the small angle result and report the percent
                  shift.
                </li>
              </ol>
            </div>
          </div>
          <p>The period becomes</p>
          <div className="lrn-eq">
            <span>{`$$T = 4\\sqrt{\\frac{\\ell}{g}}\\int_0^{\\frac{\\pi}{2}}\\frac{d\\psi}{\\sqrt{1 - \\sin^2\\frac{\\phi_0}{2}\\sin^2\\psi}}$$`}</span>
          </div>
          <p>{`Expand the integrand in a series for small $\\sin\\frac{\\phi_0}{2}$ and integrate term by term:`}</p>
          <div className="lrn-eq">
            <span>{`$$T = 2\\pi\\sqrt{\\frac{\\ell}{g}}\\left(1 + \\tfrac{1}{4}\\sin^2\\frac{\\phi_0}{2} + \\dots\\right)$$`}</span>
          </div>
          <p>{`For small $\\phi_0$, $\\sin\\frac{\\phi_0}{2} \\approx \\frac{\\phi_0}{2}$. So`}</p>
          <div className="lrn-eq">
            <span>{`$$T \\approx 2\\pi\\sqrt{\\frac{\\ell}{g}}\\left(1 + \\tfrac{1}{16}\\phi_0^2 + \\dots\\right)$$`}</span>
          </div>
          <p>This is the higher-order correction used in the grandfather's clock example.</p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the period grow with amplitude rather than shrink?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The true restoring torque uses sine of the angle, which falls below the angle itself
                for larger amplitudes. So the effective spring weakens as the swing grows. A weaker
                restoring force means a slower oscillation and a longer period.
              </p>
            </details>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: `What is the angular momentum of a particle about an origin?`,
        a: `It is the vector cross product $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$, where $\\mathbf{r}$ goes from the origin to the particle and $\\mathbf{p} = m\\mathbf{v}$. The vector points perpendicular to the plane of $\\mathbf{r}$ and $\\mathbf{p}$, with the sign set by the right-hand rule.`
      },
      {
        q: `A block of mass 2 kg slides at 3 m/s along the x-axis. Find the angular momentum about a point 4 m off the line of motion in the +y direction.`,
        a: `Use $L_z = -r_\\perp p$ since the position points in $+\\mathbf{y}$ but the velocity points in $+\\mathbf{x}$, giving $\\mathbf{L} = (4\\hat{\\mathbf{j}})\\times (2\\cdot 3\\hat{\\mathbf{i}}) = -24\\hat{\\mathbf{k}}$ kg m^2/s. The size is $r_\\perp p = 4 \\cdot 6 = 24$ kg m^2/s, and the cross product direction is $-\\hat{\\mathbf{k}}$.`
      },
      {
        q: `Why does angular momentum depend on the choice of origin while the rigid body's actual motion does not?`,
        a: `The vector $\\mathbf{r}$ in $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$ is measured from the origin, so a shift of origin changes $\\mathbf{r}$ and thus $\\mathbf{L}$. The motion itself is unchanged because particle velocities are origin-free, but our bookkeeping of rotational state depends on where we measure positions from.`
      },
      {
        q: `Predict the angular momentum of a freely sliding block about a point on its line of motion.`,
        a: `It must be zero because $\\mathbf{r}$ and $\\mathbf{p}$ become parallel along the line of motion, so the cross product vanishes. This shows that angular momentum can be zero even when linear momentum is nonzero, depending on the chosen origin.`
      },
      {
        q: `Define torque on a particle and explain why it depends on origin.`,
        a: `Torque is $\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$, the cross product of the position vector from the origin to the point of application with the force. Shifting the origin changes $\\mathbf{r}$ and so changes $\\boldsymbol{\\tau}$, even though the force itself is unchanged.`
      },
      {
        q: `Derive $\\boldsymbol{\\tau} = \\frac{d\\mathbf{L}}{dt}$ from $\\mathbf{L} = \\mathbf{r}\\times\\mathbf{p}$.`,
        a: `Differentiate to get $\\frac{d\\mathbf{L}}{dt} = \\mathbf{v}\\times\\mathbf{p} + \\mathbf{r}\\times \\frac{d\\mathbf{p}}{dt}$. The first term is $\\mathbf{v} \\times m\\mathbf{v} = 0$ because the cross product of parallel vectors vanishes. The second term is $\\mathbf{r}\\times\\mathbf{F} = \\boldsymbol{\\tau}$ by Newton's second law.`
      },
      {
        q: `Why is the law of equal areas equivalent to angular momentum conservation under a central force?`,
        a: `For a central force the torque about the force center is zero because $\\mathbf{F}$ is along $\\mathbf{r}$, so $\\mathbf{L}$ is constant. The area swept per unit time equals $\\frac{L_z}{2m}$, so constant $L_z$ means constant areal speed. This is Kepler's second law for any central force.`
      },
      {
        q: `A planet of mass $M$ and radius $R$ is approached by a package fired at speed $v_0$ from far away. What is the effective capture cross section?`,
        a: `$A_{\\text{eff}} = A_0(1 - \\frac{U(R)}{E})$ where $A_0 = \\pi R^2$ and $U(R) = -\\frac{GMm}{R}$. This comes from conserving energy and angular momentum between infinity and the grazing radius, and equals $A_0(1 + \\frac{2GMm}{R\\,m v_0^2})$.`
      },
      {
        q: `Why does the capture cross section diverge as the launch energy approaches zero?`,
        a: `As $E \\to 0$, the factor $-\\frac{U(R)}{E}$ blows up because the potential well dominates. Physically, a slow projectile spends so long near the planet that gravity can pull in any trajectory. From rest at infinity, a particle is bound to fall in.`
      },
      {
        q: `Predict whether the friction force on a slowing block produces a torque about an origin offset from the line of motion.`,
        a: `Yes, because the friction force has a nonzero perpendicular distance to the offset origin, so $\\boldsymbol{\\tau} = \\mathbf{r}\\times\\mathbf{F}$ is not zero. The torque points in $-\\hat{\\mathbf{k}}$ when friction is in $-\\hat{\\mathbf{x}}$ and the origin is in $+\\hat{\\mathbf{y}}$.`
      },
      {
        q: `For a particle in fixed-axis rotation at perpendicular distance $\\rho$ from the axis, what is its speed and direction?`,
        a: `The speed is $v = \\omega\\rho$, set by the shared angular speed and the radius of its circle. The direction is tangent to the circle, perpendicular to both the axis and the radial vector $\\boldsymbol{\\rho}$.`
      },
      {
        q: `Derive $L_z = I\\omega$ for a rigid body rotating about a fixed axis.`,
        a: `Each particle contributes $L_z(j) = m_j v_j \\rho_j = m_j\\rho_j^2\\omega$, since $v_j$ is tangent at distance $\\rho_j$. Sum over all particles to get $L_z = \\omega\\sum m_j\\rho_j^2 = I\\omega$, where $I = \\sum m_j\\rho_j^2$ is the moment of inertia about the axis.`
      },
      {
        q: `Compute the moment of inertia of a thin uniform stick of mass $M$ and length $L$ about its midpoint, perpendicular to the stick.`,
        a: `With linear density $\\frac{M}{L}$, $I = \\int_{-\\frac{L}{2}}^{\\frac{L}{2}} x^2 \\frac{M}{L}\\,dx = \\frac{M}{L}\\cdot[\\frac{x^3}{3}]_{-\\frac{L}{2}}^{\\frac{L}{2}} = \\tfrac{1}{12} M L^2$. The bounds are symmetric so the integral is twice the integral from $0$ to $\\frac{L}{2}$.`
      },
      {
        q: `Use the parallel-axis theorem to compute the moment of inertia of a stick about one end from the moment about the midpoint.`,
        a: `$I_{\\text{end}} = I_0 + M\\ell^2 = \\tfrac{1}{12} M L^2 + M(\\frac{L}{2})^2 = (\\tfrac{1}{12} + \\tfrac{1}{4}) M L^2 = \\tfrac{1}{3} M L^2$. This matches the direct integral and shows the offset of $\\frac{L}{2}$ adds $M(\\frac{L}{2})^2$.`
      },
      {
        q: `Why does the cross term in the parallel axis theorem vanish?`,
        a: `Splitting $\\boldsymbol{\\rho}_j = \\boldsymbol{\\rho}'_j + \\mathbf{R}_\\perp$ and squaring gives a cross term $2\\mathbf{R}_\\perp\\cdot\\sum m_j\\boldsymbol{\\rho}'_j$. The sum is zero because $\\boldsymbol{\\rho}'_j$ is measured from the center of mass. So only the diagonal pieces survive, leaving $I = I_0 + M\\ell^2$.`
      },
      {
        q: `A pulley of mass $M_p$ and radius $R$ is treated as a uniform disk in an Atwood machine with masses $M_1 > M_2$. What is the linear acceleration?`,
        a: `$a = \\frac{(M_1 - M_2)g}{M_1 + M_2 + \\frac{M_p}{2}}$. The pulley's moment of inertia $I = \\frac{M_p R^2}{2}$ combined with $\\alpha = \\frac{a}{R}$ adds an effective mass of $\\frac{M_p}{2}$ to the denominator.`
      },
      {
        q: `Predict whether two pendulums of identical length but different bob mass swing with the same period.`,
        a: `Yes, they have the same period $T = 2\\pi\\sqrt{\\frac{\\ell}{g}}$. The mass cancels because both gravitational force and inertial mass scale with $m$, leaving the period independent of the bob mass.`
      },
      {
        q: `Derive the period of a simple pendulum of length $\\ell$ in the small angle limit.`,
        a: `The torque equation about the pivot gives $m\\ell^2\\ddot\\phi = -mg\\ell\\sin\\phi$, which becomes $\\ddot\\phi + \\frac{g}{\\ell}\\phi = 0$ for small angles. This is simple harmonic motion with angular frequency $\\sqrt{\\frac{g}{\\ell}}$, so $T = 2\\pi\\sqrt{\\frac{\\ell}{g}}$.`
      },
      {
        q: `For a physical pendulum with center of mass distance $\\ell$ from pivot and radius of gyration $k$ about the center of mass, what is the small-amplitude angular frequency?`,
        a: `$\\omega = \\sqrt{\\frac{g\\ell}{k^2 + \\ell^2}}$. The parallel axis theorem gives $I_p = M(k^2 + \\ell^2)$, and the equation of motion $I_p\\ddot\\phi = -Mg\\ell\\sin\\phi$ yields the angular frequency in the small angle limit.`
      },
      {
        q: `Why does Kater's pendulum make pendulum-based gravity measurements highly accurate?`,
        a: `When two opposite-side knife edges give the same period, $T = 2\\pi\\sqrt{\\frac{\\ell_A + \\ell_B}{g}}$, depending only on the distance between knife edges. This eliminates the need to know the center-of-mass position or the radius of gyration, both of which are hard to measure precisely.`
      },
      {
        q: `A grandfather pendulum swings 4 cm at $\\ell = 1$ m, $T_0 = 2$ s. What is the leading correction to the period?`,
        a: `The amplitude is $\\phi_0 = \\frac{0.04\\text{ m}}{1\\text{ m}} = 0.04$ rad. The leading correction is $\\Delta T = T_0\\cdot\\frac{\\phi_0^2}{16} = 2\\cdot\\frac{(0.04)^2}{16} = 2\\cdot\\frac{1.6\\times 10^{-3}}{16} = 2\\times 10^{-4}$ s per swing. This shift is constant while the amplitude holds, so a steady clock stays accurate. If the amplitude drifts by 10 percent, the correction changes by about $4\\times 10^{-5}$ s per swing. Over the roughly 43,200 swings in a day, that builds to about 2 s per day.`
      },
      {
        q: `Predict where to hit a hinged door so the hinge feels no impulsive reaction.`,
        a: `Hit at the center of percussion, $\\ell = \\frac{I}{M\\ell'}$ from the hinge, where $\\ell'$ is the hinge-to-CM distance. For a uniform door of width $w$, this gives $\\ell = \\tfrac{2}{3}w$. This same point is the sweet spot of a baseball bat.`
      },
      {
        q: `Why does the spin angular momentum stay the same when you shift the origin?`,
        a: `The spin term $\\sum \\mathbf{r}'_j\\times m_j\\dot{\\mathbf{r}}'_j$ is computed in coordinates relative to the center of mass, not the origin. So shifting the origin changes only the orbital piece $\\mathbf{R}\\times M\\mathbf{V}$, not the spin.`
      },
      {
        q: `A uniform wheel of mass $M$, radius $b$ rolls without slipping at angular speed $\\omega$. What is the total $L_z$ about a point on the ground?`,
        a: `$L_z = -\\tfrac{1}{2} M b^2\\omega - M b^2\\omega = -\\tfrac{3}{2} M b^2\\omega$. The first term is the spin $I_0\\omega$ and the second is the orbital $(\\mathbf{R}\\times M\\mathbf{V})_z = -M b^2\\omega$ from the rolling constraint $V = b\\omega$.`
      },
      {
        q: `Why is $\\tau_0 = I_0\\alpha$ valid even when the center of mass is accelerating?`,
        a: `The derivation uses Newton's law in an inertial frame, where the orbital and translation pieces cancel exactly because $\\mathbf{F} = M\\mathbf{a}$. So the center-of-mass torque law survives even when the center of mass is not in equilibrium.`
      },
      {
        q: `Predict whether a sphere or a cylinder of the same mass and radius rolls down an incline faster.`,
        a: `The sphere reaches the bottom first because its moment of inertia $\\tfrac{2}{5}MR^2$ is smaller than the cylinder's $\\tfrac{1}{2}MR^2$. Less inertia means more of the gravitational PE goes into translational KE, giving a higher final speed.`
      },
      {
        q: `A drum of mass $M$ rolls without slipping down a plane of angle $\\theta$. Find the linear acceleration.`,
        a: `Newton on the center of mass gives $Mg\\sin\\theta - f = Ma$, and the torque equation $b f = I_0\\alpha$ with $\\alpha = \\frac{a}{b}$ and $I_0 = \\frac{Mb^2}{2}$ gives $f = \\frac{Ma}{2}$. Solving, $a = \\tfrac{2}{3}g\\sin\\theta$.`
      },
      {
        q: `Use energy conservation to find the speed of a uniform drum at the bottom of a plane of vertical drop $h$.`,
        a: `Total kinetic energy at the bottom equals $\\tfrac{1}{2}MV^2 + \\tfrac{1}{2}I_0\\omega^2 = \\tfrac{1}{2}MV^2 + \\tfrac{1}{4}MV^2 = \\tfrac{3}{4}MV^2$, using $\\omega = \\frac{V}{b}$ and $I_0 = \\frac{Mb^2}{2}$. Setting this equal to $Mgh$ gives $V = \\sqrt{\\frac{4gh}{3}}$.`
      },
      {
        q: `Why does static friction between a rolling drum and a plane do no net work?`,
        a: `The contact point on the drum is instantaneously at rest, so the friction force acts on a point that moves zero distance. The friction transfers energy between translation and rotation but does not dissipate any.`
      },
      {
        q: `A stick of mass $M$ and length $\\ell$ stands upright on frictionless ice and falls. Why does its center of mass fall straight down?`,
        a: `The only external forces are gravity and the normal force, both vertical. With no horizontal force, the horizontal momentum stays zero forever, so the center of mass cannot move horizontally and falls along a vertical line.`
      },
      {
        q: `Predict what happens to the period of a simple pendulum when the amplitude grows from very small to 30 degrees.`,
        a: `The period grows because the leading correction is $T = T_0(1 + \\frac{\\phi_0^2}{16} + \\ldots)$. At 30 degrees ($\\phi_0 \\approx 0.524$ rad), the correction is about 1.7 percent, so the period is slightly longer than the small-angle prediction.`
      },
      {
        q: `State Bohr's four postulates for the hydrogen atom.`,
        a: `1) The atom has stationary states with no radiation. 2) Transitions emit photons with $h\\nu = E_a - E_b$. 3) Inside a state, classical mechanics applies. 4) Angular momentum is quantized as $L = \\frac{nh}{2\\pi}$.`
      },
      {
        q: `Derive the Bohr radius $r_n$ from the radial equation and quantization.`,
        a: `From $\\frac{m_e v^2}{r} = \\frac{e^2}{r^2}$ and $L = m_e v r = \\frac{nh}{2\\pi}$, eliminate $v$ to get $r_n = \\frac{n^2 h^2}{4\\pi^2 m_e e^2}$. The smallest radius (n=1) is the Bohr radius for the hydrogen ground state.`
      },
      {
        q: `Why does the Bohr quantization condition reproduce Balmer's empirical hydrogen spectrum?`,
        a: `Quantizing $L$ gives discrete radii $r_n$ and energies $E_n = -\\frac{2\\pi^2 m_e e^4}{n^2 h^2}$. The transition frequency $\\nu = \\frac{E_a - E_b}{h}$ then matches Balmer's formula $\\frac{1}{\\lambda} = R_y(\\frac{1}{m^2} - \\frac{1}{n^2})$ with $R_y$ built from fundamental constants.`
      },
      {
        q: `Predict what classical electromagnetism says about a circulating electron in a hydrogen atom.`,
        a: `A classical orbiting electron is accelerating, so it must radiate continuously, lose energy, and spiral into the nucleus in a fraction of a second. Classical theory predicts atomic instability, contradicting the observed stability of hydrogen.`
      },
      {
        q: `How does Kepler's second law follow from a central force?`,
        a: `A central force $\\mathbf{F} = f(r)\\hat{\\mathbf{r}}$ has zero torque about the force center, so $\\mathbf{L}$ is conserved. Since $\\frac{dA}{dt} = \\frac{L_z}{2m}$, the areal speed is constant, which is Kepler's second law.`
      },
      {
        q: `A bug walks around the rim of a freely pivoted ring on a frictionless table, ending halfway around. What conservation law applies?`,
        a: `Total angular momentum about the pivot is conserved because no external torques act on the bug-plus-ring system. As the bug walks one way, the ring spins the opposite way to keep $L_z$ at its initial value.`
      },
      {
        q: `Predict whether a heavy and a light marble launched up the same incline at the same speed roll the same distance up.`,
        a: `Yes, the distance does not depend on mass. Both energy terms $\\tfrac{1}{2}MV^2$ and $\\tfrac{1}{2}I_0\\omega^2$ scale with $M$, and the gravity work $Mgh$ also scales with $M$, so $M$ cancels in the energy balance.`
      },
      {
        q: `Why does the choice of origin sometimes simplify a rigid body problem dramatically?`,
        a: `A clever origin can zero out unknown forces in $\\boldsymbol{\\tau} = \\mathbf{r}\\times\\mathbf{F}$. For example, taking the origin at a contact point makes friction and normal force have zero lever arm, so they drop out of the torque equation.`
      },
      {
        q: `A disk of mass $M$ on frictionless ice is pulled by a tape with force $F$ tangent to its rim. Find the angular and linear acceleration of the disk.`,
        a: `The center of mass obeys $a = \\frac{F}{M}$ since $F$ is the only horizontal force. The torque about the center is $bF$, so $\\alpha = \\frac{bF}{I_0} = \\frac{bF}{\\tfrac{1}{2}Mb^2} = \\frac{2F}{Mb}$.`
      },
      {
        q: `A turntable shaped like a uniform disk of mass $M$ and radius $R$ spins freely at angular speed $\\omega_0$. A lump of putty of mass $\\frac{M}{2}$ drops straight down and sticks to the rim. Find the new angular speed.`,
        a: `No outside torque acts about the axis, so angular momentum is conserved: $I_0\\omega_0 = (I_0 + \\frac{M}{2}R^2)\\,\\omega$. The disk has $I_0 = \\frac{1}{2}MR^2$, and the putty at the rim adds $\\frac{M}{2}R^2$. So $\\frac{1}{2}MR^2\\,\\omega_0 = (\\frac{1}{2}MR^2 + \\frac{1}{2}MR^2)\\,\\omega = MR^2\\,\\omega$, giving $\\omega = \\frac{\\omega_0}{2}$. The added rim mass doubles the moment of inertia, so the spin halves.`
      },
      {
        q: `A bowling ball is thrown at speed $v_0$ on a horizontal floor and slides without rolling at first. What is its final rolling speed?`,
        a: `Friction acts only at the contact point on the floor. About a fixed point on the floor that lever arm is zero, so the ball's angular momentum about that point is conserved. At the start it is pure orbital, $L = MR v_0$. At the end the ball rolls, so $L = MR v + I_0\\omega$ with $\\omega = \\frac{v}{R}$ and $I_0 = \\tfrac{2}{5}MR^2$. Setting them equal: $MR v_0 = MR v + \\tfrac{2}{5}MR^2\\cdot\\frac{v}{R} = \\tfrac{7}{5}MR v$, so $v = \\tfrac{5}{7} v_0$.`
      },
      {
        q: `Predict the small oscillation frequency of a marble of radius $b$ rolling in a shallow dish of radius $R$ where $R \\gg b$.`,
        a: `The marble's center moves on a circle of radius $R - b \\approx R$, so its speed is $V = R\\dot\\theta$, and rolling sets the spin at $\\omega_s = \\frac{V}{b}$. The kinetic energy splits as $\\tfrac{1}{2}MV^2 + \\tfrac{1}{2}I_0\\omega_s^2 = \\tfrac{1}{2}MV^2 + \\tfrac{1}{2}\\cdot\\tfrac{2}{5}Mb^2\\cdot\\frac{V^2}{b^2} = \\tfrac{7}{10}MV^2$. The rolling raises the effective inertia by a factor $\\tfrac{7}{5}$ over a sliding bob. The small-angle restoring term is the same as a pendulum of length $R$, so the frequency drops by $\\sqrt{5/7}$: $\\omega = \\sqrt{\\frac{5g}{7R}}$, slower than a simple pendulum because rolling stores some energy as spin.`
      },
      {
        q: `A stick AB of mass $m$ pivoted at B is released from horizontal. What is the vertical acceleration of the center of mass at release?`,
        a: `Apply $\\tau_B = I_B\\alpha$ with $I_B = \\tfrac{1}{3}m\\ell^2$ and torque $mg\\frac{\\ell}{2}$, giving $\\alpha = \\frac{3g}{2\\ell}$. The center of mass at distance $\\frac{\\ell}{2}$ has vertical acceleration $\\frac{\\alpha\\ell}{2} = \\frac{3g}{4}$.`
      },
      {
        q: `Why does the rolling constraint $V = b\\omega$ couple the translational and rotational equations?`,
        a: `Rolling without slipping forces the bottom of the wheel to be momentarily at rest, which mathematically requires $V = b\\omega$ at every instant. So $a = b\\alpha$ as well, linking the linear and angular accelerations and reducing two unknowns to one.`
      },
      {
        q: `State Chasles' theorem and explain why it is useful.`,
        a: `Any rigid-body displacement decomposes uniquely into a translation of the center of mass plus a rotation about the center of mass. This lets you handle any rigid motion using two simple laws: $\\mathbf{F} = M\\mathbf{a}$ for the center of mass and $\\tau_0 = I_0\\alpha$ for the rotation.`
      },
      {
        q: `Predict whether the orbital angular momentum of a freely moving body changes if you shift the origin along its line of motion.`,
        a: `It stays zero along the line of motion and shifts proportionally for offsets perpendicular to the motion. The orbital piece $\\mathbf{R}\\times M\\mathbf{V}$ depends linearly on the perpendicular distance from origin to the line of motion.`
      },
      {
        q: `Why is the torque on a body in a uniform gravity field equal to $\\mathbf{R}\\times\\mathbf{W}$?`,
        a: `Summing $\\mathbf{r}_j\\times m_j\\mathbf{g}$ over all particles, the constant $\\mathbf{g}$ pulls out of the sum, leaving $(\\sum m_j\\mathbf{r}_j)\\times\\mathbf{g} = M\\mathbf{R}\\times\\mathbf{g} = \\mathbf{R}\\times\\mathbf{W}$. So gravity acts as if all the weight were concentrated at the center of mass.`
      },
      {
        q: `Two equal disks of mass $M$, radius $R$ are joined by a massless rod and pivoted through one disk's center. Find the period of small oscillations.`,
        a: `Use the physical pendulum formula with $I_p$ found by parallel axis theorem on each disk. With center-of-mass distance $\\ell$ from pivot, $T = 2\\pi\\sqrt{\\frac{I_p}{2Mg\\ell}}$ where $I_p$ collects both disks' contributions.`
      },
      {
        q: `Predict whether a yo-yo released from rest accelerates faster or slower than free fall.`,
        a: `It falls slower than free fall because some of the gravitational potential energy goes into rotation. Using $\\tau_0 = I_0\\alpha$ and the rolling-on-string constraint, the linear acceleration is $a = \\frac{g}{1 + \\frac{I_0}{Mb^2}}$, less than $g$.`
      },
      {
        q: `A massless rod of length $L$ carries a mass $m$ at each end and rests on frictionless ice. A third mass $m$ moving at $v_0$ strikes one end head-on in an elastic collision. Find the rod's angular speed afterward.`,
        a: `Let the projectile's final speed be $v'$, the rod's center-of-mass speed be $V$, and its spin be $\\omega$. The rod's moment of inertia about its center is $I = 2m(\\frac{L}{2})^2 = \\frac{mL^2}{2}$. Conserve linear momentum: $mv_0 = mv' + 2mV$. Conserve angular momentum about the rod's center (strike at $\\frac{L}{2}$): $mv_0\\frac{L}{2} = mv'\\frac{L}{2} + I\\omega$. Conserve kinetic energy: $\\tfrac{1}{2}mv_0^2 = \\tfrac{1}{2}mv'^2 + \\tfrac{1}{2}(2m)V^2 + \\tfrac{1}{2}I\\omega^2$. Solving the three together gives $v' = 0$, $V = \\frac{v_0}{2}$, and $\\omega = \\frac{v_0}{L}$. The projectile stops dead, just as in a one-dimensional elastic collision between equal masses.`
      },
      {
        q: `Why is it experimentally fine to assume internal torques cancel for a rigid body?`,
        a: `For ideal rigid bodies, internal forces along the line connecting two particles produce equal and opposite torques about any point that cancel pairwise. Newton's third law plus a strong-form assumption (forces along the line) gives this directly. The module treats it as an experimental fact and defers the formal proof.`
      },
      {
        q: `A boy of mass $m$ runs at $v_0$ onto one end of a stationary plank of mass $M = 2m$ and length $\\ell$ resting on frictionless ice, then stands still on it. Find the system's center-of-mass speed and the plank's angular speed right after.`,
        a: `No outside horizontal force acts, so linear and angular momentum are both conserved. The combined center of mass sits at $\\frac{m\\cdot 0 + M(\\ell/2)}{m+M} = \\frac{\\ell}{3}$ from the boy's end. Linear momentum: $mv_0 = (m+M)V_{cm}$, so $V_{cm} = \\frac{v_0}{3}$. Angular momentum about the system center of mass: $mv_0\\cdot\\frac{\\ell}{3} = I_{sys}\\,\\omega$, with $I_{sys} = m(\\frac{\\ell}{3})^2 + \\frac{1}{12}M\\ell^2 + M(\\frac{\\ell}{2}-\\frac{\\ell}{3})^2 = \\frac{m\\ell^2}{3}$. So $\\omega = \\frac{v_0}{\\ell}$. The boy's end happens to be the instantaneous rest point, since $V_{cm} = \\omega\\cdot\\frac{\\ell}{3}$ cancels there.`
      },
      {
        q: `Define radius of gyration and give canonical values.`,
        a: `The radius of gyration is $k = \\sqrt{\\frac{I_0}{M}}$, so $I_0 = Mk^2$. Canonical values: $k = R$ for a hoop, $k = \\frac{R}{\\sqrt{2}}$ for a disk, $k = \\sqrt{\\tfrac{2}{5}}\\,R$ for a sphere.`
      },
      {
        q: `A uniform disk-on-rod pendulum has the disk free to spin without friction at the rod's end. How does its period compare to the case where the disk is rigidly fixed?`,
        a: `The free-spin disk does not rotate as the rod swings, so it acts like a point mass at the rod's end. The fixed disk adds its $\\tfrac{1}{2}MR^2$ moment of inertia, so the fixed-disk case has a longer period because $I_p$ is larger.`
      },
      {
        q: `Predict what happens to a cylinder rolling down a plane if the friction coefficient is too small.`,
        a: `It will start slipping. Without enough friction, the static-friction force needed to maintain rolling exceeds the maximum, so the cylinder slips. The threshold angle is $\\theta_{\\max} = \\arctan(3\\mu)$.`
      },
      {
        q: `Why does the spin term not depend on origin while the orbital term does?`,
        a: `The spin is computed using positions $\\mathbf{r}'_j$ measured from the center of mass, so it is intrinsic to the body. The orbital term $\\mathbf{R}\\times M\\mathbf{V}$ depends explicitly on $\\mathbf{R}$, the vector from the chosen origin to the center of mass.`
      },
      {
        q: `A plank of length $2L$ leans nearly vertical against a frictionless wall, with its foot on a frictionless floor, and is released from rest. At what fraction of its starting height does the top leave the wall?`,
        a: `Let $\\theta$ be the angle from the vertical. The center sits a distance $L$ from each end, so its speed obeys $v_{cm}^2 = L^2\\dot\\theta^2$. Energy from the near-vertical start gives $\\tfrac{2}{3}ML^2\\dot\\theta^2 = MgL(1-\\cos\\theta)$, using $I_{cm} = \\tfrac{1}{3}ML^2$. The horizontal position is $x = L\\sin\\theta$. The wall is the only thing that can push horizontally, so the top leaves when $\\ddot{x} = 0$. Differentiating $x$ and setting $\\ddot{x} = 0$ gives $\\cos\\theta = \\tfrac{2}{3}$. The top's height is $2L\\cos\\theta$, so it leaves at $\\tfrac{2}{3}$ of its starting height.`
      },
      {
        q: `Predict the rotational equivalent of the equation $K = \\tfrac{1}{2}mv^2$ for combined motion.`,
        a: `For combined translation and rotation, $K = \\tfrac{1}{2}MV^2 + \\tfrac{1}{2}I_0\\omega^2$. The first term is translation of the center of mass, and the second is rotation about the center of mass; they are independent contributions.`
      },
      {
        q: `Why is the moment of inertia about the rim of a disk equal to $\\tfrac{3}{2}MR^2$?`,
        a: `Use the parallel axis theorem: $I_{\\text{rim}} = I_0 + MR^2 = \\tfrac{1}{2}MR^2 + MR^2 = \\tfrac{3}{2}MR^2$. The offset of the rim from the central axis is exactly $R$, so the parallel-axis correction adds $MR^2$.`
      },
      {
        q: `A tape unwinds from a fixed-shaft wheel under known force $F$. After length $L$, the angular speed is $\\omega_0$. Find the moment of inertia.`,
        a: `Use the rotational work-energy theorem: $FL = \\tfrac{1}{2}I_0\\omega_0^2$, so $I_0 = \\frac{2FL}{\\omega_0^2}$. The work done by $F$ over distance $L$ becomes rotational kinetic energy because the shaft is fixed.`
      },
      {
        q: `A bead on a frictionless rod rotating at constant $\\omega$ obeys $r(t) = r_0 e^{\\omega t}$. Why is energy not conserved?`,
        a: `The rod must apply a tangential force on the bead to maintain constant $\\omega$, doing positive work on it. The agent driving the rod supplies energy that increases the bead's kinetic energy, so the bead-only system is not isolated.`
      },
      {
        q: `Define center of percussion and predict its location for a uniform stick pivoted at one end.`,
        a: `The center of percussion is $\\ell = \\frac{I}{M\\ell'}$ from the pivot, where $\\ell'$ is the pivot-to-CM distance. For a uniform stick of length $L$, $I = \\frac{ML^2}{3}$ and $\\ell' = \\frac{L}{2}$, giving $\\ell = \\tfrac{2}{3}L$ from the pivot.`
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Angular Momentum and Fixed-Axis Rotation',
      sections: [
        <>
          <h2>Angular Momentum of a Particle</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Angular momentum of a particle</span>
            <div className="ref-formula-eq">{`$$\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you need the rotational state of a single particle about a chosen origin.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Angle form of L_z</span>
            <div className="ref-formula-eq">{`$$L_z = r p \\sin\\phi$$`}</div>
            <p className="ref-formula-desc">{`When to use: you know $r$, $p$, and the angle $\\phi$ between them in a plane.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Perpendicular distance form</span>
            <div className="ref-formula-eq">{`$$L_z = r_\\perp p$$`}</div>
            <p className="ref-formula-desc">
              When to use: you have a clean perpendicular distance from origin to the line of
              motion.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Perpendicular momentum form</span>
            <div className="ref-formula-eq">{`$$L_z = r p_\\perp$$`}</div>
            <p className="ref-formula-desc">{`When to use: it is easy to split $\\mathbf{p}$ into pieces along and perpendicular to $\\mathbf{r}$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Cartesian component form</span>
            <div className="ref-formula-eq">{`$$L_z = x p_y - y p_x$$`}</div>
            <p className="ref-formula-desc">
              When to use: you have components in a coordinate system and want a formulaic answer.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Determinant form</span>
            <div className="ref-formula-eq">{`$$\\mathbf{L} = \\det\\!\\begin{pmatrix}\\hat{\\mathbf{i}} & \\hat{\\mathbf{j}} & \\hat{\\mathbf{k}} \\\\ x & y & z \\\\ p_x & p_y & p_z\\end{pmatrix}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you need the full 3D angular momentum vector from coordinates.
            </p>
          </div>
        </>,

        <>
          <h2>Torque and the Rotation Law</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Torque on a particle</span>
            <div className="ref-formula-eq">{`$$\\boldsymbol{\\tau} = \\mathbf{r} \\times \\mathbf{F}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you need the rotational driver of a force about a chosen origin.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotation law</span>
            <div className="ref-formula-eq">{`$$\\boldsymbol{\\tau} = \\frac{d\\mathbf{L}}{dt}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want to relate net torque to the rate of change of angular momentum,
              with the same origin used for both.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Conservation of angular momentum</span>
            <div className="ref-formula-eq">{`$$\\boldsymbol{\\tau} = 0 \\Rightarrow \\mathbf{L} = \\text{const}$$`}</div>
            <p className="ref-formula-desc">
              When to use: there is no net torque about your chosen origin (e.g., central forces).
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Areal speed under central forces</span>
            <div className="ref-formula-eq">{`$$\\frac{dA}{dt} = \\frac{L_z}{2m}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you need Kepler's second law for any central force.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Capture cross section</span>
            <div className="ref-formula-eq">{`$$A_{\\text{eff}} = A_0(1 - \\frac{U(R)}{E})$$`}</div>
            <p className="ref-formula-desc">
              When to use: a body is gravitationally aimed at a target with finite radius from far
              away.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Gravitational torque</span>
            <div className="ref-formula-eq">{`$$\\boldsymbol{\\tau} = \\mathbf{R} \\times \\mathbf{W}$$`}</div>
            <p className="ref-formula-desc">
              When to use: a body sits in a uniform gravity field and you want the total
              gravitational torque about a point.
            </p>
          </div>
        </>,

        <>
          <h2>Angular Momentum and Fixed Axis Rotation</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Tangential speed in rigid rotation</span>
            <div className="ref-formula-eq">{`$$v_j = \\omega\\rho_j$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rigid body rotates about a fixed axis and you need the speed of a particle at perpendicular distance $\\rho_j$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">L_z as a sum</span>
            <div className="ref-formula-eq">{`$$L_z = \\sum_j m_j\\rho_j^2\\omega$$`}</div>
            <p className="ref-formula-desc">
              When to use: you start from particles and want to assemble the body's angular
              momentum.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational version of p = mv</span>
            <div className="ref-formula-eq">{`$$L_z = I\\omega$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rigid body rotates about a fixed axis with angular speed $\\omega$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Moment of inertia (discrete)</span>
            <div className="ref-formula-eq">{`$$I = \\sum_j m_j\\rho_j^2$$`}</div>
            <p className="ref-formula-desc">
              When to use: you have a body composed of point masses at known distances from the
              axis.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Moment of inertia (continuous)</span>
            <div className="ref-formula-eq">{`$$I = \\int \\rho^2\\,dm = \\int (x^2 + y^2) w\\,dV$$`}</div>
            <p className="ref-formula-desc">
              When to use: you have a continuous mass distribution and integrate over volume.
            </p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Object</th>
                <th>Axis</th>
                <th>Moment of Inertia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hoop</td>
                <td>Through center, perpendicular to plane</td>
                <td>{`$MR^2$`}</td>
              </tr>
              <tr>
                <td>Uniform disk</td>
                <td>Through center, perpendicular to plane</td>
                <td>{`$\\tfrac{1}{2} M R^2$`}</td>
              </tr>
              <tr>
                <td>Uniform stick</td>
                <td>Through midpoint, perpendicular to stick</td>
                <td>{`$\\tfrac{1}{12} M L^2$`}</td>
              </tr>
              <tr>
                <td>Uniform stick</td>
                <td>Through one end, perpendicular to stick</td>
                <td>{`$\\tfrac{1}{3} M L^2$`}</td>
              </tr>
              <tr>
                <td>Uniform sphere</td>
                <td>Through any diameter</td>
                <td>{`$\\tfrac{2}{5} M R^2$`}</td>
              </tr>
            </tbody>
          </table>

          <div className="ref-formula">
            <span className="ref-formula-name">Parallel axis theorem</span>
            <div className="ref-formula-eq">{`$$I = I_0 + M\\ell^2$$`}</div>
            <p className="ref-formula-desc">{`When to use: you know $I_0$ about the center-of-mass axis and want $I$ about a parallel axis at perpendicular distance $\\ell$.`}</p>
          </div>
        </>,

        <>
          <h2>Pure Rotation About an Axis</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational version of F = ma</span>
            <div className="ref-formula-eq">{`$$\\tau = I\\alpha$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rigid body rotates about a fixed axis at rest with angular acceleration $\\alpha$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational kinetic energy</span>
            <div className="ref-formula-eq">{`$$K = \\tfrac{1}{2} I\\omega^2$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rigid body rotates about a fixed axis at angular speed $\\omega$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Atwood with massive pulley</span>
            <div className="ref-formula-eq">{`$$a = \\frac{(M_1 - M_2)g}{M_1 + M_2 + \\frac{M_p}{2}}$$`}</div>
            <p className="ref-formula-desc">
              When to use: two hanging masses are connected over a pulley modeled as a uniform disk.
            </p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Pure Rotation Quantity</th>
                <th>Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Angular momentum</td>
                <td>{`$L = I\\omega$`}</td>
              </tr>
              <tr>
                <td>Torque</td>
                <td>{`$\\tau = I\\alpha$`}</td>
              </tr>
              <tr>
                <td>Kinetic energy</td>
                <td>{`$K = \\tfrac{1}{2} I\\omega^2$`}</td>
              </tr>
            </tbody>
          </table>
        </>,

        <>
          <h2>The Physical Pendulum</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Simple pendulum equation</span>
            <div className="ref-formula-eq">{`$$\\ell\\ddot\\phi + g\\phi = 0$$`}</div>
            <p className="ref-formula-desc">{`When to use: a point mass on a string of length $\\ell$ swings at small angles.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Simple pendulum period</span>
            <div className="ref-formula-eq">{`$$T = 2\\pi\\sqrt{\\frac{\\ell}{g}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: small-angle pendulum with point bob and length $\\ell$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Physical pendulum frequency</span>
            <div className="ref-formula-eq">{`$$\\omega = \\sqrt{\\frac{Mg\\ell}{I_p}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: an extended body of mass $M$ swings about a pivot, with $I_p$ the moment of inertia about the pivot and $\\ell$ the pivot-to-CM distance.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Physical pendulum with radius of gyration</span>
            <div className="ref-formula-eq">{`$$\\omega = \\sqrt{\\frac{g\\ell}{k^2 + \\ell^2}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: you know the radius of gyration $k$ about the center of mass instead of $I_p$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Radius of gyration</span>
            <div className="ref-formula-eq">{`$$k = \\sqrt{\\frac{I_0}{M}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: you want to express $I_0 = Mk^2$ to compare different shapes.`}</p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Body</th>
                <th>{`Radius of gyration $k$`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hoop</td>
                <td>{`$R$`}</td>
              </tr>
              <tr>
                <td>Disk</td>
                <td>{`$\\frac{R}{\\sqrt{2}}$`}</td>
              </tr>
              <tr>
                <td>Sphere</td>
                <td>{`$\\sqrt{\\tfrac{2}{5}}\\,R$`}</td>
              </tr>
            </tbody>
          </table>

          <div className="ref-formula">
            <span className="ref-formula-name">Higher-order pendulum period</span>
            <div className="ref-formula-eq">{`$$T = T_0(1 + \\tfrac{1}{16}\\phi_0^2 + \\dots)$$`}</div>
            <p className="ref-formula-desc">{`When to use: a pendulum oscillates at moderate amplitude $\\phi_0$ and you need the leading correction to the small-angle period.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Kater's pendulum period</span>
            <div className="ref-formula-eq">{`$$T = 2\\pi\\sqrt{\\frac{\\ell_A + \\ell_B}{g}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: two opposite-side knife-edge supports give the same period; precision $g$ measurement.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Kater's gyration relation</span>
            <div className="ref-formula-eq">{`$$k^2 = \\ell_A \\ell_B$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want to extract the radius of gyration from Kater's measurements.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Center of percussion</span>
            <div className="ref-formula-eq">{`$$\\ell = \\frac{I}{M\\ell'}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want to hit a hinged body so the hinge feels no impulsive reaction.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Door's center of percussion</span>
            <div className="ref-formula-eq">{`$$\\ell = \\tfrac{2}{3} w$$`}</div>
            <p className="ref-formula-desc">{`When to use: a uniform rectangular door of width $w$.`}</p>
          </div>
        </>,

        <>
          <h2>Combined Translation and Rotation</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Particle-sum form of L</span>
            <div className="ref-formula-eq">{`$$\\mathbf{L} = \\sum_j (\\mathbf{r}_j \\times m_j\\dot{\\mathbf{r}}_j)$$`}</div>
            <p className="ref-formula-desc">
              When to use: starting point for splitting angular momentum into spin and orbital
              pieces.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Center of mass</span>
            <div className="ref-formula-eq">{`$$\\mathbf{R} = \\frac{\\sum_j m_j\\mathbf{r}_j}{M}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you need the mass-weighted average position of a body.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Spin plus orbital angular momentum</span>
            <div className="ref-formula-eq">{`$$\\mathbf{L} = \\mathbf{R} \\times M\\mathbf{V} + \\sum_j \\mathbf{r}'_j \\times m_j\\dot{\\mathbf{r}}'_j$$`}</div>
            <p className="ref-formula-desc">
              When to use: any rigid body with translating center of mass and internal rotation.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">L_z split</span>
            <div className="ref-formula-eq">{`$$L_z = (\\mathbf{R} \\times M\\mathbf{V})_z + (\\sum_j \\mathbf{r}'_j \\times m_j\\dot{\\mathbf{r}}'_j)_z$$`}</div>
            <p className="ref-formula-desc">{`When to use: planar motion where you want the $z$ component split into orbital and spin pieces.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">L_z for fixed-axis spin</span>
            <div className="ref-formula-eq">{`$$L_z = I_0\\omega + (\\mathbf{R} \\times M\\mathbf{V})_z$$`}</div>
            <p className="ref-formula-desc">{`When to use: a rigid body rotates about its CM at angular speed $\\omega$ and the CM moves with velocity $\\mathbf{V}$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rolling wheel total L_z</span>
            <div className="ref-formula-eq">{`$$L_z = -\\tfrac{3}{2} M b^2 \\omega$$`}</div>
            <p className="ref-formula-desc">
              When to use: a uniform wheel rolls without slipping with the standard sign convention.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Torque split</span>
            <div className="ref-formula-eq">{`$$\\boldsymbol{\\tau} = \\sum_j \\mathbf{r}'_j \\times \\mathbf{f}_j + \\mathbf{R} \\times \\mathbf{F}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want to separate torques about the CM from the orbital torque of the
              net force.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">tau_z split</span>
            <div className="ref-formula-eq">{`$$\\tau_z = \\tau_{0z} + (\\mathbf{R} \\times \\mathbf{F})_z$$`}</div>
            <p className="ref-formula-desc">{`When to use: planar motion needing the $z$ component of the torque split.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">dL_z/dt split</span>
            <div className="ref-formula-eq">{`$$\\frac{dL_z}{dt} = I_0\\alpha + (\\mathbf{R} \\times M\\mathbf{a})_z$$`}</div>
            <p className="ref-formula-desc">
              When to use: you differentiate the spin-plus-orbital decomposition in time.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Center-of-mass torque law</span>
            <div className="ref-formula-eq">{`$$\\tau_0 = I_0\\alpha$$`}</div>
            <p className="ref-formula-desc">
              When to use: rotation about the CM, even when the CM accelerates.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Kinetic energy decomposition</span>
            <div className="ref-formula-eq">{`$$K = \\tfrac{1}{2} I\\omega^2 + \\tfrac{1}{2} M V^2$$`}</div>
            <p className="ref-formula-desc">
              When to use: any rigid body translating and rotating; computes total kinetic energy.
            </p>
          </div>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Rotation + Translation Quantity</th>
                <th>Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Angular momentum</td>
                <td>{`$L_z = I_0\\omega + (\\mathbf{R}\\times M\\mathbf{V})_z$`}</td>
              </tr>
              <tr>
                <td>Torque</td>
                <td>{`$\\tau_z = \\tau_{0z} + (\\mathbf{R}\\times\\mathbf{F})_z$`}</td>
              </tr>
              <tr>
                <td>Center-of-mass torque</td>
                <td>{`$\\tau_0 = I_0\\alpha$`}</td>
              </tr>
              <tr>
                <td>Kinetic energy</td>
                <td>{`$K = \\tfrac{1}{2} I\\omega^2 + \\tfrac{1}{2} M V^2$`}</td>
              </tr>
            </tbody>
          </table>

          <div className="ref-formula">
            <span className="ref-formula-name">Translational work-energy theorem</span>
            <div className="ref-formula-eq">{`$$\\int \\mathbf{F}\\cdot d\\mathbf{R} = \\tfrac{1}{2} M V_b^2 - \\tfrac{1}{2} M V_a^2$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the work done by the net force on the center of mass.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rotational work-energy theorem</span>
            <div className="ref-formula-eq">{`$$\\int \\tau_0\\,d\\theta = \\tfrac{1}{2} I_0\\omega_b^2 - \\tfrac{1}{2} I_0\\omega_a^2$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the work done by the torque about the center of mass.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Rolling drum speed (energy)</span>
            <div className="ref-formula-eq">{`$$V = \\sqrt{\\frac{4gh}{3}}$$`}</div>
            <p className="ref-formula-desc">{`When to use: a uniform drum rolls without slipping down a vertical drop $h$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Falling stick speed</span>
            <div className="ref-formula-eq">{`$$\\dot{y}^2 = \\frac{6gy\\sin^2\\theta}{3\\sin^2\\theta + 1}$$`}</div>
            <p className="ref-formula-desc">{`When to use: a uniform stick stands on frictionless ice and falls; $y$ is the vertical drop of the CM and $\\theta$ is the angle from vertical.`}</p>
          </div>
        </>,

        <>
          <h2>The Bohr Atom</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Balmer-Rydberg formula</span>
            <div className="ref-formula-eq">{`$$\\frac{1}{\\lambda} = R_y(\\frac{1}{m^2} - \\frac{1}{n^2}),\\ R_y = 109{,}700\\text{ cm}^{-1}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the wavelength of a hydrogen spectral line.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr photon frequency</span>
            <div className="ref-formula-eq">{`$$\\nu = \\frac{E_a - E_b}{h}$$`}</div>
            <p className="ref-formula-desc">
              When to use: a transition occurs between two stationary atomic states.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr quantization</span>
            <div className="ref-formula-eq">{`$$L = \\frac{nh}{2\\pi}$$`}</div>
            <p className="ref-formula-desc">{`When to use: angular momentum is quantized in integer multiples of $\\frac{h}{2\\pi}$, often written $\\hbar = \\frac{h}{2\\pi}$.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr radial equation</span>
            <div className="ref-formula-eq">{`$$\\frac{m_e v^2}{r} = \\frac{e^2}{r^2}$$`}</div>
            <p className="ref-formula-desc">
              When to use: classical circular motion of an electron under the Coulomb force.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Hydrogen total energy</span>
            <div className="ref-formula-eq">{`$$E = \\tfrac{1}{2} m_e v^2 - \\frac{e^2}{r}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you compute the energy of a circular electron orbit.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Energy on a circular orbit</span>
            <div className="ref-formula-eq">{`$$E = -\\frac{\\tfrac{1}{2} e^2}{r}$$`}</div>
            <p className="ref-formula-desc">
              When to use: combining the radial equation with the energy expression.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr radii</span>
            <div className="ref-formula-eq">{`$$r_n = \\frac{n^2 h^2}{4\\pi^2 m_e e^2}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the allowed orbital radii of the hydrogen electron.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Bohr energy levels</span>
            <div className="ref-formula-eq">{`$$E_n = -\\frac{2\\pi^2 m_e e^4}{n^2 h^2}$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the allowed energies of the hydrogen electron.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Photon frequency from Bohr</span>
            <div className="ref-formula-eq">{`$$\\nu = \\frac{2\\pi^2 m_e e^4}{h^3}(\\frac{1}{m^2} - \\frac{1}{n^2})$$`}</div>
            <p className="ref-formula-desc">
              When to use: you want the frequency of a hydrogen spectral line from first principles.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Photon wavelength from Bohr</span>
            <div className="ref-formula-eq">{`$$\\frac{1}{\\lambda} = \\frac{2\\pi^2 m_e e^4}{c h^3}(\\frac{1}{m^2} - \\frac{1}{n^2})$$`}</div>
            <p className="ref-formula-desc">{`When to use: you want $\\frac{1}{\\lambda}$ for a hydrogen line and recognize the prefactor as $R_y$.`}</p>
          </div>
        </>,

        <>
          <h2>Why Rigid-Body Motion Splits into Translation and Rotation</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Rigid-body condition</span>
            <div className="ref-formula-eq">{`$$(\\mathbf{r}_2 - \\mathbf{r}_1)\\cdot(d\\mathbf{r}_2 - d\\mathbf{r}_1) = 0$$`}</div>
            <p className="ref-formula-desc">
              When to use: the differential rigidity constraint between two particles in a rigid
              body.
            </p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Residual displacement</span>
            <div className="ref-formula-eq">{`$$d\\mathbf{r}'_j = d\\mathbf{r}_j - d\\mathbf{R}$$`}</div>
            <p className="ref-formula-desc">
              When to use: subtract the center-of-mass displacement to isolate the rotational piece.
            </p>
          </div>
        </>,

        <>
          <h2>The Pendulum Beyond Small Angles</h2>

          <div className="ref-formula">
            <span className="ref-formula-name">Pendulum elliptic-integral period</span>
            <div className="ref-formula-eq">{`$$T = 4\\sqrt{\\frac{\\ell}{g}}\\,K(\\sin\\frac{\\phi_0}{2})$$`}</div>
            <p className="ref-formula-desc">{`When to use: a pendulum at finite amplitude $\\phi_0$, where $K$ is the complete elliptic integral of the first kind.`}</p>
          </div>

          <div className="ref-formula">
            <span className="ref-formula-name">Series expansion of pendulum period</span>
            <div className="ref-formula-eq">{`$$T = 2\\pi\\sqrt{\\frac{\\ell}{g}}(1 + \\tfrac{1}{4}\\sin^2\\frac{\\phi_0}{2} + \\dots) \\approx 2\\pi\\sqrt{\\frac{\\ell}{g}}(1 + \\tfrac{1}{16}\\phi_0^2 + \\dots)$$`}</div>
            <p className="ref-formula-desc">
              When to use: moderate-amplitude pendulum where you want a quick correction to the
              small-angle period.
            </p>
          </div>
        </>
      ]
    },
    customCss: null
  }

  return <LearningTemplate config={config} />
}
