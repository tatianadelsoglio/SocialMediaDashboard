interface ThemeSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

// Checkbox nativo con role="switch", visualmente oculto pero enfocable:
// Tab lo enfoca, Espacio lo alterna y el <label> que lo envuelve le da el
// nombre accesible "Dark Mode". El estado (checked) lo expone el propio input.
export default function ThemeSwitch({ checked, onChange }: ThemeSwitchProps) {
  return (
    <div className="mt-[26px] border-t border-text-muted-light/75 pt-4 md:mt-3 md:border-t-0 md:pt-0 dark:border-text-muted-dark/15">
      <label className="group flex cursor-pointer items-center justify-between md:justify-end md:gap-[13px]">
        <span className="text-sm leading-none font-bold text-text-muted-light dark:text-text-muted-dark dark:group-hover:text-text-dark">
          Dark Mode
        </span>
        <input
          type="checkbox"
          role="switch"
          className="peer sr-only"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        {/* En el diseño la perilla queda a la derecha en tema claro y a la izquierda en oscuro */}
        <span
          aria-hidden="true"
          className="relative block h-6 w-12 shrink-0 rounded-full bg-toggle-light p-[3px] ring-1 ring-text-muted-light/75 outline-offset-2 dark:ring-0 outline-text-muted-light peer-focus-visible:outline-2 dark:outline-text-muted-dark"
        >
          <span className="absolute inset-0 rounded-full bg-linear-to-r/srgb from-toggle-from-dark to-toggle-to-dark opacity-0 group-hover:opacity-100 dark:opacity-100" />
          <span className="relative block size-[18px] translate-x-6 rounded-full bg-card-light transition-[translate,background-color] duration-300 motion-reduce:transition-none dark:translate-x-0 dark:bg-card-dark" />
        </span>
      </label>
    </div>
  )
}
