// Arithmetic and Geometric Sequences
// Viz for AP/GP sequences, sums, infinite series, and the well-tempered clavier.
//
// REFINE pass 2026-07-02: ar.22–ar.30 refit against the math contract -
// all fit-to-frame scaleY/scaleX normalizations removed (forbidden mode 2),
// axes fixed or explicitly declared log, readout values moved to KatexInline
// rows under the canvas, exact integer/rational arithmetic where the domain
// permits. ar.175/ar.176 (ZenoStack, APForwardBackwardStack) untouched -
// shipped reference implementations.

import { useState, Fragment } from 'react'
import { Mafs, Coordinates, Point, Text, Line, LaTeX, Polygon, Vector } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline, Toggle } from '../../../primitives'
import { useVizColors, OPACITY } from '../../../theme'
import { FONT_FAMILY, FONT_LABEL, FONT_TEX, LS_CONTROL } from '../../../scale-tokens'

const SLIDER_ROW = {
  display: 'flex',
  gap: 16,
  justifyContent: 'center',
  marginTop: 8,
  flexWrap: 'wrap'
}

// Readout row under the canvas - house convention (values never on canvas).
const READOUT_ROW = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px 28px',
  justifyContent: 'center',
  marginTop: 12,
  fontFamily: FONT_FAMILY,
  fontSize: FONT_LABEL,
  letterSpacing: LS_CONTROL
}

const gcdInt = (x, y) => {
  x = Math.abs(x)
  y = Math.abs(y)
  while (y) {
    const t = x % y
    x = y
    y = t
  }
  return x
}

// Reduced-fraction TeX for an integer ratio p/q (q > 0).
const fracTex = (p, q) => {
  const g = gcdInt(p, q) || 1
  const pn = p / g
  const qn = q / g
  return qn === 1 ? `${pn}` : `\\tfrac{${pn}}{${qn}}`
}

