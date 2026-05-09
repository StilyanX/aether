import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  Plot as P1,
  Axes as A1,
  Parametric as Pa1,
  Polyline as Pl1,
  Dot as D1,
  Arrow as Ar1,
  Tex as T1,
  Slider as Sl1,
  DragHandle as DH1,
  OPACITY as O1,
  VizCard
} from '../../../../../components/viz/physics-viz/primitives'

// Visualizations

function ActionPathVariation() {
  const [eps, setEps] = React.useState(0.6)
  const [bumps, setBumps] = React.useState(1)
  const A0 = 1.4
  const truePath = t => [t, A0 * Math.sin(t)]
  const variedPath = t => {
    const [x, y] = truePath(t)
    return [x, y + eps * Math.sin(bumps * Math.PI * (t / 4))]
  }
  const actS = path => {
    let s = 0
    const N = 400
    for (let i = 0; i < N; i++) {
      const t = (i / N) * 4
      const dt = 4 / N
      const [, y0] = path(t)
      const [, y1] = path(t + dt)
      const yd = (y1 - y0) / dt
      const ym = 0.5 * (y0 + y1)
      s += (0.5 * yd * yd - 0.5 * ym * ym) * dt
    }
    return s
  }
  const S0 = actS(truePath),
    S1 = actS(variedPath)
  return (
    <div style={{ width: '100%' }}>
      <P1 xRange={[-0.6, 4.6]} yRange={[-2.4, 2.8]} width={520} height={260}>
        <A1 step={1} showGrid={false} showTicks={false} />
        <Pa1 xy={truePath} t={[0, 4]} samples={120} opacity={O1.fg} strokeWidth={2} />
        <Pa1 xy={variedPath} t={[0, 4]} samples={120} opacity={O1.accent} dash="4 4" />
        {[0.5, 1.4, 2.3, 3.2].map((tx, i) => {
          const a = truePath(tx),
            b = variedPath(tx)
          return <Ar1 key={i} from={a} to={b} opacity={O1.dim} head={5} />
        })}
        <D1 x={0} y={0} />
        <D1 x={4} y={truePath(4)[1]} />
        <T1 at={[0.05, -0.05]} tex="q(t_1)" anchor="start" dy={16} opacity={O1.dim} />
        <T1 at={[3.95, truePath(4)[1]]} tex="q(t_2)" anchor="end" dy={16} opacity={O1.dim} />
        <T1
          at={[2.4, truePath(2.4)[1] - 0.15]}
          tex="q(t)"
          anchor="middle"
          dy={18}
          opacity={O1.fg}
        />
        <T1
          at={[2.4, variedPath(2.4)[1]]}
          tex="q + \delta q"
          anchor="middle"
          dy={-8}
          opacity={O1.accent}
        />
        <T1 at={[0.05, 2.7]} tex={`S[q] = ${S0.toFixed(3)}`} opacity={O1.fg} size={11} />
        <T1
          at={[0.05, 2.4]}
          tex={`S[q+\\delta q] = ${S1.toFixed(3)}`}
          opacity={O1.accent}
          size={11}
        />
        <T1
          at={[0.05, 2.1]}
          tex={`\\Delta S = ${(S1 - S0).toFixed(3)}`}
          opacity={O1.dim}
          size={11}
        />
      </P1>
      <Sl1
        label="δq"
        value={eps}
        min={-1}
        max={1}
        step={0.05}
        onChange={setEps}
        format={v => v.toFixed(2)}
      />
      <Sl1
        label="modes"
        value={bumps}
        min={1}
        max={4}
        step={1}
        onChange={setBumps}
        format={v => v.toFixed(0)}
      />
    </div>
  )
}

