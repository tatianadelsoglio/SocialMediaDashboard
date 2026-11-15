export type Theme = 'light' | 'dark'

// La misma clave y la misma lógica están duplicadas en el script inline de
// index.html, que aplica el tema antes del primer pintado. Si cambian acá,
// hay que cambiarlas también allá.
export const THEME_STORAGE_KEY = 'theme'
export const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)'

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}

/** Tema elegido con el switch, o null si la persona nunca eligió. */
export function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(value) ? value : null
  } catch {
    // localStorage puede no estar disponible (modo privado, cookies bloqueadas)
    return null
  }
}

export function writeStoredTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Sin persistencia: el tema elegido vale solo para esta sesión
  }
}

export function systemPrefersDark(): boolean {
  return window.matchMedia(DARK_SCHEME_QUERY).matches
}
