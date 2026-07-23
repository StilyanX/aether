import { useEffect } from 'react'

export function useRUM() {
  useEffect(() => {
    // Track Core Web Vitals: FCP, LCP, CLS, INP
    // Send to analytics (or log for now)
    if (!('PerformanceObserver' in window)) return

    try {
      // First Contentful Paint (FCP)
      const paintEntries = performance.getEntriesByType('paint')
      const fcp = paintEntries.find(e => e.name === 'first-contentful-paint')
      if (fcp) {
        console.debug('[RUM] FCP:', Math.round(fcp.startTime), 'ms')
      }

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.debug('[RUM] LCP:', Math.round(lastEntry.renderTime || lastEntry.loadTime), 'ms')
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
        console.debug('[RUM] CLS:', clsValue.toFixed(3))
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Interaction to Next Paint (INP)
      const inpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries()
        const worst = entries.reduce((max, e) => (e.duration > max.duration ? e : max))
        console.debug('[RUM] INP:', Math.round(worst.duration), 'ms')
      })
      inpObserver.observe({ entryTypes: ['event'] })

      return () => {
        lcpObserver.disconnect()
        clsObserver.disconnect()
        inpObserver.disconnect()
      }
    } catch (e) {
      console.error('[RUM] Error:', e.message)
    }
  }, [])
}
