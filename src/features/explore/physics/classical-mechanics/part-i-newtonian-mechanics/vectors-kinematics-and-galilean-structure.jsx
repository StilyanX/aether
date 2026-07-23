import React, { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react'
import katex from 'katex'
import 'mafs/core.css'
import 'katex/dist/katex.min.css'
import {
  Mafs,
  Coordinates,
  Plot,
  Point,
  Vector,
  Circle,
  Polygon,
  Polyline,
  Line,
  LaTeX,
  useMovablePoint
} from 'mafs'
import { LearningTemplate } from '../../../../../components/learning/learning-template'
import { VizFigure } from '../../../../../components/viz-figure'
import { Slider, VizCaption } from '../../../../../components/viz/primitives'
import { VizControlsCtx } from '../../../../../components/viz-controls-ctx'
import { createPortal } from 'react-dom'
import { rk4Step } from '../../../../../components/viz/physics'
import { useVizColors } from '../../../../../hooks/use-viz-colors'
import {
  FONT_CONTROL,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX
} from '../../../../../components/viz/scale-tokens'

// Inline viz · re-engined 2026-05 to the Approved Engine Stack:
//   • mafs             : 2D vector geometry + function plotting (×15)
//   • @react-three/fiber: 3D vector geometry (×1, CrossProduct)
//   • hand-rolled RK4   : projectile ODEs with quadratic drag (×2). matter-js
//                         frictionAir is linear per-step damping and cannot model
//                         a = −k|v|v, so RK4 on the exact ODE is the correct engine
//                         when the drag law itself is the lesson; rendered with mafs.
//   • plain HTML        : Galilean reference table (×1)
// All viz wrap in <VizFigure> at call-sites in useConfig() below.

// Mafs coordinates: grid + axes visible, numeric labels hidden.
function VkgCoords() {
  return <Coordinates.Cartesian xAxis={{ labels: false }} yAxis={{ labels: false }} />
}

// Clamp helper for useMovablePoint constrain functions.
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

// 01.1.1 Vector Addition (mafs)
// a and b drag from the origin; faint guides complete the parallelogram whose
// diagonal is the sum. Three arrows only: no arrowhead pile-up at the corner.
export function Vkg_VecAdditionInline() {
  const C = useVizColors()
  // a is the flat addend, b is the steep one: orientation distinguishes the
  // two peers in monochrome, where a tonal tint would just read as "b is weaker".
  const a = useMovablePoint([2.1, 0.6], {
    color: C.fg,
    constrain: ([x, y]) => [clamp(x, 0, 2.4), clamp(y, 0, 1.2)]
  })
  const b = useMovablePoint([0.9, 1.7], {
    color: C.fg,
    constrain: ([x, y]) => [clamp(x, 0, 1.4), clamp(y, 0, 1.9)]
  })
  const ax = a.point[0],
    ay = a.point[1]
  const bx = b.point[0],
    by = b.point[1]
  const sum = [ax + bx, ay + by]
  const mag = Math.hypot(sum[0], sum[1])
  const mhat = mag > 1e-3 ? [sum[0] / mag, sum[1] / mag] : [1, 0]

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
      <Mafs viewBox={{ x: [-0.4, 4.3], y: [-0.4, 3.8] }} pan={false} zoom={false} height={460}>
        <VkgCoords />
        <Line.Segment point1={[ax, ay]} point2={sum} color={C.faint} style="dashed" />
        <Line.Segment point1={[bx, by]} point2={sum} color={C.faint} style="dashed" />
        <Vector tail={[0, 0]} tip={[ax, ay]} color={C.fg} />
        <Vector tail={[0, 0]} tip={[bx, by]} color={C.fg} />
        <Vector tail={[0, 0]} tip={sum} color={C.fg} weight={3} />
        {a.element}
        {b.element}
        <LaTeX at={[ax / 2 + 0.1, ay / 2 - 0.28]} tex="\mathbf{a}" color={C.fg} />
        <LaTeX at={[bx / 2 - 0.28, by / 2 + 0.12]} tex="\mathbf{b}" color={C.fg} />
        <LaTeX
          at={[sum[0] / 2 + 0.15, sum[1] / 2 - 0.05]}
          tex="\mathbf{a}+\mathbf{b}"
          color={C.fg}
        />
        <LaTeX
          at={[sum[0] + 0.42 * mhat[0], sum[1] + 0.42 * mhat[1] + 0.18]}
          tex={`|\\mathbf{a}+\\mathbf{b}| = ${mag.toFixed(2)}`}
          color={C.dim}
        />
      </Mafs>
      <VizCaption>Drag a and b: the diagonal is their sum</VizCaption>
    </div>
  )
}

// 01.1.2 Sliding Vector (mafs)
// Force is a sliding vector: it can act anywhere along its line of action and
// produce the same moment about a fixed pivot O. We make that *computed*, not
// asserted. The moment is the signed area of the parallelogram spanned by the
// position vector r (from O to the application point) and the force F:
//   M = |r × F| = |F| · d        (d = perpendicular distance, the moment arm)
// As the force slides, r changes: but the slide is parallel to F, so it shears
// the parallelogram without touching its base |F| or its height d. Area is
// preserved, so M is invariant. The readout proves it: r moves, M does not.
export function Vkg_SlidingVectorInline() {
  const C = useVizColors()
  const target = React.useContext(VizControlsCtx)
  const [s, setS] = useState(0.32)

  // Fixed physical quantities. d and |F| set the moment; both are invariant.
  const FMAG = 2.0 // force magnitude (N)
  const D = 1.5 // perpendicular distance O → line of action (m)

  // Line of action through the origin; u is its unit direction.
  const dir = [1.4, 0.5]
  const dlen = Math.hypot(dir[0], dir[1])
  const u = [dir[0] / dlen, dir[1] / dlen]
  const nrm = [u[1], -u[0]] // unit perpendicular, pointing to the O side (below)
  const slope = u[1] / u[0]
  const yAt = x => slope * x

  // Pivot O: distance D off the line; its perpendicular foot is the origin.
  const O = [D * nrm[0], D * nrm[1]]
  const foot = [0, 0]
  const F = [FMAG * u[0], FMAG * u[1]] // the force: a vector along the line

  // Application point P slides along the line of action.
  const t = -1.5 + s * 2.1
  const P = [t * u[0], t * u[1]]
  const PF = [P[0] + F[0], P[1] + F[1]]
  const OF = [O[0] + F[0], O[1] + F[1]]

  // Position vector r = P − O changes as P slides; the moment does not.
  const r = [P[0] - O[0], P[1] - O[1]]
  const rLen = Math.hypot(r[0], r[1])
  const M = Math.abs(r[0] * F[1] - r[1] * F[0]) // |r × F| = |F| · D, invariant

  // Parallelogram spanned by r and F: its area equals M.
  const para = [O, P, PF, OF]
  // M label: parallelogram centre offset along the arm normal so a shear never
  // drops it onto the r or F shaft.
  const cenRaw = [(O[0] + P[0] + F[0]) / 2, (O[1] + P[1] + F[1]) / 2]
  const cen = [cenRaw[0] - 0.28 * nrm[0], cenRaw[1] - 0.28 * nrm[1]]
  const rMid = [(O[0] + P[0]) / 2, (O[1] + P[1]) / 2]

  // Right-angle marker where the moment arm d meets the line at the foot.
  const m = 0.16
  const A = [foot[0] + m * u[0], foot[1] + m * u[1]]
  const B = [A[0] + m * nrm[0], A[1] + m * nrm[1]]
  const Cc = [foot[0] + m * nrm[0], foot[1] + m * nrm[1]]

  const stat = (label, val, accent) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 78 }}>
      <span style={{ fontSize: FONT_SMALL, letterSpacing: '0.12em', color: C.dim }}>{label}</span>
      <span
        style={{
          fontSize: FONT_CONTROL,
          color: accent ? C.accent : C.fg,
          fontVariantNumeric: 'tabular-nums'
        }}
      >
        {val}
      </span>
    </div>
  )

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
      <Mafs viewBox={{ x: [-2.4, 3.2], y: [-2.0, 1.5] }} pan={false} zoom={false} height={460}>
        <VkgCoords />
        {/* The line of action: the force may act anywhere along it */}
        <Line.Segment
          point1={[-2.4, yAt(-2.4)]}
          point2={[3.2, yAt(3.2)]}
          color={C.faint}
          style="dashed"
        />
        {/* Moment = area of the parallelogram spanned by r and F */}
        <Polygon points={para} color={C.dim} fillOpacity={0.14} weight={1} />
        {/* Moment arm: perpendicular from O to the line, with right-angle mark */}
        <Line.Segment point1={O} point2={foot} color={C.dim} style="dashed" />
        <Polyline points={[A, B, Cc]} color={C.dim} />
        {/* Position vector r (thin) and the force F (bold): the two spanning edges */}
        <Vector tail={O} tip={P} color={C.dim} weight={1.5} />
        <Vector tail={P} tip={PF} color={C.fg} weight={3} />
        <Point x={P[0]} y={P[1]} color={C.accent} />
        <Point x={O[0]} y={O[1]} color={C.dim} />
        <LaTeX at={[PF[0] + 0.18, PF[1] + 0.18]} tex="\mathbf{F}" color={C.fg} />
        <LaTeX at={[rMid[0] - 0.32, rMid[1] + 0.06]} tex="\mathbf{r}" color={C.dim} />
        <LaTeX at={[O[0] + 0.18, O[1] - 0.04]} tex="O" color={C.dim} />
        <LaTeX at={[0.3, -0.78]} tex="d" color={C.dim} />
        <LaTeX at={[cen[0], cen[1]]} tex="M" color={C.dim} />
        <LaTeX at={[-1.9, yAt(-1.9) - 0.3]} tex="\text{line of action}" color={C.dim} />
      </Mafs>
      <Slider label="POS" value={s} min={0} max={1} step={0.01} onChange={setS} />
      {(() => {
        const statsBlock = (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                fontFamily: 'D-DIN, sans-serif',
                padding: '2px 12px'
              }}
            >
              {stat('FORCE |F|', `${FMAG.toFixed(2)} N`)}
              {stat('ARM d', `${D.toFixed(2)} m`)}
              {stat('POSITION |r|', `${rLen.toFixed(2)} m`, true)}
            </div>
            <div
              style={{
                fontFamily: 'D-DIN, sans-serif',
                fontSize: FONT_CONTROL,
                color: C.fg,
                letterSpacing: '0.04em',
                textAlign: 'center'
              }}
            >
              M = |r × F| = |F| · d = <span style={{ fontWeight: 'bold' }}>{M.toFixed(2)} N·m</span>
              <span
                style={{
                  fontSize: FONT_SMALL,
                  color: C.dim,
                  letterSpacing: '0.12em',
                  marginLeft: 8
                }}
              >
                INVARIANT
              </span>
            </div>
          </>
        )
        return target ? createPortal(statsBlock, target) : statsBlock
      })()}
      <VizCaption>Slide the force: r changes, the shaded area (the moment) does not</VizCaption>
    </div>
  )
}

// 01.1.3 Force Decomposition (mafs)
export function Vkg_ForceDecompInline() {
  const C = useVizColors()
  const target = React.useContext(VizControlsCtx)
  const F = useMovablePoint([2.2, 1.6], {
    color: C.fg,
    constrain: ([x, y]) => [clamp(x, 0.1, 3.4), clamp(y, 0.05, 2.6)]
  })
  const fx = F.point[0],
    fy = F.point[1]
  const th = Math.atan2(fy, fx)
  const mag = Math.hypot(fx, fy)

  const stats = (
    <div
      style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontSize: FONT_CONTROL,
        padding: '8px 0'
      }}
    >
      {[
        { tex: `F_x = ${fx.toFixed(2)}`, color: C.accent },
        { tex: `F_y = ${fy.toFixed(2)}`, color: C.accent },
        { tex: `|\\mathbf{F}| = ${mag.toFixed(2)}`, color: C.fg },
        { tex: `\\theta = ${((th * 180) / Math.PI).toFixed(0)}^\\circ`, color: C.dim }
      ].map(({ tex, color }) => (
        <span
          key={tex.slice(0, 4)}
          style={{ color }}
          dangerouslySetInnerHTML={{
            __html: katex.renderToString(tex, { throwOnError: false })
          }}
        />
      ))}
    </div>
  )

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
      <Mafs viewBox={{ x: [-0.5, 3.4], y: [-0.4, 2.6] }} pan={false} zoom={false} height={440}>
        <VkgCoords />
        <Vector tail={[0, 0]} tip={[fx, fy]} color={C.fg} />
        <Vector tail={[0, 0]} tip={[fx, 0]} color={C.accent} style="dashed" />
        <Vector tail={[fx, 0]} tip={[fx, fy]} color={C.accent} style="dashed" />
        <Plot.Parametric
          t={[0, th]}
          xy={u => [0.45 * Math.cos(u), 0.45 * Math.sin(u)]}
          color={C.dim}
        />
        {F.element}
        <LaTeX
          at={[fx + (0.4 * fx) / mag, fy + (0.4 * fy) / mag + 0.12]}
          tex="\mathbf{F}"
          color={C.fg}
        />
        <LaTeX at={[fx / 2, -0.22]} tex={`F\\cos\\theta = ${fx.toFixed(2)}`} color={C.accent} />
        <LaTeX at={[fx + 0.35, fy / 2]} tex={`F\\sin\\theta = ${fy.toFixed(2)}`} color={C.accent} />
        <LaTeX
          at={[0.55, 0.2]}
          tex={`\\theta = ${((th * 180) / Math.PI).toFixed(0)}°`}
          color={C.dim}
        />
        <LaTeX
          at={[fx / 2 - (0.32 * fy) / mag, fy / 2 + (0.32 * fx) / mag]}
          tex={`|\\mathbf{F}| = ${mag.toFixed(2)}`}
          color={C.dim}
        />
      </Mafs>
      {target ? createPortal(stats, target) : stats}
      <VizCaption>Drag F: its components are its shadows on the axes</VizCaption>
    </div>
  )
}

// 01.1.4 Components Under Rotation (mafs)
export function Vkg_ComponentsRotationInline() {
  const C = useVizColors()
  const target = React.useContext(VizControlsCtx)
  const [phi, setPhi] = useState(0.3)
  const v = [2.2, 1.4]
  const vmag = Math.hypot(v[0], v[1])
  const e1 = [Math.cos(phi), Math.sin(phi)]
  const e2 = [-Math.sin(phi), Math.cos(phi)]
  const c1 = v[0] * e1[0] + v[1] * e1[1]
  const c2 = v[0] * e2[0] + v[1] * e2[1]
  // Feet of the orthogonal projections: the other two corners of the rectangle
  const F1 = [c1 * e1[0], c1 * e1[1]]
  const F2 = [c2 * e2[0], c2 * e2[1]]
  const s1 = Math.sign(c1) || 1
  const s2 = Math.sign(c2) || 1
  const L = 2.6 // rotated-axis half-length (kept inside the viewBox for a 5% margin)
  const m = 0.16 // right-angle marker size
  // Right-angle markers at each foot: proof the projection is orthogonal
  const ra1 = [
    F1,
    [F1[0] - s1 * e1[0] * m, F1[1] - s1 * e1[1] * m],
    [F1[0] - s1 * e1[0] * m + s2 * e2[0] * m, F1[1] - s1 * e1[1] * m + s2 * e2[1] * m],
    [F1[0] + s2 * e2[0] * m, F1[1] + s2 * e2[1] * m]
  ]
  const ra2 = [
    F2,
    [F2[0] - s2 * e2[0] * m, F2[1] - s2 * e2[1] * m],
    [F2[0] - s2 * e2[0] * m + s1 * e1[0] * m, F2[1] - s2 * e2[1] * m + s1 * e1[1] * m],
    [F2[0] + s1 * e1[0] * m, F2[1] + s1 * e1[1] * m]
  ]
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
      <Mafs viewBox={{ x: [-1.6, 2.9], y: [-1.7, 2.5] }} pan={false} zoom={false} height={600}>
        <VkgCoords />
        {/* TERTIARY: the rotated coordinate axes through the origin */}
        <Line.Segment
          point1={[-e1[0] * L, -e1[1] * L]}
          point2={[e1[0] * L, e1[1] * L]}
          color={C.faint}
        />
        <Line.Segment
          point1={[-e2[0] * L, -e2[1] * L]}
          point2={[e2[0] * L, e2[1] * L]}
          color={C.faint}
        />
        {/* The projection rectangle: its diagonal is v = c1' e1' + c2' e2' */}
        <Polygon
          points={[[0, 0], F1, v, F2]}
          color={C.faint}
          fillOpacity={0.08}
          strokeStyle="solid"
        />
        {/* Right-angle markers at the two feet */}
        <Polygon points={ra1} color={C.dim} fillOpacity={0} strokeStyle="solid" />
        <Polygon points={ra2} color={C.dim} fillOpacity={0} strokeStyle="solid" />
        {/* SECONDARY: perpendicular drop-lines from v onto each axis */}
        <Line.Segment point1={F1} point2={v} color={C.dim} style="dashed" />
        <Line.Segment point1={F2} point2={v} color={C.dim} style="dashed" />
        {/* ACCENT: the components measured along the rotated axes */}
        <Vector tail={[0, 0]} tip={F1} color={C.accent} weight={3} />
        <Vector tail={[0, 0]} tip={F2} color={C.accent} weight={3} />
        {/* PRIMARY: the fixed vector, unchanged as the frame turns */}
        <Vector tail={[0, 0]} tip={v} color={C.fg} weight={3} />
        <LaTeX at={[v[0] + 0.16, v[1] + 0.12]} tex="\mathbf{v}" color={C.fg} />
        <LaTeX
          at={[e1[0] * 1.2 + e2[0] * 0.16, e1[1] * 1.2 + e2[1] * 0.16]}
          tex="\hat{e}_1'"
          color={C.dim}
        />
        <LaTeX
          at={[e2[0] * 1.2 - e1[0] * 0.16, e2[1] * 1.2 - e1[1] * 0.16]}
          tex="\hat{e}_2'"
          color={C.dim}
        />
        <LaTeX
          at={[F1[0] / 2 - e2[0] * 0.24, F1[1] / 2 - e2[1] * 0.24]}
          tex="c_1'"
          color={C.accent}
        />
        <LaTeX
          at={[F2[0] / 2 + e1[0] * 0.24, F2[1] / 2 + e1[1] * 0.24]}
          tex="c_2'"
          color={C.accent}
        />
      </Mafs>
      {(() => {
        const statsBlock = (
          <div
            style={{
              fontFamily: 'D-DIN, sans-serif',
              fontSize: FONT_TEX,
              letterSpacing: '0.04em',
              display: 'flex',
              gap: 18,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <span style={{ color: C.accent }}>c₁′ = {c1.toFixed(2)}</span>
            <span style={{ color: C.accent }}>c₂′ = {c2.toFixed(2)}</span>
            <span style={{ color: C.fg }}>|v| = {vmag.toFixed(2)} fixed</span>
          </div>
        )
        return target ? createPortal(statsBlock, target) : statsBlock
      })()}
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

// 01.1.5 Base Vectors (mafs)
// Drag û around the circle: the constrain renormalises every drag back to unit
// length, so the circle becomes the locus of every unit vector: load-bearing,
// not decoration. The live expansion û = cos θ î + sin θ ĵ shows the two basis
// vectors building any direction, and the dashed drop-lines read û's components
// straight off the î and ĵ axes. The orthonormality facts move to the caption
// so nothing crowds the arrowheads at the top.
export function Vkg_BaseVectorsInline() {
  const C = useVizColors()
  // û lives on the unit circle: every drag is projected back to length 1.
  const u = useMovablePoint([Math.cos(0.9), Math.sin(0.9)], {
    color: C.fg,
    constrain: ([x, y]) => {
      const n = Math.hypot(x, y) || 1
      return [x / n, y / n]
    }
  })
  const ux = u.point[0]
  const uy = u.point[1]
  const th = Math.atan2(uy, ux)
  const deg = ((((th * 180) / Math.PI) % 360) + 360) % 360
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
      <Mafs viewBox={{ x: [-1.5, 1.5], y: [-1.5, 1.5] }} pan={false} zoom={false} height={600}>
        <VkgCoords />
        {/* Unit circle: locus of every unit vector; î, ĵ, û all land on it */}
        <Circle center={[0, 0]} radius={1} color={C.faint} fillOpacity={0} />
        {/* Swept angle θ measured from î to û */}
        <Plot.Parametric
          t={[0, th]}
          xy={a => [0.32 * Math.cos(a), 0.32 * Math.sin(a)]}
          color={C.dim}
        />
        {/* Drop-lines: û's components read straight off the î and ĵ axes */}
        <Line.Segment point1={[ux, uy]} point2={[ux, 0]} color={C.dim} style="dashed" />
        <Line.Segment point1={[ux, uy]} point2={[0, uy]} color={C.dim} style="dashed" />
        {/* The component pieces: cos θ along î, sin θ along ĵ */}
        <Vector tail={[0, 0]} tip={[ux, 0]} color={C.accent} weight={2} />
        <Vector tail={[0, 0]} tip={[0, uy]} color={C.accent} weight={2} />
        {/* Right-angle marker proving î ⟂ ĵ */}
        <Polygon
          points={[
            [0.15, 0],
            [0.15, 0.15],
            [0, 0.15]
          ]}
          color={C.dim}
          fillOpacity={0}
          strokeStyle="solid"
        />
        {/* The basis vectors: primary, heaviest weight */}
        <Vector tail={[0, 0]} tip={[1, 0]} color={C.fg} weight={3} />
        <Vector tail={[0, 0]} tip={[0, 1]} color={C.fg} weight={3} />
        {/* The draggable unit vector */}
        <Vector tail={[0, 0]} tip={[ux, uy]} color={C.fg} weight={2} />
        {u.element}
        <LaTeX at={[1.12, -0.2]} tex="\hat{i}" color={C.fg} />
        <LaTeX at={[-0.2, 1.16]} tex="\hat{j}" color={C.fg} />
        <LaTeX at={[ux * 1.2 + 0.04, uy * 1.2 + 0.08]} tex="\hat{u}" color={C.fg} />
        <LaTeX at={[0.46, 0.2]} tex={`\\theta = ${deg.toFixed(0)}°`} color={C.dim} />
      </Mafs>
      <VizCaption>
        {`î ⟂ ĵ · |î| = |ĵ| = 1 · drag û = ${ux.toFixed(2)} î + ${uy.toFixed(
          2
        )} ĵ: every unit vector is cos θ î + sin θ ĵ`}
      </VizCaption>
    </div>
  )
}

// Cross-product 3D scene moved to components/viz/scenes-3d so three.js loads
// on demand (dynamic import). Self-wrapping Suspense keeps the showcase
// (INLINE_NS['vkg']) and the lesson call-site working through this export.
const Vkg_CrossProductInlineInner = lazy(
  () => import('../../../../../components/viz/scenes-3d/vkg-cross-product')
)
export function Vkg_CrossProductInline() {
  return (
    <Suspense fallback={<div style={{ minHeight: 420 }} />}>
      <Vkg_CrossProductInlineInner />
    </Suspense>
  )
}

// 01.1.7 Cross Antisymmetry (mafs)
// Antisymmetry is the lesson: swap the operands and the result flips sign while
// its magnitude stays the same. We make that *computed*, not asserted. Drag a
// and b in the plane; we evaluate the z-component of the cross product as the
// signed determinant  c_z = a_x b_y − a_y b_x. Its sign decides the
// page-piercing symbol: ⊙ out of the page (+k̂) when positive, ⊗ into the page
// (−k̂) when negative. The REVERSE ORDER toggle swaps which vector leads: the
// sweep arc reverses sense, the symbol flips, the value negates: but the shaded
// parallelogram (the magnitude) is identical. a × b = −(b × a), shown not claimed.
export function Vkg_CrossAntisymInline() {
  const C = useVizColors()
  const target = React.useContext(VizControlsCtx)
  const [swapped, setSwapped] = useState(false)
  // a and b drag freely; each is clamped to a disk so it never leaves the frame.
  const constrainDisk = ([x, y]) => {
    const n = Math.hypot(x, y)
    return n > 1.25 ? [(1.25 * x) / n, (1.25 * y) / n] : [x, y]
  }
  const a = useMovablePoint([1, 0], { color: C.fg, constrain: constrainDisk })
  const b = useMovablePoint([0, 1], { color: C.fg, constrain: constrainDisk })
  const A = a.point
  const B = b.point
  // First and second operand follow the toggle: that is the whole demonstration.
  const first = swapped ? B : A
  const second = swapped ? A : B
  // z-component of first × second: the signed area of the spanned parallelogram.
  const cz = first[0] * second[1] - first[1] * second[0]
  const out = cz >= 0 // true → +k̂ out of page (⊙); false → −k̂ into page (⊗)
  // Parallelogram spanned by a and b: its area is |cz|, the same either order.
  const para = [[0, 0], A, [A[0] + B[0], A[1] + B[1]], B]
  // Sweep arc first → second, the short signed way; its sense encodes the sign.
  const a1 = Math.atan2(first[1], first[0])
  const a2 = Math.atan2(second[1], second[0])
  let d = a2 - a1
  while (d > Math.PI) d -= 2 * Math.PI
  while (d <= -Math.PI) d += 2 * Math.PI
  const R = 0.42
  const ae = a1 + d
  const sgn = d >= 0 ? 1 : -1
  // arrowhead at the end of the arc, pointing along the sweep tangent
  const headTail = [R * Math.cos(ae - 0.16 * sgn), R * Math.sin(ae - 0.16 * sgn)]
  const headTip = [R * Math.cos(ae), R * Math.sin(ae)]
  // result symbol sits at the parallelogram centroid: where it pierces the plane
  const S = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]
  const rs = 0.13 // symbol radius
  const xq = rs / Math.SQRT2 // half-diagonal of the ⊗ cross
  const prod = swapped ? 'b × a' : 'a × b'
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
      <Mafs viewBox={{ x: [-1.4, 1.6], y: [-1.4, 1.6] }} pan={false} zoom={false} height={600}>
        <VkgCoords />
        {/* parallelogram: the magnitude |a×b|, identical whichever order you take */}
        <Polygon points={para} color={C.faint} fillOpacity={0.1} strokeStyle="solid" />
        {/* sweep arc first → second, arrowhead shows the rotation sense (CCW vs CW) */}
        <Plot.Parametric
          t={[Math.min(a1, ae), Math.max(a1, ae)]}
          xy={u => [R * Math.cos(u), R * Math.sin(u)]}
          color={C.dim}
        />
        <Vector tail={headTail} tip={headTip} color={C.dim} />
        {/* the two operand vectors: primary weight, identity fixed regardless of order */}
        <Vector tail={[0, 0]} tip={A} color={C.fg} weight={3} />
        <Vector tail={[0, 0]} tip={B} color={C.fg} weight={3} />
        {a.element}
        {b.element}
        {/* result symbol at the centroid: ⊙ out of page (+k̂) or ⊗ into page (−k̂) */}
        <Circle center={S} radius={rs} color={C.accent} fillOpacity={0} />
        {out ? (
          <Point x={S[0]} y={S[1]} color={C.accent} />
        ) : (
          <>
            <Line.Segment
              point1={[S[0] - xq, S[1] - xq]}
              point2={[S[0] + xq, S[1] + xq]}
              color={C.accent}
            />
            <Line.Segment
              point1={[S[0] - xq, S[1] + xq]}
              point2={[S[0] + xq, S[1] - xq]}
              color={C.accent}
            />
          </>
        )}
        <LaTeX at={[A[0] + 0.16, A[1] + 0.12]} tex="\mathbf{a}" color={C.fg} />
        <LaTeX at={[B[0] + 0.16, B[1] + 0.12]} tex="\mathbf{b}" color={C.fg} />
        <LaTeX
          at={[S[0] + rs + 0.24, S[1] + 0.04]}
          tex={out ? '+\\hat{k}' : '-\\hat{k}'}
          color={C.accent}
        />
      </Mafs>
      {(() => {
        const statsBlock = (
          <>
            <button
              onClick={() => setSwapped(s => !s)}
              style={{
                fontFamily: 'D-DIN, sans-serif',
                fontSize: FONT_LABEL,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '7px 18px',
                background: 'transparent',
                cursor: 'pointer',
                border: `1px solid ${C.dim}`,
                color: C.fg,
                borderRadius: 0
              }}
            >
              Reverse order
            </button>
            <div
              style={{
                fontFamily: 'D-DIN, sans-serif',
                fontSize: FONT_CONTROL,
                color: C.fg,
                letterSpacing: '0.04em',
                textAlign: 'center'
              }}
            >
              {prod} ={' '}
              <span style={{ fontWeight: 'bold', color: C.accent }}>
                {(cz >= 0 ? '+' : '−') + Math.abs(cz).toFixed(2)} k̂
              </span>
              <span
                style={{
                  fontSize: FONT_SMALL,
                  color: C.dim,
                  letterSpacing: '0.12em',
                  marginLeft: 10
                }}
              >
                {out ? '⊙ OUT OF PAGE' : '⊗ INTO PAGE'}
              </span>
            </div>
          </>
        )
        return target ? createPortal(statsBlock, target) : statsBlock
      })()}
      <VizCaption>
        Drag a and b · reverse the order: a × b = −(b × a): same area, opposite sign
      </VizCaption>
    </div>
  )
}

