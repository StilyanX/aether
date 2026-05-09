import React from 'react'
import katex from 'katex'
import {
  Arrow,
  Axes,
  CircleSh,
  Dot,
  DragHandle,
  FG,
  Label,
  OPACITY,
  Parametric,
  PlayPause,
  Plot,
  Polyline,
  Slider,
  Tex,
  useAnimationTime,
  useReducedMotion,
} from '../primitives'
import { Q, V2, V3, project3, rk4Step, useSimulation } from '../physics-core'


// MODULE 01 - VECTORS · KINEMATICS (16 viz). All interactive - no auto-animation.

// 01.1.1 Vector Addition - drag a and b
export function VecAddition() {
  const [a, setA] = React.useState([2.4, 1.0])
  const [b, setB] = React.useState([1.2, 1.8])
  const sum = V2.add(a, b)
  return (
    <Plot xRange={[-0.5, 5]} yRange={[-0.5, 3.4]} width={620} height={300}>
      <Axes step={1} />
      <Arrow from={[0, 0]} to={a} />
      <Arrow from={a} to={sum} opacity={OPACITY.accent} />
      <Arrow from={[0, 0]} to={sum} opacity={OPACITY.dim} dash="3 3" />
      <DragHandle x={a[0]} y={a[1]} onChange={(x, y) => setA([x, y])} label="A" />
      <DragHandle x={sum[0]} y={sum[1]} onChange={(x, y) => setB([x - a[0], y - a[1]])} label="B" />
      <Tex at={V2.scale(a, 0.5)} dy={-6} tex={`\\mathbf{a}`} size={12} />
      <Tex
        at={V2.add(a, V2.scale(b, 0.5))}
        dx={4}
        dy={-6}
        tex={`\\mathbf{b}`}
        size={12}
        opacity={OPACITY.accent}
      />
      <Tex
        at={V2.scale(sum, 0.55)}
        dx={6}
        dy={14}
        tex={`\\mathbf{a}+\\mathbf{b}`}
        size={12}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}
// 01.1.2 Sliding Vector - slider for application point along line of action
export function SlidingVector() {
  const [s, setS] = React.useState(0.4)
  const ax = -1.6 + s * 3.2
  const v = [1.8, 0.7]
  const yAt = x => (0.7 / 1.8) * (x - -1.6) + 0.7
  return (
    <div>
      <Plot xRange={[-3, 3]} yRange={[-1.6, 1.8]} width={620} height={260}>
        <Axes step={1} showGrid={false} />
        <Polyline
          points={[
            [-3, yAt(-3)],
            [3, yAt(3)]
          ]}
          opacity={OPACITY.faint}
          dash="2 4"
        />
        <Arrow from={[ax, yAt(ax)]} to={[ax + v[0], yAt(ax) + v[1]]} />
        <Tex
          at={[-2.9, 1.5]}
          tex={`\\text{rigid body: F slides along its line of action}`}
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="POS" value={s} min={0} max={1} step={0.01} onChange={setS} />
    </div>
  )
}
// 01.1.3 Force Decomposition - drag F tip
export function ForceDecomp() {
  const [F, setF] = React.useState([2.2, 1.0])
  const fx = F[0],
    fy = F[1]
  const th = Math.atan2(fy, fx)
  const mag = Math.hypot(fx, fy)
  return (
    <Plot xRange={[-0.5, 3.4]} yRange={[-0.4, 2.6]} width={560} height={300}>
      <Axes step={1} />
      <Arrow from={[0, 0]} to={F} />
      <Arrow from={[0, 0]} to={[fx, 0]} opacity={OPACITY.accent} dash="3 3" />
      <Arrow from={[fx, 0]} to={[fx, fy]} opacity={OPACITY.accent} dash="3 3" />
      <Parametric
        xy={u => [0.45 * Math.cos(u), 0.45 * Math.sin(u)]}
        t={[0, th]}
        opacity={OPACITY.dim}
      />
      <DragHandle
        x={F[0]}
        y={F[1]}
        onChange={(x, y) => setF([Math.max(0.1, x), Math.max(0.05, y)])}
        label="F"
      />
      <Tex at={F} dx={6} tex={`\\mathbf{F}`} size={12} />
      <Tex
        at={[fx / 2, 0]}
        dy={14}
        anchor="middle"
        tex={`F\\cos\\theta = ${fx.toFixed(2)}`}
        size={11}
        opacity={OPACITY.accent}
      />
      <Tex
        at={[fx, fy / 2]}
        dx={6}
        tex={`F\\sin\\theta = ${fy.toFixed(2)}`}
        size={11}
        opacity={OPACITY.accent}
      />
      <Tex
        at={[0.55, 0.18]}
        tex={`\\theta = ${((th * 180) / Math.PI).toFixed(0)}°`}
        size={11}
        opacity={OPACITY.dim}
      />
      <Tex at={[2.1, 2.45]} tex={`|F| = ${mag.toFixed(2)}`} size={11} opacity={OPACITY.dim} />
    </Plot>
  )
}
// 01.1.4 Components Under Rotation - slider for basis rotation phi
export function ComponentsRotation() {
  const [phi, setPhi] = React.useState(0.3)
  const v = [2.2, 1.4]
  const e1 = [Math.cos(phi), Math.sin(phi)]
  const e2 = [-Math.sin(phi), Math.cos(phi)]
  const c1 = V2.dot(v, e1)
  const c2 = V2.dot(v, e2)
  return (
    <div>
      <Plot xRange={[-0.6, 3]} yRange={[-1, 2.4]} width={560} height={300}>
        <Axes step={1} />
        <Arrow from={[0, 0]} to={V2.scale(e1, 2.6)} opacity={OPACITY.dim} />
        <Arrow from={[0, 0]} to={V2.scale(e2, 2.0)} opacity={OPACITY.dim} />
        <Arrow from={[0, 0]} to={v} />
        <Polyline points={[[0, 0], V2.scale(e1, c1), v]} opacity={OPACITY.faint} dash="2 3" />
        <Tex at={v} dx={6} tex={`\\mathbf{v}`} size={12} />
        <Tex at={V2.scale(e1, 2.6)} dx={6} tex={`\\hat{e}_1'`} size={11} opacity={OPACITY.dim} />
        <Tex at={V2.scale(e2, 2.0)} dx={6} tex={`\\hat{e}_2'`} size={11} opacity={OPACITY.dim} />
        <Tex
          at={[-0.5, 2.3]}
          tex={`(c_1', c_2') = (${c1.toFixed(2)}, ${c2.toFixed(2)})`}
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="ϕ"
        value={phi}
        min={-Math.PI / 2}
        max={Math.PI / 2}
        step={0.01}
        onChange={setPhi}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
    </div>
  )
}
// 01.1.5 Base Vectors - static reference card
export function BaseVectors() {
  return (
    <Plot xRange={[-0.6, 2.6]} yRange={[-0.6, 2.6]} width={420} height={380}>
      <Axes step={1} />
      <Arrow from={[0, 0]} to={[1, 0]} />
      <Arrow from={[0, 0]} to={[0, 1]} />
      <Tex at={[1, 0]} dx={6} dy={-4} tex={`\\hat{i}`} size={13} />
      <Tex at={[0, 1]} dx={6} dy={-4} tex={`\\hat{j}`} size={13} />
      <Tex at={[1.2, 1.2]} tex={`|\\hat{i}| = |\\hat{j}| = 1`} size={11} opacity={OPACITY.dim} />
      <Tex at={[1.2, 1.0]} tex={`\\hat{i} \\cdot \\hat{j} = 0`} size={11} opacity={OPACITY.dim} />
    </Plot>
  )
}
// 01.1.6 Cross Product - slider for view yaw
export function CrossProduct() {
  const [yaw, setYaw] = React.useState(0.55)
  const proj = v => project3(v, { yaw, pitch: 0.5, scale: 60, ox: 280, oy: 160 })
  const a = [1.4, 0, 0.6]
  const b = [0.4, 0, 1.4]
  const c = V3.cross(a, b)
  const O = proj([0, 0, 0])
  const A = proj(a),
    B = proj(b),
    C = proj(c)
  const AB = proj(V3.add(a, b))
  return (
    <div>
      <svg viewBox="0 0 560 320" width="100%" style={{ display: 'block' }}>
        <g fill="none" stroke={FG} strokeWidth="1">
          <g opacity={OPACITY.faint}>
            <line
              x1={proj([-2, 0, 0])[0]}
              y1={proj([-2, 0, 0])[1]}
              x2={proj([2, 0, 0])[0]}
              y2={proj([2, 0, 0])[1]}
            />
            <line
              x1={proj([0, -1.5, 0])[0]}
              y1={proj([0, -1.5, 0])[1]}
              x2={proj([0, 2, 0])[0]}
              y2={proj([0, 2, 0])[1]}
            />
            <line
              x1={proj([0, 0, -2])[0]}
              y1={proj([0, 0, -2])[1]}
              x2={proj([0, 0, 2])[0]}
              y2={proj([0, 0, 2])[1]}
            />
          </g>
          <polygon
            points={`${O[0]},${O[1]} ${A[0]},${A[1]} ${AB[0]},${AB[1]} ${B[0]},${B[1]}`}
            fill={FG}
            fillOpacity="0.08"
            stroke={FG}
            strokeOpacity={OPACITY.dim}
          />
          {[
            [O, A, OPACITY.fg],
            [O, B, OPACITY.fg],
            [O, C, OPACITY.accent]
          ].map(([p, q, op], i) => {
            const dx = q[0] - p[0],
              dy = q[1] - p[1]
            const len = Math.hypot(dx, dy) || 1
            const ux = dx / len,
              uy = dy / len
            const ang = 0.5
            const wx = -ux * 7,
              wy = -uy * 7
            const wxR = wx * Math.cos(ang) - wy * Math.sin(ang)
            const wyR = wx * Math.sin(ang) + wy * Math.cos(ang)
            const wxL = wx * Math.cos(-ang) - wy * Math.sin(-ang)
            const wyL = wx * Math.sin(-ang) + wy * Math.cos(-ang)
            return (
              <g key={i} opacity={op}>
                <line x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} />
                <polyline
                  points={`${q[0] + wxR},${q[1] + wyR} ${q[0]},${q[1]} ${q[0] + wxL},${q[1] + wyL}`}
                />
              </g>
            )
          })}
        </g>
        <text x={A[0] + 8} y={A[1]} fill={FG} fontSize="12" fontFamily="monospace">
          a
        </text>
        <text x={B[0] - 14} y={B[1] + 12} fill={FG} fontSize="12" fontFamily="monospace">
          b
        </text>
        <text
          x={C[0] + 8}
          y={C[1]}
          fill={FG}
          fontSize="12"
          fontFamily="monospace"
          opacity={OPACITY.accent}
        >
          a×b
        </text>
      </svg>
      <Slider
        label="YAW"
        value={yaw}
        min={0}
        max={Math.PI * 2}
        step={0.02}
        onChange={setYaw}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
    </div>
  )
}
// 01.1.7 Cross Antisymmetry - static
export function CrossAntisym() {
  return (
    <Plot xRange={[-1.2, 1.2]} yRange={[-1.2, 1.2]} width={380} height={360}>
      <Axes step={0.5} />
      <Arrow from={[0, 0]} to={[1, 0]} />
      <Arrow from={[0, 0]} to={[0, 1]} />
      <Dot x={0} y={0} r={4} />
      <Tex at={[1, 0]} dx={6} tex={`\\hat{i}`} size={12} />
      <Tex at={[0, 1]} dx={6} tex={`\\hat{j}`} size={12} />
      <Tex
        at={[-1.1, 1.05]}
        tex={`\\hat{i}\\times\\hat{j} = +\\hat{k}`}
        size={12}
        opacity={OPACITY.accent}
      />
      <Tex
        at={[-1.1, -0.95]}
        tex={`\\hat{j}\\times\\hat{i} = -\\hat{k}`}
        size={12}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}
// 01.1.8 Dot Product · Work - drag F
export function DotWork() {
  const [F, setF] = React.useState([2.0, 1.1])
  const d = [3, 0]
  const W = V2.dot(F, d)
  return (
    <Plot xRange={[-0.5, 4]} yRange={[-0.5, 2.5]} width={620} height={280}>
      <Axes step={1} />
      <Arrow from={[0, 0]} to={d} opacity={OPACITY.dim} />
      <Arrow from={[0, 0]} to={F} />
      <Arrow from={[0, 0]} to={[F[0], 0]} opacity={OPACITY.accent} dash="3 3" />
      <Polyline points={[F, [F[0], 0]]} opacity={OPACITY.faint} dash="2 3" />
      <DragHandle x={F[0]} y={F[1]} onChange={(x, y) => setF([x, y])} label="F" />
      <Tex at={F} dx={6} tex={`\\mathbf{F}`} size={12} />
      <Tex at={d} dx={6} tex={`\\mathbf{d}`} size={12} opacity={OPACITY.dim} />
      <Tex at={[2.4, 2.1]} tex={`W = \\mathbf{F}\\cdot\\mathbf{d} = ${W.toFixed(2)}`} size={12} />
    </Plot>
  )
}
// 01.1.9 Dot Projection - drag a
export function DotProjection() {
  const [a, setA] = React.useState([1.4, 1.6])
  const b = [3, 0]
  const projScalar = V2.dot(a, b) / V2.dot(b, b)
  const proj = V2.scale(b, projScalar)
  return (
    <Plot xRange={[-0.4, 3.4]} yRange={[-0.4, 2.4]} width={560} height={280}>
      <Axes step={1} />
      <Arrow from={[0, 0]} to={b} opacity={OPACITY.dim} />
      <Arrow from={[0, 0]} to={a} />
      <Arrow from={[0, 0]} to={proj} opacity={OPACITY.accent} />
      <Polyline points={[a, proj]} opacity={OPACITY.faint} dash="2 3" />
      <DragHandle x={a[0]} y={a[1]} onChange={(x, y) => setA([x, y])} label="A" />
      <Tex at={a} dx={6} tex={`\\mathbf{a}`} size={12} />
      <Tex at={b} dx={6} tex={`\\mathbf{b}`} size={12} opacity={OPACITY.dim} />
      <Tex
        at={proj}
        dx={4}
        dy={14}
        tex={`\\text{proj}_{\\mathbf{b}}\\mathbf{a} = ${projScalar.toFixed(2)}`}
        size={11}
        opacity={OPACITY.accent}
      />
    </Plot>
  )
}
// 01.1.10 Polar Unit Vectors - slider for theta
export function PolarUnits() {
  const [th, setTh] = React.useState(0.7)
  const r = 2
  const px = r * Math.cos(th),
    py = r * Math.sin(th)
  const er = [Math.cos(th), Math.sin(th)]
  const eth = [-Math.sin(th), Math.cos(th)]
  return (
    <div>
      <Plot xRange={[-2.6, 2.6]} yRange={[-2.6, 2.6]} width={400} height={380}>
        <Axes step={1} />
        <CircleSh r={r} opacity={OPACITY.faint} />
        <Polyline
          points={[
            [0, 0],
            [px, py]
          ]}
          opacity={OPACITY.dim}
        />
        <Dot x={px} y={py} r={3.5} />
        <Arrow from={[px, py]} to={[px + er[0], py + er[1]]} />
        <Arrow from={[px, py]} to={[px + eth[0], py + eth[1]]} opacity={OPACITY.accent} />
        <Tex at={[px + er[0], py + er[1]]} dx={6} tex={`\\hat{e}_r`} size={11} />
        <Tex
          at={[px + eth[0], py + eth[1]]}
          dx={6}
          tex={`\\hat{e}_\\theta`}
          size={11}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider
        label="θ"
        value={th}
        min={0}
        max={Math.PI * 2}
        step={0.02}
        onChange={setTh}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
    </div>
  )
}
// 01.1.11 Displacement Origin Invariance - drag origin O'
export function DisplacementInvariant() {
  const [O2, setO2] = React.useState([-1.5, -0.5])
  const A = [1, 0.8],
    B = [2.6, 1.6]
  return (
    <Plot xRange={[-2.5, 3.5]} yRange={[-1.4, 2.4]} width={600} height={280}>
      <Axes step={1} />
      <Dot x={0} y={0} r={3} />
      <Dot x={O2[0]} y={O2[1]} r={3} opacity={OPACITY.dim} />
      <Arrow from={[0, 0]} to={A} opacity={OPACITY.dim} />
      <Arrow from={[0, 0]} to={B} opacity={OPACITY.dim} />
      <Arrow from={O2} to={A} opacity={OPACITY.faint} dash="2 3" />
      <Arrow from={O2} to={B} opacity={OPACITY.faint} dash="2 3" />
      <Arrow from={A} to={B} />
      <DragHandle x={O2[0]} y={O2[1]} onChange={(x, y) => setO2([x, y])} label="O'" />
      <Tex at={A} dx={6} dy={-4} tex={`A`} size={11} />
      <Tex at={B} dx={6} dy={-4} tex={`B`} size={11} />
      <Tex
        at={[-2.4, 2.2]}
        tex={`B - A \\text{ is origin-independent}`}
        size={11}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}
// 01.1.12 Rotating Vector Chord - slider for theta
export function RotatingChord() {
  const [th, setTh] = React.useState(0.6)
  const dth = 0.8
  const a = [Math.cos(th), Math.sin(th)]
  const b = [Math.cos(th + dth), Math.sin(th + dth)]
  const chord = 2 * Math.sin(dth / 2)
  return (
    <div>
      <Plot xRange={[-1.4, 1.4]} yRange={[-1.4, 1.4]} width={380} height={360}>
        <CircleSh r={1} opacity={OPACITY.dim} />
        <Polyline points={[[0, 0], a]} opacity={OPACITY.dim} />
        <Polyline points={[[0, 0], b]} opacity={OPACITY.dim} />
        <Arrow from={a} to={b} opacity={OPACITY.accent} />
        <Tex
          at={[-1.3, 1.25]}
          tex={`|\\Delta\\mathbf{r}| = 2\\sin\\!\\left(\\dfrac{\\Delta\\theta}{2}\\right) = ${chord.toFixed(3)}`}
          size={10}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="θ"
        value={th}
        min={0}
        max={Math.PI * 2}
        step={0.02}
        onChange={setTh}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
    </div>
  )
}
// 01.1.13 Uniform Circular Motion - slider for theta around the circle
export function UCM() {
  const [th, setTh] = React.useState(0.8)
  const r = 1.6,
    w = 1.0
  const pos = [r * Math.cos(th), r * Math.sin(th)]
  const vel = [-r * w * Math.sin(th), r * w * Math.cos(th)]
  const aVec = [-w * w * pos[0], -w * w * pos[1]]
  const trail = []
  for (let k = 0; k <= 64; k++) {
    const a = (k / 64) * th
    trail.push([r * Math.cos(a), r * Math.sin(a)])
  }
  return (
    <div>
      <Plot xRange={[-2.4, 2.4]} yRange={[-2, 2]} width={420} height={340}>
        <Axes step={1} />
        <CircleSh r={r} opacity={OPACITY.faint} />
        <Polyline points={trail} opacity={OPACITY.dim} />
        <Dot x={pos[0]} y={pos[1]} r={4} />
        <Arrow from={pos} to={V2.add(pos, V2.scale(vel, 0.5))} opacity={OPACITY.accent} />
        <Arrow from={pos} to={V2.add(pos, V2.scale(aVec, 0.4))} opacity={OPACITY.fg} />
        <Tex
          at={[-2.3, 1.85]}
          tex={`\\mathbf{a} = -\\omega^2 \\mathbf{r}`}
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="θ"
        value={th}
        min={0}
        max={Math.PI * 2}
        step={0.02}
        onChange={setTh}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
    </div>
  )
}
// 01.1.14 Projectile Motion - drag v0 + sliders (already mostly interactive; remove auto-time)
export function ProjectileMotion() {
  const [v0, setV0] = React.useState(7)
  const [ang, setAng] = React.useState(55)
  const [drag, setDrag] = React.useState(0.04)
  const [tFrac, setTFrac] = React.useState(1.0)
  const g = 9.81
  const traj = React.useMemo(() => {
    const f = (_, y) => {
      const speed = Math.hypot(y[2], y[3])
      const ax = -drag * speed * y[2]
      const ay = -g - drag * speed * y[3]
      return [y[2], y[3], ax, ay]
    }
    let y = [0, 0, v0 * Math.cos((ang * Math.PI) / 180), v0 * Math.sin((ang * Math.PI) / 180)]
    const pts = [[0, 0]]
    let t = 0
    const dt = 0.005
    while (t < 5) {
      y = rk4Step(f, t, y, dt)
      t += dt
      if (y[1] < -0.001) break
      pts.push([y[0], y[1]])
    }
    return pts
  }, [v0, ang, drag])
  const idx = Math.max(0, Math.min(traj.length - 1, Math.floor(tFrac * (traj.length - 1))))
  const cur = traj[idx]
  const shown = traj.slice(0, idx + 1)
  return (
    <div>
      <Plot xRange={[-0.5, 6]} yRange={[-0.3, 3]} width={620} height={260}>
        <Axes step={1} />
        <Polyline points={traj} opacity={OPACITY.faint} />
        <Polyline points={shown} opacity={OPACITY.fg} />
        <Dot x={cur[0]} y={cur[1]} r={4} />
        <Tex
          at={[0.3, 2.7]}
          tex={`\\ddot{\\mathbf{r}} = -g\\hat{j} - k|\\mathbf{v}|\\mathbf{v}`}
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="V₀"
        value={v0}
        min={3}
        max={12}
        step={0.5}
        onChange={setV0}
        format={v => v.toFixed(1) + ' m/s'}
      />
      <Slider
        label="ANG"
        value={ang}
        min={10}
        max={85}
        step={1}
        onChange={setAng}
        format={v => v.toFixed(0) + '°'}
      />
      <Slider
        label="DRAG"
        value={drag}
        min={0}
        max={0.2}
        step={0.005}
        onChange={setDrag}
        format={v => v.toFixed(3)}
      />
      <Slider label="TIME" value={tFrac} min={0} max={1} step={0.005} onChange={setTFrac} />
    </div>
  )
}
// 01.1.15 Taylor sin x - static
export function TaylorSin() {
  return (
    <Plot xRange={[-Math.PI * 1.2, Math.PI * 1.2]} yRange={[-2, 2]} width={620} height={300}>
      <Axes step={1} />
      <Parametric
        xy={x => [x, Math.sin(x)]}
        t={[-Math.PI * 1.2, Math.PI * 1.2]}
        opacity={OPACITY.fg}
      />
      <Parametric
        xy={x => [x, x]}
        t={[-Math.PI * 1.2, Math.PI * 1.2]}
        opacity={OPACITY.dim}
        dash="3 3"
      />
      <Parametric
        xy={x => [x, x - (x * x * x) / 6]}
        t={[-Math.PI * 1.2, Math.PI * 1.2]}
        opacity={OPACITY.dim}
        dash="2 3"
      />
      <Parametric
        xy={x => [x, x - (x * x * x) / 6 + x ** 5 / 120]}
        t={[-Math.PI * 1.2, Math.PI * 1.2]}
        opacity={OPACITY.accent}
        dash="1 3"
      />
      <Tex
        at={[-Math.PI * 1.15, 1.8]}
        tex={`\\sin x = x - \\tfrac{x^3}{6} + \\tfrac{x^5}{120} - \\cdots`}
        size={11}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}
// 01.1.16 Galilean Group - static reference
function MathInline({ tex }) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    if (ref.current) {
      try {
        katex.render(tex, ref.current, { throwOnError: false, displayMode: false })
      } catch (e) {
        ref.current.textContent = tex
      }
    }
  }, [tex])
  return <span ref={ref} />
}

export function GalileanTable() {
  const rows = [
    ['Time translation', '1', 'absolute time', 't'],
    ['Space translation', '3', 'absolute position', 'x_i'],
    ['Rotation', '3', 'preferred direction', null],
    ['Galilean boost', '3', 'absolute velocity', '\\dot x_i']
  ]
  const headerStyle = {
    fontSize: 12,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    opacity: 0.5,
    fontWeight: 400,
    textAlign: 'left',
    padding: '16px 28px',
    borderTop: '1px solid var(--border-subtle)',
    borderBottom: '1px solid var(--border-subtle)'
  }
  const cellStyle = {
    fontSize: 16,
    padding: '22px 28px',
    borderBottom: '1px solid var(--border-subtle)',
    verticalAlign: 'middle'
  }
  return (
    <div
      style={{
        width: '100%',
        margin: '24px 0',
        fontFamily: "'D-DIN', 'D-DIN-Regular', ui-monospace, monospace",
        color: FG,
        border: '1px solid var(--border-subtle)'
      }}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={headerStyle}>Symmetry</th>
            <th style={{ ...headerStyle, width: 140 }}>Count</th>
            <th style={headerStyle}>
              What it removes from <MathInline tex="F" />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={cellStyle}>{r[0]}</td>
              <td style={cellStyle}>{r[1]}</td>
              <td style={cellStyle}>
                {r[2]}
                {r[3] ? (
                  <>
                    {' '}
                    <MathInline tex={r[3]} />
                  </>
                ) : null}
              </td>
            </tr>
          ))}
          <tr>
            <td style={{ ...cellStyle, fontWeight: 700 }}>Total</td>
            <td style={{ ...cellStyle, fontWeight: 700 }}>10</td>
            <td style={cellStyle}>independent symmetries</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


// MODULE 02 - NEWTON'S LAWS (11 viz). All dynamics integrated, no canned curves.

