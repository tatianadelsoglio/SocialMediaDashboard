import { useId } from 'react'

interface ThemeSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function ThemeSwitch({ checked, onChange }: ThemeSwitchProps) {
  const inputId = useId()

  return (
    <div className="flex justify-between pt-[1em]">
      <p className="my-[1em]">Dark Mode</p>
      <input
        type="checkbox"
        className="peer hidden"
        id={inputId}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <label
        htmlFor={inputId}
        className="block h-[40px] w-[80px] cursor-pointer rounded-[20px] bg-toggle-light p-[5px] select-none before:block before:size-[30px] before:rounded-full before:bg-card-light before:transition-all before:duration-300 before:ease-[ease] before:will-change-transform peer-checked:before:translate-x-[40px] dark:bg-linear-to-r/srgb dark:from-toggle-from-dark dark:to-toggle-to-dark dark:before:bg-card-dark"
      ></label>
    </div>
  )
}
