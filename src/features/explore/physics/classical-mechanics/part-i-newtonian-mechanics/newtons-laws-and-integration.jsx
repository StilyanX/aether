import React from 'react'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { VizFigure } from '../../../../../components/viz-figure'
import {
  Plot,
  Axes,
  Parametric,
  Polyline,
  Arrow,
  Dot,
  Tex,
  Label,
  Slider,
  DragHandle,
  PlayPause,
  OPACITY,
  useReducedMotion
} from '../../../../../components/viz/primitives'
import { rk4Step, useSimulation } from '../../../../../components/viz/physics'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
// 01.2.5 Viscous Decay lives in the shared catalog (classical-mechanics.jsx): single
// source of truth, rendered here and in the showcase from the same function.
import { ViscousDecay } from '../../../../../components/viz'
import { ShellTheoremForce as ShellTheoremForceRaw } from '../../../../../components/viz/classical-mechanics'
import {
  FONT_CONTROL,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX
} from '../../../../../components/viz/scale-tokens'

// Inline viz (migrated 2026-05 to the VizFigure pattern; useVizColors theme tokens)
// 01.2.1 Block on Wedge: gravity resolved into slope components, N balancing the
// perpendicular component, friction opposing the parallel one, and the block sliding
// under the true net acceleration a = g(sinθ − μcosθ). Interactive on θ and μ.
export function Nli_BlockOnWedge() {
  const C = useVizColors()
  const [angDeg, setAng] = React.useState(30)
  const [mu, setMu] = React.useState(0.15)
  const ang = (angDeg * Math.PI) / 180
  const g = 1.4 // visual force scale (= mg, drawn one unit per mg)
  const u = [Math.cos(ang), Math.sin(ang)] // up-slope unit
  const n = [-Math.sin(ang), Math.cos(ang)] // outward normal unit

  // Wedge geometry: cap apex height so the triangle stays framed across the slider.
  const apexY = 2.5
  const sx = Math.min(5.4, apexY / Math.max(Math.tan(ang), 0.08))
  const sy = sx * Math.tan(ang)
  const Llen = sx / Math.cos(ang) // slope face length
  const hw = 0.5, // block half-length (along slope)
    hh = 0.28 // block half-thickness (across slope)

  // Force magnitudes (units of mg).
  const Nmag = g * Math.cos(ang) // perpendicular component → set by N
  const Wpar = g * Math.sin(ang) // parallel component → drives motion
  const tanCrit = mu // tan θ_c = μ
  const slipping = Math.tan(ang) > mu + 1e-9
  const fric = slipping ? mu * Nmag : Wpar // kinetic when slipping, else static (caps at Wpar)
  const aMag = slipping ? g * (Math.sin(ang) - mu * Math.cos(ang)) : 0 // net accel down-slope

  // Slide animation: d = distance of contact centre from the bottom corner along the face.
  const d0 = Llen - hw - 0.12 // start near the apex
  const dMin = hw + 0.12
  const sMax = Math.max(0, d0 - dMin)
  const initial = React.useMemo(() => ({ s: 0, v: 0 }), [])
  const step = (st, dt) => {
    if (dt === 0 || !slipping) return st
    const v = st.v + aMag * dt
    let s = st.s + v * dt
    if (s >= sMax) return { s: sMax, v: 0 }
    return { s, v }
  }
  const [st, , sim] = useSimulation(initial, step)

  const d = d0 - st.s // current distance from bottom corner
  const face = [d * u[0], d * u[1]] // contact point on the face
  const cm = face // contact centre
  const cx = face[0] + n[0] * hh, // block centroid
    cy = face[1] + n[1] * hh
  const corner = (su, sn) => [cx + u[0] * su + n[0] * sn, cy + u[1] * su + n[1] * sn]

  // Decomposition tips (from the centroid).
  const wTip = [cx, cy - g] // full weight mg, straight down
  const parTip = [cx - u[0] * Wpar, cy - u[1] * Wpar] // mg sinθ, down-slope
  const perpTip = [cx - n[0] * Nmag, cy - n[1] * Nmag] // mg cosθ, into slope

  const hatch = []
  for (let x = 0.15; x < sx; x += 0.5)
    hatch.push([
      [x, 0],
      [x - 0.24, -0.28]
    ])

  return (
    <div>
      <Plot color={C.fg} xRange={[-1.2, 7]} yRange={[-0.07, 3.71]} width={700} height={340}>
        {/* wedge body + fixed ground */}
        <Polyline
          points={[
            [0, 0],
            [sx, sy],
            [sx, 0],
            [0, 0]
          ]}
          closed
          fillOpacity={0.05}
          color={C.dim}
        />
        <Polyline
          points={[
            [-0.4, 0],
            [sx + 0.3, 0]
          ]}
          color={C.dim}
        />
        {hatch.map((h, i) => (
          <Polyline key={i} points={h} color={C.faint} />
        ))}

        {/* TERTIARY: projection parallelogram: mg = (mg sinθ) + (mg cosθ) */}
        <Polyline points={[parTip, wTip]} color={C.faint} dash="2 3" />
        <Polyline points={[perpTip, wTip]} color={C.faint} dash="2 3" />

        {/* block (accented while it slides) */}
        <Polyline
          points={[corner(-hw, -hh), corner(hw, -hh), corner(hw, hh), corner(-hw, hh)]}
          closed
          fillOpacity={slipping ? 0.32 : 0.18}
          color={slipping ? C.accent : C.fg}
        />

        {/* right-angle tick where N leaves the face */}
        <Polyline
          points={[
            [cm[0] + u[0] * 0.18, cm[1] + u[1] * 0.18],
            [cm[0] + u[0] * 0.18 + n[0] * 0.18, cm[1] + u[1] * 0.18 + n[1] * 0.18],
            [cm[0] + n[0] * 0.18, cm[1] + n[1] * 0.18]
          ]}
          color={C.faint}
        />

        {/* SECONDARY: full weight mg from the centroid (the vector being resolved) */}
        <Arrow from={[cx, cy]} to={wTip} color={C.dim} strokeWidth={1.5} />
        {/* PRIMARY: gravity components */}
        <Arrow from={[cx, cy]} to={parTip} color={C.accent} strokeWidth={2} />
        <Arrow from={[cx, cy]} to={perpTip} color={C.accent} strokeWidth={2} />
        {/* PRIMARY: contact forces: N balances the perpendicular component; f opposes the parallel one */}
        <Arrow
          from={cm}
          to={[cm[0] + n[0] * Nmag, cm[1] + n[1] * Nmag]}
          color={C.fg}
          strokeWidth={2}
        />
        {fric > 0.04 && (
          <Arrow
            from={cm}
            to={[cm[0] + u[0] * fric, cm[1] + u[1] * fric]}
            color={C.fg}
            strokeWidth={2}
          />
        )}

        {/* base angle */}
        <Parametric xy={a => [0.6 * Math.cos(a), 0.6 * Math.sin(a)]} t={[0, ang]} color={C.dim} />
        <Tex at={[0.72, 0.18]} tex={`\\theta`} size={FONT_LABEL} color={C.dim} />

        {/* vector labels */}
        <Tex at={wTip} dx={8} dy={6} tex={`m\\mathbf{g}`} size={FONT_LABEL} color={C.dim} />
        {/* labels sit just past each component tip, along that component's own axis, so
            the parallel (−u) and perpendicular (−n) labels stay 90° apart and never touch */}
        <Tex
          at={[cx - u[0] * (Wpar + 0.22), cy - u[1] * (Wpar + 0.22)]}
          tex={`mg\\sin\\theta`}
          size={FONT_LABEL}
          color={C.accent}
          anchor="middle"
        />
        <Tex
          at={[cx - n[0] * (Nmag + 0.22), cy - n[1] * (Nmag + 0.22)]}
          tex={`mg\\cos\\theta`}
          size={FONT_LABEL}
          color={C.accent}
          anchor="middle"
        />
        <Tex
          at={[cm[0] + n[0] * Nmag, cm[1] + n[1] * Nmag]}
          dx={4}
          dy={-6}
          tex={`\\mathbf{N}`}
          size={FONT_LABEL}
          color={C.fg}
        />
        {fric > 0.04 && (
          <Tex
            at={[cm[0] + u[0] * fric, cm[1] + u[1] * fric]}
            dx={8}
            dy={-4}
            tex={`\\mathbf{f}`}
            size={FONT_LABEL}
            color={C.fg}
          />
        )}

        {/* live readout */}
        <Tex
          at={[-0.5, 3.05]}
          tex={`N = mg\\cos\\theta = ${Math.cos(ang).toFixed(2)}\\,mg`}
          size={FONT_LABEL}
          color={C.fg}
        />
        <Tex
          at={[-0.5, 2.68]}
          tex={`mg\\sin\\theta = ${Math.sin(ang).toFixed(2)}\\,mg`}
          size={FONT_LABEL}
          color={C.dim}
        />
        <Tex
          at={[-0.5, 2.31]}
          tex={
            slipping
              ? `a = (\\sin\\theta - \\mu\\cos\\theta)g = ${(aMag / g).toFixed(2)}\\,g`
              : `\\text{held: } f = mg\\sin\\theta \\le \\mu N`
          }
          size={FONT_LABEL}
          color={slipping ? C.accent : C.dim}
        />
        <Tex
          at={[-0.5, 1.96]}
          tex={`\\theta_c = \\tan^{-1}\\mu = ${((Math.atan(tanCrit) * 180) / Math.PI).toFixed(1)}^\\circ`}
          size={FONT_SMALL}
          color={C.faint}
        />
        {/* SLIP / HOLD status label centred on the block */}
        <Label at={[cx, cy]} anchor="middle" size={FONT_SMALL} color={slipping ? C.accent : C.fg}>
          {slipping ? 'SLIP' : 'HOLD'}
        </Label>
      </Plot>
      <Slider
        label="ANG"
        value={angDeg}
        min={0}
        max={60}
        step={1}
        onChange={v => {
          setAng(v)
          sim.reset()
        }}
        format={v => v.toFixed(0) + '°'}
      />
      <Slider
        label="μ"
        value={mu}
        min={0}
        max={1}
        step={0.01}
        onChange={v => {
          setMu(v)
          sim.reset()
        }}
      />
      <PlayPause
        playing={sim.playing}
        onToggle={() => sim.setPlaying(!sim.playing)}
        onReset={sim.reset}
        label={slipping ? '' : 'static. raise θ past θc to slide'}
      />
    </div>
  )
}
function ConicalPendulumBlock() {
  const C = useVizColors()
  const [w, setW] = React.useState(2.8)
  const L = 1.6,
    g = 9.81
  const wc = Math.sqrt(g / L)
  const ratio = g / (w * w * L)
  const alpha = ratio < 1 ? Math.acos(ratio) : 0
  const ax = L * Math.sin(alpha),
    ay = -L * Math.cos(alpha)
  const ry = 0.22 * ax
  const reduced = useReducedMotion()
  const initial = React.useMemo(() => ({ phi: 0 }), [])
  const stepPhi = (st, dt) => (dt === 0 || reduced ? st : { phi: st.phi + w * 0.45 * dt })
  const [orbit, , sim] = useSimulation(initial, stepPhi)
  const bx = ax * Math.cos(orbit.phi)
  const by = ay + ry * Math.sin(orbit.phi)
  const inFront = Math.sin(orbit.phi) < 0
  const ceilHatch = []
  for (let x = -0.85; x <= 0.85; x += 0.28)
    ceilHatch.push([
      [x, 0],
      [x - 0.2, 0.22]
    ])
  return (
    <div>
      <Plot color={C.fg} xRange={[-1.75, 1.75]} yRange={[-2.05, 0.55]} width={340} height={261}>
        <Polyline
          points={[
            [-0.9, 0],
            [0.9, 0]
          ]}
          color={C.dim}
        />
        {ceilHatch.map((h, i) => (
          <Polyline key={i} points={h} color={C.faint} />
        ))}
        <Polyline
          points={[
            [0, 0],
            [0, -L - 0.15]
          ]}
          color={C.faint}
          dash="3 4"
        />
        <Parametric
          xy={t => [ax * Math.cos(t), ay + ry * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          color={C.dim}
          dash="3 3"
        />
        <Polyline
          points={[
            [0, 0],
            [-ax, ay]
          ]}
          color={C.faint}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, 0],
            [ax, ay]
          ]}
          color={C.faint}
          dash="2 3"
        />
        <Parametric
          xy={a => [0.45 * Math.cos(a), 0.45 * Math.sin(a)]}
          t={[-Math.PI / 2, -Math.PI / 2 + alpha]}
          color={C.dim}
        />
        <Polyline
          points={[
            [0, 0],
            [bx, by]
          ]}
          color={inFront ? C.fg : C.dim}
          strokeWidth={inFront ? 2.4 : 1.6}
          dash={inFront ? undefined : '4 4'}
        />
        <Dot x={bx} y={by} r={5.5} color={C.fg} />
        <Dot x={0} y={0} r={3} color={C.fg} />
        <Tex
          at={[0.5 * Math.cos(-Math.PI / 2 + alpha / 2), 0.5 * Math.sin(-Math.PI / 2 + alpha / 2)]}
          dx={4}
          tex={`\\alpha`}
          size={FONT_TEX}
          anchor="start"
          color={C.fg}
        />
        <Tex
          at={[ax / 2, ay / 2]}
          dx={ax > 0.15 ? 10 : 12}
          tex={`L`}
          size={13}
          anchor="start"
          color={C.dim}
        />
        <Tex
          at={[0, -0.02]}
          dx={10}
          dy={-2}
          tex={`\\Omega\\,\\circlearrowright`}
          size={FONT_TEX}
          anchor="start"
          color={C.fg}
        />
        <Label at={[-1.66, 0.42]}>CONE</Label>
        <Tex
          at={[0, -1.98]}
          tex={w < wc ? `\\Omega < \\omega_c` : `\\Omega > \\omega_c`}
          size={13}
          anchor="middle"
          color={C.dim}
        />
      </Plot>
      <PlayPause
        playing={sim.playing}
        onToggle={() => sim.setPlaying(!sim.playing)}
        onReset={sim.reset}
        label="spin the bob around the cone"
      />
      <Slider label="Ω" value={w} min={0.5} max={5} step={0.05} onChange={setW} />
    </div>
  )
}

function ConicalBifurcationBlock() {
  const C = useVizColors()
  const [w, setW] = React.useState(2.8)
  const L = 1.6,
    g = 9.81
  const wc = Math.sqrt(g / L)
  const ratio = g / (w * w * L)
  const alpha = ratio < 1 ? Math.acos(ratio) : 0
  const deg = a => (a * 180) / Math.PI
  const branch = sgn => {
    const out = []
    for (let k = 0; k <= 240; k++) {
      const om = wc + ((5.2 - wc) * k) / 240
      const r = g / (om * om * L)
      if (r <= 1) out.push([om, sgn * deg(Math.acos(r))])
    }
    return out
  }
  return (
    <div>
      <Plot color={C.fg} xRange={[-0.6, 5.5]} yRange={[-108, 108]} width={340} height={300}>
        <Arrow from={[0, -100]} to={[0, 106]} color={C.dim} strokeWidth={1.2} head={7} />
        <Arrow from={[-0.1, 0]} to={[5.5, 0]} color={C.dim} strokeWidth={1.2} head={7} />
        <Polyline
          points={[
            [wc, -102],
            [wc, 100]
          ]}
          color={C.dim}
          dash="3 4"
          strokeWidth={1}
          opacity={0.7}
        />
        <Polyline
          points={[
            [w, -102],
            [w, 102]
          ]}
          color={C.faint}
          dash="2 5"
          strokeWidth={1}
        />
        <Polyline
          points={[
            [0, 0],
            [wc, 0]
          ]}
          color={C.fg}
          strokeWidth={2.6}
        />
        <Polyline
          points={[
            [wc, 0],
            [5.5, 0]
          ]}
          color={C.dim}
          strokeWidth={1.4}
          dash="5 5"
        />
        <Polyline points={branch(+1)} color={C.fg} strokeWidth={2.6} />
        <Polyline points={branch(-1)} color={C.fg} strokeWidth={2.6} />
        {alpha > 0 ? (
          <React.Fragment>
            <Polyline
              points={[
                [0, deg(alpha)],
                [w, deg(alpha)]
              ]}
              color={C.faint}
              dash="2 5"
              strokeWidth={1}
            />
            <Dot x={w} y={deg(alpha)} r={4} color={C.fg} />
            <Dot x={w} y={-deg(alpha)} r={4} color={C.fg} />
            <Tex
              at={[0, deg(alpha)]}
              dx={-6}
              tex={`${deg(alpha).toFixed(0)}^\\circ`}
              size={FONT_LABEL}
              anchor="end"
              color={C.fg}
            />
          </React.Fragment>
        ) : (
          <Dot x={w} y={0} r={4} color={C.fg} />
        )}
        {/* ω_c labels its dashed critical line from the empty lower-left
            quadrant — the top row belongs to the α (°) axis label */}
        <Tex
          at={[wc, -92]}
          dx={-6}
          tex={`\\omega_c=\\sqrt{g/L}`}
          size={FONT_TEX}
          anchor="end"
          color={C.fg}
        />
        <Tex at={[5.3, 0]} dy={-12} tex={`\\Omega`} size={FONT_CONTROL} anchor="end" color={C.fg} />
        <Tex
          at={[0, 104]}
          dx={14}
          tex={`\\alpha\\;(^\\circ)`}
          size={FONT_CONTROL}
          anchor="start"
          color={C.fg}
        />
        <Tex
          at={[wc * 0.5, 0]}
          dy={26}
          tex={`\\alpha=0\\ \\text{stable}`}
          size={FONT_LABEL}
          anchor="middle"
          color={C.dim}
        />
        <Tex
          at={[wc + (5.5 - wc) * 0.5, 0]}
          dy={26}
          tex={`\\alpha=0\\ \\text{unstable}`}
          size={FONT_LABEL}
          anchor="middle"
          color={C.dim}
        />
        {/* below the upper branch (curve passes ~63° at x=3.8, ~77° at x=5.2) */}
        <Tex
          at={[4.5, 52]}
          tex={`\\text{tilted (stable)}`}
          size={FONT_LABEL}
          anchor="middle"
          color={C.dim}
        />
      </Plot>
      <Slider label="Ω" value={w} min={0.5} max={5} step={0.05} onChange={setW} />
    </div>
  )
}

