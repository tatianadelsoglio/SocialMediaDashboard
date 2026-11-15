// Punto medio entre textos en línea. Es decorativo; el punto oculto da la
// pausa al lector de pantalla.
export default function Separator() {
  return (
    <>
      <span aria-hidden="true" className="mx-1.5">
        ·
      </span>
      <span className="sr-only">. </span>
    </>
  )
}
