import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line as DreiLine, OrbitControls, Text as DreiText, Billboard } from '@react-three/drei'
import { Scene3D as Canvas } from '../scene-3d'
import { useVizColors, useVizColorsThree } from '../../../hooks/use-viz-colors'
import { FONT_LABEL } from '../scale-tokens'

// 01.5.3 Conical pendulum (R3F, true 3D)
// The lesson of the section made literal: about the circle centre A the
// angular momentum L_A is constant and vertical; about the pivot B it keeps a
// constant length but its direction sweeps a cone. Both vectors are computed
// live from the bob's motion and drawn against the two translucent cones they
// sweep. |L_B| / |L_A| = ℓ / r = 1/sinα, so L_B is honestly the longer arrow.
//
// THREE materials cannot parse the color-mix() strings useVizColors emits, so
// the scene takes its palette from useVizColorsThree (premultiplied against
// the black background, the shared THREE-safe variant in theme.js).

function Amr_ConeArrow({ from, to, col, headSize = 0.17, lineWidth = 2.5 }) {
  const dir = useMemo(() => {
    const dx = to[0] - from[0],
      dy = to[1] - from[1],
      dz = to[2] - from[2]
    const len = Math.hypot(dx, dy, dz) || 1
    return { ux: dx / len, uy: dy / len, uz: dz / len }
  }, [from, to])
  const shaftEnd = [to[0] - dir.ux * headSize, to[1] - dir.uy * headSize, to[2] - dir.uz * headSize]
  const quat = useMemo(() => {
    const s = Math.sqrt((1 + dir.uy) * 2) || 1e-6
    return [dir.uz / s, 0, -dir.ux / s, s / 2]
  }, [dir])
  return (
    <group>
      <DreiLine points={[from, shaftEnd]} color={col} lineWidth={lineWidth} />
      <mesh position={to} quaternion={quat}>
        <coneGeometry args={[headSize * 0.5, headSize * 1.5, 18]} />
        <meshBasicMaterial color={col} />
      </mesh>
    </group>
  )
}

// Camera-facing "L" with a typeset subscript: drei <Text> has no LaTeX.
function Amr_SubLabel({ sub, col, size = 0.27 }) {
  return (
    <>
      <DreiText fontSize={size} color={col} anchorX="left" anchorY="middle">
        L
      </DreiText>
      <DreiText
        position={[size * 0.46, -size * 0.34, 0]}
        fontSize={size * 0.6}
        color={col}
        anchorX="left"
        anchorY="middle"
      >
        {sub}
      </DreiText>
    </>
  )
}