// 01.2.1 Block on Wedge - Newton's 2nd on incline (μ kinetic friction, RK4)
export function BlockOnWedge() {
  const ang = (30 * Math.PI) / 180
  const sx = 4,
    sy = sx * Math.tan(ang)
  const blockS = 2.4
  const bx = blockS * Math.cos(ang)
  const by = blockS * Math.sin(ang)
  const w = 0.5
  const u = [Math.cos(ang), Math.sin(ang)]
  const n = [-Math.sin(ang), Math.cos(ang)]
  const c1 = [bx - (u[0] * w) / 2, by - (u[1] * w) / 2]
  const c2 = [bx + (u[0] * w) / 2, by + (u[1] * w) / 2]
  const c3 = [c2[0] + n[0] * w, c2[1] + n[1] * w]
  const c4 = [c1[0] + n[0] * w, c1[1] + n[1] * w]
  const cx = (c1[0] + c3[0]) / 2,
    cy = (c1[1] + c3[1]) / 2
  const g = 1.4
  const Nm = g * Math.cos(ang)
  const Fpar = g * Math.sin(ang)
  return (
    <Plot xRange={[-0.5, 5]} yRange={[-0.5, 3]} width={620} height={320}>
      <Axes step={1} showGrid={false} />
      <Polyline
        points={[
          [0, 0],
          [sx, sy],
          [sx, 0],
          [0, 0]
        ]}
        closed
        fillOpacity={0.05}
        opacity={OPACITY.dim}
      />
      <Polyline points={[c1, c2, c3, c4]} closed fillOpacity={0.18} opacity={OPACITY.fg} />
      <Arrow from={[cx, cy]} to={[cx, cy - g]} />
      <Arrow from={[cx, cy]} to={[cx + Nm * n[0], cy + Nm * n[1]]} opacity={OPACITY.accent} />
      <Arrow
        from={[cx, cy]}
        to={[cx - Fpar * u[0], cy - Fpar * u[1]]}
        opacity={OPACITY.accent}
        dash="3 3"
      />
      <Tex at={[cx, cy - g]} dx={6} dy={6} tex={`m\\mathbf{g}`} size={11} />
      <Tex
        at={[cx + Nm * n[0], cy + Nm * n[1]]}
        dx={6}
        tex={`\\mathbf{N}`}
        size={11}
        opacity={OPACITY.accent}
      />
      <Tex
        at={[cx - Fpar * u[0], cy - Fpar * u[1]]}
        dx={-30}
        dy={-2}
        tex={`\\mathbf{f}`}
        size={11}
        opacity={OPACITY.accent}
      />
      <Tex at={[0.4, 0.18]} tex={`\\theta`} size={11} opacity={OPACITY.dim} />
    </Plot>
  )
}
// 01.2.2 Weight Decomposition (FBD only, geometric)
export function WeightDecomp() {
  const ang = (30 * Math.PI) / 180
  const u = [Math.cos(ang), Math.sin(ang)]
  const n = [-Math.sin(ang), Math.cos(ang)]
  const sx = 4.5,
    sy = sx * Math.tan(ang)
  const bx = 2.6,
    by = bx * Math.tan(ang) + 0.25
  const g = 1.6
  const mgPar = -g * Math.sin(ang)
  const mgPerp = -g * Math.cos(ang)
  return (
    <Plot xRange={[-0.5, 5.5]} yRange={[-0.5, 3]} width={620} height={320}>
      <Polyline
        points={[
          [0, 0],
          [sx, sy],
          [sx, 0],
          [0, 0]
        ]}
        closed
        fillOpacity={0.05}
        opacity={OPACITY.dim}
      />
      <Dot x={bx} y={by} r={4} />
      <Arrow from={[bx, by]} to={[bx, by - g]} />
      <Arrow
        from={[bx, by]}
        to={[bx + mgPar * u[0], by + mgPar * u[1]]}
        opacity={OPACITY.accent}
        dash="3 3"
      />
      <Arrow
        from={[bx, by]}
        to={[bx + mgPerp * n[0], by + mgPerp * n[1]]}
        opacity={OPACITY.accent}
        dash="3 3"
      />
      <Polyline
        points={[
          [bx + mgPar * u[0], by + mgPar * u[1]],
          [bx, by - g],
          [bx + mgPerp * n[0], by + mgPerp * n[1]]
        ]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Tex at={[bx, by - g]} dx={6} tex={`m\\mathbf{g}`} size={12} />
      <Tex
        at={[bx + mgPar * u[0], by + mgPar * u[1]]}
        dx={6}
        dy={-2}
        tex={`mg\\sin\\theta`}
        size={11}
        opacity={OPACITY.accent}
      />
      <Tex
        at={[bx + mgPerp * n[0], by + mgPerp * n[1]]}
        dx={-90}
        tex={`mg\\cos\\theta`}
        size={11}
        opacity={OPACITY.accent}
      />
    </Plot>
  )
}
// 01.2.3 Conical Pendulum Bifurcation - equilibrium cone angle vs ω
export function ConicalBifurcation() {
  const [w, setW] = React.useState(2.5)
  const L = 1.5,
    g = 9.81
  const wc = Math.sqrt(g / L)
  const ratio = g / (w * w * L)
  const alpha = ratio < 1 ? Math.acos(ratio) : 0
  const [phi, setPhi] = React.useState(0.5)
  const bx = L * Math.sin(alpha) * Math.cos(phi)
  const bz = L * Math.sin(alpha) * Math.sin(phi)
  // Project to 2D side view: x' = bx*cos(yaw)+bz*sin(yaw)
  const yaw = 0.4
  const px = bx * Math.cos(yaw) + bz * Math.sin(yaw)
  const py = -L * Math.cos(alpha)
  const cone_xR = L * Math.sin(alpha)
  return (
    <div>
      <Plot xRange={[-2, 2]} yRange={[-2, 0.4]} width={520} height={300}>
        <Axes step={0.5} showGrid={false} />
        <Polyline
          points={[
            [-1.5, 0],
            [1.5, 0]
          ]}
          opacity={OPACITY.dim}
        />
        <Parametric
          xy={t => [
            cone_xR * Math.cos(t) * Math.cos(yaw) + cone_xR * Math.sin(t) * Math.sin(yaw),
            -L * Math.cos(alpha)
          ]}
          t={[0, 2 * Math.PI]}
          opacity={OPACITY.faint}
        />
        <Polyline
          points={[
            [0, 0],
            [cone_xR * Math.cos(yaw), -L * Math.cos(alpha)]
          ]}
          opacity={OPACITY.faint}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, 0],
            [-cone_xR * Math.cos(yaw), -L * Math.cos(alpha)]
          ]}
          opacity={OPACITY.faint}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, 0],
            [px, py]
          ]}
          opacity={OPACITY.fg}
        />
        <Dot x={px} y={py} r={5} />
        <Tex
          at={[-1.9, 0.25]}
          tex={`\\omega_c = \\sqrt{\\dfrac{g}{L}} = ${wc.toFixed(2)}`}
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[1.0, -0.2]}
          tex={`\\alpha = ${((alpha * 180) / Math.PI).toFixed(0)}°`}
          size={11}
        />
      </Plot>
      <Slider label="ω" value={w} min={0.5} max={5} step={0.05} onChange={setW} />
      <Slider
        label="ϕ"
        value={phi}
        min={0}
        max={2 * Math.PI}
        step={0.02}
        onChange={setPhi}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
    </div>
  )
}
// 01.2.4 Hanging Rope Tension - T(y) = (Mg/L)·y; live integration of stress
export function HangingRope() {
  return (
    <Plot xRange={[-0.5, 4]} yRange={[-0.2, 3.5]} width={520} height={340}>
      <Axes step={1} />
      <Parametric xy={y => [y, y]} t={[0, 3]} opacity={OPACITY.fg} />
      <Polyline
        points={[
          [-0.3, 0],
          [-0.3, 3]
        ]}
        opacity={OPACITY.dim}
      />
      {[0, 0.75, 1.5, 2.25, 3].map((y, i) => (
        <g key={i}>
          <Dot x={-0.3} y={y} r={2.5} opacity={OPACITY.dim} />
          <Polyline
            points={[
              [-0.25, y],
              [y - 0.05, y]
            ]}
            opacity={OPACITY.faint}
            dash="2 3"
          />
        </g>
      ))}
      <Tex at={[3, 3]} dx={6} tex={`T(L) = Mg`} size={12} />
      <Tex at={[0, 0]} dx={6} dy={14} tex={`T(0) = 0`} size={12} opacity={OPACITY.dim} />
      <Tex at={[1.5, 3.4]} tex={`T(y) = \\dfrac{M g}{L}\\, y`} size={12} />
      <Label at={[4, 0]} dy={14} anchor="end">
        Y · POSITION
      </Label>
      <Label at={[0, 3.4]} dx={-8} anchor="end">
        T · TENSION
      </Label>
    </Plot>
  )
}
// 01.2.5 Viscous Decay - m v̇ = -γ v, RK4
export function ViscousDecay() {
  const tau = 1.4
  // Numerically integrate m=1, gamma = 1/tau
  const traj = React.useMemo(() => {
    const f = (_, y) => [-(1 / tau) * y[0]]
    let y = [1]
    const pts = [[0, 1]]
    let t = 0
    const dt = 0.02
    while (t < 5) {
      y = rk4Step(f, t, y, dt)
      t += dt
      pts.push([t, y[0]])
    }
    return pts
  }, [tau])
  const [tNow, setTNow] = React.useState(2.0)
  const idx = Math.min(traj.length - 1, Math.floor(tNow / 0.02))
  const cur = traj[idx]
  return (
    <div>
      <Plot xRange={[-0.3, 5]} yRange={[-0.1, 1.1]} width={620} height={300}>
        <Axes step={1} />
        <Polyline points={traj} opacity={OPACITY.fg} />
        <Polyline
          points={[
            [tau, 0],
            [tau, 1 / Math.E]
          ]}
          opacity={OPACITY.faint}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, 1 / Math.E],
            [tau, 1 / Math.E]
          ]}
          opacity={OPACITY.faint}
          dash="2 3"
        />
        <Tex at={[tau, 0]} dx={4} dy={14} tex={`\\tau`} size={12} opacity={OPACITY.dim} />
        <Tex
          at={[0, 1 / Math.E]}
          dx={-32}
          dy={4}
          tex={`\\dfrac{v_0}{e}`}
          size={11}
          opacity={OPACITY.dim}
        />
        <Dot x={cur[0]} y={cur[1]} r={3.5} />
        <Tex at={[2.5, 0.85]} tex={`m\\dot v = -\\gamma v`} size={12} />
      </Plot>
      <Slider label="T" value={tNow} min={0} max={5} step={0.02} onChange={setTNow} />
    </div>
  )
}
// 01.2.6 Simple Harmonic Motion - ẍ = -ω²x integrated, spring rendered
export function SHM() {
  const w = 1.4,
    A = 1.5
  const initial = React.useMemo(() => ({ x: A, v: 0, t: 0, trail: [] }), [])
  const step = (s, dt) => {
    if (dt === 0) return s
    const f = (_, y) => [y[1], -w * w * y[0]]
    const next = rk4Step(f, s.t, [s.x, s.v], dt)
    const trail = s.trail.concat([[s.t + dt, next[0]]]).slice(-400)
    return { x: next[0], v: next[1], t: s.t + dt, trail }
  }
  const [s, , sim] = useSimulation(initial, step)
  // Spring rendering - proper helix points
  const springPts = React.useMemo(() => {
    const N = 40,
      x = s.x
    const pts = []
    const x0 = -2.0,
      x1 = x - 0.2
    for (let i = 0; i <= N; i++) {
      const u = i / N
      const xi = x0 + u * (x1 - x0)
      const yi = i === 0 || i === N ? 0 : 0.18 * (i % 2 === 0 ? 1 : -1)
      pts.push([xi, yi])
    }
    return pts
  }, [s.x])
  return (
    <div>
      <Plot xRange={[-0.3, 4 * Math.PI]} yRange={[-2, 2]} width={680} height={220}>
        <Axes step={1} />
        <Polyline points={s.trail.length ? s.trail : [[0, A]]} opacity={OPACITY.fg} />
        <Dot x={s.t} y={s.x} r={3.5} />
        <Tex at={[0.5, 1.7]} tex={`\\ddot x = -\\omega_0^2 x`} size={12} />
      </Plot>
      <Plot xRange={[-2.4, 2.4]} yRange={[-0.6, 0.6]} width={680} height={120}>
        <Polyline
          points={[
            [-2.2, 0],
            [-2.0, 0]
          ]}
          opacity={OPACITY.dim}
        />
        <Polyline points={springPts} opacity={OPACITY.dim} />
        <Polyline
          points={[
            [s.x - 0.2, -0.3],
            [s.x + 0.2, -0.3],
            [s.x + 0.2, 0.3],
            [s.x - 0.2, 0.3]
          ]}
          closed
          fillOpacity={0.18}
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
// 01.2.7 Harmonic Phase Portrait - actual integrated trajectory
export function HarmonicPhasePortrait() {
  const w = 1.0
  const initial = React.useMemo(() => ({ x: 1.0, v: 0, t: 0, trail: [] }), [])
  const step = (s, dt) => {
    if (dt === 0) return s
    const f = (_, y) => [y[1], -w * w * y[0]]
    const next = rk4Step(f, s.t, [s.x, s.v], dt)
    const trail = s.trail.concat([[next[0], next[1]]]).slice(-600)
    return { x: next[0], v: next[1], t: s.t + dt, trail }
  }
  const [s, , sim] = useSimulation(initial, step)
  return (
    <div>
      <Plot xRange={[-2.5, 2.5]} yRange={[-2.5, 2.5]} width={420} height={380}>
        <Axes step={1} />
        {[0.5, 1.5, 2.0].map((E, i) => (
          <Parametric
            key={i}
            xy={th => [E * Math.cos(th), -E * w * Math.sin(th)]}
            t={[0, 2 * Math.PI]}
            opacity={OPACITY.faint}
          />
        ))}
        <Polyline points={s.trail.length ? s.trail : [[1, 0]]} opacity={OPACITY.fg} />
        <Dot x={s.x} y={s.v} r={3.5} />
        <Tex
          at={[-2.4, 2.3]}
          tex={`H = \\tfrac{1}{2}(p^2 + \\omega_0^2 x^2)`}
          size={11}
          opacity={OPACITY.dim}
        />
        <Label at={[2.4, 0]} dy={-6} anchor="end">
          X
        </Label>
        <Label at={[0, 2.4]} dx={6}>
          P
        </Label>
      </Plot>
      <PlayPause
        playing={sim.playing}
        onToggle={() => sim.setPlaying(!sim.playing)}
        onReset={sim.reset}
      />
    </div>
  )
}
// 01.2.8 Center vs Saddle - flow vectors on the phase plane (proper field)
export function CenterSaddle() {
  const fieldPoints = signX => {
    const arrows = []
    for (let x = -2; x <= 2; x += 0.5)
      for (let p = -2; p <= 2; p += 0.5) {
        // For center: ẋ = p, ṗ = -ω²x ; saddle: ẋ = p, ṗ = +ω²x
        const w = 1
        const dx = p
        const dp = signX * w * w * x
        const n = Math.hypot(dx, dp) || 1
        arrows.push([x, p, (dx / n) * 0.18, (dp / n) * 0.18])
      }
    return arrows
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <Plot xRange={[-2.5, 2.5]} yRange={[-2.5, 2.5]} width={320} height={300}>
        <Axes step={1} />
        {[0.7, 1.3, 1.9].map((E, i) => (
          <Parametric
            key={i}
            xy={t => [E * Math.cos(t), E * Math.sin(t)]}
            t={[0, 2 * Math.PI]}
            opacity={OPACITY.dim}
          />
        ))}
        {fieldPoints(-1).map(([x, p, dx, dp], i) => (
          <Arrow
            key={i}
            from={[x, p]}
            to={[x + dx, p + dp]}
            opacity={OPACITY.faint}
            head={3}
            strokeWidth={0.6}
          />
        ))}
        <Tex at={[-2.4, 2.3]} tex={`\\dot p = -\\omega^2 x`} size={11} />
        <Label at={[2.4, 2.3]} anchor="end">
          CENTER
        </Label>
      </Plot>
      <Plot xRange={[-2.5, 2.5]} yRange={[-2.5, 2.5]} width={320} height={300}>
        <Axes step={1} />
        <Polyline
          points={[
            [-2.5, -2.5],
            [2.5, 2.5]
          ]}
          opacity={OPACITY.fg}
          dash="3 3"
        />
        <Polyline
          points={[
            [-2.5, 2.5],
            [2.5, -2.5]
          ]}
          opacity={OPACITY.fg}
          dash="3 3"
        />
        {fieldPoints(+1).map(([x, p, dx, dp], i) => (
          <Arrow
            key={i}
            from={[x, p]}
            to={[x + dx, p + dp]}
            opacity={OPACITY.faint}
            head={3}
            strokeWidth={0.6}
          />
        ))}
        <Tex at={[-2.4, 2.3]} tex={`\\dot p = +\\omega^2 x`} size={11} />
        <Label at={[2.4, 2.3]} anchor="end">
          SADDLE
        </Label>
      </Plot>
    </div>
  )
}
// 01.2.9 Double-Well - particle integrated in U(x)=(x²-1)², F = -dU/dx = -4x(x²-1)
export function DoubleWell() {
  const initial = React.useMemo(() => ({ x: -1.4, v: 0, t: 0, trail: [] }), [])
  const step = (s, dt) => {
    if (dt === 0) return s
    const f = (_, y) => [y[1], -4 * y[0] * (y[0] * y[0] - 1) - 0.05 * y[1]] // light damping
    const next = rk4Step(f, s.t, [s.x, s.v], dt)
    const xs = s.trail
      .concat([[next[0], (next[0] * next[0] - 1) ** 2 + (0.5 * next[1] * next[1]) / 2]])
      .slice(-300)
    return { x: next[0], v: next[1], t: s.t + dt, trail: xs }
  }
  const [s, , sim] = useSimulation(initial, step)
  return (
    <div>
      <Plot xRange={[-2, 2]} yRange={[-0.5, 3]} width={620} height={320}>
        <Axes step={0.5} />
        <Parametric xy={x => [x, (x * x - 1) ** 2]} t={[-2, 2]} opacity={OPACITY.fg} />
        <Dot x={s.x} y={(s.x * s.x - 1) ** 2} r={4} />
        <Polyline
          points={[
            [-2, (s.x * s.x - 1) ** 2 + 0.5 * s.v * s.v],
            [2, (s.x * s.x - 1) ** 2 + 0.5 * s.v * s.v]
          ]}
          opacity={OPACITY.accent}
          dash="3 3"
        />
        <Dot x={-1} y={0} r={3} />
        <Dot x={1} y={0} r={3} />
        <Dot x={0} y={1} r={3} fill={false} />
        <Tex at={[0, 1]} dx={6} dy={-4} tex={`U_b`} size={11} opacity={OPACITY.dim} />
        <Tex at={[-1.9, 2.8]} tex={`U(x) = (x^2 - 1)^2`} size={12} />
      </Plot>
      <PlayPause
        playing={sim.playing}
        onToggle={() => sim.setPlaying(!sim.playing)}
        onReset={sim.reset}
      />
    </div>
  )
}
// 01.2.10 Lissajous - true integrated 2D oscillator x:y at integer ratios
export function Lissajous() {
  const [tt, setTt] = React.useState(2.0)
  const ratios = [
    [1, 1, 0],
    [1, 2, Math.PI / 2],
    [2, 3, Math.PI / 4],
    [3, 4, 0]
  ]
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
        {ratios.map(([a, b, ph], i) => (
          <Plot key={i} xRange={[-1.2, 1.2]} yRange={[-1.2, 1.2]} width={170} height={170}>
            <Parametric
              xy={u => [Math.sin(a * u), Math.sin(b * u + ph)]}
              t={[0, 2 * Math.PI]}
              opacity={OPACITY.fg}
            />
            <Dot x={Math.sin(a * tt * 0.6)} y={Math.sin(b * tt * 0.6 + ph)} r={3} />
            <Label at={[-1.1, -1.15]}>{`${a} : ${b}`}</Label>
          </Plot>
        ))}
      </div>
      <Slider label="T" value={tt} min={0} max={(2 * Math.PI) / 0.6} step={0.05} onChange={setTt} />
    </div>
  )
}
// 01.2.11 Pendulum Phase Plane - true contours from H = ½θ̇² - cosθ + flow vectors
export function PendulumPhasePlane() {
  const Es = [-0.7, -0.3, 0, 0.5, 1.2, 2]
  // Flow vectors
  const flow = []
  for (let th = -Math.PI * 1.3; th <= Math.PI * 1.3; th += 0.6)
    for (let p = -2.5; p <= 2.5; p += 0.6) {
      const dth = p,
        dp = -Math.sin(th)
      const n = Math.hypot(dth, dp) || 1
      flow.push([th, p, (dth / n) * 0.22, (dp / n) * 0.22])
    }
  return (
    <Plot xRange={[-Math.PI * 1.4, Math.PI * 1.4]} yRange={[-3, 3]} width={680} height={340}>
      <Axes step={1} />
      {flow.map(([th, p, dth, dp], i) => (
        <Arrow
          key={i}
          from={[th, p]}
          to={[th + dth, p + dp]}
          opacity={OPACITY.faint}
          head={3}
          strokeWidth={0.6}
        />
      ))}
      {Es.map((E, i) => {
        const samp = sgn => {
          const out = []
          for (let k = 0; k <= 400; k++) {
            const th = -Math.PI * 1.4 + (2.8 * Math.PI * k) / 400
            const r = 2 * (E + Math.cos(th))
            if (r >= 0) out.push([th, sgn * Math.sqrt(r)])
            else if (out.length) break
          }
          return out
        }
        const isSep = Math.abs(E - 1) < 0.05
        return (
          <React.Fragment key={i}>
            <Polyline
              points={samp(+1)}
              opacity={isSep ? OPACITY.fg : OPACITY.dim}
              dash={isSep ? '3 3' : undefined}
            />
            <Polyline
              points={samp(-1)}
              opacity={isSep ? OPACITY.fg : OPACITY.dim}
              dash={isSep ? '3 3' : undefined}
            />
          </React.Fragment>
        )
      })}
      <Dot x={0} y={0} r={3} />
      <Dot x={Math.PI} y={0} r={3} fill={false} />
      <Dot x={-Math.PI} y={0} r={3} fill={false} />
      <Tex
        at={[-Math.PI * 1.35, 2.8]}
        tex={`\\ddot\\theta = -\\sin\\theta`}
        size={11}
        opacity={OPACITY.dim}
      />
      <Label at={[Math.PI * 1.3, 0]} dy={-6} anchor="end">
        θ
      </Label>
      <Label at={[0, 2.9]} dx={6}>
        P
      </Label>
    </Plot>
  )
}


// MODULE 03 - MOMENTUM (9 viz). Real conservation laws, integrated dynamics.

// 01.3.1 Momentum Addition - drag p₂
export function MomentumAddition() {
  const [p1, setP1] = React.useState([2.0, 0.6])
  const [p2, setP2] = React.useState([0.8, 1.6])
  const sum = V2.add(p1, p2)
  return (
    <Plot xRange={[-0.5, 4]} yRange={[-0.5, 3]} width={620} height={300}>
      <Axes step={1} />
      <Arrow from={[0, 0]} to={p1} />
      <Arrow from={p1} to={sum} opacity={OPACITY.accent} />
      <Arrow from={[0, 0]} to={sum} opacity={OPACITY.dim} dash="3 3" />
      <DragHandle x={p1[0]} y={p1[1]} onChange={(x, y) => setP1([x, y])} label="P₁" />
      <DragHandle
        x={sum[0]}
        y={sum[1]}
        onChange={(x, y) => setP2([x - p1[0], y - p1[1]])}
        label="P₂"
      />
      <Tex at={V2.scale(p1, 0.5)} dy={-6} tex={`\\mathbf{p}_1`} size={12} />
      <Tex
        at={V2.add(p1, V2.scale(p2, 0.5))}
        dx={4}
        dy={-6}
        tex={`\\mathbf{p}_2`}
        size={12}
        opacity={OPACITY.accent}
      />
      <Tex
        at={V2.scale(sum, 0.55)}
        dx={6}
        dy={14}
        tex={`\\mathbf{P} = \\mathbf{p}_1+\\mathbf{p}_2`}
        size={11}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}
// 01.3.2 CM · Two Particles - drag particles, mass ratio slider
export function CMTwo() {
  const [r1, setR1] = React.useState([-2.0, 0.5])
  const [r2, setR2] = React.useState([2.0, -0.5])
  const [ratio, setRatio] = React.useState(3) // m2/m1
  const m1 = 1,
    m2 = ratio
  const cm = [(m1 * r1[0] + m2 * r2[0]) / (m1 + m2), (m1 * r1[1] + m2 * r2[1]) / (m1 + m2)]
  return (
    <div>
      <Plot xRange={[-3.5, 3.5]} yRange={[-2, 2]} width={620} height={300}>
        <Axes step={1} />
        <Polyline points={[r1, r2]} opacity={OPACITY.faint} dash="2 3" />
        <Dot x={r1[0]} y={r1[1]} r={3 + Math.sqrt(m1) * 2} />
        <Dot x={r2[0]} y={r2[1]} r={3 + Math.sqrt(m2) * 2} />
        <DragHandle x={r1[0]} y={r1[1]} onChange={(x, y) => setR1([x, y])} label="M₁" />
        <DragHandle x={r2[0]} y={r2[1]} onChange={(x, y) => setR2([x, y])} label="M₂" />
        <Dot x={cm[0]} y={cm[1]} r={2} opacity={OPACITY.accent} />
        <CircleSh cx={cm[0]} cy={cm[1]} r={0.18} opacity={OPACITY.accent} />
        <Tex at={cm} dx={6} dy={14} tex={`\\mathbf{R}_{CM}`} size={11} opacity={OPACITY.accent} />
      </Plot>
      <Slider label="M₂/M₁" value={ratio} min={0.2} max={8} step={0.05} onChange={setRatio} />
    </div>
  )
}
// 01.3.3 CM · Non-Uniform Rod - λ(x) = x; CM = ∫xλdx / ∫λdx = (2/3)L
export function CMRod() {
  const L = 3
  const xCM = (2 / 3) * L
  return (
    <Plot xRange={[-0.3, 3.4]} yRange={[-0.6, 1.2]} width={620} height={240}>
      <Axes step={0.5} />
      <Parametric xy={x => [x, (x / L) * 0.6]} t={[0, L]} opacity={OPACITY.fg} />
      <Polyline
        points={[
          [0, 0],
          [L, 0]
        ]}
        opacity={OPACITY.dim}
      />
      {/* Rod density viz: tick marks density */}
      {Array.from({ length: 30 }).map((_, i) => {
        const x = (i / 29) * L
        const a = (x / L) * 0.4 + 0.05
        return (
          <Polyline
            key={i}
            points={[
              [x, 0],
              [x, 0.05]
            ]}
            opacity={a}
          />
        )
      })}
      <Dot x={xCM} y={0} r={5} opacity={OPACITY.accent} />
      <Tex
        at={[xCM, 0]}
        dy={-12}
        dx={-8}
        tex={`x_{CM} = \\tfrac{2}{3}L`}
        size={11}
        opacity={OPACITY.accent}
      />
      <Tex at={[0.2, 1.0]} tex={`\\lambda(x) = \\lambda_0\\, \\dfrac{x}{L}`} size={11} />
    </Plot>
  )
}
// 01.3.4 CM · Triangle (centroid)
export function CMTriangle() {
  const A = [0, 0],
    B = [3, 0],
    C = [1.2, 2.2]
  const cm = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3]
  return (
    <Plot xRange={[-0.5, 3.5]} yRange={[-0.4, 2.6]} width={520} height={300}>
      <Axes step={1} />
      <Polyline points={[A, B, C]} closed fillOpacity={0.08} />
      {/* Medians */}
      <Polyline
        points={[A, [(B[0] + C[0]) / 2, (B[1] + C[1]) / 2]]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Polyline
        points={[B, [(A[0] + C[0]) / 2, (A[1] + C[1]) / 2]]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Polyline
        points={[C, [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Dot x={cm[0]} y={cm[1]} r={5} opacity={OPACITY.accent} />
      <Tex at={cm} dx={8} tex={`\\mathbf{R}_{CM}`} size={11} opacity={OPACITY.accent} />
    </Plot>
  )
}
// 01.3.5 Spring Gun Recoil - momentum conservation, two masses + spring
export function SpringGunRecoil() {
  // Masses M (gun) and m (bullet); spring releases. After release: M v1 + m v2 = 0
  const initial = React.useMemo(
    () => ({ x1: -0.3, x2: 0.3, v1: 0, v2: 0, t: 0, energy: 1, released: false }),
    []
  )
  const M = 4,
    m = 1
  const k = 30
  const step = (s, dt) => {
    if (dt === 0) return s
    // Spring while compressed (x2 - x1 < L0); else free
    const L0 = 1.2
    const dx = s.x2 - s.x1
    let F = 0
    if (dx < L0) F = k * (L0 - dx)
    const a1 = -F / M,
      a2 = +F / m
    let next = {
      x1: s.x1 + s.v1 * dt,
      x2: s.x2 + s.v2 * dt,
      v1: s.v1 + a1 * dt,
      v2: s.v2 + a2 * dt,
      t: s.t + dt
    }
    // Reset
    if (next.x2 > 4 || next.x1 < -4) next = { x1: -0.3, x2: 0.3, v1: 0, v2: 0, t: 0 }
    return next
  }
  const [s, , sim] = useSimulation(initial, step)
  const P = M * s.v1 + m * s.v2
  return (
    <div>
      <Plot xRange={[-4.5, 4.5]} yRange={[-1.2, 1.2]} width={680} height={240}>
        <Polyline
          points={[
            [-4.5, -0.5],
            [4.5, -0.5]
          ]}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [s.x1 - 0.4, -0.5],
            [s.x1 + 0.4, -0.5],
            [s.x1 + 0.4, 0.5],
            [s.x1 - 0.4, 0.5]
          ]}
          closed
          fillOpacity={0.18}
        />
        <Polyline
          points={[
            [s.x2 - 0.18, -0.3],
            [s.x2 + 0.18, -0.3],
            [s.x2 + 0.18, 0.3],
            [s.x2 - 0.18, 0.3]
          ]}
          closed
          fillOpacity={0.18}
        />
        <Arrow from={[s.x1, 0.7]} to={[s.x1 + s.v1 * 0.4, 0.7]} opacity={OPACITY.accent} />
        <Arrow from={[s.x2, 0.7]} to={[s.x2 + s.v2 * 0.4, 0.7]} opacity={OPACITY.accent} />
        <Tex
          at={[-4, 1.0]}
          tex={`P_{tot} = ${P.toFixed(3)} \\approx 0`}
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex at={[-4, -1.0]} tex={`M v_1 + m v_2 = 0`} size={11} />
      </Plot>
      <PlayPause
        playing={sim.playing}
        onToggle={() => sim.setPlaying(!sim.playing)}
        onReset={sim.reset}
      />
    </div>
  )
}
// 01.3.6 Impulse vs Time - J = ∫F dt, animated
export function ImpulseVsTime() {
  const F0 = 2.5,
    t0 = 2,
    sigma = 0.5
  const F = t => F0 * Math.exp(-((t - t0) ** 2) / sigma ** 2)
  const [tNow, setTNow] = React.useState(2.0)
  const J = t1 => {
    let s = 0
    const dt = 0.01
    for (let tt = 0; tt < t1; tt += dt) s += F(tt + dt / 2) * dt
    return s
  }
  return (
    <div>
      <Plot xRange={[-0.2, 4]} yRange={[-0.3, 3]} width={620} height={300}>
        <Axes step={1} />
        <Parametric xy={t => [t, F(t)]} t={[0, 4]} opacity={OPACITY.fg} />
        <Polyline
          points={(() => {
            const pts = [[0, 0]]
            for (let tt = 0; tt <= tNow; tt += 0.05) pts.push([tt, F(tt)])
            pts.push([tNow, 0])
            return pts
          })()}
          closed
          fillOpacity={0.18}
          opacity={OPACITY.dim}
        />
        <Dot x={tNow} y={F(tNow)} r={3.5} />
        <Tex at={[0.2, 2.7]} tex={`J(t) = \\int_0^t F\\, dt' = ${J(tNow).toFixed(2)}`} size={11} />
        <Label at={[3.8, 0]} dy={14} anchor="end">
          T
        </Label>
        <Label at={[0, 2.9]} dx={6}>
          F
        </Label>
      </Plot>
      <Slider label="T" value={tNow} min={0} max={4} step={0.02} onChange={setTNow} />
    </div>
  )
}
// 01.3.7 Tsiolkovsky Rocket - Δv = v_e ln(m0/m); integrated trajectory
export function Tsiolkovsky() {
  const ve = 3.0
  // Mass ratio sweep
  return (
    <Plot xRange={[1, 8]} yRange={[0, 7]} width={620} height={300}>
      <Axes step={1} />
      <Parametric xy={r => [r, ve * Math.log(r)]} t={[1, 8]} opacity={OPACITY.fg} />
      <Polyline
        points={[
          [Math.exp(1), 0],
          [Math.exp(1), ve]
        ]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Polyline
        points={[
          [1, ve],
          [Math.exp(1), ve]
        ]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Dot x={Math.exp(1)} y={ve} r={3.5} />
      <Tex
        at={[Math.exp(1), 0]}
        dy={14}
        dx={4}
        tex={`\\dfrac{m_0}{m} = e`}
        size={10}
        opacity={OPACITY.dim}
      />
      <Tex at={[1, ve]} dx={-26} dy={4} tex={`v_e`} size={10} opacity={OPACITY.dim} />
      <Tex at={[1.2, 6.2]} tex={`\\Delta v = v_e \\ln\\dfrac{m_0}{m}`} size={12} />
      <Tex
        at={[7.8, 0]}
        dy={14}
        anchor="end"
        tex={`\\dfrac{M_0}{M}`}
        size={11}
        opacity={OPACITY.dim}
      />
      <Label at={[1, 6.6]} dx={6}>
        ΔV
      </Label>
    </Plot>
  )
}
// 01.3.8 Momentum Flux Stream - ρAv² (continuous flow through area)
export function MomentumFlux() {
  const [t, setT] = React.useState(2.0)
  const N = 24
  const particles = Array.from({ length: N }, (_, i) => {
    const phase = ((i * 0.6 + t * 1.5) % 8) - 1
    const y = -1 + (i % 6) * 0.4
    return { x: phase, y }
  })
  return (
    <div>
      <Plot xRange={[-1, 7]} yRange={[-1.6, 1.6]} width={680} height={260}>
        <Axes step={1} showGrid={false} />
        <Polyline
          points={[
            [3, -1.4],
            [3, 1.4]
          ]}
          opacity={OPACITY.accent}
          dash="3 3"
        />
        <Tex at={[3, 1.4]} dx={6} tex={`A`} size={12} opacity={OPACITY.accent} />
        {particles.map((p, i) => (
          <Arrow
            key={i}
            from={[p.x, p.y]}
            to={[p.x + 0.5, p.y]}
            opacity={p.x > 3 ? OPACITY.dim : OPACITY.fg}
            head={4}
            strokeWidth={0.8}
          />
        ))}
        <Tex at={[-0.8, 1.4]} tex={`\\dot p = \\rho A v^2`} size={12} />
      </Plot>
      <Slider label="T" value={t} min={0} max={6} step={0.05} onChange={setT} />
    </div>
  )
}
// 01.3.9 Momentum Form vs Force Form - F = dp/dt for constant m, variable m
export function MomentumVsForce() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <Plot xRange={[-0.3, 4]} yRange={[-0.3, 2.5]} width={320} height={260}>
        <Axes step={1} />
        <Parametric xy={t => [t, 1 + 0.5 * t]} t={[0, 4]} opacity={OPACITY.fg} />
        <Tex at={[0.2, 2.2]} tex={`m\\,\\text{const} \\Rightarrow F = m\\dot v`} size={10} />
        <Label at={[0, -0.3]} dy={14} anchor="start">
          P(T)
        </Label>
      </Plot>
      <Plot xRange={[-0.3, 4]} yRange={[-0.3, 2.5]} width={320} height={260}>
        <Axes step={1} />
        <Parametric xy={t => [t, (2 - 0.3 * t) * (0.4 * t)]} t={[0, 4]} opacity={OPACITY.fg} />
        <Tex at={[0.2, 2.2]} tex={`F = \\dot m v + m\\dot v`} size={10} />
        <Label at={[0, -0.3]} dy={14} anchor="start">
          P(T) · ROCKET
        </Label>
      </Plot>
    </div>
  )
}


// MODULE 04 - CONSERVATIVE FORCE FIELDS (16 viz). RK4-driven where motion exists.

// 01.4.1 Energy Diagram - particle in U(x), live KE/PE bars
export function EnergyDiagram() {
  // U(x) = 0.4(x²-2)² ; integrate motion at fixed total energy
  const U = x => 0.4 * (x * x - 2) ** 2
  const Ux = x => 0.4 * 2 * (x * x - 2) * 2 * x // dU/dx = 1.6 x (x²-2)
  const initial = React.useMemo(() => ({ x: -1.8, v: 0, t: 0 }), [])
  const step = (s, dt) => {
    if (dt === 0) return s
    const f = (_, y) => [y[1], -Ux(y[0])]
    const next = rk4Step(f, s.t, [s.x, s.v], dt)
    return { x: next[0], v: next[1], t: s.t + dt }
  }
  const [s] = useSimulation(initial, step)
  const E = U(s.x) + 0.5 * s.v * s.v
  return (
    <Plot xRange={[-2.4, 2.4]} yRange={[-0.3, 4]} width={620} height={300}>
      <Axes step={0.5} />
      <Parametric xy={x => [x, U(x)]} t={[-2.2, 2.2]} opacity={OPACITY.fg} />
      <Polyline
        points={[
          [-2.4, E],
          [2.4, E]
        ]}
        opacity={OPACITY.accent}
        dash="3 3"
      />
      <Polyline
        points={[
          [s.x, U(s.x)],
          [s.x, E]
        ]}
        opacity={OPACITY.dim}
      />
      <Dot x={s.x} y={U(s.x)} r={4} />
      <Tex at={[2.4, E]} dx={6} dy={4} tex={`E`} size={11} opacity={OPACITY.accent} />
      <Tex at={[-2.3, 3.7]} tex={`E = T + U`} size={12} />
    </Plot>
  )
}
// 01.4.2 Closed Loop · ∮F·dl = 0 (conservative central field)
export function ConservativeLoop() {
  // Field F = -∇U with U=½kr²  → F = -k r vec
  return (
    <Plot xRange={[-2.5, 2.5]} yRange={[-2.5, 2.5]} width={420} height={380}>
      <Axes step={1} />
      {(() => {
        const arrows = []
        for (let x = -2; x <= 2; x += 0.5)
          for (let y = -2; y <= 2; y += 0.5) {
            const F = [-x, -y]
            const len = Math.hypot(F[0], F[1]) || 1
            arrows.push([x, y, (F[0] / len) * 0.25, (F[1] / len) * 0.25])
          }
        return arrows.map(([x, y, fx, fy], i) => (
          <Arrow
            key={i}
            from={[x, y]}
            to={[x + fx, y + fy]}
            opacity={OPACITY.faint}
            head={3}
            strokeWidth={0.6}
          />
        ))
      })()}
      <CircleSh r={1.4} opacity={OPACITY.accent} />
      <Tex at={[-2.4, 2.3]} tex={`\\oint \\mathbf{F}\\cdot d\\mathbf{l} = 0`} size={11} />
    </Plot>
  )
}
// 01.4.3 Gradient ⊥ Level Curves (U = x² + y²/4 ellipses)
export function GradLevelCurves() {
  const U = (x, y) => x * x + (y * y) / 4
  return (
    <Plot xRange={[-2.5, 2.5]} yRange={[-2.5, 2.5]} width={420} height={380}>
      <Axes step={1} />
      {[0.3, 0.8, 1.5, 2.5, 3.5].map((c, i) => (
        <Parametric
          key={i}
          xy={t => [Math.sqrt(c) * Math.cos(t), 2 * Math.sqrt(c) * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          opacity={OPACITY.dim}
        />
      ))}
      {(() => {
        const out = []
        for (let x = -2; x <= 2; x += 0.7)
          for (let y = -2; y <= 2; y += 0.7) {
            const gx = 2 * x,
              gy = y / 2
            const n = Math.hypot(gx, gy) || 1
            out.push([x, y, (gx / n) * 0.3, (gy / n) * 0.3])
          }
        return out.map(([x, y, fx, fy], i) => (
          <Arrow
            key={i}
            from={[x, y]}
            to={[x + fx, y + fy]}
            opacity={OPACITY.faint}
            head={3}
            strokeWidth={0.6}
          />
        ))
      })()}
      <Tex at={[-2.4, 2.3]} tex={`\\nabla U \\perp \\{U=c\\}`} size={11} />
    </Plot>
  )
}
// 01.4.4 Oscillation in a Potential Well - quartic well, RK4
export function PotentialWellOsc() {
  const U = x => 0.5 * x * x + 0.05 * x ** 4
  const dU = x => x + 0.2 * x ** 3
  const initial = React.useMemo(() => ({ x: 1.8, v: 0, t: 0, trail: [] }), [])
  const step = (s, dt) => {
    if (dt === 0) return s
    const f = (_, y) => [y[1], -dU(y[0])]
    const next = rk4Step(f, s.t, [s.x, s.v], dt)
    const trail = s.trail.concat([[s.t + dt, next[0]]]).slice(-300)
    return { x: next[0], v: next[1], t: s.t + dt, trail }
  }
  const [s] = useSimulation(initial, step)
  return (
    <div>
      <Plot xRange={[-2.2, 2.2]} yRange={[-0.3, 2.4]} width={620} height={220}>
        <Axes step={0.5} />
        <Parametric xy={x => [x, U(x)]} t={[-2.2, 2.2]} opacity={OPACITY.fg} />
        <Dot x={s.x} y={U(s.x)} r={4} />
        <Tex at={[-2.1, 2.1]} tex={`U = \\tfrac{1}{2}x^2 + \\tfrac{1}{20}x^4`} size={11} />
      </Plot>
      <Plot xRange={[0, 12]} yRange={[-2.2, 2.2]} width={620} height={140}>
        <Axes step={2} />
        <Polyline points={s.trail} opacity={OPACITY.dim} />
      </Plot>
    </div>
  )
}
// 01.4.5 Conical Pendulum · Tension does no work
export function ConicalNoWork() {
  const t = useAnimationTime()
  const phi = t * 1.2
  const alpha = (35 * Math.PI) / 180
  const L = 1.5
  const yaw = 0.4
  const bx =
    L * Math.sin(alpha) * Math.cos(phi) * Math.cos(yaw) +
    L * Math.sin(alpha) * Math.sin(phi) * Math.sin(yaw)
  const by = -L * Math.cos(alpha)
  // Tension along string toward pivot
  const tx = -bx * 0.4,
    ty = (0 - by) * 0.4
  // Velocity tangent - perpendicular to string
  const vx = -Math.sin(phi) * 0.6
  return (
    <Plot xRange={[-1.8, 1.8]} yRange={[-1.8, 0.4]} width={520} height={300}>
      <Axes step={0.5} showGrid={false} />
      <Polyline
        points={[
          [-1.5, 0],
          [1.5, 0]
        ]}
        opacity={OPACITY.dim}
      />
      <Polyline
        points={[
          [0, 0],
          [bx, by]
        ]}
        opacity={OPACITY.fg}
      />
      <Parametric
        xy={t => [
          L * Math.sin(alpha) * Math.cos(t) * Math.cos(yaw) +
            L * Math.sin(alpha) * Math.sin(t) * Math.sin(yaw),
          -L * Math.cos(alpha)
        ]}
        t={[0, 2 * Math.PI]}
        opacity={OPACITY.faint}
      />
      <Dot x={bx} y={by} r={5} />
      <Arrow from={[bx, by]} to={[bx + tx, by + ty]} opacity={OPACITY.fg} />
      <Arrow from={[bx, by]} to={[bx + vx, by]} opacity={OPACITY.accent} />
      <Tex at={[bx + tx, by + ty]} dx={6} tex={`\\mathbf{T}`} size={11} />
      <Tex
        at={[bx + vx, by]}
        dx={6}
        dy={-4}
        tex={`\\mathbf{v}`}
        size={11}
        opacity={OPACITY.accent}
      />
      <Tex
        at={[-1.7, 0.25]}
        tex={`\\mathbf{T}\\cdot\\mathbf{v} = 0`}
        size={11}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}
// 01.4.6 Elastic Collision - 1D, momentum + KE conservation, RK4 spring contact
export function ElasticCollision() {
  const m1 = 1,
    m2 = 2
  const initial = React.useMemo(() => ({ x1: -2, v1: 1.5, x2: 1.2, v2: -0.4, t: 0 }), [])
  const step = (s, dt) => {
    if (dt === 0) return s
    const dx = s.x2 - s.x1
    const r0 = 0.6
    let F = 0
    if (dx < r0) F = 200 * (r0 - dx) // stiff repulsion = elastic limit
    const a1 = -F / m1,
      a2 = +F / m2
    let n = {
      x1: s.x1 + s.v1 * dt,
      x2: s.x2 + s.v2 * dt,
      v1: s.v1 + a1 * dt,
      v2: s.v2 + a2 * dt,
      t: s.t + dt
    }
    if (n.x1 > 4 || n.x2 < -4 || n.t > 6) n = { x1: -2, v1: 1.5, x2: 1.2, v2: -0.4, t: 0 }
    return n
  }
  const [s] = useSimulation(initial, step)
  const P = m1 * s.v1 + m2 * s.v2
  const K = 0.5 * m1 * s.v1 * s.v1 + 0.5 * m2 * s.v2 * s.v2
  return (
    <div>
      <Plot xRange={[-4, 4]} yRange={[-1, 1]} width={680} height={180}>
        <Polyline
          points={[
            [-4, -0.3],
            [4, -0.3]
          ]}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [s.x1 - 0.25, -0.3],
            [s.x1 + 0.25, -0.3],
            [s.x1 + 0.25, 0.2],
            [s.x1 - 0.25, 0.2]
          ]}
          closed
          fillOpacity={0.18}
        />
        <Polyline
          points={[
            [s.x2 - 0.35, -0.3],
            [s.x2 + 0.35, -0.3],
            [s.x2 + 0.35, 0.4],
            [s.x2 - 0.35, 0.4]
          ]}
          closed
          fillOpacity={0.18}
        />
        <Arrow from={[s.x1, 0.7]} to={[s.x1 + s.v1 * 0.4, 0.7]} opacity={OPACITY.accent} />
        <Arrow from={[s.x2, 0.7]} to={[s.x2 + s.v2 * 0.4, 0.7]} opacity={OPACITY.accent} />
      </Plot>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 11,
          opacity: 0.5,
          padding: '4px 8px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase'
        }}
      >
        <span>P = {P.toFixed(3)}</span>
        <span>K = {K.toFixed(3)}</span>
      </div>
    </div>
  )
}
// 01.4.7 Stokes' Theorem - line integral = surface integral of curl
export function StokesTheorem() {
  // F = (-y, x) ; curl = 2; ∮F·dl over circle r=R = 2πR² = ∫∫ 2 dA
  return (
    <Plot xRange={[-2.5, 2.5]} yRange={[-2.5, 2.5]} width={420} height={380}>
      <Axes step={1} />
      {(() => {
        const out = []
        for (let x = -2; x <= 2; x += 0.5)
          for (let y = -2; y <= 2; y += 0.5) {
            const F = [-y, x]
            const n = Math.hypot(...F) || 1
            out.push([x, y, (F[0] / n) * 0.28, (F[1] / n) * 0.28])
          }
        return out.map(([x, y, fx, fy], i) => (
          <Arrow
            key={i}
            from={[x, y]}
            to={[x + fx, y + fy]}
            opacity={OPACITY.faint}
            head={3}
            strokeWidth={0.6}
          />
        ))
      })()}
      <CircleSh r={1.5} opacity={OPACITY.accent} dash="3 3" />
      <Tex
        at={[-2.4, 2.3]}
        tex={`\\oint \\mathbf{F}\\cdot d\\mathbf{l} = \\iint (\\nabla\\times\\mathbf{F})\\cdot d\\mathbf{A}`}
        size={11}
      />
    </Plot>
  )
}
// 01.4.8 Path-Dependent Work - non-conservative force F = (y, 0); two paths
export function PathDependentWork() {
  // Path 1: along x then up. W = ∫y(x) dx (=0 along bottom)
  // Path 2: up then along x at y=1. W = ∫1 dx = 1
  return (
    <Plot xRange={[-0.4, 2.2]} yRange={[-0.4, 1.6]} width={520} height={260}>
      <Axes step={0.5} />
      <Polyline
        points={[
          [0, 0],
          [1.5, 0],
          [1.5, 1]
        ]}
        opacity={OPACITY.fg}
      />
      <Polyline
        points={[
          [0, 0],
          [0, 1],
          [1.5, 1]
        ]}
        opacity={OPACITY.accent}
      />
      <Tex at={[0.7, -0.05]} dy={14} anchor="middle" tex={`W_1 = 0`} size={11} />
      <Tex
        at={[0.7, 1.05]}
        dy={-6}
        anchor="middle"
        tex={`W_2 = 1.5`}
        size={11}
        opacity={OPACITY.accent}
      />
      <Tex at={[-0.3, 1.5]} tex={`F = y\\,\\hat{i}`} size={11} />
    </Plot>
  )
}
// 01.4.9 Spring Force Field - F = -kr radial
export function SpringFieldViz() {
  return (
    <Plot xRange={[-2.5, 2.5]} yRange={[-2.5, 2.5]} width={420} height={380}>
      <Axes step={1} />
      {(() => {
        const out = []
        for (let x = -2; x <= 2; x += 0.5)
          for (let y = -2; y <= 2; y += 0.5) {
            if (x === 0 && y === 0) continue
            const r = Math.hypot(x, y)
            const F = [-x, -y]
            const s = 0.18
            out.push([x, y, F[0] * s, F[1] * s])
          }
        return out.map(([x, y, fx, fy], i) => (
          <Arrow
            key={i}
            from={[x, y]}
            to={[x + fx, y + fy]}
            opacity={OPACITY.dim}
            head={3}
            strokeWidth={0.6}
          />
        ))
      })()}
      <Tex at={[-2.4, 2.3]} tex={`\\mathbf{F} = -k\\mathbf{r}`} size={11} />
    </Plot>
  )
}
// 01.4.10 Area Under Force Curve = Work
export function AreaUnderForce() {
  const F = x => 0.5 + 0.5 * Math.sin(x * 1.3)
  const t = useAnimationTime()
  const xNow = ((t * 0.5) % 4) + 0.01
  const W = (() => {
    let s = 0
    const dx = 0.01
    for (let x = 0; x < xNow; x += dx) s += F(x + dx / 2) * dx
    return s
  })()
  return (
    <Plot xRange={[-0.3, 4]} yRange={[-0.3, 1.4]} width={620} height={260}>
      <Axes step={1} />
      <Parametric xy={x => [x, F(x)]} t={[0, 4]} opacity={OPACITY.fg} />
      <Polyline
        points={(() => {
          const pts = [[0, 0]]
          for (let x = 0; x <= xNow; x += 0.05) pts.push([x, F(x)])
          pts.push([xNow, 0])
          return pts
        })()}
        closed
        fillOpacity={0.2}
        opacity={OPACITY.dim}
      />
      <Tex at={[0.2, 1.25]} tex={`W = \\int F\\,dx = ${W.toFixed(2)}`} size={11} />
    </Plot>
  )
}
// 01.4.11 From U to F · F = -dU/dx
export function FromUtoF() {
  const U = x => 0.25 * (x - 1) ** 2 * (x + 1) ** 2
  const dU = x => 0.5 * (x - 1) * (x + 1) * (2 * x)
  return (
    <div>
      <Plot xRange={[-2, 2]} yRange={[-0.5, 2.5]} width={620} height={200}>
        <Axes step={0.5} />
        <Parametric xy={x => [x, U(x)]} t={[-2, 2]} opacity={OPACITY.fg} />
        <Tex at={[-1.9, 2.2]} tex={`U(x)`} size={11} />
      </Plot>
      <Plot xRange={[-2, 2]} yRange={[-2.5, 2.5]} width={620} height={180}>
        <Axes step={0.5} />
        <Parametric xy={x => [x, -dU(x)]} t={[-2, 2]} opacity={OPACITY.accent} />
        <Tex at={[-1.9, 2.0]} tex={`F = -\\dfrac{dU}{dx}`} size={11} opacity={OPACITY.accent} />
      </Plot>
    </div>
  )
}
// 01.4.12 Gradient on a Hill - contour map + ∇ arrows
export function GradientHill() {
  const U = (x, y) => Math.exp(-(x * x + y * y) / 3)
  return (
    <Plot xRange={[-2.5, 2.5]} yRange={[-2.5, 2.5]} width={420} height={380}>
      <Axes step={1} />
      {[0.2, 0.4, 0.6, 0.8].map((c, i) => (
        <Parametric
          key={i}
          xy={t => [
            Math.sqrt(-3 * Math.log(c)) * Math.cos(t),
            Math.sqrt(-3 * Math.log(c)) * Math.sin(t)
          ]}
          t={[0, 2 * Math.PI]}
          opacity={OPACITY.dim}
        />
      ))}
      {(() => {
        const out = []
        for (let x = -2; x <= 2; x += 0.7)
          for (let y = -2; y <= 2; y += 0.7) {
            const fac = Math.exp(-(x * x + y * y) / 3)
            const gx = ((-2 * x) / 3) * fac,
              gy = ((-2 * y) / 3) * fac
            if (Math.hypot(gx, gy) < 0.02) continue
            out.push([x, y, -gx, -gy]) // direction of steepest descent
          }
        return out.map(([x, y, gx, gy], i) => (
          <Arrow
            key={i}
            from={[x, y]}
            to={[x + gx * 1.5, y + gy * 1.5]}
            opacity={OPACITY.faint}
            head={3}
            strokeWidth={0.6}
          />
        ))
      })()}
      <Tex at={[-2.4, 2.3]} tex={`-\\nabla U`} size={11} />
    </Plot>
  )
}
// 01.4.13 Paddle Wheel · Curl
export function PaddleWheelCurl() {
  const t = useAnimationTime()
  const wheels = [
    { c: [-1.2, 0.8], om: 1, label: '+' },
    { c: [1.2, 0.8], om: -1, label: '−' },
    { c: [0, -0.8], om: 0, label: '0' }
  ]
  return (
    <Plot xRange={[-2.5, 2.5]} yRange={[-2, 2]} width={520} height={300}>
      <Axes step={1} />
      {(() => {
        const out = []
        for (let x = -2; x <= 2; x += 0.5)
          for (let y = -2; y <= 2; y += 0.5) {
            const F = [-y, x]
            const n = Math.hypot(...F) || 1
            out.push([x, y, (F[0] / n) * 0.22, (F[1] / n) * 0.22])
          }
        return out.map(([x, y, fx, fy], i) => (
          <Arrow
            key={i}
            from={[x, y]}
            to={[x + fx, y + fy]}
            opacity={OPACITY.faint}
            head={3}
            strokeWidth={0.6}
          />
        ))
      })()}
      {wheels.map((w, i) => (
        <g key={i}>
          <CircleSh cx={w.c[0]} cy={w.c[1]} r={0.35} opacity={OPACITY.fg} />
          <Polyline
            points={[
              [w.c[0] + 0.35 * Math.cos(w.om * t), w.c[1] + 0.35 * Math.sin(w.om * t)],
              [w.c[0] - 0.35 * Math.cos(w.om * t), w.c[1] - 0.35 * Math.sin(w.om * t)]
            ]}
            opacity={OPACITY.fg}
          />
          <Tex at={w.c} dx={20} tex={w.label} size={11} opacity={OPACITY.accent} />
        </g>
      ))}
    </Plot>
  )
}
// 01.4.14 Kepler Equal Areas - integrate Kepler orbit, sweep area
export function KeplerEqualAreas() {
  // Use vis-viva at perihelion. ε=0.6 ellipse around mass at focus
  const e = 0.6,
    a = 1.5
  const initial = React.useMemo(() => {
    const rp = a * (1 - e)
    const vp = Math.sqrt((1 + e) / (a * (1 - e))) // GM=1
    return { y: [rp, 0], v: [0, vp], trail: [], t: 0, areas: [], lastSweepStart: [rp, 0] }
  }, [])
  const step = (s, dt) => {
    if (dt === 0) return s
    const f = (_, y) => {
      const r = Math.hypot(y[0], y[1])
      const r3 = r * r * r
      return [y[2], y[3], -y[0] / r3, -y[1] / r3]
    }
    const next = rk4Step(f, s.t, [s.y[0], s.y[1], s.v[0], s.v[1]], dt)
    const trail = s.trail.concat([[next[0], next[1]]]).slice(-2000)
    return { y: [next[0], next[1]], v: [next[2], next[3]], trail, t: s.t + dt }
  }
  const [s] = useSimulation(initial, step, { dtMax: 0.005 })
  // Sweep wedges every period/8
  const period = 2 * Math.PI * Math.pow(a, 1.5)
  const phase = (s.t % period) / period
  return (
    <Plot xRange={[-3.5, 1.5]} yRange={[-2.2, 2.2]} width={560} height={340}>
      <Axes step={1} />
      <Dot x={0} y={0} r={4} />
      <Polyline points={s.trail} opacity={OPACITY.dim} />
      {/* Sweep wedge from origin */}
      <Polyline
        points={[[0, 0], s.y, s.trail[s.trail.length - 20] || s.y]}
        closed
        fillOpacity={0.25}
      />
      <Dot x={s.y[0]} y={s.y[1]} r={4} opacity={OPACITY.accent} />
      <Tex at={[-3.4, 2.0]} tex={`\\dfrac{dA}{dt} = \\dfrac{L}{2m} = \\text{const}`} size={11} />
    </Plot>
  )
}
// 01.4.15 Effective Potential V(r)
export function EffectivePotentialPlot() {
  // V_eff = L²/(2mr²) - GMm/r ; m=1, GM=1, L=1
  const V = r => 0.5 / (r * r) - 1 / r
  return (
    <Plot xRange={[0.1, 5]} yRange={[-0.8, 1.2]} width={620} height={300}>
      <Axes step={1} />
      <Parametric xy={r => [r, V(r)]} t={[0.3, 5]} opacity={OPACITY.fg} />
      <Parametric xy={r => [r, 0.5 / (r * r)]} t={[0.3, 5]} opacity={OPACITY.faint} dash="2 3" />
      <Parametric xy={r => [r, -1 / r]} t={[0.3, 5]} opacity={OPACITY.faint} dash="2 3" />
      {/* min at r=1, V=-1/2 */}
      <Dot x={1} y={-0.5} r={3} opacity={OPACITY.accent} />
      <Tex at={[1, -0.5]} dx={6} tex={`r_0`} size={11} opacity={OPACITY.accent} />
      <Tex at={[2.5, 0.9]} tex={`V_{eff}(r) = \\dfrac{L^2}{2mr^2} - \\dfrac{GMm}{r}`} size={11} />
    </Plot>
  )
}
// 01.4.16 Polar Frame Decomposition - radial + tangential acceleration
export function PolarDecomp() {
  const t = useAnimationTime()
  const r = 1.5,
    om = 1.0
  const th = om * t
  const px = r * Math.cos(th),
    py = r * Math.sin(th)
  const er = [Math.cos(th), Math.sin(th)]
  const eth = [-Math.sin(th), Math.cos(th)]
  // For circular motion: a = -ω²r ê_r
  const a_r = -om * om * r
  return (
    <Plot xRange={[-2.3, 2.3]} yRange={[-2.3, 2.3]} width={400} height={380}>
      <Axes step={1} />
      <CircleSh r={r} opacity={OPACITY.faint} />
      <Polyline
        points={[
          [0, 0],
          [px, py]
        ]}
        opacity={OPACITY.dim}
      />
      <Dot x={px} y={py} r={4} />
      <Arrow from={[px, py]} to={[px + a_r * er[0] * 0.5, py + a_r * er[1] * 0.5]} />
      <Arrow from={[px, py]} to={[px + er[0] * 0.6, py + er[1] * 0.6]} opacity={OPACITY.accent} />
      <Arrow from={[px, py]} to={[px + eth[0] * 0.6, py + eth[1] * 0.6]} opacity={OPACITY.accent} />
      <Tex
        at={[-2.2, 2.1]}
        tex={`\\mathbf{a} = (\\ddot r - r\\dot\\theta^2)\\hat e_r + (r\\ddot\\theta + 2\\dot r\\dot\\theta)\\hat e_\\theta`}
        size={10}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}


// Module 05 - Angular Momentum (11 viz)

// 01.5.1 L = r × p geometry
export function AngMomGeom() {
  const r = [2, 0.5],
    p = [0.6, 1.6]
  return (
    <Plot xRange={[-0.5, 4]} yRange={[-0.3, 2.5]} width={520} height={300}>
      <Axes step={1} />
      <Arrow from={[0, 0]} to={r} opacity={OPACITY.dim} />
      <Arrow from={r} to={[r[0] + p[0], r[1] + p[1]]} opacity={OPACITY.fg} />
      <Polyline
        points={[[0, 0], [r[0] + p[0], r[1] + p[1]], r]}
        closed
        fillOpacity={0.1}
        opacity={OPACITY.faint}
      />
      <Tex at={r} dx={-22} dy={14} tex={`\\mathbf{r}`} size={11} />
      <Tex at={[r[0] + p[0], r[1] + p[1]]} dx={6} tex={`\\mathbf{p}`} size={11} />
      <Tex at={[-0.4, 2.3]} tex={`L = |\\mathbf{r}\\times\\mathbf{p}|`} size={12} />
    </Plot>
  )
}
// 01.5.2 Sliding block - two origins
export function SlidingTwoOrigins() {
  const t = useAnimationTime()
  const x = ((t * 0.6) % 5) - 2
  const O1 = [0, 0],
    O2 = [0, -1.5]
  return (
    <Plot xRange={[-3, 3]} yRange={[-2, 1]} width={620} height={260}>
      <Axes step={1} showGrid={false} />
      <Polyline
        points={[
          [-3, 0],
          [3, 0]
        ]}
        opacity={OPACITY.dim}
      />
      <Dot x={x} y={0.15} r={6} />
      <Arrow from={[x, 0.5]} to={[x + 0.6, 0.5]} opacity={OPACITY.accent} />
      <Polyline points={[O1, [x, 0.15]]} opacity={OPACITY.faint} dash="2 3" />
      <Polyline points={[O2, [x, 0.15]]} opacity={OPACITY.faint} dash="2 3" />
      <Dot x={O1[0]} y={O1[1]} r={3} />
      <Dot x={O2[0]} y={O2[1]} r={3} />
      <Tex at={O1} dx={-12} dy={-4} tex={`O`} size={11} opacity={OPACITY.dim} />
      <Tex at={O2} dx={-14} dy={-4} tex={`O'`} size={11} opacity={OPACITY.dim} />
      <Tex at={[-2.9, 0.8]} tex={`L_O = 0,\\ \\ L_{O'} = m v h`} size={11} />
    </Plot>
  )
}
// 01.5.3 Conical pendulum - exact ω from cos α = g/(ω²L)
export function ConicalPendulum2() {
  const t = useAnimationTime()
  const ang = (35 * Math.PI) / 180
  const L = 1.6
  const om = Math.sqrt(9.81 / (L * Math.cos(ang)))
  const ph = t * om * 0.4
  const r = L * Math.sin(ang),
    h = -L * Math.cos(ang)
  const c = 0.866,
    s = 0.5
  const iso = (x, y, z) => [x - z * c * 0.6, y - z * s * 0.6]
  const O = iso(0, 0, 0)
  const B = iso(r * Math.cos(ph), h, r * Math.sin(ph))
  return (
    <Plot xRange={[-2, 2]} yRange={[-2, 0.6]} width={520} height={280}>
      <Parametric
        xy={p => iso(r * Math.cos(p), h, r * Math.sin(p))}
        t={[0, 2 * Math.PI]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Polyline points={[O, B]} opacity={OPACITY.fg} />
      <Dot x={B[0]} y={B[1]} r={5} />
      <Arrow from={[0, 0]} to={[0, -1.2]} opacity={OPACITY.dim} />
      <Tex at={[-1.9, 0.5]} tex={`L_z\\ \\text{conserved}`} size={12} />
    </Plot>
  )
}
// 01.5.4 Torque & lever arm
export function TorqueLever() {
  const r = [2.4, 0],
    F = [0.8, 1.6]
  const Fmag = Math.hypot(F[0], F[1])
  const Fhat = [F[0] / Fmag, F[1] / Fmag]
  const dot = (r[0] * F[0] + r[1] * F[1]) / Fmag
  const proj = [dot * Fhat[0], dot * Fhat[1]]
  return (
    <Plot xRange={[-0.5, 4]} yRange={[-0.5, 2.5]} width={520} height={300}>
      <Axes step={1} showGrid={false} />
      <Arrow from={[0, 0]} to={r} opacity={OPACITY.dim} />
      <Arrow from={r} to={[r[0] + F[0], r[1] + F[1]]} opacity={OPACITY.fg} />
      <Polyline points={[[0, 0], proj]} opacity={OPACITY.accent} />
      <Polyline points={[proj, r]} opacity={OPACITY.faint} dash="2 3" />
      <Tex at={r} dx={-12} dy={14} tex={`\\mathbf{r}`} size={11} />
      <Tex at={[r[0] + F[0], r[1] + F[1]]} dx={6} tex={`\\mathbf{F}`} size={11} />
      <Tex at={[-0.4, 2.3]} tex={`\\tau = r\\, F\\sin\\theta`} size={12} />
    </Plot>
  )
}
// 01.5.5 Moments of Inertia - table
export function MomentsTable() {
  const items = [
    ['Hoop', `I = MR^2`],
    ['Disk', `I = \\tfrac{1}{2}MR^2`],
    ['Sphere', `I = \\tfrac{2}{5}MR^2`],
    ['Spherical shell', `I = \\tfrac{2}{3}MR^2`],
    ['Rod (center)', `I = \\tfrac{1}{12}ML^2`]
  ]
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr 2fr',
        columnGap: 24,
        rowGap: 12,
        padding: '20px 40px',
        minWidth: 520,
        fontSize: 12,
        color: FG
      }}
    >
      {items.map((row, i) => (
        <React.Fragment key={i}>
          <div style={{ opacity: OPACITY.dim }}>{String(i + 1).padStart(2, '0')}</div>
          <div style={{ letterSpacing: '0.18em', textTransform: 'uppercase', opacity: OPACITY.fg }}>
            {row[0]}
          </div>
          <div
            ref={el => el && katex.render(row[1], el, { throwOnError: false })}
            style={{ opacity: OPACITY.fg }}
          />
        </React.Fragment>
      ))}
    </div>
  )
}
// 01.5.6 Parallel Axis: I = I_cm + Md²
export function ParallelAxis() {
  return (
    <Plot xRange={[-3, 3]} yRange={[-2, 2]} width={520} height={300}>
      <Axes step={1} showGrid={false} />
      <CircleSh cx={0} cy={0} r={1.4} opacity={OPACITY.dim} />
      <Dot x={0} y={0} r={3} />
      <Polyline
        points={[
          [2, -1.8],
          [2, 1.8]
        ]}
        opacity={OPACITY.accent}
        dash="3 3"
      />
      <Polyline
        points={[
          [0, -1.8],
          [0, 1.8]
        ]}
        opacity={OPACITY.fg}
        dash="3 3"
      />
      <Polyline
        points={[
          [0, 0],
          [2, 0]
        ]}
        opacity={OPACITY.dim}
      />
      <Tex at={[1, 0]} dy={-4} tex={`d`} size={11} opacity={OPACITY.dim} />
      <Tex at={[-2.9, 1.7]} tex={`I = I_{cm} + Md^2`} size={12} />
    </Plot>
  )
}
// 01.5.7 Physical pendulum - RK4 integrate θ̈ = -(mgd/I) sin θ
export function PhysicalPendulum() {
  const I = 1.0,
    m = 1,
    g = 9.81,
    d = 0.6
  const w0sq = (m * g * d) / I
  const initial = React.useMemo(() => ({ th: 0.9, w: 0, t: 0 }), [])
  const stepFn = (s, dt) => {
    if (dt === 0) return s
    const f = (_, y) => [y[1], -w0sq * Math.sin(y[0])]
    const next = rk4Step(f, s.t, [s.th, s.w], dt)
    return { th: next[0], w: next[1], t: s.t + dt }
  }
  const [s] = useSimulation(initial, stepFn)
  return (
    <Plot xRange={[-2, 2]} yRange={[-2.4, 0.4]} width={420} height={300}>
      <Polyline
        points={[
          [-2, 0],
          [2, 0]
        ]}
        opacity={OPACITY.dim}
      />
      <Polyline
        points={[
          [0, 0],
          [Math.sin(s.th) * 1.8, -Math.cos(s.th) * 1.8]
        ]}
        opacity={OPACITY.fg}
      />
      <Dot x={0} y={0} r={3.5} />
      <Dot x={Math.sin(s.th) * 1.8} y={-Math.cos(s.th) * 1.8} r={6} />
      <Tex at={[-1.9, 0.3]} tex={`T = 2\\pi\\sqrt{\\dfrac{I}{mgd}}`} size={11} />
    </Plot>
  )
}
// 01.5.8 Rolling wheel - exact cycloid; rolling without slipping
export function RollingWheel() {
  const t = useAnimationTime()
  const R = 0.7
  const phi = (t * 0.6) % (4 * Math.PI)
  const xc = R * phi
  const path = []
  for (let k = 0; k <= 200; k++) {
    const f = (k / 200) * 4 * Math.PI
    path.push([R * (f - Math.sin(f)), R * (1 - Math.cos(f))])
  }
  const px = R * (phi - Math.sin(phi)),
    py = R * (1 - Math.cos(phi))
  return (
    <Plot xRange={[-0.5, 4 * Math.PI * R + 0.5]} yRange={[-0.3, 2.2]} width={680} height={280}>
      <Polyline
        points={[
          [-0.5, 0],
          [4 * Math.PI * R + 0.5, 0]
        ]}
        opacity={OPACITY.dim}
      />
      <Polyline points={path} opacity={OPACITY.dim} />
      <CircleSh cx={xc} cy={R} r={R} opacity={OPACITY.fg} />
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((a, i) => (
        <Polyline
          key={i}
          points={[
            [xc, R],
            [xc + R * Math.cos(a - phi), R + R * Math.sin(a - phi)]
          ]}
          opacity={OPACITY.faint}
        />
      ))}
      <Dot x={px} y={py} r={3.5} />
      <Tex at={[0.2, 2]} tex={`v_{\\text{contact}} = 0,\\ v_{\\text{top}} = 2v_{cm}`} size={11} />
    </Plot>
  )
}
// 01.5.9 Drum on Incline - RK4 integrate ẍ = g sin θ / (1 + I/MR²)
export function DrumOnIncline() {
  const ang = (25 * Math.PI) / 180
  const g = 9.81
  const a_lin = (g * Math.sin(ang)) / (1 + 0.5) // solid cylinder
  const initial = React.useMemo(() => ({ s: 0, v: 0, t: 0 }), [])
  const step = (st, dt) => {
    if (dt === 0) return st
    let s = st.s + st.v * dt + 0.5 * a_lin * dt * dt
    let v = st.v + a_lin * dt
    if (s > 5) {
      s = 0
      v = 0
    }
    return { s, v, t: st.t + dt }
  }
  const [s] = useSimulation(initial, step)
  const cx = s.s * Math.cos(ang) + 0.3 * Math.sin(ang)
  const cy = -s.s * Math.sin(ang) + 0.3 * Math.cos(ang)
  return (
    <Plot xRange={[-0.5, 5.5]} yRange={[-3, 0.6]} width={620} height={280}>
      <Polyline
        points={[
          [0, 0],
          [5, -5 * Math.tan(ang)]
        ]}
        opacity={OPACITY.dim}
      />
      <CircleSh cx={cx} cy={cy} r={0.3} opacity={OPACITY.fg} />
      <Tex
        at={[5.4, 0.5]}
        anchor="end"
        tex={`a = \\dfrac{g\\sin\\theta}{1 + \\frac{I}{MR^2}}`}
        size={11}
      />
    </Plot>
  )
}
// 01.5.10 Bohr atom - quantized radii r_n ∝ n²
export function BohrAtom() {
  return (
    <Plot xRange={[-4, 4]} yRange={[-3, 3]} width={520} height={340}>
      {[1, 2, 3].map((n, i) => (
        <CircleSh
          key={i}
          cx={0}
          cy={0}
          r={n * n * 0.4}
          opacity={i === 0 ? OPACITY.fg : OPACITY.dim}
        />
      ))}
      <Dot x={0} y={0} r={4} />
      <Tex at={[0, 0]} dx={6} dy={-6} tex={`+`} size={12} />
      <Dot x={0.4} y={0} r={3} />
      <Dot x={1.6 * Math.cos(2)} y={1.6 * Math.sin(2)} r={3} opacity={OPACITY.dim} />
      <Dot x={3.6 * Math.cos(4)} y={3.6 * Math.sin(4)} r={3} opacity={OPACITY.dim} />
      <Tex at={[-3.9, 2.6]} tex={`L_n = n\\hbar`} size={12} />
    </Plot>
  )
}
// 01.5.11 Chasles two-mass rod - translation + rotation about CM
export function ChaslesRod() {
  const t = useAnimationTime()
  const ph = t * 0.6
  const xc = ((t * 0.4) % 4) - 1
  const L = 1
  return (
    <Plot xRange={[-2, 4]} yRange={[-1.5, 1.5]} width={620} height={260}>
      <Axes step={1} showGrid={false} />
      <Polyline
        points={[
          [xc - L * Math.cos(ph), -L * Math.sin(ph)],
          [xc + L * Math.cos(ph), L * Math.sin(ph)]
        ]}
        opacity={OPACITY.fg}
      />
      <Dot x={xc - L * Math.cos(ph)} y={-L * Math.sin(ph)} r={5} />
      <Dot x={xc + L * Math.cos(ph)} y={L * Math.sin(ph)} r={5} />
      <Dot x={xc} y={0} r={3} fill={false} />
      <Tex at={[-1.9, 1.3]} tex={`\\text{translation} + \\text{rotation about CM}`} size={11} />
    </Plot>
  )
}


// Module 06 - Central Force / Kepler (6 viz)

// 01.6.1 Two-Body Orbit (Reduced Mass)
export function TwoBodyOrbit() {
  const t = useAnimationTime()
  const m1 = 1,
    m2 = 3
  const a = 1.6,
    e = 0.4
  const M = (t * 0.6) % (2 * Math.PI)
  let E = M
  for (let k = 0; k < 10; k++) E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E))
  const b = a * Math.sqrt(1 - e * e)
  const x = a * (Math.cos(E) - e),
    y = b * Math.sin(E)
  // CM at origin; r1 = (m2/(m1+m2)) (separation), r2 = -(m1/(m1+m2)) sep
  const r1x = (m2 / (m1 + m2)) * x,
    r1y = (m2 / (m1 + m2)) * y
  const r2x = -(m1 / (m1 + m2)) * x,
    r2y = -(m1 / (m1 + m2)) * y
  return (
    <Plot xRange={[-2.5, 2.5]} yRange={[-2, 2]} width={520} height={340}>
      <Axes step={1} showGrid={false} />
      <Parametric
        xy={th => [(m2 / (m1 + m2)) * a * (Math.cos(th) - e), (m2 / (m1 + m2)) * b * Math.sin(th)]}
        t={[0, 2 * Math.PI]}
        opacity={OPACITY.dim}
      />
      <Parametric
        xy={th => [
          -(m1 / (m1 + m2)) * a * (Math.cos(th) - e),
          -(m1 / (m1 + m2)) * b * Math.sin(th)
        ]}
        t={[0, 2 * Math.PI]}
        opacity={OPACITY.dim}
      />
      <Dot x={r1x} y={r1y} r={5} />
      <Dot x={r2x} y={r2y} r={9} />
      <Dot x={0} y={0} r={2} fill={false} />
      <Tex at={[-2.4, 1.8]} tex={`\\mu = \\dfrac{m_1 m_2}{m_1 + m_2}`} size={11} />
    </Plot>
  )
}
// 01.6.2 Effective Potential
export function EffPotV() {
  const Veff = r => 1 / (r * r) - 2 / r
  return (
    <Plot xRange={[0.2, 6]} yRange={[-1.2, 2]} width={620} height={300}>
      <Axes step={1} />
      <Parametric xy={r => [r, Veff(r)]} t={[0.4, 6]} opacity={OPACITY.fg} />
      <Polyline
        points={[
          [0.2, -1],
          [6, -1]
        ]}
        opacity={OPACITY.accent}
        dash="3 3"
      />
      <Polyline
        points={[
          [0.2, -0.3],
          [6, -0.3]
        ]}
        opacity={OPACITY.dim}
        dash="3 3"
      />
      <Polyline
        points={[
          [0.2, 0.5],
          [6, 0.5]
        ]}
        opacity={OPACITY.faint}
        dash="3 3"
      />
      <Tex at={[5, -1]} dx={6} tex={`E_{\\text{circ}}`} size={11} opacity={OPACITY.accent} />
      <Tex at={[5, -0.3]} dx={6} tex={`E_{\\text{ellip}}`} size={11} opacity={OPACITY.dim} />
      <Tex at={[5, 0.5]} dx={6} tex={`E>0`} size={11} opacity={OPACITY.faint} />
    </Plot>
  )
}
// 01.6.3 Conic Orbits (Interactive)
export function ConicOrbits() {
  const [E, setE] = React.useState(-0.5)
  // Keep L fixed, vary E. Use μk=1, L=1 → semi-latus rectum p = L²/μk = 1
  // ε = √(1 + 2EL²/μk²). Bound when E<0 → ε<1 ellipse.
  const eps = Math.sqrt(Math.max(0, 1 + 2 * E))
  // r = p / (1 + ε cos θ)
  const path = []
  for (let k = 0; k <= 360; k++) {
    const th = (k / 360) * 2 * Math.PI - Math.PI
    const denom = 1 + eps * Math.cos(th)
    if (denom < 0.05) continue
    const r = 1 / denom
    if (r > 8) continue
    path.push([r * Math.cos(th), r * Math.sin(th)])
  }
  return (
    <div>
      <Plot xRange={[-5, 3]} yRange={[-3, 3]} width={620} height={360}>
        <Axes step={1} />
        <Polyline points={path} opacity={OPACITY.fg} />
        <Dot x={0} y={0} r={4} />
        <Tex
          at={[-4.8, 2.7]}
          tex={`r = \\dfrac{p}{1 + \\varepsilon\\cos\\theta},\\ \\ \\varepsilon = ${eps.toFixed(2)}`}
          size={11}
        />
        <Tex
          at={[-4.8, 2.2]}
          tex={
            eps < 0.05
              ? '\\text{circle}'
              : eps < 1
                ? '\\text{ellipse}'
                : Math.abs(eps - 1) < 0.05
                  ? '\\text{parabola}'
                  : '\\text{hyperbola}'
          }
          size={11}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider label="E" value={E} min={-0.95} max={1.5} step={0.02} onChange={setE} />
    </div>
  )
}
// 01.6.4 Ellipse Geometry
export function EllipseGeom() {
  const a = 2.4,
    e = 0.6,
    c = a * e,
    b = a * Math.sqrt(1 - e * e)
  return (
    <Plot xRange={[-3.2, 3.2]} yRange={[-2, 2]} width={620} height={320}>
      <Axes step={1} showGrid={false} />
      <Parametric
        xy={t => [a * Math.cos(t), b * Math.sin(t)]}
        t={[0, 2 * Math.PI]}
        opacity={OPACITY.fg}
      />
      <Dot x={c} y={0} r={3.5} />
      <Dot x={-c} y={0} r={3.5} />
      <Polyline
        points={[
          [-a, 0],
          [a, 0]
        ]}
        opacity={OPACITY.dim}
        dash="3 3"
      />
      <Polyline
        points={[
          [0, -b],
          [0, b]
        ]}
        opacity={OPACITY.faint}
        dash="3 3"
      />
      {/* Sample point with focal radii */}
      {(() => {
        const th = 1.0
        const px = a * Math.cos(th),
          py = b * Math.sin(th)
        return (
          <>
            <Polyline
              points={[
                [c, 0],
                [px, py]
              ]}
              opacity={OPACITY.accent}
            />
            <Polyline
              points={[
                [-c, 0],
                [px, py]
              ]}
              opacity={OPACITY.accent}
            />
            <Dot x={px} y={py} r={3} />
          </>
        )
      })()}
      <Tex at={[c, 0]} dx={6} dy={-4} tex={`F`} size={11} />
      <Tex at={[-c, 0]} dx={-18} dy={-4} tex={`F'`} size={11} />
      <Tex at={[-3, 1.7]} tex={`r + r' = 2a`} size={12} />
    </Plot>
  )
}
// 01.6.5 Hohmann Transfer
export function HohmannTransfer() {
  const r1 = 1.2,
    r2 = 2.6
  const a = (r1 + r2) / 2
  const e = (r2 - r1) / (r2 + r1)
  const b = a * Math.sqrt(1 - e * e)
  const cf = a * e
  return (
    <Plot xRange={[-3.5, 3.5]} yRange={[-3, 3]} width={520} height={400}>
      <Axes step={1} showGrid={false} />
      <Dot x={0} y={0} r={5} />
      <CircleSh cx={0} cy={0} r={r1} opacity={OPACITY.dim} />
      <CircleSh cx={0} cy={0} r={r2} opacity={OPACITY.dim} />
      <Parametric
        xy={t => [a * Math.cos(t) - cf, b * Math.sin(t)]}
        t={[0, 2 * Math.PI]}
        opacity={OPACITY.fg}
        dash="3 3"
      />
      <Dot x={r1} y={0} r={3} />
      <Dot x={-r2} y={0} r={3} />
      <Tex at={[r1, 0]} dx={6} dy={-4} tex={`\\Delta v_1`} size={11} opacity={OPACITY.accent} />
      <Tex at={[-r2, 0]} dx={-50} dy={-4} tex={`\\Delta v_2`} size={11} opacity={OPACITY.accent} />
    </Plot>
  )
}
// 01.6.6 Kepler Equal Areas (compact)
export function KeplerEA2() {
  return <KeplerEqualAreas />
}


