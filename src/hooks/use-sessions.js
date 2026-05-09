import { useEffect, useState } from 'react'
import { getSessions, registerCurrentSession, touchCurrentSession } from '../lib/sessions'

export function useSessions() {
  useEffect(() => {
    registerCurrentSession()
    const heartbeat = setInterval(touchCurrentSession, 30_000)
    const onVis = () => {
      if (document.visibilityState === 'visible') touchCurrentSession()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      clearInterval(heartbeat)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])
}

export function useSessionsList() {
  const [list, setList] = useState(() => getSessions())
  useEffect(() => {
    const refresh = () => setList(getSessions())
    window.addEventListener('aether:sessions', refresh)
    window.addEventListener('storage', refresh)
    const tick = setInterval(refresh, 15_000)
    return () => {
      window.removeEventListener('aether:sessions', refresh)
      window.removeEventListener('storage', refresh)
      clearInterval(tick)
    }
  }, [])
  return list
}