// 1. ArithmeticProgressionLine - ar.22
// aₙ = a + (n−1)d plotted at TRUE values on a fixed linear frame: the slope
// now changes honestly with d, and negative d dips below the zero line.
// Engine: A (Mafs) - WebSearch 2026-07-02 "best in-browser JS engine,
// discrete sequence plot": only banned dashboard stacks surfaced
// (Plotly/Chart.js/Highcharts/ECharts/D3/Recharts). No swap.
// Section: arithmetic-and-geometric-sequences §1 (anchor unverified - logged).
// Math (exact integers): a∈[1,20], d∈[−5,10], n=1..10 ⇒
// a₁₀ ∈ [1+9·(−5), 20+9·10] = [−44, 110]; fixed frame y∈[−50,115] holds all.
export function ArithmeticProgressionLine({ C }) {
  const [a, setA] = useState(2)
  const [d, setD] = useState(3)
  const N = 10
  const points = Array.from({ length: N }, (_, i) => [i + 1, a + i * d])
  const last = a + (N - 1) * d
  const GRID = [-25, 25, 50, 75, 100]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Arithmetic progression: terms at true values on a fixed linear axis"
    >
      <Mafs viewBox={{ x: [-1.9, N + 1], y: [-50, 115] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian
          xAxis={{
            lines: false,
            labels: n => (Number.isInteger(n) && n >= 1 && n <= N ? `${n}` : '')
          }}
          yAxis={false}
        />
        {GRID.map(g => (
          <Line.Segment
            key={g}
            point1={[0.3, g]}
            point2={[N + 0.7, g]}
            color={C.faint}
            weight={1}
          />
        ))}
        {[0, ...GRID].map(g => (
          <LaTeX key={`yl${g}`} at={[-1, g]} tex={String(g)} color={C.dim} />
        ))}
        {/* AP is linear: one segment through first and last true point */}
        <Line.Segment point1={points[0]} point2={points[N - 1]} color={C.dim} weight={1} />
        {points.map(([x, y]) => (
          <Point key={x} x={x} y={y} color={C.fg} />
        ))}
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="First term a"
          value={a}
          min={1}
          max={20}
          step={1}
          onChange={setA}
          format={v => v.toFixed(0)}
        />
        <Slider
          label="Difference d"
          value={d}
          min={-5}
          max={10}
          step={1}
          onChange={setD}
          format={v => v.toFixed(0)}
        />
      </div>
      <div
        aria-label="AP readout: last term computed from live a and d"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`a_{10} = ${a} + 9 \\cdot ${d < 0 ? `(${d})` : d} = ${last}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'a_n = a_1 + (n-1)\\,d'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          constant step: a straight line
        </span>
      </div>
    </div>
  )
}

// 2. APSumGaussPairing - ar.23
// Gauss pairing of 1 + 3 + … + (2n−1): terms sit at their TRUE positions on a
// fixed value axis (no per-n rescale); nested pairs each span first + last.
// Engine: A (Mafs) - same WebSearch sweep as ar.22 (banned stacks only). No swap.
// Section: arithmetic-and-geometric-sequences §2 (anchor unverified - logged).
// Math (exact integers): a=1, d=2 ⇒ terms 2k−1; l = 2n−1; pair sum = 2n;
// S = (n/2)·2n = n². Check n=10: 5 pairs × 20 = 100 = 10². Max term (n=14) = 27.
export function APSumGaussPairing({ C }) {
  const [n, setN] = useState(10)
  const a = 1
  const d = 2
  const terms = Array.from({ length: n }, (_, i) => a + i * d)
  const l = terms[n - 1]
  const pairSum = a + l
  const pairs = n / 2 // n forced even by the slider
  const S = (n * pairSum) / 2
  const X_MAX = 28 // fixed frame: max possible term = 2·14 − 1 = 27

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Gauss pairing: terms at true positions, nested pairs share one sum"
    >
      <Mafs
        viewBox={{ x: [-1.4, X_MAX + 1.8], y: [-1.7, 9.0] }}
        preserveAspectRatio={false}
        height={300}
      >
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {/* value axis - horizontal position IS the term value */}
        <Line.Segment point1={[0, 0]} point2={[X_MAX, 0]} color={C.dim} weight={1} />
        {[0, 5, 10, 15, 20, 25].map(v => (
          <Fragment key={v}>
            <Line.Segment point1={[v, -0.18]} point2={[v, 0.18]} color={C.dim} weight={1} />
            <LaTeX at={[v, -0.8]} tex={String(v)} color={C.dim} />
          </Fragment>
        ))}
        {Array.from({ length: pairs }, (_, i) => {
          const tl = terms[i]
          const tr = terms[n - 1 - i]
          const y = 7.4 - i
          return (
            <Fragment key={i}>
              {i === 0 && (
                <>
                  <Line.Segment point1={[tl, 0]} point2={[tl, y]} color={C.faint} weight={1} />
                  <Line.Segment point1={[tr, 0]} point2={[tr, y]} color={C.faint} weight={1} />
                </>
              )}
              <Line.Segment
                point1={[tl, y]}
                point2={[tr, y]}
                color={i === 0 ? C.accent : C.dim}
                weight={i === 0 ? 2 : 1}
              />
              <Point x={tl} y={y} color={C.fg} />
              <Point x={tr} y={y} color={C.fg} />
              <LaTeX at={[tl - 0.9, y]} tex={String(tl)} color={C.fg} />
              <LaTeX at={[tr + 0.9, y]} tex={String(tr)} color={C.fg} />
            </Fragment>
          )
        })}
        {/* one on-canvas pair label (all pairs share it - stated once) */}
        <LaTeX at={[pairSum / 2, 8.35]} tex={`${a} + ${l} = ${pairSum}`} color={C.accent} />
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="Terms n"
          value={n}
          min={4}
          max={14}
          step={2}
          onChange={v => setN(Math.round(v / 2) * 2)}
          format={v => v.toFixed(0)}
        />
      </div>
      <div
        aria-label="Gauss pairing readout: pair count times pair sum"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`S_{${n}} = \\tfrac{${n}}{2}\\,(${a} + ${l}) = ${pairs} \\times ${pairSum} = ${S}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`${S} = ${n}^2`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          every pair sums the same: first + last
        </span>
      </div>
    </div>
  )
}

// 3. GeometricProgressionLine - ar.24
// aₙ = a·rⁿ⁻¹ on a DECLARED log₁₀ axis with fixed decades: equal ×r steps
// become equal vertical steps, so a GP is a straight line whose slope is
// log₁₀ r. Replaces the fit-to-frame scaleY (forbidden mode 2).
// Engine: A (Mafs) - WebSearch 2026-07-02 "visualize exponential growth log
// scale honest": semilog is the standard honest rendering (straight line ⇔
// exponential; Datawrapper/Robbins); position encoding, not bar lengths, on
// log axes (Robbins/Cleveland). Only banned chart stacks surfaced. No swap.
// Section: arithmetic-and-geometric-sequences §3 (anchor unverified - logged).
// Math: log₁₀(a·rⁿ⁻¹) = log₁₀ a + (n−1)·log₁₀ r - linear in n (exact identity).
// Domain a∈[1,10], r∈[1.2,3], n=1..8 ⇒ log₁₀ a₈ ∈ [7·log₁₀1.2 ≈ 0.554·? min 0,
// max 1 + 7·log₁₀3 = 1 + 3.339 = 4.34] - fixed frame y∈[−0.5, 4.85] holds all.
export function GeometricProgressionLine({ C }) {
  const [a, setA] = useState(1)
  const [r, setR] = useState(2)
  const N = 8
  const vals = Array.from({ length: N }, (_, i) => a * Math.pow(r, i))
  const logPts = vals.map((v, i) => [i + 1, Math.log10(v)])
  const rExact = Number.isInteger(r)
  const lastFmt = vals[N - 1] >= 100 ? String(Math.round(vals[N - 1])) : vals[N - 1].toFixed(2)

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Geometric progression on a declared log-10 axis with fixed decades"
    >
      <Mafs
        viewBox={{ x: [-1.8, N + 1], y: [-0.5, 4.85] }}
        preserveAspectRatio={false}
        height={280}
      >
        <Coordinates.Cartesian
          xAxis={{
            lines: false,
            labels: n => (Number.isInteger(n) && n >= 1 && n <= N ? `${n}` : '')
          }}
          yAxis={false}
        />
        {[0, 1, 2, 3, 4].map(k => (
          <Fragment key={k}>
            <Line.Segment
              point1={[0.25, k]}
              point2={[N + 0.75, k]}
              color={k === 0 ? C.dim : C.faint}
              weight={1}
            />
            <LaTeX at={[-0.95, k]} tex={k === 0 ? '1' : `10^{${k}}`} color={C.dim} />
          </Fragment>
        ))}
        <LaTeX
          at={[N / 2 + 0.5, 4.6]}
          tex={'a_n\\text{:}\\; \\log_{10}\\ \\text{scale}'}
          color={C.dim}
        />
        {/* log positions are exactly collinear: log a + (n−1)·log r */}
        <Line.Segment point1={logPts[0]} point2={logPts[N - 1]} color={C.dim} weight={1} />
        {logPts.map(([x, y]) => (
          <Point key={x} x={x} y={y} color={C.accent} />
        ))}
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="First term a"
          value={a}
          min={1}
          max={10}
          step={1}
          onChange={setA}
          format={v => v.toFixed(0)}
        />
        <Slider
          label="Ratio r"
          value={r}
          min={1.2}
          max={3}
          step={0.1}
          onChange={v => setR(Math.round(v * 10) / 10)}
          format={v => v.toFixed(1)}
        />
      </div>
      <div
        aria-label="GP readout: last term and log-slope from live a and r"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`a_8 = ${a} \\cdot ${rExact ? r : r.toFixed(1)}^{7} ${rExact ? `= ${vals[N - 1]}` : `\\approx ${lastFmt}`}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\text{step height} = \\log_{10} r \\approx ${Math.log10(r).toFixed(3)}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          equal ×r steps: straight on a log axis
        </span>
      </div>
    </div>
  )
}

// 4. APvsGPComparison - ar.25
// Linear vs exponential from the same start a = 2, on one FIXED linear frame:
// d and r are live, the GP honestly leaves the frame at high r, and the first
// n with GP > AP is computed by scan. Replaces hard-coded arrays + scaleY.
// Engine: A (Mafs) - same WebSearch sweep as ar.22 (banned stacks only). No swap.
// Section: arithmetic-and-geometric-sequences §4 (anchor unverified - logged).
// Math check (defaults d=5, r=1.6): AP 2,7,…,47; GP 2·1.6ⁿ⁻¹: n=7 gives
// 2·1.6⁶ = 33.55 > 32 = AP₇ - first overtake n = 7. Max in-frame AP = 92.
export function APvsGPComparison({ C }) {
  const [d, setD] = useState(5)
  const [r, setR] = useState(1.6)
  const a = 2
  const N = 10
  const Y_MAX = 100
  const apV = Array.from({ length: N }, (_, i) => a + i * d)
  const gpV = Array.from({ length: N }, (_, i) => a * Math.pow(r, i))
  let overtake = null
  for (let i = 0; i < N; i++) {
    if (gpV[i] > apV[i]) {
      overtake = i + 1
      break
    }
  }
  const rExact = Number.isInteger(r)
  const gpEndFmt = gpV[N - 1] >= 100 ? String(Math.round(gpV[N - 1])) : gpV[N - 1].toFixed(1)
  // last GP index still inside the frame (for the curve tag)
  let gpIn = 0
  for (let i = 0; i < N; i++) if (gpV[i] <= Y_MAX) gpIn = i
  // de-collide the two curve tags: frame maps y-span 115 onto 280 px, so
  // 18 units = 18·280/115 ≈ 43.8 px ≥ the 40 px label rule
  let apTagY = apV[N - 1]
  let gpTagY = gpV[N - 1]
  const gpTagAtEnd = gpV[N - 1] <= Y_MAX
  if (gpTagAtEnd && Math.abs(apTagY - gpTagY) < 18) {
    const mid = (apTagY + gpTagY) / 2
    const s = apTagY >= gpTagY ? 1 : -1
    apTagY = mid + 9 * s
    gpTagY = mid - 9 * s
  }

  return (
    <div
      style={{ width: '100%' }}
      aria-label="AP versus GP from the same start on a fixed linear frame"
    >
      <Mafs viewBox={{ x: [-1.8, N + 2.4], y: [-7, 108] }} preserveAspectRatio={false} height={280}>
        <Coordinates.Cartesian
          xAxis={{
            lines: false,
            labels: n => (Number.isInteger(n) && n >= 1 && n <= N ? `${n}` : '')
          }}
          yAxis={false}
        />
        {[25, 50, 75, 100].map(g => (
          <Line.Segment
            key={g}
            point1={[0.3, g]}
            point2={[N + 0.7, g]}
            color={C.faint}
            weight={1}
          />
        ))}
        {[0, 25, 50, 75, 100].map(g => (
          <LaTeX key={`yl${g}`} at={[-0.95, g]} tex={String(g)} color={C.dim} />
        ))}
        {overtake && (
          <Line.Segment
            point1={[overtake, 0]}
            point2={[overtake, Y_MAX]}
            color={C.dim}
            weight={1}
            style="dashed"
          />
        )}
        {apV.slice(0, -1).map((y, i) => (
          <Line.Segment
            key={`ap${i}`}
            point1={[i + 1, y]}
            point2={[i + 2, apV[i + 1]]}
            color={C.dim}
            weight={2}
          />
        ))}
        {gpV.slice(0, -1).map((y, i) => (
          <Line.Segment
            key={`gp${i}`}
            point1={[i + 1, y]}
            point2={[i + 2, gpV[i + 1]]}
            color={C.accent}
            weight={2}
          />
        ))}
        {apV.map((y, i) => (
          <Point key={`app${i}`} x={i + 1} y={y} color={C.dim} />
        ))}
        {gpV.map((y, i) =>
          y <= Y_MAX + 6 ? <Point key={`gpp${i}`} x={i + 1} y={y} color={C.accent} /> : null
        )}
        <Text x={N + 0.35} y={apTagY} size={FONT_TEX} attach="e" color={C.dim}>
          AP
        </Text>
        {gpTagAtEnd ? (
          <Text x={N + 0.35} y={gpTagY} size={FONT_TEX} attach="e" color={C.accent}>
            GP
          </Text>
        ) : (
          <Text x={gpIn + 1 + 0.35} y={gpV[gpIn]} size={FONT_TEX} attach="e" color={C.accent}>
            GP
          </Text>
        )}
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="AP step d"
          value={d}
          min={1}
          max={10}
          step={1}
          onChange={setD}
          format={v => v.toFixed(0)}
        />
        <Slider
          label="GP ratio r"
          value={r}
          min={1.1}
          max={2}
          step={0.1}
          onChange={v => setR(Math.round(v * 10) / 10)}
          format={v => v.toFixed(1)}
        />
      </div>
      <div
        aria-label="AP versus GP readout: tenth terms and first overtake"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`\\text{AP: } a_{10} = 2 + 9 \\cdot ${d} = ${apV[N - 1]}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\text{GP: } a_{10} = 2 \\cdot ${rExact ? r : r.toFixed(1)}^{9} ${rExact ? `= ${gpV[N - 1]}` : `\\approx ${gpEndFmt}`}`}
          />
        </span>
        <span>
          {overtake ? (
            <KatexInline tex={`\\text{GP} > \\text{AP from } n = ${overtake}`} />
          ) : (
            <KatexInline tex={`\\text{GP} \\le \\text{AP through } n = 10`} />
          )}
        </span>
      </div>
    </div>
  )
}

// 5. GPSumDerivation - ar.26
// REBUILT in place (was: bar chart of partial sums with a pasted formula -
// forbidden modes 2/5: normalized bars, no mechanism). Now the telescoping
// derivation itself: Sₙ over r·Sₙ, aligned by equal terms; subtracting
// cancels every interior term, leaving (r−1)Sₙ = a·rⁿ − a. Modeled on the
// shipped ar.176 lattice.
// Engine: A (Mafs) - WebSearch 2026-07-02 "telescoping sum cancellation viz":
// no engine beyond banned generic stacks / WebGL toys surfaced; an aligned
// TeX lattice is Mafs territory (LaTeX-at-coordinates), per the ar.176
// precedent. No swap.
// Section: arithmetic-and-geometric-sequences §5 (anchor unverified - logged).
// Math (exact integers; a∈[1,3], r∈{2,3}, n∈[3,6], max a·rⁿ = 3·3⁶ = 2187):
// Sₙ = a + ar + … + arⁿ⁻¹ (reduce); r·Sₙ = ar + … + arⁿ; ar^k cancels for
// k = 1..n−1; check a=1, r=2, n=4: S = 15, rS = 30, rS − S = 15 = 2⁴ − 1 ✓.
export function GPSumDerivation({ C }) {
  const [a, setA] = useState(1)
  const [r, setR] = useState(2)
  const [n, setN] = useState(4)
  const terms = Array.from({ length: n + 1 }, (_, k) => a * r ** k) // a·r^k, k = 0..n
  const S = terms.slice(0, n).reduce((s, v) => s + v, 0)
  const rS = r * S
  const closed = (terms[n] - a) / (r - 1) // a(rⁿ−1)/(r−1), exact integer
  const Y = { topLabel: 2.52, top: 2.1, bot: 1.3, botLabel: 0.88, res: 0.02, caption: -0.62 }

  return (
    <div
      style={{ width: '100%' }}
      aria-label="GP sum derivation: r times the sum over the sum, interior terms cancel"
    >
      <Mafs
        viewBox={{ x: [-1.9, n + 1.9], y: [-1.05, 3.0] }}
        preserveAspectRatio={false}
        height={260}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />
        <LaTeX at={[-0.8, Y.top]} tex={'S_n'} color={C.dim} />
        <LaTeX at={[-0.8, Y.bot]} tex={'r\\,S_n'} color={C.dim} />
        <LaTeX at={[-0.8, Y.res]} tex={'\\text{left}'} color={C.fg} />
        {terms.map((v, k) => {
          const x = k + 1
          const cancels = k >= 1 && k <= n - 1
          return (
            <Fragment key={k}>
              {k < n && (
                <>
                  <LaTeX at={[x, Y.topLabel]} tex={String(v)} color={cancels ? C.dim : C.fg} />
                  <Point x={x} y={Y.top} color={cancels ? C.dim : C.fg} />
                </>
              )}
              {k >= 1 && (
                <>
                  <Point x={x} y={Y.bot} color={cancels ? C.dim : C.fg} />
                  <LaTeX at={[x, Y.botLabel]} tex={String(v)} color={cancels ? C.dim : C.fg} />
                </>
              )}
              {cancels && (
                <>
                  <Line.Segment
                    point1={[x, Y.top - 0.14]}
                    point2={[x, Y.bot + 0.14]}
                    color={C.dim}
                    weight={1}
                  />
                  <Line.Segment
                    point1={[x - 0.35, Y.topLabel - 0.16]}
                    point2={[x + 0.35, Y.topLabel + 0.16]}
                    color={C.dim}
                    weight={1}
                  />
                  <Line.Segment
                    point1={[x - 0.35, Y.botLabel - 0.16]}
                    point2={[x + 0.35, Y.botLabel + 0.16]}
                    color={C.dim}
                    weight={1}
                  />
                </>
              )}
            </Fragment>
          )
        })}
        {/* survivors of rSₙ − Sₙ */}
        <LaTeX at={[1, Y.res]} tex={`-${a}`} color={C.fg} />
        <LaTeX at={[n + 1, Y.res]} tex={`+${terms[n]}`} color={C.fg} />
        <LaTeX
          at={[(n + 2) / 2, Y.caption]}
          tex={`(r-1)\\,S_n = ${terms[n]} - ${a} = ${rS - S}`}
          color={C.dim}
        />
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="First term a"
          value={a}
          min={1}
          max={3}
          step={1}
          onChange={setA}
          format={v => v.toFixed(0)}
        />
        <Slider
          label="Ratio r"
          value={r}
          min={2}
          max={3}
          step={1}
          onChange={setR}
          format={v => v.toFixed(0)}
        />
        <Slider
          label="Terms n"
          value={n}
          min={3}
          max={6}
          step={1}
          onChange={setN}
          format={v => v.toFixed(0)}
        />
      </div>
      <div
        aria-label="GP sum readout: the sum and the closed form it telescopes to"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={`S_{${n}} = ${terms.slice(0, n).join(' + ')} = ${S}`} />
        </span>
        <span>
          <KatexInline
            tex={`\\dfrac{a\\,(r^{${n}}-1)}{r-1} = \\dfrac{${terms[n] - a}}{${r - 1}} = ${closed}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          multiply by r, subtract: the inside cancels
        </span>
      </div>
    </div>
  )
}