// Module 07 - Non-Inertial Frames (1 viz)

// 01.7.1 Coriolis - true rotating frame: integrate trajectory in inertial frame, then view from rotating frame
export function CoriolisDrop() {
  const Omega = 0.8; // rotation rate
  // Inertial: particle starts at (R, 0) with no velocity, rotating frame sees Coriolis + centrifugal
  // Inertial trajectory: free particle. r(t) = r0 + v0 t. With v0=(0, vθ) tangential, particle moves in a straight line.
  const initial = React.useMemo(() => ({ x: 1.5, y: 0, vx: 0, vy: 1.0, t: 0, trailRot: [], trailIne: [] }), []);
  const step = (s, dt) => {
    if (dt === 0) return s;
    // Free particle in inertial frame: no forces
    let nx = s.x + s.vx * dt;
    let ny = s.y + s.vy * dt;
    if (s.t > 6) { nx = 1.5; ny = 0; s = { ...s, vx: 0, vy: 1.0, t: 0, trailRot: [], trailIne: [] }; nx = 1.5; ny = 0; }
    // Map to rotating frame at angle Ωt: x' = x cosΩt + y sinΩt, y' = -x sinΩt + y cosΩt
    const c = Math.cos(Omega * s.t), si = Math.sin(Omega * s.t);
    const xr = nx * c + ny * si;
    const yr = -nx * si + ny * c;
    const trailIne = s.trailIne.concat([[nx, ny]]).slice(-400);
    const trailRot = s.trailRot.concat([[xr, yr]]).slice(-400);
    return { x: nx, y: ny, vx: s.vx, vy: s.vy, t: s.t + dt, trailIne, trailRot };
  };
  const [s] = useSimulation(initial, step);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <Plot xRange={[-3, 3]} yRange={[-3, 3]} width={320} height={320}>
        <Axes step={1} />
        <CircleSh r={2.5} opacity={OPACITY.dim} dash="2 3" />
        <Polyline points={s.trailIne} opacity={OPACITY.dim} />
        <Dot x={s.x} y={s.y} r={5} />
        <Tex at={[-2.9, 2.7]} tex={`\\text{inertial: straight line}`} size={10} />
      </Plot>
      <Plot xRange={[-3, 3]} yRange={[-3, 3]} width={320} height={320}>
        <Axes step={1} />
        <CircleSh r={2.5} opacity={OPACITY.dim} dash="2 3" />
        <Polyline points={s.trailRot} opacity={OPACITY.fg} />
        <Dot x={s.trailRot[s.trailRot.length - 1]?.[0] || 1.5} y={s.trailRot[s.trailRot.length - 1]?.[1] || 0} r={5} opacity={OPACITY.accent} />
        <Tex at={[-2.9, 2.7]} tex={`\\text{rotating: Coriolis spiral}`} size={10} opacity={OPACITY.accent} />
      </Plot>
    </div>
  );
}


