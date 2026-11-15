import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="box-content px-[30px] xs:mx-auto xs:max-w-[1440px]">
      {children}
    </div>
  )
}
