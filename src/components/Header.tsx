import type { ReactNode } from 'react'
import Container from './Container'

interface HeaderProps {
  children: ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="rounded-b-[20px] bg-surface pt-[2em] pb-[100px] dark:bg-surface-dark">
      <Container>
        <div className="lg:grid lg:grid-cols-[1fr_200px]">
          <div>
            <h1 className="text-[1.7em] font-bold">Social Media Dashboard</h1>
            <p className="my-[.5em] border-b border-muted pb-[1.5em] font-semibold text-muted dark:border-muted-dark dark:text-muted-dark">
              Total Followers: 23, 004
            </p>
          </div>
          {children}
        </div>
      </Container>
    </header>
  )
}
