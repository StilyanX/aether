// MAP SCALES
// Visualisations for map scale meaning, forward/reverse conversion, and scale comparison.
// Each viz takes a `C` color object from useVizColors().
//
// REFINE pass 2026-07-02 (file rewritten):
// - ScaleRatioMeaning drew a 1:10 bar pair for a 1:50 000 ratio with a
//   "(bar widths not to scale)" disclaimer - dishonest geometry is not cured
//   by a footnote. Now both lengths sit on ONE DECLARED log₁₀ centimetre
//   axis (1 cm … 1 km decades): position is honest, and the ×50 000 jump is
//   the visible 4.7-decade gap.
// - MapScaleConverterReverse capped its bar at 12 units ≈ 20 km while the
//   slider ran to 50 km - the bar froze for the top 60% of the range. Both
//   converters now use fixed declared linear axes that hold the full slider
//   domain, with the bar length exactly proportional to the value.
// - ScaleComparison claimed "log-compressed" widths but hard-coded 2/6/11 -
//   matching neither log₁₀ (1 : 2.70 : 3.48) nor linear (1 : 50 : 300).
//   Rebuilt as markers at TRUE log₁₀ positions on a declared metre axis
//   (Robbins/Cleveland: position, not bar length, on log scales - same
//   verdict as ar.24).
// - size-24 canvas text → house 12; formula/value labels moved to readout
//   rows; conversions exact (integer cm arithmetic; quarters/halves of km).
// Engine (WebSearch 2026-07-02, scale-bar / log-axis classes): only banned
// dashboard stacks surfaced; Mafs (A) stays. No swaps.
// Section anchors unverified (no topic pages in snapshot) - logged in audit.

import React, { useState, Fragment } from 'react'
import { Mafs, Coordinates, Polygon, Point, Text, Line, LaTeX, Vector } from 'mafs'
import 'mafs/core.css'
import { Slider, KatexInline } from '../../../primitives'
import { OPACITY } from '../../../theme'
import { FONT_FAMILY, FONT_LABEL, LS_CONTROL } from '../../../scale-tokens'

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

// exact-decimal formatter: value is an exact multiple of 1/8 in this file,
// so toFixed(3) is exact; trim trailing zeros for display
const fmtExact = v => v.toFixed(3).replace(/\.?0+$/, '')

// (1) ScaleRatioMeaning - ar.81
// 1 cm on the map vs 50 000 cm on land, both at TRUE positions on a declared
// log₁₀ centimetre axis. The 4.7-decade gap IS the ratio.
export function ScaleRatioMeaning({ C }) {
  const X = 2.4 // mafs units per decade
  const mx = e => e * X
  const landExp = Math.log10(50000) // ≈ 4.699

  const ticks = [
    [0, '1\\,\\text{cm}'],
    [1, '10\\,\\text{cm}'],
    [2, '1\\,\\text{m}'],
    [3, '10\\,\\text{m}'],
    [4, '100\\,\\text{m}'],
    [5, '1\\,\\text{km}']
  ]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Map scale meaning: one centimetre and its land distance on a declared log axis"
    >
      <Mafs viewBox={{ x: [-1, 13], y: [-2.1, 2.6] }} preserveAspectRatio={false} height={210}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment
          point1={[mx(0) - 0.3, 0]}
          point2={[mx(5) + 0.3, 0]}
          color={C.dim}
          weight={1}
        />
        {ticks.map(([e, tex]) => (
          <Fragment key={e}>
            <Line.Segment point1={[mx(e), -0.15]} point2={[mx(e), 0.15]} color={C.dim} weight={1} />
            <LaTeX at={[mx(e), -0.72]} tex={tex} color={C.dim} />
          </Fragment>
        ))}
        <LaTeX
          at={[mx(2.5), -1.6]}
          tex={
            '\\text{length} \\;\\text{:}\\; \\log_{10}\\ \\text{scale, } \\times 10 \\text{ per step}'
          }
          color={C.dim}
        />
        {/* map length: 1 cm */}
        <Line.Segment point1={[mx(0), 0]} point2={[mx(0), 0.75]} color={C.fg} weight={3} />
        <Text x={mx(0)} y={1.15} size={FONT_LABEL} color={C.fg}>
          map: 1 cm
        </Text>
        {/* land length: 50 000 cm at its true log position */}
        <Line.Segment
          point1={[mx(landExp), 0]}
          point2={[mx(landExp), 0.75]}
          color={C.accent}
          weight={3}
        />
        <Text x={mx(landExp)} y={1.15} size={FONT_LABEL} color={C.accent}>
          land: 500 m
        </Text>
        <Vector tail={[mx(0.25), 1.85]} tip={[mx(landExp) - 0.55, 1.85]} color={C.dim} />
        <Text x={mx(landExp / 2)} y={2.25} size={FONT_LABEL} color={C.dim}>
          × 50 000
        </Text>
      </Mafs>
      <div
        aria-label="Scale meaning readout: the ratio and its unit conversion"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span>
          <KatexInline tex={'1 : 50\\,000'} />
        </span>
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={'1\\,\\text{cm} \\times 50\\,000 = 50\\,000\\,\\text{cm} = 500\\,\\text{m}'}
          />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          each axis step is ×10: the gap is 4.7 steps
        </span>
      </div>
    </div>
  )
}

