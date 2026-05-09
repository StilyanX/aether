import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '18' }]]
      }
    }),
    {
      name: 'redirect-root',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '' || req.url === '/Aether') {
            res.writeHead(302, { Location: '/Aether/' })
            res.end()
            return
          }
          next()
        })
      }
    }
  ],
  base: '/Aether/',
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
          if (id.includes('node_modules/react') || id.includes('react-router'))
            return 'react-vendor'
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
    include: ['react', 'react-dom', 'react-router-dom', 'katex'],
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
