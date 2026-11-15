import type { ReactNode } from 'react'

interface CardGridProps {
  children: ReactNode
}

export default function CardGrid({ children }: CardGridProps) {
  return (
    <div className="grid gap-y-[25px] xs:grid-cols-[1fr_1fr] xs:gap-x-[25px] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr]">
      {children}
    </div>
  )
}
