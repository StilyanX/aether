// Lazy-loaded ELK layout engine. Bundled build is ~1.4 MB; only pulled in
// when a <Diagram> mounts. Single shared instance per session.

let elkPromise = null

function getElk() {
  if (!elkPromise) {
    elkPromise = import('elkjs/lib/elk.bundled.js').then(m => new m.default())
  }
  return elkPromise
}

const DEFAULT_LAYOUT_OPTIONS = {
  'elk.algorithm': 'layered',
  'elk.direction': 'DOWN',
  'elk.edgeRouting': 'ORTHOGONAL',
  'elk.spacing.nodeNode': '60',
  'elk.layered.spacing.nodeNodeBetweenLayers': '80'
}

export async function computeLayout({ nodes, edges }, options = {}) {
  const elk = await getElk()
  return elk.layout({
    id: 'root',
    layoutOptions: { ...DEFAULT_LAYOUT_OPTIONS, ...(options.layoutOptions || {}) },
    children: nodes,
    edges
  })
}