// 6. WellTemperedClavierFrequencies - ar.27
// Equal temperament as a GP: fₖ = 440·2^(k/12) drawn on a FIXED linear
// frequency axis (constant scale, zero-based - drawn ratios are true ratios;
// the exponential curvature across uniform semitone steps IS the lesson).
// Live input: semitone k highlights one note; its frequency lives below.
// Engine: A (Mafs) - same WebSearch sweep as ar.22/ar.24; frequency bars on a
// linear scale are position/length-honest; no allowed-engine conflict. No swap.
// Section: arithmetic-and-geometric-sequences §6 (anchor unverified - logged).
// Math: r = 2^(1/12) (irrational - displayed with ≈); f₀ = 440 and f₁₂ = 880
// exact (2^(12/12) = 2). Hand check k=7 (E): 2^(7/12) = e^(0.5776·0.7) ≈
// 1.4983 ⇒ f₇ ≈ 659.3 Hz ✓.
export function WellTemperedClavierFrequencies({ C }) {
  const [k, setK] = useState(7)
  const BASE = 440
  const NOTES = ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A′']
  const freqs = Array.from({ length: 13 }, (_, i) => BASE * 2 ** (i / 12))
  const F_MAX = 880
  const yOf = f => (7 * f) / F_MAX // fixed affine map to the frame - constant, not fit-to-data
  const exact = k === 0 || k === 12

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Equal temperament: twelve equal frequency ratios from A440 to A880"
    >
      <Mafs viewBox={{ x: [-2.1, 13.5], y: [-1.5, 8.1] }} preserveAspectRatio={false} height={300}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {/* frequency gridlines at 440 and 880 - the octave doubling */}
        {[440, 880].map(f => (
          <Fragment key={f}>
            <Line.Segment
              point1={[-0.55, yOf(f)]}
              point2={[12.55, yOf(f)]}
              color={C.faint}
              weight={1}
            />
            <LaTeX at={[-1.35, yOf(f)]} tex={String(f)} color={C.dim} />
          </Fragment>
        ))}
        <Line.Segment point1={[-0.55, 0]} point2={[12.55, 0]} color={C.dim} weight={1} />
        {freqs.map((f, i) => (
          <Fragment key={i}>
            <Polygon
              points={[
                [i - 0.3, 0],
                [i + 0.3, 0],
                [i + 0.3, yOf(f)],
                [i - 0.3, yOf(f)]
              ]}
              color={C.fg}
              fillOpacity={i === k ? 0.85 : 0.22}
              strokeOpacity={0}
            />
            <Text x={i} y={-0.62} size={FONT_LABEL} color={i === k ? C.fg : C.dim}>
              {NOTES[i]}
            </Text>
          </Fragment>
        ))}
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="Semitone k"
          value={k}
          min={0}
          max={12}
          step={1}
          onChange={setK}
          format={v => NOTES[Math.round(v)]}
        />
      </div>
      <div
        aria-label="Equal temperament readout: selected note frequency and the common ratio"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`f_{${k}} = 440 \\cdot 2^{${k}/12} ${exact ? `= ${Math.round(freqs[k])}` : `\\approx ${freqs[k].toFixed(1)}`}\\ \\text{Hz}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'r = 2^{1/12} \\approx 1.05946'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          twelve equal ratios make one octave
        </span>
      </div>
    </div>
  )
}

// 7. SequencePositionMap - ar.28
// REBUILT in place (was: a second hard-coded AP-vs-GP plot - redundant with
// ar.25, no inputs, normalized y). Now the *position map* itself: a sequence
// as a function n ↦ aₙ, arrows from the uniform index line to a true-scale
// value line. AP arrows land in equal steps; GP arrows fan out multiplicatively
// and honestly leave the frame past 50.
// Engine: A (Mafs) - WebSearch 2026-07-02 "number line mapping diagram":
// nothing beyond banned generic stacks surfaced; two-line arrow diagram is
// plain Mafs geometry. No swap.
// Section: arithmetic-and-geometric-sequences §8 (anchor unverified - logged).
// Math: AP aₙ = 1 + (n−1)d exact integers (d∈[1,6] ⇒ a₈ ≤ 43 in frame);
// GP aₙ = rⁿ⁻¹ (r∈[1.2,2]); r=2 ⇒ a₇ = 64, a₈ = 128 leave the 0–50 line ✓.
export function SequencePositionMap({ C }) {
  const [geo, setGeo] = useState(false)
  const [d, setD] = useState(3)
  const [r, setR] = useState(2)
  const N = 8
  const V_MAX = 50
  const rExact = Number.isInteger(r)
  const vals = Array.from({ length: N }, (_, i) => (geo ? Math.pow(r, i) : 1 + i * d))
  const xTop = i => 3 + (i * 44) / (N - 1)
  const offFrame = vals.filter(v => v > V_MAX).length
  const a8 = vals[N - 1]
  const a8Fmt =
    a8 >= 100 ? String(Math.round(a8)) : Number.isInteger(a8) ? String(a8) : a8.toFixed(2)

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Position map: arrows send each index n to its term value on a true number line"
    >
      <Mafs viewBox={{ x: [-2.5, 56], y: [-1.6, 3.5] }} preserveAspectRatio={false} height={240}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        {/* index line (uniform) */}
        <Line.Segment point1={[2.2, 2.6]} point2={[47.8, 2.6]} color={C.dim} weight={1} />
        {Array.from({ length: N }, (_, i) => (
          <Fragment key={i}>
            <Point x={xTop(i)} y={2.6} color={C.fg} />
            <LaTeX at={[xTop(i), 3.08]} tex={String(i + 1)} color={C.dim} />
          </Fragment>
        ))}
        {/* value line (true scale 0–50) */}
        <Line.Segment point1={[0, 0]} point2={[V_MAX, 0]} color={C.dim} weight={1} />
        {[0, 10, 20, 30, 40, 50].map(v => (
          <Fragment key={v}>
            <Line.Segment point1={[v, -0.14]} point2={[v, 0.14]} color={C.dim} weight={1} />
            <LaTeX at={[v, -0.75]} tex={String(v)} color={C.dim} />
          </Fragment>
        ))}
        {/* the map n ↦ aₙ - arrows to TRUE positions; big terms exit the frame */}
        {vals.map((v, i) => (
          <Vector
            key={i}
            tail={[xTop(i), 2.42]}
            tip={[v, 0.16]}
            color={i === N - 1 ? C.accent : C.dim}
          />
        ))}
        {vals.map((v, i) => (v <= V_MAX ? <Point key={`f${i}`} x={v} y={0} color={C.fg} /> : null))}
      </Mafs>
      <div style={SLIDER_ROW}>
        <Toggle on={geo} onChange={setGeo} label={geo ? 'geometric ×r' : 'arithmetic +d'} />
        {!geo && (
          <Slider
            label="Step d"
            value={d}
            min={1}
            max={6}
            step={1}
            onChange={setD}
            format={v => v.toFixed(0)}
          />
        )}
        {geo && (
          <Slider
            label="Ratio r"
            value={r}
            min={1.2}
            max={2}
            step={0.1}
            onChange={v => setR(Math.round(v * 10) / 10)}
            format={v => v.toFixed(1)}
          />
        )}
      </div>
      <div
        aria-label="Position map readout: the rule and where the eighth term lands"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          {geo ? (
            <KatexInline tex={`a_n = ${rExact ? r : r.toFixed(1)}^{\\,n-1}`} />
          ) : (
            <KatexInline tex={`a_n = 1 + (n-1) \\cdot ${d}`} />
          )}
        </span>
        <span>
          <KatexInline tex={`a_8 ${geo && !rExact ? '\\approx' : '='} ${a8Fmt}`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          {geo
            ? offFrame > 0
              ? `gaps multiply by r: ${offFrame} term${offFrame > 1 ? 's' : ''} beyond 50, off frame`
              : 'gaps multiply by r'
            : 'equal gaps of d'}
        </span>
      </div>
    </div>
  )
}

// 8. MixedSequenceIdentifier - ar.29
// REBUILT in place (was: three dots at fixed x with seven floating Text
// readouts - canvas-as-text-panel, float-epsilon ratio test). Now real
// geometry on one true-scale number line: a₂ (crosshair) is AP exactly when
// it lands on the arithmetic mean of a₁,a₃, GP exactly when it lands on
// their geometric mean - both markers drawn at true positions (AM ≥ GM).
// Tests are exact integer arithmetic: d₁ = d₂, and a₂² = a₁·a₃ (cross
// product - no float ratios, no epsilon).
// Engine: A (Mafs) - same WebSearch sweep as ar.28 (banned stacks only). No swap.
// Section: arithmetic-and-geometric-sequences §9 (anchor unverified - logged).
// Math check (defaults 4, 6, 9): d₁=2 ≠ d₂=3 → not AP; 6² = 36 = 4·9 → GP,
// r = 3/2; AM = 6.5, GM = 6 exactly ✓.
export function MixedSequenceIdentifier({ C }) {
  const [a1, setA1] = useState(4)
  const [a2, setA2] = useState(6)
  const [a3, setA3] = useState(9)
  const d1 = a2 - a1
  const d2 = a3 - a2
  const isAP = d1 === d2
  const isGP = a2 * a2 === a1 * a3 // exact integer cross product
  const am = (a1 + a3) / 2 // exact (integer or .5)
  const gmInt = Math.round(Math.sqrt(a1 * a3))
  const gmExact = gmInt * gmInt === a1 * a3
  const gm = gmExact ? gmInt : Math.sqrt(a1 * a3)
  const verdict =
    isAP && isGP
      ? 'constant: both AP and GP'
      : isAP
        ? 'arithmetic: a₂ lands on AM'
        : isGP
          ? 'geometric: a₂ lands on GM'
          : 'neither: a₂ misses both marks'

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Sequence identifier: middle term against the arithmetic and geometric means of its neighbors"
    >
      <Mafs viewBox={{ x: [-2, 64], y: [-2.5, 1.6] }} preserveAspectRatio={false} height={210}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[0, 0]} point2={[62, 0]} color={C.dim} weight={1} />
        {[0, 10, 20, 30, 40, 50, 60].map(v => (
          <Fragment key={v}>
            <Line.Segment point1={[v, -0.12]} point2={[v, 0.12]} color={C.dim} weight={1} />
            <LaTeX at={[v, -1.75]} tex={String(v)} color={C.dim} />
          </Fragment>
        ))}
        {/* AM marker above, GM marker below - a₂ is the crosshair */}
        <Line.Segment point1={[am, 0]} point2={[am, 0.42]} color={C.dim} weight={1} />
        <LaTeX at={[am, 0.85]} tex={'\\text{AM}'} color={isAP ? C.fg : C.dim} />
        <Line.Segment point1={[gm, -0.42]} point2={[gm, 0]} color={C.dim} weight={1} />
        <LaTeX at={[gm, -0.9]} tex={'\\text{GM}'} color={isGP ? C.fg : C.dim} />
        <Point x={a1} y={0} color={C.dim} />
        <Point x={a3} y={0} color={C.dim} />
        <Line.Segment point1={[a2, -0.3]} point2={[a2, 0.3]} color={C.fg} weight={2} />
        <Point x={a2} y={0} color={C.fg} />
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="First"
          value={a1}
          min={1}
          max={20}
          step={1}
          onChange={setA1}
          format={v => v.toFixed(0)}
        />
        <Slider
          label="Second"
          value={a2}
          min={1}
          max={40}
          step={1}
          onChange={setA2}
          format={v => v.toFixed(0)}
        />
        <Slider
          label="Third"
          value={a3}
          min={1}
          max={60}
          step={1}
          onChange={setA3}
          format={v => v.toFixed(0)}
        />
      </div>
      <div
        aria-label="Identifier readout: differences, ratios, means, and the verdict"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`d_1 = ${d1},\\; d_2 = ${d2}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`r_1 = ${fracTex(a2, a1)},\\; r_2 = ${fracTex(a3, a2)}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`\\text{AM} = ${am},\\; \\text{GM} ${gmExact ? `= ${gm}` : `\\approx ${gm.toFixed(2)}`}`}
          />
        </span>
        <span style={{ textTransform: 'uppercase' }}>{verdict}</span>
      </div>
    </div>
  )
}

// 9. InfiniteGPConvergence - ar.30
// Partial sums S₁..S₁₅ and the limit S = a/(1−r) on a FIXED linear frame
// y∈[0,21] (S ≤ 20 at r = 0.95): moving r now honestly moves the ceiling -
// the fit-to-limit scaleY (forbidden mode 2) and the on-canvas "a=1, r=…"
// readout are gone. r = k/20 is exact rational, so S = 20/(20−k) is shown
// as an exact reduced fraction.
// Engine: A (Mafs) - same WebSearch sweep as ar.22 (banned stacks only). No swap.
// Section: arithmetic-and-geometric-sequences §7 (anchor unverified - logged).
// Math checks: r=0.5 (k=10): S = 20/10 = 2; gap S−S₁₅ = r¹⁵/(1−r) = 2·2⁻¹⁵ =
// 2⁻¹⁴ ≈ 6.1×10⁻⁵. r=0.95 (k=19): S = 20/1 = 20; 0.95¹⁵ ≈ 0.4633 ⇒ S₁₅ ≈
// (1−0.4633)/0.05 ≈ 10.73 - visibly far from 20: slow convergence near r=1 ✓.
export function InfiniteGPConvergence({ C }) {
  const [r, setR] = useState(0.5)
  const a = 1
  const N = 15
  const k = Math.round(r * 20) // r = k/20 exactly, k ∈ 2..19
  const den0 = 20 - k
  const g = gcdInt(20, den0)
  const num = 20 / g
  const den = den0 / g
  const S = 20 / den0
  const partials = []
  {
    let s = 0
    for (let i = 0; i < N; i++) {
      s += a * Math.pow(r, i)
      partials.push(s)
    }
  }
  const gap = Math.pow(r, N) / (1 - r)
  const [gm, ge] = gap.toExponential(1).split('e')

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Infinite GP convergence: partial sums under a limit line on a fixed frame"
    >
      <Mafs
        viewBox={{ x: [-1.7, N + 2.1], y: [-1.5, 21.8] }}
        preserveAspectRatio={false}
        height={280}
      >
        <Coordinates.Cartesian
          xAxis={{
            lines: false,
            labels: n => (Number.isInteger(n) && n >= 1 && n <= N && n % 3 === 0 ? `${n}` : '')
          }}
          yAxis={false}
        />
        {[5, 10, 15, 20].map(gl => (
          <Line.Segment
            key={gl}
            point1={[0.4, gl]}
            point2={[N + 0.6, gl]}
            color={C.faint}
            weight={1}
          />
        ))}
        {[0, 5, 10, 15, 20].map(gl => (
          <LaTeX key={`yl${gl}`} at={[-0.9, gl]} tex={String(gl)} color={C.dim} />
        ))}
        <Line.Segment point1={[0.6, S]} point2={[N + 0.4, S]} color={C.accent} weight={1} />
        <LaTeX at={[N + 1.15, S]} tex={'S'} color={C.accent} />
        {partials.slice(0, -1).map((s, i) => (
          <Line.Segment
            key={i}
            point1={[i + 1, s]}
            point2={[i + 2, partials[i + 1]]}
            color={C.fg}
            weight={2}
          />
        ))}
        {partials.map((s, i) => (
          <Point key={i} x={i + 1} y={s} color={C.fg} />
        ))}
      </Mafs>
      <div style={SLIDER_ROW}>
        <Slider
          label="Ratio r"
          value={r}
          min={0.1}
          max={0.95}
          step={0.05}
          onChange={v => setR(Math.round(v * 20) / 20)}
          format={v => v.toFixed(2)}
        />
      </div>
      <div
        aria-label="Convergence readout: exact limit, fifteenth partial sum, and the remaining gap"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline
            tex={`S = \\dfrac{1}{1-r} = ${den === 1 ? num : `\\dfrac{${num}}{${den}}`}${den === 1 ? '' : ` \\approx ${S.toFixed(3)}`}`}
          />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`S_{15} \\approx ${partials[N - 1].toFixed(3)}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`S - S_{15} = \\tfrac{r^{15}}{1-r} \\approx ${gm}\\times10^{${Number(ge)}} > 0`}
          />
        </span>
      </div>
    </div>
  )
}

