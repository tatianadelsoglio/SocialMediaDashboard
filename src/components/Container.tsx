import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

// 1110px de contenido a 1440 (diseño desktop) con 24px de margen lateral.
export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-[1158px] px-6">{children}</div>
}