function Brachistochrone() {
  const R = 0.9
  const cycloid = s => [R * (s - Math.sin(s)), -R * (1 - Math.cos(s))]
  const sMax = Math.PI * 1.3
  const A = [0, 0],
    B = cycloid(sMax)
  const arc = t => {
    const cx = (A[0] + B[0]) / 2,
      cy = (A[1] + B[1]) / 2 - 0.6
    const dx = (B[0] - A[0]) / 2
    const r = Math.hypot(dx, (B[1] - A[1]) / 2 + 0.6)
    const a0 = Math.atan2(A[1] - cy, A[0] - cx)
    const a1 = Math.atan2(B[1] - cy, B[0] - cx)
    const a = a0 + (a1 - a0) * t
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  }
  const straight = t => [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t]
  const g = 9.81
  const descentTime = (curve, uMax = 1) => {
    let total = 0
    const N = 400
    let prev = curve(0)
    for (let i = 1; i <= N; i++) {
      const u = (i / N) * uMax
      const cur = curve(u)
      const ds = Math.hypot(cur[0] - prev[0], cur[1] - prev[1])
      const yMid = (cur[1] + prev[1]) / 2
      const v = Math.sqrt(Math.max(2 * g * -yMid, 1e-6))
      total += ds / v
      prev = cur
    }
    return total
  }
  const cyc01 = t => cycloid(t * sMax)
  const Tcyc = descentTime(cyc01)
  const Tarc = descentTime(arc)
  const Tstr = descentTime(straight)
  const buildMap = curve => {
    const N = 400
    const ts = [0]
    const us = [0]
    let total = 0
    let prev = curve(0)
    for (let i = 1; i <= N; i++) {
      const u = i / N
      const cur = curve(u)
      const ds = Math.hypot(cur[0] - prev[0], cur[1] - prev[1])
      const yMid = (cur[1] + prev[1]) / 2
      const v = Math.sqrt(Math.max(2 * g * -yMid, 1e-6))
      total += ds / v
      ts.push(total)
      us.push(u)
      prev = cur
    }
    return tNow => {
      if (tNow >= total) return 1
      let lo = 0,
        hi = ts.length - 1
      while (lo < hi - 1) {
        const m = (lo + hi) >> 1
        if (ts[m] < tNow) lo = m
        else hi = m
      }
      const f = (tNow - ts[lo]) / (ts[hi] - ts[lo])
      return us[lo] + f * (us[hi] - us[lo])
    }
  }
  const mCyc = React.useMemo(() => buildMap(cyc01), [])
  const mArc = React.useMemo(() => buildMap(arc), [])
  const mStr = React.useMemo(() => buildMap(straight), [])
  const [t, setT] = React.useState(0)
  const pCyc = cyc01(mCyc(Math.min(t, Tcyc)))
  const pArc = arc(mArc(Math.min(t, Tarc)))
  const pStr = straight(mStr(Math.min(t, Tstr)))
  return (
    <div style={{ width: '100%' }}>
      <P1 xRange={[-0.4, 3.6]} yRange={[-2.6, 0.6]} width={520} height={260}>
        <A1 step={1} showGrid={false} />
        <Pa1 xy={straight} t={[0, 1]} opacity={O1.dim} dash="3 4" />
        <Pa1 xy={arc} t={[0, 1]} opacity={O1.dim} dash="3 4" />
        <Pa1 xy={cyc01} t={[0, 1]} samples={120} opacity={O1.fg} strokeWidth={2} />
        <D1 x={A[0]} y={A[1]} />
        <D1 x={B[0]} y={B[1]} />
        <D1 x={pStr[0]} y={pStr[1]} r={5} opacity={O1.dim} />
        <D1 x={pArc[0]} y={pArc[1]} r={5} opacity={O1.dim} />
        <D1 x={pCyc[0]} y={pCyc[1]} r={6} opacity={O1.fg} />
        <T1 at={[A[0] - 0.05, A[1] + 0.1]} tex="A" anchor="end" />
        <T1 at={[B[0] + 0.1, B[1]]} tex="B" />
        <T1
          at={[1.6, -1.7]}
          tex={`\\text{cycloid: } ${Tcyc.toFixed(3)}\\,\\text{s}`}
          anchor="middle"
          opacity={O1.fg}
          size={11}
        />
        <T1
          at={[1.7, -0.4]}
          tex={`\\text{straight: } ${Tstr.toFixed(3)}\\,\\text{s}`}
          anchor="middle"
          opacity={O1.dim}
          size={11}
        />
        <T1
          at={[2.7, -1.0]}
          tex={`\\text{arc: } ${Tarc.toFixed(3)}\\,\\text{s}`}
          anchor="start"
          opacity={O1.dim}
          size={11}
        />
      </P1>
      <Sl1
        label="t"
        value={t}
        min={0}
        max={Tstr + 0.3}
        step={0.01}
        onChange={setT}
        format={v => v.toFixed(2) + 's'}
      />
    </div>
  )
}

// Static geometry for GeodesicSphere - computed once at module load.
const _GR = 1.6
const _Gcy = Math.cos(0.5),
  _Gsy = Math.sin(0.5)
const _Gcp = Math.cos(0.35),
  _Gsp = Math.sin(0.35)
const _gproj = v => {
  const x1 = v[0] * _Gcy + v[2] * _Gsy
  const z1 = -v[0] * _Gsy + v[2] * _Gcy
  return [_GR * x1, _GR * (v[1] * _Gcp - z1 * _Gsp)]
}
const _gsph2vec = ({ lon, lat }) => [
  Math.cos(lat) * Math.cos(lon),
  Math.sin(lat),
  Math.cos(lat) * Math.sin(lon)
]
const _GN = 80
const _gSphere = Array.from({ length: _GN + 1 }, (_, i) => {
  const a = (i / _GN) * 2 * Math.PI
  return [Math.cos(a) * _GR, Math.sin(a) * _GR]
})
const _gEquator = Array.from({ length: _GN + 1 }, (_, i) => {
  const a = (i / _GN) * 2 * Math.PI
  return _gproj([Math.cos(a), 0, Math.sin(a)])
})
const _gUnproject = (x, y) => {
  const X = x / _GR,
    Y = y / _GR
  let best = null
  for (let i = 0; i <= 200; i++) {
    const vy = -1 + (i / 200) * 2
    const z1 = (vy * _Gcp - Y) / _Gsp
    const vx = X * _Gcy - z1 * _Gsy
    const vz = X * _Gsy + z1 * _Gcy
    const n2 = vx * vx + vy * vy + vz * vz
    if (Math.abs(n2 - 1) < 0.05 && vy * _Gsp + z1 * _Gcp > 0) {
      best = [vx, vy, vz]
      break
    }
  }
  if (!best) {
    const r = Math.hypot(X, Y)
    best = [X / r, Y / r, 0]
  }
  const n = Math.hypot(best[0], best[1], best[2])
  const v = [best[0] / n, best[1] / n, best[2] / n]
  return { lat: Math.asin(Math.max(-1, Math.min(1, v[1]))), lon: Math.atan2(v[2], v[0]) }
}
const _gTexAt = [0, 1.7]