// (2) MapScaleConverterForward - ar.82
// Map cm → land km at 1:25 000. The bar is the map distance on a FIXED
// declared 0–20 cm axis; the conversion is exact (mapCm/4 km, a multiple of
// 1/8 for half-cm steps).
export function MapScaleConverterForward({ C }) {
  const [mapCm, setMapCm] = useState(10)
  const landKm = mapCm / 4 // 25 000 / 100 000 - exact
  const X = 12 / 20 // mafs units per cm
  const barW = mapCm * X

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Forward conversion: map centimetres to land kilometres on a fixed axis"
    >
      <Slider
        label="Map distance (cm)"
        value={mapCm}
        min={0}
        max={20}
        step={0.5}
        onChange={setMapCm}
        format={v => `${fmtExact(v)} cm`}
      />
      <Mafs viewBox={{ x: [-0.5, 13], y: [-1.9, 1.7] }} preserveAspectRatio={false} height={170}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[0, 0]} point2={[12, 0]} color={C.dim} weight={1} />
        {[0, 5, 10, 15, 20].map(v => (
          <Fragment key={v}>
            <Line.Segment point1={[v * X, -0.14]} point2={[v * X, 0.14]} color={C.dim} weight={1} />
            <Text x={v * X} y={-0.62} size={FONT_LABEL} color={C.dim}>
              {`${v} cm`}
            </Text>
          </Fragment>
        ))}
        {mapCm > 0 && (
          <Polygon
            points={[
              [0, 0.25],
              [barW, 0.25],
              [barW, 0.85],
              [0, 0.85]
            ]}
            color={C.fg}
            fillOpacity={0.45}
          />
        )}
        <Text x={6} y={1.35} size={FONT_LABEL} color={C.dim}>
          map distance, drawn to the axis scale
        </Text>
      </Mafs>
      <div
        aria-label="Forward conversion readout: exact land distance"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`${fmtExact(mapCm)}\\,\\text{cm} \\times 25\\,000 = ${mapCm * 25000}\\,\\text{cm} = ${fmtExact(landKm)}\\,\\text{km}`}
          />
        </span>
        <span>
          <KatexInline tex={`\\text{land} = ${fmtExact(landKm)}\\,\\text{km}`} />
        </span>
      </div>
    </div>
  )
}

// (3) MapScaleConverterReverse - ar.83
// Land km → map cm at 1:50 000. One bar, one FIXED axis, TWO unit rows: the
// same length reads as 0–100 cm on the map (below) and 0–50 km on land
// (above) - the conversion is the axis. mapCm = 2·landKm exactly.
export function MapScaleConverterReverse({ C }) {
  const [landKm, setLandKm] = useState(18)
  const mapCm = 2 * landKm // exact integer
  const X = 12 / 100 // mafs units per map-cm
  const barW = mapCm * X

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Reverse conversion: one bar read in kilometres above and centimetres below"
    >
      <Slider
        label="Real-world distance (km)"
        value={landKm}
        min={0}
        max={50}
        step={1}
        onChange={setLandKm}
        format={v => `${v} km`}
      />
      <Mafs viewBox={{ x: [-0.5, 13], y: [-2.1, 2.4] }} preserveAspectRatio={false} height={190}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[0, 0]} point2={[12, 0]} color={C.dim} weight={1} />
        {/* below: map centimetres */}
        {[0, 25, 50, 75, 100].map(v => (
          <Fragment key={v}>
            <Line.Segment point1={[v * X, -0.14]} point2={[v * X, 0.14]} color={C.dim} weight={1} />
            <Text x={v * X} y={-0.62} size={FONT_LABEL} color={C.dim}>
              {`${v} cm`}
            </Text>
          </Fragment>
        ))}
        <Text x={6} y={-1.45} size={FONT_LABEL} color={C.dim}>
          same bar, two readings, scale 1 : 50 000
        </Text>
        {/* above: land kilometres */}
        {[0, 12.5, 25, 37.5, 50].map(v => (
          <Text key={v} x={v * 2 * X} y={1.9} size={FONT_LABEL} color={C.dim}>
            {`${fmtExact(v)} km`}
          </Text>
        ))}
        {landKm > 0 && (
          <Polygon
            points={[
              [0, 0.3],
              [barW, 0.3],
              [barW, 1.0],
              [0, 1.0]
            ]}
            color={C.fg}
            fillOpacity={0.45}
          />
        )}
      </Mafs>
      <div
        aria-label="Reverse conversion readout: exact map distance"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline
            tex={`${landKm}\\,\\text{km} = ${landKm * 100000}\\,\\text{cm}\\;;\\; ${landKm * 100000} \\div 50\\,000 = ${mapCm}`}
          />
        </span>
        <span>
          <KatexInline tex={`\\text{map} = ${mapCm}\\,\\text{cm}`} />
        </span>
      </div>
    </div>
  )
}

