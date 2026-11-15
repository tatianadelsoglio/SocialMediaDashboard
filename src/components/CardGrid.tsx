import type { ReactNode } from 'react'

type CardGridVariant = 'followers' | 'overview'

// Separaciones medidas en los JPG: 24px entre tarjetas superiores,
// 16px (mobile) / 24px (desktop) entre filas del overview y 30px entre columnas.
const gapByVariant: Record<CardGridVariant, string> = {
  followers: 'gap-6 sm:gap-x-[30px]',
  overview: 'gap-y-4 sm:gap-x-[30px] lg:gap-y-6',
}

interface CardGridProps {
  variant: CardGridVariant
  children: ReactNode
}

export default function CardGrid({ variant, children }: CardGridProps) {
  return (
    <ul
      role="list"
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${gapByVariant[variant]}`}
    >
      {children}
    </ul>
  )
}
