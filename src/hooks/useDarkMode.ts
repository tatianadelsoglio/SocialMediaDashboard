import { useEffect, useState } from 'react'

const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)'

// Arranca con la preferencia del sistema y la sigue si cambia.
// El switch puede pisarla manualmente con setIsDark.
export function useDarkMode() {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia(DARK_SCHEME_QUERY).matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_SCHEME_QUERY)
    const handleChange = (event: MediaQueryListEvent) => setIsDark(event.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return [isDark, setIsDark] as const
}
