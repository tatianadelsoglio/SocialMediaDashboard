import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  addThemeColorMetas,
  breakLocalStorage,
  mockSystemColorScheme,
  themeColorContents,
} from '../test/themeTestUtils'
import { THEME_STORAGE_KEY } from '../utils/themeUtils'
import { useDarkMode } from './useDarkMode'

const isDarkOf = (result: { current: readonly [boolean, unknown] }) => result.current[0]

function dispatchStorage(key: string | null, newValue: string | null) {
  act(() => {
    window.dispatchEvent(new StorageEvent('storage', { key, newValue }))
  })
}

describe('useDarkMode', () => {
  it('sin elección guardada, arranca con la preferencia del sistema', () => {
    mockSystemColorScheme(true)
    const { result } = renderHook(() => useDarkMode())

    expect(isDarkOf(result)).toBe(true)
    expect(document.documentElement).toHaveClass('dark')
  })

  it('sin elección guardada, sigue los cambios del sistema en caliente', () => {
    const system = mockSystemColorScheme(false)
    const { result } = renderHook(() => useDarkMode())
    expect(isDarkOf(result)).toBe(false)

    act(() => system.setPrefersDark(true))
    expect(isDarkOf(result)).toBe(true)
    expect(document.documentElement).toHaveClass('dark')
  })

  it('la elección guardada pisa al sistema', () => {
    mockSystemColorScheme(true)
    localStorage.setItem(THEME_STORAGE_KEY, 'light')
    const { result } = renderHook(() => useDarkMode())

    expect(isDarkOf(result)).toBe(false)
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('al elegir con el switch, guarda la elección y deja de seguir al sistema', () => {
    const system = mockSystemColorScheme(false)
    const { result } = renderHook(() => useDarkMode())

    act(() => result.current[1](true))
    expect(isDarkOf(result)).toBe(true)
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')

    act(() => system.setPrefersDark(false))
    expect(isDarkOf(result)).toBe(true)
  })

  it('funciona aunque localStorage falle (la elección vale para la sesión)', () => {
    mockSystemColorScheme(false)
    breakLocalStorage()
    const { result } = renderHook(() => useDarkMode())

    expect(isDarkOf(result)).toBe(false)
    act(() => result.current[1](true))
    expect(isDarkOf(result)).toBe(true)
  })

  it('actualiza theme-color con el tema activo', () => {
    mockSystemColorScheme(false)
    addThemeColorMetas()
    const { result } = renderHook(() => useDarkMode())
    expect(themeColorContents()).toEqual(['hsl(225, 100%, 98%)', 'hsl(225, 100%, 98%)'])

    act(() => result.current[1](true))
    expect(themeColorContents()).toEqual(['hsl(232, 19%, 15%)', 'hsl(232, 19%, 15%)'])
  })

  describe('sincronización entre pestañas (evento storage)', () => {
    it('aplica la elección hecha en otra pestaña', () => {
      mockSystemColorScheme(false)
      const { result } = renderHook(() => useDarkMode())

      dispatchStorage(THEME_STORAGE_KEY, 'dark')
      expect(isDarkOf(result)).toBe(true)

      dispatchStorage(THEME_STORAGE_KEY, 'light')
      expect(isDarkOf(result)).toBe(false)
    })

    it('si otra pestaña borra la elección, vuelve a seguir al sistema', () => {
      const system = mockSystemColorScheme(true)
      localStorage.setItem(THEME_STORAGE_KEY, 'light')
      const { result } = renderHook(() => useDarkMode())
      expect(isDarkOf(result)).toBe(false)

      dispatchStorage(null, null) // localStorage.clear() en otra pestaña
      expect(isDarkOf(result)).toBe(true)

      act(() => system.setPrefersDark(false))
      expect(isDarkOf(result)).toBe(false)
    })

    it('ignora cambios de otras claves', () => {
      mockSystemColorScheme(false)
      const { result } = renderHook(() => useDarkMode())

      dispatchStorage('otra-clave', 'dark')
      expect(isDarkOf(result)).toBe(false)
    })
  })

  it('deja de escuchar al sistema al desmontar', () => {
    const system = mockSystemColorScheme(false)
    const { unmount } = renderHook(() => useDarkMode())
    expect(system.listenerCount()).toBe(1)

    unmount()
    expect(system.listenerCount()).toBe(0)
  })
})
