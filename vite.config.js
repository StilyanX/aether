import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import fs from 'fs'
import zlib from 'zlib'
import crypto from 'crypto'
import { execSync } from 'child_process'

// Content-Security-Policy, emitted as a <meta> into the built index.html.
//
// Build-only: the dev server's HMR websocket would need connect-src ws:, and
// loosening the shipped policy to suit dev is the wrong trade.
//
// script-src carries no 'unsafe-inline'. The two inline scripts this page
// needs (the theme boot block, and the media="print" swap on the Google Fonts
// link) are allowed by their exact sha256 instead, computed here from the real
// HTML so the hashes can never drift from the source. 'unsafe-hashes' is what
// permits the hashed value to be an inline event handler.
//
// style-src does keep 'unsafe-inline': MathJax injects a <style> element for
// its font metrics at runtime, and there is no hash to pin. Injected CSS is a
// far smaller risk than injected script.
//
// frame-ancestors is deliberately absent: it is ignored in a <meta> policy and
// only works as an HTTP response header. Set it at the host if you can.
function cspMeta() {
  const sha256 = s => `'sha256-${crypto.createHash('sha256').update(s, 'utf8').digest('base64')}'`

  return {
    name: 'aether-csp',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        // Inline <script> blocks only; anything with src= is covered by 'self'.
        const inline = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)]
          .map(m => m[1])
          .filter(s => s.trim())
        // Inline event handlers, which hashes only cover under 'unsafe-hashes'.
        const handlers = [...html.matchAll(/\son(?:load|error|click)="([^"]*)"/g)].map(m => m[1])

        const scriptSrc = [
          "'self'",
          'https://cdn.jsdelivr.net',
          ...inline.map(sha256),
          ...(handlers.length ? ["'unsafe-hashes'", ...handlers.map(sha256)] : [])
        ]

        const csp = [
          "default-src 'self'",
          `script-src ${scriptSrc.join(' ')}`,
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net",
          "img-src 'self' data: https://upload.wikimedia.org https://commons.wikimedia.org " +
            'https://covers.openlibrary.org https://books.google.com https://i.ytimg.com',
          'frame-src https://www.youtube-nocookie.com',
          "connect-src 'self'",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'none'"
        ].join('; ')

        return {
          html,
          tags: [
            {
              tag: 'meta',
              attrs: { 'http-equiv': 'Content-Security-Policy', content: csp },
              injectTo: 'head-prepend'
            }
          ]
        }
      }
    }
  }
}

// Build-time asset precompression + size report (zero-dependency).
// Emits `.br` (brotli) and `.gz` (gzip) siblings for every text asset so a
// static host configured to prefer pre-compressed variants ships ~80% less
// than raw (~27% less than on-the-fly gzip) with no request-time CPU cost.
// Also prints a raw/gzip/brotli table for the largest chunks at the end of
// each build, so bundle growth is visible without a separate visualizer
// dependency. Node's built-in `zlib` covers both, so no plugin package is
// added. Host must be configured to serve the pre-compressed variants
// (nginx `gzip_static`/`brotli_static`, or a CDN that honours them); the
// files are inert otherwise, never harmful.
function compressAndReport({ threshold = 1024, top = 12 } = {}) {
  const COMPRESSIBLE = /\.(js|css|html|svg|json)$/
  return {
    name: 'aether-compress-report',
    apply: 'build',
    writeBundle(options, bundle) {
      const outDir = options.dir || 'dist'
      const rows = []
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (!COMPRESSIBLE.test(fileName)) continue
        const buf = Buffer.from(chunk.type === 'chunk' ? chunk.code : chunk.source)
        if (buf.length < threshold) continue
        const gz = zlib.gzipSync(buf, { level: 9 })
        const br = zlib.brotliCompressSync(buf)
        const abs = path.join(outDir, fileName)
        fs.writeFileSync(abs + '.gz', gz)
        fs.writeFileSync(abs + '.br', br)
        rows.push({ fileName, raw: buf.length, gz: gz.length, br: br.length })
      }
      rows.sort((a, b) => b.br - a.br)
      const kb = n => (n / 1024).toFixed(1).padStart(9)
      const tot = rows.reduce(
        (t, r) => ({ raw: t.raw + r.raw, gz: t.gz + r.gz, br: t.br + r.br }),
        { raw: 0, gz: 0, br: 0 }
      )
      if (!rows.length) return
      console.log(
        `\naether  precompressed ${rows.length} assets  ·  raw${kb(tot.raw)} gzip${kb(tot.gz)} brotli${kb(tot.br)} KB` +
          `  (brotli ${(100 - (tot.br / tot.raw) * 100).toFixed(0)}% < raw)\n` +
          'largest'.padEnd(42) + '      raw     gzip   brotli'
      )
      for (const r of rows.slice(0, top)) {
        console.log(('…' + r.fileName.slice(-39)).padEnd(42) + kb(r.raw) + kb(r.gz) + kb(r.br))
      }
      console.log('')
    }
  }
}