// Module 08 - Oscillations (4 viz)

// 01.8.1 Sine and Cosine Phase Shift - RK4 integrate two SHO with phase offset
export function PhaseShift() {
  const initial = React.useMemo(() => ({
    a: { th: 1, w: 0 }, b: { th: Math.cos(0.8), w: -Math.sin(0.8) }, t: 0, traceA: [], traceB: []
  }), []);
  const w0 = 1;
  const step = (s, dt) => {
    if (dt === 0) return s;
    const f = (_, y) => [y[1], -w0 * w0 * y[0]];
    const a = rk4Step(f, s.t, [s.a.th, s.a.w], dt);
    const b = rk4Step(f, s.t, [s.b.th, s.b.w], dt);
    const traceA = s.traceA.concat([[s.t + dt, a[0]]]).slice(-600);
    const traceB = s.traceB.concat([[s.t + dt, b[0]]]).slice(-600);
    return { a: { th: a[0], w: a[1] }, b: { th: b[0], w: b[1] }, t: s.t + dt, traceA, traceB };
  };
  const [s] = useSimulation(initial, step);
  const win = 4 * Math.PI;
  const t0 = Math.max(0, s.t - win);
  return (
    <Plot xRange={[t0, t0 + win]} yRange={[-1.5, 1.5]} width={680} height={260}>
      <Axes step={1} />
      <Polyline points={s.traceA} opacity={OPACITY.dim} />
      <Polyline points={s.traceB} opacity={OPACITY.fg} />
      <Tex at={[t0 + 0.2, 1.3]} tex={`A\\cos(\\omega_0 t + \\phi)`} size={11} />
    </Plot>
  );
}
// 01.8.2 Damped Oscillator - RK4 integrate ẍ + γẋ + ω₀²x = 0
export function DampedOsc() {
  const w0 = 2, gamma = 0.4;
  const initial = React.useMemo(() => ({ x: 1, v: 0, t: 0, trail: [] }), []);
  const step = (s, dt) => {
    if (dt === 0) return s;
    const f = (_, y) => [y[1], -gamma * y[1] - w0 * w0 * y[0]];
    const next = rk4Step(f, s.t, [s.x, s.v], dt);
    const trail = s.trail.concat([[s.t + dt, next[0]]]).slice(-800);
    return { x: next[0], v: next[1], t: s.t + dt, trail };
  };
  const [s] = useSimulation(initial, step);
  const win = 8;
  const t0 = Math.max(0, s.t - win);
  return (
    <Plot xRange={[t0, t0 + win]} yRange={[-1.2, 1.2]} width={680} height={280}>
      <Axes step={1} />
      <Parametric xy={(t) => [t, Math.exp(-gamma * (t - 0) / 2)]} t={[t0, t0 + win]} opacity={OPACITY.faint} dash="3 3" />
      <Parametric xy={(t) => [t, -Math.exp(-gamma * (t - 0) / 2)]} t={[t0, t0 + win]} opacity={OPACITY.faint} dash="3 3" />
      <Polyline points={s.trail} opacity={OPACITY.fg} />
      <Tex at={[t0 + 0.2, 1.1]} tex={`\\ddot x + \\gamma\\dot x + \\omega_0^2 x = 0`} size={11} />
    </Plot>
  );
}
// 01.8.3 Three Damping Regimes - under, critical, over
export function DampingRegimes() {
  const w0 = 2;
  const cases = [
    { gamma: 0.6, label: 'under', op: OPACITY.fg },
    { gamma: 4.0, label: 'critical', op: OPACITY.accent },
    { gamma: 6.0, label: 'over', op: OPACITY.dim },
  ];
  // Analytical solutions starting x(0)=1, ẋ(0)=0
  const trajs = cases.map(({ gamma, op, label }) => {
    const disc = (gamma / 2) ** 2 - w0 * w0;
    const pts = [];
    if (disc < 0) {
      const w1 = Math.sqrt(-disc);
      for (let t = 0; t <= 8; t += 0.02) {
        pts.push([t, Math.exp(-gamma * t / 2) * (Math.cos(w1 * t) + (gamma / (2 * w1)) * Math.sin(w1 * t))]);
      }
    } else if (Math.abs(disc) < 0.01) {
      for (let t = 0; t <= 8; t += 0.02) {
        pts.push([t, (1 + (gamma / 2) * t) * Math.exp(-gamma * t / 2)]);
      }
    } else {
      const r = Math.sqrt(disc);
      const r1 = -gamma / 2 + r, r2 = -gamma / 2 - r;
      // x(0)=1, v(0)=0 → A+B=1, r1 A + r2 B = 0 → A = -r2/(r1-r2), B = r1/(r1-r2)
      const A = -r2 / (r1 - r2), B = r1 / (r1 - r2);
      for (let t = 0; t <= 8; t += 0.02) {
        pts.push([t, A * Math.exp(r1 * t) + B * Math.exp(r2 * t)]);
      }
    }
    return { pts, op, label };
  });
  return (
    <Plot xRange={[0, 8]} yRange={[-0.5, 1.2]} width={680} height={280}>
      <Axes step={1} />
      {trajs.map((tr, i) => <Polyline key={i} points={tr.pts} opacity={tr.op} />)}
      <Tex at={[5, 0.7]} tex={`\\text{under}`} size={11} />
      <Tex at={[5, 0.5]} tex={`\\text{critical}`} size={11} opacity={OPACITY.accent} />
      <Tex at={[5, 0.3]} tex={`\\text{over}`} size={11} opacity={OPACITY.dim} />
    </Plot>
  );
}
// 01.8.4 Lorentzian Resonance - exact |χ(ω)| with adjustable Q
export function LorentzianRes() {
  const [Q, setQ] = React.useState(8);
  const w0 = 1;
  const gamma = w0 / Q;
  const A = (w) => 1 / Math.sqrt((w0 * w0 - w * w) ** 2 + (gamma * w) ** 2);
  const Anorm = A(w0);
  // Comparison curve at fixed Q=2
  const Q2 = 2, g2 = w0 / Q2;
  const A2 = (w) => 1 / Math.sqrt((w0 * w0 - w * w) ** 2 + (g2 * w) ** 2);
  const A2norm = A2(w0);
  return (
    <div>
      <Plot xRange={[0, 2.5]} yRange={[-0.2, 1.1]} width={680} height={300}>
        <Axes step={0.5} />
        <Parametric xy={(w) => [w, A(w) / Anorm]} t={[0.05, 2.5]} opacity={OPACITY.fg} samples={400} />
        <Parametric xy={(w) => [w, A2(w) / A2norm]} t={[0.05, 2.5]} opacity={OPACITY.dim} samples={400} />
        <Polyline points={[[0, 0.5], [2.5, 0.5]]} opacity={OPACITY.faint} dash="2 3" />
        <Tex at={[1.6, 0.55]} tex={`\\text{FWHM} = \\gamma`} size={11} opacity={OPACITY.dim} />
        <Tex at={[w0, 1.05]} dx={4} dy={-4} tex={`\\omega_0`} size={11} />
        <Tex at={[0.05, 1.05]} tex={`Q = ${Q.toFixed(1)}`} size={11} />
      </Plot>
      <Slider label="Q" value={Q} min={1} max={20} step={0.1} onChange={setQ} />
    </div>
  );
}


