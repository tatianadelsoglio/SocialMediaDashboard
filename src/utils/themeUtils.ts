export type Theme = 'light' | 'dark'

// La misma clave y la misma lógica están duplicadas en el script inline de
// index.html, que aplica el tema antes del primer pintado. Si cambian acá,
// hay que cambiarlas también allá.
export const THEME_STORAGE_KEY = 'theme'
export const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)'

// Color de la barra del navegador: la franja superior (Top BG Pattern) de cada tema
const THEME_COLORS: Record<Theme, string> = {
  light: 'hsl(225, 100%, 98%)',
  dark: 'hsl(232, 19%, 15%)',
}

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

/** Aplica el tema en <html> y en las <meta name="theme-color"> de index.html. */
export function applyTheme(isDark: boolean): void {
  document.documentElement.classList.toggle('dark', isDark)
  // Las dos metas tienen media por prefers-color-scheme; se pisan con el color
  // del tema activo para que la barra siga también a la elección del switch.
  const color = THEME_COLORS[isDark ? 'dark' : 'light']
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((meta) => meta.setAttribute('content', color))
}
