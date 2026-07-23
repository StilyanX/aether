import { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line as DreiLine, OrbitControls, Text as DreiText, Billboard } from '@react-three/drei'
import { Scene3D as Canvas } from '../scene-3d'
import { useVizColors } from '../../../hooks/use-viz-colors'
import { FONT_LABEL } from '../scale-tokens'
import { Slider } from '../primitives'

// 05.3.5 · Quasiperiodic 2-torus (R3F, true 3D): rebuilt 2026-06 to masterpiece.
// The orbit is the analytic torus flow θ=ω₁t (around the hole), φ=ω₂t (around
// the tube). With ω₂/ω₁ = the golden ratio the two frequencies are
// incommensurate, so the curve never closes and winds densely over the whole
// surface (Weyl equidistribution). Drawn in real 3D so the winding reads as
// winding, not as the flat dot-annulus the old SVG projection collapsed it to.

// three.js Color.setStyle cannot parse the color-mix()/space-separated rgb()
// that useVizColors emits, so resolve each token through a 2D canvas and
// premultiply against black: the opacity hierarchy survives without material
// transparency. (Same approach as the conical-pendulum R3F viz.)
function torusResolveColor(css) {
  if (typeof document === 'undefined') return { color: '#e0e0e4', opacity: 1 }
  const ctx = document.createElement('canvas').getContext('2d')
  ctx.fillStyle = '#000'
  try {
    ctx.fillStyle = css
  } catch (_) {
    return { color: '#e0e0e4', opacity: 1 }
  }
  const s = ctx.fillStyle
  if (s[0] === '#') return { color: s, opacity: 1 }
  const m = /rgba?\(([^)]+)\)/.exec(s)
  if (!m) return { color: '#e0e0e4', opacity: 1 }
  const [rr, gg, bb, aa = 1] = m[1]
    .split(/[ ,/]+/)
    .filter(Boolean)
    .map(Number)
  return { color: `rgb(${rr}, ${gg}, ${bb})`, opacity: Number.isFinite(aa) ? aa : 1 }
}
function torusBake(css) {
  const { color, opacity } = torusResolveColor(css)
  const m = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(color)
  if (!m) return color
  return `rgb(${Math.round(+m[1] * opacity)}, ${Math.round(+m[2] * opacity)}, ${Math.round(
    +m[3] * opacity
  )})`
}

const TORUS_R = 2.2 // major radius (hole → tube centre)
const TORUS_r = 0.85 // minor radius (tube)
const GOLDEN = (1 + Math.sqrt(5)) / 2 // irrational ⇒ ω₂/ω₁ incommensurate

function torusPoint(theta, phi, R = TORUS_R, r = TORUS_r) {
  const rr = R + r * Math.cos(phi)
  return [rr * Math.cos(theta), rr * Math.sin(theta), r * Math.sin(phi)]
}

// Camera-facing "ω" with a small numeric subscript (drei <Text> has no LaTeX,
// and the subscript-digit glyphs are unreliable in the default SDF font).
function TorusFreqLabel({ sub, col, size = 0.34 }) {
  return (
    <>
      <DreiText fontSize={size} color={col} anchorX="left" anchorY="middle">
        ω
      </DreiText>
      <DreiText
        position={[size * 0.5, -size * 0.32, 0]}
        fontSize={size * 0.62}
        color={col}
        anchorX="left"
        anchorY="middle"
      >
        {sub}
      </DreiText>
    </>
  )
}

// Smallest-denominator rational p/q within `tol` of ρ, else null. maxQ is held
// low so the Fibonacci convergents of the golden ratio are NOT mistaken for
// rational: the golden default must read as quasiperiodic.
function torusRational(rho, maxQ = 7, tol = 0.012) {
  let best = null
  for (let q = 1; q <= maxQ; q++) {
    const p = Math.round(rho * q)
    if (p < 1) continue
    if (Math.abs(rho - p / q) < tol && (!best || q < best.q)) best = { p, q }
  }
  return best
}

const TORUS_IRR_LOOPS = 60 // toroidal loops drawn when ρ is irrational

