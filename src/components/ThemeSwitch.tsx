import './ThemeSwitch.css'

interface ThemeSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function ThemeSwitch({ checked, onChange }: ThemeSwitchProps) {
  return (
    <div className="dark-mode">
      <p className="dark-mode-title">Dark Mode</p>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <label className="switch" htmlFor="checkbox"></label>
    </div>
  )
}