// Module 09 - Rigid Body Dynamics (12 viz)

// 01.9.1 Orientation Non-Commutativity
export function OrientationNonComm() {
  // Two flips, different orders → different final orientation. Show as 4 panels.
  const Box = ({ rx, ry, rz, label }) => {
    const c = 0.866, s = 0.5;
    // Apply rotations: R_z R_y R_x to a unit cube outline
    const cube = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
    ].map(p => p.map(v => v * 0.5));
    const rotX = (p, a) => [p[0], p[1] * Math.cos(a) - p[2] * Math.sin(a), p[1] * Math.sin(a) + p[2] * Math.cos(a)];
    const rotY = (p, a) => [p[0] * Math.cos(a) + p[2] * Math.sin(a), p[1], -p[0] * Math.sin(a) + p[2] * Math.cos(a)];
    const rotZ = (p, a) => [p[0] * Math.cos(a) - p[1] * Math.sin(a), p[0] * Math.sin(a) + p[1] * Math.cos(a), p[2]];
    const apply = p => rotZ(rotY(rotX(p, rx), ry), rz);
    const iso = ([x, y, z]) => [x * c - y * c, -(x * s + y * s) + z];
    const proj = cube.map(p => iso(apply(p)));
    const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
    return (
      <Plot xRange={[-1.5, 1.5]} yRange={[-1.5, 1.5]} width={170} height={170}>
        {edges.map(([a, b], i) => (
          <Polyline key={i} points={[proj[a], proj[b]]} opacity={OPACITY.fg} />
        ))}
        <Label at={[-1.4, -1.4]}>{label}</Label>
      </Plot>
    );
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
      <Box rx={0} ry={0} rz={0} label="START" />
      <Box rx={Math.PI / 2} ry={0} rz={0} label="X 90°" />
      <Box rx={Math.PI / 2} ry={Math.PI / 2} rz={0} label="X · Y" />
      <Box rx={0} ry={Math.PI / 2} rz={Math.PI / 2} label="Y · X" />
    </div>
  );
}
// 01.9.2 Skew Rod
export function SkewRod() {
  const c = 0.866, s = 0.5;
  const iso = (x, y, z) => [x * c - y * c, -(x * s + y * s) + z];
  const A = iso(-1, -0.6, -0.4);
  const B = iso(1, 0.6, 0.4);
  const t = useAnimationTime();
  const ph = t * 0.8;
  // rotation axis: Lhat (along rod)
  return (
    <Plot xRange={[-2, 2]} yRange={[-1.5, 1.5]} width={520} height={300}>
      <Polyline points={[A, B]} opacity={OPACITY.fg} />
      {/* trace circle perpendicular to rod */}
      <Parametric
        xy={(p) => {
          const cx = (A[0] + B[0]) / 2 + 0.4 * Math.cos(p);
          const cy = (A[1] + B[1]) / 2 + 0.25 * Math.sin(p);
          return [cx, cy];
        }}
        t={[0, 2 * Math.PI]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Tex at={[-1.9, 1.3]} tex={`L \\not\\parallel \\omega`} size={12} />
    </Plot>
  );
}
// 01.9.3 Gyroscope precession - real precession rate Ω = Mgr/(Iω); integrate axis tip
export function Gyroscope() {
  const M = 1, g = 9.81, r = 0.6, I = 0.05, omega_spin = 80;
  const Omega = M * g * r / (I * omega_spin); // ~2 rad/s
  const initial = React.useMemo(() => ({ phi: 0, t: 0, trail: [] }), []);
  const step = (s, dt) => {
    if (dt === 0) return s;
    const phi = s.phi + Omega * dt * 0.4;
    const c = 0.866, si = 0.5;
    const iso = (x, y, z) => [x * c - y * c, -(x * si + y * si) + z];
    const tip = iso(r * Math.cos(phi), r * Math.sin(phi), 1.0);
    const trail = s.trail.concat([tip]).slice(-150);
    return { phi, t: s.t + dt, trail };
  };
  const [s] = useSimulation(initial, step);
  const c = 0.866, si = 0.5;
  const iso = (x, y, z) => [x * c - y * c, -(x * si + y * si) + z];
  const tip = iso(r * Math.cos(s.phi), r * Math.sin(s.phi), 1.0);
  return (
    <Plot xRange={[-2, 2]} yRange={[-1.5, 1.8]} width={520} height={340}>
      <Parametric xy={(p) => iso(r * Math.cos(p), r * Math.sin(p), 1.0)} t={[0, 2 * Math.PI]} opacity={OPACITY.faint} dash="2 3" />
      <Polyline points={s.trail} opacity={OPACITY.dim} />
      <Polyline points={[iso(0, 0, 0), tip]} opacity={OPACITY.fg} />
      <Dot x={tip[0]} y={tip[1]} r={4} />
      <Arrow from={tip} to={[tip[0], tip[1] - 0.5]} opacity={OPACITY.dim} />
      <Tex at={[-1.9, 1.6]} tex={`\\Omega = \\dfrac{Mgr}{I\\omega}`} size={11} />
    </Plot>
  );
}
// 01.9.4 Equinox Precession
export function EquinoxPrecession() {
  return (
    <Plot xRange={[-2.5, 2.5]} yRange={[-2, 2]} width={520} height={320}>
      <CircleSh cx={0} cy={0} r={1.2} opacity={OPACITY.fg} />
      <Polyline points={[[0, -1.8], [0, 1.8]]} opacity={OPACITY.dim} dash="3 3" />
      <Polyline points={[[-Math.sin(0.41) * 1.8, -Math.cos(0.41) * 1.8], [Math.sin(0.41) * 1.8, Math.cos(0.41) * 1.8]]} opacity={OPACITY.fg} />
      <Parametric xy={(t) => [Math.sin(0.41) * 1.4 * Math.cos(t), 1.4 + 0.2 * Math.sin(t)]} t={[0, 2 * Math.PI]} opacity={OPACITY.faint} dash="2 3" />
      <Tex at={[-2.4, 1.7]} tex={`T \\approx 26{,}000\\ \\text{yr}`} size={11} />
    </Plot>
  );
}
// 01.9.5 Tensor of Inertia (table-style)
export function InertiaTensor() {
  return (
    <div style={{ padding: '20px 40px', color: FG, fontSize: 12, minWidth: 520 }}>
      <div ref={el => el && katex.render('I_{ij} = \\int \\rho\\,(r^2 \\delta_{ij} - x_i x_j)\\, dV', el, { throwOnError: false, displayMode: true })} />
      <div style={{ marginTop: 24, fontFamily: 'D-DIN, monospace', whiteSpace: 'pre', opacity: OPACITY.dim, fontSize: 13 }}>
        {`┌            ┐
│ I₁  0   0  │
│ 0   I₂  0  │
│ 0   0   I₃ │
└            ┘`}
      </div>
      <div style={{ marginTop: 16, opacity: OPACITY.dim, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: 11 }}>PRINCIPAL AXES · DIAGONAL FORM</div>
    </div>
  );
}
// 01.9.6 Oblate vs Prolate
export function OblateProlate() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
      <Plot xRange={[-2, 2]} yRange={[-2, 2]} width={260} height={260}>
        <Parametric xy={(t) => [1.6 * Math.cos(t), 1 * Math.sin(t)]} t={[0, 2 * Math.PI]} opacity={OPACITY.fg} />
        <Label at={[0, -1.9]} anchor="middle">OBLATE · I₃ &gt; I₁</Label>
      </Plot>
      <Plot xRange={[-2, 2]} yRange={[-2, 2]} width={260} height={260}>
        <Parametric xy={(t) => [1 * Math.cos(t), 1.7 * Math.sin(t)]} t={[0, 2 * Math.PI]} opacity={OPACITY.fg} />
        <Label at={[0, -1.9]} anchor="middle">PROLATE · I₃ &lt; I₁</Label>
      </Plot>
    </div>
  );
}
// 01.9.7 Torque-Free Precession Cone
export function PrecessionCone() {
  const t = useAnimationTime();
  const c = 0.866, s = 0.5;
  const iso = (x, y, z) => [x * c - y * c, -(x * s + y * s) + z];
  const ph = t * 0.8;
  const omegaTip = iso(0.6 * Math.cos(ph), 0.6 * Math.sin(ph), 1.4);
  return (
    <Plot xRange={[-2, 2]} yRange={[-1, 2.5]} width={520} height={340}>
      <Polyline points={[iso(0, 0, 0), iso(0, 0, 1.6)]} opacity={OPACITY.fg} />
      <Parametric xy={(p) => iso(0.6 * Math.cos(p), 0.6 * Math.sin(p), 1.4)} t={[0, 2 * Math.PI]} opacity={OPACITY.faint} dash="2 3" />
      <Polyline points={[iso(0, 0, 0), omegaTip]} opacity={OPACITY.accent} />
      <Tex at={iso(0, 0, 1.6)} dx={6} tex={`\\mathbf{L}`} size={11} />
      <Tex at={omegaTip} dx={6} tex={`\\boldsymbol{\\omega}`} size={11} opacity={OPACITY.accent} />
    </Plot>
  );
}
// 01.9.8 Tennis Racket - RK4'd Euler equations
export function TennisRacket() {
  // Solve dω/dt with I = diag(1, 2, 3) and three initial conditions
  const I = [1, 2, 3];
  const traj = (w0) => {
    const dt = 0.01, N = 1500;
    const ws = [];
    let w = [...w0];
    const rhs = (w) => [
      (I[1] - I[2]) / I[0] * w[1] * w[2],
      (I[2] - I[0]) / I[1] * w[2] * w[0],
      (I[0] - I[1]) / I[2] * w[0] * w[1],
    ];
    for (let i = 0; i < N; i++) {
      const k1 = rhs(w);
      const w2 = w.map((x, j) => x + dt / 2 * k1[j]);
      const k2 = rhs(w2);
      const w3 = w.map((x, j) => x + dt / 2 * k2[j]);
      const k3 = rhs(w3);
      const w4 = w.map((x, j) => x + dt * k3[j]);
      const k4 = rhs(w4);
      w = w.map((x, j) => x + dt / 6 * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]));
      ws.push([...w]);
    }
    return ws;
  };
  const t1 = traj([1, 0.05, 0]).map(w => [w[1], w[2]]);
  const t2 = traj([0, 1, 0.05]).map(w => [w[1], w[2]]);
  const t3 = traj([0, 0.05, 1]).map(w => [w[1], w[2]]);
  return (
    <Plot xRange={[-1.5, 1.5]} yRange={[-1.5, 1.5]} width={520} height={420}>
      <Axes step={0.5} />
      <Polyline points={t1} opacity={OPACITY.dim} />
      <Polyline points={t2} opacity={OPACITY.fg} />
      <Polyline points={t3} opacity={OPACITY.dim} />
      <Tex at={[-1.4, 1.3]} tex={`I_2\\ \\text{(intermediate)} \\Rightarrow \\text{unstable}`} size={11} />
      <Label at={[1.3, 0]} anchor="end" dy={-6}>ω₂</Label>
      <Label at={[0, 1.4]} dx={6}>ω₃</Label>
    </Plot>
  );
}
// 01.9.9 Non-Central Force Pair
export function NonCentralPair() {
  return (
    <Plot xRange={[-3, 3]} yRange={[-2, 2]} width={520} height={300}>
      <Axes step={1} showGrid={false} />
      <Dot x={-1.5} y={0.6} r={5} />
      <Dot x={1.5} y={-0.6} r={5} />
      <Arrow from={[-1.5, 0.6]} to={[-1.5 + 0.8, 0.6]} opacity={OPACITY.fg} />
      <Arrow from={[1.5, -0.6]} to={[1.5 - 0.8, -0.6]} opacity={OPACITY.fg} />
      <Polyline points={[[-1.5, 0.6], [1.5, -0.6]]} opacity={OPACITY.faint} dash="2 3" />
      <Tex at={[-2.9, 1.7]} tex={`\\sum F = 0,\\ \\sum \\tau \\neq 0`} size={11} />
    </Plot>
  );
}
// 01.9.10 Offset sphere - parallel axis
export function OffsetSphere() {
  return (
    <Plot xRange={[-2, 4]} yRange={[-2, 2]} width={520} height={300}>
      <Axes step={1} showGrid={false} />
      <CircleSh cx={1.5} cy={0} r={1.2} opacity={OPACITY.fg} />
      <Dot x={1.5} y={0} r={3} />
      <Polyline points={[[0, -1.8], [0, 1.8]]} opacity={OPACITY.accent} dash="3 3" />
      <Polyline points={[[1.5, -1.8], [1.5, 1.8]]} opacity={OPACITY.dim} dash="3 3" />
      <Polyline points={[[0, 0], [1.5, 0]]} opacity={OPACITY.faint} />
      <Tex at={[0.7, 0]} dy={-4} tex={`d`} size={11} />
      <Tex at={[-1.9, 1.7]} tex={`I = \\tfrac{2}{5}MR^2 + Md^2`} size={11} />
    </Plot>
  );
}
// 01.9.11 Dumbbell tensor
export function DumbbellTensor() {
  return (
    <Plot xRange={[-3, 3]} yRange={[-2, 2]} width={520} height={300}>
      <Axes step={1} showGrid={false} />
      <Dot x={-1.5} y={0} r={8} />
      <Dot x={1.5} y={0} r={8} />
      <Polyline points={[[-1.5, 0], [1.5, 0]]} opacity={OPACITY.dim} />
      <Polyline points={[[0, -1.7], [0, 1.7]]} opacity={OPACITY.accent} dash="3 3" />
      <Polyline points={[[-2.5, 0], [2.5, 0]]} opacity={OPACITY.faint} dash="3 3" />
      <Tex at={[-2.9, 1.7]} tex={`I_z = 2 m d^2,\\ I_x = 0`} size={11} />
    </Plot>
  );
}
// 01.9.12 Cycloidal Nutation
export function CycloidalNutation() {
  // Simulate top with nutation: simple θ(t) = θ0 + a sin(ωt), φ̇ = const.
  const path = [];
  for (let k = 0; k <= 600; k++) {
    const t = k * 0.02;
    const th = 0.6 + 0.1 * Math.sin(t * 4);
    const ph = t * 1.0;
    const r = Math.sin(th);
    path.push([r * Math.cos(ph), r * Math.sin(ph)]);
  }
  return (
    <Plot xRange={[-1, 1]} yRange={[-1, 1]} width={420} height={400}>
      <CircleSh cx={0} cy={0} r={Math.sin(0.7)} opacity={OPACITY.faint} dash="2 3" />
      <CircleSh cx={0} cy={0} r={Math.sin(0.5)} opacity={OPACITY.faint} dash="2 3" />
      <Polyline points={path} opacity={OPACITY.fg} />
      <Tex at={[-0.95, 0.9]} tex={`\\text{nutation}`} size={11} />
    </Plot>
  );
}


// Module 10 - Special Relativity (9 viz)

// 01.10.1 Michelson Interferometer (schematic)
export function Michelson() {
  return (
    <Plot xRange={[-1, 4]} yRange={[-1, 3]} width={520} height={320}>
      <Polyline
        points={[
          [0, 0],
          [1.5, 0]
        ]}
        opacity={OPACITY.fg}
      />
      <Polyline
        points={[
          [1.5, 0],
          [3, 0]
        ]}
        opacity={OPACITY.dim}
        dash="3 3"
      />
      <Polyline
        points={[
          [1.5, 0],
          [1.5, 2]
        ]}
        opacity={OPACITY.dim}
        dash="3 3"
      />
      <Polyline
        points={[
          [1.2, -0.3],
          [1.8, 0.3]
        ]}
        opacity={OPACITY.accent}
      />
      <Polyline
        points={[
          [2.85, -0.15],
          [3.15, 0.15]
        ]}
        opacity={OPACITY.fg}
      />
      <Polyline
        points={[
          [1.35, 1.85],
          [1.65, 2.15]
        ]}
        opacity={OPACITY.fg}
      />
      <Polyline
        points={[
          [1.5, 0],
          [1.5, -1.2]
        ]}
        opacity={OPACITY.dim}
        dash="3 3"
      />
      <Tex at={[-0.9, 0]} dy={-6} tex={`\\text{src}`} size={11} opacity={OPACITY.dim} />
      <Tex at={[3, 0]} dx={6} tex={`M_1`} size={11} />
      <Tex at={[1.5, 2]} dx={6} tex={`M_2`} size={11} />
      <Tex at={[1.5, -1.1]} dx={6} tex={`\\text{detector}`} size={11} opacity={OPACITY.dim} />
    </Plot>
  )
}
// 01.10.2 Gamma vs β
export function GammaVsBeta() {
  return (
    <Plot xRange={[0, 1]} yRange={[0.5, 6]} width={620} height={320}>
      <Axes step={0.2} />
      <Parametric
        xy={b => [b, 1 / Math.sqrt(1 - b * b)]}
        t={[0, 0.985]}
        opacity={OPACITY.fg}
        samples={400}
      />
      <Polyline
        points={[
          [0, 1],
          [1, 1]
        ]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Tex at={[0.05, 5.5]} tex={`\\gamma = \\dfrac{1}{\\sqrt{1-\\beta^2}}`} size={12} />
      <Label at={[0.97, 0.5]} dy={14} anchor="end">
        β
      </Label>
      <Label at={[0, 5.8]} dx={6}>
        γ
      </Label>
    </Plot>
  )
}
// 01.10.3 Light Cone
export function LightCone() {
  return (
    <Plot xRange={[-3, 3]} yRange={[-3, 3]} width={520} height={400}>
      <Axes step={1} />
      <Polyline
        points={[
          [-3, -3],
          [3, 3]
        ]}
        opacity={OPACITY.fg}
      />
      <Polyline
        points={[
          [-3, 3],
          [3, -3]
        ]}
        opacity={OPACITY.fg}
      />
      <Polyline
        points={[
          [-3, 3],
          [3, 3],
          [3, -3],
          [-3, -3]
        ]}
        closed
        fillOpacity={0.0}
        opacity={0}
      />
      {/* Shaded cones */}
      <Polyline
        points={[
          [0, 0],
          [-3, 3],
          [3, 3]
        ]}
        closed
        fillOpacity={0.08}
      />
      <Polyline
        points={[
          [0, 0],
          [-3, -3],
          [3, -3]
        ]}
        closed
        fillOpacity={0.08}
      />
      <Tex at={[1.5, 2]} tex={`\\text{future}`} size={11} opacity={OPACITY.dim} />
      <Tex at={[1.5, -2]} tex={`\\text{past}`} size={11} opacity={OPACITY.dim} />
      <Tex at={[2.2, 0.2]} tex={`\\text{elsewhere}`} size={11} opacity={OPACITY.dim} />
      <Label at={[2.9, 0]} anchor="end" dy={-6}>
        X
      </Label>
      <Label at={[0, 2.9]} dx={6}>
        CT
      </Label>
    </Plot>
  )
}
// 01.10.4 Length Contraction
export function LengthContraction() {
  const [b, setB] = React.useState(0.6)
  const g = 1 / Math.sqrt(1 - b * b)
  const L0 = 3
  const L = L0 / g
  return (
    <div>
      <Plot xRange={[-0.5, 4]} yRange={[-1, 1.5]} width={620} height={220}>
        <Axes step={0.5} showGrid={false} />
        <Polyline
          points={[
            [0, 0.5],
            [L0, 0.5],
            [L0, 1],
            [0, 1]
          ]}
          closed
          fillOpacity={0.1}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [0, -0.7],
            [L, -0.7],
            [L, -0.2],
            [0, -0.2]
          ]}
          closed
          fillOpacity={0.18}
          opacity={OPACITY.fg}
        />
        <Tex at={[L0, 0.75]} dx={6} tex={`L_0`} size={11} opacity={OPACITY.dim} />
        <Tex at={[L, -0.45]} dx={6} tex={`L = \\dfrac{L_0}{\\gamma}`} size={11} />
      </Plot>
      <Slider label="β" value={b} min={0} max={0.95} step={0.01} onChange={setB} />
    </div>
  )
}
// 01.10.5 Light Clock - moving clock, photon traces zigzag in lab frame, vertical in rest frame
export function LightClock() {
  const beta = 0.6
  const gamma = 1 / Math.sqrt(1 - beta * beta)
  const H = 1.5 // arm length
  // Lab-frame: photon must traverse hypotenuse of (β·Δt_lab, H) at speed 1.
  // (β·Δt)² + H² = Δt² → Δt = γH. Photon position: x_clock = β t, y oscillates between 0 and H at v_y = 1/γ.
  const initial = React.useMemo(() => ({ t: 0 }), [])
  const step = (s, dt) => ({ t: (s.t + dt) % (4 * gamma * H) })
  const [s] = useSimulation(initial, step)
  const xClock = beta * s.t * 0.4
  const period = 2 * gamma * H * 0.4
  const phPos = (s.t * 0.4) % (2 * gamma * H * 0.4)
  const phY =
    phPos < gamma * H * 0.4
      ? (phPos / (gamma * H * 0.4)) * H
      : H - ((phPos - gamma * H * 0.4) / (gamma * H * 0.4)) * H
  return (
    <Plot xRange={[-1, 5]} yRange={[-0.3, 2.2]} width={620} height={260}>
      <Polyline
        points={[
          [-1, 0],
          [5, 0]
        ]}
        opacity={OPACITY.dim}
      />
      <Polyline
        points={[
          [xClock, 0],
          [xClock, H]
        ]}
        opacity={OPACITY.dim}
      />
      <Polyline
        points={[
          [xClock - 0.3, 0],
          [xClock + 0.3, 0]
        ]}
        opacity={OPACITY.fg}
      />
      <Polyline
        points={[
          [xClock - 0.3, H],
          [xClock + 0.3, H]
        ]}
        opacity={OPACITY.fg}
      />
      <Dot x={xClock} y={phY} r={3} opacity={OPACITY.accent} />
      <Tex
        at={[-0.9, 2.0]}
        tex={`\\Delta t_{\\text{lab}} = \\gamma\\,\\Delta t_0,\\ \\ \\gamma = ${gamma.toFixed(2)}`}
        size={12}
      />
    </Plot>
  )
}
// 01.10.6 Relativistic Doppler
export function RelDoppler() {
  return (
    <Plot xRange={[-1, 1]} yRange={[0, 4]} width={620} height={300}>
      <Axes step={0.25} />
      <Parametric
        xy={b => [b, Math.sqrt((1 + b) / (1 - b))]}
        t={[-0.95, 0.95]}
        opacity={OPACITY.fg}
        samples={400}
      />
      <Polyline
        points={[
          [-1, 1],
          [1, 1]
        ]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Tex at={[-0.9, 3.6]} tex={`f' = f \\sqrt{\\dfrac{1+\\beta}{1-\\beta}}`} size={12} />
      <Tex
        at={[0.5, 0.6]}
        tex={`\\text{redshift} \\leftarrow\\ \\rightarrow \\text{blueshift}`}
        size={10}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}
// 01.10.7 Twin Paradox (FIXED: simultaneity lines bounded, no color leak)
export function TwinParadox() {
  const [b, setB] = React.useState(0.6)
  const g = 1 / Math.sqrt(1 - b * b)
  const L = 3
  const t1 = L / b
  const tau_B = (2 * t1) / g
  // Tick marks (proper time) along worldlines
  const ticksA = []
  for (let k = 0; k <= 2 * t1; k += 1) ticksA.push(k)
  const ticksB = []
  for (let k = 0; k <= tau_B; k += 1) ticksB.push(k)
  return (
    <div>
      <Plot xRange={[-1, 4]} yRange={[-0.5, 2 * t1 + 0.5]} width={620} height={420}>
        <Axes step={1} />
        {/* Light cones from origin and from turnaround */}
        <Polyline
          points={[
            [0, 0],
            [2 * t1, 2 * t1]
          ]}
          opacity={OPACITY.faint}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, 0],
            [-2 * t1, 2 * t1]
          ]}
          opacity={OPACITY.faint}
          dash="2 3"
        />
        {/* A worldline (vertical) */}
        <Polyline
          points={[
            [0, 0],
            [0, 2 * t1]
          ]}
          opacity={OPACITY.fg}
        />
        {/* B outbound and return */}
        <Polyline
          points={[
            [0, 0],
            [L, t1]
          ]}
          opacity={OPACITY.accent}
        />
        <Polyline
          points={[
            [L, t1],
            [0, 2 * t1]
          ]}
          opacity={OPACITY.accent}
        />
        {/* Tick marks A */}
        {ticksA.map((k, i) => (
          <Polyline
            key={`A${i}`}
            points={[
              [-0.08, k],
              [0.08, k]
            ]}
            opacity={OPACITY.fg}
          />
        ))}
        {/* Tick marks B (outbound) */}
        {ticksB
          .filter(k => k <= tau_B / 2)
          .map((tau, i) => {
            const t = tau * g
            const xx = b * t
            // perpendicular to B's worldline = ⊥ to (b,1) so direction (1,-b)/√(1+b²)
            const norm = Math.hypot(1, b)
            const dx = 0.08 / norm,
              dy = (-0.08 * b) / norm
            return (
              <Polyline
                key={`Bo${i}`}
                points={[
                  [xx - dx, t - dy],
                  [xx + dx, t + dy]
                ]}
                opacity={OPACITY.accent}
              />
            )
          })}
        {/* Tick marks B (return) */}
        {ticksB
          .filter(k => k > tau_B / 2)
          .map((tau, i) => {
            const t = tau * g
            const xx = L - b * (t - t1)
            const norm = Math.hypot(1, b)
            const dx = 0.08 / norm,
              dy = (0.08 * b) / norm
            return (
              <Polyline
                key={`Br${i}`}
                points={[
                  [xx - dx, t - dy],
                  [xx + dx, t + dy]
                ]}
                opacity={OPACITY.accent}
              />
            )
          })}
        <Tex at={[0, 2 * t1]} dx={6} tex={`\\tau_A = ${(2 * t1).toFixed(1)}`} size={11} />
        <Tex
          at={[0.5, 2 * t1 - 0.3]}
          tex={`\\tau_B = ${tau_B.toFixed(2)}`}
          size={11}
          opacity={OPACITY.accent}
        />
        <Tex at={[L, t1]} dx={6} tex={`\\text{turnaround}`} size={11} opacity={OPACITY.dim} />
        <Label at={[3.9, 0]} dy={14} anchor="end">
          X
        </Label>
        <Label at={[0, 2 * t1 + 0.3]} dx={6}>
          CT
        </Label>
      </Plot>
      <Slider label="β" value={b} min={0.1} max={0.95} step={0.01} onChange={setB} />
    </div>
  )
}
// 01.10.8 Relativistic Mass (Interactive)
export function RelMass() {
  const [b, setB] = React.useState(0.6)
  return (
    <div>
      <Plot xRange={[0, 1]} yRange={[0.5, 6]} width={620} height={320}>
        <Axes step={0.2} />
        <Parametric
          xy={bb => [bb, 1 / Math.sqrt(1 - bb * bb)]}
          t={[0, 0.985]}
          opacity={OPACITY.fg}
          samples={400}
        />
        <Dot x={b} y={1 / Math.sqrt(1 - b * b)} r={4} />
        <Tex at={[0.05, 5.5]} tex={`m = \\gamma m_0`} size={12} />
      </Plot>
      <Slider label="β" value={b} min={0} max={0.95} step={0.01} onChange={setB} />
    </div>
  )
}
// 01.10.9 Pair Production - γ + N → e⁻ + e⁺ + N (nucleus required for momentum conservation)
export function PairProduction() {
  return (
    <Plot xRange={[-3, 3]} yRange={[-2, 2]} width={520} height={300}>
      <Axes step={1} showGrid={false} />
      {/* Incoming photon (zigzag) */}
      {Array.from({ length: 10 }).map((_, i) => (
        <Polyline
          key={i}
          points={[
            [-3 + i * 0.3, i % 2 ? 0.1 : -0.1],
            [-3 + (i + 1) * 0.3, (i + 1) % 2 ? 0.1 : -0.1]
          ]}
          opacity={OPACITY.dim}
        />
      ))}
      {/* Nucleus at interaction point - required by 4-momentum conservation */}
      <Dot x={0} y={0} r={6} />
      <CircleSh cx={0} cy={0} r={0.22} opacity={OPACITY.dim} />
      <Tex at={[0, 0]} dx={-22} dy={-8} tex={`N`} size={11} opacity={OPACITY.dim} />
      {/* Recoil of nucleus (small) */}
      <Polyline
        points={[
          [0, 0],
          [0.6, -0.3]
        ]}
        opacity={OPACITY.faint}
        dash="2 3"
      />
      <Tex at={[0.6, -0.3]} dx={6} tex={`N'`} size={10} opacity={OPACITY.faint} />
      {/* Outgoing pair */}
      <Polyline
        points={[
          [0, 0],
          [2.5, 1.5]
        ]}
        opacity={OPACITY.fg}
      />
      <Polyline
        points={[
          [0, 0],
          [2.5, -1.5]
        ]}
        opacity={OPACITY.fg}
      />
      <Dot x={2.5} y={1.5} r={3} />
      <Dot x={2.5} y={-1.5} r={3} />
      <Tex at={[2.5, 1.5]} dx={6} tex={`e^-`} size={11} />
      <Tex at={[2.5, -1.5]} dx={6} tex={`e^+`} size={11} />
      <Tex at={[-2.9, 1.7]} tex={`\\gamma + N \\to e^- + e^+ + N`} size={12} />
      <Tex at={[-2.9, -1.7]} tex={`E_\\gamma \\geq 2 m_e c^2`} size={10} opacity={OPACITY.dim} />
    </Plot>
  )
}


