import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  Plot as P7,
  Axes as A7,
  Parametric as Pa7,
  Polyline as Pl7,
  Dot as D7,
  CircleSh as C7,
  Arrow as Ar7,
  Tex as T7,
  Slider as Sl7,
  DragHandle as DH7,
  OPACITY as O7
} from '../../../../../components/viz/primitives'
import { VizFigure } from '../../../../../components/viz-figure'
import { rk4Step as rk47 } from '../../../../../components/viz/physics'

export function EulerGimbals() {
  const [phi, setPhi] = React.useState(0.7)
  const [theta, setTheta] = React.useState(0.55)
  const [psi, setPsi] = React.useState(0.9)
  // Honest ZXZ Euler-angle geometry, orthographically projected (z up):
  //   line of nodes  n  = Rz(phi) x-hat            (phi rotates n round the space equator)
  //   body axis      e3 = Rz(phi) Rx(theta) z-hat  (theta tips e3 away from z)
  //   body e1        e1 = cos(psi) n + sin(psi) (e3 x n)  (psi turns e1 round the body equator)
  // The two unit great circles really intersect along +-n, because the line of
  // nodes IS the intersection of the space and body equatorial planes.
  const AZ = 0.5,
    EL = 0.35
  const sa = Math.sin(AZ),
    ca = Math.cos(AZ),
    se = Math.sin(EL),
    ce = Math.cos(EL)
  const proj = v => [-sa * v[0] + ca * v[1], -se * (ca * v[0] + sa * v[1]) + ce * v[2]]
  const lerp3 = (a, b, c1, c2) => [
    c1 * a[0] + c2 * b[0],
    c1 * a[1] + c2 * b[1],
    c1 * a[2] + c2 * b[2]
  ]
  const XHAT = [1, 0, 0],
    YHAT = [0, 1, 0],
    ZHAT = [0, 0, 1]
  const n = [Math.cos(phi), Math.sin(phi), 0]
  const st = Math.sin(theta),
    ct = Math.cos(theta)
  const e3 = [st * Math.sin(phi), -st * Math.cos(phi), ct]
  const bb = [-ct * Math.sin(phi), ct * Math.cos(phi), st] // e3 x n
  const e1 = lerp3(n, bb, Math.cos(psi), Math.sin(psi))
  // great-circle arc r*(cos t * a + sin t * b), t in [t0, t1], projected
  const arc = (a, b, r, t0, t1, N = 96) =>
    Array.from({ length: N + 1 }, (_, i) => {
      const t = t0 + (i / N) * (t1 - t0)
      return proj(lerp3(a, b, r * Math.cos(t), r * Math.sin(t)))
    })
  const dTh = [Math.sin(phi), -Math.cos(phi), 0] // unit vector z rotates toward at angle theta
  const zTip = proj([0, 0, 1.45])
  const xTip = proj([1.3, 0, 0])
  const nTip = proj(lerp3(n, n, 1.35, 0))
  const e3Tip = proj(lerp3(e3, e3, 1.45, 0))
  const e1Dot = proj(e1)
  const phiMid = proj(lerp3(XHAT, YHAT, 0.76 * Math.cos(phi / 2), 0.76 * Math.sin(phi / 2)))
  const thMid = proj(lerp3(ZHAT, dTh, 0.7 * Math.cos(theta / 2), 0.7 * Math.sin(theta / 2)))
  const psiMid = proj(lerp3(n, bb, 0.76 * Math.cos(psi / 2), 0.76 * Math.sin(psi / 2)))
  // Isotropic frame (pad 16): (520-32)/3.6 = (400-32)/2.71475 px per unit, so the
  // projected great circles are true orthographic ellipses on screen.
  const YMIN = -1.15
  const YMAX = YMIN + (3.6 * 368) / 488
  return (
    <div style={{ width: '100%' }}>
      <P7 xRange={[-1.8, 1.8]} yRange={[YMIN, YMAX]} width={520} height={400}>
        {/* space frame: equator, z axis, x reference axis */}
        <Pl7 points={arc(XHAT, YHAT, 1, 0, 2 * Math.PI)} opacity={O7.faint} strokeWidth={1} />
        <Ar7 from={[0, 0]} to={zTip} opacity={O7.dim} head={5} />
        <T7 at={zTip} dy={-6} anchor="middle" tex="z" opacity={O7.dim} size={12} />
        <Pa7 xy={t => [t * xTip[0], t * xTip[1]]} t={[0, 1]} samples={2} opacity={O7.faint} />
        <T7 at={xTip} dx={-4} dy={12} anchor="end" tex="x" opacity={O7.faint} size={11} />
        {/* phi: line of nodes swings round the space equator */}
        <Pa7
          xy={t => {
            const p = proj(lerp3(n, n, -1.35 + t * 2.7, 0))
            return p
          }}
          t={[0, 1]}
          samples={2}
          opacity={O7.dim}
        />
        <T7
          at={nTip}
          dx={nTip[0] >= 0 ? 6 : -6}
          dy={10}
          anchor={nTip[0] >= 0 ? 'start' : 'end'}
          tex="N"
          opacity={O7.dim}
          size={11}
        />
        <Pl7 points={arc(XHAT, YHAT, 0.6, 0, phi)} opacity={O7.dim} strokeWidth={1.2} />
        <T7 at={phiMid} anchor="middle" dy={4} tex="\varphi" opacity={O7.dim} size={12} />
        {/* theta: body axis e3 tips away from z */}
        <Ar7 from={[0, 0]} to={e3Tip} opacity={O7.fg} head={6} />
        <T7
          at={e3Tip}
          dx={e3Tip[0] >= 0 ? 6 : -6}
          dy={-4}
          anchor={e3Tip[0] >= 0 ? 'start' : 'end'}
          tex="x_3"
          opacity={O7.fg}
          size={12}
        />
        <Pl7 points={arc(ZHAT, dTh, 0.55, 0, theta)} opacity={O7.fg} strokeWidth={1.2} />
        <T7 at={thMid} anchor="middle" dy={-4} tex="\theta" opacity={O7.fg} size={12} />
        {/* psi: body equator (the inner gimbal ring, perpendicular to x3) */}
        <Pl7 points={arc(n, bb, 1, 0, 2 * Math.PI)} opacity={O7.accent} strokeWidth={1.5} />
        <Pl7 points={arc(n, bb, 0.6, 0, psi)} opacity={O7.accent} strokeWidth={1.2} />
        <T7 at={psiMid} anchor="middle" dy={4} tex="\psi" opacity={O7.accent} size={12} />
        <D7 x={e1Dot[0]} y={e1Dot[1]} />
        <T7
          at={proj(lerp3(e1, e1, 1.12, 0))}
          anchor={e1Dot[0] >= 0 ? 'start' : 'end'}
          dy={4}
          tex="x_1"
          opacity={O7.accent}
          size={11}
        />
        <D7 x={0} y={0} />
      </P7>
      <Sl7
        label="φ"
        value={phi}
        min={0}
        max={2 * Math.PI}
        step={0.02}
        onChange={setPhi}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
      <Sl7
        label="θ"
        value={theta}
        min={0}
        max={Math.PI}
        step={0.02}
        onChange={setTheta}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
      <Sl7
        label="ψ"
        value={psi}
        min={0}
        max={2 * Math.PI}
        step={0.02}
        onChange={setPsi}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
    </div>
  )
}

export function InertiaEllipsoid() {
  const a = 2.6,
    b = 1.4
  const I1 = 1 / (a * a),
    I2 = 1 / (b * b)
  const [ang, setAng] = React.useState(0.6)
  const ell = Array.from({ length: 121 }, (_, i) => {
    const t = (i / 120) * 2 * Math.PI
    return [a * Math.cos(t), b * Math.sin(t)]
  })
  const ox = a * Math.cos(ang),
    oy = b * Math.sin(ang)
  const Mx = I1 * ox,
    My = I2 * oy
  const mNorm = Math.hypot(Mx, My)
  const ml = 1.15
  const tipX = ox + (Mx / mNorm) * ml
  const tipY = oy + (My / mNorm) * ml
  // Isotropic frame (inner 488x358 for spans 7.9x5.8) - M = I-Omega is the gradient
  // of Omega.I-Omega = 2T, so it must look NORMAL to the ellipse on screen.
  const labelX = Math.max(-3.3, Math.min(3.3, tipX))
  return (
    <div style={{ width: '100%' }}>
      <P7 xRange={[-3.95, 3.95]} yRange={[-2.9, 2.9]} width={520} height={390}>
        <A7 step={1} showGrid={false} />
        <Pl7 points={ell} opacity={O7.fg} closed strokeWidth={1.5} />
        <Ar7 from={[0, 0]} to={[ox, oy]} opacity={O7.accent} head={7} strokeWidth={1.5} />
        <Ar7 from={[ox, oy]} to={[tipX, tipY]} opacity={O7.dim} head={6} />
        <DH7 x={ox} y={oy} onChange={(x, y) => setAng(Math.atan2(y / b, x / a))} />
        <T7 at={[ox * 0.5 + 0.15, oy * 0.5 - 0.05]} tex="\boldsymbol{\Omega}" opacity={O7.accent} />
        <T7
          at={[labelX, tipY]}
          dy={oy >= 0 ? -12 : 18}
          anchor="middle"
          tex="\mathbf{M}=I\boldsymbol{\Omega}"
          opacity={O7.dim}
        />
        <T7
          at={[-3.8, 2.68]}
          tex={`\\boldsymbol{\\Omega}\\cdot I\\boldsymbol{\\Omega}=2T`}
          opacity={O7.fg}
          size={11}
        />
        <T7
          at={[-3.8, -2.7]}
          tex={`I_1=${I1.toFixed(2)},\\;I_2=${I2.toFixed(2)}`}
          opacity={O7.dim}
          size={10}
        />
      </P7>
    </div>
  )
}

