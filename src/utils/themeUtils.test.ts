import { describe, expect, it } from 'vitest'
import {
  addThemeColorMetas,
  breakLocalStorage,
  mockSystemColorScheme,
  themeColorContents,
} from '../test/themeTestUtils'
import {
  applyTheme,
  parseTheme,
  readStoredTheme,
  systemPrefersDark,
  THEME_STORAGE_KEY,
  writeStoredTheme,
} from './themeUtils'

describe('parseTheme', () => {
  it('acepta solo "light" y "dark"', () => {
    expect(parseTheme('light')).toBe('light')
    expect(parseTheme('dark')).toBe('dark')
  })

  it('trata cualquier otro valor como "sin elección"', () => {
    expect(parseTheme(null)).toBeNull()
    expect(parseTheme('')).toBeNull()
    expect(parseTheme('DARK')).toBeNull()
  })
})

describe('elección guardada', () => {
  it('devuelve null si la persona nunca eligió', () => {
    expect(readStoredTheme()).toBeNull()
  })

  it('guarda y lee la elección', () => {
    writeStoredTheme('dark')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    expect(readStoredTheme()).toBe('dark')
  })

  it('ignora un valor guardado inválido', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'sepia')
    expect(readStoredTheme()).toBeNull()
  })

  it('no rompe si localStorage falla', () => {
    breakLocalStorage()
    expect(readStoredTheme()).toBeNull()
    expect(() => writeStoredTheme('dark')).not.toThrow()
  })
})

describe('systemPrefersDark', () => {
  it('refleja prefers-color-scheme', () => {
    mockSystemColorScheme(true)
    expect(systemPrefersDark()).toBe(true)
  })

  it('devuelve false con el sistema en claro', () => {
    mockSystemColorScheme(false)
    expect(systemPrefersDark()).toBe(false)
  })
})

describe('applyTheme', () => {
  it('pone y saca la clase dark en <html>', () => {
    applyTheme(true)
    expect(document.documentElement).toHaveClass('dark')
    applyTheme(false)
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('pisa las dos meta theme-color con el color del tema activo', () => {
    addThemeColorMetas()

    applyTheme(true)
    expect(themeColorContents()).toEqual(['hsl(232, 19%, 15%)', 'hsl(232, 19%, 15%)'])

    applyTheme(false)
    expect(themeColorContents()).toEqual(['hsl(225, 100%, 98%)', 'hsl(225, 100%, 98%)'])
  })
})