export function Nli_ConicalBifurcation() {
  return (
    <div
      className="viz-zoom-unit"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
    >
      <ConicalPendulumBlock />
      <ConicalBifurcationBlock />
    </div>
  )
}
export function Nli_HangingRope() {
  const C = useVizColors()
  const [cut, setCut] = React.useState(0.55) // free-body cut height, fraction of L (Mg = L = 1)
  // Tension up and weight down are equal at the cut: T(y) = (Mg/L)·y. Equal arrows,
  // both growing with the cut, are the whole argument. Scaled to fit the panel.
  const arr = 0.5 * cut
  const ceil = []
  for (let x = -0.45; x <= 0.45; x += 0.2)
    ceil.push([
      [x, 1],
      [x - 0.13, 1.16]
    ])
  return (
    <div>
      <Plot color={C.fg} xRange={[-1.2, 1.55]} yRange={[-0.04, 1.9]} width={340} height={280}>
        {/* ceiling + hatching (the anchor) */}
        <Polyline
          points={[
            [-0.55, 1],
            [0.55, 1]
          ]}
          color={C.dim}
          strokeWidth={1.5}
        />
        {ceil.map((h, i) => (
          <Polyline key={i} points={h} color={C.faint} />
        ))}
        {/* position axis */}
        <Polyline
          points={[
            [-0.82, 0],
            [-0.82, 1]
          ]}
          color={C.faint}
        />
        {[
          [0, '0', C.dim, 10],
          [1, 'L', C.dim, 10],
          [cut, 'y', C.accent, 10]
        ].map(([yy, lab, col, sz], i) => (
          <React.Fragment key={i}>
            <Polyline
              points={[
                [-0.86, yy],
                [-0.78, yy]
              ]}
              color={col}
            />
            <Tex at={[-0.9, yy]} dy={4} tex={lab} size={sz} anchor="end" color={col} />
          </React.Fragment>
        ))}
        {/* free body = the rope below the cut */}
        <Polyline
          points={[
            [-0.46, 0],
            [0.46, 0],
            [0.46, cut],
            [-0.46, cut]
          ]}
          closed
          color={C.accent}
          fillOpacity={0.1}
          strokeWidth={0}
        />
        {/* rope: above the cut dim, free body below bold */}
        <Polyline
          points={[
            [0, cut],
            [0, 1]
          ]}
          color={C.dim}
          strokeWidth={1.5}
        />
        <Polyline
          points={[
            [0, 0],
            [0, cut]
          ]}
          color={C.fg}
          strokeWidth={3}
        />
        <Dot x={0} y={1} r={3} color={C.fg} />
        <Dot x={0} y={0} r={2.5} color={C.fg} opacity={OPACITY.dim} />
        {/* the cut */}
        <Polyline
          points={[
            [-0.66, cut],
            [0.6, cut]
          ]}
          color={C.accent}
          dash="3 3"
        />
        {/* tension pulls the free body UP at the cut face. Drawn at the left end
            of the cut line (outside the ceiling hatch) so the arrow never
            pierces the ceiling as cut → L; its value lives in the hero
            equation, so the arrow carries only the short symbol T. */}
        <Arrow from={[-0.62, cut]} to={[-0.62, cut + arr]} color={C.fg} strokeWidth={2} head={7} />
        <Tex at={[-0.68, cut + arr * 0.55]} tex={`T`} size={FONT_LABEL} anchor="end" color={C.fg} />
        {/* weight pulls it DOWN */}
        <Arrow
          from={[0.32, cut / 2 + arr / 2]}
          to={[0.32, cut / 2 - arr / 2]}
          color={C.accent}
          strokeWidth={2}
          head={7}
        />
        <Tex
          at={[0.34, cut / 2 - arr / 2]}
          dx={8}
          dy={3}
          tex={`\\dfrac{Mg}{L}\\,y`}
          size={FONT_LABEL}
          color={C.accent}
        />
        <Label at={[-1.1, 1.82]} size={FONT_LABEL}>
          ROPE
        </Label>
        <Label at={[0.62, cut]} dy={-5} size={FONT_SMALL} color={C.accent} opacity={OPACITY.accent}>
          CUT
        </Label>
        {/* hero equation in the open right-side space, carrying the live value */}
        <Tex
          at={[1.5, 1.72]}
          tex={`T(y) = \\dfrac{Mg}{L}\\,y = ${cut.toFixed(2)}\\,Mg`}
          size={FONT_CONTROL}
          anchor="end"
          color={C.fg}
        />
      </Plot>
      <Slider
        label="y"
        value={cut}
        min={0.05}
        max={1}
        step={0.01}
        onChange={setCut}
        format={v => v.toFixed(2) + 'L'}
      />
    </div>
  )
}
export function Nli_SHM() {
  const C = useVizColors()
  // Seismograph / "shadow on moving film" model. A vertical spring carries the
  // mass; the mass HEIGHT is the displacement x. A fixed pen at the now-line
  // (t-axis x = 0) marks the current value; the trace scrolls LEFT into the past
  // (time increases rightward toward the pen, so the curve reads as ordinary
  // cosine). The short horizontal projection line locks mass height === pen
  // height every frame, so the trace is visibly the projection of the mass.
  const [w, setW] = React.useState(1.4) // ω₀, slider-driven
  const [A, setA] = React.useState(1.4) // amplitude, slider-driven
  const wRef = React.useRef(w) // live ω₀ for the RAF integration closure
  wRef.current = w
  const TSCALE = 1.1 // plot-x units per second of history
  const WIN = 11 / TSCALE // seconds of history that fit in the trace window
  // Spring geometry (data coords). +x = up = compressed; -x = down = stretched.
  const springX = 2.6,
    ceilY = 2.15,
    massHalfX = 0.5,
    massHalfY = 0.4
  const k = w * w // unit mass: F = -kx, ω₀ = √(k/m)
  const Fscale = 0.45 // |F| → data-unit arrow length
  const forceX = springX + massHalfX + 0.14 // restoring-force arrow, just right of the mass
  const initial = React.useMemo(() => {
    // Seed with the exact past so the film is full on first paint. cos solves
    // x-double-dot = -w^2 x for all t, so backfilling t < 0 is honest, and rk4
    // continues it forward with no seam.
    const trail = []
    for (let t = -WIN; t <= 0; t += 0.06) trail.push([t, A * Math.cos(w * t)])
    return { x: A, v: 0, t: 0, trail }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [w, A])
  const step = (s, dt) => {
    if (dt === 0) return s
    const ww = wRef.current
    const f = (_, y) => [y[1], -ww * ww * y[0]]
    const next = rk4Step(f, s.t, [s.x, s.v], dt)
    const trail = s.trail.concat([[s.t + dt, next[0]]]).slice(-900)
    return { x: next[0], v: next[1], t: s.t + dt, trail }
  }
  const [s, setS, sim] = useSimulation(initial, step)
  React.useEffect(() => {
    setS(initial) // reseed the film when ω₀ or A changes
  }, [initial, setS])
  // Map stored (t, x) history into the scrolling window: newest sits at the pen
  // (px = 0), older flows left (px < 0).
  const tracePts = React.useMemo(
    () =>
      s.trail.map(([t, x]) => [-(s.t - t) * TSCALE, x]).filter(([px]) => px >= -11 && px <= 0.001),
    [s.trail, s.t]
  )
  // Vertical spring helix from ceiling down to the top of the mass.
  const springPts = React.useMemo(() => {
    const N = 16,
      top = ceilY,
      bot = s.x + massHalfY
    const pts = []
    for (let i = 0; i <= N; i++) {
      const yi = top + ((bot - top) * i) / N
      const xi = springX + (i === 0 || i === N ? 0 : 0.22 * (i % 2 === 0 ? 1 : -1))
      pts.push([xi, yi])
    }
    return pts
  }, [s.x])
  const Tp = (2 * Math.PI) / w // period
  const rawF = k * s.x * Fscale // F = -kx, drawn opposite the displacement
  const Fdraw = Math.sign(rawF) * Math.min(Math.abs(rawF), 1.6) // cap so a stiff spring stays on-screen
  const forceTo = s.x - Fdraw
  return (
    <div>
      <div className="viz-zoom-unit">
        <Plot color={C.fg} xRange={[-12, 5.4]} yRange={[-2.4, 2.5]} width={700} height={340}>
          <Axes step={1} showGrid={false} showTicks={false} />

          {/* amplitude envelope: tertiary */}
          <Polyline
            points={[
              [-11, A],
              [0, A]
            ]}
            color={C.faint}
            dash="2 4"
          />
          <Polyline
            points={[
              [-11, -A],
              [0, -A]
            ]}
            color={C.faint}
            dash="2 4"
          />
          <Tex at={[-0.28, A]} dy={-4} anchor="end" tex={`+A`} size={FONT_LABEL} color={C.dim} />
          <Tex at={[-0.28, -A]} dy={14} anchor="end" tex={`-A`} size={FONT_LABEL} color={C.dim} />

          {/* the computed trace, generated by the motion: PRIMARY hero */}
          <Polyline points={tracePts} color={C.fg} strokeWidth={2.5} opacity={1} />

          {/* time axis: Tex 't' (lowercase italic), never reads as the period T */}
          <Arrow from={[-3, -2.2]} to={[-0.2, -2.2]} color={C.dim} head={5} strokeWidth={1} />
          <Tex at={[0.05, -2.2]} dy={4} anchor="start" tex={`t`} size={FONT_LABEL} color={C.dim} />

          {/* displacement-axis label at the top of the now-line */}
          <Tex at={[0, 2.28]} dx={7} anchor="start" tex={`x`} size={FONT_TEX} color={C.dim} />

          {/* ceiling + hatch: secondary */}
          <Polyline
            points={[
              [springX - 0.62, ceilY],
              [springX + 0.62, ceilY]
            ]}
            color={C.dim}
            strokeWidth={2}
          />
          {[-0.5, -0.25, 0, 0.25, 0.5].map(d => (
            <Polyline
              key={d}
              points={[
                [springX + d, ceilY],
                [springX + d - 0.16, ceilY + 0.16]
              ]}
              color={C.faint}
            />
          ))}

          {/* spring: secondary */}
          <Polyline points={springPts} color={C.dim} strokeWidth={1.4} opacity={0.75} />

          {/* projection line: the trace IS the mass's shadow: pen height === mass height, every frame */}
          <Polyline
            points={[
              [0, s.x],
              [springX - massHalfX, s.x]
            ]}
            color={C.fg}
            opacity={0.85}
            strokeWidth={1.6}
            dash="3 3"
          />

          {/* mass block: PRIMARY */}
          <Polyline
            points={[
              [springX - massHalfX, s.x - massHalfY],
              [springX + massHalfX, s.x - massHalfY],
              [springX + massHalfX, s.x + massHalfY],
              [springX - massHalfX, s.x + massHalfY]
            ]}
            closed
            color={C.fg}
            strokeWidth={2}
            fillOpacity={0.22}
          />

          {/* restoring force F = -kx: points back toward equilibrium, length ∝ |x|: accent */}
          <Arrow
            from={[forceX, s.x]}
            to={[forceX, forceTo]}
            color={C.fg}
            strokeWidth={2}
            head={7}
          />
          <Tex
            at={[forceX + 0.22, 0]}
            anchor="start"
            tex={`F = -kx`}
            size={FONT_LABEL}
            color={C.fg}
          />

          {/* pen at the now-line: PRIMARY */}
          <Dot x={0} y={s.x} r={4.5} color={C.fg} />

          {/* governing relations */}
          <Tex
            at={[-11.7, 2.15]}
            anchor="start"
            tex={`x(t) = A\\cos(\\omega_0 t)`}
            size={FONT_TEX}
            color={C.fg}
          />
          <Tex
            at={[springX, -2.15]}
            anchor="middle"
            tex={`\\ddot x = -\\omega_0^2 x`}
            size={FONT_LABEL}
            color={C.fg}
          />
        </Plot>
      </div>
      <PlayPause
        playing={sim.playing}
        onToggle={() => sim.setPlaying(!sim.playing)}
        onReset={sim.reset}
      />
      <Slider
        label="ω₀"
        value={w}
        min={0.8}
        max={2.4}
        step={0.05}
        onChange={setW}
        format={v => v.toFixed(2)}
      />
      <Slider
        label="A"
        value={A}
        min={0.6}
        max={2}
        step={0.05}
        onChange={setA}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}
export function Nli_HarmonicPhasePortrait() {
  const C = useVizColors()
  const w = 1.0
  const R0 = 1.6 // the orbit the point rides
  const initial = React.useMemo(() => ({ x: R0, v: 0, t: 0, trail: [] }), [])
  const step = (s, dt) => {
    if (dt === 0) return s
    const f = (_, y) => [y[1], -w * w * y[0]]
    const next = rk4Step(f, s.t, [s.x, s.v], dt)
    const trail = s.trail.concat([[next[0], next[1]]]).slice(-600)
    return { x: next[0], v: next[1], t: s.t + dt, trail }
  }
  const [s, , sim] = useSimulation(initial, step)
  const sweep = s.t % (2 * Math.PI)

  // Hamiltonian flow field: (xdot, pdot) = (dH/dp, -dH/dx) = (p, -w^2 x).
  // Tiny direction-normalized arrows on a lattice make the rotational FLOW
  // visible everywhere, not just on the one drawn orbit. This is what turns the
  // portrait from "circles" into "a computed velocity field that spins."
  const field = React.useMemo(() => {
    const out = []
    const L = 0.34 // fixed visual length (data units): encodes direction, not speed
    for (let gx = -2.4; gx <= 2.41; gx += 0.8) {
      for (let gy = -2.4; gy <= 2.41; gy += 0.8) {
        if (Math.hypot(gx, gy) < 0.5) continue // skip the fixed point + clock-hand region
        const vx = gy // = p
        const vy = -w * w * gx // = -w^2 x
        const n = Math.hypot(vx, vy) || 1
        out.push({ from: [gx, gy], to: [gx + (vx / n) * L, gy + (vy / n) * L] })
      }
    }
    return out
  }, [])

  // live invariant: H trades between kinetic (p^2/2) and potential (w^2 x^2 / 2)
  // every instant, but the sum holds fixed: the reason orbits never cross.
  const H = 0.5 * (s.v * s.v + w * w * s.x * s.x)

  // neighbouring constant-energy shells, each a different total energy
  const levels = [0.8, 2.3]

  // equal spans on an equal-pixel 600×600 frame (pad symmetric) ⇒ ux = uy, so
  // the omega0 = 1 level sets render as TRUE CIRCLES, not stretched ellipses.
  return (
    <div>
      <Plot color={C.fg} xRange={[-2.75, 2.75]} yRange={[-2.75, 2.75]} width={600} height={600}>
        <Axes step={1} showGrid={false} />

        {/* TERTIARY: the Hamiltonian flow field: direction at every point */}
        {field.map((a, i) => (
          <Arrow key={`f${i}`} from={a.from} to={a.to} color={C.faint} head={4} strokeWidth={1} />
        ))}

        {/* SECONDARY: neighbouring energy shells (nested, never crossing) */}
        {levels.map((R, i) => (
          <Parametric
            key={`lv${i}`}
            xy={th => [R * Math.cos(th), R * Math.sin(th)]}
            t={[0, 2 * Math.PI]}
            color={C.dim}
          />
        ))}

        {/* PRIMARY: the active orbit the integrated point actually rides */}
        <Parametric
          xy={th => [R0 * Math.cos(th), R0 * Math.sin(th)]}
          t={[0, 2 * Math.PI]}
          color={C.fg}
          strokeWidth={1.4}
        />
        {/* clockwise direction marker, tangent at the top of the active orbit */}
        <Arrow from={[-0.3, R0]} to={[0.36, R0]} color={C.fg} head={7} strokeWidth={1.4} />

        {/* live integrated trail */}
        <Polyline points={s.trail.length ? s.trail : [[R0, 0]]} color={C.fg} strokeWidth={1.8} />

        {/* rotating phase vector (clock hand) */}
        <Polyline
          points={[
            [0, 0],
            [s.x, s.v]
          ]}
          color={C.dim}
        />

        {/* swept angle = omega0 * t, shown only once the flow has actually turned */}
        {sweep > 0.2 && (
          <React.Fragment>
            <Parametric
              xy={a => [0.62 * Math.cos(a), 0.62 * Math.sin(a)]}
              t={[-sweep, 0]}
              samples={120}
              color={C.accent}
            />
            <Tex
              at={[0.98 * Math.cos(-sweep / 2), 0.98 * Math.sin(-sweep / 2)]}
              tex={`\\omega_0 t`}
              size={FONT_LABEL}
              anchor="middle"
              color={C.accent}
            />
          </React.Fragment>
        )}
        <Dot x={s.x} y={s.v} r={4.5} color={C.fg} />

        {/* Hamiltonian + its live, conserved value */}
        <Tex
          at={[-2.65, 2.55]}
          tex={`H = \\tfrac{1}{2}(p^2 + \\omega_0^2 x^2)`}
          size={FONT_LABEL}
          color={C.dim}
        />
        <Label at={[-2.65, 2.08]} size={FONT_LABEL} upper={false} opacity={OPACITY.fg}>
          {`H = ${H.toFixed(2)}  ·  conserved`}
        </Label>

        <Label at={[2.65, 0]} dy={-6} anchor="end">
          X
        </Label>
        <Label at={[0, 2.65]} dx={6}>
          P
        </Label>
        <Tex
          at={[0, -2.6]}
          tex={`\\text{uniform clockwise rotation, } T = 2\\pi/\\omega_0`}
          size={FONT_LABEL}
          anchor="middle"
          color={C.dim}
        />
      </Plot>
      <PlayPause
        playing={sim.playing}
        onToggle={() => sim.setPlaying(!sim.playing)}
        onReset={sim.reset}
      />
    </div>
  )
}
// 01.2.8 Center vs Saddle: two COMPUTED phase portraits of x' = p, p' = ±ω²x (ω = 1).
// Field arrows are scaled by true speed |v| = hypot(p, ω²x) in BOTH length and
// brightness, so the dynamics read off the page: slow near the fixed point, fast
// far away. Orbits and hyperbolas are RK4-integrated, not drawn by hand: the
// center's orbits close (energy conserved) and circulate clockwise; the saddle's
// trajectories sweep in along the stable manifold (p = -x) and out along the
// unstable one (p = x). Equal px-per-unit on both axes (heights tied to the
// ranges, pad 16) keeps the center's orbits true circles and the saddle
// manifolds at a true 45°.
const _csStep = (signX, dt, y) => {
  const f = (_, v) => [v[1], signX * v[0]]
  return rk4Step(f, 0, y, dt)
}
const _csTraj = (x0, p0, signX, dt, n) => {
  const pts = [[x0, p0]]
  let y = [x0, p0]
  for (let i = 0; i < n; i++) {
    y = _csStep(signX, dt, y)
    pts.push([y[0], y[1]])
  }
  return pts
}
// forward + backward from a seed → one continuous hyperbolic arc through it
const _csArc = (x0, p0, signX, dt, n) => {
  const bwd = _csTraj(x0, p0, signX, -dt, n)
  return bwd
    .slice(1)
    .reverse()
    .concat(_csTraj(x0, p0, signX, dt, n))
}
const CS_SP_MAX = 3.1 // |v| at the field's far corners, normalises length + brightness
// speed-proportional field on a 0.5 grid, minus an origin disk and the label zones
const _csField = (signX, skip) => {
  const inSkip = (x, p) => skip.some(z => x > z.x0 && x < z.x1 && p > z.y0 && p < z.y1)
  const out = []
  for (let x = -2.25; x <= 2.26; x += 0.5)
    for (let p = -2.25; p <= 2.26; p += 0.5) {
      if (Math.hypot(x, p) < 0.5 || inSkip(x, p)) continue
      const dx = p,
        dp = signX * x
      const sp = Math.hypot(dx, dp) || 1
      const f = Math.min(sp, CS_SP_MAX) / CS_SP_MAX
      const L = 0.06 + f * 0.4 // 0.06..0.46 data units of arrow length
      out.push([x, p, (dx / sp) * L, (dp / sp) * L, 0.2 + f * 0.45]) // last = opacity
    }
  return out
}
const CS_CENTER_SKIP = [
  { x0: -2.65, x1: -1.2, y0: 2.05, y1: 2.65 }, // equation
  { x0: -0.95, x1: 0.95, y0: 2.05, y1: 2.65 }, // CENTER
  { x0: -1.5, x1: 1.5, y0: -2.65, y1: -2.05 } // CLOSED ORBITS
]
const CS_SADDLE_SKIP = [
  { x0: -2.65, x1: -1.2, y0: 2.05, y1: 2.65 }, // equation
  { x0: -0.95, x1: 0.95, y0: 2.05, y1: 2.65 }, // SADDLE
  { x0: -2.5, x1: -0.9, y0: -2.65, y1: -2.05 }, // UNSTABLE
  { x0: 0.9, x1: 2.5, y0: -2.65, y1: -2.05 } // STABLE
]
const CS_CENTER_FIELD = _csField(-1, CS_CENTER_SKIP)
const CS_SADDLE_FIELD = _csField(1, CS_SADDLE_SKIP)
const CS_EDGE = 2.55 // separatrix span, tied to the frame so the manifolds reach the corners
const CS_ORBIT_RADII = [0.65, 1.25, 1.9, 2.5]
// closed orbits (one full period ≈ 2π at dt = 0.04 → ~160 steps)
const CS_ORBITS = CS_ORBIT_RADII.map(r => _csTraj(r, 0, -1, 0.04, 162))
// hyperbolic trajectories, one seeded in each region between the manifolds
const CS_HYPERBOLAS = [
  _csArc(0, 0.9, 1, 0.03, 60), // top
  _csArc(0, -0.9, 1, 0.03, 60), // bottom
  _csArc(0.9, 0, 1, 0.03, 60), // right
  _csArc(-0.9, 0, 1, 0.03, 60) // left
]
export function Nli_CenterSaddle() {
  const C = useVizColors()
  return (
    <div
      className="viz-zoom-unit"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
    >
      <Plot color={C.fg} xRange={[-2.6, 2.6]} yRange={[-2.6, 2.75]} width={420} height={431}>
        <Axes step={1} showGrid={false} />
        {CS_CENTER_FIELD.map(([x, p, dx, dp, o], i) => (
          <Arrow
            key={i}
            from={[x, p]}
            to={[x + dx, p + dp]}
            color={C.dim}
            opacity={o}
            head={3}
            strokeWidth={0.7}
          />
        ))}
        {CS_ORBITS.map((pts, i) => (
          <Polyline key={`o${i}`} points={pts} color={C.fg} opacity={0.85} strokeWidth={1.4} />
        ))}
        {/* clockwise circulation: at the top of each orbit the flow points +x */}
        {CS_ORBIT_RADII.map((r, i) => (
          <Arrow
            key={`d${i}`}
            from={[-0.16, r]}
            to={[0.16, r]}
            color={C.fg}
            head={5}
            strokeWidth={1.4}
          />
        ))}
        <Dot x={0} y={0} r={4} color={C.fg} />
        <Tex at={[-2.5, 2.42]} tex={`\\dot p = -\\omega^2 x`} size={FONT_LABEL} color={C.fg} />
        <Tex at={[-2.5, 2.04]} tex={`\\lambda = \\pm i\\omega`} size={FONT_SMALL} color={C.dim} />
        <Label at={[0, 2.65]} anchor="middle" opacity={1}>
          CENTER
        </Label>
        <Label at={[0, -2.4]} anchor="middle" opacity={1}>
          CLOSED ORBITS
        </Label>
      </Plot>
      <Plot color={C.fg} xRange={[-2.6, 2.6]} yRange={[-2.6, 2.6]} width={420} height={420}>
        <Axes step={1} showGrid={false} />
        {CS_SADDLE_FIELD.map(([x, p, dx, dp, o], i) => (
          <Arrow
            key={i}
            from={[x, p]}
            to={[x + dx, p + dp]}
            color={C.dim}
            opacity={o}
            head={3}
            strokeWidth={0.7}
          />
        ))}
        {/* integrated hyperbolic trajectories */}
        {CS_HYPERBOLAS.map((pts, i) => (
          <Polyline key={`h${i}`} points={pts} color={C.fg} opacity={0.7} strokeWidth={1.3} />
        ))}
        {/* separatrix: the two invariant manifolds (p = ±x) at a true 45° */}
        <Polyline
          points={[
            [-CS_EDGE, -CS_EDGE],
            [CS_EDGE, CS_EDGE]
          ]}
          color={C.fg}
          opacity={0.55}
          dash="3 3"
        />
        <Polyline
          points={[
            [-CS_EDGE, CS_EDGE],
            [CS_EDGE, -CS_EDGE]
          ]}
          color={C.fg}
          opacity={0.55}
          dash="3 3"
        />
        {/* unstable manifold (p = x): flow OUT */}
        <Arrow from={[1.55, 1.55]} to={[2.15, 2.15]} color={C.fg} head={6} strokeWidth={1.4} />
        <Arrow from={[-1.55, -1.55]} to={[-2.15, -2.15]} color={C.fg} head={6} strokeWidth={1.4} />
        {/* stable manifold (p = -x): flow IN */}
        <Arrow from={[2.15, -2.15]} to={[1.55, -1.55]} color={C.fg} head={6} strokeWidth={1.4} />
        <Arrow from={[-2.15, 2.15]} to={[-1.55, 1.55]} color={C.fg} head={6} strokeWidth={1.4} />
        <Dot x={0} y={0} r={4} fill={false} color={C.fg} />
        <Tex at={[-2.5, 2.42]} tex={`\\dot p = +\\omega^2 x`} size={FONT_LABEL} color={C.fg} />
        <Tex at={[-2.5, 2.04]} tex={`\\lambda = \\pm\\omega`} size={FONT_SMALL} color={C.dim} />
        <Label at={[0, 2.42]} anchor="middle" opacity={1}>
          SADDLE
        </Label>
        <Label at={[-1.7, -2.4]} anchor="middle" opacity={1}>
          UNSTABLE
        </Label>
        <Label at={[1.7, -2.4]} anchor="middle" opacity={1}>
          STABLE
        </Label>
      </Plot>
    </div>
  )
}
export function Nli_DoubleWell() {
  const C = useVizColors()
  const U = x => (x * x - 1) ** 2 // double well: minima at x=±1, barrier U_b=1 at x=0
  // Universal start: release from rest at the OUTER turning point of energy e.
  // xo = sqrt(1 + sqrt(e)) is always a real root of U(x)=e for any e ≥ 0.
  const seedAt = e => ({ x: -Math.sqrt(1 + Math.sqrt(e)), v: 0, t: 0, trail: [] })
  const E0_DEFAULT = 0.5
  const initial = React.useMemo(() => seedAt(E0_DEFAULT), [])
  const [E0, setE0] = React.useState(E0_DEFAULT) // energy the slider selects
  const step = (s, dt) => {
    if (dt === 0) return s
    const f = (_, y) => [y[1], -4 * y[0] * (y[0] * y[0] - 1)] // conservative: F = -dU/dx
    const next = rk4Step(f, s.t, [s.x, s.v], dt)
    // short comet tail: fixed-dt points space out by speed, so the tail bunches where the
    // particle crawls (near turning points and, at E≈U_b, near the saddle) and stretches
    // where it races through a well bottom: the motion's rhythm made visible.
    const trail = s.trail.concat([[next[0], next[1]]]).slice(-240)
    return { x: next[0], v: next[1], t: s.t + dt, trail }
  }
  const [s, setS, sim] = useSimulation(initial, step)
  // Energy is conserved along the trajectory; read it from the live state so the
  // drawn level set is glued to the dot, not a separate decorative curve.
  const E = 0.5 * s.v * s.v + U(s.x)
  const selectEnergy = e => {
    setE0(e)
    setS(seedAt(e)) // re-release on the chosen contour, clear the trail
  }

  // Level set: H = ½p² + U(x) = E  →  p = ±√(2(E−U(x))). Parametric auto-breaks
  // the path where the radicand goes negative, so for E < U_b it draws two disjoint
  // in-well loops, and one enclosing loop for E > U_b.
  const branch = (e, sgn) => x => {
    const r = 2 * (e - U(x))
    return [x, r >= 0 ? sgn * Math.sqrt(r) : NaN]
  }
  // Turning points: real roots of U(x)=E: exactly where the energy line meets the
  // potential, and where the phase contour crosses p=0. These couple the two panels.
  const sqE = Math.sqrt(E)
  const xo = Math.sqrt(1 + sqE)
  const turns = E < 1 ? [-xo, -Math.sqrt(1 - sqE), Math.sqrt(1 - sqE), xo] : [-xo, xo]
  const regime =
    Math.abs(E - 1) < 0.02 ? 'SEPARATRIX' : E < 1 ? 'BOUND · ONE WELL' : 'OVER BARRIER · BOTH WELLS'

  const XR = [-1.65, 1.65]
  // Static phase-space background: faint family of level sets + the separatrix.
  // Memoized so the rAF play loop never recomputes these curves.
  const bgCurves = React.useMemo(() => {
    const br = (e, sgn) => x => {
      const r = 2 * (e - (x * x - 1) ** 2)
      return [x, r >= 0 ? sgn * Math.sqrt(r) : NaN]
    }
    const els = []
    ;[0.45, 0.72, 1.4, 1.95].forEach((e, i) => {
      els.push(
        <Parametric
          key={`b+${i}`}
          xy={br(e, +1)}
          t={[-1.65, 1.65]}
          samples={320}
          color={C.faint}
          strokeWidth={1}
        />,
        <Parametric
          key={`b-${i}`}
          xy={br(e, -1)}
          t={[-1.65, 1.65]}
          samples={320}
          color={C.faint}
          strokeWidth={1}
        />
      )
    })
    // separatrix at E = U_b = 1 (the figure-eight through the saddle)
    els.push(
      <Parametric
        key="sx+"
        xy={br(1, +1)}
        t={[-1.65, 1.65]}
        samples={400}
        color={C.dim}
        dash="2 3"
      />,
      <Parametric
        key="sx-"
        xy={br(1, -1)}
        t={[-1.65, 1.65]}
        samples={400}
        color={C.dim}
        dash="2 3"
      />
    )
    return els
  }, [C.faint, C.dim])

  return (
    <div>
      <div
        className="viz-zoom-unit"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
      >
        {/* POTENTIAL */}
        <Plot color={C.fg} xRange={XR} yRange={[-0.4, 3.05]} width={340} height={360}>
          <Axes step={0.5} showGrid={false} />
          {/* barrier-height threshold: lets the eye judge E against U_b */}
          <Polyline
            points={[
              [XR[0], 1],
              [XR[1], 1]
            ]}
            color={C.faint}
            dash="2 4"
          />
          <Parametric xy={x => [x, U(x)]} t={[-1.63, 1.63]} color={C.fg} strokeWidth={1.7} />
          {/* energy line at y = E: the same E that selects the contour on the right */}
          <Polyline
            points={[
              [XR[0], E],
              [XR[1], E]
            ]}
            color={C.accent}
            dash="4 3"
            strokeWidth={1.4}
          />
          {/* coupling guide: the particle's x, shared with the phase panel */}
          <Polyline
            points={[
              [s.x, 0],
              [s.x, U(s.x)]
            ]}
            color={C.faint}
          />
          {/* kinetic energy = the gap from U(x) up to the energy line E. It is exactly
              ½v², so it shrinks to zero at the turning points where the particle stops. */}
          <Polyline
            points={[
              [s.x, U(s.x)],
              [s.x, E]
            ]}
            color={C.accent}
            strokeWidth={2}
          />
          {E - U(s.x) > 0.2 && (
            <Tex
              at={[s.x, (U(s.x) + E) / 2]}
              dx={6}
              tex={`KE`}
              size={FONT_SMALL}
              anchor="start"
              color={C.accent}
            />
          )}
          {/* turning points = energy line ∩ U(x) */}
          {turns.map((t, i) => (
            <Dot key={i} x={t} y={E} r={2.8} fill={false} color={C.accent} />
          ))}
          <Dot x={-1} y={0} r={3} color={C.fg} />
          <Dot x={1} y={0} r={3} color={C.fg} />
          <Dot x={0} y={1} r={3} fill={false} color={C.fg} />
          <Dot x={s.x} y={U(s.x)} r={4.2} color={C.fg} />
          <Tex at={[0, 1]} dx={8} dy={-4} tex={`U_b`} size={FONT_LABEL} color={C.dim} />
          <Tex at={[XR[0] + 0.06, E]} dy={-4} tex={`E`} size={FONT_LABEL} color={C.accent} />
          <Tex at={[-1.58, 2.78]} tex={`U(x) = (x^2 - 1)^2`} size={FONT_LABEL} color={C.fg} />
          <Label at={[1.6, 2.85]} anchor="end">
            POTENTIAL
          </Label>
          <Label at={[1.6, 0]} dy={16} anchor="end">
            x
          </Label>
        </Plot>
        {/* PHASE PLANE (shares its x-mapping with the potential panel) */}
        <Plot color={C.fg} xRange={XR} yRange={[-2.35, 2.35]} width={340} height={360}>
          <Polyline
            points={[
              [XR[0], 0],
              [XR[1], 0]
            ]}
            color={C.dim}
          />
          <Polyline
            points={[
              [0, -2.25],
              [0, 2.25]
            ]}
            color={C.faint}
          />
          {bgCurves}
          {/* live level set at the current energy: the orbit the particle rides */}
          <Parametric
            xy={branch(E, +1)}
            t={[-xo - 0.02, xo + 0.02]}
            samples={420}
            color={C.dim}
            strokeWidth={1.3}
          />
          <Parametric
            xy={branch(E, -1)}
            t={[-xo - 0.02, xo + 0.02]}
            samples={420}
            color={C.dim}
            strokeWidth={1.3}
          />
          {/* trajectory tracing that level set in real time */}
          <Polyline
            points={s.trail.length ? s.trail : [[s.x, s.v]]}
            color={C.accent}
            strokeWidth={1.8}
          />
          {/* coupling guide: same x as the potential panel */}
          <Polyline
            points={[
              [s.x, 0],
              [s.x, s.v]
            ]}
            color={C.faint}
          />
          {turns.map((t, i) => (
            <Dot key={i} x={t} y={0} r={2.8} fill={false} color={C.accent} />
          ))}
          <Dot x={-1} y={0} r={3} color={C.fg} />
          <Dot x={1} y={0} r={3} color={C.fg} />
          <Dot x={0} y={0} r={3.5} fill={false} color={C.fg} />
          <Dot x={s.x} y={s.v} r={4.2} color={C.fg} />
          <Tex at={[0, 0]} dx={8} dy={-8} tex={`\\text{saddle}`} size={FONT_SMALL} color={C.dim} />
          <Label at={[-1.6, 2.25]}>{regime}</Label>
          <Label at={[1.6, 2.0]} anchor="end">
            PHASE PLANE
          </Label>
          <Label at={[1.6, 0]} dy={16} anchor="end">
            x
          </Label>
          <Label at={[0, 2.25]} dx={8}>
            p
          </Label>
        </Plot>
      </div>
      <Slider
        label="ENERGY E"
        value={E0}
        min={0.1}
        max={2.4}
        step={0.01}
        onChange={selectEnergy}
        format={v => (Math.abs(v - 1) < 0.02 ? `${v.toFixed(2)} = U_b` : v.toFixed(2))}
      />
      <PlayPause
        playing={sim.playing}
        onToggle={() => sim.setPlaying(!sim.playing)}
        onReset={() => setS(seedAt(E0))}
      />
    </div>
  )
}
export function Nli_Lissajous() {
  const C = useVizColors()
  const [wx, setWx] = React.useState(3)
  const [wy, setWy] = React.useState(2)
  const [delta, setDelta] = React.useState(Math.PI / 2)
  const [T, setT] = React.useState(0.62) // traced fraction of one closure period
  const [playing, setPlaying] = React.useState(false)
  const reduced = useReducedMotion()
  const F = C.fg,
    DIM = C.dim

  // For integer frequencies the figure closes after one combined period
  // P = 2π / gcd(ωx, ωy). The reduced ratio rx:ry counts cycles per closure.
  const gcd = (a, b) => (b ? gcd(b, a % b) : a)
  const g = gcd(wx, wy)
  const P = (2 * Math.PI) / g
  const rx = wx / g
  const ry = wy / g

  // Auto-advance the trace head while playing; loop every CYCLE seconds.
  const CYCLE = 7
  React.useEffect(() => {
    if (!playing || reduced) return
    let raf = 0
    let last = null
    const loop = ts => {
      if (last != null) setT(prev => (prev + (ts - last) / 1000 / CYCLE) % 1)
      last = ts
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [playing, reduced])

  // Component oscillations. Unit amplitude keeps the figure inside a clean square.
  const x = u => Math.sin(wx * u + delta)
  const y = u => Math.sin(wy * u)
  const u = T * P
  const hx = x(u)
  const hy = y(u)

  // Marginal driver waves share the central square's axes:
  //   top : x(t) plotted horizontally (aligned to columns), time growing upward
  //   left: y(t) plotted vertically   (aligned to rows),    time growing leftward
  const topPos = f => 1.5 + 1.6 * f // f = u / P ∈ [0, 1]
  const leftPos = f => -1.5 - 1.6 * f
  const built = Math.max(2, Math.round(900 * T))
  const builtW = Math.max(2, Math.round(500 * T))
  // Tangency points: x = +1 (right edge) happens rx times per closure, y = +1
  // (top edge) ry times. Counting them off the box is how you read ωx:ωy on a scope.
  const rightTouches = []
  for (let k = 0; k < rx; k++) {
    const uk = (Math.PI / 2 - delta + 2 * Math.PI * k) / wx
    rightTouches.push([1, Math.sin(wy * uk)])
  }
  const topTouches = []
  for (let k = 0; k < ry; k++) {
    const uk = (Math.PI / 2 + 2 * Math.PI * k) / wy
    topTouches.push([Math.sin(wx * uk + delta), 1])
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div
        className="viz-zoom-unit"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}
      >
        {/* Left: oscilloscope construction */}
        <Plot color={F} xRange={[-3.0, 1.4]} yRange={[-1.4, 3.0]} width={500} height={500}>
          {/* central square frame */}
          <Polyline
            points={[
              [-1, -1],
              [1, -1],
              [1, 1],
              [-1, 1]
            ]}
            closed
            color={F}
            opacity={OPACITY.faint}
            strokeWidth={1}
          />
          {/* ghost complete figure */}
          <Parametric
            xy={t => [x(t), y(t)]}
            t={[0, P]}
            samples={900}
            color={F}
            opacity={0.14}
            strokeWidth={1}
          />
          {/* ghost driver waves */}
          <Parametric
            xy={t => [x(t), topPos(t / P)]}
            t={[0, P]}
            samples={400}
            color={F}
            opacity={0.1}
            strokeWidth={0.8}
          />
          <Parametric
            xy={t => [leftPos(t / P), y(t)]}
            t={[0, P]}
            samples={400}
            color={F}
            opacity={0.1}
            strokeWidth={0.8}
          />
          {/* built driver waves */}
          <Parametric
            xy={t => [x(t), topPos(t / P)]}
            t={[0, u]}
            samples={builtW}
            color={DIM}
            opacity={0.45}
            strokeWidth={1}
          />
          <Parametric
            xy={t => [leftPos(t / P), y(t)]}
            t={[0, u]}
            samples={builtW}
            color={DIM}
            opacity={0.45}
            strokeWidth={1}
          />
          {/* projection guides */}
          <Polyline
            points={[
              [hx, hy],
              [hx, topPos(T)]
            ]}
            color={DIM}
            opacity={0.35}
            strokeWidth={1}
            dash="3 3"
          />
          <Polyline
            points={[
              [hx, hy],
              [leftPos(T), hy]
            ]}
            color={DIM}
            opacity={0.35}
            strokeWidth={1}
            dash="3 3"
          />
          {/* live figure */}
          <Parametric
            xy={t => [x(t), y(t)]}
            t={[0, u]}
            samples={built}
            color={F}
            opacity={0.95}
            strokeWidth={1.7}
          />
          {rightTouches.map((p, i) => (
            <Dot key={`rt${i}`} x={p[0]} y={p[1]} r={2.6} color={C.accent} />
          ))}
          {topTouches.map((p, i) => (
            <Dot key={`tt${i}`} x={p[0]} y={p[1]} r={2.6} color={C.accent} />
          ))}
          <Dot x={hx} y={topPos(T)} r={3} color={F} />
          <Dot x={leftPos(T)} y={hy} r={3} color={F} />
          <Dot x={hx} y={hy} r={4.5} color={F} />
          <Tex
            at={[0, 2.82]}
            anchor="middle"
            tex={`x(t) = \\sin(\\omega_x t + \\delta)`}
            size={FONT_LABEL}
            color={F}
          />
          <Tex
            at={[-2.05, 1.0]}
            anchor="middle"
            tex={`y(t) = \\sin(\\omega_y t)`}
            size={FONT_LABEL}
            color={F}
          />
        </Plot>

        {/* Right: irrational reference + readout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Plot color={F} xRange={[-1.25, 1.25]} yRange={[-1.25, 1.25]} width={360} height={360}>
            <Polyline
              points={[
                [-1, -1],
                [1, -1],
                [1, 1],
                [-1, 1]
              ]}
              closed
              color={F}
              opacity={OPACITY.faint}
              strokeWidth={1}
            />
            <Parametric
              xy={t => [Math.sin(t), Math.sin(Math.SQRT2 * t)]}
              t={[0, 50 * Math.PI]}
              samples={5000}
              color={DIM}
              opacity={0.45}
              strokeWidth={0.7}
            />
            <Label at={[0, 1.15]} anchor="middle" opacity={1}>
              1 : √2 · NEVER CLOSES
            </Label>
          </Plot>
          <div
            style={{
              fontFamily: "'D-DIN', ui-monospace, monospace",
              fontSize: FONT_TEX,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              lineHeight: 2,
              color: F
            }}
          >
            <div style={{ opacity: OPACITY.dim }}>
              RATIO ω<sub>x</sub> : ω<sub>y</sub>
              <span style={{ float: 'right', opacity: 1 }}>
                {wx} : {wy}
                {g > 1 ? ` → ${rx} : ${ry}` : ''}
              </span>
            </div>
            <div style={{ opacity: OPACITY.dim }}>
              PHASE δ
              <span style={{ float: 'right', opacity: 1 }}>{(delta / Math.PI).toFixed(2)} π</span>
            </div>
            <div style={{ marginTop: 8, opacity: 1 }}>
              RIGHT EDGE {rx}×, TOP EDGE {ry}× → {rx}:{ry}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 16 }}>
        <Slider
          label="ωx"
          value={wx}
          min={1}
          max={5}
          step={1}
          onChange={v => setWx(Math.round(v))}
          format={v => String(Math.round(v))}
        />
        <Slider
          label="ωy"
          value={wy}
          min={1}
          max={5}
          step={1}
          onChange={v => setWy(Math.round(v))}
          format={v => String(Math.round(v))}
        />
      </div>
      <Slider
        label="δ phase"
        value={delta}
        min={0}
        max={Math.PI}
        step={Math.PI / 12}
        onChange={setDelta}
        format={v => `${(v / Math.PI).toFixed(2)} π`}
      />
      <PlayPause
        playing={playing}
        onToggle={() => setPlaying(p => !p)}
        onReset={() => {
          setPlaying(false)
          setT(0)
        }}
      />
    </div>
  )
}
export function Nli_PendulumPhasePlane() {
  const C = useVizColors()
  // analytic level curve P = ±sqrt(2(E + cos θ)) for the conserved energy
  // E = ½P² − cos θ. One helper drives the faint background family AND the
  // bright orbit the dragged initial condition rides on: same physics, no fakery.
  const contour = (E, sgn) => {
    const out = []
    for (let k = 0; k <= 400; k++) {
      const th = -Math.PI * 1.4 + (2.8 * Math.PI * k) / 400
      const r = 2 * (E + Math.cos(th))
      if (r >= 0) out.push([th, sgn * Math.sqrt(r)])
      else if (out.length) break
    }
    return out
  }
  // wrap an unbounded angle into (−π, π] so a whirling rotation orbit re-enters from the edge
  const wrapAngle = th => th - 2 * Math.PI * Math.round(th / (2 * Math.PI))

  const DEFAULT_IC = [2.0, 0]
  const [ic, setIc] = React.useState(DEFAULT_IC)
  const E = 0.5 * ic[1] * ic[1] - Math.cos(ic[0])
  const regime = E > 1.02 ? 'ROTATION' : E < 0.98 ? 'LIBRATION' : 'SEPARATRIX'

  // live marker: integrate the real pendulum from the chosen state so it slows
  // at the turning points and sweeps fast through the bottom: the dynamics ARE
  // the lesson, not a constant-speed loop.
  const f = (_, y) => [y[1], -Math.sin(y[0])]
  const initial = React.useMemo(() => ({ th: DEFAULT_IC[0], p: DEFAULT_IC[1], t: 0 }), [])
  const step = (s, dt) => {
    if (!dt) return s
    const n = rk4Step(f, s.t, [s.th, s.p], dt)
    return { th: n[0], p: n[1], t: s.t + dt }
  }
  const [sim, setSim, simCtl] = useSimulation(initial, step)
  const seed = (th, p) => {
    setIc([th, p])
    setSim({ th, p, t: 0 })
  }

  // keep-out zones (data coords) so flow arrows never strike the labels or equilibria
  const zones = [
    { x0: -0.95, x1: 0.95, y0: 1.16, y1: 1.84 }, // LIBRATION
    { x0: 1.0, x1: 3.4, y0: 2.2, y1: 2.95 }, // ROTATION (top-right)
    { x0: -3.4, x1: -1.0, y0: -2.95, y1: -2.2 }, // ROTATION (bottom-left)
    { x0: -4.6, x1: -3.0, y0: 2.45, y1: 3.05 } // equation
  ]
  const eq = [
    [0, 0],
    [Math.PI, 0],
    [-Math.PI, 0]
  ]
  const blocked = (th, p) => {
    for (const z of zones) if (th > z.x0 && th < z.x1 && p > z.y0 && p < z.y1) return true
    for (const [ex, ey] of eq) if (Math.hypot(th - ex, p - ey) < 0.5) return true
    return false
  }
  const flow = []
  for (let th = -Math.PI * 1.3; th <= Math.PI * 1.3; th += 0.62)
    for (let p = -2.5; p <= 2.5; p += 0.62) {
      if (blocked(th, p)) continue
      const dth = p,
        dp = -Math.sin(th)
      const n = Math.hypot(dth, dp) || 1
      flow.push([th, p, (dth / n) * 0.22, (dp / n) * 0.22])
    }

  // background family: faint, secondary. Separatrix (E=1) is the one bright dashed boundary.
  const Es = [-0.7, -0.3, 0, 0.5, 1.0, 1.5, 2]

  // the selected orbit through the dragged initial condition (primary, bright)
  const selUpper = contour(E, +1)
  const selLower = contour(E, -1)

  // live integrated state, wrapped for display, plus its velocity tangent
  const mTh = wrapAngle(sim.th)
  const mP = sim.p
  const vN = Math.hypot(mP, -Math.sin(sim.th)) || 1
  const mDir = [(mP / vN) * 0.55, (-Math.sin(sim.th) / vN) * 0.55]
  const moving = simCtl.playing

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Plot
        color={C.fg}
        xRange={[-Math.PI * 1.4, Math.PI * 1.4]}
        yRange={[-3, 3]}
        width={680}
        height={340}
      >
        <Axes step={1} showGrid={false} />

        {/* TERTIARY: the velocity field: direction at every point in the plane */}
        {flow.map(([th, p, dth, dp], i) => (
          <Arrow
            key={i}
            from={[th, p]}
            to={[th + dth, p + dp]}
            color={C.faint}
            head={3}
            strokeWidth={0.6}
          />
        ))}

        {/* SECONDARY: the constant-energy family + the separatrix boundary */}
        {Es.map((Ev, i) => {
          const isSep = Math.abs(Ev - 1) < 0.05
          return (
            <React.Fragment key={i}>
              <Polyline
                points={contour(Ev, +1)}
                color={isSep ? C.fg : C.dim}
                strokeWidth={isSep ? 1.6 : 1}
                dash={isSep ? '3 3' : undefined}
                opacity={isSep ? OPACITY.fg : OPACITY.faint * 1.6}
              />
              <Polyline
                points={contour(Ev, -1)}
                color={isSep ? C.fg : C.dim}
                strokeWidth={isSep ? 1.6 : 1}
                dash={isSep ? '3 3' : undefined}
                opacity={isSep ? OPACITY.fg : OPACITY.faint * 1.6}
              />
            </React.Fragment>
          )
        })}

        {/* PRIMARY: the orbit the chosen initial condition actually traces */}
        {regime !== 'SEPARATRIX' && (
          <React.Fragment>
            <Polyline points={selUpper} color={C.fg} strokeWidth={2} />
            <Polyline points={selLower} color={C.fg} strokeWidth={2} />
          </React.Fragment>
        )}

        {/* fixed points: filled center (stable), open saddles at ±π (unstable) */}
        <Dot x={0} y={0} r={3.5} color={C.fg} />
        <Dot x={Math.PI} y={0} r={3.5} fill={false} color={C.fg} />
        <Dot x={-Math.PI} y={0} r={3.5} fill={false} color={C.fg} />

        {/* live integrated state: where the pendulum is right now + its velocity */}
        {moving && (
          <React.Fragment>
            <Arrow
              from={[mTh, mP]}
              to={[mTh + mDir[0], mP + mDir[1]]}
              color={C.fg}
              head={6}
              strokeWidth={1.4}
            />
            <Dot x={mTh} y={mP} r={4} color={C.fg} />
          </React.Fragment>
        )}

        {/* draggable initial condition */}
        <DragHandle
          x={ic[0]}
          y={ic[1]}
          onChange={seed}
          r={5}
          constrain={(x, y) => [
            Math.max(-Math.PI * 1.32, Math.min(Math.PI * 1.32, x)),
            Math.max(-2.85, Math.min(2.85, y))
          ]}
          label="start"
        />

        <Tex
          at={[-Math.PI * 1.35, 2.8]}
          tex={`\\ddot\\theta = -\\sin\\theta`}
          size={FONT_LABEL}
          color={C.dim}
        />
        <Label at={[Math.PI * 1.3, 0]} dy={-6} anchor="end">
          θ
        </Label>
        <Label at={[0, 2.9]} dx={6}>
          P
        </Label>
        <Label at={[0, 1.5]} anchor="middle" opacity={OPACITY.faint * 1.8}>
          LIBRATION
        </Label>
        <Label at={[2.2, 2.55]} anchor="middle" opacity={OPACITY.faint * 1.8}>
          ROTATION
        </Label>
        <Label at={[-2.2, -2.55]} anchor="middle" opacity={OPACITY.faint * 1.8}>
          ROTATION
        </Label>
      </Plot>

      <div
        style={{
          display: 'flex',
          gap: 28,
          alignItems: 'baseline',
          justifyContent: 'center',
          marginTop: 14,
          fontFamily: "'D-DIN', ui-monospace, monospace",
          fontSize: FONT_LABEL,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: C.fg
        }}
      >
        <span style={{ opacity: 0.45 }}>
          Energy&nbsp;&nbsp;
          <span style={{ opacity: 0.9, fontVariantNumeric: 'tabular-nums' }}>
            {`E = ${E.toFixed(2)}`}
          </span>
        </span>
        <span style={{ opacity: 0.45 }}>
          Regime&nbsp;&nbsp;<span style={{ opacity: 0.9 }}>{regime}</span>
        </span>
        <span style={{ opacity: 0.45 }}>
          {regime === 'LIBRATION' ? 'Amplitude' : 'Turning'}&nbsp;&nbsp;
          <span style={{ opacity: 0.9, fontVariantNumeric: 'tabular-nums' }}>
            {regime === 'LIBRATION'
              ? `θmax = ${((Math.acos(Math.max(-1, Math.min(1, -E))) * 180) / Math.PI).toFixed(0)}°`
              : regime === 'ROTATION'
                ? 'never stops'
                : 'θ → ±180°'}
          </span>
        </span>
      </div>

      <Slider
        label="energy E"
        value={E}
        min={-0.8}
        max={2.2}
        step={0.02}
        onChange={Ev => seed(0, Math.sqrt(Math.max(0, 2 * (Ev + 1))))}
        format={v => v.toFixed(2)}
      />
      <PlayPause
        playing={simCtl.playing}
        onToggle={() => simCtl.setPlaying(!simCtl.playing)}
        onReset={() => {
          simCtl.setPlaying(false)
          seed(DEFAULT_IC[0], DEFAULT_IC[1])
        }}
        label="drag the point or dial energy · play to release"
      />
    </div>
  )
}
export function Nli_WedgeConstraint() {
  const C = useVizColors()
  const [angDeg, setAng] = React.useState(35)
  const [arel, setArel] = React.useState(1.25)
  const ang = (angDeg * Math.PI) / 180
  // Wedge: vertical face on the LEFT, incline descending to the RIGHT, so the
  // picture matches x - X = (h - y) cot θ exactly. θ sits at the base-right corner.
  const L = 3.4 // incline (hypotenuse) length, fixed so the block stays framed
  const H = L * Math.sin(ang) // wedge height (h)
  const B = L * Math.cos(ang) // wedge base
  const apex = [0, H]
  const br = [B, 0]
  const u = [Math.cos(ang), -Math.sin(ang)] // down-slope unit (down + right)
  const nrm = [Math.sin(ang), Math.cos(ang)] // outward face normal (up + right)
  // Block riding the face at fraction f from the apex.
  const f = 0.3
  const hw = 0.34,
    hh = 0.18
  const P = [apex[0] + f * (br[0] - apex[0]), apex[1] + f * (br[1] - apex[1])]
  const Cc = [P[0] + nrm[0] * hh, P[1] + nrm[1] * hh] // block centre
  // Relative-acceleration vector down the face, magnitude ∝ slide rate s̈.
  const m = arel
  const tip = [Cc[0] + u[0] * m, Cc[1] + u[1] * m]
  const legH = m * Math.cos(ang) // |ẍ - Ẍ|  (horizontal leg)
  const legV = m * Math.sin(ang) // |ÿ|       (vertical leg)
  const cot = legH / legV // = cot θ, exactly
  const arc = (cx, cy, r, a0, a1, nn = 16) =>
    Array.from({ length: nn + 1 }, (_, i) => {
      const a = a0 + ((a1 - a0) * i) / nn
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
    })
  const d = 0.16 // right-angle marker size

  // Decomposition triangle (right zone): reshapes with θ so the leg ratio IS
  // cot θ, and scales (clamped) with the slide rate so it echoes the scene arrow
  // without overrunning the equation block below it.
  const Q = [4.5, 2.95] // top-left vertex: the block transposed into clear air
  const tsc = Math.max(0.9, Math.min(2.35, 1.3 * m)) // triangle scale tracks the slide rate
  const R2 = [Q[0] + tsc * Math.cos(ang), Q[1]] // right-angle corner
  const tip2 = [R2[0], Q[1] - tsc * Math.sin(ang)] // foot of the vertical leg

  return (
    <div>
      <Plot color={C.fg} xRange={[-2, 8.6]} yRange={[-2.0, 3.3]} width={720} height={378}>
        {/* ===== ZONE L: physical scene ===== */}
        {/* ground */}
        <Polyline
          points={[
            [-2, 0],
            [B + 1.2, 0]
          ]}
          color={C.dim}
        />
        {/* wedge body: tertiary, recedes */}
        <Polyline points={[[0, 0], br, apex, [0, 0]]} closed fillOpacity={0.05} color={C.dim} />
        {/* wedge angle θ at the base-right corner */}
        <Polyline points={arc(br[0], br[1], 0.6, Math.PI - ang, Math.PI)} color={C.dim} />
        <Tex
          at={[br[0] + 0.85 * Math.cos(Math.PI - ang / 2), 0.85 * Math.sin(ang / 2)]}
          tex={`\\theta`}
          size={FONT_TEX}
          anchor="middle"
          color={C.dim}
        />
        {/* block on the face: primary object */}
        <Polyline
          points={[
            [Cc[0] - u[0] * hw - nrm[0] * hh, Cc[1] - u[1] * hw - nrm[1] * hh],
            [Cc[0] + u[0] * hw - nrm[0] * hh, Cc[1] + u[1] * hw - nrm[1] * hh],
            [Cc[0] + u[0] * hw + nrm[0] * hh, Cc[1] + u[1] * hw + nrm[1] * hh],
            [Cc[0] - u[0] * hw + nrm[0] * hh, Cc[1] - u[1] * hw + nrm[1] * hh]
          ]}
          closed
          fillOpacity={0.22}
          strokeWidth={1.4}
          color={C.fg}
        />
        {/* relative slide s̈: hero vector, straight down the face */}
        <Arrow from={Cc} to={tip} color={C.fg} strokeWidth={2} head={9} />
        <Tex
          at={[(Cc[0] + tip[0]) / 2 + nrm[0] * 0.34, (Cc[1] + tip[1]) / 2 + nrm[1] * 0.34]}
          tex={`\\ddot s`}
          size={FONT_CONTROL}
          anchor="middle"
          color={C.fg}
        />
        {/* resolve the slide on the block itself: horizontal (ẍ - Ẍ) then vertical (ÿ) -
            the very right triangle the abstract diagram transposes into clear air */}
        <Polyline
          points={[Cc, [tip[0], Cc[1]], tip]}
          color={C.dim}
          opacity={OPACITY.dim}
          dash="4 3"
          strokeWidth={1}
        />
        <Polyline
          points={[
            [tip[0] - d, Cc[1]],
            [tip[0] - d, Cc[1] - d],
            [tip[0], Cc[1] - d]
          ]}
          color={C.dim}
        />
        {/* wedge acceleration Ẍ: the external driver, tucked under the base */}
        <Arrow from={[0.2, -0.7]} to={[1.9, -0.7]} color={C.accent} strokeWidth={1.7} head={8} />
        <Tex at={[1.9, -0.7]} dx={8} dy={4} tex={`\\ddot X`} size={FONT_CONTROL} color={C.accent} />
        <Label at={[1.05, -1.15]} anchor="middle" size={FONT_SMALL}>
          WEDGE ACCELERATES
        </Label>

        {/* ===== ZONE R: decomposition triangle (similar to the wedge) ===== */}
        {/* horizontal leg  ẍ - Ẍ */}
        <Polyline points={[Q, R2]} color={C.accent} dash="4 3" />
        {/* vertical leg  ÿ */}
        <Polyline points={[R2, tip2]} color={C.accent} dash="4 3" />
        {/* right-angle marker */}
        <Polyline
          points={[
            [R2[0] - d, R2[1]],
            [R2[0] - d, R2[1] - d],
            [R2[0], R2[1] - d]
          ]}
          color={C.dim}
        />
        {/* hypotenuse s̈: same weight as the scene arrow, links the two */}
        <Arrow from={Q} to={tip2} color={C.fg} strokeWidth={2} head={9} />
        {/* faint similarity connector: ties the wedge's θ to the triangle's θ
            so the learner reads them as the SAME angle, not two coincidences */}
        <Polyline
          points={[
            [br[0], br[1]],
            [Q[0], Q[1]]
          ]}
          color={C.faint}
          opacity={0.25}
          strokeWidth={0.5}
          dash="4 3"
        />
        {/* angle θ: the same angle as the wedge */}
        <Polyline points={arc(Q[0], Q[1], 0.5, -ang, 0)} color={C.dim} />
        <Tex
          at={[Q[0] + 0.8 * Math.cos(ang / 2), Q[1] - 0.8 * Math.sin(ang / 2)]}
          tex={`\\theta`}
          size={FONT_TEX}
          anchor="middle"
          color={C.dim}
        />
        {/* leg + hypotenuse labels */}
        <Tex
          at={[(Q[0] + R2[0]) / 2, R2[1]]}
          dy={-8}
          tex={`\\ddot x - \\ddot X`}
          size={FONT_TEX}
          anchor="middle"
          color={C.fg}
        />
        <Tex
          at={[R2[0], (R2[1] + tip2[1]) / 2]}
          dx={8}
          tex={`\\ddot y`}
          size={FONT_TEX}
          color={C.fg}
        />
        <Tex
          at={[(Q[0] + tip2[0]) / 2 - 0.45, (Q[1] + tip2[1]) / 2 - 0.1]}
          tex={`\\ddot s`}
          size={FONT_CONTROL}
          anchor="middle"
          color={C.fg}
        />

        {/* ===== constraint + live proof, beneath the triangle ===== */}
        <Tex
          at={[4.5, 0.45]}
          tex={`\\ddot x - \\ddot X = -\\ddot y\\,\\cot\\theta`}
          size={FONT_CONTROL}
        />
        <Polyline
          points={[
            [4.5, 0.1],
            [7.9, 0.1]
          ]}
          color={C.faint}
        />
        <Tex
          at={[4.5, -0.2]}
          tex={`\\cot\\theta = ${cot.toFixed(2)}`}
          size={FONT_LABEL}
          color={C.dim}
        />
        <Tex
          at={[4.5, -0.55]}
          tex={`\\ddot x - \\ddot X = ${legH.toFixed(2)}`}
          size={FONT_LABEL}
          color={C.dim}
        />
        <Tex
          at={[4.5, -0.9]}
          tex={`\\ddot y = -${legV.toFixed(2)}`}
          size={FONT_LABEL}
          color={C.dim}
        />
        <Tex
          at={[4.5, -1.3]}
          tex={`\\dfrac{\\ddot x - \\ddot X}{-\\ddot y} = ${(legH / legV).toFixed(2)} = \\cot\\theta`}
          size={FONT_LABEL}
        />
        <Label at={[4.5, -1.9]} size={FONT_SMALL}>
          SAME ANGLE AS THE WEDGE
        </Label>
      </Plot>
      <Slider
        label="θ"
        value={angDeg}
        min={15}
        max={70}
        step={1}
        onChange={setAng}
        format={v => v.toFixed(0) + '°'}
      />
      <Slider
        label="s̈ · slide rate"
        value={arel}
        min={0.5}
        max={1.9}
        step={0.05}
        onChange={setArel}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}
// 01.2.14 Action-Reaction Pair: the third law, computed. Slide the interaction
// strength F: both reaction arrows recompute equal in length, opposite in direction,
// always. Slide the masses to see the payoff: equal forces, unequal accelerations
// a = F/m, because the two forces act on DIFFERENT bodies and so never cancel.
export function Nli_ActionReaction() {
  const C = useVizColors()
  const [F, setF] = React.useState(6)
  const [mA, setMA] = React.useState(2)
  const [mB, setMB] = React.useState(5)

  const F_MAX = 10
  const aA = F / mA
  const aB = F / mB
  const fLen = (F / F_MAX) * 2.1
  const r2 = v => (Math.round(v * 100) / 100).toFixed(2)

  const boxA = [
    [-2.7, -0.65],
    [-0.12, -0.65],
    [-0.12, 0.65],
    [-2.7, 0.65]
  ]
  const boxB = [
    [0.12, -0.65],
    [2.7, -0.65],
    [2.7, 0.65],
    [0.12, 0.65]
  ]

  return (
    <div>
      <Plot color={C.fg} xRange={[-3.25, 3.25]} yRange={[-1.6, 1.4]} width={700} height={360}>
        <Polyline points={boxA} closed fillOpacity={0.13} color={C.dim} />
        <Polyline points={boxB} closed fillOpacity={0.13} color={C.dim} />

        <Polyline
          points={[
            [0, -0.72],
            [0, 0.72]
          ]}
          color={C.faint}
          dash="3 3"
        />

        <Arrow from={[-0.12, 0]} to={[-0.12 - fLen, 0]} color={C.fg} strokeWidth={2} />
        <Arrow from={[0.12, 0]} to={[0.12 + fLen, 0]} color={C.fg} strokeWidth={2} />

        <Tex
          at={[-0.12 - fLen / 2, 0.24]}
          tex={`\\mathbf{F}_{B\\to A}`}
          size={FONT_TEX}
          anchor="middle"
          color={C.fg}
        />
        <Tex
          at={[0.12 + fLen / 2, 0.24]}
          tex={`\\mathbf{F}_{A\\to B}`}
          size={FONT_TEX}
          anchor="middle"
          color={C.fg}
        />

        <Tex
          at={[-1.4, -0.18]}
          tex={`m_A = ${mA.toFixed(1)}\\,\\text{kg}`}
          size={FONT_LABEL}
          anchor="middle"
          color={C.fg}
        />
        <Tex
          at={[-1.4, -0.52]}
          tex={`a_A = ${r2(aA)}\\,\\text{m/s}^2`}
          size={FONT_LABEL}
          anchor="middle"
          color={C.fg}
        />
        <Tex
          at={[1.4, -0.18]}
          tex={`m_B = ${mB.toFixed(1)}\\,\\text{kg}`}
          size={FONT_LABEL}
          anchor="middle"
          color={C.fg}
        />
        <Tex
          at={[1.4, -0.52]}
          tex={`a_B = ${r2(aB)}\\,\\text{m/s}^2`}
          size={FONT_LABEL}
          anchor="middle"
          color={C.fg}
        />

        <Tex
          at={[0, -1.3]}
          tex={`|\\mathbf{F}_{B\\to A}| = |\\mathbf{F}_{A\\to B}| = ${F.toFixed(1)}\\,\\text{N}`}
          size={FONT_CONTROL}
          anchor="middle"
          color={C.fg}
        />
      </Plot>

      <Slider
        label="F"
        value={F}
        min={1}
        max={F_MAX}
        step={0.5}
        onChange={setF}
        format={v => v.toFixed(1) + ' N'}
      />
      <Slider
        label="mA"
        value={mA}
        min={1}
        max={10}
        step={0.5}
        onChange={setMA}
        format={v => v.toFixed(1) + ' kg'}
      />
      <Slider
        label="mB"
        value={mB}
        min={1}
        max={10}
        step={0.5}
        onChange={setMB}
        format={v => v.toFixed(1) + ' kg'}
      />
    </div>
  )
}
export function Nli_InverseSquareGravity() {
  const C = useVizColors()
  // Normalize so the surface crossing is exact by construction:
  //   x = r / R_e  (distance from Earth's centre, in Earth radii)
  //   y = F / mg   (weight as a fraction of surface weight)
  // True force on a test mass for a uniform-density sphere is ONE continuous curve:
  //   inside  (x ≤ 1):  y = x      → shell theorem, F = GM_e m·r / R_e³  (linear)
  //   outside (x ≥ 1):  y = 1/x²   → inverse-square law
  // It peaks at the surface (1, 1). The uniform-field model is the flat line y = 1,
  // which is only correct at that single point.
  const xMax = 4.4
  const clampX = v => Math.max(0.05, Math.min(xMax, v))
  const prof = v => (v <= 1 ? v : 1 / (v * v)) // true weight ÷ mg, both regimes
  const [x, setX] = React.useState(1.5)

  const inside = x < 1
  const trueFrac = prof(x) // true weight ÷ mg at the dragged distance
  // overestimate: how much more the uniform-mg model predicts vs truth
  //   inside:  uniform says 1, truth says x  → overestimate = (1/x − 1)×100 %
  //   outside: uniform says 1, truth says 1/x² → overestimate = (x²  − 1)×100 %
  const overEstPct = (inside ? 1 / x - 1 : x * x - 1) * 100

  // Accumulated overestimate region: polygon between the mg=1 line and the true curve,
  // from the surface to the dragged point. Hoisted to const (avoids inline spread crash).
  const gapPts = inside
    ? (() => {
        const pts = [
          [x, 1],
          [1, 1]
        ]
        for (let i = 0; i <= 48; i++) {
          const xx = 1 - ((1 - x) * i) / 48
          pts.push([xx, xx])
        }
        return pts
      })()
    : (() => {
        const pts = [
          [1, 1],
          [x, 1]
        ]
        for (let i = 0; i <= 48; i++) {
          const xx = x - ((x - 1) * i) / 48
          pts.push([xx, 1 / (xx * xx)])
        }
        return pts
      })()

  // Real Earth interior from PREM, normalized to surface g (= 1). Gravity rises
  // through the dense core to a peak g/g_surf ≈ 1.087 at the core–mantle boundary
  // (r ≈ 0.547 R_e), then stays near 1 across the mantle. Outside the sphere it is
  // 1/x² regardless of internal density, so the real curve only diverges inside.
  const prem = [
    [0, 0],
    [0.19, 0.45],
    [0.3, 0.69],
    [0.4, 0.88],
    [0.547, 1.087],
    [0.6, 1.07],
    [0.7, 1.02],
    [0.8, 1.01],
    [0.9, 1.0],
    [1, 1]
  ]
  const xRadii = x.toFixed(2)

  return (
    <Plot color={C.fg} xRange={[-0.55, 4.95]} yRange={[-0.28, 1.65]} width={680} height={360}>
      <Axes step={1} showGrid={false} />

      {/* interior tint */}
      <Polyline
        points={[
          [0, -0.28],
          [1, -0.28],
          [1, 1.65],
          [0, 1.65]
        ]}
        closed
        color={C.fg}
        fillOpacity={0.06}
        strokeWidth={0}
      />
      <Label at={[0.5, 1.5]} anchor="middle" opacity={OPACITY.dim}>
        INSIDE EARTH
      </Label>

      {/* accent gap region between the mg = 1 model and the true curve, from
          the surface to the dragged point — the area the "mg OVER" readout
          quantifies */}
      <Polyline points={gapPts} closed color={C.accent} fillOpacity={0.1} strokeWidth={0} />

      {/* mg uniform line */}
      <Polyline
        points={[
          [0, 1],
          [xMax + 0.3, 1]
        ]}
        color={C.dim}
        strokeWidth={1.2}
        dash="5 4"
      />
      <Tex
        at={[xMax + 0.2, 1]}
        dy={-13}
        tex={`mg`}
        size={FONT_LABEL}
        anchor="middle"
        color={C.dim}
      />

      {/* true force curve */}
      <Polyline
        points={[
          [0, 0],
          [1, 1]
        ]}
        color={C.fg}
        strokeWidth={2.2}
      />
      <Parametric
        xy={r => [r, 1 / (r * r)]}
        t={[1, xMax + 0.3]}
        samples={400}
        color={C.fg}
        strokeWidth={2.2}
      />

      {/* SECONDARY: real Earth interior (PREM), normalized to surface g = 1.
          Rises past 1 to a peak at the core–mantle boundary, then back to (1, 1). */}
      <Polyline points={prem} color={C.dim} strokeWidth={1.4} opacity={0.6} />
      <Tex
        at={[0.547, 1.087]}
        dx={4}
        dy={-8}
        tex={`\\text{PREM}`}
        size={FONT_SMALL}
        anchor="start"
        color={C.dim}
      />

      {/* surface marker */}
      <Polyline
        points={[
          [1, 0],
          [1, 1]
        ]}
        color={C.faint}
        dash="2 3"
      />
      <Dot x={1} y={1} r={4} color={C.fg} />
      <Dot x={0} y={0} r={3} color={C.fg} opacity={OPACITY.dim} />

      {/* drag handle */}
      <DragHandle
        x={x}
        y={trueFrac}
        onChange={nx => setX(clampX(nx))}
        constrain={nx => {
          const c = clampX(nx)
          return [c, prof(c)]
        }}
      />

      {/* axis ticks */}
      <Tex at={[0, 0]} dy={16} tex={`0`} size={FONT_LABEL} anchor="middle" color={C.dim} />
      <Tex at={[1, 0]} dy={16} tex={`R_e`} size={FONT_LABEL} anchor="middle" color={C.dim} />
      <Tex at={[2, 0]} dy={16} tex={`2R_e`} size={FONT_LABEL} anchor="middle" color={C.dim} />
      <Tex at={[3, 0]} dy={16} tex={`3R_e`} size={FONT_LABEL} anchor="middle" color={C.dim} />
      <Tex at={[4, 0]} dy={16} tex={`4R_e`} size={FONT_LABEL} anchor="middle" color={C.dim} />

      {/* curve labels */}
      <Tex at={[0.42, 0.75]} tex={`F \\propto r`} size={FONT_LABEL} anchor="middle" color={C.fg} />
      <Tex at={[2.55, 0.37]} tex={`\\dfrac{GM_e m}{r^2}`} size={FONT_TEX} color={C.fg} />

      {/* inline readout */}
      <Polyline
        points={[
          [-0.55, -0.08],
          [4.95, -0.08]
        ]}
        color={C.faint}
        opacity={0.4}
      />
      {/* readout sits clear of the R_e tick column (x ≈ 1) and 4px lower than
          the tick row so the two text bands never meet */}
      <Label at={[0.35, -0.23]} anchor="middle" opacity={1}>
        {xRadii} Rₑ
      </Label>
      <Label at={[2.75, -0.23]} anchor="middle" opacity={1}>
        TRUE WEIGHT {(trueFrac * 100).toFixed(1)}%
      </Label>
      <Label at={[4.2, -0.23]} anchor="middle" color={C.accent} opacity={1}>
        mg OVER +{overEstPct.toFixed(overEstPct < 100 ? 1 : 0)}%
      </Label>
    </Plot>
  )
}
export function Nli_InclineBlock() {
  const C = useVizColors()
  const [angDeg, setAng] = React.useState(27)
  const [mu, setMu] = React.useState(0.23)
  const ang = (angDeg * Math.PI) / 180
  const sin = Math.sin(ang)
  const cos = Math.cos(ang)
  const g = 1.5 // weight magnitude in plot units: every arrow scales from this
  // force magnitudes: all proportional to the weight g, so lengths are honest ratios
  const Nm = g * cos // normal force = perpendicular weight component
  const Wpar = g * sin // along-slope weight component (the drive)
  const fmax = mu * Nm // static-friction ceiling = kinetic grip once moving
  const slipping = Wpar > fmax + 1e-9
  const net = slipping ? Wpar - fmax : 0 // uncancelled drive → drives a
  const thetaC = (Math.atan(mu) * 180) / Math.PI
  // drive-vs-grip race curves: drive(θ)=sinθ rises, grip(θ)=μcosθ falls,
  // crossing exactly at θc = arctan μ (the angle of repose).
  const D2R = Math.PI / 180
  const driveAt = d => Math.sin(d * D2R)
  const gripAt = d => mu * Math.cos(d * D2R)
  const yc = driveAt(thetaC) // crossing height = sin θc = grip at θc

  return (
    <div>
      {/* Drive-vs-grip race curve */}
      <Plot color={C.fg} xRange={[-11, 81]} yRange={[-0.38, 1.52]} width={700} height={240}>
        {/* slip zone: θ beyond the critical angle */}
        <Polyline
          points={[
            [thetaC, -0.38],
            [75, -0.38],
            [75, 1.52],
            [thetaC, 1.52]
          ]}
          closed
          color={C.accent}
          fillOpacity={0.07}
          strokeWidth={0}
        />
        {/* angle axis + degree ticks */}
        <Polyline
          points={[
            [0, 0],
            [75, 0]
          ]}
          color={C.dim}
        />
        {[0, 15, 30, 45, 60, 75].map(d => (
          <Polyline
            key={`t${d}`}
            points={[
              [d, 0],
              [d, -0.04]
            ]}
            color={C.faint}
          />
        ))}
        {[0, 15, 30, 45, 60, 75].map(d => (
          <Label
            key={`l${d}`}
            at={[d, -0.13]}
            anchor="middle"
            size={FONT_SMALL}
            opacity={0.35}
            color={C.fg}
            upper={false}
          >
            {d + '°'}
          </Label>
        ))}
        {/* y-axis reference lines at 0.5 and 1.0 */}
        <Polyline
          points={[
            [-2, 0.5],
            [0, 0.5]
          ]}
          color={C.faint}
          strokeWidth={1}
        />
        <Polyline
          points={[
            [-2, 1.0],
            [0, 1.0]
          ]}
          color={C.faint}
          strokeWidth={1}
        />
        <Label
          at={[-8, 0.5]}
          anchor="middle"
          size={FONT_SMALL}
          opacity={0.28}
          color={C.fg}
          upper={false}
        >
          0.5
        </Label>
        <Label
          at={[-8, 1.0]}
          anchor="middle"
          size={FONT_SMALL}
          opacity={0.28}
          color={C.fg}
          upper={false}
        >
          1.0
        </Label>
        <Label
          at={[-8, 1.4]}
          anchor="middle"
          size={FONT_SMALL}
          opacity={0.4}
          color={C.fg}
          upper={false}
        >
          ÷ mg
        </Label>

        {/* the two competing curves */}
        <Parametric xy={a => [a, gripAt(a)]} t={[0, 75]} color={C.accent} strokeWidth={1.8} />
        <Parametric xy={a => [a, driveAt(a)]} t={[0, 75]} color={C.fg} strokeWidth={1.8} />

        {/* crossing = critical angle (angle of repose) */}
        <Polyline
          points={[
            [thetaC, 0],
            [thetaC, yc]
          ]}
          dash="2 3"
          color={C.accent}
          opacity={OPACITY.dim}
        />
        <Dot x={thetaC} y={yc} r={4} color={C.accent} />
        <Label
          at={[thetaC, -0.28]}
          anchor="middle"
          size={FONT_LABEL}
          color={C.accent}
          upper={false}
        >
          {'θc = ' + thetaC.toFixed(1) + '°'}
        </Label>

        {/* live cursor at the current θ: vertical caret + dots riding each curve */}
        <Polyline
          points={[
            [angDeg, 0],
            [angDeg, Math.max(sin, mu * cos)]
          ]}
          color={slipping ? C.accent : C.fg}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [angDeg - 1.4, -0.085],
            [angDeg + 1.4, -0.085],
            [angDeg, 0]
          ]}
          closed
          color={slipping ? C.accent : C.fg}
          fillOpacity={1}
          strokeWidth={0}
        />
        <Dot x={angDeg} y={mu * cos} r={3.5} color={C.accent} />
        <Dot x={angDeg} y={sin} r={3.5} color={C.fg} />

        {/* curve labels at spacious end-positions */}
        <Tex
          at={[68, driveAt(68) + 0.2]}
          anchor="middle"
          tex={'mg\\sin\\theta'}
          size={FONT_LABEL}
          color={C.fg}
        />
        <Tex
          at={[10, gripAt(7) + 0.22]}
          anchor="start"
          tex={'\\mu\\,mg\\cos\\theta'}
          size={FONT_LABEL}
          color={C.accent}
        />
      </Plot>

      {/* live condition readout */}
      <div
        style={{
          marginTop: 6,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          gap: 18,
          flexWrap: 'wrap',
          fontFamily: "'D-DIN', ui-monospace, monospace",
          fontSize: FONT_TEX,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: C.fg
        }}
      >
        <span>
          <span style={{ opacity: 0.45 }}>drive&nbsp;</span>
          <span style={{ color: slipping ? C.accent : C.fg, opacity: slipping ? 1 : 0.75 }}>
            {sin.toFixed(3)}&thinsp;mg
          </span>
        </span>
        <span style={{ opacity: 0.45 }}>{slipping ? '>' : '≤'}</span>
        <span>
          <span style={{ opacity: 0.45 }}>grip&nbsp;</span>
          <span style={{ color: slipping ? C.fg : C.accent, opacity: slipping ? 0.75 : 1 }}>
            {(mu * cos).toFixed(3)}&thinsp;mg
          </span>
        </span>
        <span style={{ opacity: 0.45 }}>&rarr;</span>
        <span style={{ color: slipping ? C.accent : C.fg }}>
          {slipping ? 'slipping · a = ' + (net / g).toFixed(3) + ' g' : 'static · block holds'}
        </span>
      </div>

      <Slider
        label="ANG"
        value={angDeg}
        min={0}
        max={75}
        step={1}
        onChange={setAng}
        format={v => v.toFixed(0) + '°'}
      />
      <Slider label={'μ'} value={mu} min={0} max={1.2} step={0.01} onChange={setMu} />
    </div>
  )
}

export default function NewtonsLawsAndEquationsOfMotion() {
  const config = {
    cssPrefix: 'nli',
    documentTitle: "Newton's Laws and Equations of Motion - AETHER",
    learning: {
      category: 'Module 2',
      groupTitle: 'Newtonian Mechanics',
      title: "Newton's Laws and Equations of Motion",
      subtitle:
        "Three laws that govern all motion, plus the mathematical framework for solving them: Newton's equation as a second-order ODE, phase space, phase flow, and energy conservation.",
      sections: [
        /* SECTION 1: WHY NEWTON'S LAWS MATTER
         */
        <>
          <h2>Why Newton's Laws Matter</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>You slide a hockey puck across smooth ice and let go. What happens?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The puck keeps moving in a straight line at almost the same speed.</p>
              <p>Real ice has tiny friction, so it slows over many seconds.</p>
              <p>On perfectly smooth ice in space, the puck would travel forever.</p>
            </details>
          </div>

          <p>
            For two thousand years, the standard answer was: a moving thing needs a push to keep
            moving. Stop pushing the cart and it stops. Stop rowing and the boat drifts to a halt.
            That was Aristotle's view, and it ruled physics until the seventeenth century.
          </p>

          <p>
            Galileo and Newton overturned it. A smooth puck on smooth ice keeps going. Carts and
            boats slow down because of friction, not because they "want" to stop. Remove friction
            and motion never ends on its own.
          </p>

          <p>
            Newton's laws are the tool you reach for any time you need to predict how an everyday
            object moves: a falling apple, a swinging rope, a spring, a planet.
          </p>

          <h3>Aristotle vs Newton</h3>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Aristotle</span>
              <p>A force must keep an object moving.</p>
              <p>The natural state of matter is rest.</p>
              <p>Heavier objects fall faster.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Newton</span>
              <p>A force is only needed to change motion.</p>
              <p>Uniform straight-line motion is the natural state.</p>
              <p>All objects fall at the same rate (in vacuum).</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Newton's view matches every experiment. Smoother ice slows the puck more slowly. A
              better vacuum makes a feather and a hammer fall at the same rate. The closer we get to
              a friction-free world, the more Aristotle's view fails.
            </p>
            <p>The illusion that things "want" to stop is just friction we cannot turn off.</p>
          </div>

          <h3>What This Module Delivers</h3>
          <p>By the end of this module you can do five things you cannot do now.</p>
          <ul className="lrn-list">
            <li>State the three laws and explain what each one says.</li>
            <li>Draw a free-body diagram for any object.</li>
            <li>Predict the motion of blocks, ropes, pulleys, and springs.</li>
            <li>Compute gravitational and electric forces between point objects.</li>
            <li>Analyze motion using phase portraits and energy conservation.</li>
          </ul>
        </>,

        /* SECTION 2: THE THREE LAWS
         */
        <>
          <h2>The Three Laws</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You are floating in deep space far from any star. You give a small push to a wrench.
              What happens to the wrench, and what happens to you?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The wrench drifts away in a straight line at constant speed.</p>
              <p>You drift the opposite way, slower if you are heavier.</p>
              <p>Both motions follow Newton's first and third laws.</p>
            </details>
          </div>

          <p>
            The three laws apply in any inertial frame. Reach for them first, before any specific
            force law.
          </p>

          <h3>The First Law</h3>
          <p>An isolated body moves at constant velocity.</p>
          <p>
            Constant velocity means two things at once: constant speed and constant direction. A
            body at rest stays at rest. A moving body keeps the same speed in a straight line.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Inertial Frame</span>
            <div className="lrn-definition-desc">{`A coordinate system in which an isolated body moves at constant velocity. In such a frame Newton's second law $F = ma$ holds without correction. Any frame moving uniformly relative to an inertial frame is also inertial.`}</div>
          </div>

          <p>
            The first law does more than describe motion. It claims that inertial frames exist at
            all. Without that claim, the second law has nowhere to apply.
          </p>

          <h3>The Second Law</h3>
          <p>The net force on a body equals its mass times its acceleration.</p>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F} = m\\vec{a}$$`}</div>

          <p>
            That equation only has meaning once we say what mass and force are. Both come from a
            single experiment: a stretched rubber band.
          </p>

          <h3>Defining Mass with a Rubber Band</h3>
          <p>
            Stretch a rubber band by a fixed amount. Call that the standard pull. Apply it to body 1
            in free space and measure the acceleration $a_1$. Apply the same pull to body 2 and
            measure $a_2$. Define the mass ratio as:
          </p>

          <div className="lrn-eq">{`$$\\frac{m_2}{m_1} = \\frac{a_1}{a_2}$$`}</div>

          <p>
            Pick body 1 to have unit mass. Then every other mass is fixed by a single measurement.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The ratio comes out the same whatever rubber band you use, and however hard you
              stretch it. That is not a definition we forced; it is a fact about the world. If
              different pulls gave different mass ratios, mass itself would not be a well-defined
              quantity.
            </p>
          </div>

          <h3>Defining Force by Superposition</h3>
          <p>
            One stretched rubber band is a unit force. Two identical rubber bands side by side give
            twice that. Forces in different directions add like arrows: place them head to tail and
            draw the total. This is the law of superposition: forces add as vectors.
          </p>

          <div className="lrn-eq">{`$$\\vec{F}_\\text{net} = \\sum_i \\vec{F}_i = m\\vec{a}$$`}</div>

          <p>
            Superposition, like the mass definition, is something we measure rather than prove. Pull
            a body with two rubber bands at right angles and the resulting acceleration is the
            vector sum of the two individual accelerations. Every time.
          </p>

          <h3>The Third Law</h3>
          <p>If body A pushes body B with force $F$, then B pushes A with force $-F$.</p>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}$$`}</div>

          <p>
            The two forces act on different bodies. They never cancel each other inside one body.
          </p>

          <p>
            Push a wall and the wall pushes back on you just as hard. Both forces are real. One acts
            on the wall; one acts on you. You feel only the one on your hand.
          </p>

          <VizFigure title="Action-Reaction Pair" size="body" aspect="auto">
            <Nli_ActionReaction />
          </VizFigure>

          <h3>Worked Example: Astronauts and Fictitious Forces</h3>
          <p>
            Two spaceships A and B float in deep space. A pencil drifts nearby. Each ship measures
            the pencil's acceleration relative to itself. A reports the pencil at rest. B reports it
            accelerating at $50$ m/s$^2$. The pencil is the same pencil. So which reading is right?
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Set up coordinates in both frames</span>
              <p className="lrn-step-content">{`Let $x_A$ be the pencil's position in A's frame, $x_B$ its position in B's frame, and $X$ the position of B's origin in A's frame.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Relate the two coordinates</span>
              <p className="lrn-step-content">{`By geometry $x_A = x_B + X$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Differentiate twice in time</span>
              <p className="lrn-step-content">{`This gives $\\ddot{x}_A = \\ddot{x}_B + \\ddot{X}$, so the two accelerations differ by $\\ddot{X}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply Newton's second law in each frame</span>
              <p className="lrn-step-content">{`In A: $F_\\text{true} = m\\ddot{x}_A$. In B (if B uses $F = ma$): $F_\\text{apparent} = m\\ddot{x}_B = F_\\text{true} - m\\ddot{X}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Conclude</span>
              <p className="lrn-step-content">{`A is inertial because the isolated pencil floats. The pencil has no real force on it, so $F_\\text{true} = 0$. B reads $50$ m/s$^2$, meaning B itself accelerates at $-50$ m/s$^2$ relative to A.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the floating pencil tell us A is inertial? Form your answer before reading
              on.
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                An isolated pencil has zero real force on it. The first law says zero force gives
                zero acceleration in an inertial frame.
              </p>
              <p>
                A measures zero acceleration, so A obeys the first law without correction. That is
                the definition of inertial.
              </p>
            </details>
          </div>

          <p>
            B's reading is real to B, but no physical body produced it. It is a fictitious force, an
            artifact of working in a frame that is itself accelerating:
          </p>

          <div className="lrn-eq">{`$$\\vec{F}_\\text{fictitious} = -m\\ddot{\\vec{R}}$$`}</div>

          <p>{`Here $m$ is the object's mass and $\\ddot{\\vec{R}}$ is the acceleration of B's frame relative to an inertial frame.`}</p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Inertial Frame</span>
              <p>An isolated body moves at constant velocity.</p>
              <p>$F = ma$ holds with no correction.</p>
              <p>Real forces only.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Non-inertial Frame</span>
              <p>An isolated body appears to accelerate.</p>
              <p>$F = ma$ requires adding a fictitious force.</p>
              <p>Fictitious forces have no third-law partner.</p>
            </div>
          </div>

          <h3>Three Places Where Newton's Laws Stop Working</h3>
          <p>
            The laws are an excellent description of the everyday world, but they fail in three
            regions. Each one marks the edge of where you can trust them.
          </p>

          <ol className="lrn-list">
            <li>
              At speeds close to the speed of light, the laws need a relativistic correction. One
              common form rescales mass by {`$\\dfrac{m_0}{\\sqrt{1 - \\frac{v^2}{c^2}}}$`}. Below
              about $0.1c$, the correction is under one percent and you can ignore it.
            </li>
            <li>
              The laws describe point masses. Extended bodies (anything with size and shape) need
              integrals over the whole body, covered in Module 3.
            </li>
            <li>
              The laws are awkward for continuous fluids and electromagnetic fields. Fields carry
              their own energy and momentum and move on their own. Treat field problems with field
              equations instead.
            </li>
          </ol>
        </>,

        /* SECTION 3: NEWTON'S EQUATION AS AN ODE (Arnold)
         */
        <>
          <h2>Newton's Equation as an ODE</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Newton's second law says {`$\\vec{F} = m\\vec{a}$`}. How many initial conditions do
              you need to predict all future motion?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Two: the initial position and the initial velocity. The second-order ODE{' '}
                {`$\\ddot{x} = \\dfrac{F(x, \\dot{x})}{m}$`} requires exactly one position and one
                velocity to fix a unique solution.
              </p>
            </details>
          </div>

          <p>
            Newton's second law is a second-order ordinary differential equation (an{' '}
            <strong>ODE</strong> is an equation that ties a quantity to its own rates of change).
            Once you see it that way, the whole toolkit for solving ODEs becomes available for
            mechanics.
          </p>

          <h3>Newton's Equation from Symmetry</h3>
          <p>The most general form of Newton's equation is:</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\ddot{x} = F(x, \\dot{x}, t)$$`}</div>
          <p>
            {`$\\ddot{x}$`} is acceleration: the rate of change of velocity, which is itself the
            rate of change of position. {`$x$`} is position, {`$\\dot{x}$`} is velocity, {`$t$`} is
            time. The equation says that acceleration equals some force function {`$F$`} that could,
            in principle, depend on all three.
          </p>
          <p>
            Vectors, Kinematics, and Galilean Structure works through what shape {`$F$`} can take.
            The symmetries of space and time (the same physics at every time, place, and direction)
            strip {`$F$`} down. Forces can depend only on the differences between positions and
            velocities, never on raw values, and they must turn the same way as the arrows when you
            rotate the setup. With one particle there are no differences left, so {`$F = 0$`} and{' '}
            {`$\\ddot{x} = 0$`}: that is Newton's first law, derived rather than assumed. We take
            that result as given here and put it to work.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>
              The relativity principle applies only to closed systems. If you isolate part of a
              larger system, the rest acts as an external influence. The equation of motion for the
              isolated part can then depend on time explicitly.
            </p>
          </div>

          <h3>Examples of Mechanical Systems</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A spring pulls a mass back toward its rest position with a force that grows in
              proportion to how far you stretched it. What kind of motion do you expect: bounded,
              unbounded, decaying, growing?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Bounded oscillation. The mass swings back and forth around the rest position forever
                (with no friction). The equation turns out to be {`$\\ddot{x} = -\\alpha^2 x$`}, and
                the picture in the phase plane is a closed loop.
              </p>
            </details>
          </div>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Falling Stone (Uniform Gravity)</span>
              <p>{`$$\\ddot{x} = -g,\\quad U = gx$$`}</p>
              <p>
                Constant gravitational field near Earth's surface. Valid when{' '}
                {`$r \\ll r_{\\text{Earth}}$`}.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Inverse-Square Gravity</span>
              <p>{`$$\\ddot{x} = -g\\frac{r_0^2}{r^2},\\quad U = -\\frac{k}{r}$$`}</p>
              <p>
                Used for large distances. Force weakens as {`$\\frac{1}{r^2}$`}. Models planetary
                orbits.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Harmonic Oscillator</span>
              <p>{`$$\\ddot{x} = -\\alpha^2 x,\\quad U = \\tfrac{\\alpha^2 x^2}{2}$$`}</p>
              <p>Spring-mass system. Solutions are sinusoidal. Phase curves are ellipses.</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the negative sign in {`$\\ddot{x} = -\\alpha^2 x$`} guarantee oscillation?
              What would happen if the sign were positive?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The negative sign creates a restoring force: displacement in one direction produces
                acceleration in the opposite direction. If the sign were positive, displacement
                would create acceleration in the same direction, causing exponential runaway growth
                instead of oscillation.
              </p>
            </details>
          </div>

          <p>
            A system is called <strong>conservative</strong> if every force in it comes from a
            single shared function {`$U(x_1, \\ldots, x_n)$`} called the{' '}
            <strong>potential energy</strong>. For such a system of {`$n$`} particles with masses{' '}
            {`$m_i$`}:
          </p>
          <div className="lrn-eq">
            {`$$m_i \\ddot{x}_i = -\\frac{\\partial U}{\\partial x_i}, \\quad i = 1, \\ldots, n$$`}
          </div>
          <p>
            {`$\\frac{\\partial U}{\\partial x_i}$`} reads "how steeply {`$U$`} changes when
            particle {`$i$`} moves." The minus sign means the force on each particle points downhill
            on the energy landscape, toward lower potential.
          </p>

          <p>
            Picture a billiard table frozen at one instant. Record every ball's position and speed.
            From that snapshot you can predict every future collision. The one requirement: the
            force function must be smooth, with no sudden jumps.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Principle of Determinacy</span>
            <div className="lrn-definition-desc">
              <p>
                Vectors, Kinematics, and Galilean Structure showed why this makes Newton's equation
                second-order. Here we use the consequence for solving: the ODE{' '}
                {`$\\ddot{x} = F(x, \\dot{x})$`} together with the initial state{' '}
                {`$(x_0, \\dot{x}_0)$`}
                (position {`$x_0$`} and velocity {`$\\dot{x}_0$`} at time zero) has a unique
                solution, provided {`$F$`} is smooth.
              </p>
            </div>
          </div>
        </>,

        /* SECTION 4: PHASE PLANE AND INTEGRATION (Arnold Ch.2)
         */
        <>
          <h2>Phase Plane and Integration</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A ball rolls in a bowl with potential energy {`$U(x)$`}. It starts near the bottom. Do
              you expect it to oscillate forever, escape, or do something else? How would a phase
              plane diagram show these possibilities?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It oscillates. The phase portrait shows closed loops (energy level sets) around the
                stable minimum. Escape requires enough energy to surpass the local maximum of{' '}
                {`$U$`}.
              </p>
            </details>
          </div>

          <h3>Systems with One Degree of Freedom</h3>
          <p>
            A <strong>one-degree-of-freedom (1-DOF) system</strong> is one whose position can be
            described by a single number: a bead on a wire, a mass on a spring, a pendulum swinging
            in a single plane. There is one position coordinate {`$x$`} and one velocity coordinate{' '}
            {`$\\dot{x}$`}. The 2D plane of all possible pairs {`$(x, \\dot{x})$`} is called the{' '}
            <strong>phase space</strong>, and it holds every state the system can ever be in.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Total Energy</span>
            <div className="lrn-definition-desc">
              <p>{`$$E = T + U = \\frac{1}{2}\\dot{x}^2 + U(x)$$`}</p>
              <p>
                {`$\\frac{1}{2}\\dot{x}^2$`} is kinetic energy (energy of motion). {`$U(x)$`} is
                potential energy (energy stored in position). Their sum {`$E$`} is constant as the
                system moves.
              </p>
            </div>
          </div>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Proof of Energy Conservation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">
                Compute the time derivative:{' '}
                {`$$\\frac{d}{dt}(T + U) = \\dot{x}\\ddot{x} + \\frac{dU}{dx}\\dot{x} = \\dot{x}\\left(\\ddot{x} + \\frac{dU}{dx}\\right)$$`}
              </div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">
                Newton's equation says {`$\\ddot{x} = f(x) = -\\frac{dU}{dx}$`}. Substituting:{' '}
                {`$$= \\dot{x}\\left(-\\frac{dU}{dx} + \\frac{dU}{dx}\\right) = \\dot{x} \\cdot 0 = 0$$`}
              </div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              The key step is substituting Newton's equation. Why does conservation of energy always
              rely on this cancellation?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The conservation of energy is not independent of Newton's second law. It is a
                consequence. The bracket {`$\\ddot{x} + \\frac{dU}{dx}$`} is exactly zero because
                Newton's law says {`$\\ddot{x} = -\\frac{dU}{dx}$`}. Without Newton's law, the
                bracket would not vanish and energy would not be conserved.
              </p>
            </details>
          </div>

          <h3>The Phase Plane</h3>
          <p>
            The phase plane is a map. Horizontal axis: position. Vertical axis: velocity. A single
            dot on the map records the entire state of the system at one instant. As time runs, the
            dot moves and traces out a path called a <strong>phase curve</strong>.
          </p>
          <p>Write Newton's equation as a system of two first-order equations:</p>
          <div className="lrn-eq">{`$$\\dot{x} = y, \\quad \\dot{y} = f(x)$$`}</div>
          <p>
            Here {`$y = \\dot{x}$`} is the velocity, so the pair {`$(x, y)$`} is the dot on the map.
            The total energy {`$E = \\tfrac{1}{2}y^2 + U(x)$`} stays constant along each phase
            curve. Phase curves are like height contour lines on a hiking map: each curve marks a
            single fixed value of total energy.
          </p>

          <VizFigure title="Pendulum Phase Plane" size="body" aspect="auto">
            <Nli_PendulumPhasePlane />
          </VizFigure>

          <h3>Simple Harmonic Oscillator</h3>
          <p>The basic oscillation equation is:</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\ddot{x} = -x$$`}</div>
          <p>
            Here {`$U(x) = \\frac{x^2}{2}$`}. The energy level sets{' '}
            {`$\\frac{1}{2}y^2 + \\frac{x^2}{2} = E$`} are circles centered at the origin. The phase
            flow is rotation of the phase plane through angle {`$t$`}. After time {`$2\\pi$`}, the
            point returns to the start.
          </p>
          <p>The general motion is a mix of two waves, one sine and one cosine:</p>
          <div className="lrn-eq lrn-eq-display">{`$$x(t) = A\\sin\\omega t + B\\cos\\omega t$$`}</div>
          <p>
            The two constants {`$A$`} and {`$B$`} are fixed by the starting position and starting
            speed. For {`$\\ddot{x} = -x$`} the frequency is {`$\\omega = 1$`}. A spring with{' '}
            {`$\\ddot{x} = -\\alpha^2 x$`} gives {`$\\omega = \\alpha$`}.
          </p>

          <VizFigure title="Harmonic Phase Portrait" size="body" aspect="auto">
            <Nli_HarmonicPhasePortrait />
          </VizFigure>

          <h3>Equilibrium Positions</h3>
          <p>
            A point in phase space is an <strong>equilibrium</strong> if both {`$\\dot{x} = 0$`}{' '}
            (the system is at rest) and {`$f(x) = 0$`} (no force pushes it). Equilibria sit at the
            critical points of {`$U$`}: the spots where the slope of the potential is zero.
          </p>

          <VizFigure title="Center vs Saddle" size="wide" aspect="auto">
            <Nli_CenterSaddle />
          </VizFigure>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Stable Equilibrium (Center)</span>
              <p>
                Local minimum of {`$U$`}. A small push returns. Phase portrait shows closed loops
                surrounding the equilibrium.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Unstable Equilibrium (Saddle)</span>
              <p>
                Local maximum of {`$U$`}. A small push diverges. Phase curves approach from some
                directions and flee in others.
              </p>
            </div>
          </div>

          <h3>Separatrix and Qualitative Behavior</h3>
          <p>
            The <strong>separatrix</strong> is the phase curve passing through a saddle point (at
            the energy level of a local maximum of {`$U$`}). It separates regions of qualitatively
            different motion.
          </p>
          <ul className="lrn-list">
            <li>Inside the separatrix: closed orbits (oscillation)</li>
            <li>Outside: open orbits (the system passes through and escapes)</li>
            <li>On the separatrix: takes infinite time to reach the saddle point</li>
          </ul>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              A potential {`$U(x)$`} has two local minima and one local maximum between them. What
              do the energy level curves look like as {`$E$`} increases from the lower minimum to
              the maximum?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Start as a small closed loop around the minimum. Grow as {`$E$`} increases. Reach
                the saddle point as a figure-eight shaped separatrix. Open up into an unbounded
                curve above the maximum.
              </p>
            </details>
          </div>

          <VizFigure title="Double-Well" size="wide" aspect="auto">
            <Nli_DoubleWell />
          </VizFigure>

          <h3>Key Formulas for 1-DOF Systems</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Time Between Two Points</span>
            <div className="lrn-definition-desc">
              <p>
                From {`$E = \\tfrac{1}{2}\\dot{x}^2 + U(x)$`}, we get{' '}
                {`$\\dot{x} = \\pm\\sqrt{2(E - U(x))}$`}. Separating variables:
              </p>
              <p>{`$$t_2 - t_1 = \\int_{x_1}^{x_2} \\frac{dx}{\\sqrt{2(E - U(x))}}$$`}</p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Period of Small Oscillations</span>
            <div className="lrn-definition-desc">
              <p>Near a stable equilibrium at position {`$\\xi$`}:</p>
              <p>{`$$T_0 = \\frac{2\\pi}{\\sqrt{U''(\\xi)}}$$`}</p>
              <p>
                Here {`$U''(\\xi)$`} is the second derivative of {`$U$`} at the equilibrium. Larger
                curvature means shorter period.
              </p>
            </div>
          </div>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Period-Area Relation</span>
            <div className="lrn-definition-desc">
              <p>
                The period of an orbit at energy {`$E$`} equals the rate of change of the enclosed
                area {`$S$`} with energy:
              </p>
              <p>{`$$T = \\frac{dS}{dE}$$`}</p>
              <p>
                Here {`$S$`} is the area the closed orbit wraps in the phase plane. Raise the energy
                a little and the orbit grows. How fast that area grows per unit energy is exactly
                the time for one loop.
              </p>
            </div>
          </div>

          <h3>Phase Flow</h3>
          <p>
            The <strong>phase flow</strong> is what you get by pressing "play" on the whole phase
            plane at once. Every dot moves along its own curve in parallel. Write {`$g^t$`} for the
            map that takes each starting dot {`$M$`} to where it ends up after time {`$t$`}, so that{' '}
            {`$g^t M = M(t)$`}.
          </p>
          <div className="lrn-eq">{`$$g^{t+s} = g^t \\circ g^s$$`}</div>
          <p>
            In words: running the system for time {`$t$`} and then for an extra time {`$s$`} is the
            same as running it once for time {`$t + s$`}. Each snapshot {`$g^t$`} is a smooth,
            perfectly reversible reshuffling of the plane (the mathematical name is a{' '}
            <strong>diffeomorphism</strong>). Smooth means no tearing or folding. Reversible means
            you can always run time backward and recover the starting dot. One consequence is that
            exactly one phase curve passes through every point, so phase curves never cross.
          </p>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Phase Flow</span>
              <p>
                The whole collection of maps {`$g^t$`} acting on all dots simultaneously. The entire
                phase plane in motion at once.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Phase Curve</span>
              <p>
                The path of one specific dot: {`$\\{g^t M : t \\in \\mathbb{R}\\}$`} for fixed
                starting point {`$M$`}. One orbit within the flow.
              </p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Why do phase curves never cross? Newton's equation {`$\\ddot{x} = f(x)$`} uniquely
              determines the acceleration given position and velocity. Two trajectories starting at
              the same point would have the same acceleration, same velocity change, same future, so
              they are the same trajectory. This requires smoothness of {`$f$`}.
            </p>
          </div>

          <h3>Systems with Two Degrees of Freedom</h3>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two independent harmonic oscillators are coupled only through energy. What do their
              joint trajectories look like if their frequencies are equal? What if the frequencies
              are different?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Equal frequencies: closed ellipses. Different rational frequencies: closed Lissajous
                figures. Irrational frequencies: trajectories that fill a rectangular region
                densely.
              </p>
            </details>
          </div>

          <p>
            A <strong>2-DOF system</strong> needs two position numbers and two velocity numbers to
            describe its state. The phase space is now four-dimensional. The total energy is:
          </p>
          <div className="lrn-eq">
            {`$$E = \\frac{1}{2}(\\dot{x}_1^2 + \\dot{x}_2^2) + U(x_1, x_2) = E_0$$`}
          </div>

          <h3>Spherical Pendulum and Lissajous Figures</h3>
          <p>
            For {`$U = \\tfrac{1}{2}(x_1^2 + x_2^2)$`}, the equations decouple:
            {`$$\\ddot{x}_1 = -x_1, \\quad \\ddot{x}_2 = -x_2$$`}
          </p>
          <p>
            Each coordinate is an independent harmonic oscillator. The orbit in the {`$(x_1, x_2)$`}{' '}
            plane is a closed ellipse. This is the spherical pendulum with small oscillations.
          </p>

          <p>When the two frequencies differ:</p>
          <div className="lrn-eq">
            {`$$\\ddot{x}_1 = -x_1, \\quad \\ddot{x}_2 = -\\omega^2 x_2$$`}
          </div>
          <p>
            Solutions are {`$x_1(t) = A\\cos(t + \\phi_1)$`} and{' '}
            {`$x_2(t) = B\\cos(\\omega t + \\phi_2)$`}. The orbit in the {`$(x_1, x_2)$`} plane is a{' '}
            <strong>Lissajous figure</strong>: the looping curve you trace when two perpendicular
            oscillations run at the same time.
          </p>

          <VizFigure title="Lissajous" size="wide" aspect="auto">
            <Nli_Lissajous />
          </VizFigure>

          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Rational {`$\\omega$`} (Closed Orbit)</span>
              <p>
                If {`$\\omega = \\frac{p}{q}$`} in lowest terms, the orbit repeats after {`$q$`}{' '}
                oscillations of {`$x_1$`} and {`$p$`} of {`$x_2$`}. The Lissajous figure closes on
                itself.
              </p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Irrational {`$\\omega$`} (Dense Orbit)</span>
              <p>
                The orbit never closes. Given long enough, it passes arbitrarily close to every
                point inside a rectangle. That is what mathematicians call <em>dense</em>: no empty
                patch, however small, ever stays untouched.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              When {`$\\omega$`} is irrational, the orbit never closes. Why? What does this tell you
              about the relationship between the two frequencies?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                For the orbit to close, both oscillators must return to their starting state
                simultaneously. This requires the ratio of their periods to be a whole-number
                fraction. If {`$\\omega$`} is irrational, the two periods share no whole-number
                ratio. There is no time {`$T$`} that is a whole multiple of both periods. The orbit
                never repeats.
              </p>
            </details>
          </div>
        </>,

        /* SECTION 5: STANDARDS AND UNITS
         */
        <>
          <h2>Standards and Units</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You want to weigh an unknown rock using only a known $1$ kg block, a rubber band, and
              a stopwatch. How would you do it?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Stretch the rubber band by a fixed amount and pull the $1$ kg block. Time how long
                it takes to cross a known distance. Compute its acceleration $a_1$.
              </p>
              <p>{`Repeat with the rock to get $a_2$. The rock's mass is $m_2 = (1\\,\\text{kg})\\,\\dfrac{a_1}{a_2}$.`}</p>
            </details>
          </div>

          <p>
            Use SI units (meters, kilograms, seconds) for almost all physics. The older cgs system
            (centimeters, grams, seconds) only matters when reading texts that still use it.
          </p>

          <p>Newton's three laws need three primary standards: length, time, and mass.</p>

          <h3>Length</h3>
          <p>
            The first scientific meter was tied to the Earth: one meter equalled{' '}
            {`$\\frac{1}{40{,}000{,}000}$`} of the Earth's circumference through Paris. That value
            was then cast into a platinum-iridium bar at Sèvres, France.
          </p>
          <p>
            In 1960 the meter was redefined as $1{`,`}650{`,`}763.73$ wavelengths of orange light
            from krypton-86. Atomic standards are stable; bars warp with temperature.
          </p>
          <p>
            Today the meter is defined through the speed of light: one meter is the distance light
            travels in vacuum during {`$\\frac{1}{299{,}792{,}458}$`} of a second. Length is now
            derived from time.
          </p>

          <h3>Time</h3>
          <p>
            The second was originally {`$\\frac{1}{86{,}400}$`} of a mean solar day. But Earth's
            rotation drifts and slows, so the second drifted with it.
          </p>
          <p>
            Since 1967 the second has been defined by atoms: one second is $9{`,`}192{`,`}631{`,`}
            770$ cycles of the radiation from a specific cesium-133 transition. Two cesium clocks
            agree to better than one part in $10^{14}$.
          </p>

          <h3>Mass</h3>
          <p>
            The kilogram was the last primary unit tied to a physical object. For more than a
            century the standard was a single platinum-iridium cylinder kept at Sèvres, with copies
            calibrated against it. Atomic methods could not match the precision of length and time
            for mass, so the artifact stayed in use longer.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              Atomic standards work because every atom of a given type emits light at exactly the
              same frequency. Quantum mechanics guarantees this is identical across the universe,
              forever. No two metal bars are identical in the same way.
            </p>
          </div>

          <h3>SI vs cgs</h3>
          <p>The two systems differ only in their length and mass units. The second is shared.</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>SI Unit</th>
                <th>cgs Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Length</td>
                <td>meter (m)</td>
                <td>centimeter (cm)</td>
              </tr>
              <tr>
                <td>Mass</td>
                <td>kilogram (kg)</td>
                <td>gram (g)</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>second (s)</td>
                <td>second (s)</td>
              </tr>
              <tr>
                <td>Force</td>
                <td>{`newton (N) = $\\text{kg}\\,\\text{m}/\\text{s}^2$`}</td>
                <td>{`dyne = $\\text{g}\\,\\text{cm}/\\text{s}^2$`}</td>
              </tr>
              <tr>
                <td>Energy</td>
                <td>{`joule (J) = $\\text{N}\\,\\text{m}$`}</td>
                <td>{`erg = $\\text{dyne}\\,\\text{cm}$`}</td>
              </tr>
            </tbody>
          </table>

          <p>One newton equals $10^5$ dynes. One joule equals $10^7$ ergs.</p>
        </>,

        /* SECTION 6: HOW TO SOLVE FORCE PROBLEMS
         */
        <>
          <h2>How to Solve Force Problems</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Two astronauts pull on opposite ends of a massless rope in free space. Alex is twice
              as strong as Bob. Who pulls harder?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They pull with the same force. A massless rope has no inertia, so any net force on
                it would give it infinite acceleration.
              </p>
              <p>
                The rope tension is set by the weaker grip. Alex cannot pull harder than Bob holds.
              </p>
            </details>
          </div>

          <p>
            Use this procedure on every problem where two or more bodies interact through forces or
            constraints. It scales from a block on a wedge to a freight train.
          </p>

          <h3>The Six-Step Procedure</h3>

          <ol className="lrn-list">
            <li>
              Mentally subdivide the system into separate pieces. Treat each piece as a particle.
            </li>
            <li>Draw a free-body diagram for each piece. Show every external force as an arrow.</li>
            <li>Choose inertial coordinates. Write the equations of motion piece by piece.</li>
            <li>Apply Newton's third law between any two pieces that touch.</li>
            <li>
              Write constraint equations. These are geometric ties differentiated twice in time.
            </li>
            <li>Solve the resulting algebraic system for the unknowns.</li>
          </ol>

          <p>
            The diagram below shows what step 2 produces: weight, normal, and friction acting on a
            block.
          </p>

          <VizFigure title="Block on Wedge" size="body" aspect="auto">
            <Nli_BlockOnWedge />
          </VizFigure>

          <h3>Worked Example: Astronauts' Tug-of-War</h3>
          <p>
            Two astronauts in free space hold a massless rope. Alex (mass $M_A$) pulls one end, Bob
            (mass $M_B$) the other.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Subdivide the system</span>
              <p className="lrn-step-content">Three pieces: Alex, the rope, Bob.</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Force on the rope</span>
              <p className="lrn-step-content">{`Alex pulls one end with $F_A$ outward; Bob pulls the other end with $F_B$ outward.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Massless rope condition</span>
              <p className="lrn-step-content">{`Newton's second law on the rope: $F_A - F_B = m_\\text{rope} a_\\text{rope}$. With $m_\\text{rope} = 0$, we get $F_A = F_B$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Equations for the astronauts</span>
              <p className="lrn-step-content">{`$F_A = M_A a_A$ and $F_B = M_B a_B$ (taking inward as positive for each astronaut).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Conclude</span>
              <p className="lrn-step-content">{`Both pull with the same force, limited by the weaker grip. Their accelerations differ: heavier astronaut moves slower.`}</p>
            </div>
          </div>

          <h3>Worked Example: Freight Train</h3>
          <p>
            A locomotive pulls $N$ identical freight cars (each mass $M$) with a horizontal force
            $F$. Friction is negligible. Find the acceleration and the force in the coupling between
            car $k$ and car $k+1$ (numbering from the back).
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Whole-system acceleration</span>
              <p className="lrn-step-content">{`Total mass $NM$, total force $F$, so $a = \\dfrac{F}{NM}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Force on the back $k$ cars only</span>
              <p className="lrn-step-content">{`The coupling between car $k$ and car $k+1$ must accelerate the back $k$ cars. So that coupling carries $F_k = (kM)a = \\dfrac{k}{N}F$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Read off the answer</span>
              <p className="lrn-step-content">{`The coupling closest to the locomotive carries the largest tension; the one between the last two cars carries $\\dfrac{F}{N}$.`}</p>
            </div>
          </div>

          <h3>Worked Example: Constraint Equations</h3>
          <p>
            A constraint is a geometric rule that limits how the parts can move. Differentiate that
            rule twice in time to get a relation among accelerations.
          </p>

          <p>
            <strong>Subpart (a): block on a wedge.</strong> A wedge of angle $\theta$ moves
            horizontally at {`$\\ddot{X}$`}. A block sits on the wedge and slides along it.
          </p>

          <div className="lrn-eq">{`$$x - X = (h - y)\\cot\\theta \\;\\Rightarrow\\; \\ddot{x} - \\ddot{X} = -\\ddot{y}\\cot\\theta$$`}</div>

          <p>
            <strong>Subpart (b): masses on a string over an accelerating pulley.</strong> A string
            of fixed length runs over a pulley whose center sits at height $Y$. Two masses hang from
            the ends, at heights $y_1$ and $y_2$ (measured upward). The two hanging lengths are{' '}
            {`$Y - y_1$`} and {`$Y - y_2$`}, and they add up to the fixed string length:
          </p>

          <div className="lrn-eq">{`$$(Y - y_1) + (Y - y_2) = \\text{constant} \\;\\Rightarrow\\; 2Y = y_1 + y_2 + \\text{constant}$$`}</div>

          <p>
            Differentiate twice in time. The constant drops out, leaving a tie among the three
            accelerations, with {`$A = \\ddot{Y}$`} the pulley's acceleration:
          </p>

          <div className="lrn-eq">{`$$A = \\tfrac{1}{2}(\\ddot{y}_1 + \\ddot{y}_2)$$`}</div>

          <p>
            <strong>Subpart (c): two-pulley hoist.</strong> A hand pulls the free end of a rope down
            by $x$. The rope wraps under a movable pulley that carries the block. Pulling the end by{' '}
            $x$ shortens each of the two rope segments holding the block by half as much, so the
            block rises by {`$\\tfrac{1}{2}x$`}. Writing $X$ for the block's height (positive up)
            and $x$ for the pulled length (positive down), the geometry is:
          </p>

          <div className="lrn-eq">{`$$X = -\\tfrac{1}{2}x + \\text{constant}$$`}</div>

          <p>Differentiate twice:</p>

          <div className="lrn-eq">{`$$\\ddot{X} = -\\tfrac{1}{2}\\ddot{x}$$`}</div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why must we differentiate the geometric relation twice in time, not just once?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Newton's second law involves acceleration, not position or velocity. Differentiating
                twice converts the geometric tie into a relation among accelerations.
              </p>
              <p>Then we can substitute the constraint into the equations of motion and solve.</p>
            </details>
          </div>

          <VizFigure title="Wedge Constraint" size="body" aspect="auto">
            <Nli_WedgeConstraint />
          </VizFigure>

          <h3>Worked Example: Block on a String, Horizontal Whirl</h3>
          <p>
            A mass $m$ on a string of length $R$ whirls in a horizontal circle at constant speed
            $v$. Gravity is negligible. Find the tension.
          </p>

          <p>
            Recall the radial acceleration in polar coordinates from Module 1:{' '}
            {`$a_r = \\ddot{r} - r\\dot\\theta^2$`}. The {`$\\ddot{r}$`} part is the change in
            radial speed. The {`$-r\\dot\\theta^2$`} part is the centripetal term that points
            inward.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Use polar coordinates</span>
              <p className="lrn-step-content">{`Radial acceleration is $a_r = \\ddot{r} - r\\dot\\theta^2$. Here $r = R$ and $\\dot{r} = \\ddot{r} = 0$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Plug in</span>
              <p className="lrn-step-content">{`$a_r = -R\\left(\\dfrac{v}{R}\\right)^2 = -\\dfrac{v^2}{R}$, pointing toward the center.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply Newton's second law radially</span>
              <p className="lrn-step-content">{`The string pulls inward with tension $T$, so $-T = m\\left(-\\dfrac{v^2}{R}\\right)$, giving $T = \\dfrac{mv^2}{R}$.`}</p>
            </div>
          </div>

          <h3>Worked Example: The Conical Pendulum</h3>
          <p>
            A mass $M$ sits at the end of a rigid massless rod of length $\ell$. The rod spins about
            the vertical at a steady rate $\omega$ and leans out at angle $\alpha$. Ask a sharp
            question: can the rod hold a steady lean, and at what spin does it begin?
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Vertical equilibrium</span>
              <p className="lrn-step-content">{`$T\\cos\\alpha - W = 0$, so $T\\cos\\alpha = Mg$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Horizontal centripetal equation</span>
              <p className="lrn-step-content">{`$T\\sin\\alpha = M(\\ell\\sin\\alpha)\\omega^2 = M\\ell\\omega^2 \\sin\\alpha$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Two solutions</span>
              <p className="lrn-step-content">{`Either $\\sin\\alpha = 0$ ($\\alpha = 0$, always valid), or divide by $\\sin\\alpha$ to get $\\cos\\alpha = \\dfrac{g}{\\ell\\omega^2}$ (valid only if $\\omega^2 \\ge \\dfrac{g}{\\ell}$).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Stability</span>
              <p className="lrn-step-content">{`For $\\omega < \\omega_c = \\sqrt{\\dfrac{g}{\\ell}}$, only $\\alpha = 0$ exists and it is stable. For $\\omega > \\omega_c$, $\\alpha = 0$ becomes unstable and the tilted solution is the stable one.`}</p>
            </div>
          </div>

          <VizFigure title="Conical Pendulum Bifurcation" size="body" aspect="auto">
            <Nli_ConicalBifurcation />
          </VizFigure>

          <p>
            You can now solve any multi-body force problem with this one routine: subdivide, draw
            free-body diagrams, write the equations of motion, tie them with the third law and the
            constraints, then solve.
          </p>

          <p>{`One reminder ties back to the astronauts example in The Three Laws. A frame moving at constant velocity relative to an inertial frame is itself inertial, since two time derivatives of a linear shift $\\vec{R}(t) = \\vec{V}t$ give $\\ddot{\\vec{R}} = 0$. Only when the frame accelerates ($\\ddot{\\vec{R}} \\ne 0$) do the two frames disagree by the extra term $-M\\ddot{\\vec{R}}$, the fictitious force.`}</p>
        </>,

        /* SECTION 7: EVERYDAY FORCES
         */
        <>
          <h2>Everyday Forces</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>You drop a feather and a hammer in a vacuum chamber. Which hits the floor first?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                They hit at the same time. In vacuum, only gravity acts, and gravity gives all
                objects the same acceleration $g$.
              </p>
              <p>This was tested on the Moon by Apollo 15 with a hammer and a falcon feather.</p>
            </details>
          </div>

          <p>
            Use these force laws after you have applied Newton's laws and the six-step procedure.
            Each one is a specific expression for {`$F$`} that you substitute into $F = ma$.
          </p>

          <h3>Gravity</h3>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_{ab} = -\\frac{G\\, M_a M_b}{r^2}\\,\\hat{r}_{ab}$$`}</div>

          <p>{`Here $M_a$ and $M_b$ are the two masses, $r$ is the distance between them, and $\\hat{r}_{ab}$ is a unit arrow (length 1) pointing from mass $b$ toward mass $a$. The gravitational constant $G = 6.67 \\times 10^{-11}$ N$\\cdot$m$^2$/kg$^2$ sets the overall strength. Two 1-kg masses one meter apart pull on each other with about $7 \\times 10^{-11}$ N. That tiny number is the reason we never feel gravity from everyday objects.`}</p>

          <p>The minus sign means the force is attractive: each mass pulls the other inward.</p>

          <p>
            The same letter $m$ appears in two different roles. In $F = ma$ it is the{' '}
            <em>inertial mass</em>, which measures resistance to acceleration. In{' '}
            {`$F = \\dfrac{GMm}{r^2}$`} it is the <em>gravitational mass</em>, which measures how
            strongly the object responds to gravity. In principle these are two separate quantities.
            Experiments match them to one part in $10^{11}$.
          </p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              If the two masses differed, two materials would fall at different rates. Galileo's
              tower experiments and modern Eötvös tests have ruled this out to extreme precision.
            </p>
            <p>
              Einstein later promoted the match to a principle (the equivalence principle: inertial
              mass and gravitational mass are always equal). This is the starting point of general
              relativity, where gravity becomes the curvature of spacetime.
            </p>
          </div>

          <div className="lrn-eq">{`$$W = mg, \\qquad g = \\frac{GM_e}{R_e^2} \\approx 9.80\\ \\text{m/s}^2$$`}</div>

          <VizFigure title="Inverse-Square vs Uniform Gravity" size="body" aspect="auto">
            <Nli_InverseSquareGravity />
          </VizFigure>

          <h3>Electric Force (Coulomb's Law)</h3>
          <p>
            Two point charges push or pull along the line joining them. The force has the same
            inverse-square shape as gravity, with charge in place of mass.
          </p>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_{ab} = k\\,\\frac{q_a q_b}{r^2}\\,\\hat{r}_{ab}$$`}</div>

          <p>{`Here $q_a$ and $q_b$ are the two charges, $r$ is the distance between them, and $\\hat{r}_{ab}$ points from charge $b$ toward charge $a$. The Coulomb constant $k = 8.99 \\times 10^9$ N$\\cdot$m$^2$/C$^2$ sets the strength.`}</p>

          <p>
            One sign difference from gravity matters. Charge comes in two signs, so the product{' '}
            {`$q_a q_b$`} can be positive or negative. Like charges (same sign) repel. Unlike
            charges (opposite signs) attract. Gravity only ever pulls, because mass has one sign.
          </p>

          <h3>Worked Example: Turtle in an Elevator</h3>
          <p>
            A turtle of mass $M$ stands in an elevator that accelerates upward at rate $a$. Find the
            floor's normal force on the turtle.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Choose an inertial frame outside the elevator</span>
              <p className="lrn-step-content">{`Let the upward direction be positive.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Forces on the turtle</span>
              <p className="lrn-step-content">{`Gravity pulls down with $W = Mg$. The floor pushes up with $N$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply Newton's second law</span>
              <p className="lrn-step-content">{`$N - Mg = Ma$, so $N = M(g + a)$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Sanity checks</span>
              <p className="lrn-step-content">{`If $a = 0$, $N = Mg$ as expected. If $a = -g$ (free fall), $N = 0$ and the turtle floats.`}</p>
            </div>
          </div>

          <h3>The Normal Force and Friction</h3>

          <div className="lrn-eq">{`$$0 \\le f_s \\le \\mu_s N \\qquad\\text{(static)}$$`}</div>
          <div className="lrn-eq">{`$$f_k = \\mu_k N \\qquad\\text{(kinetic)}$$`}</div>

          <p>
            Static friction takes whatever value is needed to prevent motion, up to a maximum. Once
            the surface slips, kinetic friction takes over at a fixed value, usually a little
            smaller than the maximum static value.
          </p>

          <p>{`Both kinds are independent of the apparent contact area. Real contact happens only at microscopic high points (asperities), and the true contact area scales with the load you press down with, not with the size of the surface.`}</p>

          <h3>Worked Example: Block on a Wedge with Friction</h3>
          <p>
            A block of mass $m$ sits on a fixed wedge of angle $\theta$. The coefficient of static
            friction is $\mu$. Find the angle at which the block starts sliding.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Free-body diagram</span>
              <p className="lrn-step-content">{`Three forces: weight $W = mg$ pointing down, normal $N$ perpendicular to the slope, friction $f$ along the slope (pointing up the incline, since at the threshold the block is about to slide downhill).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Resolve along slope axes</span>
              <p className="lrn-step-content">{`Perpendicular to slope: $N = W\\cos\\theta$. Along slope: $W\\sin\\theta = f$ (just before sliding).`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply the static friction limit</span>
              <p className="lrn-step-content">{`At the threshold $f = \\mu N$, so $W\\sin\\theta = \\mu W\\cos\\theta$, giving $\\tan\\theta_\\text{max} = \\mu$.`}</p>
            </div>
          </div>

          <VizFigure title="Inclined Block" size="body" aspect="auto">
            <Nli_InclineBlock />
          </VizFigure>

          <h3>Tension in a String</h3>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Tension</span>
            <div className="lrn-definition-desc">{`The force one piece of string exerts on the next. In a massless string with no friction, tension is uniform along the string. With mass or applied loads, tension varies along the string.`}</div>
          </div>

          <p>{`When a string has mass $m$ and you pull one end with force $F$ to tow a block of mass $M$, the string must accelerate too. The whole system speeds up at $a = \\dfrac{F}{M+m}$. The string passes along only the part needed to accelerate the block: $F_\\text{block} = Ma = \\dfrac{MF}{M+m}$. A light string ($m \\ll M$) hands the block almost all of $F$.`}</p>

          <h3>Worked Example: Tension in a Hanging Rope</h3>
          <p>
            A uniform rope of mass $M$ and length $L$ hangs from a tree limb. Find the tension at
            distance $x$ from the bottom.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Free-body diagram of the lower section</span>
              <p className="lrn-step-content">{`Consider the bottom $x$ meters of rope. Mass is $\\dfrac{M}{L}x$. Weight is $\\dfrac{Mg}{L}x$ downward.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">
                Equilibrium: tension at top of section equals weight below
              </span>
              <p className="lrn-step-content">{`The rope is at rest, so $T(x) = \\dfrac{Mg}{L}x$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Boundary check</span>
              <p className="lrn-step-content">{`At $x = 0$, $T = 0$ (free end). At $x = L$, $T = Mg$ (full weight at top).`}</p>
            </div>
          </div>

          <VizFigure title="Hanging Rope Tension" size="body" aspect="auto">
            <Nli_HangingRope />
          </VizFigure>

          <h3>Viscous Drag</h3>
          <p>
            Fluids resist anything moving through them. At low speeds the resistance grows in
            proportion to velocity: move twice as fast, feel twice the drag.
          </p>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F}_v = -C\\vec{v}$$`}</div>
          <p>
            {`$C$`} is the drag coefficient (depends on the fluid and the object's shape).{' '}
            {`$\\vec{v}$`} is velocity. The minus sign means the drag always opposes motion. This
            formula applies only at low speeds. At high speeds, drag grows like the square of
            velocity instead.
          </p>

          <h3>Worked Example: Velocity Decay in a Viscous Medium</h3>
          <p>
            A body of mass $m$ enters a fluid at speed $v_0$. Only viscous drag acts. Find $v(t)$.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Equation of motion</span>
              <p className="lrn-step-content">{`$m\\,\\dfrac{dv}{dt} = -Cv$, or equivalently $m\\,\\dfrac{dv}{dt} + Cv = 0$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Try an exponential</span>
              <p className="lrn-step-content">{`Guess $v(t) = A\\,e^{at}$. Substitute: $mAa\\,e^{at} + CA\\,e^{at} = 0$, so $a = -\\dfrac{C}{m}$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Apply initial condition</span>
              <p className="lrn-step-content">{`At $t = 0$, $v = v_0$, so $A = v_0$.`}</p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Result</span>
              <p className="lrn-step-content">{`$v(t) = v_0\\,e^{-\\frac{t}{\\tau}}$ with characteristic time $\\tau = \\dfrac{m}{C}$.`}</p>
            </div>
          </div>

          <VizFigure title="Viscous Decay" size="body" aspect="auto">
            <ViscousDecay />
          </VizFigure>

          <h3>Hooke's Law and Simple Harmonic Motion</h3>
          <p>A spring stretched by a small amount $x$ pulls back with force proportional to $x$:</p>

          <div className="lrn-eq lrn-eq-display">{`$$F_s = -kx$$`}</div>

          <p>Substitute this force into $F = ma$:</p>
          <div className="lrn-eq">{`$$M\\ddot{x} = -kx$$`}</div>
          <p>Define {`$\\omega = \\sqrt{\\dfrac{k}{M}}$`}. The equation of motion becomes:</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\ddot{x} + \\omega^2 x = 0$$`}</div>
          <p>
            This is the same oscillation you met in the phase plane above. A later topic solves it
            in full and adds damping, driving, and resonance.
          </p>

          <VizFigure title="Simple Harmonic Motion" size="body" aspect="auto">
            <Nli_SHM />
          </VizFigure>
        </>,

        /* SECTION 8: THE SPHERICAL SHELL
         */
        <>
          <h2>The Spherical Shell</h2>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              You stand at the exact center of a hollow Earth. In which direction does gravity pull
              you?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Gravity pulls you in no direction. The net force is zero everywhere inside a
                spherically symmetric shell.
              </p>
              <p>The pulls from all sides cancel exactly. This is the shell theorem.</p>
            </details>
          </div>

          <p>
            Use the shell theorem any time you have a spherically symmetric body. It lets you
            replace planets, stars, and uniform shells with single point masses for any observer
            outside.
          </p>

          <h3>Statement of the Shell Theorem</h3>
          <p>{`A uniform spherical shell of mass $M$ pulls on an outside particle of mass $m$ at distance $r$ from the center exactly as if all the shell's mass were concentrated at the center. Inside the shell, the net gravitational force on the particle is zero.`}</p>

          <div className="lrn-eq lrn-eq-display">{`$$\\vec{F} = \\begin{cases} -\\dfrac{GMm}{r^2}\\,\\hat{r} & r > R \\\\[6pt] 0 & r < R \\end{cases}$$`}</div>

          <VizFigure title="Shell Theorem Force" size="body" aspect="auto">
            <ShellTheoremForceRaw />
          </VizFigure>

          <h3>Symmetry Argument for the Inside</h3>
          <p>
            Stand inside the shell. Send out two narrow cones in opposite directions through the
            point where you stand. Each cone cuts out a small patch of the shell. The area of each
            patch grows as the square of its distance from you, and gravity falls as the square of
            that distance. The two effects cancel exactly: opposite patches pull with equal strength
            in opposite directions. Sum over all such pairs and the net pull is zero.
          </p>

          <h3>Full Integral Derivation</h3>

          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation (Shell Theorem)</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`Place the test mass $m$ on the $z$-axis at distance $r$ from the shell's center. Take a ring on the shell at polar angle $\\theta$ from the $+z$ direction.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`The ring's mass element is $dm = \\dfrac{M}{2}\\sin\\theta\\,d\\theta$. Its distance from $m$ is given by $R'^2 = r^2 + R^2 - 2rR\\cos\\theta$. Here $R$ is the shell radius and $r$ is the distance from the center to the test mass. The angle $\\theta$ runs from the straight line between the center and the test mass.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`Each ring contributes a force along the axis: $dF = -\\dfrac{G\\,m\\,dm\\,\\cos\\alpha}{R'^2}$, where $\\alpha$ is the angle between the ring-to-mass direction and the axis, giving $\\cos\\alpha = \\dfrac{r - R\\cos\\theta}{R'}$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">4.</span>
              <div className="lrn-proof-step-content">{`Substitute $u = r - R\\cos\\theta$. Trig identities collapse, and the integrand becomes a clean rational function in $u$.`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">5.</span>
              <div className="lrn-proof-step-content">{`For $r > R$, the result is $-\\dfrac{GMm}{r^2}$. For $r < R$, the integral evaluates to zero.`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>

          <h3>Generalization to Solid Spheres</h3>
          <p>
            A solid sphere with spherically symmetric density acts like a stack of nested shells.
          </p>
          <p>{`Outside the sphere, integrate over all shells: each contributes $-\\dfrac{Gm\\,dM}{r^2}$, summing to $-\\dfrac{GMm}{r^2}$.`}</p>
          <p>{`Inside the sphere at radius $r$, only the mass inside $r$ contributes (outer shells give zero). So the gravity is $-\\dfrac{Gm\\,M(r)}{r^2}$ where $M(r)$ is the enclosed mass.`}</p>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              The shell theorem is what lets us replace a real planet with a point mass when we
              compute satellite orbits or the moon's trajectory. Without it, Newtonian gravity would
              be intractable for any extended body.
            </p>
            <p>
              A final caveat: Newton's framework assumes that space and time are absolute. Mach
              argued in the nineteenth century that these assumptions are not testable. Einstein
              later replaced them with curved spacetime in general relativity. For everything in
              this module, the Newtonian picture is more than accurate enough.
            </p>
          </div>
        </>
      ]
    },

    practice: [
      // K&K practice
      {
        q: `State Newton's first law in your own words.`,
        a: `An isolated body moves at constant velocity. If no net force acts, the body keeps the same speed and direction. The law also asserts that inertial frames exist where this holds.`
      },
      {
        q: `A puck slides on frictionless ice in deep space far from any star. Predict its motion.`,
        a: `It moves in a straight line at constant speed forever. No net force acts on it, so the velocity does not change. This is Newton's first law in action.`
      },
      {
        q: `A $2$ kg block experiences a net force of $10$ N. Find its acceleration.`,
        a: `Use $F = ma$, so $a = \\dfrac{F}{m}$. Plug in: $a = \\dfrac{10}{2} = 5$ m/s$^2$. The acceleration points along the direction of the net force.`
      },
      {
        q: `Why is friction almost independent of contact area?`,
        a: `Surfaces only touch at microscopic high points. The real contact area depends on the load, not the apparent area. So doubling the apparent area does not double the actual contact, and friction stays the same.`
      },
      {
        q: `What does the constant $G = 6.67 \\times 10^{-11}$ N$\\cdot$m$^2$/kg$^2$ govern?`,
        a: `It is the universal gravitational constant. It sets the strength of gravity in $F = \\dfrac{G M_1 M_2}{r^2}$. The small value explains why gravity between everyday objects is tiny.`
      },
      {
        q: `Two astronauts pull on a massless rope in free space. Why must they pull with equal forces?`,
        a: `A massless rope has no inertia, so any net force would give it infinite acceleration. The two end forces must therefore balance. The stronger astronaut is limited by the weaker grip.`
      },
      {
        q: `State Newton's third law and give one example.`,
        a: `If body A pushes body B with force $F$, then B pushes A with force $-F$. Example: when you push a wall, the wall pushes back on you. The two forces act on different bodies.`
      },
      {
        q: `Define an inertial reference frame.`,
        a: `It is a coordinate system where an isolated body moves at constant velocity. In such a frame, $F = ma$ holds without any correction. Any frame moving uniformly relative to one inertial frame is also inertial.`
      },
      {
        q: `A turtle of mass $M$ rides an elevator that accelerates upward at rate $a$. Find the floor's normal force.`,
        a: `Newton's second law gives $N - Mg = Ma$. Solve for $N$: $N = M(g+a)$. The apparent weight is larger than $Mg$ because the floor must both support the turtle and accelerate it upward.`
      },
      {
        q: `What is the operational definition of mass using a stretched rubber band?`,
        a: `Apply the same standard rubber-band force to two bodies in turn. Measure each acceleration. Then $m_2 = m_1 \\dfrac{a_1}{a_2}$. The mass ratio comes out the same no matter which standard force you choose.`
      },
      {
        q: `Spaceship B sees a free pencil accelerate at $50$ m/s$^2$. Spaceship A nearby sees it at rest. What does B's reading tell you?`,
        a: `An isolated pencil cannot truly accelerate, so B is non-inertial. Its frame accelerates at $-50$ m/s$^2$ relative to A. The "force" B reports is fictitious: $F_\\text{fictitious} = -M\\ddot{R}$.`
      },
      {
        q: `Hooke's law states $F = -kx$. Why the minus sign?`,
        a: `The force always points back toward the equilibrium position. If you stretch the spring (positive $x$), the force pulls back (negative). If you compress it (negative $x$), the force pushes out (positive).`
      },
      {
        q: `Which standard now defines the meter?`,
        a: `The meter is defined by the speed of light. One meter is the distance light travels in vacuum during a fixed fraction of a second. This definition replaced the earlier krypton-86 wavelength standard from 1960.`
      },
      {
        q: `A block of mass $m$ whirls in a horizontal circle of radius $R$ at constant speed $v$. Gravity is negligible. Find the string tension.`,
        a: `The radial equation gives $a_r = -\\dfrac{v^2}{R}$ (toward center). Newton's second law: $-T = m\\left(-\\dfrac{v^2}{R}\\right)$, so $T = \\dfrac{mv^2}{R}$. The string supplies the inward centripetal force.`
      },
      {
        q: `For a conical pendulum of length $\\ell$ rotating at $\\omega$, when does the tilted solution exist?`,
        a: `The condition is $\\omega > \\omega_c$ where $\\omega_c = \\sqrt{\\dfrac{g}{\\ell}}$. Below this, only $\\alpha = 0$ is possible. Above, $\\cos\\alpha = \\dfrac{g}{\\ell\\omega^2}$ also solves the equations.`
      },
      {
        q: `List the six steps for solving a force problem.`,
        a: `(1) Subdivide the system into separate bodies. (2) Draw a free-body diagram for each. (3) Choose inertial coordinates. (4) Write Newton's second law for each body. (5) Apply Newton's third law to internal forces. (6) Add constraint equations.`
      },
      {
        q: `A locomotive pulls $N$ identical cars, each of mass $M$, with force $F$ on a frictionless track. What force does the coupling $n$ cars from the back carry?`,
        a: `The whole train accelerates at $a = \\dfrac{F}{NM}$. The coupling at position $n$ from the back must accelerate $n$ trailing cars. So the force is $\\dfrac{n}{N}F$, growing larger toward the locomotive.`
      },
      {
        q: `What is a fictitious force?`,
        a: `It is an apparent force that arises in a non-inertial frame. It equals $-M\\ddot{R}$ where $\\ddot{R}$ is the frame's acceleration. It has no third-law partner because no real body exerts it.`
      },
      {
        q: `Why does superposition of forces work? (Elaborate.)`,
        a: `Experiments confirm that the acceleration produced by several forces equals the vector sum of their individual accelerations. This is an empirical fact, not a derivation. Newton's second law $F = \\sum F_i = ma$ encodes it.`
      },
      {
        q: `A uniform rope of mass $M$ and length $L$ hangs from a tree limb. Find the tension at height $x$ from the bottom.`,
        a: `Below height $x$ hangs mass $\\dfrac{M}{L}x$, supported by tension $T(x)$. Equilibrium: $T(x) = \\dfrac{M}{L} x g$. So $T(x) = \\dfrac{Mg}{L}x$, zero at the bottom and $Mg$ at the top.`
      },
      {
        q: `Find $g$ at Earth's surface using $G$, $M_e$, and $R_e$.`,
        a: `Use $g = \\dfrac{G M_e}{R_e^2}$. Plug in $G = 6.67\\times10^{-11}$, $M_e = 5.98\\times10^{24}$, $R_e = 6.37\\times10^6$. The result is $g \\approx 9.80$ m/s$^2$, matching surface measurements.`
      },
      {
        q: `A spinning drum of radius $R$ pins a rider against the wall. Find the minimum angular speed if the friction coefficient is $\\mu$.`,
        a: `Radial: $N = MR\\omega^2$. Vertical: friction must hold the rider, so $Mg \\le \\mu N = \\mu M R\\omega^2$. Solve: $\\omega_\\text{min} = \\sqrt{\\dfrac{g}{\\mu R}}$.`
      },
      {
        q: `State the shell theorem.`,
        a: `A uniform spherical shell attracts an outside mass as if all its mass sat at the center. An inside mass feels zero net force. The result follows from integrating $\\dfrac{1}{r^2}$ over the shell.`
      },
      {
        q: `Static friction satisfies $f \\le \\mu_s N$, while kinetic satisfies $f = \\mu_k N$. Why the difference?`,
        a: `Static friction adjusts to whatever value prevents slipping, up to its limit. Kinetic friction has a definite value because surfaces are sliding past each other. So static is an inequality and kinetic an equality.`
      },
      {
        q: `A spring obeys $F_s = -kx$. Show the equation of motion is $\\ddot{x} + \\omega^2 x = 0$ with $\\omega = \\sqrt{\\dfrac{k}{M}}$.`,
        a: `Newton's second law: $M\\ddot{x} = -kx$. Divide by $M$: $\\ddot{x} = -\\dfrac{k}{M}x$. Define $\\omega^2 = \\dfrac{k}{M}$ and rearrange to get $\\ddot{x} + \\omega^2 x = 0$.`
      },
      {
        q: `What does the cesium-133 atom contribute to the SI?`,
        a: `It defines the second. One second equals 9,192,631,770 cycles of a specific cesium-133 hyperfine transition. Metrologists adopted this standard in 1967.`
      },
      {
        q: `A force $F$ pulls one end of a string of mass $m$. The other end is tied to a block of mass $M$ on a frictionless surface. Find the force the string passes along to the block.`,
        a: `The system accelerates at $a = \\dfrac{F}{M+m}$. The string passes along only what is needed to accelerate the block: $F_1 = Ma = \\dfrac{MF}{M+m}$. When $m \\ll M$, $F_1 \\to F$.`
      },
      {
        q: `Why is a viscous drag force written $F_v = -Cv$ instead of just $-C$?`,
        a: `The drag depends on speed at low Reynolds number (slow, smooth, non-turbulent flow). Faster motion through fluid sweeps more molecules per second, raising drag linearly. The minus sign means the force opposes the velocity.`
      },
      {
        q: `Newton's third law gives $F_{a,b} = -F_{b,a}$. Why does this not mean nothing accelerates?`,
        a: `The two forces act on different bodies, so each body has its own net force. Earth pulls a falling apple, so the apple accelerates. The apple pulls Earth back, but Earth's huge mass makes its acceleration far too small to measure.`
      },
      {
        q: `Coulomb's law has the form $F = \\dfrac{k q_a q_b}{r^2}$. What is $k$?`,
        a: `The constant $k = 8.99\\times10^9$ N$\\cdot$m$^2$/C$^2$. Like charges repel and unlike charges attract. The form is identical to gravity except charge replaces mass and the force can be either sign.`
      },
      {
        q: `A whirling rope of mass $M$ and length $L$ spins at angular velocity $\\omega$ about one end. Find the tension at radius $r$.`,
        a: `Apply Newton's second law to a small section: $\\dfrac{dT}{dr} = -\\dfrac{M\\omega^2}{L}r$. Integrate from $r$ to $L$ with $T(L) = 0$: $T(r) = \\dfrac{M\\omega^2}{2L}(L^2 - r^2)$.`
      },
      {
        q: `Predict what happens to a falling marble in a viscous fluid (no other force). Take initial speed $v_0$.`,
        a: `Solve $m\\dot{v} = -Cv$ with $v(0) = v_0$. The result is $v(t) = v_0 e^{-\\frac{t}{\\tau}}$ with $\\tau = \\dfrac{m}{C}$. The marble decelerates exponentially, never quite stopping but approaching rest.`
      },
      {
        q: `The whirling rope tension at the pivot end is what fraction of $M\\omega^2 L$?`,
        a: `Set $r = 0$ in $T(r) = \\dfrac{M\\omega^2}{2L}(L^2 - r^2)$. The result is $T(0) = \\dfrac{M\\omega^2 L}{2}$. So the pivot carries half of $M\\omega^2 L$, and the free end carries zero.`
      },
      {
        q: `A pulley deflects a string under tension $T$ by total angle $2\\theta_0$. Find the force on the pulley.`,
        a: `Sum the inward elements $T\\,d\\theta$ over the arc, taking the component along the bisector. The integral gives $F = 2T\\sin\\theta_0$. The pulley feels a force along the angle bisector.`
      },
      {
        q: `Predict: you stand on a bathroom scale in an elevator that suddenly free-falls. What does the scale read?`,
        a: `In free fall, $a = -g$, so $N = M(g + a) = 0$. The scale reads zero. You feel weightless because no surface supplies a contact force, even though gravity still acts.`
      },
      {
        q: `Why does the formula $\\dfrac{\\Delta g}{g} = -2\\dfrac{\\Delta r}{r}$ hold near Earth? (Self-explain.)`,
        a: `Differentiate $g(r) = \\dfrac{GM_e}{r^2}$: $\\dfrac{dg}{dr} = -\\dfrac{2GM_e}{r^3} = -\\dfrac{2g}{r}$. Rearrange to $\\dfrac{dg}{g} = -2\\dfrac{dr}{r}$. So a fractional rise $\\dfrac{\\Delta r}{r}$ shrinks $g$ by twice that fraction.`
      },
      {
        q: `What is the normal force?`,
        a: `It is the perpendicular component of contact force from a surface. It arises from microscopic compression of the surface atoms. It adjusts to whatever value keeps the body from passing through the surface.`
      },
      {
        q: `Why does the equivalence of inertial and gravitational mass surprise? (Elaborate.)`,
        a: `Inertial mass appears in $F = ma$, gravitational mass in $F = \\dfrac{GMm}{r^2}$. They are conceptually different roles. Yet experiments confirm they are proportional to one part in $10^{11}$. Einstein built general relativity on this fact.`
      },
      {
        q: `A block sits on a wedge of angle $\\theta$ with friction coefficient $\\mu$. Find the angle at which sliding starts.`,
        a: `Along the slope: $W\\sin\\theta - f = 0$ at the threshold, with $f = \\mu N = \\mu W\\cos\\theta$. So $\\sin\\theta = \\mu\\cos\\theta$, giving $\\tan\\theta_\\text{max} = \\mu$.`
      },
      {
        q: `Why does the symmetry argument prove zero gravity inside a spherical shell? (Elaborate.)`,
        a: `Take any interior point. Two narrow cones from the point cut equal shell areas at distances $r_1$ and $r_2$. The areas scale as $r^2$ and force as $\\dfrac{1}{r^2}$, so each pair cancels. Summing pairs leaves zero net force.`
      },
      {
        q: `Spaceship A is inertial and reads $a_A = 1000$ m/s$^2$ for a drifting object. Spaceship B reports $a_B = 950$ m/s$^2$ for the same object. What is B's acceleration?`,
        a: `Use $\\ddot{x}_A = \\ddot{x}_B + \\ddot{R}$, so $\\ddot{R} = 1000 - 950 = 50$ m/s$^2$. Spaceship B accelerates at $50$ m/s$^2$ relative to A.`
      },
      // Arnold practice (Newton's equation, phase plane, energy conservation)
      {
        q: `A stone falls near Earth's surface with $\\ddot{x} = -g$. Write the potential energy $U(x)$ and verify that $F = -\\dfrac{dU}{dx}$ gives the correct force.`,
        a: `$U(x) = gx$. Then $-\\dfrac{dU}{dx} = -\\dfrac{d(gx)}{dx} = -g$. This recovers the equation $\\ddot{x} = -g$. The potential increases with height because lifting the stone stores energy.`
      },
      {
        q: `For the harmonic oscillator $\\ddot{x} = -x$, prove that total energy $E = \\frac{1}{2}\\dot{x}^2 + \\frac{1}{2}x^2$ is conserved.`,
        a: `Differentiate: $\\dfrac{dE}{dt} = \\dot{x}\\ddot{x} + x\\dot{x} = \\dot{x}(\\ddot{x} + x)$. Newton's equation says $\\ddot{x} = -x$, so $\\ddot{x} + x = 0$. Therefore $\\dfrac{dE}{dt} = 0$. Energy conservation always relies on this cancellation via Newton's equation.`
      },
      {
        q: `What is a separatrix in a 1-DOF phase portrait? What happens to a trajectory that starts exactly on the separatrix?`,
        a: `A separatrix is the phase curve through an unstable equilibrium (saddle point). It sits at the energy level of a local maximum of $U$. A trajectory starting exactly on it approaches the saddle point but never reaches it. The time to arrive is infinite. The separatrix divides bounded oscillation (inside) from unbounded escape (outside).`
      },
      {
        q: `A spring-mass system has $\\ddot{x} = -\\alpha^2 x$. What is the period of oscillation? If $\\alpha$ doubles, what happens to the period?`,
        a: `Period of small oscillations: $T_0 = \\dfrac{2\\pi}{\\sqrt{U''(0)}} = \\dfrac{2\\pi}{\\alpha}$. If $\\alpha$ doubles, the new period is $\\dfrac{2\\pi}{2\\alpha} = \\dfrac{T_0}{2}$. Doubling $\\alpha$ halves the period. A stiffer spring oscillates faster.`
      },
      {
        q: `What is the difference between a phase flow and a phase curve?`,
        a: `A phase curve is the trajectory of one specific starting point. It is the set $\\{(x(t), \\dot{x}(t)) : t \\in \\mathbb{R}\\}$ for a fixed initial condition. A phase flow is the whole family of maps $g^t: \\mathbb{R}^2 \\to \\mathbb{R}^2$. Each map sends every phase point to where it lands after time $t$. The phase curve of a point $M$ is $\\{g^t M : t \\in \\mathbb{R}\\}$.`
      },
      {
        q: `A 1-DOF system has potential $U(x) = x^4 - 2x^2$. Find the equilibrium positions and classify each as stable or unstable.`,
        a: `$\\dfrac{dU}{dx} = 4x^3 - 4x = 4x(x^2-1) = 0$. Equilibria at $x = -1, 0, 1$. $U''(x) = 12x^2 - 4$. At $x = 0$: $U''(0) = -4 < 0$, unstable (saddle). At $x = \\pm 1$: $U''(\\pm 1) = 8 > 0$, stable (centers).`
      },
      {
        q: `A potential $U(x)$ has a local minimum at $x = 2$ with $U''(2) = 9$ s$^{-2}$. What is the period of small oscillations around this equilibrium?`,
        a: `$T_0 = \\dfrac{2\\pi}{\\sqrt{U''(2)}} = \\dfrac{2\\pi}{\\sqrt{9}} = \\dfrac{2\\pi}{3}$ s. Near the minimum, $U(x) \\approx U(2) + \\dfrac{1}{2} \\cdot 9 \\cdot (x-2)^2$. This is harmonic with $\\alpha^2 = 9$, so period is $\\dfrac{2\\pi}{3}$.`
      },
      {
        q: `Lissajous figure for $\\ddot{x}_1 = -x_1$ and $\\ddot{x}_2 = -\\omega^2 x_2$. When is the orbit closed? When is it dense?`,
        a: `The orbit closes if and only if $\\omega$ is rational. If $\\omega = \\dfrac{p}{q}$ in lowest terms, the orbit repeats after $q$ oscillations of $x_1$ and $p$ of $x_2$. If $\\omega$ is irrational, the orbit never closes and densely fills a rectangular region.`
      },
      {
        q: `A 2-DOF system has $U = \\frac{1}{2}(x_1^2 + x_2^2)$. Show that the equations of motion decouple, and describe the resulting motion.`,
        a: `$\\ddot{x}_1 = -\\dfrac{\\partial U}{\\partial x_1} = -x_1$ and $\\ddot{x}_2 = -x_2$. The two equations are completely independent. Each is a simple harmonic oscillator with frequency 1. Solutions: $x_1(t) = A\\cos(t + \\phi_1)$, $x_2(t) = B\\cos(t + \\phi_2)$. Both oscillate at the same frequency. The orbit in the $(x_1, x_2)$ plane is a closed ellipse.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: "Newton's Laws and Equations of Motion",
      sections: [
        <>
          <h2>Definitions</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Inertial Frame</span>
            <div className="lrn-definition-desc">{`A coordinate system in which an isolated body moves at constant velocity. In such a frame, $F = ma$ holds without correction. Any frame moving uniformly relative to one inertial frame is also inertial.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Force (operational definition)</span>
            <div className="lrn-definition-desc">{`What a stretched standard rubber band exerts. Two such bands stretched together exert twice the force. The definition is testable, not metaphysical.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Mass (operational definition, inertial mass)
            </span>
            <div className="lrn-definition-desc">{`Apply the same standard force to two bodies. The mass ratio is $m_2 = m_1\\dfrac{a_1}{a_2}$. The ratio comes out the same whatever standard force you choose.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's First Law</span>
            <div className="lrn-definition-desc">{`Inertial frames exist. In any inertial frame, an isolated body moves at constant velocity. The law asserts a class of frames where the other two laws apply.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's Second Law</span>
            <div className="lrn-definition-desc">{`The vector equation $F = ma$ in an inertial frame. The net force equals mass times acceleration. With force and mass known, you can predict motion.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's Third Law</span>
            <div className="lrn-definition-desc">{`If body A exerts force $F$ on body B, then B exerts $-F$ on A. The two forces act on different bodies. They never cancel each other.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Fictitious Force</span>
            <div className="lrn-definition-desc">{`An apparent force in a non-inertial frame, equal to $-M\\ddot{R}$ where $\\ddot{R}$ is the frame's acceleration. It has no third-law partner since no real body exerts it.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Principle of Determinacy</span>
            <div className="lrn-definition-desc">{`Initial positions and velocities uniquely determine all future motion. Requires $F(x, \\dot{x})$ to be smooth. Newton's equations as ODEs have a unique solution for each set of initial data.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Phase Plane</span>
            <div className="lrn-definition-desc">{`The 2D space of $(x, \\dot{x})$ for a 1-DOF system. Phase curves are level sets of the energy $E = \\frac{1}{2}\\dot{x}^2 + U(x)$. Phase curves never cross (by uniqueness of ODE solutions).`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Phase Flow</span>
            <div className="lrn-definition-desc">{`The one-parameter group of diffeomorphisms $g^t$ that map each phase point to its position after time $t$. Satisfies $g^{t+s} = g^t \\circ g^s$.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Separatrix</span>
            <div className="lrn-definition-desc">{`The phase curve through a saddle point (unstable equilibrium). It separates bounded orbits (inside) from unbounded escapes (outside). Reaching the saddle point takes infinite time.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Free-Body Diagram</span>
            <div className="lrn-definition-desc">{`A sketch showing every force on a single isolated body. It is the second step of the six-step force procedure. Each interaction force later pairs with one on the other body via Newton's third law.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Constraint Equation</span>
            <div className="lrn-definition-desc">{`A kinematic relation between coordinates, found by differentiating geometry twice. Examples include wedge-block contact and pulley string lengths. Without it, the equations of motion are underdetermined.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Tension</span>
            <div className="lrn-definition-desc">{`The magnitude of the contact force between adjacent sections of a string. Uniform along a massless string. Varies along a massive or accelerating string.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Normal Force</span>
            <div className="lrn-definition-desc">{`The perpendicular component of contact force from a surface. It arises from microscopic compression of surface atoms. It adjusts to keep the body from passing through.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Static Friction</span>
            <div className="lrn-definition-desc">{`A contact force parallel to the surface that resists the start of sliding. It satisfies $0 \\le f \\le \\mu_s N$. The value adjusts to match whatever force is trying to start motion.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Kinetic Friction</span>
            <div className="lrn-definition-desc">{`A contact force on a sliding object, equal to $f = \\mu_k N$ opposite the relative velocity. The value is fixed once sliding begins. Usually slightly smaller than the maximum static friction.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Viscous Drag</span>
            <div className="lrn-definition-desc">{`A fluid resistance force linear in velocity at low Reynolds number (slow, smooth, non-turbulent flow): $F_v = -Cv$. The minus sign means it opposes motion. At high speed, drag scales like $v^2$ instead.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Hooke's Law</span>
            <div className="lrn-definition-desc">{`The linear restoring force $F_s = -kx$. It applies for small displacements from equilibrium. The minus sign points the force back toward equilibrium.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Simple Harmonic Motion</span>
            <div className="lrn-definition-desc">{`Motion satisfying $\\ddot{x} + \\omega^2 x = 0$. The solution is $x(t) = A\\sin\\omega t + B\\cos\\omega t$. The two constants come from initial conditions.`}</div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Shell Theorem</span>
            <div className="lrn-definition-desc">{`A uniform spherical shell attracts an outside mass as if all the shell mass sat at its center. An inside mass feels zero net force. Generalizes to any spherically symmetric distribution.`}</div>
          </div>
        </>,

        <>
          <h2>Newton's Equations</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's General Equation</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\ddot{x} = F(x, \\dot{x}, t)$$`}</p>
              <p>
                <strong>When to use:</strong> Starting point before applying symmetry constraints;
                use when the system is not closed or has time-dependent forcing.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Newton's Equation (Galilean-Invariant, Closed System)
            </span>
            <div className="lrn-definition-desc">
              <p>{`$$\\ddot{x} = \\Phi(x, \\dot{x})$$`}</p>
              <p>
                <strong>When to use:</strong> Any isolated mechanical system where time-translation
                invariance applies.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Conservative n-Body System</span>
            <div className="lrn-definition-desc">
              <p>{`$$m_i \\ddot{x}_i = -\\frac{\\partial U}{\\partial x_i},\\quad i=1,\\ldots,n$$`}</p>
              <p>
                <strong>When to use:</strong> Any system where all forces derive from a single
                scalar potential {`$U$`}.
              </p>
            </div>
          </div>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$F = ma$$`}</span>
          </div>
          <p>When to use: relate force, mass, and acceleration in inertial frames.</p>

          <div className="lrn-eq">
            <span>{`$$F_{a,b} = -F_{b,a}$$`}</span>
          </div>
          <p>When to use: every contact force has an equal and opposite reaction.</p>

          <div className="lrn-eq">
            <span>{`$$F_\\text{apparent} = F_\\text{true} - M\\ddot{R}$$`}</span>
          </div>
          <p>When to use: convert between inertial and accelerating frames.</p>

          <div className="lrn-eq">
            <span>{`$$a_r = \\ddot{r} - r\\dot\\theta^2$$`}</span>
          </div>
          <p>When to use: radial acceleration in polar coordinates.</p>

          <div className="lrn-eq">
            <span>{`$$\\ddot{x} - \\ddot{X} = -\\ddot{y}\\cot\\theta$$`}</span>
          </div>
          <p>When to use: wedge-block constraint.</p>

          <div className="lrn-eq">
            <span>{`$$A = \\tfrac{1}{2}(\\ddot{y}_1 + \\ddot{y}_2)$$`}</span>
          </div>
          <p>When to use: pulley accelerating up with two attached masses.</p>
        </>,

        <>
          <h2>Energy and Phase Plane (1-DOF)</h2>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Total Energy (1-DOF)</span>
            <div className="lrn-definition-desc">
              <p>{`$$E = T + U = \\tfrac{1}{2}\\dot{x}^2 + U(x)$$`}</p>
              <p>
                <strong>When to use:</strong> Any 1-DOF conservative system; lets you read off phase
                curves as energy level sets.
              </p>
              <p>
                <strong>Conservation proof:</strong>{' '}
                {`$\\frac{d}{dt}(T+U) = \\dot{x}\\left(\\ddot{x} + \\dfrac{dU}{dx}\\right) = 0$`} by
                Newton's equation.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Phase Plane System</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\dot{x} = y,\\quad \\dot{y} = f(x)$$`}</p>
              <p>
                <strong>When to use:</strong> Converting a 2nd-order ODE to a 1st-order system for
                phase portrait analysis.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Time Between Two Points</span>
            <div className="lrn-definition-desc">
              <p>{`$$t_2 - t_1 = \\int_{x_1}^{x_2} \\frac{dx}{\\sqrt{2(E - U(x))}}$$`}</p>
              <p>
                <strong>When to use:</strong> Computing travel time between two positions in a 1-DOF
                conservative system, given the energy.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Period of Small Oscillations</span>
            <div className="lrn-definition-desc">
              <p>{`$$T_0 = \\frac{2\\pi}{\\sqrt{U''(\\xi)}}$$`}</p>
              <p>
                <strong>When to use:</strong> Estimating the period of any small oscillation about a
                stable equilibrium at position {`$\\xi$`}. Larger curvature gives shorter period.
              </p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Period-Area Relation</span>
            <div className="lrn-definition-desc">
              <p>{`$$T = \\frac{dS}{dE}$$`}</p>
              <p>
                <strong>When to use:</strong> Finding period from area enclosed by a phase curve as
                a function of energy.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Common Forces and Oscillations</h2>

          <div className="lrn-eq lrn-eq-display">
            <span>{`$$F_g = -\\dfrac{G M_a M_b}{r^2}\\hat{r}$$`}</span>
          </div>
          <p>When to use: gravitational force between two point masses.</p>

          <div className="lrn-eq">
            <span>{`$$W = mg$$`}</span>
          </div>
          <p>When to use: weight of an object near Earth's surface.</p>

          <div className="lrn-eq">
            <span>{`$$N = M(g + a)$$`}</span>
          </div>
          <p>When to use: apparent weight in an elevator accelerating up.</p>

          <div className="lrn-eq">
            <span>{`$$F_e = k\\dfrac{q_a q_b}{r^2}\\hat{r}$$`}</span>
          </div>
          <p>When to use: electrostatic (Coulomb) force.</p>

          <div className="lrn-eq">
            <span>{`$$T(x) = \\dfrac{Mg}{L} x$$`}</span>
          </div>
          <p>When to use: tension at height $x$ in a uniform hanging rope.</p>

          <div className="lrn-eq">
            <span>{`$$T(r) = \\dfrac{M\\omega^2}{2L}(L^2 - r^2)$$`}</span>
          </div>
          <p>{`When to use: tension at radius $r$ in a rope whirling at $\\omega$.`}</p>

          <div className="lrn-eq">
            <span>{`$$0 \\le f \\le \\mu_s N$$`}</span>
          </div>
          <p>When to use: static friction; value adjusts to prevent slipping.</p>

          <div className="lrn-eq">
            <span>{`$$f = \\mu_k N$$`}</span>
          </div>
          <p>When to use: kinetic friction; opposite to relative velocity.</p>

          <div className="lrn-eq">
            <span>{`$$\\tan\\theta_\\text{max} = \\mu$$`}</span>
          </div>
          <p>When to use: critical angle for a block to slide on a rough wedge.</p>

          <div className="lrn-eq">
            <span>{`$$F_v = -Cv$$`}</span>
          </div>
          <p>When to use: linear viscous drag at low Reynolds number.</p>

          <div className="lrn-eq">
            <span>{`$$F_s = -kx$$`}</span>
          </div>
          <p>When to use: spring force or any small-displacement linear restoring force.</p>

          <div className="lrn-eq">
            <span>{`$$\\ddot{x} + \\omega^2 x = 0,\\ \\omega = \\sqrt{\\frac{k}{M}}$$`}</span>
          </div>
          <p>When to use: equation of motion for simple harmonic motion.</p>

          <div className="lrn-eq">
            <span>{`$$x(t) = A\\sin\\omega t + B\\cos\\omega t$$`}</span>
          </div>
          <p>When to use: general SHM solution; $A$ and $B$ from initial conditions.</p>

          <div className="lrn-eq">
            <span>{`$$v(t) = v_0 e^{-\\frac{t}{\\tau}},\\ \\tau = \\frac{m}{C}$$`}</span>
          </div>
          <p>When to use: velocity under linear viscous drag with no other forces.</p>

          <table className="lrn-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`$G$`}</td>
                <td>Gravitational constant</td>
                <td>{`$6.67 \\times 10^{-11}$ N$\\cdot$m$^2$/kg$^2$`}</td>
              </tr>
              <tr>
                <td>{`$g$`}</td>
                <td>Earth surface gravity</td>
                <td>{`$9.80$ m/s$^2$`}</td>
              </tr>
              <tr>
                <td>{`$M_e$`}</td>
                <td>Earth mass</td>
                <td>{`$5.98 \\times 10^{24}$ kg`}</td>
              </tr>
              <tr>
                <td>{`$R_e$`}</td>
                <td>Earth radius</td>
                <td>{`$6.37 \\times 10^6$ m`}</td>
              </tr>
              <tr>
                <td>{`$k_e$`}</td>
                <td>Coulomb constant</td>
                <td>{`$8.99 \\times 10^9$ N$\\cdot$m$^2$/C$^2$`}</td>
              </tr>
            </tbody>
          </table>
        </>
      ]
    },
    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }`
  }

  return <LearningTemplate config={config} />
}
