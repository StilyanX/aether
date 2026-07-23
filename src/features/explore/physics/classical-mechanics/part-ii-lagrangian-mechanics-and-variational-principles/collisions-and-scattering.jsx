import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import {
  Plot as P4,
  Axes as A4,
  Parametric as Pa4,
  Dot as D4,
  CircleSh as C4,
  Arrow as Ar4,
  Tex as T4,
  Slider as Sl4,
  OPACITY as O4
} from '../../../../../components/viz/primitives'
import { CrossSectionDensityMap } from '../../../../../components/viz'
import { VizFigure } from '../../../../../components/viz-figure'

export function ScatteringGeometry() {
  const R = 1.6
  const [b, setB] = React.useState(1.0)
  const rho = Math.min(b, R - 0.001)
  const sinA = rho / R
  const cosA = Math.sqrt(1 - sinA * sinA)
  const chi = Math.PI - 2 * Math.asin(sinA)
  const hit = [-R * cosA, rho]
  const inDir = [1, 0]
  const n = [-cosA, sinA]
  const dot = inDir[0] * n[0] + inDir[1] * n[1]
  const outDir = [inDir[0] - 2 * dot * n[0], inDir[1] - 2 * dot * n[1]]
  // cap the outgoing ray so its arrowhead stays inside the frame
  let outLen = 4
  if (outDir[1] > 1e-6) outLen = Math.min(outLen, (3.25 - hit[1]) / outDir[1])
  if (outDir[0] < -1e-6) outLen = Math.min(outLen, (-4.7 - hit[0]) / outDir[0])
  if (outDir[0] > 1e-6) outLen = Math.min(outLen, (4.7 - hit[0]) / outDir[0])
  return (
    <div style={{ width: '100%' }}>
      <P4 xRange={[-5, 5]} yRange={[-2.4, 3.6]} width={520} height={260}>
        <A4 step={1} showGrid={false} />
        <C4 cx={0} cy={0} r={R} opacity={O4.faint} />
        <D4 x={0} y={0} r={3} />
        <Pa4 xy={t => [-5 + t * 10, rho]} t={[0, 1]} opacity={O4.faint} dash="3 4" />
        <Ar4 from={[-4.5, rho]} to={[hit[0] - 0.05, hit[1]]} opacity={O4.fg} head={7} />
        <Pa4 xy={t => [-3.0, t]} t={[0, rho]} opacity={O4.dim} dash="3 3" />
        <T4 at={[-3.1, rho / 2]} tex="\rho" anchor="end" opacity={O4.dim} />
        <Ar4
          from={hit}
          to={[hit[0] + outLen * outDir[0], hit[1] + outLen * outDir[1]]}
          opacity={O4.fg}
          head={7}
        />
        <Pa4
          xy={t => [hit[0] - t * 0.6 * cosA, hit[1] + t * 0.6 * sinA]}
          t={[-0.5, 0.5]}
          opacity={O4.faint}
          dash="2 3"
        />
        <Pa4
          xy={t => [hit[0] + 0.7 * Math.cos(t * chi), hit[1] + 0.7 * Math.sin(t * chi)]}
          t={[0, 1]}
          opacity={O4.accent}
        />
        <T4
          at={[hit[0] + 1.0, hit[1] + 0.4]}
          tex={`\\chi = ${((chi * 180) / Math.PI).toFixed(0)}^\\circ`}
          opacity={O4.accent}
        />
        <T4
          at={[3.5, -2.0]}
          tex={`\\chi = \\pi - 2\\arcsin(\\rho/R)`}
          anchor="end"
          opacity={O4.dim}
          size={10}
        />
      </P4>
      <Sl4 label="ρ" value={b} min={0.0} max={R} step={0.02} onChange={setB} />
    </div>
  )
}

export function RutherfordScattering() {
  const [b, setB] = React.useState(0.7)
  const [a, setA] = React.useState(0.5)
  const chi = 2 * Math.atan(a / Math.max(b, 0.05))
  const e = 1 / Math.sin(chi / 2)
  const p = b / Math.tan(chi / 2)
  // Repulsive branch r = p/(e cos(phi) - 1) only exists for |phi| < arccos(1/e).
  // Stop where r reaches RMAX so the drawn arc stays a genuine hyperbola arm
  // (running phi past the limit flips r negative and draws a spurious X through
  // the nucleus).
  const RMAX = 7
  const phiLim = Math.acos((1 + p / RMAX) / e)
  const phiMin = -phiLim
  const phiMax = phiLim
  const traj = phi => {
    const r = p / (-1 + e * Math.cos(phi))
    return [r * Math.cos(phi), r * Math.sin(phi)]
  }
  // animate with PHYSICAL pacing: angular momentum conservation gives
  // phi-dot proportional to 1/r^2 (fast at periapsis, slow on the asymptotes)
  const phiRef = React.useRef(phiMin)
  const [phi, setPhi] = React.useState(phiMin)
  React.useEffect(() => {
    phiRef.current = phiMin
    // respect prefers-reduced-motion (house convention): show the periapsis state
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      phiRef.current = 0
      setPhi(0)
      return
    }
    let raf,
      last = performance.now()
    const loop = now => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const r = p / (-1 + e * Math.cos(phiRef.current))
      let nxt = phiRef.current + (dt * 2.2) / (r * r)
      if (nxt >= phiMax) nxt = phiMin
      phiRef.current = nxt
      setPhi(nxt)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [b, a, e, p, phiMin, phiMax])
  const pt = traj(phi)
  return (
    <div style={{ width: '100%' }}>
      <P4 xRange={[-4, 4]} yRange={[-3, 3]} width={520} height={260}>
        <A4 step={1} showGrid={false} />
        <D4 x={0} y={0} r={5} />
        <Pa4 xy={traj} t={[phiMin, phiMax]} samples={200} opacity={O4.fg} strokeWidth={2} />
        <D4 x={pt[0]} y={pt[1]} r={6} opacity={O4.accent} />
        <T4
          at={[-1.2, 2.55]}
          anchor="middle"
          tex={`\\chi = ${((chi * 180) / Math.PI).toFixed(0)}^\\circ`}
          opacity={O4.accent}
        />
        <T4 at={[0.15, 0]} tex="+" opacity={O4.fg} dy={4} />
      </P4>
      <Sl4 label="ρ" value={b} min={0.15} max={2.5} step={0.05} onChange={setB} />
      <Sl4 label="κ/2E" value={a} min={0.1} max={1.2} step={0.02} onChange={setA} />
    </div>
  )
}

