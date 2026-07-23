import React from 'react'
import {
  Plot,
  Parametric,
  Polyline,
  Tex,
  TexPx,
  Label,
  Dot,
  Arrow,
  Canvas,
  MultiLine,
  FG,
  OPACITY
} from './primitives'
import {
  FONT_BODY,
  FONT_FAMILY,
  FONT_LABEL,
  FONT_SMALL,
  FONT_TEX,
  FONT_TINY,
  LS_COMPACT,
  STROKE_EMPHASIS,
  STROKE_GUIDE,
  STROKE_HAIR,
  STROKE_PRIMARY,
  STROKE_SECONDARY
} from './scale-tokens'

// __CATALOG_START__  (preview generator slices from here, keep this marker)

// SHARED PHYSICAL CONSTANTS (web-searched, never invented)
// R_H  1.09678e7 m⁻¹  (LibreTexts 8-6 · Rydberg for hydrogen)
// 13.606 eV          (H ionization energy / Rydberg energy; E_n = −13.606 Z²/n²)
// a₀   52.9 pm        (Bohr radius, CODATA 5.29177e-11 m)
// Wien b 2.8977719e-3 m·K  (CODATA; = 2.8978e6 nm·K)
// hc/k  1.4388e-2 m·K (second radiation constant c₂ = 1.4388e7 nm·K)
// h    4.1357e-15 eV·s (Planck constant in eV·s)
const R_H_nm = 1.09678e-2 // nm⁻¹
const RYD_eV = 13.606 // eV
const WIEN_nmK = 2.8978e6 // nm·K
const C2_nmK = 1.4388e7 // nm·K
const H_eVs = 4.1357e-15 // eV·s

// Numeric readout row, sits UNDER the plot, never on the canvas.
function Readout({ children }) {
  return (
    <div
      style={{
        marginTop: 12,
        fontSize: FONT_SMALL,
        letterSpacing: LS_COMPACT,
        textTransform: 'uppercase',
        opacity: OPACITY.dim,
        textAlign: 'center',
        fontVariantNumeric: 'tabular-nums',
        lineHeight: 1.6
      }}
    >
      {children}
    </div>
  )
}

// KINETICS

// Maxwell-Boltzmann distribution of molecular energies at two temperatures.
// Honest: uses the real 1D-energy form f(E) ∝ sqrt(E) · e^{-E/kT}, the
// Maxwell-Boltzmann energy distribution. Each curve is area-normalised to the
// same total (same molecule count), so raising T shifts the peak right and
// flattens it while the area stays equal. The shaded tail past Ea is the
// fraction of molecules that can clear the barrier.
export function MaxwellBoltzmannViz() {
  // Energy in arbitrary units; "temperature" sets the scale parameter.
  const Ea = 6.0
  const xMax = 12
  // f(E) = (2/sqrt(pi)) T^{-3/2} sqrt(E) e^{-E/T}, normalised so total area = 1.
  const mb = T => E =>
    E <= 0 ? 0 : (2 / Math.sqrt(Math.PI)) * Math.pow(T, -1.5) * Math.sqrt(E) * Math.exp(-E / T)
  const Tlow = 2.0
  const Thigh = 3.6
  const fLow = mb(Tlow)
  const fHigh = mb(Thigh)
  // Vertical scale: pick yMax from the taller (lower-T) peak.
  const peakLow = fLow(Tlow / 2) // mode of this distribution is at E = T/2
  const yMax = peakLow * 1.15
  // Shaded tail polygons (E from Ea to xMax) for each curve.
  const tail = f => {
    const pts = [[Ea, 0]]
    const n = 60
    for (let i = 0; i <= n; i++) {
      const E = Ea + ((xMax - Ea) * i) / n
      pts.push([E, f(E)])
    }
    pts.push([xMax, 0])
    return pts
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, yMax]} width={560} height={340} pad={28}>
        {/* baseline */}
        <Polyline
          points={[
            [0, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* shaded fractions beyond Ea */}
        <Polyline points={tail(fLow)} closed fillOpacity={0.1} opacity={0} />
        <Polyline points={tail(fHigh)} closed fillOpacity={0.18} opacity={0} />
        {/* distribution curves */}
        <Parametric
          xy={t => [t, fLow(t)]}
          t={[0.001, xMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, fHigh(t)]}
          t={[0.001, xMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        {/* activation-energy line */}
        <Polyline
          points={[
            [Ea, 0],
            [Ea, yMax * 0.92]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        {/* labels */}
        <Tex
          at={[Ea, yMax * 0.97]}
          tex={'E_a'}
          anchor="middle"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[Tlow / 2 + 0.2, fLow(Tlow / 2) + yMax * 0.04]}
          tex={'\\text{lower } T'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[Thigh / 2 + 1.4, fHigh(Thigh / 2) + yMax * 0.04]}
          tex={'\\text{higher } T'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label
          at={[xMax * 0.5, -yMax * 0.07]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          MOLECULAR ENERGY
        </Label>
        <Label at={[0.2, yMax * 0.98]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          FRACTION OF MOLECULES
        </Label>
        <Tex
          at={[Ea + 0.3, fLow(Ea) + yMax * 0.12]}
          tex={'\\text{can react}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
}

// Reaction-coordinate (potential-energy) diagram: reactants → transition state
// (the Ea hump) → products. Honest convention: x = reaction progress, y = energy.
// Exothermic case shown - products sit lower than reactants, so ΔH < 0.
export function ReactionEnergyViz() {
  const xMax = 10
  const yMax = 10
  const reactE = 3.0
  const prodE = 1.2
  const peakE = 8.0
  const peakX = 5.0
  // Smooth profile: flat reactant level, Gaussian hump at peakX, flat product level.
  const profile = x => {
    if (x <= 2) return reactE
    if (x >= 8) return prodE
    // base line rises linearly from reactant to product level across 2..8
    const base = reactE + ((prodE - reactE) * (x - 2)) / 6
    const hump = (peakE - (reactE + prodE) / 2) * Math.exp(-Math.pow((x - peakX) / 1.4, 2))
    return base + hump
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, yMax]} width={560} height={340} pad={28}>
        <Parametric
          xy={t => [t, profile(t)]}
          t={[0.5, 9.5]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* Ea arrow: reactant level up to peak */}
        <Polyline
          points={[
            [peakX, reactE],
            [peakX, peakE]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [0.8, reactE],
            [peakX, reactE]
          ]}
          opacity={OPACITY.hair}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        {/* ΔH guide */}
        <Polyline
          points={[
            [peakX, prodE],
            [9.2, prodE]
          ]}
          opacity={OPACITY.hair}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Dot x={peakX} y={peakE} r={2.4} opacity={OPACITY.fg} />
        {/* labels */}
        <Tex
          at={[1.3, reactE - 0.9]}
          tex={'\\text{reactants}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[9.0, prodE - 0.9]}
          tex={'\\text{products}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[peakX, peakE + 0.7]}
          tex={'\\text{transition state}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[peakX + 0.25, (reactE + peakE) / 2]}
          tex={'E_a'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Label at={[xMax * 0.5, -0.9]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          REACTION PROGRESS
        </Label>
        <Label at={[0.2, yMax - 0.2]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          ENERGY
        </Label>
      </Plot>
    </div>
  )
}

// Catalyst on a reaction-energy diagram: one high hump (uncatalysed) versus a
// lower hump on the catalysed path. Honest convention: same reactant and product
// levels (ΔH unchanged), only the barrier drops.
export function CatalystEnergyViz() {
  const xMax = 10
  const yMax = 10
  const reactE = 3.0
  const prodE = 2.0
  const peakX = 5.0
  const humpUncat = 8.5
  const humpCat = 5.8
  const profile = peakE => x => {
    if (x <= 2) return reactE
    if (x >= 8) return prodE
    const base = reactE + ((prodE - reactE) * (x - 2)) / 6
    const hump = (peakE - (reactE + prodE) / 2) * Math.exp(-Math.pow((x - peakX) / 1.4, 2))
    return base + hump
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, yMax]} width={560} height={340} pad={28}>
        {/* uncatalysed (solid, high hump) */}
        <Parametric
          xy={t => [t, profile(humpUncat)(t)]}
          t={[0.5, 9.5]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* catalysed (dashed, lower hump) */}
        <Parametric
          xy={t => [t, profile(humpCat)(t)]}
          t={[0.5, 9.5]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        {/* same reactant / product levels guide */}
        <Polyline
          points={[
            [0.8, reactE],
            [9.2, reactE]
          ]}
          opacity={OPACITY.hair}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [0.8, prodE],
            [9.2, prodE]
          ]}
          opacity={OPACITY.hair}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Tex
          at={[1.3, reactE - 0.9]}
          tex={'\\text{reactants}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[9.0, prodE - 0.9]}
          tex={'\\text{products}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[peakX, humpUncat + 0.7]}
          tex={'\\text{no catalyst}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[peakX + 2.4, humpCat]}
          tex={'\\text{with catalyst}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label at={[xMax * 0.5, -0.9]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          REACTION PROGRESS
        </Label>
        <Label at={[0.2, yMax - 0.2]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          ENERGY
        </Label>
      </Plot>
    </div>
  )
}

// UNIT 01 · ATOMIC STRUCTURE & PERIODICITY

// Rutherford gold-foil scattering. Each α-particle path is obtained by
// numerically integrating the repulsive Coulomb force F = k/r² through Newton's
// second law (velocity-Verlet-style leapfrog) for a fan of impact parameters —
// the hyperbolae are computed, not drawn. Large impact parameters pass almost
// straight; the few that approach head-on recoil through >90°, exactly the
// result that forced Rutherford's 1911 nuclear model.
export function RutherfordScatteringViz() {
  const trajectories = React.useMemo(() => {
    const A = 1.4 // Coulomb strength (reduced units)
    const v0 = 1.0
    const x0 = -7,
      dt = 0.01,
      steps = 2000
    const bs = [-2.4, -1.6, -1.0, -0.55, -0.25, 0.25, 0.55, 1.0, 1.6, 2.4]
    return bs.map(b => {
      let x = x0,
        y = b,
        vx = v0,
        vy = 0
      const pts = [[x, y]]
      for (let i = 0; i < steps; i++) {
        const r2 = x * x + y * y
        const r = Math.sqrt(r2)
        if (r < 0.12) break
        const f = A / r2
        vx += f * (x / r) * dt
        vy += f * (y / r) * dt
        x += vx * dt
        y += vy * dt
        if (i % 5 === 0) pts.push([x, y])
        if (x > 7 || Math.abs(y) > 5) {
          pts.push([x, y])
          break
        }
      }
      return pts
    })
  }, [])
  // isotropic: xRange span 14, yRange span 10 → width/height = 1.4 so ux == uy
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-7, 7]} yRange={[-5, 5]} width={560} height={400} pad={20}>
        {trajectories.map((pts, i) => (
          <Polyline key={i} points={pts} opacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} />
        ))}
        {/* incoming beam direction */}
        <Arrow
          from={[-6.6, 3.6]}
          to={[-5.2, 3.6]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          head={5}
        />
        <Tex
          at={[-5, 3.6]}
          tex={'\\alpha'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        {/* nucleus */}
        <Dot x={0} y={0} r={4} opacity={OPACITY.fg} />
        <Tex
          at={[0.4, -0.5]}
          tex={'\\text{nucleus}\\ (+Ze)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        F = k/r² integrated per impact parameter · wide misses ≈ straight · near-axis paths recoil
        &gt;90°
      </Readout>
    </div>
  )
}

// Hydrogen visible emission spectrum (Balmer series, transitions n→2).
// Line POSITIONS are computed from the Rydberg formula, not drawn:
//   1/λ = R_H (1/2² − 1/n²),  R_H = 1.09678e7 m⁻¹.
// The computed λ reproduce the measured air lines Hα 656.3, Hβ 486.1,
// Hγ 434.0, Hδ 410.2 nm; the series converges to the limit 364.6 nm (n→∞).
export function BalmerSeriesViz() {
  const lam = n => 1 / (R_H_nm * (0.25 - 1 / (n * n))) // nm
  const ns = [3, 4, 5, 6, 7, 8]
  const limit = 1 / (R_H_nm * 0.25) // 364.6 nm
  const xMin = 350,
    xMax = 700
  const yTop = 0.86
  const ticks = [400, 450, 500, 550, 600, 650, 700]
  const named = { 3: 'H\\alpha', 4: 'H\\beta', 5: 'H\\gamma', 6: 'H\\delta' }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[0, 1]} width={560} height={340} pad={40}>
        {/* baseline */}
        <Polyline
          points={[
            [xMin, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {ticks.map(t => (
          <Polyline
            key={t}
            points={[
              [t, 0],
              [t, -0.03]
            ]}
            opacity={OPACITY.dim}
            strokeWidth={STROKE_SECONDARY}
          />
        ))}
        {ticks.map(t => (
          <Label
            key={'l' + t}
            at={[t, -0.06]}
            anchor="middle"
            size={FONT_SMALL}
            opacity={OPACITY.dim}
            upper={false}
          >
            {t}
          </Label>
        ))}
        {/* series limit */}
        <Polyline
          points={[
            [limit, 0],
            [limit, yTop * 0.7]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Tex
          at={[limit, yTop * 0.78]}
          tex={'\\text{limit}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        {/* emission lines — position computed from Rydberg */}
        {ns.map(n => {
          const x = lam(n)
          const h = yTop * (1 - 0.05 * (n - 3))
          return (
            <g key={n}>
              <Polyline
                points={[
                  [x, 0],
                  [x, h]
                ]}
                opacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              {named[n] && (
                <Tex
                  at={[x, h + 0.08]}
                  tex={named[n]}
                  anchor="middle"
                  size={FONT_LABEL}
                  opacity={OPACITY.fg}
                />
              )}
            </g>
          )
        })}
        <Label
          at={[(xMin + xMax) / 2, -0.14]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          WAVELENGTH / nm
        </Label>
      </Plot>
      <Readout>
        Hα {lam(3).toFixed(1)} · Hβ {lam(4).toFixed(1)} · Hγ {lam(5).toFixed(1)} · Hδ{' '}
        {lam(6).toFixed(1)} nm · limit {limit.toFixed(1)} nm
      </Readout>
    </div>
  )
}

// Grotrian / energy-level diagram for hydrogen. Levels drawn at the computed
// Bohr energies E_n = −13.606/n² eV; the three visible series are drawn as
// downward transitions to a common lower level, each labelled with the λ of its
// first line, computed from the same Rydberg formula (Lyman→n=1 121.6 nm,
// Balmer→n=2 656.3 nm, Paschen→n=3 1875 nm).
export function GrotrianLadderViz() {
  const En = n => -RYD_eV / (n * n)
  const lam = (nHi, nLo) => 1 / (R_H_nm * (1 / (nLo * nLo) - 1 / (nHi * nHi))) // nm
  const levels = [1, 2, 3, 4, 5, 6]
  const xL = 1.2,
    xR = 9
  const yMin = -14,
    yMax = 1.2
  const series = [
    { lo: 1, his: [2, 3], x: 2.4, name: 'Lyman', lamLine: lam(2, 1), unit: 'nm' },
    { lo: 2, his: [3, 4, 5], x: 4.8, name: 'Balmer', lamLine: lam(3, 2), unit: 'nm' },
    { lo: 3, his: [4, 5], x: 7.2, name: 'Paschen', lamLine: lam(4, 3) / 1000, unit: 'µm' }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, 10]} yRange={[yMin, yMax]} width={560} height={380} pad={30}>
        {/* levels */}
        {levels.map(n => (
          <g key={n}>
            <Polyline
              points={[
                [xL, En(n)],
                [xR, En(n)]
              ]}
              opacity={n === 1 ? OPACITY.fg : OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            {n <= 4 && (
              <Tex
                at={[xR + 0.1, En(n)]}
                tex={'n=' + n}
                anchor="start"
                size={FONT_SMALL}
                opacity={OPACITY.dim}
              />
            )}
          </g>
        ))}
        {/* ionization limit */}
        <Polyline
          points={[
            [xL, 0],
            [xR, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Tex
          at={[xL, 0.6]}
          tex={'E=0\\ (n\\to\\infty)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        {/* series transitions */}
        {series.map(s =>
          s.his.map((nHi, i) => (
            <Arrow
              key={s.name + nHi}
              from={[s.x + i * 0.32, En(nHi)]}
              to={[s.x + i * 0.32, En(s.lo)]}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
              head={5}
            />
          ))
        )}
        {series.map(s => (
          <Tex
            key={s.name}
            at={[s.x + 0.16, En(s.lo) + 0.9]}
            tex={'\\text{' + s.name + '}'}
            anchor="middle"
            size={FONT_SMALL}
            opacity={OPACITY.fg}
          />
        ))}
        <Label
          at={[0.35, (yMin + yMax) / 2]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          ENERGY / eV
        </Label>
      </Plot>
      <Readout>
        Lyman α {series[0].lamLine.toFixed(1)} nm · Balmer α {series[1].lamLine.toFixed(1)} nm ·
        Paschen α {series[2].lamLine.toFixed(2)} µm
      </Readout>
    </div>
  )
}

// Black-body (Planck) radiation curves. Each curve is the Planck law
//   B(λ,T) ∝ (1/λ⁵) / (e^{c₂/λT} − 1),   c₂ = hc/k = 1.4388e7 nm·K,
// evaluated at three temperatures. Curves share one absolute vertical scale, so
// the hotter body is honestly both brighter and shifted to shorter λ. The peak
// of each curve is marked at λ_max = b/T (Wien), b = 2.8978e6 nm·K.
export function PlanckCurvesViz() {
  const Ts = [3000, 4000, 5000]
  const B = T => lam => 1 / Math.pow(lam, 5) / (Math.exp(C2_nmK / (lam * T)) - 1)
  const xMax = 2000
  // global max across all curves (hottest peaks highest) for the shared scale
  let gMax = 0
  Ts.forEach(T => {
    const f = B(T)
    for (let l = 100; l <= xMax; l += 10) gMax = Math.max(gMax, f(l))
  })
  const wien = T => WIEN_nmK / T
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, 1.12]} width={560} height={340} pad={30}>
        <Polyline
          points={[
            [0, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* visible band marker 380–700 nm */}
        <Polyline
          points={[
            [380, 0],
            [380, 1.05]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 4"
        />
        <Polyline
          points={[
            [700, 0],
            [700, 1.05]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 4"
        />
        <Tex
          at={[540, 0.45]}
          tex={'\\text{visible}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {Ts.map((T, i) => {
          const f = B(T)
          const lmax = wien(T)
          return (
            <g key={T}>
              <Parametric
                xy={l => [l, f(l) / gMax]}
                t={[80, xMax]}
                samples={300}
                opacity={i === 2 ? OPACITY.fg : OPACITY.accent}
                strokeWidth={STROKE_PRIMARY}
              />
              <Dot x={lmax} y={f(lmax) / gMax} r={2.4} opacity={OPACITY.fg} />
              <Tex
                at={[lmax, f(lmax) / gMax + 0.07]}
                tex={T + '\\,\\text{K}'}
                anchor="middle"
                size={FONT_SMALL}
                opacity={OPACITY.fg}
              />
            </g>
          )
        })}
        <Label at={[xMax / 2, -0.09]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          WAVELENGTH / nm
        </Label>
        <Label at={[40, 1.06]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          SPECTRAL RADIANCE
        </Label>
      </Plot>
      <Readout>λ_max = b/T · {Ts.map(T => `${T} K→${Math.round(wien(T))} nm`).join(' · ')}</Readout>
    </div>
  )
}

// Photoelectric effect: maximum electron kinetic energy vs photon frequency.
// Computed from Einstein's equation E_k = hν − φ (E_k = 0 below threshold
// ν₀ = φ/h). Two metals with real work functions, sodium φ = 2.28 eV and
// zinc φ = 4.3 eV, give parallel lines of identical slope h and different
// x-intercepts, the classic proof that the slope is a universal constant.
export function PhotoelectricViz() {
  // ν in units of 1e14 Hz; slope = h·1e14 (eV per unit) = 0.41357
  const slope = H_eVs * 1e14
  const metals = [
    { name: '\\text{Na}', phi: 2.28, op: OPACITY.fg },
    { name: '\\text{Zn}', phi: 4.3, op: OPACITY.accent }
  ]
  const nu0 = phi => phi / slope
  const xMax = 15,
    yMax = 4.5
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, yMax]} width={560} height={340} pad={30}>
        <Polyline
          points={[
            [0, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, yMax]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[5, 10, 15].map(t => (
          <g key={t}>
            <Polyline
              points={[
                [t, 0],
                [t, -0.06]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label
              at={[t, -0.16]}
              anchor="middle"
              size={FONT_SMALL}
              opacity={OPACITY.dim}
              upper={false}
            >
              {t}
            </Label>
          </g>
        ))}
        {metals.map(m => {
          const n0 = nu0(m.phi)
          return (
            <g key={m.phi}>
              {/* flat (no emission) below threshold */}
              <Polyline
                points={[
                  [0, 0],
                  [n0, 0]
                ]}
                opacity={m.op}
                strokeWidth={STROKE_PRIMARY}
              />
              {/* linear E_k = hν − φ above threshold */}
              <Polyline
                points={[
                  [n0, 0],
                  [xMax, slope * xMax - m.phi]
                ]}
                opacity={m.op}
                strokeWidth={STROKE_PRIMARY}
              />
              <Dot x={n0} y={0} r={2.6} opacity={m.op} fill={false} />
              <Tex
                at={[xMax - 0.2, slope * xMax - m.phi]}
                tex={m.name}
                anchor="end"
                size={FONT_LABEL}
                opacity={m.op}
                dy={-8}
              />
            </g>
          )
        })}
        <Tex
          at={[8, 2.4]}
          tex={'\\text{slope}=h'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[xMax / 2, -0.34]}
          anchor="middle"
          tex={'\\text{FREQUENCY}\\ /\\ 10^{14}\\ \\mathrm{Hz}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label at={[0.25, yMax - 0.1]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          MAX KINETIC ENERGY / eV
        </Label>
      </Plot>
      <Readout>
        ν₀(Na) {nu0(2.28).toFixed(1)}×10¹⁴ Hz · ν₀(Zn) {nu0(4.3).toFixed(1)}×10¹⁴ Hz · slope = h =
        4.14×10⁻¹⁵ eV·s
      </Readout>
    </div>
  )
}

// The 1s wavefunction ψ(r) versus its probability density ψ²(r). Both are the
// real hydrogenic 1s functions, plotted through the nucleus (r = |x|, in Bohr
// radii): ψ ∝ e^{−r/a₀}, ψ² ∝ e^{−2r/a₀}. The point of the figure is the sharp
// CUSP both share at r = 0 (a consequence of the 1/r Coulomb potential) and the
// fact that ψ² decays twice as fast as ψ.
export function HydrogenWavefunctionViz() {
  const psi = r => Math.exp(-r)
  const psi2 = r => Math.exp(-2 * r)
  const xLim = 4
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-xLim, xLim]} yRange={[0, 1.1]} width={560} height={320} pad={30}>
        <Polyline
          points={[
            [-xLim, 0],
            [xLim, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, 1.05]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Parametric
          xy={t => [t, psi(Math.abs(t))]}
          t={[-xLim, xLim]}
          samples={240}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, psi2(Math.abs(t))]}
          t={[-xLim, xLim]}
          samples={240}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Tex
          at={[1.1, psi(1.1) + 0.05]}
          tex={'\\psi'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0.7, psi2(0.7) + 0.05]}
          tex={'\\psi^2'}
          anchor="start"
          size={FONT_TEX}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[0, 1.06]}
          tex={'\\text{cusp}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0, -0.12]}
          anchor="middle"
          tex={'\\text{DISTANCE FROM NUCLEUS }r\\ /\\ a_0'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        ψ ∝ e^(−r/a₀) · ψ² ∝ e^(−2r/a₀), density falls twice as fast, both cusped at r = 0
      </Readout>
    </div>
  )
}

// Particle in a 1-D box: the stationary states ψ_n(x) = √(2/L)·sin(nπx/L) each
// drawn riding on its own energy level E_n = n²h²/8mL² (∝ n²). Shows the node
// count (n−1 interior nodes), the quantised ∝ n² spacing, and the non-zero
// ground-state energy (zero-point energy), the n=1 level sits above the floor.
export function ParticleInBoxViz() {
  const ns = [1, 2, 3, 4]
  const En = n => n * n // units of E_1
  const amp = 1.15
  const psi = n => x => amp * Math.sin(n * Math.PI * x)
  const yMax = 18
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.15, 1.15]} yRange={[0, yMax]} width={520} height={380} pad={30}>
        {/* box walls */}
        <Polyline
          points={[
            [0, 0],
            [0, yMax]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [1, 0],
            [1, yMax]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [0, 0],
            [1, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {ns.map(n => (
          <g key={n}>
            <Polyline
              points={[
                [0, En(n)],
                [1, En(n)]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 3"
            />
            <Parametric
              xy={x => [x, En(n) + psi(n)(x)]}
              t={[0, 1]}
              samples={160}
              opacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <Tex
              at={[-0.02, En(n)]}
              tex={'n=' + n}
              anchor="end"
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[1.02, En(n)]}
              tex={n * n + 'E_1'}
              anchor="start"
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
          </g>
        ))}
        <Label at={[0.5, -0.9]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          POSITION x / L
        </Label>
        <Tex
          at={[0.5, yMax - 0.4]}
          anchor="middle"
          tex={'\\text{ENERGY }E_n \\propto n^2'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        E_n = n²h²/8mL² · levels 1 : 4 : 9 : 16 · ground state E₁ ≠ 0 (zero-point energy)
      </Readout>
    </div>
  )
}

// Hydrogen-like energy levels and the Z² scaling. Two ladders share one energy
// axis: H (Z=1) and He⁺ (Z=2), each level at E_n = −13.606·Z²/n² eV. Because
// energies scale as Z², every He⁺ level sits four times deeper, its n=2 lands
// exactly on H's n=1. Ionization arrows run from the ground state to E=0
// (13.6 eV for H, 54.4 eV for He⁺).
export function HydrogenEnergyLevelsViz() {
  const En = (Z, n) => (-RYD_eV * Z * Z) / (n * n)
  const ions = [
    { name: '\\text{H}', Z: 1, x0: 1.3, x1: 4.2 },
    { name: '\\text{He}^+', Z: 2, x0: 5.8, x1: 8.7 }
  ]
  const levels = [1, 2, 3, 4, 5]
  const yMin = -56,
    yMax = 6
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, 10]} yRange={[yMin, yMax]} width={560} height={400} pad={30}>
        <Polyline
          points={[
            [0.8, 0],
            [9.2, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Tex at={[9.2, 2.6]} tex={'E=0'} anchor="end" size={FONT_SMALL} opacity={OPACITY.dim} />
        {ions.map(ion => (
          <g key={ion.Z}>
            {levels.map(n => (
              <Polyline
                key={n}
                points={[
                  [ion.x0, En(ion.Z, n)],
                  [ion.x1, En(ion.Z, n)]
                ]}
                opacity={n === 1 ? OPACITY.fg : OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
            ))}
            <Tex
              at={[(ion.x0 + ion.x1) / 2, 3.4]}
              tex={ion.name}
              anchor="middle"
              size={FONT_TEX}
              opacity={OPACITY.fg}
            />
            {/* ionization arrow */}
            <Arrow
              from={[ion.x1 - 0.4, En(ion.Z, 1)]}
              to={[ion.x1 - 0.4, 0]}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
              head={5}
            />
            <Tex
              at={[ion.x1 - 0.2, En(ion.Z, 1) / 2]}
              tex={(RYD_eV * ion.Z * ion.Z).toFixed(1) + '\\,\\text{eV}'}
              anchor="start"
              size={FONT_SMALL}
              opacity={OPACITY.accent}
            />
          </g>
        ))}
        <Label
          at={[0.35, (yMin + yMax) / 2]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          ENERGY / eV
        </Label>
      </Plot>
      <Readout>
        E_n = −13.606·Z²/n² eV · He⁺ levels 4× deeper (Z²=4) · He⁺ n=2 = H n=1 = −13.6 eV
      </Readout>
    </div>
  )
}

// Radial distribution function P(r) = 4πr²ψ² for the hydrogen 1s and 2s
// orbitals (in Bohr radii). Computed from the real radial functions:
//   1s: P ∝ r²e^{−2r},  peaks exactly at r = a₀ (the Bohr radius).
//   2s: P ∝ r²(2−r)²e^{−r},  a radial node at r = 2a₀ splitting inner/outer lobes.
// Each curve is scaled to unit maximum so the peak POSITIONS compare directly.
export function RadialDistributionViz() {
  const P1s = r => r * r * Math.exp(-2 * r)
  const P2s = r => r * r * (2 - r) * (2 - r) * Math.exp(-r)
  const rMax = 10
  let m1 = 0,
    m2 = 0
  for (let r = 0; r <= rMax; r += 0.02) {
    m1 = Math.max(m1, P1s(r))
    m2 = Math.max(m2, P2s(r))
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, rMax]} yRange={[0, 1.12]} width={560} height={330} pad={30}>
        <Polyline
          points={[
            [0, 0],
            [rMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* Bohr-radius marker at r = 1 a0 (1s peak) */}
        <Polyline
          points={[
            [1, 0],
            [1, 1.02]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Tex at={[1, 1.06]} tex={'r=a_0'} anchor="middle" size={FONT_SMALL} opacity={OPACITY.dim} />
        {/* 2s node at r = 2 */}
        <Dot x={2} y={0} r={2.4} opacity={OPACITY.accent} fill={false} />
        <Parametric
          xy={r => [r, P1s(r) / m1]}
          t={[0, rMax]}
          samples={300}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={r => [r, P2s(r) / m2]}
          t={[0, rMax]}
          samples={300}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Tex at={[1.15, 0.9]} tex={'1s'} anchor="start" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex
          at={[5, P2s(5) / m2 + 0.06]}
          tex={'2s'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[rMax / 2, -0.11]}
          anchor="middle"
          tex={'\\text{RADIUS }r\\ /\\ a_0'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0.2, 1.06]}
          anchor="start"
          tex={'P(r) = 4\\pi r^2\\psi^2'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>1s most-probable radius = a₀ (52.9 pm) · 2s radial node at r = 2a₀</Readout>
    </div>
  )
}

// Chlorine mass spectrum, the isotope story. Bars at the measured isotope
// masses m/z = 34.969 (³⁵Cl) and 36.966 (³⁷Cl), heights = natural abundances
// 75.77 % / 24.23 % (CIAAW / IUPAC). The standard atomic weight is the COMPUTED
// weighted mean of the two, 35.45, not a value read off the axis.
export function IsotopesMassSpectrumViz() {
  const iso = [
    { m: 34.969, a: 75.77, label: '{}^{35}\\text{Cl}' },
    { m: 36.966, a: 24.23, label: '{}^{37}\\text{Cl}' }
  ]
  const mean = iso.reduce((s, i) => s + i.m * (i.a / 100), 0)
  const bw = 0.16
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[34, 38]} yRange={[0, 100]} width={540} height={320} pad={30}>
        <Polyline
          points={[
            [34, 0],
            [38, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[35, 36, 37].map(t => (
          <g key={t}>
            <Polyline
              points={[
                [t, 0],
                [t, -3]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label
              at={[t, -8]}
              anchor="middle"
              size={FONT_SMALL}
              opacity={OPACITY.dim}
              upper={false}
            >
              {t}
            </Label>
          </g>
        ))}
        {iso.map(i => (
          <g key={i.m}>
            <Polyline
              points={[
                [i.m - bw, 0],
                [i.m - bw, i.a],
                [i.m + bw, i.a],
                [i.m + bw, 0]
              ]}
              closed
              fillOpacity={0.18}
              opacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <Tex
              at={[i.m, i.a + 6]}
              tex={i.label}
              anchor="middle"
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
            <Tex
              at={[i.m, i.a - 8]}
              tex={i.a + '\\%'}
              anchor="middle"
              size={FONT_SMALL}
              opacity={OPACITY.dim}
            />
          </g>
        ))}
        {/* weighted-mean marker */}
        <Polyline
          points={[
            [mean, 0],
            [mean, 90]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="4 4"
        />
        <Tex
          at={[mean, 95]}
          tex={'\\bar m'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label at={[36, -18]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          MASS-TO-CHARGE m/z
        </Label>
        <Label at={[34.15, 96]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          ABUNDANCE / %
        </Label>
      </Plot>
      <Readout>
        weighted mean = 34.969(0.7577) + 36.966(0.2423) = {mean.toFixed(2)}, chlorine's atomic
        weight
      </Readout>
    </div>
  )
}

// First ionization energy across the first 20 elements. Real measured values
// (kJ/mol, sciencegeek / NIST). The sawtooth is the point: peaks at the noble
// gases (He 2372, Ne 2081, Ar 1521), troughs at the alkali metals (Li, Na, K),
// plus the two diagnostic exceptions, the Be→B drop (2s→2p) and the N→O drop
// (loss of the half-filled 2p³ stability).
export function IonizationEnergyTrendViz() {
  const ie = [
    ['H', 1312],
    ['He', 2372],
    ['Li', 520],
    ['Be', 900],
    ['B', 801],
    ['C', 1087],
    ['N', 1402],
    ['O', 1314],
    ['F', 1681],
    ['Ne', 2081],
    ['Na', 496],
    ['Mg', 738],
    ['Al', 578],
    ['Si', 787],
    ['P', 1012],
    ['S', 1000],
    ['Cl', 1251],
    ['Ar', 1521],
    ['K', 419],
    ['Ca', 590]
  ]
  const pts = ie.map((d, i) => [i + 1, d[1]])
  const yMax = 2600
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, 21]} yRange={[0, yMax]} width={640} height={360} pad={30}>
        <Polyline
          points={[
            [0, 0],
            [21, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[1000, 2000].map(t => (
          <g key={t}>
            <Polyline
              points={[
                [0.4, t],
                [21, t]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 4"
            />
            <Label at={[0.3, t]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim} upper={false}>
              {t}
            </Label>
          </g>
        ))}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {ie.map((d, i) => (
          <g key={d[0]}>
            <Dot x={i + 1} y={d[1]} r={2.2} opacity={OPACITY.fg} />
            <Label
              at={[i + 1, -70]}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
              upper={false}
            >
              {d[0]}
            </Label>
          </g>
        ))}
        <Label at={[10.5, -190]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          ATOMIC NUMBER Z →
        </Label>
        <Tex
          at={[0.5, yMax - 60]}
          anchor="start"
          tex={'I_1\\ /\\ \\mathrm{kJ\\ mol^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        peaks at He / Ne / Ar · troughs at Li / Na / K · exceptions: Be→B (2s→2p) and N→O (½-filled
        2p³)
      </Readout>
    </div>
  )
}

// Successive ionization energies of sodium (log scale). Real values (kJ/mol,
// NIST/CRC). Removing electrons from Na (1s²2s²2p⁶3s¹) shows two huge jumps that
// expose the shell structure: after the 1st electron (the 3s valence electron →
// n=2 core) and after the 9th (finishing n=2 → the n=1 core).
export function SuccessiveIonizationViz() {
  const na = [496, 4562, 6910, 9543, 13354, 16613, 20117, 25496, 28932, 141362, 159076]
  const y = v => Math.log10(v)
  const yMin = 2.5,
    yMax = 5.4
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, 12]} yRange={[yMin, yMax]} width={600} height={360} pad={30}>
        {[3, 4, 5].map(t => (
          <g key={t}>
            <Polyline
              points={[
                [0.6, t],
                [11.5, t]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 4"
            />
            <Label at={[0.5, t]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim} upper={false}>
              {'10^' + t}
            </Label>
          </g>
        ))}
        <Polyline
          points={na.map((v, i) => [i + 1, y(v)])}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {na.map((v, i) => (
          <Dot key={i} x={i + 1} y={y(v)} r={2.4} opacity={OPACITY.fg} />
        ))}
        {/* shell-boundary annotations */}
        <Tex
          at={[1, y(496) - 0.18]}
          tex={'n=3'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[5.5, y(13354) + 0.18]}
          tex={'n=2\\ (8\\,e^-)'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[10.5, y(150000) + 0.18]}
          tex={'n=1'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Label at={[6, yMin - 0.28]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          ELECTRON REMOVED →
        </Label>
        <Tex
          at={[0.5, yMax - 0.1]}
          anchor="start"
          tex={'\\mathrm{IE}_n\\ /\\ \\mathrm{kJ\\ mol^{-1}}\\ (\\log)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        big jumps after the 1st (3s → 2p core) and 9th (2s → 1s core) electron, reveals 1 + 8 + 2
        shells
      </Readout>
    </div>
  )
}

// Atomic (covalent) radius across the first 20 elements. Real Cordero 2008
// covalent radii (pm). The sawtooth: radius shrinks left→right across a period
// (rising Z_eff pulls the same shell inward) then jumps up at each new period
// (a new, larger principal shell opens, Na, K).
export function AtomicRadiusTrendViz() {
  const rad = [
    ['Li', 128],
    ['Be', 96],
    ['B', 84],
    ['C', 76],
    ['N', 71],
    ['O', 66],
    ['F', 57],
    ['Ne', 58],
    ['Na', 166],
    ['Mg', 141],
    ['Al', 121],
    ['Si', 111],
    ['P', 107],
    ['S', 105],
    ['Cl', 102],
    ['Ar', 106],
    ['K', 203],
    ['Ca', 176]
  ]
  const z0 = 3
  const pts = rad.map((d, i) => [i + z0, d[1]])
  const yMax = 220
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[2, 21]} yRange={[0, yMax]} width={640} height={340} pad={30}>
        <Polyline
          points={[
            [2, 0],
            [21, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[100, 200].map(t => (
          <g key={t}>
            <Polyline
              points={[
                [2.4, t],
                [21, t]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 4"
            />
            <Label at={[2.3, t]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim} upper={false}>
              {t}
            </Label>
          </g>
        ))}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {rad.map((d, i) => (
          <g key={d[0]}>
            <Dot x={i + z0} y={d[1]} r={2.2} opacity={OPACITY.fg} />
            <Label
              at={[i + z0, -14]}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
              upper={false}
            >
              {d[0]}
            </Label>
          </g>
        ))}
        <Label at={[11.5, -34]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          ATOMIC NUMBER Z →
        </Label>
        <Label at={[2.5, yMax - 6]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          COVALENT RADIUS / pm
        </Label>
      </Plot>
      <Readout>
        shrinks across a period (Z_eff ↑), jumps at each new shell (Na, K), Cordero 2008 radii
      </Readout>
    </div>
  )
}

// Effective nuclear charge across Period 2 (Li→Ne), COMPUTED live from Slater's
// rules: Z_eff = Z − S, with the valence 2s/2p electron screened 0.35 by each
// other n=2 electron and 0.85 by each 1s electron. The result climbs steadily
// (1.30 → 5.85) even though every atom has the same two inner-shell screeners, // the reason radius falls and IE rises across a period.
export function EffectiveNuclearChargeViz() {
  const period2 = [
    ['Li', 3, 1],
    ['Be', 4, 2],
    ['B', 5, 3],
    ['C', 6, 4],
    ['N', 7, 5],
    ['O', 8, 6],
    ['F', 9, 7],
    ['Ne', 10, 8]
  ]
  const slater = (Z, nVal) => Z - (0.35 * (nVal - 1) + 0.85 * 2)
  const pts = period2.map(d => [d[1], slater(d[1], d[2])])
  const yMax = 7
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[2, 11]} yRange={[0, yMax]} width={560} height={340} pad={30}>
        <Polyline
          points={[
            [2, 0],
            [11, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[2, 4, 6].map(t => (
          <g key={t}>
            <Polyline
              points={[
                [2.4, t],
                [11, t]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 4"
            />
            <Label at={[2.3, t]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim} upper={false}>
              {t}
            </Label>
          </g>
        ))}
        {/* reference: bare nuclear charge Z */}
        <Polyline
          points={period2.map(d => [d[1], d[1] > yMax ? yMax : d[1]])}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="3 3"
        />
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {period2.map(d => (
          <g key={d[0]}>
            <Dot x={d[1]} y={slater(d[1], d[2])} r={2.4} opacity={OPACITY.fg} />
            <Label
              at={[d[1], -18]}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
              upper={false}
            >
              {d[0]}
            </Label>
          </g>
        ))}
        <Tex
          at={[9.4, 6.2]}
          tex={'\\text{bare } Z'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Label at={[6.5, -40]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          PERIOD 2
        </Label>
        <Label at={[2.5, yMax - 0.2]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          Z_eff (SLATER)
        </Label>
      </Plot>
      <Readout>
        Z_eff: Li {slater(3, 1).toFixed(2)} → Ne {slater(10, 8).toFixed(2)} · same 2 inner
        screeners, rising nuclear charge
      </Readout>
    </div>
  )
}

// Shielding & penetration: radial distribution P(r)=r²R² for the 3s, 3p and 3d
// hydrogenic orbitals, computed from the real radial functions
//   R₃ₛ ∝ (27−18r+2r²)e^{−r/3},  R₃ₚ ∝ r(6−r)e^{−r/3},  R₃𝒹 ∝ r²e^{−r/3}.
// 3s has two extra inner peaks that reach close to the nucleus (it penetrates
// the core), 3p one, 3d none, which is why in many-electron atoms the energies
// order 3s < 3p < 3d. Each curve is scaled to unit maximum.
export function ShieldingPenetrationViz() {
  const R3s = r => (27 - 18 * r + 2 * r * r) * Math.exp(-r / 3)
  const R3p = r => r * (6 - r) * Math.exp(-r / 3)
  const R3d = r => r * r * Math.exp(-r / 3)
  const P = R => r => r * r * R(r) * R(r)
  const curves = [
    { f: P(R3s), label: '3s', op: OPACITY.fg, dash: undefined },
    { f: P(R3p), label: '3p', op: OPACITY.accent, dash: '5 4' },
    { f: P(R3d), label: '3d', op: OPACITY.dim, dash: '2 3' }
  ]
  const rMax = 24
  curves.forEach(c => {
    let m = 0
    for (let r = 0; r <= rMax; r += 0.05) m = Math.max(m, c.f(r))
    c.max = m
  })
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, rMax]} yRange={[0, 1.1]} width={620} height={340} pad={30}>
        <Polyline
          points={[
            [0, 0],
            [rMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {curves.map(c => (
          <Parametric
            key={c.label}
            xy={r => [r, c.f(r) / c.max]}
            t={[0, rMax]}
            samples={340}
            opacity={c.op}
            strokeWidth={STROKE_PRIMARY}
            dash={c.dash}
          />
        ))}
        <Tex at={[14.5, 0.95]} tex={'3s'} anchor="start" size={FONT_LABEL} opacity={OPACITY.fg} />
        <Tex at={[11, 0.6]} tex={'3p'} anchor="start" size={FONT_LABEL} opacity={OPACITY.accent} />
        <Tex at={[9, 1.02]} tex={'3d'} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim} />
        <Tex
          at={[rMax / 2, -0.11]}
          anchor="middle"
          tex={'\\text{RADIUS }r\\ /\\ a_0'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0.2, 1.05]}
          anchor="start"
          tex={'P(r) = r^2R^2'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        3s penetrates closest (2 inner peaks), 3p one, 3d none → energy order 3s &lt; 3p &lt; 3d
      </Readout>
    </div>
  )
}

// The 2p orbital as a REAL computed probability density, not a cartoon lobe.
// This is a cross-section (x–z plane) of |ψ₂ₚ_z|² for the hydrogen 2p_z orbital:
//   ψ ∝ z·e^{−r/2}  ⇒  |ψ|² ∝ z²·e^{−r},  r = √(x²+z²)  (Bohr radii).
// Cell shading is proportional to the computed density, so the two lobes along
// ±z and the genuine nodal plane at z = 0 emerge from the math, not from a pen.
export function POrbitalDensityViz() {
  const W = 460,
    H = 460,
    N = 52,
    span = 6 // physical half-range in a0 (x,z ∈ [−6,6])
  const cw = W / N
  const maxVal = 4 * Math.exp(-2) // z²e^{−r} maximised at z=2, x=0
  const cells = React.useMemo(() => {
    const out = []
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x = -span + ((i + 0.5) / N) * 2 * span
        const z = span - ((j + 0.5) / N) * 2 * span
        const r = Math.sqrt(x * x + z * z)
        const dens = (z * z * Math.exp(-r)) / maxVal
        if (dens < 0.015) continue
        out.push({ i, j, op: Math.min(1, dens * 0.95) })
      }
    }
    return out
  }, [])
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {cells.map((c, k) => (
          <rect
            key={k}
            x={c.i * cw}
            y={c.j * cw}
            width={cw + 0.5}
            height={cw + 0.5}
            fill={FG}
            fillOpacity={c.op}
          />
        ))}
        {/* nodal plane z = 0 */}
        <line
          x1={0}
          y1={H / 2}
          x2={W}
          y2={H / 2}
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          strokeDasharray="5 4"
        />
        {/* z axis */}
        <line
          x1={W / 2}
          y1={0}
          x2={W / 2}
          y2={H}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <circle cx={W / 2} cy={H / 2} r={2.5} fill={FG} opacity={OPACITY.fg} />
        <MultiLine x={W / 2} y={26} lines={['+z LOBE']} opacity={OPACITY.dim} size={FONT_SMALL} />
        <MultiLine
          x={W / 2}
          y={H - 16}
          lines={['−z LOBE']}
          opacity={OPACITY.dim}
          size={FONT_SMALL}
        />
        <MultiLine
          x={W - 8}
          y={H / 2 - 8}
          lines={['NODAL PLANE']}
          anchor="end"
          opacity={OPACITY.accent}
          size={FONT_SMALL}
        />
      </Canvas>
      <Readout>
        |ψ₂ₚ_z|² ∝ z²·e^(−r), two lobes along ±z, exact nodal plane at z = 0 (density, not a drawn
        shape)
      </Readout>
    </div>
  )
}

// UNIT 02 · BONDING & STRUCTURE

// Ionic bond as a Born-Mayer potential well. The total energy of an isolated
// Na⁺Cl⁻ ion pair is the sum of the attractive Coulomb term −k_e e²/d and the
// short-range Pauli (closed-shell) repulsion B·e^(−d/ρ). Both curves are drawn
// from the governing equation; the well and its minimum EMERGE from their sum, // no hand-shaped bowl. Constants (web-searched): Coulomb constant
// k_e e² = 14.3996 eV·Å (e²/4πε₀); Born hardness parameter ρ = 0.345 Å (typical
// value, Wikibooks Intro-Inorganic "Ionic and Covalent Solids – Energetics").
// The repulsion coefficient B is fixed by requiring dV/dd = 0 at the measured
// gas-phase NaCl equilibrium bond length r_e = 2.36 Å (CCCBDB/rotational data),
// so the minimum sits exactly there and the depth is a computed prediction.
export function IonicBondBornMayerViz() {
  const KE = 14.3996 // eV·Å  (e²/4πε₀)
  const RHO = 0.345 // Å  (Born hardness parameter)
  const D0 = 2.36 // Å  (gas-phase NaCl r_e)
  // dV/dd = k_e e²/d² − (B/ρ)e^(−d/ρ) = 0 at d0  ⇒  B = ρ·k_e e²/d0² · e^(d0/ρ)
  const B = ((RHO * KE) / (D0 * D0)) * Math.exp(D0 / RHO)
  const Vc = d => -KE / d // Coulomb attraction
  const Vr = d => B * Math.exp(-d / RHO) // Pauli repulsion
  const V = d => Vc(d) + Vr(d)
  const depth = V(D0)
  const xMax = 6,
    xMin = 1.4
  const yMin = -7,
    yMax = 6
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[yMin, yMax]} width={560} height={360} pad={30}>
        {/* zero-energy baseline (separated ions) */}
        <Polyline
          points={[
            [xMin, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* component curves */}
        <Parametric
          xy={t => [t, Vc(t)]}
          t={[xMin, xMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          dash="5 4"
        />
        <Parametric
          xy={t => [t, Vr(t)]}
          t={[xMin, xMax]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        {/* total energy */}
        <Parametric
          xy={t => [t, V(t)]}
          t={[xMin, xMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* minimum marker */}
        <Polyline
          points={[
            [D0, yMin],
            [D0, depth]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [xMin, depth],
            [D0, depth]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Dot x={D0} y={depth} r={2.6} opacity={OPACITY.fg} />
        {/* labels */}
        <Tex
          at={[4.4, Vc(4.4) + 0.5]}
          tex={'-\\dfrac{k_e e^2}{d}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[1.85, 4.2]}
          tex={'B\\,e^{-d/\\rho}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex at={[3.0, -4.9]} tex={'E(d)'} anchor="start" size={FONT_TEX} opacity={OPACITY.fg} />
        <Tex
          at={[D0, depth - 0.7]}
          tex={'d_0'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Label
          at={[(xMin + xMax) / 2, yMin - 0.7]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          ION SEPARATION d / Å
        </Label>
        <Label
          at={[xMin + 0.05, yMax - 0.2]}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          ENERGY / eV
        </Label>
      </Plot>
      <Readout>
        Na⁺Cl⁻: ρ = 0.345 Å, k_e e² = 14.40 eV·Å; B fitted so minimum falls at r_e = {D0.toFixed(2)}{' '}
        Å → computed well depth {depth.toFixed(2)} eV
      </Readout>
    </div>
  )
}

// Molecular dipole moment as the VECTOR SUM of bond dipoles. Same two O–H / C=O
// bond dipoles, different geometry, opposite outcome. CO₂ is linear (180°): the
// two equal C=O bond moments point opposite → they cancel exactly, μ = 0. H₂O is
// bent (H–O–H = 104.48°): the two O–H bond moments add to a non-zero resultant.
// The net magnitude is COMPUTED from μ = 2·p_OH·cos(θ/2). Constants (web-searched,
// arXiv 2502.15557 / LibreTexts): gas-phase H₂O μ = 1.855 D, H–O–H = 104.48°,
// O–H bond dipole p_OH = 1.514 D → 2·1.514·cos(52.24°) = 1.85 D. Geometry is
// drawn to true angle on an isotropic screen canvas (equal x/y scale).
export function MolecularDipoleViz() {
  const W = 560,
    H = 300
  const P_OH = 1.514 // D
  const theta = 104.48 // deg
  const muH2O = 2 * P_OH * Math.cos(((theta / 2) * Math.PI) / 180)
  // CO₂ (linear) at left
  const cO = { x: 150, y: 150 }
  const bond = 60
  const oL = { x: cO.x - bond, y: cO.y }
  const oR = { x: cO.x + bond, y: cO.y }
  // H₂O (bent) at right, O at apex
  const oW = { x: 410, y: 120 }
  const L = 74
  const half = ((theta / 2) * Math.PI) / 180
  const hL = { x: oW.x - L * Math.sin(half), y: oW.y + L * Math.cos(half) }
  const hR = { x: oW.x + L * Math.sin(half), y: oW.y + L * Math.cos(half) }
  // net dipole endpoint (points up toward O): magnitude scaled for display
  const netLen = 46
  const netTip = { x: oW.x, y: oW.y - netLen }
  const netTail = { x: oW.x, y: (hL.y + hR.y) / 2 }
  const Atom = ({ x, y, label }) => (
    <g>
      <circle
        cx={x}
        cy={y}
        r={13}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />
      <text
        x={x}
        y={y + 4}
        fill={FG}
        opacity={OPACITY.fg}
        fontSize={FONT_LABEL}
        textAnchor="middle"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {label}
      </text>
    </g>
  )
  // arrowhead helper (screen coords)
  const Arr = ({ ax, ay, bx, by, accent }) => {
    const dx = bx - ax,
      dy = by - ay
    const len = Math.hypot(dx, dy) || 1
    const ux = dx / len,
      uy = dy / len
    const hd = 7
    const a1x = bx - ux * hd - uy * hd * 0.5,
      a1y = by - uy * hd + ux * hd * 0.5
    const a2x = bx - ux * hd + uy * hd * 0.5,
      a2y = by - uy * hd - ux * hd * 0.5
    return (
      <g
        stroke={FG}
        strokeOpacity={accent ? OPACITY.fg : OPACITY.accent}
        strokeWidth={STROKE_PRIMARY}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1={ax} y1={ay} x2={bx} y2={by} />
        <polyline points={`${a1x},${a1y} ${bx},${by} ${a2x},${a2y}`} />
      </g>
    )
  }
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* CO₂ */}
        <line
          x1={oL.x + 13}
          y1={oL.y}
          x2={cO.x - 13}
          y2={cO.y}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <line
          x1={cO.x + 13}
          y1={cO.y}
          x2={oR.x - 13}
          y2={oR.y}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* bond dipoles point toward O (more electronegative) */}
        <Arr ax={cO.x - 22} ay={cO.y - 26} bx={oL.x + 6} by={oL.y - 26} />
        <Arr ax={cO.x + 22} ay={cO.y - 26} bx={oR.x - 6} by={oR.y - 26} />
        <Atom x={oL.x} y={oL.y} label="O" />
        <Atom x={cO.x} y={cO.y} label="C" />
        <Atom x={oR.x} y={oR.y} label="O" />
        <MultiLine
          x={cO.x}
          y={cO.y + 54}
          lines={['CO₂ · LINEAR 180°']}
          opacity={OPACITY.dim}
          size={FONT_SMALL}
        />
        <MultiLine
          x={cO.x}
          y={cO.y + 72}
          lines={['μ = 0  (BOND DIPOLES CANCEL)']}
          opacity={OPACITY.fg}
          size={FONT_SMALL}
        />
        {/* H₂O */}
        <line
          x1={oW.x}
          y1={oW.y + 13}
          x2={hL.x}
          y2={hL.y - 8}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <line
          x1={oW.x}
          y1={oW.y + 13}
          x2={hR.x}
          y2={hR.y - 8}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* bond dipoles point from H toward O */}
        <Arr ax={hL.x} ay={hL.y - 4} bx={oW.x - 15} by={oW.y + 14} />
        <Arr ax={hR.x} ay={hR.y - 4} bx={oW.x + 15} by={oW.y + 14} />
        {/* resultant (net) dipole */}
        <Arr ax={netTail.x} ay={netTail.y} bx={netTip.x} by={netTip.y} accent />
        <Atom x={oW.x} y={oW.y} label="O" />
        <Atom x={hL.x} y={hL.y} label="H" />
        <Atom x={hR.x} y={hR.y} label="H" />
        <MultiLine
          x={oW.x}
          y={hL.y + 30}
          lines={['H₂O · BENT 104.5°']}
          opacity={OPACITY.dim}
          size={FONT_SMALL}
        />
        <MultiLine
          x={oW.x}
          y={hL.y + 48}
          lines={[`μ = ${muH2O.toFixed(2)} D  (VECTORS ADD)`]}
          opacity={OPACITY.fg}
          size={FONT_SMALL}
        />
      </Canvas>
      <Readout>
        Same p_OH = 1.514 D bond dipole, different shape: CO₂ (180°) → 0; H₂O → μ =
        2·p_OH·cos(52.24°) = {muH2O.toFixed(2)} D (exp. 1.855 D)
      </Readout>
    </div>
  )
}

// Bonding vs antibonding molecular orbitals from LCAO, in 1D along the H₂⁺
// internuclear axis. Each atomic 1s is ψ ∝ e^(−|x−x_A|); the two combine as
// ψ_g = N(1s_A + 1s_B) (bonding) and ψ_u* = N(1s_A − 1s_B) (antibonding). The
// filled curve is the probability density ψ². Bonding PILES density BETWEEN the
// nuclei (constructive overlap, no node) → the glue that lowers the energy;
// antibonding has an exact NODE at the midpoint (destructive overlap) with
// density pushed OUTSIDE. Both densities are computed from the wavefunctions, // not drawn lobes (Landmine 1). Internuclear distance set to the measured H₂⁺
// equilibrium R_e = 2.00 a₀ = 106 pm (NIST/standard).
export function BondingAntibondingViz() {
  const R = 2.0 // a₀
  const xA = R / 2,
    xB = -R / 2
  const s1 = (x, x0) => Math.exp(-Math.abs(x - x0))
  const psiP = x => s1(x, xA) + s1(x, xB) // bonding (unnormalised shape)
  const psiM = x => s1(x, xA) - s1(x, xB) // antibonding
  const xMin = -5,
    xMax = 5
  const Panel = ({ psi, sign, title, note }) => {
    // density (scaled to fit panel), wavefunction scaled to same visual band
    const dens = x => psi(x) * psi(x)
    const wf = x => psi(x)
    const yMax = 1.35
    const yMin = sign === '-' ? -1.35 : -0.25
    // density fill polygon
    const pts = []
    const n = 120
    for (let i = 0; i <= n; i++) {
      const x = xMin + ((xMax - xMin) * i) / n
      pts.push([x, dens(x)])
    }
    const fillPts = [[xMin, 0], ...pts, [xMax, 0]]
    return (
      <div style={{ flex: 1, minWidth: 0 }}>
        <Plot xRange={[xMin, xMax]} yRange={[yMin, yMax]} width={280} height={210} pad={22}>
          <Polyline
            points={[
              [xMin, 0],
              [xMax, 0]
            ]}
            opacity={OPACITY.faint}
            strokeWidth={STROKE_SECONDARY}
          />
          {/* atomic 1s (faint dashed) */}
          <Parametric
            xy={t => [t, s1(t, xA)]}
            t={[xMin, xMax]}
            opacity={OPACITY.faint}
            strokeWidth={STROKE_SECONDARY}
            dash="2 3"
          />
          <Parametric
            xy={t => [t, sign === '-' ? -s1(t, xB) : s1(t, xB)]}
            t={[xMin, xMax]}
            opacity={OPACITY.faint}
            strokeWidth={STROKE_SECONDARY}
            dash="2 3"
          />
          {/* density fill */}
          <Polyline points={fillPts} closed fillOpacity={0.16} opacity={0} />
          {/* wavefunction */}
          <Parametric
            xy={t => [t, wf(t)]}
            t={[xMin, xMax]}
            opacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          {/* nuclei */}
          <Dot x={xA} y={0} r={2.6} opacity={OPACITY.fg} />
          <Dot x={xB} y={0} r={2.6} opacity={OPACITY.fg} />
          {sign === '-' && (
            <Polyline
              points={[
                [0, yMin],
                [0, yMax]
              ]}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_SECONDARY}
              dash="4 3"
            />
          )}
          <Label at={[0, yMax - 0.06]} anchor="middle" size={FONT_SMALL} opacity={OPACITY.dim}>
            {title}
          </Label>
        </Plot>
        <Readout>{note}</Readout>
      </div>
    )
  }
  return (
    <div style={{ width: '100%', display: 'flex', gap: 20 }}>
      <Panel
        psi={psiP}
        sign="+"
        title="σ_g  BONDING"
        note="ψ_g = 1s_A + 1s_B, density builds between nuclei, no node"
      />
      <Panel
        psi={psiM}
        sign="-"
        title="σ_u*  ANTIBONDING"
        note="ψ_u* = 1s_A − 1s_B, exact node at midpoint (x = 0)"
      />
    </div>
  )
}

// Molecular-orbital correlation (energy-level) diagram for the second-row
// homonuclear diatomics N₂ and O₂. This is an honest ENERGY-LEVEL schematic
// (like a Grotrian or crystal-field ladder), NOT an orbital-shape drawing, // atomic 2s/2p levels flank each side, the molecular σ/σ*/π/π* levels sit in the
// middle, and valence electrons are filled by the Aufbau principle and Hund's
// rule. The MO ORDERING differs: for N₂ (and B₂, C₂) s–p mixing pushes σ2p ABOVE
// the π2p pair; for O₂ (and F₂) σ2p drops BELOW π2p. Bond order = ½(bonding −
// antibonding) and the unpaired-electron count are COMPUTED from the filling:
// N₂ → order 3, 0 unpaired (diamagnetic); O₂ → order 2, 2 unpaired in π* → the
// famous PARAMAGNETISM that Lewis structures cannot explain.
export function MOCorrelationViz() {
  // MO level configs: {key, label, x-slot, y, cap(=capacity), bonding?}
  // y in screen px (smaller = higher energy). Center column x≈260.
  const cfg = {
    N2: {
      valence: 10,
      // order low→high energy (bottom→top): σ2s σ*2s π2p(x2) σ2p π*2p(x2) σ*2p
      levels: [
        { k: 'σ2s', y: 250, cap: 2, bond: true, split: 0 },
        { k: 'σ*2s', y: 214, cap: 2, bond: false, split: 0 },
        { k: 'π2p', y: 156, cap: 2, bond: true, split: -1 },
        { k: 'π2p2', y: 156, cap: 2, bond: true, split: 1, hide: true },
        { k: 'σ2p', y: 120, cap: 2, bond: true, split: 0 },
        { k: 'π*2p', y: 80, cap: 2, bond: false, split: -1 },
        { k: 'π*2p2', y: 80, cap: 2, bond: false, split: 1, hide: true },
        { k: 'σ*2p', y: 44, cap: 2, bond: false, split: 0 }
      ],
      order: ['σ2s', 'σ*2s', 'π2p', 'π2p2', 'σ2p', 'π*2p', 'π*2p2', 'σ*2p']
    },
    O2: {
      valence: 12,
      levels: [
        { k: 'σ2s', y: 250, cap: 2, bond: true, split: 0 },
        { k: 'σ*2s', y: 214, cap: 2, bond: false, split: 0 },
        { k: 'σ2p', y: 150, cap: 2, bond: true, split: 0 },
        { k: 'π2p', y: 120, cap: 2, bond: true, split: -1 },
        { k: 'π2p2', y: 120, cap: 2, bond: true, split: 1, hide: true },
        { k: 'π*2p', y: 82, cap: 2, bond: false, split: -1 },
        { k: 'π*2p2', y: 82, cap: 2, bond: false, split: 1, hide: true },
        { k: 'σ*2p', y: 44, cap: 2, bond: false, split: 0 }
      ],
      order: ['σ2s', 'σ*2s', 'σ2p', 'π2p', 'π2p2', 'π*2p', 'π*2p2', 'σ*2p']
    }
  }
  // Fill electrons across the degenerate π/π* pairs with Hund's rule.
  const fill = m => {
    const levels = cfg[m].levels
    const byKey = Object.fromEntries(levels.map(l => [l.k, { ...l, e: 0 }]))
    let n = cfg[m].valence
    // Group degenerate pairs so Hund's rule applies (π2p+π2p2, π*2p+π*2p2)
    const groups = [
      ['σ2s'],
      ['σ*2s'],
      ...(m === 'N2' ? [['π2p', 'π2p2'], ['σ2p']] : [['σ2p'], ['π2p', 'π2p2']]),
      ['π*2p', 'π*2p2'],
      ['σ*2p']
    ]
    for (const g of groups) {
      const capTotal = g.reduce((s, k) => s + byKey[k].cap, 0)
      let take = Math.min(n, capTotal)
      n -= take
      if (g.length === 2) {
        // Hund: one each first, then pair
        const each0 = Math.min(take, 2) // singly fill both
        byKey[g[0]].e += Math.min(1, each0)
        byKey[g[1]].e += Math.max(0, each0 - 1)
        take -= each0
        byKey[g[0]].e += Math.min(1, take)
        byKey[g[1]].e += Math.max(0, take - 1)
      } else {
        byKey[g[0]].e += take
      }
    }
    return byKey
  }
  const bondOrder = filled => {
    let b = 0,
      a = 0
    Object.values(filled).forEach(l => {
      if (l.bond) b += l.e
      else a += l.e
    })
    return { order: (b - a) / 2, unpaired: Object.values(filled).filter(l => l.e === 1).length }
  }
  const cx = 250
  const spin = (x, y, up) => {
    const h = 12
    const y1 = up ? y + h / 2 : y - h / 2
    const y2 = up ? y - h / 2 : y + h / 2
    const hd = 3.5
    return (
      <g
        key={`${x}-${y}-${up}`}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_SECONDARY}
        fill="none"
        strokeLinecap="round"
      >
        <line x1={x} y1={y1} x2={x} y2={y2} />
        <polyline
          points={`${x - hd},${y2 + (up ? hd : -hd)} ${x},${y2} ${x + hd},${y2 + (up ? hd : -hd)}`}
        />
      </g>
    )
  }
  const Diagram = ({ m, title }) => {
    const filled = fill(m)
    const { order, unpaired } = bondOrder(filled)
    const W = 520,
      H = 300
    return (
      <div style={{ width: '100%' }}>
        <Canvas w={W} h={H}>
          {/* AO ticks (left = atom A, right = atom B) */}
          {[
            ['2s', 250],
            ['2p', 150]
          ].map(([lab, y]) => (
            <g key={lab}>
              {[70, W - 70].map((ax, si) => (
                <g key={si}>
                  {lab === '2p' ? (
                    [-16, 0, 16].map(o => (
                      <line
                        key={o}
                        x1={ax - 12 + o}
                        y1={y}
                        x2={ax + o}
                        y2={y}
                        stroke={FG}
                        strokeOpacity={OPACITY.dim}
                        strokeWidth={STROKE_SECONDARY}
                      />
                    ))
                  ) : (
                    <line
                      x1={ax - 12}
                      y1={y}
                      x2={ax + 12}
                      y2={y}
                      stroke={FG}
                      strokeOpacity={OPACITY.dim}
                      strokeWidth={STROKE_SECONDARY}
                    />
                  )}
                  <text
                    x={si === 0 ? ax - 22 : ax + 22}
                    y={y + 4}
                    fill={FG}
                    opacity={OPACITY.dim}
                    fontSize={FONT_SMALL}
                    textAnchor={si === 0 ? 'end' : 'start'}
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    {lab}
                  </text>
                </g>
              ))}
            </g>
          ))}
          {/* MO levels + correlation lines + electrons */}
          {cfg[m].levels
            .filter(l => !l.hide || l.k.endsWith('2'))
            .map(l => {
              const segW = 30
              const gx = cx + l.split * 34
              const x1 = gx - segW / 2,
                x2 = gx + segW / 2
              const fkey = l.k
              const e = filled[fkey].e
              return (
                <g key={l.k}>
                  <line
                    x1={x1}
                    y1={l.y}
                    x2={x2}
                    y2={l.y}
                    stroke={FG}
                    strokeOpacity={OPACITY.fg}
                    strokeWidth={STROKE_PRIMARY}
                  />
                  {/* electrons */}
                  {e >= 1 && spin(gx - (e === 2 ? 5 : 0), l.y, true)}
                  {e === 2 && spin(gx + 5, l.y, false)}
                </g>
              )
            })}
          {/* labels for MO groups */}
          {[
            ['σ*2p', 44, 'σ*'],
            ['π*2p', 82, 'π*'],
            [m === 'N2' ? 'σ2p' : 'π2p', m === 'N2' ? 120 : 120, ''],
            ['σ*2s', 214, 'σ*'],
            ['σ2s', 250, 'σ']
          ].map(([k, y, lab], i) =>
            lab ? (
              <text
                key={i}
                x={cx + 70}
                y={y + 4}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_SMALL}
                textAnchor="start"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {lab}
              </text>
            ) : null
          )}
          <text
            x={cx}
            y={22}
            fill={FG}
            opacity={OPACITY.fg}
            fontSize={FONT_LABEL}
            textAnchor="middle"
            letterSpacing="0.12em"
            style={{ fontFamily: FONT_FAMILY }}
          >
            {title}
          </text>
          <text
            x={cx}
            y={H - 8}
            fill={FG}
            opacity={OPACITY.dim}
            fontSize={FONT_SMALL}
            textAnchor="middle"
            letterSpacing="0.08em"
            style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase' }}
          >
            {`BOND ORDER ${order.toFixed(0)} · ${unpaired} UNPAIRED · ${unpaired ? 'PARAMAGNETIC' : 'DIAMAGNETIC'}`}
          </text>
        </Canvas>
      </div>
    )
  }
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Diagram m="N2" title="N₂  (σ2p above π2p)" />
      <Diagram m="O2" title="O₂  (σ2p below π2p)" />
      <Readout>
        Filled by Aufbau + Hund; bond order = ½(bonding − antibonding). N₂ → 3, diamagnetic · O₂ →
        2, two unpaired π* → paramagnetic
      </Readout>
    </div>
  )
}

// UNIT 03 · ENERGETICS & THERMODYNAMICS

// Expansion work as the AREA under the p–V path. For an ideal-gas isotherm
// p = nRT/V (drawn from the equation), the reversible work is the full area
// under the curve, w_rev = nRT·ln(V₂/V₁); an irreversible single-step expansion
// against a constant external pressure p_ext = p₂ does only the rectangular area
// w_irr = p₂(V₂−V₁). Same end states, less work, the curved area strictly
// exceeds the rectangle, the graphical statement that reversible expansion
// extracts the maximum work. Values computed for 1 mol at 298 K, V: 1→3 L.
export function ExpansionWorkViz() {
  const n = 1,
    R = 0.083145, // L·bar/(mol·K)
    T = 298
  const nRT = n * R * T // L·bar
  const V1 = 1,
    V2 = 3
  const p = V => nRT / V
  const p2 = p(V2)
  const wRev = nRT * Math.log(V2 / V1) // L·bar
  const wIrr = p2 * (V2 - V1)
  const LBAR_TO_J = 100 // 1 L·bar = 100 J
  const xMin = 0.4,
    xMax = 3.4,
    yMax = 28
  // area polygons
  const iso = []
  for (let i = 0; i <= 60; i++) {
    const V = V1 + ((V2 - V1) * i) / 60
    iso.push([V, p(V)])
  }
  const revArea = [[V1, 0], ...iso, [V2, 0]]
  const irrArea = [
    [V1, 0],
    [V1, p2],
    [V2, p2],
    [V2, 0]
  ]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[0, yMax]} width={560} height={340} pad={30}>
        {/* irreversible rectangle (lighter) */}
        <Polyline points={irrArea} closed fillOpacity={0.14} opacity={0} />
        {/* reversible area (hatch-like darker) */}
        <Polyline points={revArea} closed fillOpacity={0.1} opacity={0} />
        {/* isotherm */}
        <Parametric
          xy={t => [t, p(t)]}
          t={[xMin + 0.05, xMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* p_ext line for irreversible step */}
        <Polyline
          points={[
            [V1, p2],
            [V2, p2]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          dash="5 4"
        />
        <Polyline
          points={[
            [V1, 0],
            [V1, p(V1)]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [V2, 0],
            [V2, p(V2)]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Dot x={V1} y={p(V1)} r={2.6} opacity={OPACITY.fg} />
        <Dot x={V2} y={p(V2)} r={2.6} opacity={OPACITY.fg} />
        <Tex
          at={[2.35, 11]}
          tex={'p=\\dfrac{nRT}{V}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[1.55, 3.4]}
          tex={'w_{irr}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[1.15, 15]}
          tex={'w_{rev}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label
          at={[(xMin + xMax) / 2, -2.0]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          VOLUME / L
        </Label>
        <Label
          at={[xMin + 0.05, yMax - 0.5]}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          PRESSURE / bar
        </Label>
      </Plot>
      <Readout>
        1 mol, 298 K, V 1→3 L: w_rev = nRT·ln3 = {(wRev * LBAR_TO_J).toFixed(0)} J &gt; w_irr = p₂ΔV
        = {(wIrr * LBAR_TO_J).toFixed(0)} J (reversible path = max work)
      </Readout>
    </div>
  )
}

// Heating curve of water: temperature vs heat added at constant pressure. Each
// sloped segment is sensible heat q = m·c·ΔT (slope = 1/c); each flat plateau is
// a phase change absorbing latent heat at constant T. Built for 1 g heated from
// −25 °C to 125 °C from measured constants: c_ice 2.09, c_water 4.18, c_steam
// 2.01 J g⁻¹ K⁻¹; ΔH_fus 334 J g⁻¹ (6.01 kJ/mol), ΔH_vap 2257 J g⁻¹ (40.7
// kJ/mol). The vaporization plateau is ~6.8× wider than fusion, the latent
// heats are read directly as plateau lengths, not drawn to look nice.
export function HeatingCurveViz() {
  const c_ice = 2.09,
    c_w = 4.18,
    c_steam = 2.01
  const Hfus = 334,
    Hvap = 2257
  // build cumulative (q, T) breakpoints for 1 g
  const pts = []
  let q = 0
  pts.push([q, -25])
  q += c_ice * 25
  pts.push([q, 0]) // warm ice
  const qFusStart = q
  q += Hfus
  pts.push([q, 0]) // melt
  const qFusEnd = q
  q += c_w * 100
  pts.push([q, 100]) // warm water
  const qVapStart = q
  q += Hvap
  pts.push([q, 100]) // boil
  const qVapEnd = q
  q += c_steam * 25
  pts.push([q, 125]) // warm steam
  const qMax = q
  const xMax = qMax * 1.02,
    yMin = -35,
    yMax = 135
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[yMin, yMax]} width={560} height={340} pad={30}>
        <Polyline
          points={[
            [0, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, 100],
            [xMax, 100]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {/* plateau brackets */}
        <Polyline
          points={[
            [qFusStart, 0],
            [qFusEnd, 0]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Polyline
          points={[
            [qVapStart, 100],
            [qVapEnd, 100]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Tex
          at={[(qFusStart + qFusEnd) / 2, -14]}
          tex={'\\Delta H_{fus}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[(qVapStart + qVapEnd) / 2, 86]}
          tex={'\\Delta H_{vap}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[c_ice * 12, -24]}
          tex={'\\text{ice}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[(qFusEnd + qVapStart) / 2, 55]}
          tex={'\\text{water}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[qVapEnd + 30, 118]}
          tex={'\\text{steam}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Label at={[xMax / 2, yMin - 2]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          HEAT ADDED / J per g
        </Label>
        <Label at={[10, yMax - 2]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          TEMPERATURE / °C
        </Label>
      </Plot>
      <Readout>
        Latent heats read as plateau widths: ΔH_fus = {Hfus} J/g (0 °C) · ΔH_vap = {Hvap} J/g (100
        °C), vaporization ≈ {(Hvap / Hfus).toFixed(1)}× wider
      </Readout>
    </div>
  )
}

// Adiabatic vs isothermal expansion from a common start. The isotherm holds
// pV = const (T fixed, heat flows in); the adiabat holds pV^γ = const (q = 0, so
// the gas does work at the expense of its internal energy and COOLS). Both drawn
// from their governing equations; from the same (V₀,p₀) the adiabat falls
// faster, exactly because γ > 1. Shown for a diatomic gas, γ = C_p/C_v = 7/5 =
// 1.40 (air); the temperature ratio T/T₀ = (V₀/V)^(γ−1) is the honest cooling.
export function AdiabatIsothermViz() {
  const gamma = 1.4
  const V0 = 1,
    p0 = 12
  const iso = V => (p0 * V0) / V
  const adia = V => p0 * Math.pow(V0 / V, gamma)
  const Vf = 3
  const xMin = 0.7,
    xMax = 3.3,
    yMax = 20
  const Tratio = Math.pow(V0 / Vf, gamma - 1)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[0, yMax]} width={560} height={340} pad={30}>
        <Parametric
          xy={t => [t, iso(t)]}
          t={[xMin, xMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, adia(t)]}
          t={[xMin, xMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Dot x={V0} y={p0} r={2.8} opacity={OPACITY.fg} />
        <Polyline
          points={[
            [Vf, 0],
            [Vf, Math.max(iso(Vf), adia(Vf))]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Dot x={Vf} y={iso(Vf)} r={2.4} opacity={OPACITY.fg} />
        <Dot x={Vf} y={adia(Vf)} r={2.4} opacity={OPACITY.accent} />
        <Tex
          at={[1.75, iso(1.75) + 1.0]}
          tex={'pV=\\text{const}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[1.5, adia(1.5) - 1.6]}
          tex={'pV^{\\gamma}=\\text{const}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[V0 + 0.05, p0 + 1.0]}
          tex={'(V_0,p_0)'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label
          at={[(xMin + xMax) / 2, -1.4]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          VOLUME
        </Label>
        <Label
          at={[xMin + 0.02, yMax - 0.4]}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          PRESSURE
        </Label>
      </Plot>
      <Readout>
        γ = C_p/C_v = 7/5 = 1.40 (diatomic). Same start, V₀→3V₀: adiabat drops faster and cools,
        T/T₀ = (1/3)^(γ−1) = {Tratio.toFixed(2)}
      </Readout>
    </div>
  )
}

// Coulomb potential energy of an isolated ion pair, E(r) = −k_e·(z₊z₋)·e²/r,
// plotted straight from the equation for Na⁺Cl⁻ (z₊z₋ = 1) and Mg²⁺O²⁻
// (z₊z₋ = 4). Because the attraction scales with the CHARGE PRODUCT, the MgO
// curve is four times deeper at equal separation, and MgO ions are smaller, so
// they also sit closer. Together these are why doubly-charged oxides bind far
// more strongly than +1/−1 halides. k_e e² = 14.3996 eV·Å. Gas-phase equilibrium
// separations marked: NaCl r_e = 2.36 Å, MgO r_e = 1.75 Å. Real lattice
// energies (Born-Haber): NaCl 787 kJ/mol vs MgO 3795 kJ/mol (~4.8×).
export function CoulombIonPairViz() {
  const KE = 14.3996 // eV·Å
  const E = z => r => (-KE * z) / r
  const eNaCl = E(1),
    eMgO = E(4)
  const rMin = 1.5,
    rMax = 8,
    yMin = -32,
    yMax = 1
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, rMax]} yRange={[yMin, yMax]} width={560} height={360} pad={30}>
        <Polyline
          points={[
            [0, 0],
            [rMax, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <Parametric
          xy={t => [t, eNaCl(t)]}
          t={[rMin, rMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, eMgO(t)]}
          t={[2.0, rMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Dot x={2.36} y={eNaCl(2.36)} r={2.6} opacity={OPACITY.fg} />
        <Dot x={1.75} y={eMgO(1.75)} r={2.6} opacity={OPACITY.accent} />
        <Tex
          at={[4.6, eNaCl(4.6) + 1.6]}
          tex={'\\text{Na}^{+}\\text{Cl}^{-}\\;(z_+z_-=1)'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[3.0, eMgO(3.0) - 2.2]}
          tex={'\\text{Mg}^{2+}\\text{O}^{2-}\\;(z_+z_-=4)'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label at={[rMax / 2, yMin - 1.5]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          ION SEPARATION r / Å
        </Label>
        <Label at={[0.3, yMax - 0.3]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          COULOMB ENERGY / eV
        </Label>
      </Plot>
      <Readout>
        E ∝ −z₊z₋/r: MgO 4× deeper than NaCl at equal r, and closer (1.75 vs 2.36 Å) → lattice
        energy 3795 vs 787 kJ/mol
      </Readout>
    </div>
  )
}

// One-dimensional Madelung sum: the electrostatic energy of an infinite chain of
// alternating ±1 charges converges to a MADELUNG CONSTANT. Summing over both
// directions gives A = 2(1 − ½ + ⅓ − ¼ + …) = 2·ln 2 = 1.38629, the alternating
// harmonic series. The partial sums are computed term-by-term and shown
// oscillating in toward the exact limit, the convergence is real arithmetic, not
// a fitted curve. (The physical 3D NaCl lattice has A = 1.74756.)
export function MadelungChainViz() {
  const exact = 2 * Math.log(2) // 1.38629
  const partial = N => {
    let s = 0
    for (let k = 1; k <= N; k++) s += (k % 2 ? 1 : -1) / k
    return 2 * s
  }
  const Nmax = 40
  const pts = []
  for (let N = 1; N <= Nmax; N++) pts.push([N, partial(N)])
  const chainW = 520,
    chainH = 60
  const ions = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={chainW} h={chainH}>
        {ions.map(i => {
          const x = chainW / 2 + i * 52
          const pos = i % 2 === 0 // reference ion at 0 is +, alternate
          return (
            <g key={i}>
              <circle
                cx={x}
                cy={chainH / 2}
                r={11}
                fill={i === 0 ? FG : 'var(--bg)'}
                fillOpacity={i === 0 ? 0.15 : 1}
                stroke={FG}
                strokeOpacity={i === 0 ? OPACITY.fg : OPACITY.dim}
                strokeWidth={i === 0 ? STROKE_PRIMARY : STROKE_SECONDARY}
              />
              <text
                x={x}
                y={chainH / 2 + 4}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_LABEL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {pos ? '+' : '−'}
              </text>
            </g>
          )
        })}
        <text
          x={chainW / 2}
          y={chainH - 2}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          letterSpacing="0.08em"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase' }}
        >
          REFERENCE ION · ALTERNATING ±1 CHAIN
        </text>
      </Canvas>
      <Plot xRange={[0, Nmax]} yRange={[0, 2.2]} width={560} height={300} pad={30}>
        <Polyline
          points={[
            [0, exact],
            [Nmax, exact]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          dash="5 4"
        />
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {pts
          .filter((_, i) => i % 2 === 0)
          .map(([x, y]) => (
            <Dot key={x} x={x} y={y} r={2} opacity={OPACITY.dim} />
          ))}
        <Tex
          at={[Nmax * 0.5, exact + 0.14]}
          tex={'A_{1D}=2\\ln 2=1.386'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label at={[Nmax / 2, -0.16]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          TERMS SUMMED (each direction)
        </Label>
        <Label at={[0.5, 2.16]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          MADELUNG PARTIAL SUM
        </Label>
      </Plot>
      <Readout>
        Alternating harmonic series → A₁D = 2·ln2 = {exact.toFixed(5)} (exact); 3D rock-salt NaCl A
        = 1.74756
      </Readout>
    </div>
  )
}

// Born-Haber cycle for NaCl as a scaled enthalpy staircase (Hess's law). Each
// step is a measured standard enthalpy (kJ/mol); the cumulative height is the
// running enthalpy, and because enthalpy is a state function the whole cycle must
// close on the measured ΔH_f. Real values (NIST/CRC): sublimation Na +107,
// ½ bond dissociation ½D(Cl₂) +122, ionization IE₁(Na) +496, electron affinity
// EA(Cl) −349, lattice enthalpy −787 → Σ = ΔH_f(NaCl) = −411 kJ/mol. The bars are
// drawn to a linear energy axis so every rise/drop is to true scale.
export function BornHaberViz() {
  const steps = [
    { dh: 107, label: 'sublime Na', tex: '+107' },
    { dh: 122, label: '½ D(Cl₂)', tex: '+122' },
    { dh: 496, label: 'IE₁ Na', tex: '+496' },
    { dh: -349, label: 'EA Cl', tex: '−349' },
    { dh: -787, label: 'lattice', tex: '−787' }
  ]
  const cum = [0]
  steps.forEach(s => cum.push(cum[cum.length - 1] + s.dh))
  const dHf = cum[cum.length - 1]
  const W = 560,
    H = 380
  const padL = 44,
    padR = 16,
    padT = 30,
    padB = 42
  const eMin = -420,
    eMax = 740
  const yOf = e => padT + (1 - (e - eMin) / (eMax - eMin)) * (H - padT - padB)
  const n = cum.length
  const xOf = i => padL + (i / (n - 1)) * (W - padL - padR) * 0.94
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* zero baseline */}
        <line
          x1={padL}
          y1={yOf(0)}
          x2={W - padR}
          y2={yOf(0)}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="2 3"
        />
        <text
          x={padL - 6}
          y={yOf(0) + 3}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          0
        </text>
        {/* level bars + connectors */}
        {cum.map((e, i) => {
          const x0 = xOf(i),
            x1 = i < n - 1 ? xOf(i + 1) : x0
          return (
            <line
              key={'lvl' + i}
              x1={xOf(i) - (W - padL - padR) * 0.06}
              y1={yOf(e)}
              x2={xOf(i) + (W - padL - padR) * 0.06}
              y2={yOf(e)}
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
          )
        })}
        {steps.map((s, i) => {
          const xa = xOf(i) + (W - padL - padR) * 0.06
          const xb = xOf(i + 1) - (W - padL - padR) * 0.06
          const ya = yOf(cum[i]),
            yb = yOf(cum[i + 1])
          const up = s.dh > 0
          return (
            <g key={'st' + i}>
              <line
                x1={xOf(i)}
                y1={ya}
                x2={xOf(i + 1)}
                y2={yb}
                stroke={FG}
                strokeOpacity={OPACITY.accent}
                strokeWidth={STROKE_SECONDARY}
                strokeDasharray="3 3"
              />
              <text
                x={(xOf(i) + xOf(i + 1)) / 2}
                y={(ya + yb) / 2 + (up ? -4 : 12)}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {s.tex}
              </text>
              <text
                x={(xOf(i) + xOf(i + 1)) / 2}
                y={H - 24}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                letterSpacing="0.04em"
                style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase' }}
              >
                {s.label}
              </text>
            </g>
          )
        })}
        {/* ΔHf marker */}
        <line
          x1={xOf(n - 1) - (W - padL - padR) * 0.06}
          y1={yOf(dHf)}
          x2={W - padR}
          y2={yOf(dHf)}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="2 3"
        />
        <TexPx
          x={W - padR}
          y={yOf(dHf) - 5}
          anchor="end"
          tex={'\\Delta H_f = -411'}
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <text
          x={padL - 6}
          y={padT + 4}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          kJ/mol
        </text>
      </Canvas>
      <Readout>
        Σ steps = 107 + 122 + 496 − 349 − 787 = {dHf} kJ/mol = ΔH_f(NaCl); cycle closes (Hess's
        law), lattice enthalpy the only unmeasured leg
      </Readout>
    </div>
  )
}

// Temperature control of spontaneity via ΔG = ΔH − TΔS (drawn as a straight line
// in T: intercept ΔH, slope −ΔS). For calcium-carbonate decomposition
// CaCO₃(s) → CaO(s) + CO₂(g), both ΔH and ΔS are positive, so ΔG falls with T and
// the reaction becomes spontaneous only above the crossover T = ΔH/ΔS. Values
// (standard thermodynamic tables): ΔH° = +178.3 kJ/mol, ΔS° = +160.6 J/mol·K →
// T_cross = 1110 K ≈ 837 °C, matching the observed ~840 °C calcination onset.
export function GibbsCrossoverViz() {
  const dH = 178.3 // kJ/mol
  const dS = 0.1606 // kJ/mol·K
  const dG = T => dH - T * dS
  const Tcross = dH / dS
  const Tmax = 1800,
    yMin = -120,
    yMax = 200
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, Tmax]} yRange={[yMin, yMax]} width={560} height={340} pad={32}>
        <Polyline
          points={[
            [0, 0],
            [Tmax, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* spontaneous region shade (ΔG<0) */}
        <Polyline
          points={[
            [Tcross, 0],
            [Tmax, 0],
            [Tmax, dG(Tmax)]
          ]}
          closed
          fillOpacity={0.12}
          opacity={0}
        />
        <Parametric
          xy={t => [t, dG(t)]}
          t={[0, Tmax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [Tcross, yMin],
            [Tcross, 0]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          dash="5 4"
        />
        <Dot x={Tcross} y={0} r={2.8} opacity={OPACITY.fg} />
        <Tex
          at={[Tcross + 30, yMin + 40]}
          tex={'T=\\dfrac{\\Delta H}{\\Delta S}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[220, dG(220) + 12]}
          tex={'\\Delta G=\\Delta H-T\\Delta S'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[Tmax * 0.7, 24]}
          tex={'\\Delta G<0\\;\\text{(spontaneous)}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Label at={[Tmax / 2, yMin - 10]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          TEMPERATURE / K
        </Label>
        <Tex
          at={[20, yMax - 4]}
          anchor="start"
          tex={'\\Delta G\\ /\\ \\mathrm{kJ\\cdot mol^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label at={[Tcross, yMin + 4]} anchor="middle" size={FONT_SMALL} opacity={OPACITY.fg}>
          {Math.round(Tcross) + ' K'}
        </Label>
      </Plot>
      <Readout>
        CaCO₃ → CaO + CO₂: ΔH° = +178.3 kJ/mol, ΔS° = +160.6 J/mol·K → T_cross ={' '}
        {Math.round(Tcross)} K ({Math.round(Tcross - 273)} °C), near the ~840 °C calcination onset
      </Readout>
    </div>
  )
}

// Lattice energy scales as 1/d at fixed charge, the Kapustinskii/Born-Landé 1/d
// dependence. For the potassium halides KF→KCl→KBr→KI (all +1/−1, so the charge
// product is constant), the Born-Haber lattice energies fall smoothly as the
// interionic distance d = r₊ + r₋ grows. Plotting U against 1/d gives a straight
// line through ~the origin, the honest test that U ∝ 1/d. Values: Shannon radii
// K⁺ 138 pm; F⁻ 133, Cl⁻ 181, Br⁻ 196, I⁻ 220 pm; lattice energies KF 808, KCl
// 701, KBr 671, KI 632 kJ/mol (standard Born-Haber tables).
export function LatticeEnergyTrendViz() {
  const salts = [
    { n: 'KF', d: 271, U: 808 },
    { n: 'KCl', d: 319, U: 701 },
    { n: 'KBr', d: 334, U: 671 },
    { n: 'KI', d: 358, U: 632 }
  ]
  const xOf = s => 1000 / s.d // 1/d in 1/nm
  const xs = salts.map(xOf)
  const xMin = 2.4,
    xMax = 4.0,
    yMin = 560,
    yMax = 860
  // least-squares line through data (honest fit, not eyeballed)
  const N = salts.length
  const sx = xs.reduce((a, b) => a + b, 0),
    sy = salts.reduce((a, s) => a + s.U, 0)
  const sxx = xs.reduce((a, b) => a + b * b, 0),
    sxy = salts.reduce((a, s, i) => a + xs[i] * s.U, 0)
  const slope = (N * sxy - sx * sy) / (N * sxx - sx * sx)
  const intc = (sy - slope * sx) / N
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[yMin, yMax]} width={560} height={340} pad={38}>
        <Parametric
          xy={t => [t, slope * t + intc]}
          t={[xMin, xMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          dash="5 4"
        />
        {salts.map((s, i) => (
          <g key={s.n}>
            <Dot x={xs[i]} y={s.U} r={3} opacity={OPACITY.fg} />
            <Tex
              at={[xs[i], s.U + 22]}
              tex={`\\text{${s.n}}`}
              anchor="middle"
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
          </g>
        ))}
        <Tex
          at={[(xMin + xMax) / 2, yMin - 22]}
          anchor="middle"
          tex={'\\dfrac{1}{d}\\ \\ (\\mathrm{nm^{-1}})'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[xMin + 0.02, yMax - 6]}
          anchor="start"
          tex={'\\text{LATTICE ENERGY}\\ /\\ \\mathrm{kJ\\cdot mol^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Fixed +1/−1 charge: U falls KF 808 → KI 632 as d grows; U vs 1/d linear (fit slope{' '}
        {slope.toFixed(0)} kJ·nm/mol) confirms U ∝ 1/d
      </Readout>
    </div>
  )
}

// Trouton's rule: for many liquids the molar entropy of vaporization ΔS_vap =
// ΔH_vap/T_b is nearly constant at ~85 J·mol⁻¹·K⁻¹, so ΔH_vap rises roughly
// linearly with the normal boiling point. Plotting measured ΔH_vap against T_b
// with the reference line ΔH = 85·T_b shows most liquids clustering on the line;
// water and ethanol sit ABOVE it (ΔS_vap ≈ 109/110) because hydrogen bonding
// orders the liquid, and light gases (N₂, Ar) sit slightly below (65–75). Values
// are measured ΔH_vap / T_b (NIST); the line is the Trouton constant (LibreTexts).
export function TroutonRuleViz() {
  const data = [
    { n: 'N₂', t: '\\text{N}_2', Tb: 77.4, H: 5.57 },
    { n: 'Ar', t: '\\text{Ar}', Tb: 87.3, H: 6.43 },
    { n: 'CHCl₃', t: '\\text{CHCl}_3', Tb: 334.3, H: 29.4 },
    { n: 'CCl₄', t: '\\text{CCl}_4', Tb: 349.9, H: 29.82 },
    { n: 'benzene', t: '\\text{benzene}', Tb: 353.2, H: 30.7 },
    { n: 'toluene', t: '\\text{toluene}', Tb: 383.8, H: 33.2 },
    { n: 'Hg', t: '\\text{Hg}', Tb: 629.9, H: 59.1 },
    { n: 'water', t: '\\text{water}', Tb: 373.2, H: 40.7, out: true },
    { n: 'ethanol', t: '\\text{ethanol}', Tb: 351.4, H: 38.6, out: true }
  ]
  const K = 0.085 // kJ/mol per K (Trouton constant)
  const xMax = 680,
    yMax = 66
  // staggered label offsets (data units) so the mid-range cluster doesn't collide
  const LAB = {
    'N₂': { dx: 0, dy: -3.4, a: 'middle' },
    Ar: { dx: 0, dy: 3.6, a: 'middle' },
    'CHCl₃': { dx: -7, dy: -0.6, a: 'end' },
    'CCl₄': { dx: 0, dy: -3.6, a: 'middle' },
    benzene: { dx: 0, dy: 3.4, a: 'middle' },
    toluene: { dx: 9, dy: 0.4, a: 'start' },
    ethanol: { dx: -7, dy: 0.4, a: 'end' },
    water: { dx: 7, dy: 1.0, a: 'start' },
    Hg: { dx: -7, dy: 0.4, a: 'end' }
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, yMax]} width={560} height={360} pad={34}>
        <Parametric
          xy={t => [t, K * t]}
          t={[0, xMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          dash="5 4"
        />
        {data.map(d => {
          const l = LAB[d.n]
          return (
            <g key={d.n}>
              <Dot x={d.Tb} y={d.H} r={3} opacity={OPACITY.fg} fill={!d.out} />
              <Tex
                at={[d.Tb + l.dx, d.H + l.dy]}
                tex={d.t}
                anchor={l.a}
                size={FONT_SMALL}
                opacity={d.out ? OPACITY.fg : OPACITY.dim}
              />
            </g>
          )
        })}
        <Tex
          at={[500, K * 500 + 3]}
          tex={'\\Delta H=85\\,T_b'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label at={[xMax / 2, -4]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          NORMAL BOILING POINT T_b / K
        </Label>
        <Tex
          at={[14, yMax - 1]}
          anchor="start"
          tex={'\\Delta H_{\\mathrm{vap}}\\ /\\ \\mathrm{kJ\\cdot mol^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        ΔS_vap = ΔH_vap/T_b ≈ 85 J·mol⁻¹·K⁻¹ for normal liquids; water (109) & ethanol (110) sit
        above, H-bonding orders the liquid
      </Readout>
    </div>
  )
}

// UNIT 05 · CHEMICAL EQUILIBRIUM

// Dynamic equilibrium as the meeting of opposing rates. For A ⇌ B the forward
// rate is k_f[A] and the reverse is k_r[B]; the net approach obeys the analytic
// solution [A](t) = [A]_eq + ([A]₀−[A]_eq)·e^(−(k_f+k_r)t) with [A]_eq =
// k_r/(k_f+k_r). Equilibrium is NOT a stop, it is where the two rates become
// equal (k_f[A]_eq = k_r[B]_eq), and the ratio locks at K = [B]/[A] = k_f/k_r.
// Both concentration and rate curves are computed from these equations. Shown for
// k_f = 2, k_r = 1 (s⁻¹) → K = 2, [A]_eq = 1/3, [B]_eq = 2/3.
export function ApproachToEquilibriumViz() {
  const kf = 2,
    kr = 1
  const A0 = 1
  const Aeq = kr / (kf + kr) // 1/3
  const A = t => Aeq + (A0 - Aeq) * Math.exp(-(kf + kr) * t)
  const B = t => A0 - A(t)
  const rf = t => kf * A(t)
  const rr = t => kr * B(t)
  const K = kf / kr
  const tMax = 3
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Plot xRange={[0, tMax]} yRange={[0, 1.05]} width={280} height={230} pad={24}>
            <Parametric
              xy={t => [t, A(t)]}
              t={[0, tMax]}
              opacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <Parametric
              xy={t => [t, B(t)]}
              t={[0, tMax]}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
              dash="5 4"
            />
            <Polyline
              points={[
                [0, Aeq],
                [tMax, Aeq]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 3"
            />
            <Polyline
              points={[
                [0, 1 - Aeq],
                [tMax, 1 - Aeq]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 3"
            />
            <Tex
              at={[2.1, A(2.1) + 0.08]}
              tex={'[A]'}
              anchor="start"
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
            <Tex
              at={[2.1, B(2.1) - 0.12]}
              tex={'[B]'}
              anchor="start"
              size={FONT_LABEL}
              opacity={OPACITY.accent}
            />
            <Label at={[tMax / 2, -0.03]} anchor="middle" size={FONT_SMALL} opacity={OPACITY.dim}>
              TIME
            </Label>
            <Label at={[0.05, 1.02]} anchor="start" size={FONT_SMALL} opacity={OPACITY.dim}>
              CONCENTRATION
            </Label>
          </Plot>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Plot xRange={[0, tMax]} yRange={[0, 2.1]} width={280} height={230} pad={24}>
            <Parametric
              xy={t => [t, rf(t)]}
              t={[0, tMax]}
              opacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <Parametric
              xy={t => [t, rr(t)]}
              t={[0, tMax]}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
              dash="5 4"
            />
            <Polyline
              points={[
                [0, kf * Aeq],
                [tMax, kf * Aeq]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 3"
            />
            <Tex
              at={[1.4, rf(1.4) + 0.14]}
              tex={'k_f[A]'}
              anchor="start"
              size={FONT_LABEL}
              opacity={OPACITY.fg}
            />
            <Tex
              at={[1.4, rr(1.4) - 0.2]}
              tex={'k_r[B]'}
              anchor="start"
              size={FONT_LABEL}
              opacity={OPACITY.accent}
            />
            <Label at={[tMax / 2, -0.06]} anchor="middle" size={FONT_SMALL} opacity={OPACITY.dim}>
              TIME
            </Label>
            <Label at={[0.05, 2.04]} anchor="start" size={FONT_SMALL} opacity={OPACITY.dim}>
              RATE
            </Label>
          </Plot>
        </div>
      </div>
      <Readout>
        k_f = 2, k_r = 1 s⁻¹ → rates converge (k_f[A]=k_r[B]); K = k_f/k_r = {K}, [A]_eq ={' '}
        {Aeq.toFixed(3)}, [B]_eq = {(1 - Aeq).toFixed(3)}
      </Readout>
    </div>
  )
}

// Equilibrium as the minimum of the Gibbs energy along the extent of reaction ξ.
// For A ⇌ B, G(ξ) = ξ·Δ_rG° + RT[(1−ξ)ln(1−ξ) + ξ ln ξ], where the second term is
// the entropy of mixing that BENDS the straight reaction line into a well. The
// minimum sits where dG/dξ = Δ_rG° + RT·ln(ξ/(1−ξ)) = 0, i.e. where the reaction
// quotient equals K, that IS the thermodynamic definition of equilibrium.
// Computed with Δ_rG° = −RT·ln K; shown for K = 4 (Δ_rG° = −3.44 kJ/mol at 298 K)
// → the minimum falls at ξ_eq = 0.80, solving ξ/(1−ξ) = K.
export function GibbsExtentViz() {
  const RT = 2.4789 // kJ/mol at 298.15 K
  const K = 4
  const dGr = -RT * Math.log(K) // −3.436
  const G = x => x * dGr + RT * ((1 - x) * Math.log(1 - x) + x * Math.log(x))
  const xeq = K / (1 + K) // 0.8
  const yMin = -4.4,
    yMax = 0.5
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, 1]} yRange={[yMin, yMax]} width={560} height={340} pad={32}>
        {/* straight reaction line ξ·ΔrG° (no mixing) for contrast */}
        <Polyline
          points={[
            [0, 0],
            [1, dGr]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Parametric
          xy={t => [t, G(t)]}
          t={[0.001, 0.999]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [xeq, yMin],
            [xeq, G(xeq)]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          dash="5 4"
        />
        <Dot x={xeq} y={G(xeq)} r={2.8} opacity={OPACITY.fg} />
        <Tex
          at={[xeq + 0.02, G(xeq) - 0.35]}
          tex={'\\left.\\dfrac{dG}{d\\xi}\\right|=0\\Rightarrow Q=K'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[0.12, -0.55]}
          tex={'\\xi\\,\\Delta_r G^\\circ'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0.5, G(0.5) + 0.28]}
          tex={'G(\\xi)'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[xeq, yMin + 0.2]}
          anchor="middle"
          tex={'\\xi_{\\mathrm{eq}} = 0.80'}
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0.5, yMin - 0.16]}
          anchor="middle"
          tex={'\\text{EXTENT OF REACTION }\\xi'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[0.02, yMax - 0.05]}
          anchor="start"
          tex={'G\\ /\\ \\mathrm{kJ\\cdot mol^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Mixing entropy bends ξ·Δ_rG° into a well; K = 4 → minimum at ξ_eq = {xeq.toFixed(2)} where Q
        = K (dG/dξ = 0)
      </Readout>
    </div>
  )
}

// van 't Hoff plot: ln K versus 1/T is a straight line of slope −Δ_rH°/R, the
// temperature dependence of the equilibrium constant. Built from the real
// thermodynamics of N₂O₄(g) ⇌ 2NO₂(g): Δ_rH° = +57.2 kJ/mol, Δ_rS° = +175.8
// J/mol·K (standard tables), so ln K = −Δ_rH°/(RT) + Δ_rS°/R. Because the
// dissociation is ENDOTHERMIC, ln K rises with T (heating favours products, Le
// Chatelier). Worked point: at 298 K, ln K = −1.94 → Kp = 0.14, the textbook
// N₂O₄ dissociation constant. The slope is read back to recover Δ_rH°.
export function VantHoffViz() {
  const dH = 57200,
    dS = 175.8,
    R = 8.314
  const lnK = T => -dH / (R * T) + dS / R
  // x-axis: 1000/T (K⁻¹×10³) for readability
  const T1 = 280,
    T2 = 380
  const x = T => 1000 / T
  const xMin = x(T2),
    xMax = x(T1) // 2.63 .. 3.57
  const yMin = -4,
    yMax = 3
  const marks = [280, 298, 330, 360]
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[xMin - 0.05, xMax + 0.05]}
        yRange={[yMin, yMax]}
        width={560}
        height={340}
        pad={34}
      >
        <Polyline
          points={[
            [xMin - 0.05, 0],
            [xMax + 0.05, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Parametric
          xy={t => [t, lnK(1000 / t)]}
          t={[xMin, xMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {marks.map(T => (
          <g key={T}>
            <Dot x={x(T)} y={lnK(T)} r={2.6} opacity={OPACITY.fg} />
            <Label
              at={[x(T), lnK(T) + (T === 298 ? -0.5 : 0.42)]}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
            >
              {T + 'K'}
            </Label>
          </g>
        ))}
        <Tex
          at={[2.9, lnK(1000 / 2.9) + 0.5]}
          tex={'\\ln K=-\\dfrac{\\Delta_r H^\\circ}{RT}+\\dfrac{\\Delta_r S^\\circ}{R}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[(xMin + xMax) / 2, yMin - 0.3]}
          anchor="middle"
          tex={'\\dfrac{10^{3}}{T}\\ \\ (\\mathrm{K^{-1}})'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[xMin - 0.02, yMax - 0.1]}
          anchor="start"
          tex={'\\ln K'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        N₂O₄ ⇌ 2NO₂: slope = −Δ_rH°/R → Δ_rH° = +57.2 kJ/mol (endothermic). ln K rises with T; at
        298 K ln K = {lnK(298).toFixed(2)} → Kp = {Math.exp(lnK(298)).toFixed(2)}
      </Readout>
    </div>
  )
}

// Le Chatelier under compression, solved quantitatively. N₂O₄(g) ⇌ 2NO₂(g) with
// K_c = 0.10 mol/L: start from 1.00 mol N₂O₄ in 1.00 L, solve the equilibrium
// quadratic, then HALVE the volume. Compression doubles every concentration, so
// Q jumps to ~0.20 > K_c, and the system re-equilibrates toward the side with
// FEWER gas molecules (N₂O₄). The bars show the recomputed amounts before/after, // NO₂ decreases and N₂O₄ increases. Both equilibria are solved live from the
// mass-action quadratic (no hand-drawn bars).
export function LeChatelierViz() {
  const Kc = 0.1
  // solve N2O4 ⇌ 2NO2 in volume V starting from n0 mol N2O4 (amounts, mol)
  const solve = (nN2O4_0, nNO2_0, V) => {
    // let ξ = mol N2O4 that dissociate (can be negative = recombine)
    // conc: [N2O4]=(nN2O4_0−ξ)/V, [NO2]=(nNO2_0+2ξ)/V ; Kc=[NO2]²/[N2O4]
    // (nNO2_0+2ξ)²/V² = Kc·(nN2O4_0−ξ)/V  →  (nNO2_0+2ξ)² = Kc·V·(nN2O4_0−ξ)
    // 4ξ² + (4nNO2_0 + Kc·V)ξ + (nNO2_0² − Kc·V·nN2O4_0) = 0
    const a = 4,
      b = 4 * nNO2_0 + Kc * V,
      c = nNO2_0 * nNO2_0 - Kc * V * nN2O4_0
    const disc = Math.sqrt(b * b - 4 * a * c)
    const x1 = (-b + disc) / (2 * a),
      x2 = (-b - disc) / (2 * a)
    // pick root keeping amounts non-negative
    const ok = x => nN2O4_0 - x >= -1e-9 && nNO2_0 + 2 * x >= -1e-9
    const xi = ok(x1) ? x1 : x2
    return { N2O4: nN2O4_0 - xi, NO2: nNO2_0 + 2 * xi }
  }
  const before = solve(1.0, 0.0, 1.0) // 1 L
  const after = solve(before.N2O4, before.NO2, 0.5) // compress to 0.5 L (amounts conserved)
  const W = 560,
    H = 300
  const maxN = 1.0
  const groups = [
    { label: 'BEFORE · V = 1.0 L', d: before, x: 150 },
    { label: 'AFTER · V = 0.5 L', d: after, x: 400 }
  ]
  const baseY = 240,
    barMaxH = 170,
    bw = 46
  const bar = (x, val, accent, lab) => {
    const h = (val / maxN) * barMaxH
    return (
      <g key={x + lab}>
        <rect
          x={x}
          y={baseY - h}
          width={bw}
          height={h}
          fill={FG}
          fillOpacity={accent ? 0.28 : 0.14}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={x + bw / 2}
          y={baseY - h - 6}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {val.toFixed(3)}
        </text>
        <text
          x={x + bw / 2}
          y={baseY + 14}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {lab}
        </text>
      </g>
    )
  }
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={40}
          y1={baseY}
          x2={W - 20}
          y2={baseY}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        {groups.map(g => (
          <g key={g.label}>
            {bar(g.x, g.d.N2O4, true, 'N₂O₄')}
            {bar(g.x + 64, g.d.NO2, false, 'NO₂')}
            <text
              x={g.x + 55}
              y={30}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              letterSpacing="0.08em"
              style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase' }}
            >
              {g.label}
            </text>
          </g>
        ))}
        {/* shift arrow + label, stacked in the gap between the two groups (no overlap) */}
        <text
          x={330}
          y={150}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          shifts to fewer moles
        </text>
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={358} y1={170} x2={302} y2={170} />
          <polyline points="310,164 302,170 310,176" />
        </g>
      </Canvas>
      <Readout>
        Compress to ½V: Q ≈ 0.20 &gt; K_c 0.10 → equilibrium shifts left. NO₂{' '}
        {before.NO2.toFixed(3)} → {after.NO2.toFixed(3)} mol, N₂O₄ {before.N2O4.toFixed(3)} →{' '}
        {after.N2O4.toFixed(3)} mol (solved live)
      </Readout>
    </div>
  )
}

// UNIT 06 · ACID–BASE & AQUEOUS EQUILIBRIA

// Geometric [H₃O⁺] → pH solver by log-space bisection. Given a charge-balance
// residual f([H]) that is monotonic in [H], returns the [H⁺] root over the whole
// pH window. Used by every titration/speciation curve below so the pH is SOLVED
// from the exact balance, never sketched. (Module helper, not a catalog export.)
function _bisectH(f) {
  let lo = 1e-14,
    hi = 1
  let flo = f(lo)
  for (let i = 0; i < 90; i++) {
    const mid = Math.sqrt(lo * hi)
    const fm = f(mid)
    if (fm > 0 === flo > 0) {
      lo = mid
      flo = fm
    } else {
      hi = mid
    }
  }
  return Math.sqrt(lo * hi)
}

// Honest pH scale: pH is a base-10 logarithm of [H₃O⁺], so every unit is a
// TENFOLD change in acidity and pH + pOH = 14 at 25 °C. Common substances are
// placed at their measured pH; the paired [H₃O⁺] = 10^(−pH) is computed and shown
// on a log strip beneath, making the logarithmic compression explicit (gastric
// acid is ~10⁶× more acidic than blood). Kw = 1.0×10⁻¹⁴.
export function PHScaleViz() {
  const items = [
    { pH: 1.5, n: 'gastric acid' },
    { pH: 2.3, n: 'lemon' },
    { pH: 2.9, n: 'vinegar' },
    { pH: 4.3, n: 'tomato' },
    { pH: 5.0, n: 'black coffee' },
    { pH: 7.0, n: 'pure water' },
    { pH: 7.4, n: 'blood' },
    { pH: 8.1, n: 'seawater' },
    { pH: 11.6, n: 'ammonia' },
    { pH: 12.6, n: 'bleach' }
  ]
  const W = 560,
    H = 320
  const padL = 40,
    padR = 24
  const xOf = pH => padL + (pH / 14) * (W - padL - padR)
  const axisY = 150
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={padL}
          y1={axisY}
          x2={W - padR}
          y2={axisY}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {Array.from({ length: 15 }, (_, i) => (
          <g key={i}>
            <line
              x1={xOf(i)}
              y1={axisY - 5}
              x2={xOf(i)}
              y2={axisY + 5}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={xOf(i)}
              y={axisY + 20}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {i}
            </text>
          </g>
        ))}
        {/* neutral marker */}
        <line
          x1={xOf(7)}
          y1={40}
          x2={xOf(7)}
          y2={axisY}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="3 3"
        />
        <text
          x={xOf(7)}
          y={34}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          neutral
        </text>
        {/* substance labels alternating above/below */}
        {items.map((it, i) => {
          const above = i % 2 === 0
          const y = above
            ? axisY - 12 - (i % 4 === 0 ? 0 : 18)
            : axisY + 34 + (i % 4 === 1 ? 0 : 18)
          return (
            <g key={it.n}>
              <line
                x1={xOf(it.pH)}
                y1={axisY}
                x2={xOf(it.pH)}
                y2={above ? y + 6 : y - 10}
                stroke={FG}
                strokeOpacity={OPACITY.faint}
                strokeWidth={STROKE_SECONDARY}
              />
              <circle cx={xOf(it.pH)} cy={axisY} r={2.6} fill={FG} opacity={OPACITY.fg} />
              <text
                x={xOf(it.pH)}
                y={y}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {it.n}
              </text>
            </g>
          )
        })}
        {/* [H+] log strip */}
        <TexPx
          x={padL}
          y={H - 40}
          anchor="start"
          tex={'\\mathrm{[H_3O^+]} = 10^{-\\mathrm{pH}}\\ \\mathrm{mol/L}'}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
          width={253}
        />
        {[0, 3, 7, 11, 14].map(pH => (
          <text
            key={pH}
            x={xOf(pH)}
            y={H - 18}
            fill={FG}
            opacity={OPACITY.dim}
            fontSize={FONT_TINY}
            textAnchor="middle"
            style={{ fontFamily: FONT_FAMILY }}
          >{`10^${-pH}`}</text>
        ))}
        <text
          x={(padL + W - padR) / 2}
          y={axisY - 92}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.1em' }}
        >
          pH
        </text>
      </Canvas>
      <Readout>
        Each pH unit = 10× in [H₃O⁺]; pH + pOH = 14 (Kw = 10⁻¹⁴). Gastric acid (pH 1.5) is ~10⁶×
        more acidic than blood (pH 7.4)
      </Readout>
    </div>
  )
}

// Polyprotic speciation: fraction of each phosphate species vs pH, computed from
// the exact distribution αᵢ = (term)/D with D = [H]³+Ka₁[H]²+Ka₁Ka₂[H]+Ka₁Ka₂Ka₃.
// The curves cross exactly at the pKa values (where adjacent species are equal),
// so the four forms H₃PO₄ / H₂PO₄⁻ / HPO₄²⁻ / PO₄³⁻ dominate in successive pH
// windows. pKa (25 °C): 2.15, 7.20, 12.35 (standard). Nothing is drawn by hand, // each α is evaluated from the mass-action denominator.
export function SpeciationViz() {
  const pKa = [2.15, 7.2, 12.35]
  const Ka = pKa.map(p => Math.pow(10, -p))
  const alpha = pH => {
    const h = Math.pow(10, -pH)
    const t0 = h * h * h,
      t1 = Ka[0] * h * h,
      t2 = Ka[0] * Ka[1] * h,
      t3 = Ka[0] * Ka[1] * Ka[2]
    const D = t0 + t1 + t2 + t3
    return [t0 / D, t1 / D, t2 / D, t3 / D]
  }
  const curve = i => {
    const pts = []
    for (let pH = 0; pH <= 14; pH += 0.1) pts.push([pH, alpha(pH)[i]])
    return pts
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, 14]} yRange={[0, 1.08]} width={560} height={340} pad={30}>
        {[0, 1, 2, 3].map(i => (
          <Parametric
            key={i}
            xy={t => [t, alpha(t)[i]]}
            t={[0, 14]}
            samples={280}
            opacity={i % 2 ? OPACITY.accent : OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
            dash={i % 2 ? '5 4' : undefined}
          />
        ))}
        {pKa.map(p => (
          <Polyline
            key={p}
            points={[
              [p, 0],
              [p, 1.0]
            ]}
            opacity={OPACITY.faint}
            strokeWidth={STROKE_SECONDARY}
            dash="2 3"
          />
        ))}
        {pKa.map((p, i) => (
          <Label
            key={p}
            at={[p, -0.03]}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.accent}
          >{`pKa${i + 1}`}</Label>
        ))}
        {[
          [1, '\\text{H}_3\\text{PO}_4'],
          [4.7, '\\text{H}_2\\text{PO}_4^{-}'],
          [9.8, '\\text{HPO}_4^{2-}'],
          [13.4, '\\text{PO}_4^{3-}']
        ].map(([x, tx]) => (
          <Tex
            key={tx}
            at={[x, 1.03]}
            tex={tx}
            anchor="middle"
            size={FONT_SMALL}
            opacity={OPACITY.fg}
          />
        ))}
        <Label at={[7, -0.03]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} dy={16}>
          pH
        </Label>
        <Tex
          at={[0.2, 1.06]}
          anchor="start"
          tex={'\\text{FRACTION }\\alpha'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        H₃PO₄ (pKa 2.15 / 7.20 / 12.35): adjacent species cross exactly at each pKa; αᵢ computed
        from the mass-action denominator, not sketched
      </Readout>
    </div>
  )
}

// Henderson–Hasselbalch: for a buffer, pH = pKa + log₁₀([A⁻]/[HA]). Plotting pH
// against the log ratio is a straight line of unit slope passing through pH = pKa
// at a 1:1 ratio, the centre of the buffer's working range (pKa ± 1, shaded).
// Computed for acetic acid, pKa = 4.76 (Ka = 1.8×10⁻⁵). The relation is the
// rearranged Ka expression, so the line IS the equilibrium, not a fit.
export function HendersonHasselbalchViz() {
  const pKa = 4.76
  const pH = logr => pKa + logr
  const xMin = -2,
    xMax = 2
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[pKa - 2.4, pKa + 2.4]} width={560} height={340} pad={34}>
        {/* buffer window pKa ± 1 */}
        <Polyline
          points={[
            [-1, pKa - 2.4],
            [-1, pKa + 2.4]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [1, pKa - 2.4],
            [1, pKa + 2.4]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [xMin, pKa],
            [xMax, pKa]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Parametric
          xy={t => [t, pH(t)]}
          t={[xMin, xMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={0} y={pKa} r={2.8} opacity={OPACITY.fg} />
        <Tex
          at={[0.1, pKa - 0.4]}
          tex={'\\text{pH}=\\text{p}K_a\\;(1{:}1)'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-1.9, pKa + 2.0]}
          tex={'\\text{pH}=\\text{p}K_a+\\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label at={[0, pKa + 2.55]} anchor="middle" size={FONT_TINY} opacity={OPACITY.accent}>
          BUFFER RANGE pKa ± 1
        </Label>
        <Tex
          at={[0, pKa - 2.9]}
          anchor="middle"
          tex={'\\log_{10}\\!\\left(\\frac{\\mathrm{[A^-]}}{\\mathrm{[HA]}}\\right)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label
          at={[xMin + 0.05, pKa + 2.35]}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          pH
        </Label>
      </Plot>
      <Readout>
        Acetic acid, pKa = 4.76: pH = pKa + log([A⁻]/[HA]); line crosses pH = pKa at 1:1, buffering
        strongest within pKa ± 1
      </Readout>
    </div>
  )
}

// Titration curves from the EXACT charge balance, no drawn S-curve. A 0.100 M,
// 25.0 mL acid is titrated with 0.100 M NaOH. Strong acid (HCl): the proton
// balance [H⁺]−Kw/[H⁺] = (C_aV_a−C_bV_b)/(V_a+V_b) gives a near-flat approach and
// a vertical jump through pH 7 at the 25 mL equivalence point. Weak acid (acetic,
// Ka = 1.8×10⁻⁵): the same balance with [A⁻] = C_tot·Ka/(Ka+[H⁺]) yields the
// buffer plateau, the half-equivalence point at pH = pKa = 4.76 (12.5 mL), and a
// BASIC equivalence point (~8.7). Every pH is solved from the balance at each Vb.
export function StrongWeakTitrationViz() {
  const Kw = 1e-14,
    Ca = 0.1,
    Cb = 0.1,
    Va = 25,
    Ka = 1.8e-5
  const pKa = -Math.log10(Ka)
  const pHstrong = Vb => {
    const D = (Ca * Va - Cb * Vb) / (Va + Vb)
    const H = (D + Math.sqrt(D * D + 4 * Kw)) / 2
    return -Math.log10(H)
  }
  const pHweak = Vb => {
    const Ctot = (Ca * Va) / (Va + Vb)
    const Na = (Cb * Vb) / (Va + Vb)
    const f = H => Na + H - Kw / H - (Ctot * Ka) / (Ka + H)
    return -Math.log10(_bisectH(f))
  }
  const Vmax = 50
  const cs = f => {
    const pts = []
    for (let Vb = 0; Vb <= Vmax; Vb += 0.25) pts.push([Vb, f(Vb)])
    return pts
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, Vmax]} yRange={[0, 14]} width={560} height={360} pad={32}>
        <Polyline
          points={[
            [0, 7],
            [Vmax, 7]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [25, 0],
            [25, 14]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline points={cs(pHstrong)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={cs(pHweak)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Dot x={12.5} y={pKa} r={2.6} opacity={OPACITY.accent} />
        <Tex
          at={[13.5, pKa - 0.2]}
          tex={'\\tfrac{1}{2}\\text{eq}:\\;\\text{pH}=\\text{p}K_a'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[3, 11.5]}
          tex={'\\text{strong}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[3, 6.0]}
          tex={'\\text{weak (acetic)}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label at={[25, -0.4]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={16}>
          eq. pt 25 mL
        </Label>
        <Label
          at={[Vmax / 2, -0.4]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
          dy={30}
        >
          VOLUME NaOH / mL
        </Label>
        <Label at={[0.5, 13.6]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          pH
        </Label>
      </Plot>
      <Readout>
        0.1 M acid (25 mL) + 0.1 M NaOH, exact charge balance: strong jumps through pH 7; weak has
        pH=pKa={pKa.toFixed(2)} at 12.5 mL, equivalence pH {pHweak(25).toFixed(1)}
      </Readout>
    </div>
  )
}

// Polyprotic titration of phosphoric acid: 0.100 M, 25.0 mL H₃PO₄ vs 0.100 M
// NaOH, pH solved at every Vb from the full charge balance [Na⁺]+[H⁺] =
// [H₂PO₄⁻]+2[HPO₄²⁻]+3[PO₄³⁻]+[OH⁻] with the three-Ka distribution. Two clear
// equivalence jumps appear at 25 mL and 50 mL, with buffer plateaus at pH = pKa₁
// (2.15) and pKa₂ (7.20); the THIRD jump (pKa₃ = 12.35) is smeared because that
// proton is too weakly acidic to titrate sharply in water. Computed, not sketched.
export function PolyproticTitrationViz() {
  const Kw = 1e-14,
    Ca = 0.1,
    Cb = 0.1,
    Va = 25
  const pKa = [2.15, 7.2, 12.35]
  const Ka = pKa.map(p => Math.pow(10, -p))
  const pH = Vb => {
    const Ctot = (Ca * Va) / (Va + Vb)
    const Na = (Cb * Vb) / (Va + Vb)
    const f = H => {
      const D = H * H * H + Ka[0] * H * H + Ka[0] * Ka[1] * H + Ka[0] * Ka[1] * Ka[2]
      const a1 = (Ka[0] * H * H) / D,
        a2 = (Ka[0] * Ka[1] * H) / D,
        a3 = (Ka[0] * Ka[1] * Ka[2]) / D
      return Na + H - Kw / H - Ctot * (a1 + 2 * a2 + 3 * a3)
    }
    return -Math.log10(_bisectH(f))
  }
  const Vmax = 85
  const pts = []
  for (let Vb = 0; Vb <= Vmax; Vb += 0.3) pts.push([Vb, pH(Vb)])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, Vmax]} yRange={[0, 14]} width={560} height={360} pad={32}>
        {[25, 50, 75].map(v => (
          <Polyline
            key={v}
            points={[
              [v, 0],
              [v, 14]
            ]}
            opacity={OPACITY.faint}
            strokeWidth={STROKE_SECONDARY}
            dash="2 3"
          />
        ))}
        {pKa.map((p, i) => (
          <Polyline
            key={p}
            points={[
              [0, p],
              [Vmax, p]
            ]}
            opacity={OPACITY.hair}
            strokeWidth={STROKE_SECONDARY}
            dash="1 4"
          />
        ))}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {[
          [12.5, 0],
          [37.5, 1]
        ].map(([v, i]) => (
          <Dot key={v} x={v} y={pKa[i]} r={2.4} opacity={OPACITY.accent} />
        ))}
        <Tex
          at={[13, pKa[0] + 0.6]}
          tex={'\\text{p}K_{a1}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[38, pKa[1] + 0.6]}
          tex={'\\text{p}K_{a2}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Label at={[25, 0]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={16}>
          1st eq
        </Label>
        <Label at={[50, 0]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={16}>
          2nd eq
        </Label>
        <Label at={[75, 0]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={16}>
          3rd (smeared)
        </Label>
        <Label at={[Vmax / 2, 0]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} dy={30}>
          VOLUME NaOH / mL
        </Label>
        <Label at={[0.5, 13.6]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          pH
        </Label>
      </Plot>
      <Readout>
        H₃PO₄ (pKa 2.15/7.20/12.35) + NaOH: two sharp equivalence jumps (25, 50 mL), plateaus at
        pKa₁/pKa₂; 3rd proton too weak → smeared
      </Readout>
    </div>
  )
}

// Common-ion effect on solubility: adding Cl⁻ suppresses AgCl dissolution. The
// molar solubility s satisfies Ksp = s·([Cl⁻]_added + s), solved exactly as
// s = (−C + √(C² + 4Ksp))/2. On a log–log plot s starts at √Ksp in pure water and
// falls as ~Ksp/[Cl⁻] once the added ion dominates, a straight −1 slope. Ksp(AgCl)
// = 1.8×10⁻¹⁰, so s drops from 1.3×10⁻⁵ M to ~1.8×10⁻⁹ M at 0.1 M Cl⁻.
export function CommonIonSolubilityViz() {
  const Ksp = 1.8e-10
  const s = C => (-C + Math.sqrt(C * C + 4 * Ksp)) / 2
  // x = log10[Cl-] added, from 1e-6 to 1
  const pts = []
  for (let lx = -6; lx <= 0; lx += 0.05) {
    const C = Math.pow(10, lx)
    pts.push([lx, Math.log10(s(C))])
  }
  const s0 = Math.sqrt(Ksp)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-6, 0]} yRange={[-10, -4]} width={560} height={340} pad={34}>
        <Polyline
          points={[
            [-6, Math.log10(s0)],
            [0, Math.log10(s0)]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Tex
          at={[-5.8, Math.log10(s0) + 0.25]}
          tex={'s_0=\\sqrt{K_{sp}}=1.3\\times10^{-5}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-2.6, -6.6]}
          tex={'s\\approx \\dfrac{K_{sp}}{[\\text{Cl}^-]}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-3, -10.5]}
          anchor="middle"
          tex={'\\log_{10}\\mathrm{[Cl^-]}\\ \\text{added}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-5.9, -4.1]}
          anchor="start"
          tex={'\\log_{10}(\\text{solubility}\\ /\\ \\mathrm{M})'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        AgCl Ksp = 1.8×10⁻¹⁰: s = (−C+√(C²+4Ksp))/2 → falls from √Ksp = 1.3×10⁻⁵ M to{' '}
        {s(0.1).toExponential(1)} M at 0.1 M Cl⁻
      </Readout>
    </div>
  )
}

// Selective precipitation of hydroxides: as [OH⁻] rises, the less-soluble
// Mg(OH)₂ precipitates far before Ca(OH)₂. Each remaining metal ion follows
// [M²⁺] = Ksp/[OH⁻]², plotted vs pH ([OH⁻] = 10^(pH−14)). Starting from 0.10 M of
// each, Mg²⁺ begins dropping near pH 9 while Ca²⁺ stays in solution until much
// higher pH, a wide separation window. Ksp: Mg(OH)₂ 5.6×10⁻¹², Ca(OH)₂ 5.5×10⁻⁶.
export function SelectivePrecipitationViz() {
  const KspMg = 5.6e-12,
    KspCa = 5.5e-6
  const C0 = 0.1
  const conc = (Ksp, pH) => {
    const OH = Math.pow(10, pH - 14)
    return Math.min(C0, Ksp / (OH * OH))
  }
  const curve = Ksp => {
    const pts = []
    for (let pH = 7; pH <= 14; pH += 0.05) pts.push([pH, Math.log10(conc(Ksp, pH))])
    return pts
  }
  // pH where each begins to precipitate ([M]=C0): OH=√(Ksp/C0)
  const onsetPH = Ksp => 14 + Math.log10(Math.sqrt(Ksp / C0))
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[7, 14]} yRange={[-8, 0.5]} width={560} height={340} pad={34}>
        <Polyline points={curve(KspMg)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={curve(KspCa)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Polyline
          points={[
            [onsetPH(KspMg), -8],
            [onsetPH(KspMg), 0.5]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [onsetPH(KspCa), -8],
            [onsetPH(KspCa), 0.5]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Tex
          at={[onsetPH(KspMg) + 0.1, -1.2]}
          tex={'\\text{Mg}^{2+}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[onsetPH(KspCa) - 0.1, -1.2]}
          tex={'\\text{Ca}^{2+}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label at={[10.5, -8.6]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          pH
        </Label>
        <Tex
          at={[7.1, 0.3]}
          anchor="start"
          tex={'\\log_{10}\\mathrm{[M^{2+}]}\\ \\text{remaining}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        [M²⁺] = Ksp/[OH⁻]²: Mg(OH)₂ precipitates from pH {onsetPH(KspMg).toFixed(1)}, Ca(OH)₂ only
        from pH {onsetPH(KspCa).toFixed(1)}, Mg²⁺ down to{' '}
        {conc(KspMg, onsetPH(KspCa)).toExponential(1)} M before Ca starts
      </Readout>
    </div>
  )
}

// UNIT 07 · REDOX & ELECTROCHEMISTRY

// Daniell cell schematic — the canonical galvanic cell. Zinc (anode, −) is
// oxidised, Zn → Zn²⁺ + 2e⁻; the electrons travel the external wire to the copper
// (cathode, +) where Cu²⁺ + 2e⁻ → Cu; the salt bridge carries ions to keep each
// half-cell neutral. Spontaneous because E°_cell = E°(cathode) − E°(anode) =
// +0.34 − (−0.76) = +1.10 V > 0. (An honest labelled schematic, the numeric
// value comes from the standard potentials, shown in the ladder viz.)
export function DaniellCellViz() {
  const W = 560,
    H = 340
  const bx1 = 70,
    bx2 = 330,
    bw = 160,
    by = 150,
    bh = 150
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* beakers */}
        {[bx1, bx2].map(x => (
          <g key={x}>
            <path
              d={`M ${x} ${by} L ${x} ${by + bh} L ${x + bw} ${by + bh} L ${x + bw} ${by}`}
              fill="none"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <line
              x1={x}
              y1={by + 34}
              x2={x + bw}
              y2={by + 34}
              stroke={FG}
              strokeOpacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
            />
          </g>
        ))}
        {/* electrodes */}
        <rect
          x={bx1 + 34}
          y={70}
          width={16}
          height={by + 90 - 70}
          fill={FG}
          fillOpacity={0.14}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <rect
          x={bx2 + bw - 50}
          y={70}
          width={16}
          height={by + 90 - 70}
          fill={FG}
          fillOpacity={0.14}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* wire + voltmeter */}
        <path
          d={`M ${bx1 + 42} 70 L ${bx1 + 42} 40 L ${bx2 + bw - 42} 40 L ${bx2 + bw - 42} 70`}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <circle
          cx={W / 2}
          cy={40}
          r={16}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={W / 2}
          y={44}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          V
        </text>
        {/* electron flow arrow (anode → cathode through wire) */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={bx1 + 80} y1={40} x2={bx1 + 120} y2={40} />
          <polyline points={`${bx1 + 112},34 ${bx1 + 120},40 ${bx1 + 112},46`} />
        </g>
        <TexPx
          x={bx1 + 100}
          y={30}
          anchor="middle"
          tex={'\\mathrm{e^-}'}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        {/* salt bridge */}
        <path
          d={`M ${bx1 + bw - 20} ${by + 20} L ${bx1 + bw - 20} ${by - 16} L ${bx2 + 20} ${by - 16} L ${bx2 + 20} ${by + 20}`}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_EMPHASIS}
        />
        <text
          x={W / 2}
          y={by - 22}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.06em' }}
        >
          salt bridge
        </text>
        {/* labels */}
        <text
          x={bx1 + 42}
          y={H - 44}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Zn ANODE (−)
        </text>
        <text
          x={bx2 + bw - 42}
          y={H - 44}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Cu CATHODE (+)
        </text>
        <TexPx
          x={bx1 + 42}
          y={H - 22}
          anchor="middle"
          tex={'\\mathrm{Zn \\to Zn^{2+} + 2e^-}'}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <TexPx
          x={bx2 + bw - 42}
          y={H - 22}
          anchor="middle"
          tex={'\\mathrm{Cu^{2+} + 2e^- \\to Cu}'}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
      </Canvas>
      <Readout>
        E°_cell = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = +0.34 − (−0.76) = +1.10 V &gt; 0 → spontaneous; e⁻
        flow anode → cathode, ions via salt bridge
      </Readout>
    </div>
  )
}

// Standard electrode-potential ladder (vs the standard hydrogen electrode, SHE =
// 0). Reduction couples are placed at their measured E° (V): the strong reducing
// agents sit low (Li⁺/Li −3.04) and the strong oxidising agents high (F₂/F⁻
// +2.87). For any pair, E°_cell = E°(cathode) − E°(anode) is just the vertical GAP
//, shown for the Daniell pair Cu/Zn = +1.10 V. All values are standard reduction
// potentials (CRC / IUPAC), the honest ordering of oxidising strength.
export function StandardPotentialLadderViz() {
  const couples = [
    ['F₂/F⁻', 2.87],
    ['Cl₂/Cl⁻', 1.36],
    ['O₂/H₂O', 1.23],
    ['Ag⁺/Ag', 0.8],
    ['Cu²⁺/Cu', 0.34],
    ['SHE H⁺/H₂', 0.0],
    ['Fe²⁺/Fe', -0.44],
    ['Zn²⁺/Zn', -0.76],
    ['Al³⁺/Al', -1.66],
    ['Mg²⁺/Mg', -2.37],
    ['Na⁺/Na', -2.71],
    ['Li⁺/Li', -3.04]
  ]
  const W = 560,
    H = 380
  const padT = 24,
    padB = 24,
    axX = 250
  const eMin = -3.4,
    eMax = 3.1
  const yOf = e => padT + (1 - (e - eMin) / (eMax - eMin)) * (H - padT - padB)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={axX}
          y1={padT}
          x2={axX}
          y2={H - padB}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[3, 2, 1, 0, -1, -2, -3].map(e => (
          <g key={e}>
            <line
              x1={axX - 4}
              y1={yOf(e)}
              x2={axX + 4}
              y2={yOf(e)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={axX - 10}
              y={yOf(e) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {e > 0 ? '+' + e : e}
            </text>
          </g>
        ))}
        {couples.map(([n, e]) => {
          const she = n.startsWith('SHE')
          // nudge the two near-degenerate rows apart (ticks stay at true E°)
          const tdy = { 'Cl₂/Cl⁻': -7, 'O₂/H₂O': 7 }[n] || 0
          return (
            <g key={n}>
              <line
                x1={axX + 6}
                y1={yOf(e)}
                x2={axX + 30}
                y2={yOf(e)}
                stroke={FG}
                strokeOpacity={she ? OPACITY.fg : OPACITY.dim}
                strokeWidth={she ? STROKE_EMPHASIS : STROKE_SECONDARY}
              />
              <text
                x={axX + 36}
                y={yOf(e) + 3 + tdy}
                fill={FG}
                opacity={she ? OPACITY.fg : OPACITY.fg}
                fontSize={FONT_SMALL}
                textAnchor="start"
                style={{ fontFamily: FONT_FAMILY }}
              >{`${n}   ${e > 0 ? '+' : ''}${e.toFixed(2)}`}</text>
            </g>
          )
        })}
        {/* Daniell gap bracket Cu(+0.34) to Zn(-0.76) */}
        <g stroke={FG} strokeOpacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} fill="none">
          <line x1={axX - 40} y1={yOf(0.34)} x2={axX - 40} y2={yOf(-0.76)} />
          <line x1={axX - 44} y1={yOf(0.34)} x2={axX - 36} y2={yOf(0.34)} />
          <line x1={axX - 44} y1={yOf(-0.76)} x2={axX - 36} y2={yOf(-0.76)} />
        </g>
        <text
          x={axX - 48}
          y={yOf(-0.21)}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_SMALL}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          1.10 V
        </text>
        <text
          x={axX + 36}
          y={padT - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.06em' }}
        >
          strong oxidant ↑
        </text>
        <text
          x={axX + 36}
          y={H - padB + 14}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.06em' }}
        >
          strong reductant ↓
        </text>
        <TexPx
          x={axX - 30}
          y={16}
          anchor="middle"
          tex={'E^\\circ\\ /\\ \\mathrm{V}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Canvas>
      <Readout>
        E° vs SHE (0 V): F₂/F⁻ +2.87 (strongest oxidant) → Li⁺/Li −3.04 (strongest reductant);
        E°_cell = gap = E°(cath) − E°(an)
      </Readout>
    </div>
  )
}

// Nernst equation: the cell potential falls as the reaction quotient rises,
// E = E° − (0.05916/n)·log₁₀ Q at 25 °C. Plotted for the Daniell cell (n = 2,
// E° = +1.10 V) against log Q, a straight line of slope −0.05916/2 = −0.0296 V per
// decade. Worked point: at Q = 100 (log Q = 2), E = 1.10 − 0.0296·2 = 1.041 V; the
// cell reaches E = 0 (dead battery) at log Q = nE°/0.05916 = 37.2, i.e. Q = K.
export function NernstViz() {
  const E0 = 1.1,
    n = 2,
    slope = 0.05916 / n
  const E = logQ => E0 - slope * logQ
  const xMin = -10,
    xMax = 20
  const logK = (n * E0) / 0.05916
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[0.6, 1.5]} width={560} height={340} pad={34}>
        <Polyline
          points={[
            [xMin, E0],
            [xMax, E0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, 0.6],
            [0, 1.5]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Parametric
          xy={t => [t, E(t)]}
          t={[xMin, xMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={0} y={E0} r={2.8} opacity={OPACITY.fg} />
        <Dot x={2} y={E(2)} r={2.6} opacity={OPACITY.accent} />
        <Tex
          at={[2.6, E(2) + 0.02]}
          tex={'Q=100:\\;1.04\\,\\text{V}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-9, 0.78]}
          tex={'E=E^\\circ-\\dfrac{0.05916}{n}\\log Q'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0.4, 1.46]}
          tex={'E^\\circ=1.10\\,\\text{V}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[(xMin + xMax) / 2, 0.56]}
          anchor="middle"
          tex={'\\log_{10} Q'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label at={[xMin + 0.3, 1.48]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          E_cell / V
        </Label>
      </Plot>
      <Readout>
        Daniell (n = 2, E° = 1.10 V): slope −0.0296 V/decade; E = 0 at log Q = nE°/0.05916 ={' '}
        {logK.toFixed(1)} = log K (equilibrium)
      </Readout>
    </div>
  )
}

// Latimer diagram for copper in acid: reduction potentials (V) written on the
// arrows linking successive oxidation states, Cu²⁺, (+0.153)→ Cu⁺, (+0.521)→ Cu.
// A skipped step's potential is the ELECTRON-WEIGHTED average: Cu²⁺/Cu =
// (1·0.153 + 1·0.521)/2 = +0.337 V. The diagnostic: because the right potential
// (0.521) EXCEEDS the left (0.153), the intermediate Cu⁺ is unstable to
// DISPROPORTIONATION, 2Cu⁺ → Cu²⁺ + Cu. Standard potentials (CRC).
export function LatimerViz() {
  const W = 560,
    H = 230
  const E1 = 0.153,
    E2 = 0.521
  const avg = (1 * E1 + 1 * E2) / 2
  const xs = [110, 300, 470]
  const y = 90
  const species = ['Cu²⁺', 'Cu⁺', 'Cu']
  const ox = ['+2', '+1', '0']
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {species.map((s, i) => (
          <g key={s}>
            <text
              x={xs[i]}
              y={y}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_BODY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {s}
            </text>
            <text
              x={xs[i]}
              y={y + 18}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {'ox ' + ox[i]}
            </text>
          </g>
        ))}
        {[
          [0, 1, E1],
          [1, 2, E2]
        ].map(([a, b, e], i) => {
          const x1 = xs[a] + 30,
            x2 = xs[b] - 30
          return (
            <g
              key={i}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
              fill="none"
            >
              <line x1={x1} y1={y - 5} x2={x2} y2={y - 5} />
              <polyline points={`${x2 - 6},${y - 9} ${x2},${y - 5} ${x2 - 6},${y - 1}`} />
              <text
                x={(x1 + x2) / 2}
                y={y - 12}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
                strokeWidth={0}
              >
                {'+' + e.toFixed(3)}
              </text>
            </g>
          )
        })}
        {/* electron-weighted average arc below */}
        <g stroke={FG} strokeOpacity={OPACITY.accent} strokeWidth={STROKE_SECONDARY} fill="none">
          <path
            d={`M ${xs[0]} ${y + 30} Q ${xs[1]} ${y + 70} ${xs[2]} ${y + 30}`}
            strokeDasharray="4 3"
          />
        </g>
        <text
          x={xs[1]}
          y={y + 74}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {'Cu²⁺/Cu = +' + avg.toFixed(3) + ' V (weighted avg)'}
        </text>
        <text
          x={W / 2}
          y={H - 10}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.06em' }}
        >
          right E° (0.521) &gt; left (0.153) → Cu⁺ disproportionates
        </text>
      </Canvas>
      <Readout>
        Cu²⁺ →(+0.153)→ Cu⁺ →(+0.521)→ Cu; skip = electron-weighted avg = +{avg.toFixed(3)} V. Right
        &gt; left ⇒ 2Cu⁺ → Cu²⁺ + Cu
      </Readout>
    </div>
  )
}

// Faraday's laws of electrolysis: the mass deposited is m = (M/zF)·Q, linear in
// the charge passed, with slope M/(zF), inversely proportional to the charge
// number z. Lines for Ag (M = 107.9, z = 1), Cu (63.5, z = 2), Al (27.0, z = 3)
// vs charge in units of the Faraday constant F = 96485 C/mol. Per mole of
// electrons (1 F): 107.9 g Ag, 31.8 g Cu, 9.0 g Al, the same charge, different
// masses, set entirely by M/z.
export function FaradayViz() {
  const F = 96485
  const metals = [
    { n: 'Ag', M: 107.87, z: 1 },
    { n: 'Cu', M: 63.55, z: 2 },
    { n: 'Al', M: 26.98, z: 3 }
  ]
  const m = (mt, nF) => (mt.M / (mt.z * F)) * (nF * F) // grams vs charge (nF Faradays)
  const xMax = 3,
    yMax = 340
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, yMax]} width={560} height={340} pad={36}>
        {metals.map((mt, i) => (
          <g key={mt.n}>
            <Parametric
              xy={t => [t, m(mt, t)]}
              t={[0, xMax]}
              opacity={i === 0 ? OPACITY.fg : OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
              dash={i === 0 ? undefined : i === 1 ? '5 4' : '2 3'}
            />
            <Tex
              at={[xMax * 0.86, m(mt, xMax * 0.86) + 10]}
              tex={`\\text{${mt.n}}\\;(z=${mt.z})`}
              anchor="middle"
              size={FONT_SMALL}
              opacity={OPACITY.fg}
            />
          </g>
        ))}
        <Tex
          at={[xMax / 2, -22]}
          anchor="middle"
          tex={'\\text{CHARGE}\\ /\\ \\text{faradays }(\\mathrm{mol\\ e^-})'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label at={[0.05, yMax - 6]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          MASS DEPOSITED / g
        </Label>
      </Plot>
      <Readout>
        m = (M/zF)·Q, slope M/(zF): per 1 F → Ag {m(metals[0], 1).toFixed(1)} g, Cu{' '}
        {m(metals[1], 1).toFixed(1)} g, Al {m(metals[2], 1).toFixed(1)} g (charge fixed, mass set by
        M/z)
      </Readout>
    </div>
  )
}

// Minimum voltage to electrolyse water: the thermodynamic decomposition potential
// is E° = +1.23 V (from the O₂/H₂O couple at +1.23 vs H⁺/H₂ at 0.00), but real
// electrolysers must ALSO supply the kinetic overpotential at each electrode
// (mostly the sluggish O₂ evolution), typically ~0.4–0.6 V, so practical cells run
// near ~1.8–2.0 V. Shown as a stacked bar: the thermodynamic floor plus the
// overpotential surcharge. Values: E°(O₂/H₂O) 1.23 V (standard); η ≈ 0.6 V typical.
export function WaterSplitOverpotentialViz() {
  const Ethermo = 1.23,
    eta = 0.6
  const total = Ethermo + eta
  const W = 560,
    H = 300
  const baseY = 250,
    barX = 230,
    bw = 90
  const scale = 180 / total // px per volt
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={80}
          y1={baseY}
          x2={W - 60}
          y2={baseY}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* thermodynamic segment */}
        <rect
          x={barX}
          y={baseY - Ethermo * scale}
          width={bw}
          height={Ethermo * scale}
          fill={FG}
          fillOpacity={0.2}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* overpotential segment */}
        <rect
          x={barX}
          y={baseY - total * scale}
          width={bw}
          height={eta * scale}
          fill={FG}
          fillOpacity={0.08}
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
        />
        {/* reference line at 1.23 */}
        <line
          x1={80}
          y1={baseY - Ethermo * scale}
          x2={barX + bw + 30}
          y2={baseY - Ethermo * scale}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="2 3"
        />
        <text
          x={barX + bw / 2}
          y={baseY - (Ethermo * scale) / 2}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          1.23 V
        </text>
        <TexPx
          x={barX + bw / 2}
          y={baseY - Ethermo * scale - (eta * scale) / 2}
          anchor="middle"
          tex={'\\eta \\approx 0.6'}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <text
          x={barX + bw / 2}
          y={baseY + 16}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.06em' }}
        >
          water splitting
        </text>
        <text
          x={barX + bw + 12}
          y={baseY - total * scale + 4}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {'≈ ' + total.toFixed(2) + ' V applied'}
        </text>
        <TexPx
          x={90}
          y={baseY - Ethermo * scale - 6}
          anchor="start"
          tex={'\\text{thermodynamic floor }E^\\circ = 1.23\\ \\mathrm{V}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={341}
        />
        <TexPx
          x={120}
          y={40}
          anchor="start"
          tex={'\\text{applied voltage}=E^\\circ+\\text{overpotential}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={396}
        />
      </Canvas>
      <Readout>
        2H₂O → 2H₂ + O₂: E° = 1.23 V (O₂/H₂O vs SHE) + kinetic η ≈ 0.6 V → practical cells ~
        {total.toFixed(1)} V; the surcharge is mostly slow O₂ evolution
      </Readout>
    </div>
  )
}

// UNIT 08 · COORDINATION & SPECTROSCOPY

// Crystal-field splitting of the five d-orbitals in octahedral vs tetrahedral
// fields, as an energy ladder about the barycentre. Octahedral: the e_g pair
// (d_z², d_x²−y², pointing AT the ligands) rises +0.6Δ_o and the t_2g trio falls
// −0.4Δ_o (barycentre preserved). Tetrahedral: the pattern inverts (e below, t_2
// above) and is weaker, Δ_t = (4/9)Δ_o, because no orbital points directly at a
// ligand, so tetrahedral complexes are almost always high-spin. Occupations
// shown for a d⁶ ion (octahedral high-spin: t_2g⁴ e_g², 4 unpaired).
export function CrystalFieldSplittingViz() {
  const W = 560,
    H = 320
  const spin = (x, y, up) => {
    const h = 11,
      y1 = up ? y + h / 2 : y - h / 2,
      y2 = up ? y - h / 2 : y + h / 2,
      hd = 3
    return (
      <g
        key={x + '' + y + up}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_SECONDARY}
        fill="none"
        strokeLinecap="round"
      >
        <line x1={x} y1={y1} x2={x} y2={y2} />
        <polyline
          points={`${x - hd},${y2 + (up ? hd : -hd)} ${x},${y2} ${x + hd},${y2 + (up ? hd : -hd)}`}
        />
      </g>
    )
  }
  // octahedral d6 high spin: t2g 4 (2,1,1), eg 2 (1,1)
  const level = (cx, y, w, e, label, occ) => (
    <g>
      <line
        x1={cx - w / 2}
        y1={y}
        x2={cx + w / 2}
        y2={y}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      {occ.map((n, k) => {
        const sx = cx - w / 2 + 14 + k * ((w - 28) / (occ.length - 1 || 1))
        return (
          <g key={k}>
            {n >= 1 && spin(sx - (n === 2 ? 4 : 0), y, true)}
            {n === 2 && spin(sx + 4, y, false)}
          </g>
        )
      })}
      <text
        x={cx + w / 2 + 8}
        y={y + 3}
        fill={FG}
        opacity={OPACITY.dim}
        fontSize={FONT_TINY}
        textAnchor="start"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {label}
      </text>
    </g>
  )
  const bcO = 150,
    bcT = 150
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* octahedral (left) */}
        <text
          x={140}
          y={28}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing="0.1em"
          style={{ fontFamily: FONT_FAMILY }}
        >
          OCTAHEDRAL
        </text>
        <line
          x1={40}
          y1={bcO}
          x2={250}
          y2={bcO}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="3 3"
        />
        {level(140, bcO - 48, 130, 0, 'e_g  +0.6Δₒ', [1, 1])}
        {level(140, bcO + 48, 130, 0, 't₂g  −0.4Δₒ', [2, 1, 1])}
        <g stroke={FG} strokeOpacity={OPACITY.accent} strokeWidth={STROKE_SECONDARY} fill="none">
          <line x1={228} y1={bcO - 48} x2={228} y2={bcO + 48} />
          <polyline points="224,-4 228,0 232,-4" transform={`translate(0,${bcO - 44})`} />
        </g>
        <TexPx
          x={236}
          y={bcO}
          anchor="start"
          tex={'\\Delta_{\\mathrm{o}}'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        {/* tetrahedral (right) */}
        <text
          x={420}
          y={28}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          letterSpacing="0.1em"
          style={{ fontFamily: FONT_FAMILY }}
        >
          TETRAHEDRAL
        </text>
        <line
          x1={320}
          y1={bcT}
          x2={530}
          y2={bcT}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="3 3"
        />
        {level(420, bcT - 30, 130, 0, 't₂  +0.4Δₜ', [1, 1, 1])}
        {level(420, bcT + 30, 130, 0, 'e  −0.6Δₜ', [2, 1])}
        <g stroke={FG} strokeOpacity={OPACITY.accent} strokeWidth={STROKE_SECONDARY} fill="none">
          <line x1={508} y1={bcT - 30} x2={508} y2={bcT + 30} />
        </g>
        <TexPx
          x={516}
          y={bcT}
          anchor="start"
          tex={'\\Delta_{\\mathrm{t}}'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <TexPx
          x={W / 2}
          y={H - 10}
          anchor="middle"
          tex={
            '\\Delta_{\\mathrm{t}} = \\tfrac{4}{9}\\Delta_{\\mathrm{o}}\\ \\cdot\\ \\text{barycentre preserved}\\ \\cdot\\ d^6\\ \\text{high-spin shown}'
          }
          size={FONT_SMALL}
          opacity={OPACITY.dim}
          width={616}
        />
      </Canvas>
      <Readout>
        e_g/t₂g split by Δₒ (+0.6/−0.4); tetrahedral inverts & weakens to Δₜ = 4/9 Δₒ → tetrahedral
        almost always high-spin
      </Readout>
    </div>
  )
}

// Spectrochemical series: the octahedral splitting Δ_o measured (as the d–d
// absorption energy) for a FIXED metal, Cr³⁺, across a ligand set. Δ_o rises
// I⁻ < Cl⁻ < F⁻ < H₂O < NH₃ < en < CN⁻ — the empirical ordering of ligand field
// strength. Bars are measured Δ_o (cm⁻¹) for [CrL₆] complexes (LibreTexts /
// standard tables): CrCl₆³⁻ 13,000; CrF₆³⁻ 15,200; Cr(H₂O)₆³⁺ 17,400;
// Cr(NH₃)₆³⁺ 21,550; Cr(en)₃³⁺ 21,900; Cr(CN)₆³⁻ 26,600 — same metal, only the
// ligand changes, so the trend is the ligand effect alone.
export function SpectrochemicalSeriesViz() {
  const data = [
    ['Cl⁻', 13000],
    ['F⁻', 15200],
    ['H₂O', 17400],
    ['NH₃', 21550],
    ['en', 21900],
    ['CN⁻', 26600]
  ]
  const W = 560,
    H = 300
  const padL = 70,
    padR = 90,
    padT = 30,
    padB = 30
  const maxV = 30000
  const xOf = v => padL + (v / maxV) * (W - padL - padR)
  const n = data.length
  const yOf = i => padT + (i + 0.5) * ((H - padT - padB) / n)
  const bh = ((H - padT - padB) / n) * 0.62
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {[0, 10000, 20000, 30000].map(v => (
          <g key={v}>
            <line
              x1={xOf(v)}
              y1={padT - 4}
              x2={xOf(v)}
              y2={H - padB}
              stroke={FG}
              strokeOpacity={OPACITY.hair}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={xOf(v)}
              y={H - padB + 14}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {v / 1000 + 'k'}
            </text>
          </g>
        ))}
        {data.map(([n2, v], i) => (
          <g key={n2}>
            <rect
              x={padL}
              y={yOf(i) - bh / 2}
              width={xOf(v) - padL}
              height={bh}
              fill={FG}
              fillOpacity={0.16}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={padL - 8}
              y={yOf(i) + 3}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_SMALL}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {n2}
            </text>
            <text
              x={xOf(v) + 6}
              y={yOf(i) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="start"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {v.toLocaleString()}
            </text>
          </g>
        ))}
        <TexPx
          x={(padL + W - padR) / 2}
          y={16}
          anchor="middle"
          tex={
            '\\Delta_{\\mathrm{o}}\\ /\\ \\mathrm{cm^{-1}}\\ \\cdot\\ \\mathrm{[CrL_6]},\\ \\text{fixed }\\mathrm{Cr^{3+}}'
          }
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={352}
        />
      </Canvas>
      <Readout>
        Weak-field → strong-field: Cl⁻ 13,000 → CN⁻ 26,600 cm⁻¹ (Cr³⁺ fixed); Δₒ measured as the d–d
        band energy, ligand effect isolated
      </Readout>
    </div>
  )
}

// Double-hump in the hydration enthalpy of the first-row M²⁺ ions, the classic
// fingerprint of ligand-field stabilization energy (LFSE). Plotting −ΔH_hyd
// against d-electron count, the d⁰ (Ca²⁺), d⁵ (Mn²⁺) and d¹⁰ (Zn²⁺) ions, all
// with zero LFSE, fall on a smooth rising reference line; every other ion lies
// ABOVE it by its LFSE, producing two humps peaking near d³ (V²⁺) and d⁸ (Ni²⁺).
// Values are standard tabulated hydration enthalpies (kJ/mol); the deviation from
// the Ca–Mn–Zn line IS the LFSE.
export function LFSEDoubleHumpViz() {
  // [symbol, d-count, -ΔH_hyd kJ/mol]
  const ions = [
    ['Ca', 0, 1577],
    ['Ti', 2, 1862],
    ['V', 3, 1895],
    ['Cr', 4, 1925],
    ['Mn', 5, 1845],
    ['Fe', 6, 1946],
    ['Co', 7, 1996],
    ['Ni', 8, 2105],
    ['Cu', 9, 2100],
    ['Zn', 10, 2044]
  ]
  // reference line through d0 (Ca) and d10 (Zn)
  const y0 = 1577,
    y10 = 2044
  const ref = d => y0 + (y10 - y0) * (d / 10)
  const yMin = 1520,
    yMax = 2160
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.6, 10.6]} yRange={[yMin, yMax]} width={560} height={340} pad={40}>
        <Polyline
          points={[
            [0, ref(0)],
            [10, ref(10)]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          dash="5 4"
        />
        <Polyline
          points={ions.map(([, d, h]) => [d, h])}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {ions.map(([s, d, h]) => (
          <g key={s}>
            <Dot
              x={d}
              y={h}
              r={2.8}
              opacity={[0, 5, 10].includes(d) ? OPACITY.accent : OPACITY.fg}
            />
            <Label
              at={[d, h + (d === 8 ? 22 : 30)]}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
            >
              {s}
            </Label>
          </g>
        ))}
        <Label at={[5, yMin - 4]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} dy={20}>
          d-ELECTRON COUNT
        </Label>
        <Tex
          at={[-0.5, yMax - 8]}
          anchor="start"
          tex={'-\\Delta H_{\\mathrm{hyd}}\\ /\\ \\mathrm{kJ\\cdot mol^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[6.6, ref(6.6) - 40]}
          tex={'\\text{LFSE}=0\\text{ line (d}^0,\\!d^5,\\!d^{10})'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
      </Plot>
      <Readout>
        Ca²⁺(d⁰), Mn²⁺(d⁵), Zn²⁺(d¹⁰) lie on the smooth line (LFSE 0); humps near d³/d⁸ = LFSE
        stabilization above it
      </Readout>
    </div>
  )
}

// Beer–Lambert law: absorbance is linear in concentration, A = εcl, but the
// transmitted fraction falls off exponentially, T = 10^(−A) = 10^(−εcl). Both are
// computed from the same law and shown together (A on the left curve rising
// straight; T on the right falling as a decaying exponential). Shown for a dye
// with ε = 5000 M⁻¹cm⁻¹ in a 1 cm cell, A = 1 (90 % absorbed) already by
// 2×10⁻⁴ M. This is why absorbance, not transmittance, is used for quantitation.
export function BeerLambertViz() {
  const eps = 5000,
    l = 1
  const A = c => eps * c * l
  const T = c => Math.pow(10, -A(c))
  const cMax = 4e-4
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 320px', minWidth: 300, maxWidth: 440 }}>
          <Plot xRange={[0, cMax]} yRange={[0, 2.1]} width={420} height={300} pad={32}>
            <Parametric
              xy={t => [t, A(t)]}
              t={[0, cMax]}
              opacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <Tex
              at={[cMax * 0.1, 1.85]}
              tex={'A=\\varepsilon c l'}
              anchor="start"
              size={FONT_TEX}
              opacity={OPACITY.fg}
            />
            <Label at={[cMax / 2, -0.04]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
              c
            </Label>
            <Label at={[0, 2.04]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
              ABSORBANCE
            </Label>
          </Plot>
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 300, maxWidth: 440 }}>
          <Plot xRange={[0, cMax]} yRange={[0, 1.05]} width={420} height={300} pad={32}>
            <Parametric
              xy={t => [t, T(t)]}
              t={[0, cMax]}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
            />
            <Tex
              at={[cMax * 0.3, 0.8]}
              tex={'T=10^{-A}'}
              anchor="start"
              size={FONT_TEX}
              opacity={OPACITY.accent}
            />
            <Label at={[cMax / 2, -0.02]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
              c
            </Label>
            <Label at={[0, 1.02]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
              TRANSMITTANCE
            </Label>
          </Plot>
        </div>
      </div>
      <Readout>
        ε = 5000 M⁻¹cm⁻¹, l = 1 cm: A linear in c (used for quantitation); T = 10⁻ᴬ exponential → 90
        % absorbed at A = 1
      </Readout>
    </div>
  )
}

// Rigid-rotor microwave spectrum: rotational energies are E_J = B̃·J(J+1), so
// absorption lines J→J+1 fall at ν̃ = 2B̃(J+1), a comb of EQUALLY SPACED lines
// separated by 2B̃. Computed for CO with B̃ = 1.931 cm⁻¹ (measured), giving a line
// spacing of 3.86 cm⁻¹. The even spacing (and its value) is a direct readout of
// the bond length through B̃ = ℏ/(4πcI), I = μr².
export function RigidRotorViz() {
  const B = 1.931 // cm⁻¹
  const lines = []
  for (let J = 0; J <= 7; J++) lines.push({ J, nu: 2 * B * (J + 1) })
  const xMax = 2 * B * 9
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, 1.15]} width={560} height={300} pad={30}>
        <Polyline
          points={[
            [0, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {lines.map(({ J, nu }) => (
          <g key={J}>
            <Polyline
              points={[
                [nu, 0],
                [nu, 0.9]
              ]}
              opacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <Label at={[nu, 0.96]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {J + '→' + (J + 1)}
            </Label>
          </g>
        ))}
        {/* spacing bracket */}
        <g>
          <Polyline
            points={[
              [lines[2].nu, 0.5],
              [lines[3].nu, 0.5]
            ]}
            opacity={OPACITY.accent}
            strokeWidth={STROKE_SECONDARY}
          />
          <Tex
            at={[(lines[2].nu + lines[3].nu) / 2, 0.62]}
            tex={'2\\tilde{B}=3.86'}
            anchor="middle"
            size={FONT_SMALL}
            opacity={OPACITY.accent}
          />
        </g>
        <Tex
          at={[xMax / 2, -0.06]}
          anchor="middle"
          tex={'\\text{WAVENUMBER }\\tilde{\\nu}\\ /\\ \\mathrm{cm^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        CO, B̃ = 1.931 cm⁻¹: lines at ν̃ = 2B̃(J+1), equally spaced by 2B̃ = 3.86 cm⁻¹, the spacing
        measures the bond length
      </Readout>
    </div>
  )
}

// Harmonic vs Morse potential for a diatomic. The harmonic well V = ½k(r−r_e)² has
// evenly spaced levels and never dissociates; the Morse potential V =
// D_e(1−e^(−a(r−r_e)))² is anharmonic, its levels converge and it flattens to the
// dissociation limit D_e. Near the bottom they agree; they diverge badly at long
// r, which is why real molecules dissociate and their overtones are not exact
// multiples. Parameters for a bond like HCl: D_e = 4.62 eV, r_e = 1.27 Å,
// a = 1.87 Å⁻¹ (so k = 2D_e a² matches the harmonic curvature at r_e).
export function HarmonicMorseViz() {
  const De = 4.62,
    re = 1.27,
    a = 1.87
  const k = 2 * De * a * a
  const morse = r => De * Math.pow(1 - Math.exp(-a * (r - re)), 2)
  const harm = r => 0.5 * k * (r - re) * (r - re)
  const rMin = 0.6,
    rMax = 3.6
  const yMax = 6.5
  // Morse levels E_v = ħω(v+½) − (ħω)²/(4De)(v+½)²  in eV; ħω = a√(2De/μ)... use ωe from a,De
  const we = (a * Math.sqrt(2 * De)) / Math.sqrt(1) // schematic spacing (eV units, μ absorbed)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[rMin, rMax]} yRange={[-0.4, yMax]} width={560} height={340} pad={32}>
        <Polyline
          points={[
            [rMin, De],
            [rMax, De]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Parametric
          xy={t => [t, harm(t)]}
          t={[rMin, rMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Parametric
          xy={t => [t, morse(t)]}
          t={[rMin, rMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={re} y={0} r={2.4} opacity={OPACITY.fg} />
        <Tex
          at={[re + 0.05, De + 0.25]}
          tex={'D_e'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[2.5, morse(2.5) + 0.35]}
          tex={'\\text{Morse}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[1.85, harm(1.85) + 0.1]}
          tex={'\\text{harmonic}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label
          at={[(rMin + rMax) / 2, -0.55]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          BOND LENGTH r / Å
        </Label>
        <Label
          at={[rMin + 0.02, yMax - 0.15]}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          V(r) / eV
        </Label>
      </Plot>
      <Readout>
        HCl-like: D_e = 4.62 eV, r_e = 1.27 Å, a = 1.87 Å⁻¹ (k = 2D_e a²). Morse converges to D_e
        and dissociates; harmonic diverges, identical only near r_e
      </Readout>
    </div>
  )
}

// Birge–Sponer extrapolation for I₂. Successive vibrational spacings shrink
// linearly, ΔG̃(v+½) = ω̃_e − 2ω̃_e x̃_e (v+1); plotting ΔG̃ against (v+1) is a
// straight line whose x-intercept is the last bound level v_max and whose AREA
// (the sum of all spacings) estimates the dissociation energy D₀. Constants
// (measured, I₂ X-state): ω̃_e = 214.50, ω̃_e x̃_e = 0.614 cm⁻¹. The linear
// extrapolation gives v_max ≈ 174 and D₀ ≈ 18,700 cm⁻¹, an OVERESTIMATE of the
// true 12,440 cm⁻¹, because higher-order anharmonicity bends the real plot down
// (the honest, well-known limitation of the linear method).
export function BirgeSponerViz() {
  const we = 214.5,
    wexe = 0.614
  const dG = v => we - 2 * wexe * (v + 1)
  const vmax = we / (2 * wexe) - 1 // where ΔG = 0
  const areaD0 = (we * we) / (4 * wexe) // triangle area (linear BS estimate)
  const xMax = vmax * 1.05
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, we * 1.08]} width={560} height={340} pad={36}>
        {/* shaded triangle = D0 estimate */}
        <Polyline
          points={[
            [0, 0],
            [0, dG(0)],
            [vmax, 0]
          ]}
          closed
          fillOpacity={0.1}
          opacity={0}
        />
        <Parametric
          xy={t => [t, dG(t)]}
          t={[0, vmax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={vmax} y={0} r={2.8} opacity={OPACITY.fg} />
        <Tex
          at={[vmax * 0.5, we * 0.55]}
          tex={'\\text{area}=D_0'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[6, dG(6) + 12]}
          tex={'\\Delta\\tilde{G}=\\tilde{\\omega}_e-2\\tilde{\\omega}_e\\tilde{x}_e(v{+}1)'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Label at={[vmax, 0]} anchor="middle" size={FONT_TINY} opacity={OPACITY.accent} dy={16}>
          {'v_max ≈ ' + vmax.toFixed(0)}
        </Label>
        <Label at={[xMax / 2, 0]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} dy={30}>
          VIBRATIONAL LEVEL (v + 1)
        </Label>
        <Tex
          at={[2, we * 1.05]}
          anchor="start"
          tex={'\\Delta\\tilde{G}\\ /\\ \\mathrm{cm^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        I₂: ω̃_e = 214.5, ω̃_e x̃_e = 0.614 cm⁻¹ → v_max ≈ {vmax.toFixed(0)}, linear D₀ ≈{' '}
        {Math.round(areaD0 / 100) * 100} cm⁻¹ (overestimates true 12,440, anharmonicity bends the
        real curve down)
      </Readout>
    </div>
  )
}

// Vibration–rotation band of HCl: a vibrational transition carries rotational
// structure, giving a P branch (ΔJ = −1, low side) and an R branch (ΔJ = +1,
// high side) of roughly equally spaced lines about the band origin ω̃₀, with a
// GAP of ~4B̃ where the forbidden Q branch (ΔJ = 0) would sit. Computed in the
// rigid approximation: R(J) = ω̃₀ + 2B̃(J+1), P(J) = ω̃₀ − 2B̃J, with ω̃₀ = 2886
// cm⁻¹ and B̃ = 10.44 cm⁻¹ (HCl). The missing centre line is the visible signature.
export function VibRotBranchesViz() {
  const w0 = 2886,
    B = 10.44
  const R = J => w0 + 2 * B * (J + 1)
  const P = J => w0 - 2 * B * J
  const linesR = [],
    linesP = []
  for (let J = 0; J <= 6; J++) {
    linesR.push(R(J))
    if (J >= 1) linesP.push(P(J))
  }
  const half = 2 * B * 8
  const xMin = w0 - half,
    xMax = w0 + half
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[0, 1.15]} width={560} height={300} pad={30}>
        <Polyline
          points={[
            [xMin, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {linesP.map((nu, i) => (
          <Polyline
            key={'p' + i}
            points={[
              [nu, 0],
              [nu, 0.8]
            ]}
            opacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
        ))}
        {linesR.map((nu, i) => (
          <Polyline
            key={'r' + i}
            points={[
              [nu, 0],
              [nu, 0.8]
            ]}
            opacity={OPACITY.accent}
            strokeWidth={STROKE_PRIMARY}
          />
        ))}
        {/* band origin / missing Q */}
        <Polyline
          points={[
            [w0, 0],
            [w0, 0.95]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="3 3"
        />
        <Tex
          at={[w0, 1.05]}
          tex={'\\omega_0\\;(\\text{Q gap})'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[w0 - half * 0.55, 0.9]}
          tex={'\\text{P}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[w0 + half * 0.55, 0.9]}
          tex={'\\text{R}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[(xMin + xMax) / 2, -0.06]}
          anchor="middle"
          tex={'\\text{WAVENUMBER }\\tilde{\\nu}\\ /\\ \\mathrm{cm^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        HCl ω̃₀ = 2886, B̃ = 10.44 cm⁻¹: R(J)=ω̃₀+2B̃(J+1), P(J)=ω̃₀−2B̃J; ~4B̃ gap at centre = the
        forbidden Q branch (ΔJ=0)
      </Readout>
    </div>
  )
}

// Franck–Condon principle: electronic transitions are vertical (nuclei frozen
// during the fast electronic jump), so from v″=0 the transition reaches whatever
// excited-state vibrational level lies directly above the ground-state
// equilibrium. When the excited state is displaced to longer r, that vertical
// line strikes high v′, and the band is a PROGRESSION. For displaced harmonic
// oscillators the intensities are the Poisson distribution FC(v′) = e^(−S)·Sᵛ′/v′!
// with S the Huang–Rhys factor, computed here for S = 8, peaking near v′ = 8.
export function FranckCondonViz() {
  const S = 8
  const fc = v => (Math.exp(-S) * Math.pow(S, v)) / factorial(v)
  const r0 = 1.1,
    r1 = 1.6,
    Te = 3.2,
    k = 12
  const V0 = r => 0.5 * k * (r - r0) * (r - r0)
  const V1 = r => Te + 0.5 * k * (r - r1) * (r - r1)
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 320px', minWidth: 300, maxWidth: 440 }}>
          <Plot xRange={[0.4, 2.6]} yRange={[0, 6]} width={420} height={320} pad={30}>
            <Parametric
              xy={t => [t, V0(t)]}
              t={[0.5, 1.9]}
              opacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <Parametric
              xy={t => [t, V1(t)]}
              t={[0.9, 2.4]}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
            />
            {/* v''=0 level + vertical transition at r0 */}
            <Polyline
              points={[
                [r0 - 0.28, 0.35],
                [r0 + 0.28, 0.35]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Arrow from={[r0, 0.35]} to={[r0, V1(r0)]} opacity={OPACITY.fg} />
            <Tex
              at={[r0 - 0.05, 5.5]}
              tex={'\\text{vertical}'}
              anchor="end"
              size={FONT_LABEL}
              opacity={OPACITY.dim}
            />
            <Label at={[1.5, -0.1]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
              r
            </Label>
            <Label at={[0.42, 5.9]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
              V(r)
            </Label>
          </Plot>
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 300, maxWidth: 440 }}>
          <Plot xRange={[0, 20]} yRange={[0, 0.16]} width={420} height={320} pad={30}>
            {Array.from({ length: 21 }, (_, v) => (
              <Polyline
                key={v}
                points={[
                  [v, 0],
                  [v, fc(v)]
                ]}
                opacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
            ))}
            <Tex
              at={[10, 0.145]}
              tex={'\\dfrac{e^{-S}S^{v}}{v!}'}
              anchor="middle"
              size={FONT_TEX}
              opacity={OPACITY.dim}
            />
            <Label at={[10, -0.006]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
              v′
            </Label>
            <Label at={[0.3, 0.155]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
              FC FACTOR
            </Label>
          </Plot>
        </div>
      </div>
      <Readout>
        Vertical transition from v″=0 reaches high v′ (excited state displaced to longer r); FC
        factors = Poisson e⁻ˢSᵛ/v! (Huang–Rhys S=8) peak near v′=8
      </Readout>
    </div>
  )
}

// Jablonski diagram: the photophysical fates of an excited molecule as an
// energy-level schematic. Absorption (fast, vertical) promotes S₀→S₁; from S₁ the
// molecule can fluoresce (S₁→S₀, spin-allowed, ns) or undergo intersystem
// crossing to the triplet T₁ (spin-flip), from which phosphorescence (T₁→S₀,
// spin-forbidden, slow, µs–s) occurs at LOWER energy than fluorescence. Non-
// radiative internal conversion/vibrational relaxation are the wavy steps. A
// labelled schematic (honest representation of the state manifold, not data).
export function JablonskiViz() {
  const W = 560,
    H = 320
  const S0 = 270,
    S1 = 110,
    T1 = 170
  const lvl = (y, x1, x2) => (
    <line
      x1={x1}
      y1={y}
      x2={x2}
      y2={y}
      stroke={FG}
      strokeOpacity={OPACITY.fg}
      strokeWidth={STROKE_PRIMARY}
    />
  )
  const straight = (x1, y1, x2, y2, acc) => (
    <g
      stroke={FG}
      strokeOpacity={acc ? OPACITY.accent : OPACITY.fg}
      strokeWidth={STROKE_PRIMARY}
      fill="none"
      strokeLinecap="round"
    >
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polyline
        points={`${x2 - 4},${y2 + (y2 > y1 ? -7 : 7)} ${x2},${y2} ${x2 + 4},${y2 + (y2 > y1 ? -7 : 7)}`}
      />
    </g>
  )
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {lvl(S0, 90, 470)}
        {lvl(S1, 90, 320)}
        {lvl(T1, 350, 470)}
        {/* vib sublevels (faint) */}
        {[1, 2, 3].map(k => (
          <line
            key={'a' + k}
            x1={90}
            y1={S1 - k * 12}
            x2={320}
            y2={S1 - k * 12}
            stroke={FG}
            strokeOpacity={OPACITY.hair}
            strokeWidth={STROKE_SECONDARY}
          />
        ))}
        <TexPx x={78} y={S0 + 4} anchor="end" tex={'S_0'} size={FONT_SMALL} opacity={OPACITY.dim} />
        <TexPx x={78} y={S1 + 4} anchor="end" tex={'S_1'} size={FONT_SMALL} opacity={OPACITY.dim} />
        <TexPx
          x={478}
          y={T1 + 4}
          anchor="start"
          tex={'T_1'}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        {/* absorption */}
        {straight(140, S0, 140, S1)}
        <text
          x={128}
          y={(S0 + S1) / 2}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          abs
        </text>
        {/* fluorescence */}
        {straight(230, S1, 230, S0, true)}
        <text
          x={242}
          y={(S0 + S1) / 2}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          fluor
        </text>
        {/* ISC (S1 -> T1) wavy-ish */}
        {straight(320, S1, 360, T1)}
        <text
          x={330}
          y={S1 - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          ISC
        </text>
        {/* phosphorescence */}
        {straight(420, T1, 420, S0, true)}
        <text
          x={432}
          y={(S0 + T1) / 2}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          phos
        </text>
        <text
          x={W / 2}
          y={20}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          energy ↑
        </text>
      </Canvas>
      <Readout>
        Absorption S₀→S₁; fluorescence S₁→S₀ (spin-allowed, ns); ISC S₁→T₁ (spin-flip);
        phosphorescence T₁→S₀ (forbidden, slow) at lower energy
      </Readout>
    </div>
  )
}

// ¹H NMR of ethanol (CH₃CH₂OH): chemical shift places each proton environment on
// the δ scale (deshielded = downfield = left), the n+1 rule splits each signal by
// its neighbours, and the integrated area counts the protons. CH₃ (δ 1.2, 3H) is
// split by the 2 CH₂ protons into a TRIPLET (1:2:1); CH₂ (δ 3.7, 2H) is split by
// the 3 CH₃ protons into a QUARTET (1:3:3:1); OH (δ ~2.6, 1H) is a singlet (fast
// exchange). Multiplet intensities are the binomial coefficients (computed); the
// staircase is the 3:2:1 integration.
export function NMREthanolViz() {
  const binom = n =>
    Array.from({ length: n + 1 }, (_, k) => factorial(n) / (factorial(k) * factorial(n - k)))
  const J = 0.14 // ppm spacing between multiplet lines (schematic, ~7 Hz)
  const signals = [
    { d: 3.7, H: 2, mult: binom(3), label: 'CH₂ quartet' }, // split by 3 CH3 H
    { d: 2.6, H: 1, mult: [1], label: 'OH' },
    { d: 1.2, H: 3, mult: binom(2), label: 'CH₃ triplet' } // split by 2 CH2 H
  ]
  const xMin = 0,
    xMax = 5 // ppm; drawn reversed (left = high δ)
  const px = d => xMax - d // reverse axis: map δ so higher δ on left
  // integration staircase cumulative from left (high δ) to right
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[0, 1.25]} width={560} height={320} pad={30}>
        <Polyline
          points={[
            [xMin, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {signals.map((s, si) => {
          const m = s.mult
          const total = m.reduce((a, b) => a + b, 0)
          const center = m.length - 1
          return (
            <g key={si}>
              {m.map((w, k) => {
                const dd = s.d + (k - center / 2) * J
                const h = 0.9 * (w / Math.max(...m)) * (s.H / 3) + 0.08
                return (
                  <Polyline
                    key={k}
                    points={[
                      [px(dd), 0],
                      [px(dd), h]
                    ]}
                    opacity={OPACITY.fg}
                    strokeWidth={STROKE_PRIMARY}
                  />
                )
              })}
              <Label at={[px(s.d), 1.02]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
                {s.label}
              </Label>
            </g>
          )
        })}
        {/* integration staircase (3:2:1 => cumulative 3,5,6 normalized) */}
        {(() => {
          const steps = [
            [3.7, 2],
            [2.6, 1],
            [1.2, 3]
          ] // δ, H  (left→right by px)
          // build cumulative from left (high δ = CH2 at 3.7)
          let cum = 0
          const pts = [[px(4.4), 0.05]]
          for (const [d, H] of steps) {
            pts.push([px(d + 0.35), 0.05 + (cum / 6) * 0.55])
            cum += H
            pts.push([px(d - 0.35), 0.05 + (cum / 6) * 0.55])
          }
          pts.push([px(0.7), 0.05 + (cum / 6) * 0.55])
          return (
            <Polyline
              points={pts}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_SECONDARY}
              dash="4 3"
            />
          )
        })()}
        <Tex
          at={[xMax / 2, -0.05]}
          anchor="middle"
          tex={'\\delta\\ /\\ \\mathrm{ppm}\\ \\ (\\text{downfield}\\leftarrow)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
          dy={14}
        />
        <Label at={[0.1, 1.2]} anchor="start" size={FONT_TINY} opacity={OPACITY.accent}>
          INTEGRAL 3:2:1
        </Label>
      </Plot>
      <Readout>
        Ethanol: CH₃ δ1.2 triplet (1:2:1, split by 2H), CH₂ δ3.7 quartet (1:3:3:1, split by 3H), OH
        δ2.6 singlet; areas 3:2:1 (n+1 rule, binomial)
      </Readout>
    </div>
  )
}

// Pulse-NMR: the time-domain free-induction decay (FID) and its Fourier
// transform. After the pulse the magnetization precesses and decays,
// S(t) = cos(2πΔν·t)·e^(−t/T₂); its Fourier transform is a LORENTZIAN line
// centred at Δν with full width at half maximum Δν₁/₂ = 1/(πT₂). So a slowly
// decaying FID (long T₂) gives a sharp line, and a fast decay gives a broad one, // the time–frequency reciprocity at the heart of FT-NMR. Both panels are computed
// from the same T₂ (here Δν = 8 Hz, T₂ = 0.5 s → FWHM = 0.64 Hz).
export function FIDFTViz() {
  const dv = 8,
    T2 = 0.5
  const fid = t => Math.cos(2 * Math.PI * dv * t) * Math.exp(-t / T2)
  const fwhm = 1 / (Math.PI * T2)
  const lor = f => 1 / (1 + Math.pow((f - dv) / (fwhm / 2), 2))
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 320px', minWidth: 300, maxWidth: 440 }}>
          <Plot xRange={[0, 2]} yRange={[-1.1, 1.1]} width={420} height={320} pad={30}>
            <Polyline
              points={[
                [0, 0],
                [2, 0]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
            />
            <Parametric
              xy={t => [t, fid(t)]}
              t={[0, 2]}
              samples={400}
              opacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <Parametric
              xy={t => [t, Math.exp(-t / T2)]}
              t={[0, 2]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="3 3"
            />
            <Tex
              at={[0.7, 0.9]}
              tex={'e^{-t/T_2}'}
              anchor="start"
              size={FONT_TEX}
              opacity={OPACITY.dim}
            />
            <Label at={[1, -1.05]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
              t / s
            </Label>
            <Label at={[0.05, 1.05]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
              FID S(t)
            </Label>
          </Plot>
        </div>
        <div style={{ flex: '1 1 320px', minWidth: 300, maxWidth: 440 }}>
          <Plot xRange={[0, 16]} yRange={[0, 1.15]} width={420} height={320} pad={30}>
            <Parametric
              xy={f => [f, lor(f)]}
              t={[0, 16]}
              samples={300}
              opacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
            />
            <Polyline
              points={[
                [dv, 0],
                [dv, 1]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 3"
            />
            <Tex
              at={[dv + 0.6, 0.9]}
              tex={'\\text{Lorentzian}'}
              anchor="start"
              size={FONT_TEX}
              opacity={OPACITY.dim}
            />
            <Tex
              at={[8, -0.02]}
              anchor="middle"
              tex={'\\nu\\ /\\ \\mathrm{Hz}'}
              size={FONT_LABEL}
              opacity={OPACITY.dim}
            />
            <Label at={[0.2, 1.04]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
              SPECTRUM
            </Label>
          </Plot>
        </div>
      </div>
      <Readout>
        FID S(t)=cos(2πΔν·t)·e⁻ᵗ/ᵀ² ⟶ FT ⟶ Lorentzian at Δν=8 Hz, FWHM=1/(πT₂)={fwhm.toFixed(2)} Hz;
        slow decay (long T₂) → sharp line
      </Readout>
    </div>
  )
}

// EPR of the methyl radical •CH₃: the unpaired electron couples to 3 EQUIVALENT
// protons, so the n+1 rule gives 4 hyperfine lines with binomial 1:3:3:1
// intensities, evenly spaced by the coupling constant a(H). EPR is recorded as the
// FIRST DERIVATIVE of the absorption (phase-sensitive detection), so each line
// shows the characteristic derivative shape. Constants: a(H) = 2.30 mT (23.0 G),
// g = 2.0026. The 1:3:3:1 pattern is computed from the binomial coefficients.
export function EPRMethylViz() {
  const a = 2.3 // mT spacing
  const B0 = 0 // center (relative mT)
  const w = [1, 3, 3, 1]
  const centers = [-1.5, -0.5, 0.5, 1.5].map(m => B0 + m * a)
  const sigma = 0.28
  // derivative of sum of Gaussians
  const deriv = x =>
    centers.reduce(
      (s, c, i) =>
        s + w[i] * (-(x - c) / (sigma * sigma)) * Math.exp(-((x - c) ** 2) / (2 * sigma * sigma)),
      0
    )
  const xMax = 4.5
  // normalize
  let peak = 0
  for (let x = -xMax; x <= xMax; x += 0.02) peak = Math.max(peak, Math.abs(deriv(x)))
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-xMax, xMax]} yRange={[-1.15, 1.15]} width={560} height={300} pad={30}>
        <Polyline
          points={[
            [-xMax, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <Parametric
          xy={x => [x, deriv(x) / peak]}
          t={[-xMax, xMax]}
          samples={500}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {centers.map((c, i) => (
          <g key={i}>
            <Polyline
              points={[
                [c, -1.05],
                [c, -0.9]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[c, -1.12]} anchor="middle" size={FONT_SMALL} opacity={OPACITY.accent}>
              {w[i]}
            </Label>
          </g>
        ))}
        {/* spacing bracket */}
        <Polyline
          points={[
            [centers[1], 0.9],
            [centers[2], 0.9]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
        />
        <Tex
          at={[0, 1.02]}
          tex={'a(\\text{H})=2.30\\,\\text{mT}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Label at={[0, -1.1]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} dy={20}>
          MAGNETIC FIELD B →
        </Label>
      </Plot>
      <Readout>
        •CH₃: 3 equivalent H → 4 lines, binomial 1:3:3:1, spacing a(H)=2.30 mT, g=2.0026; recorded
        as the first-derivative lineshape
      </Readout>
    </div>
  )
}

// factorial helper (module-scope, not a catalog export)
function factorial(n) {
  let f = 1
  for (let i = 2; i <= n; i++) f *= i
  return f
}

// UNIT 04 · KINETICS (rate-law half)

// Average vs instantaneous rate. For a decaying concentration [A](t) = A₀·e^(−kt)
// (first-order example), the AVERAGE rate over an interval is the slope of the
// SECANT (Δ[A]/Δt), while the INSTANTANEOUS rate is the slope of the TANGENT at a
// point; the initial rate is the tangent at t = 0, magnitude k·A₀. As the interval
// shrinks the secant rotates onto the tangent. Shown for A₀ = 1.0 M, k = 0.40 s⁻¹.
export function RateTangentViz() {
  const A0 = 1.0,
    k = 0.4
  const A = t => A0 * Math.exp(-k * t)
  const t1 = 4 // secant endpoint
  const secSlope = (A(t1) - A0) / t1
  const tanSlope = -k * A0 // at t=0
  const tMax = 8
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, tMax]} yRange={[0, 1.1]} width={560} height={340} pad={32}>
        <Polyline
          points={[
            [0, 0],
            [tMax, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <Parametric
          xy={t => [t, A(t)]}
          t={[0, tMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* secant (average rate over [0,t1]) */}
        <Polyline
          points={[
            [0, A0],
            [t1, A(t1)]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          dash="5 4"
        />
        <Dot x={0} y={A0} r={2.6} opacity={OPACITY.fg} />
        <Dot x={t1} y={A(t1)} r={2.6} opacity={OPACITY.accent} />
        {/* tangent at t=0 */}
        <Polyline
          points={[
            [0, A0],
            [2.0, A0 + tanSlope * 2.0]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <Tex
          at={[2.1, A0 + tanSlope * 2.0]}
          tex={'\\text{tangent: initial rate}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[2.6, A(2.6) + 0.14]}
          tex={'\\text{secant: avg rate}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Label
          at={[tMax / 2, -0.04]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
          dy={14}
        >
          TIME t / s
        </Label>
        <Tex
          at={[0.1, 1.06]}
          anchor="start"
          tex={'\\mathrm{[A]}\\ /\\ \\mathrm{M}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        A₀=1.0 M, k=0.40 s⁻¹: instantaneous initial rate = k·A₀ = {(-tanSlope).toFixed(2)} M/s
        (tangent) &gt; |avg rate over 0–4 s| = {(-secSlope).toFixed(2)} M/s (secant)
      </Readout>
    </div>
  )
}

// Integrated rate laws overlaid. From the same starting concentration, the three
// orders decay differently: zero-order [A] = A₀ − k₀t (straight line to zero),
// first-order [A] = A₀e^(−k₁t) (constant half-life), second-order [A] =
// A₀/(1+k₂A₀t) (long tail). Each is the exact integral of its rate law; rate
// constants chosen to share the initial slope so the shapes, not the scaling,
// distinguish them (A₀ = 1.0 M).
export function IntegratedRateLawsViz() {
  const A0 = 1.0
  const k0 = 0.15,
    k1 = 0.15,
    k2 = 0.15 // equal initial slope k·(order-dependent) — use same k, note shapes
  const zero = t => Math.max(0, A0 - k0 * t)
  const first = t => A0 * Math.exp(-k1 * t)
  const second = t => A0 / (1 + k2 * A0 * t)
  const tMax = 12
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, tMax]} yRange={[0, 1.1]} width={560} height={340} pad={32}>
        <Polyline
          points={[
            [0, 0],
            [tMax, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <Parametric
          xy={t => [t, zero(t)]}
          t={[0, A0 / k0]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, first(t)]}
          t={[0, tMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Parametric
          xy={t => [t, second(t)]}
          t={[0, tMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
          dash="2 3"
        />
        <Tex
          at={[3.4, zero(3.4) + 0.06]}
          tex={'\\text{zero: }A_0-k t'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[5.2, first(5.2) + 0.07]}
          tex={'\\text{first: }A_0e^{-kt}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[7.4, second(7.4) + 0.08]}
          tex={'\\text{second: }\\frac{A_0}{1+kA_0t}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Label
          at={[tMax / 2, -0.04]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
          dy={14}
        >
          TIME t
        </Label>
        <Tex
          at={[0.1, 1.06]}
          anchor="start"
          tex={'\\mathrm{[A]}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Exact integrals of −d[A]/dt = k[A]ⁿ: zero-order hits zero linearly; first-order decays
        exponentially (constant t½); second-order has the longest tail
      </Readout>
    </div>
  )
}

// Order diagnosis by linearization. Data generated from a genuine FIRST-order
// decay ([A] = A₀e^(−kt)) are re-plotted three ways: [A] vs t, ln[A] vs t, and
// 1/[A] vs t. Only the transform matching the true order is a straight line, here
// ln[A] vs t is linear (slope −k), while [A] curves and 1/[A] curves upward. This
// linear-fit test is how reaction order is read off experimental data (A₀ = 1.0,
// k = 0.30 s⁻¹).
export function OrderDiagnosisViz() {
  const A0 = 1.0,
    k = 0.3
  const A = t => A0 * Math.exp(-k * t)
  const tMax = 8
  const Panel = ({ title, fn, yR, tex }) => (
    <div style={{ flex: 1, minWidth: 0 }}>
      <Plot xRange={[0, tMax]} yRange={yR} width={190} height={200} pad={26}>
        <Parametric
          xy={t => [t, fn(t)]}
          t={[0.02, tMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[0.3, yR[1] - (yR[1] - yR[0]) * 0.12]}
          tex={tex}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Label
          at={[tMax / 2, yR[0] + (yR[1] - yR[0]) * 0.02]}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={12}
        >
          {title}
        </Label>
      </Plot>
    </div>
  )
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 12 }}>
        <Panel title="[A] vs t, curved" fn={A} yR={[0, 1.1]} tex={'[A]'} />
        <Panel
          title="ln[A] vs t, STRAIGHT"
          fn={t => Math.log(A(t))}
          yR={[-2.6, 0.2]}
          tex={'\\ln[A]'}
        />
        <Panel title="1/[A] vs t, curved" fn={t => 1 / A(t)} yR={[0, 12]} tex={'\\dfrac{1}{[A]}'} />
      </div>
      <Readout>
        Same first-order data, three transforms: only ln[A] vs t is linear (slope −k = −0.30) → the
        straight-line test identifies the order
      </Readout>
    </div>
  )
}

// UNIT 09 · ANALYTICAL (indicator selection)

// Choosing a titration indicator: the indicator must change colour within the
// steep jump around the equivalence point, i.e. its pK_In (colour-change centred
// on pK_In ± 1) must straddle the equivalence pH. For the weak-acid/strong-base
// titration (0.1 M acetic acid + 0.1 M NaOH, equivalence pH ≈ 8.7, curve solved
// from the exact charge balance), phenolphthalein (pK_In 9.4, range 8.2–10.0)
// brackets the jump, while methyl orange (pK_In 3.7, range 3.1–4.4) changes far
// too early. Bands are overlaid on the computed curve.
export function IndicatorSelectionViz() {
  const Kw = 1e-14,
    Ca = 0.1,
    Cb = 0.1,
    Va = 25,
    Ka = 1.8e-5
  const pHweak = Vb => {
    const Ctot = (Ca * Va) / (Va + Vb),
      Na = (Cb * Vb) / (Va + Vb)
    return -Math.log10(_bisectH(H => Na + H - Kw / H - (Ctot * Ka) / (Ka + H)))
  }
  const Vmax = 50
  const pts = []
  for (let Vb = 0; Vb <= Vmax; Vb += 0.25) pts.push([Vb, pHweak(Vb)])
  const indicators = [
    { n: 'methyl orange', lo: 3.1, hi: 4.4, ok: false },
    { n: 'phenolphthalein', lo: 8.2, hi: 10.0, ok: true }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, Vmax]} yRange={[0, 14]} width={560} height={360} pad={32}>
        {indicators.map(ind => (
          <Polyline
            key={ind.n}
            points={[
              [0, ind.lo],
              [Vmax, ind.lo],
              [Vmax, ind.hi],
              [0, ind.hi]
            ]}
            closed
            fillOpacity={ind.ok ? 0.14 : 0.06}
            opacity={0}
          />
        ))}
        {indicators.map(ind => (
          <g key={ind.n + 'l'}>
            <Polyline
              points={[
                [0, ind.lo],
                [Vmax, ind.lo]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 3"
            />
            <Polyline
              points={[
                [0, ind.hi],
                [Vmax, ind.hi]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="2 3"
            />
            <Label
              at={[Vmax * 0.02, (ind.lo + ind.hi) / 2]}
              anchor="start"
              size={FONT_TINY}
              opacity={ind.ok ? OPACITY.fg : OPACITY.dim}
            >
              {ind.n + (ind.ok ? ' ✓' : ' ✗')}
            </Label>
          </g>
        ))}
        <Polyline
          points={[
            [25, 0],
            [25, 14]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Dot x={25} y={pHweak(25)} r={2.8} opacity={OPACITY.accent} />
        <Label at={[25, 0]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={16}>
          eq. pt (pH {pHweak(25).toFixed(1)})
        </Label>
        <Label at={[Vmax / 2, 0]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim} dy={30}>
          VOLUME NaOH / mL
        </Label>
        <Label at={[0.5, 13.6]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          pH
        </Label>
      </Plot>
      <Readout>
        Weak acid, equivalence pH {pHweak(25).toFixed(1)}: phenolphthalein (8.2–10.0) brackets the
        jump ✓; methyl orange (3.1–4.4) turns far too early ✗
      </Readout>
    </div>
  )
}

// UNIT 10 · INDUSTRIAL & SUSTAINABLE CHEMISTRY

// Haber-process equilibrium yield, computed from thermodynamics. For N₂ + 3H₂ ⇌
// 2NH₃ (ΔH° = −91.8 kJ/mol, ΔS° = −198.1 J/mol·K → Kp(T) = e^(−ΔG°/RT), bar⁻²),
// the equilibrium extent for a stoichiometric feed is solved at each T and total
// pressure P, and the resulting NH₃ mole-% is plotted. The exothermic reaction's
// yield FALLS with temperature but RISES with pressure (4 gas mol → 2), which is
// why industry compromises at high P with a moderate ~450 °C to keep the rate up.
export function HaberYieldViz() {
  const dH = -91800,
    dS = -198.1,
    R = 8.314
  const Kp = T => Math.exp(-(dH - T * dS) / (R * T))
  const yieldPct = (T, P) => {
    const K = Kp(T)
    const f = xi => {
      const nN = 1 - xi,
        nH = 3 - 3 * xi,
        nA = 2 * xi,
        tot = 4 - 2 * xi
      return ((nA * nA) / (nN * nH * nH * nH)) * Math.pow(tot, 2) * Math.pow(P, -2) - K
    }
    let lo = 1e-9,
      hi = 1 - 1e-9,
      flo = f(lo)
    for (let i = 0; i < 100; i++) {
      const m = (lo + hi) / 2,
        fm = f(m)
      if (fm > 0 === flo > 0) {
        lo = m
        flo = fm
      } else hi = m
    }
    const xi = (lo + hi) / 2
    return ((2 * xi) / (4 - 2 * xi)) * 100
  }
  const Ps = [10, 100, 300]
  const TminC = 300,
    TmaxC = 600
  const curve = P => {
    const pts = []
    for (let Tc = TminC; Tc <= TmaxC; Tc += 5) pts.push([Tc, yieldPct(Tc + 273, P)])
    return pts
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[TminC, TmaxC]} yRange={[0, 80]} width={560} height={340} pad={36}>
        {Ps.map((P, i) => (
          <g key={P}>
            <Parametric
              xy={t => [t, yieldPct(t + 273, P)]}
              t={[TminC, TmaxC]}
              opacity={i === 2 ? OPACITY.fg : OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
              dash={i === 0 ? '2 3' : i === 1 ? '5 4' : undefined}
            />
            <Tex
              at={[TminC + 12, yieldPct(TminC + 273, P) - 3]}
              tex={`${P}\\,\\text{bar}`}
              anchor="start"
              size={FONT_SMALL}
              opacity={OPACITY.fg}
            />
          </g>
        ))}
        <Polyline
          points={[
            [450, 0],
            [450, 80]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Label at={[450, 76]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
          ~450 °C compromise
        </Label>
        <Label
          at={[(TminC + TmaxC) / 2, -4]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          TEMPERATURE / °C
        </Label>
        <Tex
          at={[TminC + 4, 78]}
          anchor="start"
          tex={'\\mathrm{NH_3}\\ \\text{AT EQUILIBRIUM}\\ /\\ \\text{mol \\%}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        N₂+3H₂⇌2NH₃ (ΔH°=−91.8 kJ/mol): yield from Kp(T) falls with T, rises with P (e.g. 450 °C:{' '}
        {yieldPct(723, 300).toFixed(0)}% at 300 bar vs {yieldPct(723, 10).toFixed(0)}% at 10 bar)
      </Readout>
    </div>
  )
}

// The equilibrium–kinetics trade-off behind the Haber compromise. Two effects run
// OPPOSITE ways with temperature: the equilibrium NH₃ yield (exothermic) FALLS as
// T rises, while the reaction rate (Arrhenius, ∝ e^(−Ea/RT)) RISES. Neither a cold
// reactor (good yield, hopelessly slow) nor a hot one (fast, poor yield) is
// optimal, the workable window is the overlap, near ~450 °C. Yield computed from
// Kp(T) at 200 bar; rate from an Arrhenius factor (Ea ≈ 60 kJ/mol, relative).
export function EquilibriumKineticsCrossoverViz() {
  const dH = -91800,
    dS = -198.1,
    R = 8.314
  const Kp = T => Math.exp(-(dH - T * dS) / (R * T))
  const yieldPct = (T, P) => {
    const K = Kp(T)
    const f = xi => {
      const nN = 1 - xi,
        nH = 3 - 3 * xi,
        nA = 2 * xi,
        tot = 4 - 2 * xi
      return ((nA * nA) / (nN * nH * nH * nH)) * Math.pow(tot, 2) * Math.pow(P, -2) - K
    }
    let lo = 1e-9,
      hi = 1 - 1e-9,
      flo = f(lo)
    for (let i = 0; i < 100; i++) {
      const m = (lo + hi) / 2,
        fm = f(m)
      if (fm > 0 === flo > 0) {
        lo = m
        flo = fm
      } else hi = m
    }
    const xi = (lo + hi) / 2
    return ((2 * xi) / (4 - 2 * xi)) * 100
  }
  const Ea = 60000
  const TminC = 300,
    TmaxC = 650
  const rate = T => Math.exp(-Ea / (R * T))
  const rateMax = rate(TmaxC + 273)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[TminC, TmaxC]} yRange={[0, 1.08]} width={560} height={340} pad={34}>
        <Parametric
          xy={t => [t, yieldPct(t + 273, 200) / 70]}
          t={[TminC, TmaxC]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, rate(t + 273) / rateMax]}
          t={[TminC, TmaxC]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Polyline
          points={[
            [430, 0],
            [470, 0],
            [470, 1.08],
            [430, 1.08]
          ]}
          closed
          fillOpacity={0.1}
          opacity={0}
        />
        <Tex
          at={[TminC + 10, 0.92]}
          tex={'\\text{equilibrium yield}\\downarrow'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[TmaxC - 150, 0.62]}
          tex={'\\text{rate}\\uparrow'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Label at={[450, 0]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={-6}>
          WORKABLE ~450 °C
        </Label>
        <Label
          at={[(TminC + TmaxC) / 2, -0.04]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
          dy={14}
        >
          TEMPERATURE / °C
        </Label>
        <Label at={[TminC + 4, 1.04]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          NORMALISED
        </Label>
      </Plot>
      <Readout>
        Yield (from Kp(T)) falls with T; Arrhenius rate (Ea≈60 kJ/mol) rises with T → the practical
        optimum is the overlap band, ~450 °C (with catalyst + high P)
      </Readout>
    </div>
  )
}

// Atom economy: the fraction of reactant mass that ends up in the desired product,
// AE = M(product) / Σ M(all products) × 100 %. Compared for three industrial
// routes to maleic anhydride (M = 98.06), computed from molar masses: from benzene
// (+2CO₂+2H₂O by-product) 44.1 %; from n-butane (+4H₂O) 57.6 %; from 1-butene
// (+3H₂O) 64.5 %. Higher atom economy = less carbon wasted as CO₂/water, a core
// green-chemistry metric distinct from % yield.
export function AtomEconomyViz() {
  const MA = 98.06,
    CO2 = 44.01,
    H2O = 18.02
  const routes = [
    { n: 'benzene', total: MA + 2 * CO2 + 2 * H2O },
    { n: 'n-butane', total: MA + 4 * H2O },
    { n: '1-butene', total: MA + 3 * H2O }
  ].map(r => ({ ...r, ae: (MA / r.total) * 100 }))
  const W = 560,
    H = 300
  const padL = 90,
    padB = 40,
    padT = 24,
    padR = 40
  const xOf = v => padL + (v / 100) * (W - padL - padR)
  const n = routes.length
  const yOf = i => padT + (i + 0.5) * ((H - padT - padB) / n)
  const bh = ((H - padT - padB) / n) * 0.5
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {[0, 25, 50, 75, 100].map(v => (
          <g key={v}>
            <line
              x1={xOf(v)}
              y1={padT - 4}
              x2={xOf(v)}
              y2={H - padB}
              stroke={FG}
              strokeOpacity={OPACITY.hair}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={xOf(v)}
              y={H - padB + 14}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {v + '%'}
            </text>
          </g>
        ))}
        {routes.map((r, i) => (
          <g key={r.n}>
            <rect
              x={padL}
              y={yOf(i) - bh / 2}
              width={xOf(r.ae) - padL}
              height={bh}
              fill={FG}
              fillOpacity={0.16}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={padL - 8}
              y={yOf(i) + 3}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_SMALL}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {r.n}
            </text>
            <text
              x={xOf(r.ae) + 6}
              y={yOf(i) + 3}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_SMALL}
              textAnchor="start"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {r.ae.toFixed(1) + '%'}
            </text>
          </g>
        ))}
        <text
          x={(padL + W - padR) / 2}
          y={16}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          atom economy → maleic anhydride
        </text>
      </Canvas>
      <Readout>
        AE = M(product)/ΣM(products): benzene {routes[0].ae.toFixed(1)}% → n-butane{' '}
        {routes[1].ae.toFixed(1)}% → 1-butene {routes[2].ae.toFixed(1)}% (fewer/lighter by-products
        = greener)
      </Readout>
    </div>
  )
}

// Supercritical CO₂ phase diagram. The three phase boundaries meet at the triple
// point (216.6 K, 5.18 bar) and the vaporization curve ends at the critical point
// (304.13 K, 73.8 bar); beyond it lies the SUPERCRITICAL region where CO₂ is
// neither liquid nor gas and acts as a tunable, benign solvent (decaf, extraction).
// The liquid–vapour line is computed from Clausius–Clapeyron ln P = A − B/T fitted
// through the triple and critical points; the melting line is near-vertical and
// the sublimation line runs below the triple point. Real anchor points.
export function SupercriticalCO2Viz() {
  const Tt = 216.6,
    Pt = 5.18,
    Tc = 304.13,
    Pc = 73.8
  const B = Math.log(Pc / Pt) / (1 / Tt - 1 / Tc)
  const A = Math.log(Pt) + B / Tt
  const vap = T => Math.exp(A - B / T) // bar
  // sublimation (steeper) below triple — fit through triple and a low anchor (195 K, 1 atm≈1.013)
  const Tsub = 194.7,
    Psub = 1.013
  const Bs = Math.log(Pt / Psub) / (1 / Tsub - 1 / Tt)
  const As = Math.log(Pt) + Bs / Tt
  const sub = T => Math.exp(As - Bs / T)
  const Tmin = 180,
    Tmax = 340,
    Pmax = 100
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[Tmin, Tmax]} yRange={[0, Pmax]} width={560} height={360} pad={38}>
        {/* supercritical region shading */}
        <Polyline
          points={[
            [Tc, Pc],
            [Tmax, Pc],
            [Tmax, Pmax],
            [Tc, Pmax]
          ]}
          closed
          fillOpacity={0.08}
          opacity={0}
        />
        {/* sublimation curve */}
        <Parametric
          xy={t => [t, sub(t)]}
          t={[Tmin, Tt]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* vaporization curve */}
        <Parametric
          xy={t => [t, vap(t)]}
          t={[Tt, Tc]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* melting line (near vertical, slight positive slope) */}
        <Polyline
          points={[
            [Tt, Pt],
            [Tt + 4, Pmax]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* points */}
        <Dot x={Tt} y={Pt} r={2.8} opacity={OPACITY.fg} />
        <Dot x={Tc} y={Pc} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[Tt + 4, Pt + 3]}
          tex={'\\text{triple}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[Tc - 4, Pc + 2]}
          tex={'\\text{critical}'}
          anchor="end"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Label
          at={[(Tc + Tmax) / 2, Pmax - 8]}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        >
          SUPERCRITICAL
        </Label>
        <Label at={[240, 55]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
          LIQUID
        </Label>
        <Label at={[280, 14]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
          GAS
        </Label>
        <Label at={[195, 30]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
          SOLID
        </Label>
        <Label at={[(Tmin + Tmax) / 2, -4]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          TEMPERATURE / K
        </Label>
        <Label at={[Tmin + 4, Pmax - 2]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          PRESSURE / bar
        </Label>
      </Plot>
      <Readout>
        CO₂: triple 216.6 K/5.18 bar, critical 304.1 K/73.8 bar; liquid–vapour line from
        Clausius–Clapeyron. Above the critical point → tunable supercritical solvent
      </Readout>
    </div>
  )
}

// ADDENDUM · MISSED HIGH ROWS (reconciled against the 70-export catalog)
// Four audit HIGH rows that migrate to primitives but were skipped in the first
// pass: U02 sp-interference density, U07 electrolytic anatomy + competing-reaction
// voltage bars, U08 chromophore UV-Vis. Each computed / honest per the landmines.

// U02, sp hybridization as REAL s+p interference (Landmine 1 honest: a COMPUTED
// 2D |ψ|² density, never a pen-drawn lobe). The sp hybrid is ψ_sp = (ψ₂ₛ + ψ₂ₚ_z)/√2.
// Exact hydrogenic forms (Z = 1, atomic units a₀ = 1; LibreTexts "Hydrogen-atom
// wavefunctions"): ψ₂ₛ ∝ (2 − r)·e^(−r/2) (radial node at r = 2a₀) and
// ψ₂ₚ_z ∝ z·e^(−r/2) (= r cosθ · e^(−r/2)). They share the e^(−r/2) envelope, so
// ψ_sp ∝ [(2 − r) + z]·e^(−r/2) and the plotted density |ψ_sp|² ∝ [(2−r)+z]²·e^(−r).
// On +z the two amplitudes ADD (constructive → big front lobe); on the −z axis they
// cancel at r = 1a₀ ([(2−1)−1] = 0 → an interference NODE), leaving only a faint
// back tail. The lopsided shape EMERGES cell-by-cell from the interference.
export function HybridizationInterferenceViz() {
  const W = 460,
    H = 460,
    N = 58,
    span = 8 // a₀ half-range; x–z cross-section (y = 0)
  const cw = W / N
  const cells = React.useMemo(() => {
    const raw = []
    let mx = 0
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x = -span + ((i + 0.5) / N) * 2 * span
        const z = span - ((j + 0.5) / N) * 2 * span
        const r = Math.sqrt(x * x + z * z)
        const amp = (2 - r + z) * Math.exp(-r / 2)
        const d = amp * amp
        raw.push({ i, j, d })
        if (d > mx) mx = d
      }
    }
    return raw
      .map(c => ({ i: c.i, j: c.j, op: Math.min(1, (c.d / mx) * 0.95) }))
      .filter(c => c.op >= 0.02)
  }, [])
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {cells.map((c, k) => (
          <rect
            key={k}
            x={c.i * cw}
            y={c.j * cw}
            width={cw + 0.5}
            height={cw + 0.5}
            fill={FG}
            fillOpacity={c.op}
          />
        ))}
        {/* z axis */}
        <line
          x1={W / 2}
          y1={0}
          x2={W / 2}
          y2={H}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <circle cx={W / 2} cy={H / 2} r={2.5} fill={FG} opacity={OPACITY.fg} />
        <MultiLine
          x={W / 2}
          y={26}
          lines={['+z · s AND p ADD (BIG LOBE)']}
          opacity={OPACITY.fg}
          size={FONT_SMALL}
        />
        <MultiLine
          x={W / 2}
          y={H - 14}
          lines={['−z · s AND p CANCEL (FAINT)']}
          opacity={OPACITY.dim}
          size={FONT_SMALL}
        />
      </Canvas>
      <Readout>
        ψ_sp = (ψ₂ₛ + ψ₂ₚ_z)/√2 → |ψ|² ∝ [(2−r)+z]²·e^(−r): amplitudes ADD on +z, CANCEL on −z (node
        at r = 1a₀) → lopsided hybrid, computed density not a drawn lobe
      </Readout>
    </div>
  )
}

// U07 — Electrolytic-cell anatomy and the SIGN REVERSAL vs a galvanic cell. An
// external power source PUMPS electrons: it pushes them onto the cathode (now the
// NEGATIVE terminal) where reduction is forced, and pulls them from the anode (now
// POSITIVE) where oxidation is forced — the opposite polarity to the spontaneous
// Daniell cell (anode −, cathode +). Shown for molten NaCl (the Downs idea):
// cathode Na⁺ + e⁻ → Na, anode 2Cl⁻ → Cl₂ + 2e⁻. An honest labelled schematic; the
// driving requirement E_applied > |E°_cell| is the physics (no fabricated curve).
export function ElectrolyticCellViz() {
  const W = 560,
    H = 340
  const cx = W / 2,
    tankT = 150,
    tankB = 300,
    tankL = 150,
    tankR = 410
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* power source (battery) */}
        <line
          x1={cx - 60}
          y1={40}
          x2={cx + 60}
          y2={40}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <line
          x1={cx - 10}
          y1={30}
          x2={cx - 10}
          y2={50}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <line
          x1={cx + 10}
          y1={34}
          x2={cx + 10}
          y2={46}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={cx - 26}
          y={26}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          −
        </text>
        <text
          x={cx + 26}
          y={26}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          +
        </text>
        <text
          x={cx}
          y={62}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          DC power source
        </text>
        {/* wires down to electrodes */}
        <path
          d={`M ${cx - 40} 40 L ${cx - 40} 74 L ${tankL + 60} 74 L ${tankL + 60} 110`}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <path
          d={`M ${cx + 40} 40 L ${cx + 40} 74 L ${tankR - 60} 74 L ${tankR - 60} 110`}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* electron flow: from − terminal down to cathode (left) */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={cx - 40} y1={90} x2={cx - 40} y2={62} />
          <polyline points={`${cx - 46},74 ${cx - 40},62 ${cx - 34},74`} />
        </g>
        <TexPx
          x={cx - 40}
          y={104}
          anchor="middle"
          tex={'\\mathrm{e^-}\\ \\text{in}'}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={cx + 40} y1={62} x2={cx + 40} y2={90} />
          <polyline points={`${cx + 34},78 ${cx + 40},90 ${cx + 46},78`} />
        </g>
        <TexPx
          x={cx + 40}
          y={104}
          anchor="middle"
          tex={'\\mathrm{e^-}\\ \\text{out}'}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        {/* electrolyte tank */}
        <path
          d={`M ${tankL} ${tankT} L ${tankL} ${tankB} L ${tankR} ${tankB} L ${tankR} ${tankT}`}
          fill={FG}
          fillOpacity={0.04}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* electrodes */}
        <rect
          x={tankL + 52}
          y={110}
          width={16}
          height={150}
          fill={FG}
          fillOpacity={0.14}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <rect
          x={tankR - 68}
          y={110}
          width={16}
          height={150}
          fill={FG}
          fillOpacity={0.14}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* ion migration arrows */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={cx + 24} y1={230} x2={tankL + 90} y2={230} />
          <polyline points={`${tankL + 98},224 ${tankL + 90},230 ${tankL + 98},236`} />
          <line x1={cx - 24} y1={258} x2={tankR - 90} y2={258} />
          <polyline points={`${tankR - 98},252 ${tankR - 90},258 ${tankR - 98},264`} />
        </g>
        <TexPx
          x={cx}
          y={226}
          anchor="middle"
          tex={'\\mathrm{Na^+}'}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <TexPx
          x={cx}
          y={270}
          anchor="middle"
          tex={'\\mathrm{Cl^-}'}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        {/* labels */}
        <text
          x={tankL + 60}
          y={H - 22}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          CATHODE (−)
        </text>
        <text
          x={tankR - 60}
          y={H - 22}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          ANODE (+)
        </text>
        <TexPx
          x={tankL + 60}
          y={H - 6}
          anchor="middle"
          tex={'\\mathrm{Na^+ + e^- \\to Na}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <TexPx
          x={tankR - 60}
          y={H - 6}
          anchor="middle"
          tex={'\\mathrm{2Cl^- \\to Cl_2 + 2e^-}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Canvas>
      <Readout>
        Driven cell: the source forces e⁻ onto the cathode (−, reduction) and pulls them from the
        anode (+, oxidation), polarity REVERSED from galvanic; requires E_applied &gt; |E°_cell|
      </Readout>
    </div>
  )
}

// U07, Competing aqueous reactions: which species is discharged is set by the
// SMALLEST total voltage demand = |E°| + overpotential η, not by E° alone. Anode
// candidates as stacked bars (thermodynamic |E°| base + kinetic η surcharge):
//  · Brine (overpotential FLIPS it): O₂/H₂O E° = 1.23 V but η(O₂) ≈ 0.6 V → 1.83 V,
//    vs Cl₂/Cl⁻ E° = 1.36 V with small η(Cl₂) ≈ 0.10 V → 1.46 V ⇒ Cl₂ wins even
//    though its E° is HIGHER (Wikipedia "Overpotential"; the basis of chlor-alkali).
//  · Iodide (potential DECIDES): I₂/I⁻ E° = 0.54 V + η ≈ 0.10 → 0.64 V beats O₂
//    (1.83 V) outright, no flip needed. E° values CRC/IUPAC; η representative.
export function CompetingReactionsViz() {
  const panels = [
    {
      title: 'BRINE ANODE, η FLIPS IT',
      cands: [
        { n: 'O₂/H₂O', E: 1.23, eta: 0.6 },
        { n: 'Cl₂/Cl⁻', E: 1.36, eta: 0.1 }
      ]
    },
    {
      title: 'IODIDE ANODE, E° DECIDES',
      cands: [
        { n: 'O₂/H₂O', E: 1.23, eta: 0.6 },
        { n: 'I₂/I⁻', E: 0.54, eta: 0.1 }
      ]
    }
  ]
  const W = 300,
    H = 300,
    padB = 46,
    padT = 30,
    vMax = 2.2
  const yOf = v => padT + (1 - v / vMax) * (H - padT - padB)
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
        {panels.map(pan => {
          const winner = pan.cands.reduce((a, b) => (a.E + a.eta <= b.E + b.eta ? a : b))
          const bw = 52,
            gap = 70,
            x0 = W / 2 - (pan.cands.length * bw + (pan.cands.length - 1) * gap) / 2
          return (
            <div key={pan.title} style={{ flex: '1 1 280px', minWidth: 260, maxWidth: 340 }}>
              <Canvas w={W} h={H}>
                <line
                  x1={40}
                  y1={yOf(0)}
                  x2={W - 12}
                  y2={yOf(0)}
                  stroke={FG}
                  strokeOpacity={OPACITY.dim}
                  strokeWidth={STROKE_SECONDARY}
                />
                {[0, 0.5, 1, 1.5, 2].map(v => (
                  <g key={v}>
                    <line
                      x1={38}
                      y1={yOf(v)}
                      x2={42}
                      y2={yOf(v)}
                      stroke={FG}
                      strokeOpacity={OPACITY.dim}
                      strokeWidth={STROKE_SECONDARY}
                    />
                    <text
                      x={34}
                      y={yOf(v) + 3}
                      fill={FG}
                      opacity={OPACITY.dim}
                      fontSize={FONT_TINY}
                      textAnchor="end"
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      {v.toFixed(1)}
                    </text>
                  </g>
                ))}
                <text
                  x={40}
                  y={padT - 12}
                  fill={FG}
                  opacity={OPACITY.dim}
                  fontSize={FONT_TINY}
                  textAnchor="start"
                  style={{
                    fontFamily: FONT_FAMILY,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  VOLTAGE DEMAND / V
                </text>
                {pan.cands.map((c, i) => {
                  const x = x0 + i * (bw + gap)
                  const isWin = c === winner
                  return (
                    <g key={c.n}>
                      {/* E° base */}
                      <rect
                        x={x}
                        y={yOf(c.E)}
                        width={bw}
                        height={yOf(0) - yOf(c.E)}
                        fill={FG}
                        fillOpacity={0.16}
                        stroke={FG}
                        strokeOpacity={isWin ? OPACITY.fg : OPACITY.dim}
                        strokeWidth={isWin ? STROKE_PRIMARY : STROKE_SECONDARY}
                      />
                      {/* η surcharge */}
                      <rect
                        x={x}
                        y={yOf(c.E + c.eta)}
                        width={bw}
                        height={yOf(c.E) - yOf(c.E + c.eta)}
                        fill={FG}
                        fillOpacity={0.42}
                        stroke={FG}
                        strokeOpacity={isWin ? OPACITY.fg : OPACITY.dim}
                        strokeWidth={isWin ? STROKE_PRIMARY : STROKE_SECONDARY}
                      />
                      <text
                        x={x + bw / 2}
                        y={yOf(c.E + c.eta) - 16}
                        fill={FG}
                        opacity={OPACITY.fg}
                        fontSize={FONT_SMALL}
                        textAnchor="middle"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        {(c.E + c.eta).toFixed(2)}
                      </text>
                      {isWin && (
                        <text
                          x={x + bw / 2}
                          y={yOf(c.E + c.eta) - 4}
                          fill={FG}
                          opacity={OPACITY.fg}
                          fontSize={FONT_TINY}
                          textAnchor="middle"
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          ◀ evolved
                        </text>
                      )}
                      <text
                        x={x + bw / 2}
                        y={yOf(0) + 16}
                        fill={FG}
                        opacity={OPACITY.fg}
                        fontSize={FONT_SMALL}
                        textAnchor="middle"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        {c.n}
                      </text>
                      <text
                        x={x + bw / 2}
                        y={yOf(0) + 30}
                        fill={FG}
                        opacity={OPACITY.dim}
                        fontSize={FONT_TINY}
                        textAnchor="middle"
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        E°={c.E.toFixed(2)}
                      </text>
                    </g>
                  )
                })}
                <text
                  x={W / 2}
                  y={H - 6}
                  fill={FG}
                  opacity={OPACITY.dim}
                  fontSize={FONT_TINY}
                  textAnchor="middle"
                  style={{
                    fontFamily: FONT_FAMILY,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}
                >
                  {pan.title}
                </text>
              </Canvas>
            </div>
          )
        })}
      </div>
      <Readout>
        Discharged = lowest |E°| + η. Brine: Cl₂ (1.46 V) beats O₂ (1.83 V) though E°(Cl₂) is
        higher, η flips it (chlor-alkali). Iodide: I₂ (0.64 V) wins on E° alone. Solid = |E°|,
        shaded = η surcharge
      </Readout>
    </div>
  )
}

// U08, Chromophore UV-Vis of acetone: two electronic transitions of the C=O group.
// The symmetry-ALLOWED π→π* band is intense (λ_max ≈ 189 nm, ε ≈ 900 M⁻¹cm⁻¹); the
// symmetry-FORBIDDEN n→π* band is weak (λ_max ≈ 279 nm, ε ≈ 15 M⁻¹cm⁻¹), a ~60×
// intensity gap that is the whole point of selection rules, so ε is plotted on a
// LOG axis to show both. Each band is a representative Gaussian in wavenumber,
// centred at the measured λ_max with the measured peak ε (values: standard organic
// UV-Vis tables, e.g. LibreTexts / Pavia "Introduction to Spectroscopy", acetone).
export function ChromophoreUVVisViz() {
  const bands = [
    { lam0: 189, eps: 900, fwhm: 26, tag: 'π→π* (allowed)' },
    { lam0: 279, eps: 15, fwhm: 34, tag: 'n→π* (forbidden)' }
  ]
  // Gaussian in wavenumber space (cm⁻¹) → natural band shape; convert σ from fwhm(nm).
  const epsAt = lam => {
    let e = 0
    for (const b of bands) {
      const sig = b.fwhm / 2.3548
      e += b.eps * Math.exp(-0.5 * Math.pow((lam - b.lam0) / sig, 2))
    }
    return e
  }
  const lamMin = 170,
    lamMax = 320
  const yMin = 0,
    yMax = 3.1 // log10(ε)
  const logE = lam => Math.log10(Math.max(epsAt(lam), 1))
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[lamMin, lamMax]} yRange={[yMin, yMax]} width={560} height={320} pad={38}>
        <Polyline
          points={[
            [lamMin, 0],
            [lamMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0, 1, 2, 3].map(d => (
          <g key={d}>
            <Polyline
              points={[
                [lamMin, d],
                [lamMin + 3, d]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[lamMin - 1, d]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {'10' + ['⁰', '¹', '²', '³'][d]}
            </Label>
          </g>
        ))}
        <Parametric
          xy={t => [t, logE(t)]}
          t={[lamMin, lamMax]}
          samples={360}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {bands.map(b => (
          <g key={b.lam0}>
            <Polyline
              points={[
                [b.lam0, 0],
                [b.lam0, Math.log10(b.eps)]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_SECONDARY}
              dash="3 3"
            />
            <Tex
              at={[b.lam0, Math.log10(b.eps) + 0.18]}
              tex={`\\lambda_{\\max}=${b.lam0}`}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
          </g>
        ))}
        <Tex
          at={[196, 2.62]}
          tex={'\\pi\\!\\to\\!\\pi^{*}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[286, 1.42]}
          tex={'n\\!\\to\\!\\pi^{*}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[(lamMin + lamMax) / 2, -0.28]}
          anchor="middle"
          tex={'\\text{WAVELENGTH }\\lambda\\ /\\ \\mathrm{nm}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[lamMin + 2, yMax]}
          anchor="start"
          tex={'\\varepsilon\\ /\\ \\mathrm{M^{-1}cm^{-1}}\\ (\\log)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Acetone C=O: allowed π→π* at 189 nm (ε ≈ 900) is ~60× more intense than the forbidden n→π*
        at 279 nm (ε ≈ 15), selection rules set the intensity, shown on a log-ε axis
      </Readout>
    </div>
  )
}

// MED TIER · UNIT 01, ATOMIC STRUCTURE

// de Broglie wavelength λ = h/(mv). On log–log axes each mass gives a straight
// line of slope −1, offset by −log(m). An electron (m_e = 9.109×10⁻³¹ kg) at
// 10⁶ m/s has λ ≈ 0.73 nm, atom-sized, so diffraction is observable; a 145 g
// baseball at 40 m/s has λ ≈ 1×10⁻³⁴ m, ~24 orders smaller, utterly undetectable.
// Constants (CODATA): h = 6.626×10⁻³⁴ J·s, m_e = 9.109×10⁻³¹ kg.
export function DeBroglieViz() {
  const h = 6.626e-34
  const me = 9.109e-31,
    mb = 0.145
  const logLam = (m, logv) => Math.log10(h / m) - logv
  const xMin = 0,
    xMax = 8,
    yMin = -36,
    yMax = -6
  const eLine = [
    [xMin, logLam(me, xMin)],
    [xMax, logLam(me, xMax)]
  ]
  const bLine = [
    [xMin, logLam(mb, xMin)],
    [xMax, logLam(mb, xMax)]
  ]
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[yMin, yMax]} width={560} height={340} pad={40}>
        <Polyline
          points={[
            [xMin, yMin],
            [xMax, yMin]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0, 2, 4, 6, 8].map(v => (
          <g key={'x' + v}>
            <Polyline
              points={[
                [v, yMin],
                [v, yMin + 0.7]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[v, yMin - 1.6]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {'10' + ['⁰', '', '²', '', '⁴', '', '⁶', '', '⁸'][v]}
            </Label>
          </g>
        ))}
        {[-10, -20, -30].map(y => (
          <g key={'y' + y}>
            <Polyline
              points={[
                [xMin, y],
                [xMin + 0.14, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[xMin - 0.1, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {'10' + (y === -10 ? '⁻¹⁰' : y === -20 ? '⁻²⁰' : '⁻³⁰')}
            </Label>
          </g>
        ))}
        <Polyline points={eLine} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline points={bLine} opacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} dash="5 4" />
        <Dot x={6} y={logLam(me, 6)} r={3} opacity={OPACITY.fg} />
        <Tex
          at={[6.1, logLam(me, 6) + 2.2]}
          tex={'e^{-}:\\ 0.73\\,\\text{nm}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Dot x={1.6} y={logLam(mb, 1.6)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[1.7, logLam(mb, 1.6) + 2.4]}
          tex={'\\text{baseball:}\\ 10^{-34}\\,\\text{m}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[(xMin + xMax) / 2, yMin - 4]}
          anchor="middle"
          tex={'\\text{SPEED }v\\ /\\ \\mathrm{m\\ s^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[xMin + 0.2, yMax]}
          anchor="start"
          tex={'\\lambda\\ /\\ \\mathrm{m}\\ (\\log)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        λ = h/mv, h = 6.626×10⁻³⁴ J·s: slope −1 on log–log; electron waves are atom-sized
        (diffractable), a baseball's λ is ~10²⁴× smaller, why matter waves matter only for light
        particles
      </Readout>
    </div>
  )
}

// Heisenberg uncertainty principle Δx·Δp ≥ ℏ/2. The boundary Δp = ℏ/(2Δx) is a
// hyperbola; only the region ABOVE-and-right of it (the product large enough) is
// physically allowed. Localising a particle more tightly (small Δx) forces a larger
// momentum spread. Worked point: at Δx = 100 pm (an atom), Δp_min = ℏ/(2·10⁻¹⁰) =
// 5.3×10⁻²⁵ kg·m/s. ℏ = 1.0546×10⁻³⁴ J·s (CODATA).
export function HeisenbergViz() {
  const hbar = 1.0546e-34
  // x: Δx in pm; y: Δp in units of 1e-24 kg m/s
  const dpMin = dxpm => hbar / (2 * dxpm * 1e-12) / 1e-24
  const xMin = 20,
    xMax = 300,
    yMin = 0,
    yMax = 3
  const curve = []
  for (let dx = xMin; dx <= xMax; dx += 2) curve.push([dx, dpMin(dx)])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[xMin, xMax]} yRange={[yMin, yMax]} width={560} height={330} pad={40}>
        <Polyline
          points={[
            [xMin, yMin],
            [xMax, yMin]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[50, 100, 150, 200, 250, 300].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, 0.06]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -0.14]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {x}
            </Label>
          </g>
        ))}
        {[1, 2, 3].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [xMin, y],
                [xMin + 4, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[xMin - 2, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        <Polyline points={curve} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Tex
          at={[150, dpMin(150) + 0.7]}
          tex={'\\Delta x\\,\\Delta p=\\dfrac{\\hbar}{2}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Label at={[210, 2.3]} anchor="middle" size={FONT_SMALL} opacity={OPACITY.accent}>
          ALLOWED
        </Label>
        <Label at={[70, 0.35]} anchor="middle" size={FONT_SMALL} opacity={OPACITY.faint}>
          FORBIDDEN
        </Label>
        <Dot x={100} y={dpMin(100)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[104, dpMin(100) + 0.34]}
          tex={'100\\,\\text{pm}\\Rightarrow 5.3{\\times}10^{-25}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[(xMin + xMax) / 2, -0.36]}
          anchor="middle"
          tex={'\\text{POSITION SPREAD }\\Delta x\\ /\\ \\mathrm{pm}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[xMin + 2, yMax]}
          anchor="start"
          tex={'\\Delta p\\ /\\ 10^{-24}\\ \\mathrm{kg\\ m\\ s^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Δx·Δp ≥ ℏ/2 (ℏ = 1.055×10⁻³⁴ J·s): the hyperbola is the limit; tighter localisation (smaller
        Δx) forces a larger momentum spread. At Δx = 100 pm, Δp ≥ 5.3×10⁻²⁵ kg·m/s
      </Readout>
    </div>
  )
}

// Quantum-number branching tree n → l → mₗ, shown for n = 3. Each principal shell n
// allows l = 0…n−1; each l allows mₗ = −l…+l (2l+1 values). Counting the mₗ leaves
// gives Σ(2l+1) = n² orbitals (here 1+3+5 = 9 = 3²); each orbital holds mₛ = ±½, so
// 2n² = 18 electrons. The count is DERIVED from the rules, not asserted.
export function QuantumNumberTreeViz() {
  const W = 560,
    H = 340
  const root = { x: 280, y: 34 }
  const ls = [
    { l: 0, x: 90, ml: [0] },
    { l: 1, x: 250, ml: [-1, 0, 1] },
    { l: 2, x: 440, ml: [-2, -1, 0, 1, 2] }
  ]
  const leafX = { 0: [90], 1: [200, 250, 300], 2: [360, 400, 440, 480, 520] }
  const lY = 130,
    mY = 240
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* edges root→l */}
        {ls.map(g => (
          <line
            key={'e' + g.l}
            x1={root.x}
            y1={root.y + 12}
            x2={g.x}
            y2={lY - 12}
            stroke={FG}
            strokeOpacity={OPACITY.faint}
            strokeWidth={STROKE_GUIDE}
          />
        ))}
        {/* edges l→ml */}
        {ls.map(g =>
          leafX[g.l].map((lx, k) => (
            <line
              key={'m' + g.l + k}
              x1={g.x}
              y1={lY + 12}
              x2={lx}
              y2={mY - 10}
              stroke={FG}
              strokeOpacity={OPACITY.faint}
              strokeWidth={STROKE_HAIR}
            />
          ))
        )}
        {/* root */}
        <circle
          cx={root.x}
          cy={root.y}
          r={13}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <TexPx
          x={root.x}
          y={root.y + 4}
          anchor="middle"
          tex={'n=3'}
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        {/* l nodes */}
        {ls.map(g => (
          <g key={'l' + g.l}>
            <circle
              cx={g.x}
              cy={lY}
              r={12}
              fill="var(--bg)"
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={g.x}
              y={lY + 4}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {'l=' + g.l}
            </text>
            <text
              x={g.x}
              y={lY - 18}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {['s', 'p', 'd'][g.l]}
            </text>
          </g>
        ))}
        {/* ml leaves */}
        {ls.map(g =>
          leafX[g.l].map((lx, k) => (
            <g key={'ml' + g.l + k}>
              <rect
                x={lx - 9}
                y={mY}
                width={18}
                height={16}
                fill="var(--bg)"
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={lx}
                y={mY + 12}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {g.ml[k] > 0 ? '+' + g.ml[k] : g.ml[k]}
              </text>
              <text
                x={lx}
                y={mY + 30}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                ↑↓
              </text>
            </g>
          ))
        )}
        <TexPx
          x={W / 2}
          y={mY + 52}
          anchor="middle"
          tex={
            '9\\ \\text{orbitals}\\ (=n^2)\\times 2\\ \\text{spins}=18\\,\\mathrm{e^-}\\ (=2n^2)'
          }
          size={FONT_SMALL}
          opacity={OPACITY.fg}
          width={473}
        />
      </Canvas>
      <Readout>
        n = 3 → l = 0,1,2; mₗ = −l…+l gives 2l+1 orbitals each → Σ(2l+1) = 1+3+5 = 9 = n²; ×2 for mₛ
        = ±½ → 2n² = 18 electrons. Counted, not asserted
      </Readout>
    </div>
  )
}

// Aufbau order (Madelung n+l rule) and Hund/Pauli filling. LEFT: subshells on an
// (n, l) grid; diagonal arrows sweep constant n+l (ties broken by lower n first),
// giving the fill order 1s,2s,2p,3s,3p,4s,3d,4p,… RIGHT: the resulting ground-state
// of nitrogen (Z=7) 1s²2s²2p³, the 2p electrons occupy separate orbitals with
// parallel spins (Hund's rule), each box ≤2 opposed spins (Pauli). Standard.
export function AufbauViz() {
  const W = 300,
    H = 300
  const cell = (n, l) => ({ x: 54 + l * 62, y: 40 + (n - 1) * 40 })
  const shells = [
    [1, 0],
    [2, 0],
    [2, 1],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 0],
    [4, 1],
    [4, 2],
    [5, 0],
    [5, 1],
    [6, 0]
  ]
  const letter = ['s', 'p', 'd', 'f']
  // diagonals by n+l
  const diags = {}
  shells.forEach(([n, l]) => {
    ;(diags[n + l] = diags[n + l] || []).push([n, l])
  })
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 280px', minWidth: 250, maxWidth: 320 }}>
          <Canvas w={W} h={H}>
            {Object.keys(diags).map(k => {
              const cells = diags[k].slice().sort((a, b) => a[0] - b[0])
              const a = cell(cells[0][0], cells[0][1])
              const b = cell(cells[cells.length - 1][0], cells[cells.length - 1][1])
              if (cells.length === 1) return null
              const dx = b.x - a.x,
                dy = b.y - a.y,
                L = Math.hypot(dx, dy)
              const ux = dx / L,
                uy = dy / L
              return (
                <g
                  key={'d' + k}
                  stroke={FG}
                  strokeOpacity={OPACITY.accent}
                  strokeWidth={STROKE_SECONDARY}
                  fill="none"
                  strokeLinecap="round"
                >
                  <line
                    x1={a.x - ux * 14}
                    y1={a.y - uy * 14}
                    x2={b.x + ux * 10}
                    y2={b.y + uy * 10}
                  />
                  <polyline
                    points={`${b.x + ux * 10 - ux * 7 - uy * 4},${b.y + uy * 10 - uy * 7 + ux * 4} ${b.x + ux * 10},${b.y + uy * 10} ${b.x + ux * 10 - ux * 7 + uy * 4},${b.y + uy * 10 - uy * 7 - ux * 4}`}
                  />
                </g>
              )
            })}
            {shells.map(([n, l]) => {
              const p = cell(n, l)
              return (
                <text
                  key={n + '_' + l}
                  x={p.x}
                  y={p.y}
                  fill={FG}
                  opacity={OPACITY.fg}
                  fontSize={FONT_SMALL}
                  textAnchor="middle"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  {n + letter[l]}
                </text>
              )
            })}
            <text
              x={W / 2}
              y={H - 8}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{
                fontFamily: FONT_FAMILY,
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              n+l rule, follow arrows ↘
            </text>
          </Canvas>
        </div>
        <div style={{ flex: '1 1 280px', minWidth: 250, maxWidth: 320 }}>
          <Canvas w={W} h={H}>
            {[
              { lab: '1s', x: 60, n: 1, arr: '↿⇂' },
              { lab: '2s', x: 60, n: 2, arr: '↿⇂' }
            ].map(b => (
              <g key={b.lab}>
                <rect
                  x={b.x}
                  y={60 + (b.n - 1) * 70}
                  width={30}
                  height={26}
                  fill="none"
                  stroke={FG}
                  strokeOpacity={OPACITY.dim}
                  strokeWidth={STROKE_SECONDARY}
                />
                <text
                  x={b.x + 15}
                  y={60 + (b.n - 1) * 70 + 18}
                  fill={FG}
                  opacity={OPACITY.fg}
                  fontSize={FONT_LABEL}
                  textAnchor="middle"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  ↿⇂
                </text>
                <text
                  x={b.x - 12}
                  y={60 + (b.n - 1) * 70 + 18}
                  fill={FG}
                  opacity={OPACITY.dim}
                  fontSize={FONT_TINY}
                  textAnchor="middle"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  {b.lab}
                </text>
              </g>
            ))}
            {/* 2p three boxes, Hund parallel up-spins */}
            {[0, 1, 2].map(i => (
              <g key={'p' + i}>
                <rect
                  x={150 + i * 34}
                  y={130}
                  width={30}
                  height={26}
                  fill="none"
                  stroke={FG}
                  strokeOpacity={OPACITY.dim}
                  strokeWidth={STROKE_SECONDARY}
                />
                <text
                  x={150 + i * 34 + 15}
                  y={148}
                  fill={FG}
                  opacity={OPACITY.fg}
                  fontSize={FONT_LABEL}
                  textAnchor="middle"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  ↿
                </text>
              </g>
            ))}
            <text
              x={183}
              y={124}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              2p
            </text>
            <TexPx
              x={W / 2}
              y={210}
              anchor="middle"
              tex={'\\mathrm{N}\\ (Z=7)\\text{: }\\mathrm{1s^2\\ 2s^2\\ 2p^3}'}
              size={FONT_SMALL}
              opacity={OPACITY.fg}
              width={220}
            />
            <text
              x={W / 2}
              y={H - 8}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{
                fontFamily: FONT_FAMILY,
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              Hund: 3 parallel spins in 2p
            </text>
          </Canvas>
        </div>
      </div>
      <Readout>
        Fill order from the n+l (Madelung) rule; nitrogen's 2p³ half-fills three orbitals with
        PARALLEL spins (Hund's rule of maximum multiplicity), each orbital ≤ 2 paired spins (Pauli)
      </Readout>
    </div>
  )
}

// Electronegativity (Pauling scale) across a period and down a group. χ rises
// left→right (higher Z_eff pulls bonding electrons harder) and falls top→bottom
// (valence shell farther from the nucleus). Period-2 Li→F and period-3 Na→Cl are
// plotted; F (3.98) is the most electronegative element, and each period-3 atom
// lies BELOW its period-2 partner (F 3.98 > Cl 3.16). Pauling values (CRC/IUPAC).
export function ElectronegativityTrendViz() {
  const p2 = [
    ['Li', 0.98],
    ['Be', 1.57],
    ['B', 2.04],
    ['C', 2.55],
    ['N', 3.04],
    ['O', 3.44],
    ['F', 3.98]
  ]
  const p3 = [
    ['Na', 0.93],
    ['Mg', 1.31],
    ['Al', 1.61],
    ['Si', 1.9],
    ['P', 2.19],
    ['S', 2.58],
    ['Cl', 3.16]
  ]
  const xMax = 6,
    yMax = 4.2
  const pts = arr => arr.map((d, i) => [i, d[1]])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.4, xMax + 0.4]} yRange={[0, yMax]} width={560} height={320} pad={38}>
        <Polyline
          points={[
            [-0.4, 0],
            [xMax + 0.4, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[1, 2, 3, 4].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-0.4, y],
                [-0.26, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.5, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y.toFixed(0)}
            </Label>
          </g>
        ))}
        <Polyline points={pts(p2)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={pts(p3)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        {p2.map((d, i) => (
          <g key={'a' + i}>
            <Dot x={i} y={d[1]} r={2.6} opacity={OPACITY.fg} />
            <Label
              at={[i, d[1] + 0.001]}
              anchor="middle"
              size={FONT_TINY}
              dy={-8}
              opacity={OPACITY.dim}
            >
              {d[0]}
            </Label>
          </g>
        ))}
        {p3.map((d, i) => (
          <Dot key={'b' + i} x={i} y={d[1]} r={2.6} opacity={OPACITY.accent} />
        ))}
        <Tex
          at={[0.1, 1.0]}
          tex={'\\text{period 2}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[3.0, 1.55]}
          tex={'\\text{period 3}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Label at={[3, -0.32]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          ← LEFT TO RIGHT ACROSS PERIOD →
        </Label>
        <Tex
          at={[-0.3, yMax]}
          anchor="start"
          tex={'\\chi\\ (\\text{PAULING})'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Pauling χ rises across a period (Li 0.98 → F 3.98) and falls down a group (F 3.98 &gt; Cl
        3.16), F is the most electronegative element
      </Readout>
    </div>
  )
}

// Electron affinity across Period 2 and 3 (energy RELEASED when an atom gains an
// electron, kJ/mol; larger = more favourable). The trend rises left→right but with
// two honest irregularities: the group-15 dip (N ≈ −7, adding to a stable half-full
// 2p³ is unfavourable) and the F < Cl anomaly (Cl 349 > F 328, the tiny F 2p is so
// compact that electron–electron repulsion offsets its higher nuclear pull).
// Values: standard tables (CRC / NIST), kJ/mol.
export function ElectronAffinityTrendViz() {
  const p2 = [
    ['Li', 60],
    ['Be', -48],
    ['B', 27],
    ['C', 122],
    ['N', -7],
    ['O', 141],
    ['F', 328]
  ]
  const p3 = [
    ['Na', 53],
    ['Mg', -40],
    ['Al', 42],
    ['Si', 134],
    ['P', 72],
    ['S', 200],
    ['Cl', 349]
  ]
  const xMax = 6,
    yMin = -80,
    yMax = 380
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.4, xMax + 0.4]} yRange={[yMin, yMax]} width={560} height={330} pad={40}>
        <Polyline
          points={[
            [-0.4, 0],
            [xMax + 0.4, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0, 100, 200, 300].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-0.4, y],
                [-0.26, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.5, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        <Polyline
          points={p2.map((d, i) => [i, d[1]])}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={p3.map((d, i) => [i, d[1]])}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        {p2.map((d, i) => (
          <g key={'a' + i}>
            <Dot x={i} y={d[1]} r={2.6} opacity={OPACITY.fg} />
            <Label at={[i, d[1]]} anchor="middle" size={FONT_TINY} dy={-8} opacity={OPACITY.dim}>
              {d[0]}
            </Label>
          </g>
        ))}
        {p3.map((d, i) => (
          <Dot key={'b' + i} x={i} y={d[1]} r={2.6} opacity={OPACITY.accent} />
        ))}
        <Tex
          at={[4, -46]}
          tex={'\\text{N dip: half-full }2p^3'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[6, 300]}
          tex={'\\text{Cl}>\\text{F}'}
          anchor="end"
          size={10}
          opacity={OPACITY.accent}
        />
        <Label at={[3, yMin - 8]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          ACROSS PERIOD →
        </Label>
        <Tex
          at={[-0.3, yMax]}
          anchor="start"
          tex={'E_{\\mathrm{a}}\\ /\\ \\mathrm{kJ\\ mol^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Eₐ (energy released) rises across a period but dips at group 15 (N ≈ −7, half-filled 2p³
        resists a 4th electron) and F &lt; Cl (328 &lt; 349), F's compact 2p raises e⁻–e⁻ repulsion
      </Readout>
    </div>
  )
}

// MED TIER · UNIT 02, BONDING

// Radius-ratio rule: the coordination number of the cation is set by how many
// anions can pack around it before they touch each other. The critical ratios
// γ = r₊/r₋ are pure geometry, an anion octahedron just touches at γ = √2 − 1 =
// 0.414; a cube of anions just touches at γ = √3 − 1 = 0.732. Below a threshold the
// structure drops to lower coordination. Number line with the geometric limits
// (0.155 triangular, 0.225 tetrahedral, 0.414 octahedral, 0.732 cubic; standard).
export function RadiusRatioViz() {
  const oct = Math.sqrt(2) - 1 // 0.4142
  const cub = Math.sqrt(3) - 1 // 0.7321
  const marks = [
    { g: 0.155, cn: 3, geo: 'triangular' },
    { g: 0.225, cn: 4, geo: 'tetrahedral' },
    { g: oct, cn: 6, geo: 'octahedral' },
    { g: cub, cn: 8, geo: 'cubic' }
  ]
  const W = 560,
    H = 200,
    x0 = 40,
    x1 = 520,
    ax = 120
  const xOf = g => x0 + g * (x1 - x0)
  const zones = [
    { a: 0, b: 0.155, cn: '2' },
    { a: 0.155, b: 0.225, cn: '3' },
    { a: 0.225, b: oct, cn: '4' },
    { a: oct, b: cub, cn: '6' },
    { a: cub, b: 1, cn: '8' }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={x0}
          y1={ax}
          x2={x1}
          y2={ax}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map(g => (
          <g key={g}>
            <line
              x1={xOf(g)}
              y1={ax - 4}
              x2={xOf(g)}
              y2={ax + 4}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={xOf(g)}
              y={ax + 20}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {g.toFixed(1)}
            </text>
          </g>
        ))}
        {zones.map((z, i) => (
          <text
            key={i}
            x={xOf((z.a + z.b) / 2)}
            y={ax - 12}
            fill={FG}
            opacity={OPACITY.dim}
            fontSize={FONT_TINY}
            textAnchor="middle"
            style={{ fontFamily: FONT_FAMILY }}
          >
            CN {z.cn}
          </text>
        ))}
        {marks.map((m, i) => (
          <g key={i}>
            <line
              x1={xOf(m.g)}
              y1={ax - 26}
              x2={xOf(m.g)}
              y2={ax + 26}
              stroke={FG}
              strokeOpacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
            />
            <text
              x={xOf(m.g)}
              y={ax + 44 + (i % 2) * 16}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {m.g.toFixed(3)}
            </text>
            <text
              x={xOf(m.g)}
              y={ax - 34 - (i % 2) * 14}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {m.geo}
            </text>
          </g>
        ))}
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={'\\text{radius ratio }\\gamma = \\dfrac{r_+}{r_-}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={264}
        />
      </Canvas>
      <Readout>
        Critical γ = r₊/r₋ from geometry alone: octahedral limit √2−1 = {oct.toFixed(3)}, cubic
        limit √3−1 = {cub.toFixed(3)}, the cation fills the hole until anions touch, then
        coordination drops
      </Readout>
    </div>
  )
}

// Bond polarity from the electronegativity difference Δχ (Pauling). A common
// classification: Δχ < 0.4 nonpolar covalent, 0.4–1.7 polar covalent, > 1.7 ionic.
// Real bonds placed at their computed Δχ: H–H 0, C–H 0.35, H–Cl 0.96, O–H 1.24,
// Na–Cl 2.23, Cs–F 3.19 (most ionic). Pauling χ: H 2.20, C 2.55, O 3.44, Cl 3.16,
// Na 0.93, Cs 0.79, F 3.98 (CRC/IUPAC). Δχ is COMPUTED from the χ values.
export function BondPolarityViz() {
  const chi = { H: 2.2, C: 2.55, O: 3.44, Cl: 3.16, Na: 0.93, Cs: 0.79, F: 3.98 }
  const bonds = [
    ['H–H', Math.abs(chi.H - chi.H)],
    ['C–H', Math.abs(chi.C - chi.H)],
    ['H–Cl', Math.abs(chi.H - chi.Cl)],
    ['O–H', Math.abs(chi.O - chi.H)],
    ['Na–Cl', Math.abs(chi.Na - chi.Cl)],
    ['Cs–F', Math.abs(chi.Cs - chi.F)]
  ]
  const W = 560,
    H = 210,
    x0 = 40,
    x1 = 520,
    ax = 120,
    dMax = 3.4
  const xOf = d => x0 + (d / dMax) * (x1 - x0)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* region shading boundaries */}
        {[0.4, 1.7].map(b => (
          <line
            key={b}
            x1={xOf(b)}
            y1={ax - 40}
            x2={xOf(b)}
            y2={ax + 8}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_SECONDARY}
            strokeDasharray="3 3"
          />
        ))}
        <text
          x={xOf(0.2)}
          y={ax - 44}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          NONPOLAR
        </text>
        <text
          x={xOf(1.05)}
          y={ax - 44}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          POLAR COVALENT
        </text>
        <text
          x={xOf(2.55)}
          y={ax - 44}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          IONIC
        </text>
        <line
          x1={x0}
          y1={ax}
          x2={x1}
          y2={ax}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0].map(d => (
          <g key={d}>
            <line
              x1={xOf(d)}
              y1={ax - 4}
              x2={xOf(d)}
              y2={ax + 4}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={xOf(d)}
              y={ax + 18}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {d.toFixed(1)}
            </text>
          </g>
        ))}
        {bonds.map((b, i) => (
          <g key={b[0]}>
            <line
              x1={xOf(b[1])}
              y1={ax}
              x2={xOf(b[1])}
              y2={ax - 22}
              stroke={FG}
              strokeOpacity={OPACITY.accent}
              strokeWidth={STROKE_PRIMARY}
            />
            <circle cx={xOf(b[1])} cy={ax - 22} r={2.6} fill={FG} opacity={OPACITY.fg} />
            <text
              x={xOf(b[1])}
              y={ax + 34 + (i % 2) * 16}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {b[0] + ' ' + b[1].toFixed(2)}
            </text>
          </g>
        ))}
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={'\\text{electronegativity difference }\\Delta\\chi'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={341}
        />
      </Canvas>
      <Readout>
        Δχ computed from Pauling χ: H–H 0 (nonpolar) → Na–Cl 2.23, Cs–F 3.19 (ionic). Cutoffs ~0.4
        and ~1.7 mark the smooth nonpolar → polar → ionic transition
      </Readout>
    </div>
  )
}

// London dispersion strength scales with polarizability, which grows with the
// number of electrons, so boiling point rises down a group of non-polar species.
// Two families plotted vs electron count: noble gases (He→Xe) and halogens (F₂→I₂).
// Bigger, more-polarizable clouds → stronger instantaneous-dipole attraction →
// higher b.p. Boiling points (K, NIST): He 4.2, Ne 27, Ar 87, Kr 120, Xe 165;
// F₂ 85, Cl₂ 239, Br₂ 332, I₂ 457.
export function DispersionBoilingViz() {
  const noble = [
    ['He', 2, 4.2],
    ['Ne', 10, 27],
    ['Ar', 18, 87],
    ['Kr', 36, 120],
    ['Xe', 54, 165]
  ]
  const halogen = [
    ['F₂', 18, 85],
    ['Cl₂', 34, 239],
    ['Br₂', 70, 332],
    ['I₂', 106, 457]
  ]
  const xMax = 110,
    yMax = 480
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, yMax]} width={560} height={330} pad={40}>
        <Polyline
          points={[
            [0, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[100, 200, 300, 400].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [0, y],
                [2, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-1, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {[20, 40, 60, 80, 100].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, 8]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -18]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {x}
            </Label>
          </g>
        ))}
        <Polyline
          points={noble.map(d => [d[1], d[2]])}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={halogen.map(d => [d[1], d[2]])}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        {noble.map(d => (
          <g key={d[0]}>
            <Dot x={d[1]} y={d[2]} r={2.6} opacity={OPACITY.fg} />
            <Label
              at={[d[1], d[2]]}
              anchor="start"
              dx={5}
              dy={-4}
              size={FONT_TINY}
              opacity={OPACITY.dim}
            >
              {d[0]}
            </Label>
          </g>
        ))}
        {halogen.map(d => (
          <g key={d[0]}>
            <Dot x={d[1]} y={d[2]} r={2.6} opacity={OPACITY.accent} />
            <Label
              at={[d[1], d[2]]}
              anchor="start"
              dx={5}
              dy={10}
              size={FONT_TINY}
              opacity={OPACITY.dim}
            >
              {d[0]}
            </Label>
          </g>
        ))}
        <Tex
          at={[40, 70]}
          tex={'\\text{noble gases}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[74, 380]}
          tex={'\\text{halogens}'}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Label at={[xMax / 2, -36]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          NUMBER OF ELECTRONS
        </Label>
        <Label at={[1, yMax]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          BOILING POINT / K
        </Label>
      </Plot>
      <Readout>
        b.p. climbs with electron count in both families (He 4 K → Xe 165 K; F₂ 85 K → I₂ 457 K):
        more electrons → more polarizable → stronger London dispersion forces
      </Readout>
    </div>
  )
}

// MED TIER · UNIT 03, ENERGETICS

// Heat capacity from equipartition. Each active quadratic degree of freedom adds
// ½R to C_v: translation contributes 3/2 R always; a linear molecule adds 2 rot
// (→ 5/2 R), a non-linear one adds 3 rot (→ 3R), before vibrations switch on. And
// C_p = C_v + R for an ideal gas (the extra R is expansion work at constant p).
// R = 8.314 J·mol⁻¹·K⁻¹. Bars computed as multiples of R.
export function HeatCapacityDOFViz() {
  const R = 8.314
  const kinds = [
    { n: 'monatomic\n(e.g. Ar)', cv: 1.5 },
    { n: 'linear\n(e.g. N₂)', cv: 2.5 },
    { n: 'non-linear\n(e.g. H₂O)', cv: 3.0 }
  ]
  const W = 560,
    H = 300,
    ax = 250,
    y0 = 250,
    yMax = 40
  const yOf = c => y0 - (c / yMax) * (y0 - 30)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={ax - 210}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[10, 20, 30, 40].map(v => (
          <g key={v}>
            <line
              x1={ax - 214}
              y1={yOf(v)}
              x2={ax - 210}
              y2={yOf(v)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={ax - 218}
              y={yOf(v) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {v}
            </text>
          </g>
        ))}
        {kinds.map((k, i) => {
          const bx = ax - 170 + i * 150
          const cvJ = k.cv * R,
            cpJ = (k.cv + 1) * R
          return (
            <g key={i}>
              <rect
                x={bx}
                y={yOf(cvJ)}
                width={44}
                height={y0 - yOf(cvJ)}
                fill={FG}
                fillOpacity={0.18}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              <rect
                x={bx + 50}
                y={yOf(cpJ)}
                width={44}
                height={y0 - yOf(cpJ)}
                fill={FG}
                fillOpacity={0.4}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={bx + 22}
                y={yOf(cvJ) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {cvJ.toFixed(1)}
              </text>
              <text
                x={bx + 72}
                y={yOf(cpJ) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {cpJ.toFixed(1)}
              </text>
              <text
                x={bx + 22}
                y={y0 + 16}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                Cᵥ
              </text>
              <text
                x={bx + 72}
                y={y0 + 16}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                Cₚ
              </text>
              {k.n.split('\n').map((ln, j) => (
                <text
                  key={j}
                  x={bx + 47}
                  y={y0 + 32 + j * 12}
                  fill={FG}
                  opacity={OPACITY.dim}
                  fontSize={FONT_TINY}
                  textAnchor="middle"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  {ln}
                </text>
              ))}
            </g>
          )
        })}
        <TexPx
          x={ax - 214}
          y={24}
          anchor="start"
          tex={'C\\ /\\ \\mathrm{J\\ mol^{-1}\\ K^{-1}}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Canvas>
      <Readout>
        Equipartition: C_v = 3/2 R (monatomic) → 5/2 R (linear) → 3R (non-linear); each row's C_p =
        C_v + R (12.5/20.8, 20.8/29.1, 24.9/33.3 J mol⁻¹K⁻¹), the gap is the ideal-gas expansion
        work
      </Readout>
    </div>
  )
}

// Hess's Law: enthalpy is a state function, so a reaction's ΔH is the same by any
// path. Enthalpy-level staircase for carbon → CO₂: the DIRECT route C(s) + O₂ →
// CO₂ (ΔH = −393.5 kJ/mol) equals the two-step route C + ½O₂ → CO (−110.5) then
// CO + ½O₂ → CO₂ (−283.0). −110.5 + −283.0 = −393.5. Real ΔH_f (NIST); the second
// step is COMPUTED as the difference so the cycle closes exactly.
export function HessLawViz() {
  const dfCO2 = -393.5,
    dfCO = -110.5
  const W = 560,
    H = 320,
    yTop = 40,
    yBot = 270
  const eMin = dfCO2,
    eMax = 0
  const yOf = e => yTop + (1 - (e - eMin) / (eMax - eMin)) * (yBot - yTop)
  const xC = 120,
    xCO = 320,
    xCO2 = 470,
    lw = 70
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* levels */}
        {[
          [xC, 0, 'C(s) + O₂'],
          [xCO, dfCO, 'CO + ½O₂'],
          [xCO2, dfCO2, 'CO₂']
        ].map(([x, e, lab], i) => (
          <g key={i}>
            <line
              x1={x - lw / 2}
              y1={yOf(e)}
              x2={x + lw / 2}
              y2={yOf(e)}
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <text
              x={x}
              y={yOf(e) - 8}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {lab}
            </text>
            <text
              x={x}
              y={yOf(e) + 16}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {e.toFixed(1)}
            </text>
          </g>
        ))}
        {/* two-step arrows */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={xC + lw / 2} y1={yOf(0)} x2={xCO - lw / 2} y2={yOf(dfCO)} />
          <line x1={xCO + lw / 2} y1={yOf(dfCO)} x2={xCO2 - lw / 2} y2={yOf(dfCO2)} />
        </g>
        <text
          x={(xC + xCO) / 2}
          y={yOf(dfCO / 2) - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          −110.5
        </text>
        <text
          x={(xCO + xCO2) / 2}
          y={yOf((dfCO + dfCO2) / 2) - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          −283.0
        </text>
        {/* direct route */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={xC} y1={yOf(0) + 22} x2={xC} y2={yBot + 6} />
          <line x1={xC} y1={yBot + 6} x2={xCO2} y2={yBot + 6} />
          <line x1={xCO2} y1={yBot + 6} x2={xCO2} y2={yOf(dfCO2) + 22} />
          <polyline
            points={`${xCO2 - 5},${yOf(dfCO2) + 30} ${xCO2},${yOf(dfCO2) + 22} ${xCO2 + 5},${yOf(dfCO2) + 30}`}
          />
        </g>
        <TexPx
          x={(xC + xCO2) / 2}
          y={yBot + 22}
          anchor="middle"
          tex={'\\text{direct: }\\Delta H = -393.5'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
          width={209}
        />
      </Canvas>
      <Readout>
        C → CO₂: direct −393.5 kJ/mol = two-step (−110.5) + (−283.0). ΔH is path-independent (state
        function), so the staircase closes exactly, the basis of Hess's Law
      </Readout>
    </div>
  )
}

// Phase equilibrium from free energy. Since (∂G/∂T)_p = −S and S_liquid > S_solid,
// G(T) falls more steeply for the liquid. The two lines cross at the melting point,
// where ΔG_fus = 0; below it the solid has the lower G (stable), above it the liquid
// wins. Computed for water with ΔH_fus = 6010 J/mol and ΔS_fus = 22.0 J/mol·K
// (NIST), which cross exactly at T_m = ΔH/ΔS = 273.2 K.
export function PhaseEquilibriumGibbsViz() {
  const dHf = 6010,
    dSf = 22.0 // J/mol, J/mol/K
  const Tm = dHf / dSf // 273.2 K
  const Ss = 41.0,
    Sl = Ss + dSf // molar entropies (ice 41, water 63), relative slopes
  // reference G at Tm equal; G(T) = G(Tm) − S·(T − Tm), solid taken as 0 at Tm
  const Gs = T => -Ss * (T - Tm)
  const Gl = T => -Sl * (T - Tm)
  const Tmin = 253,
    Tmax = 293
  const yspan = 900
  const yMin = -yspan,
    yMax = yspan
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[Tmin, Tmax]} yRange={[yMin, yMax]} width={560} height={330} pad={40}>
        <Polyline
          points={[
            [Tmin, 0],
            [Tmax, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [Tm, yMin],
            [Tm, yMax]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="3 3"
        />
        <Parametric
          xy={t => [t, Gs(t)]}
          t={[Tmin, Tmax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, Gl(t)]}
          t={[Tmin, Tmax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Dot x={Tm} y={0} r={3} opacity={OPACITY.fg} />
        <Tex
          at={[Tm, yMax * 0.5]}
          tex={'T_m=273\\,\\text{K}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[Tmin + 4, Gs(Tmin) - 60]}
          tex={'G_{\\text{solid}}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[Tmax - 4, Gl(Tmax) + 120]}
          tex={'G_{\\text{liquid}}'}
          anchor="end"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label at={[Tmin + 20, yMin + 120]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
          SOLID STABLE
        </Label>
        <Label at={[Tmax - 20, yMin + 120]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
          LIQUID STABLE
        </Label>
        <Label
          at={[(Tmin + Tmax) / 2, yMin - 100]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          TEMPERATURE / K
        </Label>
        <Tex
          at={[Tmin + 2, yMax]}
          anchor="start"
          tex={'G\\ (\\text{rel.})\\ /\\ \\mathrm{J\\ mol^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        (∂G/∂T) = −S and S_liquid &gt; S_solid → G_liquid falls faster; the lines cross at T_m =
        ΔH_fus/ΔS_fus = 6010/22.0 = 273.2 K, where the more stable (lower-G) phase switches
      </Readout>
    </div>
  )
}

// Boltzmann entropy S = k ln W, made honest by FULL enumeration (never a fake
// "disorder cloud"). For N distinguishable particles each with 2 equally-likely
// states, the total number of microstates is W = 2^N, literally listed for small
// N (N=2 → ↑↑, ↑↓, ↓↑, ↓↓ = 4 = 2²). Then S/k = ln W = N·ln2 is exactly linear in
// N (slope ln2 = 0.693). Boltzmann's relation (engraved on his tombstone).
export function BoltzmannEntropyViz() {
  const ln2 = Math.log(2)
  const Ns = [1, 2, 3, 4, 5, 6]
  const xMax = 6.4,
    yMax = 4.4
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, yMax]} width={560} height={310} pad={40}>
        <Polyline
          points={[
            [0, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[1, 2, 3, 4].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [0, y],
                [0.08, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.1, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {Ns.map(n => (
          <Label
            key={'x' + n}
            at={[n, -0.24]}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          >
            {n}
          </Label>
        ))}
        <Polyline
          points={[
            [0, 0],
            [xMax, xMax * ln2]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="4 4"
        />
        {Ns.map(n => (
          <g key={n}>
            <Dot x={n} y={n * ln2} r={3} opacity={OPACITY.fg} />
            <Label at={[n, n * ln2]} anchor="middle" dy={-8} size={FONT_TINY} opacity={OPACITY.dim}>
              {'2' + ['¹', '²', '³', '⁴', '⁵', '⁶'][n - 1]}
            </Label>
          </g>
        ))}
        <Tex
          at={[3.4, 1.6]}
          tex={'\\dfrac{S}{k}=\\ln W=N\\ln 2'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0.4, 3.9]}
          tex={
            'N{=}2:\\ \\uparrow\\uparrow\\,\\uparrow\\downarrow\\,\\downarrow\\uparrow\\,\\downarrow\\downarrow=4'
          }
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Label at={[xMax / 2, -0.5]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          NUMBER OF PARTICLES N
        </Label>
        <Tex
          at={[0.15, yMax]}
          anchor="start"
          tex={'\\dfrac{S}{k} = \\ln W'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        W = 2^N microstates enumerated exactly (N=2 → 4 listed); S/k = ln W = N·ln2 is linear in N
        (slope 0.693). Entropy is extensive because ln of a product adds
      </Readout>
    </div>
  )
}

// Residual (zero-point) entropy: some crystals keep orientational disorder frozen
// in at T → 0, so S₀ = k·ln W = R·ln w per mole, where w counts the equally-likely
// orientations. Predicted S₀ = R·ln w bars (computed) with measured calorimetric
// values marked: CO and N₂O (w=2, R ln2 = 5.76), ice (w=3/2, R ln1.5 = 3.37,
// Pauling), FClO₃ (w=4, R ln4 = 11.53). R = 8.314 J·mol⁻¹·K⁻¹.
export function ResidualEntropyViz() {
  const R = 8.314
  const sp = [
    { n: 'ice', w: 1.5, meas: 3.4 },
    { n: 'CO', w: 2, meas: 4.6 },
    { n: 'N₂O', w: 2, meas: 6.0 },
    { n: 'FClO₃', w: 4, meas: 10.1 }
  ]
  const W = 560,
    H = 300,
    y0 = 250,
    sMax = 13
  const yOf = s => y0 - (s / sMax) * (y0 - 40)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={70}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[3, 6, 9, 12].map(v => (
          <g key={v}>
            <line
              x1={66}
              y1={yOf(v)}
              x2={70}
              y2={yOf(v)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={62}
              y={yOf(v) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {v}
            </text>
          </g>
        ))}
        {sp.map((s, i) => {
          const bx = 110 + i * 110,
            pred = R * Math.log(s.w)
          return (
            <g key={s.n}>
              <rect
                x={bx}
                y={yOf(pred)}
                width={56}
                height={y0 - yOf(pred)}
                fill={FG}
                fillOpacity={0.2}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              {/* measured marker */}
              <line
                x1={bx - 6}
                y1={yOf(s.meas)}
                x2={bx + 62}
                y2={yOf(s.meas)}
                stroke={FG}
                strokeOpacity={OPACITY.accent}
                strokeWidth={STROKE_PRIMARY}
                strokeDasharray="4 3"
              />
              <text
                x={bx + 28}
                y={yOf(pred) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {pred.toFixed(2)}
              </text>
              <text
                x={bx + 28}
                y={y0 + 16}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {s.n}
              </text>
              <text
                x={bx + 28}
                y={y0 + 30}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {'w=' + s.w}
              </text>
            </g>
          )
        })}
        <TexPx
          x={70}
          y={30}
          anchor="start"
          tex={
            'S_0\\ /\\ \\mathrm{J\\ mol^{-1}\\ K^{-1}}\\text{: bar}=R\\ln w,\\ \\text{dashed}=\\text{measured}'
          }
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={550}
        />
      </Canvas>
      <Readout>
        Frozen-in orientational disorder gives S₀ = R ln w: ice R ln1.5 = 3.37, CO/N₂O R ln2 = 5.76,
        FClO₃ R ln4 = 11.53, predictions track the measured calorimetric residual entropies
      </Readout>
    </div>
  )
}

// MED TIER · UNIT 04, KINETICS

// Arrhenius equation k = A·e^(−Eₐ/RT). Taking logs, ln k = ln A − (Eₐ/R)·(1/T) is a
// straight line in 1/T with slope −Eₐ/R, the standard graphical way to extract an
// activation energy. Computed for Eₐ = 50 kJ/mol, A = 1×10¹³ s⁻¹; the slope on a
// 1000/T axis is −Eₐ/R/1000 = −6.01×10³ K. R = 8.314 J·mol⁻¹·K⁻¹.
export function ArrheniusViz() {
  const Ea = 50000,
    A = 1e13,
    R = 8.314
  const lnk = T => Math.log(A) - Ea / (R * T)
  const Tlo = 300,
    Thi = 600
  const xLo = 1000 / Thi,
    xHi = 1000 / Tlo
  const pts = []
  for (let x = xLo; x <= xHi + 1e-9; x += (xHi - xLo) / 60) pts.push([x, lnk(1000 / x)])
  const yLo = lnk(Tlo),
    yHi = lnk(Thi)
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[xLo - 0.15, xHi + 0.15]}
        yRange={[yLo - 2, yHi + 2]}
        width={560}
        height={330}
        pad={42}
      >
        <Polyline
          points={[
            [xLo - 0.15, yLo - 2],
            [xHi + 0.15, yLo - 2]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[2.0, 2.5, 3.0].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, yLo - 2],
                [x, yLo - 1.7]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, yLo - 2.9]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {x.toFixed(1)}
            </Label>
          </g>
        ))}
        {[12, 16, 20].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [xLo - 0.15, y],
                [xLo - 0.08, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[xLo - 0.2, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Dot x={1000 / 300} y={lnk(300)} r={3} opacity={OPACITY.accent} />
        <Dot x={1000 / 600} y={lnk(600)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[2.3, 17.5]}
          tex={'\\ln k=\\ln A-\\dfrac{E_a}{R}\\cdot\\dfrac{1}{T}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[2.6, 13.2]}
          tex={'\\text{slope}=-\\dfrac{E_a}{R}=-6.0{\\times}10^{3}\\,\\text{K}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[(xLo + xHi) / 2, yLo - 4]}
          anchor="middle"
          tex={'\\dfrac{1000}{T}\\ \\ (\\mathrm{K^{-1}})'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[xLo - 0.1, yHi + 2]}
          anchor="start"
          tex={'\\ln k'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        ln k vs 1/T is linear, slope −Eₐ/R: for Eₐ = 50 kJ/mol the 1000/T slope is −6.01×10³ K.
        Warming 300→600 K raises ln k by ~10 (k up ~2×10⁴): the activation-energy signature
      </Readout>
    </div>
  )
}

// Two-step mechanism with a rate-determining step. The reaction-coordinate profile
// has TWO barriers separated by a reactive-intermediate valley. The step with the
// TALLER barrier (here the first, TS₁) is the bottleneck, the rate-determining
// step, so the overall rate is governed by it regardless of the faster second step.
// An honest schematic energy profile (relative energies, arbitrary kJ/mol units).
export function TwoStepRDSViz() {
  const anchors = [
    [0, 4],
    [2.5, 9.2],
    [5, 3],
    [7.5, 6.3],
    [10, 1]
  ]
  const yAt = x => {
    for (let i = 0; i < anchors.length - 1; i++) {
      const [x0, y0] = anchors[i],
        [x1, y1] = anchors[i + 1]
      if (x >= x0 && x <= x1) {
        const t = (x - x0) / (x1 - x0),
          s = (1 - Math.cos(Math.PI * t)) / 2
        return y0 + (y1 - y0) * s
      }
    }
    return anchors[anchors.length - 1][1]
  }
  const curve = []
  for (let x = 0; x <= 10; x += 0.1) curve.push([x, yAt(x)])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.4, 10.4]} yRange={[0, 10.5]} width={560} height={320} pad={34}>
        <Parametric
          xy={t => [t, yAt(t)]}
          t={[0, 10]}
          samples={200}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[2.5, 9.9]}
          tex={'\\text{TS}_1'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[7.5, 7.0]}
          tex={'\\text{TS}_2'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <Label at={[5, 2.2]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
          INTERMEDIATE
        </Label>
        <Label at={[0, 4.6]} anchor="start" size={FONT_TINY} opacity={OPACITY.dim}>
          REACTANTS
        </Label>
        <Label at={[10, 1.5]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
          PRODUCTS
        </Label>
        {/* RDS barrier bracket */}
        <Polyline
          points={[
            [1.1, 4],
            [1.1, 9.2]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          dash="3 3"
        />
        <Tex
          at={[1.0, 6.6]}
          tex={'E_a\\text{(RDS)}'}
          anchor="end"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Label at={[5, -0.5]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          REACTION COORDINATE →
        </Label>
        <Label at={[-0.3, 10.4]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          ENERGY
        </Label>
      </Plot>
      <Readout>
        Two barriers, one intermediate: the taller barrier (TS₁, Eₐ ≈ 5.2 units) is the
        rate-determining step, its height, not the faster second step, sets the overall rate
      </Readout>
    </div>
  )
}

// Half-life behaviour depends on reaction order. FIRST order: t½ = ln2/k is constant,
// so successive half-lives are equally spaced (the hallmark of exponential decay).
// SECOND order: t½ = 1/(k[A]) DOUBLES each time [A] halves, so the bands widen. Both
// [A](t) computed from the integrated rate laws (k = 0.5, [A]₀ = 1 in each panel).
export function HalfLifeOrderViz() {
  const k = 0.5,
    A0 = 1
  const first = t => A0 * Math.exp(-k * t)
  const second = t => A0 / (1 + k * A0 * t)
  const t1 = Math.log(2) / k // 1.386 (constant)
  const firstHL = [t1, 2 * t1, 3 * t1]
  // second-order half-lives: t at which A = A0/2, /4, /8 → 1/(k A) with A halving
  const secondHL = [
    1 / (k * A0),
    1 / (k * A0) + 2 / (k * A0),
    1 / (k * A0) + 2 / (k * A0) + 4 / (k * A0)
  ]
  const tMax = 15
  const panel = (fn, hls, lab, acc) => (
    <div style={{ flex: '1 1 320px', minWidth: 300, maxWidth: 440 }}>
      <Plot xRange={[0, tMax]} yRange={[0, 1.08]} width={420} height={280} pad={32}>
        <Polyline
          points={[
            [0, 0],
            [tMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Parametric
          xy={t => [t, fn(t)]}
          t={[0, tMax]}
          opacity={acc ? OPACITY.accent : OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {hls.map(
          (th, i) =>
            th <= tMax && (
              <g key={i}>
                <Polyline
                  points={[
                    [th, 0],
                    [th, fn(th)]
                  ]}
                  opacity={OPACITY.faint}
                  strokeWidth={STROKE_SECONDARY}
                  dash="3 3"
                />
                <Dot x={th} y={fn(th)} r={2.4} opacity={acc ? OPACITY.accent : OPACITY.fg} />
              </g>
            )
        )}
        <Label at={[tMax / 2, -0.06]} anchor="middle" size={FONT_SMALL} opacity={OPACITY.dim}>
          {lab}
        </Label>
        <Tex
          at={[0, 1.05]}
          anchor="start"
          tex={'\\mathrm{[A]}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Plot>
    </div>
  )
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
        {panel(first, firstHL, 'FIRST ORDER, t½ CONSTANT', false)}
        {panel(second, secondHL, 'SECOND ORDER, t½ WIDENS', true)}
      </div>
      <Readout>
        First order: t½ = ln2/k = 1.39 s, equally spaced (constant). Second order: t½ = 1/(k[A]) =
        2, 4, 8 s, doubles each half-life as [A] falls. The spacing pattern diagnoses order
      </Readout>
    </div>
  )
}

// MED TIER · UNIT 05, EQUILIBRIUM

// Reaction quotient vs equilibrium constant on a log axis. Q measures the current
// mix; comparing it to the FIXED K tells the direction: Q < K → net forward (make
// products), Q > K → net reverse, Q = K → at equilibrium. The same axis doubles as
// a K-magnitude scale: K ≫ 1 lies far right (products favoured), K ≪ 1 far left.
// Shown for K = 10² (log K = 2); direction arrows computed by comparing Q to K.
export function QvsKViz() {
  const logK = 2
  const W = 560,
    H = 210,
    x0 = 40,
    x1 = 520,
    ax = 110,
    lo = -6,
    hi = 6
  const xOf = l => x0 + ((l - lo) / (hi - lo)) * (x1 - x0)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={x0}
          y1={ax}
          x2={x1}
          y2={ax}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[-6, -4, -2, 0, 2, 4, 6].map(l => (
          <g key={l}>
            <line
              x1={xOf(l)}
              y1={ax - 4}
              x2={xOf(l)}
              y2={ax + 4}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={xOf(l)}
              y={ax + 18}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {l > 0 ? '+' + l : l}
            </text>
          </g>
        ))}
        {/* K marker */}
        <line
          x1={xOf(logK)}
          y1={ax - 34}
          x2={xOf(logK)}
          y2={ax + 10}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
        />
        <TexPx
          x={xOf(logK)}
          y={ax - 40}
          anchor="middle"
          tex={'K\\ (\\log K = 2)'}
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        {/* direction arrows */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={xOf(-4)} y1={ax + 40} x2={xOf(0)} y2={ax + 40} />
          <polyline
            points={`${xOf(0) - 8},${ax + 35} ${xOf(0)},${ax + 40} ${xOf(0) - 8},${ax + 45}`}
          />
          <line x1={xOf(6)} y1={ax + 40} x2={xOf(3.5)} y2={ax + 40} />
          <polyline
            points={`${xOf(3.5) + 8},${ax + 35} ${xOf(3.5)},${ax + 40} ${xOf(3.5) + 8},${ax + 45}`}
          />
        </g>
        <text
          x={xOf(-2)}
          y={ax + 60}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Q &lt; K → FORWARD
        </text>
        <text
          x={xOf(4.6)}
          y={ax + 60}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Q &gt; K → REVERSE
        </text>
        <text
          x={xOf(-5)}
          y={ax - 16}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          reactants
        </text>
        <text
          x={xOf(5)}
          y={ax - 16}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          products
        </text>
        <TexPx
          x={W / 2}
          y={H - 6}
          anchor="middle"
          tex={'\\log Q'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Canvas>
      <Readout>
        K is fixed; the system moves to make Q = K. Q left of K (Q &lt; K) → net forward; Q right (Q
        &gt; K) → net reverse. Large K sits far right → products dominate at equilibrium
      </Readout>
    </div>
  )
}

// Degree of dissociation vs pressure for N₂O₄ ⇌ 2NO₂. From Kp = 4α²P/(1−α²) the
// fraction dissociated is α = √(Kp/(Kp + 4P)), a COMPUTED curve, not a drawn
// S-shape. Raising the pressure shifts equilibrium toward fewer gas molecules
// (Le Chatelier), so α FALLS. Kp = 0.14 (298 K, consistent with the van 't Hoff
// viz); at P = 1 bar α = √(0.14/4.14) = 0.184.
export function DissociationAlphaViz() {
  const Kp = 0.14
  const alpha = P => Math.sqrt(Kp / (Kp + 4 * P))
  const Pmax = 5
  const pts = []
  for (let P = 0.02; P <= Pmax; P += 0.02) pts.push([P, alpha(P)])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, Pmax]} yRange={[0, 1.02]} width={560} height={320} pad={40}>
        <Polyline
          points={[
            [0, 0],
            [Pmax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0.25, 0.5, 0.75, 1.0].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [0, y],
                [0.06, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.06, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y.toFixed(2)}
            </Label>
          </g>
        ))}
        {[1, 2, 3, 4, 5].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, 0.02]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -0.05]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {x}
            </Label>
          </g>
        ))}
        <Parametric
          xy={t => [t, alpha(t)]}
          t={[0.02, Pmax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={1} y={alpha(1)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[1.1, alpha(1) + 0.12]}
          tex={'P=1\\,\\text{bar},\\ \\alpha=0.184'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[2.4, 0.62]}
          tex={'\\alpha=\\sqrt{\\frac{K_p}{K_p+4P}}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Label at={[Pmax / 2, -0.1]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          PRESSURE P / bar
        </Label>
        <Tex
          at={[0.1, 1.0]}
          anchor="start"
          tex={'\\alpha\\ (\\text{fraction dissociated})'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        N₂O₄ ⇌ 2NO₂, Kp = 0.14: α = √(Kp/(Kp+4P)) falls as pressure rises (0.184 at 1 bar → 0.083 at
        5 bar), compression favours the side with fewer gas molecules
      </Readout>
    </div>
  )
}

// MED TIER · UNIT 06, ACID–BASE & AQUEOUS EQUILIBRIA

// The autoprotolysis constant links [H₃O⁺] and [OH⁻]: [H₃O⁺][OH⁻] = Kw. On log–log
// axes this is a straight line of slope −1 (log[OH⁻] = log Kw − log[H₃O⁺]). Kw is
// temperature-dependent: 1.0×10⁻¹⁴ at 25 °C but 2.4×10⁻¹⁴ at 37 °C, so the neutral
// point (where [H₃O⁺] = [OH⁻] = √Kw) shifts from pH 7.00 to pH 6.81, pure water at
// body temperature is neutral at pH 6.81, not 7. Kw(T): standard tables.
export function KwHyperbolaViz() {
  const line = logKw => [
    [-14, logKw + 14],
    [0, logKw]
  ]
  const logKw25 = -14,
    logKw37 = Math.log10(2.4e-14)
  const neu = logKw => logKw / 2
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-14, 0]} yRange={[-14, 0]} width={520} height={340} pad={40}>
        {[-12, -8, -4].map(v => (
          <g key={'x' + v}>
            <Polyline
              points={[
                [v, -14],
                [v, -13.7]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[v, -14.7]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {'10' + (v === -12 ? '⁻¹²' : v === -8 ? '⁻⁸' : '⁻⁴')}
            </Label>
          </g>
        ))}
        {[-12, -8, -4].map(v => (
          <g key={'y' + v}>
            <Polyline
              points={[
                [-14, v],
                [-13.7, v]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-14.1, v]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {'10' + (v === -12 ? '⁻¹²' : v === -8 ? '⁻⁸' : '⁻⁴')}
            </Label>
          </g>
        ))}
        <Polyline points={line(logKw25)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={line(logKw37)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Dot x={neu(logKw25)} y={neu(logKw25)} r={3} opacity={OPACITY.fg} />
        <Dot x={neu(logKw37)} y={neu(logKw37)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[-6.6, -6.6]}
          tex={'\\text{neutral}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-9.5, -3.2]}
          tex={'25\\,{}^{\\circ}\\text{C}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-3.4, -9.6]}
          tex={'37\\,{}^{\\circ}\\text{C}'}
          anchor="end"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-7, -15.4]}
          anchor="middle"
          tex={'\\mathrm{[H_3O^+]}\\ /\\ \\mathrm{M}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-13.7, -0.2]}
          anchor="start"
          tex={'\\mathrm{[OH^-]}\\ /\\ \\mathrm{M}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        [H₃O⁺][OH⁻] = Kw: slope −1 on log–log. Kw rises with T (1.0×10⁻¹⁴ at 25 °C → 2.4×10⁻¹⁴ at 37
        °C), so neutral water shifts from pH 7.00 to 6.81, neutrality ≠ pH 7 in general
      </Readout>
    </div>
  )
}

// Ostwald's dilution law: for a weak acid HA ⇌ H⁺ + A⁻, Ka = α²C/(1−α), so the
// fraction ionised α RISES as concentration C falls (dilution drives dissociation
// toward the limit α → 1). Plotted as % ionisation vs log C from the EXACT quadratic
// x = (−Ka + √(Ka² + 4KaC))/2, α = x/C (no small-α approximation). Acetic acid,
// Ka = 1.8×10⁻⁵ (pKa 4.76). At 0.1 M α = 1.3 %, at 10⁻⁵ M α = 72 %.
export function OstwaldDilutionViz() {
  const Ka = 1.8e-5
  const alpha = C => {
    const x = (-Ka + Math.sqrt(Ka * Ka + 4 * Ka * C)) / 2
    return x / C
  }
  const logCmin = -6,
    logCmax = 0
  const pts = []
  for (let lc = logCmin; lc <= logCmax + 1e-9; lc += 0.05)
    pts.push([lc, alpha(Math.pow(10, lc)) * 100])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[logCmin, logCmax]} yRange={[0, 105]} width={560} height={320} pad={40}>
        <Polyline
          points={[
            [logCmin, 0],
            [logCmax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[25, 50, 75, 100].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [logCmin, y],
                [logCmin + 0.1, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[logCmin - 0.1, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {[-6, -4, -2, 0].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, 3]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -6]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {'10' + (x === 0 ? '⁰' : x === -2 ? '⁻²' : x === -4 ? '⁻⁴' : '⁻⁶')}
            </Label>
          </g>
        ))}
        <Parametric
          xy={t => [t, alpha(Math.pow(10, t)) * 100]}
          t={[logCmin, logCmax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={-1} y={alpha(0.1) * 100} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[-1, alpha(0.1) * 100 + 10]}
          tex={'0.1\\,\\text{M}:\\,1.3\\%'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-3.4, 66]}
          tex={'K_a=\\dfrac{\\alpha^2 C}{1-\\alpha}'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-3, -12]}
          anchor="middle"
          tex={'\\text{CONCENTRATION }C\\ /\\ \\mathrm{M}\\ (\\log)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[logCmin + 0.1, 104]}
          anchor="start"
          tex={'\\text{\\% IONISED }(\\alpha)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Ostwald: α² C/(1−α) = Ka; dilution raises the ionised fraction (acetic acid 1.3 % at 0.1 M →
        72 % at 10⁻⁵ M). Weak acids approach full dissociation only when very dilute
      </Readout>
    </div>
  )
}

// Oxoacid strength vs the number of terminal (non-hydroxyl) oxygens, m. Each extra
// terminal O withdraws electron density, stabilising the conjugate base, so pKa
// drops steeply. Pauling's rule pKa ≈ 8 − 5m (line) tracks the measured chlorine
// oxoacids (points): HOCl m=0 pKa 7.5, HClO₂ m=1 2.0, HClO₃ m=2 −1, HClO₄ m=3 −8
// (values: standard acid tables). Measured data + the empirical rule together.
export function OxoacidStrengthViz() {
  const acids = [
    { n: 'HOCl', m: 0, pKa: 7.5 },
    { n: 'HClO₂', m: 1, pKa: 2.0 },
    { n: 'HClO₃', m: 2, pKa: -1 },
    { n: 'HClO₄', m: 3, pKa: -8 }
  ]
  const xMax = 3,
    yMin = -11,
    yMax = 10
  const pauling = m => 8 - 5 * m
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.4, xMax + 0.4]} yRange={[yMin, yMax]} width={560} height={330} pad={42}>
        <Polyline
          points={[
            [-0.4, 0],
            [xMax + 0.4, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        {[-10, -5, 0, 5].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-0.4, y],
                [-0.28, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.5, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {[0, 1, 2, 3].map(x => (
          <Label
            key={x}
            at={[x, yMin - 0.6]}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          >
            {x}
          </Label>
        ))}
        <Polyline
          points={[
            [-0.2, pauling(-0.2)],
            [3.2, pauling(3.2)]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="5 4"
        />
        {acids.map(a => (
          <g key={a.n}>
            <Dot x={a.m} y={a.pKa} r={3} opacity={OPACITY.fg} />
            <Label
              at={[a.m, a.pKa]}
              anchor="start"
              dx={7}
              dy={a.m === 3 ? 12 : -5}
              size={FONT_TINY}
              opacity={OPACITY.dim}
            >
              {a.n}
            </Label>
          </g>
        ))}
        <Tex
          at={[1.6, 6.5]}
          tex={'pK_a\\approx 8-5m'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.accent}
        />
        <Label at={[xMax / 2, yMin - 2.4]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          TERMINAL OXYGENS m
        </Label>
        <Label at={[-0.3, yMax]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          pKa
        </Label>
      </Plot>
      <Readout>
        Each terminal O withdraws density and stabilises the anion: HOCl (pKa 7.5) → HClO₄ (−8)
        across m = 0→3. Pauling's rule pKa ≈ 8 − 5m captures the measured trend
      </Readout>
    </div>
  )
}

// Molar solubility depends on the stoichiometric TYPE, not just Ksp. For MₓXᵧ,
// s solves Ksp = (xs)ˣ(ys)ʸ: 1:1 → s = √Ksp; 1:2 or 2:1 → s = (Ksp/4)^(1/3);
// 1:3 → s = (Ksp/27)^(1/4). Plotted log s vs log Ksp: at EQUAL Ksp the higher-order
// salts are MORE soluble (more ions per formula unit). Exact from the mass-action
// expression, a common exam trap where comparing raw Ksp misleads.
export function MolarSolubilityTypeViz() {
  const s11 = K => Math.sqrt(K)
  const s12 = K => Math.cbrt(K / 4)
  const s13 = K => Math.pow(K / 27, 0.25)
  const lkMin = -18,
    lkMax = -6
  const curve = f => {
    const p = []
    for (let lk = lkMin; lk <= lkMax + 1e-9; lk += 0.2)
      p.push([lk, Math.log10(f(Math.pow(10, lk)))])
    return p
  }
  const yMin = -9,
    yMax = -2
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[lkMin, lkMax]} yRange={[yMin, yMax]} width={560} height={330} pad={42}>
        {[-16, -12, -8].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, yMin],
                [x, yMin + 0.16]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, yMin - 0.5]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {'10' + (x === -16 ? '⁻¹⁶' : x === -12 ? '⁻¹²' : '⁻⁸')}
            </Label>
          </g>
        ))}
        {[-8, -6, -4].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [lkMin, y],
                [lkMin + 0.2, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[lkMin - 0.2, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {'10' + (y === -8 ? '⁻⁸' : y === -6 ? '⁻⁶' : '⁻⁴')}
            </Label>
          </g>
        ))}
        <Polyline points={curve(s11)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={curve(s12)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Polyline
          points={curve(s13)}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_PRIMARY}
          dash="2 3"
        />
        <Tex
          at={[-9, Math.log10(s11(1e-9)) + 0.5]}
          tex={'1{:}1\\ (\\sqrt{K})'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[-15.5, Math.log10(s12(1e-15)) + 0.5]}
          tex={'1{:}2'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[-13, Math.log10(s13(1e-13)) - 0.9]}
          tex={'1{:}3'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[(lkMin + lkMax) / 2, yMin - 1.2]}
          anchor="middle"
          tex={'K_{\\mathrm{sp}}\\ (\\log)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[lkMin + 0.2, yMax]}
          anchor="start"
          tex={'\\text{MOLAR SOLUBILITY }s\\ /\\ \\mathrm{M}\\ (\\log)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        s from Ksp = (xs)ˣ(ys)ʸ: 1:1 s=√Ksp, 1:2 s=(Ksp/4)^⅓, 1:3 s=(Ksp/27)^¼. At equal Ksp the
        higher-order salt dissolves more, raw Ksp alone doesn't rank solubility
      </Readout>
    </div>
  )
}

// pH-dependent solubility of metal hydroxides. For M(OH)ₙ, [Mⁿ⁺] = Ksp/[OH⁻]ⁿ and
// [OH⁻] = 10^(pH−14), so log s = log Ksp + n(14 − pH): a straight line of slope −n.
// The higher the cation charge, the STEEPER the pH dependence, Fe(OH)₃ (slope −3)
// dissolves far more sharply as acid is added than Mg(OH)₂ (slope −2). Ksp:
// Mg(OH)₂ 5.6×10⁻¹², Fe(OH)₃ 2.8×10⁻³⁹ (standard tables).
export function SolubilityPHViz() {
  const logS = (Ksp, n) => pH => Math.log10(Ksp) + n * (14 - pH)
  const mg = logS(5.6e-12, 2)
  const fe = logS(2.8e-39, 3)
  const pHmin = 4,
    pHmax = 12
  const yMin = -12,
    yMax = 4
  const clamp = y => Math.max(yMin, Math.min(yMax, y))
  const curve = f => {
    const p = []
    for (let pH = pHmin; pH <= pHmax + 1e-9; pH += 0.1) {
      const y = f(pH)
      if (y >= yMin - 1 && y <= yMax + 1) p.push([pH, clamp(y)])
    }
    return p
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[pHmin, pHmax]} yRange={[yMin, yMax]} width={560} height={330} pad={42}>
        {[6, 8, 10, 12].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, yMin],
                [x, yMin + 0.3]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, yMin - 0.9]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {x}
            </Label>
          </g>
        ))}
        {[-8, -4, 0].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [pHmin, y],
                [pHmin + 0.1, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[pHmin - 0.1, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {'10' + (y === 0 ? '⁰' : y === -4 ? '⁻⁴' : '⁻⁸')}
            </Label>
          </g>
        ))}
        <Polyline points={curve(mg)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={curve(fe)}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Tex
          at={[7.4, mg(7.4) + 1.2]}
          tex={'\\text{Mg(OH)}_2\\ (-2)'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[6.2, clamp(fe(6.2)) + 1.2]}
          tex={'\\text{Fe(OH)}_3\\ (-3)'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Label
          at={[(pHmin + pHmax) / 2, yMin - 2]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          pH
        </Label>
        <Tex
          at={[pHmin + 0.1, yMax]}
          anchor="start"
          tex={'\\text{SOLUBILITY }s\\ /\\ \\mathrm{M}\\ (\\log)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        log s = log Ksp + n(14 − pH): slope −n. Adding acid (lower pH) dissolves hydroxides; Fe(OH)₃
        (charge 3, slope −3) responds far more sharply than Mg(OH)₂ (slope −2)
      </Readout>
    </div>
  )
}

// Precipitation test: compare the ion product Qsp to Ksp. Qsp > Ksp ⇒ supersaturated,
// a precipitate forms; Qsp < Ksp ⇒ unsaturated, solid dissolves; Qsp = Ksp ⇒ exactly
// saturated. Shown for PbI₂ (Ksp = 7.1×10⁻⁹) on a log gauge: mixing 0.01 M Pb²⁺ with
// 0.01 M I⁻ gives Qsp = [Pb²⁺][I⁻]² = 1×10⁻⁶ > Ksp (precipitate); a 100× dilution
// gives Qsp = 1×10⁻¹² < Ksp (stays dissolved). Qsp COMPUTED from concentrations.
export function QvsKspViz() {
  const Ksp = 7.1e-9
  const cases = [
    { lab: '0.01 M each', pb: 0.01, i: 0.01 },
    { lab: '100× diluted', pb: 1e-4, i: 1e-4 }
  ]
  const W = 560,
    H = 300,
    ax = 200,
    top = 30,
    bot = 250,
    lo = -13,
    hi = -4
  const yOf = lq => bot - ((lq - lo) / (hi - lo)) * (bot - top)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={ax}
          y1={top}
          x2={ax}
          y2={bot}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[-12, -10, -8, -6, -4].map(l => (
          <g key={l}>
            <line
              x1={ax - 4}
              y1={yOf(l)}
              x2={ax + 4}
              y2={yOf(l)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={ax - 10}
              y={yOf(l) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {'10' + ['⁻¹²', '', '⁻¹⁰', '', '⁻⁸', '', '⁻⁶', '', '⁻⁴'][l + 12]}
            </text>
          </g>
        ))}
        {/* Ksp ceiling */}
        <line
          x1={ax - 30}
          y1={yOf(Math.log10(Ksp))}
          x2={W - 30}
          y2={yOf(Math.log10(Ksp))}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
          strokeDasharray="6 4"
        />
        <TexPx
          x={W - 30}
          y={yOf(Math.log10(Ksp)) - 6}
          anchor="end"
          tex={'K_{\\mathrm{sp}} = 7.1\\times10^{-9}'}
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        {cases.map((c, i) => {
          const Q = c.pb * c.i * c.i
          const lq = Math.log10(Q)
          const x = ax + 90 + i * 150
          const ppt = Q > Ksp
          return (
            <g key={i}>
              <line
                x1={x}
                y1={yOf(lo)}
                x2={x}
                y2={yOf(lq)}
                stroke={FG}
                strokeOpacity={OPACITY.accent}
                strokeWidth={STROKE_PRIMARY}
              />
              <circle cx={x} cy={yOf(lq)} r={4} fill={FG} opacity={OPACITY.fg} />
              <text
                x={x}
                y={yOf(lq) - 10}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {'Q=10' + (i === 0 ? '⁻⁶' : '⁻¹²')}
              </text>
              <text
                x={x}
                y={bot + 16}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {c.lab}
              </text>
              <text
                x={x}
                y={bot + 30}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {ppt ? 'PRECIPITATE' : 'dissolves'}
              </text>
            </g>
          )
        })}
        <text
          x={ax - 10}
          y={top - 12}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.06em' }}
        >
          ion product Qsp
        </text>
      </Canvas>
      <Readout>
        PbI₂ Ksp = 7.1×10⁻⁹: Qsp = [Pb²⁺][I⁻]². 0.01 M each → Qsp = 10⁻⁶ &gt; Ksp (precipitates);
        100× dilution → Qsp = 10⁻¹² &lt; Ksp (stays in solution)
      </Readout>
    </div>
  )
}

// Buffer capacity β = dn/dpH, the moles of strong base per litre needed to change pH
// by one unit. The Van Slyke expression β = ln10·([H⁺] + [OH⁻] + C·Ka[H⁺]/(Ka+[H⁺])²)
// peaks sharply at pH = pKa, where β_max = ln10·C/4, and is useful across the window
// pKa ± 1. Higher total buffer concentration C gives proportionally more capacity.
// Computed for acetate (pKa 4.76) at C = 0.5 M and C = 0.1 M.
export function BufferCapacityViz() {
  const Kw = 1e-14,
    Ka = Math.pow(10, -4.76)
  const beta = C => pH => {
    const H = Math.pow(10, -pH)
    return Math.LN10 * (H + Kw / H + (C * Ka * H) / Math.pow(Ka + H, 2))
  }
  const pKa = 4.76
  const pHmin = 1,
    pHmax = 9,
    yMax = 0.32
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[pHmin, pHmax]} yRange={[0, yMax]} width={560} height={320} pad={42}>
        <Polyline
          points={[
            [pHmin, 0],
            [pHmax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* pKa ± 1 window */}
        <Polyline
          points={[
            [pKa - 1, 0],
            [pKa - 1, yMax]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="3 3"
        />
        <Polyline
          points={[
            [pKa + 1, 0],
            [pKa + 1, yMax]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="3 3"
        />
        {[0.1, 0.2, 0.3].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [pHmin, y],
                [pHmin + 0.08, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[pHmin - 0.1, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y.toFixed(1)}
            </Label>
          </g>
        ))}
        {[2, 4, 6, 8].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, 0.007]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -0.018]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {x}
            </Label>
          </g>
        ))}
        <Parametric
          xy={t => [t, beta(0.5)(t)]}
          t={[pHmin, pHmax]}
          samples={320}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, beta(0.1)(t)]}
          t={[pHmin, pHmax]}
          samples={320}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Polyline
          points={[
            [pKa, 0],
            [pKa, yMax]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <Tex
          at={[pKa, yMax * 0.94]}
          tex={'pH=pK_a'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[6.4, 0.2]}
          tex={'C=0.5\\,\\text{M}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[6.4, 0.09]}
          tex={'C=0.1\\,\\text{M}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Label
          at={[(pHmin + pHmax) / 2, -0.04]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          pH
        </Label>
        <Tex
          at={[pHmin + 0.1, yMax]}
          anchor="start"
          tex={'\\beta\\ /\\ \\mathrm{mol\\ L^{-1}\\ pH^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        β peaks at pH = pKa (β_max = ln10·C/4 = 0.288 at C = 0.5 M) and is effective over pKa ± 1
        (shaded); the rise at pH &lt; 2 / &gt; 12 is water's own buffering. Capacity scales with C
      </Readout>
    </div>
  )
}

// MED TIER · UNIT 08, COORDINATION & SPECTROSCOPY

// Spin-only magnetic moment μ = √(n(n+2)) Bohr magnetons, where n is the number of
// UNPAIRED electrons (orbital contribution quenched in most 3d complexes). The curve
// is a staircase in n: 1→1.73, 2→2.83, 3→3.87, 4→4.90, 5→5.92 μ_B. Measuring μ thus
// counts unpaired electrons and distinguishes high- from low-spin. Standard formula.
export function SpinOnlyMomentViz() {
  const mu = n => Math.sqrt(n * (n + 2))
  const ns = [0, 1, 2, 3, 4, 5]
  const xMax = 5.4,
    yMax = 6.4
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.3, xMax]} yRange={[0, yMax]} width={560} height={320} pad={40}>
        <Polyline
          points={[
            [-0.3, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[1, 2, 3, 4, 5, 6].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-0.3, y],
                [-0.18, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.36, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {ns.map(n => (
          <Label
            key={'x' + n}
            at={[n, -0.32]}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          >
            {n}
          </Label>
        ))}
        <Polyline
          points={ns.map(n => [n, mu(n)])}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="4 4"
        />
        {ns
          .filter(n => n > 0)
          .map(n => (
            <g key={n}>
              <Dot x={n} y={mu(n)} r={3} opacity={OPACITY.fg} />
              <Tex
                at={[n, mu(n) + 0.42]}
                tex={mu(n).toFixed(2)}
                anchor="middle"
                size={FONT_TINY}
                opacity={OPACITY.dim}
              />
            </g>
          ))}
        <Tex
          at={[2.4, 1.4]}
          tex={'\\mu=\\sqrt{n(n+2)}\\ \\mu_B'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Label at={[xMax / 2, -0.62]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          UNPAIRED ELECTRONS n
        </Label>
        <Tex
          at={[-0.2, yMax]}
          anchor="start"
          tex={'\\mu\\ /\\ \\mu_B'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        μ = √(n(n+2)) μ_B counts unpaired electrons: 1→1.73, 3→3.87, 5→5.92. A measured moment pins
        down n, the experimental test for high-spin vs low-spin
      </Readout>
    </div>
  )
}

// Crystal-field stabilisation energy (CFSE) vs d-electron count for octahedral
// complexes, in units of Δ_o. Filling t₂g at −0.4Δ_o and e_g at +0.6Δ_o gives
// CFSE = (−0.4·n_{t2g} + 0.6·n_{eg})Δ_o. The HIGH-SPIN curve (fill singly to d⁵,
// then pair) is the classic double-hump with zeros at d⁰, d⁵, d¹⁰; the LOW-SPIN
// branch (d⁴–d⁷) keeps electrons in t₂g for deeper stabilisation. Computed per config.
export function CFSEViz() {
  // returns CFSE in Δo units for octahedral
  const cfse = (t2g, eg) => -0.4 * t2g + 0.6 * eg
  const hs = [] // high spin d0..d10
  for (let d = 0; d <= 10; d++) {
    let t2g, e
    if (d <= 3) {
      t2g = d
      e = 0
    } else if (d <= 5) {
      t2g = 3
      e = d - 3
    } else if (d <= 8) {
      t2g = d - 2
      e = 2
    } // d6:4,2 d7:5,2 d8:6,2
    else {
      t2g = 6
      e = d - 6
    } // d9:6,3 d10:6,4
    hs.push([d, cfse(t2g, e)])
  }
  const ls = [] // low spin d4..d7
  for (let d = 4; d <= 7; d++) {
    const t2g = Math.min(6, d),
      e = Math.max(0, d - 6)
    ls.push([d, cfse(t2g, e)])
  }
  const yMin = -2.6,
    yMax = 0.3
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.4, 10.4]} yRange={[yMin, yMax]} width={560} height={330} pad={42}>
        <Polyline
          points={[
            [-0.4, 0],
            [10.4, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        {[-2, -1, 0].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-0.4, y],
                [-0.24, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.5, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {[0, 2, 4, 6, 8, 10].map(x => (
          <Label
            key={x}
            at={[x, yMin - 0.12]}
            anchor="middle"
            size={FONT_TINY}
            opacity={OPACITY.dim}
          >
            {'d' + x}
          </Label>
        ))}
        <Polyline points={hs} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {hs.map(p => (
          <Dot key={p[0]} x={p[0]} y={p[1]} r={2.4} opacity={OPACITY.fg} />
        ))}
        <Polyline points={ls} opacity={OPACITY.accent} strokeWidth={STROKE_PRIMARY} dash="5 4" />
        {ls.map(p => (
          <Dot key={'l' + p[0]} x={p[0]} y={p[1]} r={2.4} opacity={OPACITY.accent} />
        ))}
        <Tex
          at={[1.3, -0.42]}
          tex={'\\text{high spin}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[5.4, -2.15]}
          tex={'\\text{low spin}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Label at={[5, yMin - 0.42]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          d-ELECTRON COUNT
        </Label>
        <Tex
          at={[-0.3, yMax]}
          anchor="start"
          tex={'\\text{CFSE}\\ /\\ \\Delta_{\\mathrm{o}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        CFSE = (−0.4·n(t₂g) + 0.6·n(e_g))Δ_o: high-spin double-hump with nodes at d⁰/d⁵/d¹⁰;
        low-spin d⁴–d⁷ stays in t₂g for extra stabilisation (at the cost of pairing energy)
      </Readout>
    </div>
  )
}

// Nuclear Zeeman effect / Larmor frequency. A spin-½ nucleus in a field B₀ splits
// into two states m_I = ±½ with energy E = −γℏB₀m_I, so the levels diverge LINEARLY
// with B₀. The gap ΔE = γℏB₀ = hν_L defines the Larmor (NMR) frequency. For ¹H,
// γ/2π = 42.577 MHz/T, so at 1 T the resonance is 42.6 MHz (values: IUPAC/NMR data).
export function ZeemanLarmorViz() {
  const gamma2pi = 42.577 // MHz/T
  const E = (m, B) => -gamma2pi * B * m // E/h in MHz
  const Bmax = 2,
    yMax = 46
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, Bmax]} yRange={[-yMax, yMax]} width={560} height={320} pad={40}>
        <Polyline
          points={[
            [0, 0],
            [Bmax, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        {[-40, -20, 20, 40].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [0, y],
                [0.03, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.03, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {[0.5, 1, 1.5, 2].map(x => (
          <Label key={x} at={[x, -yMax - 3]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
            {x}
          </Label>
        ))}
        <Polyline
          points={[
            [0, 0],
            [Bmax, E(0.5, Bmax)]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Polyline
          points={[
            [0, 0],
            [Bmax, E(-0.5, Bmax)]
          ]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[1.45, E(0.5, 1.45)]}
          tex={'m_I=+\\tfrac12'}
          anchor="middle"
          dy={16}
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[1.45, E(-0.5, 1.45)]}
          tex={'m_I=-\\tfrac12'}
          anchor="middle"
          dy={-8}
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        {/* gap at B=1 */}
        <Polyline
          points={[
            [1, E(0.5, 1)],
            [1, E(-0.5, 1)]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
        />
        <Tex
          at={[1.05, 0]}
          tex={'\\Delta E=h\\nu_L=42.6\\,\\text{MHz}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[Bmax / 2, -yMax - 8]}
          anchor="middle"
          tex={'\\text{FIELD }B_0\\ /\\ \\mathrm{T}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label at={[0.05, yMax]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          E/h / MHz
        </Label>
      </Plot>
      <Readout>
        Spin-½ levels m_I = ±½ split as E = −γℏB₀m_I, diverging linearly with B₀; the gap ΔE = hν_L
        gives the Larmor frequency, ¹H at 1 T resonates at 42.6 MHz (γ/2π = 42.577 MHz/T)
      </Readout>
    </div>
  )
}

// Karplus relation: the vicinal ³J(H–C–C–H) coupling constant depends on the
// dihedral angle φ as ³J ≈ A·cos²φ (+ const). Using Karplus's parameters ³J =
// 8.5cos²φ − 0.28 (0–90°) and 9.5cos²φ − 0.28 (90–180°), J is large at anti
// (φ = 180°, ~9.2 Hz) and gauche (φ = 60°, ~1.8 Hz) and near zero at φ = 90°.
// This is how coupling constants read out conformation (Karplus, 1959/1963).
export function KarplusViz() {
  const J = phi => {
    const c = Math.cos((phi * Math.PI) / 180)
    return (phi <= 90 ? 8.5 : 9.5) * c * c - 0.28
  }
  const pts = []
  for (let p = 0; p <= 180; p += 2) pts.push([p, J(p)])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, 180]} yRange={[-1, 10]} width={560} height={320} pad={40}>
        <Polyline
          points={[
            [0, 0],
            [180, 0]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        {[0, 60, 90, 120, 180].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, 0.2]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -0.7]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {x + '°'}
            </Label>
          </g>
        ))}
        {[2, 4, 6, 8].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [0, y],
                [4, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-2, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Dot x={60} y={J(60)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[60, J(60) + 1.1]}
          tex={'\\text{gauche }60^{\\circ}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Dot x={180} y={J(180)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[180, J(180) - 0.9]}
          tex={'\\text{anti }180^{\\circ}'}
          anchor="end"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[24, 7.5]}
          tex={'{}^3J\\approx A\\cos^2\\!\\phi'}
          anchor="start"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[90, -1.4]}
          anchor="middle"
          tex={'\\text{DIHEDRAL ANGLE }\\varphi'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[2, 10]}
          anchor="start"
          tex={'{}^3J\\ /\\ \\mathrm{Hz}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        ³J = A cos²φ − 0.28 (A = 8.5/9.5): large at anti (180° → 9.2 Hz) and gauche (60° → 1.8 Hz),
        near zero at 90°. Coupling constants report the H–C–C–H dihedral → conformation
      </Readout>
    </div>
  )
}

// Relaxation in NMR. After a pulse, longitudinal magnetisation RECOVERS as
// M_z = M₀(1 − e^(−t/T₁)) (spin–lattice, T₁) while transverse magnetisation DECAYS
// as M_xy = M₀·e^(−t/T₂) (spin–spin, T₂ ≤ T₁). Both are single exponentials from the
// Bloch equations. Shown for T₁ = 1.0 s, T₂ = 0.3 s (representative liquid values).
export function T1T2Viz() {
  const T1 = 1.0,
    T2 = 0.3
  const Mz = t => 1 - Math.exp(-t / T1)
  const Mxy = t => Math.exp(-t / T2)
  const tMax = 3
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, tMax]} yRange={[0, 1.08]} width={560} height={320} pad={40}>
        <Polyline
          points={[
            [0, 0],
            [tMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0.25, 0.5, 0.75, 1.0].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [0, y],
                [0.04, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.04, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y.toFixed(2)}
            </Label>
          </g>
        ))}
        {[1, 2, 3].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, 0.02]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -0.06]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {x}
            </Label>
          </g>
        ))}
        <Parametric
          xy={t => [t, Mz(t)]}
          t={[0, tMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, Mxy(t)]}
          t={[0, tMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Tex
          at={[1.5, Mz(1.5) - 0.16]}
          tex={'M_z=M_0(1-e^{-t/T_1})'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[0.8, Mxy(0.8) + 0.12]}
          tex={'M_{xy}=M_0 e^{-t/T_2}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Label at={[tMax / 2, -0.14]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          TIME t / s
        </Label>
        <Tex
          at={[0.05, 1.05]}
          anchor="start"
          tex={'\\dfrac{M}{M_0}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Bloch relaxation: M_z recovers with T₁ = 1.0 s (spin–lattice), M_xy decays with T₂ = 0.3 s
        (spin–spin, always ≤ T₁). T₂ sets the natural linewidth 1/(πT₂)
      </Readout>
    </div>
  )
}

// Spectral line shapes: Doppler broadening (thermal velocity spread) gives a
// GAUSSIAN, while lifetime/collisional broadening gives a LORENTZIAN. At EQUAL
// FWHM the Lorentzian has a sharper peak but far heavier wings, the reason wing
// absorption matters in pressure-broadened lines. Both normalised to unit peak;
// FWHM identical. Standard line-shape theory.
export function DopplerLifetimeViz() {
  const fwhm = 2
  const gauss = x => Math.exp((-4 * Math.log(2) * x * x) / (fwhm * fwhm))
  const lorentz = x => ((fwhm / 2) * (fwhm / 2)) / (x * x + (fwhm / 2) * (fwhm / 2))
  const xMax = 6
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-xMax, xMax]} yRange={[0, 1.1]} width={560} height={320} pad={40}>
        <Polyline
          points={[
            [-xMax, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0.25, 0.5, 0.75, 1.0].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-xMax, y],
                [-xMax + 0.16, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-xMax - 0.1, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y.toFixed(2)}
            </Label>
          </g>
        ))}
        {[-4, -2, 0, 2, 4].map(x => (
          <Label key={x} at={[x, -0.06]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
            {x}
          </Label>
        ))}
        {/* FWHM markers */}
        <Polyline
          points={[
            [-fwhm / 2, 0.5],
            [fwhm / 2, 0.5]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="3 3"
        />
        <Parametric
          xy={t => [t, gauss(t)]}
          t={[-xMax, xMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, lorentz(t)]}
          t={[-xMax, xMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Tex
          at={[1.6, 0.62]}
          tex={'\\text{Gaussian (Doppler)}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[2.4, 0.18]}
          tex={'\\text{Lorentzian (lifetime)}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[0, -0.14]}
          anchor="middle"
          tex={'\\text{DETUNING }(\\nu-\\nu_0),\\ \\text{FWHM}=2'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Label at={[-xMax + 0.2, 1.07]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          INTENSITY (norm.)
        </Label>
      </Plot>
      <Readout>
        Equal FWHM: the Gaussian (Doppler, thermal speeds) falls off fast; the Lorentzian (finite
        lifetime / collisions) has a sharper core and heavy wings, dominating far-from-centre
        absorption
      </Readout>
    </div>
  )
}

// Irving–Williams series: for high-spin M²⁺ complexes the stability constant rises
// Mn < Fe < Co < Ni < Cu > Zn, PEAKING at Cu²⁺ regardless of ligand, a combination
// of decreasing ionic radius (rising Z_eff) and CFSE, with Cu²⁺ extra-stabilised by
// Jahn–Teller distortion. log K₁ for ethylenediamine (en): Mn 2.73, Fe 4.34, Co 5.89,
// Ni 7.52, Cu 10.72, Zn 5.77 (stability-constant tables; Irving & Williams 1953).
export function IrvingWilliamsViz() {
  const data = [
    ['Mn', 2.73],
    ['Fe', 4.34],
    ['Co', 5.89],
    ['Ni', 7.52],
    ['Cu', 10.72],
    ['Zn', 5.77]
  ]
  const xMax = 5,
    yMax = 12
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.4, xMax + 0.4]} yRange={[0, yMax]} width={560} height={320} pad={40}>
        <Polyline
          points={[
            [-0.4, 0],
            [xMax + 0.4, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[3, 6, 9, 12].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-0.4, y],
                [-0.26, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.5, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        <Polyline
          points={data.map((d, i) => [i, d[1]])}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {data.map((d, i) => (
          <g key={d[0]}>
            <Dot x={i} y={d[1]} r={3} opacity={d[0] === 'Cu' ? OPACITY.fg : OPACITY.fg} />
            <Label at={[i, -0.5]} anchor="middle" size={FONT_SMALL} opacity={OPACITY.dim}>
              {d[0]}
            </Label>
            <Label at={[i, d[1]]} anchor="middle" dy={-8} size={FONT_TINY} opacity={OPACITY.dim}>
              {d[1].toFixed(1)}
            </Label>
          </g>
        ))}
        <Tex
          at={[1.2, 9.6]}
          tex={'\\text{Cu}^{2+}\\text{ maximum}'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[xMax / 2, -1.3]}
          anchor="middle"
          tex={'\\mathrm{M^{2+}}\\ (Z\\ \\text{increasing}\\to)'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-0.3, yMax]}
          anchor="start"
          tex={'\\log K_1\\ (\\text{en})'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Stability climbs Mn→Cu then drops at Zn, the Irving–Williams order, peaking at Cu²⁺
        (Jahn–Teller-boosted). log K₁(en): Mn 2.73 → Cu 10.72 → Zn 5.77; ligand-independent shape
      </Readout>
    </div>
  )
}

// Square-planar d-orbital splitting, derived by removing the two axial (z) ligands
// from an octahedron: orbitals with a z-component drop (less repulsion), so the
// order becomes (d_xz,d_yz) < d_z² < d_xy < d_x²−y², with a very large gap up to
// d_x²−y² (which points straight at the four in-plane ligands). This large split
// is why d⁸ ions like Ni²⁺, Pd²⁺, Pt²⁺ favour low-spin square-planar geometry.
export function SquarePlanarSplittingViz() {
  const W = 560,
    H = 320
  const levels = [
    { y: 250, lab: 'd(xz), d(yz)', n: 2 },
    { y: 205, lab: 'dz²', n: 1 },
    { y: 130, lab: 'dxy', n: 1 },
    { y: 60, lab: 'dx²–y²', n: 1 }
  ]
  const cx = 250,
    lw = 90
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* barycentre */}
        <line
          x1={cx - 130}
          y1={170}
          x2={cx + 180}
          y2={170}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 4"
        />
        <text
          x={cx - 134}
          y={173}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          barycentre
        </text>
        {levels.map((L, i) => (
          <g key={i}>
            <line
              x1={cx - lw / 2}
              y1={L.y}
              x2={cx + lw / 2}
              y2={L.y}
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            {/* electrons for d8 low-spin: fill from bottom, all paired except leave dx2-y2 empty */}
            {Array.from({ length: L.n }).map((_, k) => (
              <text
                key={k}
                x={cx - lw / 2 + 18 + k * 34}
                y={L.y - 6}
                fill={FG}
                opacity={i < 3 ? OPACITY.fg : OPACITY.faint}
                fontSize={FONT_LABEL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {i < 3 ? '↿⇂' : ''}
              </text>
            ))}
            <text
              x={cx + lw / 2 + 8}
              y={L.y + 4}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_SMALL}
              textAnchor="start"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {L.lab}
            </text>
          </g>
        ))}
        <TexPx
          x={cx - lw / 2 - 20}
          y={95}
          anchor="end"
          tex={'\\text{large }\\Delta_{\\mathrm{o}}'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <line
          x1={cx - lw / 2 - 10}
          y1={60}
          x2={cx - lw / 2 - 10}
          y2={130}
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
        />
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={'\\text{square-planar }(d^8,\\ \\text{e.g. }\\mathrm{Ni^{2+}/Pt^{2+}})'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={374}
        />
      </Canvas>
      <Readout>
        Removing the axial ligands from an octahedron drops the z-orbitals: (d_xz,d_yz) &lt; d_z²
        &lt; d_xy ≪ d_x²−y². The huge top gap makes d⁸ ions low-spin square-planar (dₓ²−ᵧ² left
        empty)
      </Readout>
    </div>
  )
}

// High-spin vs low-spin for an octahedral d⁶ ion, the competition between the
// splitting Δ_o and the electron pairing energy P. If Δ_o < P (weak field) electrons
// spread out to avoid pairing: t₂g⁴e_g² with FOUR unpaired (high-spin, e.g.
// [Fe(H₂O)₆]²⁺). If Δ_o > P (strong field) they pair in t₂g: t₂g⁶e_g⁰ with ZERO
// unpaired (low-spin, e.g. [Fe(CN)₆]⁴⁻). Occupations follow the aufbau/Hund rules.
export function HighLowSpinViz() {
  const W = 560,
    H = 300
  const panel = (x0, title, t2gArrows, egArrows, sub) => {
    const boxAt = (bx, by, arrows) => (
      <g>
        <rect
          x={bx}
          y={by}
          width={28}
          height={22}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={bx + 14}
          y={by + 16}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {arrows}
        </text>
      </g>
    )
    return (
      <g>
        <text
          x={x0 + 55}
          y={40}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {title}
        </text>
        {/* eg (top, 2 boxes) */}
        {egArrows.map((a, i) => (
          <g key={'eg' + i}>{boxAt(x0 + 30 + i * 34, 70, a)}</g>
        ))}
        <text
          x={x0 - 6}
          y={86}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          eg
        </text>
        {/* t2g (bottom, 3 boxes) */}
        {t2gArrows.map((a, i) => (
          <g key={'t' + i}>{boxAt(x0 + 13 + i * 34, 160, a)}</g>
        ))}
        <TexPx
          x={x0 - 6}
          y={176}
          anchor="end"
          tex={'t_{2g}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* Δo bracket */}
        <line
          x1={x0 + 120}
          y1={81}
          x2={x0 + 120}
          y2={171}
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
        />
        <TexPx
          x={x0 + 126}
          y={128}
          anchor="start"
          tex={'\\Delta_{\\mathrm{o}}'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <text
          x={x0 + 55}
          y={210}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {sub}
        </text>
      </g>
    )
  }
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {panel(60, 'HIGH SPIN  (Δₒ < P)', ['↿⇂', '↿', '↿'], ['↿', '↿'], '4 unpaired · weak field')}
        {panel(
          340,
          'LOW SPIN  (Δₒ > P)',
          ['↿⇂', '↿⇂', '↿⇂'],
          ['', ''],
          '0 unpaired · strong field'
        )}
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={'\\text{octahedral }d^6'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Canvas>
      <Readout>
        d⁶: weak field (Δ_o &lt; P) → t₂g⁴e_g², 4 unpaired (high-spin, paramagnetic); strong field
        (Δ_o &gt; P) → t₂g⁶, 0 unpaired (low-spin, diamagnetic). The ligand's Δ_o decides
      </Readout>
    </div>
  )
}

// The electromagnetic spectrum mapped to the molecular process each region probes.
// Photon energy grows as wavelength shrinks (E = hc/λ), so moving left→right the
// interaction climbs an energy ladder: nuclear-spin flips (radio, NMR) → molecular
// rotation (microwave) → vibration (IR) → valence-electron transitions (vis/UV) →
// core electrons (X-ray) → nuclear (γ). Log-wavelength strip; region edges standard.
export function EMSpectrumViz() {
  const W = 560,
    H = 260
  const x0 = 30,
    x1 = 530,
    lLo = 2,
    lHi = -12 // log10(λ/m)
  const xOf = l => x0 + ((lLo - l) / (lLo - lHi)) * (x1 - x0)
  const bands = [
    { a: 2, b: -1, n: 'RADIO', p: 'nuclear spin (NMR)' },
    { a: -1, b: -3, n: 'MICROWAVE', p: 'rotation' },
    { a: -3, b: -6.15, n: 'INFRARED', p: 'vibration' },
    { a: -6.15, b: -6.85, n: 'VIS', p: 'valence e⁻' },
    { a: -6.85, b: -8, n: 'UV', p: 'valence e⁻' },
    { a: -8, b: -11, n: 'X-RAY', p: 'core e⁻' },
    { a: -11, b: -12, n: 'γ', p: 'nuclear' }
  ]
  const yBar = 120,
    hBar = 34
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {bands.map((bd, i) => {
          const xa = xOf(bd.a),
            xb = xOf(bd.b)
          return (
            <g key={i}>
              <rect
                x={xa}
                y={yBar}
                width={xb - xa}
                height={hBar}
                fill={FG}
                fillOpacity={0.05 + (i % 2) * 0.08}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={(xa + xb) / 2}
                y={yBar - 8 - (i % 2) * 14}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {bd.n}
              </text>
              <text
                x={(xa + xb) / 2}
                y={yBar + hBar + 16 + (i % 2) * 14}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {bd.p}
              </text>
            </g>
          )
        })}
        {/* decade ticks */}
        {[2, 0, -2, -4, -6, -8, -10, -12].map(l => (
          <g key={l}>
            <line
              x1={xOf(l)}
              y1={yBar + hBar}
              x2={xOf(l)}
              y2={yBar + hBar + 5}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={xOf(l)}
              y={H - 24}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {'10' + (l < 0 ? '⁻' : '') + Math.abs(l)}
            </text>
          </g>
        ))}
        <TexPx
          x={x0}
          y={H - 8}
          anchor="start"
          tex={
            '\\text{wavelength }\\lambda\\ /\\ \\mathrm{m}\\text{: longer}\\leftarrow\\rightarrow\\text{shorter (higher }E)'
          }
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={528}
        />
      </Canvas>
      <Readout>
        E = hc/λ: shorter wavelength = higher energy, driving a ladder of molecular processes, spin
        flips (radio) → rotation (microwave) → vibration (IR) → electronic (vis/UV) → core/nuclear
        (X-ray/γ)
      </Readout>
    </div>
  )
}

// The four normal modes of CO₂ (linear, 3N−5 = 4). Displacement arrows show the
// atomic motions: ν₁ symmetric stretch (both O out, C still) leaves the dipole zero
// → IR INACTIVE; ν₂ bend (degenerate pair, atoms buckle) and ν₃ asymmetric stretch
// (O's one way, C the other) both create a changing dipole → IR ACTIVE. Measured
// wavenumbers (NIST): ν₁ 1333, ν₂ 667 (×2), ν₃ 2349 cm⁻¹.
export function CO2NormalModesViz() {
  const W = 560,
    H = 300
  const modes = [
    {
      y: 55,
      n: 'ν₁ symmetric stretch',
      wn: 1333,
      ir: false,
      arr: [
        [-1, 0],
        [0, 0],
        [1, 0]
      ]
    },
    { y: 135, n: 'ν₂ bend (×2)', wn: 667, ir: true, bend: true },
    {
      y: 215,
      n: 'ν₃ asymmetric stretch',
      wn: 2349,
      ir: true,
      arr: [
        [1, 0],
        [-1, 0],
        [1, 0]
      ]
    }
  ]
  const cx = 200,
    d = 46
  const atom = (x, y, r, lab) => (
    <g>
      <circle
        cx={x}
        cy={y}
        r={r}
        fill="var(--bg)"
        stroke={FG}
        strokeOpacity={OPACITY.dim}
        strokeWidth={STROKE_SECONDARY}
      />
      <text
        x={x}
        y={y + 4}
        fill={FG}
        opacity={OPACITY.fg}
        fontSize={FONT_SMALL}
        textAnchor="middle"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {lab}
      </text>
    </g>
  )
  const arrow = (x, y, dx, dy) => (
    <g
      stroke={FG}
      strokeOpacity={OPACITY.accent}
      strokeWidth={STROKE_PRIMARY}
      fill="none"
      strokeLinecap="round"
    >
      <line x1={x} y1={y} x2={x + dx * 20} y2={y + dy * 20} />
      <polyline
        points={`${x + dx * 20 - dx * 7 - dy * 4},${y + dy * 20 - dy * 7 + dx * 4} ${x + dx * 20},${y + dy * 20} ${x + dx * 20 - dx * 7 + dy * 4},${y + dy * 20 - dy * 7 - dx * 4}`}
      />
    </g>
  )
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {modes.map((m, i) => {
          const xs = [cx - d, cx, cx + d]
          return (
            <g key={i}>
              {atom(xs[0], m.y, 11, 'O')}
              {atom(xs[1], m.y, 13, 'C')}
              {atom(xs[2], m.y, 11, 'O')}
              {!m.bend &&
                m.arr.map((a, k) =>
                  a[0] !== 0 ? <g key={'ar' + k}>{arrow(xs[k], m.y, a[0], 0)}</g> : null
                )}
              {m.bend && (
                <g>
                  {arrow(xs[0], m.y, 0, 1)}
                  {arrow(xs[1], m.y, 0, -1)}
                  {arrow(xs[2], m.y, 0, 1)}
                </g>
              )}
              <text
                x={cx + d + 60}
                y={m.y - 4}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="start"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {m.n}
              </text>
              <text
                x={cx + d + 60}
                y={m.y + 12}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="start"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {m.wn + ' cm⁻¹ · IR ' + (m.ir ? 'active' : 'inactive')}
              </text>
            </g>
          )
        })}
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          CO₂ normal modes, arrows = atomic displacements
        </text>
      </Canvas>
      <Readout>
        CO₂ (3N−5 = 4 modes): ν₁ symmetric stretch (1333 cm⁻¹) keeps μ = 0 → IR-inactive; ν₂ bend
        (667, doubly degenerate) and ν₃ asymmetric stretch (2349) change the dipole → IR-active
      </Readout>
    </div>
  )
}

// MED TIER · UNIT 10, INDUSTRIAL & SUSTAINABLE

// Specific enthalpy (energy per gram) of common fuels, the metric that matters for
// transport, where mass is the constraint. Hydrogen leads by far because it packs
// the most bonds per unit mass; hydrocarbons and oxygenated fuels fall as the heavy,
// already-partly-oxidised carbon is added. Values (kJ/g, higher heating basis):
// H₂ 142, CH₄ 55.5, ethanol 29.7, glucose 15.6 (standard combustion data).
export function SpecificEnthalpyFuelsViz() {
  const fuels = [
    ['H₂', 142],
    ['CH₄', 55.5],
    ['ethanol', 29.7],
    ['glucose', 15.6]
  ]
  const W = 560,
    H = 300,
    y0 = 250,
    eMax = 150,
    x0 = 70
  const yOf = e => y0 - (e / eMax) * (y0 - 40)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={x0}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[50, 100, 150].map(v => (
          <g key={v}>
            <line
              x1={x0 - 4}
              y1={yOf(v)}
              x2={x0}
              y2={yOf(v)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={x0 - 8}
              y={yOf(v) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {v}
            </text>
          </g>
        ))}
        {fuels.map((f, i) => {
          const bx = x0 + 40 + i * 110
          return (
            <g key={f[0]}>
              <rect
                x={bx}
                y={yOf(f[1])}
                width={60}
                height={y0 - yOf(f[1])}
                fill={FG}
                fillOpacity={i === 0 ? 0.42 : 0.2}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={bx + 30}
                y={yOf(f[1]) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {f[1]}
              </text>
              <text
                x={bx + 30}
                y={y0 + 16}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {f[0]}
              </text>
            </g>
          )
        })}
        <TexPx
          x={x0 - 8}
          y={30}
          anchor="start"
          tex={'\\text{specific enthalpy}\\ /\\ \\mathrm{kJ\\ g^{-1}}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={286}
        />
      </Canvas>
      <Readout>
        Energy per gram: H₂ 142 (≈2.6× CH₄) &gt; CH₄ 55.5 &gt; ethanol 29.7 &gt; glucose 15.6 kJ/g.
        Hydrogen's mass advantage drives fuel-cell transport; oxygenated fuels carry dead oxidised
        carbon
      </Readout>
    </div>
  )
}

// Contact process: SO₂ + ½O₂ ⇌ SO₃ is exothermic, so equilibrium conversion FALLS as
// temperature rises (Le Chatelier). The equilibrium fraction converted is solved from
// Kp(T) = x²(3−x)/[(1−x)³·P] for a 2:1 SO₂:O₂ feed at 1 bar, with Kp(T) = e^(−ΔG°/RT),
// ΔH° = −197.8 kJ/mol, ΔS° = −187.9 J/mol·K (per 2 mol SO₃). The V₂O₅ catalyst only
// works above ~400 °C, so ~450 °C is the compromise: still ~97 % converted, fast enough.
export function ContactConversionViz() {
  const dH = -197800,
    dS = -187.9,
    R = 8.314
  const Kp = T => Math.exp(-(dH - T * dS) / (R * T))
  const g = x => (x * x * (3 - x)) / Math.pow(1 - x, 3)
  const solveX = K => {
    let lo = 0,
      hi = 0.999999
    for (let i = 0; i < 70; i++) {
      const m = (lo + hi) / 2
      if (g(m) < K) lo = m
      else hi = m
    }
    return (lo + hi) / 2
  }
  const Tmin = 600,
    Tmax = 1150
  const pts = []
  for (let T = Tmin; T <= Tmax; T += 10) pts.push([T, solveX(Kp(T)) * 100])
  const Tc = 723
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[Tmin, Tmax]} yRange={[0, 105]} width={560} height={330} pad={44}>
        <Polyline
          points={[
            [Tmin, 0],
            [Tmax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[25, 50, 75, 100].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [Tmin, y],
                [Tmin + 8, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[Tmin - 8, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {[700, 900, 1100].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, 3]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -6]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {x}
            </Label>
          </g>
        ))}
        {/* catalyst floor ~400C = 673K */}
        <Polyline
          points={[
            [673, 0],
            [673, 105]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="3 3"
        />
        <Tex
          at={[678, 30]}
          tex={'\\text{V}_2\\text{O}_5\\ \\text{floor }\\sim400^{\\circ}\\text{C}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Parametric
          xy={t => [t, solveX(Kp(t)) * 100]}
          t={[Tmin, Tmax]}
          samples={110}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Dot x={Tc} y={solveX(Kp(Tc)) * 100} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[Tc + 8, solveX(Kp(Tc)) * 100 - 10]}
          tex={'450^{\\circ}\\text{C}:\\,96\\%'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Label
          at={[(Tmin + Tmax) / 2, -14]}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        >
          TEMPERATURE / K
        </Label>
        <Label at={[Tmin + 2, 104]} anchor="start" size={FONT_LABEL} opacity={OPACITY.dim}>
          EQUILIBRIUM CONVERSION / %
        </Label>
      </Plot>
      <Readout>
        SO₂ + ½O₂ ⇌ SO₃ (ΔH° = −198 kJ): equilibrium conversion solved from Kp(T) falls with T (96 %
        at 450 °C → ~34 % at ~780 °C). The V₂O₅ floor forces ~450 °C, the yield/rate compromise
      </Readout>
    </div>
  )
}

// Zone refining: a molten zone swept along a solid rod carries impurities with it,
// because most impurities are more soluble in liquid than solid (segregation
// coefficient k < 1). The single-pass profile is C_s(x)/C₀ = 1 − (1−k)·e^(−k x/l)
// (Pfann): the leading edge freezes purer (C/C₀ = k at x = 0) and impurities pile up
// at the far end. Repeating passes drives the front toward ultrapure. Shown for
// k = 0.1 and k = 0.3, zone length l (Pfann, zone melting 1952).
export function ZoneRefiningViz() {
  const prof = k => x => 1 - (1 - k) * Math.exp(-k * x)
  const xMax = 10 // x in units of zone length l
  const yMax = 1.3
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[0, xMax]} yRange={[0, yMax]} width={560} height={320} pad={42}>
        <Polyline
          points={[
            [0, 1],
            [xMax, 1]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          dash="2 3"
        />
        <Polyline
          points={[
            [0, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0.5, 1.0].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [0, y],
                [0.1, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.1, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y.toFixed(1)}
            </Label>
          </g>
        ))}
        {[2, 4, 6, 8, 10].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, 0.03]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -0.07]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim}>
              {x}
            </Label>
          </g>
        ))}
        <Parametric
          xy={t => [t, prof(0.1)(t)]}
          t={[0, xMax]}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <Parametric
          xy={t => [t, prof(0.3)(t)]}
          t={[0, xMax]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          dash="5 4"
        />
        <Dot x={0} y={0.1} r={2.6} opacity={OPACITY.fg} />
        <Tex
          at={[0.3, 0.2]}
          tex={'\\dfrac{C}{C_0}=k'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[6, prof(0.1)(6) - 0.14]}
          tex={'k=0.1'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[3.4, prof(0.3)(3.4) + 0.1]}
          tex={'k=0.3'}
          anchor="start"
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        <Label at={[xMax / 2, -0.16]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          DISTANCE ALONG ROD x / l
        </Label>
        <Tex
          at={[0.15, yMax]}
          anchor="start"
          tex={'\\text{IMPURITY }\\dfrac{C}{C_0}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
        />
      </Plot>
      <Readout>
        Single pass C_s/C₀ = 1 − (1−k)e^(−kx/l): the front freezes at C₀·k (0.1 for k = 0.1) and
        impurities are swept toward the far end; repeated passes purify the leading section toward
        semiconductor grade
      </Readout>
    </div>
  )
}

// Hydrogen–oxygen fuel cell (acid / PEM). Fuel is oxidised at the anode
// H₂ → 2H⁺ + 2e⁻; the electrons power the external circuit while H⁺ crosses the
// proton-exchange membrane to the cathode, where O₂ + 4H⁺ + 4e⁻ → 2H₂O. Net:
// 2H₂ + O₂ → 2H₂O, E°_cell = +1.23 V, product is only water. An honest labelled
// schematic; the potential is the standard O₂/H₂O − H⁺/H₂ difference.
export function FuelCellViz() {
  const W = 560,
    H = 320
  const aX = 150,
    cX = 410,
    memX = W / 2,
    top = 90,
    bot = 260
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* electrodes */}
        <rect
          x={aX - 8}
          y={top}
          width={16}
          height={bot - top}
          fill={FG}
          fillOpacity={0.14}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <rect
          x={cX - 8}
          y={top}
          width={16}
          height={bot - top}
          fill={FG}
          fillOpacity={0.14}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* membrane */}
        <rect
          x={memX - 10}
          y={top}
          width={20}
          height={bot - top}
          fill={FG}
          fillOpacity={0.05}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="3 3"
        />
        <TexPx
          x={memX}
          y={bot + 16}
          anchor="middle"
          tex={'\\mathrm{H^+}\\ \\text{membrane}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* external circuit + load */}
        <path
          d={`M ${aX} ${top} L ${aX} 44 L ${cX} 44 L ${cX} ${top}`}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <circle
          cx={W / 2}
          cy={44}
          r={15}
          fill="var(--bg)"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={W / 2}
          y={48}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          M
        </text>
        {/* e- flow anode->cathode */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={aX + 40} y1={44} x2={aX + 90} y2={44} />
          <polyline points={`${aX + 82},38 ${aX + 90},44 ${aX + 82},50`} />
        </g>
        <TexPx
          x={aX + 65}
          y={34}
          anchor="middle"
          tex={'\\mathrm{e^-}'}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        {/* H+ migration */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={aX + 40} y1={180} x2={memX - 24} y2={180} />
          <polyline points={`${memX - 32},174 ${memX - 24},180 ${memX - 32},186`} />
        </g>
        <TexPx
          x={(aX + memX) / 2}
          y={172}
          anchor="middle"
          tex={'\\mathrm{H^+}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* feeds */}
        <TexPx
          x={aX}
          y={top - 10}
          anchor="middle"
          tex={'\\mathrm{H_2}\\ \\text{in}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <TexPx
          x={cX}
          y={top - 10}
          anchor="middle"
          tex={'\\mathrm{O_2}\\ \\text{in}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* labels */}
        <text
          x={aX}
          y={H - 40}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          ANODE (−)
        </text>
        <text
          x={cX}
          y={H - 40}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          CATHODE (+)
        </text>
        <TexPx
          x={aX}
          y={H - 24}
          anchor="middle"
          tex={'\\mathrm{H_2 \\to 2H^+ + 2e^-}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <TexPx
          x={cX}
          y={H - 24}
          anchor="middle"
          tex={'\\mathrm{O_2 + 4H^+ + 4e^- \\to 2H_2O}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={231}
        />
      </Canvas>
      <Readout>
        PEM cell: H₂ oxidised at the anode (−), O₂ reduced at the cathode (+), H⁺ crosses the
        membrane. Net 2H₂ + O₂ → 2H₂O, E°_cell = +1.23 V, electricity with water as the only product
      </Readout>
    </div>
  )
}

// Downs cell: industrial electrolysis of MOLTEN NaCl to sodium metal and chlorine.
// A central graphite anode (2Cl⁻ → Cl₂ + 2e⁻) is ringed by a steel cathode
// (Na⁺ + e⁻ → Na), with an iron-gauze diaphragm keeping the products apart so they
// cannot recombine. CaCl₂ is added to drop the melt from 801 °C to ~600 °C. An honest
// cross-section schematic; sign convention is the electrolytic one (anode +).
export function DownsCellViz() {
  const W = 560,
    H = 320,
    cx = 250,
    cy = 165
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* cell wall (cathode ring) */}
        <circle
          cx={cx}
          cy={cy}
          r={110}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_EMPHASIS}
        />
        <circle cx={cx} cy={cy} r={104} fill={FG} fillOpacity={0.04} stroke="none" />
        {/* diaphragm */}
        <circle
          cx={cx}
          cy={cy}
          r={62}
          fill="none"
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
        />
        {/* central anode */}
        <circle
          cx={cx}
          cy={cy}
          r={22}
          fill={FG}
          fillOpacity={0.16}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={cx}
          y={cy + 4}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          +
        </text>
        {/* Cl2 up from anode */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={cx} y1={cy - 22} x2={cx} y2={cy - 70} />
          <polyline points={`${cx - 6},${cy - 62} ${cx},${cy - 70} ${cx + 6},${cy - 62}`} />
        </g>
        <TexPx
          x={cx}
          y={cy - 78}
          anchor="middle"
          tex={'\\mathrm{Cl_2}\\uparrow'}
          size={FONT_SMALL}
          opacity={OPACITY.accent}
        />
        {/* Na at cathode ring */}
        <text
          x={cx + 128}
          y={cy - 40}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_SMALL}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Na (liquid) ↑
        </text>
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_PRIMARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={cx + 95} y1={cy - 20} x2={cx + 118} y2={cy - 40} />
          <polyline
            points={`${cx + 110},${cy - 34} ${cx + 118},${cy - 40} ${cx + 116},${cy - 30}`}
          />
        </g>
        <text
          x={cx - 128}
          y={cy + 4}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          steel cathode (−)
        </text>
        <text
          x={cx}
          y={cy + 48}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          graphite anode
        </text>
        <text
          x={cx + 4}
          y={cy + 88}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          iron gauze diaphragm
        </text>
        <TexPx
          x={W / 2}
          y={H - 10}
          anchor="middle"
          tex={
            '\\text{molten }\\mathrm{NaCl/CaCl_2}\\ {\\sim}600\\,^\\circ\\mathrm{C}\\text{: cross-section}'
          }
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={473}
        />
      </Canvas>
      <Readout>
        Downs cell: central graphite anode 2Cl⁻ → Cl₂ + 2e⁻ (+); surrounding steel cathode Na⁺ + e⁻
        → Na (−); gauze diaphragm stops Na + Cl₂ recombining. CaCl₂ lowers the melt 801 → ~600 °C
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 01, ATOMIC STRUCTURE

// Stern–Gerlach experiment: a beam of silver atoms (one unpaired 5s electron)
// passes through an INHOMOGENEOUS magnetic field. Classical physics predicts the
// magnetic moments point in every direction, so the beam should smear into a
// CONTINUOUS vertical band. Quantum mechanics says the spin projection is
// QUANTISED, m_s = ±½, so the beam splits into exactly TWO discrete spots. The
// observed two-spot result (Stern & Gerlach, 1922) is direct evidence of spin and
// space quantisation. An honest prediction-contrast schematic (2s+1 = 2 spots).
export function SternGerlachViz() {
  const W = 560,
    H = 300
  const ovenX = 40,
    magX0 = 180,
    magX1 = 330,
    screenX = 500,
    midY = 150
  const split = 46 // spot half-separation on the screen (schematic)
  // classical continuous band: Gaussian intensity across y at the screen
  const band = []
  for (let dy = -70; dy <= 70; dy += 2) band.push(dy)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* oven / source */}
        <rect
          x={ovenX}
          y={midY - 16}
          width={34}
          height={32}
          fill={FG}
          fillOpacity={0.14}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={ovenX + 17}
          y={midY + 34}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Ag oven
        </text>
        {/* collimated beam */}
        <line
          x1={ovenX + 34}
          y1={midY}
          x2={magX0}
          y2={midY}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
        />
        {/* magnet poles (inhomogeneous field) */}
        <rect
          x={magX0}
          y={midY - 54}
          width={magX1 - magX0}
          height={30}
          fill={FG}
          fillOpacity={0.08}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <rect
          x={magX0}
          y={midY + 24}
          width={magX1 - magX0}
          height={30}
          fill={FG}
          fillOpacity={0.08}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={(magX0 + magX1) / 2}
          y={midY - 40}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          N
        </text>
        <text
          x={(magX0 + magX1) / 2}
          y={midY + 45}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          S
        </text>
        <text
          x={(magX0 + magX1) / 2}
          y={midY + 78}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          inhomogeneous B
        </text>
        {/* two quantum paths */}
        <g stroke={FG} strokeOpacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} fill="none">
          <path
            d={`M ${magX1} ${midY} Q ${(magX1 + screenX) / 2} ${midY - split * 0.5} ${screenX} ${midY - split}`}
          />
          <path
            d={`M ${magX1} ${midY} Q ${(magX1 + screenX) / 2} ${midY + split * 0.5} ${screenX} ${midY + split}`}
          />
        </g>
        {/* classical predicted smear (faint continuous band on screen) */}
        {band.map((dy, i) => (
          <line
            key={i}
            x1={screenX + 6}
            y1={midY + dy}
            x2={screenX + 6 + 16 * Math.exp(-(dy * dy) / (2 * 34 * 34))}
            y2={midY + dy}
            stroke={FG}
            strokeOpacity={OPACITY.faint}
            strokeWidth={STROKE_HAIR}
          />
        ))}
        <text
          x={screenX + 30}
          y={midY}
          fill={FG}
          opacity={OPACITY.faint}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          classical:
        </text>
        <text
          x={screenX + 30}
          y={midY + 12}
          fill={FG}
          opacity={OPACITY.faint}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          continuous band
        </text>
        {/* screen + two observed spots */}
        <line
          x1={screenX}
          y1={midY - 80}
          x2={screenX}
          y2={midY + 80}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <circle cx={screenX} cy={midY - split} r={6} fill={FG} opacity={OPACITY.fg} />
        <circle cx={screenX} cy={midY + split} r={6} fill={FG} opacity={OPACITY.fg} />
        <TexPx
          x={screenX + 14}
          y={midY - split - 8}
          anchor="start"
          tex={'m_s = +\\tfrac{1}{2}'}
          size={FONT_TINY}
          opacity={OPACITY.fg}
        />
        <TexPx
          x={screenX + 14}
          y={midY + split + 14}
          anchor="start"
          tex={'m_s = -\\tfrac{1}{2}'}
          size={FONT_TINY}
          opacity={OPACITY.fg}
        />
        <text
          x={W / 2}
          y={H - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          Stern–Gerlach, spin quantisation
        </text>
      </Canvas>
      <Readout>
        Ag beam through an inhomogeneous field: classical physics predicts a continuous smear; QM
        gives 2s+1 = 2 discrete spots for m_s = ±½. Two spots were observed → spin is quantised
        (Stern–Gerlach, 1922)
      </Readout>
    </div>
  )
}

// Diagonal relationships: the first element of a group resembles the second
// element of the NEXT group (Li↔Mg, Be↔Al, B↔Si) more than its own heavier
// congener. Cause: descending a group DROPS charge density (bigger ion), moving
// right RAISES it (higher charge, smaller ion), the two shifts cancel along the
// diagonal, so the diagonal partners share polarising power and hence chemistry
// (Li & Mg both form nitrides + normal oxides; Be & Al both amphoteric with
// covalent, hydrolysing chlorides and passivating oxide films). Reference values:
// Pauling χ and ionic potential z/r (e/Å) from Shannon radii, Be²⁺ 1.57/4.4 vs
// Al³⁺ 1.61/5.6 (near-identical χ). An honest highlighting table.
export function DiagonalRelationshipsViz() {
  const W = 560,
    H = 300
  const cells = [
    [
      { s: 'Li⁺', chi: 0.98, zr: 1.3 },
      { s: 'Be²⁺', chi: 1.57, zr: 4.4 },
      { s: 'B³⁺', chi: 2.04, zr: 11.1 }
    ],
    [
      { s: 'Na⁺', chi: 0.93, zr: 1.0 },
      { s: 'Mg²⁺', chi: 1.31, zr: 2.8 },
      { s: 'Al³⁺', chi: 1.61, zr: 5.6 }
    ]
  ]
  const x0 = 120,
    y0 = 70,
    cw = 120,
    ch = 84
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* diagonal highlight arrows behind cells */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
          fill="none"
          strokeLinecap="round"
        >
          <line
            x1={x0 + cw * 0.5 + 26}
            y1={y0 + ch * 0.5 + 20}
            x2={x0 + cw * 1.5 - 26}
            y2={y0 + ch * 1.5 - 20}
          />
          <polyline
            points={`${x0 + cw * 1.5 - 34},${y0 + ch * 1.5 - 30} ${x0 + cw * 1.5 - 26},${y0 + ch * 1.5 - 20} ${x0 + cw * 1.5 - 36},${y0 + ch * 1.5 - 18}`}
          />
          <line
            x1={x0 + cw * 1.5 + 26}
            y1={y0 + ch * 0.5 + 20}
            x2={x0 + cw * 2.5 - 26}
            y2={y0 + ch * 1.5 - 20}
          />
          <polyline
            points={`${x0 + cw * 2.5 - 34},${y0 + ch * 1.5 - 30} ${x0 + cw * 2.5 - 26},${y0 + ch * 1.5 - 20} ${x0 + cw * 2.5 - 36},${y0 + ch * 1.5 - 18}`}
          />
        </g>
        {cells.map((row, r) =>
          row.map((c, k) => {
            const highlight = (r === 0 && k <= 1) || (r === 1 && k >= 1)
            return (
              <g key={r + '_' + k}>
                <rect
                  x={x0 + k * cw}
                  y={y0 + r * ch}
                  width={cw - 12}
                  height={ch - 12}
                  fill={FG}
                  fillOpacity={highlight ? 0.12 : 0.03}
                  stroke={FG}
                  strokeOpacity={highlight ? OPACITY.fg : OPACITY.faint}
                  strokeWidth={highlight ? STROKE_PRIMARY : STROKE_SECONDARY}
                />
                <text
                  x={x0 + k * cw + (cw - 12) / 2}
                  y={y0 + r * ch + 28}
                  fill={FG}
                  opacity={OPACITY.fg}
                  fontSize={FONT_LABEL}
                  textAnchor="middle"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  {c.s}
                </text>
                <text
                  x={x0 + k * cw + (cw - 12) / 2}
                  y={y0 + r * ch + 46}
                  fill={FG}
                  opacity={OPACITY.dim}
                  fontSize={FONT_TINY}
                  textAnchor="middle"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  {'χ ' + c.chi.toFixed(2)}
                </text>
                <text
                  x={x0 + k * cw + (cw - 12) / 2}
                  y={y0 + r * ch + 60}
                  fill={FG}
                  opacity={OPACITY.dim}
                  fontSize={FONT_TINY}
                  textAnchor="middle"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  {'z/r ' + c.zr.toFixed(1)}
                </text>
              </g>
            )
          })
        )}
        <text
          x={x0 - 16}
          y={y0 + 20}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          period 2
        </text>
        <text
          x={x0 - 16}
          y={y0 + ch + 20}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          period 3
        </text>
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          diagonal relationships (charge density matched)
        </text>
      </Canvas>
      <Readout>
        Down-and-right cancels: bigger ion (down) offsets higher charge (right), so diagonal
        partners share charge density. Be²⁺ (χ 1.57) ≈ Al³⁺ (χ 1.61), both amphoteric, covalent
        chlorides; Li ≈ Mg, both form nitrides + normal oxides
      </Readout>
    </div>
  )
}

// Inert-pair effect: down groups 13–15 the valence ns² pair grows increasingly
// reluctant to take part in bonding, so the lower (group − 2) oxidation state
// becomes more stable. The signature is in the first ionisation energies of
// group 13 (kJ/mol, CRC): B 801, Al 578, Ga 579, In 558, Tl 589, IE₁ stops
// falling and RISES from In to Tl, because the 6s electrons are poorly shielded by
// the intervening 3d/4f/5d shells and relativistically stabilised (harder to
// remove). The consequence: Tl³⁺ is strongly oxidising, E°(Tl³⁺/Tl⁺) = +1.25 V,
// so Tl⁺ is the stable ion, whereas Al is only ever +3.
export function InertPairViz() {
  const ie = [
    ['B', 801],
    ['Al', 578],
    ['Ga', 579],
    ['In', 558],
    ['Tl', 589]
  ]
  const xMax = 4,
    yMin = 500,
    yMax = 850
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.4, xMax + 0.4]} yRange={[yMin, yMax]} width={560} height={310} pad={44}>
        <Polyline
          points={[
            [-0.4, yMin],
            [xMax + 0.4, yMin]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[600, 700, 800].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-0.4, y],
                [-0.26, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.5, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        <Polyline
          points={ie.map((d, i) => [i, d[1]])}
          opacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {ie.map((d, i) => (
          <g key={d[0]}>
            <Dot x={i} y={d[1]} r={3} opacity={OPACITY.fg} />
            <Label
              at={[i, yMin - 0.6 * 0]}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
              dy={18}
            >
              {d[0]}
            </Label>
            <Label at={[i, d[1]]} anchor="middle" dy={-9} size={FONT_TINY} opacity={OPACITY.dim}>
              {d[1]}
            </Label>
          </g>
        ))}
        {/* highlight In→Tl uptick */}
        <Polyline
          points={[
            [3, ie[3][1]],
            [4, ie[4][1]]
          ]}
          opacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
        />
        <Tex
          at={[3.5, 660]}
          tex={'\\text{IE}_1\\ \\text{rises}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Label at={[xMax / 2, yMax]} anchor="middle" size={FONT_LABEL} opacity={OPACITY.dim}>
          GROUP 13, DOWN →
        </Label>
        <Tex
          at={[-0.3, yMax]}
          anchor="start"
          tex={'\\mathrm{IE_1}\\ /\\ \\mathrm{kJ\\ mol^{-1}}'}
          size={FONT_LABEL}
          opacity={OPACITY.dim}
          dy={-14}
        />
      </Plot>
      <Readout>
        Group-13 IE₁ (kJ/mol): B 801 → In 558 then RISES to Tl 589, the 6s² pair is poorly shielded
        and relativistically held. Result: Tl³⁺/Tl⁺ E° = +1.25 V (strongly oxidising) → Tl⁺ stable,
        the inert pair
      </Readout>
    </div>
  )
}

// Hartree–Fock self-consistent field (SCF) loop. The many-electron Schrödinger
// equation is solved iteratively: from a guessed set of orbitals you build the
// electron density, from the density the effective (Fock) potential each electron
// feels, then solve the one-electron equations for improved orbitals; repeat until
// the orbitals/energy stop changing (self-consistent). The "field" that defines the
// equation depends on its own solution, hence the loop. An honest algorithm
// flowchart (the mean-field method behind most quantum-chemistry calculations).
export function HartreeFockSCFViz() {
  const W = 560,
    H = 320
  const box = (x, y, w, h, lines, emph) => (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={FG}
        fillOpacity={emph ? 0.12 : 0.04}
        stroke={FG}
        strokeOpacity={emph ? OPACITY.fg : OPACITY.dim}
        strokeWidth={emph ? STROKE_PRIMARY : STROKE_SECONDARY}
      />
      {lines.map((ln, i) => (
        <text
          key={i}
          x={x + w / 2}
          y={y + h / 2 - (lines.length - 1) * 6 + i * 12 + 4}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {ln}
        </text>
      ))}
    </g>
  )
  const arrow = (x1, y1, x2, y2) => (
    <g
      stroke={FG}
      strokeOpacity={OPACITY.dim}
      strokeWidth={STROKE_SECONDARY}
      fill="none"
      strokeLinecap="round"
    >
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polyline
        points={`${x2 - (x2 > x1 ? 7 : x2 < x1 ? -7 : 4)},${y2 - (y2 > y1 ? 7 : y2 < y1 ? -7 : 4)} ${x2},${y2} ${x2 - (x2 > x1 ? 7 : x2 < x1 ? -7 : -4)},${y2 - (y2 > y1 ? 7 : y2 < y1 ? -7 : 4)}`}
      />
    </g>
  )
  const cx = W / 2
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {box(cx - 80, 24, 160, 34, ['initial guess ψ⁰'], false)}
        {arrow(cx, 58, cx, 78)}
        {box(cx - 110, 78, 220, 36, ['build density ρ = Σ|ψ|²', 'and Fock operator F[ρ]'], false)}
        {arrow(cx, 114, cx, 134)}
        {box(cx - 110, 134, 220, 36, ['solve F ψ = ε ψ', '→ new orbitals ψ, energy E'], false)}
        {arrow(cx, 170, cx, 190)}
        {box(cx - 80, 190, 160, 36, ['ΔE < tolerance?'], true)}
        {/* yes -> converged */}
        {arrow(cx + 80, 208, cx + 170, 208)}
        <text
          x={cx + 122}
          y={200}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          yes
        </text>
        {box(cx + 170, 190, 120, 36, ['converged:', 'SCF solution'], false)}
        {/* no -> loop back */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          fill="none"
          strokeLinecap="round"
        >
          <path d={`M ${cx - 80} 208 L ${cx - 150} 208 L ${cx - 150} 96 L ${cx - 110} 96`} />
          <polyline points={`${cx - 118},90 ${cx - 110},96 ${cx - 118},102`} />
        </g>
        <text
          x={cx - 150}
          y={150}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          no
        </text>
        <text
          x={cx - 150}
          y={162}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          (iterate)
        </text>
        <text
          x={W / 2}
          y={H - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          Hartree–Fock self-consistent field
        </text>
      </Canvas>
      <Readout>
        The Fock potential each electron feels depends on all the others, so the equation is solved
        by iteration: guess ψ → density ρ → Fock F[ρ] → new ψ → repeat until ΔE &lt; tolerance
        (self-consistent), the mean-field basis of quantum chemistry
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 02, BONDING

// Isoelectronic ionic radii. The ions O²⁻, F⁻, Na⁺, Mg²⁺, Al³⁺ all have 10
// electrons (the Ne configuration 1s²2s²2p⁶), so the ONLY thing that changes across
// the series is the nuclear charge Z (8→13). More protons pulling the same electron
// cloud → the radius shrinks monotonically: the anions are large (Z < 10, electrons
// outnumber protons), the cations small. Shannon 6-coordinate ionic radii (pm):
// O²⁻ 140, F⁻ 133, Na⁺ 102, Mg²⁺ 72, Al³⁺ 53.5 (Shannon 1976 / CRC). Bar chart.
export function IonicRadiiViz() {
  const ions = [
    { s: 'O²⁻', Z: 8, r: 140 },
    { s: 'F⁻', Z: 9, r: 133 },
    { s: 'Na⁺', Z: 11, r: 102 },
    { s: 'Mg²⁺', Z: 12, r: 72 },
    { s: 'Al³⁺', Z: 13, r: 53.5 }
  ]
  const W = 560,
    H = 300,
    y0 = 240,
    x0 = 70,
    rMax = 160
  const yOf = r => y0 - (r / rMax) * (y0 - 40)
  const bw = 58,
    gap = 30
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={x0}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[40, 80, 120, 160].map(v => (
          <g key={v}>
            <line
              x1={x0 - 4}
              y1={yOf(v)}
              x2={x0}
              y2={yOf(v)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={x0 - 8}
              y={yOf(v) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {v}
            </text>
          </g>
        ))}
        {ions.map((ion, i) => {
          const bx = x0 + 24 + i * (bw + gap)
          const anion = ion.Z < 10
          return (
            <g key={ion.s}>
              <rect
                x={bx}
                y={yOf(ion.r)}
                width={bw}
                height={y0 - yOf(ion.r)}
                fill={FG}
                fillOpacity={anion ? 0.3 : 0.14}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={bx + bw / 2}
                y={yOf(ion.r) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {ion.r}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 16}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {ion.s}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 30}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {'Z=' + ion.Z}
              </text>
            </g>
          )
        })}
        <TexPx
          x={x0 - 8}
          y={30}
          anchor="start"
          tex={
            '\\text{ionic radius}\\ /\\ \\mathrm{pm}\\text{: all }10\\,\\mathrm{e^-}\\text{ (isoelectronic)}'
          }
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={495}
        />
      </Canvas>
      <Readout>
        All five ions share the Ne configuration (10 e⁻); only Z changes (8→13). More protons on the
        same cloud shrink it: O²⁻ 140 → Al³⁺ 53.5 pm. Anions (Z&lt;10) large, cations small, Z_eff,
        not electron count, sets the size
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 03, ENERGETICS & THERMODYNAMICS

// Bond-enthalpy accounting. The reaction enthalpy is estimated as ΣE(bonds broken)
// − ΣE(bonds formed): breaking bonds costs energy (endothermic, +), forming bonds
// releases it (exothermic, −). Shown for H₂ + Cl₂ → 2 HCl using mean bond enthalpies
// (kJ/mol, standard tables): H–H 436, Cl–Cl 242, H–Cl 431. Broken = 436 + 242 = 678;
// formed = 2×431 = 862; ΔH = 678 − 862 = −184 kJ/mol, matching the measured
// 2·ΔH_f(HCl) = 2×(−92.3) = −184.6 kJ/mol. A computed energy balance, not a drawn bar.
export function BondEnthalpyAccountingViz() {
  const broken = 436 + 242 // kJ/mol (H–H + Cl–Cl)
  const formed = 2 * 431 // kJ/mol (2 H–Cl)
  const dH = broken - formed // −184
  const W = 560,
    H = 320
  // energy axis: E from −250 (bottom) to +800 (top)
  const eLo = -250,
    eHi = 800,
    yTop = 40,
    yBot = 280
  const yOf = e => yBot - ((e - eLo) / (eHi - eLo)) * (yBot - yTop)
  const xR = 90,
    xA = 300,
    xP = 500 // reactants / atoms / products columns
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* energy axis */}
        <line
          x1={60}
          y1={yTop}
          x2={60}
          y2={yBot}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[-200, 0, 200, 400, 600, 800].map(e => (
          <g key={e}>
            <line
              x1={56}
              y1={yOf(e)}
              x2={60}
              y2={yOf(e)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={52}
              y={yOf(e) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {e}
            </text>
          </g>
        ))}
        <TexPx
          x={18}
          y={yTop - 12}
          anchor="start"
          tex={'E\\ /\\ \\mathrm{kJ\\ mol^{-1}}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* zero line */}
        <line
          x1={60}
          y1={yOf(0)}
          x2={W - 20}
          y2={yOf(0)}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          strokeDasharray="3 3"
        />
        {/* level plateaus */}
        <line
          x1={xR - 40}
          y1={yOf(0)}
          x2={xR + 40}
          y2={yOf(0)}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <line
          x1={xA - 40}
          y1={yOf(broken)}
          x2={xA + 40}
          y2={yOf(broken)}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <line
          x1={xP - 40}
          y1={yOf(dH)}
          x2={xP + 40}
          y2={yOf(dH)}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        {/* connectors */}
        <line
          x1={xR + 40}
          y1={yOf(0)}
          x2={xA - 40}
          y2={yOf(broken)}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
        />
        <line
          x1={xA + 40}
          y1={yOf(broken)}
          x2={xP - 40}
          y2={yOf(dH)}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
        />
        {/* rise arrow (bonds broken) */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={175} y1={yOf(0)} x2={175} y2={yOf(broken)} />
          <polyline points={`170,${yOf(broken) + 8} 175,${yOf(broken)} 180,${yOf(broken) + 8}`} />
        </g>
        <text
          x={182}
          y={(yOf(0) + yOf(broken)) / 2}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          break +678
        </text>
        {/* drop arrow (bonds formed) */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_EMPHASIS}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={400} y1={yOf(broken)} x2={400} y2={yOf(dH)} />
          <polyline points={`395,${yOf(dH) - 8} 400,${yOf(dH)} 405,${yOf(dH) - 8}`} />
        </g>
        <text
          x={407}
          y={(yOf(broken) + yOf(dH)) / 2}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          form −862
        </text>
        {/* level labels */}
        <TexPx
          x={xR}
          y={yOf(0) + 20}
          anchor="middle"
          tex={'\\mathrm{H_2 + Cl_2}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <text
          x={xA}
          y={yOf(broken) - 10}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          2 H· + 2 Cl·
        </text>
        <TexPx
          x={xP}
          y={yOf(dH) + 20}
          anchor="middle"
          tex={'2\\,\\mathrm{HCl}\\ (\\Delta H\\ {-}184)'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <TexPx
          x={W / 2}
          y={H - 6}
          anchor="middle"
          tex={'\\Delta H \\approx \\Sigma(\\text{broken}) - \\Sigma(\\text{formed})'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={286}
        />
      </Canvas>
      <Readout>
        H₂ + Cl₂ → 2 HCl: break H–H 436 + Cl–Cl 242 = +678; form 2×H–Cl 431 = −862 → ΔH = −184
        kJ/mol. Matches measured 2·ΔH_f(HCl) = −184.6. Net exothermic because the new bonds are
        stronger than those broken
      </Readout>
    </div>
  )
}

// Open / closed / isolated systems. Thermodynamics classifies a system by what can
// cross its boundary: an OPEN system exchanges both matter and energy with the
// surroundings (an open beaker); a CLOSED system exchanges energy but not matter (a
// sealed flask); an ISOLATED system exchanges neither (an ideal insulated, rigid,
// sealed vessel, the whole universe is the only truly isolated system). An honest
// schematic contrasting which flows the boundary permits.
export function SystemTypesViz() {
  const W = 560,
    H = 300
  const panels = [
    { t: 'OPEN', matter: true, energy: true, sub: 'matter + energy' },
    { t: 'CLOSED', matter: false, energy: true, sub: 'energy only' },
    { t: 'ISOLATED', matter: false, energy: false, sub: 'neither' }
  ]
  const bw = 150,
    bh = 120,
    y0 = 80,
    gap = 30
  const x0 = (W - (bw * 3 + gap * 2)) / 2
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {panels.map((p, i) => {
          const bx = x0 + i * (bw + gap)
          const cx = bx + bw / 2,
            cy = y0 + bh / 2
          return (
            <g key={p.t}>
              {/* insulated double wall for isolated */}
              {!p.energy && !p.matter && (
                <rect
                  x={bx - 5}
                  y={y0 - 5}
                  width={bw + 10}
                  height={bh + 10}
                  fill="none"
                  stroke={FG}
                  strokeOpacity={OPACITY.dim}
                  strokeWidth={STROKE_SECONDARY}
                />
              )}
              <rect
                x={bx}
                y={y0}
                width={bw}
                height={bh}
                fill={FG}
                fillOpacity={0.05}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              <text
                x={cx}
                y={y0 - 16}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_LABEL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY, letterSpacing: '0.08em' }}
              >
                {p.t}
              </text>
              {/* system contents dots */}
              {[
                [-24, -14],
                [10, -20],
                [-6, 12],
                [26, 8],
                [0, -2]
              ].map((d, k) => (
                <circle
                  key={k}
                  cx={cx + d[0]}
                  cy={cy + d[1]}
                  r={3}
                  fill={FG}
                  opacity={OPACITY.dim}
                />
              ))}
              {/* matter arrow (solid, top-left) crossing boundary */}
              {p.matter && (
                <g
                  stroke={FG}
                  strokeOpacity={OPACITY.fg}
                  strokeWidth={STROKE_PRIMARY}
                  fill="none"
                  strokeLinecap="round"
                >
                  <line x1={bx - 26} y1={y0 + 22} x2={bx + 22} y2={y0 + 22} />
                  <polyline
                    points={`${bx + 14},${y0 + 17} ${bx + 22},${y0 + 22} ${bx + 14},${y0 + 27}`}
                  />
                  <text
                    x={bx - 26}
                    y={y0 + 12}
                    fill={FG}
                    opacity={OPACITY.dim}
                    fontSize={FONT_TINY}
                    textAnchor="start"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    matter
                  </text>
                </g>
              )}
              {/* energy arrow (wavy heat, bottom-right) crossing boundary */}
              {p.energy && (
                <g
                  stroke={FG}
                  strokeOpacity={OPACITY.accent}
                  strokeWidth={STROKE_SECONDARY}
                  fill="none"
                  strokeLinecap="round"
                >
                  <path
                    d={`M ${bx + bw - 22} ${y0 + bh - 22} q 8 -7 16 0 q 8 7 16 0 q 8 -7 16 0`}
                  />
                  <polyline
                    points={`${bx + bw + 18},${y0 + bh - 27} ${bx + bw + 26},${y0 + bh - 22} ${bx + bw + 18},${y0 + bh - 17}`}
                  />
                  <text
                    x={bx + bw + 30}
                    y={y0 + bh - 19}
                    fill={FG}
                    opacity={OPACITY.dim}
                    fontSize={FONT_TINY}
                    textAnchor="start"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    heat
                  </text>
                </g>
              )}
              {/* barred flows for what cannot cross */}
              {!p.matter && (
                <text
                  x={cx}
                  y={y0 + bh + 22}
                  fill={FG}
                  opacity={OPACITY.dim}
                  fontSize={FONT_TINY}
                  textAnchor="middle"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  no matter
                </text>
              )}
              {!p.energy && (
                <text
                  x={cx}
                  y={y0 + bh + 36}
                  fill={FG}
                  opacity={OPACITY.dim}
                  fontSize={FONT_TINY}
                  textAnchor="middle"
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  no heat
                </text>
              )}
              <text
                x={cx}
                y={y0 + bh + (p.energy ? 22 : 22)}
                fill={FG}
                opacity={OPACITY.faint}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY, display: p.matter ? 'block' : 'none' }}
              >
                {p.sub}
              </text>
            </g>
          )
        })}
        <text
          x={W / 2}
          y={H - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          what the boundary lets cross
        </text>
      </Canvas>
      <Readout>
        Open exchanges matter AND energy (open beaker); closed exchanges energy but not matter
        (sealed flask); isolated exchanges neither (ideal insulated vessel). The classification
        fixes which conservation laws bind the system
      </Readout>
    </div>
  )
}

// Two-block entropy exchange (the second law, quantified). A quantity of heat q
// flows spontaneously from a hot block (T_h) to a cold block (T_c). For a small
// transfer (blocks approximated as reservoirs at fixed T) the entropy changes are
// ΔS_hot = −q/T_h and ΔS_cold = +q/T_c, so ΔS_universe = q(1/T_c − 1/T_h) > 0
// whenever T_h > T_c. Shown for q = 1200 J, T_h = 400 K, T_c = 300 K: ΔS_hot =
// −3.00, ΔS_cold = +4.00, net = +1.00 J/K > 0, heat flows hot→cold precisely
// because that raises the total entropy.
export function TwoBlockEntropyViz() {
  const q = 1200,
    Th = 400,
    Tc = 300
  const dS_hot = -q / Th, // −3.00
    dS_cold = q / Tc, // +4.00
    dS_net = dS_cold + dS_hot // +1.00
  const W = 560,
    H = 300
  // bar chart of the three ΔS around a zero line
  const bx0 = 330,
    y0 = 150,
    barW = 46,
    pxPerJ = 26 // px per J/K
  const bars = [
    { s: 'ΔS hot', v: dS_hot },
    { s: 'ΔS cold', v: dS_cold },
    { s: 'ΔS net', v: dS_net }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* two blocks + heat arrow (left half) */}
        <rect
          x={40}
          y={90}
          width={70}
          height={90}
          fill={FG}
          fillOpacity={0.22}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={75}
          y={135}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          HOT
        </text>
        <text
          x={75}
          y={150}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          400 K
        </text>
        <rect
          x={190}
          y={90}
          width={70}
          height={90}
          fill={FG}
          fillOpacity={0.07}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={225}
          y={135}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          COLD
        </text>
        <text
          x={225}
          y={150}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          300 K
        </text>
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_EMPHASIS}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={112} y1={135} x2={186} y2={135} />
          <polyline points={`178,130 186,135 178,140`} />
        </g>
        <TexPx
          x={149}
          y={124}
          anchor="middle"
          tex={'q = 1200\\ \\mathrm{J}'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        {/* zero line for bars */}
        <line
          x1={bx0 - 20}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {bars.map((b, i) => {
          const bx = bx0 + i * (barW + 20)
          const top = b.v >= 0 ? y0 - b.v * pxPerJ : y0
          const hgt = Math.abs(b.v) * pxPerJ
          const emph = b.s === 'ΔS net'
          return (
            <g key={b.s}>
              <rect
                x={bx}
                y={top}
                width={barW}
                height={hgt}
                fill={FG}
                fillOpacity={emph ? 0.3 : 0.14}
                stroke={FG}
                strokeOpacity={emph ? OPACITY.fg : OPACITY.dim}
                strokeWidth={emph ? STROKE_PRIMARY : STROKE_SECONDARY}
              />
              <text
                x={bx + barW / 2}
                y={b.v >= 0 ? top - 6 : top + hgt + 14}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {(b.v > 0 ? '+' : '') + b.v.toFixed(2)}
              </text>
              <text
                x={bx + barW / 2}
                y={y0 + (b.v >= 0 ? 14 : -6)}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.s}
              </text>
            </g>
          )
        })}
        <TexPx
          x={W - 20}
          y={30}
          anchor="end"
          tex={'\\Delta S\\ /\\ \\mathrm{J\\ K^{-1}}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <TexPx
          x={W / 2}
          y={H - 6}
          anchor="middle"
          tex={
            '\\Delta S_{\\text{universe}} = q\\!\\left(\\frac{1}{T_c} - \\frac{1}{T_h}\\right) > 0'
          }
          size={9}
          opacity={OPACITY.dim}
          width={374}
        />
      </Canvas>
      <Readout>
        Heat q = 1200 J from hot (400 K) to cold (300 K): ΔS_hot = −q/T_h = −3.00, ΔS_cold = +q/T_c
        = +4.00 → ΔS_universe = +1.00 J/K &gt; 0. The cold block gains more entropy than the hot
        loses, so the flow is spontaneous (small-transfer / reservoir limit)
      </Readout>
    </div>
  )
}

// Entropy of expansion vs heating (both from their governing equations). For an
// ideal gas, isothermal expansion changes entropy by ΔS = nR·ln(V₂/V₁) and constant-
// pressure heating by ΔS = C_p·ln(T₂/T₁). Both are logarithmic in the ratio, so the
// curves rise steeply then flatten. Shown per mole (n = 1): R = 8.314, and C_p =
// 7/2 R = 29.1 J mol⁻¹K⁻¹ for a diatomic gas (equipartition). Each ΔS is evaluated
// from its formula, not sketched. At a ratio of 2: expansion ΔS = R·ln2 = 5.76,
// heating ΔS = C_p·ln2 = 20.17 J K⁻¹.
export function EntropyChangeViz() {
  const R = 8.314,
    Cp = 3.5 * R // 29.10
  const dS_exp = r => R * Math.log(r)
  const dS_heat = r => Cp * Math.log(r)
  const rMax = 8
  const pts = f => {
    const a = []
    for (let r = 1; r <= rMax + 1e-9; r += 0.1) a.push([r, f(r)])
    return a
  }
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px' }}>
          <Plot xRange={[0.6, rMax + 0.4]} yRange={[-2, 20]} width={280} height={230} pad={40}>
            <Polyline
              points={[
                [1, -2],
                [1, 20]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_HAIR}
            />
            <Polyline
              points={[
                [0.6, 0],
                [rMax + 0.4, 0]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            {[5, 10, 15].map(y => (
              <g key={y}>
                <Polyline
                  points={[
                    [0.6, y],
                    [0.8, y]
                  ]}
                  opacity={OPACITY.dim}
                  strokeWidth={STROKE_SECONDARY}
                />
                <Label at={[0.55, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
                  {y}
                </Label>
              </g>
            ))}
            <Polyline points={pts(dS_exp)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
            <Dot x={2} y={dS_exp(2)} r={3} opacity={OPACITY.accent} />
            <Tex
              at={[4.4, 3.2]}
              tex={'\\Delta S = nR\\ln\\!\\left(\\frac{V_2}{V_1}\\right)'}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
            <Label
              at={[rMax / 2 + 0.3, 20]}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
              dy={-2}
            >
              ISOTHERMAL EXPANSION
            </Label>
            <Tex
              at={[rMax + 0.4, 0]}
              anchor="end"
              tex={'\\dfrac{V_2}{V_1}'}
              size={FONT_TINY}
              opacity={OPACITY.dim}
              dy={14}
            />
          </Plot>
        </div>
        <div style={{ flex: '1 1 240px' }}>
          <Plot xRange={[0.6, rMax + 0.4]} yRange={[-2, 70]} width={280} height={230} pad={40}>
            <Polyline
              points={[
                [1, -2],
                [1, 70]
              ]}
              opacity={OPACITY.faint}
              strokeWidth={STROKE_HAIR}
            />
            <Polyline
              points={[
                [0.6, 0],
                [rMax + 0.4, 0]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            {[20, 40, 60].map(y => (
              <g key={y}>
                <Polyline
                  points={[
                    [0.6, y],
                    [0.8, y]
                  ]}
                  opacity={OPACITY.dim}
                  strokeWidth={STROKE_SECONDARY}
                />
                <Label at={[0.55, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
                  {y}
                </Label>
              </g>
            ))}
            <Polyline points={pts(dS_heat)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
            <Dot x={2} y={dS_heat(2)} r={3} opacity={OPACITY.accent} />
            <Tex
              at={[4.4, 11]}
              tex={'\\Delta S = C_p\\ln\\!\\left(\\frac{T_2}{T_1}\\right)'}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
            />
            <Label
              at={[rMax / 2 + 0.3, 70]}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
              dy={-2}
            >
              CONSTANT-P HEATING
            </Label>
            <Tex
              at={[rMax + 0.4, 0]}
              anchor="end"
              tex={'\\dfrac{T_2}{T_1}'}
              size={FONT_TINY}
              opacity={OPACITY.dim}
              dy={14}
            />
          </Plot>
        </div>
      </div>
      <Readout>
        Both entropies are logarithmic in the ratio. Per mole at ratio 2: expansion ΔS = R·ln2 =
        5.76 J/K; heating ΔS = C_p·ln2 = 29.1·0.693 = 20.17 J/K (diatomic C_p = 7/2 R). Doubling
        volume or temperature gives a fixed entropy step
      </Readout>
    </div>
  )
}

// ATP as the energy currency: reaction coupling. Phosphorylating glucose is
// endergonic on its own, glucose + Pᵢ → glucose-6-phosphate, ΔG°′ = +13.8 kJ/mol
// (won't proceed). The cell couples it to ATP hydrolysis, ATP → ADP + Pᵢ,
// ΔG°′ = −30.5 kJ/mol (standard biochemistry). Summed, glucose + ATP →
// glucose-6-phosphate + ADP has ΔG°′ = +13.8 − 30.5 = −16.7 kJ/mol &lt; 0, so the
// coupled reaction is spontaneous. A ΔG bar accounting (values web-searched).
export function ATPCouplingViz() {
  const g1 = 13.8, // glucose phosphorylation (endergonic)
    g2 = -30.5, // ATP hydrolysis (exergonic)
    net = g1 + g2 // −16.7
  const W = 560,
    H = 300
  const y0 = 150,
    pxPerkJ = 2.9
  const bars = [
    { s: 'glucose→G6P', v: g1 },
    { s: 'ATP→ADP+Pᵢ', v: g2 },
    { s: 'coupled', v: net }
  ]
  const bw = 90,
    gap = 44,
    x0 = (W - (bw * 3 + gap * 2)) / 2
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={40}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <TexPx
          x={44}
          y={y0 - 6}
          anchor="start"
          tex={'\\Delta G^{\\circ\\prime} = 0'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {bars.map((b, i) => {
          const bx = x0 + i * (bw + gap)
          const top = b.v >= 0 ? y0 - b.v * pxPerkJ : y0
          const hgt = Math.abs(b.v) * pxPerkJ
          const emph = b.s === 'coupled'
          return (
            <g key={b.s}>
              <rect
                x={bx}
                y={top}
                width={bw}
                height={hgt}
                fill={FG}
                fillOpacity={emph ? 0.3 : b.v > 0 ? 0.1 : 0.16}
                stroke={FG}
                strokeOpacity={emph ? OPACITY.fg : OPACITY.dim}
                strokeWidth={emph ? STROKE_PRIMARY : STROKE_SECONDARY}
              />
              <text
                x={bx + bw / 2}
                y={b.v >= 0 ? top - 6 : top + hgt + 14}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {(b.v > 0 ? '+' : '') + b.v.toFixed(1)}
              </text>
              <text
                x={bx + bw / 2}
                y={b.v >= 0 ? top - 20 : top + hgt + 28}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.s}
              </text>
              <text
                x={bx + bw / 2}
                y={b.v >= 0 ? top - 32 : top + hgt + 40}
                fill={FG}
                opacity={OPACITY.faint}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.v > 0 ? 'endergonic' : 'exergonic'}
              </text>
            </g>
          )
        })}
        <TexPx
          x={W - 20}
          y={40}
          anchor="end"
          tex={'\\Delta G^{\\circ\\prime}\\ /\\ \\mathrm{kJ\\ mol^{-1}}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <text
          x={W / 2}
          y={H - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          coupling drives an uphill reaction downhill
        </text>
      </Canvas>
      <Readout>
        Glucose phosphorylation ΔG°′ = +13.8 kJ/mol won't go alone; ATP hydrolysis supplies −30.5.
        Summed, the coupled glucose + ATP → G6P + ADP has ΔG°′ = −16.7 kJ/mol &lt; 0 → spontaneous.
        ATP is the cell's energy currency
      </Readout>
    </div>
  )
}

// Experimental vs calculated lattice energy, the covalency gauge. The Born-Landé
// model (purely ionic point charges) predicts a lattice energy; the Born-Haber cycle
// gives the experimental value. When the crystal is nearly ideal-ionic the two agree;
// a large excess of the experimental value signals covalent character (polarisation /
// electron sharing). Values (kJ/mol): NaCl exp 787 / calc 766 (gap 21, ~ionic); AgCl
// exp 915 / calc 864 (gap 51, Ag⁺ polarises Cl⁻, significant covalency). Sources:
// Born-Haber NaCl 787; AgCl exp 915 / theo 864 (The Student Room table); LibreTexts
// (AgCl theoretical 50–150 kJ/mol below experimental).
export function LatticeCovalencyViz() {
  const salts = [
    { n: 'NaCl', exp: 787, calc: 766 },
    { n: 'AgCl', exp: 915, calc: 864 }
  ]
  const W = 560,
    H = 320,
    y0 = 250,
    uMax = 1000
  const yOf = u => y0 - (u / uMax) * (y0 - 40)
  const bw = 52,
    innerGap = 12,
    groupGap = 120,
    x0 = 110
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={70}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[200, 400, 600, 800, 1000].map(u => (
          <g key={u}>
            <line
              x1={66}
              y1={yOf(u)}
              x2={70}
              y2={yOf(u)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={62}
              y={yOf(u) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {u}
            </text>
          </g>
        ))}
        <TexPx
          x={70}
          y={30}
          anchor="start"
          tex={'\\text{lattice energy }|U|\\ /\\ \\mathrm{kJ\\ mol^{-1}}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={319}
        />
        {salts.map((s, i) => {
          const gx = x0 + i * (2 * bw + innerGap + groupGap)
          const gap = s.exp - s.calc
          return (
            <g key={s.n}>
              {/* experimental bar */}
              <rect
                x={gx}
                y={yOf(s.exp)}
                width={bw}
                height={y0 - yOf(s.exp)}
                fill={FG}
                fillOpacity={0.28}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              <text
                x={gx + bw / 2}
                y={yOf(s.exp) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {s.exp}
              </text>
              <text
                x={gx + bw / 2}
                y={y0 + 26}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                exp
              </text>
              {/* calculated bar */}
              <rect
                x={gx + bw + innerGap}
                y={yOf(s.calc)}
                width={bw}
                height={y0 - yOf(s.calc)}
                fill={FG}
                fillOpacity={0.1}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
                strokeDasharray="4 3"
              />
              <text
                x={gx + bw + innerGap + bw / 2}
                y={yOf(s.calc) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {s.calc}
              </text>
              <text
                x={gx + bw + innerGap + bw / 2}
                y={y0 + 26}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                calc
              </text>
              {/* group label + gap */}
              <text
                x={gx + bw + innerGap / 2}
                y={y0 + 42}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {s.n}
              </text>
              <text
                x={gx + bw + innerGap / 2}
                y={yOf(s.exp) - 22}
                fill={FG}
                opacity={OPACITY.accent}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {'gap ' + gap}
              </text>
            </g>
          )
        })}
        <text
          x={W / 2}
          y={H - 4}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          exp − calc gap = covalent character
        </text>
      </Canvas>
      <Readout>
        Born-Landé (ionic model) vs Born-Haber (experimental): NaCl 766 vs 787 (gap 21), nearly
        perfect ionic. AgCl 864 vs 915 (gap 51), Ag⁺ polarises Cl⁻, adding covalent bonding the
        point-charge model misses
      </Readout>
    </div>
  )
}

// Madelung constants, the geometry factor in lattice energy. The electrostatic
// lattice energy carries a dimensionless Madelung constant M set purely by the
// arrangement of ions (how the infinite alternating sum of ±1/r contributions
// converges). Standard values: NaCl (rock salt) 1.74756, CsCl 1.76267, ZnS (zinc
// blende) 1.63806, CaF₂ (fluorite) 2.51939. CsCl edges out NaCl (8-coordinate vs 6);
// fluorite is much larger because its 2:1 stoichiometry and higher ionic charges
// enter the sum. (Sources: standard crystallography tables; joteo/Kittel.)
export function MadelungConstantsViz() {
  const data = [
    { n: 'ZnS', sub: 'blende', M: 1.63806 },
    { n: 'NaCl', sub: 'rock salt', M: 1.74756 },
    { n: 'CsCl', sub: '8-coord', M: 1.76267 },
    { n: 'CaF₂', sub: 'fluorite', M: 2.51939 }
  ]
  const W = 560,
    H = 300,
    y0 = 230,
    mMax = 2.8
  const yOf = m => y0 - (m / mMax) * (y0 - 40)
  const bw = 66,
    gap = 34,
    x0 = 90
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={70}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0.5, 1.0, 1.5, 2.0, 2.5].map(m => (
          <g key={m}>
            <line
              x1={66}
              y1={yOf(m)}
              x2={70}
              y2={yOf(m)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={62}
              y={yOf(m) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {m.toFixed(1)}
            </text>
          </g>
        ))}
        <text
          x={70}
          y={30}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Madelung constant M (dimensionless)
        </text>
        {data.map((d, i) => {
          const bx = x0 + i * (bw + gap)
          const emph = d.n === 'CaF₂'
          return (
            <g key={d.n}>
              <rect
                x={bx}
                y={yOf(d.M)}
                width={bw}
                height={y0 - yOf(d.M)}
                fill={FG}
                fillOpacity={emph ? 0.28 : 0.14}
                stroke={FG}
                strokeOpacity={emph ? OPACITY.fg : OPACITY.dim}
                strokeWidth={emph ? STROKE_PRIMARY : STROKE_SECONDARY}
              />
              <text
                x={bx + bw / 2}
                y={yOf(d.M) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {d.M.toFixed(4)}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 16}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {d.n}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 30}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {d.sub}
              </text>
            </g>
          )
        })}
        <text
          x={W / 2}
          y={H - 4}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          lattice geometry sets M
        </text>
      </Canvas>
      <Readout>
        M comes only from ion arrangement: ZnS 1.638 &lt; NaCl 1.748 &lt; CsCl 1.763 (6→8
        coordination). CaF₂ 2.519 is far higher, its 2:1 stoichiometry and charges enter the
        alternating ±1/r sum. Same math as the 1D chain → 2ln2
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 05, CHEMICAL EQUILIBRIUM

// Oxygen binding to haemoglobin. The IDEALISED single-site (1:1, non-cooperative)
// model is a Langmuir isotherm θ = p/(p + P₅₀), a hyperbola half-saturating at the
// oxygen partial pressure P₅₀. For haemoglobin P₅₀ ≈ 26.6 torr (standard adult, pH
// 7.4, 37 °C, acutecaretesting/OpenAnesthesia). HONEST CAVEAT: real Hb is NOT 1:1, // its four hemes bind cooperatively, giving a SIGMOIDAL curve well fit by the Hill
// equation θ = pⁿ/(pⁿ + P₅₀ⁿ) with n ≈ 2.8 (the true 1:1 case is myoglobin, P₅₀ ≈
// 2.8 torr). The dashed sigmoid shows the real cooperative curve for contrast; both
// pass through θ = 0.5 at p = P₅₀ by construction.
export function HemoglobinSaturationViz() {
  const P50 = 26.6, // torr
    n = 2.8 // Hill coefficient (real Hb)
  const ideal = p => p / (p + P50) // 1:1 Langmuir
  const hill = p => Math.pow(p, n) / (Math.pow(p, n) + Math.pow(P50, n))
  const pMax = 100
  const pts = f => {
    const a = []
    for (let p = 0; p <= pMax + 1e-9; p += 1) a.push([p, f(p)])
    return a
  }
  const pv = 40,
    pa = 100 // venous / arterial pO₂ (torr)
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-4, pMax + 4]} yRange={[-0.06, 1.08]} width={560} height={320} pad={44}>
        {/* axes */}
        <Polyline
          points={[
            [0, 0],
            [pMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, 1.05]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0.25, 0.5, 0.75, 1.0].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-2, y],
                [0, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-4, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y.toFixed(2)}
            </Label>
          </g>
        ))}
        {[20, 40, 60, 80, 100].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, -0.02]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -0.03]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={12}>
              {x}
            </Label>
          </g>
        ))}
        {/* P50 guide at θ=0.5 */}
        <Polyline
          points={[
            [0, 0.5],
            [P50, 0.5]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="3 3"
        />
        <Polyline
          points={[
            [P50, 0],
            [P50, 0.5]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="3 3"
        />
        <Tex
          at={[P50 + 2, 0.12]}
          tex={'P_{50}=26.6'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* real cooperative Hill curve (dashed reference) */}
        <Polyline
          points={pts(hill)}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          dash="5 3"
        />
        {/* idealised 1:1 curve (primary) */}
        <Polyline points={pts(ideal)} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {/* venous / arterial markers on the idealised curve */}
        <Dot x={pv} y={ideal(pv)} r={3} opacity={OPACITY.accent} />
        <Dot x={pa} y={ideal(pa)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[pv, ideal(pv)]}
          tex={'\\text{venous}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={22}
        />
        <Tex
          at={[pa, ideal(pa)]}
          tex={'\\text{arterial}'}
          anchor="end"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-8}
        />
        <Tex
          at={[62, 0.44]}
          tex={'\\theta = \\dfrac{p}{p+P_{50}}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[70, 0.92]}
          tex={'\\text{real (Hill } n{=}2.8)'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[pMax / 2, 1.08]}
          anchor="middle"
          tex={'\\text{IDEALISED 1:1 }\\mathrm{O_2}\\ \\text{BINDING}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[-2, 1.05]}
          anchor="start"
          tex={'\\theta\\ (\\text{saturation})'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-2}
        />
        <Tex
          at={[pMax + 4, 0]}
          anchor="end"
          tex={'p_{\\mathrm{O_2}}\\ /\\ \\mathrm{torr}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={26}
        />
      </Plot>
      <Readout>
        Idealised 1:1: θ = p/(p+P₅₀), P₅₀ = 26.6 torr → θ(venous 40) = 0.60, θ(arterial 100) = 0.79.
        HONEST NOTE: real Hb is NOT 1:1-4 cooperative hemes give a SIGMOIDAL Hill curve (n ≈ 2.8,
        dashed); true 1:1 is myoglobin (P₅₀ ≈ 2.8 torr)
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 06, ACID–BASE & AQUEOUS EQUILIBRIA

// Conjugate pair strength: pKa + pKb = 14. For any conjugate acid/base pair in water
// at 25 °C, Ka·Kb = Kw = 10⁻¹⁴, so pKa + pKb = 14 exactly. The stronger the acid (low
// pKa) the weaker its conjugate base (high pKb), the ladder shows the split of a
// fixed length-14 bar. Real pKa (25 °C, standard tables): HF 3.17, CH₃COOH 4.76,
// H₂CO₃ 6.35, H₂PO₄⁻ 7.20, NH₄⁺ 9.25, HCO₃⁻ 10.33. Each pKb is COMPUTED as 14 − pKa.
export function KaPkbLadderViz() {
  const acids = [
    { a: 'HF', b: 'F⁻', pKa: 3.17 },
    { a: 'CH₃COOH', b: 'CH₃COO⁻', pKa: 4.76 },
    { a: 'H₂CO₃', b: 'HCO₃⁻', pKa: 6.35 },
    { a: 'H₂PO₄⁻', b: 'HPO₄²⁻', pKa: 7.2 },
    { a: 'NH₄⁺', b: 'NH₃', pKa: 9.25 },
    { a: 'HCO₃⁻', b: 'CO₃²⁻', pKa: 10.33 }
  ]
  const W = 560,
    H = 320
  const x0 = 120,
    x1 = 440,
    y0 = 60,
    dy = 40
  const xOf = pk => x0 + (pk / 14) * (x1 - x0)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* scale header */}
        <text
          x={x0}
          y={40}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          pKa 0
        </text>
        <text
          x={x1}
          y={40}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          14
        </text>
        <text
          x={(x0 + x1) / 2}
          y={40}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          ← acid strength · pKa | pKb · base strength →
        </text>
        {acids.map((s, i) => {
          const y = y0 + i * dy
          const xs = xOf(s.pKa)
          const pKb = 14 - s.pKa
          return (
            <g key={s.a}>
              {/* full bar 0..14 */}
              <line
                x1={x0}
                y1={y}
                x2={x1}
                y2={y}
                stroke={FG}
                strokeOpacity={OPACITY.faint}
                strokeWidth={STROKE_HAIR}
              />
              {/* acid segment (0..pKa) */}
              <line
                x1={x0}
                y1={y}
                x2={xs}
                y2={y}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              {/* split marker */}
              <circle cx={xs} cy={y} r={3} fill={FG} opacity={OPACITY.fg} />
              {/* labels */}
              <text
                x={x0 - 8}
                y={y + 3}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="end"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {s.a}
              </text>
              <text
                x={x1 + 8}
                y={y + 3}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="start"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {s.b}
              </text>
              <text
                x={xs}
                y={y - 6}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {'pKa ' + s.pKa.toFixed(2) + ' · pKb ' + pKb.toFixed(2)}
              </text>
            </g>
          )
        })}
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={'K_a\\cdot K_b = K_w \\Rightarrow \\mathrm{p}K_a + \\mathrm{p}K_b = 14'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={297}
        />
      </Canvas>
      <Readout>
        For every conjugate pair Ka·Kb = Kw = 10⁻¹⁴, so pKa + pKb = 14. HF (pKa 3.17) is the
        strongest acid here → F⁻ the weakest base (pKb 10.83); HCO₃⁻ (pKa 10.33) weakest acid →
        CO₃²⁻ strongest base (pKb 3.67). The split point slides right as the acid weakens
      </Readout>
    </div>
  )
}

// Very dilute strong acid, the autoprotolysis correction. Naively pH = −log C, but
// at low concentration the H⁺ from water (Kw) is no longer negligible. The exact
// charge balance [H⁺] = C + [OH⁻] = C + Kw/[H⁺] gives [H⁺] = (C + √(C² + 4Kw))/2,
// so pH → 7 as C → 0 (a strong acid can never make water BASIC, only approach
// neutral). The naive line pH = −log C wrongly climbs past 7. Kw = 1.0×10⁻¹⁴ (25 °C).
export function DiluteAutoprotolysisViz() {
  const Kw = 1e-14
  const Hexact = C => (C + Math.sqrt(C * C + 4 * Kw)) / 2
  const pCmax = 9
  const exactPts = [],
    naivePts = []
  for (let pC = 0; pC <= pCmax + 1e-9; pC += 0.1) {
    const C = Math.pow(10, -pC)
    exactPts.push([pC, -Math.log10(Hexact(C))])
    naivePts.push([pC, pC])
  }
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.4, pCmax + 0.4]} yRange={[-0.4, 9.4]} width={560} height={320} pad={44}>
        <Polyline
          points={[
            [0, 0],
            [pCmax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, 9]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[2, 4, 6, 7, 8].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-0.3, y],
                [0, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.45, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {[2, 4, 6, 8].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, -0.25]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -0.35]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={12}>
              {x}
            </Label>
          </g>
        ))}
        {/* neutral guide */}
        <Polyline
          points={[
            [0, 7],
            [pCmax, 7]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="3 3"
        />
        <Tex
          at={[1.4, 7]}
          tex={'\\text{pH}=7'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-4}
        />
        {/* naive line */}
        <Polyline
          points={naivePts}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          dash="5 3"
        />
        <Tex
          at={[7.4, 8.4]}
          tex={'\\text{naive } -\\log C'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* exact curve */}
        <Polyline points={exactPts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Tex
          at={[6.2, 6.1]}
          tex={'\\text{exact (charge balance)}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[pCmax / 2, 9.4]}
          anchor="middle"
          tex={'\\text{DILUTE STRONG ACID: pH vs }-\\log C'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[pCmax + 0.4, 0]}
          anchor="end"
          tex={'-\\log C\\ (\\text{dilution}\\to)'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={26}
        />
        <Label at={[-0.2, 9]} anchor="start" size={FONT_TINY} opacity={OPACITY.dim} dy={-2}>
          pH
        </Label>
      </Plot>
      <Readout>
        Below ~10⁻⁶ M the water's own H⁺ matters: exact [H⁺] = (C + √(C² + 4Kw))/2 gives pH 6.79 at
        10⁻⁷ M and → 7 as C → 0, while naive −log C wrongly exceeds 7. A strong acid can approach
        neutral but never turn water basic
      </Readout>
    </div>
  )
}

// Salt hydrolysis, the four-case map. A salt's solution pH is set by which parent
// acid/base is weak (the weak partner's conjugate hydrolyses water): strong acid +
// strong base → NEUTRAL (neither ion hydrolyses, e.g. NaCl, pH 7); strong acid + weak
// base → ACIDIC (the conjugate acid, e.g. NH₄Cl, NH₄⁺ donates H⁺, pH < 7); weak acid
// + strong base → BASIC (the conjugate base, e.g. CH₃COONa, CH₃COO⁻ grabs H⁺, pH > 7);
// weak acid + weak base → depends on the relative Ka/Kb (e.g. CH₃COONH₄ ≈ neutral
// since Ka(NH₄⁺) ≈ Kb(CH₃COO⁻)). A 2×2 decision map.
export function SaltHydrolysisMapViz() {
  const W = 560,
    H = 320
  const cells = [
    { acid: 'strong', base: 'strong', salt: 'NaCl', res: 'NEUTRAL', ph: 'pH ≈ 7' },
    { acid: 'strong', base: 'weak', salt: 'NH₄Cl', res: 'ACIDIC', ph: 'pH < 7' },
    { acid: 'weak', base: 'strong', salt: 'CH₃COONa', res: 'BASIC', ph: 'pH > 7' },
    { acid: 'weak', base: 'weak', salt: 'CH₃COONH₄', res: '≈ NEUTRAL', ph: 'Ka ≈ Kb' }
  ]
  const gx = 170,
    gy = 90,
    cw = 170,
    ch = 90
  const pos = [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1]
  ] // [col(base s/w), row(acid s/w)] mapping
  // grid: columns = base strong/weak, rows = acid strong/weak
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* axis headers */}
        <text
          x={gx + cw / 2}
          y={gy - 30}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          strong base
        </text>
        <text
          x={gx + cw + cw / 2}
          y={gy - 30}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          weak base
        </text>
        <text
          x={gx - 16}
          y={gy + ch / 2}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          strong acid
        </text>
        <text
          x={gx - 16}
          y={gy + ch + ch / 2}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          weak acid
        </text>
        {cells.map(c => {
          const col = c.base === 'strong' ? 0 : 1
          const row = c.acid === 'strong' ? 0 : 1
          const bx = gx + col * cw,
            by = gy + row * ch
          const basic = c.res === 'BASIC'
          const acidic = c.res === 'ACIDIC'
          const fillO = basic ? 0.2 : acidic ? 0.1 : 0.04
          return (
            <g key={c.salt}>
              <rect
                x={bx}
                y={by}
                width={cw - 8}
                height={ch - 8}
                fill={FG}
                fillOpacity={fillO}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={bx + (cw - 8) / 2}
                y={by + 30}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_LABEL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {c.res}
              </text>
              <text
                x={bx + (cw - 8) / 2}
                y={by + 50}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {c.salt}
              </text>
              <text
                x={bx + (cw - 8) / 2}
                y={by + 66}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {c.ph}
              </text>
            </g>
          )
        })}
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          the WEAK partner's conjugate hydrolyses water
        </text>
      </Canvas>
      <Readout>
        Salt pH is set by the weak parent: SA+SB neutral (NaCl); SA+WB acidic (NH₄Cl, NH₄⁺ donates
        H⁺); WA+SB basic (CH₃COONa, CH₃COO⁻ takes H⁺); WA+WB depends on Ka vs Kb (CH₃COONH₄ ≈
        neutral)
      </Readout>
    </div>
  )
}

// Salt pH vs parent-acid strength. For the salt of a weak acid (its conjugate base
// B⁻ at concentration C), [OH⁻] = √(Kb·C) with Kb = Kw/Ka, so pH rises as the parent
// acid weakens (larger pKa → stronger conjugate base). For 0.1 M salt this gives the
// closed form pH = 6.5 + ½·pKa (since pOH = ½(pKb − log C), pKb = 14 − pKa). Computed
// for real conjugate bases: fluoride (parent pKa 3.17) → pH 8.08; acetate (4.76) →
// 8.88; cyanide (9.21) → 11.1. Kw = 1.0×10⁻¹⁴, C = 0.1 M. (Approx. valid while
// hydrolysis is slight; breaks down for very weak acids where it overstates pH.)
export function SaltPHParentStrengthViz() {
  const C = 0.1,
    Kw = 1e-14
  // pH of 0.1 M conjugate-base salt vs parent-acid pKa
  const pHof = pKa => {
    const Ka = Math.pow(10, -pKa)
    const Kb = Kw / Ka
    const OH = Math.sqrt(Kb * C)
    return 14 + Math.log10(OH) // 14 − pOH = 14 + log[OH]
  }
  const marks = [
    { n: 'F⁻', pKa: 3.17 },
    { n: 'CH₃COO⁻', pKa: 4.76 },
    { n: 'HCO₃⁻*', pKa: 6.35 },
    { n: 'CN⁻', pKa: 9.21 }
  ]
  const pKaMin = 2,
    pKaMax = 10
  const pts = []
  for (let p = pKaMin; p <= pKaMax + 1e-9; p += 0.1) pts.push([p, pHof(p)])
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[pKaMin - 0.5, pKaMax + 0.5]}
        yRange={[6.5, 12]}
        width={560}
        height={320}
        pad={46}
      >
        <Polyline
          points={[
            [pKaMin - 0.5, 7],
            [pKaMax + 0.5, 7]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="3 3"
        />
        <Tex
          at={[pKaMin, 7]}
          tex={'\\text{neutral}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-4}
        />
        {[8, 9, 10, 11].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [pKaMin - 0.5, y],
                [pKaMin - 0.2, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[pKaMin - 0.6, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {[2, 4, 6, 8, 10].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 6.5],
                [x, 6.62]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, 6.5]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={14}>
              {x}
            </Label>
          </g>
        ))}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {marks.map(m => (
          <g key={m.n}>
            <Dot x={m.pKa} y={pHof(m.pKa)} r={3} opacity={OPACITY.accent} />
            <Label
              at={[m.pKa, pHof(m.pKa)]}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
              dy={-8}
            >
              {m.n}
            </Label>
          </g>
        ))}
        <Tex
          at={[6.6, 8.0]}
          tex={'\\text{pH}=6.5+\\tfrac{1}{2}pK_a'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Label
          at={[(pKaMin + pKaMax) / 2, 12]}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        >
          0.1 M SALT pH vs PARENT-ACID pKa
        </Label>
        <Label at={[pKaMax + 0.5, 6.5]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim} dy={26}>
          parent-acid pKa (weaker →)
        </Label>
        <Label
          at={[pKaMin - 0.4, 12]}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-2}
        >
          salt pH
        </Label>
      </Plot>
      <Readout>
        [OH⁻] = √(Kb·C), Kb = Kw/Ka → for 0.1 M salt pH = 6.5 + ½·pKa. Weaker parent acid = stronger
        conjugate base = more basic salt: fluoride 8.08, acetate 8.88, cyanide 11.1. *HCO₃⁻ shown at
        its own pKa; carbonate needs full speciation
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 07, REDOX & ELECTROCHEMISTRY

// Corrosion as a short-circuited galvanic cell. Under a water droplet on iron, two
// regions form on the SAME piece of metal: an ANODIC site where iron oxidises,
// Fe → Fe²⁺ + 2e⁻, and a CATHODIC site (usually the more aerated edge) where oxygen
// is reduced, O₂ + 2H₂O + 4e⁻ → 4OH⁻. Electrons travel through the metal, ions
// through the droplet; the Fe²⁺ and OH⁻ meet and are air-oxidised to hydrated iron(III)
// oxide, rust, Fe₂O₃·xH₂O. An honest labelled micro-cell schematic (half-reactions
// standard; overall a spontaneous galvanic process the metal powers itself).
export function CorrosionCellViz() {
  const W = 560,
    H = 320
  const surfY = 210,
    dropTop = 150
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* iron block */}
        <rect
          x={40}
          y={surfY}
          width={W - 80}
          height={60}
          fill={FG}
          fillOpacity={0.1}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={70}
          y={surfY + 52}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_SMALL}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY, letterSpacing: '0.1em' }}
        >
          IRON (Fe)
        </text>
        {/* water droplet (arc over surface) */}
        <path
          d={`M 130 ${surfY} Q ${W / 2} ${dropTop - 40} ${W - 130} ${surfY} Z`}
          fill={FG}
          fillOpacity={0.05}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={W / 2}
          y={dropTop - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          water droplet (electrolyte)
        </text>
        {/* anodic site (centre, less O₂) */}
        <circle cx={W / 2} cy={surfY} r={5} fill={FG} opacity={OPACITY.fg} />
        <TexPx
          x={W / 2}
          y={surfY + 78}
          anchor="middle"
          tex={'\\text{ANODE }(-)\\text{: }\\mathrm{Fe \\to Fe^{2+} + 2e^-}'}
          size={FONT_TINY}
          opacity={OPACITY.fg}
          width={286}
        />
        {/* cathodic sites (edges, more O₂) */}
        {[170, W - 170].map((cx, i) => (
          <g key={i}>
            <circle cx={cx} cy={surfY} r={4} fill={FG} opacity={OPACITY.accent} />
          </g>
        ))}
        <text
          x={170}
          y={surfY + 96}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          CATHODE (+)
        </text>
        <text
          x={W - 170}
          y={surfY + 96}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          CATHODE (+)
        </text>
        <TexPx
          x={W / 2}
          y={surfY + 96}
          anchor="middle"
          tex={'\\mathrm{O_2 + 2H_2O + 4e^- \\to 4OH^-}'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
          width={242}
        />
        {/* electron flow through metal */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={W / 2 - 12} y1={surfY + 20} x2={190} y2={surfY + 20} />
          <polyline points={`198,${surfY + 15} 190,${surfY + 20} 198,${surfY + 25}`} />
          <line x1={W / 2 + 12} y1={surfY + 20} x2={W - 190} y2={surfY + 20} />
          <polyline
            points={`${W - 198},${surfY + 15} ${W - 190},${surfY + 20} ${W - 198},${surfY + 25}`}
          />
        </g>
        <TexPx
          x={W / 2}
          y={surfY + 34}
          anchor="middle"
          tex={'\\mathrm{e^-}\\ \\text{through metal}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* rust deposit */}
        <path
          d={`M ${W / 2 - 26} ${surfY} q 26 -22 52 0`}
          fill={FG}
          fillOpacity={0.28}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <TexPx
          x={W / 2}
          y={dropTop + 40}
          anchor="middle"
          tex={'\\mathrm{Fe^{2+} + OH^-}\\to\\ldots\\to\\text{rust }\\mathrm{Fe_2O_3\\cdot xH_2O}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={352}
        />
        <text
          x={W / 2}
          y={30}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          corrosion = a short-circuited galvanic cell
        </text>
      </Canvas>
      <Readout>
        Rusting is electrochemical: anodic patches oxidise Fe → Fe²⁺ + 2e⁻; aerated cathodic patches
        reduce O₂ + 2H₂O + 4e⁻ → 4OH⁻; the ions combine and air-oxidise to rust Fe₂O₃·xH₂O. The
        metal short-circuits its own galvanic cell, why moisture + oxygen are both required
      </Readout>
    </div>
  )
}

// Concentration cell, voltage from a concentration difference alone. Two identical
// electrodes (here Cu | Cu²⁺) dip into the SAME solution at two concentrations, so
// E° = 0; the whole EMF comes from the Nernst term. The dilute side is the anode, the
// concentrated side the cathode: E = (0.0592/n)·log([conc]/[dil]) at 298 K. The cell
// runs until the concentrations equalise (E → 0). Worked for Cu²⁺, n = 2: a 100-fold
// ratio gives E = (0.0592/2)·log(100) = 0.0296 × 2 = 0.0592 V. Plotted from the
// Nernst equation (0.0592 V/decade at 298 K, standard).
export function ConcentrationCellViz() {
  const n = 2,
    slope = 0.0592 / n // 0.0296 V per decade
  const E = ratio => slope * Math.log10(ratio) // [conc]/[dil]
  const rMaxLog = 5 // up to 10^5 ratio
  const pts = []
  for (let lr = 0; lr <= rMaxLog + 1e-9; lr += 0.05) pts.push([lr, E(Math.pow(10, lr))])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.3, rMaxLog + 0.3]} yRange={[-0.02, 0.16]} width={560} height={310} pad={48}>
        <Polyline
          points={[
            [0, 0],
            [rMaxLog, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, -0.02],
            [0, 0.16]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0.05, 0.1, 0.15].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-0.3, y],
                [-0.1, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.35, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y.toFixed(2)}
            </Label>
          </g>
        ))}
        {[1, 2, 3, 4, 5].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, -0.006]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, -0.01]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={12}>
              {x}
            </Label>
          </g>
        ))}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Dot x={2} y={E(100)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[2, E(100)]}
          tex={'0.0592\\,\\text{V}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dx={6}
          dy={-4}
        />
        <Tex
          at={[3.4, 0.045]}
          tex={'E=\\tfrac{0.0592}{n}\\log\\tfrac{[conc]}{[dil]}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[1.0, 0.12]}
          tex={'E^{\\circ}=0'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[rMaxLog / 2, 0.16]}
          anchor="middle"
          tex={'\\mathrm{Cu}\\ \\text{CONCENTRATION CELL }(n=2)'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-2}
        />
        <Tex
          at={[rMaxLog + 0.3, 0]}
          anchor="end"
          tex={'\\log\\!\\left(\\frac{\\mathrm{[conc]}}{\\mathrm{[dil]}}\\right)'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={26}
        />
        <Label at={[-0.2, 0.15]} anchor="start" size={FONT_TINY} opacity={OPACITY.dim} dy={-2}>
          E / V
        </Label>
      </Plot>
      <Readout>
        Identical Cu|Cu²⁺ half-cells, E° = 0: all the voltage is the Nernst term E =
        (0.0592/2)·log([conc]/[dil]). A 100-fold ratio → 0.0592 V; the cell discharges as the two
        concentrations equalise (E → 0). Concentration difference alone does electrical work
      </Readout>
    </div>
  )
}

// Linking E° to the equilibrium constant: ln K = nFE°/RT = nE°/0.0257 at 298 K
// (RT/F = 0.02569 V). A positive standard cell potential means a large K, the
// reaction runs essentially to completion. The line ln K vs E° (fixed n = 2) has
// slope n/0.0257 = 77.9 V⁻¹. Worked for the Daniell cell, E° = +1.10 V:
// ln K = 2×1.10/0.0257 = 85.6 → log₁₀K = 85.6/2.303 = 37.2 → K ≈ 1.6×10³⁷
// (consistent with the Nernst viz's log K = 37.2). Computed from the equation.
export function LnKvsEViz() {
  const n = 2,
    RTF = 0.025693 // V (RT/F at 298.15 K)
  const lnK = E0 => (n * E0) / RTF
  const eMin = -0.6,
    eMax = 1.4
  const pts = []
  for (let e = eMin; e <= eMax + 1e-9; e += 0.02) pts.push([e, lnK(e)])
  const yMax = lnK(eMax)
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[eMin - 0.1, eMax + 0.1]}
        yRange={[lnK(eMin) - 8, yMax + 8]}
        width={560}
        height={320}
        pad={48}
      >
        <Polyline
          points={[
            [eMin, 0],
            [eMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, lnK(eMin) - 8],
            [0, yMax + 8]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[-40, 0, 40, 80].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [eMin - 0.1, y],
                [eMin - 0.02, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[eMin - 0.14, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {[-0.5, 0.5, 1.0].map(x => (
          <g key={x}>
            <Label at={[x, 0]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={16}>
              {x.toFixed(1)}
            </Label>
          </g>
        ))}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {/* Daniell mark */}
        <Dot x={1.1} y={lnK(1.1)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[1.1, lnK(1.1)]}
          tex={'\\text{Daniell: }\\ln K=85.6'}
          anchor="end"
          size={FONT_TINY}
          opacity={OPACITY.accent}
          dy={-6}
        />
        <Tex
          at={[-0.28, 55]}
          tex={'\\ln K=\\dfrac{nE^{\\circ}}{0.0257}'}
          anchor="middle"
          size={FONT_LABEL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[(eMin + eMax) / 2 + 0.2, yMax + 8]}
          anchor="middle"
          tex={'\\ln K\\ \\text{vs }E^\\circ\\ (n=2)'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-2}
        />
        <Tex
          at={[eMax + 0.1, 0]}
          anchor="end"
          tex={'E^\\circ\\ /\\ \\mathrm{V}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-8}
        />
        <Tex
          at={[0, yMax + 8]}
          anchor="start"
          tex={'\\ln K'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-2}
          dx={6}
        />
      </Plot>
      <Readout>
        ln K = nE°/0.0257 (RT/F = 0.0257 V, 298 K): E° &gt; 0 ⇒ K &gt; 1, spontaneous. Daniell E° =
        +1.10 V, n = 2 → ln K = 85.6, log₁₀K = 37.2, K ≈ 1.6×10³⁷, the reaction runs essentially to
        completion
      </Readout>
    </div>
  )
}

// ΔG = −nFE° — the sign map that unifies electrochemistry and thermodynamics. On an
// E° number line, F = 96485 C/mol converts cell potential to free energy: E° > 0 ⇒
// ΔG° < 0 (spontaneous, a galvanic cell delivers work); E° = 0 ⇒ ΔG° = 0
// (equilibrium, a dead battery); E° < 0 ⇒ ΔG° > 0 (non-spontaneous, needs an external
// source, electrolysis). Worked markers: Daniell +1.10 V (ΔG° = −2·F·1.10 = −212
// kJ/mol) and water electrolysis −1.23 V (ΔG° = +237 kJ/mol). Computed from ΔG=−nFE.
export function DeltaGSignMapViz() {
  const F = 96485
  const W = 560,
    H = 300
  const x0 = 60,
    x1 = W - 40,
    axisY = 150
  const eMin = -1.6,
    eMax = 1.6
  const xOf = e => x0 + ((e - eMin) / (eMax - eMin)) * (x1 - x0)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* zone shading */}
        <rect
          x={xOf(0)}
          y={axisY - 40}
          width={xOf(eMax) - xOf(0)}
          height={80}
          fill={FG}
          fillOpacity={0.1}
        />
        <rect
          x={xOf(eMin)}
          y={axisY - 40}
          width={xOf(0) - xOf(eMin)}
          height={80}
          fill={FG}
          fillOpacity={0.03}
        />
        {/* axis */}
        <line
          x1={xOf(eMin)}
          y1={axisY}
          x2={xOf(eMax)}
          y2={axisY}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[-1.5, -1.0, -0.5, 0, 0.5, 1.0, 1.5].map(e => (
          <g key={e}>
            <line
              x1={xOf(e)}
              y1={axisY - 4}
              x2={xOf(e)}
              y2={axisY + 4}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={xOf(e)}
              y={axisY + 18}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {e.toFixed(1)}
            </text>
          </g>
        ))}
        <TexPx
          x={xOf(0)}
          y={axisY - 48}
          anchor="middle"
          tex={'E^\\circ=0\\ \\cdot\\ \\Delta G^\\circ=0\\ \\cdot\\ \\text{equilibrium}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={330}
        />
        {/* zone labels */}
        <TexPx
          x={xOf(0.85)}
          y={axisY - 20}
          anchor="middle"
          tex={'E^\\circ > 0'}
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <TexPx
          x={xOf(0.85)}
          y={axisY - 6}
          anchor="middle"
          tex={'\\Delta G^\\circ < 0\\ \\cdot\\ \\text{spontaneous}'}
          size={FONT_TINY}
          opacity={OPACITY.fg}
          width={231}
        />
        <text
          x={xOf(0.85)}
          y={axisY + 60}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          galvanic (delivers work)
        </text>
        <TexPx
          x={xOf(-0.85)}
          y={axisY - 20}
          anchor="middle"
          tex={'E^\\circ < 0'}
          size={FONT_SMALL}
          opacity={OPACITY.dim}
        />
        <TexPx
          x={xOf(-0.85)}
          y={axisY - 6}
          anchor="middle"
          tex={'\\Delta G^\\circ > 0\\ \\cdot\\ \\text{non-spont.}'}
          size={9}
          opacity={OPACITY.dim}
          width={220}
        />
        <text
          x={xOf(-0.85)}
          y={axisY + 60}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          needs electrolysis
        </text>
        {/* markers */}
        <g>
          <line
            x1={xOf(1.1)}
            y1={axisY}
            x2={xOf(1.1)}
            y2={axisY - 40}
            stroke={FG}
            strokeOpacity={OPACITY.accent}
            strokeWidth={STROKE_EMPHASIS}
          />
          <text
            x={xOf(1.1)}
            y={axisY - 44}
            fill={FG}
            opacity={OPACITY.accent}
            fontSize={FONT_TINY}
            textAnchor="middle"
            style={{ fontFamily: FONT_FAMILY }}
          >
            Daniell +1.10
          </text>
          <text
            x={xOf(1.1)}
            y={axisY + 34}
            fill={FG}
            opacity={OPACITY.dim}
            fontSize={FONT_TINY}
            textAnchor="middle"
            style={{ fontFamily: FONT_FAMILY }}
          >
            −212 kJ/mol
          </text>
          <line
            x1={xOf(-1.23)}
            y1={axisY}
            x2={xOf(-1.23)}
            y2={axisY - 40}
            stroke={FG}
            strokeOpacity={OPACITY.dim}
            strokeWidth={STROKE_EMPHASIS}
          />
          <TexPx
            x={xOf(-1.23)}
            y={axisY - 44}
            anchor="middle"
            tex={'\\mathrm{H_2O}\\ -1.23'}
            size={FONT_TINY}
            opacity={OPACITY.dim}
          />
          <text
            x={xOf(-1.23)}
            y={axisY + 34}
            fill={FG}
            opacity={OPACITY.dim}
            fontSize={FONT_TINY}
            textAnchor="middle"
            style={{ fontFamily: FONT_FAMILY }}
          >
            +237 kJ/mol
          </text>
        </g>
        <TexPx
          x={W / 2}
          y={H - 6}
          anchor="middle"
          tex={'\\Delta G^\\circ = -nFE^\\circ'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Canvas>
      <Readout>
        ΔG° = −nFE° (F = 96485 C/mol) ties potential to spontaneity: E° &gt; 0 → ΔG° &lt; 0 galvanic
        (Daniell +1.10 V → −212 kJ/mol); E° &lt; 0 → ΔG° &gt; 0 needs electrolysis (splitting water
        −1.23 V → +237 kJ/mol); E° = 0 at equilibrium
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 08, COORDINATION & SPECTROSCOPY

// Δ_o from the d–d absorption band: Δ_o = N_A·h·c·ν̃. The crystal-field splitting is
// read directly off the wavelength of the d–d band. Converting: ν̃(cm⁻¹) = 10⁷/λ(nm)
// and Δ_o(kJ/mol) = N_A·h·c·ν̃ = 0.011963·ν̃(cm⁻¹). The curve is the exact reciprocal
// relation ν̃ = 10⁷/λ; the classic marker is [Ti(H₂O)₆]³⁺, whose single d–d band at
// λ_max ≈ 493 nm gives ν̃ = 20,300 cm⁻¹ ⇒ Δ_o ≈ 243 kJ/mol (standard inorganic texts;
// N_A·h·c = 11.963 J·cm/mol). Computed conversion, not a sketch.
export function CrystalFieldWavelengthViz() {
  const nubar = lam => 1e7 / lam // cm⁻¹
  const lamMin = 350,
    lamMax = 750
  const pts = []
  for (let l = lamMin; l <= lamMax + 1e-9; l += 4) pts.push([l, nubar(l)])
  const yMax = nubar(lamMin),
    yMin = nubar(lamMax)
  const tiLam = 493
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[lamMin - 20, lamMax + 20]}
        yRange={[yMin - 2000, yMax + 2000]}
        width={560}
        height={320}
        pad={54}
      >
        <Polyline
          points={[
            [lamMin, yMin - 2000],
            [lamMin, yMax + 2000]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [lamMin, yMin - 2000],
            [lamMax, yMin - 2000]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[14000, 18000, 22000, 26000].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [lamMin - 20, y],
                [lamMin, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[lamMin - 26, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y / 1000 + 'k'}
            </Label>
          </g>
        ))}
        {[400, 500, 600, 700].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, yMin - 2000],
                [x, yMin - 2800]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label
              at={[x, yMin - 2000]}
              anchor="middle"
              size={FONT_TINY}
              opacity={OPACITY.dim}
              dy={16}
            >
              {x}
            </Label>
          </g>
        ))}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        {/* Ti marker */}
        <Polyline
          points={[
            [tiLam, yMin - 2000],
            [tiLam, nubar(tiLam)]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="3 3"
        />
        <Polyline
          points={[
            [lamMin, nubar(tiLam)],
            [tiLam, nubar(tiLam)]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="3 3"
        />
        <Dot x={tiLam} y={nubar(tiLam)} r={3.5} opacity={OPACITY.accent} />
        <Tex
          at={[tiLam + 10, nubar(tiLam) + 1400]}
          tex={'[\\text{Ti}(\\text{H}_2\\text{O})_6]^{3+}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <Tex
          at={[(lamMin + lamMax) / 2, yMax + 2000]}
          anchor="middle"
          tex={
            '\\Delta_{\\mathrm{o}} = N_A hc\\tilde{\\nu}\\ ;\\ \\tilde{\\nu} = \\dfrac{10^7}{\\lambda}'
          }
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-2}
        />
        <Tex
          at={[lamMax + 20, yMin - 2000]}
          anchor="end"
          tex={'\\lambda_{\\max}\\ /\\ \\mathrm{nm}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={30}
        />
        <Tex
          at={[lamMin, yMax + 2000]}
          anchor="start"
          tex={'\\tilde{\\nu}\\ /\\ \\mathrm{cm^{-1}}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-2}
          dx={-40}
        />
      </Plot>
      <Readout>
        Δ_o is read off the d–d band: ν̃ = 10⁷/λ, Δ_o(kJ/mol) = 0.011963·ν̃. [Ti(H₂O)₆]³⁺ absorbs at
        λ_max ≈ 493 nm → ν̃ = 20,300 cm⁻¹ → Δ_o ≈ 243 kJ/mol. The green colour is the transmitted
        complement of the absorbed blue-green
      </Readout>
    </div>
  )
}

// [Ti(H₂O)₆]³⁺, the textbook single d–d band. A d¹ ion has just one d–d transition
// (t₂g¹ → e_g¹), so its spectrum is ONE broad band. The band is not symmetric: it
// carries a low-energy SHOULDER because the excited e_g¹ state is Jahn-Teller
// unstable and splits (~2,000 cm⁻¹). Modelled here as the sum of two Gaussians at
// the measured maxima, main 20,300 cm⁻¹ (493 nm) + shoulder 17,400 cm⁻¹ (575 nm), // a REPRESENTATIVE band envelope at the real λ_max (standard inorganic texts), not a
// first-principles line shape.
export function TiWaterBandViz() {
  const main = { c: 20300, w: 2600, a: 1.0 }
  const shoulder = { c: 17400, w: 2200, a: 0.45 }
  const g = (x, p) => p.a * Math.exp(-((x - p.c) * (x - p.c)) / (2 * p.w * p.w))
  const abs = x => g(x, main) + g(x, shoulder)
  const xMin = 12000,
    xMax = 28000
  const pts = []
  for (let v = xMin; v <= xMax + 1e-9; v += 150) pts.push([v, abs(v)])
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[xMin - 500, xMax + 500]}
        yRange={[-0.08, 1.2]}
        width={560}
        height={320}
        pad={48}
      >
        <Polyline
          points={[
            [xMin, 0],
            [xMax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [xMin, 0],
            [xMin, 1.15]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[14000, 18000, 22000, 26000].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, -0.03]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, 0]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={14}>
              {x / 1000 + 'k'}
            </Label>
          </g>
        ))}
        {/* component gaussians (faint) */}
        <Polyline
          points={pts.map(([v]) => [v, g(v, main)])}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="4 3"
        />
        <Polyline
          points={pts.map(([v]) => [v, g(v, shoulder)])}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="4 3"
        />
        {/* full envelope */}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Polyline
          points={[
            [main.c, 0],
            [main.c, abs(main.c)]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="3 3"
        />
        <Tex
          at={[main.c, abs(main.c)]}
          tex={'20{,}300'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.fg}
          dy={-6}
        />
        <Tex
          at={[shoulder.c - 300, g(shoulder.c, shoulder) + 0.28]}
          tex={'\\text{J-T shoulder}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[(xMin + xMax) / 2, 1.2]}
          anchor="middle"
          tex={'\\mathrm{[Ti(H_2O)_6]^{3+}}\\ d^1\\ \\text{SINGLE }d\\text{–}d\\text{ BAND}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[xMax, 0]}
          anchor="end"
          tex={'\\tilde{\\nu}\\ /\\ \\mathrm{cm^{-1}}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={30}
        />
        <Label at={[xMin, 1.12]} anchor="start" size={FONT_TINY} opacity={OPACITY.dim} dy={-2}>
          absorbance (arb.)
        </Label>
      </Plot>
      <Readout>
        A d¹ ion has one d–d transition (t₂g → e_g) → ONE band. The asymmetry is real: the e_g¹
        excited state is Jahn-Teller unstable and splits, adding a shoulder near 17,400 cm⁻¹ below
        the 20,300 cm⁻¹ (493 nm) maximum. Representative Gaussian envelope at the measured λ_max
      </Readout>
    </div>
  )
}

// d–d vs charge-transfer intensity, why permanganate is so intensely coloured. Molar
// absorptivity ε spans FIVE orders of magnitude by selection rules. d–d bands are
// both Laporte- AND (for high-spin d⁵) spin-forbidden, so [Mn(H₂O)₆]²⁺ is almost
// colourless: ε ≈ 0.02 M⁻¹cm⁻¹. A ligand-to-metal charge transfer (LMCT) is fully
// allowed, so MnO₄⁻ is deep purple: ε ≈ 2,000 M⁻¹cm⁻¹, a ~10⁵ difference. Plotted on
// a log-ε axis (values: LibreTexts/std inorganic tables).
export function DDvsChargeTransferViz() {
  const bands = [
    { n: '[Mn(H₂O)₆]²⁺', kind: 'd–d (spin+Laporte forbidden)', eps: 0.02 },
    { n: '[Ti(H₂O)₆]³⁺', kind: 'd–d (Laporte forbidden)', eps: 5 },
    { n: 'MnO₄⁻', kind: 'LMCT (fully allowed)', eps: 2000 }
  ]
  const W = 560,
    H = 300
  const x0 = 220,
    y0 = 70,
    barH = 34,
    gap = 26
  const logMin = -2,
    logMax = 4 // ε 0.01 → 10000
  const xEnd = W - 30
  const xOf = e => x0 + ((Math.log10(e) - logMin) / (logMax - logMin)) * (xEnd - x0)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* log axis */}
        <line
          x1={x0}
          y1={y0 - 20}
          x2={x0}
          y2={y0 + bands.length * (barH + gap)}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[-2, -1, 0, 1, 2, 3, 4].map(le => (
          <g key={le}>
            <line
              x1={xOf(Math.pow(10, le))}
              y1={y0 - 20}
              x2={xOf(Math.pow(10, le))}
              y2={y0 - 16}
              stroke={FG}
              strokeOpacity={OPACITY.faint}
              strokeWidth={STROKE_HAIR}
            />
            <text
              x={xOf(Math.pow(10, le))}
              y={y0 - 24}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {'10' + (le < 0 ? '⁻' : '') + '⁰¹²³⁴'.charAt(Math.abs(le))}
            </text>
          </g>
        ))}
        <TexPx
          x={(x0 + xEnd) / 2}
          y={y0 - 40}
          anchor="middle"
          tex={'\\text{molar absorptivity }\\varepsilon\\ /\\ \\mathrm{M^{-1}cm^{-1}}\\ (\\log)'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={396}
        />
        {bands.map((b, i) => {
          const by = y0 + i * (barH + gap)
          const emph = b.eps > 100
          return (
            <g key={b.n}>
              <rect
                x={x0}
                y={by}
                width={xOf(b.eps) - x0}
                height={barH}
                fill={FG}
                fillOpacity={emph ? 0.28 : 0.12}
                stroke={FG}
                strokeOpacity={emph ? OPACITY.fg : OPACITY.dim}
                strokeWidth={emph ? STROKE_PRIMARY : STROKE_SECONDARY}
              />
              <text
                x={x0 - 8}
                y={by + barH / 2 - 2}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="end"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.n}
              </text>
              <text
                x={x0 - 8}
                y={by + barH / 2 + 11}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="end"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.kind}
              </text>
              <text
                x={xOf(b.eps) + 6}
                y={by + barH / 2 + 3}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="start"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {'ε ≈ ' + b.eps}
              </text>
            </g>
          )
        })}
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          selection rules set intensity across ~10⁵
        </text>
      </Canvas>
      <Readout>
        ε measures how allowed a transition is. Forbidden d–d bands are faint: [Mn(H₂O)₆]²⁺ ε ≈ 0.02
        (spin+Laporte forbidden, nearly colourless). Allowed LMCT is intense: MnO₄⁻ ε ≈ 2000 (deep
        purple), a ~10⁵ span from the same element
      </Readout>
    </div>
  )
}

// d-orbital angular density, WHICH lobes point at the ligands (LANDMINE 1: computed
// 2D |ψ|² cell grid, NEVER a drawn petal). Real hydrogenic 3d orbitals in Cartesian
// form: ψ(d_x²−y²) ∝ (x²−y²)·e^(−r/3), ψ(d_xy) ∝ 2xy·e^(−r/3). We plot |ψ|² on a
// square cell grid in the xy-plane (z = 0). The d_x²−y² lobes lie ALONG ±x, ±y, the
// octahedral ligand axes (marked), so this orbital is destabilised most (e_g); the
// d_xy lobes lie on the DIAGONALS, between the ligands, so it is stabilised (t₂g).
// The lobe orientation EMERGES from the polynomial, not from a pen. Isotropic (square
// grid, equal x/y span). a₀ scaled to the hydrogenic 3d radial e^(−r/3).
export function DOrbitalAngularDensityViz() {
  const S = 300,
    N = 46,
    span = 14 // a0
  const cw = S / N
  const build = kind => {
    const raw = []
    let mx = 0
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x = -span + ((i + 0.5) / N) * 2 * span
        const y = span - ((j + 0.5) / N) * 2 * span
        const r = Math.sqrt(x * x + y * y)
        const ang = kind === 'x2y2' ? x * x - y * y : 2 * x * y
        const psi = ang * Math.exp(-r / 3)
        const d = psi * psi
        raw.push({ i, j, d })
        if (d > mx) mx = d
      }
    }
    return raw
      .filter(c => c.d / mx > 0.02)
      .map(c => ({ i: c.i, j: c.j, op: Math.min(1, (c.d / mx) * 0.95) }))
  }
  const cells1 = React.useMemo(() => build('x2y2'), [])
  const cells2 = React.useMemo(() => build('xy'), [])
  const ligands = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ] // ±x, ±y unit dirs
  const panel = (cells, title, sub, ligOnAxes) => (
    <div style={{ flex: '1 1 280px' }}>
      <Canvas w={S} h={S}>
        {cells.map((c, k) => (
          <rect
            key={k}
            x={c.i * cw}
            y={c.j * cw}
            width={cw + 0.5}
            height={cw + 0.5}
            fill={FG}
            fillOpacity={c.op}
          />
        ))}
        {/* axes */}
        <line
          x1={0}
          y1={S / 2}
          x2={S}
          y2={S / 2}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
        />
        <line
          x1={S / 2}
          y1={0}
          x2={S / 2}
          y2={S}
          stroke={FG}
          strokeOpacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
        />
        {/* ligand markers on ±x, ±y */}
        {ligands.map((L, k) => (
          <g key={k}>
            <circle
              cx={S / 2 + L[0] * (S / 2 - 14)}
              cy={S / 2 - L[1] * (S / 2 - 14)}
              r={5}
              fill="none"
              stroke={FG}
              strokeOpacity={ligOnAxes ? OPACITY.accent : OPACITY.dim}
              strokeWidth={STROKE_PRIMARY}
            />
          </g>
        ))}
        <circle cx={S / 2} cy={S / 2} r={2} fill={FG} opacity={OPACITY.fg} />
        <text
          x={S / 2}
          y={16}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          +y
        </text>
        <text
          x={S - 10}
          y={S / 2 - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          +x
        </text>
        <text
          x={S / 2}
          y={S - 8}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {title}
        </text>
      </Canvas>
      <div
        style={{
          textAlign: 'center',
          fontSize: FONT_TINY,
          opacity: OPACITY.dim,
          marginTop: 2,
          fontFamily: FONT_FAMILY
        }}
      >
        {sub}
      </div>
    </div>
  )
  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {panel(cells1, 'd_x²−y²  (e_g)', 'lobes ON the ligand axes → destabilised', true)}
        {panel(cells2, 'd_xy  (t₂g)', 'lobes BETWEEN ligands → stabilised', false)}
      </div>
      <Readout>
        Computed |ψ|²: d_x²−y² ∝ (x²−y²)e^(−r/3) puts density ON ±x,±y, straight at the octahedral
        ligands (circles) → higher energy (e_g). d_xy ∝ 2xy e^(−r/3) points on the diagonals,
        BETWEEN ligands → lower energy (t₂g). Lobe orientation is the whole reason for the Δ_o
        splitting
      </Readout>
    </div>
  )
}

// Jahn-Teller distortion of an octahedral d⁹ ion (e.g. Cu²⁺). A d⁹ configuration has
// an unequally occupied e_g level (t₂g⁶ e_g³), which is degenerate and unstable, the
// Jahn-Teller theorem forces a distortion that removes the degeneracy. A tetragonal
// ELONGATION along z (the two axial ligands move out) lowers every z-containing
// orbital and raises the in-plane ones: e_g splits into d_z² (down) and d_x²−y² (up);
// t₂g splits into d_xz,d_yz (down) and d_xy (up). Filling the lowered orbitals with
// the extra electron gives a net electronic stabilisation. Honest level diagram.
export function JahnTellerViz() {
  const W = 560,
    H = 320
  const xOh = 150,
    xD = 400,
    egY = 110,
    t2gY = 220
  const L = (x, y, w, label, sub) => (
    <g>
      <line
        x1={x - w / 2}
        y1={y}
        x2={x + w / 2}
        y2={y}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={x + w / 2 + 8}
        y={y + 3}
        fill={FG}
        opacity={OPACITY.dim}
        fontSize={FONT_TINY}
        textAnchor="start"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x - w / 2 - 8}
          y={y + 3}
          fill={FG}
          opacity={OPACITY.faint}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          {sub}
        </text>
      )}
    </g>
  )
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* octahedral (degenerate) */}
        {L(xOh, egY, 96, 'e_g')}
        {L(xOh, t2gY, 96, 't₂g')}
        <text
          x={xOh}
          y={60}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          octahedral (O_h)
        </text>
        {/* distorted (split) */}
        {L(xD, egY - 34, 80, 'd_x²−y²', '↑')}
        {L(xD, egY + 30, 80, 'd_z²', '↓')}
        {L(xD, t2gY - 22, 80, 'd_xy', '↑')}
        {L(xD, t2gY + 24, 80, 'd_xz, d_yz', '↓')}
        <TexPx
          x={xD}
          y={60}
          anchor="middle"
          tex={'z\\text{-elongated }(D_{4h})'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* correlation lines */}
        <g stroke={FG} strokeOpacity={OPACITY.faint} strokeWidth={STROKE_HAIR}>
          <line x1={xOh + 48} y1={egY} x2={xD - 40} y2={egY - 34} />
          <line x1={xOh + 48} y1={egY} x2={xD - 40} y2={egY + 30} />
          <line x1={xOh + 48} y1={t2gY} x2={xD - 40} y2={t2gY - 22} />
          <line x1={xOh + 48} y1={t2gY} x2={xD - 40} y2={t2gY + 24} />
        </g>
        {/* electron occupancy for d9 on the distorted set (t2g^6 then eg: dz2^2, dx2y2^1) */}
        <TexPx
          x={W / 2}
          y={285}
          anchor="middle"
          tex={'d^9\\ (\\mathrm{Cu^{2+}})\\text{: the half-empty }d_{x^2-y^2}\\text{ sits highest}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={506}
        />
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          Jahn-Teller: distortion lifts the e_g degeneracy
        </text>
      </Canvas>
      <Readout>
        A d⁹ ion (t₂g⁶ e_g³) has an unequally filled, degenerate e_g level → Jahn-Teller unstable.
        z-elongation drops d_z² and raises d_x²−y² (e_g splits), and drops d_xz,d_yz vs d_xy (t₂g
        splits). Populating the lowered orbitals gives a net electronic stabilisation, why Cu²⁺
        complexes are tetragonally distorted
      </Readout>
    </div>
  )
}

// Centrifugal distortion in a rotational spectrum. A real bond stretches as the
// molecule spins faster, so the rigid-rotor comb ν̃ = 2B̃(J+1) is corrected by a
// negative quartic term: ν̃ = 2B̃(J+1) − 4D̃(J+1)³. The distortion constant D̃ is tiny,
// so the effect only shows at high J, where the observed lines fall progressively
// BELOW the evenly spaced rigid comb. Shown for CO: B̃ = 1.931 cm⁻¹, D̃ = 6.12×10⁻⁶
// cm⁻¹ (standard spectroscopic constants). Both combs computed from the equations.
export function CentrifugalDistortionViz() {
  const B = 1.931,
    D = 6.12e-6
  const rigid = J => 2 * B * (J + 1)
  const real = J => 2 * B * (J + 1) - 4 * D * Math.pow(J + 1, 3)
  const Jmax = 40
  const W = 560,
    H = 300
  const x0 = 50,
    x1 = W - 20,
    yR = 110,
    yD = 200
  const nuMax = rigid(Jmax)
  const xOf = nu => x0 + (nu / nuMax) * (x1 - x0)
  const Js = []
  for (let J = 0; J <= Jmax; J += 2) Js.push(J)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* rigid comb */}
        <TexPx
          x={x0}
          y={yR - 26}
          anchor="start"
          tex={
            '\\text{rigid rotor: }\\tilde{\\nu}=2\\tilde{B}(J+1),\\ \\text{even }2\\tilde{B}\\text{ spacing}'
          }
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={495}
        />
        <line
          x1={x0}
          y1={yR}
          x2={x1}
          y2={yR}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {Js.map(J => (
          <line
            key={'r' + J}
            x1={xOf(rigid(J))}
            y1={yR - 16}
            x2={xOf(rigid(J))}
            y2={yR}
            stroke={FG}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_SECONDARY}
          />
        ))}
        {/* real comb */}
        <TexPx
          x={x0}
          y={yD - 26}
          anchor="start"
          tex={'\\text{with distortion: }\\tilde{\\nu}=2\\tilde{B}(J+1)-4\\tilde{D}(J+1)^3'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={462}
        />
        <line
          x1={x0}
          y1={yD}
          x2={x1}
          y2={yD}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {Js.map(J => (
          <g key={'d' + J}>
            <line
              x1={xOf(real(J))}
              y1={yD - 16}
              x2={xOf(real(J))}
              y2={yD}
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_SECONDARY}
            />
            {/* deviation tie to rigid position */}
            {J >= 20 && (
              <line
                x1={xOf(rigid(J))}
                y1={yD - 16}
                x2={xOf(real(J))}
                y2={yD - 16}
                stroke={FG}
                strokeOpacity={OPACITY.accent}
                strokeWidth={STROKE_HAIR}
              />
            )}
          </g>
        ))}
        <text
          x={x1}
          y={yD + 22}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          high-J lines fall below the rigid comb →
        </text>
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={
            '\\mathrm{CO}\\cdot\\ \\tilde{B}=1.931,\\ \\tilde{D}=6.12\\times10^{-6}\\ \\mathrm{cm^{-1}}'
          }
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={396}
        />
      </Canvas>
      <Readout>
        Spinning stretches the bond, so ν̃ = 2B̃(J+1) − 4D̃(J+1)³ (CO: B̃ = 1.931, D̃ = 6.12×10⁻⁶ cm⁻¹).
        At J = 40 the quartic term shifts the line ~1.69 cm⁻¹ below the rigid-rotor position, the
        lines crowd together at high J instead of staying evenly 2B̃ apart
      </Readout>
    </div>
  )
}

// Rotational Raman S-branch. In rotational Raman scattering the selection rule is
// ΔJ = ±2 (the molecule's polarisability oscillates at twice the rotation), so
// Stokes lines (S-branch, ΔJ = +2) appear on the low-energy side of the intense
// Rayleigh line at shifts Δν̃ = B̃(4J + 6), J = 0,1,2,…  The first line sits 6B̃ from
// Rayleigh and successive lines are spaced 4B̃ apart (twice the IR/microwave 2B̃).
// Anti-Stokes lines mirror them on the high-energy side. Shown for N₂: B̃ = 1.9896
// cm⁻¹ (standard) → first line 11.9 cm⁻¹, spacing 7.96 cm⁻¹. Computed positions.
export function RotationalRamanViz() {
  const B = 1.9896
  const shift = J => B * (4 * J + 6) // cm⁻¹ from Rayleigh
  const Jmax = 6
  const W = 560,
    H = 300
  const cx = W / 2,
    axisY = 170
  const maxShift = shift(Jmax)
  const pxPer = (W / 2 - 40) / maxShift
  const env = J => Math.exp(-0.02 * J * (J + 1)) // schematic intensity falloff
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={30}
          y1={axisY}
          x2={W - 30}
          y2={axisY}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {/* Rayleigh line */}
        <line
          x1={cx}
          y1={axisY}
          x2={cx}
          y2={60}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_EMPHASIS}
          strokeDasharray="4 3"
        />
        <TexPx
          x={cx}
          y={52}
          anchor="middle"
          tex={'\\text{Rayleigh }(\\Delta\\tilde{\\nu}=0)'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* S-branch Stokes (right) + anti-Stokes (left) */}
        {Array.from({ length: Jmax + 1 }, (_, J) => J).map(J => {
          const s = shift(J) * pxPer
          const h = 70 * env(J)
          return (
            <g key={J}>
              <line
                x1={cx + s}
                y1={axisY}
                x2={cx + s}
                y2={axisY - h}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_SECONDARY}
              />
              <line
                x1={cx - s}
                y1={axisY}
                x2={cx - s}
                y2={axisY - h}
                stroke={FG}
                strokeOpacity={OPACITY.accent}
                strokeWidth={STROKE_SECONDARY}
              />
              {J === 0 && (
                <TexPx
                  x={cx + s}
                  y={axisY - h - 6}
                  anchor="middle"
                  tex={'6\\tilde{B}'}
                  size={FONT_TINY}
                  opacity={OPACITY.dim}
                />
              )}
            </g>
          )
        })}
        {/* spacing bracket between J=1 and J=2 Stokes */}
        <g stroke={FG} strokeOpacity={OPACITY.accent} strokeWidth={STROKE_HAIR}>
          <line
            x1={cx + shift(1) * pxPer}
            y1={axisY + 10}
            x2={cx + shift(2) * pxPer}
            y2={axisY + 10}
          />
        </g>
        <TexPx
          x={cx + ((shift(1) + shift(2)) / 2) * pxPer}
          y={axisY + 22}
          anchor="middle"
          tex={'4\\tilde{B}'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
        />
        <TexPx
          x={cx + maxShift * pxPer * 0.6}
          y={axisY + 40}
          anchor="middle"
          tex={'\\text{Stokes }(\\Delta J = +2)'}
          size={FONT_TINY}
          opacity={OPACITY.fg}
        />
        <TexPx
          x={cx - maxShift * pxPer * 0.6}
          y={axisY + 40}
          anchor="middle"
          tex={'\\text{anti-Stokes }(\\Delta J = -2)'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
          width={231}
        />
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={
            '\\text{rotational Raman}\\ \\cdot\\ \\mathrm{N_2}\\ \\tilde{B}=1.9896\\ \\mathrm{cm^{-1}}'
          }
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={418}
        />
      </Canvas>
      <Readout>
        Raman ΔJ = ±2: the S-branch starts 6B̃ from the Rayleigh line and steps by 4B̃ (N₂: first line
        11.9 cm⁻¹, spacing 7.96 cm⁻¹), twice the 2B̃ of an IR/microwave spectrum, because
        polarisability modulates at double the rotation frequency
      </Readout>
    </div>
  )
}

// Nuclear-spin statistics: the 3:1 intensity alternation in H₂. Because the two H
// nuclei are identical spin-½ fermions, the total wavefunction must be antisymmetric,
// which couples nuclear spin to rotational state: ORTHO-H₂ (nuclear triplet, I_tot=1,
// weight 3) pairs with ODD J, PARA-H₂ (nuclear singlet, I_tot=0, weight 1) with EVEN
// J. So odd-J lines are 3× as strong as the even-J neighbours would be, a direct
// readout of nuclear spin. Line intensity I(J) = g_ns·(2J+1)·e^(−B̃·J(J+1)·hc/kT),
// computed for H₂ (B̃ = 60.853 cm⁻¹, 298 K); g_ns = 3 (odd) / 1 (even).
export function NuclearSpinIntensityViz() {
  const B = 60.853, // cm⁻¹
    hckT = 1.4388 / 298 // (cm·K)/(K) → 1/cm⁻¹ factor: hc/kT in cm
  const g = J => (J % 2 === 1 ? 3 : 1)
  const I = J => g(J) * (2 * J + 1) * Math.exp(-B * J * (J + 1) * hckT)
  const Jmax = 5
  const Is = Array.from({ length: Jmax + 1 }, (_, J) => I(J))
  const Imax = Math.max(...Is)
  const W = 560,
    H = 300,
    y0 = 220,
    x0 = 70
  const bw = 46,
    gap = 34
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={x0}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <text
          x={x0 - 8}
          y={40}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          rel. intensity (computed)
        </text>
        {Is.map((val, J) => {
          const bx = x0 + 20 + J * (bw + gap)
          const h = (val / Imax) * (y0 - 50)
          const odd = J % 2 === 1
          return (
            <g key={J}>
              <rect
                x={bx}
                y={y0 - h}
                width={bw}
                height={h}
                fill={FG}
                fillOpacity={odd ? 0.3 : 0.12}
                stroke={FG}
                strokeOpacity={odd ? OPACITY.fg : OPACITY.dim}
                strokeWidth={odd ? STROKE_PRIMARY : STROKE_SECONDARY}
              />
              <text
                x={bx + bw / 2}
                y={y0 - h - 6}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {val < 0.01 ? val.toExponential(1) : val.toFixed(2)}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 16}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {'J=' + J}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 30}
                fill={FG}
                opacity={odd ? OPACITY.accent : OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {odd ? 'ortho ×3' : 'para ×1'}
              </text>
            </g>
          )
        })}
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={'\\mathrm{H_2}\\cdot\\ \\text{ortho:para}=3{:}1\\ (\\text{odd:even }J)'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={374}
        />
      </Canvas>
      <Readout>
        Identical spin-½ H nuclei force ortho-H₂ (nuclear triplet, weight 3) onto ODD J and para-H₂
        (singlet, weight 1) onto EVEN J. So the rotational lines alternate 3:1 in the g_ns factor of
        I(J) = g_ns·(2J+1)·e^(−B̃J(J+1)hc/kT), the intensity pattern literally counts nuclear spin
        states
      </Readout>
    </div>
  )
}

// Metal-carbonyl ν(CO) and π back-bonding. Free CO absorbs at 2143 cm⁻¹. When CO
// binds a metal, the metal donates d-electron density into CO's empty π* antibonding
// orbital (back-bonding), which weakens the C–O bond and LOWERS its stretch. The more
// electron-rich the metal, the more back-bonding and the lower ν(CO): free CO 2143 >
// Ni(CO)₄ 2057 > Cr(CO)₆ 2000 > [V(CO)₆]⁻ 1860 cm⁻¹. The isoelectronic charge series
// makes it starkest: [Mn(CO)₆]⁺ 2090 > Cr(CO)₆ 2000 > [V(CO)₆]⁻ 1860. Values from
// standard IR tables (IIT-D Elias notes; confirmed InfinityLearn/arXiv 2011.04918).
export function MetalCarbonylCOViz() {
  const data = [
    { n: 'free CO', v: 2143, ref: true },
    { n: 'Ni(CO)₄', v: 2057 },
    { n: 'Cr(CO)₆', v: 2000 },
    { n: '[V(CO)₆]⁻', v: 1860 }
  ]
  const W = 560,
    H = 300,
    x0 = 130,
    xEnd = W - 40
  const vMin = 1800,
    vMax = 2200
  const xOf = v => x0 + ((v - vMin) / (vMax - vMin)) * (xEnd - x0)
  const y0 = 70,
    bh = 30,
    gap = 24
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* axis */}
        <line
          x1={x0}
          y1={y0 - 16}
          x2={x0}
          y2={y0 + data.length * (bh + gap) - gap + 8}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[1900, 2000, 2100].map(v => (
          <g key={v}>
            <line
              x1={xOf(v)}
              y1={y0 - 16}
              x2={xOf(v)}
              y2={y0 + data.length * (bh + gap) - gap + 8}
              stroke={FG}
              strokeOpacity={OPACITY.faint}
              strokeWidth={STROKE_HAIR}
            />
            <text
              x={xOf(v)}
              y={y0 - 20}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {v}
            </text>
          </g>
        ))}
        {/* free CO reference line */}
        <line
          x1={xOf(2143)}
          y1={y0 - 16}
          x2={xOf(2143)}
          y2={y0 + data.length * (bh + gap) - gap + 8}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          strokeDasharray="4 3"
        />
        {data.map((d, i) => {
          const by = y0 + i * (bh + gap)
          return (
            <g key={d.n}>
              <rect
                x={x0}
                y={by}
                width={xOf(d.v) - x0}
                height={bh}
                fill={FG}
                fillOpacity={d.ref ? 0.1 : 0.24}
                stroke={FG}
                strokeOpacity={d.ref ? OPACITY.dim : OPACITY.fg}
                strokeWidth={d.ref ? STROKE_SECONDARY : STROKE_PRIMARY}
                strokeDasharray={d.ref ? '4 3' : undefined}
              />
              <text
                x={x0 - 8}
                y={by + bh / 2 + 3}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="end"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {d.n}
              </text>
              <text
                x={xOf(d.v) + 6}
                y={by + bh / 2 + 3}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="start"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {d.v}
              </text>
            </g>
          )
        })}
        <text
          x={(x0 + xEnd) / 2}
          y={H - 26}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          ← more back-bonding weakens C–O
        </text>
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={'\\nu(\\mathrm{CO})\\ /\\ \\mathrm{cm^{-1}}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
      </Canvas>
      <Readout>
        Metal → CO π* back-bonding weakens the C–O bond, lowering ν(CO) below free CO's 2143 cm⁻¹:
        Ni(CO)₄ 2057, Cr(CO)₆ 2000, [V(CO)₆]⁻ 1860. The isoelectronic charge series [Mn(CO)₆]⁺ 2090
        &gt; Cr(CO)₆ 2000 &gt; [V(CO)₆]⁻ 1860 shows the more electron-rich metal back-bonds most
      </Readout>
    </div>
  )
}

// Four-level laser scheme. Efficient lasing needs a population inversion, which is
// easy in a FOUR-level system: (1) a pump raises ground-state atoms (E₀) to a broad
// band E₃; (2) they decay FAST and non-radiatively to a metastable upper laser level
// E₂; (3) the lasing transition E₂ → E₁ emits the coherent photon; (4) E₁ empties
// FAST back to E₀. Because E₁ is essentially always empty, even a modest E₂ population
// is an inversion, unlike a 3-level laser where the lower level is the heavily
// populated ground state. An honest energy-level schematic.
export function FourLevelLaserViz() {
  const W = 560,
    H = 320
  const xg = 90,
    xTrans = 300,
    w = 150
  const y0 = 270,
    y1 = 210,
    y2 = 120,
    y3 = 70
  const lvl = (y, label, x0 = xg) => (
    <g>
      <line
        x1={x0}
        y1={y}
        x2={x0 + w}
        y2={y}
        stroke={FG}
        strokeOpacity={OPACITY.fg}
        strokeWidth={STROKE_PRIMARY}
      />
      <text
        x={x0 + w + 8}
        y={y + 3}
        fill={FG}
        opacity={OPACITY.dim}
        fontSize={FONT_TINY}
        textAnchor="start"
        style={{ fontFamily: FONT_FAMILY }}
      >
        {label}
      </text>
    </g>
  )
  const arrow = (x, ya, yb, op, dash, label, lx) => (
    <g
      stroke={FG}
      strokeOpacity={op}
      strokeWidth={STROKE_EMPHASIS}
      fill="none"
      strokeLinecap="round"
    >
      <line x1={x} y1={ya} x2={x} y2={yb} strokeDasharray={dash} />
      <polyline
        points={`${x - 5},${yb + (yb > ya ? -8 : 8)} ${x},${yb} ${x + 5},${yb + (yb > ya ? -8 : 8)}`}
      />
    </g>
  )
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {lvl(y0, 'E₀ ground')}
        {lvl(y1, 'E₁ lower laser (empties fast)')}
        {lvl(y2, 'E₂ upper laser (metastable)')}
        {lvl(y3, 'E₃ pump band')}
        {/* pump E0->E3 */}
        {arrow(xg + 30, y0, y3, OPACITY.dim, '4 3')}
        <text
          x={xg + 14}
          y={(y0 + y3) / 2}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          pump
        </text>
        {/* fast decay E3->E2 */}
        {arrow(xg + 70, y3, y2, OPACITY.faint)}
        <text
          x={xg + 76}
          y={(y3 + y2) / 2}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          fast
        </text>
        {/* lasing E2->E1 */}
        {arrow(xg + 110, y2, y1, OPACITY.accent)}
        <text
          x={xg + 116}
          y={(y2 + y1) / 2}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          LASE
        </text>
        {/* fast decay E1->E0 */}
        {arrow(xg + 130, y1, y0, OPACITY.faint)}
        <text
          x={xg + 136}
          y={(y1 + y0) / 2}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          fast
        </text>
        <TexPx
          x={xg + 300}
          y={y2 - 30}
          anchor="middle"
          tex={'E_1\\ \\text{stays empty}\\ \\to'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <TexPx
          x={xg + 300}
          y={y2 - 16}
          anchor="middle"
          tex={'\\text{inversion }(E_2 > E_1)\\text{ is easy}'}
          size={9}
          opacity={OPACITY.dim}
          width={297}
        />
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          four-level laser
        </text>
      </Canvas>
      <Readout>
        Pump E₀→E₃, fast non-radiative drop to the metastable E₂, coherent lasing E₂→E₁, then fast
        E₁→E₀. Because the lower laser level E₁ empties almost instantly it is nearly always empty,
        so a population inversion E₂ &gt; E₁ needs only modest pumping, the advantage over a 3-level
        laser
      </Readout>
    </div>
  )
}

// Dispersive spectrometer, the signal chain. A single-beam optical spectrometer has
// four functional blocks in series: a broadband SOURCE illuminates the SAMPLE; the
// transmitted light enters a MONOCHROMATOR (prism or diffraction grating) that selects
// one wavelength at a time; a DETECTOR converts the transmitted intensity I to a
// signal, compared with the incident I₀ to give absorbance A = log(I₀/I) at each λ.
// An honest block schematic of the instrument that measures every absorption spectrum
// in this unit.
export function SpectrometerBlockViz() {
  const W = 560,
    H = 260
  const blocks = [
    { t: 'SOURCE', s: 'broadband light' },
    { t: 'SAMPLE', s: 'absorbs some λ' },
    { t: 'MONOCHROMATOR', s: 'selects one λ' },
    { t: 'DETECTOR', s: 'measures I → A' }
  ]
  const bw = 116,
    bh = 66,
    gap = 20
  const total = blocks.length * bw + (blocks.length - 1) * gap
  const x0 = (W - total) / 2,
    y0 = 90
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {blocks.map((b, i) => {
          const bx = x0 + i * (bw + gap)
          return (
            <g key={b.t}>
              <rect
                x={bx}
                y={y0}
                width={bw}
                height={bh}
                fill={FG}
                fillOpacity={0.05}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              <text
                x={bx + bw / 2}
                y={y0 + 30}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_SMALL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY, letterSpacing: '0.04em' }}
              >
                {b.t}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 48}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.s}
              </text>
              {i < blocks.length - 1 && (
                <g
                  stroke={FG}
                  strokeOpacity={OPACITY.dim}
                  strokeWidth={STROKE_SECONDARY}
                  fill="none"
                  strokeLinecap="round"
                >
                  <line x1={bx + bw} y1={y0 + bh / 2} x2={bx + bw + gap} y2={y0 + bh / 2} />
                  <polyline
                    points={`${bx + bw + gap - 6},${y0 + bh / 2 - 4} ${bx + bw + gap},${y0 + bh / 2} ${bx + bw + gap - 6},${y0 + bh / 2 + 4}`}
                  />
                </g>
              )}
            </g>
          )
        })}
        {/* incident / transmitted labels */}
        <TexPx
          x={x0 + bw + gap / 2}
          y={y0 - 8}
          anchor="middle"
          tex={'I_0'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <text
          x={x0 + 2 * bw + gap + gap / 2}
          y={y0 - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          I
        </text>
        <TexPx
          x={W / 2}
          y={H - 12}
          anchor="middle"
          tex={'A=\\log\\!\\left(\\frac{I_0}{I}\\right)\\ \\text{at each }\\lambda'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={253}
        />
      </Canvas>
      <Readout>
        The instrument behind every spectrum here: source → sample → monochromator → detector. The
        monochromator scans one wavelength at a time; the detector compares transmitted I to
        incident I₀ to report absorbance A = log(I₀/I) versus λ (Beer–Lambert)
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 09, ANALYTICAL CHEMISTRY

// Combustion analysis, finding an empirical formula from trap masses. A weighed CxHyOz
// sample is burned in excess O₂; all C ends up as CO₂ and all H as H₂O, caught in two
// pre-weighed absorbers. From the mass GAINED by each trap you back out the C and H
// mass (m_C = m_CO₂·12.011/44.009, m_H = m_H₂O·2·1.008/18.015); O is found by
// difference. Worked for 1.000 g of ethanol → 1.911 g CO₂ + 1.173 g H₂O: %C 52.1,
// %H 13.1, %O 34.7 → mole ratio C 4.34 : H 13.0 : O 2.17 = 2:6:1 → C₂H₆O. All
// masses computed from the balanced combustion and molar masses (standard atomic wts).
export function CombustionAnalysisViz() {
  const mSample = 1.0,
    M_EtOH = 46.069
  const nEtOH = mSample / M_EtOH
  const mCO2 = nEtOH * 2 * 44.009,
    mH2O = nEtOH * 3 * 18.015
  const mC = mCO2 * (12.011 / 44.009),
    mH = mH2O * ((2 * 1.008) / 18.015)
  const mO = mSample - mC - mH
  const pC = (mC / mSample) * 100,
    pH = (mH / mSample) * 100,
    pO = (mO / mSample) * 100
  const W = 560,
    H = 300
  const boxes = [
    { t: 'SAMPLE', s: '1.000 g CₓHᵧO_z', x: 30 },
    { t: 'FURNACE', s: '+ excess O₂', x: 175 },
    { t: 'H₂O trap', s: '+' + mH2O.toFixed(3) + ' g', x: 320 },
    { t: 'CO₂ trap', s: '+' + mCO2.toFixed(3) + ' g', x: 440 }
  ]
  const bw = 108,
    bh = 56,
    by = 70
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {boxes.map((b, i) => (
          <g key={b.t}>
            <rect
              x={b.x}
              y={by}
              width={bw}
              height={bh}
              fill={FG}
              fillOpacity={0.05}
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <text
              x={b.x + bw / 2}
              y={by + 26}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {b.t}
            </text>
            <text
              x={b.x + bw / 2}
              y={by + 42}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {b.s}
            </text>
            {i < boxes.length - 1 && (
              <g
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
                fill="none"
                strokeLinecap="round"
              >
                <line x1={b.x + bw} y1={by + bh / 2} x2={boxes[i + 1].x} y2={by + bh / 2} />
                <polyline
                  points={`${boxes[i + 1].x - 6},${by + bh / 2 - 4} ${boxes[i + 1].x},${by + bh / 2} ${boxes[i + 1].x - 6},${by + bh / 2 + 4}`}
                />
              </g>
            )}
          </g>
        ))}
        {/* computed composition */}
        <text
          x={W / 2}
          y={175}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          m_C = 1.911 × 12.011/44.009 = {mC.toFixed(3)} g · m_H = 1.173 × 2.016/18.015 ={' '}
          {mH.toFixed(3)} g
        </text>
        <text
          x={W / 2}
          y={200}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          %C {pC.toFixed(1)} %H {pH.toFixed(1)} %O {pO.toFixed(1)} (by difference)
        </text>
        <text
          x={W / 2}
          y={230}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          mole ratio C {(mC / 12.011).toFixed(2)} : H {(mH / 1.008).toFixed(2)} : O{' '}
          {(mO / 15.999).toFixed(2)} → 2 : 6 : 1
        </text>
        <TexPx
          x={W / 2}
          y={256}
          anchor="middle"
          tex={'\\text{empirical formula }\\mathrm{C_2H_6O}'}
          size={FONT_LABEL}
          opacity={OPACITY.fg}
          width={253}
        />
        <text
          x={W / 2}
          y={H - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          combustion analysis mass balance
        </text>
      </Canvas>
      <Readout>
        Burn 1.000 g sample → 1.911 g CO₂ + 1.173 g H₂O. m_C = 0.521 g (52.1%), m_H = 0.131 g
        (13.1%), m_O = 0.347 g (34.7%, by difference). Mole ratio 4.34 : 13.0 : 2.17 = 2:6:1 → C₂H₆O
        (ethanol). Every mass from the balanced combustion
      </Readout>
    </div>
  )
}

// Sulfide concentration vs pH, the key to the qualitative-analysis sulfide groups.
// H₂S is diprotic: H₂S ⇌ H⁺ + HS⁻ (Ka₁ = 1.0×10⁻⁷), HS⁻ ⇌ H⁺ + S²⁻ (Ka₂ ≈ 1.3×10⁻¹³).
// In an H₂S-saturated solution [H₂S] ≈ 0.10 M is held constant, so combining the two
// equilibria gives [S²⁻] = Ka₁·Ka₂·[H₂S]/[H⁺]². On a log plot this is a straight line
// of slope +2 in pH (raising pH by 1 raises [S²⁻] 100-fold). Controlling pH therefore
// tunes [S²⁻] over ~20 orders of magnitude, selecting which metal sulfides precipitate.
// Ka values standard (LibreTexts/analytical texts; Ka₂ taken as 1.3×10⁻¹³).
export function H2SSpeciationViz() {
  const Ka1 = 1.0e-7,
    Ka2 = 1.3e-13,
    H2S = 0.1
  const logS = pH => Math.log10((Ka1 * Ka2 * H2S) / Math.pow(10, -2 * pH))
  const pHmin = 0,
    pHmax = 14
  const pts = []
  for (let p = pHmin; p <= pHmax + 1e-9; p += 0.25) pts.push([p, logS(p)])
  const yMin = -22,
    yMax = 2
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[pHmin - 0.6, pHmax + 0.6]}
        yRange={[yMin - 1, yMax + 1]}
        width={560}
        height={320}
        pad={48}
      >
        <Polyline
          points={[
            [pHmin, yMin],
            [pHmax, yMin]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [pHmin, yMin],
            [pHmin, yMax]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[-20, -15, -10, -5, 0].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [pHmin - 0.6, y],
                [pHmin - 0.2, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[pHmin - 0.8, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y}
            </Label>
          </g>
        ))}
        {[2, 4, 6, 8, 10, 12, 14].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, yMin],
                [x, yMin - 0.5]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, yMin]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={14}>
              {x}
            </Label>
          </g>
        ))}
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Dot x={1} y={logS(1)} r={3} opacity={OPACITY.accent} />
        <Dot x={9} y={logS(9)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[6.5, -6]}
          tex={'[\\text{S}^{2-}]=\\dfrac{K_{a1}K_{a2}[\\text{H}_2\\text{S}]}{[\\text{H}^+]^2}'}
          anchor="middle"
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[3.0, -19]}
          tex={'\\text{slope}=+2'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[pHmax / 2, yMax + 1]}
          anchor="middle"
          tex={'\\text{SATURATED }\\mathrm{H_2S}\\text{: }\\log\\mathrm{[S^{2-}]}\\ \\text{vs pH}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Label at={[pHmax + 0.6, yMin]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim} dy={28}>
          pH
        </Label>
        <Tex
          at={[pHmin, yMax + 1]}
          anchor="start"
          tex={'\\log\\mathrm{[S^{2-}]}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-2}
        />
      </Plot>
      <Readout>
        Diprotic H₂S at fixed [H₂S] = 0.10 M: [S²⁻] = Ka₁Ka₂[H₂S]/[H⁺]² (Ka₁ 1.0×10⁻⁷, Ka₂
        1.3×10⁻¹³), a +2-slope line. pH 1 → [S²⁻] ≈ 1.3×10⁻¹⁹ M (only CuS-type sulfides drop); pH 9
        → 1.3×10⁻³ M (MnS, ZnS drop too). pH selects the sulfide group
      </Readout>
    </div>
  )
}

// Complex-ion solubility: dissolving AgCl in ammonia. AgCl is nearly insoluble in
// water (s = √Ksp = 1.3×10⁻⁵ M), but NH₃ complexes the Ag⁺, pulling the dissolution
// equilibrium right: AgCl(s) + 2NH₃ ⇌ Ag(NH₃)₂⁺ + Cl⁻, K = Ksp·Kf = (1.8×10⁻¹⁰)
// (1.6×10⁷) = 2.9×10⁻³. With [Ag(NH₃)₂⁺] = [Cl⁻] = s and free [NH₃] = C − 2s,
// s/(C − 2s) = √K, so s = √K·(C − 2s). Solved per total ammonia C. At 1 M NH₃
// s ≈ 0.048 M, about 3600× the water value; the basis of dissolving AgCl precipitate
// in ammonia. Ksp/Kf web-searched (LibreTexts/dornshuld: K ≈ 3×10⁻³).
export function ComplexSolubilityViz() {
  const Ksp = 1.8e-10,
    Kf = 1.6e7
  const K = Ksp * Kf, // 2.88e-3
    rootK = Math.sqrt(K) // 0.0537
  const sOf = C => (rootK * C) / (1 + 2 * rootK) // solve s = rootK(C − 2s)
  const sWater = Math.sqrt(Ksp) // 1.34e-5
  const Cmax = 5
  const pts = []
  for (let C = 0; C <= Cmax + 1e-9; C += 0.1) pts.push([C, sOf(C)])
  return (
    <div style={{ width: '100%' }}>
      <Plot xRange={[-0.3, Cmax + 0.3]} yRange={[-0.02, 0.28]} width={560} height={320} pad={50}>
        <Polyline
          points={[
            [0, 0],
            [Cmax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [0, 0],
            [0, 0.26]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0.05, 0.1, 0.15, 0.2, 0.25].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [-0.3, y],
                [-0.1, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[-0.4, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y.toFixed(2)}
            </Label>
          </g>
        ))}
        {[1, 2, 3, 4, 5].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, -0.006]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, 0]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={14}>
              {x}
            </Label>
          </g>
        ))}
        {/* water baseline (essentially zero on this scale) */}
        <Polyline
          points={[
            [0, sWater],
            [Cmax, sWater]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="4 3"
        />
        <Tex
          at={[3.6, 0.02]}
          tex={'\\text{in water } s=1.3\\times10^{-5}\\,\\text{M}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Polyline points={pts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Dot x={1} y={sOf(1)} r={3} opacity={OPACITY.accent} />
        <Tex
          at={[1, sOf(1)]}
          tex={'0.048\\,\\text{M}'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
          dx={6}
          dy={-4}
        />
        <Tex
          at={[3.1, 0.2]}
          tex={'\\text{AgCl}+2\\text{NH}_3\\rightleftharpoons \\text{Ag(NH}_3)_2^+ + \\text{Cl}^-'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.fg}
        />
        <Tex
          at={[Cmax / 2, 0.28]}
          anchor="middle"
          tex={'\\mathrm{AgCl}\\ \\text{SOLUBILITY vs }\\mathrm{[NH_3]}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <Tex
          at={[Cmax + 0.3, 0]}
          anchor="end"
          tex={'\\text{total }\\mathrm{[NH_3]}\\ /\\ \\mathrm{M}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={28}
        />
        <Label at={[0, 0.26]} anchor="start" size={FONT_TINY} opacity={OPACITY.dim} dy={-2}>
          s / M
        </Label>
      </Plot>
      <Readout>
        NH₃ complexes Ag⁺, pulling AgCl into solution: K = Ksp·Kf = (1.8×10⁻¹⁰)(1.6×10⁷) = 2.9×10⁻³,
        s/(C−2s) = √K. In 1 M NH₃ s ≈ 0.048 M vs 1.3×10⁻⁵ M in water, ~3600× more soluble (why
        ammonia redissolves AgCl precipitate)
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 10, INDUSTRIAL & SUSTAINABLE CHEMISTRY

// % yield vs % atom economy, two INDEPENDENT green-chemistry metrics. Yield =
// (actual product)/(theoretical), how much of the intended reaction you captured.
// Atom economy = M(desired product)/Σ M(all products), what FRACTION of the reactant
// atoms end up in the product rather than as waste. A reaction can score high on one
// and low on the other. Atom economies COMPUTED from molar masses: addition
// (C₂H₄ + H₂ → C₂H₆) 100 %; elimination (cyclohexanol → cyclohexene + H₂O) 82 %;
// Wittig (PhCHO → styrene + Ph₃P=O) only 27 %, even at 85 % yield most atoms become
// Ph₃P=O waste. Yields are representative literature values (labelled as such).
export function YieldVsAtomEconomyViz() {
  const rxns = [
    { n: 'addition', sub: 'C₂H₄+H₂→C₂H₆', prod: 30.07, waste: 0, yield: 99 },
    { n: 'elimination', sub: 'cyclohexanol→ene', prod: 82.14, waste: 18.02, yield: 80 },
    { n: 'Wittig', sub: '→styrene+Ph₃PO', prod: 104.15, waste: 278.28, yield: 85 }
  ]
  const W = 560,
    H = 320,
    y0 = 240,
    x0 = 70
  const yOf = p => y0 - (p / 100) * (y0 - 50)
  const groupW = 130,
    bw = 44,
    gap = 14
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={x0}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[25, 50, 75, 100].map(p => (
          <g key={p}>
            <line
              x1={x0 - 4}
              y1={yOf(p)}
              x2={x0}
              y2={yOf(p)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={x0 - 8}
              y={yOf(p) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {p}
            </text>
          </g>
        ))}
        <text
          x={x0 - 8}
          y={24}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          % (yield vs atom economy)
        </text>
        {rxns.map((r, i) => {
          const gx = x0 + 30 + i * groupW
          const ae = (r.prod / (r.prod + r.waste)) * 100
          return (
            <g key={r.n}>
              {/* yield bar */}
              <rect
                x={gx}
                y={yOf(r.yield)}
                width={bw}
                height={y0 - yOf(r.yield)}
                fill={FG}
                fillOpacity={0.12}
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
              />
              <text
                x={gx + bw / 2}
                y={yOf(r.yield) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {r.yield}
              </text>
              <text
                x={gx + bw / 2}
                y={y0 + 14}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                yield
              </text>
              {/* atom-economy bar */}
              <rect
                x={gx + bw + gap}
                y={yOf(ae)}
                width={bw}
                height={y0 - yOf(ae)}
                fill={FG}
                fillOpacity={0.28}
                stroke={FG}
                strokeOpacity={OPACITY.fg}
                strokeWidth={STROKE_PRIMARY}
              />
              <text
                x={gx + bw + gap + bw / 2}
                y={yOf(ae) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {ae.toFixed(0)}
              </text>
              <text
                x={gx + bw + gap + bw / 2}
                y={y0 + 14}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                AE
              </text>
              {/* group label */}
              <text
                x={gx + bw + gap / 2}
                y={y0 + 30}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {r.n}
              </text>
              <text
                x={gx + bw + gap / 2}
                y={y0 + 44}
                fill={FG}
                opacity={OPACITY.faint}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {r.sub}
              </text>
            </g>
          )
        })}
        <text
          x={W / 2}
          y={H - 4}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          yield ≠ atom economy
        </text>
      </Canvas>
      <Readout>
        Two different questions. Atom economy (computed from molar masses): addition 100 %,
        elimination 82 %, Wittig 27 %. The Wittig runs at ~85 % YIELD yet wastes 73 % of its atoms
        as Ph₃P=O, a high yield with a poor atom economy. Green chemistry optimises both
      </Readout>
    </div>
  )
}

// Fractional distillation of liquid air. Air is separated by cooling it to a liquid
// (~80 K) and warming it in a fractionating column: components boil off in order of
// increasing boiling point. The three main gases have close but distinct b.p. (K,
// standard): N₂ 77.4 (boils off FIRST, most volatile), Ar 87.3, O₂ 90.2 (last). This
// tiny 13 K window is why the column must be tall and efficient. A temperature axis
// with the three boiling points marked in separation order.
export function AirDistillationViz() {
  const gases = [
    { n: 'N₂', Tb: 77.4, pct: '78 %', order: '1st off' },
    { n: 'Ar', Tb: 87.3, pct: '0.9 %', order: '2nd' },
    { n: 'O₂', Tb: 90.2, pct: '21 %', order: 'last' }
  ]
  const W = 560,
    H = 300
  const tMin = 74,
    tMax = 94
  const y0 = 60,
    y1 = 230
  const yOf = T => y1 - ((T - tMin) / (tMax - tMin)) * (y1 - y0)
  const axX = 150
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* temperature axis (vertical) */}
        <line
          x1={axX}
          y1={y0 - 10}
          x2={axX}
          y2={y1 + 10}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[76, 80, 84, 88, 92].map(T => (
          <g key={T}>
            <line
              x1={axX - 4}
              y1={yOf(T)}
              x2={axX}
              y2={yOf(T)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={axX - 8}
              y={yOf(T) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {T}
            </text>
          </g>
        ))}
        <text
          x={axX - 8}
          y={y0 - 18}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          T / K
        </text>
        <text
          x={axX - 40}
          y={(y0 + y1) / 2}
          fill={FG}
          opacity={OPACITY.faint}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
          transform={`rotate(-90 ${axX - 40} ${(y0 + y1) / 2})`}
        >
          boiling point (warming →)
        </text>
        {gases.map(g => (
          <g key={g.n}>
            <line
              x1={axX}
              y1={yOf(g.Tb)}
              x2={axX + 260}
              y2={yOf(g.Tb)}
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <circle cx={axX} cy={yOf(g.Tb)} r={4} fill={FG} opacity={OPACITY.fg} />
            <text
              x={axX + 268}
              y={yOf(g.Tb) + 3}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_SMALL}
              textAnchor="start"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {g.n + '  ' + g.Tb + ' K'}
            </text>
            <text
              x={axX + 150}
              y={yOf(g.Tb) - 5}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="start"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {g.order + ' · ' + g.pct + ' of air'}
            </text>
          </g>
        ))}
        {/* bracket for the 13 K window */}
        <g stroke={FG} strokeOpacity={OPACITY.accent} strokeWidth={STROKE_SECONDARY} fill="none">
          <line x1={axX + 20} y1={yOf(77.4)} x2={axX + 20} y2={yOf(90.2)} />
        </g>
        <text
          x={axX + 26}
          y={(yOf(77.4) + yOf(90.2)) / 2}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          13 K window
        </text>
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          fractional distillation of air
        </text>
      </Canvas>
      <Readout>
        Liquefy air, then warm: gases boil off in order of increasing b.p., N₂ (77.4 K) first, then
        Ar (87.3 K), then O₂ (90.2 K) last. The whole separation happens in a 13 K window, which is
        why an air-separation column must be tall and highly efficient
      </Readout>
    </div>
  )
}

// Lead-acid battery, a reversible galvanic cell. On discharge both electrodes convert
// to insoluble PbSO₄: at the anode (−) Pb + SO₄²⁻ → PbSO₄ + 2e⁻ (E° = −0.36 V); at the
// cathode (+) PbO₂ + SO₄²⁻ + 4H⁺ + 2e⁻ → PbSO₄ + 2H₂O (E° = +1.69 V). The cell
// potential is the difference E°_cell = 1.69 − (−0.36) = 2.05 V. Because both products
// adhere as solid PbSO₄, charging simply reverses the reactions, the cell is
// rechargeable. Honest labelled schematic (E° from standard potentials, CRC).
export function LeadAcidBatteryViz() {
  const W = 560,
    H = 320
  const anodeX = 150,
    cathodeX = 410,
    top = 90,
    bot = 250
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* electrolyte tank */}
        <rect
          x={90}
          y={110}
          width={W - 180}
          height={140}
          fill={FG}
          fillOpacity={0.04}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <TexPx
          x={W / 2}
          y={244}
          anchor="middle"
          tex={'\\text{electrolyte: aq. }\\mathrm{H_2SO_4}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={242}
        />
        {/* electrodes */}
        <rect
          x={anodeX - 12}
          y={top}
          width={24}
          height={bot - top}
          fill={FG}
          fillOpacity={0.18}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <rect
          x={cathodeX - 12}
          y={top}
          width={24}
          height={bot - top}
          fill={FG}
          fillOpacity={0.28}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={anodeX}
          y={top - 22}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_SMALL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Pb (−)
        </text>
        <TexPx
          x={cathodeX}
          y={top - 22}
          anchor="middle"
          tex={'\\mathrm{PbO_2}\\ \\ (+)'}
          size={FONT_SMALL}
          opacity={OPACITY.fg}
        />
        {/* external circuit */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          fill="none"
          strokeLinecap="round"
        >
          <path d={`M ${anodeX} ${top} L ${anodeX} 50 L ${cathodeX} 50 L ${cathodeX} ${top}`} />
          <polyline
            points={`${(anodeX + cathodeX) / 2 - 8},45 ${(anodeX + cathodeX) / 2},50 ${(anodeX + cathodeX) / 2 - 8},55`}
          />
        </g>
        <TexPx
          x={(anodeX + cathodeX) / 2}
          y={40}
          anchor="middle"
          tex={'\\mathrm{e^-}\\ (\\text{discharge})\\to'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        {/* half reactions */}
        <TexPx
          x={anodeX}
          y={272}
          anchor="middle"
          tex={'\\mathrm{Pb + SO_4^{2-} \\to PbSO_4 + 2e^-}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={264}
        />
        <TexPx
          x={anodeX}
          y={284}
          anchor="middle"
          tex={'E^\\circ = -0.36\\ \\mathrm{V}'}
          size={FONT_TINY}
          opacity={OPACITY.faint}
        />
        <TexPx
          x={cathodeX}
          y={272}
          anchor="middle"
          tex={'\\mathrm{PbO_2 + SO_4^{2-} + 4H^+ + 2e^- \\to PbSO_4 + 2H_2O}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={429}
        />
        <TexPx
          x={cathodeX}
          y={284}
          anchor="middle"
          tex={'E^\\circ = +1.69\\ \\mathrm{V}'}
          size={FONT_TINY}
          opacity={OPACITY.faint}
        />
        {/* cell potential */}
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={
            'E^\\circ_{\\text{cell}}=1.69-(-0.36)=2.05\\ \\mathrm{V}\\ \\cdot\\ \\text{rechargeable}\\ \\rightleftharpoons'
          }
          size={FONT_LABEL}
          opacity={OPACITY.fg}
          width={572}
        />
      </Canvas>
      <Readout>
        Discharge drives both electrodes to solid PbSO₄: anode Pb → PbSO₄ (E° −0.36 V), cathode PbO₂
        → PbSO₄ (E° +1.69 V) → E°_cell = 2.05 V. Because PbSO₄ stays put on the plates, charging
        reverses the reactions, the reversibility that makes it rechargeable
      </Readout>
    </div>
  )
}

// Silicate structures, corner-sharing sets the Si:O ratio. Every silicate is built
// from SiO₄ tetrahedra; the more corners (bridging O) each tetrahedron shares, the
// less oxygen per silicon. Sharing s corners removes s/2 O per Si from the isolated
// SiO₄, so O:Si = 4 − s/2 EXACTLY: orthosilicate s=0 → SiO₄⁴⁻ (1:4); pyrosilicate s=1
// → Si₂O₇⁶⁻ (2:7); chain/pyroxene s=2 → SiO₃²⁻ (1:3); sheet s=3 → Si₂O₅²⁻ (2:5);
// framework/quartz s=4 → SiO₂ (1:2). The O:Si ratio is COMPUTED from the sharing count.
export function SilicateSharingViz() {
  const rows = [
    { n: 'orthosilicate', s: 0, unit: 'SiO₄⁴⁻', ratio: '1:4' },
    { n: 'pyrosilicate', s: 1, unit: 'Si₂O₇⁶⁻', ratio: '2:7' },
    { n: 'chain (pyroxene)', s: 2, unit: 'SiO₃²⁻', ratio: '1:3' },
    { n: 'sheet (mica)', s: 3, unit: 'Si₂O₅²⁻', ratio: '2:5' },
    { n: 'framework (quartz)', s: 4, unit: 'SiO₂', ratio: '1:2' }
  ]
  const W = 560,
    H = 320,
    y0 = 250,
    x0 = 80
  const oPerSi = s => 4 - s / 2
  const yOf = o => y0 - ((o - 1.5) / (4 - 1.5)) * (y0 - 60)
  const bw = 62,
    gap = 32
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={x0 - 10}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[2, 2.5, 3, 3.5, 4].map(o => (
          <g key={o}>
            <line
              x1={x0 - 14}
              y1={yOf(o)}
              x2={x0 - 10}
              y2={yOf(o)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={x0 - 18}
              y={yOf(o) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {o.toFixed(1)}
            </text>
          </g>
        ))}
        <TexPx
          x={x0 - 18}
          y={30}
          anchor="start"
          tex={'\\mathrm{O:Si}=4-\\dfrac{\\text{shared corners}}{2}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={352}
        />
        {rows.map((r, i) => {
          const bx = x0 + i * (bw + gap)
          const o = oPerSi(r.s)
          const emph = r.s === 4
          return (
            <g key={r.n}>
              <rect
                x={bx}
                y={yOf(o)}
                width={bw}
                height={y0 - yOf(o)}
                fill={FG}
                fillOpacity={emph ? 0.28 : 0.14}
                stroke={FG}
                strokeOpacity={emph ? OPACITY.fg : OPACITY.dim}
                strokeWidth={emph ? STROKE_PRIMARY : STROKE_SECONDARY}
              />
              <text
                x={bx + bw / 2}
                y={yOf(o) - 16}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {'O:Si ' + o.toFixed(1)}
              </text>
              <text
                x={bx + bw / 2}
                y={yOf(o) - 4}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {r.unit}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 14}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {r.s + ' shared'}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 28}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {r.ratio}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 44}
                fill={FG}
                opacity={OPACITY.faint}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {r.n}
              </text>
            </g>
          )
        })}
        <text
          x={W / 2}
          y={H - 4}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          more shared corners → less O per Si
        </text>
      </Canvas>
      <Readout>
        Each bridging (shared) corner removes ½ an O per Si, so O:Si = 4 − s/2 exactly: ortho 4
        (SiO₄⁴⁻) → pyro 3.5 → chain 3 (SiO₃²⁻) → sheet 2.5 → framework 2 (SiO₂, quartz). Sharing all
        4 corners gives neutral silica; fewer shared corners need more counter-cations
      </Readout>
    </div>
  )
}

// Cathodic protection on the E° scale. Iron corrodes because it is oxidised
// (Fe²⁺/Fe, E° = −0.44 V). Bolting on a metal that is MORE easily oxidised, a more
// negative E°, makes that metal the anode instead: zinc (Zn²⁺/Zn, E° = −0.76 V) is
// oxidised preferentially and the iron becomes the cathode, protected as long as the
// "sacrificial" zinc lasts (galvanising, ship hulls, pipelines). Shown on a vertical
// E° axis: whichever couple sits LOWER (more negative) is the sacrificial anode.
// Standard reduction potentials (CRC): Zn −0.76, Fe −0.44 V.
export function CathodicProtectionViz() {
  const couples = [
    { n: 'Mg²⁺/Mg', E: -2.37, note: 'also used (very active)' },
    { n: 'Zn²⁺/Zn', E: -0.76, note: 'sacrificial anode, oxidises first' },
    { n: 'Fe²⁺/Fe', E: -0.44, note: 'protected (becomes cathode)' }
  ]
  const W = 560,
    H = 300
  const eMin = -2.6,
    eMax = 0
  const x0 = 200,
    y0 = 50,
    y1 = 250
  const yOf = E => y1 - ((E - eMin) / (eMax - eMin)) * (y1 - y0)
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={x0}
          y1={y0}
          x2={x0}
          y2={y1}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0, -0.5, -1.0, -1.5, -2.0, -2.5].map(E => (
          <g key={E}>
            <line
              x1={x0 - 4}
              y1={yOf(E)}
              x2={x0}
              y2={yOf(E)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={x0 - 8}
              y={yOf(E) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {E.toFixed(1)}
            </text>
          </g>
        ))}
        <TexPx
          x={x0 - 8}
          y={y0 - 12}
          anchor="middle"
          tex={'E^\\circ\\ /\\ \\mathrm{V}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <text
          x={x0 + 6}
          y={y1 + 18}
          fill={FG}
          opacity={OPACITY.faint}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          more negative = more easily oxidised ↓
        </text>
        {couples.map(c => {
          const y = yOf(c.E)
          const isFe = c.n.startsWith('Fe')
          return (
            <g key={c.n}>
              <line
                x1={x0}
                y1={y}
                x2={x0 + 60}
                y2={y}
                stroke={FG}
                strokeOpacity={isFe ? OPACITY.fg : OPACITY.accent}
                strokeWidth={isFe ? STROKE_PRIMARY : STROKE_EMPHASIS}
              />
              <circle cx={x0} cy={y} r={4} fill={FG} opacity={isFe ? OPACITY.fg : OPACITY.accent} />
              <text
                x={x0 + 68}
                y={y - 4}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="start"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {c.n + '  ' + c.E.toFixed(2) + ' V'}
              </text>
              <text
                x={x0 + 68}
                y={y + 9}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="start"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {c.note}
              </text>
            </g>
          )
        })}
        {/* protection arrow Zn -> Fe */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          fill="none"
          strokeLinecap="round"
        >
          <path d={`M ${x0 - 40} ${yOf(-0.76)} L ${x0 - 40} ${yOf(-0.44)}`} />
          <polyline
            points={`${x0 - 45},${yOf(-0.44) + 8} ${x0 - 40},${yOf(-0.44)} ${x0 - 35},${yOf(-0.44) + 8}`}
          />
        </g>
        <text
          x={x0 - 46}
          y={(yOf(-0.76) + yOf(-0.44)) / 2}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="end"
          style={{ fontFamily: FONT_FAMILY }}
        >
          Zn protects Fe
        </text>
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          sacrificial (cathodic) protection
        </text>
      </Canvas>
      <Readout>
        Iron (Fe²⁺/Fe, E° −0.44 V) is protected by bonding a metal with a MORE negative E° that
        oxidises in its place: zinc (−0.76 V) or magnesium (−2.37 V). The more-active metal is the
        sacrificial anode; the iron becomes the cathode and survives until the anode is consumed
      </Readout>
    </div>
  )
}

// Fuel-cell vs heat-engine efficiency, a PLAIN efficiency bar (NOT a Sankey). A heat
// engine is capped by the Carnot limit and real engines reach only ~40 %. A fuel cell
// converts chemical free energy directly, so its thermodynamic ceiling is ΔG°/ΔH°,
// which for H₂ + ½O₂ → H₂O(l) is 237.1/285.8 = 83 % (not Carnot-limited); real PEM
// cells reach ~60 %. Shown as three simple efficiency bars, an honest side-by-side,
// deliberately NOT a decorative energy-flow (Sankey) diagram. Values: ΔG° −237.1,
// ΔH° −285.8 kJ/mol (standard thermodynamic tables).
export function FuelCellEfficiencyViz() {
  const dG = 237.1,
    dH = 285.8
  const fcMax = (dG / dH) * 100 // 82.96 %
  const bars = [
    { n: 'heat engine', s: 'real (Carnot-limited)', eff: 40 },
    { n: 'fuel cell', s: 'practical (PEM)', eff: 60 },
    { n: 'fuel cell', s: 'thermodynamic ΔG°/ΔH°', eff: fcMax }
  ]
  const W = 560,
    H = 300,
    y0 = 230,
    x0 = 90
  const yOf = e => y0 - (e / 100) * (y0 - 50)
  const bw = 96,
    gap = 40
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <line
          x1={x0}
          y1={y0}
          x2={W - 20}
          y2={y0}
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[20, 40, 60, 80, 100].map(e => (
          <g key={e}>
            <line
              x1={x0 - 4}
              y1={yOf(e)}
              x2={x0}
              y2={yOf(e)}
              stroke={FG}
              strokeOpacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <text
              x={x0 - 8}
              y={yOf(e) + 3}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="end"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {e}
            </text>
          </g>
        ))}
        <text
          x={x0 - 8}
          y={38}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="start"
          style={{ fontFamily: FONT_FAMILY }}
        >
          efficiency / %
        </text>
        {bars.map((b, i) => {
          const bx = x0 + 30 + i * (bw + gap)
          const emph = i === 2
          return (
            <g key={i}>
              <rect
                x={bx}
                y={yOf(b.eff)}
                width={bw}
                height={y0 - yOf(b.eff)}
                fill={FG}
                fillOpacity={emph ? 0.28 : 0.14}
                stroke={FG}
                strokeOpacity={emph ? OPACITY.fg : OPACITY.dim}
                strokeWidth={emph ? STROKE_PRIMARY : STROKE_SECONDARY}
              />
              <text
                x={bx + bw / 2}
                y={yOf(b.eff) - 6}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_LABEL}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.eff.toFixed(0) + '%'}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 16}
                fill={FG}
                opacity={OPACITY.fg}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.n}
              </text>
              <text
                x={bx + bw / 2}
                y={y0 + 30}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.s}
              </text>
            </g>
          )
        })}
        <text
          x={W / 2}
          y={H - 6}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          direct ΔG conversion beats the Carnot limit
        </text>
      </Canvas>
      <Readout>
        A fuel cell converts chemical free energy directly, so it dodges the Carnot limit: its
        ceiling is ΔG°/ΔH° = 237.1/285.8 = 83 % for H₂ + ½O₂ → H₂O(l), vs ~40 % for a real heat
        engine (practical PEM cells ~60 %). Plain efficiency bars, not an energy-flow diagram
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 02 (RE-OPENED), why period-3 π bonds are weak
// PiOverlapDistanceViz REPLACES the withdrawn attempt. That version used per-element
// diffuse 3p Slater orbitals for Si; the extra radial extent compensated the longer
// bond, so the raw 2p vs 3p π overlaps came out near-equal (0.29 vs 0.25) and did not
// support the headline. THIS version isolates the real driver, internuclear DISTANCE
//, with a single fixed 2p orbital, and asks how σ (end-on) vs π (side-on) overlap
// decay as the bond lengthens. Closed-form equal-ζ Slater 2p–2p overlap integrals in
// p = ζR (Mulliken, Rieke, Orloff & Orloff, J. Chem. Phys. 17, 1248 (1949)):
//   S_σ(p) = e^(−p)·(1 + p + p²/5 − 2p³/15 − p⁴/15)   (end-on, 2pσ)
//   S_π(p) = e^(−p)·(1 + p + 2p²/5 + p³/15)           (side-on, 2pπ)
// (both validated here against a 3-D numerical grid integral to 3–4 sig figs).
// ζ_2p(C) = 1.5679 a₀⁻¹ (Clementi–Raimondi 1963); a₀ = 0.529177 Å. Bond lengths:
// C=C 1.34 Å (ethene) → R = 2.53 a₀; Si=Si 2.14 Å (first stable disilene, West/Fink/
// Michl 1981) → R = 4.04 a₀. Result: over that stretch |S_π| collapses 0.292→0.071
// (~4×) while |S_σ| only falls 0.317→0.223 (~1.4×), so the π/σ overlap ratio drops
// from 0.92 to 0.31. Side-on π overlap needs the short distance that only small first-
// row atoms reach; larger period-3 atoms bond too far apart for good π overlap, the
// standard overlap-vs-distance rationale for weak heavy-element π bonding. HONEST
// SCOPE: this isolates the geometric/distance factor (fixed 2p orbital); it does not
// claim Si's actual 3p overlap (which the diffuse 3p partly offsets). LANDMINE 2 held:
// every point is the closed-form overlap integral, not a drawn curve.
export function PiOverlapDistanceViz() {
  const A0 = 0.529177 // Å
  const zeta = 1.5679 // ζ_2p(C), Clementi–Raimondi
  const Ssig = R => {
    const p = zeta * R
    return Math.abs(
      Math.exp(-p) * (1 + p + (p * p) / 5 - (2 * p * p * p) / 15 - (p * p * p * p) / 15)
    )
  }
  const Spi = R => {
    const p = zeta * R
    return Math.exp(-p) * (1 + p + (2 * p * p) / 5 + (p * p * p) / 15)
  }
  const RCC = 1.34 / A0, // 2.532 a₀
    RSi = 2.14 / A0 // 4.044 a₀
  const Rmin = 1.5,
    Rmax = 6.2
  const sigPts = [],
    piPts = []
  for (let R = Rmin; R <= Rmax + 1e-9; R += 0.05) {
    sigPts.push([R, Ssig(R)])
    piPts.push([R, Spi(R)])
  }
  const sPiCC = Spi(RCC),
    sSiPi = Spi(RSi),
    sPiSig = Ssig(RCC),
    sSiSig = Ssig(RSi)
  return (
    <div style={{ width: '100%' }}>
      <Plot
        xRange={[Rmin - 0.2, Rmax + 0.2]}
        yRange={[-0.03, 0.52]}
        width={560}
        height={330}
        pad={48}
      >
        <Polyline
          points={[
            [Rmin, 0],
            [Rmax, 0]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        <Polyline
          points={[
            [Rmin, 0],
            [Rmin, 0.5]
          ]}
          opacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
        />
        {[0.1, 0.2, 0.3, 0.4, 0.5].map(y => (
          <g key={y}>
            <Polyline
              points={[
                [Rmin - 0.2, y],
                [Rmin, y]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[Rmin - 0.26, y]} anchor="end" size={FONT_TINY} opacity={OPACITY.dim}>
              {y.toFixed(1)}
            </Label>
          </g>
        ))}
        {[2, 3, 4, 5, 6].map(x => (
          <g key={x}>
            <Polyline
              points={[
                [x, 0],
                [x, -0.012]
              ]}
              opacity={OPACITY.dim}
              strokeWidth={STROKE_SECONDARY}
            />
            <Label at={[x, 0]} anchor="middle" size={FONT_TINY} opacity={OPACITY.dim} dy={14}>
              {x}
            </Label>
          </g>
        ))}
        {/* bond-distance guides */}
        <Polyline
          points={[
            [RCC, 0],
            [RCC, 0.5]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="3 3"
        />
        <Polyline
          points={[
            [RSi, 0],
            [RSi, 0.5]
          ]}
          opacity={OPACITY.faint}
          strokeWidth={STROKE_HAIR}
          dash="3 3"
        />
        <Tex
          at={[RCC, 0.5]}
          tex={'\\text{C=C}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-2}
        />
        <Tex
          at={[RSi, 0.5]}
          tex={'\\text{Si=Si}'}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={-2}
        />
        {/* σ curve (end-on) */}
        <Polyline points={sigPts} opacity={OPACITY.dim} strokeWidth={STROKE_PRIMARY} />
        <Tex
          at={[3.15, Ssig(3.15)]}
          tex={'|S_\\sigma|\\ (\\text{end-on})'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dx={6}
          dy={-6}
        />
        {/* π curve (side-on) — the fast decayer */}
        <Polyline points={piPts} opacity={OPACITY.fg} strokeWidth={STROKE_PRIMARY} />
        <Tex
          at={[2.5, Spi(2.5)]}
          tex={'|S_\\pi|\\ (\\text{side-on})'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.fg}
          dx={8}
          dy={-8}
        />
        {/* marked points */}
        <Dot x={RCC} y={sPiCC} r={3.5} opacity={OPACITY.accent} />
        <Dot x={RSi} y={sSiPi} r={3.5} opacity={OPACITY.accent} />
        <Dot x={RCC} y={sPiSig} r={3} opacity={OPACITY.dim} />
        <Dot x={RSi} y={sSiSig} r={3} opacity={OPACITY.dim} />
        <Tex
          at={[RSi, sSiPi]}
          tex={'\\text{S}_\\pi=0.07'}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.accent}
          dx={6}
          dy={-4}
        />
        <Tex
          at={[RCC, sPiCC]}
          tex={'0.29'}
          anchor="end"
          size={FONT_TINY}
          opacity={OPACITY.accent}
          dx={-4}
          dy={-4}
        />
        <Label
          at={[(Rmin + Rmax) / 2 + 0.4, 0.52]}
          anchor="middle"
          size={FONT_TINY}
          opacity={OPACITY.dim}
        >
          2p OVERLAP vs BOND DISTANCE
        </Label>
        <Tex
          at={[Rmax + 0.2, 0]}
          anchor="end"
          tex={'\\text{internuclear }R\\ /\\ a_0'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dy={28}
        />
        <Label
          at={[Rmin, 0.5]}
          anchor="start"
          size={FONT_TINY}
          opacity={OPACITY.dim}
          dx={-38}
          dy={-2}
        >
          |overlap S|
        </Label>
      </Plot>
      <Readout>
        Side-on π overlap decays far faster with distance than end-on σ (closed-form Slater 2p
        integrals). Stretching from the C=C bond (2.53 a₀) to the Si=Si bond (4.04 a₀), |S_π|
        collapses 0.29 → 0.07 (~4×) while |S_σ| only falls 0.32 → 0.22 (~1.4×): the π/σ ratio drops
        0.92 → 0.31. Large period-3 atoms bond too far apart for good π overlap, why C=C is common
        but Si=Si is rare and reactive. (Isolates the distance factor with a fixed 2p orbital.)
      </Readout>
    </div>
  )
}

// LOW TIER · UNIT 10 (RE-OPENED), INDUSTRIAL PROCESS FLOWS
// These were parked as "elk-defer", but elk (@xyflow) only AUTO-POSITIONS boxes; it
// contributes no chemistry. A process flow is boxes + arrows carrying real, balanced
// reactions and cited operating conditions, so hand-laying it out is the genuine
// diagram, not a decorative substitute (unlike a hand-drawn orbital lobe, which fakes a
// computed field). Landmine 1/2 untouched: no curve or field is faked here, every
// arrow is a balanced equation, every condition a cited plant value. Shared idiom
// matches the accepted schematic rows (SpectrometerBlock/CombustionAnalysis/Corrosion).

// Non-exported helper: horizontal box chain with condition-labelled arrows.
function ProcessChain({ boxes, bw = 100, bh = 60, gap = 18, by = 96, W = 560 }) {
  const total = boxes.length * bw + (boxes.length - 1) * gap
  const x0 = (W - total) / 2
  return (
    <g>
      {boxes.map((b, i) => {
        const bx = x0 + i * (bw + gap)
        const isProduct = b.product
        return (
          <g key={b.t + i}>
            <rect
              x={bx}
              y={by}
              width={bw}
              height={bh}
              fill={FG}
              fillOpacity={isProduct ? 0.14 : 0.05}
              stroke={FG}
              strokeOpacity={isProduct ? OPACITY.fg : OPACITY.dim}
              strokeWidth={isProduct ? STROKE_PRIMARY : STROKE_SECONDARY}
            />
            <text
              x={bx + bw / 2}
              y={by + 24}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_SMALL}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY, letterSpacing: '0.04em' }}
            >
              {b.t}
            </text>
            {b.s && (
              <text
                x={bx + bw / 2}
                y={by + 40}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.s}
              </text>
            )}
            {b.s2 && (
              <text
                x={bx + bw / 2}
                y={by + 51}
                fill={FG}
                opacity={OPACITY.dim}
                fontSize={FONT_TINY}
                textAnchor="middle"
                style={{ fontFamily: FONT_FAMILY }}
              >
                {b.s2}
              </text>
            )}
            {i < boxes.length - 1 && (
              <g
                stroke={FG}
                strokeOpacity={OPACITY.dim}
                strokeWidth={STROKE_SECONDARY}
                fill="none"
                strokeLinecap="round"
              >
                <line x1={bx + bw} y1={by + bh / 2} x2={bx + bw + gap} y2={by + bh / 2} />
                <polyline
                  points={`${bx + bw + gap - 6},${by + bh / 2 - 4} ${bx + bw + gap},${by + bh / 2} ${bx + bw + gap - 6},${by + bh / 2 + 4}`}
                />
                {b.arrow && (
                  <text
                    x={bx + bw + gap / 2}
                    y={by + bh / 2 - 10}
                    fill={FG}
                    opacity={OPACITY.dim}
                    fontSize={FONT_TINY}
                    textAnchor="middle"
                    style={{ fontFamily: FONT_FAMILY }}
                  >
                    {b.arrow}
                  </text>
                )}
              </g>
            )}
          </g>
        )
      })}
    </g>
  )
}

// Haber–Bosch ammonia synthesis. N₂ + 3H₂ ⇌ 2NH₃ (exothermic). Cited plant conditions:
// iron catalyst (K₂O/Al₂O₃-promoted), ≈450 °C and ≈200 atm, a kinetic/equilibrium
// compromise, since high pressure and low T favour NH₃ (4 mol gas → 2) but low T is too
// slow (LibreTexts; GeeksforGeeks; US 4,271,136). Only ~15% converts per pass, so
// unreacted N₂/H₂ are cooled to liquefy NH₃ out and recycled (LibreTexts).
export function HaberProcessViz() {
  const W = 560,
    H = 300
  const boxes = [
    { t: 'FEED', s: 'N₂ + 3H₂', s2: '1 : 3 by vol', arrow: 'compress' },
    { t: 'CONVERTER', s: 'Fe catalyst', s2: '≈450 °C, ≈200 atm', arrow: '≈15% / pass' },
    { t: 'CONDENSER', s: 'cool + liquefy', s2: 'separate NH₃', arrow: 'NH₃(l)' },
    { t: 'NH₃', s: 'to fertiliser', product: true }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <TexPx
          x={W / 2}
          y={34}
          anchor="middle"
          tex={'\\mathrm{N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)}\\quad\\Delta H < 0'}
          size={FONT_LABEL}
          opacity={OPACITY.fg}
          width={363}
        />
        <ProcessChain boxes={boxes} W={W} />
        {/* recycle loop: condenser back to converter */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          fill="none"
          strokeLinecap="round"
        >
          <path d="M 366 156 L 366 216 L 205 216 L 205 156" strokeDasharray="4 3" />
          <polyline points="199,168 205,156 211,168" />
        </g>
        <TexPx
          x={285}
          y={232}
          anchor="middle"
          tex={'\\text{unreacted }\\mathrm{N_2 + H_2}\\text{ recycled}'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
          width={286}
        />
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          Haber–Bosch process
        </text>
      </Canvas>
      <Readout>
        N₂ + 3H₂ ⇌ 2NH₃ over a promoted iron catalyst at ≈450 °C and ≈200 atm. High pressure favours
        NH₃ (4 gas mol → 2) and the reaction is exothermic so low T favours product, but T is kept
        at 450 °C for a workable rate. Only ~15% converts per pass, so N₂/H₂ are recycled after NH₃
        is condensed out. Conditions: LibreTexts / GeeksforGeeks
      </Readout>
    </div>
  )
}

// Ostwald process, nitric acid from Haber ammonia, in three balanced steps (Wikipedia;
// Grokipedia; ACS IECR 2018). (1) Catalytic oxidation over 90:10 Pt–Rh gauze at ~900 °C,
// up to ~8 atm: 4NH₃ + 5O₂ → 4NO + 6H₂O (strongly exothermic). (2) Cool, then
// 2NO + O₂ → 2NO₂ (the brown gas). (3) Absorb: 3NO₂ + H₂O → 2HNO₃ + NO, the NO recycled
// back to the oxidiser. Net: NH₃ + 2O₂ → HNO₃ + H₂O.
export function OstwaldProcessViz() {
  const W = 560,
    H = 300
  const boxes = [
    { t: 'NH₃ + air', s: 'feed 1:~9', arrow: 'Pt-Rh' },
    { t: 'BURNER', s: 'Pt-Rh gauze', s2: '~900 °C, ~8 atm', arrow: 'NO' },
    { t: 'OXIDISER', s: 'cool + O₂', s2: '2NO+O₂→2NO₂', arrow: 'NO₂' },
    { t: 'ABSORBER', s: '+H₂O tower', s2: '→ 2HNO₃ + NO', arrow: 'HNO₃' },
    { t: 'HNO₃', s: 'nitric acid', product: true }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <TexPx
          x={W / 2}
          y={34}
          anchor="middle"
          tex={
            '\\mathrm{4NH_3 + 5O_2 \\to 4NO + 6H_2O}\\quad(\\text{then }\\mathrm{NO \\to NO_2 \\to HNO_3})'
          }
          size={FONT_LABEL}
          opacity={OPACITY.fg}
          width={528}
        />
        <ProcessChain boxes={boxes} bw={92} gap={14} W={W} />
        {/* NO recycle: absorber back to oxidiser */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.accent}
          strokeWidth={STROKE_SECONDARY}
          fill="none"
          strokeLinecap="round"
        >
          <path d="M 435 156 L 435 210 L 300 210 L 300 156" strokeDasharray="4 3" />
          <polyline points="294,168 300,156 306,168" />
        </g>
        <text
          x={367}
          y={226}
          fill={FG}
          opacity={OPACITY.accent}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          NO recycled to re-oxidise
        </text>
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          Ostwald process
        </text>
      </Canvas>
      <Readout>
        Three balanced steps turn Haber ammonia into nitric acid: (1) 4NH₃ + 5O₂ → 4NO + 6H₂O over
        90:10 Pt–Rh gauze at ~900 °C; (2) 2NO + O₂ → 2NO₂ on cooling; (3) 3NO₂ + H₂O → 2HNO₃ + NO,
        with NO recycled. Net NH₃ + 2O₂ → HNO₃ + H₂O. Conditions: Wikipedia / ACS IECR 2018
      </Readout>
    </div>
  )
}

// Contact process, sulfuric acid. Distinct from ContactConversionViz (the SO₃ yield-vs-T
// curve); this is the plant flow. (1) Burn sulfur: S + O₂ → SO₂. (2) The heart:
// 2SO₂ + O₂ ⇌ 2SO₃ over V₂O₅ at ~450 °C and 1–2 atm (low P suffices; exothermic, so a
// moderate T is the rate/yield compromise). (3) SO₃ is NOT put in water (fog); it is
// absorbed in conc. H₂SO₄: SO₃ + H₂SO₄ → H₂S₂O₇ (oleum). (4) Dilute: H₂S₂O₇ + H₂O →
// 2H₂SO₄. Conditions: Wikipedia / LibreTexts / Testbook.
export function ContactProcessViz() {
  const W = 560,
    H = 300
  const boxes = [
    { t: 'FURNACE', s: 'S + O₂', s2: '→ SO₂', arrow: 'SO₂' },
    { t: 'CONVERTER', s: 'V₂O₅, ~450 °C', s2: '2SO₂+O₂⇌2SO₃', arrow: 'SO₃' },
    { t: 'ABSORBER', s: 'into H₂SO₄', s2: '→ H₂S₂O₇', arrow: 'oleum' },
    { t: 'DILUTE', s: '+ H₂O', s2: '→ 2H₂SO₄', arrow: 'H₂SO₄' },
    { t: 'H₂SO₄', s: 'conc. acid', product: true }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <TexPx
          x={W / 2}
          y={34}
          anchor="middle"
          tex={
            '\\mathrm{2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)}\\quad\\mathrm{V_2O_5},\\ {\\sim}450\\,^\\circ\\mathrm{C},\\ 1\\text{–}2\\ \\mathrm{atm}'
          }
          size={FONT_LABEL}
          opacity={OPACITY.fg}
          width={550}
        />
        <ProcessChain boxes={boxes} bw={92} gap={14} W={W} />
        <text
          x={W / 2}
          y={196}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          SO₃ absorbed in acid, not water (avoids H₂SO₄ fog), then oleum diluted
        </text>
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          Contact process
        </text>
      </Canvas>
      <Readout>
        Sulfur → SO₂ → SO₃ → H₂SO₄. The key step 2SO₂ + O₂ ⇌ 2SO₃ runs over V₂O₅ at ~450 °C and 1–2
        atm (exothermic; moderate T balances rate vs yield). SO₃ is absorbed into conc. H₂SO₄ as
        oleum H₂S₂O₇, then diluted (H₂S₂O₇ + H₂O → 2H₂SO₄) to avoid a dangerous acid fog.
        Conditions: Wikipedia / LibreTexts
      </Readout>
    </div>
  )
}

// Claus process, recovering elemental sulfur from H₂S (refinery acid gas). Two steps
// (Wikipedia; NETL; ScienceDirect). Thermal: burn ⅓ of the H₂S above ~850 °C,
// 2H₂S + 3O₂ → 2SO₂ + 2H₂O, leaving a 2:1 H₂S:SO₂ ratio. Catalytic (alumina):
// 2H₂S + SO₂ → 3S + 2H₂O. Net 2H₂S + O₂ → 2S + 2H₂O; ~60–70% of the sulfur forms in the
// thermal stage, overall recovery ~95–97% over 2–3 catalytic beds.
export function ClausProcessViz() {
  const W = 560,
    H = 300
  const boxes = [
    { t: 'ACID GAS', s: 'H₂S feed', arrow: 'air' },
    { t: 'THERMAL', s: '>850 °C', s2: '⅓ H₂S→SO₂', arrow: '~⅔ S' },
    { t: 'CATALYTIC', s: 'Al₂O₃ beds', s2: '2H₂S+SO₂→3S', arrow: 'S(l)' },
    { t: 'SULFUR', s: '~95–97%', product: true }
  ]
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <TexPx
          x={W / 2}
          y={34}
          anchor="middle"
          tex={
            '\\mathrm{2H_2S + SO_2 \\to 3S + 2H_2O}\\quad(\\text{net }\\mathrm{2H_2S + O_2 \\to 2S + 2H_2O})'
          }
          size={FONT_LABEL}
          opacity={OPACITY.fg}
          width={572}
        />
        <ProcessChain boxes={boxes} W={W} />
        <text
          x={W / 2}
          y={196}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          burn only ⅓ of the H₂S → sets the 2 : 1 H₂S : SO₂ ratio the Claus reaction needs
        </text>
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          Claus sulfur recovery
        </text>
      </Canvas>
      <Readout>
        Sulfur recovery from refinery H₂S. Thermal stage burns ⅓ of the H₂S above 850 °C (2H₂S + 3O₂
        → 2SO₂ + 2H₂O), fixing a 2:1 H₂S:SO₂ ratio; the catalytic stage over alumina runs 2H₂S + SO₂
        → 3S + 2H₂O. ~60–70% of the sulfur forms thermally; 2–3 catalytic beds push recovery to
        ~95–97%. Reactions: Wikipedia / NETL
      </Readout>
    </div>
  )
}

// V₂O₅ catalytic cycle, the mechanism inside the Contact-process converter, drawn as a
// genuine two-state redox loop (not a decorative ring). The vanadium shuttles between
// V⁵⁺ (V₂O₅) and V⁴⁺ (V₂O₄): (1) V₂O₅ oxidises SO₂, SO₂ + V₂O₅ → SO₃ + V₂O₄; (2) O₂
// re-oxidises the catalyst, 2V₂O₄ + O₂ → 2V₂O₅. The two half-steps sum to the net
// 2SO₂ + O₂ → 2SO₃ with V₂O₅ regenerated (it is a catalyst). Mechanism standard
// (Contact-process oxidation-state accounting; Wikipedia / textbook).
export function VanadiumCatalyticCycleViz() {
  const W = 560,
    H = 300
  const cx = 280,
    cy = 150,
    A = { x: 170, y: 150 },
    B = { x: 390, y: 150 }
  const ahead = (x, y, ang) => {
    const s = 8
    return `${(x - s * Math.cos(ang - 0.4)).toFixed(1)},${(y - s * Math.sin(ang - 0.4)).toFixed(1)} ${x},${y} ${(x - s * Math.cos(ang + 0.4)).toFixed(1)},${(y - s * Math.sin(ang + 0.4)).toFixed(1)}`
  }
  const topCtrl = { x: cx, y: 62 },
    botCtrl = { x: cx, y: 238 }
  const angB = Math.atan2(B.y - topCtrl.y, B.x - topCtrl.x) // into B on top arc
  const angA = Math.atan2(A.y - botCtrl.y, A.x - botCtrl.x) // into A on bottom arc
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        {/* top arc A→B (SO₂ oxidised) */}
        <g stroke={FG} fill="none" strokeLinecap="round">
          <path
            d={`M ${A.x + 40} ${A.y - 6} Q ${topCtrl.x} ${topCtrl.y} ${B.x - 40} ${B.y - 6}`}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          <polyline
            points={ahead(B.x - 40, B.y - 6, angB)}
            strokeOpacity={OPACITY.fg}
            strokeWidth={STROKE_PRIMARY}
          />
          {/* bottom arc B→A (O₂ regenerates) */}
          <path
            d={`M ${B.x - 40} ${B.y + 6} Q ${botCtrl.x} ${botCtrl.y} ${A.x + 40} ${A.y + 6}`}
            strokeOpacity={OPACITY.accent}
            strokeWidth={STROKE_PRIMARY}
          />
          <polyline
            points={ahead(A.x + 40, A.y + 6, angA)}
            strokeOpacity={OPACITY.accent}
            strokeWidth={STROKE_PRIMARY}
          />
        </g>
        {/* state nodes */}
        {[
          { p: A, t: 'V₂O₅', s: 'V⁵⁺' },
          { p: B, t: 'V₂O₄', s: 'V⁴⁺' }
        ].map(n => (
          <g key={n.t}>
            <circle
              cx={n.p.x}
              cy={n.p.y}
              r={34}
              fill={FG}
              fillOpacity={0.06}
              stroke={FG}
              strokeOpacity={OPACITY.fg}
              strokeWidth={STROKE_PRIMARY}
            />
            <text
              x={n.p.x}
              y={n.p.y - 2}
              fill={FG}
              opacity={OPACITY.fg}
              fontSize={FONT_LABEL}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {n.t}
            </text>
            <text
              x={n.p.x}
              y={n.p.y + 14}
              fill={FG}
              opacity={OPACITY.dim}
              fontSize={FONT_TINY}
              textAnchor="middle"
              style={{ fontFamily: FONT_FAMILY }}
            >
              {n.s}
            </text>
          </g>
        ))}
        {/* arc labels */}
        <TexPx
          x={cx}
          y={80}
          anchor="middle"
          tex={'\\mathrm{SO_2 \\to SO_3}\\ \\ (\\mathrm{V_2O_5}\\ \\text{oxidises }\\mathrm{SO_2})'}
          size={FONT_TINY}
          opacity={OPACITY.fg}
          width={330}
        />
        <TexPx
          x={cx}
          y={228}
          anchor="middle"
          tex={'+\\,\\tfrac{1}{2}\\mathrm{O_2}\\ \\ \\text{(catalyst re-oxidised)}'}
          size={FONT_TINY}
          opacity={OPACITY.accent}
          width={319}
        />
        <TexPx
          x={W / 2}
          y={34}
          anchor="middle"
          tex={
            '\\text{net: }\\mathrm{2SO_2 + O_2 \\to 2SO_3}\\ \\cdot\\ \\mathrm{V_2O_5}\\ \\text{regenerated}'
          }
          size={FONT_LABEL}
          opacity={OPACITY.fg}
          width={462}
        />
        <TexPx
          x={W / 2}
          y={H - 8}
          anchor="middle"
          tex={'\\mathrm{V_2O_5}\\ \\text{catalytic cycle (Contact process)}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
          width={418}
        />
      </Canvas>
      <Readout>
        Inside the Contact converter the vanadium shuttles V⁵⁺⇄V⁴⁺: V₂O₅ oxidises SO₂ (SO₂ + V₂O₅ →
        SO₃ + V₂O₄), then O₂ re-oxidises it (2V₂O₄ + O₂ → 2V₂O₅). The two half-steps sum to 2SO₂ +
        O₂ → 2SO₃ with the catalyst regenerated, the definition of a catalytic cycle. Mechanism:
        oxidation-state accounting
      </Readout>
    </div>
  )
}

// Three-way catalytic converter, the automotive exhaust cleanup, over a Pt/Pd/Rh
// washcoat. Three balanced reactions run together: oxidation of CO (2CO + O₂ → 2CO₂)
// and unburnt hydrocarbons (e.g. C₈H₁₈-type CₓHᵧ + O₂ → CO₂ + H₂O), and reduction of
// NOₓ using CO as reductant (2CO + 2NO → N₂ + 2CO₂). Rh drives the NO reduction, Pt/Pd
// the oxidations. Turns three regulated pollutants into CO₂, N₂, H₂O. Reactions standard.
export function CatalyticConverterViz() {
  const W = 560,
    H = 300
  const bx = 190,
    bw = 180,
    by = 70,
    bh = 150
  const rxns = ['2CO + O₂ → 2CO₂', '2CO + 2NO → N₂ + 2CO₂', 'CₓHᵧ + O₂ → CO₂ + H₂O']
  return (
    <div style={{ width: '100%' }}>
      <Canvas w={W} h={H}>
        <text
          x={W / 2}
          y={34}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_LABEL}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, letterSpacing: '0.06em' }}
        >
          three-way converter · Pt · Pd · Rh
        </text>
        {/* converter body */}
        <rect
          x={bx}
          y={by}
          width={bw}
          height={bh}
          fill={FG}
          fillOpacity={0.05}
          stroke={FG}
          strokeOpacity={OPACITY.fg}
          strokeWidth={STROKE_PRIMARY}
        />
        <text
          x={bx + bw / 2}
          y={by + 20}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, letterSpacing: '0.06em' }}
        >
          Pt / Pd / Rh honeycomb
        </text>
        {rxns.map((r, i) => (
          <text
            key={i}
            x={bx + bw / 2}
            y={by + 48 + i * 26}
            fill={FG}
            opacity={OPACITY.fg}
            fontSize={FONT_TINY}
            textAnchor="middle"
            style={{ fontFamily: FONT_FAMILY }}
          >
            {r}
          </text>
        ))}
        {/* inlet */}
        <g
          stroke={FG}
          strokeOpacity={OPACITY.dim}
          strokeWidth={STROKE_SECONDARY}
          fill="none"
          strokeLinecap="round"
        >
          <line x1={40} y1={by + bh / 2} x2={bx} y2={by + bh / 2} />
          <polyline
            points={`${bx - 6},${by + bh / 2 - 4} ${bx},${by + bh / 2} ${bx - 6},${by + bh / 2 + 4}`}
          />
          <line x1={bx + bw} y1={by + bh / 2} x2={W - 40} y2={by + bh / 2} />
          <polyline
            points={`${W - 46},${by + bh / 2 - 4} ${W - 40},${by + bh / 2} ${W - 46},${by + bh / 2 + 4}`}
          />
        </g>
        <text
          x={95}
          y={by + bh / 2 - 10}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          exhaust in
        </text>
        <text
          x={95}
          y={by + bh / 2 + 20}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          CO · NOₓ · HC
        </text>
        <text
          x={W - 95}
          y={by + bh / 2 - 10}
          fill={FG}
          opacity={OPACITY.fg}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY }}
        >
          clean out
        </text>
        <TexPx
          x={W - 95}
          y={by + bh / 2 + 20}
          anchor="middle"
          tex={'\\mathrm{CO_2}\\cdot\\mathrm{N_2}\\cdot\\mathrm{H_2O}'}
          size={FONT_TINY}
          opacity={OPACITY.dim}
        />
        <text
          x={W / 2}
          y={H - 8}
          fill={FG}
          opacity={OPACITY.dim}
          fontSize={FONT_TINY}
          textAnchor="middle"
          style={{ fontFamily: FONT_FAMILY, textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          catalytic converter
        </text>
      </Canvas>
      <Readout>
        Over a Pt/Pd/Rh washcoat, three reactions run at once: CO oxidation (2CO + O₂ → 2CO₂),
        hydrocarbon oxidation (CₓHᵧ + O₂ → CO₂ + H₂O), and NOₓ reduction using CO (2CO + 2NO → N₂ +
        2CO₂). Rh favours the reduction, Pt/Pd the oxidations, converting CO, NOₓ and unburnt fuel
        into CO₂, N₂ and H₂O
      </Readout>
    </div>
  )
}