// (4) ScaleComparison - ar.84
// What 1 cm means at three scales - markers at TRUE log₁₀ positions on a
// declared metre axis (1 m … 10 km). Old version hard-coded bar widths that
// matched neither linear nor log ratios.
export function ScaleComparison({ C }) {
  const X = 2.7 // mafs units per decade
  const mx = e => e * X
  const scales = [
    { tex: '1 : 1\\,000', metres: 10, land: '10 m' },
    { tex: '1 : 50\\,000', metres: 500, land: '500 m' },
    { tex: '1 : 300\\,000', metres: 3000, land: '3 km' }
  ]
  const ticks = [
    [0, '1\\,\\text{m}'],
    [1, '10\\,\\text{m}'],
    [2, '100\\,\\text{m}'],
    [3, '1\\,\\text{km}'],
    [4, '10\\,\\text{km}']
  ]

  return (
    <div
      style={{ width: '100%' }}
      aria-label="Scale comparison: what one map centimetre means, on a declared log metre axis"
    >
      <Mafs viewBox={{ x: [-2.9, 12], y: [-1.9, 3.3] }} preserveAspectRatio={false} height={220}>
        <Coordinates.Cartesian xAxis={false} yAxis={false} />
        <Line.Segment point1={[-0.3, 0]} point2={[mx(4) + 0.3, 0]} color={C.dim} weight={1} />
        {ticks.map(([e, tex]) => (
          <Fragment key={e}>
            <Line.Segment point1={[mx(e), -0.15]} point2={[mx(e), 0.15]} color={C.dim} weight={1} />
            <LaTeX at={[mx(e), -0.72]} tex={tex} color={C.dim} />
          </Fragment>
        ))}
        <LaTeX
          at={[mx(2), -1.5]}
          tex={'\\text{land length of 1 map cm} \\;\\text{:}\\; \\log_{10}\\ \\text{scale}'}
          color={C.dim}
        />
        {scales.map((s, i) => {
          const e = Math.log10(s.metres)
          const y = 2.6 - i * 0.85
          return (
            <Fragment key={s.land}>
              <LaTeX at={[-1.6, y]} tex={s.tex} color={C.fg} />
              <Line.Segment point1={[mx(e), 0]} point2={[mx(e), y]} color={C.faint} weight={1} />
              <Point x={mx(e)} y={y} color={i === 2 ? C.accent : C.fg} />
              <Text
                x={mx(e) + 0.4}
                y={y}
                size={FONT_LABEL}
                attach="e"
                color={i === 2 ? C.accent : C.fg}
              >
                {s.land}
              </Text>
            </Fragment>
          )
        })}
      </Mafs>
      <div
        aria-label="Scale comparison readout: larger denominator, longer land distance"
        style={{ ...READOUT_ROW, color: C.fg }}
      >
        <span style={{ opacity: OPACITY.dim }}>
          <KatexInline tex={'1\\,\\text{cm} \\times N = \\text{land distance at scale } 1:N'} />
        </span>
        <span style={{ opacity: OPACITY.dim, textTransform: 'uppercase' }}>
          equal steps multiply by ten: 300 000 is 300× further than 1 000
        </span>
      </div>
    </div>
  )
}