export function CMvsLab() {
  const [eta, setEta] = React.useState(1.0)
  const [chiCM, setChiCM] = React.useState(Math.PI * 0.6)
  const chiLab = Math.atan2(Math.sin(chiCM), Math.cos(chiCM) + eta)
  const L = 2.5
  return (
    <div style={{ width: '100%' }}>
      <P4 xRange={[-4, 4]} yRange={[-2.5, 2.5]} width={520} height={260}>
        <A4 step={1} showGrid={false} />
        <D4 x={0} y={0} />
        <Ar4 from={[-3.5, 0]} to={[-0.6, 0]} opacity={O4.fg} head={7} />
        <Ar4
          from={[0, 0]}
          to={[L * Math.cos(chiCM), L * Math.sin(chiCM)]}
          opacity={O4.fg}
          head={7}
          dash="4 4"
        />
        <Ar4
          from={[0, 0]}
          to={[L * Math.cos(chiLab), L * Math.sin(chiLab)]}
          opacity={O4.accent}
          head={7}
        />
        <Pa4
          xy={s => [0.6 * Math.cos(s * chiCM), 0.6 * Math.sin(s * chiCM)]}
          t={[0, 1]}
          opacity={O4.dim}
        />
        <Pa4
          xy={s => [1.1 * Math.cos(s * chiLab), 1.1 * Math.sin(s * chiLab)]}
          t={[0, 1]}
          opacity={O4.accent}
        />
        <T4
          at={[L * Math.cos(chiCM) + 0.1, L * Math.sin(chiCM)]}
          dy={-8}
          tex={`\\chi_{\\rm cm}=${((chiCM * 180) / Math.PI).toFixed(0)}^\\circ`}
          opacity={O4.fg}
          size={11}
        />
        <T4
          at={[L * Math.cos(chiLab) + 0.1, L * Math.sin(chiLab)]}
          dy={14}
          tex={`\\chi_{\\rm lab}=${((chiLab * 180) / Math.PI).toFixed(0)}^\\circ`}
          opacity={O4.accent}
          size={11}
        />
        <T4
          at={[3.85, -2.3]}
          anchor="end"
          tex={String.raw`\tan\chi_{\rm lab}=\frac{\sin\chi_{\rm cm}}{\cos\chi_{\rm cm}+m_1/m_2}`}
          opacity={O4.dim}
          size={10}
        />
      </P4>
      <Sl4
        label="χ_cm"
        value={chiCM}
        min={0.3}
        max={Math.PI - 0.1}
        step={0.02}
        onChange={setChiCM}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
      <Sl4 label="m₁/m₂" value={eta} min={0.1} max={3.0} step={0.05} onChange={setEta} />
    </div>
  )
}

