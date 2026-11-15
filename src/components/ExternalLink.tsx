import type { ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  children: ReactNode
}

// Link a otro sitio en una pestaña nueva, con el aviso para lectores de pantalla.
// El aviso está en español: se usa dentro del pie, que tiene lang="es".
export default function ExternalLink({ href, children }: ExternalLinkProps) {
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
