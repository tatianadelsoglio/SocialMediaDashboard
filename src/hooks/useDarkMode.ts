import { useCallback, useEffect, useState } from 'react'
import {
  DARK_SCHEME_QUERY,
  readStoredTheme,
  systemPrefersDark,
  writeStoredTheme,
  type Theme,
} from '../utils/themeUtils'

// Sin elección guardada, sigue a prefers-color-scheme (también en caliente).
// Si la persona elige con el switch, esa elección se guarda y pisa al sistema.
export function useDarkMode() {
  const [storedTheme, setStoredTheme] = useState<Theme | null>(readStoredTheme)
  const [systemDark, setSystemDark] = useState(systemPrefersDark)

  useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_SCHEME_QUERY)
    const handleChange = (event: MediaQueryListEvent) => setSystemDark(event.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const isDark = storedTheme ? storedTheme === 'dark' : systemDark

  // La clase vive en <html> para que el script inline de index.html pueda
  // aplicarla antes de que React monte.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const setIsDark = useCallback((dark: boolean) => {
    const theme: Theme = dark ? 'dark' : 'light'
    writeStoredTheme(theme)
    setStoredTheme(theme)
  }, [])

  return [isDark, setIsDark] as const
}
