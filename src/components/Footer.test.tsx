import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it.each([
    ['Frontend Mentor', 'https://www.frontendmentor.io'],
    ['Tatiana Delsoglio', 'https://github.com/tatianadelsoglio'],
  ])('el link a %s abre en otra pestaña de forma segura y lo avisa', (name, href) => {
    render(<Footer />)

    // Chrome calcula "Frontend Mentor (se abre en otra pestaña)"; jsdom pierde el
    // espacio inicial del span oculto, por eso se compara sin espacios.
    const withoutSpaces = (text: string) => text.replace(/\s+/g, '')
    const link = screen.getByRole('link', {
      name: (accessibleName) =>
        withoutSpaces(accessibleName) === withoutSpaces(`${name} (se abre en otra pestaña)`),
    })
    expect(link).toHaveAttribute('href', href)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('está marcado en español (los textos de la interfaz están en inglés)', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toHaveAttribute('lang', 'es')
  })

  it('los separadores son decorativos y dejan una pausa para lectores de pantalla', () => {
    const { container } = render(<Footer />)

    const dots = container.querySelectorAll('span[aria-hidden="true"]')
    expect(dots).toHaveLength(2)
    dots.forEach((dot) => {
      expect(dot).toHaveTextContent('·')
      expect(dot.nextElementSibling).toHaveClass('sr-only')
      expect(dot.nextElementSibling).toHaveTextContent('.')
    })
  })

  // jsdom no aplica CSS: se verifica qué ícono muestra cada tema por sus clases.
  it('muestra el ícono TAMADE a color en tema claro y el blanco en oscuro, ambos decorativos', () => {
    const { container } = render(<Footer />)
    const [colorIcon, whiteIcon] = container.querySelectorAll('img')

    expect(colorIcon).toHaveAttribute('src', `${import.meta.env.BASE_URL}brand/tamade-icon.webp`)
    expect(colorIcon).toHaveClass('dark:opacity-0')
    expect(colorIcon).not.toHaveClass('opacity-0')

    expect(whiteIcon).toHaveAttribute('src', `${import.meta.env.BASE_URL}brand/tamade-icon-white.webp`)
    expect(whiteIcon).toHaveClass('opacity-0', 'dark:opacity-100')

    for (const icon of [colorIcon, whiteIcon]) {
      expect(icon).toHaveAttribute('alt', '')
      // 40 × 35: misma proporción que el PNG original (361 × 316)
      expect(icon).toHaveAttribute('width', '40')
      expect(icon).toHaveAttribute('height', '35')
    }
  })
})