// MODULE 11 - INTERACTIVE (drag-driven; no auto-animation).
// Every viz here updates only when the user moves a slider or drags a handle.

// 01.11.1 Drag the Vector - live |v|, angle, components
export function DragVector() {
  const [v, setV] = React.useState([2.4, 1.6])
  const r = Math.hypot(v[0], v[1])
  const th = (Math.atan2(v[1], v[0]) * 180) / Math.PI
  return (
    <Plot xRange={[-3.5, 3.5]} yRange={[-2.4, 2.4]} width={620} height={300}>
      <Axes step={1} />
      <Arrow from={[0, 0]} to={[v[0], 0]} opacity={OPACITY.accent} dash="3 3" />
      <Arrow from={[v[0], 0]} to={v} opacity={OPACITY.accent} dash="3 3" />
      <Arrow from={[0, 0]} to={v} />
      <Parametric
        xy={u => [0.5 * Math.cos(u), 0.5 * Math.sin(u)]}
        t={[0, Math.atan2(v[1], v[0])]}
        opacity={OPACITY.dim}
      />
      <DragHandle x={v[0]} y={v[1]} onChange={(x, y) => setV([x, y])} label="DRAG" />
      <Tex at={[-3.4, 2.2]} tex={`|\\mathbf{v}| = ${r.toFixed(2)}`} size={11} />
      <Tex at={[-3.4, 1.85]} tex={`\\theta = ${th.toFixed(0)}°`} size={11} opacity={OPACITY.dim} />
      <Tex
        at={[-3.4, 1.5]}
        tex={`(v_x, v_y) = (${v[0].toFixed(2)}, ${v[1].toFixed(2)})`}
        size={11}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}
// 01.11.2 Dot Product Geometry - drag two vectors, see a·b and angle
export function DotProductInteractive() {
  const [a, setA] = React.useState([2.2, 0.4])
  const [b, setB] = React.useState([1.0, 1.8])
  const dot = a[0] * b[0] + a[1] * b[1]
  const na = Math.hypot(a[0], a[1]) || 1,
    nb = Math.hypot(b[0], b[1]) || 1
  const cos = dot / (na * nb)
  const ang = Math.acos(Math.max(-1, Math.min(1, cos)))
  // Projection of a onto b
  const sproj = dot / (nb * nb)
  const proj = [b[0] * sproj, b[1] * sproj]
  return (
    <Plot xRange={[-3, 3]} yRange={[-2, 2.4]} width={620} height={320}>
      <Axes step={1} />
      <Arrow from={[0, 0]} to={a} />
      <Arrow from={[0, 0]} to={b} opacity={OPACITY.dim} />
      <Polyline points={[a, proj]} opacity={OPACITY.faint} dash="2 3" />
      <Polyline points={[[0, 0], proj]} opacity={OPACITY.accent} strokeWidth={2} />
      <DragHandle x={a[0]} y={a[1]} onChange={(x, y) => setA([x, y])} label="A" />
      <DragHandle x={b[0]} y={b[1]} onChange={(x, y) => setB([x, y])} label="B" />
      <Tex at={[-2.9, 2.2]} tex={`\\mathbf{a}\\cdot\\mathbf{b} = ${dot.toFixed(2)}`} size={11} />
      <Tex
        at={[-2.9, 1.85]}
        tex={`\\theta = ${((ang * 180) / Math.PI).toFixed(0)}°`}
        size={11}
        opacity={OPACITY.dim}
      />
      <Tex
        at={[-2.9, 1.5]}
        tex={`\\cos\\theta = ${cos.toFixed(2)}`}
        size={11}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}
// 01.11.3 Projectile Range - drag launch velocity tip; hodograph live
export function ProjectileLauncher() {
  const [v0, setV0] = React.useState([5, 4])
  const [drag, setDrag] = React.useState(0)
  const g = 9.81
  // Integrate with RK4
  const traj = React.useMemo(() => {
    const f = (_, y) => {
      const sp = Math.hypot(y[2], y[3])
      return [y[2], y[3], -drag * sp * y[2], -g - drag * sp * y[3]]
    }
    let y = [0, 0, v0[0], v0[1]]
    const pts = [[0, 0]]
    let t = 0
    const dt = 0.005
    while (t < 5) {
      y = rk4Step(f, t, y, dt)
      t += dt
      if (y[1] < -0.001) break
      pts.push([y[0], y[1]])
    }
    return pts
  }, [v0[0], v0[1], drag])
  const range = traj[traj.length - 1][0]
  const hmax = traj.reduce((m, p) => Math.max(m, p[1]), 0)
  const speed = Math.hypot(v0[0], v0[1])
  const ang = (Math.atan2(v0[1], v0[0]) * 180) / Math.PI
  return (
    <div>
      <Plot xRange={[-1, 8]} yRange={[-0.5, 4]} width={680} height={300}>
        <Axes step={1} />
        <Polyline
          points={[
            [-1, 0],
            [8, 0]
          ]}
          opacity={OPACITY.dim}
        />
        <Polyline points={traj} opacity={OPACITY.fg} />
        <Arrow from={[0, 0]} to={[v0[0] * 0.4, v0[1] * 0.4]} opacity={OPACITY.accent} />
        <DragHandle
          x={v0[0] * 0.4}
          y={v0[1] * 0.4}
          onChange={(x, y) => setV0([x / 0.4, Math.max(0.1, y / 0.4)])}
          label="V₀"
        />
        <Dot x={range} y={0} r={4} opacity={OPACITY.accent} />
        <Tex
          at={[-0.9, 3.7]}
          tex={`|v_0| = ${speed.toFixed(2)},\\ \\theta = ${ang.toFixed(0)}°`}
          size={11}
        />
        <Tex
          at={[-0.9, 3.35]}
          tex={`R = ${range.toFixed(2)},\\ h_{max} = ${hmax.toFixed(2)}`}
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider
        label="DRAG"
        value={drag}
        min={0}
        max={0.2}
        step={0.005}
        onChange={setDrag}
        format={v => v.toFixed(3)}
      />
    </div>
  )
}
// 01.11.4 Inclined Block - slider for incline angle, friction; FBD
export function InclineBlock() {
  const [angDeg, setAng] = React.useState(25)
  const [mu, setMu] = React.useState(0.2)
  const ang = (angDeg * Math.PI) / 180
  const g = 1.6
  const u = [Math.cos(ang), Math.sin(ang)]
  const n = [-Math.sin(ang), Math.cos(ang)]
  const sx = 4.5,
    sy = sx * Math.tan(ang)
  const blockS = 2.2
  const bx = blockS * Math.cos(ang) + 0.25 * n[0]
  const by = blockS * Math.sin(ang) + 0.25 * n[1]
  const Nm = g * Math.cos(ang)
  const Fpar = g * Math.sin(ang)
  const fmax = mu * Nm
  const slipping = Fpar > fmax
  const fric = slipping ? fmax : Fpar
  const aLin = slipping ? Fpar - fmax : 0
  return (
    <div>
      <Plot xRange={[-0.5, 5]} yRange={[-0.5, 3]} width={620} height={280}>
        <Polyline
          points={[
            [0, 0],
            [sx, sy],
            [sx, 0],
            [0, 0]
          ]}
          closed
          fillOpacity={0.05}
          opacity={OPACITY.dim}
        />
        <Polyline
          points={[
            [bx - u[0] * 0.3 - n[0] * 0.2, by - u[1] * 0.3 - n[1] * 0.2],
            [bx + u[0] * 0.3 - n[0] * 0.2, by + u[1] * 0.3 - n[1] * 0.2],
            [bx + u[0] * 0.3 + n[0] * 0.2, by + u[1] * 0.3 + n[1] * 0.2],
            [bx - u[0] * 0.3 + n[0] * 0.2, by - u[1] * 0.3 + n[1] * 0.2]
          ]}
          closed
          fillOpacity={0.18}
        />
        <Arrow from={[bx, by]} to={[bx, by - g]} />
        <Arrow from={[bx, by]} to={[bx + Nm * n[0], by + Nm * n[1]]} opacity={OPACITY.accent} />
        <Arrow
          from={[bx, by]}
          to={[bx - fric * u[0], by - fric * u[1]]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Tex at={[-0.4, 2.7]} tex={`\\theta = ${angDeg.toFixed(0)}°`} size={11} />
        <Tex at={[-0.4, 2.35]} tex={`\\mu = ${mu.toFixed(2)}`} size={11} opacity={OPACITY.dim} />
        <Tex
          at={[-0.4, 2.0]}
          tex={slipping ? `\\text{slipping}: a = ${aLin.toFixed(2)}` : `\\text{static}`}
          size={11}
          opacity={slipping ? OPACITY.fg : OPACITY.dim}
        />
        <Tex
          at={[-0.4, 1.65]}
          tex={`\\tan^{-1}\\mu = ${((Math.atan(mu) * 180) / Math.PI).toFixed(1)}°`}
          size={11}
          opacity={OPACITY.faint}
        />
      </Plot>
      <Slider
        label="ANG"
        value={angDeg}
        min={0}
        max={75}
        step={1}
        onChange={setAng}
        format={v => v.toFixed(0) + '°'}
      />
      <Slider label="μ" value={mu} min={0} max={1.2} step={0.01} onChange={setMu} />
    </div>
  )
}
// 01.11.5 Pendulum Energy - drag the bob; live KE/PE bars
export function PendulumEnergy() {
  const [theta, setTheta] = React.useState(0.7)
  const L = 1.6
  // Compute v from energy at the released theta (we treat current theta as instantaneous, with v=0 at release)
  // Better UX: drag sets release angle; show instantaneous T,U at that θ assuming released from θ (so KE=0 there)
  // Add slider for "current angle" to see energy split? Use single drag and show U(θ) and Umax-U as KE budget.
  const g = 9.81
  const px = L * Math.sin(theta),
    py = -L * Math.cos(theta)
  const U = g * (1 - Math.cos(theta)) // unit mass
  // If released from theta_max, current KE budget if at θ=0 would be U_max
  return (
    <div>
      <Plot xRange={[-2, 2]} yRange={[-2.2, 0.6]} width={520} height={320}>
        <Polyline
          points={[
            [-1.5, 0],
            [1.5, 0]
          ]}
          opacity={OPACITY.dim}
        />
        <Parametric
          xy={u => [L * Math.sin(u), -L * Math.cos(u)]}
          t={[-Math.PI / 2, Math.PI / 2]}
          opacity={OPACITY.faint}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, 0],
            [px, py]
          ]}
          opacity={OPACITY.fg}
        />
        <DragHandle
          x={px}
          y={py}
          r={8}
          onChange={(x, y) => {
            const r = Math.hypot(x, y) || 1
            const nx = (x / r) * L,
              ny = (y / r) * L
            const t2 = Math.atan2(nx, -ny)
            setTheta(Math.max(-Math.PI / 2 + 0.05, Math.min(Math.PI / 2 - 0.05, t2)))
          }}
          label="DRAG"
        />
        <Tex
          at={[-1.9, 0.5]}
          tex={`\\theta = ${((theta * 180) / Math.PI).toFixed(0)}°`}
          size={11}
        />
        <Tex
          at={[-1.9, 0.18]}
          tex={`U = mgL(1-\\cos\\theta) = ${U.toFixed(2)}`}
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <div
        style={{
          marginTop: 12,
          fontFamily: "'D-DIN', ui-monospace, monospace",
          fontSize: 10,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: FG
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            opacity: 0.5,
            marginBottom: 4
          }}
        >
          <span>U @ release</span>
          <span>{U.toFixed(2)} J/kg</span>
        </div>
        <div style={{ height: 6, background: 'var(--border-subtle)', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: `${Math.min(100, (U / (g * 1)) * 100)}%`,
              background: FG,
              opacity: 0.85
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            opacity: 0.5,
            marginTop: 8,
            marginBottom: 4
          }}
        >
          <span>KE @ bottom</span>
          <span>{U.toFixed(2)} J/kg</span>
        </div>
        <div style={{ height: 6, background: 'var(--border-subtle)', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: `${Math.min(100, (U / (g * 1)) * 100)}%`,
              background: FG,
              opacity: 0.5
            }}
          />
        </div>
      </div>
    </div>
  )
}
// 01.11.6 Drag Two Masses - center of mass tracks mass ratio
export function DragCenterOfMass() {
  const [r1, setR1] = React.useState([-1.6, 0.4])
  const [r2, setR2] = React.useState([1.8, -0.6])
  const [mratio, setMratio] = React.useState(2.5) // m2/m1
  const m1 = 1,
    m2 = mratio
  const cm = [(m1 * r1[0] + m2 * r2[0]) / (m1 + m2), (m1 * r1[1] + m2 * r2[1]) / (m1 + m2)]
  return (
    <div>
      <Plot xRange={[-3, 3]} yRange={[-2, 2]} width={620} height={300}>
        <Axes step={1} />
        <Polyline points={[r1, r2]} opacity={OPACITY.faint} dash="2 3" />
        <Dot x={r1[0]} y={r1[1]} r={3 + Math.sqrt(m1) * 2} />
        <Dot x={r2[0]} y={r2[1]} r={3 + Math.sqrt(m2) * 2} />
        <DragHandle x={r1[0]} y={r1[1]} onChange={(x, y) => setR1([x, y])} label="M1" />
        <DragHandle x={r2[0]} y={r2[1]} onChange={(x, y) => setR2([x, y])} label="M2" />
        <CircleSh cx={cm[0]} cy={cm[1]} r={0.18} opacity={OPACITY.accent} />
        <Dot x={cm[0]} y={cm[1]} r={2} opacity={OPACITY.accent} />
        <Tex at={[-2.9, 1.8]} tex={`\\dfrac{m_2}{m_1} = ${mratio.toFixed(2)}`} size={11} />
        <Tex
          at={[-2.9, 1.45]}
          tex={`\\mathbf{R}_{CM} = (${cm[0].toFixed(2)}, ${cm[1].toFixed(2)})`}
          size={11}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Slider label="M₂/M₁" value={mratio} min={0.2} max={8} step={0.05} onChange={setMratio} />
    </div>
  )
}
// 01.11.7 1D Elastic Collision Calculator - sliders
export function ElasticCollisionCalc() {
  const [m1, setM1] = React.useState(1)
  const [m2, setM2] = React.useState(2)
  const [u1, setU1] = React.useState(2)
  const [u2, setU2] = React.useState(-1)
  const v1 = ((m1 - m2) * u1 + 2 * m2 * u2) / (m1 + m2)
  const v2 = ((m2 - m1) * u2 + 2 * m1 * u1) / (m1 + m2)
  const Pi = m1 * u1 + m2 * u2,
    Pf = m1 * v1 + m2 * v2
  const Ki = 0.5 * (m1 * u1 * u1 + m2 * u2 * u2)
  const Kf = 0.5 * (m1 * v1 * v1 + m2 * v2 * v2)
  return (
    <div>
      <Plot xRange={[-4, 4]} yRange={[-1.5, 1.5]} width={680} height={220}>
        <Polyline
          points={[
            [-4, -0.3],
            [4, -0.3]
          ]}
          opacity={OPACITY.dim}
        />
        {/* before */}
        <Dot x={-2} y={0.5} r={3 + Math.sqrt(m1) * 3} />
        <Dot x={1} y={0.5} r={3 + Math.sqrt(m2) * 3} />
        <Arrow from={[-2, 0.5]} to={[-2 + u1 * 0.3, 0.5]} opacity={OPACITY.dim} />
        <Arrow from={[1, 0.5]} to={[1 + u2 * 0.3, 0.5]} opacity={OPACITY.dim} />
        <Tex at={[-3.9, 0.95]} tex={`\\text{before}`} size={10} opacity={OPACITY.dim} />
        {/* after */}
        <Dot x={-2} y={-0.7} r={3 + Math.sqrt(m1) * 3} />
        <Dot x={1} y={-0.7} r={3 + Math.sqrt(m2) * 3} />
        <Arrow from={[-2, -0.7]} to={[-2 + v1 * 0.3, -0.7]} opacity={OPACITY.accent} />
        <Arrow from={[1, -0.7]} to={[1 + v2 * 0.3, -0.7]} opacity={OPACITY.accent} />
        <Tex at={[-3.9, -1.05]} tex={`\\text{after}`} size={10} opacity={OPACITY.accent} />
        <Tex
          at={[2.4, 0.95]}
          tex={`P: ${Pi.toFixed(2)} \\to ${Pf.toFixed(2)}`}
          size={10}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[2.4, -1.05]}
          tex={`K: ${Ki.toFixed(2)} \\to ${Kf.toFixed(2)}`}
          size={10}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="M₁" value={m1} min={0.2} max={5} step={0.1} onChange={setM1} />
      <Slider label="M₂" value={m2} min={0.2} max={5} step={0.1} onChange={setM2} />
      <Slider label="U₁" value={u1} min={-4} max={4} step={0.1} onChange={setU1} />
      <Slider label="U₂" value={u2} min={-4} max={4} step={0.1} onChange={setU2} />
    </div>
  )
}
// 01.11.8 Phase Portrait - drag initial condition, see trajectory of damped oscillator
export function PhasePortraitDrag() {
  const [x0, setX0] = React.useState(1.5)
  const [v0, setV0] = React.useState(0.6)
  const [gamma, setGamma] = React.useState(0.2)
  const w0 = 1.0
  // Integrate forward AND backward to draw whole trajectory
  const path = React.useMemo(() => {
    const f = (_, y) => [y[1], -w0 * w0 * y[0] - gamma * y[1]]
    const dt = 0.02
    const fwd = []
    let y = [x0, v0]
    let t = 0
    for (let i = 0; i < 1500; i++) {
      y = rk4Step(f, t, y, dt)
      t += dt
      fwd.push([y[0], y[1]])
      if (Math.hypot(y[0], y[1]) < 0.005) break
      if (Math.hypot(y[0], y[1]) > 6) break
    }
    return [[x0, v0], ...fwd]
  }, [x0, v0, gamma])
  return (
    <div>
      <Plot xRange={[-2.5, 2.5]} yRange={[-2.5, 2.5]} width={520} height={400}>
        <Axes step={1} />
        {/* flow field */}
        {(() => {
          const out = []
          for (let x = -2; x <= 2; x += 0.5)
            for (let p = -2; p <= 2; p += 0.5) {
              const dx = p,
                dp = -w0 * w0 * x - gamma * p
              const n = Math.hypot(dx, dp) || 1
              out.push([x, p, (dx / n) * 0.18, (dp / n) * 0.18])
            }
          return out.map(([x, p, dx, dp], i) => (
            <Arrow
              key={i}
              from={[x, p]}
              to={[x + dx, p + dp]}
              opacity={OPACITY.faint}
              head={3}
              strokeWidth={0.6}
            />
          ))
        })()}
        <Polyline points={path} opacity={OPACITY.fg} />
        <DragHandle
          x={x0}
          y={v0}
          onChange={(x, y) => {
            setX0(x)
            setV0(y)
          }}
          label="DRAG IC"
        />
        <Tex at={[-2.4, 2.3]} tex={`(x_0, p_0) = (${x0.toFixed(2)}, ${v0.toFixed(2)})`} size={11} />
        <Tex
          at={[-2.4, 1.95]}
          tex={`\\gamma = ${gamma.toFixed(2)}`}
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="γ" value={gamma} min={0} max={2} step={0.02} onChange={setGamma} />
    </div>
  )
}
// 01.11.9 Orbit Designer - drag the velocity at perihelion; see orbit type
export function OrbitDesigner() {
  const [v, setV] = React.useState(1.1) // tangential speed at r0=1, GM=1
  const r0 = 1
  // E = ½v² - 1/r ; L = r0 * v
  const E = 0.5 * v * v - 1 / r0
  const L = r0 * v
  // Conic params with μk = 1
  const eps = Math.sqrt(Math.max(0, 1 + 2 * E * L * L))
  const p = L * L // semi-latus rectum
  const path = []
  for (let k = 0; k <= 720; k++) {
    const th = (k / 720) * 2 * Math.PI - Math.PI
    const denom = 1 + eps * Math.cos(th)
    if (denom < 0.05) continue
    const r = p / denom
    if (r > 8 || r < 0.05) continue
    path.push([r * Math.cos(th), r * Math.sin(th)])
  }
  const kind =
    eps < 0.02
      ? 'circle'
      : eps < 1
        ? 'ellipse'
        : Math.abs(eps - 1) < 0.05
          ? 'parabola'
          : 'hyperbola'
  return (
    <div>
      <Plot xRange={[-5, 3]} yRange={[-3, 3]} width={620} height={360}>
        <Axes step={1} />
        <Dot x={0} y={0} r={5} />
        <Polyline points={path} opacity={OPACITY.fg} />
        {/* perihelion marker + velocity arrow */}
        <Dot x={r0} y={0} r={3} opacity={OPACITY.accent} />
        <Arrow from={[r0, 0]} to={[r0, v]} opacity={OPACITY.accent} />
        <DragHandle
          x={r0}
          y={v}
          onChange={(_, y) => setV(Math.max(0.1, Math.min(2.2, y)))}
          label="V"
        />
        <Tex
          at={[-4.9, 2.7]}
          tex={`v = ${v.toFixed(2)},\\ \\varepsilon = ${eps.toFixed(2)}`}
          size={11}
        />
        <Tex
          at={[-4.9, 2.35]}
          tex={`E = ${E.toFixed(2)},\\ L = ${L.toFixed(2)}`}
          size={11}
          opacity={OPACITY.dim}
        />
        <Tex at={[-4.9, 2.0]} tex={`\\text{${kind}}`} size={11} opacity={OPACITY.accent} />
        <Tex
          at={[-4.9, 1.6]}
          tex={`v_{esc} = \\sqrt{\\dfrac{2}{r_0}} = ${Math.sqrt(2 / r0).toFixed(2)}`}
          size={10}
          opacity={OPACITY.faint}
        />
      </Plot>
    </div>
  )
}
// 01.11.10 Lorentz Boost - drag β, see worldline tilt and simultaneity hyperplane
export function LorentzBoostInteractive() {
  const [b, setB] = React.useState(0.4)
  const g = 1 / Math.sqrt(1 - b * b)
  // Boosted axes: t' axis along (b, 1) direction; x' axis along (1, b)
  const range = 2.5
  return (
    <div>
      <Plot xRange={[-3, 3]} yRange={[-3, 3]} width={520} height={400}>
        <Axes step={1} />
        {/* Light cone */}
        <Polyline
          points={[
            [-3, -3],
            [3, 3]
          ]}
          opacity={OPACITY.dim}
          dash="2 3"
        />
        <Polyline
          points={[
            [-3, 3],
            [3, -3]
          ]}
          opacity={OPACITY.dim}
          dash="2 3"
        />
        {/* t' axis (worldline of moving observer) */}
        <Polyline
          points={[
            [-b * range, -range],
            [b * range, range]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {/* x' axis (simultaneity hyperplane) */}
        <Polyline
          points={[
            [-range, -b * range],
            [range, b * range]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={1.5}
        />
        {/* Hyperbolae: invariant intervals */}
        <Parametric
          xy={u => [Math.sinh(u), Math.cosh(u)]}
          t={[-1.6, 1.6]}
          opacity={OPACITY.faint}
        />
        <Parametric
          xy={u => [Math.cosh(u), Math.sinh(u)]}
          t={[-1.6, 1.6]}
          opacity={OPACITY.faint}
        />
        {/* Event marker */}
        <Dot x={1.5} y={2} r={4} opacity={OPACITY.accent} />
        {(() => {
          const tP = g * (2 - b * 1.5)
          const xP = g * (1.5 - b * 2)
          return (
            <Tex
              at={[1.5, 2]}
              dx={8}
              tex={`(${xP.toFixed(2)}, ${tP.toFixed(2)})`}
              size={10}
              opacity={OPACITY.accent}
            />
          )
        })()}
        <Tex
          at={[-2.9, 2.7]}
          tex={`\\beta = ${b.toFixed(2)},\\ \\gamma = ${g.toFixed(2)}`}
          size={11}
        />
        <Tex at={[b * range, range]} dx={8} tex={`ct'`} size={11} />
        <Tex at={[range, b * range]} dx={6} dy={-4} tex={`x'`} size={11} />
        <Label at={[2.9, 0]} dy={-6} anchor="end">
          X
        </Label>
        <Label at={[0, 2.9]} dx={6}>
          CT
        </Label>
      </Plot>
      <Slider label="β" value={b} min={-0.95} max={0.95} step={0.01} onChange={setB} />
    </div>
  )
}
// 01.11.11 Resonance Driver - drive frequency vs ω₀, response amplitude live
export function ResonanceDriver() {
  const [w, setW] = React.useState(1.0)
  const [Q, setQ] = React.useState(5)
  const w0 = 1
  const gamma = w0 / Q
  const A = ww => 1 / Math.sqrt((w0 * w0 - ww * ww) ** 2 + (gamma * ww) ** 2)
  const phi = ww => Math.atan2(gamma * ww, w0 * w0 - ww * ww)
  const Aw = A(w),
    pw = phi(w)
  const Amax = A(w0)
  return (
    <div>
      <Plot xRange={[0, 2.5]} yRange={[-0.2, 1.2]} width={680} height={260}>
        <Axes step={0.5} />
        <Parametric
          xy={ww => [ww, A(ww) / Amax]}
          t={[0.05, 2.5]}
          opacity={OPACITY.fg}
          samples={400}
        />
        <Polyline
          points={[
            [w, 0],
            [w, Aw / Amax]
          ]}
          opacity={OPACITY.accent}
          dash="3 3"
        />
        <Dot x={w} y={Aw / Amax} r={4} opacity={OPACITY.accent} />
        <DragHandle
          x={w}
          y={Aw / Amax}
          onChange={x => setW(Math.max(0.05, Math.min(2.5, x)))}
          label="ω"
        />
        <Tex
          at={[0.05, 1.1]}
          tex={`\\omega = ${w.toFixed(2)},\\ \\dfrac{A}{A_{max}} = ${(Aw / Amax).toFixed(2)}`}
          size={11}
        />
        <Tex
          at={[0.05, 0.85]}
          tex={`\\phi = ${((pw * 180) / Math.PI).toFixed(0)}°,\\ Q = ${Q.toFixed(1)}`}
          size={11}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Slider label="Q" value={Q} min={1} max={30} step={0.1} onChange={setQ} />
    </div>
  )
}
// 01.11.12 Three-Body Drag - pin two masses, drag a test particle, show net F
export function ThreeBodyField() {
  const [p, setP] = React.useState([0.6, 0.8])
  const masses = [
    { r: [-1.5, 0], m: 1.5 },
    { r: [1.5, 0], m: 1.0 },
    { r: [0, -1.6], m: 0.8 }
  ]
  const G = 1
  const force = pt => {
    let fx = 0,
      fy = 0
    for (const M of masses) {
      const dx = M.r[0] - pt[0],
        dy = M.r[1] - pt[1]
      const r2 = dx * dx + dy * dy + 0.05
      const r = Math.sqrt(r2)
      const f = (G * M.m) / r2
      fx += (f * dx) / r
      fy += (f * dy) / r
    }
    return [fx, fy]
  }
  const F = force(p)
  const Fmag = Math.hypot(F[0], F[1])
  return (
    <Plot xRange={[-3, 3]} yRange={[-2.5, 2.5]} width={560} height={400}>
      <Axes step={1} />
      {/* Field grid */}
      {(() => {
        const out = []
        for (let x = -2.5; x <= 2.5; x += 0.5)
          for (let y = -2; y <= 2; y += 0.5) {
            const f = force([x, y])
            const n = Math.hypot(f[0], f[1]) || 1
            const s = Math.min(0.25, 0.06 * Math.log10(1 + n))
            out.push([x, y, (f[0] / n) * s, (f[1] / n) * s])
          }
        return out.map(([x, y, fx, fy], i) => (
          <Arrow
            key={i}
            from={[x, y]}
            to={[x + fx, y + fy]}
            opacity={OPACITY.faint}
            head={3}
            strokeWidth={0.6}
          />
        ))
      })()}
      {masses.map((M, i) => (
        <g key={i}>
          <Dot x={M.r[0]} y={M.r[1]} r={4 + Math.sqrt(M.m) * 4} />
        </g>
      ))}
      <Arrow from={p} to={[p[0] + F[0] * 0.3, p[1] + F[1] * 0.3]} opacity={OPACITY.accent} />
      <DragHandle x={p[0]} y={p[1]} onChange={(x, y) => setP([x, y])} label="TEST" />
      <Tex at={[-2.9, 2.3]} tex={`|\\mathbf{F}| = ${Fmag.toFixed(2)}`} size={11} />
      <Tex
        at={[-2.9, 1.95]}
        tex={`\\mathbf{F} \\to \\sum \\dfrac{Gm_i}{r_i^2}\\hat r_i`}
        size={11}
        opacity={OPACITY.dim}
      />
    </Plot>
  )
}


// MODULE 12 - HAMILTON'S EQUATIONS AND PHASE FLOW

// 03.1.1 Nested energy levels: H = p²/2 + q²/2 = E in phase space
export function NestedEnergyLevels() {
  const energies = [0.4, 1.0, 2.2, 3.8, 5.8]
  return (
    <Plot xRange={[-4.2, 4.2]} yRange={[-4.2, 4.2]} width={520} height={320}>
      <Axes step={1} showGrid={false} />
      {energies.map((E, i) => (
        <Parametric
          key={i}
          xy={t => [Math.sqrt(2 * E) * Math.cos(t), Math.sqrt(2 * E) * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={120}
          opacity={i === 2 ? OPACITY.fg : OPACITY.dim}
          strokeWidth={i === 2 ? 2 : 1}
        />
      ))}
      <Tex at={[0.1, 4.0]} tex="p" opacity={OPACITY.dim} />
      <Tex at={[4.0, 0.12]} tex="q" opacity={OPACITY.dim} />
      <Tex at={[1.55, 1.55]} tex={String.raw`H\!=\!E_0`} opacity={OPACITY.accent} size={11} />
      <Tex
        at={[-4.1, -3.9]}
        tex={String.raw`\text{harmonic oscillator phase portrait}`}
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}

// 03.1.2 Phase flow: 3 particles rotating in (q,p) phase space under H = ½(p²+q²)
export function PhaseFlowOrbits() {
  const radii = [1.2, 2.1, 3.0]
  const N_TRAIL = 320
  const initState = {
    particles: radii.map(r => ({ q: r, p: 0 })),
    trails: radii.map(() => [])
  }
  const step = (s, dt) => {
    const c = Math.cos(dt),
      sn = Math.sin(dt)
    const newParticles = s.particles.map(({ q, p }) => ({
      q: q * c + p * sn,
      p: -q * sn + p * c
    }))
    const newTrails = s.trails.map((trail, i) => {
      const nxt = [...trail, [s.particles[i].q, s.particles[i].p]]
      return nxt.length > N_TRAIL ? nxt.slice(nxt.length - N_TRAIL) : nxt
    })
    return { particles: newParticles, trails: newTrails }
  }
  const [state, , { playing, setPlaying, reset }] = useSimulation(initState, step)
  const ops = [OPACITY.fg, OPACITY.accent, OPACITY.dim]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4.2, 4.2]} yRange={[-4.2, 4.2]} width={520} height={320}>
        <Axes step={1} showGrid={false} />
        {state.trails.map((trail, i) =>
          trail.length > 1 ? (
            <Polyline key={i} points={trail} opacity={ops[i] * 0.45} strokeWidth={1} />
          ) : null
        )}
        {state.particles.map(({ q, p }, i) => (
          <Dot key={i} x={q} y={p} r={5} opacity={ops[i]} />
        ))}
        <Tex at={[0.1, 4.0]} tex="p" opacity={OPACITY.dim} />
        <Tex at={[4.0, 0.12]} tex="q" opacity={OPACITY.dim} />
        <Tex
          at={[-4.1, 4.0]}
          tex={String.raw`\text{phase flow preserves energy shells}`}
          opacity={OPACITY.faint}
          size={10}
        />
      </Plot>
      <PlayPause playing={playing} onToggle={() => setPlaying(v => !v)} onReset={reset} />
    </div>
  )
}

// 03.1.3 Liouville theorem: blob of 8 particles, enclosed area stays constant
export function LiouvilleBlob() {
  const N = 8
  const r0 = 0.45
  const cx0 = 2.2,
    cy0 = 0
  const N_TRAIL = 400
  const makeParticles = () =>
    Array.from({ length: N }, (_, i) => {
      const a = (2 * Math.PI * i) / N
      return { q: cx0 + r0 * Math.cos(a), p: cy0 + r0 * Math.sin(a) }
    })
  const initState = { particles: makeParticles(), ctrail: [] }

  const step = (s, dt) => {
    const c = Math.cos(dt),
      sn = Math.sin(dt)
    const newParticles = s.particles.map(({ q, p }) => ({
      q: q * c + p * sn,
      p: -q * sn + p * c
    }))
    const cq = newParticles.reduce((a, p) => a + p.q, 0) / N
    const cp = newParticles.reduce((a, p) => a + p.p, 0) / N
    const nxt = [...s.ctrail, [cq, cp]]
    return {
      particles: newParticles,
      ctrail: nxt.length > N_TRAIL ? nxt.slice(-N_TRAIL) : nxt
    }
  }

  const polyArea = pts => {
    let A = 0
    for (let i = 0; i < pts.length; i++) {
      const j = (i + 1) % pts.length
      A += pts[i].q * pts[j].p - pts[j].q * pts[i].p
    }
    return Math.abs(A / 2)
  }

  const [state, , { playing, setPlaying, reset }] = useSimulation(initState, step)
  const pts = state.particles
  const A = polyArea(pts)
  const polyPts = [...pts.map(({ q, p }) => [q, p]), [pts[0].q, pts[0].p]]

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4.2, 4.2]} yRange={[-4.2, 4.2]} width={520} height={320}>
        <Axes step={1} showGrid={false} />
        {state.ctrail.length > 1 && (
          <Polyline points={state.ctrail} opacity={OPACITY.faint} strokeWidth={1} />
        )}
        <Polyline points={polyPts} opacity={OPACITY.accent} strokeWidth={1.5} />
        {pts.map(({ q, p }, i) => (
          <Dot key={i} x={q} y={p} r={3} opacity={OPACITY.fg} />
        ))}
        <Tex
          at={[-4.1, 4.0]}
          tex={`\\text{area} = ${A.toFixed(3)}`}
          opacity={OPACITY.fg}
          size={11}
        />
        <Tex
          at={[-4.1, 3.5]}
          tex={String.raw`\text{Liouville: constant}`}
          opacity={OPACITY.dim}
          size={10}
        />
        <Tex at={[0.1, 4.0]} tex="p" opacity={OPACITY.dim} />
        <Tex at={[4.0, 0.12]} tex="q" opacity={OPACITY.dim} />
      </Plot>
      <PlayPause playing={playing} onToggle={() => setPlaying(v => !v)} onReset={reset} />
    </div>
  )
}

// 03.1.4 Legendre transform: H = pq̇ − L shown geometrically
export function LegendreHamiltonian() {
  const [qdot, setQdot] = React.useState(1.5)
  const L = v => 0.5 * v * v
  const p = qdot
  const Lval = L(qdot)
  const H = p * qdot - Lval
  const tangent = v => Lval + p * (v - qdot)

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.3, 3.5]} yRange={[-1.0, 4.2]} width={520} height={280}>
        <Axes step={1} showGrid={false} />
        <Parametric
          xy={v => [v, L(v)]}
          t={[0, 3.5]}
          samples={80}
          opacity={OPACITY.fg}
          strokeWidth={2}
        />
        <Parametric
          xy={v => [v, tangent(v)]}
          t={[-0.3, 3.5]}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
          dash="5 4"
        />
        <Dot x={qdot} y={Lval} opacity={OPACITY.fg} r={4} />
        <Polyline
          points={[
            [qdot, 0],
            [qdot, Lval]
          ]}
          opacity={OPACITY.faint}
          dash="3 3"
        />
        <Dot x={0} y={-H} opacity={OPACITY.accent} r={4} />
        <Polyline
          points={[
            [0, -H],
            [0, 0]
          ]}
          opacity={OPACITY.dim}
          dash="3 3"
        />
        <Tex
          at={[0.1, -H - 0.18]}
          tex={`H = p\\dot q - L = ${H.toFixed(2)}`}
          opacity={OPACITY.accent}
          size={11}
        />
        <Tex
          at={[3.4, L(3.4)]}
          tex={String.raw`L(\dot q)`}
          anchor="end"
          opacity={OPACITY.dim}
          dy={-10}
          size={11}
        />
        <Tex
          at={[0.1, 4.1]}
          tex={String.raw`p = \tfrac{\partial L}{\partial \dot{q}} = \dot{q}`}
          opacity={OPACITY.dim}
          size={10}
        />
        <DragHandle
          x={qdot}
          y={Lval}
          onChange={x => setQdot(Math.max(0.05, Math.min(3.4, x)))}
          constrain={x => {
            const v = Math.max(0.05, Math.min(3.4, x))
            return [v, L(v)]
          }}
          label="q̇"
        />
      </Plot>
      <Slider
        label="q̇"
        value={qdot}
        min={0.05}
        max={3.4}
        step={0.05}
        onChange={setQdot}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}


