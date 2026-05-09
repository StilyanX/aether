// PHYSICS CORE - real numerical integrators + small ODE solvers.
// All units SI unless noted. No fakery.

import React from 'react'
import { useReducedMotion } from './primitives'

// RK4 ODE integrator
export function rk4Step(f, t, y, dt) {
  const n = y.length
  const k1 = f(t, y)
  const y2 = new Array(n)
  for (let i = 0; i < n; i++) y2[i] = y[i] + 0.5 * dt * k1[i]
  const k2 = f(t + 0.5 * dt, y2)
  const y3 = new Array(n)
  for (let i = 0; i < n; i++) y3[i] = y[i] + 0.5 * dt * k2[i]
  const k3 = f(t + 0.5 * dt, y3)
  const y4 = new Array(n)
  for (let i = 0; i < n; i++) y4[i] = y[i] + dt * k3[i]
  const k4 = f(t + dt, y4)
  const out = new Array(n)
  for (let i = 0; i < n; i++) {
    out[i] = y[i] + (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])
  }
  return out
}

export function rk4Integrate(f, y0, t0, t1, N = 1) {
  const dt = (t1 - t0) / N
  let y = y0.slice()
  let t = t0
  for (let i = 0; i < N; i++) {
    y = rk4Step(f, t, y, dt)
    t += dt
  }
  return y
}

export function verletStep(accelFn, t, y, v, dt) {
  const a0 = accelFn(t, y, v)
  const yNext = y.map((yi, i) => yi + v[i] * dt + 0.5 * a0[i] * dt * dt)
  const vMid = v.map((vi, i) => vi + 0.5 * a0[i] * dt)
  const a1 = accelFn(t + dt, yNext, vMid)
  const vNext = vMid.map((vmi, i) => vmi + 0.5 * a1[i] * dt)
  return [yNext, vNext]
}

export function useSimulation(initialState, step, opts = {}) {
  const { running = false, speed = 1, dtMax = 0.02 } = opts
  const [state, setState] = React.useState(initialState)
  const [playing, setPlaying] = React.useState(running)
  const stateRef = React.useRef(state)
  stateRef.current = state
  const reduced = useReducedMotion()
  React.useEffect(() => {
    if (!playing) return
    let raf = 0
    let last = performance.now()
    const loop = now => {
      let dt = Math.min((now - last) / 1000, 0.05) * speed
      last = now
      if (reduced) dt = 0
      const sub = Math.max(1, Math.ceil(dt / dtMax))
      const ddt = dt / sub
      let s = stateRef.current
      for (let i = 0; i < sub; i++) s = step(s, ddt)
      stateRef.current = s
      setState(s)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [playing, speed, reduced])
  const reset = React.useCallback(() => {
    setState(initialState)
  }, [initialState])
  return [state, setState, { playing, setPlaying, reset }]
}

export function useResetKey() {
  const [k, setK] = React.useState(0)
  return [k, () => setK(v => v + 1)]
}

// Vector helpers (2D / 3D)
export const V2 = {
  add: (a, b) => [a[0] + b[0], a[1] + b[1]],
  sub: (a, b) => [a[0] - b[0], a[1] - b[1]],
  scale: (a, s) => [a[0] * s, a[1] * s],
  dot: (a, b) => a[0] * b[0] + a[1] * b[1],
  cross: (a, b) => a[0] * b[1] - a[1] * b[0],
  norm: a => Math.hypot(a[0], a[1]),
  unit: a => {
    const n = Math.hypot(a[0], a[1])
    return n ? [a[0] / n, a[1] / n] : [0, 0]
  },
  rot: (a, th) => [
    a[0] * Math.cos(th) - a[1] * Math.sin(th),
    a[0] * Math.sin(th) + a[1] * Math.cos(th)
  ]
}

export const V3 = {
  add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
  sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
  scale: (a, s) => [a[0] * s, a[1] * s, a[2] * s],
  dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
  cross: (a, b) => [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ],
  norm: a => Math.hypot(a[0], a[1], a[2]),
  unit: a => {
    const n = Math.hypot(a[0], a[1], a[2])
    return n ? [a[0] / n, a[1] / n, a[2] / n] : [0, 0, 0]
  }
}

// Quaternion utilities (for rigid body)
export const Q = {
  id: () => [1, 0, 0, 0],
  mul: (a, b) => [
    a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3],
    a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
    a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1],
    a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0]
  ],
  normalize: q => {
    const n = Math.hypot(q[0], q[1], q[2], q[3])
    return n ? [q[0] / n, q[1] / n, q[2] / n, q[3] / n] : [1, 0, 0, 0]
  },
  rotate: (q, v) => {
    const [w, x, y, z] = q
    const tx = 2 * (y * v[2] - z * v[1])
    const ty = 2 * (z * v[0] - x * v[2])
    const tz = 2 * (x * v[1] - y * v[0])
    return [
      v[0] + w * tx + (y * tz - z * ty),
      v[1] + w * ty + (z * tx - x * tz),
      v[2] + w * tz + (x * ty - y * tx)
    ]
  },
  derivWorld: (q, omegaWorld) => {
    const om = [0, omegaWorld[0], omegaWorld[1], omegaWorld[2]]
    const dq = Q.mul(om, q)
    return [0.5 * dq[0], 0.5 * dq[1], 0.5 * dq[2], 0.5 * dq[3]]
  }
}

export function rigidBodyStep(state, dt, torqueWorldFn = () => [0, 0, 0]) {
  const { q, Lw, Ibody } = state
  const qInv = [q[0], -q[1], -q[2], -q[3]]
  const Lbody = Q.rotate(qInv, Lw)
  const omegaBody = [Lbody[0] / Ibody[0], Lbody[1] / Ibody[1], Lbody[2] / Ibody[2]]
  const omegaWorld = Q.rotate(q, omegaBody)

  const tau = torqueWorldFn(state)
  const dLw = V3.scale(tau, dt)
  const dq = Q.derivWorld(q, omegaWorld)
  const qNext = Q.normalize([
    q[0] + dq[0] * dt,
    q[1] + dq[1] * dt,
    q[2] + dq[2] * dt,
    q[3] + dq[3] * dt
  ])
  const LwNext = V3.add(Lw, dLw)
  return { q: qNext, Lw: LwNext, Ibody }
}

export function project3(v, opts = {}) {
  const { yaw = 0.6, pitch = 0.45, scale = 1, ox = 0, oy = 0 } = opts
  const cy = Math.cos(yaw),
    sy = Math.sin(yaw)
  const cp = Math.cos(pitch),
    sp = Math.sin(pitch)
  const x1 = v[0] * cy + v[2] * sy
  const z1 = -v[0] * sy + v[2] * cy
  const y2 = v[1] * cp - z1 * sp
  return [ox + x1 * scale, oy + y2 * scale]
}