function TorusScene({ C, rho }) {
  const col = useMemo(
    () => ({
      fg: torusBake(C.fg),
      dim: torusBake(C.dim),
      faint: torusBake(C.faint)
    }),
    [C]
  )

  // ρ rational p/q → the orbit closes after q loops around the hole and p around
  // the tube: a clean (p,q) torus knot, d_A = 1. ρ irrational → it never closes
  // and winds densely over the surface (Weyl equidistribution), d_A = 2. Drawing
  // the rational case at exactly p/q makes it close to the pixel.
  const { traj, loops, rhoEff } = useMemo(() => {
    const rat = torusRational(rho)
    const re = rat ? rat.p / rat.q : rho
    const lp = rat ? rat.q : TORUS_IRR_LOOPS
    const N = rat ? Math.max(240, rat.q * 90) : TORUS_IRR_LOOPS * 150
    const p = []
    for (let i = 0; i <= N; i++) {
      const theta = (2 * Math.PI * lp * i) / N
      p.push(torusPoint(theta, re * theta))
    }
    return { traj: p, loops: lp, rhoEff: re }
  }, [rho])

  // Two guide rings naming the two independent rotations = the two frequencies.
  const equator = useMemo(() => {
    const p = []
    for (let i = 0; i <= 160; i++) p.push(torusPoint((2 * Math.PI * i) / 160, 0))
    return p
  }, [])
  const meridian = useMemo(() => {
    const p = []
    for (let i = 0; i <= 96; i++) p.push(torusPoint(0, (2 * Math.PI * i) / 96))
    return p
  }, [])

  // Live point traces the SAME flow, so you watch ω₁ (around the hole) and ω₂
  // (around the tube) advance together and never sync back up.
  const headRef = useRef()
  const sRef = useRef(0)
  useFrame((_, dt) => {
    sRef.current = (sRef.current + (dt * 0.7) / loops) % 1
    const theta = 2 * Math.PI * loops * sRef.current
    const [x, y, z] = torusPoint(theta, rhoEff * theta)
    if (headRef.current) headRef.current.position.set(x, y, z)
  })

  return (
    <>
      <group rotation={[Math.PI / 2.55, 0, 0]}>
        {/* tertiary: the torus surface itself */}
        <mesh>
          <torusGeometry args={[TORUS_R, TORUS_r, 16, 64]} />
          <meshBasicMaterial color={col.faint} wireframe transparent opacity={0.55} />
        </mesh>
        {/* secondary: the two frequency directions */}
        <DreiLine points={equator} color={col.dim} lineWidth={1.6} />
        <DreiLine points={meridian} color={col.dim} lineWidth={1.6} />
        {/* primary: the orbit */}
        <DreiLine points={traj} color={col.fg} lineWidth={1.4} />
        {/* live state point */}
        <mesh ref={headRef}>
          <sphereGeometry args={[0.12, 18, 18]} />
          <meshBasicMaterial color={col.fg} />
        </mesh>
        <Billboard position={[TORUS_R + TORUS_r + 0.45, 0, 0]}>
          <TorusFreqLabel sub="1" col={col.dim} />
        </Billboard>
        <Billboard position={[TORUS_R - 0.1, 0, TORUS_r + 0.55]}>
          <TorusFreqLabel sub="2" col={col.dim} />
        </Billboard>
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom
        enableRotate
        makeDefault
        target={[0, 0, 0]}
        minDistance={5}
        maxDistance={16}
      />
    </>
  )
}

const TorusSliderControl = ({ label, value, onChange, min, max, step = 1, display }) => (
  <Slider
    label={label}
    value={value}
    min={min}
    max={max}
    step={step}
    onChange={onChange}
    format={v => String(display ?? v)}
  />
)

export default function TorusWinding3D() {
  const C = useVizColors()
  const [rho, setRho] = useState(GOLDEN)
  const rat = useMemo(() => torusRational(rho), [rho])
  const verdict = rat
    ? `ρ ≈ ${rat.p}/${rat.q} · closes into a (${rat.p},${rat.q}) knot · d_A = 1`
    : 'ρ irrational · never closes · fills the surface · d_A = 2'
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Definite height required: under aspect="auto" nothing upstream has a
          definite height, so a Canvas at height:100% collapses to 150px. */}
      <div style={{ flex: '1 1 auto', minHeight: 0, height: 440 }}>
        <Canvas
          camera={{ position: [0, 4.6, 8.2], fov: 42 }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <TorusScene C={C} rho={rho} />
        </Canvas>
      </div>
      <div style={{ maxWidth: 440, width: '100%', margin: '10px auto 0', padding: '0 12px' }}>
        <TorusSliderControl
          label="ω₂ / ω₁"
          value={rho}
          onChange={setRho}
          min={1}
          max={3}
          step={0.001}
          C={C}
          display={rho.toFixed(3)}
        />
      </div>
      <div
        style={{
          padding: '6px 12px 0',
          fontSize: FONT_LABEL,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: C.dim,
          textAlign: 'center'
        }}
      >
        {verdict} · drag to rotate
      </div>
    </div>
  )
}