// MODULE 13 - CANONICAL TRANSFORMATIONS AND HAMILTON-JACOBI

// 03.2.1 Generating function geometry: F₁(q,Q) and F₂(q,P) types
export function GeneratingFunctionGeom() {
  const cs = [-2, -1, -0.4, 0.4, 1, 2]
  return (
    <Plot xRange={[-3.5, 3.5]} yRange={[-3.5, 3.5]} width={520} height={300}>
      <Axes step={1} showGrid={false} />
      {cs.map((c, i) => (
        <Parametric
          key={'r' + i}
          xy={t => [t, (2 * c) / (t || 0.001)]}
          t={[0.25, 3.4]}
          samples={80}
          opacity={OPACITY.dim}
          strokeWidth={1}
        />
      ))}
      {cs.map((c, i) => (
        <Parametric
          key={'l' + i}
          xy={t => [t, (2 * c) / (t || 0.001)]}
          t={[-3.4, -0.25]}
          samples={80}
          opacity={OPACITY.dim}
          strokeWidth={1}
        />
      ))}
      <Parametric
        xy={t => [t, 1.6 / (t || 0.001)]}
        t={[0.35, 3.4]}
        opacity={OPACITY.fg}
        strokeWidth={2}
      />
      <Parametric
        xy={t => [t, 1.6 / (t || 0.001)]}
        t={[-3.4, -0.35]}
        opacity={OPACITY.fg}
        strokeWidth={2}
      />
      <Tex at={[3.2, 0.65]} tex="F_1(q,Q)=c" anchor="end" opacity={OPACITY.fg} size={11} />
      <Tex at={[0.1, 3.4]} tex="Q" opacity={OPACITY.dim} />
      <Tex at={[3.4, 0.1]} tex="q" opacity={OPACITY.dim} />
      <Tex
        at={[-3.4, 3.4]}
        tex={String.raw`p = \tfrac{\partial F_1}{\partial q}`}
        opacity={OPACITY.accent}
        size={10}
      />
      <Tex
        at={[-3.4, 3.0]}
        tex={String.raw`P = -\tfrac{\partial F_1}{\partial Q}`}
        opacity={OPACITY.accent}
        size={10}
      />
      <Tex
        at={[-3.4, -3.3]}
        tex={String.raw`\text{level curves of generating fn define canonical map}`}
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}

// 03.2.2 Hamilton-Jacobi wavefronts: S(q,t) = |q|²/(2t) for free particle
export function HJWavefronts() {
  const [playing, setPlaying] = React.useState(false)
  const [tSim, setTSim] = React.useState(0.5)
  const reduced = useReducedMotion()

  React.useEffect(() => {
    if (!playing || reduced) return
    let raf
    let last = performance.now()
    const loop = now => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      setTSim(t => {
        const next = t + dt * 0.4
        return next > 3.8 ? 0.3 : next
      })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [playing, reduced])

  const levels = [0.3, 0.8, 1.5, 2.5, 3.8]
  const arrowRadius = 1.8
  const arrowPts = Array.from({ length: 6 }, (_, i) => (i * Math.PI * 2) / 6).map(a => ({
    x: arrowRadius * Math.cos(a),
    y: arrowRadius * Math.sin(a)
  }))
  const arrowLen = 0.5 / tSim
  const clampedLen = Math.min(arrowLen, 0.9)

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4.2, 4.2]} yRange={[-4.2, 4.2]} width={520} height={320}>
        <Axes step={1} showGrid={false} />
        {levels.map((c, i) => {
          const r = Math.sqrt(2 * c * tSim)
          if (r > 4.0) return null
          return (
            <Parametric
              key={i}
              xy={a => [r * Math.cos(a), r * Math.sin(a)]}
              t={[0, 2 * Math.PI]}
              samples={120}
              opacity={i === 2 ? OPACITY.fg : OPACITY.dim}
              strokeWidth={i === 2 ? 1.8 : 1}
            />
          )
        })}
        {arrowPts.map((pt, i) => (
          <Arrow
            key={i}
            from={[pt.x, pt.y]}
            to={[pt.x + pt.x * clampedLen, pt.y + pt.y * clampedLen]}
            opacity={OPACITY.accent}
            head={5}
          />
        ))}
        <Tex at={[-4.1, 4.0]} tex={`t = ${tSim.toFixed(2)}`} opacity={OPACITY.fg} size={11} />
        <Tex
          at={[-4.1, 3.5]}
          tex={String.raw`S = \tfrac{|q|^2}{2t}\;\text{(free particle)}`}
          opacity={OPACITY.dim}
          size={10}
        />
        <Tex
          at={[2.4, 1.0]}
          tex={String.raw`p = \tfrac{q}{t}`}
          opacity={OPACITY.accent}
          size={11}
        />
        <Tex at={[0.1, 4.0]} tex="q_2" opacity={OPACITY.dim} />
        <Tex at={[4.0, 0.12]} tex="q_1" opacity={OPACITY.dim} />
      </Plot>
      <PlayPause
        playing={playing}
        onToggle={() => setPlaying(v => !v)}
        onReset={() => setTSim(0.5)}
      />
    </div>
  )
}

// 03.2.3 Action as coordinate: S(q,t) parabola with slope = momentum
export function ActionCoordinate() {
  const [tVal, setTVal] = React.useState(1.5)
  const S = q => (q * q) / (2 * tVal)
  const dSdq = q => q / tVal
  const q0 = 2.0
  const S0 = S(q0)
  const p0 = dSdq(q0)
  const tangent = q => S0 + p0 * (q - q0)

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.5, 4.5]} yRange={[-0.5, 5.5]} width={520} height={280}>
        <Axes step={1} showGrid={false} />
        <Parametric
          xy={q => [q, S(q)]}
          t={[0, 4.4]}
          samples={100}
          opacity={OPACITY.fg}
          strokeWidth={2}
        />
        <Parametric
          xy={q => [q, tangent(q)]}
          t={[0.5, 4.2]}
          opacity={OPACITY.accent}
          strokeWidth={1.5}
          dash="5 4"
        />
        <Dot x={q0} y={S0} opacity={OPACITY.fg} />
        <Polyline
          points={[
            [q0, 0],
            [q0, S0]
          ]}
          opacity={OPACITY.faint}
          dash="3 3"
        />
        <Tex
          at={[q0 + 0.1, S0 + 0.2]}
          tex={`p = \\tfrac{q_0}{t} = ${p0.toFixed(2)}`}
          opacity={OPACITY.accent}
          size={11}
        />
        <Tex
          at={[4.3, S(4.3)]}
          tex="S(q,t)"
          anchor="end"
          opacity={OPACITY.dim}
          dy={-12}
          size={11}
        />
        <Tex at={[0.1, 5.4]} tex="S" opacity={OPACITY.dim} />
        <Tex at={[4.4, 0.12]} tex="q" opacity={OPACITY.dim} />
        <Tex at={[0.1, 4.9]} tex={`t = ${tVal.toFixed(2)}`} opacity={OPACITY.fg} size={11} />
        <Tex
          at={[0.1, 4.4]}
          tex={String.raw`S = \tfrac{q^2}{2t}\;\Rightarrow\; p = \tfrac{\partial S}{\partial q}`}
          opacity={OPACITY.dim}
          size={10}
        />
      </Plot>
      <Slider
        label="time t"
        value={tVal}
        min={0.3}
        max={3.5}
        step={0.05}
        onChange={setTVal}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}


// MODULE 14 - ACTION-ANGLE VARIABLES AND INTEGRABLE SYSTEMS

// 03.3.1 Action-angle construction: harmonic oscillator ellipse, moving dot, swept area = I·θ
export function ActionAngleConstruction() {
  const [energy, setEnergy] = React.useState(2.0)
  const A = Math.sqrt(2 * energy)
  const initState = { theta: 0 }
  const step = (s, dt) => ({ theta: s.theta + dt })
  const [state, , { playing, setPlaying, reset }] = useSimulation(initState, step)
  const th = state.theta % (2 * Math.PI)
  const q = A * Math.cos(th)
  const p = A * Math.sin(th)
  const sweptFrac = th / (2 * Math.PI)

  const N_WEDGE = Math.max(2, Math.round(80 * sweptFrac))
  const wedgePts = [[0, 0]]
  for (let i = 0; i <= N_WEDGE; i++) {
    const a = (th * i) / N_WEDGE
    wedgePts.push([A * Math.cos(a), A * Math.sin(a)])
  }
  wedgePts.push([0, 0])

  const lim = A + 0.8
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-lim, lim]} yRange={[-lim, lim]} width={520} height={320}>
        <Axes step={1} showGrid={false} />
        <Parametric
          xy={a => [A * Math.cos(a), A * Math.sin(a)]}
          t={[0, 2 * Math.PI]}
          samples={120}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
        <Polyline
          points={wedgePts}
          opacity={OPACITY.accent * 0.35}
          strokeWidth={0}
          fill="rgba(240,240,250,1)"
          fillOpacity={0.08}
          closed
        />
        <Polyline points={wedgePts} opacity={OPACITY.accent} strokeWidth={1} />
        <Dot x={q} y={p} r={6} opacity={OPACITY.fg} />
        <Tex at={[0.1, lim - 0.2]} tex="p" opacity={OPACITY.dim} />
        <Tex at={[lim - 0.2, 0.12]} tex="q" opacity={OPACITY.dim} />
        <Tex
          at={[-lim + 0.1, lim - 0.2]}
          tex={`I = \\tfrac{E}{\\omega} = ${energy.toFixed(1)}`}
          opacity={OPACITY.fg}
          size={11}
        />
        <Tex
          at={[-lim + 0.1, lim - 0.7]}
          tex={`\\theta = ${th.toFixed(2)}\\,\\text{rad}`}
          opacity={OPACITY.dim}
          size={10}
        />
        <Tex
          at={[-lim + 0.1, lim - 1.15]}
          tex={String.raw`\text{shaded area} = \tfrac{I\theta}{2}`}
          opacity={OPACITY.faint}
          size={10}
        />
      </Plot>
      <Slider
        label="E"
        value={energy}
        min={0.3}
        max={5.0}
        step={0.1}
        onChange={E => {
          setEnergy(E)
          reset()
        }}
        format={v => v.toFixed(1)}
      />
      <PlayPause playing={playing} onToggle={() => setPlaying(v => !v)} onReset={reset} />
    </div>
  )
}

// 03.3.2 Integrable phase portrait: pendulum H = p²/2 − cos(q), with separatrix
export function IntegrablePhasePortrait() {
  const levels = [-0.85, -0.5, 0.0, 0.7, 1.0, 1.5, 2.5]
  const opacs = [
    OPACITY.dim,
    OPACITY.dim,
    OPACITY.dim,
    OPACITY.dim,
    OPACITY.fg,
    OPACITY.dim,
    OPACITY.dim
  ]
  const widths = [1, 1, 1, 1, 2, 1, 1]
  return (
    <Plot xRange={[-Math.PI - 0.5, Math.PI + 0.5]} yRange={[-3.2, 3.2]} width={520} height={300}>
      <Axes step={1} showGrid={false} />
      {levels.map((E, i) => {
        if (E < 1.0) {
          const qMax = Math.acos(Math.max(-1, Math.min(1, -E)))
          const upper = []
          const lower = []
          const Npts = 120
          for (let k = 0; k <= Npts; k++) {
            const q = -qMax + (2 * qMax * k) / Npts
            const p2 = 2 * (E + Math.cos(q))
            if (p2 < 0) continue
            const p = Math.sqrt(p2)
            upper.push([q, p])
            lower.push([q, -p])
          }
          return (
            <React.Fragment key={i}>
              <Polyline points={upper} opacity={opacs[i]} strokeWidth={widths[i]} />
              <Polyline points={lower} opacity={opacs[i]} strokeWidth={widths[i]} />
            </React.Fragment>
          )
        } else {
          const upper = []
          const lower = []
          const Npts = 200
          for (let k = 0; k <= Npts; k++) {
            const q = -(Math.PI + 0.4) + (2 * (Math.PI + 0.4) * k) / Npts
            const p2 = 2 * (E + Math.cos(q))
            if (p2 < 0) continue
            const p = Math.sqrt(p2)
            upper.push([q, p])
            lower.push([q, -p])
          }
          return (
            <React.Fragment key={i}>
              <Polyline points={upper} opacity={opacs[i]} strokeWidth={widths[i]} />
              <Polyline points={lower} opacity={opacs[i]} strokeWidth={widths[i]} />
            </React.Fragment>
          )
        }
      })}
      <Dot x={Math.PI} y={0} opacity={OPACITY.fg} r={3} />
      <Dot x={-Math.PI} y={0} opacity={OPACITY.fg} r={3} />
      <Dot x={0} y={0} opacity={OPACITY.dim} r={3} />
      <Tex at={[0.1, 3.1]} tex="p" opacity={OPACITY.dim} />
      <Tex at={[Math.PI + 0.1, 0.12]} tex="q" opacity={OPACITY.dim} />
      <Tex at={[Math.PI - 0.1, 0.25]} tex="M_h" anchor="end" opacity={OPACITY.fg} size={11} />
      <Tex
        at={[-Math.PI - 0.4, 3.1]}
        tex={String.raw`\text{pendulum: }H = \tfrac{p^2}{2} - \cos q`}
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}

// 03.3.3 Torus trajectory: rational vs irrational frequency ratio
export function TorusTrajectoryViz() {
  const w1 = 1.0
  const w2rat = 0.5
  const w2irr = 1 / Math.SQRT2

  const A = 1.6
  const ptsRat = []
  const ptsIrr = []
  const N = 800
  const Tmax = 25
  for (let i = 0; i <= N; i++) {
    const t = (Tmax * i) / N
    ptsRat.push([A * Math.cos(w1 * t) - 2.2, A * Math.sin(w2rat * t)])
    ptsIrr.push([A * Math.cos(w1 * t) + 2.2, A * Math.sin(w2irr * t)])
  }

  return (
    <Plot xRange={[-4.4, 4.4]} yRange={[-2.4, 2.4]} width={520} height={260}>
      <Axes step={2} showGrid={false} showTicks={false} showOrigin={false} />
      <Polyline
        points={[
          [0, -2.2],
          [0, 2.2]
        ]}
        opacity={OPACITY.faint}
      />
      <Polyline points={ptsRat} opacity={OPACITY.fg} strokeWidth={1.2} />
      <Polyline points={ptsIrr} opacity={OPACITY.accent * 0.6} strokeWidth={0.8} />
      <Tex
        at={[-2.2, 2.2]}
        tex={String.raw`\tfrac{\omega_2}{\omega_1} = \tfrac{1}{2}`}
        anchor="middle"
        opacity={OPACITY.fg}
        size={11}
      />
      <Tex
        at={[-2.2, 1.9]}
        tex={String.raw`\text{rational: closed}`}
        anchor="middle"
        opacity={OPACITY.dim}
        size={10}
      />
      <Tex
        at={[2.2, 2.2]}
        tex={String.raw`\tfrac{\omega_2}{\omega_1} = \tfrac{1}{\sqrt{2}}`}
        anchor="middle"
        opacity={OPACITY.accent}
        size={11}
      />
      <Tex
        at={[2.2, 1.9]}
        tex={String.raw`\text{irrational: dense}`}
        anchor="middle"
        opacity={OPACITY.dim}
        size={10}
      />
    </Plot>
  )
}

// 03.3.4 Averaging theorem: fast oscillation vs slow averaged envelope
export function AveragingViz() {
  const [eps, setEps] = React.useState(0.4)
  const Npts = 400
  const Tmax = 8
  const truePts = []
  const avgPts = []
  for (let i = 0; i <= Npts; i++) {
    const t = (Tmax * i) / Npts
    const x = (1 + eps * Math.cos(t)) * Math.cos(8 * t)
    truePts.push([t, x])
    avgPts.push([t, 1 + eps * Math.cos(t)])
  }
  const avgLow = []
  for (let i = 0; i <= Npts; i++) {
    const t = (Tmax * i) / Npts
    avgLow.push([t, -(1 + eps * Math.cos(t))])
  }

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, Tmax]} yRange={[-2.2, 2.2]} width={520} height={260}>
        <Axes step={2} showGrid={false} showTicks={false} />
        <Polyline points={truePts} opacity={OPACITY.dim} strokeWidth={0.8} />
        <Polyline points={avgPts} opacity={OPACITY.fg} strokeWidth={2} />
        <Polyline points={avgLow} opacity={OPACITY.fg} strokeWidth={2} dash="4 3" />
        <Tex
          at={[0.1, 2.1]}
          tex={String.raw`\text{fast oscillation}`}
          opacity={OPACITY.dim}
          size={10}
        />
        <Tex
          at={[0.1, 1.65]}
          tex={String.raw`\text{averaged envelope}`}
          opacity={OPACITY.fg}
          size={10}
        />
        <Tex at={[7.9, 0.12]} tex="t" anchor="end" opacity={OPACITY.dim} />
        <Tex
          at={[0.1, -1.9]}
          tex={`\\varepsilon = ${eps.toFixed(2)}`}
          opacity={OPACITY.accent}
          size={11}
        />
      </Plot>
      <Slider
        label="ε"
        value={eps}
        min={0}
        max={0.9}
        step={0.05}
        onChange={setEps}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}


// MODULE 15 - GEODESICS, JACOBI EQUATION, AND CURVATURE

// 03.4.1 Jacobi equation: geodesic deviation for K>0 (oscillatory) vs K<0 (exponential)
export function JacobiGeodesicDeviation() {
  const [K, setK] = React.useState(0.6)
  const Npts = 200
  const Tmax = 7
  const upperPts = []
  const lowerPts = []
  for (let i = 0; i <= Npts; i++) {
    const t = (Tmax * i) / Npts
    let y
    if (K > 0.01) {
      y = 1.5 * Math.sin(Math.sqrt(K) * t)
    } else if (K < -0.01) {
      y = Math.min(3.0, 0.5 * Math.sinh(Math.sqrt(-K) * t))
    } else {
      y = 0.6 * t
    }
    upperPts.push([t, y])
    lowerPts.push([t, -y])
  }

  const label =
    K > 0.01
      ? `K > 0:\\;\\text{oscillatory}`
      : K < -0.01
        ? `K < 0:\\;\\text{exponential}`
        : `K = 0:\\;\\text{linear}`
  const op = K > 0 ? OPACITY.accent : OPACITY.fg

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, Tmax]} yRange={[-3.4, 3.4]} width={520} height={280}>
        <Axes step={1} showGrid={false} showTicks={false} />
        <Polyline points={upperPts} opacity={op} strokeWidth={2} />
        <Polyline points={lowerPts} opacity={op} strokeWidth={2} />
        <Polyline
          points={[
            [0, 0],
            [Tmax, 0]
          ]}
          opacity={OPACITY.faint}
        />
        <Tex at={[0.2, 3.2]} tex={label} opacity={op} size={11} />
        <Tex at={[6.8, 0.12]} tex="t" anchor="end" opacity={OPACITY.dim} />
        <Tex at={[0.1, 0.25]} tex="y(0)=0" opacity={OPACITY.faint} size={10} />
        <Tex
          at={[0.1, -3.1]}
          tex={String.raw`\text{Jacobi eq: }y'' + Ky = 0`}
          opacity={OPACITY.faint}
          size={10}
        />
      </Plot>
      <Slider
        label="K"
        value={K}
        min={-1.0}
        max={1.5}
        step={0.05}
        onChange={setK}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}