// Genuinely data-derived build date for the sidebar corpus footer (`UPDATED
// {date}`) — computed once from the latest commit so the displayed value can
// never go stale independent of a human remembering to edit a literal.
// Falls back to today's date if git metadata isn't available (e.g. a shallow
// checkout with no `.git`, or a CI archive export).
const BUILD_DATE = (() => {
  try {
    return execSync('git log -1 --format=%cd --date=short').toString().trim()
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
})()

// Version string for the colophon's EDITION line. This project versions by
// date, so the edition IS the date of the latest commit: BUILD_DATE, printed
// as YYYY.MM.DD. Deriving it here rather than reading package.json means the
// shipped page can never display a stale version because someone forgot to
// bump a literal.
//
// package.json still carries the same date in semver form (2026.7.23, without
// leading zeros, which semver forbids) so npm and other tooling stay happy.
const APP_VERSION = BUILD_DATE.replaceAll('-', '.')

export default defineConfig({
  define: {
    __BUILD_DATE__: JSON.stringify(BUILD_DATE),
    __APP_VERSION__: JSON.stringify(APP_VERSION)
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '18' }]]
      }
    }),
    // Authored-SVG imports as React components via the `?react` suffix.
    // SVGO normalizes the export: viewBox preserved, all colors forced to
    // `currentColor` so the imported SVG inherits the platform's theme tokens.
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: false,
        memo: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  inlineStyles: { onlyMatchedOnce: false }
                }
              }
            },
            {
              name: 'convertColors',
              params: { currentColor: true }
            },
            'removeXMLNS',
            'removeDimensions'
          ]
        }
      },
      include: '**/*.svg?react'
    }),
    {
      name: 'redirect-root',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '' || req.url === '/aether') {
            res.writeHead(302, { Location: '/aether/' })
            res.end()
            return
          }
          next()
        })
      }
    },
    // Dev-only: the visualizations-showcase page calls this to find which classical
    // mechanics topic page renders a given catalog viz, then navigates there in the
    // app. Given a viz export `name`, it scans the CM content files for the one that
    // imports that name from components/viz and derives its topic slug. Resolved live
    // on each request, so it stays correct as content changes. Dev-only
    // (configureServer), so it never ships in the production build.
    {
      name: 'viz-locate',
      configureServer(server) {
        const CM_ROOT = path.resolve(__dirname, 'src/features/explore/physics/classical-mechanics')
        const FEATURES = path.resolve(__dirname, 'src/features')
        const walk = dir =>
          fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => {
            const p = path.join(dir, d.name)
            if (d.isDirectory()) return walk(p)
            return p.endsWith('.jsx') ? [p] : []
          })
        // Slug = path under src/features, minus the .jsx and the "part-*" segment.
        const toSlug = file =>
          path
            .relative(FEATURES, file)
            .replace(/\.jsx$/, '')
            .split(path.sep)
            .filter(seg => !/^part-/i.test(seg))
            .join('/')

        server.middlewares.use((req, res, next) => {
          if (!req.url || !req.url.includes('/__viz-locate')) return next()
          const name = new URL(req.url, 'http://localhost').searchParams.get('name')
          res.setHeader('content-type', 'application/json')
          if (!name) {
            res.statusCode = 400
            return res.end(JSON.stringify({ error: 'missing name' }))
          }
          const importRe = /import\s*\{([^}]*)\}\s*from\s*['"][^'"]*components\/viz['"]/g
          let slug = null
          for (const file of walk(CM_ROOT)) {
            const src = fs.readFileSync(file, 'utf8')
            let hit = false
            for (const m of src.matchAll(importRe)) {
              const names = m[1]
                .split(',')
                .map(s =>
                  s
                    .trim()
                    .split(/\s+as\s+/)[0]
                    .trim()
                )
                .filter(Boolean)
              if (names.includes(name)) {
                hit = true
                break
              }
            }
            if (hit) {
              slug = toSlug(file)
              break
            }
          }
          res.end(JSON.stringify(slug ? { slug } : { notFound: true }))
        })
      }
    },
    // Precompress build output to .br/.gz and print a size report. Zero-dep;
    // build-only. See the function definition above for the host-config note.
    compressAndReport(),
    // Emit the Content-Security-Policy meta into the built index.html.
    cspMeta()
  ],
  base: '/aether/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@config': path.resolve(__dirname, './src/config'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@features': path.resolve(__dirname, './src/features'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@utils': path.resolve(__dirname, './src/utils')
    }
  },
  server: {
    host: '127.0.0.1',
    port: 8000
  },
  build: {
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1200,
    // Enable minification
    minify: 'esbuild',
    // Enable source maps for debugging (disable in prod if needed)
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    rollupOptions: {
      output: {
        // Better chunk naming for caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks(id) {
          // 3D engine (three.js + three-stdlib + react-three) plus its
          // react-reconciler renderer and the `scenes-3d/` scene modules that
          // use it. This chunk is only ever reached through a dynamic import()
          // (React.lazy in the physics lessons), so three (~1 MB raw) loads on
          // demand for the few 3D viz instead of riding along in the eager
          // content-physics chunk on every physics route. Placed first so
          // react-reconciler lands here (lazy) rather than in react-vendor
          // (eager); scheduler/use-sync-external-store still fall through to
          // react-vendor below, preserving that chunk's self-containment.
          if (
            id.includes('node_modules/three') ||
            id.includes('node_modules/@react-three') ||
            id.includes('node_modules/react-reconciler') ||
            id.includes('/components/viz/scenes-3d/') ||
            id.includes('/components/viz/scene-3d')
          )
            return 'viz-3d'
          // react-dom's own runtime peers (`scheduler`, `use-sync-external-store`) and
          // Rollup's shared CJS-interop helper (the synthetic `commonjsHelpers` module,
          // used to unwrap every CJS dependency's default export) don't live under a
          // `node_modules/react*` path, so the check below misses them. Left unmatched,
          // Rollup homes them wherever it reaches them first — observed: inside
          // content-library/content-physics — and then react-vendor has to import them
          // back from there to build React itself. That is a real circular chunk
          // dependency (react-vendor -> content-* -> react-vendor) that corrupts
          // module-evaluation order: react-vendor's own top-level code can run before
          // content-library/physics have finished, or vice versa, depending on which
          // chunk the loader enters first. Matching them here keeps react-vendor fully
          // self-contained, so nothing it needs ever has to be fetched from a content
          // chunk.
          if (
            id.includes('node_modules/react') ||
            id.includes('react-router') ||
            id.includes('node_modules/scheduler') ||
            id.includes('node_modules/use-sync-external-store') ||
            id.includes('commonjsHelpers')
          )
            return 'react-vendor'
          // Cross-domain shared chrome: the learning template, its error boundary,
          // and the hooks/lib/registry it pulls in are imported directly by content
          // files across every domain below (math, physics, languages, library, and
          // more) as well as by the main app shell. None of that is `/features/explore/*`,
          // so without a fixed home Rollup's automatic chunking hoists it into
          // whichever content-* bucket it reaches first (observed: content-languages),
          // making every other content-* chunk import it back from there. That in turn
          // forces content-languages to eagerly load and evaluate on every route (since
          // the app shell needs ErrorBoundary from it) and creates a real circular chunk
          // dependency with react-vendor, which broke module-eval order in production:
          // `class X extends Component` ran before its cross-chunk React import was
          // populated, throwing "Cannot read properties of undefined (reading
          // 'Component')". Pinning this shared surface to its own chunk keeps it in one
          // stable place that depends only on react-vendor, breaking the cycle.
          if (
            id.includes('/src/components/learning/') ||
            id.includes('/src/components/layout/error-boundary') ||
            id.includes('/src/components/layout/error-fallbacks') ||
            id.includes('/src/hooks/use-settings') ||
            id.includes('/src/hooks/use-theme') ||
            id.includes('/src/hooks/use-mathjax') ||
            id.includes('/src/hooks/use-fsrs') ||
            id.includes('/src/lib/error-utils') ||
            id.includes('/src/lib/idb-store') ||
            id.includes('/src/lib/keybinds') ||
            id.includes('/src/config/registry')
          )
            return 'app-shared'
          if (id.includes('/features/explore/mathematics')) return 'content-math'
          if (id.includes('/features/explore/physics')) return 'content-physics'
          if (id.includes('/features/explore/languages')) return 'content-languages'
          if (
            id.includes('/features/explore/books') ||
            id.includes('/features/explore/podcasts') ||
            id.includes('/features/explore/videos') ||
            id.includes('/features/explore/papers')
          )
            return 'content-library'
        }
      }
    },
    // CSS optimization
    cssMinify: true,
    // Asset inlining threshold
    assetsInlineLimit: 4096
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'katex', '@tanstack/react-virtual'],
    exclude: []
  },
  // Enable esbuild optimizations
  esbuild: {
    // Remove console.log in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    // Legal comments handling
    legalComments: 'none'
  }
})