const config = {
  cssPrefix: 'cas',
  documentTitle: 'Collisions and Scattering: AETHER',
  learning: {
    groupTitle: 'Lagrangian Mechanics and Variational Principles',
    category: 'Classical Mechanics',
    title: 'Collisions and Scattering',
    subtitle:
      'How a particle splits, how two particles bounce, and how a beam scatters off a force.',
    sections: [
      // Section 0: Disintegration of Particles
      <>
        <div className="lrn-section" id="lrn-section-0" data-section-index="0">
          <h2>Disintegration of Particles</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A still particle breaks into two pieces of different mass. Which piece flies faster?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The lighter piece. The two pieces carry the same amount of momentum {`$p_0$`} but in
                opposite directions. Kinetic energy is {`$\\frac{p_0^2}{2m}$`}, so a smaller mass
                gives more speed for the same momentum.
              </p>
            </details>
          </div>
          <p>
            <strong>Disintegration</strong> means one particle splits into two or more pieces. We
            track how the leftover energy turns into motion.
          </p>
          <p>
            The <strong>disintegration energy</strong> {`$\\varepsilon$`} is the energy released by
            the split. It equals the parent's internal energy minus the internal energies of the two
            fragments:
          </p>
          <div className="lrn-eq">{`$$\\varepsilon = E_i - E_{1i} - E_{2i}$$`}</div>
          <p>
            Picture the split in the <strong>center-of-mass frame</strong>: the frame where the
            total momentum is zero. Physicists call this the <strong>C system</strong>. In this
            frame the two fragments fly apart with equal and opposite momenta {`$p_0$`}. All of{' '}
            {`$\\varepsilon$`} becomes kinetic energy of the pair:
          </p>
          <div className="lrn-eq">{`$$\\varepsilon = \\frac{p_0^2}{2m}, \\qquad m = \\frac{m_1 m_2}{m_1 + m_2}$$`}</div>
          <p>
            The combination {`$m = \\frac{m_1 m_2}{m_1+m_2}$`} is the <strong>reduced mass</strong>,
            derived in Central Force Motion. It packs the two-body problem into one effective
            object.
          </p>
          <h3>Two viewpoints: lab and center-of-mass</h3>
          <p>
            As in Momentum and Systems of Particles, we watch the same split from two frames: the
            lab frame a human observer sees, and the center-of-mass frame the parent particle rides
            in. Each frame makes different things easy to compute.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Lab frame (the L system)</span>
              <p>
                The parent moves through the lab at speed {`$V$`}. A fragment's lab speed {`$v$`}{' '}
                depends on both {`$V$`} and the fragment's speed {`$v_0$`} in the parent's frame.
                The two combine through the law of cosines:
              </p>
              <div className="lrn-eq">{`$$v^2 + V^2 - 2vV\\cos\\theta = v_0^2$$`}</div>
              <p>
                Here {`$\\theta$`} is the angle between the fragment's path and {`$V$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Center-of-mass frame (the C system)</span>
              <p>
                Total momentum is zero. Each fragment has a fixed speed:{' '}
                {`$v_{10} = \\frac{p_0}{m_1}$`} and {`$v_{20} = \\frac{p_0}{m_2}$`}. The fragments
                can leave in any pair of opposite directions. When the split has no preferred axis
                we call the result <strong>isotropic</strong>: every direction is equally likely.
              </p>
            </div>
          </div>
          <h3>Slow parent vs fast parent</h3>
          <p>
            The story in the lab frame depends on a single comparison. Is the parent moving slower
            than the fragment would in the C system, or faster?
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Slow parent ({`$V < v_0$`})</span>
              <p>
                The fragment can fly in any direction in the lab, even backward. The angle{' '}
                {`$\\theta$`} ranges from 0 to {`$\\pi$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Fast parent ({`$V > v_0$`})</span>
              <p>
                The fragment is dragged forward by the parent. It can only appear inside a cone
                pointing along {`$V$`}. The cone's half-opening is:
              </p>
              <div className="lrn-eq">{`$$\\sin\\theta_{\\rm max} = \\frac{v_0}{V}$$`}</div>
            </div>
          </div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Picture the fragment's lab velocity as a vector sum: the parent's velocity {`$V$`}{' '}
              plus the fragment's C-frame velocity, which has fixed length {`$v_0$`} but any
              direction. The set of possible C-frame velocities forms a sphere of radius {`$v_0$`}.
              The set of possible lab velocities is that sphere shifted by {`$V$`}.
            </p>
            <p>
              When {`$V < v_0$`} the shifted sphere still surrounds the origin, so the lab velocity
              can point any way. When {`$V > v_0$`} the sphere lies fully ahead of the origin, and
              every line from the origin to the sphere stays inside a forward cone.
            </p>
          </div>
          <h3>How the energy spreads across many splits</h3>
          <p>
            Imagine many identical parents decaying. If each split has no preferred direction in the
            C system, then the kinetic energy {`$T$`} of fragment {`$m_1$`} measured in the lab is
            equally likely to land anywhere between a minimum and a maximum value. The probability
            of landing in a tiny window {`$dT$`} is the same flat number across the whole range:
          </p>
          <div className="lrn-eq">{`$$dP = \\frac{dT}{2mv_0 V}$$`}</div>
          <p>
            The denominator is just the total width {`$T_{1,\\rm max} - T_{1,\\rm min} = 2mv_0 V$`}.
            The two edges sit a half-width {`$mv_0 V$`} above and below the central value{' '}
            {`$\\frac{1}{2}m_1(V^2 + v_{10}^2)$`}, so they pull apart as {`$V$`} grows and collapse
            onto a single energy when {`$V = 0$`}. The distribution is flat because turning the
            C-frame velocity uniformly over a sphere makes its forward component uniform along a
            line.
          </p>
          <p>
            When the parent sits still ({`$V = 0$`}), fragment {`$m_1$`} carries a definite kinetic
            energy. It is the share of {`$\\varepsilon$`} fixed by mass conservation:
          </p>
          <div className="lrn-eq">{`$$T_{1,\\rm max} = \\frac{(M-m_1)\\varepsilon}{M}$$`}</div>
          <p>
            Here {`$M = m_1 + m_2$`}. The lighter fragment gets a bigger fraction of{' '}
            {`$\\varepsilon$`}, which is why the prediction at the top of this section pointed to
            the lighter piece.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              In the C system, why do the two fragments leave along directions that are exactly
              opposite (angles add to 180°)?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Total momentum in the C system is zero. The two momentum vectors must cancel, so
                they point in opposite directions. If fragment 1 leaves at angle {`$\\theta_{10}$`},
                fragment 2 leaves at {`$\\pi - \\theta_{10}$`}.
              </p>
            </details>
          </div>
        </div>
      </>,

      // Section 1: Elastic Collisions
      <>
        <div className="lrn-section" id="lrn-section-1" data-section-index="1">
          <h2>Elastic Collisions</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Ball 1 (mass {`$m$`}) hits a still ball 2 (mass {`$2m$`}) head-on. The collision loses
              no energy. What happens to ball 1?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Ball 1 bounces back at one third of its starting speed, {`$v_1' = -\\frac{v}{3}$`}.
                The heavier target turns it around and steals most of its speed.
              </p>
            </details>
          </div>
          <p>
            An <strong>elastic collision</strong> is one where the total kinetic energy is the same
            after as before. Total momentum is always conserved.
          </p>
          <p>
            The C system makes elastic collisions easy. In that frame each momentum vector keeps its
            length and only rotates. The angle it rotates through is the{' '}
            <strong>scattering angle</strong> {`$\\chi$`}.
          </p>
          <h3>Speeds in the C system after the hit</h3>
          <p>
            With particle 1 incoming at lab speed {`$v$`} and particle 2 at rest, the C-system
            speeds are:
          </p>
          <div className="lrn-eq">{`$$v_{10}' = \\frac{m_2 v}{m_1 + m_2}, \\qquad v_{20}' = \\frac{m_1 v}{m_1 + m_2}$$`}</div>
          <p>These match the speeds before the hit. Only the directions change.</p>
          <h3>Angles and speeds back in the lab</h3>
          <p>
            To return to the lab we add the C-system motion to the center-of-mass velocity{' '}
            {`$V = \\frac{m_1 v}{m_1+m_2}$`}. The geometry of that vector triangle gives:
          </p>
          <div className="lrn-eq">{`$$\\tan\\theta_1 = \\frac{m_2\\sin\\chi}{m_1 + m_2\\cos\\chi}, \\qquad \\theta_2 = \\frac{\\pi - \\chi}{2}$$`}</div>
          <p>
            Here {`$\\theta_1$`} and {`$\\theta_2$`} are the lab angles of the two outgoing
            particles, measured from the original line of motion. The lab speeds are:
          </p>
          <div className="lrn-eq">{`$$v_1' = \\frac{\\sqrt{m_1^2+m_2^2+2m_1m_2\\cos\\chi}}{m_1+m_2}\\,v, \\qquad v_2' = \\frac{2m_1 v\\sin\\!\\left(\\frac{\\chi}{2}\\right)}{m_1+m_2}$$`}</div>
          <h3>The head-on case ({`$\\chi = \\pi$`})</h3>
          <p>
            A head-on hit fully reverses the C-system momenta. The lab speeds simplify to the
            familiar result:
          </p>
          <div className="lrn-eq">{`$$v_1' = \\frac{m_1 - m_2}{m_1+m_2}v, \\qquad v_2' = \\frac{2m_1}{m_1+m_2}v$$`}</div>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              In the C system, a head-on hit sends particle 1 straight back. To return to the lab we
              add the parent's forward velocity {`$V$`}. When {`$m_1 < m_2$`}, particle 1's backward
              C-frame speed beats {`$V$`}, so in the lab it still ends up moving backward. When{' '}
              {`$m_1 > m_2$`}, the forward {`$V$`} wins and particle 1 keeps going forward.
            </p>
          </div>
          <p>The largest possible energy transfer to the target also happens at head-on:</p>
          <div className="lrn-eq">{`$$E_{2,\\rm max}' = \\frac{4m_1 m_2}{(m_1+m_2)^2}E_1$$`}</div>
          <p>
            This expression peaks at {`$m_1 = m_2$`}, where it equals {`$E_1$`}: equal masses can
            hand over all the kinetic energy in one shot.
          </p>
          <h3>The right-angle rule for equal masses</h3>
          <p>
            When the two masses are equal, something striking falls out. The lab angles of the two
            outgoing particles always add to 90°, no matter how glancing or head-on the collision:
          </p>
          <div className="lrn-eq">{`$$\\theta_1 = \\frac{\\chi}{2}, \\quad \\theta_2 = \\frac{\\pi-\\chi}{2}, \\quad \\theta_1 + \\theta_2 = \\frac{\\pi}{2}$$`}</div>
          <p>
            Pool players see this rule live: a cue ball striking another ball of equal mass leaves
            at 90° to the struck ball's path. The only exception is a perfectly head-on hit, where
            the cue ball stops and the target carries on alone.
          </p>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Light projectile ({`$m_1 < m_2$`})</span>
              <p>
                Particle 1 can scatter into any direction from 0 to {`$\\pi$`}, including straight
                back.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Heavy projectile ({`$m_1 > m_2$`})</span>
              <p>
                Particle 1 cannot scatter past a maximum angle. The cap is{' '}
                {`$\\sin\\theta_{\\rm max} = \\frac{m_2}{m_1}$`}. No backward scattering.
              </p>
            </div>
          </div>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>
                Goal: derive the lab-frame angle formula from the velocity triangle. Follow these
                four steps.
              </p>
              <ol className="lrn-list">
                <li>
                  Before the hit, particle 1 moves through the C system at speed{' '}
                  {`$v_{10} = \\frac{m_2 v}{m_1+m_2}$`}, pointing forward.
                </li>
                <li>
                  After the hit, this C-frame velocity rotates by the scattering angle {`$\\chi$`}.
                  Its length stays the same.
                </li>
                <li>
                  To get the lab velocity, add the parent velocity {`$V = \\frac{m_1 v}{m_1+m_2}$`}{' '}
                  to the rotated C-frame velocity.
                </li>
                <li>
                  Apply the sine rule to the resulting triangle. The output angle {`$\\theta_1$`}{' '}
                  drops out as a function of {`$\\chi$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <ol className="lrn-list">
                <li>
                  Draw the velocity triangle for particle 1: the C-frame velocity {`$v_{10}$`} at
                  angle {`$\\chi$`} from the forward axis, plus the parent velocity {`$V$`}.
                </li>
                <li>
                  Set up the sine rule. Match the side opposite each angle correctly: the side{' '}
                  {`$v_{10}$`} sits opposite the angle {`$\\theta_1$`}.
                </li>
                <li>
                  Solve for {`$\\tan\\theta_1$`}. You should land at{' '}
                  {`$\\tan\\theta_1 = \\frac{m_2\\sin\\chi}{m_1+m_2\\cos\\chi}$`}.
                </li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                Start from the momentum triangle in the C system. Without help, derive both lab
                angles {`$\\theta_1$`} and {`$\\theta_2$`} as functions of {`$\\chi$`}, {`$m_1$`},
                and {`$m_2$`}.
              </p>
            </div>
          </div>
        </div>
      </>,

      // Section 2: Scattering and Cross-Section
      <>
        <div className="lrn-section" id="lrn-section-2" data-section-index="2">
          <h2>Scattering and Effective Cross-Section</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You fire particles at a solid sphere of radius {`$a$`}. A particle that grazes the
              edge ({`$\\rho = a$`}) bounces off at 90°. What about a particle aimed straight at the
              center?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It bounces straight back: 180°. The deflection angle drops smoothly from 180° (dead
                center) to 0° (just missing the edge) as the aim shifts outward.
              </p>
            </details>
          </div>
          <p>
            From here on we work in the C system with one effective particle. Here {`$m$`} denotes
            the reduced mass {`$\\frac{m_1 m_2}{m_1+m_2}$`}, not the projectile mass.{' '}
            <strong>Scattering</strong> means this particle comes in from far away, feels the pull
            or push of a force center, curves, and flies back out to infinity. The angle between its
            incoming and outgoing directions is the <strong>deflection angle</strong>{' '}
            {`$\\chi = |\\pi - 2\\varphi_0|$`}, where {`$\\varphi_0$`} is the angle the particle
            sweeps out from infinity to its closest approach. This is the same {`$\\chi$`} that
            rotated the C-frame momentum in the elastic-collision section, now produced by a force
            acting over the whole flight path.
          </p>
          <p>
            As with central-force motion, the <strong>impact parameter</strong> {`$\\rho$`} is the
            aim: the distance by which the incoming straight-line path would miss the force center
            if no force acted. Central Force Motion writes this aim as {`$b$`} and the deflection as{' '}
            {`$\\Theta$`}; here they are {`$\\rho$`} and {`$\\chi$`}, the same two quantities. A
            particle far from the center has energy and angular momentum:
          </p>
          <div className="lrn-eq">{`$$E = \\frac{1}{2}mv_\\infty^2, \\qquad M = m\\rho v_\\infty$$`}</div>
          <p>
            Here {`$v_\\infty$`} is the incoming speed measured far from the center, where the
            potential is zero. The symbol {`$M$`} now means angular momentum, not the total mass{' '}
            {`$M = m_1 + m_2$`} of Section 0.
          </p>
          <h3>The cross-section, the central object</h3>
          <p>
            We never aim a single particle. We fire a wide, uniform beam and count how many come out
            at each angle. We count them inside a small <strong>solid angle</strong> {`$d\\Omega$`}:
            the patch of directions a detector covers, measured as area on a unit sphere in units
            called steradians. All directions together make up the full sphere, {`$4\\pi$`}{' '}
            steradians. The <strong>differential cross-section</strong> {`$d\\sigma$`} is the count
            into {`$d\\Omega$`}, divided by the beam density. It has units of area:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$d\\sigma = \\frac{\\rho}{\\sin\\chi}\\left|\\frac{d\\rho}{d\\chi}\\right|d\\Omega$$`}</div>
          <p>
            Read this formula as a chain. The ring of impact parameters between {`$\\rho$`} and{' '}
            {`$\\rho + d\\rho$`} has area {`$2\\pi\\rho\\,d\\rho$`}. Particles aimed into that ring
            come out into a ring of solid angle {`$2\\pi\\sin\\chi\\,d\\chi$`}. Dividing one by the
            other gives the formula above. The factor {`$\\left|\\frac{d\\rho}{d\\chi}\\right|$`}{' '}
            converts between the two scales.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The number of particles scattered into {`$d\\Omega$`} per second is proportional to
              the beam flux. The cross-section is the ratio of scattered count to beam flux, so the
              flux cancels. What is left is a pure property of the force law and the energy. Two
              labs running the same experiment at the same energy must measure the same{' '}
              {`$d\\sigma$`}, even with completely different beam intensities.
            </p>
          </div>
          <h3>The simplest case: a hard sphere</h3>
          <p>
            A particle hitting a solid sphere of radius {`$a$`} is just a billiard ball bouncing.
            The geometry is straightforward and gives the linear relation:
          </p>
          <div className="lrn-eq">{`$$\\rho = a\\cos\\!\\left(\\frac{\\chi}{2}\\right)$$`}</div>
          <p>Plug this into the cross-section formula and the result is shockingly clean:</p>
          <div className="lrn-eq">{`$$d\\sigma = \\frac{a^2}{4}\\,d\\Omega$$`}</div>
          <p>
            The right side does not depend on {`$\\chi$`}. The sphere kicks particles into every
            direction with equal weight, so the scattering is isotropic. Adding up over all angles
            gives the total cross-section {`$\\sigma = \\pi a^2$`}: the geometric shadow of the
            sphere, exactly what you would guess.
          </p>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does hard-sphere scattering come out the same in every direction?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The result follows from the relation{' '}
                {`$\\rho = a\\cos\\!\\left(\\frac{\\chi}{2}\\right)$`}. Differentiate to get{' '}
                {`$\\frac{d\\rho}{d\\chi} = -\\frac{a}{2}\\sin\\!\\left(\\frac{\\chi}{2}\\right)$`}.
                The cross-section formula then has the factor{' '}
                {`$\\frac{\\rho\\,\\left|\\frac{d\\rho}{d\\chi}\\right|}{\\sin\\chi}$`}, which works
                out to{' '}
                {`$\\frac{a^2 \\sin\\!\\left(\\frac{\\chi}{2}\\right)\\cos\\!\\left(\\frac{\\chi}{2}\\right)}{2\\sin\\chi}$`}
                . Use the identity{' '}
                {`$\\sin\\chi = 2\\sin\\!\\left(\\frac{\\chi}{2}\\right)\\cos\\!\\left(\\frac{\\chi}{2}\\right)$`}{' '}
                and the {`$\\sin\\!\\left(\\frac{\\chi}{2}\\right)$`} and{' '}
                {`$\\cos\\!\\left(\\frac{\\chi}{2}\\right)$`} cancel, leaving {`$\\frac{a^2}{4}$`}.
              </p>
            </details>
          </div>
          <h3>When the force is strong enough to swallow the particle</h3>
          <p>
            For some attractive forces, a particle aimed too close spirals into the center and never
            comes back out. The total cross-section for this fate is the{' '}
            <strong>capture cross-section</strong>. For an inverse-square attraction{' '}
            {`$U = -\\frac{\\alpha}{r^2}$`}:
          </p>
          <div className="lrn-eq">{`$$\\sigma = \\frac{2\\pi\\alpha}{mv_\\infty^2}$$`}</div>
          <p>
            Faster beams capture less: the particle blasts past before the force can pull it in.
            Steeper attractions {`$U = -\\frac{\\alpha}{r^n}$`} with {`$n > 2$`} also capture, by
            the same fall-to-center condition set out in Integration by Quadrature.
          </p>
        </div>
      </>,

      // Section 3: Rutherford Scattering
      <>
        <div className="lrn-section" id="lrn-section-3" data-section-index="3">
          <h2>Rutherford's Formula</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You double the beam energy in a Rutherford experiment. How does the cross-section for
              scattering into a fixed angle {`$\\chi$`} change?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It drops by a factor of 4. The Rutherford formula scales as {`$\\frac{1}{E^2}$`}, so
                doubling {`$E$`} divides the cross-section by 4.
              </p>
            </details>
          </div>
          <p>
            <strong>Rutherford scattering</strong> is the special case where the force comes from a
            Coulomb potential {`$U = \\frac{\\alpha}{r}$`}: the same {`$\\frac{1}{r}$`} that governs
            gravity and electrostatics. The constant {`$\\alpha$`} can be positive (a repulsive
            push) or negative (an attractive pull).
          </p>
          <p>
            To get the aim-to-deflection link we run the orbit integral. The angle the particle
            sweeps from infinity to closest approach is the same integral used for central-force
            orbits, now with energy {`$E$`} and angular momentum {`$M = m\\rho v_\\infty$`}:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\varphi_0 = \\int_{r_{\\min}}^{\\infty} \\frac{(M/r^2)\\,dr}{\\sqrt{2m\\left(E - \\frac{\\alpha}{r}\\right) - \\frac{M^2}{r^2}}}$$`}</div>
          <p>
            For the Coulomb potential this integral is elementary. It gives{' '}
            {`$\\varphi_0 = \\arccos\\!\\left(\\frac{\\alpha/m v_\\infty^2 \\rho}{\\sqrt{1 + (\\alpha/m v_\\infty^2 \\rho)^2}}\\right)$`}
            . Using {`$\\chi = \\pi - 2\\varphi_0$`} from the deflection definition turns this into
            a clean tie between the aim {`$\\rho$`} and the deflection {`$\\chi$`}:
          </p>
          <div className="lrn-eq">{`$$\\rho^2 = \\left(\\frac{\\alpha}{mv_\\infty^2}\\right)^2 \\cot^2\\!\\left(\\frac{\\chi}{2}\\right)$$`}</div>
          <p>
            Now plug {`$\\rho(\\chi)$`} into the general cross-section{' '}
            {`$d\\sigma = \\frac{\\rho}{\\sin\\chi}\\left|\\frac{d\\rho}{d\\chi}\\right|d\\Omega$`}.
            Differentiate {`$\\rho$`}, use{' '}
            {`$\\sin\\chi = 2\\sin\\!\\left(\\frac{\\chi}{2}\\right)\\cos\\!\\left(\\frac{\\chi}{2}\\right)$`}
            , and the half-angle factors collapse to give <strong>Rutherford's formula</strong>:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$d\\sigma = \\left(\\frac{\\alpha}{2mv_\\infty^2}\\right)^2 \\frac{d\\Omega}{\\sin^4\\!\\left(\\frac{\\chi}{2}\\right)}$$`}</div>
          <p>
            Two features stand out. First, the cross-section grows wildly at small angles: the{' '}
            {`$\\sin^4\\!\\left(\\frac{\\chi}{2}\\right)$`} in the denominator means almost
            everything in the beam scatters by a tiny amount. Second, the strength scales as{' '}
            {`$\\frac{1}{E^2}$`}, so a faster beam scatters much less. This is what Rutherford
            measured in 1911 and used to work out that atoms have tiny dense nuclei.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The orbit is a hyperbola for both attractive and repulsive Coulomb forces. The two
              cases differ in shape, but the link between aim and deflection involves only{' '}
              {`$\\alpha^2$`}. Squaring kills the sign, so the cross-section is the same whether the
              force pushes or pulls.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the Rutherford cross-section blow up as {`$\\chi$`} approaches zero?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Tiny deflections come from particles that pass far from the center. The Coulomb
                force never truly turns off, even at huge distance. Particles with arbitrarily large{' '}
                {`$\\rho$`} still get a small kick, so they all contribute to the small-angle count.
                There is no ceiling on {`$\\rho$`}, and the total cross-section diverges. Any force
                that falls off faster than {`$\\frac{1}{r}$`} gives a finite total.
              </p>
            </details>
          </div>
          <h3>Rutherford's formula in the lab frame</h3>
          <p>
            The formulas above use the C system. Experimenters measure angles in the lab. To
            convert, add the center-of-mass motion back in. The C-frame angle {`$\\chi$`} and the
            lab angle {`$\\theta_1$`} of the projectile are linked by the velocity triangle:
          </p>
          <div className="lrn-eq">{`$$\\tan\\theta_1 = \\frac{\\sin\\chi}{\\cos\\chi + \\frac{m_1}{m_2}}$$`}</div>
          <p>
            The cross-section counts the same particles in either frame, so the counts must agree:{' '}
            {`$d\\sigma$`} is unchanged, but the angle it is spread over is not. Each solid angle{' '}
            {`$d\\Omega_{\\rm cm}$`} maps to a different lab solid angle {`$d\\Omega_{\\rm lab}$`}.
            The two cross-sections per unit solid angle therefore differ by the{' '}
            <strong>Jacobian</strong> of that map:
          </p>
          <div className="lrn-eq">{`$$\\frac{d\\sigma}{d\\Omega_{\\rm lab}} = \\frac{d\\sigma}{d\\Omega_{\\rm cm}}\\left|\\frac{d\\Omega_{\\rm cm}}{d\\Omega_{\\rm lab}}\\right|$$`}</div>
          <p>
            Applying this map to Rutherford's C-frame result gives the lab forms. For the recoil
            particle (mass {`$m_2$`}, initially at rest), the transformation is exact at any mass
            ratio:
          </p>
          <div className="lrn-eq">{`$$d\\sigma_2 = \\left(\\frac{\\alpha}{mv_\\infty^2}\\right)^2 \\frac{d\\Omega_2}{\\cos^3\\theta_2}$$`}</div>
          <p>
            For the projectile the general result is messy, so we quote the clean case of{' '}
            <strong>equal masses</strong> ({`$m_1 = m_2$`}), where {`$\\chi = 2\\theta_1$`} and{' '}
            {`$E_1 = \\tfrac{1}{2}m_1 v_\\infty^2$`} is the projectile's lab kinetic energy:
          </p>
          <div className="lrn-eq">{`$$d\\sigma_1 = \\left(\\frac{\\alpha}{E_1}\\right)^2 \\frac{\\cos\\theta_1\\,d\\Omega_1}{\\sin^4\\theta_1}$$`}</div>
          <h3>The cross-section in terms of energy loss</h3>
          <p>
            Sometimes the easier thing to measure is not an angle but an energy. The recoil target
            picks up energy {`$\\varepsilon$`}, which the projectile loses. In this section{' '}
            {`$\\varepsilon$`} means this energy loss, not the disintegration energy from Section 0.
            The recoil speed sets it:{' '}
            {`$\\varepsilon = \\frac{2m^2 v_\\infty^2}{m_2}\\sin^2\\!\\left(\\frac{\\chi}{2}\\right)$`}
            , where {`$m$`} is again the reduced mass. Invert this to write{' '}
            {`$\\sin^2\\!\\left(\\frac{\\chi}{2}\\right)$`} in terms of {`$\\varepsilon$`}, feed it
            into Rutherford's formula, and the angular shape becomes an energy shape:
          </p>
          <div className="lrn-eq">{`$$d\\sigma = \\frac{2\\pi\\alpha^2}{m_2 v_\\infty^2}\\,\\frac{d\\varepsilon}{\\varepsilon^2}$$`}</div>
          <p>
            The {`$\\frac{1}{\\varepsilon^2}$`} factor says small energy losses are common and large
            losses are rare. This is the same story as the angular result, looked at through a
            different window.
          </p>
        </div>
      </>,

      // Section 4: Small-Angle Scattering
      <>
        <div className="lrn-section" id="lrn-section-4" data-section-index="4">
          <h2>Small-Angle Scattering</h2>
          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A particle passes far from a force center. As you increase the aim distance{' '}
              {`$\\rho$`}, does the deflection angle grow or shrink?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It shrinks. A larger {`$\\rho$`} means the particle stays farther from the center,
                where the force is weaker. Less force means a smaller kick.
              </p>
            </details>
          </div>
          <p>
            When the deflection {`$\\chi$`} is small, the particle barely changes direction. We can
            pretend its path is a perfectly straight line and ask only how much sideways kick it
            picks up along the way. This trick is the <strong>impulse approximation</strong>. The
            result is a single integral along the straight path:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\theta = -\\frac{2\\rho}{mv_\\infty^2}\\int_\\rho^\\infty \\frac{dU}{dr}\\,\\frac{dr}{\\sqrt{r^2 - \\rho^2}}$$`}</div>
          <p>
            The factor {`$\\frac{dU}{dr}$`} is the radial force, and the{' '}
            {`$\\frac{1}{\\sqrt{r^2-\\rho^2}}$`} term stretches the radial distance into the path
            length along the line. The {`$\\frac{1}{v_\\infty^2}$`} up front says faster beams
            deflect less: the projectile spends less time inside the force.
          </p>
          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              When the force is weak or the aim is wide, the curved orbit barely strays from a
              straight line. Using the straight line to compute the sideways momentum kick gives the
              same answer as the true curved path, up to a small correction. The correction is of
              order {`$\\theta^2$`}, so it shrinks much faster than {`$\\theta$`} itself when the
              deflection is small.
            </p>
          </div>
          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does the small-angle formula fail when {`$\\rho$`} is small?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A small {`$\\rho$`} means the particle passes near the center. The force is strong
                there and the orbit bends sharply. Replacing the curved path with a straight line
                throws away most of the physics, so the integral above no longer matches the true
                deflection. The approximation only works when the orbit and the straight line stay
                close.
              </p>
            </details>
          </div>
          <p>
            For a power-law potential {`$U = \\frac{\\alpha}{r^n}$`}, the integral gives{' '}
            {`$\\chi \\propto \\rho^{-n}$`}: the deflection falls off steeply with the aim. Plug
            this into the cross-section recipe{' '}
            {`$d\\sigma \\propto \\rho\\,\\left|\\frac{d\\rho}{d\\chi}\\right|\\,d\\chi$`} and you
            get the small-angle limit of the cross-section for any inverse-power force.
          </p>
        </div>
      </>
    ]
  },
  practice: [
    {
      q: `[PREDICT] Particle 1 (mass $m$) elastically hits a still particle 2 (mass $3m$). Can either one bounce backward in the lab?`,
      a: `Particle 1 can. Since $m_1 < m_2$, its lab angle ranges over the full 0 to $\\pi$, so it can leave straight back. Particle 2 cannot. Its lab angle is $\\theta_2 = \\frac{\\pi - \\chi}{2}$, which always sits between 0 and $\\frac{\\pi}{2}$.`
    },
    {
      q: `Two particles of equal mass collide elastically. What is the angle between their outgoing paths in the lab?`,
      a: `Always 90°. For equal masses, $\\theta_1 + \\theta_2 = \\frac{\\chi}{2} + \\frac{\\pi-\\chi}{2} = \\frac{\\pi}{2}$. This holds for every C-system scattering angle $\\chi$, glancing or head-on.`
    },
    {
      q: `A very light particle ($m_1 \\ll m_2$) hits a heavy still target head-on. What happens to each one?`,
      a: `The light particle bounces back at almost its starting speed: $v_1' \\approx -v$. The heavy target barely moves: $v_2' \\approx \\frac{2 m_1}{m_2}\\,v \\approx 0$. The energy handed over scales as $\\frac{4 m_1}{m_2}$, which goes to zero in this limit.`
    },
    {
      q: `[SELF-EXPLAIN] In the formula $v_2' = \\frac{2m_1 v\\sin\\!\\left(\\frac{\\chi}{2}\\right)}{m_1+m_2}$, why is $v_2'$ zero at $\\chi = 0$ and a maximum at $\\chi = \\pi$?`,
      a: `At $\\chi = 0$ the projectile misses without deflecting. The target's C-frame momentum keeps its direction, so back in the lab the target stays at rest, and $\\sin 0 = 0$ confirms it. At $\\chi = \\pi$ the C-frame momenta fully reverse, the target gets the largest possible kick, and $\\sin\\!\\left(\\frac{\\pi}{2}\\right) = 1$ caps the formula at its peak.`
    },
    {
      q: `Define $d\\sigma$ in plain words and explain why it does not depend on how dense the beam is.`,
      a: `$d\\sigma$ is the count of particles scattered into solid angle $d\\Omega$ per second, divided by the beam flux. A denser beam scatters more, but the flux on the bottom grows in step, so the ratio cancels out. What is left is a property of the force law and the energy alone.`
    },
    {
      q: `Particles scatter off a hard sphere of radius $a = 2$ cm. Find $\\frac{d\\sigma}{d\\Omega}$ at $\\chi = 60°$, and the total cross-section $\\sigma$.`,
      a: `Hard-sphere scattering is isotropic: $\\frac{d\\sigma}{d\\Omega} = \\frac{a^2}{4}$ at every angle, so at $60°$ it is $\\frac{(2)^2}{4} = 1$ cm$^2$. The total is the geometric shadow $\\sigma = \\pi a^2 = 4\\pi \\approx 12.6$ cm$^2$. The angle did not matter, which is the whole point of isotropy.`
    },
    {
      q: `Why does Rutherford's formula give the same result whether the Coulomb force pushes or pulls?`,
      a: `The link between aim and deflection is $\\rho^2 = \\left(\\frac{\\alpha}{mv_\\infty^2}\\right)^2 \\cot^2\\!\\left(\\frac{\\chi}{2}\\right)$. The strength $\\alpha$ appears squared, so its sign drops out. Both $+\\alpha$ and $-\\alpha$ give the same $\\rho(\\chi)$ and the same $\\left|\\frac{d\\rho}{d\\chi}\\right|$.`
    },
    {
      q: `The Rutherford cross-section diverges as $\\chi \\to 0$. Is that real physics, or a flaw of the formula?`,
      a: `It is real, for the pure Coulomb potential. The force has infinite range, so particles with arbitrarily large $\\rho$ still pick up a tiny deflection. There is no cutoff to stop the integral, so $\\int d\\sigma$ blows up. Any force that drops faster than $\\frac{1}{r}$ at long distance has a finite total cross-section.`
    },
    {
      q: `[SELF-EXPLAIN] In small-angle scattering, the impulse trick treats the path as a straight line. When is that fair, and when does it fail?`,
      a: `It is fair when the particle barely deviates: large aim or weak force. The straight line and the true curved orbit then agree to leading order. It fails for small aim, where the orbit bends sharply through the force, and the straight line misses most of the motion.`
    },
    {
      q: `A particle decays at rest, releasing $\\varepsilon = 10$ MeV. The fragments have masses $m_1 = 1$ u and $m_2 = 3$ u. Find the kinetic energy of fragment 1.`,
      a: `Reduced mass: $m = \\frac{m_1 m_2}{m_1+m_2} = \\frac{3}{4}$ u. C-frame momentum: $p_0^2 = 2m\\varepsilon = 15$ u$\\cdot$MeV. Kinetic energy: $T_1 = \\frac{p_0^2}{2m_1} = 7.5$ MeV. The lighter fragment takes the larger share. Check: $T_2 = 2.5$ MeV, total 10 MeV.`
    }
  ],
  reference: {
    category: 'Quick Reference',
    title: 'Collisions and Scattering',
    sections: [
      // Reference Section 0: Disintegration and Elastic Collisions
      <>
        <div className="ref-section">
          <span className="ref-label">Disintegration and Elastic Collisions</span>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula">{`$$\\varepsilon = \\frac{p_0^2}{2m}, \\quad m = \\frac{m_1 m_2}{m_1+m_2}$$`}</span>
              <p>
                Use this to convert disintegration energy into the fragment momentum {`$p_0$`} in
                the center-of-mass frame.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$\\sin\\theta_{\\rm max} = \\frac{v_0}{V} \\quad (V > v_0)$$`}</span>
              <p>
                Use this when the parent moves faster than the fragment's C-frame speed. It gives
                the half-angle of the forward cone.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$\\tan\\theta_1 = \\frac{m_2\\sin\\chi}{m_1 + m_2\\cos\\chi}, \\quad \\theta_2 = \\frac{\\pi-\\chi}{2}$$`}</span>
              <p>
                Use these to convert the C-system angle {`$\\chi$`} into the lab-frame angles of the
                projectile and the target.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$v_1' = \\frac{m_1-m_2}{m_1+m_2}v, \\quad v_2' = \\frac{2m_1}{m_1+m_2}v$$`}</span>
              <p>
                Use these for a head-on elastic hit. The projectile reverses direction whenever it
                is lighter than the target.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$E_{2,\\rm max}' = \\frac{4m_1 m_2}{(m_1+m_2)^2}E_1$$`}</span>
              <p>
                The largest fraction of the projectile's kinetic energy that can ever go to the
                target. It peaks at equal masses, where the full {`$E_1$`} can transfer.
              </p>
            </div>
          </div>
          <table className="ref-table">
            <thead>
              <tr>
                <th>Masses</th>
                <th>Max angle for particle 1</th>
                <th>Backward scattering</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$m_1 < m_2$`}</td>
                <td>180°</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>{`$m_1 = m_2$`}</td>
                <td>90° (right-angle rule)</td>
                <td>No ({`$\\theta_1 + \\theta_2 = 90°$`})</td>
              </tr>
              <tr>
                <td>{`$m_1 > m_2$`}</td>
                <td>{`$\\arcsin\\!\\left(\\frac{m_2}{m_1}\\right) < 90°$`}</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>,

      // Reference Section 1: Scattering and Rutherford
      <>
        <div className="ref-section">
          <span className="ref-label">Scattering and Rutherford Formula</span>
          <div className="ref-grid">
            <div className="ref-item">
              <span className="ref-formula">{`$$d\\sigma = \\frac{\\rho}{\\sin\\chi}\\left|\\frac{d\\rho}{d\\chi}\\right|d\\Omega$$`}</span>
              <p>
                The general differential cross-section. Apply it to any force law once you know how
                the deflection {`$\\chi$`} depends on the aim {`$\\rho$`}.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$d\\sigma = \\left(\\frac{\\alpha}{2mv_\\infty^2}\\right)^2\\frac{d\\Omega}{\\sin^4\\!\\left(\\frac{\\chi}{2}\\right)}$$`}</span>
              <p>
                Rutherford's formula in the center-of-mass frame. It works for both attractive and
                repulsive Coulomb forces, since {`$\\alpha$`} only enters squared.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$d\\sigma = \\frac{a^2}{4}\\,d\\Omega \\quad (\\sigma = \\pi a^2)$$`}</span>
              <p>
                Scattering off a hard sphere of radius {`$a$`}. The angular distribution is flat,
                and the total cross-section is just the sphere's geometric shadow.
              </p>
            </div>
            <div className="ref-item">
              <span className="ref-formula">{`$$\\theta = -\\frac{2\\rho}{mv_\\infty^2}\\int_\\rho^\\infty \\frac{dU}{dr}\\,\\frac{dr}{\\sqrt{r^2-\\rho^2}}$$`}</span>
              <p>
                The impulse approximation for small deflections. Trust it when {`$\\theta \\ll 1$`}:
                a wide aim or a weak potential.
              </p>
            </div>
          </div>
          <table className="ref-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$\\rho(\\chi)$`} (Rutherford)</td>
                <td>{`$\\frac{\\alpha}{mv_\\infty^2}\\cot\\!\\left(\\frac{\\chi}{2}\\right)$`}</td>
              </tr>
              <tr>
                <td>Capture cross-section {`$U=-\\frac{\\alpha}{r^2}$`}</td>
                <td>{`$\\frac{2\\pi\\alpha}{mv_\\infty^2}$`}</td>
              </tr>
              <tr>
                <td>Diverges as {`$\\chi \\to 0$`}?</td>
                <td>Yes (infinite-range Coulomb)</td>
              </tr>
              <tr>
                <td>Same for attractive/repulsive?</td>
                <td>Yes ({`$\\alpha^2$`} appears)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ]
  }
}

function CollisionVizes() {
  return (
    <>
      <VizFigure aspect="auto" title="Scattering Geometry">
        <ScatteringGeometry />
      </VizFigure>
      <CrossSectionDensityMap />
      <VizFigure aspect="auto" title="Rutherford Scattering">
        <RutherfordScattering />
      </VizFigure>
      <VizFigure aspect="auto" title="CM vs Lab Frame">
        <CMvsLab />
      </VizFigure>
    </>
  )
}

const configWithViz = {
  ...config,
  learning: {
    ...config.learning,
    sections: config.learning.sections.map((section, i) => {
      if (i !== 2) return section
      return (
        <>
          {section}
          <CollisionVizes />
        </>
      )
    })
  }
}

export default function CollisionsAndScattering() {
  return <LearningTemplate config={configWithViz} />
}