// 01.1.8 Dot Product · Work (mafs)
// W = F·d = (F cosθ)|d|. The displacement d is the fixed horizontal axis; the
// bold accent segment on that axis is F's projection onto d: the only part of
// the force that does work. Drag F past 90° and the projection flips behind the
// origin: the work goes negative. The readout below ties angle → projection →
// work so the number and the geometry move together.
export function Vkg_DotWorkInline() {
  const C = useVizColors()
  // F swings through the full upper half-plane (x can go negative) so the angle
  // crosses 90° and the dot product turns negative: the core lesson.
  const F = useMovablePoint([2.0, 1.1], {
    color: C.fg,
    constrain: ([x, y]) => [clamp(x, -2, 3), clamp(y, 0, 2)]
  })
  const d = [3, 0]
  const fx = F.point[0],
    fy = F.point[1]
  const W = fx * d[0] + fy * d[1] // = 3·fx, since d is horizontal
  const nF = Math.hypot(fx, fy) || 1
  const proj = fx // signed scalar projection of F onto d̂ = |F|cosθ
  const thetaDeg = Math.round((Math.atan2(fy, fx) * 180) / Math.PI)
  const theta = Math.atan2(fy, fx)
  const fLbl = [fx + (0.5 * fx) / nF, fy + 0.18 + (0.5 * fy) / nF]
  // Right-angle marker at the foot of the perpendicular, on the origin side.
  const hs = (fx >= 0 ? 1 : -1) * 0.18
  const footMarker =
    fy > 0.25 && Math.abs(fx) > 0.4
      ? [
          [fx - hs, 0],
          [fx - hs, 0.18],
          [fx, 0.18]
        ]
      : null
  // Sign of the work names what the force is doing to the motion.
  const sense =
    W > 0.02
      ? 'force helps the motion'
      : W < -0.02
        ? 'force opposes the motion'
        : 'perpendicular: no work'
  const target = React.useContext(VizControlsCtx)
  const kl = (tex, color) => (
    <span
      style={{ color, fontSize: FONT_TEX }}
      dangerouslySetInnerHTML={{ __html: katex.renderToString(tex, { throwOnError: false }) }}
    />
  )
  const statRows = [
    { tex: '\\theta', value: `${thetaDeg}°`, color: C.fg },
    { tex: 'F\\cos\\theta', value: proj.toFixed(2), color: C.fg },
    {
      tex: 'W = \\mathbf{F}\\cdot\\mathbf{d}',
      value: `${W >= 0 ? '' : '-'}${Math.abs(W).toFixed(2)}\\,\\text{J}`,
      color: C.accent,
      bold: true
    }
  ]

  const statsPanel = (
    <div style={{ width: '100%', display: 'flex', borderTop: `1px solid ${C.faint}` }}>
      {statRows.map((s, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            padding: '10px 12px',
            textAlign: 'center',
            borderLeft: i === 0 ? 'none' : `1px solid ${C.faint}`
          }}
        >
          <div style={{ marginBottom: 4 }}>{kl(s.tex, C.dim)}</div>
          <div
            style={{
              fontSize: FONT_CONTROL,
              fontWeight: s.bold ? 700 : 400,
              color: s.color,
              fontVariantNumeric: 'tabular-nums'
            }}
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(s.value, { throwOnError: false })
            }}
          />
        </div>
      ))}
    </div>
  )

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
      <Mafs viewBox={{ x: [-2.2, 3.6], y: [-0.7, 2.2] }} pan={false} zoom={false} height={460}>
        <VkgCoords />
        {fy > 0.2 && (
          <Polygon
            points={[
              [0, 0],
              [fx, fy],
              [fx, 0]
            ]}
            color={C.faint}
            fillOpacity={0.09}
            strokeStyle="solid"
            weight={0}
          />
        )}
        <Plot.Parametric
          t={[0, theta]}
          xy={u => [0.55 * Math.cos(u), 0.55 * Math.sin(u)]}
          color={C.dim}
        />
        <Vector tail={[0, 0]} tip={d} color={C.dim} />
        <Line.Segment point1={F.point} point2={[fx, 0]} color={C.dim} style="dashed" />
        {footMarker && <Polyline points={footMarker} color={C.dim} />}
        <Vector tail={[0, 0]} tip={[fx, 0]} color={C.accent} weight={2.5} />
        <Vector tail={[0, 0]} tip={F.point} color={C.fg} weight={3} />
        {F.element}
        <LaTeX at={fLbl} tex="\mathbf{F}" color={C.fg} />
        <LaTeX at={[d[0] + 0.22, 0.28]} tex="\mathbf{d}" color={C.dim} />
        <LaTeX
          at={[0.78 * Math.cos(theta / 2), 0.78 * Math.sin(theta / 2)]}
          tex="\theta"
          color={C.dim}
        />
        {Math.abs(fx) > 0.4 && <LaTeX at={[fx / 2, -0.34]} tex="F\cos\theta" color={C.accent} />}
      </Mafs>
      {target ? createPortal(statsPanel, target) : statsPanel}
      <VizCaption>{`Drag F: ${sense}. Past 90° the projection flips and work turns negative.`}</VizCaption>
    </div>
  )
}

// 01.1.10 Polar Velocity Decomposition (mafs)
// Velocity in plane polar coordinates: v = ṙ ê_r + r θ̇ ê_θ. The radial rate
// and angular rate are independent sliders; the two component arrows sum to v.
export function Vkg_PolarUnitsInline() {
  const C = useVizColors()
  const target = React.useContext(VizControlsCtx)
  const [th, setTh] = useState(0.6)
  const [rdot, setRdot] = useState(0.7)
  const [thd, setThd] = useState(0.9)
  const r = 1.7 // particle radius (reference circle)
  const U = 1.0 // one honest ruler: visual length of a length-1 vector.
  //              a component of magnitude k draws at length k·U, so the
  //              unit basis ê_r, ê_θ literally measures the components.

  // vector helpers
  const add = (p, q) => [p[0] + q[0], p[1] + q[1]]
  const mul = (k, p) => [k * p[0], k * p[1]]
  const lerp = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t]

  // rotating orthonormal basis at the particle
  const er = [Math.cos(th), Math.sin(th)] // outward radial unit
  const eth = [-Math.sin(th), Math.cos(th)] // tangential unit (increasing θ)
  const P = [r * er[0], r * er[1]]

  // the two velocity components and their resultant: same ruler U as the basis
  const vt = r * thd // tangential speed r θ̇ (signed)
  const vrVec = mul(rdot * U, er) // ṙ ê_r
  const vtVec = mul(vt * U, eth) // r θ̇ ê_θ
  const vTot = add(vrVec, vtVec)
  const speed = Math.hypot(rdot, vt)

  const tipR = add(P, vrVec),
    tipT = add(P, vtVec),
    tipV = add(P, vTot)

  // unit basis arrows: fixed length U, along +ê_r / +ê_θ (the orthonormal frame)
  const erTip = add(P, mul(U, er)),
    ethTip = add(P, mul(U, eth))

  // right-angle marker at P, asserting ê_r ⟂ ê_θ (fixed +er / +eθ corner)
  const m = 0.22
  const raMarker = [add(P, mul(m, er)), add(add(P, mul(m, er)), mul(m, eth)), add(P, mul(m, eth))]

  // labels: pushed clear of every arrow and of each other. Offsets live in the
  // rotating er/eθ frame, so the spacing is preserved as the particle revolves.
  // Basis labels sit just past their own tips; component labels sit at their leg
  // midpoints on the outer side. The tangential leg is drawn tip-to-tail from the
  // radial tip, so ê_θ never stacks on r θ̇ ê_θ.
  const erLab = add(erTip, add(mul(0.34, er), mul(-0.32, eth)))
  const ethLab = add(ethTip, add(mul(0.38, eth), mul(-0.32, er)))
  const rLab = add(lerp(P, tipR, 0.5), mul(-0.55, eth))
  const tLab = add(lerp(tipR, tipV, 0.5), mul(0.5, er))
  const uvMag = Math.hypot(vTot[0], vTot[1]) || 1
  const vLab = add(tipV, mul(0.44 / uvMag, vTot))

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
      <Mafs viewBox={{ x: [-3.4, 3.4], y: [-3.4, 3.4] }} pan={false} zoom={false} height={600}>
        <VkgCoords />
        {/* TERTIARY: current-radius reference circle + swept angle θ */}
        <Circle center={[0, 0]} radius={r} color={C.faint} fillOpacity={0} />
        <Plot.Parametric
          t={[0, th]}
          xy={u => [0.62 * Math.cos(u), 0.62 * Math.sin(u)]}
          color={C.dim}
          weight={1}
        />
        <Line.Segment point1={[0, 0]} point2={P} color={C.dim} weight={1} />
        <LaTeX at={[0.86 * Math.cos(th / 2), 0.86 * Math.sin(th / 2)]} tex="\theta" color={C.dim} />

        {/* TERTIARY: parallelogram completion (the two far edges) ⇒ v is the diagonal */}
        <Line.Segment point1={P} point2={tipT} color={C.faint} style="dashed" />
        <Line.Segment point1={tipT} point2={tipV} color={C.faint} style="dashed" />

        {/* SECONDARY: rotating orthonormal basis frame at the particle */}
        <Polyline points={raMarker} color={C.dim} fillOpacity={0} weight={1} />
        <Vector tail={P} tip={erTip} color={C.dim} weight={1.4} />
        <Vector tail={P} tip={ethTip} color={C.dim} weight={1.4} />
        <LaTeX at={erLab} tex="\hat{e}_r" color={C.dim} />
        <LaTeX at={ethLab} tex="\hat{e}_\theta" color={C.dim} />

        {/* PRIMARY-ACCENT: velocity components, drawn tip-to-tail so they don't stack */}
        <Vector tail={P} tip={tipR} color={C.accent} weight={2.5} />
        <Vector tail={tipR} tip={tipV} color={C.accent} weight={2.5} />
        <LaTeX at={rLab} tex="\dot{r}\,\hat{e}_r" color={C.accent} />
        <LaTeX at={tLab} tex="r\dot{\theta}\,\hat{e}_\theta" color={C.accent} />

        {/* PRIMARY: the resultant velocity (the diagonal) */}
        <Vector tail={P} tip={tipV} color={C.fg} weight={3.5} />
        <LaTeX at={vLab} tex="\mathbf{v}" color={C.fg} />
        <Point x={P[0]} y={P[1]} color={C.fg} />
      </Mafs>

      {/* readout strip: numbers tied to the arrows by shared colour, not floating in-canvas */}
      {(() => {
        const statsBlock = (
          <div
            style={{
              display: 'flex',
              gap: 28,
              fontSize: FONT_TEX,
              letterSpacing: '0.04em',
              fontFamily: "'D-DIN', sans-serif"
            }}
          >
            <span style={{ color: C.accent }}>ṙ = {rdot.toFixed(2)}</span>
            <span style={{ color: C.accent }}>r θ̇ = {vt.toFixed(2)}</span>
            <span style={{ color: C.fg }}>|v| = {speed.toFixed(2)}</span>
          </div>
        )
        return target ? createPortal(statsBlock, target) : statsBlock
      })()}

      <Slider
        label="θ"
        value={th}
        min={0}
        max={Math.PI * 2}
        step={0.02}
        onChange={setTh}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
      <Slider
        label="ṙ (RADIAL)"
        value={rdot}
        min={-1.5}
        max={1.5}
        step={0.05}
        onChange={setRdot}
        format={v => v.toFixed(2)}
      />
      <Slider
        label="θ̇ (ANGULAR)"
        value={thd}
        min={-1.5}
        max={1.5}
        step={0.05}
        onChange={setThd}
        format={v => v.toFixed(2)}
      />
      <VizCaption>
        v = ṙ ê_r + r θ̇ ê_θ: radial rate ṙ along ê_r, tangential rate r θ̇ along ê_θ
      </VizCaption>
    </div>
  )
}

// 01.1.11 Displacement Origin Invariance (mafs)
// Two origins frame the SAME pair of fixed points A, B. Each origin closes a
// triangle (origin → A → B) whose closing edge is the displacement B − A.
// Drag O₂: its position legs change, the bold B − A arrow never moves. The
// readout proves it numerically: position columns shift, the B − A column
// stays frozen. Magnitude AND direction are invariant.
export function Vkg_DisplacementInvariantInline() {
  const C = useVizColors()
  const target = React.useContext(VizControlsCtx)
  // Fixed points in space: chosen non-collinear with O₁ so the triangle is fat
  // and the displacement edge never lies on top of a position leg.
  const A = [2.0, 0.5],
    B = [3.2, 2.3]
  const O2 = useMovablePoint([-2.2, 1.0], {
    color: C.accent,
    constrain: ([x, y]) => [clamp(x, -3, 4), clamp(y, -1.6, 3.2)]
  })
  const o2 = O2.point
  // Displacement is origin-independent: B − A by definition, identical in any frame.
  const dx = B[0] - A[0],
    dy = B[1] - A[1]
  const mag = Math.hypot(dx, dy)
  const ang = (Math.atan2(dy, dx) * 180) / Math.PI
  // Coordinates of A, B as measured FROM each origin (origin subtracted).
  const f = (p, o) => [p[0] - o[0], p[1] - o[1]]
  const a1 = A,
    b1 = B // from O₁ = (0,0)
  const a2 = f(A, o2),
    b2 = f(B, o2) // from draggable O₂
  // B − A label: perpendicular off the displacement midpoint, away from origins.
  const mid = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]
  const pl = Math.hypot(dx, dy) || 1
  const perp = [-dy / pl, dx / pl] // points up-left, clear of both origin fans
  const dLbl = [mid[0] + 0.55 * perp[0], mid[1] + 0.55 * perp[1]]

  const fmt = v => v.toFixed(1)
  const pair = p => `(${fmt(p[0])}, ${fmt(p[1])})`
  const mono = { fontFamily: 'D-DIN, monospace', fontVariantNumeric: 'tabular-nums' }

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
      <Mafs viewBox={{ x: [-3.5, 4.5], y: [-2, 3.6] }} pan={false} zoom={false} height={500}>
        <VkgCoords />

        {/* Frame O₂ (draggable): position legs as dashed faint guides, no heads */}
        <Line.Segment point1={o2} point2={A} color={C.faint} style="dashed" weight={1.5} />
        <Line.Segment point1={o2} point2={B} color={C.faint} style="dashed" weight={1.5} />

        {/* Frame O₁ (fixed): position legs as thin solid guides, no heads */}
        <Line.Segment point1={[0, 0]} point2={A} color={C.dim} weight={1.5} />
        <Line.Segment point1={[0, 0]} point2={B} color={C.dim} weight={1.5} />

        {/* The displacement B − A: the ONE primary arrow, shared by both frames */}
        <Vector tail={A} tip={B} color={C.fg} weight={3.5} />

        {/* Points */}
        <Point x={0} y={0} color={C.fg} />
        <Point x={A[0]} y={A[1]} color={C.fg} />
        <Point x={B[0]} y={B[1]} color={C.fg} />
        {O2.element}

        {/* Labels: origins offset down, points offset out, displacement offset perp */}
        <LaTeX at={[0.22, -0.34]} tex="O_1" color={C.fg} />
        <LaTeX at={[o2[0], o2[1] - 0.42]} tex="O_2" color={C.accent} />
        <LaTeX at={[A[0] + 0.12, A[1] - 0.36]} tex="A" color={C.fg} />
        <LaTeX at={[B[0] + 0.22, B[1] + 0.12]} tex="B" color={C.fg} />
        <LaTeX at={dLbl} tex="B-A" color={C.fg} />
      </Mafs>

      {(() => {
        const statsBlock = (
          <>
            {/* Numeric proof: positions shift per frame, the B − A column stays frozen */}
            <table className="lrn-table" style={{ maxWidth: 460, fontSize: FONT_LABEL }}>
              <thead>
                <tr>
                  <th>Frame</th>
                  <th>A</th>
                  <th>B</th>
                  <th style={{ color: C.fg }}>B − A</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'O₁', a: a1, b: b1, col: C.fg },
                  { name: 'O₂', a: a2, b: b2, col: C.accent }
                ].map(r => (
                  <tr key={r.name}>
                    <td style={{ color: r.col }}>{r.name}</td>
                    <td style={{ ...mono, color: C.dim }}>{pair(r.a)}</td>
                    <td style={{ ...mono, color: C.dim }}>{pair(r.b)}</td>
                    <td style={{ ...mono, color: C.fg }}>
                      ({fmt(dx)}, {fmt(dy)})
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              style={{
                padding: '0 12px',
                fontSize: FONT_LABEL,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: C.dim,
                textAlign: 'center'
              }}
            >
              Drag O₂: positions change, but B − A holds at |B − A| = {mag.toFixed(2)}, ∠{' '}
              {ang.toFixed(1)}°
            </div>
          </>
        )
        return target ? createPortal(statsBlock, target) : statsBlock
      })()}
    </div>
  )
}

