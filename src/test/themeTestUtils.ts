import { vi } from 'vitest'

type ChangeListener = (event: MediaQueryListEvent) => void

/**
 * jsdom no implementa matchMedia. Este doble permite fijar
 * prefers-color-scheme y simular que el sistema lo cambia en caliente.
 */
export function mockSystemColorScheme(prefersDark: boolean) {
  let matches = prefersDark
  const listeners = new Set<ChangeListener>()

  const mediaQueryList = {
    get matches() {
      return matches
    },
    media: '(prefers-color-scheme: dark)',
    onchange: null,
    addEventListener: (_type: 'change', listener: ChangeListener) => listeners.add(listener),
    removeEventListener: (_type: 'change', listener: ChangeListener) =>
      listeners.delete(listener),
    addListener: () => undefined,
    removeListener: () => undefined,
    dispatchEvent: () => true,
  } as unknown as MediaQueryList

  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => mediaQueryList),
  )

  return {
    setPrefersDark(next: boolean) {
      matches = next
      const event = { matches: next, media: mediaQueryList.media } as MediaQueryListEvent
      listeners.forEach((listener) => listener(event))
    },
    listenerCount: () => listeners.size,
  }
}

/** Las dos <meta name="theme-color"> que trae index.html. */
export function addThemeColorMetas() {
  for (const media of ['(prefers-color-scheme: light)', '(prefers-color-scheme: dark)']) {
    const meta = document.createElement('meta')
    meta.name = 'theme-color'
    meta.media = media
    meta.content = 'initial'
    document.head.append(meta)
  }
}

export function themeColorContents(): string[] {
  return [...document.head.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')].map(
    (meta) => meta.content,
  )
}

/** Simula que localStorage no está disponible (modo privado, cookies bloqueadas). */
export function breakLocalStorage() {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
    throw new Error('localStorage bloqueado')
  })
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new Error('localStorage bloqueado')
  })
}
