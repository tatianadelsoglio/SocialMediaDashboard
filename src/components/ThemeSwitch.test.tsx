import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import ThemeSwitch from './ThemeSwitch'

function ControlledSwitch({ initial = false }: { initial?: boolean }) {
  const [checked, setChecked] = useState(initial)
  return <ThemeSwitch checked={checked} onChange={setChecked} />
}

describe('ThemeSwitch', () => {
  it('expone role="switch" con el nombre accesible del texto visible', () => {
    render(<ControlledSwitch />)

    const toggle = screen.getByRole('switch', { name: 'Dark Mode' })
    expect(toggle).toBeInTheDocument()
    // Checkbox nativo: el estado lo da `checked`, no hace falta aria-checked
    expect(toggle.tagName).toBe('INPUT')
    expect(toggle).toHaveAttribute('type', 'checkbox')
  })

  it('refleja el estado actual', () => {
    const { unmount } = render(<ControlledSwitch initial />)
    expect(screen.getByRole('switch')).toBeChecked()
    unmount()

    render(<ControlledSwitch initial={false} />)
    expect(screen.getByRole('switch')).not.toBeChecked()
  })

  it('se enfoca con Tab y se alterna con Espacio', async () => {
    const user = userEvent.setup()
    render(<ControlledSwitch />)
    const toggle = screen.getByRole('switch', { name: 'Dark Mode' })

    await user.tab()
    expect(toggle).toHaveFocus()

    await user.keyboard(' ')
    expect(toggle).toBeChecked()

    await user.keyboard(' ')
    expect(toggle).not.toBeChecked()
  })

  it('se alterna al hacer clic en el texto "Dark Mode"', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<ThemeSwitch checked={false} onChange={onChange} />)

    await user.click(screen.getByText('Dark Mode'))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('el dibujo de la pista queda oculto para lectores de pantalla', () => {
    const { container } = render(<ControlledSwitch />)
    expect(container.querySelector('label > span[aria-hidden="true"]')).toBeInTheDocument()
  })
})