// 01.1.12 Rotating Vector Chord (mafs)
// The chord Δr (accent, the star) is the change in a constant-length rotating
// vector. The tangent ê_θ (fg, the answer) is the limit direction as Δθ→0, and
// a right-angle marker proves it stays perpendicular to r. Every number in the
// readout below is computed live from the sliders: nothing decorative.
export function Vkg_RotatingChordInline() {
  const C = useVizColors()
  const target = React.useContext(VizControlsCtx)
  const [th, setTh] = useState(0.6)
  const [dth, setDth] = useState(0.8)
  const a = [Math.cos(th), Math.sin(th)] // r(t)
  const b = [Math.cos(th + dth), Math.sin(th + dth)] // r(t+Δt)
  const eth = [-Math.sin(th), Math.cos(th)] // unit tangent ê_θ at a
  // Computed quantities: the lesson, made quantitative.
  const chord = 2 * Math.sin(dth / 2) // exact |Δr|
  const ratio = chord / dth // → 1 as Δθ → 0  (small-angle limit)
  const gapDeg = (dth / 2) * (180 / Math.PI) // ∠(Δr, ê_θ) = Δθ/2 → 0
  // Tangent drawn as a fixed-length direction ray, kept distinct from the chord.
  const ethTip = [a[0] + 0.75 * eth[0], a[1] + 0.75 * eth[1]]
  const ethLbl = [a[0] + 0.96 * eth[0] + 0.05, a[1] + 0.96 * eth[1]]
  // Δr label: push outward (away from origin) off the chord midpoint so it
  // never collides with the tangent ray or the Δθ wedge near the origin.
  const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
  const mlen = Math.hypot(mid[0], mid[1]) || 1
  const drLbl = [mid[0] + (0.2 * mid[0]) / mlen, mid[1] + (0.2 * mid[1]) / mlen]
  // Right-angle marker at a, between the radius line (toward O) and ê_θ.
  const s = 0.14
  const raP0 = [a[0] * (1 - s), a[1] * (1 - s)]
  const raP1 = [a[0] * (1 - s) + s * eth[0], a[1] * (1 - s) + s * eth[1]]
  const raP2 = [a[0] + s * eth[0], a[1] + s * eth[1]]
  // r / r' labels: radially staggered so they stay apart even when Δθ is tiny.
  const rLbl = [0.86 * a[0], 0.86 * a[1]]
  const rpLbl = [0.6 * b[0], 0.6 * b[1]]
  const bis = th + dth / 2 // wedge bisector for the Δθ label
  const stat = (label, value, color) => (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        padding: '7px 6px',
        border: `1px solid ${C.faint}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3
      }}
    >
      <span
        style={{
          fontSize: FONT_SMALL,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: C.dim,
          whiteSpace: 'nowrap'
        }}
      >
        {label}
      </span>
      <span style={{ fontSize: FONT_CONTROL, fontVariantNumeric: 'tabular-nums', color }}>
        {value}
      </span>
    </div>
  )
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
      <Mafs viewBox={{ x: [-1.75, 1.75], y: [-1.75, 1.75] }} pan={false} zoom={false} height={600}>
        <VkgCoords />
        <Circle center={[0, 0]} radius={1} color={C.faint} fillOpacity={0} />
        {/* Tertiary: the swept angle Δθ wedge near the origin */}
        <Plot.Parametric
          t={[th, th + dth]}
          xy={u => [0.4 * Math.cos(u), 0.4 * Math.sin(u)]}
          color={C.dim}
        />
        {/* Tertiary: the rotating vector at two instants */}
        <Vector tail={[0, 0]} tip={a} color={C.dim} weight={1.5} />
        <Vector tail={[0, 0]} tip={b} color={C.dim} weight={1.5} />
        {/* Secondary (fg): tangent ê_θ: the limit direction of the chord */}
        <Vector tail={a} tip={ethTip} color={C.fg} weight={2} />
        {/* Right-angle marker: r ⊥ ê_θ, always, the whole point */}
        <Polyline points={[raP0, raP1, raP2]} color={C.dim} fillOpacity={0} />
        {/* Primary (accent): the chord: change in the rotating vector */}
        <Vector tail={a} tip={b} color={C.accent} weight={3} />
        {/* Labels */}
        <LaTeX at={[0.6 * Math.cos(bis), 0.6 * Math.sin(bis)]} tex="\Delta\theta" color={C.dim} />
        <LaTeX at={rLbl} tex="\mathbf{r}" color={C.dim} />
        <LaTeX at={rpLbl} tex="\mathbf{r}'" color={C.dim} />
        <LaTeX at={ethLbl} tex="\hat{e}_\theta" color={C.fg} />
        <LaTeX at={drLbl} tex="\Delta\mathbf{r}" color={C.accent} />
      </Mafs>
      <Slider
        label="θ"
        value={th}
        min={0}
        max={Math.PI * 2}
        step={0.02}
        onChange={setTh}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
      <Slider
        label="Δθ"
        value={dth}
        min={0.05}
        max={1.5}
        step={0.01}
        onChange={setDth}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
      {(() => {
        const statsBlock = (
          <div style={{ width: '100%', display: 'flex', gap: 8 }}>
            {stat('|Δr| = 2 sin(Δθ/2)', chord.toFixed(3), C.accent)}
            {stat('arc Δθ (rad)', dth.toFixed(3), C.dim)}
            {stat('|Δr| / Δθ', ratio.toFixed(3), C.fg)}
            {stat('∠(Δr, ê_θ)', gapDeg.toFixed(1) + '°', C.fg)}
          </div>
        )
        return target ? createPortal(statsBlock, target) : statsBlock
      })()}
      <VizCaption>
        Shrink Δθ → the chord lines up with ê_θ (∠→0) and |Δr|/Δθ → 1: the derivative is
        perpendicular to r
      </VizCaption>
    </div>
  )
}

// 01.1.13 Uniform Circular Motion (mafs, analytical)
// Everything is computed from θ and ω: position r(θ), velocity v = ω r (tangent),
// acceleration a = −ω² r (straight back down the radius). Press play and θ runs at
// the true rate ω, so the figure is a live integration, not a frozen drawing. Two
// facts are made visible, not asserted: v ⟂ r (right-angle marker at the particle)
// and |a| = ω² r (raise ω and the inward arrow grows as the square, with the readout
// proving the exact numbers). Acceleration is the primary, heaviest mark: it is the
// whole lesson of the section.
export function Vkg_UCMInline() {
  const C = useVizColors()
  const target = React.useContext(VizControlsCtx)
  const [th, setTh] = useState(0.8)
  const [w, setW] = useState(1.0) // angular speed ω
  const [playing, setPlaying] = useState(true)
  const r = 1.6

  // Live integration: θ advances at the true rate ω while playing.
  const wRef = useRef(w)
  wRef.current = w
  useEffect(() => {
    if (!playing) return
    let raf = 0
    let last = 0
    const loop = now => {
      if (last) {
        const dt = Math.min(0.05, (now - last) / 1000)
        setTh(t => (t + wRef.current * dt) % (Math.PI * 2))
      }
      last = now
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [playing])

  // Kinematics: exact, straight from the definitions r, v = dr/dt, a = dv/dt.
  const c = Math.cos(th),
    s = Math.sin(th)
  const pos = [r * c, r * s]
  const rHat = [c, s] // unit radial (outward)
  const vHat = [-s, c] // unit tangential: v · r = 0 by construction
  const speed = w * r // |v| = ω r
  const accel = w * w * r // |a| = ω² r
  // a points along −r̂; the live angle between a and r is acos(−1) = 180°.
  // Clamp guards against cos²+sin² drifting past 1 by a float epsilon → NaN.
  const angAR = (Math.acos(clamp(-rHat[0] * rHat[0] - rHat[1] * rHat[1], -1, 1)) * 180) / Math.PI

  // Display lengths: v ∝ ω, a ∝ ω². Over ω ∈ [0.5, 1.5] the inward arrow grows as
  // the square while both stay inside the frame (v is tangential, so it never
  // reaches further than √(r² + vDisp²) from the centre).
  const vDisp = 0.5 * speed // = 0.5 ω r
  const aDisp = 0.42 * accel // = 0.42 ω² r
  const vTip = [pos[0] + vHat[0] * vDisp, pos[1] + vHat[1] * vDisp]
  const aTip = [pos[0] - rHat[0] * aDisp, pos[1] - rHat[1] * aDisp] // toward centre

  // Right-angle bracket at the particle, proving v ⟂ r.
  const m = 0.16
  const ra = [
    [pos[0] - rHat[0] * m, pos[1] - rHat[1] * m],
    [pos[0] - rHat[0] * m + vHat[0] * m, pos[1] - rHat[1] * m + vHat[1] * m],
    [pos[0] + vHat[0] * m, pos[1] + vHat[1] * m]
  ]

  const stat = (label, val, accent) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 90 }}>
      <span style={{ fontSize: FONT_SMALL, letterSpacing: '0.12em', color: C.dim }}>{label}</span>
      <span
        style={{
          fontSize: FONT_CONTROL,
          color: accent ? C.accent : C.fg,
          fontVariantNumeric: 'tabular-nums'
        }}
      >
        {val}
      </span>
    </div>
  )

  const btn = {
    fontFamily: 'D-DIN, sans-serif',
    fontSize: FONT_LABEL,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    padding: '6px 18px',
    background: 'transparent',
    cursor: 'pointer',
    border: `1px solid ${C.dim}`,
    color: C.fg
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
      <Mafs viewBox={{ x: [-2.4, 2.4], y: [-2.4, 2.4] }} pan={false} zoom={false} height={600}>
        <VkgCoords />
        {/* TERTIARY: the circular path */}
        <Circle center={[0, 0]} radius={r} color={C.faint} fillOpacity={0} />
        {/* TERTIARY: swept path so far, the visible trace of the integration */}
        <Plot.Parametric t={[0, th]} xy={a => [r * Math.cos(a), r * Math.sin(a)]} color={C.dim} />
        {/* TERTIARY: angle θ marked at the centre */}
        <Plot.Parametric
          t={[0, th]}
          xy={a => [0.42 * Math.cos(a), 0.42 * Math.sin(a)]}
          color={C.faint}
        />
        {/* SECONDARY: position vector r; a runs straight back down this line */}
        <Line.Segment point1={[0, 0]} point2={pos} color={C.dim} style="dashed" />
        <Point x={0} y={0} color={C.dim} />
        {/* right-angle bracket: v ⟂ r, shown not asserted */}
        <Polyline points={ra} color={C.dim} />
        {/* the moving particle */}
        <Point x={pos[0]} y={pos[1]} color={C.fg} />
        {/* ACCENT: velocity, tangent to the circle, length ∝ ω */}
        <Vector tail={pos} tip={vTip} color={C.accent} weight={3} />
        {/* PRIMARY: acceleration, straight to the centre, length ∝ ω² (the lesson) */}
        <Vector tail={pos} tip={aTip} color={C.fg} weight={3} />
        <LaTeX
          at={[vTip[0] + vHat[0] * 0.16, vTip[1] + vHat[1] * 0.16 + 0.06]}
          tex="\mathbf{v}"
          color={C.accent}
        />
        {/* a label rides the shaft midpoint, on the OPPOSITE perpendicular side
            from r's label — the two can never meet for any θ, ω */}
        <LaTeX
          at={[
            pos[0] - rHat[0] * (aDisp / 2) - vHat[0] * 0.24,
            pos[1] - rHat[1] * (aDisp / 2) - vHat[1] * 0.24
          ]}
          tex="\mathbf{a}"
          color={C.fg}
        />
        <LaTeX
          at={[pos[0] / 2 + 0.14 * vHat[0], pos[1] / 2 + 0.14 * vHat[1]]}
          tex="\mathbf{r}"
          color={C.dim}
        />
      </Mafs>
      {(() => {
        const statsBlock = (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                fontFamily: 'D-DIN, sans-serif'
              }}
            >
              {stat('SPEED |v| = ωr', `${speed.toFixed(2)} m/s`, true)}
              {stat('ACCEL |a| = ω²r', `${accel.toFixed(2)} m/s²`)}
              {stat('∠(a, r)', `${angAR.toFixed(0)}°`)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button style={btn} onClick={() => setPlaying(p => !p)}>
                {playing ? 'Pause' : 'Play'}
              </button>
            </div>
          </>
        )
        return target ? createPortal(statsBlock, target) : statsBlock
      })()}
      <Slider
        label="ω"
        value={w}
        min={0.5}
        max={1.5}
        step={0.02}
        onChange={setW}
        format={v => v.toFixed(2)}
      />
      <Slider
        label="θ"
        value={th}
        min={0}
        max={Math.PI * 2}
        step={0.02}
        onChange={v => {
          setPlaying(false)
          setTh(v)
        }}
        format={v => ((v * 180) / Math.PI).toFixed(0) + '°'}
      />
      <VizCaption>
        v stays tangent (v ⟂ r) · a runs straight down the radius: a = −ω²r · double ω, |a| ×4
      </VizCaption>
    </div>
  )
}

// Integrate BOTH arcs from the same launch: the quadratic-drag path (RK4, exact -
// state y = [x, y, vx, vy]) and the vacuum parabola (closed form). Returns sampled
// points + velocities for the live marker plus the apex and range of each, so the
// viz can draw the real answer against its drag-free reference and frame to both.
function computeProjectile(v0x, v0y, drag, g = 9.8) {
  const dt = 0.012 // playback sample step
  const deriv = (_t, [, , vx, vy]) => {
    const sp = Math.hypot(vx, vy)
    return [vx, vy, -drag * sp * vx, -g - drag * sp * vy]
  }
  const dragPts = [[0, 0]]
  const dragVel = [[v0x, v0y]]
  let y = [0, 0, v0x, v0y]
  let dragApex = [0, 0]
  for (let i = 0; i < 4000; i++) {
    const prev = y
    y = rk4Step(deriv, i * dt, y, dt)
    if (y[1] > dragApex[1]) dragApex = [y[0], y[1]]
    if (y[1] <= 0) {
      const t = prev[1] / (prev[1] - y[1] || 1)
      dragPts.push([prev[0] + t * (y[0] - prev[0]), 0])
      dragVel.push([y[2], y[3]])
      break
    }
    dragPts.push([y[0], y[1]])
    dragVel.push([y[2], y[3]])
  }
  const dragRange = dragPts[dragPts.length - 1][0]

  // Vacuum parabola: analytic, sampled for the dashed reference curve.
  const tEnd = (2 * v0y) / g || 0
  const N = 80
  const ideal = Array.from({ length: N + 1 }, (_, i) => {
    const t = (i / N) * tEnd
    return [v0x * t, v0y * t - 0.5 * g * t * t]
  })
  const idealRange = v0x * tEnd
  const idealApex = [(v0x * v0y) / g, (v0y * v0y) / (2 * g)]

  return { dt, dragPts, dragVel, dragApex, dragRange, ideal, idealApex, idealRange }
}

// Walk a marker index through a precomputed trajectory at the sim dt, looping.
// runKey restarts the run from the first sample.
function useTrajectoryPlayer(length, dt, runKey) {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    setIdx(0)
  }, [runKey])
  useEffect(() => {
    if (paused || length < 2) return
    let raf = 0
    let last = 0
    let acc = 0
    const loop = now => {
      if (last) {
        acc += (now - last) / 1000
        while (acc >= dt) {
          acc -= dt
          setIdx(i => (i + 1) % length)
        }
      }
      last = now
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [paused, length, dt])
  return { idx: Math.min(idx, Math.max(0, length - 1)), paused, setPaused }
}

// 01.1.14 Projectile Motion (rk4 drag path vs vacuum parabola)
export function Vkg_ProjectileMotionInline() {
  const C = useVizColors()
  const target = React.useContext(VizControlsCtx)
  const [v0, setV0] = useState(9)
  const [ang, setAng] = useState(55)
  const [drag, setDrag] = useState(0.06)
  const [runKey, setRunKey] = useState(0)
  const rad = (ang * Math.PI) / 180
  const v0x = v0 * Math.cos(rad)
  const v0y = v0 * Math.sin(rad)

  const traj = useMemo(() => computeProjectile(v0x, v0y, drag), [v0x, v0y, drag])
  const player = useTrajectoryPlayer(traj.dragPts.length, traj.dt, runKey)

  // auto-frame on the vacuum envelope (always the larger of the two)
  const SC = Math.min(
    3,
    5.3 / Math.max(traj.idealRange, traj.dragRange, 0.1),
    2.45 / Math.max(traj.idealApex[1], 0.1)
  )
  const sp = ([x, y]) => [x * SC, y * SC]

  const mPos = traj.dragPts[player.idx]
  const mVel = traj.dragVel[player.idx]
  const speed = Math.hypot(mVel[0], mVel[1])
  const lost = traj.idealRange - traj.dragRange
  const showGap = lost * SC > 0.18 // only annotate when drag visibly shortens the range

  useEffect(() => {
    setRunKey(k => k + 1)
  }, [v0, ang, drag])

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
      <Mafs viewBox={{ x: [-0.5, 6], y: [-0.45, 3] }} pan={false} zoom={false} height={440}>
        <VkgCoords />
        <Line.Segment point1={[-0.5, 0]} point2={[6, 0]} color={C.dim} />

        {/* vacuum parabola: dashed reference */}
        <Polyline
          points={traj.ideal.map(sp)}
          color={C.dim}
          strokeStyle="dashed"
          weight={1.5}
          fillOpacity={0}
        />
        {/* real drag trajectory: solid, bright: the computed answer */}
        <Polyline points={traj.dragPts.map(sp)} color={C.fg} weight={2.5} fillOpacity={0} />

        {/* apex markers */}
        <Point x={traj.idealApex[0] * SC} y={traj.idealApex[1] * SC} color={C.dim} />
        <Point x={traj.dragApex[0] * SC} y={traj.dragApex[1] * SC} color={C.fg} />

        {/* range-lost brace on the ground */}
        {showGap && (
          <>
            <Line.Segment
              point1={[traj.dragRange * SC, -0.22]}
              point2={[traj.idealRange * SC, -0.22]}
              color={C.dim}
            />
            <Line.Segment
              point1={[traj.dragRange * SC, -0.12]}
              point2={[traj.dragRange * SC, -0.32]}
              color={C.dim}
            />
            <Line.Segment
              point1={[traj.idealRange * SC, -0.12]}
              point2={[traj.idealRange * SC, -0.32]}
              color={C.dim}
            />
            <LaTeX
              at={[((traj.dragRange + traj.idealRange) / 2) * SC, -0.4]}
              tex={`-${lost.toFixed(2)}\\,\\text{m}`}
              color={C.dim}
            />
          </>
        )}

        {/* curve labels */}
        <LaTeX
          at={[traj.idealApex[0] * SC + 0.25, traj.idealApex[1] * SC + 0.55]}
          tex="\text{no drag}"
          color={C.dim}
        />
        <LaTeX
          at={[traj.dragApex[0] * SC - 0.55, traj.dragApex[1] * SC + 0.55]}
          tex="\text{drag}"
          color={C.fg}
        />

        {/* live marker + tangent velocity */}
        <Vector
          tail={sp(mPos)}
          tip={[mPos[0] * SC + mVel[0] * SC * 0.22, mPos[1] * SC + mVel[1] * SC * 0.22]}
          color={C.accent}
        />
        <Point x={mPos[0] * SC} y={mPos[1] * SC} color={C.accent} />

        {/* equation + live speed */}
        <LaTeX
          at={[1.55, 2.82]}
          tex="\ddot{\mathbf{r}} = -g\hat{j} - k|\mathbf{v}|\mathbf{v}"
          color={C.dim}
        />
        <LaTeX at={[4.7, 2.82]} tex={`|\\mathbf{v}| = ${speed.toFixed(1)}`} color={C.dim} />
      </Mafs>
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
      {(() => {
        const statsBlock = (
          <div style={{ display: 'flex', gap: 12, padding: '0 4px' }}>
            <button
              onClick={() => player.setPaused(p => !p)}
              style={{
                flex: 1,
                padding: '8px',
                background: 'transparent',
                border: `1px solid ${C.dim}`,
                color: C.fg,
                fontSize: FONT_LABEL,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              {player.paused ? 'Play' : 'Pause'}
            </button>
            <button
              onClick={() => setRunKey(k => k + 1)}
              style={{
                flex: 1,
                padding: '8px',
                background: 'transparent',
                border: `1px solid ${C.dim}`,
                color: C.fg,
                fontSize: FONT_LABEL,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              Restart
            </button>
          </div>
        )
        return target ? createPortal(statsBlock, target) : statsBlock
      })()}
    </div>
  )
}

// 01.1.15 Taylor sin x (mafs)
// Maclaurin partial sums of sin x. Drag TERMS to add one term at a time: the
// solid match-region (and its on-axis bar) widens while the dashed tails show
// where the polynomial still flies off. The match radius r is scanned, not assumed.
const TAYLOR_DEN = [1, 6, 120, 5040, 362880, 39916800, 6227020800] // (2k+1)!, k = 0..6
function taylorSin(x, terms) {
  let s = 0
  for (let k = 0; k < terms; k++) {
    s += ((k % 2 === 0 ? 1 : -1) * x ** (2 * k + 1)) / TAYLOR_DEN[k]
  }
  return s
}

export function Vkg_TaylorSinInline() {
  const C = useVizColors()
  const [terms, setTerms] = useState(3)
  const X = Math.PI * 2
  const TOL = 0.05
  // largest |x| where the partial sum still tracks sin x within TOL: scanned numerically
  const r = useMemo(() => {
    let last = 0
    for (let x = 0; x <= X; x += 0.01) {
      if (Math.abs(taylorSin(x, terms) - Math.sin(x)) > TOL) break
      last = x
    }
    return last
  }, [terms, X])
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
      <Mafs viewBox={{ x: [-X, X], y: [-1.9, 1.9] }} pan={false} zoom={false} height={460}>
        <VkgCoords />
        {/* corridor: the x-interval where the polynomial is trustworthy */}
        {r > 0.02 && (
          <>
            <Line.Segment point1={[-r, -1.9]} point2={[-r, 1.9]} color={C.faint} style="dashed" />
            <Line.Segment point1={[r, -1.9]} point2={[r, 1.9]} color={C.faint} style="dashed" />
          </>
        )}
        {/* sin x: the target, calm reference */}
        <Plot.OfX y={x => Math.sin(x)} color={C.fg} weight={2.5} />
        {/* partial sum where it diverges: dashed, faded, clamped so the path stays finite */}
        {r < X && (
          <>
            <Plot.Parametric
              t={[-X, -r]}
              xy={t => [t, clamp(taylorSin(t, terms), -40, 40)]}
              color={C.accent}
              weight={1.5}
              style="dashed"
              opacity={0.4}
            />
            <Plot.Parametric
              t={[r, X]}
              xy={t => [t, clamp(taylorSin(t, terms), -40, 40)]}
              color={C.accent}
              weight={1.5}
              style="dashed"
              opacity={0.4}
            />
          </>
        )}
        {/* partial sum where it matches sin x: bold, solid */}
        <Plot.Parametric
          t={[-r, r]}
          xy={t => [t, taylorSin(t, terms)]}
          color={C.accent}
          weight={3}
        />
        {/* matched span marked on the axis */}
        <Line.Segment point1={[-r, 0]} point2={[r, 0]} color={C.accent} weight={2} />
        <LaTeX at={[-5.0, 1.5]} tex="\sin x" color={C.fg} />
        <LaTeX
          at={[0, 1.55]}
          tex={`\\sin x \\approx \\textstyle\\sum_{k=0}^{${terms - 1}} \\tfrac{(-1)^k\\,x^{2k+1}}{(2k+1)!}`}
          color={C.dim}
        />
      </Mafs>
      <Slider
        label="TERMS"
        value={terms}
        min={1}
        max={7}
        step={1}
        onChange={setTerms}
        format={v => `${v}  ·  order ${2 * v - 1}`}
      />
      <VizCaption>{`${terms} term${terms > 1 ? 's' : ''} · matches sin x for |x| < ${r.toFixed(
        2
      )}, then the polynomial diverges`}</VizCaption>
    </div>
  )
}

// 01.1.16 The Ten Galilean Symmetries (HTML reference table)
// The Galilean group has exactly 10 generators: 1 time translation + 3 space
// translations + 3 rotations + 3 boosts. Each generator removes one thing the
// force law F is forbidden to depend on. The count is drawn as filled cells so
// 10 = 1 + 3 + 3 + 3 reads as structure, not just a number in a cell.
export function Vkg_GalileanTableInline({ bare = false } = {}) {
  const C = useVizColors()
  const rows = [
    { name: 'Time translation', count: 1, removes: 'absolute time  t' },
    { name: 'Space translation', count: 3, removes: 'absolute position  xᵢ' },
    { name: 'Rotation', count: 3, removes: 'a preferred direction' },
    { name: 'Galilean boost', count: 3, removes: 'absolute velocity  ẋᵢ' }
  ]
  const total = rows.reduce((s, r) => s + r.count, 0)
  const cell = 11
  const Squares = ({ n, fill }) => (
    <span style={{ display: 'inline-flex', gap: 4 }}>
      {Array.from({ length: n }, (_, i) => (
        <span key={i} style={{ width: cell, height: cell, background: fill, display: 'block' }} />
      ))}
    </span>
  )
  const table = (
    <table className="lrn-table" style={bare ? undefined : { maxWidth: 600 }}>
      <thead>
        <tr>
          <th>Symmetry</th>
          <th>Generators</th>
          <th>Removes from F</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.name}>
            <td>{r.name}</td>
            <td>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <Squares n={r.count} fill={C.accent} />
                <span style={{ color: C.dim, fontVariantNumeric: 'tabular-nums' }}>{r.count}</span>
              </span>
            </td>
            <td style={{ color: C.dim }}>{r.removes}</td>
          </tr>
        ))}
      </tbody>
      {/* total: 10 generators grouped 1 · 3 · 3 · 3 so the sum reads visually */}
      <tfoot>
        <tr>
          <td style={{ fontWeight: 700 }}>Total</td>
          <td>
            <span style={{ display: 'inline-flex', gap: 10 }}>
              {rows.map((r, i) => (
                <Squares key={i} n={r.count} fill={C.fg} />
              ))}
            </span>
          </td>
          <td style={{ color: C.accent, fontVariantNumeric: 'tabular-nums' }}>
            {total} generators · the Galilean group
          </td>
        </tr>
      </tfoot>
    </table>
  )
  // bare: rendered inline in section prose (no wrapper/caption, matching the old
  // GalileanSymmetriesTable helper it replaced). Default: wrapped for the showcase.
  if (bare) return table
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
      {table}
      <VizCaption>Each generator removes one thing F may depend on · 10 = 1 + 3 + 3 + 3</VizCaption>
    </div>
  )
}

// 01.1.17 Galilean Boost · The Train (mafs)
// One drop, two inertial frames, one shared floor. Both balls start at the
// same launch point and fall the same height in the same time. The ground
// frame S traces a parabola; the train frame S' traces a straight drop. At any
// instant their horizontal gap is exactly vt: the picture IS x' = x - vt.
export function Vkg_GalileanBoostInline() {
  const C = useVizColors()
  const [T, setT] = useState(0.55)
  const [v, setV] = useState(0.9)
  const X0 = 1.2 // shared launch x (= x' of the train-frame drop, constant)
  const H = 3.0 // drop height above the floor: identical in both frames
  const K = 3.6 // horizontal-drift display gain (absorbs the fall time)
  const fall = u => H * (1 - u * u) // height above floor vs normalized time u∈[0,1]
  const gap = v * T * K // = vt to scale: how far S has carried the train
  const N = 40
  // Ground frame S: x = X0 + vt (∝ t), y = H(1 − u²) (∝ t²) → a parabola
  const trailG = Array.from({ length: N + 1 }, (_, i) => {
    const u = (T * i) / N
    return [X0 + v * u * K, fall(u)]
  })
  const yT = fall(T)
  const ballG = [X0 + gap, yT] // ground-frame ball: drifted right
  const ballS = [X0, yT] // train-frame ball: straight down at constant x'
  const cx = X0 + gap // ground-frame train position
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
      <Mafs viewBox={{ x: [-0.7, 7], y: [-1.2, 4] }} pan={false} zoom={false} height={460}>
        <VkgCoords />
        {/* Shared floor: one ground for both frames */}
        <Line.Segment point1={[-0.7, 0]} point2={[7, 0]} color={C.dim} />

        {/* Train frame S': the straight drop at constant x' = X0 */}
        <Line.Segment point1={[X0, H]} point2={[X0, 0]} color={C.dim} style="dashed" />
        <Point x={ballS[0]} y={ballS[1]} color={C.accent} />

        {/* Ground frame S: the parabola; the train carries the drop point right */}
        <Polygon
          points={[
            [cx - 0.75, 0],
            [cx + 0.75, 0],
            [cx + 0.75, 0.7],
            [cx - 0.75, 0.7]
          ]}
          color={C.faint}
          fillOpacity={0.05}
          strokeStyle="solid"
        />
        {trailG.length > 1 && <Polyline points={trailG} color={C.fg} />}
        {/* the ball stays directly above the moving train mark: equal height to S' */}
        <Line.Segment point1={[cx, yT]} point2={[cx, 0]} color={C.dim} style="dashed" />
        <Point x={ballG[0]} y={ballG[1]} color={C.accent} />

        {/* The transformation, drawn to scale: gap between the two balls = vt */}
        <Line.Segment point1={[X0, yT]} point2={[cx, yT]} color={C.accent} style="dashed" />
        {/* floor bracket measuring the same vt the train has travelled */}
        <Line.Segment point1={[X0, -0.55]} point2={[cx, -0.55]} color={C.dim} />
        <Line.Segment point1={[X0, -0.4]} point2={[X0, -0.7]} color={C.dim} />
        <Line.Segment point1={[cx, -0.4]} point2={[cx, -0.7]} color={C.dim} />
        <LaTeX at={[(X0 + cx) / 2, -0.95]} tex="vt" color={C.fg} />

        {/* shared launch point: both trajectories begin here */}
        <Point x={X0} y={H} color={C.fg} />
        <LaTeX at={[2.9, 3.55]} tex="\text{frame }S\text{ (ground)}" color={C.fg} />
        <LaTeX at={[-0.35, 1.55]} tex="\text{frame }S'" color={C.fg} />
        <LaTeX at={[-0.35, 1.0]} tex="\text{(train)}" color={C.fg} />
      </Mafs>
      <Slider
        label="TIME"
        value={T}
        min={0}
        max={1}
        step={0.01}
        onChange={setT}
        format={u => u.toFixed(2)}
      />
      <Slider
        label="BOOST v"
        value={v}
        min={0}
        max={1.3}
        step={0.05}
        onChange={setV}
        format={u => u.toFixed(2)}
      />
      <VizCaption>
        Both balls drop from one point, fall the same height in the same time · the horizontal gap
        is exactly vt · x′ = x − vt, t′ = t
      </VizCaption>
    </div>
  )
}

// 01.1.18 Galilean Spacetime Diagram · the shear (mafs)
// x–t diagram. Under a Galilean boost only the t'-axis tilts; the x'-axis
// stays horizontal, so simultaneity (absolute time) is preserved. The event P
// is draggable: read its x' by sliding back along the boost (parallel to t'),
// landing at x' = x − vt. The slide distance on the axis IS vt. Contrast with
// Lorentz, where both axes tilt. Colour semantics: accent = boosted S' frame,
// fg/dim = rest frame S + the shared x = x' axis.
export function Vkg_GalileanSpacetimeInline() {
  const C = useVizColors()
  const [v, setV] = useState(0.6)
  const tMax = 3.6
  const xAxisEnd = 5.6
  // Draggable event P, constrained inside the diagram.
  const P = useMovablePoint([3, 2], {
    color: C.fg,
    constrain: ([x, y]) => [clamp(x, 0.4, 5.2), clamp(y, 0.4, 3.4)]
  })
  const [xP, tP] = P.point
  const xPrime = xP - v * tP // x' read by sliding back along the boost direction
  const offset = xP - xPrime // = v·tP, the horizontal slide distance on the axis
  const showOffset = offset > 0.12 // hide the bracket when the boost vanishes
  const mid = (xP + xPrime) / 2
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
      <Mafs viewBox={{ x: [-1.5, 6], y: [-1.05, 4] }} pan={false} zoom={false} height={540}>
        <VkgCoords />
        {/* TERTIARY: lines of simultaneity, horizontal and flat in both frames */}
        {[1, 2, 3].map(t => (
          <Line.Segment key={t} point1={[0, t]} point2={[xAxisEnd, t]} color={C.faint} />
        ))}
        {/* TERTIARY: the S' spatial grid: lines of constant x' run parallel to the t'-axis,
            x = x' + v t. They shear with the boost while the flat simultaneity lines do not.
            One mesh holds all of Galilean relativity: time absolute, position frame-dependent. */}
        {[1, 2, 3, 4].map(xp => (
          <Line.Segment
            key={`xp${xp}`}
            point1={[xp, 0]}
            point2={[xp + v * tMax, tMax]}
            color={C.faint}
          />
        ))}
        {/* The simultaneity line THROUGH P, promoted: this flat line is the proof
            that t' = t. P and its foot on the axis share one absolute instant. */}
        <Line.Segment point1={[0, tP]} point2={[xAxisEnd, tP]} color={C.dim} />
        {/* SECONDARY: rest-frame S time axis */}
        <Vector tail={[0, 0]} tip={[0, tMax]} color={C.dim} />
        {/* PRIMARY: the shared x = x' axis (does NOT tilt) */}
        <Vector tail={[0, 0]} tip={[xAxisEnd, 0]} color={C.fg} weight={3} />
        {/* PRIMARY: t'-axis: worldline of the S' origin, x = v t. The shear. */}
        <Vector tail={[0, 0]} tip={[v * tMax, tMax]} color={C.accent} weight={3} />
        {/* Read-off lines from P:
            · vertical (dim) drops to x in the rest frame S
            · slanted (accent) runs parallel to the t'-axis to x' in S' */}
        <Line.Segment point1={[xP, tP]} point2={[xP, 0]} color={C.dim} style="dashed" />
        <Line.Segment point1={[xP, tP]} point2={[xPrime, 0]} color={C.accent} style="dashed" />
        {/* The vt offset on the axis: the distance you slide back along the boost.
            Bracket with end ticks ties x' visually to the boost that produced it. */}
        {showOffset && (
          <>
            <Line.Segment point1={[xPrime, -0.5]} point2={[xP, -0.5]} color={C.accent} />
            <Line.Segment point1={[xPrime, -0.42]} point2={[xPrime, -0.58]} color={C.accent} />
            <Line.Segment point1={[xP, -0.42]} point2={[xP, -0.58]} color={C.accent} />
            <LaTeX at={[mid, -0.82]} tex="vt" color={C.accent} />
          </>
        )}
        {/* Feet on the axis */}
        <Point x={xP} y={0} color={C.dim} />
        <Point x={xPrime} y={0} color={C.accent} />
        <Point x={0} y={tP} color={C.dim} />
        {/* Movable event P (rendered last so its handle sits on top) */}
        {P.element}
        {/* Labels */}
        <LaTeX at={[v * tMax + 0.16, tMax - 0.05]} tex="t'" color={C.accent} />
        <LaTeX at={[-0.5, tMax - 0.05]} tex="t" color={C.dim} />
        <LaTeX at={[4.35, -0.32]} tex="x = x'" color={C.fg} />
        <LaTeX at={[xP + 0.24, tP + 0.2]} tex="P" color={C.fg} />
        <LaTeX at={[-0.78, tP]} tex="t' = t" color={C.dim} />
        <LaTeX at={[xP + 0.16, -0.32]} tex="x" color={C.dim} />
        {/* hide the x' foot label as the boost vanishes (xPrime → xP) so it never
            collides with the x label; the bracket gates on the same threshold */}
        {showOffset && <LaTeX at={[xPrime - 0.22, -0.32]} tex="x'" color={C.accent} />}
      </Mafs>
      <Slider
        label="BOOST v"
        value={v}
        min={0}
        max={1}
        step={0.02}
        onChange={setV}
        format={u => u.toFixed(2)}
      />
      <div
        style={{
          padding: '0 12px',
          fontSize: FONT_TEX,
          color: C.fg,
          textAlign: 'center'
        }}
      >
        x′ = x − v t = {xP.toFixed(2)} − {v.toFixed(2)}×{tP.toFixed(2)} = {xPrime.toFixed(2)}
        <span style={{ color: C.dim }}> · t′ = t = {tP.toFixed(2)}</span>
      </div>
      <VizCaption>
        Drag P · only the t′ axis tilts. The flat time lines mean simultaneity is absolute
      </VizCaption>
    </div>
  )
}

// 01.11.2 Dot Product Geometry (mafs)
export function Vkg_DotProductInteractiveInline() {
  const C = useVizColors()
  // Origin seated lower-left; the vector fan fills the frame rightward.
  const a = useMovablePoint([1.6, 2.4], {
    color: C.fg,
    constrain: ([x, y]) => [clamp(x, -0.4, 4.7), clamp(y, -1.0, 3.0)]
  })
  const b = useMovablePoint([3.6, 1.6], {
    color: C.dim,
    constrain: ([x, y]) => [clamp(x, -0.4, 4.7), clamp(y, -1.0, 3.0)]
  })
  const dot = a.point[0] * b.point[0] + a.point[1] * b.point[1]
  const na = Math.hypot(a.point[0], a.point[1]) || 1
  const nb = Math.hypot(b.point[0], b.point[1]) || 1
  const cos = dot / (na * nb)
  const ang = Math.acos(Math.max(-1, Math.min(1, cos)))
  const sproj = dot / (nb * nb)
  const projVec = [b.point[0] * sproj, b.point[1] * sproj]
  const shadow = na * cos // scalar projection = |a| cosθ = signed shadow length
  const angA = Math.atan2(a.point[1], a.point[0])
  const angB = Math.atan2(b.point[1], b.point[0])
  // labels offset radially outward, beyond the draggable handles
  const aLbl = [a.point[0] + (0.42 * a.point[0]) / na, a.point[1] + (0.42 * a.point[1]) / na]
  const bLbl = [b.point[0] + (0.42 * b.point[0]) / nb, b.point[1] + (0.42 * b.point[1]) / nb]
  // proj label: perpendicular-offset from the shadow midpoint, on the side AWAY from a
  const bu = [b.point[0] / nb, b.point[1] / nb]
  let perp = [bu[1], -bu[0]]
  if (perp[0] * a.point[0] + perp[1] * a.point[1] > 0) perp = [-perp[0], -perp[1]]
  const projLbl = [projVec[0] / 2 + 0.62 * perp[0], projVec[1] / 2 + 0.62 * perp[1]]
  // right-angle marker at the foot of the perpendicular (only when well-defined)
  const fLen = Math.hypot(projVec[0], projVec[1])
  const dA = [a.point[0] - projVec[0], a.point[1] - projVec[1]]
  const dLen = Math.hypot(dA[0], dA[1])
  let marker = null
  if (fLen > 0.2 && dLen > 0.2) {
    const u = [dA[0] / dLen, dA[1] / dLen]
    const w = [-projVec[0] / fLen, -projVec[1] / fLen]
    const m = 0.2
    marker = [
      [projVec[0] + m * u[0], projVec[1] + m * u[1]],
      [projVec[0] + m * u[0] + m * w[0], projVec[1] + m * u[1] + m * w[1]],
      [projVec[0] + m * w[0], projVec[1] + m * w[1]]
    ]
  }
  const target = React.useContext(VizControlsCtx)
  const kl = (tex, color) => (
    <span
      style={{ color }}
      dangerouslySetInnerHTML={{ __html: katex.renderToString(tex, { throwOnError: false }) }}
    />
  )
  const cell = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }
  const cellVal = { fontFamily: 'D-DIN, sans-serif', fontSize: FONT_CONTROL, lineHeight: 1 }

  const stats = (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: '10px 0 2px',
        borderTop: `1px solid ${C.faint}`
      }}
    >
      <div style={cell}>
        {kl('\\mathbf{a}\\cdot\\mathbf{b}', C.dim)}
        <span style={{ ...cellVal, color: C.accent }}>{dot.toFixed(2)}</span>
      </div>
      <div style={cell}>
        {kl('\\theta', C.dim)}
        <span style={{ ...cellVal, color: C.fg }}>{((ang * 180) / Math.PI).toFixed(0)}°</span>
      </div>
      <div style={cell}>
        {kl('|\\mathbf{a}|\\cos\\theta', C.dim)}
        <span style={{ ...cellVal, color: C.fg }}>{shadow.toFixed(2)}</span>
      </div>
      <div style={cell}>
        {kl('|\\mathbf{b}|', C.dim)}
        <span style={{ ...cellVal, color: C.dim }}>{nb.toFixed(2)}</span>
      </div>
    </div>
  )

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
      <Mafs viewBox={{ x: [-0.6, 5.0], y: [-1.3, 3.2] }} pan={false} zoom={false} height={460}>
        <VkgCoords />
        <Polygon
          points={[[0, 0], projVec, a.point]}
          color={C.accent}
          fillOpacity={0.07}
          strokeOpacity={0}
        />
        <Plot.Parametric
          t={[angB, angA]}
          xy={u => [0.5 * Math.cos(u), 0.5 * Math.sin(u)]}
          color={cos < 0 ? C.accent : C.dim}
        />
        <Vector tail={[0, 0]} tip={b.point} color={C.dim} />
        <Line.Segment point1={a.point} point2={projVec} color={C.dim} style="dashed" />
        {marker && <Polyline points={marker} color={C.dim} />}
        <Vector tail={[0, 0]} tip={projVec} color={C.accent} weight={3} />
        <Vector tail={[0, 0]} tip={a.point} color={C.fg} />
        {a.element}
        {b.element}
        <LaTeX at={aLbl} tex="\mathbf{a}" color={C.fg} />
        <LaTeX at={bLbl} tex="\mathbf{b}" color={C.dim} />
        <LaTeX at={projLbl} tex="\text{proj}_{\mathbf{b}}\,\mathbf{a}" color={C.accent} />
      </Mafs>
      {target ? createPortal(stats, target) : stats}
      <VizCaption>
        a · b = |b| × shadow: drag a and b to cast a&apos;s shadow on the line of b
      </VizCaption>
    </div>
  )
}

// Integrate the projectile ODE to ground impact in SI units via RK4 (exact,
// no-fakery: same solver the rest of the physics core uses). Quadratic drag
// a = -drag·|v|·v is the correct high-Reynolds model, so the arc comes out
// asymmetric about its apex. Pure + synchronous so the Range viz draws the
// WHOLE arc at once and auto-frames to its real extent. State y = [x, y, vx, vy].
function integrateTrajectory(v0x, v0y, drag, g = 9.8) {
  const deriv = (_t, [, , vx, vy]) => {
    const sp = Math.hypot(vx, vy)
    return [vx, vy, -drag * sp * vx, -g - drag * sp * vy]
  }
  const pts = [[0, 0]]
  let y = [0, 0, v0x, v0y]
  const h = 0.004
  let apex = [0, 0]
  let apexT = 0
  let impactT = 0
  for (let i = 0; i < 8000; i++) {
    const prev = y
    y = rk4Step(deriv, i * h, y, h)
    if (y[1] > apex[1]) {
      apex = [y[0], y[1]]
      apexT = (i + 1) * h
    }
    if (y[1] <= 0) {
      const t = prev[1] / (prev[1] - y[1] || 1)
      pts.push([prev[0] + t * (y[0] - prev[0]), 0])
      impactT = (i + t) * h // exact flight time, interpolated to the ground crossing
      break
    }
    if (i % 4 === 0) pts.push([y[0], y[1]])
  }
  const range = pts[pts.length - 1][0]
  return { pts, range, height: apex[1], apex, apexT, impactT }
}

// 01.11.3 Projectile Range (numerical integration + mafs render)
export function Vkg_ProjectileLauncherInline() {
  const C = useVizColors()
  // The draggable handle is the launch-velocity vector itself: its angle sets θ
  // and its length sets |v₀| (divided by SV to recover SI m/s). The full arc is
  // integrated then auto-framed to fill the plot, so the SHAPE is always the
  // star: steep aim → tall + short, flat aim → long + low, drag → asymmetric.
  const SV = 0.28
  const v0Handle = useMovablePoint([1.55, 1.25], {
    color: C.accent,
    constrain: ([x, y]) => [clamp(x, 0.3, 2.5), clamp(y, 0.3, 2.0)]
  })
  const [drag, setDrag] = useState(0.02)
  const [hx, hy] = v0Handle.point
  const v0x = hx / SV
  const v0y = hy / SV
  const traj = useMemo(() => integrateTrajectory(v0x, v0y, drag), [v0x, v0y, drag])
  // Same launch with NO air resistance: a clean analytic parabola, the upper bound on
  // range and height. The gap between it and the drag arc IS what air resistance removes.
  const G = 9.8
  const tVac = (2 * v0y) / G // flight time in vacuum
  const rangeVac = v0x * tVac
  const heightVac = (v0y * v0y) / (2 * G)
  // Auto-frame to whichever trajectory is larger (always the vacuum one) so BOTH always
  // fit, with one shared factor so the parabola's TRUE aspect is never distorted.
  const SC = Math.min(
    3.6,
    7.0 / Math.max(traj.range, rangeVac, 0.1),
    2.7 / Math.max(traj.height, heightVac, 0.1)
  )
  const vacPts = Array.from({ length: 49 }, (_, i) => {
    const t = (tVac * i) / 48
    return [v0x * t * SC, (v0y * t - 0.5 * G * t * t) * SC]
  })
  const speed = Math.hypot(v0x, v0y)
  const th = Math.atan2(hy, hx)
  const angDeg = (th * 180) / Math.PI
  const ax = traj.apex[0] * SC
  const ay = traj.apex[1] * SC
  const rx = traj.range * SC
  // Angle arc swept from the +x axis to v₀, plus a label tucked inside the wedge.
  const arcR = 0.62
  const arcPts = Array.from({ length: 24 }, (_, i) => {
    const a = (th * i) / 23
    return [arcR * Math.cos(a), arcR * Math.sin(a)]
  })
  // v₀ label, pushed past the arrowhead and offset along the left-normal so it
  // never sits on the head or the rising arc.
  const hL = Math.hypot(hx, hy) || 1
  const ux = hx / hL
  const uy = hy / hL
  const vLabel = [hx + 0.16 * ux - 0.5 * uy, hy + 0.16 * uy + 0.5 * ux]
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
      <Mafs viewBox={{ x: [-0.9, 8.1], y: [-0.7, 3.3] }} pan={false} zoom={false} height={440}>
        <VkgCoords />
        {/* TERTIARY: ground reference */}
        <Line.Segment point1={[-0.9, 0]} point2={[8.1, 0]} color={C.faint} weight={1.5} />
        {/* SECONDARY: apex drop-line + height bracket, range tick, angle arc */}
        <Line.Segment point1={[ax, ay]} point2={[ax, 0]} color={C.dim} style="dashed" />
        <Line.Segment point1={[rx, -0.16]} point2={[rx, 0.16]} color={C.dim} weight={1.5} />
        <Polyline points={arcPts} color={C.dim} weight={1.5} />
        <LaTeX at={[ax + 0.42, ay / 2]} tex="H" color={C.dim} />
        <LaTeX at={[rx, -0.42]} tex="R" color={C.dim} />
        <LaTeX at={[1.04 * Math.cos(th / 2), 1.04 * Math.sin(th / 2)]} tex="\theta" color={C.dim} />
        {/* TERTIARY: the no-drag parabola (ghost). At drag ≈ 0 it sits under the solid
            arc; as drag grows it pulls ahead, exposing the range and height drag steals. */}
        {drag > 0.0005 && (
          <>
            <Polyline points={vacPts} color={C.dim} weight={1.5} strokeStyle="dashed" />
            <LaTeX
              at={[(rangeVac / 2) * SC, heightVac * SC + 0.24]}
              tex="\text{no drag}"
              color={C.faint}
            />
          </>
        )}
        {/* PRIMARY: the computed arc, apex, launch vector */}
        <Polyline points={traj.pts.map(p => [p[0] * SC, p[1] * SC])} color={C.fg} weight={3} />
        <Point x={ax} y={ay} color={C.dim} />
        <Point x={0} y={0} color={C.fg} />
        <Vector tail={[0, 0]} tip={v0Handle.point} color={C.fg} weight={3} />
        {v0Handle.element}
        <LaTeX at={vLabel} tex="\mathbf{v}_0" color={C.fg} />
      </Mafs>
      <Slider
        label="DRAG"
        value={drag}
        min={0}
        max={0.2}
        step={0.005}
        onChange={setDrag}
        format={v => v.toFixed(3)}
      />
      <VizCaption>{`drag the arrow to aim · |v₀| = ${speed.toFixed(1)} m/s · θ = ${angDeg.toFixed(0)}° · R = ${traj.range.toFixed(1)} m · H = ${traj.height.toFixed(1)} m · flight = ${traj.impactT.toFixed(2)} s`}</VizCaption>
    </div>
  )
}
function useConfig() {
  const config = {
    cssPrefix: 'vkg',
    documentTitle: 'Vectors, Kinematics, and the Galilean Structure of Space-Time - AETHER',
    learning: {
      groupTitle: 'Newtonian Mechanics',
      category: 'Module 1',
      title: 'Vectors, Kinematics, and the Galilean Structure of Space-Time',
      subtitle:
        "Vector algebra, coordinate kinematics, and the Galilean symmetry underlying Newton's equations",
      sections: [
        <>
          <h2>Why We Need Vectors in Mechanics</h2>
          <p>
            GPS uses vectors to track your position. Drone flight controllers use them for thrust.
            Aircraft autopilots use them for velocity. Game engines use them for every motion on
            screen. This module builds the language behind all of those.
          </p>
          <p>
            Newton's second law tells you how a force changes the motion of a body. Pick three
            perpendicular axes, say east, north, and up. You can then write three separate
            equations, one for each axis: {`$F_x = ma_x$`}, {`$F_y = ma_y$`}, {`$F_z = ma_z$`}. That
            works, but it hides what the law really says. Forces and motions in space have a
            direction, not just a size. A vector packs the direction in. So you can write the law
            once, in one line, as {`$F = ma$`}. It stays correct no matter how you choose the axes.
            Only the components change. The arrow itself is fixed.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What happens to Newton's second law if you rotate your axes? Does {`$F = ma$`} still
              hold?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The equation still holds. Only the components change. The vector form does not care
                which axes you drew. It lives in real space.
              </p>
            </details>
          </div>

          <h3>Real-World Lift</h3>
          <p>
            A drone hovering in wind feels three forces at once: thrust pointing up from the rotors,
            gravity pointing down, and wind pushing sideways. The flight controller does not solve
            three separate problems. It adds the three force vectors, divides by mass, and gets one
            acceleration vector. That is {`$F = ma$`} in action.
          </p>

          <p>
            Here is a preview of a tool you will build later. A single force arrow can be split into
            an along-axis part and an across-axis part, written {`$F\\cos\\theta$`} and{' '}
            {`$F\\sin\\theta$`}. The full rule for these components comes in a later section. For
            now, just watch the arrow split.
          </p>

          <VizFigure title="Force Decomposition" size="body" aspect="auto">
            <Vkg_ForceDecompInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does writing {`$F = ma$`} as one vector equation buy you anything when you could
              just write three scalar equations?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                One vector equation hides the choice of axes. Switch to a tilted frame and the same
                equation still works. The three scalar versions only hold in the axes you picked.
              </p>
              <p>
                The vector form also shortens proofs. You can prove things about real arrows in
                space, not about three columns of numbers tied to one frame.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>What a Vector Really Is</h2>
          <p>
            A vector is an arrow in space. It has two parts: a length, called the{' '}
            <strong>magnitude</strong>, and a way it points, called the <strong>direction</strong>.
            We write the magnitude as {`$|A|$`} or just {`$A$`}.
          </p>
          <p>
            One point trips up almost every beginner. A vector is{' '}
            <strong>not tied to any location.</strong> You can pick it up and move it anywhere in
            space without changing it. Two arrows are the same vector when they have the same length
            and point the same way. Where they sit makes no difference.
          </p>
          <p>
            Moving a vector without rotating it is called <strong>parallel translation</strong>. The
            vector is unchanged.
          </p>

          <h3>Real-World Lift</h3>
          <p>
            Wind forecasts give a vector at every map point: the magnitude is wind speed, the
            direction is the way air flows. GPS reports your velocity as a vector with size and
            heading. Both ideas need an arrow, not just a number.
          </p>

          <h3>The Unit Vector</h3>
          <p>
            A <strong>unit vector</strong> has magnitude one. We write the unit vector along {`$A$`}{' '}
            as {`$\\hat{A}$`}. The recipe is simple: divide {`$A$`} by its own magnitude. You can
            rebuild the original by stretching the unit vector back out.
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\hat{A} = \\frac{A}{|A|}$$`}</div>
          <div className="lrn-eq">{`$$A = |A|\\, \\hat{A}$$`}</div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does dividing a vector by its magnitude always give a vector of length one?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Magnitude scales linearly. If $A$ has length $L$, then $\\frac{A}{L}$ has length $\\frac{L}{L} = 1$.`}
              </p>
              <p>
                The direction is unchanged because dividing by a positive number does not flip it.
              </p>
            </details>
          </div>

          <p>
            A note for later. Most vectors in this module are free arrows: forces, velocities,
            displacements. You can slide them around without changing them. One special case behaves
            differently: the <strong>position vector</strong>. A position vector points from the
            origin to a particle, so it is tied to whatever you picked as the origin. We will deal
            with this when we get to position. For now, treat every vector as a free arrow unless we
            say otherwise.
          </p>
        </>,

        <>
          <h2>The Algebra of Vectors</h2>
          <p>
            You can add vectors, subtract them, and multiply them by numbers. These operations
            always give you new vectors. A swimmer crossing a river adds her velocity to the
            current's velocity. An aircraft adds its airspeed to a headwind. Vector algebra is the
            tool for both.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>What do you get when you add a vector to its negative, {`$A + (-A)$`}?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The zero vector. Magnitude zero, direction undefined. The two arrows cancel tip to
                tail.
              </p>
            </details>
          </div>

          <h3>Multiplication by a Scalar</h3>
          <p>
            If {`$b$`} is a number and {`$A$`} is a vector, then {`$C = bA$`} is a new vector. Its
            magnitude is {`$|C| = b|A|$`}. For example, {`$3A$`} triples the arrow. Its direction
            matches {`$A$`} when {`$b$`} is positive and flips when {`$b$`} is negative.
          </p>

          <h3>Adding Two Vectors Head-to-Tail</h3>
          <p>
            To add {`$A$`} and {`$B$`}, slide the tail of {`$B$`} to the head of {`$A$`}. Draw a new
            arrow from the tail of {`$A$`} to the head of {`$B$`}. That arrow is {`$A + B$`}.
          </p>
          <p>
            You get the same answer if you slide {`$A$`} to the head of {`$B$`}. Both ways produce
            the same parallelogram with the same diagonal, and that diagonal is the sum. So vector
            addition is <strong>commutative</strong>: {`$A + B = B + A$`}. It is also{' '}
            <strong>associative</strong>: {`$(A + B) + C = A + (B + C)$`}.
          </p>

          <VizFigure title="Vector Addition" size="compact" aspect="auto">
            <Vkg_VecAdditionInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does adding {`$A + B$`} give the same arrow as {`$B + A$`} even though you start
              from different sides of the parallelogram?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Both walks end at the same far corner of the same parallelogram. Going first along{' '}
                {`$A$`} then along {`$B$`} reaches the corner. Going first along {`$B$`} then along{' '}
                {`$A$`} reaches the same corner.
              </p>
              <p>
                The diagonal that connects the start to the corner is the same arrow either way.
                That arrow is the sum.
              </p>
            </details>
          </div>

          <h4>Worked example: associativity of vector addition</h4>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Show $(A + B) + C = A + (B + C)$ by head-to-tail walking.`}</p>
              <ol className="lrn-list">
                <li>{`Walk from origin along $A$ to a point $P_1$.`}</li>
                <li>{`From $P_1$ walk along $B$ to a point $P_2$.`}</li>
                <li>{`From $P_2$ walk along $C$ to a point $P_3$.`}</li>
                <li>{`The total arrow from origin to $P_3$ is $(A + B) + C$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Now group the other way. Walk from origin along $A$, then add the combined arrow $B + C$.`}</p>
              <ol className="lrn-list">
                <li>{`Walk from origin along $A$ to a point $P_1$.`}</li>
                <li>{`From $P_1$ walk along the combined arrow $\\rule{1cm}{0.5pt}$ to a point $P_3'$.`}</li>
                <li>{`Argue that $P_3'$ equals $P_3$ from the first walk.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>
                {`Take $A = (2, 1, 3)$, $B = (1, 4, 0)$, $C = (5, 2, 1)$. Compute $(A + B) + C$ and $A + (B + C)$ in components. Both routes should give $(8, 7, 4)$.`}
              </p>
            </div>
          </div>

          <h3>Subtracting Two Vectors</h3>
          <p>To subtract, flip the second vector and add. So {`$A - B = A + (-B)$`}.</p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch Out</span>
            <p>
              {`Adding two velocities at an angle gives a sum smaller than $|A| + |B|$. Only when they point the same way does the sum equal the arithmetic sum.`}
            </p>
            <p>
              A swimmer at 1 m/s across a 1 m/s current does not move at 2 m/s. The diagonal of the
              parallelogram is shorter than two arms laid end to end.
            </p>
          </div>
        </>,

        <>
          <h2>The Dot Product</h2>
          <p>
            The <strong>dot product</strong> turns two vectors into a single number. We also call it
            the <strong>scalar product</strong>. Physicists use it to compute work done by a force.
            Game developers use it to find lighting angles on surfaces. Robotics engineers use it to
            project sensor readings onto motion axes.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              What does the dot product give when two vectors point the same way? When they are
              perpendicular?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Same way: $A \\cdot B = |A||B|$, the maximum. Perpendicular: $A \\cdot B = 0$.`}</p>
            </details>
          </div>

          <p>
            Imagine the sun directly overhead, with vector {`$A$`} lying flat on the ground. The
            vector {`$B$`} casts a <strong>shadow</strong> onto the line of {`$A$`}. The length of
            that shadow is {`$|B|\\cos\\theta$`}, where {`$\\theta$`} is the angle between the two
            vectors. Multiply that shadow length by the full length of {`$A$`} and you get the dot
            product:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$A \\cdot B = |A|\\,|B|\\, \\cos\\theta$$`}</div>
          <p>
            {`$|A|$`} is the length of the first vector. {`$|B|$`} is the length of the second.{' '}
            {`$\\theta$`} is the angle between them, measured from one to the other. The result is a
            plain number, not a vector.
          </p>
          <div className="lrn-eq">{`$$A \\cdot B = |A| \\times (\\text{shadow of } B \\text{ along } A)$$`}</div>

          <VizFigure title="Dot Product & Projection" size="body" aspect="auto">
            <Vkg_DotProductInteractiveInline />
          </VizFigure>

          <p>A vector dotted with itself gives its magnitude squared.</p>
          <div className="lrn-eq">{`$$A \\cdot A = |A|^2$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Plug $B = A$ into the definition. The angle is zero, so $\\cos 0 = 1$.`}</p>
            <p>{`You get $|A| \\cdot |A| \\cdot 1 = |A|^2$.`}</p>
          </div>

          <h3>The Law of Cosines from Vector Algebra</h3>
          <p>
            Take a triangle with sides {`$A$`}, {`$B$`}, and {`$C$`}, where the third side closes
            the triangle: {`$C = A - B$`}. Let {`$\\theta$`} be the interior angle of the triangle
            at the vertex where {`$A$`} and {`$B$`} meet. Square the length of {`$C$`} using the dot
            product.
          </p>
          <div className="lrn-proof">
            <span className="lrn-proof-header">Derivation</span>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">1.</span>
              <div className="lrn-proof-step-content">{`$$|C|^2 = (A - B) \\cdot (A - B)$$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">2.</span>
              <div className="lrn-proof-step-content">{`$$|C|^2 = |A|^2 + |B|^2 - 2 A \\cdot B$$`}</div>
            </div>
            <div className="lrn-proof-step">
              <span className="lrn-proof-step-num">3.</span>
              <div className="lrn-proof-step-content">{`$$|C|^2 = |A|^2 + |B|^2 - 2|A||B|\\cos\\theta$$`}</div>
            </div>
            <div className="lrn-qed">Q.E.D.</div>
          </div>
          <p>
            That is the <strong>law of cosines</strong>.
          </p>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the cross term {`$2 A \\cdot B$`} appear when you square the sum of two
              vectors, but not when you square a single number?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`The cross term is always there. For numbers, $(a+b)^2 = a^2 + 2ab + b^2$ has the same $2ab$ term.`}
              </p>
              <p>
                The dot product is the vector cousin of the product. So {`$2 A \\cdot B$`} is the
                vector cross term.
              </p>
            </details>
          </div>

          <h3>Work and the Dot Product</h3>
          <p>
            A force {`$F$`} pushing through a displacement {`$d$`} does <strong>work</strong>. Only
            the part of force along the motion contributes. The dot product picks that part
            automatically.
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$W = (F \\cos\\theta)\\, d = F \\cdot d$$`}</div>

          <VizFigure title="Dot Product · Work" size="body" aspect="auto">
            <Vkg_DotWorkInline />
          </VizFigure>
        </>,

        <>
          <h2>The Cross Product</h2>
          <p>
            The <strong>cross product</strong> turns two vectors into a third vector. We also call
            it the <strong>vector product</strong>. It shows up whenever two directions combine to
            point along a third axis. The torque you feel on a wrench. The force on a current in a
            motor. The lift force on a spinning ball.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>If two vectors point the same way, what is the size of their cross product?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`Zero. The angle is $0$, so $\\sin 0 = 0$, so the magnitude is zero.`}</p>
            </details>
          </div>

          <p>Why does the result point perpendicular to both vectors? Reason it out in steps.</p>
          <ul className="lrn-list">
            <li>
              The only ingredients are {`$A$`}, {`$B$`}, and the geometry of space.
            </li>
            <li>
              Two natural directions are tied to the vectors: along {`$A$`}, and along {`$B$`}.
            </li>
            <li>
              Suppose the result pointed along {`$A$`}. Swapping the two vectors must flip the
              result. But it would still point along {`$A$`}. So {`$A$`} is ruled out. The same
              logic rules out {`$B$`}.
            </li>
            <li>
              The only direction left, picked out by neither vector alone, is perpendicular to both.
              That is where the result points.
            </li>
          </ul>
          <p>The formula captures this:</p>

          <p>If {`$C = A \\times B$`}, then the magnitude is</p>
          <div className="lrn-eq lrn-eq-display">{`$$|C| = |A|\\,|B|\\, \\sin\\theta$$`}</div>
          <p>
            {`$|A|$`} and {`$|B|$`} are the lengths of the two vectors. {`$\\theta$`} is the angle
            between them. The magnitude equals the area of the parallelogram they span, because{' '}
            {`$|A||B|\\sin\\theta$`} is exactly the base times the height of that parallelogram.
          </p>
          <p>
            The direction of {`$C$`} is perpendicular to both. Two perpendicular sides are possible.
            To pick which one, use the <strong>right-hand rule</strong>. Curl the fingers of your
            right hand from {`$A$`} toward {`$B$`}. Your thumb points along {`$C$`}. This convention
            is <strong>purely human.</strong> There is nothing physically special about the right
            hand. Left-handed coordinates are equally valid. Everyone agrees to use the right hand
            so that formulas look the same everywhere.
          </p>
          <p>
            One thing to flag for later. Vectors built from a cross product (like torque) flip sign
            when you look at the world in a mirror. They behave differently from ordinary vectors
            like velocity. Physicists call them <strong>pseudovectors</strong>: a pseudovector flips
            sign under a mirror, unlike an ordinary vector. You will meet them properly when you
            study angular momentum. For now, just know the cross product produces a slightly special
            kind of vector.
          </p>

          <VizFigure title="Cross Product" size="body" aspect="auto">
            <Vkg_CrossProductInline />
          </VizFigure>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch Out</span>
            <p>
              Always use your right hand consistently. Switching to your left hand flips the sign.
            </p>
            <p>This is the most common error when first learning torque and magnetic force.</p>
          </div>

          <p>
            The cross product is <strong>anticommutative</strong>. A vector crossed with itself is
            zero.
          </p>
          <div className="lrn-eq">{`$$B \\times A = -A \\times B,\\qquad A \\times A = 0$$`}</div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does {`$\\sin\\theta$`} in the cross product give zero when vectors are parallel,
              while {`$\\cos\\theta$`} in the dot product gives the maximum?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Parallel vectors share a direction. Cosine measures how aligned two arrows are, so{' '}
                {`$\\cos 0 = 1$`} gives the largest dot product.
              </p>
              <p>
                Sine measures the perpendicular spread between them. Two parallel arrows have no
                spread, so {`$\\sin 0 = 0$`} gives the smallest cross product.
              </p>
            </details>
          </div>

          <h3>Dot Product vs Cross Product</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Dot Product</span>
              <p>{`Largest when parallel, zero when perpendicular. Uses $\\cos\\theta$. Returns a scalar.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Cross Product</span>
              <p>{`Zero when parallel, largest when perpendicular. Uses $\\sin\\theta$. Returns a vector.`}</p>
            </div>
          </div>
          <p>
            Pick by what you need. For a vector result use the cross product: torque is a vector.
            For a number use the dot product: work is a number.
          </p>

          <h3>Cross Product in Physics</h3>
          <p>
            A charged particle moving with velocity {`$v$`} in a magnetic field {`$B$`} feels a
            force. A force {`$F$`} that acts at position {`$r$`} from a pivot creates a{' '}
            <strong>torque</strong>. Both quantities use cross products.
          </p>
          <div className="lrn-eq">{`$$F = q\\, v \\times B,\\qquad \\tau = r \\times F$$`}</div>

          <p>
            A force is special: it acts along a whole line, not at a single point. You can slide it
            anywhere along that line of action and the torque about a fixed pivot does not change.
            The moment is the area of the parallelogram spanned by {`$r$`} and {`$F$`}, which equals{' '}
            {`$|F|$`} times the perpendicular distance {`$d$`} to the line. Sliding the force shears
            that parallelogram without changing its base or its height, so the area, and the torque,
            stay fixed.
          </p>

          <VizFigure title="Sliding Vector · Torque" size="body" aspect="auto">
            <Vkg_SlidingVectorInline />
          </VizFigure>

          <h3>Area as a Vector</h3>
          <p>
            A parallelogram with edge vectors {`$C$`} and {`$D$`} has area {`$CD \\sin\\theta$`}. We
            can package this area together with the orientation into a single area vector. The
            direction is the normal to the parallelogram. The magnitude is the area.
          </p>
          <div className="lrn-eq">{`$$A = C \\times D$$`}</div>
        </>,

        <>
          <h2>Components of a Vector</h2>
          <p>
            You can describe a vector by three numbers along three axes. These numbers are the{' '}
            <strong>components</strong>. Smartphone accelerometers report {`$(a_x, a_y, a_z)$`} a
            thousand times a second. Construction-site total stations track positions as{' '}
            {`$(x, y, z)$`} tuples. Components turn geometry into arithmetic.
          </p>
          <div className="lrn-eq">{`$$A = (A_x, A_y, A_z)$$`}</div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you rotate the axes, what happens to the components of a fixed vector? Does{' '}
              {`$|A|$`} change?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The components change. The magnitude stays the same. The arrow itself does not move.
              </p>
            </details>
          </div>

          <VizFigure title="Components Under Rotation" size="body" aspect="auto">
            <Vkg_ComponentsRotationInline />
          </VizFigure>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY DO COMPONENTS WORK?</span>
            <p>
              Pick two perpendicular axes. Every vector in the plane casts one shadow on each axis.
              Those two shadow lengths are the components. Two claims need checking: the components
              rebuild the vector, and they do so in only one way.
            </p>
            <p>
              The rebuild is the head-to-tail rule applied backwards: walk along the first axis by
              the first component, then along the second axis by the second component, and you
              arrive at the tip of the original vector.
            </p>
            <p>
              Uniqueness is also short. Suppose two different pairs of components produced the same
              vector. Subtract one pair from the other. The difference is the zero vector, which has
              zero shadow on every axis. So the two pairs were equal to begin with. Components are a
              one-to-one label for vectors.
            </p>
          </div>

          <p>The magnitude follows from the Pythagorean theorem in three dimensions.</p>
          <div className="lrn-eq lrn-eq-display">{`$$|A| = \\sqrt{A_x^2 + A_y^2 + A_z^2}$$`}</div>
          <p>{`The angle from the $x$-axis in 2D follows from`}</p>
          <div className="lrn-eq">{`$$\\theta = \\arctan\\!\\left(\\frac{A_y}{A_x}\\right)$$`}</div>

          <h3>Geometric View vs Component View</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Arrows</span>
              <p>Best for proofs and quick reasoning about angles.</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Components</span>
              <p>Best for plugging numbers into a formula.</p>
            </div>
          </div>
          <p>
            Both describe the same vector. The components depend on the axes you chose. The vector
            itself does not. The vector is a real arrow in space: rotating the axes only relabels
            the numbers, and the arrow stays put. If {`$A = B$`} in one frame, then {`$A = B$`} in
            every frame.
          </p>

          <h3>Working with Components</h3>
          <p>Adding by components is easy. The dot product also reduces to a sum.</p>
          <div className="lrn-eq">{`$$A + B = (A_x + B_x,\\ A_y + B_y,\\ A_z + B_z)$$`}</div>
          <div className="lrn-eq">{`$$A \\cdot B = A_x B_x + A_y B_y + A_z B_z$$`}</div>

          <h3>Vector Algebra Worked Through</h3>
          <p>
            Take {`$A = (3, 5, -7)$`} and {`$B = (2, 7, 1)$`}.
          </p>
          <ul className="lrn-list">
            <li>{`The sum is $A + B = (5, 12, -6)$.`}</li>
            <li>{`The magnitude of $A$ is $|A| = \\sqrt{9 + 25 + 49} = \\sqrt{83}$.`}</li>
            <li>{`The magnitude of $B$ is $|B| = \\sqrt{4 + 49 + 1} = \\sqrt{54}$.`}</li>
            <li>{`The dot product is $A \\cdot B = 6 + 35 - 7 = 34$.`}</li>
            <li>{`The angle satisfies $\\cos\\theta = \\frac{34}{\\sqrt{83 \\cdot 54}}$.`}</li>
          </ul>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the dot product reduce to a single sum of products, even though the geometric
              definition uses an angle?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The basis vectors are perpendicular and length one. Cross terms with different basis
                vectors vanish because their dot products are zero.
              </p>
              <p>Only matched terms survive. That leaves a clean sum of products.</p>
            </details>
          </div>
        </>,

        <>
          <h2>Base Vectors</h2>
          <p>
            A <strong>base vector</strong> has length one and points along a coordinate axis. The
            cartesian base vectors are {`$\\hat{i}$`}, {`$\\hat{j}$`}, and {`$\\hat{k}$`}. Computer
            graphics rotates objects by combining rotations around base axes. Robot arm joints store
            their orientation as base-vector frames at each link.
          </p>

          <VizFigure title="Base Vectors" size="body" aspect="auto">
            <Vkg_BaseVectorsInline />
          </VizFigure>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              Do {`$\\hat{i} \\times \\hat{j}$`} and {`$\\hat{j} \\times \\hat{i}$`} give the same
              vector? If not, how do they differ?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>{`They differ by a sign: $\\hat{i} \\times \\hat{j} = \\hat{k}$ and $\\hat{j} \\times \\hat{i} = -\\hat{k}$.`}</p>
            </details>
          </div>

          <VizFigure title="Cross Antisymmetry" size="body" aspect="auto">
            <Vkg_CrossAntisymInline />
          </VizFigure>

          <p>
            One important thing to say up front: {`$\\hat{i}$`}, {`$\\hat{j}$`}, and {`$\\hat{k}$`}{' '}
            are <strong>not physically special.</strong> They are a convenient toolkit, nothing
            more. You can choose any three perpendicular directions as your base vectors and the
            physics stays exactly the same. Textbooks use {`$\\hat{i}$`}, {`$\\hat{j}$`},{' '}
            {`$\\hat{k}$`} by convention, not because nature prefers east, north, and up.
          </p>

          <p>Any vector can be written as</p>
          <div className="lrn-eq lrn-eq-display">{`$$A = A_x\\,\\hat{i} + A_y\\,\\hat{j} + A_z\\,\\hat{k}$$`}</div>
          <p>The base vectors satisfy clean dot product rules.</p>
          <div className="lrn-eq">
            <span>{`$$\\hat{i}\\cdot\\hat{i} = \\hat{j}\\cdot\\hat{j} = \\hat{k}\\cdot\\hat{k} = 1$$`}</span>
            <span>{`$$\\hat{i}\\cdot\\hat{j} = \\hat{j}\\cdot\\hat{k} = \\hat{k}\\cdot\\hat{i} = 0$$`}</span>
          </div>
          <p>They also satisfy clean cross product rules.</p>
          <div className="lrn-eq">{`$$\\hat{i} \\times \\hat{j} = \\hat{k},\\quad \\hat{j}\\times\\hat{k} = \\hat{i},\\quad \\hat{k}\\times\\hat{i} = \\hat{j}$$`}</div>
          <p>
            This pattern is the <strong>right-hand triple</strong>. A coordinate system that obeys
            these rules is a <strong>right-handed coordinate system</strong>.
          </p>

          <p>A component is just a dot product.</p>
          <div className="lrn-eq">{`$$A_z = A \\cdot \\hat{k}$$`}</div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`Dot $A = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k}$ with $\\hat{k}$.`}</p>
            <p>{`Only the $\\hat{k}\\cdot\\hat{k}$ term survives. The result is $A_z$.`}</p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the cyclic rule {`$\\hat{i}\\times\\hat{j}=\\hat{k}$`},{' '}
              {`$\\hat{j}\\times\\hat{k}=\\hat{i}$`}, {`$\\hat{k}\\times\\hat{i}=\\hat{j}$`} work in
              this exact order?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                The cyclic order matches the right-hand rule. Fingers from {`$\\hat{i}$`} to{' '}
                {`$\\hat{j}$`} curl with the thumb pointing along {`$\\hat{k}$`}.
              </p>
              <p>
                Shift one step: from {`$\\hat{j}$`} to {`$\\hat{k}$`} the thumb points along{' '}
                {`$\\hat{i}$`}. The pattern is the same right hand rotated to a new pair.
              </p>
            </details>
          </div>

          <h3>Cross Product as a Determinant</h3>
          <p>You can write the cross product as a determinant of base vectors.</p>
          <div className="lrn-eq">{`$$A \\times B = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix}$$`}</div>
          <p>Expanding gives</p>
          <div className="lrn-eq">{`$$A \\times B = \\hat{i}(A_y B_z - A_z B_y) - \\hat{j}(A_x B_z - A_z B_x) + \\hat{k}(A_x B_y - A_y B_x)$$`}</div>

          <h4>Worked example: cross product of (1, 2, 3) and (4, 5, 6)</h4>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Compute $A \\times B$ for $A = (1, 2, 3)$ and $B = (4, 5, 6)$ via the determinant.`}</p>
              <ol className="lrn-list">
                <li>{`Cofactor of $\\hat{i}$: $A_y B_z - A_z B_y = 2 \\cdot 6 - 3 \\cdot 5 = -3$.`}</li>
                <li>{`Cofactor of $\\hat{j}$: $-(A_x B_z - A_z B_x) = -(1 \\cdot 6 - 3 \\cdot 4) = 6$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Now compute the cofactor of $\\hat{k}$.`}</p>
              <ol className="lrn-list">
                <li>{`Apply $A_x B_y - A_y B_x = \\rule{1cm}{0.5pt}$.`}</li>
                <li>{`Plug $A_x = 1, B_y = 5, A_y = 2, B_x = 4$ and simplify.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`Assemble the full vector $A \\times B$ from your three cofactors.`}</p>
            </div>
          </div>
          <p>
            A quick check: {`$A \\cdot (A \\times B) = -3 + 12 - 9 = 0$`}, and{' '}
            {`$B \\cdot (A \\times B) = -12 + 30 - 18 = 0$`}. The result is perpendicular to both,
            as it must be.
          </p>
        </>,

        <>
          <h2>Position, Displacement, and the Coordinate System</h2>
          <p>
            The <strong>position vector</strong> {`$r$`} points from the origin to a particle. Tesla
            Autopilot tracks every nearby car as a position vector. Land surveyors set an origin and
            measure positions from it. Both ideas need a chosen origin.
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$r = (x, y, z) = x\\hat{i} + y\\hat{j} + z\\hat{k}$$`}</div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you change the origin, what happens to the position vector? What stays the same?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                The position vector shifts. The displacement between any two points stays the same.
              </p>
            </details>
          </div>

          <VizFigure title="Displacement Origin Invariance" size="body" aspect="auto">
            <Vkg_DisplacementInvariantInline />
          </VizFigure>

          <p>
            Position depends on origin. If a new origin sits at {`$R$`} from the old one, the new
            position is
          </p>
          <div className="lrn-eq">{`$$r' = r - R$$`}</div>
          <p>
            <strong>Displacement</strong> {`$S$`} is the change in position. Unlike position,
            displacement does not depend on origin.
          </p>

          <h3>Position vs Displacement</h3>
          <div className="lrn-compare">
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Position</span>
              <p>{`The position vector $r$ tells you where a particle is, measured from the origin you picked.`}</p>
              <p>{`Move the origin and $r$ shifts.`}</p>
            </div>
            <div className="lrn-compare-col">
              <span className="lrn-compare-title">Displacement</span>
              <p>{`The displacement $S$ tells you how far and in what direction it moved between two moments.`}</p>
              <p>{`$S$ does not depend on origin.`}</p>
            </div>
          </div>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>
              {`Displacement is the difference $S = r_2 - r_1$. Shift the origin by $R$ and both positions become $r_1' = r_1 - R$ and $r_2' = r_2 - R$.`}
            </p>
            <p>
              {`The shift $R$ cancels in the subtraction, leaving $S$ unchanged. Position depends on origin; the difference of positions does not.`}
            </p>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does displacement not depend on the origin you choose, even though position does?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                Position is an arrow from origin to particle. Move the origin and that arrow moves.
                Displacement is an arrow from one particle position to another particle position.
              </p>
              <p>
                The two endpoints of the displacement arrow both shift by the same {`$R$`} when you
                pick a new origin. So the arrow between them is the same.
              </p>
            </details>
          </div>

          <p>
            This distinction is not bookkeeping. It is one of the deepest facts in classical
            physics. No experiment can tell you the absolute position of anything. Only differences
            between positions are measurable, and only those differences appear in physical laws.
            Position is a label you choose. Displacement is real. We will use this fact in the last
            section of this module to derive the form of Newton's second law from scratch.
          </p>
        </>,

        <>
          <h2>The Derivative of a Vector</h2>
          <p>
            When a scalar changes, only one thing can happen: it gets bigger or smaller. When a
            vector changes, two things can happen independently: its length can change, and its
            direction can change. A vector with fixed length can still have a nonzero derivative if
            it is rotating. A scalar with fixed value always has a zero derivative.
          </p>
          <p>
            The formal definition looks the same as the scalar case, but the subtraction is vector
            subtraction:
          </p>
          <div className="lrn-eq">{`$$\\frac{dA}{dt} = \\lim_{\\Delta t \\to 0} \\frac{A(t + \\Delta t) - A(t)}{\\Delta t}$$`}</div>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If a vector keeps the same length but rotates, what direction does its derivative
              point?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>The derivative is perpendicular to the vector. Sideways, never along.</p>
            </details>
          </div>

          <h3>Splitting Magnitude Change and Direction Change</h3>
          <p>
            Suppose the magnitude stays constant and only the direction rotates. Picture two arrows
            of length {`$A$`}, drawn from the same tail, with angle {`$\\Delta\\theta$`} between
            them. The straight line joining their tips is a chord. The circle has radius {`$A$`}.
            From basic trigonometry, that chord has length{' '}
            {`$2A \\sin\\!\\left(\\frac{\\Delta\\theta}{2}\\right)$`}.
          </p>
          <div className="lrn-eq">{`$$|\\Delta A| = 2 A \\sin\\!\\left(\\frac{\\Delta\\theta}{2}\\right) \\approx A\\, \\Delta\\theta$$`}</div>
          <p>
            The last step uses {`$\\sin x \\approx x$`} for small angles. The Approximation Methods
            section later shows why this holds.
          </p>
          <p>So the rate of change has size {`$A$`} times the rotation rate.</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\left|\\frac{dA}{dt}\\right| = A\\, \\frac{d\\theta}{dt}$$`}</div>
          <p>
            {`For a constant-magnitude vector, $\\frac{dA}{dt}$ is perpendicular to $A$ itself.`}
          </p>

          <VizFigure title="Rotating Vector Chord" size="body" aspect="auto">
            <Vkg_RotatingChordInline />
          </VizFigure>

          <div className="lrn-elaborate">
            <span className="lrn-elaborate-label">WHY IS THIS TRUE?</span>
            <p>{`The change $\\Delta A$ closes the gap between $A(t)$ and $A(t+\\Delta t)$.`}</p>
            <p>
              For tiny rotations, this gap is a chord across a small arc. The chord lies almost
              perpendicular to the radius.
            </p>
          </div>

          <h4>Worked example: derivative of a constant-magnitude vector</h4>
          <div className="lrn-faded">
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">COMPLETE EXAMPLE</span>
              <p>{`Derive $\\left|\\frac{dA}{dt}\\right| = A\\, \\frac{d\\theta}{dt}$ from the chord formula.`}</p>
              <ol className="lrn-list">
                <li>{`Start with the chord-length formula $|\\Delta A| = 2A \\sin\\!\\left(\\frac{\\Delta\\theta}{2}\\right)$.`}</li>
                <li>{`Note that for small angles, $\\sin x \\approx x$, so $\\sin\\!\\left(\\frac{\\Delta\\theta}{2}\\right) \\approx \\frac{\\Delta\\theta}{2}$.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase lrn-faded-partial">
              <span className="lrn-faded-label">YOUR TURN: PARTIAL</span>
              <p>{`Substitute the small-angle limit into the chord formula.`}</p>
              <ol className="lrn-list">
                <li>{`Substitute to get $|\\Delta A| \\approx 2A \\cdot \\rule{1cm}{0.5pt}$.`}</li>
                <li>{`Divide both sides by $\\Delta t$ and take the limit.`}</li>
              </ol>
            </div>
            <div className="lrn-faded-phase">
              <span className="lrn-faded-label">INDEPENDENT PRACTICE</span>
              <p>{`State the result and explain why it gives the speed $|v| = r\\omega$ for a particle on a circle of radius $r$.`}</p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why are the parallel and perpendicular parts of a vector derivative independent?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A vector can stretch without rotating. Or it can rotate without stretching. Or it
                can do both at once. Each motion contributes to a different piece of the derivative.
              </p>
              <p>
                The parallel part comes only from stretching. The perpendicular part comes only from
                rotating. Either part can be zero while the other is nonzero.
              </p>
            </details>
          </div>

          <h3>Decomposing the Derivative</h3>
          <p>For a general vector, split the change into parts.</p>
          <div className="lrn-eq">{`$$\\left|\\frac{dA_\\perp}{dt}\\right| = A\\, \\frac{d\\theta}{dt},\\qquad \\left|\\frac{dA_\\parallel}{dt}\\right| = \\frac{dA}{dt}$$`}</div>
          <p>
            The perpendicular part comes from rotation. The parallel part comes from stretching.
          </p>

          <h3>Product Rules for Vector Derivatives</h3>
          <p>
            The product rules look like the scalar version. For a scalar {`$c$`} times a vector{' '}
            {`$A$`}, for a dot product, and for a cross product:
          </p>
          <div className="lrn-eq">{`$$\\frac{d(cA)}{dt} = \\frac{dc}{dt} A + c\\frac{dA}{dt}$$`}</div>
          <div className="lrn-eq">{`$$\\frac{d(A \\cdot B)}{dt} = \\frac{dA}{dt} \\cdot B + A \\cdot \\frac{dB}{dt}$$`}</div>
          <div className="lrn-eq">{`$$\\frac{d(A \\times B)}{dt} = \\frac{dA}{dt} \\times B + A \\times \\frac{dB}{dt}$$`}</div>
          <p>
            In the cross product version, order matters because the cross product is
            anticommutative.
          </p>
          <p>A useful corollary uses self-dot.</p>
          <div className="lrn-eq">{`$$\\frac{d(A^2)}{dt} = 2 A \\cdot \\frac{dA}{dt}$$`}</div>
        </>,

        <>
          <h2>Velocity and Acceleration</h2>
          <p>
            Motion lives in time. We get velocity and acceleration by taking time derivatives of
            position. Spacecraft trajectory planners do this thousands of times per orbit. Car
            braking systems use it to predict stopping distance. Sports analysts use it to model a
            ball's flight.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>If a particle's speed {`$|v|$`} stays constant, is the acceleration zero?</p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                Acceleration can still be nonzero. Direction can change without speed changing.
                Circular motion is the classic case.
              </p>
            </details>
          </div>

          <h3>Motion in One Dimension</h3>
          <p>
            The <strong>average velocity</strong> between two times is the change in position
            divided by the time gap. The <strong>instantaneous velocity</strong> is the limit as the
            gap shrinks.
          </p>
          <div className="lrn-eq">{`$$\\bar{v} = \\frac{x(t_2) - x(t_1)}{t_2 - t_1}$$`}</div>
          <div className="lrn-eq">{`$$v = \\lim_{\\Delta t \\to 0} \\frac{x(t + \\Delta t) - x(t)}{\\Delta t} = \\frac{dx}{dt}$$`}</div>
          <p>
            The <strong>acceleration</strong> is the rate of change of velocity. The{' '}
            <strong>speed</strong> is the size of velocity.
          </p>
          <div className="lrn-eq">{`$$a = \\frac{dv}{dt},\\qquad s = |v|$$`}</div>

          <h3>Motion in Several Dimensions</h3>
          <p>
            In 2D the position is a vector {`$r(t) = [x(t), y(t)]$`}. Velocity and acceleration
            follow the same idea, component by component.
          </p>
          <div className="lrn-eq">{`$$v = \\frac{dr}{dt} = \\frac{dx}{dt}\\hat{i} + \\frac{dy}{dt}\\hat{j} + \\frac{dz}{dt}\\hat{k}$$`}</div>
          <div className="lrn-eq">{`$$a = \\frac{dv}{dt} = \\frac{d^2 r}{dt^2}$$`}</div>

          <h3>Uniform Circular Motion Worked Through</h3>
          <p>
            Take {`$r = r(\\cos\\omega t\\,\\hat{i} + \\sin\\omega t\\,\\hat{j})$`}. Here {`$r$`} is
            a constant radius and {`$\\omega$`} is the angular frequency. Differentiate.
          </p>
          <div className="lrn-eq">{`$$v = r\\omega(-\\sin\\omega t\\,\\hat{i} + \\cos\\omega t\\,\\hat{j}),\\quad |v| = r\\omega$$`}</div>
          <p>Differentiate again to get acceleration.</p>
          <div className="lrn-eq lrn-eq-display">{`$$a = -r\\omega^2(\\cos\\omega t\\,\\hat{i} + \\sin\\omega t\\,\\hat{j}) = -\\omega^2 r$$`}</div>
          <p>
            This is the <strong>centripetal acceleration</strong>. It points from the particle
            toward the center. Its magnitude is {`$\\omega^2 r$`}.
          </p>
          <p>
            Why does it point inward? The velocity vector has constant length but sweeps in a
            circle, just as the position vector does. The tip of the velocity vector traces a
            circle. The derivative of the velocity vector is therefore a vector pointing toward the
            center of that circle, which is the origin. Acceleration is inward because the velocity
            arrow itself rotates inward, toward where it came from.
          </p>

          <VizFigure title="Uniform Circular Motion" size="body" aspect="auto">
            <Vkg_UCMInline />
          </VizFigure>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>
              Why does the acceleration in uniform circular motion point exactly opposite to the
              position vector?
            </p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                {`Differentiating $r$ twice gives $a = -\\omega^2 r$. The minus sign reverses the direction. The factor $\\omega^2$ scales the magnitude.`}
              </p>
              <p>
                The geometric reason: velocity is always perpendicular to position, and as the
                particle moves forward, that perpendicular arrow rotates. The rate of rotation of
                the velocity vector points back toward the center, which is the {`$-\\hat{r}$`}{' '}
                direction.
              </p>
            </details>
          </div>
        </>,

        <>
          <h2>Formal Solution of Kinematic Equations</h2>
          <p>
            The reasoning runs in two steps. Newton's second law tells you the acceleration at every
            instant. If you know how velocity changes (the acceleration), integrating it gives you
            the velocity. If you know how position changes (the velocity), integrating again gives
            you the position.
          </p>
          <p>
            Each integration introduces a free constant. The first integration (to get velocity)
            introduces {`$v_0$`}, the initial velocity. The second (to get position) introduces{' '}
            {`$r_0$`}, the initial position. You must specify both because knowing the acceleration
            history alone leaves infinitely many possible trajectories, one for each choice of
            starting point and starting speed.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              If you know acceleration as a function of time, what extra information lets you find
              the exact position later?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                You need the initial position and the initial velocity. Two integrations each add
                one free constant, so two initial conditions pin them down.
              </p>
            </details>
          </div>

          <div className="lrn-eq">{`$$v(t) = v_0 + \\int_{t_0}^{t} a(t')\\, dt'$$`}</div>
          <div className="lrn-eq">{`$$r(t) = r_0 + \\int_0^t v(t')\\, dt'$$`}</div>

          <h3>Constant-Acceleration Special Case</h3>
          <p>{`When $a$ is constant in time, the integrals are easy.`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$v(t) = v_0 + a t$$`}</div>
          <div className="lrn-eq lrn-eq-display">{`$$r(t) = r_0 + v_0 t + \\tfrac{1}{2} a t^2$$`}</div>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Warning</span>
            <p>{`These two formulas are special. They only hold when $a$ stays constant.`}</p>
          </div>

          <h3>Motion in a Uniform Gravitational Field</h3>
          <p>
            Take {`$a = -g\\hat{k}$`} with initial velocity{' '}
            {`$v_0 = v_{0x}\\hat{i} + v_{0z}\\hat{k}$`} and initial position at the origin.
          </p>
          <div className="lrn-eq">{`$$x(t) = v_{0x} t,\\quad z(t) = v_{0z} t - \\tfrac{1}{2} g t^2$$`}</div>
          <p>{`Solve the first for $t = \\frac{x}{v_{0x}}$. Plug into the second.`}</p>
          <div className="lrn-eq lrn-eq-display">{`$$z = \\frac{v_{0z}}{v_{0x}} x - \\frac{g}{2 v_{0x}^2} x^2$$`}</div>
          <p>
            This is the <strong>parabolic trajectory</strong> of projectile motion.
          </p>

          <VizFigure title="Projectile Motion" size="body" aspect="auto">
            <Vkg_ProjectileMotionInline />
          </VizFigure>
          <VizFigure title="Projectile Range" size="body" aspect="auto">
            <Vkg_ProjectileLauncherInline />
          </VizFigure>
        </>,

        <>
          <h2>Motion in Plane Polar Coordinates</h2>
          <p>
            In cartesian coordinates, the unit vectors {`$\\hat{i}$`} and {`$\\hat{j}$`} always
            point east and north, no matter where the particle goes. They never change. In polar
            coordinates, the unit vectors {`$\\hat{r}$`} and {`$\\hat{\\theta}$`} change direction
            as the particle moves. {`$\\hat{r}$`} always points away from the origin, so it rotates
            with the particle. These unit vectors move as the particle moves. So taking a time
            derivative of a position vector in polar form produces extra terms. Those extra terms
            have a clear source, shown next.
          </p>
          <p>
            For some problems, polar coordinates are still worth this extra work. A circle is one
            equation {`$r = R$`}. Planetary orbits trace ellipses around a polar center.
          </p>

          <h3>Polar Unit Vectors and Their Derivatives</h3>
          <p>
            We define two unit vectors at each point. The radial unit vector {`$\\hat{r}$`} points
            away from the origin. The tangential unit vector {`$\\hat{\\theta}$`} points sideways in
            the direction of increasing {`$\\theta$`}.
          </p>
          <div className="lrn-eq">{`$$\\hat{r} = \\hat{i}\\cos\\theta + \\hat{j}\\sin\\theta$$`}</div>
          <div className="lrn-eq">{`$$\\hat{\\theta} = -\\hat{i}\\sin\\theta + \\hat{j}\\cos\\theta$$`}</div>
          <p>
            From here on we use a time-saving shorthand. A dot over a symbol means the time
            derivative: {`$\\dot{\\theta}$`} means {`$d\\theta/dt$`}. Two dots mean the second time
            derivative: {`$\\ddot{r}$`} means {`$d^2 r/dt^2$`}. This is standard in physics, where
            almost every derivative is taken with respect to time.
          </p>
          <p>
            Differentiate these with respect to time. Both unit vectors rotate as {`$\\theta$`}{' '}
            changes:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{d\\hat{r}}{dt} = \\dot{\\theta}\\,\\hat{\\theta},\\quad \\frac{d\\hat{\\theta}}{dt} = -\\dot{\\theta}\\,\\hat{r}$$`}</div>
          <p>
            These two lines are the source of every extra term in polar acceleration. When you
            differentiate {`$r\\hat{r}$`} to get velocity, the product rule gives a term from
            differentiating {`$r$`} and a term from differentiating {`$\\hat{r}$`}. The second term
            is {`$r\\dot{\\theta}\\hat{\\theta}$`}, the sideways part of velocity. Differentiating
            again produces four pieces.
          </p>

          <VizFigure title="Polar Velocity Decomposition" size="body" aspect="auto">
            <Vkg_PolarUnitsInline />
          </VizFigure>

          <h3>Velocity and Acceleration in Polar Coordinates</h3>
          <p>
            Start with position {`$r\\hat{r}$`}. Differentiate using the product rule, then replace{' '}
            {`$d\\hat{r}/dt$`} with {`$\\dot{\\theta}\\hat{\\theta}$`}:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$v = \\frac{d}{dt}(r\\hat{r}) = \\dot{r}\\,\\hat{r} + r\\frac{d\\hat{r}}{dt} = \\dot{r}\\,\\hat{r} + r\\dot{\\theta}\\,\\hat{\\theta}$$`}</div>
          <p>
            Now differentiate {`$v$`} term by term. Each product needs the product rule, and each
            unit-vector derivative gets replaced from the two lines above:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$a = \\frac{d}{dt}\\left(\\dot{r}\\,\\hat{r} + r\\dot{\\theta}\\,\\hat{\\theta}\\right)$$`}</div>
          <p>The first term gives two pieces:</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{d}{dt}(\\dot{r}\\,\\hat{r}) = \\ddot{r}\\,\\hat{r} + \\dot{r}\\,\\dot{\\theta}\\,\\hat{\\theta}$$`}</div>
          <p>
            The second term gives three pieces, using{' '}
            {`$d\\hat{\\theta}/dt = -\\dot{\\theta}\\hat{r}$`}:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{d}{dt}(r\\dot{\\theta}\\,\\hat{\\theta}) = \\dot{r}\\dot{\\theta}\\,\\hat{\\theta} + r\\ddot{\\theta}\\,\\hat{\\theta} - r\\dot{\\theta}^2\\,\\hat{r}$$`}</div>
          <p>
            Add the two lines and collect the {`$\\hat{r}$`} and {`$\\hat{\\theta}$`} parts. The two{' '}
            {`$\\dot{r}\\dot{\\theta}\\hat{\\theta}$`} pieces combine into one{' '}
            {`$2\\dot{r}\\dot{\\theta}\\hat{\\theta}$`}:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$a = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$$`}</div>
          <p>
            Worked instance: a bead at {`$r = 2$`} m moves with {`$\\dot{r} = 1$`} m/s,{' '}
            {`$\\ddot{r} = 0$`}, while the arm turns at {`$\\dot{\\theta} = 3$`} rad/s with{' '}
            {`$\\ddot{\\theta} = 0$`}. The radial part is {`$0 - 2(3)^2 = -18$`} m/s². The
            tangential part is {`$0 + 2(1)(3) = 6$`} m/s². So{' '}
            {`$a = -18\\,\\hat{r} + 6\\,\\hat{\\theta}$`} m/s².
          </p>

          <h3>Where Each Term Comes From</h3>
          <ul className="lrn-list">
            <li>
              <strong>{`$\\ddot{r}\\hat{r}$`}: linear radial.</strong> The particle speeds up or
              slows down along the radius. Same as in cartesian.
            </li>
            <li>
              <strong>{`$-r\\dot{\\theta}^2\\hat{r}$`}: centripetal.</strong> Points inward. This
              arises from the rotation of {`$\\hat{\\theta}$`}: differentiating the{' '}
              {`$r\\dot{\\theta}\\hat{\\theta}$`} term produces a piece in the {`$-\\hat{r}$`}{' '}
              direction.
            </li>
            <li>
              <strong>{`$r\\ddot{\\theta}\\hat{\\theta}$`}: angular tangential.</strong> The
              rotation rate changes. Tangential, not radial.
            </li>
            <li>
              <strong>{`$2\\dot{r}\\dot{\\theta}\\hat{\\theta}$`}: Coriolis.</strong> A sideways
              push that appears when the radius changes during rotation. Needs both a changing
              radius and a rotation. It comes from differentiating {`$r$`} in the{' '}
              {`$r\\dot{\\theta}\\hat{\\theta}$`} term. Only appears when both {`$\\dot{r}$`} and{' '}
              {`$\\dot{\\theta}$`} are nonzero at the same time.
            </li>
          </ul>
          <p>
            The Coriolis term is the same one that appears in rotating reference frames, where it
            deflects winds and ocean currents. Here it shows up purely from the geometry of polar
            coordinates, with no rotation of the frame at all. The deeper connection between the two
            settings is something you will meet later.
          </p>

          <div className="lrn-callout lrn-warning">
            <span className="lrn-callout-label">Watch Out</span>
            <p>
              {`In polar coordinates $v_r \\neq \\int a_r\\,dt$. The radial component of acceleration is not simply the time derivative of the radial component of velocity, because $\\hat{r}$ and $\\hat{\\theta}$ themselves rotate as the particle moves.`}
            </p>
          </div>
        </>,

        <>
          <h2>Mathematical Approximation Methods</h2>
          <p>
            So far we have written down exact formulas for position, velocity, and acceleration.
            Most physics problems have no exact answer in closed form. Examples include the
            pendulum, the orbit of a planet around the sun, and a thrown ball with air resistance.
            In each case you replace the hard formula with a simpler one that is close enough over
            the range that matters. The Taylor series is the tool that makes "close enough" precise.
          </p>

          <h3>Dimensional Analysis: A Free Error Check</h3>
          <p>
            Every physical quantity carries a dimension: a length, a time, a mass, or a combination.
            Speed is length divided by time. Acceleration is length divided by time squared. The
            rule is simple. Both sides of any physical equation must carry the same dimension.
          </p>
          <p>
            You cannot add a length to a time, the same way you cannot add meters to seconds. So if
            you derive a formula and the two sides do not match, you made an algebra mistake. For
            example, suppose you wrote {`$v = g t^2$`} for a speed. The left side is a speed (length
            over time). The right side is an acceleration times a time squared, which is a length.
            The dimensions disagree, so the formula is wrong before you plug in a single number.
          </p>
          <p>This check costs nothing and catches many slips. Run it on every result.</p>

          <h3>The Taylor Series: Zoom In on Any Smooth Curve</h3>
          <p>
            Take any smooth function and zoom in on a point {`$a$`}. The more you zoom, the more the
            curve looks like a straight line. That line is the first-order approximation:{' '}
            {`$f(a + x) \\approx f(a) + f'(a)\\,x$`}. If you zoom out a little and the line no
            longer fits, add a bowl shape (a quadratic term). Zoom out more, add an S-shape (a cubic
            term). Each extra term corrects the approximation over a wider range. The full Taylor
            series is exact for smooth functions:
          </p>
          <div className="lrn-eq">{`$$f(a + x) = f(a) + f'(a) x + \\frac{f''(a)}{2!} x^2 + \\frac{f'''(a)}{3!} x^3 + \\cdots$$`}</div>
          <p>
            {`$f(a)$`} is the function value at the base point. {`$f'(a)$`} is the slope there.{' '}
            {`$f''(a)$`} is how the slope is changing. Each coefficient tells you the shape of the
            curve at finer and finer scales. When {`$x$`} is small, higher powers of {`$x$`} shrink
            fast, so stopping early still gives a good answer.
          </p>
          <p>Common Taylor series:</p>
          <div className="lrn-eq">{`$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$$`}</div>
          <div className="lrn-eq">{`$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$`}</div>
          <div className="lrn-eq">{`$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$`}</div>
          <p>
            One more series shows up constantly: the <strong>binomial series</strong>, the Taylor
            expansion of {`$(1 + x)^n$`} for any power {`$n$`} (whole number, fraction, or negative)
            when {`$x$`} is small:
          </p>
          <div className="lrn-eq">{`$$(1 + x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\cdots\\qquad (|x| < 1)$$`}</div>
          <p>
            A square root is just the power {`$n = \\tfrac{1}{2}$`}. Putting that value in gives a
            shortcut you will use again and again:
          </p>
          <div className="lrn-eq">{`$$\\sqrt{1 + x} \\approx 1 + \\frac{x}{2} - \\frac{x^2}{8}$$`}</div>

          <VizFigure title="Taylor sin x" size="body" aspect="auto">
            <Vkg_TaylorSinInline />
          </VizFigure>

          <h3>Differentials</h3>
          <p>
            We call {`$f'(x) dx$`} the <strong>differential</strong> {`$df$`}. For small{' '}
            {`$\\Delta x$`}, {`$\\Delta f \\approx f'(x)\\,\\Delta x$`}.
          </p>
          <div className="lrn-eq">{`$$df \\equiv f'(x)\\, dx,\\qquad \\Delta f = f(x + \\Delta x) - f(x)$$`}</div>

          <h3>Volume of a Sphere</h3>
          <p>The volume is</p>
          <div className="lrn-eq">{`$$V = \\tfrac{4}{3}\\pi r^3$$`}</div>
          <p>Differentiate. Divide both sides by {`$V$`}.</p>
          <div className="lrn-eq lrn-eq-display">{`$$\\frac{dV}{V} = \\frac{3\\, dr}{r}$$`}</div>
          <p>
            A small fractional change in radius produces three times that fractional change in
            volume.
          </p>
        </>,

        // Section 13: Galilean Foundations
        <>
          <h2>Experimental Facts and Galilean Space-Time</h2>
          <p>
            This section turns a few plain facts about space and time into a hard limit on what
            forces are allowed. The payoff is large: Newton's first law falls out as a result, not a
            guess.
          </p>

          <div className="lrn-predict">
            <span className="lrn-predict-label">PREDICT</span>
            <p>
              "The laws of nature are the same in all places and at all times." What constraints
              does this put on Newton's equation {`$\\ddot{x} = F(x, \\dot{x}, t)$`}?
            </p>
            <details className="lrn-predict-reveal">
              <summary>Check your thinking</summary>
              <p>
                It forces {`$F$`} to not depend on {`$t$`} or absolute position. Only differences
                between positions and velocities can appear.
              </p>
            </details>
          </div>

          <h3>Start Here: The Train</h3>
          <p>
            You are on a train moving at constant speed. You drop a ball. It falls straight down,
            exactly as it would in a stationary room. No experiment you can do inside the train
            tells you whether the train is moving or standing still.
          </p>
          <p>
            This is not a quirk of trains. It is a fundamental fact about nature. The laws of
            physics are the same in every reference frame that moves at constant velocity. Such a
            frame is called an <strong>inertial frame</strong>.
          </p>

          <div className="lrn-definition">
            <span className="lrn-definition-term">Inertial Frame</span>
            <div className="lrn-definition-desc">
              <p>
                A viewpoint from which a free particle (one with no forces acting on it) moves in a
                straight line at constant speed. A train at constant velocity is an inertial frame.
                A spinning carousel is not.
              </p>
            </div>
          </div>

          <h3>The Galilean Boost</h3>
          <p>
            Suppose frame {`$S$`} measures a particle at position {`$x$`} at time {`$t$`}. Frame
            {`$S'$`} moves at constant velocity {`$v$`} relative to {`$S$`}. Frame {`$S'$`} sees the
            same particle at:
          </p>
          <div className="lrn-eq lrn-eq-display">{`$$x' = x - vt,\\quad t' = t$$`}</div>
          <p>
            {`$x'$`} is the position in frame {`$S'$`}. {`$x$`} is the position in frame {`$S$`}.
            {`$v$`} is the velocity of {`$S'$`} relative to {`$S$`}. {`$t$`} is the time, which is
            the same for both frames in classical mechanics.
          </p>
          <p>
            The line {`$t' = t$`} carries a hidden assumption: in classical mechanics all observers
            share one clock. This is the load-bearing classical assumption that relativity later
            overturns.
          </p>
          <p>
            This is called a <strong>Galilean boost</strong>. Notice what it preserves: the distance
            between any two particles is unchanged. If particle 1 is at {`$x_1$`} and particle 2 is
            at {`$x_2$`}, then in {`$S'$`} the gap is {`$x_1' - x_2' = x_1 - x_2$`}. Distances are
            absolute. Positions are not.
          </p>

          <VizFigure title="Galilean Boost · The Train" size="compact" aspect="auto">
            <Vkg_GalileanBoostInline />
          </VizFigure>

          <h3>What "Affine Space" Means</h3>
          <p>
            The train showed us something important. No point in space is physically special.
            Choosing a location as your "zero" is a human convention, not a physical fact. The same
            is true for time: there is no clock that reads the "true" start of the universe.
          </p>
          <p>
            Mathematicians call this structure an <strong>affine space</strong>. It is like ordinary
            space, but without a preferred origin. Only differences between points have physical
            meaning, never the raw coordinates themselves.
          </p>
          <p>
            Classical mechanics takes place in a 4-dimensional affine space: three dimensions of
            space plus one dimension of time. Time is a function that assigns a number to every
            event, and only differences in that number (durations) are physical.
          </p>
          <p>
            Plot one space axis against time and a boost becomes a <strong>shear</strong>. Only the
            time axis of the moving frame tilts. The lines of equal time stay flat, because every
            frame shares one clock. That flat-line family is what makes the spacetime Galilean
            rather than relativistic.
          </p>

          <VizFigure title="Galilean Spacetime · the shear" size="compact" aspect="auto">
            <Vkg_GalileanSpacetimeInline />
          </VizFigure>

          <h3>The Ten Symmetries of Galilean Space-Time</h3>
          <p>
            Now the result: these symmetries force Newton's law into its exact form. Galilean
            space-time has exactly 10 independent symmetries. A symmetry is a transformation that
            leaves all physical laws unchanged. The table lists all 10.
          </p>

          <Vkg_GalileanTableInline bare />

          <h3>How These Symmetries Constrain Newton's Equation</h3>
          <p>
            Start from Newton's second law, {`$F = ma$`}, from the first section. Divide by the
            mass. Acceleration is force divided by mass, so the law sets acceleration equal to a
            force function: {`$\\ddot{x} = F/m$`}. The real question is what {`$F$`} is allowed to
            depend on. The symmetries answer that question.
          </p>
          <div className="lrn-definition">
            <span className="lrn-definition-term">
              Why the Law Is Second-Order (Principle of Determinacy)
            </span>
            <div className="lrn-definition-desc">
              <p>
                Experiment shows that the positions and velocities of all particles at one instant
                fix all future motion. So the law must let you find the acceleration from positions
                and velocities alone. That makes Newton's equation second-order in time: it sets the
                second derivative {`$\\ddot{x}$`} equal to a function of {`$x$`} and {`$\\dot{x}$`}.
                Knowing {`$x$`} and {`$\\dot{x}$`} at {`$t = 0$`} is then exactly enough
                information.
              </p>
            </div>
          </div>
          <p>
            Most problems involve many particles, not one. We give each particle a label {`$i$`}, so
            particle {`$i$`} sits at position {`$x_i$`} with velocity {`$\\dot{x}_i$`}, and there
            are
            {`$n$`} of them in all. Write the most general possible second law for this system:{' '}
            {`$\\ddot{x}_i = F_i(x_1, \\ldots, x_n,
            \\dot{x}_1, \\ldots, \\dot{x}_n, t)$`}
            . Now apply each symmetry in turn. Each one rules out something from {`$F$`}.
          </p>

          <div className="lrn-steps">
            <div className="lrn-step">
              <span className="lrn-step-title">Step 1: Time Translation</span>
              <p className="lrn-step-content">
                Physics is the same at 9 am and at 9 pm. So {`$F$`} cannot depend on the absolute
                time {`$t$`}. If it did, forces would differ between morning and evening, and you
                could detect the "time of day" from inside a closed box. Time translation rules out{' '}
                {`$t$`}: {`$\\ddot{x}_i = F_i(x_1, \\ldots, \\dot{x}_n)$`}.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 2: Space Translation</span>
              <p className="lrn-step-content">
                Physics is the same in Paris and Tokyo. So {`$F$`} cannot depend on the absolute
                position of any particle. If it did, forces on a hydrogen atom would differ in Paris
                and Tokyo. Space translation rules out absolute positions: only differences{' '}
                {`$x_i - x_j$`} between particles can appear.
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 3: Galilean Boost</span>
              <p className="lrn-step-content">
                Physics is the same on the moving train. So {`$F$`} cannot depend on the absolute
                velocity of any particle. Only velocity differences {`$\\dot{x}_i - \\dot{x}_j$`}
                can appear. Combined with step 2, forces depend only on relative positions and
                relative velocities:
                {`$$\\ddot{x}_i = F_i(\\{x_j - x_k\\},\\, \\{\\dot{x}_j - \\dot{x}_k\\})$$`}
              </p>
            </div>
            <div className="lrn-step">
              <span className="lrn-step-title">Step 4: Rotation Invariance</span>
              <p className="lrn-step-content">
                Physics is the same facing north and facing east. So {`$F$`} must behave like a true
                arrow when you turn the whole setup. Turn every position arrow and every velocity
                arrow by the same rotation. The force arrow must turn by that same rotation too.
                This rules out any force formula that picks a preferred direction in space.
              </p>
              <p className="lrn-step-content">
                Note what step 4 contributes. Steps 1, 2, and 3 leave {`$\\ddot{x} = F$`}, with{' '}
                {`$F$`} depending on nothing. So {`$F$`} is a constant vector. Without rotation
                invariance, that constant could point any direction in space, and a free particle
                would accelerate forever along it. Rotation invariance says no direction is special,
                so the only constant vector allowed is zero. Hence {`$\\ddot{x} = 0$`}, and the free
                particle moves in a straight line at constant speed.
              </p>
            </div>
          </div>

          <div className="lrn-self-explain">
            <span className="lrn-self-explain-label">SELF-EXPLAIN</span>
            <p>Why does step 3 rule out absolute velocity but still allow relative velocity?</p>
            <details className="lrn-self-explain-reveal">
              <summary>Expert explanation</summary>
              <p>
                A Galilean boost adds {`$v$`} to every particle's velocity. Suppose {`$F$`} depended
                on absolute velocity {`$\\dot{x}_i$`}. Then the force on particle {`$i$`} would
                change when you switched to the moving train. You could detect the train's speed
                from inside. That is forbidden. But the difference {`$\\dot{x}_i - \\dot{x}_j$`} is
                unchanged by the boost (both particles gain the same {`$v$`}, so the difference
                cancels). Relative velocity is physical. Absolute velocity is not.
              </p>
            </details>
          </div>

          <h3>Newton's First Law as a Corollary</h3>
          <p>
            A single isolated particle has no other particles. There are no relative positions or
            relative velocities to depend on. Steps 2 and 3 leave {`$F = 0$`}. Therefore:
          </p>
          <div className="lrn-eq">{`$$\\ddot{x} = 0$$`}</div>
          <p>
            A free particle has zero acceleration. It moves in a straight line at constant speed.
            This is Newton's First Law, derived rather than assumed.
          </p>

          <h3>Examples</h3>
          <p>
            Three forces obey this rule: uniform gravity near the ground, the inverse-square pull of
            a planet, and the spring-like pull of a harmonic oscillator. Each one is worked out as a
            full example, with its force law and its energy, in Newton's Laws and Integration.
          </p>
        </>
      ]
    },

    practice: [
      {
        q: `A vector has magnitude 5 and points along $+\\hat{i}$. Write its unit vector.`,
        a: `(1) The unit vector is $\\hat{A} = \\hat{i}$. (2) Apply $\\hat{A} = \\frac{A}{|A|}$. The vector is $A = 5\\hat{i}$ with $|A| = 5$. So $\\hat{A} = \\frac{5\\hat{i}}{5} = \\hat{i}$. (3) This works because dividing any vector by its own length always gives a vector of length one in the same direction.`
      },
      {
        q: `A particle moves from (1, 2, 3) to (4, 0, 5). Find the displacement vector.`,
        a: `(1) $S = (3, -2, 2)$. (2) Subtract component by component: $S = r_2 - r_1 = (4-1, 0-2, 5-3)$. (3) Displacement is the change in position. It points from start to finish and does not depend on the origin you chose.`
      },
      {
        q: `Compute $A \\cdot B$ for $A = (2, 3, -1)$ and $B = (4, -2, 5)$.`,
        a: `(1) $A \\cdot B = -3$. (2) Apply $A \\cdot B = A_x B_x + A_y B_y + A_z B_z$. So $A \\cdot B = 8 - 6 - 5$. (3) A negative result means the angle between the two arrows is more than ninety degrees. They point partly against each other.`
      },
      {
        q: `Why is parallel translation not a change of vector?`,
        a: `(1) A vector stores only magnitude and direction. (2) Sliding it across the page changes its position but not its length and not the way it points. (3) Both stored pieces of information stay the same, so the vector is the same. Position is not part of a vector's identity.`
      },
      {
        q: `A force $F = 10$ N pushes a block 5 m at 60 degrees to the displacement. Find the work.`,
        a: `(1) $W = 25$ J. (2) Use $W = F \\cdot d = Fd\\cos\\theta = 10 \\cdot 5 \\cdot \\cos 60° = 50 \\cdot 0.5$. (3) Only the part of force along the motion does work. The dot product picks that part automatically.`
      },
      {
        q: `Predict the direction of $A \\times B$ if $A$ points east and $B$ points north (with up out of the page).`,
        a: `(1) $A \\times B$ points up, out of the page. (2) Apply the right-hand rule: fingers from east to north curl counterclockwise. Your thumb points out of the page. (3) The right-hand rule fixes the sign once you have decided which axes are positive.`
      },
      {
        q: `Predict what happens to the components of a vector when you rotate the axes by 90 degrees. Does the vector itself change?`,
        a: `(1) The components change: a vector $A = (1, 0, 0)$ becomes $(0, -1, 0)$ after a 90-degree rotation about $z$. (2) The vector itself is unchanged. The arrow still points the same way in space. (3) Components are labels tied to axes. Rotating the axes relabels the same arrow.`
      },
      {
        q: `Use the dot product to derive the law of cosines for a triangle with sides $A$, $B$, $C$ where $C = A + B$.`,
        a: `(1) Result: $C^2 = A^2 + B^2 + 2AB\\cos\\theta$. (2) Compute $C \\cdot C = (A+B) \\cdot (A+B) = A\\cdot A + 2 A\\cdot B + B\\cdot B$. Substitute $A\\cdot A = A^2$, $B\\cdot B = B^2$, $A\\cdot B = AB\\cos\\theta$. (3) The dot product distributes over addition, which lets you expand the square.`
      },
      {
        q: `A bead slides outward at $u = 2$ m/s along a spoke rotating at $\\omega = 3$ rad/s. Find its velocity at $t = 1$ s.`,
        a: `(1) $v = 2\\hat{r} + 6\\hat{\\theta}$ m/s. (2) Use $v = u\\hat{r} + ut\\omega\\hat{\\theta}$. So $v_r = 2$ and $v_\\theta = 2 \\cdot 1 \\cdot 3 = 6$. (3) The radial part comes from $\\dot{r} = u$. The tangential part is the bead's distance $r = ut$ times the spoke's angular speed.`
      },
      {
        q: `Find the magnitude of $A = (4, -3, 0)$.`,
        a: `(1) $|A| = 5$. (2) Use $|A| = \\sqrt{A_x^2 + A_y^2 + A_z^2} = \\sqrt{16 + 9 + 0}$. (3) The Pythagorean theorem extends to three dimensions because the axes are perpendicular.`
      },
      {
        q: `Explain in your own words why $A \\times A = 0$.`,
        a: `(1) The cross product magnitude is $|A||B|\\sin\\theta$. (2) The angle between $A$ and itself is zero, and $\\sin 0 = 0$. (3) So the result has zero magnitude, which means the zero vector. Two parallel arrows span no parallelogram: zero area, zero direction.`
      },
      {
        q: `Predict what happens to centripetal acceleration if you double the angular speed of uniform circular motion.`,
        a: `(1) Acceleration grows by a factor of four. (2) Use $|a| = \\omega^2 r$. So doubling $\\omega$ multiplies $|a|$ by $2^2 = 4$. (3) Centripetal acceleration depends on $\\omega^2$, not on $\\omega$. Faster rotation needs much more inward acceleration.`
      },
      {
        q: `Why does the velocity always point tangent to the trajectory?`,
        a: `(1) Velocity is $v = \\frac{dr}{dt}$. (2) For tiny $\\Delta t$, the displacement $\\Delta r$ lines up with the path itself. So $v$ points along the local direction of motion. (3) Curves locally look like straight lines. The tangent direction is what survives in the limit.`
      },
      {
        q: `Find $v$ from $r = A(e^{\\alpha t}\\hat{i} + e^{-\\alpha t}\\hat{j})$.`,
        a: `(1) $v = A\\alpha(e^{\\alpha t}\\hat{i} - e^{-\\alpha t}\\hat{j})$. (2) Differentiate each cartesian component. Cartesian unit vectors do not depend on time. (3) The factor $\\alpha$ comes from chain rule on the exponentials. The minus sign comes from differentiating $e^{-\\alpha t}$.`
      },
      {
        q: `A particle starts at $r_0 = 0$ with $v_0 = 5\\hat{i}$ m/s and constant acceleration $a = -10\\hat{j}$ m/s$^2$. Find $r(t)$.`,
        a: `(1) $r(t) = 5t\\hat{i} - 5t^2\\hat{j}$ m. (2) Use $r(t) = r_0 + v_0 t + \\tfrac{1}{2} a t^2$. So $r = 0 + 5t\\hat{i} + \\tfrac{1}{2}(-10)t^2\\hat{j}$. (3) The formula works because acceleration is constant. For variable $a$, you would integrate.`
      },
      {
        q: `Predict the value of $\\hat{i} \\times \\hat{j} + \\hat{j} \\times \\hat{k} + \\hat{k} \\times \\hat{i}$.`,
        a: `(1) The sum is $\\hat{k} + \\hat{i} + \\hat{j}$. (2) Apply the cyclic rules: $\\hat{i}\\times\\hat{j}=\\hat{k}$, $\\hat{j}\\times\\hat{k}=\\hat{i}$, $\\hat{k}\\times\\hat{i}=\\hat{j}$. (3) Each cyclic pairing produces the third base vector. Adding them all gives the diagonal vector $(1, 1, 1)$.`
      },
      {
        q: `For a vector with constant magnitude, why is $\\frac{dA}{dt}$ perpendicular to $A$?`,
        a: `(1) Compute $\\frac{d(A \\cdot A)}{dt} = 2 A \\cdot \\frac{dA}{dt}$. (2) Since $A \\cdot A = |A|^2$ is constant, the left side is zero. So $A \\cdot \\frac{dA}{dt} = 0$. (3) Two vectors with zero dot product are perpendicular. So $\\frac{dA}{dt} \\perp A$.`
      },
      {
        q: `Compute $\\sqrt{1.02}$ using the binomial series (the expansion of $(1+x)^n$) to second order.`,
        a: `(1) $\\sqrt{1.02} \\approx 1.00995$. (2) Use $\\sqrt{1+x} \\approx 1 + \\frac{x}{2} - \\frac{x^2}{8}$ with $x = 0.02$. So $1 + 0.01 - 0.00005 = 1.00995$. (3) The series converges fast for small $x$, so two terms give an accuracy near $5\\times 10^{-5}$.`
      },
      {
        q: `You compute torque as $\\tau = r \\times F$. If you swap $r$ and $F$, what happens to the torque?`,
        a: `(1) The torque flips sign: $F \\times r = -r \\times F$. (2) The cross product is anticommutative. (3) Physically, the torque sign tells you which way the body rotates. Swapping the order is like calling clockwise "counterclockwise."`
      },
      {
        q: `Show that velocity is perpendicular to position in uniform circular motion.`,
        a: `(1) Result: $v \\cdot r = 0$, so $v \\perp r$. (2) With $r = r(\\cos\\omega t \\hat{i} + \\sin\\omega t \\hat{j})$ and $v = r\\omega(-\\sin\\omega t \\hat{i} + \\cos\\omega t \\hat{j})$, compute $v \\cdot r = r^2\\omega(-\\sin\\omega t \\cos\\omega t + \\cos\\omega t \\sin\\omega t) = 0$. (3) The two terms cancel exactly.`
      },
      {
        q: `Why does $a_r = 0$ in $r = r_0 e^{\\beta t}, \\theta = \\omega t$ when $\\beta = \\pm\\omega$?`,
        a: `(1) Compute $a_r = \\ddot{r} - r\\dot{\\theta}^2 = \\beta^2 r - \\omega^2 r = (\\beta^2 - \\omega^2) r$. (2) Setting $\\beta = \\pm\\omega$ kills the radial acceleration. (3) The exponential growth in $r$ exactly balances the centripetal pull. Radial speed grows but with no radial acceleration.`
      },
      {
        q: `A $-2\\hat{j}$ N force pushes a particle through displacement $3\\hat{i} + 4\\hat{j}$ m. Find the work.`,
        a: `(1) $W = -8$ J. (2) Use $W = F \\cdot d = (0)(3) + (-2)(4) = -8$. (3) Negative work means the force opposes the motion. Energy flows out of the particle.`
      },
      {
        q: `Predict what happens to the Coriolis acceleration if the particle stops moving radially while the spoke keeps rotating.`,
        a: `(1) Coriolis becomes zero. (2) The Coriolis term is $2\\dot{r}\\dot{\\theta}\\hat{\\theta}$. With $\\dot{r} = 0$, the whole term vanishes. (3) Coriolis only shows up when both $r$ and $\\theta$ change. Without radial motion, there is no Coriolis effect.`
      },
      {
        q: `Why does dimensional analysis catch errors in physics?`,
        a: `(1) Both sides of a physical equation must have the same dimension. (2) If you derive $v = gt^2$ but $v$ has units of meters per second and $gt^2$ has units of meters, the dimensions disagree. (3) Real physical relations preserve dimension because adding seconds to meters has no meaning. A mismatch flags an algebra error.`
      },
      {
        q: `A projectile is launched at 30 degrees with speed 20 m/s. Find $v_{0x}$ and $v_{0z}$.`,
        a: `(1) $v_{0x} = 17.32$ m/s and $v_{0z} = 10$ m/s. (2) Use $v_{0x} = v_0 \\cos 30° = 20 \\cdot 0.866$ and $v_{0z} = v_0 \\sin 30° = 20 \\cdot 0.5$. (3) The launch angle splits the velocity into the two independent components.`
      },
      {
        q: `A vehicle drives in a circle of radius 50 m at constant speed 10 m/s. Find the centripetal acceleration.`,
        a: `(1) $|a| = 2$ m/s$^2$. (2) Use $|a| = \\frac{v^2}{r} = \\frac{100}{50}$. Or use $\\omega = \\frac{v}{r} = 0.2$ rad/s and $|a| = \\omega^2 r = 0.04 \\cdot 50$. (3) Centripetal acceleration always points toward the center of the circle.`
      },
      {
        q: `Find $A \\times B$ for $A = (1, 0, 0)$ and $B = (0, 1, 0)$.`,
        a: `(1) $A \\times B = (0, 0, 1) = \\hat{k}$. (2) Apply the determinant: $\\hat{i}(0 \\cdot 0 - 0 \\cdot 1) - \\hat{j}(1 \\cdot 0 - 0 \\cdot 0) + \\hat{k}(1 \\cdot 1 - 0 \\cdot 0) = \\hat{k}$. (3) This matches the rule $\\hat{i} \\times \\hat{j} = \\hat{k}$ in a right-handed coordinate system.`
      },
      {
        q: `Newton's equation starts as $\\ddot{x} = F(x, \\dot{x}, t)$. Apply time-translation invariance. What form must $F$ take?`,
        a: `$F$ cannot depend on $t$. If the laws of physics are the same at all times, shifting $t \\to t + s$ must leave $F$ unchanged. The equation becomes $\\ddot{x} = \\Phi(x, \\dot{x})$. If $F(x, \\dot{x}, t)$ changed with $t$, an isolated experiment could detect 'what time it is', violating the principle.`
      },
      {
        q: `Two identical particles start at the same place but with different speeds. Will their later paths ever match? Use the principle of determinacy.`,
        a: `(1) No, the paths stay different. (2) Determinacy says the present position and velocity of every particle fix all future motion. The two particles share a position but not a velocity, so their starting data differ. (3) Different starting data means different trajectories. This is why Newton's equation is second order: it needs both $x$ and $\\dot{x}$ at the start to pin down one path.`
      },
      {
        q: `The Galilean group has 10 dimensions. List the 4 types of Galilean transformations and state how many parameters each uses.`,
        a: `Rotations of space: 3 parameters. Translations of space: 3 parameters. Uniform velocity boosts: 3 parameters. Time translation: 1 parameter. Total: 3 + 3 + 3 + 1 = 10 dimensions.`
      },
      {
        q: `Explain why Newton's first law (a free particle has zero acceleration) follows from Galilean invariance, rather than being an independent postulate.`,
        a: `A single particle in an isolated system has no other particles to form relative positions or velocities with. The force function $\\ddot{x}_i = f_i(\\{x_j - x_k, \\dot{x}_j - \\dot{x}_k\\})$ has no arguments when $n = 1$. So $f_i = 0$ and $\\ddot{x} = 0$. Newton's first law follows from the fact that every place and every direction in Galilean space is the same.`
      },
      {
        q: `State and prove the product rule for the cross product: $\\frac{d}{dt}(a \\times b) = \\dot{a} \\times b + a \\times \\dot{b}$.`,
        a: `(1) The rule is $\\frac{d}{dt}(a \\times b) = \\dot{a} \\times b + a \\times \\dot{b}$. (2) Write each side in components and differentiate. The cross product is built from products of components, like $(a \\times b)_x = a_y b_z - a_z b_y$. The ordinary product rule on each term gives $\\dot{a}_y b_z + a_y \\dot{b}_z - \\dot{a}_z b_y - a_z \\dot{b}_y$, which regroups into $(\\dot{a} \\times b)_x + (a \\times \\dot{b})_x$. The same holds for every component. (3) The cross product is linear in each slot, so it follows the same product rule as ordinary multiplication. The order in each term must stay fixed, because the cross product is anticommutative.`
      }
    ],

    reference: {
      category: 'Quick Reference',
      title: 'Vectors, Kinematics, and the Galilean Structure of Space-Time',
      sections: [
        <>
          <h2>Newton's Second Law</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Component form</span>
            <div className="lrn-definition-desc">
              <p>{`$F_x = ma_x,\\ F_y = ma_y,\\ F_z = ma_z$. Use when forces and accelerations are split along axes.`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Vector form</span>
            <div className="lrn-definition-desc">
              <p>{`$F = ma$. Compact statement valid in any coordinate system.`}</p>
            </div>
          </div>

          <h2>Vectors and Unit Vectors</h2>
          <div className="lrn-eq">{`$$\\hat{A} = \\frac{A}{|A|},\\qquad A = |A|\\hat{A}$$`}</div>
          <div className="lrn-eq">{`$$C = bA,\\quad |C| = b|A|$$`}</div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Parallel translation</span>
            <div className="lrn-definition-desc">
              <p>
                Two vectors are equal when they have the same magnitude and the same direction.
                Sliding without rotating leaves a vector unchanged.
              </p>
            </div>
          </div>
        </>,

        <>
          <h2>Dot Product</h2>
          <div className="lrn-eq">{`$$A \\cdot B = |A||B|\\cos\\theta$$`}</div>
          <div className="lrn-eq">{`$$A \\cdot A = |A|^2$$`}</div>
          <div className="lrn-eq">{`$$A \\cdot B = A_x B_x + A_y B_y + A_z B_z$$`}</div>
          <div className="lrn-eq">{`$$W = F \\cdot d = Fd\\cos\\theta$$`}</div>
          <div className="lrn-eq">{`$$C^2 = A^2 + B^2 + 2AB\\cos\\theta\\qquad (\\text{law of cosines})$$`}</div>

          <h2>Cross Product</h2>
          <div className="lrn-eq">{`$$|A \\times B| = |A||B|\\sin\\theta$$`}</div>
          <div className="lrn-eq">{`$$B \\times A = -A \\times B,\\quad A \\times A = 0$$`}</div>
          <div className="lrn-eq">{`$$F = qv \\times B,\\quad \\tau = r \\times F$$`}</div>
          <div className="lrn-eq">{`$$A \\times B = \\hat{i}(A_y B_z - A_z B_y) - \\hat{j}(A_x B_z - A_z B_x) + \\hat{k}(A_x B_y - A_y B_x)$$`}</div>
        </>,

        <>
          <h2>Components and Base Vectors</h2>
          <div className="lrn-eq">{`$$A = (A_x, A_y, A_z),\\quad |A| = \\sqrt{A_x^2 + A_y^2 + A_z^2}$$`}</div>
          <div className="lrn-eq">{`$$A = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k},\\quad A_z = A \\cdot \\hat{k}$$`}</div>
          <div className="lrn-eq">{`$$\\hat{i} \\times \\hat{j} = \\hat{k},\\ \\hat{j}\\times\\hat{k} = \\hat{i},\\ \\hat{k}\\times\\hat{i} = \\hat{j}$$`}</div>
        </>,

        <>
          <h2>Position, Velocity, Acceleration</h2>
          <div className="lrn-eq">{`$$r = x\\hat{i} + y\\hat{j} + z\\hat{k}$$`}</div>
          <div className="lrn-eq">{`$$v = \\frac{dr}{dt},\\quad a = \\frac{dv}{dt} = \\frac{d^2 r}{dt^2}$$`}</div>
          <div className="lrn-eq">{`$$v(t) = v_0 + at,\\quad r(t) = r_0 + v_0 t + \\tfrac{1}{2} a t^2\\qquad (\\text{constant }a)$$`}</div>

          <h2>Uniform Circular Motion</h2>
          <div className="lrn-eq">{`$$r = r(\\cos\\omega t\\,\\hat{i} + \\sin\\omega t\\,\\hat{j})$$`}</div>
          <div className="lrn-eq">{`$$|v| = r\\omega,\\quad a = -\\omega^2 r,\\quad |a| = \\omega^2 r$$`}</div>

          <h2>Projectile Motion</h2>
          <div className="lrn-eq">{`$$z = \\frac{v_{0z}}{v_{0x}} x - \\frac{g}{2 v_{0x}^2} x^2$$`}</div>
        </>,

        <>
          <h2>Polar Coordinates</h2>
          <div className="lrn-eq">{`$$\\hat{r} = \\hat{i}\\cos\\theta + \\hat{j}\\sin\\theta,\\quad \\hat{\\theta} = -\\hat{i}\\sin\\theta + \\hat{j}\\cos\\theta$$`}</div>
          <div className="lrn-eq">{`$$\\frac{d\\hat{r}}{dt} = \\dot{\\theta}\\hat{\\theta},\\quad \\frac{d\\hat{\\theta}}{dt} = -\\dot{\\theta}\\hat{r}$$`}</div>
          <div className="lrn-eq">{`$$v = \\dot{r}\\hat{r} + r\\dot{\\theta}\\hat{\\theta}$$`}</div>
          <div className="lrn-eq">{`$$a = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$$`}</div>
        </>,

        <>
          <h2>Approximation Methods</h2>
          <div className="lrn-eq">{`$$(1+x)^n = 1 + nx + \\tfrac{n(n-1)}{2!}x^2 + \\cdots\\qquad (|x| < 1)$$`}</div>
          <div className="lrn-eq">{`$$f(a+x) = f(a) + f'(a)x + \\tfrac{f''(a)}{2!}x^2 + \\cdots$$`}</div>
          <div className="lrn-eq">{`$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$$`}</div>
          <div className="lrn-eq">{`$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$`}</div>
          <div className="lrn-eq">{`$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$`}</div>
        </>,

        <>
          <h2>Newton's Equations</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Newton's General Equation</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\ddot{x} = F(x, \\dot{x}, t)$$`}</p>
            </div>
          </div>
          <div className="lrn-definition">
            <span className="lrn-definition-term">Galilean-Invariant Closed System</span>
            <div className="lrn-definition-desc">
              <p>{`$$\\ddot{x} = \\Phi(x, \\dot{x})$$`}</p>
            </div>
          </div>

          <h2>Galilean Group Summary</h2>
          <div className="lrn-definition">
            <span className="lrn-definition-term">10 Galilean Transformations</span>
            <div className="lrn-definition-desc">
              <ul className="lrn-list">
                <li>Time translation (1): {`$t \\to t + \\Delta t$`}</li>
                <li>Space translation (3): {`$x \\to x + \\Delta x$`}</li>
                <li>Rotation (3): turn every position arrow by the same angle</li>
                <li>Uniform boost (3): {`$x \\to x + vt$`}</li>
              </ul>
            </div>
          </div>
        </>
      ]
    },

    customCss: `.MafsView { --mafs-bg: transparent; --mafs-fg: var(--ink-default); --mafs-line-color: var(--ink-hairline); }`
  }

  return config
}

export default function VectorsKinematicsAndGalileanStructure() {
  const config = useConfig()
  return <LearningTemplate config={config} />
}
