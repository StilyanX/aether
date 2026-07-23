// Verify every named import inside src/ actually exists in the module it comes
// from. ESLint's no-undef cannot see this: `import { Foo } from './bar'` is a
// valid binding even when ./bar never exports Foo. At runtime Foo is undefined,
// and if it is used as a JSX element React throws
// "Element type is invalid", which the error boundary renders as SECTION FAULT.
//
// Run: node scripts/check-exports.mjs
// Exits 1 if any import cannot be satisfied.
import fs from 'node:fs'
import path from 'node:path'

const SRC = path.resolve(process.cwd(), 'src')
const EXTS = ['.js', '.jsx', '.ts', '.tsx']

const walk = d =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap(e => {
    const p = path.join(d, e.name)
    if (e.isDirectory()) return p.includes('/q.js') ? [] : walk(p)
    return /\.jsx?$/.test(e.name) ? [p] : []
  })

// Resolve a relative specifier the way Vite would.
function resolve(fromFile, spec) {
  if (!spec.startsWith('.')) return null // bare package: not ours to check
  const base = path.resolve(path.dirname(fromFile), spec)
  const candidates = [
    base,
    ...EXTS.map(e => base + e),
    ...EXTS.map(e => path.join(base, 'index' + e))
  ]
  return candidates.find(c => fs.existsSync(c) && fs.statSync(c).isFile()) ?? null
}

// Collect the names a module exports, following `export * from` one level deep.
const exportCache = new Map()
function exportsOf(file, seen = new Set()) {
  if (exportCache.has(file)) return exportCache.get(file)
  if (seen.has(file)) return new Set()
  seen.add(file)

  const src = fs.readFileSync(file, 'utf8')
  const names = new Set()

  for (const m of src.matchAll(/^\s*export\s+(?:async\s+)?(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)/gm))
    names.add(m[1])
  for (const m of src.matchAll(/^\s*export\s*\{([^}]*)\}/gm))
    for (const part of m[1].split(','))
      names.add(part.trim().split(/\s+as\s+/).pop().trim())
  if (/^\s*export\s+default\b/m.test(src)) names.add('default')

  // export * from './x'  -> inherit that module's names
  for (const m of src.matchAll(/^\s*export\s*\*\s*from\s*['"]([^'"]+)['"]/gm)) {
    const target = resolve(file, m[1])
    if (target) for (const n of exportsOf(target, seen)) names.add(n)
  }

  exportCache.set(file, names)
  return names
}

const problems = []
let checkedImports = 0

for (const file of walk(SRC)) {
  const src = fs.readFileSync(file, 'utf8')

  for (const m of src.matchAll(/import\s+([\s\S]*?)\s*from\s*['"]([^'"]+)['"]/g)) {
    const clause = m[1]
    const target = resolve(file, m[2])
    if (!target) continue // bare package or unresolvable asset import

    // named specifiers only: { A, B as C }
    const braces = clause.match(/\{([^}]*)\}/)
    if (!braces) continue

    const exported = exportsOf(target)
    for (const raw of braces[1].split(',')) {
      const name = raw.trim().split(/\s+as\s+/)[0].trim()
      if (!name) continue
      checkedImports++
      if (!exported.has(name)) {
        problems.push({
          file: path.relative(process.cwd(), file),
          name,
          from: path.relative(process.cwd(), target)
        })
      }
    }
  }
}

if (problems.length) {
  console.error(`${problems.length} import(s) name something their module does not export:\n`)
  for (const p of problems) console.error(`  ${p.file}\n    imports { ${p.name} } from ${p.from}\n`)
  process.exit(1)
}
console.log(`ok: ${checkedImports} named imports all resolve to real exports`)
