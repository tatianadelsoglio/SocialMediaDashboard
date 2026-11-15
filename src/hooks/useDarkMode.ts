import { useCallback, useEffect, useState } from 'react'
import {
  applyTheme,
  DARK_SCHEME_QUERY,
  parseTheme,
  readStoredTheme,
  systemPrefersDark,
  THEME_STORAGE_KEY,
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

  // Otra pestaña cambió (o borró) la elección guardada: se sigue el mismo tema.
  // El evento storage solo llega a las otras pestañas, no a la que escribió.
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      // key null = se vació todo el localStorage
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        setStoredTheme(parseTheme(event.newValue))
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const isDark = storedTheme ? storedTheme === 'dark' : systemDark

  // La clase vive en <html> para que el script inline de index.html pueda
  // aplicarla antes de que React monte.
  useEffect(() => {
    applyTheme(isDark)
  }, [isDark])

  const setIsDark = useCallback((dark: boolean) => {
    const theme: Theme = dark ? 'dark' : 'light'
    writeStoredTheme(theme)
    setStoredTheme(theme)
  }, [])

  return [isDark, setIsDark] as const
}