function GeodesicSphere() {
  const [pSph, setPSph] = React.useState({ lon: -0.9, lat: 0.6 })
  const [qSph, setQSph] = React.useState({ lon: 1.0, lat: 0.4 })
  const P3v = React.useMemo(() => _gsph2vec(pSph), [pSph])
  const Q3v = React.useMemo(() => _gsph2vec(qSph), [qSph])
  const { Omega, sinOm } = React.useMemo(() => {
    const cosOmega = Math.max(
      -0.999,
      Math.min(0.999, P3v[0] * Q3v[0] + P3v[1] * Q3v[1] + P3v[2] * Q3v[2])
    )
    const Omega = Math.acos(cosOmega)
    return { Omega, sinOm: Math.sin(Omega) }
  }, [P3v, Q3v])
  const greatXY = React.useMemo(
    () => t => {
      const a = Math.sin((1 - t) * Omega) / sinOm
      const b = Math.sin(t * Omega) / sinOm
      return _gproj([a * P3v[0] + b * Q3v[0], a * P3v[1] + b * Q3v[1], a * P3v[2] + b * Q3v[2]])
    },
    [P3v, Q3v, Omega, sinOm]
  )
  const smallXY = React.useMemo(
    () => t => {
      const v = [
        (1 - t) * P3v[0] + t * Q3v[0],
        (1 - t) * P3v[1] + t * Q3v[1] + 0.6 * Math.sin(Math.PI * t),
        (1 - t) * P3v[2] + t * Q3v[2]
      ]
      const n = Math.hypot(v[0], v[1], v[2])
      return _gproj([v[0] / n, v[1] / n, v[2] / n])
    },
    [P3v, Q3v]
  )
  const onChangeP = React.useCallback((x, y) => setPSph(_gUnproject(x, y)), [])
  const onChangeQ = React.useCallback((x, y) => setQSph(_gUnproject(x, y)), [])
  const Pp = _gproj(P3v)
  const Qp = _gproj(Q3v)
  return (
    <P1 xRange={[-2.1, 2.1]} yRange={[-2, 2]} width={420} height={300}>
      <Pl1 points={_gSphere} opacity={O1.dim} closed />
      <Pl1 points={_gEquator} opacity={O1.faint} />
      <Pa1 xy={smallXY} t={[0, 1]} samples={120} opacity={O1.dim} dash="4 4" />
      <Pa1 xy={greatXY} t={[0, 1]} samples={160} opacity={O1.fg} strokeWidth={2} />
      <DH1 x={Pp[0]} y={Pp[1]} onChange={onChangeP} label="P" />
      <DH1 x={Qp[0]} y={Qp[1]} onChange={onChangeQ} label="Q" />
      <T1
        at={_gTexAt}
        tex={`\\text{great circle}\\;\\Omega = ${((Omega * 180) / Math.PI).toFixed(0)}^\\circ`}
        anchor="middle"
        opacity={O1.fg}
        size={11}
      />
    </P1>
  )
}

