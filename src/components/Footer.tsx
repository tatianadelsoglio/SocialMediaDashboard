import type { ReactNode } from 'react'
import Container from './Container'

// Proporción real de los PNG de marca (361 × 316)
const BRAND_ICON_WIDTH = 361
const BRAND_ICON_HEIGHT = 316

interface ExternalLinkProps {
  href: string
  children: ReactNode
}

function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 hover:text-text-light focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:hover:text-text-dark"
    >
      {children}
      <span className="sr-only"> (se abre en otra pestaña)</span>
    </a>
  )
}

function Separator() {
  return (
    <span aria-hidden="true" className="mx-1.5">
      ·
    </span>
  )
}

export default function Footer() {
  return (
    <footer lang="es" className="mt-12 pb-6">
      <Container>
        <p className="text-center text-[11px] leading-relaxed text-text-muted-light dark:text-text-muted-dark">
          Reto de <ExternalLink href="https://www.frontendmentor.io">Frontend Mentor</ExternalLink>
          <Separator />
          Desarrollado por{' '}
          <ExternalLink href="https://github.com/tatianadelsoglio">Tatiana Delsoglio</ExternalLink>
          <Separator />
          <span className="inline-flex items-center gap-1 align-middle">
            TAMADE
            <img
              src="/brand/tamade-icon.png"
              alt=""
              width={BRAND_ICON_WIDTH}
              height={BRAND_ICON_HEIGHT}
              className="h-5 w-auto dark:hidden"
            />
            <img
              src="/brand/tamade-icon-white.png"
              alt=""
              width={BRAND_ICON_WIDTH}
              height={BRAND_ICON_HEIGHT}
              className="hidden h-5 w-auto dark:block"
            />
          </span>
        </p>
      </Container>
    </footer>
  )
}
