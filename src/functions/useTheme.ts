import { useState, useEffect } from 'react'
import themeStore from '@/state/themes/themeStore'

const useTheme = () => {
  const [theme, setTheme] = useState(themeStore.getState().theme)

  useEffect(() => {
    const unsubscribe = themeStore.subscribe(() => {
      setTheme(themeStore.getState().theme)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return theme
}

export default useTheme
