import { useId } from 'react'

interface ThemeSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function ThemeSwitch({ checked, onChange }: ThemeSwitchProps) {
  const inputId = useId()

  return (
    <div className="group mt-[26px] flex items-center justify-between border-t border-text-muted-light/75 pt-4 md:mt-3 md:justify-end md:gap-[13px] md:border-t-0 md:pt-0 dark:border-text-muted-dark/15">
      <p className="text-sm leading-none font-bold text-text-muted-light dark:text-text-muted-dark dark:group-hover:text-text-dark">
        Dark Mode
      </p>
      <input
        type="checkbox"
        className="peer hidden"
        id={inputId}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      {/* En el diseño la perilla queda a la derecha en tema claro y a la izquierda en oscuro */}
      <label
        htmlFor={inputId}
        className="relative block h-6 w-12 shrink-0 cursor-pointer rounded-full bg-toggle-light p-[3px]"
      >
        <span className="absolute inset-0 rounded-full bg-linear-to-r/srgb from-toggle-from-dark to-toggle-to-dark opacity-0 group-hover:opacity-100 dark:opacity-100" />
        <span className="relative block size-[18px] translate-x-6 rounded-full bg-card-light transition-transform duration-300 dark:translate-x-0 dark:bg-card-dark" />
      </label>
    </div>
  )
}