export default function EulerLagrangeEquations() {
  const config = {
    cssPrefix: 'ele',
    source: 'Mathematical Methods of Classical Mechanics - Arnold',
    documentTitle: 'Euler-Lagrange Equations - AETHER',
    learning: {
      groupTitle: 'Part II: Lagrangian Mechanics and Variational Principles',
      category: 'Physics',
      title: 'Euler-Lagrange Equations',
      subtitle:
        'From functionals and variations to the equations of motion in any coordinate system',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Calculus of Variations</h2>
            <p>
              A roller coaster track. A beam of light. A spacecraft trajectory. Each follows the
              path that, in a precise sense, is the best one available among all possible paths. The
              calculus of variations is the math that picks out these paths.
            </p>
            <p>
              Most physics rules describe a single moment: where a particle is, how fast it moves,
              what force pushes it. The calculus of variations works at a higher level. It compares
              whole paths against each other and singles out the special one.
            </p>
            <p>
              To compare paths, we need a way to attach one number to each path. Anything that takes
              a whole curve as input and returns a single number is called a{' '}
              <strong>functional</strong>.
            </p>
            <div className="lrn-definition">
              <span className="lrn-definition-term">Functional</span>
              <div className="lrn-definition-desc">
                <p>A functional takes a curve as input and returns one number.</p>
                <p>
                  {`The standard form is $\\Phi(\\gamma) = \\int_a^b L(x, \\dot{x}, t)\\, dt$. Here $\\gamma$ is the curve $x(t)$, $\\dot{x} = \\frac{dx}{dt}$ is its velocity, and $L$ is any rule that combines position, velocity, and time into a single number. The integral adds up that rule along the curve from $t=a$ to $t=b$.`}
                </p>
              </div>
            </div>
            <p>Three functionals to keep in mind:</p>
            <ul className="lrn-list">
              <li>
                <strong>Arc length</strong> of a curve: how long the curve is.
              </li>
              <li>
                <strong>Travel time</strong> of a light ray: how long the ray takes to get from
                start to end.
              </li>
              <li>
                <strong>Action</strong> of a moving particle: a quantity built from energy. We
                define it carefully in the next section. For now, treat it as the number nature
                minimizes when choosing the actual path.
              </li>
            </ul>
            <p>
              <strong>When to use this:</strong> reach for the calculus of variations whenever the
              unknown is a whole curve or function, not a single number. Shortest path, fastest
              descent, real trajectory of a particle: all are minimum-of-a-functional problems.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>{`The arc length of a curve $x(t)$ from $t=0$ to $t=1$ is $\\Phi(\\gamma) = \\int_0^1 \\sqrt{1 + \\dot{x}^2}\\, dt$. What kind of curves do you predict will minimize this functional?`}</p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  Straight lines. They are the shortest distance between two points, and the
                  machinery we are about to build will confirm it. The minimizing curves satisfy{' '}
                  {`$\\dot{x} = c_1$`} (constant velocity), which integrates to{' '}
                  {`$x = c_1 t + c_2$`}: a straight line in the {`$(t, x)$`} plane.
                </p>
              </details>
            </div>

            <VizCard id="02.1.1" title="Action Path Variation">
              <ActionPathVariation />
            </VizCard>
            <VizCard id="02.1.2" title="Brachistochrone">
              <Brachistochrone />
            </VizCard>
            <VizCard id="02.1.3" title="Geodesic on Sphere">
              <GeodesicSphere />
            </VizCard>

            <h3>Variations and the Differential</h3>
            <p>
              Think back to ordinary calculus. To find a minimum of a function, you look for points
              where the derivative is zero. Tiny moves in either direction leave the function
              roughly unchanged. We want the same idea for functionals: find curves where tiny
              changes in the curve leave the functional roughly unchanged.
            </p>
            <p>
              A small change in a curve has a name. A <strong>variation</strong> is a second curve{' '}
              {`$h(t)$`} we add to {`$\\gamma$`} to get a slightly different path {`$\\gamma + h$`}.
              We require {`$h(a) = h(b) = 0$`}, which pins the start and end points in place. Only
              the middle of the curve is allowed to move.
            </p>
            <p>Now ask: how does {`$\\Phi$`} change when we add such a variation?</p>
            <p>
              Compute the difference {`$\\Phi(\\gamma + h) - \\Phi(\\gamma)$`}. When {`$h$`} is
              small, this difference is small. Pull out the part that scales linearly with the size
              of {`$h$`} (doubling {`$h$`} doubles this part) and call it {`$F(h)$`}. Anything left
              over shrinks faster than {`$h$`} itself: if you halve {`$h$`}, the leftover shrinks by
              more than half.
            </p>
            <p>
              We say {`$\\Phi$`} is <strong>differentiable</strong> at {`$\\gamma$`} when this clean
              split exists:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\Phi(\\gamma + h) - \\Phi(\\gamma) = F(h) + (\\text{terms that shrink faster than } h)$$`}</span>
            </div>
            <p>
              The linear piece {`$F(h)$`} is the <strong>differential</strong> of {`$\\Phi$`} at{' '}
              {`$\\gamma$`}. It plays the role of a derivative, but for functionals.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Computing the Differential</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Plug the wiggled curve into the functional. Since {`$\\Phi$`} is an integral of{' '}
                  {`$L$`}, just replace {`$x$`} with {`$x+h$`} and {`$\\dot{x}$`} with{' '}
                  {`$\\dot{x}+\\dot{h}$`}:
                  <br />
                  {`$\\Phi(\\gamma + h) = \\int L(x+h, \\dot{x}+\\dot{h}, t)\\, dt$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Approximate {`$L$`} for small {`$h$`}. A <strong>Taylor expansion</strong>{' '}
                  approximates a function near a point by keeping only the lowest-order terms in the
                  small change:
                  <br />
                  {`$L(x+h,\\dot{x}+\\dot{h},t) \\approx L + \\frac{\\partial L}{\\partial x}h + \\frac{\\partial L}{\\partial \\dot{x}}\\dot{h}$.`}
                  <br />
                  The partial derivatives say how much {`$L$`} changes per unit change in {`$x$`}{' '}
                  and per unit change in {`$\\dot{x}$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  Subtract {`$\\Phi(\\gamma)$`}. The constant {`$L$`} term cancels and the
                  approximation error gathers into a single small leftover {`$O(\\|h\\|^2)$`}:
                  <br />
                  {`$\\Phi(\\gamma+h) - \\Phi(\\gamma) = \\int \\left(\\frac{\\partial L}{\\partial x}h + \\frac{\\partial L}{\\partial \\dot{x}}\\dot{h}\\right) dt + O(\\|h\\|^2)$.`}
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">4.</span>
                <div className="lrn-proof-step-content">
                  We want everything multiplied by {`$h$`}, not by {`$\\dot{h}$`}.{' '}
                  <strong>Integration by parts</strong> trades a derivative on one factor for a
                  derivative on the other:
                  <br />
                  {`$\\int \\frac{\\partial L}{\\partial \\dot{x}}\\dot{h}\\, dt = -\\int \\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) h\\, dt$`}
                  .
                  <br />
                  The leftover boundary terms drop out because {`$h(a) = h(b) = 0$`}: the variation
                  vanishes at the endpoints.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">5.</span>
                <div className="lrn-proof-step-content">
                  Combine the two terms. Both now multiply {`$h$`}, so we can factor it out:
                  <br />
                  {`$F(h) = \\int \\left(\\frac{\\partial L}{\\partial x} - \\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{x}}\\right) h\\, dt$.`}
                  <br />
                  The differential is now a single integral of (something) {`$\\times h$`}.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-faded">
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">COMPLETE: Arc Length Differential</span>
                <p>
                  Worked for you. Take {`$L = \\sqrt{1+\\dot{x}^2}$`} and compute the two partial
                  derivatives. {`$L$`} contains no {`$x$`}, so{' '}
                  {`$\\frac{\\partial L}{\\partial x} = 0$`}. And{' '}
                  {`$\\frac{\\partial L}{\\partial \\dot{x}} = \\frac{\\dot{x}}{\\sqrt{1+\\dot{x}^2}}$`}{' '}
                  by the chain rule.
                </p>
                <p>
                  Plug these into the master formula for {`$F(h)$`}. The first term vanishes,
                  leaving{' '}
                  {`$F(h) = -\\int \\frac{d}{dt}\\!\\left(\\frac{\\dot{x}}{\\sqrt{1+\\dot{x}^2}}\\right) h\\, dt$`}
                  . For this to be zero for every choice of {`$h$`}, the bracket must be constant,
                  which forces {`$\\dot{x}$`} itself to be constant. The minimizing curves are
                  straight lines, as predicted.
                </p>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">YOUR TURN: Action Differential</span>
                <p>Now you do the same calculation for a moving particle in a potential.</p>
                <ol className="lrn-list">
                  <li>{`Set $L = \\frac{1}{2}\\dot{x}^2 - U(x)$.`}</li>
                  <li>
                    {`Compute $\\frac{\\partial L}{\\partial x}$ and $\\frac{\\partial L}{\\partial \\dot{x}}$.`}
                  </li>
                  <li>
                    Apply the integration-by-parts step to find the Euler-Lagrange equation. You
                    should recover Newton's second law.
                  </li>
                </ol>
              </div>
              <div className="lrn-faded-phase">
                <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
                <p>
                  {`For $L = \\sqrt{\\dot{x}^2 + \\dot{y}^2}$ (arc length of a curve in the plane, with two coordinates), write the full differential and find the curves that minimize it.`}
                </p>
              </div>
            </div>

            <h3>Extremals and the Euler-Lagrange Equation</h3>
            <p>
              We are ready for the punchline. A curve is an <strong>extremal</strong> when the
              differential {`$F(h)$`} is zero for every allowed variation {`$h$`}. It is the
              calculus-of-variations version of a critical point: tiny wiggles do not change the
              functional to first order.
            </p>
            <p>
              Look at the formula we just derived. Demanding {`$F(h) = 0$`} for every {`$h$`} is
              strong. The only way an integral of (something) {`$\\times h$`} can vanish for every{' '}
              {`$h$`} is if the (something) itself is zero everywhere along the curve.
            </p>

            <div className="lrn-insight">
              <span className="lrn-insight-label">Key Result</span>
              <p>{`A curve $x(t)$ is an extremal of $\\Phi = \\int L\\, dt$ if and only if it satisfies the Euler-Lagrange equation:`}</p>
              <div className="lrn-eq lrn-eq-display">
                <span>{`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) - \\frac{\\partial L}{\\partial x} = 0$$`}</span>
              </div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                The argument is a result called the{' '}
                <strong>Fundamental Lemma of the Calculus of Variations</strong>:
              </p>
              <p>
                {`If $\\int f(t) h(t)\\, dt = 0$ for every smooth function $h$ that vanishes at the endpoints, then $f(t) = 0$ everywhere on the interval.`}
              </p>
              <p>
                The reasoning: suppose {`$f$`} is not zero everywhere. Then it is positive (or
                negative) somewhere, say at {`$t_0$`}. Pick {`$h$`} to be a small bump centered on{' '}
                {`$t_0$`} and zero outside. The integrand {`$f \\cdot h$`} keeps a single sign and
                the integral comes out nonzero. Contradiction. So {`$f$`} must be zero everywhere.
              </p>
            </div>

            <h3>Many Dimensions at Once</h3>
            <p>
              Real systems live in more than one dimension. A particle in 3D space has three
              coordinates. A double pendulum has two angles. Whatever it is, write its state as{' '}
              {`$x = (x_1, x_2, \\ldots, x_n)$`} and its velocity as{' '}
              {`$\\dot{x} = (\\dot{x}_1, \\ldots, \\dot{x}_n)$`}.
            </p>
            <p>
              Repeat the variation argument independently in each direction. Each coordinate gets
              its own Euler-Lagrange equation:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}_i}\\right) - \\frac{\\partial L}{\\partial x_i} = 0, \\quad i = 1, \\ldots, n$$`}</span>
            </div>
            <p>These {`$n$`} equations together determine the full motion of the system.</p>

            <h3>Coordinate Independence</h3>
            <p>
              The Euler-Lagrange equation describes the same physical curves no matter what
              coordinate system you use. Cartesian, polar, spherical, rotating, accelerated: write
              down {`$L$`} in your chosen coordinates and the equation still picks out the right
              paths.
            </p>
            <p>
              The reason is simple. Saying "{`$\\Phi$`} is stationary on this curve" is a statement
              about the curve itself, not about the labels we use for its points. A straight line on
              a sheet of paper stays straight whether you describe it with {`$(x, y)$`} or with
              distance from the origin and angle. Coordinates change how we write {`$L$`}, never
              which curves count as extremals.
            </p>

            <div className="lrn-callout lrn-tip">
              <span className="lrn-callout-label">Tip</span>
              <p>
                This is the practical superpower of the Lagrangian approach. Pick whatever
                coordinates make {`$T$`} and {`$U$`} easy to write, plug them into Euler-Lagrange,
                and out come the equations of motion. No need to track how forces transform between
                coordinate systems.
              </p>
            </div>

            <h3>Worked Example: Arc Length</h3>
            <p>
              Pythagoras tells us that a tiny piece of curve, with horizontal extent {`$dt$`} and
              vertical change {`$\\dot{x}\\, dt$`}, has length {`$\\sqrt{1 + \\dot{x}^2}\\, dt$`}.
              Adding up these pieces gives the full length of the curve from {`$t = 0$`} to{' '}
              {`$t = 1$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$\\Phi(\\gamma) = \\int_0^1 \\sqrt{1+\\dot{x}^2}\\, dt$$`}</span>
            </div>
            <p>
              So {`$L = \\sqrt{1 + \\dot{x}^2}$`}. Take partial derivatives. {`$L$`} contains no{' '}
              {`$x$`}, so {`$\\frac{\\partial L}{\\partial x} = 0$`}. The chain rule gives{' '}
              {`$\\frac{\\partial L}{\\partial \\dot{x}} = \\frac{\\dot{x}}{\\sqrt{1+\\dot{x}^2}}$`}
              .
            </p>
            <p>The Euler-Lagrange equation collapses to:</p>
            <div className="lrn-eq">
              <span>{`$$\\frac{d}{dt}\\!\\left(\\frac{\\dot{x}}{\\sqrt{1+\\dot{x}^2}}\\right) = 0$$`}</span>
            </div>
            <p>
              A quantity whose time derivative is zero is constant. So{' '}
              {`$\\frac{\\dot{x}}{\\sqrt{1+\\dot{x}^2}}$`} is constant, which forces {`$\\dot{x}$`}{' '}
              itself to be constant, which gives {`$x = c_1 t + c_2$`}: a straight line. Pythagoras
              predicted the answer; the calculus of variations confirms it.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                Why does {`$\\frac{d}{dt}(\\cdots) = 0$`} imply the expression inside is a constant?
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  If the derivative of a function is zero everywhere, that function cannot change.
                  So {`$\\frac{\\dot{x}}{\\sqrt{1+\\dot{x}^2}} = c_1$`} for some constant {`$c_1$`}.
                  Solving for {`$\\dot{x}$`} gives a constant velocity, meaning the curve is linear
                  in time.
                </p>
              </details>
            </div>
          </div>
        </>,

        <>
          <div className="lrn-section" id="lrn-section-1" data-section-index="1">
            <h2>Lagrange's Equations</h2>
            <p>
              Now we apply the calculus of variations to physics. Newton wrote his laws as
              relationships between force and acceleration at every instant. Lagrange rewrote them
              as a single statement about whole paths.
            </p>
            <p>
              <strong>Newton:</strong> at every moment, force equals mass times acceleration.
            </p>
            <p>
              <strong>Lagrange:</strong> among all paths a system could take between two fixed
              points in time, the real one is the path that makes a certain functional, the action,
              stationary. "Stationary" is the same condition we just developed: small wiggles in the
              path leave the functional unchanged to first order. The real path is an extremal of
              the action.
            </p>
            <p>
              The two formulations predict the same motions. The advantage of Lagrange's view is
              that it does not care which coordinates you pick.
            </p>
            <p>
              <strong>When to use this:</strong> reach for Lagrange's equations whenever you have
              constraints (a bead on a wire, a rolling ball), curved coordinates (polar, spherical,
              rotating), or many moving parts. All three are awkward in Newton's framework and
              natural in Lagrange's.
            </p>

            <div className="lrn-predict">
              <span className="lrn-predict-label">PREDICT</span>
              <p>
                A particle moves freely (no forces) in 3D space. What do you predict Lagrange's
                equations will give?
              </p>
              <details className="lrn-predict-reveal">
                <summary>Check your thinking</summary>
                <p>
                  {`With no potential, $L = T = \\frac{m}{2}|\\dot{\\mathbf{r}}|^2$. The Lagrangian does not contain the coordinates $q_i$, so $\\frac{\\partial L}{\\partial q_i} = 0$ and the Euler-Lagrange equation reduces to $\\frac{d}{dt}(m\\dot{q}_i) = 0$. Momentum is constant, so the particle moves in a straight line at constant speed. Newton's first law.`}
                </p>
              </details>
            </div>

            <h3>Hamilton's Principle of Least Action</h3>
            <p>
              Hamilton's principle picks the right ingredient {`$L$`} for physics. Take two
              quantities you already know from elementary mechanics:
            </p>
            <ul className="lrn-list">
              <li>
                The <strong>kinetic energy</strong> {`$T = \\frac{1}{2}m|\\dot{\\mathbf{r}}|^2$`}:
                how much energy the particle carries because it is moving.
              </li>
              <li>
                The <strong>potential energy</strong> {`$U(\\mathbf{r})$`}: how much energy is
                stored because of the particle's position in a force field (gravity, springs,
                electric charges).
              </li>
            </ul>
            <p>
              Define the <strong>Lagrangian</strong> as their difference, {`$L = T - U$`}. It looks
              backwards (energy minus energy, not energy plus energy), but this is the combination
              that makes the rest work. The action is the integral of {`$L$`} along the trajectory
              from start time {`$t_1$`} to end time {`$t_2$`}:
            </p>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\Phi(\\gamma) = \\int_{t_1}^{t_2} (T - U)\\, dt$$`}</span>
            </div>
            <p>
              <strong>Hamilton's principle</strong> is the central claim: the path the system
              actually follows between {`$t_1$`} and {`$t_2$`} is an extremal of this action. Run
              the Euler-Lagrange machinery on this {`$L$`} and Newton's laws fall out.
            </p>

            <div className="lrn-proof">
              <span className="lrn-proof-header">Hamilton's Principle Recovers Newton</span>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">1.</span>
                <div className="lrn-proof-step-content">
                  Plug the kinetic and potential energies into the Lagrangian:
                  <br />
                  {`$L = T - U = \\sum_i \\frac{m_i}{2}|\\dot{\\mathbf{r}}_i|^2 - U(\\mathbf{r})$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">2.</span>
                <div className="lrn-proof-step-content">
                  Take the two partial derivatives the Euler-Lagrange equation needs.{' '}
                  {`$\\frac{\\partial L}{\\partial \\dot{\\mathbf{r}}_i} = m_i \\dot{\\mathbf{r}}_i$`}{' '}
                  is the ordinary momentum of particle {`$i$`}.{' '}
                  {`$\\frac{\\partial L}{\\partial \\mathbf{r}_i} = -\\frac{\\partial U}{\\partial \\mathbf{r}_i}$`}{' '}
                  is the negative gradient of the potential, which is exactly the force on particle{' '}
                  {`$i$`}.
                </div>
              </div>
              <div className="lrn-proof-step">
                <span className="lrn-proof-step-num">3.</span>
                <div className="lrn-proof-step-content">
                  Substitute into the Euler-Lagrange equation:
                  <br />
                  {`$\\frac{d}{dt}(m_i \\dot{\\mathbf{r}}_i) = -\\frac{\\partial U}{\\partial \\mathbf{r}_i}$`}
                  .
                  <br />
                  The left side is the rate of change of momentum. The right side is the force. This
                  is Newton's second law.
                </div>
              </div>
              <div className="lrn-qed">Q.E.D.</div>
            </div>

            <div className="lrn-elaborate">
              <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
              <p>
                Read the proof above one more time, but in reverse. Start with Newton:{' '}
                {`$\\frac{d}{dt}(m_i \\dot{\\mathbf{r}}_i) = -\\frac{\\partial U}{\\partial \\mathbf{r}_i}$`}
                .
              </p>
              <p>
                This is exactly the Euler-Lagrange equation for {`$L = T - U$`}, which is in turn
                the condition that the action is stationary. Newton's law and "the action is
                stationary on the real path" are the same statement, written in two languages.
              </p>
            </div>

            <h3>Worked Example: Free Mass Point</h3>
            <p>
              The simplest case: a single mass {`$m$`} drifting through ordinary 3D space with no
              forces. There is no potential, so {`$U = 0$`} and{' '}
              {`$L = T = \\frac{m}{2}(\\dot{q}_1^2 + \\dot{q}_2^2 + \\dot{q}_3^2)$`}. The {`$q_i$`}{' '}
              are the three coordinates of the particle.
            </p>
            <p>
              The Lagrangian does not contain the {`$q_i$`} themselves, only their time derivatives.
              So {`$\\frac{\\partial L}{\\partial q_i} = 0$`} and the Euler-Lagrange equation
              reduces to {`$\\frac{d}{dt}(m\\dot{q}_i) = 0$`}. This says the momentum{' '}
              {`$p_i = m\\dot{q}_i$`} is constant.
            </p>
            <p>
              Constant momentum means constant velocity, which means a straight line at fixed speed.
              Newton's first law, recovered without ever mentioning forces.
            </p>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why is $\\frac{\\partial L}{\\partial q_i} = 0$ for a free particle, and what does that tell us?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`For $L = \\frac{m}{2}|\\dot{\\mathbf{q}}|^2$, the Lagrangian depends only on the velocity of the particle, never on where the particle actually is. Move the particle to a different point in space and $L$ is unchanged. So $\\frac{\\partial L}{\\partial q_i} = 0$. The Euler-Lagrange equation then forces $\\frac{d}{dt}(\\frac{\\partial L}{\\partial \\dot{q}_i}) = 0$: the momentum stays constant. No position dependence in $L$ is the same as no force on the particle.`}
                </p>
              </details>
            </div>

            <h3>Worked Example: Central Field in Polar Coordinates</h3>
            <p>
              A <strong>central force field</strong> is one where the force on the particle always
              points along the line connecting it to a fixed center, and depends only on the
              distance from that center. Gravity from the Sun and a spring anchored at the origin
              are both central. Polar coordinates fit naturally: let {`$r$`} be the distance from
              the center and {`$\\varphi$`} the angle around it.
            </p>
            <p>
              In these coordinates the kinetic energy splits into a radial piece and an angular
              piece, and the potential depends only on {`$r$`}:
            </p>
            <div className="lrn-eq">
              <span>{`$$L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\varphi}^2) - U(r)$$`}</span>
            </div>
            <p>
              Two coordinates ({`$r$`} and {`$\\varphi$`}) means two Euler-Lagrange equations: one
              for radial motion, one for angular motion.
            </p>
            <p>The radial equation is:</p>
            <div className="lrn-eq">
              <span>{`$$m\\ddot{r} = mr\\dot{\\varphi}^2 - \\frac{\\partial U}{\\partial r}$$`}</span>
            </div>
            <p>
              Read it left to right. Mass times radial acceleration equals an outward push that
              grows with how fast the particle spins, minus the inward pull of the potential. The
              first term on the right is the centrifugal effect, generated automatically by the
              polar form of the kinetic energy. We did not have to add it by hand.
            </p>
            <p>
              The angular equation is even simpler. {`$L$`} does not contain {`$\\varphi$`} (only{' '}
              {`$\\dot{\\varphi}$`}), so {`$\\frac{\\partial L}{\\partial \\varphi} = 0$`} and the
              Euler-Lagrange equation collapses to {`$\\frac{d}{dt}(mr^2 \\dot{\\varphi}) = 0$`}.
              The quantity {`$p_\\varphi = mr^2 \\dot{\\varphi}$`} is the angular momentum, and it
              stays constant. We got conservation of angular momentum directly from the fact that{' '}
              {`$L$`} is unchanged when we rotate the coordinate system.
            </p>

            <div className="lrn-definition">
              <span className="lrn-definition-term">
                Generalized Momenta and Cyclic Coordinates
              </span>
              <div className="lrn-definition-desc">
                <p>
                  For each coordinate {`$q_i$`}, the matching <strong>generalized momentum</strong>{' '}
                  is {`$p_i = \\frac{\\partial L}{\\partial \\dot{q}_i}$`}. For Cartesian
                  coordinates this is the ordinary momentum {`$m\\dot{q}_i$`}. For an angular
                  coordinate, it is the angular momentum. The Euler-Lagrange equation is then just{' '}
                  {`$\\dot{p}_i = \\frac{\\partial L}{\\partial q_i}$`}: the rate of change of a
                  generalized momentum equals the corresponding generalized force.
                </p>
                <p>
                  A <strong>cyclic coordinate</strong> is one that does not appear in {`$L$`}, only
                  its time derivative does. When {`$\\frac{\\partial L}{\\partial q_i} = 0$`}, the
                  Euler-Lagrange equation forces {`$\\dot{p}_i = 0$`}: that momentum is conserved.
                  Symmetry (a missing coordinate in {`$L$`}) gives a conservation law.
                </p>
              </div>
            </div>

            <div className="lrn-self-explain">
              <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
              <p>
                {`Why does the term $mr\\dot{\\varphi}^2$ appear in the radial equation? What does it represent physically?`}
              </p>
              <details className="lrn-self-explain-reveal">
                <summary>Expert explanation</summary>
                <p>
                  {`In curved coordinates, the Euler-Lagrange equation handles the geometry for you. The term $mr\\dot{\\varphi}^2$ is the centrifugal effect. A particle moving in a circle of radius $r$ at angular speed $\\dot{\\varphi}$ needs an inward (centripetal) force $-mr\\dot{\\varphi}^2$ to keep it on the circle. In the radial equation that inward requirement appears as an outward push that the radial acceleration has to overcome. The Lagrangian generates it automatically from the kinetic energy term $\\frac{1}{2}mr^2\\dot{\\varphi}^2$, without any special treatment of rotating frames.`}
                </p>
              </details>
            </div>

            <div
              className="lrn-contrast"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1px',
                border: '1px solid rgba(240,240,250,0.15)',
                margin: '32px 0'
              }}
            >
              <div style={{ padding: '20px', borderRight: '1px solid rgba(240,240,250,0.15)' }}>
                <span className="lrn-label">Newtonian Mechanics</span>
                <p>Tracks forces and accelerations in ordinary 3D space.</p>
                <p>
                  Tied to coordinates. Switch to polar or rotating axes and you have to rewrite the
                  forces by hand.
                </p>
                <p>Natural setting: 3D Euclidean space, written {`$\\mathbb{E}^3$`}.</p>
              </div>
              <div style={{ padding: '20px' }}>
                <span className="lrn-label">Lagrangian Mechanics</span>
                <p>Declares that the real path makes the action stationary.</p>
                <p>
                  Coordinate-free. The Euler-Lagrange equation has the same form whatever
                  coordinates you choose.
                </p>
                <p>
                  Natural setting: any <strong>configuration space</strong>, the set of all possible
                  arrangements of the system. For a free particle this is ordinary 3D space; for a
                  pendulum it is a circle; for two linked arms it is a doughnut shape.
                </p>
              </div>
            </div>
          </div>
        </>
      ]
    },
    practice: [
      {
        q: 'What is a functional? Give an example from mechanics.',
        a: '(1) A functional takes a whole curve as input and returns a single number. An ordinary function eats numbers; a functional eats curves. (2) Mechanics example: the action $\\Phi(\\gamma) = \\int (T-U)\\, dt$. Hand it a trajectory $\\gamma$ and it returns one number, the action of that trajectory. (3) Geometry example: arc length $\\Phi(\\gamma) = \\int \\sqrt{1+\\dot{x}^2}\\, dt$. Hand it a curve, get back its length.'
      },
      {
        q: 'State the Euler-Lagrange equation for a 1D Lagrangian $L(x, \\dot{x}, t)$.',
        a: '(1) The Euler-Lagrange equation is $\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) - \\frac{\\partial L}{\\partial x} = 0$. (2) It is the condition that the differential of $\\Phi = \\int L\\, dt$ vanishes for every variation $h$ that pins the endpoints. (3) Integration by parts converts the $\\dot{h}$ term in the differential into an $h$ term, and then the Fundamental Lemma forces the bracketed expression to be zero everywhere on the curve.'
      },
      {
        q: 'A particle moves in a potential $U(q)$ in 1D. Write the Lagrangian and Euler-Lagrange equation.',
        a: "(1) Lagrangian: $L = T - U = \\frac{1}{2}m\\dot{q}^2 - U(q)$. (2) Velocity partial: $\\frac{\\partial L}{\\partial \\dot{q}} = m\\dot{q}$ (the momentum). Its time derivative is $m\\ddot{q}$. (3) Position partial: $\\frac{\\partial L}{\\partial q} = -U'(q)$ (the force, with a sign). (4) Euler-Lagrange: $m\\ddot{q} + U'(q) = 0$, or $m\\ddot{q} = -U'(q)$. Mass times acceleration equals force. Newton's second law."
      },
      {
        q: 'Why does the Euler-Lagrange equation describe the same curves in any coordinate system?',
        a: '(1) The condition that the action is stationary is a statement about the curve itself, not about the labels we use for points along it. (2) Changing coordinates changes the formula for $L$, but it does not change which curves count as extremals. (3) The Euler-Lagrange equation is just the way that single coordinate-free condition writes itself out in whichever coordinates you picked. (4) A straight line stays straight whether you describe it in $(x,y)$ or in distance and angle. The form of $L$ varies; the extremal curves are the same geometric objects.'
      },
      {
        q: "ELABORATE: What is Hamilton's principle? Why is it equivalent to Newton's second law?",
        a: "(1) Hamilton's principle: the actual trajectory of a system between two fixed times is the path that makes the action $\\Phi = \\int (T-U)\\, dt$ stationary, where $T$ is the kinetic energy and $U$ is the potential energy. (2) Run the Euler-Lagrange equation on $L = T - U$ and you get $\\frac{d}{dt}(m_i\\dot{r}_i) = -\\frac{\\partial U}{\\partial r_i}$. The left side is the rate of change of momentum; the right side is the force. (3) That is exactly Newton's second law, $ma = F$. (4) The two principles describe the same motions. Hamilton's wins on coordinate independence: change coordinates and the form of the equation does not change."
      }
    ],
    reference: {
      category: 'Quick Reference',
      title: 'Euler-Lagrange Equations',
      sections: [
        <>
          <div className="lrn-section" id="lrn-section-0" data-section-index="0">
            <h2>Core Equations</h2>

            <h3>Variational Calculus</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Functional differential</td>
                  <td>{`$F(h) = \\int\\!\\left(\\frac{\\partial L}{\\partial x} - \\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot{x}}\\right)h\\, dt$`}</td>
                  <td>Computing how the action changes under variations</td>
                </tr>
                <tr>
                  <td>Euler-Lagrange (1D)</td>
                  <td>{`$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}}\\right) - \\frac{\\partial L}{\\partial x} = 0$`}</td>
                  <td>Any 1D variational problem</td>
                </tr>
                <tr>
                  <td>Euler-Lagrange (nD)</td>
                  <td>{`$\\frac{d}{dt}\\!\\left(\\frac{\\partial L}{\\partial \\dot{x}_i}\\right) - \\frac{\\partial L}{\\partial x_i} = 0$`}</td>
                  <td>Multi-dimensional variational problem</td>
                </tr>
              </tbody>
            </table>

            <h3>Lagrangian Mechanics</h3>
            <div className="lrn-eq lrn-eq-display">
              <span>{`$$\\Phi = \\int_{t_1}^{t_2} (T - U)\\, dt, \\qquad L = T - U$$`}</span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Formula</th>
                  <th>When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Generalized momentum</td>
                  <td>{`$p_i = \\frac{\\partial L}{\\partial \\dot{q}_i}$`}</td>
                  <td>Finding conserved quantities; connecting to Hamiltonian</td>
                </tr>
                <tr>
                  <td>Cyclic coordinate</td>
                  <td>{`$\\frac{\\partial L}{\\partial q_i} = 0 \\Rightarrow \\dot{p}_i = 0$`}</td>
                  <td>Identifying conservation laws from missing coordinates</td>
                </tr>
                <tr>
                  <td>{`Free mass in $\\mathbb{E}^3$`}</td>
                  <td>{`$L = \\frac{m}{2}(\\dot{q}_1^2 + \\dot{q}_2^2 + \\dot{q}_3^2)$`}</td>
                  <td>Baseline, free particle</td>
                </tr>
                <tr>
                  <td>Central field (polar)</td>
                  <td>{`$L = \\frac{1}{2}m(\\dot{r}^2 + r^2\\dot{\\varphi}^2) - U(r)$`}</td>
                  <td>Radial problems; angular momentum conservation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ]
    },
    customCss: `
      .MafsView { --mafs-bg: transparent; --mafs-fg: rgba(240,240,250,1); --mafs-line-color: rgba(240,240,250,0.15); }
    `
  }

  return <LearningTemplate config={config} />
}
