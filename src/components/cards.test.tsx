import { render, screen, within } from '@testing-library/react'
import type { ReactNode } from 'react'
import { describe, expect, it } from 'vitest'
import type { FollowersStat, OverviewStat } from '../types/social'
import FollowersCard from './FollowersCard'
import ViewsCard from './ViewsCard'

const UP_PATH = 'M0 4l4-4 4 4z'
const DOWN_PATH = 'M0 0l4 4 4-4z'

const followers = (overrides: Partial<FollowersStat> = {}): FollowersStat => ({
  id: 1,
  platform: 'facebook',
  username: '@tatianadelsoglio',
  audience: '1987',
  audienceLabel: 'Followers',
  todayChange: 12,
  ...overrides,
})

const overview = (overrides: Partial<OverviewStat> = {}): OverviewStat => ({
  id: 1,
  platform: 'facebook',
  metric: 'Page Views',
  value: '87',
  changePercent: 3,
  ...overrides,
})

function renderInList(card: ReactNode) {
  render(<ul>{card}</ul>)
  return screen.getByRole('listitem')
}

/** Texto completo del ítem, incluido el oculto para lectores de pantalla. */
const readAloud = (item: HTMLElement) => item.textContent?.replace(/\s+/g, ' ').trim()

function trendArrow(item: HTMLElement) {
  const svg = item.querySelector('svg')
  if (!svg) throw new Error('La tarjeta no tiene flecha')
  return { svg, path: svg.querySelector('path')?.getAttribute('d') }
}

describe('FollowersCard', () => {
  it('con variación positiva: flecha hacia arriba en verde y "more"', () => {
    const item = renderInList(<FollowersCard {...followers()} />)

    const { svg, path } = trendArrow(item)
    expect(path).toBe(UP_PATH)
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg.parentElement).toHaveClass('text-lime-green-aa')
    expect(within(item).getByText('more')).toHaveClass('sr-only')
  })

  it('con variación negativa: flecha hacia abajo en rojo, "fewer" y el número sin signo', () => {
    const item = renderInList(
      <FollowersCard
        {...followers({ platform: 'youtube', audience: '8239', audienceLabel: 'Subscribers', todayChange: -144 })}
      />,
    )

    expect(trendArrow(item).path).toBe(DOWN_PATH)
    expect(trendArrow(item).svg.parentElement).toHaveClass('text-bright-red-aa-light')
    expect(within(item).getByText('fewer')).toHaveClass('sr-only')
    expect(item).toHaveTextContent('144')
    expect(item).not.toHaveTextContent('-144')
  })

  it('se lee completa: red, usuario, cantidad y variación del día', () => {
    const item = renderInList(<FollowersCard {...followers()} />)
    // Cada <p> es un bloque: el lector de pantalla hace pausa entre ellos.
    expect(readAloud(item)).toBe('Facebook, @tatianadelsoglio,1987 Followers,12 more Today')
  })

  it('el ícono de la red es decorativo (el nombre va en texto oculto)', () => {
    const item = renderInList(<FollowersCard {...followers()} />)
    expect(item.querySelector('img')).toHaveAttribute('alt', '')
    expect(within(item).getByText('Facebook,')).toHaveClass('sr-only')
  })
})

describe('ViewsCard', () => {
  it('con variación positiva: flecha hacia arriba en verde y "up"', () => {
    const item = renderInList(<ViewsCard {...overview()} />)

    expect(trendArrow(item).path).toBe(UP_PATH)
    expect(trendArrow(item).svg.parentElement).toHaveClass('text-lime-green-aa')
    expect(within(item).getByText('up')).toHaveClass('sr-only')
  })

  it('con variación negativa: flecha hacia abajo en rojo, "down" y el porcentaje sin signo', () => {
    const item = renderInList(
      <ViewsCard {...overview({ platform: 'youtube', metric: 'Likes', value: '107', changePercent: -19 })} />,
    )

    expect(trendArrow(item).path).toBe(DOWN_PATH)
    expect(trendArrow(item).svg.parentElement).toHaveClass('text-bright-red-aa-light')
    expect(within(item).getByText('down')).toHaveClass('sr-only')
    expect(item).toHaveTextContent('19%')
    expect(item).not.toHaveTextContent('-19')
  })

  it('se lee completa: red, métrica, valor y variación', () => {
    const item = renderInList(<ViewsCard {...overview()} />)
    expect(readAloud(item)).toBe('Facebook Page Views:87,up 3%')
  })
})
