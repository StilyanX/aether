import { useState, useEffect } from 'react'

export function usePageTransition() {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return entered
}
