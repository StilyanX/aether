/**
 * Pre-annotated label anchors for sourced SVG illustrations.
 *
 * Each key = base SVG filename (without path/extension).
 * Each anchor = { x, y, textAnchor, label, fontSize?, multiline? }
 *
 * Coordinates are in the OVERLAY SVG viewBox space, not the base SVG space.
 * Formula: overlay_x = base_svg_x + image_x_offset
 *
 * These positions are verified via rendered screenshots - do not guess.
 * To add a new illustration:
 *   1. Place cleaned SVG in /public/assets/
 *   2. Render with temporary debug markers
 *   3. Screenshot → measure actual structure positions
 *   4. Record anchors here with the image offset noted
 */

const vizAnchors = {
  'nephron-base': {
    // Base SVG: 356×600, placed at <image x={100} y={10} width={356} height={600}>
    // Overlay viewBox: 0 0 700 620
    imageOffset: { x: 100, y: 10 },
    viewBox: '0 0 700 620',
    source: 'Wikimedia Commons, Yosi I, CC BY 3.0',
    anchors: [
      { x: 244, y: 95, textAnchor: 'middle', label: 'GLOMERULUS', fontSize: 7.5 },
      { x: 244, y: 172, textAnchor: 'middle', label: "BOWMAN'S CAPSULE", fontSize: 6.5 },
      { x: 358, y: 58, textAnchor: 'start', label: 'PROXIMAL', fontSize: 6.5 },
      { x: 358, y: 68, textAnchor: 'start', label: 'CONVOLUTED TUBULE', fontSize: 6.5 },
      { x: 340, y: 208, textAnchor: 'middle', label: 'DISTAL CONVOLUTED TUBULE', fontSize: 6.5 },
      { x: 208, y: 340, textAnchor: 'end', label: 'DESCENDING', fontSize: 7 },
      { x: 262, y: 340, textAnchor: 'start', label: 'ASCENDING', fontSize: 7 },
      { x: 370, y: 380, textAnchor: 'start', label: 'COLLECTING DUCT', fontSize: 7 },
      { x: 240, y: 490, textAnchor: 'middle', label: 'LOOP OF HENLE', fontSize: 7 }
    ]
  }
}

export default vizAnchors