export function PrecessionCone() {
  const Iperp = 1.5,
    I3 = 1.0
  const [omega3, setOmega3] = React.useState(2.5)
  const [omegaPerp, setOmegaPerp] = React.useState(0.9)
  const halfAngle = Math.atan2(Iperp * omegaPerp, I3 * omega3)
  const Mmag = Math.sqrt((I3 * omega3) ** 2 + (Iperp * omegaPerp) ** 2)
  const phiDot = Mmag / Iperp
  const coneR = Math.sin(halfAngle) * 2.4
  const coneH = Math.cos(halfAngle) * 2.4
  const [phase, setPhase] = React.useState(0)
  React.useEffect(() => {
    // respect prefers-reduced-motion (house convention)
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf,
      last = performance.now()
    const loop = now => {
      const dt = (now - last) / 1000
      last = now
      setPhase(p => p + dt * phiDot * 0.4)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [phiDot])
  const rim = Array.from({ length: 61 }, (_, i) => {
    const t = (i / 60) * 2 * Math.PI
    return [coneR * Math.cos(t) * 0.55, coneH + coneR * Math.sin(t) * 0.18]
  })
  const tipX = coneR * 0.55 * Math.cos(phase)
  const tipY = coneH + coneR * 0.18 * Math.sin(phase)
  return (
    <div style={{ width: '100%' }}>
      <P7 xRange={[-3, 3]} yRange={[-1, 3]} width={520} height={260}>
        <A7 step={1} showGrid={false} showTicks={false} />
        <Ar7 from={[0, 0]} to={[0, 2.6]} opacity={O7.faint} head={6} />
        <T7 at={[0.1, 2.7]} tex="\mathbf{M}" opacity={O7.dim} />
        <Pa7 xy={t => [-coneR * t, coneH * t]} t={[0, 1]} opacity={O7.dim} dash="4 4" />
        <Pa7 xy={t => [coneR * t, coneH * t]} t={[0, 1]} opacity={O7.dim} dash="4 4" />
        <Ar7 from={[0, 0]} to={[tipX, tipY]} opacity={O7.accent} head={7} strokeWidth={1.5} />
        <T7
          at={[tipX, tipY]}
          dx={tipX >= 0 ? 8 : -8}
          anchor={tipX >= 0 ? 'start' : 'end'}
          tex="e_3"
          opacity={O7.accent}
        />
        <Pl7 points={rim} opacity={O7.dim} />
        {/* the half-angle theta, drawn where it lives: between M and the cone edge */}
        <Pa7
          xy={s => {
            const aa = s * halfAngle
            return [0.9 * Math.sin(aa), 0.9 * Math.cos(aa)]
          }}
          t={[0, 1]}
          samples={32}
          opacity={O7.fg}
        />
        <T7
          at={[0.9 * Math.sin(halfAngle * 0.55) + 0.08, 0.9 * Math.cos(halfAngle * 0.55)]}
          dy={4}
          tex="\theta"
          opacity={O7.fg}
          size={12}
        />
        <T7
          at={[-2.9, 2.7]}
          tex={`\\theta=\\arctan\\tfrac{I_\\perp\\omega_\\perp}{I_3\\omega_3}=${((halfAngle * 180) / Math.PI).toFixed(0)}^\\circ`}
          opacity={O7.fg}
          size={11}
        />
        <T7
          at={[-2.9, 2.25]}
          tex={`\\dot\\varphi=M/I_\\perp=${phiDot.toFixed(2)}`}
          opacity={O7.dim}
          size={10}
        />
      </P7>
      <Sl7 label="ω₃" value={omega3} min={0.3} max={5} step={0.05} onChange={setOmega3} />
      <Sl7 label="ω⊥" value={omegaPerp} min={0.0} max={3} step={0.05} onChange={setOmegaPerp} />
    </div>
  )
}

export function LagrangeTopUeff() {
  const [Mz, setMz] = React.useState(1.0)
  const [M3, setM3] = React.useState(0.8)
  const [E, setE] = React.useState(1.6)
  const Ip = 1.0,
    mgl = 0.5
  const Ueff = th => {
    const s = Math.sin(th),
      c = Math.cos(th)
    if (Math.abs(s) < 0.01) return 10
    return (Mz - M3 * c) ** 2 / (2 * Ip * s * s) + mgl * c
  }
  const N = 200
  const pts = []
  const UCLIP = 3.55 // keep the curve inside the frame (yMax = 3.8)
  for (let i = 0; i < N; i++) {
    const th = 0.1 + (i / (N - 1)) * (Math.PI - 0.2)
    const u = Ueff(th)
    if (u < UCLIP) pts.push([th, u])
  }
  let th1 = null,
    th2 = null
  for (let i = 1; i < pts.length; i++) {
    if ((pts[i - 1][1] - E) * (pts[i][1] - E) <= 0) {
      const th =
        pts[i - 1][0] +
        ((E - pts[i - 1][1]) / (pts[i][1] - pts[i - 1][1])) * (pts[i][0] - pts[i - 1][0])
      if (th1 === null) th1 = th
      else th2 = th
    }
  }
  return (
    <div style={{ width: '100%' }}>
      <P7 xRange={[-0.2, 4.0]} yRange={[-0.4, 3.8]} width={520} height={260}>
        <A7 step={1} showGrid={false} />
        <Pl7 points={pts} opacity={O7.fg} strokeWidth={2} />
        <Pa7 xy={t => [-0.2 + t * 4.2, E]} t={[0, 1]} opacity={O7.accent} dash="4 4" />
        {th1 !== null && th2 !== null && (
          <Pa7
            xy={t => {
              const th = th1 + t * (th2 - th1)
              return [th, Ueff(th)]
            }}
            t={[0, 1]}
            opacity={O7.accent}
            strokeWidth={3}
          />
        )}
        {th1 !== null && <D7 x={th1} y={E} />}
        {th2 !== null && <D7 x={th2} y={E} />}
        <T7
          at={[3.7, E + 0.05]}
          dy={-6}
          tex={`E'=${E.toFixed(2)}`}
          opacity={O7.accent}
          size={11}
          anchor="end"
        />
        <T7 at={[1.45, 0.82]} tex="U_{\rm eff}(\theta)" opacity={O7.fg} size={12} />
        <T7
          at={[Math.PI / 2, 0]}
          dy={16}
          anchor="middle"
          tex="\tfrac{\pi}{2}"
          opacity={O7.faint}
          size={10}
        />
        <T7 at={[Math.PI, 0]} dy={16} anchor="middle" tex="\pi" opacity={O7.faint} size={10} />
        <T7 at={[3.92, 0]} dy={-8} anchor="end" tex="\theta" opacity={O7.faint} size={11} />
        <T7
          at={[3.92, 3.6]}
          anchor="end"
          tex={`I_1=${Ip.toFixed(0)},\\ mgl=${mgl.toFixed(1)}`}
          opacity={O7.faint}
          size={10}
        />
      </P7>
      <Sl7 label="Mz" value={Mz} min={0} max={2} step={0.02} onChange={setMz} />
      <Sl7 label="M₃" value={M3} min={0} max={2} step={0.02} onChange={setM3} />
      <Sl7 label="E'" value={E} min={0.3} max={3.5} step={0.02} onChange={setE} />
    </div>
  )
}

export function PoinsotConstruction() {
  const a = 2.2,
    b = 1.5
  const [ang, setAng] = React.useState(0.6)
  const ell = Array.from({ length: 121 }, (_, i) => {
    const t = (i / 120) * 2 * Math.PI
    return [a * Math.cos(t), b * Math.sin(t)]
  })
  const cx = a * Math.cos(ang),
    cy = b * Math.sin(ang)
  const gradX = (2 * cx) / (a * a),
    gradY = (2 * cy) / (b * b)
  const gradMag = Math.hypot(gradX, gradY)
  const nx = (gradX / gradMag) * 1.2,
    ny = (gradY / gradMag) * 1.2
  // tangent direction at the contact point: the trace of the invariable plane,
  // which is tangent to the inertia ellipsoid and PERPENDICULAR to M.
  const txu = -gradY / gradMag,
    tyu = gradX / gradMag
  const PLEN = 1.7
  // Isotropic frame (inner 488x412 for spans 7.4x6.25) so M really meets pi_inv
  // at a right angle on screen.
  return (
    <div style={{ width: '100%' }}>
      <P7 xRange={[-3.7, 3.7]} yRange={[-3.05, 3.2]} width={520} height={444}>
        <A7 step={1} showGrid={false} />
        <Pl7 points={ell} opacity={O7.fg} closed strokeWidth={1.5} />
        {/* invariable plane: tangent line at the contact point */}
        <Pa7
          xy={t => [cx + (t * 2 - 1) * PLEN * txu, cy + (t * 2 - 1) * PLEN * tyu]}
          t={[0, 1]}
          samples={2}
          opacity={O7.dim}
        />
        <T7
          at={[cx + PLEN * txu, cy + PLEN * tyu]}
          dx={txu >= 0 ? 6 : -6}
          dy={tyu >= 0 ? -4 : 12}
          anchor={txu >= 0 ? 'start' : 'end'}
          tex="\pi_{\rm inv}"
          opacity={O7.dim}
          size={11}
        />
        {/* Omega pierces the ellipsoid at the contact point */}
        <Ar7 from={[0, 0]} to={[cx, cy]} opacity={O7.fg} head={6} />
        <T7
          at={[cx * 0.5, cy * 0.5]}
          dx={cy >= 0 ? 10 : -10}
          dy={cy >= 0 ? 12 : -4}
          anchor={cy >= 0 ? 'start' : 'end'}
          tex="\boldsymbol{\Omega}"
          opacity={O7.fg}
        />
        <DH7 x={cx} y={cy} onChange={(x, y) => setAng(Math.atan2(y / b, x / a))} />
        <Ar7 from={[cx, cy]} to={[cx + nx, cy + ny]} opacity={O7.accent} head={6} />
        <T7
          at={[cx + nx, cy + ny]}
          dx={nx >= 0 ? 8 : -8}
          dy={ny >= 0 ? -4 : 14}
          anchor={nx >= 0 ? 'start' : 'end'}
          tex="\mathbf{M}\perp\pi_{\rm inv}"
          opacity={O7.accent}
        />
      </P7>
    </div>
  )
}

export function TennisRacket() {
  const [perturb, setPerturb] = React.useState(0.15)
  const [axis, setAxis] = React.useState(2)
  const I1 = 1,
    I2 = 2,
    I3 = 3
  const R = 2 // angular-momentum sphere radius (drawn circle)
  // Euler's equations for the free body; we PLOT angular momentum M_i = I_i w_i,
  // because |M| is exactly conserved - every trajectory lives ON the sphere |M| = R,
  // whose silhouette is the drawn circle. (|w| is NOT conserved; plotting w against a
  // fixed circle would be dishonest.)
  const traj = (w0, T = 40, dt = 0.02) => {
    const f = (t, w) => [
      ((I2 - I3) / I1) * w[1] * w[2],
      ((I3 - I1) / I2) * w[2] * w[0],
      ((I1 - I2) / I3) * w[0] * w[1]
    ]
    const out = []
    let w = w0.slice()
    const N = Math.floor(T / dt)
    for (let i = 0; i < N; i++) {
      out.push([I1 * w[0], I3 * w[2]])
      w = rk47(f, 0, w, dt)
    }
    return out
  }
  const raw =
    axis === 1 ? [1.4, perturb, 0.05] : axis === 3 ? [0.05, perturb, 1.4] : [0.1, 1.4, 0.1]
  // normalise the start so |M(0)| = R exactly
  const M0 = Math.hypot(I1 * raw[0], I2 * raw[1], I3 * raw[2])
  const w0 = raw.map(v => (v * R) / M0)
  // a full near-e2 flip cycle (out along one separatrix branch and back along the
  // other) takes ~26 time units for these ICs; T = 52 shows two complete cycles.
  // dt = 0.01 keeps the RK4 energy drift below a pixel so cycle 2 overlays cycle 1.
  const orbit = traj(w0, axis === 2 ? 52 : 40, 0.01)
  // separatrix: E = M^2/(2 I2) on the sphere  =>  M3 = +-sqrt((1/I1-1/I2)/(1/I2-1/I3)) M1
  // = +-sqrt(3) M1 for I=(1,2,3); its two great circles through +-e2 project to the
  // straight chords with endpoints at M2 = 0: M1 = +-R/2, M3 = +-sqrt(3) R/2
  const sepX = R / 2,
    sepY = (Math.sqrt(3) * R) / 2
  return (
    <div style={{ width: '100%' }}>
      <P7 xRange={[-2.9, 2.9]} yRange={[-2.65, 2.65]} width={520} height={448}>
        <C7 cx={0} cy={0} r={R} opacity={O7.faint} />
        <Pl7
          points={[
            [-sepX, -sepY],
            [sepX, sepY]
          ]}
          opacity={O7.faint}
          strokeWidth={1}
        />
        <Pl7
          points={[
            [-sepX, sepY],
            [sepX, -sepY]
          ]}
          opacity={O7.faint}
          strokeWidth={1}
        />
        <T7
          at={[-sepX - 0.08, -sepY - 0.1]}
          anchor="end"
          tex="\text{separatrix}"
          opacity={O7.faint}
          size={10}
        />
        <Pl7 points={orbit} opacity={axis === 2 ? O7.accent : O7.fg} strokeWidth={1.5} />
        <D7 x={R} y={0} />
        <D7 x={-R} y={0} />
        <D7 x={0} y={R} />
        <D7 x={0} y={-R} />
        <T7 at={[R + 0.12, 0.05]} tex="e_1" opacity={O7.fg} />
        <T7 at={[-R - 0.12, 0.05]} anchor="end" tex="-e_1" opacity={O7.fg} />
        <T7 at={[0.12, R + 0.18]} tex="e_3" opacity={O7.fg} />
        <T7 at={[-0.12, -R - 0.28]} anchor="end" tex="-e_3" opacity={O7.fg} />
        <T7
          at={[-2.8, 2.45]}
          tex={
            axis === 2
              ? '\\text{spin near } e_2\\text{ (intermediate): flips}'
              : axis === 1
                ? '\\text{spin near } e_1\\text{: stable}'
                : '\\text{spin near } e_3\\text{: stable}'
          }
          opacity={O7.accent}
          size={11}
        />
        <T7
          at={[2.8, -2.45]}
          anchor="end"
          tex={`\\mathbf{M}\\text{-sphere},\\ (M_1, M_3)\\ \\text{view},\\ I=(1,2,3)`}
          opacity={O7.faint}
          size={10}
        />
      </P7>
      <Sl7
        label="axis"
        value={axis}
        min={1}
        max={3}
        step={1}
        onChange={setAxis}
        format={v => 'e_' + v}
      />
      <Sl7 label="δω" value={perturb} min={0.02} max={0.5} step={0.01} onChange={setPerturb} />
    </div>
  )
}

export default function RigidBodyDynamicsLagrangianGeometricTreatment() {
  const config = {
    cssPrefix: 'rbl',
    documentTitle: 'Rigid-Body Dynamics (Lagrangian / Geometric Treatment) - AETHER',
    learning: {
      groupTitle: 'Lagrangian Mechanics and Variational Principles',
      category: 'Classical Mechanics',
      title: 'Rigid-Body Dynamics (Lagrangian / Geometric Treatment)',
      subtitle:
        'Euler angles, the inertia operator, tops and gyroscopes, and the geometry of free rotation on SO(3)',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Configuration Manifold of a Rigid Body: SO(3)</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`You release a book spinning in the air. Predict which axis it keeps spinning stably and which one causes it to tumble.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The book tumbles when spun about its middle principal axis (the axis of intermediate moment of inertia). It spins cleanly about the axis of largest or smallest moment. This is the tennis-racket theorem: a body spins stably about its largest or smallest axis, never the middle one.`}
                </p>
              </details>
            </div>

            <h3>What Is a Rigid Body?</h3>
            <p>
              {`A rigid body is a system of point masses. Every pair keeps a fixed distance apart: $|x_i - x_j| = r_{ij} = \\text{const}$ for all pairs $(i, j)$. No internal deformation occurs.`}
            </p>
            <p>
              Use this model whenever deformation is negligible. Spinning tops, gyroscopes, planets,
              and thrown objects all qualify.
            </p>

            <h3>Counting Degrees of Freedom</h3>
            <p>
              {`A free rigid body with three non-collinear points has six degrees of freedom. Three coordinates fix the centre of mass position in space. Three more coordinates fix how the body is oriented.`}
            </p>
            <p>
              {`Translation and rotation are independent. The configuration space splits as a direct product: $\\mathbb{R}^3 \\times SO(3)$. The factor $\\mathbb{R}^3$ describes where the body is. The factor $SO(3)$ describes how it is rotated.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`A rigid body has $3N$ coordinates but $\\binom{N}{2}$ distance constraints. For $N=3$ non-collinear points the independent constraints reduce the freedom to exactly 6.`}
              </p>
              <p>
                {`Three points placed fixes all orientations, so adding more points adds no freedom. The remaining 6 split into 3 translational and 3 rotational.`}
              </p>
            </div>

            <h3>The Group SO(3)</h3>
            <p>
              {`$SO(3)$ is the group of all $3 \\times 3$ rotation matrices: matrices $R$ with $R^T R = I$ and $\\det R = +1$. Each element of $SO(3)$ is a rotation of three-dimensional space about some axis by some angle.`}
            </p>
            <p>
              {`When a point of the body is fixed, translations disappear. The configuration space shrinks to $SO(3)$ alone. This is the setting for all the tops studied in this module.`}
            </p>
            <p>
              {`$SO(3)$ is a three-dimensional manifold, and it is not flat. A manifold is a smooth space that looks flat up close but can curve overall. The general manifold and Lie-group machinery is built in the mechanics-on-manifolds topic. Here we use only the parts specific to rotating bodies.`}
            </p>

            <h3>The Hat Map: Angular Velocity as a Tiny Rotation</h3>
            <p>
              {`Sitting at the identity of $SO(3)$ is its Lie algebra $\\mathfrak{so}(3)$. The Lie algebra is the set of tiny rotations near the identity, the velocities the group allows. It is exactly the set of $3 \\times 3$ skew-symmetric matrices.`}
            </p>
            <p>
              {`Every angular-velocity vector $\\boldsymbol{\\omega} = (\\omega_1, \\omega_2, \\omega_3)$ corresponds to one such matrix, written $[\\boldsymbol{\\omega}]_\\times$. This hat map is fixed by one rule: $[\\boldsymbol{\\omega}]_\\times \\boldsymbol{v} = \\boldsymbol{\\omega} \\times \\boldsymbol{v}$ for every vector $\\boldsymbol{v}$. In components:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$[\\boldsymbol{\\omega}]_\\times = \\begin{pmatrix} 0 & -\\omega_3 & \\omega_2 \\\\ \\omega_3 & 0 & -\\omega_1 \\\\ -\\omega_2 & \\omega_1 & 0 \\end{pmatrix}$$`}</span>
            </div>
            <p>
              {`The hat map is one-to-one: vectors in $\\mathbb{R}^3$ match skew matrices in $\\mathfrak{so}(3)$ exactly. This is the correspondence $\\mathfrak{so}(3) \\cong \\mathbb{R}^3$ that lets every later formula switch freely between a spin vector and its matrix.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`A rotation in 3D is determined by an axis (2 parameters on a unit sphere) plus an angle (1 parameter). So $SO(3)$ has dimension 3.`}
              </p>
              <p>
                {`The standard Euler angles $(\\varphi, \\theta, \\psi)$ provide a local coordinate chart covering almost all of $SO(3)$.`}
              </p>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Free Rigid Body</span>
                <p>
                  {`6 degrees of freedom. Configuration space $\\mathbb{R}^3 \\times SO(3)$. Both centre-of-mass position and orientation are free.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Body with One Fixed Point</span>
                <p>
                  {`3 degrees of freedom. Configuration space $SO(3)$ alone. Only orientation varies; position is pinned.`}
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>{`Euler Angles $\\varphi, \\theta, \\psi$ as a Chart on SO(3)`}</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`If you tilt a spinning top slightly away from vertical, which of the three Euler angles changes fastest?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The spin angle $\\psi$ changes fastest for a rapidly spinning top. The spin rate $\\dot{\\psi}$ is the body's own rotation about its symmetry axis $x_3$, and it is large. The nutation $\\theta$ and precession $\\varphi$ rates are both much smaller for a fast top.`}
                </p>
              </details>
            </div>

            <h3>Definition of the Three Angles</h3>
            <p>
              {`Three successive rotations carry the space frame $(X, Y, Z)$ into the body frame $(x_1, x_2, x_3)$.`}
            </p>
            <ul className="lrn-list">
              <li>
                {`$\\varphi$ (precession angle): rotation about the space $Z$-axis. This sweeps the line of nodes $ON$ around the vertical.`}
              </li>
              <li>
                {`$\\theta$ (nutation angle): rotation about the line of nodes $ON$. This tilts the body symmetry axis $x_3$ away from the vertical $Z$. The range is $0 \\leq \\theta \\leq \\pi$.`}
              </li>
              <li>
                {`$\\psi$ (spin angle): rotation about the body $x_3$-axis. This spins the body about its own symmetry axis.`}
              </li>
            </ul>
            <p>
              {`When to use this: use Euler angles whenever you write a Lagrangian for a body with one fixed point. They give explicit coordinates on $SO(3)$ so you can write $T$ and $U$ in terms of $\\dot{\\varphi}$, $\\dot{\\theta}$, $\\dot{\\psi}$.`}
            </p>

            <VizFigure aspect="auto" title="Euler Angles">
              <EulerGimbals />
            </VizFigure>

            <h3>Angular Velocity in Body Coordinates</h3>
            <p>
              {`The total angular velocity $\\boldsymbol{\\Omega}$ is the sum of three partial angular velocities along their respective axes. Projecting each onto the body principal axes $(x_1, x_2, x_3)$ gives:`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\Omega_1 = \\dot{\\varphi}\\sin\\theta\\sin\\psi + \\dot{\\theta}\\cos\\psi$$`}</span>
              <span>{`$$\\Omega_2 = \\dot{\\varphi}\\sin\\theta\\cos\\psi - \\dot{\\theta}\\sin\\psi$$`}</span>
              <span>{`$$\\Omega_3 = \\dot{\\varphi}\\cos\\theta + \\dot{\\psi}$$`}</span>
            </div>
            <p>{`A useful special case sets $\\psi = 0$ (body $x_1$ along the line of nodes):`}</p>
            <div className="lrn-eq">
              <span>{`$$\\Omega_1 = \\dot{\\theta}, \\quad \\Omega_2 = \\dot{\\varphi}\\sin\\theta, \\quad \\Omega_3 = \\dot{\\varphi}\\cos\\theta + \\dot{\\psi}$$`}</span>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The angular velocity contributed by $\\dot{\\varphi}$ points along $Z$. The one from $\\dot{\\theta}$ points along the line of nodes $ON$. The one from $\\dot{\\psi}$ points along $x_3$. Resolve each onto the body axes using the angles already applied. The worked example below does the $\\Omega_1$ component end to end.`}
              </p>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
                <p>{`Derive the $\\Omega_1$ component end to end.`}</p>
                <ol className="lrn-list">
                  <li>
                    {`The $\\dot{\\varphi}$ part points along space $Z$. The body axis $x_3$ sits at angle $\\theta$ from $Z$, so $Z$ has a piece $\\cos\\theta$ along $x_3$ and a piece $\\sin\\theta$ in the $x_1 x_2$ plane. The in-plane piece lies along the line of nodes $ON$.`}
                  </li>
                  <li>
                    {`The spin $\\psi$ rotates the body axes away from $ON$ by angle $\\psi$ about $x_3$. So $ON$ makes angle $\\psi$ with $x_1$. The $\\sin\\theta$ piece therefore projects onto $x_1$ as $\\sin\\theta\\sin\\psi$. This gives the $\\dot{\\varphi}$ contribution: $\\dot{\\varphi}\\sin\\theta\\sin\\psi$.`}
                  </li>
                  <li>
                    {`The $\\dot{\\theta}$ part points along $ON$ itself. Since $ON$ makes angle $\\psi$ with $x_1$, its $x_1$ component is $\\cos\\psi$. This gives the $\\dot{\\theta}$ contribution: $\\dot{\\theta}\\cos\\psi$.`}
                  </li>
                  <li>
                    {`The $\\dot{\\psi}$ part points along $x_3$, perpendicular to $x_1$, so it adds nothing to $\\Omega_1$. Summing the pieces: $\\Omega_1 = \\dot{\\varphi}\\sin\\theta\\sin\\psi + \\dot{\\theta}\\cos\\psi$, the boxed result.`}
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase lrn-faded-partial">
                <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
                <ol className="lrn-list">
                  <li>
                    {`Rotate $\\dot{\\varphi}\\hat{Z}$ first by $\\theta$ about $ON$, then by $\\psi$ about $x_3$. Write the $x_1$ component.`}
                  </li>
                  <li>{`Repeat for the $x_2$ component of $\\dot{\\varphi}\\hat{Z}$.`}</li>
                  <li>
                    {`Add the contribution of $\\dot{\\theta}$ (it is already in the $ON$ direction; project onto $x_1$ and $x_2$).`}
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  {`Start from the boxed formula. In the special case $\\theta = \\pi/2$ (body axis horizontal), verify the three components simplify to $\\Omega_1 = \\dot{\\varphi}\\sin\\psi + \\dot{\\theta}\\cos\\psi$, $\\Omega_2 = \\dot{\\varphi}\\cos\\psi - \\dot{\\theta}\\sin\\psi$, $\\Omega_3 = \\dot{\\psi}$.`}
                </p>
              </div>
            </div>

            <h3>Geometric Picture</h3>
            <p>
              {`The line of nodes $ON$ is the intersection of the space $XY$-plane and the body $x_1 x_2$-plane. It is the hinge axis for the nutation rotation. Its direction in space depends on $\\varphi$; its direction in the body depends on $\\psi$. So to project a rotation about $Z$ onto body axis $x_1$, you must account for both tilts. The result contains $\\sin\\theta\\sin\\psi$ rather than a single angle. That is why the formulas involve products of sines and cosines of two different angles.`}
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Coordinate-Free View</span>
                <p>
                  {`Angular velocity read off from how the rotation matrix $B$ changes: $\\dot{B} = B[\\boldsymbol{\\omega}]_\\times$, where $[\\boldsymbol{\\omega}]_\\times$ is the hat-map skew matrix (defined in the configuration-manifold section) that acts as $\\boldsymbol{\\omega}\\times$. No coordinates needed; the geometry of $SO(3)$ carries all the information.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Explicit-Component View</span>
                <p>
                  {`Euler-angle component formulas $\\Omega_i = f(\\dot{\\varphi}, \\dot{\\theta}, \\dot{\\psi}, \\varphi, \\theta, \\psi)$. Same geometric object, opposite presentations.`}
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-2" data-section-index="2">
            <h2>{`Kinetic Energy on $\\mathfrak{so}(3)$ and the Inertia Operator $A$`}</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`A uniform sphere and a thin rod of equal mass are both spun about their symmetry axes at the same angular speed. Which has more rotational kinetic energy?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The sphere has $I = \\frac{2}{5}\\mu R^2 > 0$ about any axis. The rod's moment about its own symmetry axis is $I_3 = 0$ (all mass lies on the axis). So the rod contributes zero kinetic energy about its own axis. The sphere contributes $T = \\frac{1}{2}I\\omega^2 > 0$. The sphere has more rotational kinetic energy.`}
                </p>
              </details>
            </div>

            <h3>The Inertia Operator A</h3>
            <p>
              {`Start concrete. For a box lined up with its principal axes, the inertia operator is just the diagonal matrix $A = \\mathrm{diag}(I_1, I_2, I_3)$. It sends $\\boldsymbol{\\Omega} = (\\Omega_1, \\Omega_2, \\Omega_3)$ to $\\mathbf{M} = (I_1\\Omega_1, I_2\\Omega_2, I_3\\Omega_3)$. The operator below is the coordinate-free version of this same map.`}
            </p>
            <p>
              {`The inertia operator $A$ maps angular velocity to angular momentum: $A\\boldsymbol{\\Omega} = \\mathbf{M}$. It encodes the full mass distribution of the body in a single linear map. Use the operator formulation when you want to work without choosing coordinates: it unifies the tensor components into one clean statement.`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$A\\boldsymbol{\\Omega} = \\mathbf{M}$$`}</span>
            </div>
            <p>
              {`Here $(\\boldsymbol{X}, \\boldsymbol{Y})$ denotes the inner (dot) product. $A$ is symmetric: $(A\\boldsymbol{X}, \\boldsymbol{Y}) = (A\\boldsymbol{Y}, \\boldsymbol{X})$ for all $\\boldsymbol{X}, \\boldsymbol{Y}$. It is also positive definite: $(A\\boldsymbol{\\Omega}, \\boldsymbol{\\Omega}) > 0$ for $\\boldsymbol{\\Omega} \\neq 0$.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The vector cross-product satisfies a cyclic identity: $([a,b],c) = ([c,a],b)$ - rotating the three vectors around a cycle leaves the scalar triple product unchanged. Using this, the kinetic energy of mass $m_\\alpha$ at position $\\boldsymbol{Q}_\\alpha$ rotating with $\\boldsymbol{X}$ contributes $(A\\boldsymbol{X}, \\boldsymbol{Y}) = \\sum_\\alpha m_\\alpha ([\\boldsymbol{Q}_\\alpha, \\boldsymbol{X}], [\\boldsymbol{Q}_\\alpha, \\boldsymbol{Y}])$, which is symmetric in $\\boldsymbol{X}$ and $\\boldsymbol{Y}$.`}
              </p>
            </div>

            <h3>Kinetic Energy via the Operator</h3>
            <p>{`The kinetic energy of rotation takes a clean form in terms of $A$:`}</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$T = \\tfrac{1}{2}(A\\boldsymbol{\\Omega}, \\boldsymbol{\\Omega}) = \\tfrac{1}{2}(\\mathbf{M}, \\boldsymbol{\\Omega})$$`}</span>
            </div>
            <p>
              {`This is a left-invariant Riemannian metric on $SO(3)$. A Riemannian metric is a rule for measuring length and angle at each point. Left-invariant means the rule looks the same after you rotate the body, so the body's own spin does not change the geometry. Every rigid body defines one such metric through its mass distribution.`}
            </p>

            <h3>Principal Axes and Principal Moments</h3>
            <p>
              {`Principal axes and principal moments are built in the Newtonian rigid-body topic. In the operator language they are simply the eigenvectors $e_1, e_2, e_3$ and eigenvalues $I_1, I_2, I_3$ of the symmetric operator $A$. The spectral theorem guarantees three perpendicular axes.`}
            </p>
            <p>In principal axes:</p>
            <div className="lrn-eq">
              <span>{`$$\\mathbf{M} = (I_1\\Omega_1,\\; I_2\\Omega_2,\\; I_3\\Omega_3), \\qquad T = \\tfrac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2)$$`}</span>
            </div>
            <p>
              {`The principal moments satisfy the triangle inequality: $I_1 + I_2 \\geq I_3$ (and cyclic permutations).`}
            </p>

            <h3>The Inertia Ellipsoid</h3>
            <p>The inertia ellipsoid is the set:</p>
            <div className="lrn-eq">
              <span>{`$$\\mathcal{E} = \\{\\boldsymbol{\\Omega} : (A\\boldsymbol{\\Omega}, \\boldsymbol{\\Omega}) = 1\\} = \\{(\\Omega_1, \\Omega_2, \\Omega_3) : I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2 = 1\\}$$`}</span>
            </div>
            <p>
              {`Its semi-axes have lengths $1/\\sqrt{I_1}$, $1/\\sqrt{I_2}$, $1/\\sqrt{I_3}$ along the principal axes. A large moment means a short axis; a small moment means a long axis.`}
            </p>

            <VizFigure aspect="auto" title="Inertia Ellipsoid">
              <InertiaEllipsoid />
            </VizFigure>

            <h3>Worked Example: Inertia Operator of a Rectangular Parallelepiped</h3>
            <p>
              {`A uniform rectangular box of mass $\\mu$ and side lengths $a \\times b \\times c$ has principal moments:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$I_1 = \\tfrac{1}{12}\\mu(b^2 + c^2), \\quad I_2 = \\tfrac{1}{12}\\mu(a^2 + c^2), \\quad I_3 = \\tfrac{1}{12}\\mu(a^2 + b^2)$$`}</span>
            </div>
            <p>
              {`For a cube ($a = b = c$), all three principal moments are equal: $I_1 = I_2 = I_3 = \\mu a^2/6$. The cube is a spherical top.`}
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Why does the cube have equal principal moments?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`The cube has four-fold symmetry about each axis through opposite face centres. Any axis through the centre that lies in a symmetry plane gives the same moment. The equal-moment result follows from the symmetry of the mass distribution, not from direct integration.`}
                </p>
              </details>
            </div>

            <h3>Standard Inertia Results</h3>
            <ul className="lrn-list">
              <li>{`Thin rod of length $l$: $I_1 = I_2 = \\tfrac{1}{12}\\mu l^2$, $I_3 = 0$`}</li>
              <li>{`Sphere of radius $R$: $I_1 = I_2 = I_3 = \\tfrac{2}{5}\\mu R^2$`}</li>
              <li>
                {`Circular cylinder (radius $R$, height $h$): $I_1 = I_2 = \\tfrac{1}{4}\\mu R^2 + \\tfrac{1}{12}\\mu h^2$, $I_3 = \\tfrac{1}{2}\\mu R^2$`}
              </li>
              <li>
                {`Ellipsoid (semi-axes $a, b, c$): $I_1 = \\tfrac{1}{5}\\mu(b^2+c^2)$, $I_2 = \\tfrac{1}{5}\\mu(a^2+c^2)$, $I_3 = \\tfrac{1}{5}\\mu(a^2+b^2)$`}
              </li>
            </ul>
            <p>
              {`The parallel-axis (Steiner) theorem, built in the Newtonian rigid-body topic, shifts from the centre-of-mass axes to any parallel axis displaced by $\\mathbf{a}$: $I'_{ik} = I_{ik} + \\mu(|\\mathbf{a}|^2 \\delta_{ik} - a_i a_k)$.`}
            </p>

            <h3>Perpendicular-Axis Theorem (Coplanar Systems)</h3>
            <p>
              {`For a planar rigid body lying entirely in the $x_1 x_2$ plane, the perpendicular-axis theorem holds:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$I_1 + I_2 = I_3$$`}</span>
            </div>
            <p>
              {`$I_3$ is the moment about the axis perpendicular to the plate. $I_1$ and $I_2$ are the moments about axes lying in the plane. This identity holds exactly for any flat plate.`}
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Inertia Tensor (Component Form)</span>
                <p>
                  {`Explicit component matrix $I_{ik}$, direct mass-distribution formula $I_{ik} = \\int \\rho(|\\mathbf{r}|^2 \\delta_{ik} - x_i x_k)\\, dV$.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Inertia Operator (Coordinate-Free Form)</span>
                <p>
                  {`Abstract symmetric positive operator on $\\mathfrak{so}(3)$: $A\\boldsymbol{\\Omega} = \\mathbf{M}$. Same physical content, different mathematical language.`}
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-3" data-section-index="3">
            <h2>{`The Lagrangian $L = T - U$; Euler-Lagrange Equations on SO(3)`}</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`Write the Lagrangian for a symmetric top ($I_1 = I_2 = I'$) in a gravitational field. Which coordinates will turn out to be cyclic?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The Lagrangian is $L = \\frac{1}{2}I'(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)^2 - mg\\ell\\cos\\theta$. The coordinates $\\varphi$ and $\\psi$ are cyclic because $U = mg\\ell\\cos\\theta$ depends only on $\\theta$. Their conjugate momenta $M_z$ and $M_3$ are conserved.`}
                </p>
              </details>
            </div>

            <h3>The Full Rigid-Body Lagrangian</h3>
            <p>
              {`When to use this: write this Lagrangian when you need equations of motion. Required setup: a body with one fixed point in a potential field.`}
            </p>
            <p>
              {`The total kinetic energy of a free rigid body splits into translational and rotational parts. The Lagrangian is $L = T - U$, where $U$ is the potential energy. For a body with one fixed point and in a gravitational field:`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$L = \\tfrac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2) - U(\\varphi, \\theta, \\psi)$$`}</span>
            </div>

            <h3>Equations of Motion: Two Sets</h3>
            <p>{`The Euler-Lagrange equations for a rigid body give two vector equations:`}</p>
            <div className="lrn-eq">
              <span>{`$$\\frac{d\\mathbf{P}}{dt} = \\mathbf{F}, \\qquad \\frac{d\\mathbf{M}}{dt} = \\mathbf{K}$$`}</span>
            </div>
            <p>
              {`The first is Newton's second law for the centre of mass. The second is the angular-momentum equation, where $\\mathbf{K} = \\sum \\mathbf{r} \\times \\mathbf{f}$ is the total torque.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Apply the Euler-Lagrange equation to a rotation angle $\\varphi$. The left side $\\frac{d}{dt}(\\partial L/\\partial \\dot{\\varphi})$ is $\\dot{M}$ along that axis.`}
              </p>
              <p>
                {`The right side $\\partial L/\\partial \\varphi = -\\partial U/\\partial \\varphi$ is the torque $K$ along that axis. So the rotational equation $\\dot{M} = K$ is just Euler-Lagrange for an angle. This works for all three rotation angles.`}
              </p>
            </div>

            <h3>The Lagrangian of the Symmetric Top in Euler Angles</h3>
            <p>
              {`Take a symmetric top ($I_1 = I_2 = I'$) with one fixed point in gravity. Substituting the Euler-angle $\\Omega$ components gives:`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$L = \\tfrac{1}{2}I'\\!\\left(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\!\\theta\\right) + \\tfrac{1}{2}I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)^2 - U$$`}</span>
            </div>
            <p>
              {`where $U = \\mu g \\ell \\cos\\theta$ for the heavy symmetric top (the Lagrange top). Here $\\ell$ is the distance from the fixed point to the centre of mass.`}
            </p>

            <h3>Cyclic Coordinates and Conservation Laws</h3>
            <p>
              {`Recall a cyclic coordinate: one that does not appear in $L$, so its conjugate momentum is conserved. In the Lagrange top, $\\varphi$ and $\\psi$ do not appear in $L$ (only their time derivatives do). So both are cyclic:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$p_\\varphi = I'(\\dot{\\varphi}\\sin^2\\!\\theta) + I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)\\cos\\theta = M_z = \\text{const}$$`}</span>
            </div>
            <div className="lrn-eq">
              <span>{`$$p_\\psi = I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta) = M_3 = \\text{const}$$`}</span>
            </div>
            <p>
              {`$M_z$ is the component of angular momentum along the fixed space $Z$-axis. $M_3$ is the component along the body symmetry axis $x_3$.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The potential $U = \\mu g \\ell \\cos\\theta$ depends only on $\\theta$, not on $\\varphi$. So rotating the whole system about the vertical $Z$-axis (changing $\\varphi$) does not change $U$.`}
              </p>
              <p>
                {`By Noether's theorem, the symmetry of $L$ under $\\varphi \\to \\varphi + \\text{const}$ gives the conservation of $M_z$.`}
              </p>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Euler-Angle Formula</span>
                <p>
                  {`$L = \\frac{1}{2}I'(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)^2 - U$. Explicit and ready to compute with.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Left-Invariant Metric</span>
                <p>
                  {`$L = \\frac{1}{2}\\langle A\\boldsymbol{\\omega}, \\boldsymbol{\\omega}\\rangle - U$. Coordinate-free; reveals why the metric is left-invariant under body rotations. Same object, two languages.`}
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-4" data-section-index="4">
            <h2>Free Symmetric Top via Cyclic Coordinates and Routhian</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`A symmetric top spins freely with no gravity. The body symmetry axis starts at angle $\\theta_0$ to the fixed angular momentum vector. Predict what happens to $\\theta$ over time.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`$\\theta$ stays constant. For the free symmetric top, the effective potential has a flat minimum at $\\theta = \\theta_0$ when $U = 0$. The symmetry axis traces a cone about the fixed $\\mathbf{M}$ at constant angle $\\theta_0$.`}
                </p>
              </details>
            </div>

            <h3>Setting Up the Free Top</h3>
            <p>
              {`The Routhian method reduces the system order and produces an effective 1D problem whenever some coordinates are cyclic. The free symmetric top has $U = 0$. Both $\\varphi$ and $\\psi$ are cyclic. Their conserved momenta are $M_z = p_\\varphi$ and $M_3 = p_\\psi = I_3\\Omega_3$. The total angular momentum magnitude $M$ is also conserved.`}
            </p>

            <h3>The Routhian</h3>
            <p>
              {`The Routhian (built in the Routhian-reduction topic) treats the conserved momenta of cyclic coordinates as fixed numbers, so those coordinates drop out and leave a smaller system. For the free symmetric top (or Lagrange top) it becomes:`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$R(\\theta, \\dot{\\theta};\\, M_z, M_3) = \\tfrac{1}{2}I'\\dot{\\theta}^2 - U_{\\rm eff}(\\theta)$$`}</span>
            </div>
            <p>where:</p>
            <div className="lrn-eq">
              <span>{`$$U_{\\rm eff}(\\theta) = \\frac{(M_z - M_3\\cos\\theta)^2}{2I'\\sin^2\\!\\theta} + U(\\theta)$$`}</span>
            </div>

            <h3>Conditions for the Free Top</h3>
            <p>
              {`The Euler-Lagrange equation for $\\theta$ with $U = 0$ and the cyclic integrals give three conditions:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$\\dot{\\theta} = 0, \\qquad I'\\dot{\\varphi} = M, \\qquad I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta) = M\\cos\\theta$$`}</span>
            </div>
            <p>
              {`These say: $\\theta$ stays constant; the axis precesses uniformly about $M$; the spin rate $\\Omega_3$ stays constant.`}
            </p>

            <h3>Coplanarity of M, Omega, and x_3</h3>
            <p>
              {`For the free symmetric top, three vectors are always coplanar: angular momentum $\\mathbf{M}$, angular velocity $\\boldsymbol{\\Omega}$, and body symmetry axis $x_3$. The body symmetry axis $x_3$ precesses regularly about the fixed direction of $\\mathbf{M}$ with rate $\\Omega_{\\rm pr} = M/I'$.`}
            </p>

            <h3>Body-Frame Precession from Euler's Equations</h3>
            <p>
              {`The same free top, viewed in the body frame, gives the torque-free precession met in the Newtonian treatment. Here it falls out of Euler's equations (derived in full in the geodesic-flow section). For a symmetric top ($I_1 = I_2 = I'$) with no torque:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$\\Omega_3 = \\text{const}, \\qquad \\Omega_1 = A\\cos\\omega t, \\quad \\Omega_2 = A\\sin\\omega t$$`}</span>
            </div>
            <p>where:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\omega = \\Omega_3 \\frac{I_3 - I'}{I'}$$`}</span>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Euler's third equation for $K_3 = 0$ is $I_3\\dot{\\Omega}_3 + (I_2 - I_1)\\Omega_1\\Omega_2 = 0$. For a symmetric top $I_1 = I_2 = I'$, so the second term vanishes.`}
              </p>
              <p>
                {`Therefore $\\dot{\\Omega}_3 = 0$. The transverse pair of Euler equations then decouples into a 2D harmonic oscillator in the body $x_1 x_2$-plane.`}
              </p>
            </div>

            <h3>Worked Example: Free Symmetric Top</h3>
            <p>
              {`Given a free symmetric top with $I_3 \\neq I'$, initial conditions $\\Omega_3 = \\Omega_3^{(0)}$, $\\Omega_1^{(0)} = A$, $\\Omega_2^{(0)} = 0$. Find the motion in the body frame.`}
            </p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-num">1</span>
                <div className="lrn-step-content">
                  <p>{`From Euler equation 3: $\\Omega_3 = \\text{const} = \\Omega_3^{(0)}$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">2</span>
                <div className="lrn-step-content">
                  <p>{`Euler equations 1 and 2 become: $I'\\dot{\\Omega}_1 = (I' - I_3)\\Omega_2\\Omega_3^{(0)}$, $I'\\dot{\\Omega}_2 = (I_3 - I')\\Omega_1\\Omega_3^{(0)}$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">3</span>
                <div className="lrn-step-content">
                  <p>{`Differentiate the first and substitute the second: $\\ddot{\\Omega}_1 = -\\omega^2\\Omega_1$ where $\\omega = (I_3 - I')\\Omega_3^{(0)}/I'$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">4</span>
                <div className="lrn-step-content">
                  <p>{`Solution with initial conditions: $\\Omega_1 = A\\cos\\omega t$, $\\Omega_2 = A\\sin\\omega t$. The transverse angular velocity rotates in the body $x_1 x_2$-plane at frequency $\\omega$.`}</p>
                </div>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`What is the key step that makes the symmetric top solvable in closed form?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`The symmetry $I_1 = I_2$ removes the $\\Omega_1\\Omega_2$ coupling in equation 3, so equations 1 and 2 decouple from it. The resulting pair of linear ODEs for $\\Omega_1$, $\\Omega_2$ is a simple harmonic oscillation in the body frame. To an outside observer this looks like uniform precession.`}
                </p>
              </details>
            </div>

            <VizFigure aspect="auto" title="Precession Cone">
              <PrecessionCone />
            </VizFigure>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Routhian Method</span>
                <p>
                  {`Spot cyclic coordinates $\\varphi$ and $\\psi$, write conserved momenta $M_z$ and $M_3$, build $R(\\theta, \\dot{\\theta}; M_z, M_3) = \\frac{1}{2}I'\\dot{\\theta}^2 - U_{\\rm eff}(\\theta)$, work with the resulting 1-DOF system in $\\theta$. Systematic computational route.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Noether Reduction</span>
                <p>
                  {`Identify rotational symmetry about the space $Z$-axis and body $x_3$-axis; apply Noether's theorem to get $M_z = \\text{const}$ and $M_3 = \\text{const}$; reduce to 1-DOF in $\\theta$. Geometric route. Both produce the same $U_{\\rm eff}(\\theta)$.`}
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-5" data-section-index="5">
            <h2>Lagrange Top: Heavy Symmetric Top, Effective Potential, Nutation</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`A top spins fast with its axis nearly vertical. Slowly increase the gravitational field strength. Predict what happens to the nutation amplitude and the precession speed.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`Precession is driven by the gravitational torque $mg\\ell\\sin\\theta$, acting against the spin angular momentum $M_3 = I_3\\omega_3$. A stronger torque ($\\uparrow g$) pushes the axis faster; a larger angular momentum resists more. The balance gives $\\omega_{\\rm prec} = mg\\ell/(I_3\\omega_3)$. Increasing $g$ increases $mg\\ell$ while $M_3$ stays fixed, so the precession rate grows and the nutation amplitude grows proportional to $mg\\ell$. The nutation frequency $I_3\\omega_3/I_1$ is set by the spin, not by gravity, so it stays approximately unchanged.`}
                </p>
              </details>
            </div>

            <h3>The Setup</h3>
            <p>
              {`When to use this: use this analysis whenever a symmetric body is fixed at a point and gravity acts. It covers gyroscopes and spinning tops. Any body with axial symmetry in uniform gravity also fits.`}
            </p>
            <p>
              {`The Lagrange top is an axially symmetric rigid body with one point $O$ fixed, in a uniform gravitational field. The centre of mass lies on the symmetry axis $x_3$ at distance $\\ell$ from $O$.`}
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$L = \\frac{I_1}{2}(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\!\\theta) + \\frac{I_3}{2}(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)^2 - mg\\ell\\cos\\theta$$`}</span>
            </div>

            <h3>The Equation of Motion for the Tilt Angle</h3>
            <p>
              {`The angle $\\theta$ is the one non-cyclic coordinate. Apply the Euler-Lagrange equation $\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{\\theta}}\\right) - \\frac{\\partial L}{\\partial \\theta} = 0$ to it directly.`}
            </p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-num">1</span>
                <div className="lrn-step-content">
                  <p>{`Differentiate by $\\dot{\\theta}$: $\\frac{\\partial L}{\\partial \\dot{\\theta}} = I_1\\dot{\\theta}$. Take its time derivative: $\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{\\theta}}\\right) = I_1\\ddot{\\theta}$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">2</span>
                <div className="lrn-step-content">
                  <p>{`Differentiate $L$ by $\\theta$. Only the $\\sin^2\\theta$, the $\\cos\\theta$ inside the spin term, and the $\\cos\\theta$ in gravity depend on $\\theta$: $\\frac{\\partial L}{\\partial \\theta} = I_1\\dot{\\varphi}^2\\sin\\theta\\cos\\theta - I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)\\dot{\\varphi}\\sin\\theta + mg\\ell\\sin\\theta$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">3</span>
                <div className="lrn-step-content">
                  <p>{`Subtract to get the $\\theta$-equation:`}</p>
                  <div className="lrn-eq">
                    <span>{`$$I_1\\ddot{\\theta} = I_1\\dot{\\varphi}^2\\sin\\theta\\cos\\theta - I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)\\dot{\\varphi}\\sin\\theta + mg\\ell\\sin\\theta$$`}</span>
                  </div>
                </div>
              </div>
            </div>
            <p>
              {`This single second-order equation governs the tilt. The next step replaces $\\dot{\\varphi}$ and $\\dot{\\psi}$ by the conserved momenta, which turns it into the effective-potential form below.`}
            </p>

            <h3>Three First Integrals</h3>
            <p>
              {`The Lagrange top has three conserved quantities. Two come from cyclic coordinates:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$M_z = I_1\\dot{\\varphi}\\sin^2\\!\\theta + I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)\\cos\\theta = \\text{const}$$`}</span>
            </div>
            <div className="lrn-eq">
              <span>{`$$M_3 = I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta) = \\text{const}$$`}</span>
            </div>
            <p>
              {`The third is the total energy $E$. Together, $E$, $M_z$, and $M_3$ reduce the problem from 3 degrees of freedom to one: the angle $\\theta$.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Two symmetries give the two conserved momenta by Noether's theorem. The shift $\\varphi \\to \\varphi + \\varepsilon$ rotates the system about the vertical axis; gravity depends only on height, so $L$ is invariant and $M_z$ is conserved.`}
              </p>
              <p>
                {`The shift $\\psi \\to \\psi + \\varepsilon$ spins the body about its own axis; axial symmetry keeps $L$ invariant, so $M_3$ is conserved.`}
              </p>
            </div>

            <h3>Reduction to One Dimension: the Effective Potential</h3>
            <p>
              {`From the conservation of $M_z$ and $M_3$, eliminate $\\dot{\\varphi}$ and $\\dot{\\psi}$. The energy equation becomes:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$E' = \\frac{I_1}{2}\\dot{\\theta}^2 + U_{\\rm eff}(\\theta)$$`}</span>
            </div>
            <p>where:</p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$U_{\\rm eff}(\\theta) = \\frac{(M_z - M_3\\cos\\theta)^2}{2I_1\\sin^2\\!\\theta} + mg\\ell\\cos\\theta$$`}</span>
            </div>

            <h3>Nutation</h3>
            <p>
              {`Nutation is the oscillation of $\\theta$ between two turning points $\\theta_1$ and $\\theta_2$ where $\\dot{\\theta} = 0$. These satisfy $U_{\\rm eff}(\\theta_{1,2}) = E'$.`}
            </p>
            <p>
              {`The substitution $u = \\cos\\theta$ converts the energy equation to $\\dot{u}^2 = f(u)$. The function $f$ is a cubic polynomial in $u$. The $(M_z - M_3 u)^2/(1 - u^2)$ term and the $mg\\ell u$ term each contribute powers of $u$. Multiplying through by the $(1 - u^2)$ denominator clears it to a cubic. The polynomial $f$ has two real roots $u_1 = \\cos\\theta_1$ and $u_2 = \\cos\\theta_2$ in $[-1, 1]$.`}
            </p>

            <VizFigure aspect="auto" title="Lagrange Top">
              <LagrangeTopUeff />
            </VizFigure>

            <h3>Precession</h3>
            <p>{`The angle $\\varphi$ around the vertical (the azimuthal angle) evolves as:`}</p>
            <div className="lrn-eq">
              <span>{`$$\\dot{\\varphi} = \\frac{M_z - M_3\\cos\\theta}{I_1\\sin^2\\!\\theta}$$`}</span>
            </div>
            <p>Three types of paths exist for the symmetry axis on the unit sphere:</p>
            <ul className="lrn-list">
              <li>
                {`Wavy (sinusoidal): $\\dot{\\varphi}$ keeps the same sign throughout the nutation cycle.`}
              </li>
              <li>{`Looping: $\\dot{\\varphi}$ changes sign; the axis loops back.`}</li>
              <li>
                {`Cusped: $\\dot{\\varphi} = 0$ at one turning point; the axis pauses and reverses azimuthal direction. This is regular precession if $\\dot{\\theta} = 0$ also.`}
              </li>
            </ul>

            <h3>Worked Example: Lagrange Top Reduction</h3>
            <p>
              {`Given a symmetric top with $I_1$, $I_3$, fixed lowest point, height of centre of mass $= \\ell\\cos\\theta$. Reduce the problem to quadratures.`}
            </p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-num">1</span>
                <div className="lrn-step-content">
                  <p>{`Write the Lagrangian and identify cyclic coordinates $\\varphi$, $\\psi$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">2</span>
                <div className="lrn-step-content">
                  <p>{`Write the two first integrals: $M_z = I_1\\dot{\\varphi}\\sin^2\\!\\theta + M_3\\cos\\theta$, $M_3 = I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">3</span>
                <div className="lrn-step-content">
                  <p>{`Solve for $\\dot{\\varphi}$ from the $M_z$ equation: $\\dot{\\varphi} = (M_z - M_3\\cos\\theta)/(I_1\\sin^2\\!\\theta)$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">4</span>
                <div className="lrn-step-content">
                  <p>{`Substitute into the energy conservation and simplify. The $M_3^2/(2I_3)$ term is constant. The energy equation becomes $E' = \\frac{I_1}{2}\\dot{\\theta}^2 + U_{\\rm eff}(\\theta)$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">5</span>
                <div className="lrn-step-content">
                  <p>{`Integrate: $t - t_0 = \\int_{\\theta_0}^{\\theta} \\frac{d\\theta'}{\\sqrt{2(E' - U_{\\rm eff}(\\theta'))/I_1}}$. This is an elliptic integral. Nutation is periodic.`}</p>
                </div>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`What is the most non-obvious step in the Lagrange top reduction?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`The most non-obvious step is eliminating $\\dot{\\varphi}$ and $\\dot{\\psi}$ through the conserved momenta. The effective potential absorbs all dependence on those two angles, so the three-Euler-angle system collapses to a single ODE for $\\theta$. The two exact integrals supplied by the symmetry fix the other two degrees of freedom.`}
                </p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-6" data-section-index="6">
            <h2>Euler's Equations as Geodesic Flow on a Lie Group</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`A free particle in empty space moves in a straight line. A free rigid body rotates with no torque. Predict what plays the role of "straight line" for the body's orientation.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The orientation traces a geodesic on $SO(3)$, the straightest path the body's own geometry allows. The inertia operator sets that geometry. So free rotation is straight-line motion, just in a curved space.`}
                </p>
              </details>
            </div>

            <h3>Two Routes to Euler's Equations</h3>
            <p>
              {`A Lie group is a group of motions (here, rotations) that also forms a smooth space you can do calculus on. $SO(3)$ is one. This section reads Euler's equations as motion on that space.`}
            </p>
            <p>
              {`When to use this: reach for Euler's equations when you need body-frame equations for free rotation. They avoid reference to any fixed space axes.`}
            </p>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Route 1: Rotating-Frame Approach</span>
              <p>
                {`The rotating-frame derivative rule $\\frac{d\\mathbf{A}}{dt} = \\frac{d'\\mathbf{A}}{dt} + \\boldsymbol{\\Omega} \\times \\mathbf{A}$ (built in the non-inertial-frames topic) converts space-frame rates to body-frame rates. Here $d'/dt$ is the derivative in the body frame.`}
              </p>
              <p>
                {`Apply this to $\\mathbf{M}$ in the free case ($\\mathbf{K} = 0$): $d\\mathbf{M}/dt = 0$ in space, so $d'\\mathbf{M}/dt = -\\boldsymbol{\\Omega} \\times \\mathbf{M}$. In component form:`}
              </p>
            </div>

            <div className="lrn-eq lrn-eq-display">
              <span>{`$$I_1\\dot{\\Omega}_1 = (I_2 - I_3)\\Omega_2\\Omega_3$$`}</span>
              <span>{`$$I_2\\dot{\\Omega}_2 = (I_3 - I_1)\\Omega_3\\Omega_1$$`}</span>
              <span>{`$$I_3\\dot{\\Omega}_3 = (I_1 - I_2)\\Omega_1\\Omega_2$$`}</span>
            </div>

            <div className="lrn-callout">
              <span className="lrn-callout-label">Route 2: Lie-Group Approach</span>
              <p>
                {`First, two frames. $\\mathbf{M}$ is angular momentum read in the body frame. $\\mathbf{m}$ is the same vector read in the fixed space frame. The rotation matrix $B$ turns one into the other: $\\mathbf{m} = B\\mathbf{M}$. As the body rotates, $B$ changes at a rate $\\dot{B} = B[\\boldsymbol{\\Omega}]_\\times$, where $[\\boldsymbol{\\Omega}]_\\times$ is the skew matrix that acts as $\\boldsymbol{\\Omega}\\times$.`}
              </p>
              <p>
                {`Differentiating $\\mathbf{m}$, using $d\\mathbf{m}/dt = 0$ (free body), and converting back to the body frame gives:`}
              </p>
              <div className="lrn-eq">
                <span>{`$$\\frac{d\\mathbf{M}}{dt} = [\\mathbf{M}, \\boldsymbol{\\Omega}] = \\boldsymbol{\\Omega} \\times \\mathbf{M}$$`}</span>
              </div>
              <p>
                {`The bracket $[\\cdot, \\cdot]$ for these rotation generators is just the cross product: $[\\mathbf{M}, \\boldsymbol{\\Omega}] = \\boldsymbol{\\Omega} \\times \\mathbf{M}$. So the body-frame angular momentum evolves by its own cross product with $\\boldsymbol{\\Omega}$. In components: $I_i\\dot{\\Omega}_i = (I_j - I_k)\\Omega_j\\Omega_k$ (cyclic in $i, j, k$). This body-frame form is the Euler-Poincaré equation: the Euler-Lagrange equation reduced onto the rotation group.`}
              </p>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The first route works in the space frame, sets $d\\mathbf{M}/dt = \\mathbf{K} = 0$, and converts to body-frame components. The second route works in the body frame directly, using the Lie bracket to encode how the body frame rotates.`}
              </p>
              <p>
                {`The bracket $[\\mathbf{M}, \\boldsymbol{\\Omega}] = \\boldsymbol{\\Omega} \\times \\mathbf{M}$ is the same cross product that appears in the first derivation. Both derivations use the same underlying mathematics.`}
              </p>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Rotating-Frame Derivation</span>
                <p>
                  {`Rotating-frame rule $d\\mathbf{A}/dt = d'\\mathbf{A}/dt + \\boldsymbol{\\Omega} \\times \\mathbf{A}$. Explicit, coordinate-based. Directly gives the component equations.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Lie-Group Derivation</span>
                <p>
                  {`$\\dot{\\mathbf{M}} = [\\mathbf{M}, \\boldsymbol{\\Omega}]$. Intrinsic, coordinate-free. Connects Euler's equations to geodesic flow on $SO(3)$.`}
                </p>
              </div>
            </div>

            <h3>Geodesic Flow Interpretation</h3>
            <p>
              {`A geodesic is the straightest (shortest) path the geometry allows. The free rigid body lives on $T^* SO(3)$, the phase space of the rotating body: every orientation paired with its conjugate momentum. Euler's equations are the geodesic equations for the left-invariant metric defined by the inertia operator $A$.`}
            </p>
            <p>
              {`The body traces a geodesic on $SO(3)$. A free particle traces a straight line in flat space: same idea, different geometry. The mass distribution shapes the geometry; the geometry determines which paths are "straight". Two bodies can start with the same spin but have different shapes. Under identical torque they then follow different trajectories.`}
            </p>

            <h3>Two First Integrals</h3>
            <p>The free Euler equations conserve two quantities:</p>
            <div className="lrn-eq">
              <span>{`$$2E = \\frac{M_1^2}{I_1} + \\frac{M_2^2}{I_2} + \\frac{M_3^2}{I_3} = \\text{const}, \\qquad M^2 = M_1^2 + M_2^2 + M_3^2 = \\text{const}$$`}</span>
            </div>
            <p>
              {`These define an energy ellipsoid and a sphere in $\\mathbf{M}$-space. The motion of $\\mathbf{M}$ traces their intersection.`}
            </p>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-7" data-section-index="7">
            <h2>Poinsot Construction: Inertia Ellipsoid Rolling on the Invariable Plane</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`The angular momentum of a free asymmetric top is fixed in space. Describe what the inertia ellipsoid does relative to that fixed direction.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The inertia ellipsoid rolls without slipping on the invariable plane (perpendicular to the fixed angular momentum). The contact point traces the polhode on the ellipsoid and the herpolhode on the plane.`}
                </p>
              </details>
            </div>

            <h3>The Theorem</h3>
            <p>
              {`The Poinsot construction gives an exact geometric picture of how $\\boldsymbol{\\Omega}$ evolves during free rotation - without solving any differential equations.`}
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Poinsot's Theorem</span>
              <p>
                {`During free rotation, the inertia ellipsoid rolls without slipping on a fixed plane. This plane (the invariable plane) is perpendicular to the angular momentum $\\mathbf{m}$ - the fixed angular momentum vector as seen from outside the body in the space frame.`}
              </p>
            </div>

            <h3>Proof</h3>
            <p>Two geometric facts make this work.</p>
            <p>
              {`First, the gradient of $(A\\boldsymbol{\\Omega}, \\boldsymbol{\\Omega})$ at $\\boldsymbol{\\Omega}$ is $2A\\boldsymbol{\\Omega} = 2\\mathbf{M}$. The gradient of any smooth surface is perpendicular to that surface. So the outward normal to the inertia ellipsoid at $\\boldsymbol{\\Omega}$ points along $\\mathbf{M}$. The body-frame $\\mathbf{M}$ and the space-frame $\\mathbf{m}$ are the same vector in two coordinate systems, so they are parallel. The invariable plane is perpendicular to $\\mathbf{m}$, which means the ellipsoid is always tangent to this plane at the tip of $\\boldsymbol{\\Omega}$.`}
            </p>
            <p>
              {`Second, the distance from the origin to the tangent plane equals $(\\mathbf{m}, \\boldsymbol{\\omega})/|\\mathbf{m}| = 2T/|\\mathbf{m}|$. Since $T$ and $|\\mathbf{m}|$ are both conserved in free rotation, this distance is constant. The tangent plane stays at exactly the same position in space.`}
            </p>
            <p>
              {`The no-slip condition: the contact point is the tip of $\\boldsymbol{\\Omega}$, the instantaneous rotation axis of the body. Every point on the instantaneous rotation axis has zero velocity at that instant. That is what "instantaneous rotation axis" means. In particular, the contact point has zero velocity relative to the fixed plane. Zero relative velocity at contact is exactly the definition of rolling without slipping.`}
            </p>

            <h3>Polhodes and Herpolhodes</h3>
            <ul className="lrn-list">
              <li>
                {`Polhode: the curve traced by the contact point $\\boldsymbol{\\Omega}$ on the inertia ellipsoid. These are intersections of the ellipsoid and energy-constrained surfaces.`}
              </li>
              <li>
                {`Herpolhode: the curve traced by the contact point on the invariable plane.`}
              </li>
            </ul>
            <p>
              {`Polhodes are closed curves near the $e_1$ and $e_3$ poles; they form a figure-eight (separatrix) through the $e_2$ pole.`}
            </p>

            <VizFigure aspect="auto" title="Poinsot Construction">
              <PoinsotConstruction />
            </VizFigure>

            <h3>The Symmetric-Top Special Case</h3>
            <p>
              {`For an ellipsoid of revolution ($I_2 = I_3 \\neq I_1$), the $\\boldsymbol{\\Omega}$, $\\mathbf{m}$, and body axis $e_1$ always stay coplanar. The precession rate is $\\omega_{\\rm pr} = M/I_2$. The ellipsoid rolls in a simple cone.`}
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Euler's Equations (Body-Frame)</span>
                <p>
                  {`Integrate to find $\\Omega_3 = \\text{const}$ and $\\Omega_\\perp$ rotating at frequency $\\omega = \\Omega_3(I_3 - I')/I'$. Provides time description in body frame.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Poinsot Construction (Geometric)</span>
                <p>
                  {`Draw the inertia ellipsoid; note the invariable plane is fixed; conclude the ellipsoid rolls. Provides space-frame geometric picture. Easier for qualitative understanding.`}
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-8" data-section-index="8">
            <h2>
              Asymmetric Top Stability (Tennis-Racket Theorem via Energy and Momentum Surfaces)
            </h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`You throw an asymmetric object (like a book) spinning about its middle principal axis. Predict what you observe.`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`The book flips. Rotation about the middle axis is unstable. The angular momentum vector leaves the neighbourhood of $e_2$, travels along the separatrix, and reaches the neighbourhood of the opposite axis. The book appears to tumble unpredictably.`}
                </p>
              </details>
            </div>

            <h3>Setup: Three Principal Axes</h3>
            <p>
              {`When to use this: use this analysis to determine stability of any free rotation. The only input you need is the ordering of the three principal moments. Identify the largest, the middle, and the smallest.`}
            </p>
            <p>
              {`Take the body with principal moments $I_3 > I_2 > I_1$ (all distinct). Label the axes $e_1$ (smallest moment), $e_2$ (middle moment), $e_3$ (largest moment).`}
            </p>

            <h3>The Geometric Argument</h3>
            <p>
              {`The angular momentum vector $\\mathbf{M}$ lives on the intersection of two surfaces in $M$-space:`}
            </p>
            <ul className="lrn-list">
              <li>{`Energy ellipsoid: $M_1^2/I_1 + M_2^2/I_2 + M_3^2/I_3 = 2E$`}</li>
              <li>{`Momentum sphere: $M_1^2 + M_2^2 + M_3^2 = M^2$`}</li>
            </ul>
            <p>
              {`Near the $e_3$ pole (largest $I$): sphere intersects ellipsoid in small closed loops. $\\mathbf{M}$ stays near $e_3$. Stable.`}
            </p>
            <p>
              {`Near the $e_1$ pole (smallest $I$): sphere intersects in small closed loops again. $\\mathbf{M}$ stays near $e_1$. Stable.`}
            </p>
            <p>
              {`Near the $e_2$ pole (middle $I$): the intersection forms an X-shaped curve (separatrix). Perturbing $\\mathbf{M}$ slightly from $e_2$ sends it along the separatrix. The trajectory reaches the opposite hemisphere. Unstable.`}
            </p>

            <VizFigure aspect="auto" title="Tennis Racket Effect">
              <TennisRacket />
            </VizFigure>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Tennis-Racket Theorem</span>
              <p>
                {`Free rotation about the largest or smallest principal axis is stable. Free rotation about the middle principal axis is unstable. Throw a book (or tennis racket) with spin about its middle axis: it will flip.`}
              </p>
            </div>

            <h3>Two-Torus Structure of Free-Top Motion</h3>
            <p>
              {`The two conserved quantities $(E, |\\mathbf{M}|)$ pin the motion onto a surface in phase space. Think of two clocks running independently. The body-frame wobble of $\\boldsymbol{\\Omega}$ ticks at one frequency. The precession of the symmetry axis around the fixed $\\mathbf{M}$ ticks at a second. Together they trace a path on the surface of a torus (doughnut shape) in phase space. The motion has two independent periodicities, one for each clock.`}
            </p>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`Two independent integrals $(E, |\\mathbf{M}|)$ on the phase space carve out a 2-dimensional level set. The Liouville-Arnold theorem says that a bounded level set, cut out by enough independent conserved quantities in involution, is always a torus. So this level set is a 2-torus $T^2$.`}
              </p>
              <p>
                {`The two circles of the torus correspond to two independent periodic motions. One is the body-frame rotation of $\\boldsymbol{\\Omega}$. The other is the precession of the symmetry axis in space.`}
              </p>
            </div>

            <h3>Quantitative Solution: Jacobi Elliptic Functions</h3>
            <p>
              {`The asymmetric top is integrable. The solution uses the Jacobi elliptic functions $\\operatorname{sn}, \\operatorname{cn}, \\operatorname{dn}$. These are the natural stretch of $\\sin, \\cos$ for this nonlinear oscillation. The number $K(k)$ is their quarter-period (one full cycle is $4K$):`}
            </p>
            <div className="lrn-eq">
              <span>{`$$\\Omega_1 \\propto \\operatorname{cn}(\\tau, k), \\quad \\Omega_2 \\propto \\operatorname{sn}(\\tau, k), \\quad \\Omega_3 \\propto \\operatorname{dn}(\\tau, k)$$`}</span>
            </div>
            <p>with modulus:</p>
            <div className="lrn-eq">
              <span>{`$$k^2 = \\frac{(I_2 - I_1)(2EI_3 - M^2)}{(I_3 - I_2)(M^2 - 2EI_1)}$$`}</span>
            </div>
            <p>The period is:</p>
            <div className="lrn-eq">
              <span>{`$$T = 4K(k)\\sqrt{\\frac{I_1 I_2 I_3}{(I_3 - I_2)(M^2 - 2EI_1)}}$$`}</span>
            </div>
            <p>
              {`Near $e_2$ (the separatrix, $k \\to 1$): $K(k) \\to \\infty$, so the period diverges. Perturbations near $e_2$ take arbitrarily long to complete one cycle, consistent with instability.`}
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the period of the asymmetric top diverge as the motion approaches the middle-axis separatrix?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`The separatrix passes through the $e_2$ pole, which is an unstable equilibrium. Near an unstable equilibrium, the linearised equations give exponential growth (not oscillation). The nonlinear trajectory approaches the equilibrium asymptotically but never reaches it in finite time.`}
                </p>
                <p>
                  {`In the Jacobi-function solution, $k \\to 1$ makes $K(k) \\to \\infty$, giving period $T \\propto K(k) \\to \\infty$. The middle-axis instability shows up as $k \\to 1$ when $M^2 \\to 2EI_2$.`}
                </p>
              </details>
            </div>

            <h3>Small-Oscillation Frequency Near Stable Axes</h3>
            <p>
              {`Near the $e_3$ axis (largest moment), linearise Euler's equations. Let $\\Omega_1, \\Omega_2 \\ll \\Omega_3$. The small-oscillation frequency is:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$\\omega_{\\rm small} = \\Omega_0\\sqrt{\\left(\\frac{I_3}{I_1} - 1\\right)\\!\\left(\\frac{I_3}{I_2} - 1\\right)}$$`}</span>
            </div>
            <p>
              {`Both factors in the square root are positive (since $I_3 > I_2 > I_1$), confirming real oscillation frequency and hence stability.`}
            </p>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Geometric Proof</span>
                <p>
                  {`Sphere meets ellipsoid: closed loops near $e_1$, $e_3$; separatrix at $e_2$. A topological argument giving qualitative insight.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Explicit Solution</span>
                <p>
                  {`Jacobi sn, cn, dn functions; period formula $T = 4K\\sqrt{I_1 I_2 I_3/((I_3-I_2)(M^2-2EI_1))}$. Gives quantitative results, diverges at $k \\to 1$.`}
                </p>
              </div>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-9" data-section-index="9">
            <h2>Sleeping Top and Fast Top</h2>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                {`A top spins at exactly the stability threshold for the sleeping state. What do you expect to see when you give it a tiny tap?`}
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`At the threshold $\\omega_3^2 = 4mg\\ell I_1/I_3^2$, the effective potential has an inflection point at $\\theta = 0$. A tiny tap will cause the axis to drift away slowly. It neither stays near vertical nor oscillates cleanly. Just above the threshold it oscillates with a very long period.`}
                </p>
              </details>
            </div>

            <h3>The Sleeping Top</h3>
            <p>
              {`When to use this: use sleeping-top analysis when the spin rate is the key variable. You will determine whether a nearly vertical top stays vertical.`}
            </p>
            <p>
              {`A sleeping top has its symmetry axis vertical: $\\theta = 0$ at all times. The angular velocity is $\\Omega_3 = \\omega_3 = \\text{const}$, directed along the vertical $Z$-axis. All conserved quantities satisfy $M_z = M_3 = I_3\\omega_3$.`}
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Stability Condition</span>
              <p>The sleeping top is stable if and only if:</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\omega_3^2 > \\frac{4mg\\ell I_1}{I_3^2}$$`}</span>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`The effective potential $U_{\\rm eff}(\\theta)$ near $\\theta = 0$ expands as $U_{\\rm eff} \\approx \\text{const} + A\\theta^2/2 + \\ldots$ where $A = I_3^2\\omega_3^2/(8I_1) - mg\\ell/2$.`}
              </p>
              <p>
                {`Stability requires $A > 0$, which gives exactly $\\omega_3^2 > 4mg\\ell I_1/I_3^2$. Below the threshold the effective potential is a local maximum; the sleeping state is an unstable equilibrium.`}
              </p>
            </div>

            <h3>Worked Example: Stability of the Sleeping Top</h3>
            <p>{`This derivation shows why the stability condition takes the form it does.`}</p>
            <div className="lrn-steps">
              <div className="lrn-step">
                <span className="lrn-step-num">1</span>
                <div className="lrn-step-content">
                  <p>{`Write the effective potential: $U_{\\rm eff}(\\theta) = \\frac{(M_z - M_3\\cos\\theta)^2}{2I_1\\sin^2\\!\\theta} + mg\\ell\\cos\\theta$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">2</span>
                <div className="lrn-step-content">
                  <p>{`For a sleeping top: $M_z = M_3 = I_3\\omega_3$. Take the limit $\\theta \\to 0$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">3</span>
                <div className="lrn-step-content">
                  <p>{`Taylor expand $U_{\\rm eff}(\\theta)$ about $\\theta = 0$: $U_{\\rm eff}(\\theta) \\approx U_{\\rm eff}(0) + A\\theta^2 + O(\\theta^4)$ where $A = M_3^2/(8I_1) - mg\\ell/2 = I_3^2\\omega_3^2/(8I_1) - mg\\ell/2$.`}</p>
                </div>
              </div>
              <div className="lrn-step">
                <span className="lrn-step-num">4</span>
                <div className="lrn-step-content">
                  <p>{`Stability requires $A > 0$: $\\omega_3^2 > 4mg\\ell I_1/I_3^2$.`}</p>
                </div>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>{`Why does $I_3^2$ appear in the stability threshold denominator?`}</p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`The conserved spin momentum is $M_3 = I_3\\omega_3$. It enters $U_{\\rm eff}$ as $M_3^2/(2I_1\\sin^2\\theta)$. The Taylor expansion of $M_3^2/(2I_1\\sin^2\\theta)$ near $\\theta = 0$ gives the leading quadratic coefficient $M_3^2/(8I_1) = I_3^2\\omega_3^2/(8I_1)$.`}
                </p>
                <p>
                  {`So the threshold scales as $\\omega_3 \\sim 1/I_3$. A body with larger $I_3$ needs less spin rate to stay sleeping. The reason: $M_3 = I_3\\omega_3$ is larger for the same $\\omega_3$.`}
                </p>
              </details>
            </div>

            <h3>The Fast Top</h3>
            <p>
              {`When to use this: use fast-top analysis when the spin rate is much larger than the pendulum frequency $\\sqrt{mg\\ell/I_1}$. It gives simple asymptotic formulas for nutation and precession.`}
            </p>
            <p>
              {`A fast top has $\\tfrac{1}{2}I_3\\omega_3^2 \\gg mg\\ell$ (spin kinetic energy dominates gravitational potential).`}
            </p>

            <h3>The Similarity Theorem</h3>
            <p>
              {`The similarity theorem states: multiplying all angular velocities by $N$ gives the same equations as dividing $g$ by $N^2$. Here is the physical reason. Spinning faster compresses the timescale of the motion. Gravity acts over a compressed time, so it has less effect on the trajectory. The result looks exactly as if $g$ were weaker. Formally:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$\\varphi_g(t, \\xi) = \\varphi_{N^2 g}(Nt, \\xi)$$`}</span>
            </div>
            <p>
              {`So studying $\\omega_3 \\to \\infty$ is the same as studying $g \\to 0$ (free top limit).`}
            </p>

            <h3>Nutation in the g = 0 Limit</h3>
            <p>{`For $g = 0$ (free symmetric top), the nutation frequency is:`}</p>
            <div className="lrn-eq">
              <span>{`$$\\omega_{\\rm nut} = \\frac{I_3\\omega_3}{I_1}$$`}</span>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                {`This is the free-top body-frame frequency $\\omega = (I_3 - I')\\Omega_3/I'$ found earlier. In the fast limit $I_3\\omega_3/I_1$ is its leading value. The nutation you see equals this same body-frame rotation.`}
              </p>
            </div>

            <h3>Fast-Top Asymptotic Formulas</h3>
            <p>
              {`For $\\omega_3 \\to \\infty$ from an initial state with $\\dot{\\varphi}_0 = \\dot{\\theta}_0 = 0$, $\\theta = \\theta_0$, the asymptotic behaviour is:`}
            </p>
            <div className="lrn-eq">
              <span>{`$$\\omega_{\\rm nut} \\approx \\frac{I_3}{I_1}\\omega_3, \\qquad a_{\\rm nut} \\approx \\frac{I_1 mg\\ell\\sin\\theta_0}{I_3^2\\omega_3^2}, \\qquad \\omega_{\\rm prec} \\approx \\frac{mg\\ell}{I_3\\omega_3}$$`}</span>
            </div>
            <ul className="lrn-list">
              <li>Nutation frequency grows like {`$\\omega_3$`}.</li>
              <li>Nutation amplitude shrinks like {`$1/\\omega_3^2$`}.</li>
              <li>Precession slows like {`$1/\\omega_3$`}.</li>
            </ul>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the fast top precess slowly (proportional to $1/\\omega_3$) while the nutation is fast (proportional to $\\omega_3$)?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`Nutation comes from the body-frame precession of $\\boldsymbol{\\Omega}$ about $e_3$. Its frequency is $\\omega_{\\rm nut} \\approx I_3\\omega_3/I_1$: the faster you spin, the faster the body-frame oscillation.`}
                </p>
                <p>
                  {`Precession comes from the slow drift of the symmetry axis around the vertical, driven by gravity. The gravitational torque $\\sim mg\\ell$ is fixed, but it acts against a large angular momentum $M_3 = I_3\\omega_3$. A larger angular momentum resists the torque more. So the precession rate $mg\\ell/(I_3\\omega_3)$ decreases as $\\omega_3$ increases. The two frequencies separate by two powers of $\\omega_3$.`}
                </p>
              </details>
            </div>

            <div className="lrn-compare">
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Sleeping Top</span>
                <p>
                  {`Stable fixed point at $\\theta = 0$. Stability threshold: $\\omega_3^2 = 4mg\\ell I_1/I_3^2$. A threshold phenomenon.`}
                </p>
              </div>
              <div className="lrn-compare-col">
                <span className="lrn-compare-title">Fast Top</span>
                <p>
                  {`Asymptotic regime $\\omega_3 \\gg \\sqrt{mg\\ell/I_1}$. Nutation grows $\\propto \\omega_3$, precession slows $\\propto 1/\\omega_3$. Same Lagrange top, opposite extreme.`}
                </p>
              </div>
            </div>
          </div>
        </>
      ]
    },

    practice: [
      {
        q: `What is the configuration space of a free rigid body with three non-collinear points?`,
        a: `The configuration space is $\\mathbb{R}^3 \\times SO(3)$. Three coordinates in $\\mathbb{R}^3$ fix the centre of mass position; three more in $SO(3)$ fix the orientation. The product structure holds because translations and rotations are independent degrees of freedom.`
      },
      {
        q: `A rigid body has one fixed point. What is its configuration space, and how many degrees of freedom does it have?`,
        a: `The configuration space is $SO(3)$. There are 3 degrees of freedom. Fixing one point eliminates all translational freedom, leaving only the three rotational degrees that describe orientation. Euler angles $(\\varphi, \\theta, \\psi)$ provide a local coordinate chart.`
      },
      {
        q: `What does the nutation angle $\\theta$ measure in the Euler-angle description of a rigid body?`,
        a: `$\\theta$ measures the polar angle of the body symmetry axis $x_3$ from the space $Z$-axis. It is the "tilt" of the body axis away from vertical. The other two angles $\\varphi$ (precession) and $\\psi$ (spin) describe rotations that do not change $\\theta$.`
      },
      {
        q: `Write the angular velocity components $(\\Omega_1, \\Omega_2, \\Omega_3)$ in body principal axes in terms of Euler angles and their time derivatives.`,
        a: `In body principal axes the components are: $\\Omega_1 = \\dot{\\varphi}\\sin\\theta\\sin\\psi + \\dot{\\theta}\\cos\\psi$; $\\Omega_2 = \\dot{\\varphi}\\sin\\theta\\cos\\psi - \\dot{\\theta}\\sin\\psi$; $\\Omega_3 = \\dot{\\varphi}\\cos\\theta + \\dot{\\psi}$. These come from projecting the three partial angular velocity contributions ($\\dot{\\theta}$ along line of nodes, $\\dot{\\varphi}$ along $Z$, $\\dot{\\psi}$ along $x_3$) onto body-frame axes.`
      },
      {
        q: `State the inertia operator $A$ in terms of angular velocity and angular momentum. What are its key mathematical properties?`,
        a: `The inertia operator satisfies $A\\boldsymbol{\\Omega} = \\mathbf{M}$. It is symmetric: $(A\\boldsymbol{X}, \\boldsymbol{Y}) = (A\\boldsymbol{Y}, \\boldsymbol{X})$. It is positive definite: $(A\\boldsymbol{\\Omega}, \\boldsymbol{\\Omega}) > 0$ for $\\boldsymbol{\\Omega} \\neq 0$. Symmetry follows from the cyclic property of the triple product. Positive definiteness follows because kinetic energy is always non-negative.`
      },
      {
        q: `A spacecraft has principal moments $I_1 = 1000$, $I_2 = 2000$, $I_3 = 3000$ kg m2. Write the kinetic energy of rotation in body coordinates when $\\boldsymbol{\\Omega} = (2, 1, 3)$ rad/s.`,
        a: `$T = \\frac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2) = \\frac{1}{2}(1000 \\cdot 4 + 2000 \\cdot 1 + 3000 \\cdot 9) = \\frac{1}{2}(4000 + 2000 + 27000) = 16500$ J. Each principal axis contributes $\\frac{1}{2}I_i\\Omega_i^2$ independently; the formula holds only in principal axes.`
      },
      {
        q: `What are the principal moments of inertia of a uniform sphere of mass $\\mu$ and radius $R$?`,
        a: `All three are equal: $I_1 = I_2 = I_3 = \\frac{2}{5}\\mu R^2$. The sphere is a spherical top: $\\mathbf{M} = I\\boldsymbol{\\Omega}$, so angular momentum is always parallel to angular velocity. Any axis through the centre is a principal axis.`
      },
      {
        q: `A uniform sphere and a thin uniform rod of equal mass and equal length/diameter are spun about their symmetry axes at the same angular speed $\\omega$. Which has more rotational kinetic energy?`,
        a: `The sphere has $I_{\\rm sphere} = \\frac{2}{5}\\mu R^2$ about any axis. The rod about its symmetry axis has $I_3 = 0$ (it is a rotator with no transverse spread). So the rod has zero rotational kinetic energy about its own axis, and the sphere has $T = \\frac{1}{5}\\mu R^2\\omega^2 > 0$. The sphere wins.`
      },
      {
        q: `State Euler's equations for free rotation of a rigid body in body principal axes.`,
        a: `With $I_3 > I_2 > I_1$ and no torque: $I_1\\dot{\\Omega}_1 = (I_2 - I_3)\\Omega_2\\Omega_3$; $I_2\\dot{\\Omega}_2 = (I_3 - I_1)\\Omega_3\\Omega_1$; $I_3\\dot{\\Omega}_3 = (I_1 - I_2)\\Omega_1\\Omega_2$. These come from applying $d\\mathbf{M}/dt = \\mathbf{K}$ in the space frame and converting to body components using $d\\mathbf{A}/dt = d'\\mathbf{A}/dt + \\boldsymbol{\\Omega} \\times \\mathbf{A}$.`
      },
      {
        q: `A cylinder has radius $R = 0.1$ m, height $h = 0.2$ m, and mass $\\mu = 2$ kg. Find all three principal moments of inertia.`,
        a: `$I_1 = I_2 = \\frac{1}{4}\\mu R^2 + \\frac{1}{12}\\mu h^2 = \\frac{1}{4}(2)(0.01) + \\frac{1}{12}(2)(0.04) = 0.005 + 0.00667 = 0.01167$ kg m2. $I_3 = \\frac{1}{2}\\mu R^2 = \\frac{1}{2}(2)(0.01) = 0.01$ kg m2. The symmetry axis $x_3$ gives $I_3$; both transverse axes give equal $I_1 = I_2$ by cylindrical symmetry.`
      },
      {
        q: `Apply the formula for principal moments of a rectangular parallelepiped $a \\times b \\times c$ to find the moments of a square plate ($a = b$, $c \\to 0$).`,
        a: `For a thin square plate: $I_1 = \\frac{1}{12}\\mu b^2$, $I_2 = \\frac{1}{12}\\mu a^2 = \\frac{1}{12}\\mu b^2$. $I_3 = \\frac{1}{12}\\mu(a^2 + b^2) = \\frac{1}{6}\\mu a^2$. The result $I_3 = I_1 + I_2$ is the perpendicular-axis theorem for a thin plate, a special case of the triangle equality for coplanar mass distributions.`
      },
      {
        q: `Why is the inertia operator $A$ symmetric? Prove it using the triple-product identity.`,
        a: `The key identity is that the scalar triple product satisfies $([a,b],c) = ([c,a],b)$ by cyclic permutation. For the inertia operator, $(A\\boldsymbol{X}, \\boldsymbol{Y}) = \\sum_\\alpha m_\\alpha ([\\boldsymbol{Q}_\\alpha, \\boldsymbol{X}], [\\boldsymbol{Q}_\\alpha, \\boldsymbol{Y}])$ where $\\boldsymbol{Q}_\\alpha$ is the position of mass $m_\\alpha$. This expression is symmetric in $\\boldsymbol{X}$ and $\\boldsymbol{Y}$ by inspection. So $(A\\boldsymbol{X}, \\boldsymbol{Y}) = (A\\boldsymbol{Y}, \\boldsymbol{X})$.`
      },
      {
        q: `Write the Lagrangian for a heavy symmetric top ($I_1 = I_2 = I'$) with one fixed point in terms of Euler angles.`,
        a: `$L = \\frac{1}{2}I'(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta)^2 - mg\\ell\\cos\\theta$. The first term is the kinetic energy of nutation and precession; the second is the kinetic energy of spin; the third is the gravitational potential with $\\ell$ the distance from the fixed point to the centre of mass.`
      },
      {
        q: `Take the Lagrange-top Lagrangian and set $g = 0$. Identify all cyclic coordinates and all conserved momenta.`,
        a: `With $g = 0$ (free top), $U = 0$. The Lagrangian depends on $\\theta$ through $\\sin^2\\theta$ and $\\cos\\theta$. So only $\\varphi$ and $\\psi$ are cyclic. The conserved momenta are $M_z = p_\\varphi$ and $M_3 = p_\\psi = I_3\\Omega_3$. The total energy is also conserved. These three integrals reduce the problem to $\\theta$ alone, yielding $\\dot{\\theta} = 0$ (constant $\\theta$).`
      },
      {
        q: `Explain in your own words why $\\varphi$ and $\\psi$ are cyclic in the Lagrange-top Lagrangian.`,
        a: `The potential energy $U = mg\\ell\\cos\\theta$ depends only on the tilt angle $\\theta$. It does not care where the axis points in the horizontal plane (no $\\varphi$ dependence) or how the body has spun about its own axis (no $\\psi$ dependence). The kinetic energy depends on $\\theta$ through $\\sin\\theta$ factors but not on $\\varphi$ or $\\psi$ directly. So $\\partial L/\\partial \\varphi = 0$ and $\\partial L/\\partial \\psi = 0$, making both cyclic and their conjugate momenta conserved.`
      },
      {
        q: `State the effective potential for the Lagrange top and describe the nutation motion it predicts.`,
        a: `$U_{\\rm eff}(\\theta) = \\frac{(M_z - M_3\\cos\\theta)^2}{2I_1\\sin^2\\theta} + mg\\ell\\cos\\theta$. The angle $\\theta$ oscillates between turning points $\\theta_1$ and $\\theta_2$ where $U_{\\rm eff} = E'$. This oscillation is called nutation. It corresponds to the symmetry axis wobbling between two extreme tilt angles. The cubic polynomial $f(u) = \\dot{u}^2$ (where $u = \\cos\\theta$) has exactly two roots in $[-1,1]$. They bound the nutation interval.`
      },
      {
        q: `A top starts with $\\theta = \\theta_0$, $\\dot{\\theta}_0 = 0$, $\\dot{\\varphi}_0 = 0$, and fast spin $\\omega_3 \\to \\infty$. What happens to the nutation amplitude and the precession speed as $\\omega_3$ increases?`,
        a: `As $\\omega_3 \\to \\infty$: nutation frequency grows proportional to $\\omega_3$; nutation amplitude shrinks proportional to $1/\\omega_3^2$; precession speed slows proportional to $1/\\omega_3$. The nutation becomes very fast and very small, so only the slow precession is visible. This is the fast-top limit where the gyroscope appears to precess smoothly.`
      },
      {
        q: `A heavy symmetric top has $I_3 = 3I'$, $mg\\ell = 5$ J, and current spin $M_3 = 10$ kg m2/s. Estimate the slow-precession rate in the fast-top limit.`,
        a: `In the fast-top limit, $\\omega_{\\rm prec} \\approx mg\\ell/(I_3\\omega_3)$. But $M_3 = I_3\\omega_3$, so $\\omega_{\\rm prec} \\approx mg\\ell/M_3 = 5/10 = 0.5$ rad/s. The key step is recognising that $I_3\\omega_3 = M_3$ replaces $I_3\\omega_3$ in the denominator.`
      },
      {
        q: `State Poinsot's theorem and describe the two types of curves it defines.`,
        a: `Poinsot's theorem: during free rotation, the inertia ellipsoid rolls without slipping on the invariable plane. This plane is perpendicular to the angular momentum $\\mathbf{m}$. The polhode is the curve traced by the contact point on the ellipsoid. The herpolhode is the curve traced on the invariable plane. The rolling is exact: no slipping occurs because the contact point is the instantaneous rotation axis.`
      },
      {
        q: `Why does the normal to the inertia ellipsoid at $\\boldsymbol{\\Omega}$ point along $\\mathbf{M}$?`,
        a: `The inertia ellipsoid is the level set $f(\\boldsymbol{\\Omega}) = (A\\boldsymbol{\\Omega}, \\boldsymbol{\\Omega}) = 1$. The gradient of $f$ at any point $\\boldsymbol{\\Omega}$ is $\\nabla f = 2A\\boldsymbol{\\Omega} = 2\\mathbf{M}$. The gradient of any smooth function is perpendicular to its level sets. So the normal to the ellipsoid at $\\boldsymbol{\\Omega}$ is proportional to $\\mathbf{M}$. Since the invariable plane is perpendicular to $\\mathbf{m}$, the ellipsoid is always tangent to this plane at $\\boldsymbol{\\Omega}$.`
      },
      {
        q: `Apply the Poinsot theorem to a free spherical top ($I_1 = I_2 = I_3 = I$). Describe the polhode and herpolhode.`,
        a: `For a spherical top the inertia ellipsoid is a sphere. The polhode degenerates to a single point on the sphere. The herpolhode is also a single point. This means $\\boldsymbol{\\Omega}$ is constant: the spherical top has no body-frame precession. This is consistent with $\\mathbf{M} = I\\boldsymbol{\\Omega}$ implying $\\boldsymbol{\\Omega} = \\mathbf{m}/I = \\text{const}$.`
      },
      {
        q: `State the stability theorem for free rotation of an asymmetric top about its three principal axes.`,
        a: `Rotation about the axis with the largest principal moment ($e_3$) is stable. Rotation about the axis with the smallest principal moment ($e_1$) is stable. Rotation about the axis with the middle principal moment ($e_2$) is unstable (tennis-racket theorem). Stability here means the angular momentum vector in the body stays near the rotation axis for all time.`
      },
      {
        q: `A satellite has principal moments $I_1 = 100$, $I_2 = 200$, $I_3 = 300$ kg m2. It is released spinning purely about the $e_2$ axis with $\\Omega_2 = 1$ rad/s and tiny perturbation $\\Omega_1 = 0.001$ rad/s. Predict the long-term behaviour.`,
        a: `The rotation about $e_2$ (middle moment) is unstable. The small perturbation $\\Omega_1 = 0.001$ rad/s will grow. The angular momentum vector will leave the neighbourhood of $e_2$. It travels along the separatrix of the polhode. It eventually reaches the neighbourhood of the $e_3$ axis (or $e_1$ axis). The satellite will appear to tumble. This is the tennis-racket effect.`
      },
      {
        q: `Explain geometrically why the middle-axis rotation is unstable while the largest and smallest are stable, using the energy ellipsoid and momentum sphere.`,
        a: `Fix $M^2 = \\text{const}$ and $2E = \\text{const}$. The angular momentum $\\mathbf{M}$ lies on both the momentum sphere and the energy ellipsoid; it can only move along their intersection. Near the $e_1$ and $e_3$ poles the two surfaces intersect in small closed loops: $\\mathbf{M}$ stays close to the pole forever. Near $e_2$ the intersection forms an X-shaped separatrix crossing the equator. A small perturbation sends $\\mathbf{M}$ along a branch that reaches the opposite hemisphere.`
      },
      {
        q: `A tennis racket has $I_1 \\approx 0.03$, $I_2 \\approx 0.06$, $I_3 \\approx 0.09$ kg m2 (handle, face normal, face plane). You toss it with spin about the face-normal axis. Predict the result.`,
        a: `The face normal is the middle principal axis ($I_2 = 0.06$). Rotation about the middle axis is unstable. After release, the racket will flip 180 degrees and then flip back, repeating periodically. In practice it makes one or more half-turns before you catch it. Spin about the handle ($e_1$, smallest $I$) would be stable. Spin about the face-plane axis ($e_3$, largest $I$) would also be stable.`
      },
      {
        q: `What is the stability condition for a sleeping top (symmetry axis vertical)?`,
        a: `$\\omega_3^2 > 4mg\\ell I_1/I_3^2$. Below this threshold the sleeping state is unstable and the axis precesses away from vertical. Above it, small perturbations cause only small oscillations about $\\theta = 0$. The threshold can be written as $M_3 > 2\\sqrt{mg\\ell I_1}$ in terms of spin angular momentum $M_3 = I_3\\omega_3$.`
      },
      {
        q: `A top spins at $\\omega_3 = 100$ rad/s with $I_1 = 0.01$, $I_3 = 0.02$ kg m2, $m = 0.1$ kg, $\\ell = 0.05$ m, $g = 9.8$ m/s2. Is the sleeping top stable?`,
        a: `Stability requires $\\omega_3^2 > 4mg\\ell I_1/I_3^2$. Threshold: $4 \\times 0.1 \\times 9.8 \\times 0.05 \\times 0.01 / (0.02)^2 = 0.00196/0.0004 = 4.9$ rad2/s2. Our $\\omega_3^2 = 10000 \\gg 4.9$, so the sleeping top is stable. Any small tap will produce only tiny oscillations of $\\theta$ about zero.`
      },
      {
        q: `Apply the sleeping-top stability condition to a thin disk ($I_3 = 2I_1$). Express the threshold in terms of $\\omega_3$ and $\\Omega_{\\rm pend} = \\sqrt{mg\\ell/I_1}$.`,
        a: `For a thin disk $I_3 = 2I_1$. The condition $\\omega_3^2 > 4mg\\ell I_1/I_3^2 = 4mg\\ell I_1/(4I_1^2) = mg\\ell/I_1 = \\Omega_{\\rm pend}^2$. So the disk stays sleeping when $\\omega_3 > \\Omega_{\\rm pend}$. The pendulum frequency $\\Omega_{\\rm pend}$ is the natural dividing line for this particular geometry.`
      },
      {
        q: `Explain in your own words why the fast top precesses slowly (proportional to $1/\\omega_3$) while the nutation is fast (proportional to $\\omega_3$).`,
        a: `Nutation is the body-frame wobble of $\\boldsymbol{\\Omega}$ about $e_3$, at frequency $\\omega_{\\rm nut} \\approx I_3\\omega_3/I_1$. Faster spin means a faster wobble, so $\\omega_{\\rm nut}$ grows like $\\omega_3$. Precession is the gravity-driven drift of the symmetry axis around the vertical. The fixed torque $\\sim mg\\ell$ acts against the large spin momentum $M_3 = I_3\\omega_3$, so the precession rate $mg\\ell/(I_3\\omega_3)$ falls like $1/\\omega_3$. The two rates split by two powers of $\\omega_3$.`
      },
      {
        q: `Euler's equations for a free symmetric top give body-frame precession at frequency $\\omega = \\Omega_3(I_3 - I')/I'$. If $I_3 < I'$ (prolate top, like a pencil), what is the sign of $\\omega$? What does this mean geometrically?`,
        a: `If $I_3 < I'$, then $(I_3 - I') < 0$ and $\\omega < 0$. The transverse angular velocity $\\Omega_\\perp$ rotates in the opposite direction about $e_3$. This is opposite to the oblate case. Geometrically, the body-frame cone of $\\boldsymbol{\\Omega}$ precesses in the opposite sense about the symmetry axis.`
      },
      {
        q: `Write the Lie-group form of Euler's equations for free rotation and derive the component form from it.`,
        a: `Lie-group form: $d\\mathbf{M}/dt = [\\mathbf{M}, \\boldsymbol{\\Omega}]$ (body frame), where $[\\cdot, \\cdot]$ is the vector cross product. In body principal axes, $M_i = I_i\\Omega_i$ and $[\\mathbf{M}, \\boldsymbol{\\Omega}]_1 = M_2\\Omega_3 - M_3\\Omega_2 = I_2\\Omega_2\\Omega_3 - I_3\\Omega_3\\Omega_2 = (I_2 - I_3)\\Omega_2\\Omega_3$. So $I_1\\dot{\\Omega}_1 = (I_2 - I_3)\\Omega_2\\Omega_3$. The same for the other two components.`
      },
      {
        q: `Why is the free rigid body viewed as geodesic flow on SO(3)?`,
        a: `A geodesic in a Riemannian manifold is a path of shortest length. The inertia operator $A$ defines a left-invariant Riemannian metric on $SO(3)$: at the identity the metric is $\\langle X, Y\\rangle = (AX, Y)$. The Euler-Lagrange equations for $T = \\frac{1}{2}(A\\boldsymbol{\\Omega}, \\boldsymbol{\\Omega})$ with no potential are exactly the geodesic equations for this metric. So free rotation is straight-line motion in the geometry of $SO(3)$. That geometry comes from the body's mass distribution.`
      },
      {
        q: `Apply Euler's equations to a free spherical top ($I_1 = I_2 = I_3 = I$). What does the motion look like?`,
        a: `For a spherical top, all three Euler equations become $I\\dot{\\Omega}_i = (I - I)\\Omega_j\\Omega_k = 0$. So $\\dot{\\Omega}_i = 0$ for all $i$. The angular velocity vector $\\boldsymbol{\\Omega}$ is constant in the body frame. Since $\\mathbf{M} = I\\boldsymbol{\\Omega}$, the body rotates uniformly with constant angular velocity. There is no precession or nutation in either frame.`
      },
      {
        q: `What two first integrals does the free asymmetric top have, and how do they constrain the motion geometrically?`,
        a: `The two first integrals are energy $2E = M_1^2/I_1 + M_2^2/I_2 + M_3^2/I_3$ and angular momentum magnitude $M^2 = M_1^2 + M_2^2 + M_3^2$. They define an energy ellipsoid and a momentum sphere in $\\mathbf{M}$-space. The body angular momentum $\\mathbf{M}$ can only move along their intersection. The shape of this intersection (closed loops vs. separatrix) determines stability.`
      },
      {
        q: `The asymmetric top has $I_1 = 1$, $I_2 = 2$, $I_3 = 3$ kg m2 and rotates with $E = 3$ J, $M^2 = 12$ kg2 m4/s2. Is the motion near the $e_3$ axis?`,
        a: `For rotation exactly about $e_3$: $M^2 = 2EI_3 = 18$. Our $M^2 = 12 < 18$, so not on $e_3$ pole. For $e_1$: $M^2 = 2EI_1 = 6 < 12$. So $M^2$ is between $2EI_1 = 6$ and $2EI_3 = 18$. Check $2EI_2 = 12$: our $M^2 = 12 = 2EI_2$. This is exactly the separatrix. The motion lies on the unstable manifold through $e_2$.`
      },
      {
        q: `State the parallel-axis (Steiner) theorem and give its tensor form.`,
        a: `$I'_{ik} = I_{ik} + \\mu(|\\mathbf{a}|^2\\delta_{ik} - a_i a_k)$ where $\\mathbf{a}$ is the displacement from the centre-of-mass axis to the new parallel axis. The diagonal elements give: $I'_{ii} = I_{ii} + \\mu(a_j^2 + a_k^2)$ (sum of the other two displacement components). This adds the moment of a point mass $\\mu$ at displacement $\\mathbf{a}$ to the existing moment.`
      },
      {
        q: `Use the Steiner theorem to find the moment of inertia of a uniform rod about an axis through one end, perpendicular to the rod.`,
        a: `The centre-of-mass moment about the perpendicular axis is $I_{\\rm cm} = \\frac{1}{12}\\mu l^2$. The centre of mass is at distance $a = l/2$ from the end. Steiner: $I_{\\rm end} = I_{\\rm cm} + \\mu a^2 = \\frac{1}{12}\\mu l^2 + \\mu(l/2)^2 = \\frac{1}{12}\\mu l^2 + \\frac{1}{4}\\mu l^2 = \\frac{1}{3}\\mu l^2$. The result $\\frac{1}{3}\\mu l^2$ is the standard textbook result.`
      },
      {
        q: `For the Lagrange top, express $\\dot{\\varphi}$ as a function of $\\theta$ using the conserved momenta $M_z$ and $M_3$.`,
        a: `From the conservation of $M_z$: $M_z = I_1\\dot{\\varphi}\\sin^2\\theta + M_3\\cos\\theta$. Solving for $\\dot{\\varphi}$: $\\dot{\\varphi} = (M_z - M_3\\cos\\theta)/(I_1\\sin^2\\theta)$. The sign of the numerator $M_z - M_3\\cos\\theta$ determines whether precession is in the positive or negative $\\varphi$ direction. This changes sign during the nutation cycle when $M_z - M_3\\cos\\theta$ changes sign. The result is looping or cusped path types.`
      },
      {
        q: `A student writes the sleeping-top stability condition as $\\omega_3 > 2\\sqrt{mg\\ell I_1}/I_3$. Is this correct?`,
        a: `Squaring the student's condition gives $\\omega_3^2 > 4mg\\ell I_1/I_3^2$. This matches the correct condition. The student's answer is algebraically correct. The factor $I_3^2$ appears because $M_3 = I_3\\omega_3$ enters $U_{\\rm eff}$ squared. $U_{\\rm eff}$ contains $M_3^2/(2I_1\\sin^2\\theta)$. Taylor expansion near $\\theta = 0$ gives coefficient $M_3^2/(8I_1) = I_3^2\\omega_3^2/(8I_1)$.`
      },
      {
        q: `Why does the fast-top nutation frequency grow proportional to $\\omega_3$ (not scale some other way)?`,
        a: `The nutation frequency for $g = 0$ is $\\omega_{\\rm nut} = I_3\\omega_3/I_1$. This equals the body-frame precession frequency from Euler's equations: $\\omega = (I_3 - I')\\Omega_3/I'$. For a fast top, $\\Omega_3 \\approx \\omega_3$. The frequency is set by competition between two factors. One is the spin $\\Omega_3$. The other is the asymmetry ratio $(I_3 - I')/I'$. The faster the spin, the faster the body wobbles in its own frame. Gravity enters only as a perturbation; it does not change the leading-order nutation frequency.`
      },
      {
        q: `Apply the inertia ellipsoid concept to a body shaped as an equilateral triangle of three equal masses. What is the shape of the inertia ellipsoid?`,
        a: `Take three equal masses at the vertices of an equilateral triangle. By symmetry, all moments about axes in the triangle plane are equal: $I_1 = I_2$. The moment about the axis perpendicular to the plane is $I_3 = I_1 + I_2 = 2I_1$ (perpendicular-axis theorem). So $I_1 = I_2 \\neq I_3$: the body is a symmetric top. The inertia ellipsoid is an ellipsoid of revolution (symmetric about the axis perpendicular to the triangle plane).`
      },
      {
        q: `In the Poinsot construction, why does the ellipsoid roll without slipping (not slide)?`,
        a: `The contact point between ellipsoid and invariable plane is the tip of $\\boldsymbol{\\Omega}$, the instantaneous rotation axis. Any point of the body on the instantaneous rotation axis has zero instantaneous velocity. The contact point on the invariable plane also has zero velocity relative to the plane. The plane is fixed in space. Zero velocity at the contact means no sliding. This is exactly the no-slip condition for rolling.`
      },
      {
        q: `A free rotation starts with angular momentum along $e_3$ (largest moment). Energy increases at constant angular momentum magnitude. Predict what happens to the polhode on the inertia ellipsoid.`,
        a: `Increasing energy at constant $M^2$ moves the intersection of the energy ellipsoid and momentum sphere. Near $e_3$, higher energy means a larger energy ellipsoid. The intersection loop around the $e_3$ pole gets bigger. When $2E = M^2/I_2$, the polhode reaches the separatrix. Further energy increase makes the loop cross to the other side: the body orbits the $e_1$ pole instead.`
      },
      {
        q: `What is the similarity theorem for the fast top, and what does it allow you to conclude?`,
        a: `The theorem states: $\\varphi_g(t, \\xi) = \\varphi_{N^2 g}(Nt, \\xi)$. Multiplying all angular velocities by $N$ gives the same motion as dividing gravity by $N^2$. So studying $\\omega_3 \\to \\infty$ is equivalent to studying $g \\to 0$ (the free-top limit). This lets us derive the nutation frequency $\\omega_{\\rm nut} = I_3\\omega_3/I_1$ from the simple $g = 0$ case.`
      },
      {
        q: `Explain from first principles why free rigid-body motion on SO(3) is Hamiltonian, and what role the inertia operator plays.`,
        a: `The inertia operator $A$ defines a left-invariant kinetic energy $T = \\frac{1}{2}(A\\boldsymbol{\\Omega}, \\boldsymbol{\\Omega})$ on $SO(3)$. This is a Lagrangian $L = T$ (free body, no potential). The Legendre transform (the standard switch from velocities to momenta) gives the Hamiltonian $H = \\frac{M_1^2}{2I_1} + \\frac{M_2^2}{2I_2} + \\frac{M_3^2}{2I_3}$. With this Hamiltonian, Euler's equations become Hamilton's equations. The bracket structure that makes this a Hamiltonian system is built in the momentum-maps and reduction topic.`
      },
      {
        q: `How are rigid bodies classified by their principal moments?`,
        a: `Three types: (1) Asymmetric top: all three moments different, $I_1 \\neq I_2 \\neq I_3$. (2) Symmetric top: two moments equal, $I_1 = I_2 \\neq I_3$; this is the main case for tops and gyroscopes. (3) Spherical top: all three equal, $I_1 = I_2 = I_3$; $\\mathbf{M} = I\\boldsymbol{\\Omega}$ always. A rotator is a degenerate case with $I_3 = 0$ (collinear mass distribution).`
      },
      {
        q: `Why do three conserved quantities ($E$, $M_z$, $M_3$) reduce the Lagrange top from 3 degrees of freedom to a 1D problem in $\\theta$?`,
        a: `The system has 3 degrees of freedom: $\\theta$, $\\varphi$, $\\psi$. The integral $M_3 = \\text{const}$ expresses $\\dot{\\psi}$ in terms of $\\dot{\\varphi}$ and $\\theta$. The integral $M_z = \\text{const}$ expresses $\\dot{\\varphi}$ in terms of $\\theta$ and the constants $M_z$, $M_3$. Substitute both into the energy $E = \\frac{I_1}{2}(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\theta) + \\frac{M_3^2}{2I_3} + U$. Only $\\dot{\\theta}$ and $\\theta$ remain. The result is a 1D equation.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Rigid-Body Dynamics (Lagrangian / Geometric Treatment)',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Configuration Space and Euler Angles</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula / Definition</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Configuration manifold (free body)</td>
                  <td>{`$\\mathbb{R}^3 \\times SO(3)$`}</td>
                  <td>
                    Any free rigid body problem requiring global description of all possible
                    positions and orientations.
                  </td>
                </tr>
                <tr>
                  <td>Configuration manifold (fixed point)</td>
                  <td>{`$SO(3)$`}</td>
                  <td>Any top or gyroscope problem where one point is pinned.</td>
                </tr>
                <tr>
                  <td>Euler angle {`$\\varphi$`}</td>
                  <td>Precession angle; rotation about space {`$Z$`}-axis</td>
                  <td>
                    Identifies azimuthal orientation of symmetry axis in space; cyclic when{' '}
                    {`$U = U(\\theta)$`}.
                  </td>
                </tr>
                <tr>
                  <td>Euler angle {`$\\theta$`}</td>
                  <td>
                    Nutation angle; polar angle of body {`$x_3$`} from space {`$Z$`}; range{' '}
                    {`$[0, \\pi]$`}
                  </td>
                  <td>Measures tilt of symmetry axis from vertical.</td>
                </tr>
                <tr>
                  <td>Euler angle {`$\\psi$`}</td>
                  <td>Spin angle; rotation about body {`$x_3$`}-axis</td>
                  <td>Tracks spin about symmetry axis; cyclic when body is axially symmetric.</td>
                </tr>
                <tr>
                  <td>Angular velocity (general)</td>
                  <td>
                    <p>{`$\\Omega_1 = \\dot{\\varphi}\\sin\\theta\\sin\\psi + \\dot{\\theta}\\cos\\psi$`}</p>
                    <p>{`$\\Omega_2 = \\dot{\\varphi}\\sin\\theta\\cos\\psi - \\dot{\\theta}\\sin\\psi$`}</p>
                    <p>{`$\\Omega_3 = \\dot{\\varphi}\\cos\\theta + \\dot{\\psi}$`}</p>
                  </td>
                  <td>
                    Express body-frame angular velocity components in terms of Euler angle rates.
                  </td>
                </tr>
                <tr>
                  <td>Angular velocity (simplified, {`$\\psi = 0$`})</td>
                  <td>{`$\\Omega_1 = \\dot{\\theta}$; $\\Omega_2 = \\dot{\\varphi}\\sin\\theta$; $\\Omega_3 = \\dot{\\varphi}\\cos\\theta + \\dot{\\psi}$`}</td>
                  <td>Simplification when body {`$x_1$`} is aligned with line of nodes.</td>
                </tr>
              </tbody>
            </table>

            <VizFigure aspect="auto" title="Euler Angles">
              <EulerGimbals />
            </VizFigure>

            <h2>Inertia Tensor and Inertia Operator</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inertia tensor (discrete)</td>
                  <td>{`$I_{ik} = \\sum_\\alpha m_\\alpha(|\\mathbf{r}_\\alpha|^2\\delta_{ik} - x_{\\alpha i}x_{\\alpha k})$`}</td>
                  <td>Discrete mass distributions; collinear molecules; lattice models.</td>
                </tr>
                <tr>
                  <td>Inertia tensor (continuous)</td>
                  <td>{`$I_{ik} = \\int \\rho(|\\mathbf{r}|^2\\delta_{ik} - x_i x_k)\\,dV$`}</td>
                  <td>Uniform solid bodies where density {`$\\rho$`} is known analytically.</td>
                </tr>
                <tr>
                  <td>Inertia operator</td>
                  <td>{`$A\\boldsymbol{\\Omega} = \\mathbf{M}$; $A$ symmetric positive definite`}</td>
                  <td>
                    Coordinate-free Lie-group setting; express kinetic energy as{' '}
                    {`$T = \\frac{1}{2}(A\\boldsymbol{\\Omega}, \\boldsymbol{\\Omega})$`}.
                  </td>
                </tr>
                <tr>
                  <td>Principal-axis angular momentum</td>
                  <td>{`$M_i = I_i\\Omega_i$ (no sum; $i = 1,2,3$)`}</td>
                  <td>Working in principal axes only.</td>
                </tr>
                <tr>
                  <td>Triangle inequality</td>
                  <td>{`$I_1 + I_2 \\geq I_3$ (and cyclic)`}</td>
                  <td>
                    Checking validity of any proposed inertia tensor; equality holds for coplanar
                    distributions.
                  </td>
                </tr>
                <tr>
                  <td>Perpendicular-axis theorem</td>
                  <td>{`$I_z = I_x + I_y$`}</td>
                  <td>Thin plates and laminae where all mass lies in the {`$xy$`}-plane.</td>
                </tr>
                <tr>
                  <td>Steiner (parallel-axis) theorem</td>
                  <td>{`$I'_{ik} = I_{ik} + \\mu(|\\mathbf{a}|^2\\delta_{ik} - a_i a_k)$`}</td>
                  <td>
                    Shifting from centre-of-mass axes to any parallel set of axes displaced by{' '}
                    {`$\\mathbf{a}$`}.
                  </td>
                </tr>
              </tbody>
            </table>

            <h3>Standard Principal Moments</h3>
            <p>
              When to use: symmetric bodies (sphere, cylinder, rod, disc, cone) have {`$I_1 = I_2$`}
              ; asymmetric bodies have three distinct moments.
            </p>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Body</th>
                  <th>{`$I_1$`}</th>
                  <th>{`$I_2$`}</th>
                  <th>{`$I_3$`}</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Thin rod (length {`$l$`})</td>
                  <td>{`$\\frac{1}{12}\\mu l^2$`}</td>
                  <td>{`$\\frac{1}{12}\\mu l^2$`}</td>
                  <td>{`$0$`}</td>
                  <td>
                    Rotator: {`$I_1 = I_2$`}, {`$I_3 = 0$`}
                  </td>
                </tr>
                <tr>
                  <td>Sphere (radius {`$R$`})</td>
                  <td>{`$\\frac{2}{5}\\mu R^2$`}</td>
                  <td>{`$\\frac{2}{5}\\mu R^2$`}</td>
                  <td>{`$\\frac{2}{5}\\mu R^2$`}</td>
                  <td>Spherical top: all equal</td>
                </tr>
                <tr>
                  <td>
                    Cylinder (radius {`$R$`}, height {`$h$`})
                  </td>
                  <td>{`$\\frac{1}{4}\\mu R^2 + \\frac{1}{12}\\mu h^2$`}</td>
                  <td>{`$\\frac{1}{4}\\mu R^2 + \\frac{1}{12}\\mu h^2$`}</td>
                  <td>{`$\\frac{1}{2}\\mu R^2$`}</td>
                  <td>Symmetric top: {`$I_1 = I_2$`}</td>
                </tr>
                <tr>
                  <td>
                    Cone (radius {`$R$`}, height {`$h$`})
                  </td>
                  <td>{`$\\frac{3}{80}\\mu(4R^2+h^2)$`}</td>
                  <td>{`$\\frac{3}{80}\\mu(4R^2+h^2)$`}</td>
                  <td>{`$\\frac{3}{10}\\mu R^2$`}</td>
                  <td>Symmetric top: {`$I_1 = I_2$`}</td>
                </tr>
                <tr>
                  <td>Ellipsoid (semi-axes {`$a, b, c$`})</td>
                  <td>{`$\\frac{1}{5}\\mu(b^2+c^2)$`}</td>
                  <td>{`$\\frac{1}{5}\\mu(a^2+c^2)$`}</td>
                  <td>{`$\\frac{1}{5}\\mu(a^2+b^2)$`}</td>
                  <td>Asymmetric top if {`$a \\neq b \\neq c$`}</td>
                </tr>
                <tr>
                  <td>Rectangular box ({`$a \\times b \\times c$`})</td>
                  <td>{`$\\frac{1}{12}\\mu(b^2+c^2)$`}</td>
                  <td>{`$\\frac{1}{12}\\mu(a^2+c^2)$`}</td>
                  <td>{`$\\frac{1}{12}\\mu(a^2+b^2)$`}</td>
                  <td>Asymmetric top if {`$a \\neq b \\neq c$`}</td>
                </tr>
              </tbody>
            </table>

            <h3>Body Classifications</h3>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Principal moments</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Asymmetric top</td>
                  <td>{`$I_1 \\neq I_2 \\neq I_3$`}</td>
                  <td>Full Euler equations; Jacobi elliptic solution</td>
                </tr>
                <tr>
                  <td>Symmetric top</td>
                  <td>{`$I_1 = I_2 = I' \\neq I_3$`}</td>
                  <td>{`$\\Omega_3 = \\text{const}$`}; regular precession</td>
                </tr>
                <tr>
                  <td>Spherical top</td>
                  <td>{`$I_1 = I_2 = I_3 = I$`}</td>
                  <td>{`$\\mathbf{M} = I\\boldsymbol{\\Omega}$`}; no precession</td>
                </tr>
                <tr>
                  <td>Rotator</td>
                  <td>{`$I_3 = 0$`}</td>
                  <td>Collinear mass distribution</td>
                </tr>
              </tbody>
            </table>

            <h2>Kinetic Energy and Lagrangian</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rotational kinetic energy (body frame)</td>
                  <td>{`$T_{\\rm rot} = \\frac{1}{2}(I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2)$`}</td>
                  <td>Whenever angular velocity components are known in principal axes.</td>
                </tr>
                <tr>
                  <td>Kinetic energy (operator form)</td>
                  <td>{`$T = \\frac{1}{2}(A\\boldsymbol{\\Omega}, \\boldsymbol{\\Omega}) = \\frac{1}{2}(\\mathbf{M}, \\boldsymbol{\\Omega})$`}</td>
                  <td>Coordinate-free proofs; Lie-group derivations.</td>
                </tr>
                <tr>
                  <td>Symmetric-top Lagrangian in Euler angles</td>
                  <td>{`$L = \\frac{1}{2}I'(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\theta) + \\frac{1}{2}I_3(\\dot{\\psi}+\\dot{\\varphi}\\cos\\theta)^2 - U(\\theta)$`}</td>
                  <td>
                    Any axially symmetric body with fixed point in potential {`$U(\\theta)$`}.
                  </td>
                </tr>
                <tr>
                  <td>Equations of motion</td>
                  <td>{`$d\\mathbf{P}/dt = \\mathbf{F}$; $d\\mathbf{M}/dt = \\mathbf{K}$`}</td>
                  <td>Translational and rotational equations of a free or torqued rigid body.</td>
                </tr>
              </tbody>
            </table>

            <h2>Euler's Equations</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Euler's equations (free rotation)</td>
                  <td>
                    <p>{`$I_1\\dot{\\Omega}_1 = (I_2-I_3)\\Omega_2\\Omega_3$`}</p>
                    <p>{`$I_2\\dot{\\Omega}_2 = (I_3-I_1)\\Omega_3\\Omega_1$`}</p>
                    <p>{`$I_3\\dot{\\Omega}_3 = (I_1-I_2)\\Omega_1\\Omega_2$`}</p>
                  </td>
                  <td>{`$\\mathbf{K} = 0$`}; torque-free rotation in principal axes.</td>
                </tr>
                <tr>
                  <td>Euler's equations (Lie-group form)</td>
                  <td>{`$d\\mathbf{M}/dt = [\\mathbf{M}, \\boldsymbol{\\Omega}]$ in body frame`}</td>
                  <td>Intrinsic derivation; connects to geodesic flow on {`$SO(3)$`}.</td>
                </tr>
                <tr>
                  <td>Frame-change rule</td>
                  <td>{`$d\\mathbf{A}/dt = d'\\mathbf{A}/dt + \\boldsymbol{\\Omega} \\times \\mathbf{A}$`}</td>
                  <td>Converting any space-frame equation into body-frame form.</td>
                </tr>
              </tbody>
            </table>

            <h2>Free Symmetric Top</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Body-frame precession frequency</td>
                  <td>{`$\\omega = \\Omega_3(I_3 - I')/I'$`}</td>
                  <td>
                    Free symmetric top; rate at which {`$\\boldsymbol{\\Omega}_\\perp$`} rotates in
                    body {`$x_1 x_2$`}-plane.
                  </td>
                </tr>
                <tr>
                  <td>Free symmetric top solution (body frame)</td>
                  <td>{`$\\Omega_3 = \\text{const}$; $\\Omega_1 = A\\cos\\omega t$; $\\Omega_2 = A\\sin\\omega t$`}</td>
                  <td>Free symmetric top in principal axes.</td>
                </tr>
                <tr>
                  <td>Space-frame precession rate</td>
                  <td>{`$\\Omega_{\\rm pr} = M/I'$`}</td>
                  <td>
                    Rate at which symmetry axis sweeps around fixed {`$\\mathbf{M}$`} in space.
                  </td>
                </tr>
              </tbody>
            </table>

            <VizFigure aspect="auto" title="Precession Cone">
              <PrecessionCone />
            </VizFigure>

            <h2>Lagrange (Heavy Symmetric) Top</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lagrangian</td>
                  <td>{`$L = \\frac{I_1}{2}(\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\theta) + \\frac{I_3}{2}(\\dot{\\psi}+\\dot{\\varphi}\\cos\\theta)^2 - mg\\ell\\cos\\theta$`}</td>
                  <td>
                    Axially symmetric body, fixed lowest point, centre of mass at height{' '}
                    {`$\\ell\\cos\\theta$`} above pivot.
                  </td>
                </tr>
                <tr>
                  <td>Conserved momentum {`$M_z$`}</td>
                  <td>{`$M_z = I_1\\dot{\\varphi}\\sin^2\\theta + M_3\\cos\\theta = \\text{const}$`}</td>
                  <td>
                    Component of angular momentum along fixed vertical axis; conserved by{' '}
                    {`$\\varphi$`}-cyclic symmetry.
                  </td>
                </tr>
                <tr>
                  <td>Conserved momentum {`$M_3$`}</td>
                  <td>{`$M_3 = I_3(\\dot{\\psi}+\\dot{\\varphi}\\cos\\theta) = \\text{const}$`}</td>
                  <td>
                    Angular momentum component along body symmetry axis; conserved by {`$\\psi$`}
                    -cyclic symmetry.
                  </td>
                </tr>
                <tr>
                  <td>Effective potential</td>
                  <td>{`$U_{\\rm eff}(\\theta) = \\frac{(M_z - M_3\\cos\\theta)^2}{2I_1\\sin^2\\theta} + mg\\ell\\cos\\theta$`}</td>
                  <td>
                    Reduce 3D problem to 1D; determine nutation range {`$[\\theta_1, \\theta_2]$`}{' '}
                    from {`$U_{\\rm eff}(\\theta_{1,2}) = E'$`}.
                  </td>
                </tr>
                <tr>
                  <td>Reduced energy equation</td>
                  <td>{`$E' = \\frac{I_1}{2}\\dot{\\theta}^2 + U_{\\rm eff}(\\theta)$`}</td>
                  <td>1D system after eliminating cyclic coordinates.</td>
                </tr>
                <tr>
                  <td>Precession rate</td>
                  <td>{`$\\dot{\\varphi} = (M_z - M_3\\cos\\theta)/(I_1\\sin^2\\theta)$`}</td>
                  <td>
                    Computing azimuthal precession rate as function of nutation angle {`$\\theta$`}.
                  </td>
                </tr>
              </tbody>
            </table>

            <VizFigure aspect="auto" title="Lagrange Top">
              <LagrangeTopUeff />
            </VizFigure>

            <h3>Three Precession Path Types</h3>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Condition</th>
                  <th>Path on unit sphere</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sinusoidal (wavy)</td>
                  <td>{`$\\dot{\\varphi}$`} keeps same sign throughout nutation</td>
                  <td>
                    Sinusoidal wave between {`$\\theta_1$`} and {`$\\theta_2$`}
                  </td>
                </tr>
                <tr>
                  <td>Looping</td>
                  <td>{`$\\dot{\\varphi}$`} changes sign during nutation</td>
                  <td>Loops crossing azimuthal direction</td>
                </tr>
                <tr>
                  <td>Cusped</td>
                  <td>
                    {`$\\dot{\\varphi} = 0$`} at {`$\\theta_1$`} or {`$\\theta_2$`}
                  </td>
                  <td>Cusps; includes regular precession ({`$\\dot{\\theta} = 0$`} also)</td>
                </tr>
              </tbody>
            </table>

            <h2>Poinsot Construction</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inertia ellipsoid</td>
                  <td>{`$\\mathcal{E} = \\{\\boldsymbol{\\Omega} : I_1\\Omega_1^2 + I_2\\Omega_2^2 + I_3\\Omega_3^2 = 1\\}$; semi-axes $1/\\sqrt{I_i}$`}</td>
                  <td>
                    Geometric representation of body's rotational inertia; normal at{' '}
                    {`$\\boldsymbol{\\Omega}$`} points along {`$\\mathbf{M}$`}.
                  </td>
                </tr>
                <tr>
                  <td>Poinsot theorem</td>
                  <td>
                    Inertia ellipsoid rolls without slipping on invariable plane{' '}
                    {`$\\pi \\perp \\mathbf{m}$`}
                  </td>
                  <td>Visualise free rigid-body motion without solving ODEs.</td>
                </tr>
                <tr>
                  <td>Polhode</td>
                  <td>
                    Intersection of inertia ellipsoid with energy-constrained sphere in{' '}
                    {`$\\mathbf{M}$`}-space
                  </td>
                  <td>
                    Trajectory of contact point on ellipsoid; closed near {`$e_1$`}, {`$e_3$`};
                    separatrix at {`$e_2$`}.
                  </td>
                </tr>
                <tr>
                  <td>Herpolhode</td>
                  <td>Trajectory of contact point on invariable plane</td>
                  <td>Describes motion in space; non-crossing curve.</td>
                </tr>
              </tbody>
            </table>

            <VizFigure aspect="auto" title="Poinsot Construction">
              <PoinsotConstruction />
            </VizFigure>

            <h2>Asymmetric Top Stability</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Two first integrals (free asymmetric top)</td>
                  <td>{`$2E = M_1^2/I_1 + M_2^2/I_2 + M_3^2/I_3$; $M^2 = M_1^2 + M_2^2 + M_3^2$`}</td>
                  <td>
                    Constrain motion of {`$\\mathbf{M}$`} in body frame; their intersection
                    determines stability.
                  </td>
                </tr>
                <tr>
                  <td>Stability criterion</td>
                  <td>
                    Rotation about {`$e_1$`} (smallest {`$I$`}) and {`$e_3$`} (largest {`$I$`}) is
                    stable; {`$e_2$`} (middle {`$I$`}) is unstable
                  </td>
                  <td>Determine which spin axis of a torque-free body is dynamically safe.</td>
                </tr>
                <tr>
                  <td>Small-oscillation frequency near {`$e_3$`}</td>
                  <td>{`$\\omega_{\\rm small} = \\Omega_0\\sqrt{(I_3/I_1 - 1)(I_3/I_2 - 1)}$`}</td>
                  <td>Linearised stability analysis near largest-moment axis.</td>
                </tr>
                <tr>
                  <td>Asymmetric-top solution</td>
                  <td>{`$\\Omega_1 \\propto \\operatorname{cn}(\\tau, k)$; $\\Omega_2 \\propto \\operatorname{sn}(\\tau, k)$; $\\Omega_3 \\propto \\operatorname{dn}(\\tau, k)$`}</td>
                  <td>Exact solution of free asymmetric top via Jacobi elliptic functions.</td>
                </tr>
                <tr>
                  <td>Elliptic modulus</td>
                  <td>{`$k^2 = \\frac{(I_2-I_1)(2EI_3-M^2)}{(I_3-I_2)(M^2-2EI_1)}$`}</td>
                  <td>
                    Parameterises how close motion is to separatrix; {`$k \\to 1$`} near {`$e_2$`}{' '}
                    instability.
                  </td>
                </tr>
                <tr>
                  <td>Period of asymmetric top</td>
                  <td>{`$T = 4K(k)\\sqrt{I_1 I_2 I_3/((I_3-I_2)(M^2-2EI_1))}$`}</td>
                  <td>Compute return time; diverges at {`$k \\to 1$`}.</td>
                </tr>
              </tbody>
            </table>

            <VizFigure aspect="auto" title="Tennis Racket Effect">
              <TennisRacket />
            </VizFigure>

            <h2>Sleeping Top and Fast Top</h2>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sleeping-top stability condition</td>
                  <td>{`$\\omega_3^2 > 4mg\\ell I_1/I_3^2$`}</td>
                  <td>
                    Determine whether a vertically spinning top ({`$\\theta = 0$`}) resists small
                    perturbations.
                  </td>
                </tr>
                <tr>
                  <td>Equivalent form</td>
                  <td>{`$M_3 > 2\\sqrt{mg\\ell I_1}$ (in terms of spin angular momentum $M_3 = I_3\\omega_3$)`}</td>
                  <td>Check stability in terms of angular momentum rather than spin rate.</td>
                </tr>
                <tr>
                  <td>Fast-top nutation frequency</td>
                  <td>{`$\\omega_{\\rm nut} \\approx I_3\\omega_3/I_1$`}</td>
                  <td>
                    {`$\\frac{1}{2}I_3\\omega_3^2 \\gg mg\\ell$`}; nutation frequency for
                    asymptotically fast spin.
                  </td>
                </tr>
                <tr>
                  <td>Fast-top nutation amplitude</td>
                  <td>{`$a_{\\rm nut} \\approx I_1 mg\\ell\\sin\\theta_0/(I_3^2\\omega_3^2)$`}</td>
                  <td>
                    Fast-top limit; amplitude of nutation angle oscillation shrinks as{' '}
                    {`$1/\\omega_3^2$`}.
                  </td>
                </tr>
                <tr>
                  <td>Fast-top slow precession rate</td>
                  <td>{`$\\omega_{\\rm prec} \\approx mg\\ell/(I_3\\omega_3)$`}</td>
                  <td>
                    Time-averaged precession rate of the symmetry axis; slows as {`$1/\\omega_3$`}.
                  </td>
                </tr>
                <tr>
                  <td>Similarity theorem</td>
                  <td>{`$\\varphi_g(t,\\xi) = \\varphi_{N^2 g}(Nt, \\xi)$`}</td>
                  <td>
                    Relates fast top ({`$\\omega_3 \\to \\infty$`}) to free top ({`$g \\to 0$`});
                    use to derive fast-top asymptotics.
                  </td>
                </tr>
                <tr>
                  <td>Free-top nutation frequency ({`$g = 0$`})</td>
                  <td>{`$\\omega_{\\rm nut} = I_3\\omega_3/I_1$ (exact)`}</td>
                  <td>
                    Base result from which fast-top frequency is derived via similarity theorem.
                  </td>
                </tr>
              </tbody>
            </table>

            <h3>Fast-Top Scalings with {`$\\omega_3$`}</h3>
            <table className="lrn-table">
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Scaling</th>
                  <th>Physical meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nutation frequency {`$\\omega_{\\rm nut}$`}</td>
                  <td>{`$\\propto \\omega_3$`}</td>
                  <td>Faster spin = faster body wobble</td>
                </tr>
                <tr>
                  <td>Nutation amplitude {`$a_{\\rm nut}$`}</td>
                  <td>{`$\\propto 1/\\omega_3^2$`}</td>
                  <td>Faster spin = smaller wobble (invisible for fast tops)</td>
                </tr>
                <tr>
                  <td>Precession rate {`$\\omega_{\\rm prec}$`}</td>
                  <td>{`$\\propto 1/\\omega_3$`}</td>
                  <td>Faster spin = slower precession</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ]
    }
  }

  return <LearningTemplate config={config} />
}
