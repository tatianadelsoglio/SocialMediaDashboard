import type { ReactNode } from 'react'
import Container from './Container'

interface HeaderProps {
  children: ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="rounded-b-[20px] bg-top-bg-light pt-[2em] pb-[100px] dark:bg-top-bg-dark">
      <Container>
        <div className="lg:grid lg:grid-cols-[1fr_200px]">
          <div>
            <h1 className="text-[1.7em] font-bold">Social Media Dashboard</h1>
            <p className="my-[.5em] border-b border-text-muted-light pb-[1.5em] font-bold text-text-muted-light dark:border-text-muted-dark dark:text-text-muted-dark">
              Total Followers: 23, 004
            </p>
          </div>
          {children}
        </div>
      </Container>
    </header>
  )
}