function Amr_ConeScene() {
  const alpha = 0.62 // half-angle of the string cone, from the vertical
  const ell = 2.4 // string length B → bob
  const r = ell * Math.sin(alpha) // orbit radius
  const H = ell * Math.cos(alpha) // pivot height above the orbit plane
  const La = 1.05 // drawn length of L_A (about the orbit centre A)
  const Lb = La / Math.sin(alpha) // honest ratio |L_B|/|L_A| = ℓ/r = 1/sinα
  const lbVert = Lb * Math.sin(alpha) // vertical rise of L_B == La, exactly
  const lbRad = Lb * Math.cos(alpha) // radius of the cone L_B sweeps
  const axisTop = H + lbVert + 0.34

  const T = useVizColorsThree()
  const col = useMemo(() => ({ ...T, coneRaw: T.fg }), [T])

  const orbit = useMemo(() => {
    const p = []
    for (let i = 0; i <= 96; i++) {
      const a = (i / 96) * 2 * Math.PI
      p.push([r * Math.cos(a), 0, -r * Math.sin(a)])
    }
    return p
  }, [r])
  const lbLocus = useMemo(() => {
    const p = []
    const y = H + lbVert
    for (let i = 0; i <= 96; i++) {
      const a = (i / 96) * 2 * Math.PI
      p.push([lbRad * Math.cos(a), y, lbRad * Math.sin(a)])
    }
    return p
  }, [H, lbVert, lbRad])

  const phaseRef = useRef(0)
  const bobRef = useRef()
  const stringRef = useRef()
  const arcRef = useRef()
  const lbShaftRef = useRef()
  const lbHeadRef = useRef()
  const lbLabelRef = useRef()
  const mLabelRef = useRef()
  const decompRef = useRef() // horizontal part of L_B (B-level → L_B tip)
  const liftRef = useRef() // faint guide: L_A tip level ↔ L_B tip level
  const alphaLabelRef = useRef()

  useFrame((_, dt) => {
    const ph = (phaseRef.current + Math.min(dt, 0.05) * 0.9) % (2 * Math.PI)
    phaseRef.current = ph
    const cph = Math.cos(ph),
      sph = Math.sin(ph)
    // bob orbits about +y so that both L_A and L_B point upward
    const bx = r * cph,
      bz = -r * sph
    if (bobRef.current) bobRef.current.position.set(bx, 0, bz)
    if (mLabelRef.current) mLabelRef.current.position.set(bx * 1.18, -0.32, bz * 1.18)
    if (stringRef.current?.geometry?.setPositions)
      stringRef.current.geometry.setPositions([0, H, 0, bx, 0, bz])

    // L_B ∝ r_B × v, r_B = bob − B, v ∝ d(bob)/dφ = (−sinφ, 0, −cosφ).
    // The result has a constant vertical component (∝ r) and a horizontal
    // component (∝ H) that points radially inward: the part that sweeps.
    let cx = H * cph,
      cy = r,
      cz = -H * sph
    const cl = Math.hypot(cx, cy, cz) || 1
    cx /= cl
    cy /= cl
    cz /= cl
    const tipx = cx * Lb,
      tipy = H + cy * Lb,
      tipz = cz * Lb
    if (lbShaftRef.current?.geometry?.setPositions)
      lbShaftRef.current.geometry.setPositions([0, H, 0, tipx, tipy, tipz])
    if (lbHeadRef.current) {
      lbHeadRef.current.position.set(tipx, tipy, tipz)
      const s = Math.sqrt((1 + cy) * 2) || 1e-6
      lbHeadRef.current.quaternion.set(cz / s, 0, -cx / s, s / 2)
    }
    if (lbLabelRef.current) lbLabelRef.current.position.set(tipx + 0.18, tipy + 0.06, tipz)

    // Decomposition guide. L_B's tip sits at height H+lbVert; its vertical rise
    // lbVert equals La exactly, so the horizontal leg from the axis at that
    // height out to the tip makes the swept (longer-by-1/sinα) part visible.
    const topY = H + lbVert
    if (decompRef.current?.geometry?.setPositions)
      decompRef.current.geometry.setPositions([0, topY, 0, tipx, topY, tipz])
    // Faint vertical tie showing L_A's length (0→La) reappears as L_B's rise.
    if (liftRef.current?.geometry?.setPositions)
      liftRef.current.geometry.setPositions([tipx, H, tipz, tipx, topY, tipz])

    // α arc at B: slerp from straight-down to the string direction
    if (arcRef.current?.geometry?.setPositions) {
      const ax = bx / ell,
        ay = -H / ell,
        az = bz / ell
      const seg = 16
      const out = []
      let midx = 0,
        midy = 0,
        midz = 0
      for (let i = 0; i <= seg; i++) {
        const t = (i / seg) * alpha
        const w0 = Math.sin(alpha - t) / Math.sin(alpha)
        const w1 = Math.sin(t) / Math.sin(alpha)
        const dx = w1 * ax,
          dy = w0 * -1 + w1 * ay,
          dz = w1 * az
        const dl = Math.hypot(dx, dy, dz) || 1
        const px = (dx / dl) * 0.54,
          py = H + (dy / dl) * 0.54,
          pz = (dz / dl) * 0.54
        out.push(px, py, pz)
        if (i === Math.round(seg / 2)) {
          midx = px
          midy = py
          midz = pz
        }
      }
      arcRef.current.geometry.setPositions(out)
      if (alphaLabelRef.current)
        alphaLabelRef.current.position.set(midx * 1.42, midy - H > 0 ? midy : H - 0.34, midz * 1.42)
    }
  })

  return (
    <>
      <ambientLight intensity={1} />

      {/* the two cones the vectors sweep, drawn as translucent surfaces */}
      <mesh position={[0, H / 2, 0]}>
        <coneGeometry args={[r, H, 64, 1, true]} />
        <meshBasicMaterial
          color={col.coneRaw}
          transparent
          opacity={0.07}
          side={2}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0, H + lbVert / 2, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[lbRad, lbVert, 64, 1, true]} />
        <meshBasicMaterial
          color={col.coneRaw}
          transparent
          opacity={0.11}
          side={2}
          depthWrite={false}
        />
      </mesh>

      {/* vertical symmetry axis */}
      <DreiLine
        points={[
          [0, -0.18, 0],
          [0, axisTop, 0]
        ]}
        color={col.faint}
        lineWidth={1}
        dashed
        dashSize={0.12}
        gapSize={0.1}
      />

      {/* orbit circle (bob path) and the circle L_B's tip traces */}
      <DreiLine points={orbit} color={col.dim} lineWidth={1.5} />
      <DreiLine points={lbLocus} color={col.faint} lineWidth={1} />

      {/* α arc at the pivot */}
      <DreiLine
        ref={arcRef}
        points={[
          [0, H, 0],
          [0, H - 0.5, 0]
        ]}
        color={col.dim}
        lineWidth={1.25}
        frustumCulled={false}
      />

      {/* string (B → bob) and bob */}
      <DreiLine
        ref={stringRef}
        points={[
          [0, H, 0],
          [r, 0, 0]
        ]}
        color={col.fg}
        lineWidth={2.5}
        frustumCulled={false}
      />
      <mesh ref={bobRef} position={[r, 0, 0]} frustumCulled={false}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshBasicMaterial color={col.fg} />
      </mesh>

      {/* pivot B and centre A nodes */}
      <mesh position={[0, H, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color={col.dim} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color={col.dim} />
      </mesh>

      {/* L_A: angular momentum about the orbit centre: constant & vertical.
          Length La; its rise reappears verbatim as L_B's vertical component. */}
      <Amr_ConeArrow from={[0, 0, 0]} to={[0, La, 0]} col={col.accent} />

      {/* L_B: about the apex; magnitude constant, direction sweeps a cone */}
      <DreiLine
        ref={lbShaftRef}
        points={[
          [0, H, 0],
          [0, H + lbVert, 0]
        ]}
        color={col.fg}
        lineWidth={2.5}
        frustumCulled={false}
      />
      <mesh ref={lbHeadRef} position={[0, H + lbVert, 0]} frustumCulled={false}>
        <coneGeometry args={[0.085, 0.25, 18]} />
        <meshBasicMaterial color={col.fg} />
      </mesh>

      {/* decomposition: L_B = (vertical part = L_A) + (horizontal swept part).
          The horizontal leg from the axis to L_B's tip is the extra length the
          1/sinα factor buys; the faint tie shows its rise equals |L_A|. */}
      <DreiLine
        ref={decompRef}
        points={[
          [0, H + lbVert, 0],
          [lbRad, H + lbVert, 0]
        ]}
        color={col.dim}
        lineWidth={1.25}
        dashed
        dashSize={0.1}
        gapSize={0.08}
        frustumCulled={false}
      />
      <DreiLine
        ref={liftRef}
        points={[
          [lbRad, H, 0],
          [lbRad, H + lbVert, 0]
        ]}
        color={col.faint}
        lineWidth={1}
        dashed
        dashSize={0.08}
        gapSize={0.08}
        frustumCulled={false}
      />

      {/* labels: only the two angular-momentum vectors, the bob, and α */}
      <Billboard position={[0.18, La, 0]}>
        <Amr_SubLabel sub="A" col={col.accent} />
      </Billboard>
      <Billboard ref={lbLabelRef} position={[0.18, H + lbVert, 0]}>
        <Amr_SubLabel sub="B" col={col.fg} />
      </Billboard>
      <Billboard ref={mLabelRef} position={[r * 1.18, -0.32, 0]}>
        <DreiText fontSize={0.2} color={col.fg} anchorX="center" anchorY="middle">
          m
        </DreiText>
      </Billboard>
      <Billboard ref={alphaLabelRef} position={[0.34, H - 0.42, 0]}>
        <DreiText fontSize={0.2} color={col.dim} anchorX="center" anchorY="middle">
          α
        </DreiText>
      </Billboard>

      <OrbitControls
        enablePan={false}
        enableZoom
        enableRotate
        makeDefault
        target={[0, 1.3, 0]}
        minDistance={3}
        maxDistance={9}
      />
    </>
  )
}
export default function Amr_ConicalPendulum() {
  const C = useVizColors()
  // Static label of the honest ratio, derived from the same α the scene uses.
  const ratio = (1 / Math.sin(0.62)).toFixed(2)
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Height must be DEFINITE here. Under VizFigure aspect="auto" nothing in
          the ancestor chain has a definite height, so a Canvas at height:100%
          (or flex + min-height) collapses to the 150px <canvas> default and the
          scene renders into an off-frame strip: looks blank. 440px is a real
          height AND the flex-basis, so fullscreen still grows to fill. */}
      <div style={{ flex: '1 1 auto', minHeight: 0, height: 440 }}>
        <Canvas
          camera={{ position: [3.5, 2.4, 3.5], fov: 42 }}
          style={{ background: 'transparent', width: '100%', height: '100%' }}
        >
          <Amr_ConeScene />
        </Canvas>
      </div>
      <div
        style={{
          padding: '8px 12px',
          fontSize: FONT_LABEL,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: C.dim,
          textAlign: 'center'
        }}
      >
        |L_B| / |L_A| = 1 / sin α = {ratio} · L_B sweeps a cone · drag to rotate
      </div>
    </div>
  )
}
