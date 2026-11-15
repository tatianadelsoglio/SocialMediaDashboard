interface TrendArrowProps {
  isPositive: boolean
}

// Mismo triángulo que icon-up/icon-down.svg del starter, pero con
// currentColor para que tome el token de color (verde o rojo) del texto.
export default function TrendArrow({ isPositive }: TrendArrowProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="8"
      height="4"
      viewBox="0 0 8 4"
      className="mr-1 inline-block shrink-0 fill-current align-[0.2em]"
    >
      <path d={isPositive ? 'M0 4l4-4 4 4z' : 'M0 0l4 4 4-4z'} />
    </svg>
  )
}
