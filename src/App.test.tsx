import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'
import { mockSystemColorScheme } from './test/themeTestUtils'

describe('App', () => {
  beforeEach(() => {
    mockSystemColorScheme(false)
  })

  it('tiene un solo h1 y secciones con encabezado', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('region', { name: 'Followers by platform' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Overview - Today' })).toBeInTheDocument()
  })

  it('muestra las 4 tarjetas superiores y las 8 del overview como listas', () => {
    render(<App />)

    const followers = screen.getByRole('region', { name: 'Followers by platform' })
    const overview = screen.getByRole('region', { name: 'Overview - Today' })
    expect(within(followers).getAllByRole('listitem')).toHaveLength(4)
    expect(within(overview).getAllByRole('listitem')).toHaveLength(8)
  })

  it('el switch cambia el tema de la página', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('switch', { name: 'Dark Mode' }))
    expect(document.documentElement).toHaveClass('dark')
  })
})
