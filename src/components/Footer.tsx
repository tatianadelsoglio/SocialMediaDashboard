import type { ReactNode } from 'react'
import Container from './Container'

// Exportados a 40 × 35 (2x de 20px de ancho), misma proporción que el original 361 × 316
const BRAND_ICON_WIDTH = 40
const BRAND_ICON_HEIGHT = 35

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
      className="theme-transition underline underline-offset-2 hover:text-text-light focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current dark:hover:text-text-dark"
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
        <p className="theme-transition text-center text-[11px] leading-relaxed text-text-muted-light dark:text-text-muted-dark">
          Reto de <ExternalLink href="https://www.frontendmentor.io">Frontend Mentor</ExternalLink>
          <Separator />
          Desarrollado por{' '}
          <ExternalLink href="https://github.com/tatianadelsoglio">Tatiana Delsoglio</ExternalLink>
          <Separator />
          <span className="inline-flex items-center gap-1 align-middle">
            TAMADE
            {/* Las dos versiones superpuestas, para fundir una en otra al cambiar de tema */}
            <span className="relative block w-5 shrink-0">
              <img
                src="/brand/tamade-icon.webp"
                alt=""
                width={BRAND_ICON_WIDTH}
                height={BRAND_ICON_HEIGHT}
                className="theme-transition block h-auto w-5 dark:opacity-0"
              />
              <img
                src="/brand/tamade-icon-white.webp"
                alt=""
                width={BRAND_ICON_WIDTH}
                height={BRAND_ICON_HEIGHT}
                className="theme-transition absolute inset-0 h-auto w-5 opacity-0 dark:opacity-100"
              />
            </span>
          </span>
        </p>
      </Container>
    </footer>
  )
}