// ZenoStack
// ZenoStack - Zeno's dichotomy on [0,1]: segments 1/2, 1/4, …, 1/2ⁿ laid
// end-to-end; the running total Sₙ = 1 − 1/2ⁿ approaches 1 but never lands.
// Engine: A (Mafs) - WebSearch 2026-07-02: candidates surfaced were general
// charting stacks (D3, Chart.js, Plotly) - all banned by the allowed list and
// dashboard-shaped; Mafs is the best allowed fit for a continuous [0,1]
// segment stack with TeX fraction labels. No engine swap.
// Section: arithmetic-and-geometric-sequences §7 (Zeno / infinite GP)
// Math (exact - powers of 2 are exact in binary float64 up to 2¹²):
//   segment k spans [1 − 1/2^(k−1), 1 − 1/2^k], width 1/2^k
//   Sₙ = Σₖ 1/2^k = 1 − 1/2ⁿ = (2ⁿ − 1)/2ⁿ;  residual gap = 1 − Sₙ = 1/2ⁿ > 0
//   1/2ⁿ in decimal terminates in exactly n digits, so the readout decimals
//   are exact values, not roundings (toFixed(n) of 2⁻ⁿ is exact).

export function ZenoStack({ C: CProp }) {
  const themeC = useVizColors()
  const C = CProp ?? themeC
  const [n, setN] = useState(4)

  const pow = 2 ** n // exact integer ≤ 4096
  const Sn = 1 - 1 / pow // exact in float64 (dyadic)
  const gapMid = (Sn + 1) / 2
  const segs = Array.from({ length: n }, (_, i) => {
    const k = i + 1
    return { x0: 1 - 1 / 2 ** (k - 1), x1: 1 - 1 / 2 ** k }
  })
  const BAND = [0, 0.3] // segment band in y

  return (
    <>
      <Slider
        label={`Steps n: ${n}`}
        value={n}
        min={1}
        max={12}
        step={1}
        onChange={setN}
        format={x => String(x)}
      />
      <Mafs
        viewBox={{ x: [-0.07, 1.24], y: [-0.8, 1.05] }}
        height={215}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* Segments 1/2, 1/4, … laid end-to-end; alternating ink so each new
            piece reads as a piece. Widths are the true dyadic widths - by n = 12
            they are honestly sub-pixel. */}
        {segs.map((s, i) => (
          <Polygon
            key={i}
            points={[
              [s.x0, BAND[0]],
              [s.x1, BAND[0]],
              [s.x1, BAND[1]],
              [s.x0, BAND[1]]
            ]}
            color={C.fg}
            fillOpacity={i % 2 === 0 ? 0.75 : 0.4}
          />
        ))}

        {/* Residual gap [Sₙ, 1] - the part Zeno never crosses; true width 1/2ⁿ */}
        <Polygon
          points={[
            [Sn, BAND[0]],
            [1, BAND[0]],
            [1, BAND[1]],
            [Sn, BAND[1]]
          ]}
          color={C.fg}
          fillOpacity={0.1}
        />

        {/* Baseline + endpoints */}
        <Line.Segment point1={[-0.02, 0]} point2={[1.06, 0]} color={C.dim} />
        <Line.Segment point1={[0, -0.12]} point2={[0, 0.42]} color={C.fg} />
        <LaTeX at={[0, -0.34]} tex={'0'} color={C.fg} />

        {/* The wall at 1: never reached */}
        <Line.Segment point1={[1, -0.12]} point2={[1, 0.62]} color={C.fg} weight={2} />
        <LaTeX at={[1, 0.84]} tex={'1'} color={C.fg} />

        {/* Past boundary labels (only where the 40 px rule allows) */}
        {n >= 2 && <LaTeX at={[0.5, -0.34]} tex={'\\tfrac{1}{2}'} color={C.dim} />}
        {n >= 3 && <LaTeX at={[0.75, -0.34]} tex={'\\tfrac{3}{4}'} color={C.dim} />}

        {/* Moving endpoint Sₙ - marker + exact fraction label below */}
        <Line.Segment point1={[Sn, -0.08]} point2={[Sn, 0.38]} color={C.accent} weight={2} />
        <LaTeX
          at={[Math.min(Sn, 0.93), -0.62]}
          tex={`S_{${n}} = \\tfrac{${pow - 1}}{${pow}}`}
          color={C.accent}
        />

        {/* Gap callout: label parked right of the wall, arrow into the gap */}
        <Vector tail={[1.13, 0.52]} tip={[Math.min(gapMid, 0.998), 0.34]} color={C.dim} />
        <LaTeX at={[1.15, 0.72]} tex={`\\tfrac{1}{2^{${n}}}`} color={C.fg} />
      </Mafs>
      <div
        aria-label="Zeno stack readout: partial sum and remaining gap, both exact"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 28px',
          justifyContent: 'center',
          marginTop: 12,
          fontFamily: FONT_FAMILY,
          fontSize: FONT_LABEL,
          letterSpacing: LS_CONTROL,
          color: C.fg
        }}
      >
        <span>
          <KatexInline tex={`S_{${n}} = 1 - \\tfrac{1}{2^{${n}}} = ${Sn.toFixed(n)}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`1 - S_{${n}} = ${(1 / pow).toFixed(n)} > 0`} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          halves remain forever: the stack never reaches 1
        </span>
      </div>
    </>
  )
}

// APForwardBackwardStack
// APForwardBackwardStack - the AP sum derivation: the sequence written
// forward over itself written backward; every column sums to a + l, so
// 2Sₙ = n(a + l). All n column sums are computed by real addition.
// Engine: A (Mafs) - WebSearch 2026-07-02: same sweep as ZenoStack - D3 /
// Chart.js / Plotly banned; a dot-lattice with TeX labels and connectors is
// squarely Mafs territory (primitives-SVG offers no advantage and loses
// LaTeX-at-coordinates). No engine swap.
// Section: arithmetic-and-geometric-sequences §2 (sum of an AP)
// Math (exact integer arithmetic - a, d, n are integer sliders):
//   fwd[i] = a + i·d, i = 0..n−1;  bwd[i] = l − i·d with l = a + (n−1)d
//   column i sum = fwd[i] + bwd[i] = a + l  (the i·d terms cancel)
//   Sₙ = Σ fwd[i] (computed by reduce), and 2Sₙ = n(a + l) - both shown.
//   n(a+l) is automatically even: it equals twice an integer sum.

export function APForwardBackwardStack({ C: CProp }) {
  const themeC = useVizColors()
  const C = CProp ?? themeC
  const [a, setA] = useState(2)
  const [d, setD] = useState(3)
  const [n, setN] = useState(6)

  const l = a + (n - 1) * d
  const fwd = Array.from({ length: n }, (_, i) => a + i * d)
  const bwd = Array.from({ length: n }, (_, i) => l - i * d)
  const colSums = fwd.map((v, i) => v + bwd[i]) // real additions, all = a + l
  const S = fwd.reduce((acc, v) => acc + v, 0)

  const Y = { fwdLabel: 2.52, fwd: 2.1, bwd: 1.3, bwdLabel: 0.88, sum: 0.05, caption: -0.62 }

  return (
    <>
      <Slider
        label={`First term a: ${a}`}
        value={a}
        min={-5}
        max={10}
        step={1}
        onChange={setA}
        format={x => String(x)}
      />
      <Slider
        label={`Common difference d: ${d}`}
        value={d}
        min={-5}
        max={10}
        step={1}
        onChange={setD}
        format={x => String(x)}
      />
      <Slider
        label={`Terms n: ${n}`}
        value={n}
        min={3}
        max={10}
        step={1}
        onChange={setN}
        format={x => String(x)}
      />
      <Mafs
        viewBox={{ x: [-1.7, n + 0.9], y: [-1.0, 3.0] }}
        height={250}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian
          xAxis={{ labels: false, lines: false }}
          yAxis={{ labels: false, lines: false }}
        />

        {/* Row captions */}
        <LaTeX at={[-0.85, Y.fwd]} tex={'\\text{forward}'} color={C.dim} />
        <LaTeX at={[-0.85, Y.bwd]} tex={'\\text{reversed}'} color={C.dim} />
        <LaTeX at={[-0.85, Y.sum]} tex={'\\text{column sum}'} color={C.fg} />

        {/* Columns: dot over dot, connector between, computed sum beneath */}
        {fwd.map((v, i) => {
          const x = i + 1
          return (
            <Fragment key={i}>
              <LaTeX at={[x, Y.fwdLabel]} tex={String(v)} color={C.fg} />
              <Point x={x} y={Y.fwd} color={C.fg} />
              <Line.Segment point1={[x, Y.fwd - 0.14]} point2={[x, Y.bwd + 0.14]} color={C.dim} />
              <Point x={x} y={Y.bwd} color={C.fg} />
              <LaTeX at={[x, Y.bwdLabel]} tex={String(bwd[i])} color={C.fg} />
              <LaTeX at={[x, Y.sum]} tex={String(colSums[i])} color={C.accent} />
            </Fragment>
          )
        })}

        {/* The constancy annotation under the sums */}
        <LaTeX
          at={[(n + 1) / 2, Y.caption]}
          tex={`n \\times (a + l) = ${n} \\times ${l >= 0 ? a + l : `(${a + l})`} = ${n * (a + l)}`}
          color={C.dim}
        />
      </Mafs>
      <div
        aria-label="AP pairing readout: last term, column sum, doubled sum, and the sum"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px 28px',
          justifyContent: 'center',
          marginTop: 12,
          fontFamily: FONT_FAMILY,
          fontSize: FONT_LABEL,
          letterSpacing: LS_CONTROL,
          color: C.fg
        }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`l = a + (n-1)d = ${l}`} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={`a + l = ${a + l}`} />
        </span>
        <span>
          <KatexInline tex={`2S_{${n}} = n(a+l) = ${n * (a + l)}`} />
        </span>
        <span>
          <KatexInline tex={`S_{${n}} = ${S}`} />
        </span>
      </div>
    </>
  )
}
