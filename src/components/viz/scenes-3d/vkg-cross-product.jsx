import React, { useEffect, useMemo, useState } from 'react'
import { useThree } from '@react-three/fiber'
import { Line as DreiLine, OrbitControls, Text as DreiText, Billboard } from '@react-three/drei'
import { Scene3D as Canvas } from '../scene-3d'
import { useVizColors, useVizColorsThree } from '../../../hooks/use-viz-colors'
import { VizControlsCtx } from '../../viz-controls-ctx'
import { Slider } from '../primitives'
import { FONT_CONTROL, FONT_LABEL, FONT_SMALL } from '../scale-tokens'

// 01.1.6 Cross Product (R3F)
// Forces R3F to pick up its new canvas size when fullscreen toggles.
function R3FResizer({ trigger }) {
  const { gl, camera, size } = useThree()
  useEffect(() => {
    gl.setSize(size.width, size.height)
    if (camera.aspect !== undefined) {
      camera.aspect = size.width / size.height
      camera.updateProjectionMatrix()
    }
    gl.render // no-op tick, just ensures state is synced
  }, [trigger, gl, camera, size])
  return null
}

function Vkg_R3FArrow({ from, to, color, headSize = 0.12, width = 2 }) {
  const dir = useMemo(() => {
    const dx = to[0] - from[0],
      dy = to[1] - from[1],
      dz = to[2] - from[2]
    const len = Math.hypot(dx, dy, dz) || 1
    return { len, ux: dx / len, uy: dy / len, uz: dz / len }
  }, [from, to])
  const shaftEnd = [to[0] - dir.ux * headSize, to[1] - dir.uy * headSize, to[2] - dir.uz * headSize]
  const quat = useMemo(() => {
    const up = [0, 1, 0]
    const v1x = up[0],
      v1y = up[1],
      v1z = up[2]
    const v2x = dir.ux,
      v2y = dir.uy,
      v2z = dir.uz
    const cx = v1y * v2z - v1z * v2y
    const cy = v1z * v2x - v1x * v2z
    const cz = v1x * v2y - v1y * v2x
    const d = v1x * v2x + v1y * v2y + v1z * v2z
    const s = Math.sqrt((1 + d) * 2) || 1e-6
    return [cx / s, cy / s, cz / s, s / 2]
  }, [dir])
  return (
    <group>
      <DreiLine points={[from, shaftEnd]} color={color} lineWidth={width} />
      <mesh position={[to[0], to[1], to[2]]} quaternion={quat}>
        <coneGeometry args={[headSize * 0.5, headSize * 1.4, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  )
}

export default function Vkg_CrossProductInline() {
  const C = useVizColors()
  // THREE materials cannot parse color-mix(); use the premultiplied palette
  // inside the Canvas so the fg/accent/dim/faint hierarchy survives in 3D.
  const T = useVizColorsThree()
  const fsTarget = React.useContext(VizControlsCtx)
  const [phi, setPhi] = useState(1.1) // angle of b relative to a, in the xy-plane
  const [bLen, setBLen] = useState(1.5) // length of b
  // a and b span a TILTED plane (not the xy-plane), so a×b points in a generic
  // direction clearly separated from every axis: no axis-collision, and the
  // "perpendicular to both" reads from any angle.
  const norm = p => {
    const n = Math.hypot(p[0], p[1], p[2]) || 1
    return [p[0] / n, p[1] / n, p[2] / n]
  }
  const cross = (p, q) => [
    p[1] * q[2] - p[2] * q[1],
    p[2] * q[0] - p[0] * q[2],
    p[0] * q[1] - p[1] * q[0]
  ]
  const u = norm([1, 0.35, 0.5]) // in-plane axis that a lies along
  const g = [0, 1, 0]
  const gu = g[0] * u[0] + g[1] * u[1] + g[2] * u[2]
  const w = norm([g[0] - gu * u[0], g[1] - gu * u[1], g[2] - gu * u[2]]) // ⟂ u, in-plane
  const aLen = 1.3
  const a = [aLen * u[0], aLen * u[1], aLen * u[2]]
  const cphi = Math.cos(phi),
    sphi = Math.sin(phi)
  const b = [
    bLen * (cphi * u[0] + sphi * w[0]),
    bLen * (cphi * u[1] + sphi * w[1]),
    bLen * (cphi * u[2] + sphi * w[2])
  ]
  const c = cross(a, b)
  const ab = [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
  const area = Math.hypot(c[0], c[1], c[2]) // |a×b| = parallelogram area
  const cTip = [c[0], c[1], c[2]]
  const deg = ((Math.abs(phi) * 180) / Math.PI).toFixed(0) // angle between a and b (0–180°)
  // unit vectors: used for the right-angle markers proving c ⟂ a and c ⟂ b
  const aHat = norm(a)
  const bHat = norm(b)
  const cHat = norm(c)
  const s = 0.2 // size of each right-angle bracket
  const braAC = [
    [s * aHat[0], s * aHat[1], s * aHat[2]],
    [s * aHat[0] + s * cHat[0], s * aHat[1] + s * cHat[1], s * aHat[2] + s * cHat[2]],
    [s * cHat[0], s * cHat[1], s * cHat[2]]
  ]
  const braBC = [
    [s * bHat[0], s * bHat[1], s * bHat[2]],
    [s * bHat[0] + s * cHat[0], s * bHat[1] + s * cHat[1], s * bHat[2] + s * cHat[2]],
    [s * cHat[0], s * cHat[1], s * cHat[2]]
  ]
  // right-hand-rule sweep: an arc from a toward b, inside the plane they span
  const arcR = 0.55
  const arcN = 24
  const arcPts = Array.from({ length: arcN + 1 }, (_, i) => {
    const t = (i / arcN) * phi
    const ct = Math.cos(t),
      st = Math.sin(t)
    return [
      arcR * (ct * u[0] + st * w[0]),
      arcR * (ct * u[1] + st * w[1]),
      arcR * (ct * u[2] + st * w[2])
    ]
  })
  const arcEnd = arcPts[arcN]
  const arcPrev = arcPts[arcN - 1]
  // faint grid marking the plane a and b span: c rises straight out of it
  const planeExt = 1.4
  const planeLines = []
  for (let k = -2; k <= 2; k++) {
    const d = k * 0.7
    planeLines.push([
      [d * u[0] - planeExt * w[0], d * u[1] - planeExt * w[1], d * u[2] - planeExt * w[2]],
      [d * u[0] + planeExt * w[0], d * u[1] + planeExt * w[1], d * u[2] + planeExt * w[2]]
    ])
    planeLines.push([
      [-planeExt * u[0] + d * w[0], -planeExt * u[1] + d * w[1], -planeExt * u[2] + d * w[2]],
      [planeExt * u[0] + d * w[0], planeExt * u[1] + d * w[1], planeExt * u[2] + d * w[2]]
    ])
  }
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }}
    >
      <Canvas
        camera={{ position: [3.4, 2.6, 3.4], fov: 46 }}
        style={{ background: 'transparent', width: '100%', height: fsTarget ? '100%' : 420 }}
      >
        <R3FResizer trigger={!!fsTarget} />
        <ambientLight intensity={1} />
        {/* the plane a and b span: c rises perpendicular out of all of it */}
        {planeLines.map((p, i) => (
          <DreiLine key={`pl${i}`} points={p} color={T.faint} lineWidth={1} />
        ))}
        {/* parallelogram spanned by a and b: its area equals |a × b| */}
        <mesh>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={6}
              array={
                new Float32Array([
                  0,
                  0,
                  0,
                  a[0],
                  a[1],
                  a[2],
                  ab[0],
                  ab[1],
                  ab[2],
                  0,
                  0,
                  0,
                  ab[0],
                  ab[1],
                  ab[2],
                  b[0],
                  b[1],
                  b[2]
                ])
              }
              itemSize={3}
            />
          </bufferGeometry>
          <meshBasicMaterial color={T.fg} opacity={0.1} transparent side={2} depthWrite={false} />
        </mesh>
        {/* right-angle markers proving c ⟂ a and c ⟂ b */}
        <DreiLine points={braAC} color={T.dim} lineWidth={1.5} />
        <DreiLine points={braBC} color={T.dim} lineWidth={1.5} />
        {/* right-hand-rule sweep a → b (curl fingers, thumb gives a × b) */}
        <DreiLine points={arcPts} color={T.dim} lineWidth={1.5} />
        <Vkg_R3FArrow from={arcPrev} to={arcEnd} color={T.dim} headSize={0.09} width={1.5} />
        {/* input vectors a, b: secondary */}
        <Vkg_R3FArrow from={[0, 0, 0]} to={a} color={T.accent} width={2} />
        <Vkg_R3FArrow from={[0, 0, 0]} to={b} color={T.accent} width={2} />
        {/* result a × b: primary: brightest, heaviest shaft, largest head */}
        <Vkg_R3FArrow from={[0, 0, 0]} to={cTip} color={T.fg} headSize={0.18} width={3.5} />
        {/* shared tail */}
        <mesh>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshBasicMaterial color={T.fg} />
        </mesh>
        <Billboard position={[a[0] + 0.16, a[1] + 0.1, a[2]]}>
          <DreiText
            fontSize={0.24}
            color={T.fg}
            anchorX="left"
            outlineWidth={0.012}
            outlineColor="#000000"
          >
            a
          </DreiText>
        </Billboard>
        <Billboard position={[b[0] + 0.16, b[1] + 0.1, b[2]]}>
          <DreiText
            fontSize={0.24}
            color={T.fg}
            anchorX="left"
            outlineWidth={0.012}
            outlineColor="#000000"
          >
            b
          </DreiText>
        </Billboard>
        <Billboard position={[cTip[0] + 0.14, cTip[1] + 0.16, cTip[2] + 0.14]}>
          <DreiText
            fontSize={0.3}
            color={T.fg}
            anchorX="left"
            outlineWidth={0.016}
            outlineColor="#000000"
          >
            a × b
          </DreiText>
        </Billboard>
        <OrbitControls
          enablePan={false}
          enableZoom
          enableRotate
          makeDefault
          target={[0.3, 0.55, 0.6]}
        />
      </Canvas>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          textTransform: 'uppercase',
          textAlign: 'center',
          padding: '0 12px'
        }}
      >
        <span style={{ fontSize: FONT_CONTROL, letterSpacing: '0.08em', color: C.fg }}>
          {`|a × b| = ${area.toFixed(2)}`}
        </span>
        <span style={{ fontSize: FONT_LABEL, letterSpacing: '0.1em', color: C.dim }}>
          {`= |a| |b| sin φ = ${aLen.toFixed(1)} × ${bLen.toFixed(2)} × sin ${deg}° = parallelogram area`}
        </span>
        <span style={{ fontSize: FONT_SMALL, letterSpacing: '0.1em', color: C.dim }}>
          a × b ⟂ a , ⟂ b · right hand rule: curl a → b, thumb gives a × b · drag to rotate
        </span>
      </div>
      <Slider
        label="ANGLE φ"
        value={phi}
        min={-Math.PI + 0.15}
        max={Math.PI - 0.15}
        step={0.02}
        onChange={setPhi}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
      <Slider
        label="|b|"
        value={bLen}
        min={0.4}
        max={2}
        step={0.05}
        onChange={setBLen}
        format={v => v.toFixed(2)}
      />
    </div>
  )
}
