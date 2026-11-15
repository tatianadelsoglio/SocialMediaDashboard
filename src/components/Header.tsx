import type { ReactNode } from 'react'
import { totalFollowers } from '../data/followers'
import { formatNumber } from '../utils/formatUtils'
import Container from './Container'

interface HeaderProps {
  children: ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="pt-[38px] pb-[41px] md:pb-[49px]">
      <Container>
        <div className="md:flex md:items-start md:justify-between md:gap-6">
          <div>
            <h1 className="text-2xl leading-none font-bold md:text-[28px]">
              Social Media Dashboard
            </h1>
            <p className="mt-2 text-sm leading-none font-bold text-text-muted-light dark:text-text-muted-dark">
              Total Followers: {formatNumber(totalFollowers)}
            </p>
          </div>
          {children}
        </div>
      </Container>
    </header>
  )
}
