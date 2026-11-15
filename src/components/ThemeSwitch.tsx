interface ThemeSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function ThemeSwitch({ checked, onChange }: ThemeSwitchProps) {
  return (
    <div className="flex justify-between pt-[1em]">
      <p className="my-[1em]">Dark Mode</p>
      <input
        type="checkbox"
        className="peer hidden"
        id="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <label
        htmlFor="checkbox"
        className="block h-[40px] w-[80px] cursor-pointer rounded-[20px] bg-switch-track p-[5px] select-none before:block before:size-[30px] before:rounded-full before:bg-switch-knob before:transition-all before:duration-300 before:ease-[ease] before:will-change-transform peer-checked:before:translate-x-[40px] dark:bg-linear-to-r/srgb dark:from-switch-from-dark dark:to-switch-to-dark dark:before:bg-switch-knob-dark"
      ></label>
    </div>
  )
}