// 03.4.2 Co-adjoint orbit: angular momentum sphere with polhode curves
export function CoadjointOrbitSphere() {
  const [Lsq, setLsq] = React.useState(1.0)
  const I1 = 1.0,
    I2 = 2.0,
    I3 = 3.2

  const orbits = React.useMemo(() => {
    const Tmin = Lsq / (2 * I3),
      Tmax = Lsq / (2 * I1)
    const fracs = [0.06, 0.2, 0.38, 0.5, 0.62, 0.8, 0.94]
    const lines = []
    fracs.forEach(frac => {
      const twoT = 2 * (Tmin + frac * (Tmax - Tmin))
      const w1sq = (Lsq - I3 * twoT) / (I1 * (I1 - I3))
      const w3sq = (Lsq - I1 * twoT) / (I3 * (I3 - I1))
      let w0
      if (w1sq >= 0 && w3sq >= 0) {
        w0 = [Math.sqrt(Math.max(w1sq, 0)), 0, Math.sqrt(Math.max(w3sq, 0))]
      } else if (w1sq < 0) {
        const w2sq = (I3 * twoT - Lsq) / (I2 * (I3 - I2))
        const w3s = (Lsq - I2 * twoT) / (I3 * (I3 - I2))
        if (w2sq < 0 || w3s < 0) return
        w0 = [0, Math.sqrt(w2sq), Math.sqrt(w3s)]
      } else {
        const w1s = (Lsq - I2 * twoT) / (I1 * (I1 - I2))
        const w2s = (I1 * twoT - Lsq) / (I2 * (I1 - I2))
        if (w1s < 0 || w2s < 0) return
        w0 = [Math.sqrt(w1s), Math.sqrt(w2s), 0]
      }
      const f = (t, w) => [
        ((I2 - I3) / I1) * w[1] * w[2],
        ((I3 - I1) / I2) * w[2] * w[0],
        ((I1 - I2) / I3) * w[0] * w[1]
      ]
      const pts = []
      let w = w0.slice()
      const dt = 0.02
      for (let i = 0; i < 1200; i++) {
        pts.push([w[0], w[2]])
        w = rk4Step(f, 0, w, dt)
      }
      lines.push(pts)
    })
    return lines
  }, [Lsq])

  const axMax = (Math.sqrt(Lsq) / Math.sqrt(I1)) * 1.2
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[-axMax, axMax]}
        yRange={[-axMax * 0.72, axMax * 0.72]}
        width={520}
        height={260}
      >
        <Axes step={0.5} showGrid={false} />
        {orbits.map((pts, i) => (
          <Polyline
            key={i}
            points={pts}
            opacity={i === Math.floor(orbits.length / 2) ? OPACITY.accent : OPACITY.fg}
            strokeWidth={i === Math.floor(orbits.length / 2) ? 1.8 : 1.1}
          />
        ))}
        <Dot x={Math.sqrt(Lsq / I1)} y={0} r={3} />
        <Dot x={-Math.sqrt(Lsq / I1)} y={0} r={3} />
        <Dot x={0} y={Math.sqrt(Lsq / I3)} r={3} />
        <Dot x={0} y={-Math.sqrt(Lsq / I3)} r={3} />
        <Tex at={[Math.sqrt(Lsq / I1) + 0.05, 0.06]} tex="M_1" opacity={OPACITY.fg} size={11} />
        <Tex at={[0.06, Math.sqrt(Lsq / I3) + 0.06]} tex="M_3" opacity={OPACITY.fg} size={11} />
        <Tex
          at={[axMax - 0.1, -axMax * 0.68]}
          tex={`|\\mathbf{M}|^2 = ${Lsq.toFixed(2)}`}
          anchor="end"
          opacity={OPACITY.dim}
          size={10}
        />
        <Tex
          at={[-axMax + 0.1, -axMax * 0.68]}
          tex={String.raw`\text{co-adjoint orbit on }SO(3)`}
          opacity={OPACITY.faint}
          size={10}
        />
      </Plot>
      <Slider label="|M|²" value={Lsq} min={0.3} max={3.0} step={0.05} onChange={setLsq} />
    </div>
  )
}

// 03.4.3 Poisson bracket algebra: {M₁,M₂}=M₃ shown as 3D arrow diagram
export function PoissonBracketAlgebra() {
  const proj = v => {
    const yaw = 0.55,
      pitch = 0.35
    const cy = Math.cos(yaw),
      sy = Math.sin(yaw)
    const cp = Math.cos(pitch),
      sp = Math.sin(pitch)
    const x1 = v[0] * cy + v[2] * sy
    const z1 = -v[0] * sy + v[2] * cy
    const y2 = v[1] * cp - z1 * sp
    return [x1 * 2.8, y2 * 2.8]
  }
  const e1 = proj([1, 0, 0])
  const e2 = proj([0, 1, 0])
  const e3 = proj([0, 0, 1])
  const origin = [0, 0]

  const arcPts = Array.from({ length: 20 }, (_, i) => {
    const s = i / 19
    const v = [0, Math.cos(s * 0.8) * 0.55, Math.sin(s * 0.8) * 0.55]
    return proj(v)
  })

  return (
    <Plot xRange={[-3.5, 3.5]} yRange={[-3.0, 3.0]} width={520} height={280}>
      <Axes step={1} showGrid={false} showTicks={false} showOrigin={false} />
      <Arrow from={origin} to={e1} opacity={OPACITY.fg} head={7} strokeWidth={1.5} />
      <Arrow from={origin} to={e2} opacity={OPACITY.fg} head={7} strokeWidth={1.5} />
      <Arrow from={origin} to={e3} opacity={OPACITY.accent} head={7} strokeWidth={2} />
      <Polyline points={arcPts} opacity={OPACITY.dim} strokeWidth={1} dash="3 3" />
      <Tex at={[e1[0] + 0.15, e1[1] + 0.1]} tex="M_1" opacity={OPACITY.fg} size={13} />
      <Tex at={[e2[0] + 0.1, e2[1] + 0.15]} tex="M_2" opacity={OPACITY.fg} size={13} />
      <Tex at={[e3[0] + 0.1, e3[1]]} tex="M_3" opacity={OPACITY.accent} size={13} />
      <Tex at={[-3.4, 2.8]} tex={String.raw`\{M_1,M_2\} = M_3`} opacity={OPACITY.fg} size={11} />
      <Tex at={[-3.4, 2.35]} tex={String.raw`\{M_2,M_3\} = M_1`} opacity={OPACITY.dim} size={11} />
      <Tex at={[-3.4, 1.9]} tex={String.raw`\{M_3,M_1\} = M_2`} opacity={OPACITY.dim} size={11} />
      <Tex
        at={[-3.4, -2.8]}
        tex={String.raw`\text{Lie algebra of }SO(3):\;\mathfrak{so}(3)`}
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}


// MODULE 16 - ADIABATIC INVARIANTS

const K0 = 0.5,
  EPS = 0.04
const kOfT = t => K0 + EPS * Math.min(t, 25)

// 04.1.1 Adiabatic oscillator: x(t) with slowly growing spring constant
export function AdiabaticOscillator() {
  const N_TRAIL = 600
  const initState = { x: 2.0, v: 0, t: 0, trail: [] }

  const step = (s, dt) => {
    const k = kOfT(s.t)
    const f = (tt, y) => [y[1], -k * y[0]]
    const yn = rk4Step(f, s.t, [s.x, s.v], dt)
    const nxt = [...s.trail, [s.t, s.x]]
    return {
      x: yn[0],
      v: yn[1],
      t: s.t + dt,
      trail: nxt.length > N_TRAIL ? nxt.slice(-N_TRAIL) : nxt
    }
  }

  const [state, , { playing, setPlaying, reset }] = useSimulation(initState, step)
  const k = kOfT(state.t)
  const E = 0.5 * state.v * state.v + 0.5 * k * state.x * state.x
  const omega = Math.sqrt(k)
  const I = E / omega

  const tNow = state.t
  const tWindow = 20
  const tMin = Math.max(0, tNow - tWindow)
  const trailInWindow = state.trail.filter(([t]) => t >= tMin)

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[tMin, tMin + tWindow]} yRange={[-3.0, 3.0]} width={520} height={260}>
        <Axes step={5} showGrid={false} showTicks={false} />
        {trailInWindow.length > 1 && (
          <Polyline points={trailInWindow} opacity={OPACITY.fg} strokeWidth={1.5} />
        )}
        <Dot x={tNow} y={state.x} r={5} opacity={OPACITY.accent} />
        <Tex
          at={[tMin + 0.3, 2.8]}
          tex={`I = \\tfrac{E}{\\omega} = ${I.toFixed(3)}`}
          opacity={OPACITY.fg}
          size={11}
        />
        <Tex
          at={[tMin + 0.3, 2.4]}
          tex={`\\omega = ${omega.toFixed(3)}`}
          opacity={OPACITY.dim}
          size={10}
        />
        <Tex at={[tMin + 0.3, 2.05]} tex={`E = ${E.toFixed(3)}`} opacity={OPACITY.dim} size={10} />
        <Tex
          at={[tMin + 0.3, -2.8]}
          tex={String.raw`\text{amplitude shrinks as }\omega\text{ grows}`}
          opacity={OPACITY.faint}
          size={10}
        />
      </Plot>
      <PlayPause playing={playing} onToggle={() => setPlaying(v => !v)} onReset={reset} />
    </div>
  )
}

// 04.1.2 Adiabatic invariant: E(t), ω(t) rise together; ratio I = E/ω stays flat
export function AdiabaticInvariantArea() {
  const N_TRAIL = 500
  const initState = { x: 2.0, v: 0, t: 0, Itrail: [], Etrail: [], wtrail: [] }

  const step = (s, dt) => {
    const k = kOfT(s.t)
    const f = (tt, y) => [y[1], -k * y[0]]
    const yn = rk4Step(f, s.t, [s.x, s.v], dt)
    const E = 0.5 * yn[1] * yn[1] + 0.5 * kOfT(s.t + dt) * yn[0] * yn[0]
    const omega = Math.sqrt(kOfT(s.t + dt))
    const I = E / omega
    const push = (arr, val) => {
      const nxt = [...arr, [s.t + dt, val]]
      return nxt.length > N_TRAIL ? nxt.slice(-N_TRAIL) : nxt
    }
    return {
      x: yn[0],
      v: yn[1],
      t: s.t + dt,
      Itrail: push(s.Itrail, I),
      Etrail: push(s.Etrail, E),
      wtrail: push(s.wtrail, omega)
    }
  }

  const [state, , { playing, setPlaying, reset }] = useSimulation(initState, step)
  const tNow = state.t
  const tWindow = 20
  const tMin = Math.max(0, tNow - tWindow)

  const inWin = trail => trail.filter(([t]) => t >= tMin)
  const Emax = 5,
    wmax = 3,
    Iref = 2.0
  const eNorm = inWin(state.Etrail).map(([t, v]) => [t, v * (2.5 / Emax)])
  const wNorm = inWin(state.wtrail).map(([t, v]) => [t, v * (2.5 / wmax) - 1.5])
  const iNorm = inWin(state.Itrail).map(([t, v]) => [t, (v / Iref) * 0.8 - 2.6])

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[tMin, tMin + tWindow]} yRange={[-3.5, 3.5]} width={520} height={280}>
        <Axes step={5} showGrid={false} showTicks={false} showOrigin={false} />
        {eNorm.length > 1 && <Polyline points={eNorm} opacity={OPACITY.dim} strokeWidth={1.5} />}
        {wNorm.length > 1 && (
          <Polyline points={wNorm} opacity={OPACITY.dim} strokeWidth={1.5} dash="4 3" />
        )}
        {iNorm.length > 1 && <Polyline points={iNorm} opacity={OPACITY.fg} strokeWidth={2} />}
        <Tex at={[tMin + 0.3, 3.3]} tex="E(t)" opacity={OPACITY.dim} size={11} />
        <Tex at={[tMin + 0.3, 2.85]} tex={String.raw`\omega(t)`} opacity={OPACITY.dim} size={11} />
        <Tex
          at={[tMin + 0.3, -1.9]}
          tex={String.raw`I = \tfrac{E}{\omega}\;\text{(flat)}`}
          opacity={OPACITY.fg}
          size={11}
        />
        <Tex
          at={[tMin + 0.3, -2.95]}
          tex={String.raw`\text{adiabatic invariant conserved}`}
          opacity={OPACITY.faint}
          size={10}
        />
      </Plot>
      <PlayPause playing={playing} onToggle={() => setPlaying(v => !v)} onReset={reset} />
    </div>
  )
}

// 04.1.3 Phase ellipse: shape changes as k grows but enclosed area = 2πI stays constant
export function AdiabaticPhaseEllipse() {
  const initState = { x: 2.0, v: 0, t: 0 }

  const step = (s, dt) => {
    const k = kOfT(s.t)
    const f = (tt, y) => [y[1], -k * y[0]]
    const yn = rk4Step(f, s.t, [s.x, s.v], dt)
    return { x: yn[0], v: yn[1], t: s.t + dt }
  }

  const [state, , { playing, setPlaying, reset }] = useSimulation(initState, step)
  const k = kOfT(state.t)
  const E = 0.5 * state.v * state.v + 0.5 * k * state.x * state.x
  const omega = Math.sqrt(k)
  const qAmp = Math.sqrt((2 * E) / k)
  const pAmp = Math.sqrt(2 * E)
  const I = E / omega
  const area = Math.PI * qAmp * pAmp

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3.5, 3.5]} yRange={[-3.5, 3.5]} width={520} height={300}>
        <Axes step={1} showGrid={false} />
        <Parametric
          xy={a => [qAmp * Math.cos(a), pAmp * Math.sin(a)]}
          t={[0, 2 * Math.PI]}
          samples={120}
          opacity={OPACITY.fg}
          strokeWidth={2}
        />
        <Parametric
          xy={a => [2.0 * Math.cos(a), Math.sqrt(K0) * 2.0 * Math.sin(a)]}
          t={[0, 2 * Math.PI]}
          samples={80}
          opacity={OPACITY.faint}
          strokeWidth={1}
          dash="4 4"
        />
        <Dot x={state.x} y={state.v} r={5} opacity={OPACITY.accent} />
        <Tex at={[-3.4, 3.3]} tex={`2\\pi I = ${area.toFixed(3)}`} opacity={OPACITY.fg} size={11} />
        <Tex
          at={[-3.4, 2.85]}
          tex={`\\omega = ${omega.toFixed(3)},\\;E = ${E.toFixed(3)}`}
          opacity={OPACITY.dim}
          size={10}
        />
        <Tex
          at={[-3.4, -3.3]}
          tex={String.raw`\text{ellipse area constant even as shape changes}`}
          opacity={OPACITY.faint}
          size={10}
        />
        <Tex at={[0.1, 3.3]} tex="p" opacity={OPACITY.dim} />
        <Tex at={[3.3, 0.12]} tex="q" opacity={OPACITY.dim} />
      </Plot>
      <PlayPause playing={playing} onToggle={() => setPlaying(v => !v)} onReset={reset} />
    </div>
  )
}


// MODULE 17 - KAM THEORY

// 04.2.1 Invariant tori: nested concentric ellipses (cross-section of 2-tori on energy surface)
export function InvariantToriDiagram() {
  const radii = [0.5, 1.1, 1.9, 2.8, 3.8]
  return (
    <Plot xRange={[-5.8, 5.8]} yRange={[-3.2, 3.2]} width={520} height={280}>
      <Axes step={1} showGrid={false} showTicks={false} showOrigin={false} />
      {radii.map((r, i) => (
        <Parametric
          key={i}
          xy={t => [r * 1.45 * Math.cos(t), r * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={120}
          opacity={i === 2 ? OPACITY.fg : OPACITY.dim}
          strokeWidth={i === 2 ? 2 : 1}
        />
      ))}
      <Tex
        at={[0, 2.7]}
        tex={String.raw`\mathbb{T}^2`}
        anchor="middle"
        opacity={OPACITY.dim}
        size={13}
      />
      <Tex
        at={[0, -2.85]}
        tex={String.raw`\text{non-resonant tori survive small perturbations (KAM)}`}
        anchor="middle"
        opacity={OPACITY.faint}
        size={10}
      />
      <Tex
        at={[-5.6, 3.0]}
        tex={String.raw`\text{nested invariant 2-tori · energy surface cross-section}`}
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}

// 04.2.2 KAM Cantor set: surviving (bright) vs destroyed (dim) frequency bands
export function KAMCantorSet() {
  const bands = []
  let y = -2.6
  const bh = 0.22,
    gap = 0.14
  for (let i = 0; i < 11; i++) {
    bands.push({ y, survive: i % 3 !== 1 })
    y += bh + gap
  }

  return (
    <Plot xRange={[-5.5, 5.5]} yRange={[-3.0, 3.0]} width={520} height={260}>
      <Axes step={1} showGrid={false} showTicks={false} showOrigin={false} />
      {bands.map((b, i) => (
        <Polyline
          key={i}
          points={[
            [-4.8, b.y + bh / 2],
            [4.8, b.y + bh / 2]
          ]}
          opacity={b.survive ? OPACITY.fg : OPACITY.faint}
          strokeWidth={b.survive ? 3 : 1}
        />
      ))}
      <Tex at={[-5.4, 2.85]} tex={String.raw`\omega`} opacity={OPACITY.dim} size={12} />
      <Tex
        at={[0, 2.85]}
        tex={String.raw`\text{Diophantine (survive)}`}
        anchor="middle"
        opacity={OPACITY.dim}
        size={10}
      />
      <Tex
        at={[0, -2.85]}
        tex={String.raw`\text{resonant gaps (destroyed)}`}
        anchor="middle"
        opacity={OPACITY.faint}
        size={10}
      />
      <Tex
        at={[5.4, 2.85]}
        tex={String.raw`\text{Cantor set structure}`}
        anchor="end"
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}

// 04.2.3 Conditionally periodic trajectory: Lissajous with irrational ω₂/ω₁ (dense fill)
export function ConditionallyPeriodic() {
  const omega1 = 1.0
  const omega2 = Math.SQRT2
  const pts = []
  const Npts = 1200
  const Tmax = 42
  for (let i = 0; i <= Npts; i++) {
    const t = (Tmax * i) / Npts
    pts.push([2.4 * Math.cos(omega1 * t), 2.4 * Math.sin(omega2 * t)])
  }
  return (
    <Plot xRange={[-3.2, 3.2]} yRange={[-3.2, 3.2]} width={520} height={300}>
      <Axes step={1} showGrid={false} showTicks={false} />
      <Polyline points={pts} opacity={OPACITY.accent * 0.75} strokeWidth={0.9} />
      <Tex
        at={[-3.1, 3.1]}
        tex={String.raw`\tfrac{\omega_2}{\omega_1} = \sqrt{2}\;\text{(irrational)}`}
        opacity={OPACITY.fg}
        size={11}
      />
      <Tex
        at={[-3.1, 2.65]}
        tex={String.raw`\text{trajectory densely fills torus}`}
        opacity={OPACITY.dim}
        size={10}
      />
      <Tex
        at={[0, -3.0]}
        tex={String.raw`\text{conditionally periodic: never closes}`}
        anchor="middle"
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}

// 04.2.4 Frequency map: action space I → frequency space ω(I) = ∂H₀/∂I
export function FrequencyMap() {
  const actionCircles = [0.6, 1.2, 1.9]
  const freqCurve = []
  for (let i = 0; i <= 80; i++) {
    const s = i / 80
    const t = 0.3 + s * 2.0
    freqCurve.push([2.0 + t * 0.55, 0.45 * t * Math.sin(t * 1.1)])
  }

  return (
    <Plot xRange={[-6.0, 6.0]} yRange={[-2.8, 2.8]} width={520} height={240}>
      <Axes step={1} showGrid={false} showTicks={false} showOrigin={false} />
      <Polyline
        points={[
          [0, -2.5],
          [0, 2.5]
        ]}
        opacity={OPACITY.faint}
      />
      {actionCircles.map((r, i) => (
        <Parametric
          key={i}
          xy={t => [-3.5 + r * Math.cos(t), r * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={80}
          opacity={i === 1 ? OPACITY.fg : OPACITY.dim}
          strokeWidth={i === 1 ? 1.5 : 1}
        />
      ))}
      <Arrow from={[-1.0, 0]} to={[0.8, 0]} opacity={OPACITY.dim} head={6} />
      <Tex
        at={[-0.15, 0.4]}
        tex={String.raw`\omega = \tfrac{\partial H_0}{\partial I}`}
        anchor="middle"
        opacity={OPACITY.dim}
        size={10}
      />
      <Polyline points={freqCurve} opacity={OPACITY.accent} strokeWidth={2} />
      <Tex at={[-3.5, 2.6]} tex="I" opacity={OPACITY.dim} size={12} />
      <Tex at={[3.5, 2.6]} tex={String.raw`\omega`} opacity={OPACITY.dim} size={12} />
      <Tex
        at={[0, -2.65]}
        tex={String.raw`\text{nondegeneracy: frequency map is injective}`}
        anchor="middle"
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}

// 04.2.5 Arnold diffusion: 2 DOF (tori trap) vs 3+ DOF (tori cannot trap)
export function ArnoldDiffusion() {
  const leftTori = [0.7, 1.4, 2.1]
  const rightTori = [0.85, 1.65]

  const driftPts = []
  for (let i = 0; i <= 80; i++) {
    const s = i / 80
    driftPts.push([1.15 + s * 2.8, -0.2 + 0.55 * Math.sin(s * 9.5)])
  }

  return (
    <Plot xRange={[-6.0, 6.0]} yRange={[-2.8, 2.8]} width={520} height={240}>
      <Axes step={1} showGrid={false} showTicks={false} showOrigin={false} />
      <Polyline
        points={[
          [0, -2.5],
          [0, 2.5]
        ]}
        opacity={OPACITY.faint}
      />
      {leftTori.map((r, i) => (
        <Parametric
          key={i}
          xy={t => [-3.5 + r * 0.9 * Math.cos(t), r * 0.62 * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={80}
          opacity={OPACITY.dim}
          strokeWidth={1.5}
        />
      ))}
      <Tex
        at={[-3.5, -2.5]}
        tex={String.raw`\text{2 DOF: trapped}`}
        anchor="middle"
        opacity={OPACITY.dim}
        size={10}
      />
      {rightTori.map((r, i) => (
        <Parametric
          key={i}
          xy={t => [2.6 + r * 0.85 * Math.cos(t), r * 0.55 * Math.sin(t)]}
          t={[0, 2 * Math.PI]}
          samples={80}
          opacity={OPACITY.faint}
          strokeWidth={1.5}
        />
      ))}
      <Polyline points={driftPts} opacity={OPACITY.accent} strokeWidth={2} />
      <Arrow
        from={driftPts[driftPts.length - 2]}
        to={driftPts[driftPts.length - 1]}
        opacity={OPACITY.accent}
        head={6}
      />
      <Tex
        at={[2.6, -2.5]}
        tex={String.raw`\text{3+ DOF: Arnold diffusion}`}
        anchor="middle"
        opacity={OPACITY.accent}
        size={10}
      />
      <Tex
        at={[0, 2.65]}
        tex={String.raw`\text{codimension of tori vs energy surface}`}
        anchor="middle"
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}


// MODULE 18 - NORMAL FORMS, POINCARÉ-BIRKHOFF, AND RESONANCE

// 04.3.1 Poincaré-Birkhoff theorem: area-preserving annulus map, ≥2 fixed points
export function PoincareBirkhoff() {
  const rOuter = 2.5,
    rInner = 1.1
  const p1 = [1.85, 0.55],
    p2 = [-1.75, -0.6]

  const outerArc = Array.from({ length: 18 }, (_, i) => {
    const a = 0.05 + (i / 17) * 0.55
    return [rOuter * Math.cos(a), rOuter * Math.sin(a)]
  })
  const innerArc = Array.from({ length: 18 }, (_, i) => {
    const a = 0.05 + (i / 17) * 0.55
    return [rInner * Math.cos(-a + 0.2), rInner * Math.sin(-a + 0.2)]
  })

  return (
    <Plot xRange={[-3.5, 3.5]} yRange={[-3.5, 3.5]} width={520} height={320}>
      <Axes step={1} showGrid={false} showTicks={false} showOrigin={false} />
      <Parametric
        xy={t => [rOuter * Math.cos(t), rOuter * Math.sin(t)]}
        t={[0, 2 * Math.PI]}
        samples={120}
        opacity={OPACITY.dim}
        strokeWidth={1.5}
      />
      <Parametric
        xy={t => [rInner * Math.cos(t), rInner * Math.sin(t)]}
        t={[0, 2 * Math.PI]}
        samples={80}
        opacity={OPACITY.dim}
        strokeWidth={1.5}
      />
      <Polyline points={outerArc} opacity={OPACITY.fg} strokeWidth={1.5} />
      <Arrow
        from={outerArc[outerArc.length - 2]}
        to={outerArc[outerArc.length - 1]}
        opacity={OPACITY.fg}
        head={5}
      />
      <Polyline points={innerArc} opacity={OPACITY.fg} strokeWidth={1.5} />
      <Arrow
        from={innerArc[innerArc.length - 2]}
        to={innerArc[innerArc.length - 1]}
        opacity={OPACITY.fg}
        head={5}
      />
      <Dot x={p1[0]} y={p1[1]} r={5} opacity={OPACITY.accent} />
      <Dot x={p2[0]} y={p2[1]} r={5} opacity={OPACITY.accent} />
      <Tex at={[p1[0] + 0.18, p1[1] + 0.15]} tex="p_1" opacity={OPACITY.accent} size={12} />
      <Tex at={[p2[0] + 0.18, p2[1] + 0.15]} tex="p_2" opacity={OPACITY.accent} size={12} />
      <Tex
        at={[-3.4, 3.3]}
        tex={String.raw`\text{inner: clockwise, outer: counterclockwise}`}
        opacity={OPACITY.dim}
        size={10}
      />
      <Tex
        at={[0, -3.3]}
        tex={String.raw`\text{at least 2 fixed points guaranteed (Poincaré-Birkhoff)}`}
        anchor="middle"
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}

// 04.3.2 Resonance phase portrait: ε-sweep shows bifurcation at ε=0
export function ResonancePortrait() {
  const [eps, setEps] = React.useState([-1.0, 0])

  const e = eps[0]
  const a = 1.0
  const saddleR = Math.abs(e) / (3 * a)

  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-3.5, 3.5]} yRange={[-3.2, 3.2]} width={520} height={300}>
        <Axes step={1} showGrid={false} />
        {[0.5, 1.0, 1.6].map((r, i) => (
          <Parametric
            key={i}
            xy={t => [r * Math.cos(t), r * Math.sin(t)]}
            t={[0, 2 * Math.PI]}
            samples={80}
            opacity={e < -0.05 ? OPACITY.dim : OPACITY.faint}
            strokeWidth={1}
          />
        ))}
        <Dot x={0} y={0} r={4} opacity={e < -0.05 ? OPACITY.accent : OPACITY.dim} />
        {e > 0.05 &&
          [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3].map((theta, i) => (
            <Dot
              key={i}
              x={saddleR * Math.cos(theta)}
              y={saddleR * Math.sin(theta)}
              r={4}
              opacity={OPACITY.accent}
            />
          ))}
        <DragHandle
          x={e}
          y={0}
          onChange={x => setEps([Math.max(-2, Math.min(2, x)), 0])}
          constrain={x => [Math.max(-2, Math.min(2, x)), 0]}
          label="ε"
          r={6}
        />
        <Tex
          at={[-3.4, 3.1]}
          tex={`\\varepsilon = ${e.toFixed(2)}`}
          opacity={OPACITY.fg}
          size={11}
        />
        <Tex
          at={[-3.4, 2.65]}
          tex={
            e < -0.05
              ? '\\text{origin: center}'
              : e > 0.05
                ? '\\text{3 saddle points at }120^\\circ'
                : '\\text{degenerate (bifurcation)}'
          }
          opacity={OPACITY.dim}
          size={10}
        />
        <Tex
          at={[-3.4, -3.1]}
          tex={String.raw`H_0 = \tfrac{\varepsilon}{2}(x^2+y^2) + a(x^3-3xy^2)`}
          opacity={OPACITY.faint}
          size={10}
        />
        <Tex
          at={[1.85, 0.18]}
          tex={String.raw`\longleftarrow\;\text{drag}`}
          opacity={OPACITY.faint}
          size={10}
        />
      </Plot>
    </div>
  )
}

// 04.3.3 Frequency repulsion: 1-parameter (hyperbola, avoided crossing) vs 2-parameter (true crossing)
export function FrequencyRepulsion() {
  const delta = 0.45
  const upper1 = []
  const lower1 = []
  for (let i = 0; i <= 80; i++) {
    const lam = -2 + (4 * i) / 80
    upper1.push([-3.5 + lam, Math.sqrt(lam * lam + delta * delta)])
    lower1.push([-3.5 + lam, -Math.sqrt(lam * lam + delta * delta)])
  }

  const cross1 = [
    [-1.5 + 1.5, -2.0],
    [1.5 + 1.5, 2.0]
  ]
  const cross2 = [
    [-1.5 + 1.5, 2.0],
    [1.5 + 1.5, -2.0]
  ]

  return (
    <Plot xRange={[-5.5, 5.5]} yRange={[-2.6, 2.6]} width={520} height={240}>
      <Axes step={1} showGrid={false} showTicks={false} showOrigin={false} />
      <Polyline
        points={[
          [0, -2.4],
          [0, 2.4]
        ]}
        opacity={OPACITY.faint}
      />
      <Polyline points={upper1} opacity={OPACITY.accent} strokeWidth={2} />
      <Polyline points={lower1} opacity={OPACITY.accent} strokeWidth={2} />
      <Dot x={-3.5} y={0} r={3} opacity={OPACITY.faint} />
      <Polyline points={cross1} opacity={OPACITY.fg} strokeWidth={2} />
      <Polyline points={cross2} opacity={OPACITY.dim} strokeWidth={2} />
      <Dot x={1.5} y={0} r={4} opacity={OPACITY.accent} />
      <Tex
        at={[-3.5, 2.5]}
        tex={String.raw`\text{1-parameter}`}
        anchor="middle"
        opacity={OPACITY.accent}
        size={10}
      />
      <Tex
        at={[-3.5, 2.1]}
        tex={String.raw`\text{avoided crossing}`}
        anchor="middle"
        opacity={OPACITY.dim}
        size={10}
      />
      <Tex
        at={[1.5, 2.5]}
        tex={String.raw`\text{2-parameter}`}
        anchor="middle"
        opacity={OPACITY.fg}
        size={10}
      />
      <Tex
        at={[1.5, 2.1]}
        tex={String.raw`\text{true crossing possible}`}
        anchor="middle"
        opacity={OPACITY.dim}
        size={10}
      />
      <Tex at={[-5.4, 2.5]} tex={String.raw`\omega_i(\lambda)`} opacity={OPACITY.faint} size={11} />
      <Tex
        at={[0, -2.5]}
        tex={String.raw`\text{frequency repulsion: generic codimension-1 vs codimension-2}`}
        anchor="middle"
        opacity={OPACITY.faint}
        size={10}
      />
    </Plot>
  )
}
