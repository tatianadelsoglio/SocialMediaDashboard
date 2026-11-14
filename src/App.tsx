import FollowersSection from './components/FollowersSection'
import Header from './components/Header'
import OverviewSection from './components/OverviewSection'
import ThemeSwitch from './components/ThemeSwitch'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <main className={isDark ? 'is-dark-mode' : 'is-light-mode'}>
      <Header>
        <ThemeSwitch checked={isDark} onChange={setIsDark} />
      </Header>
      <FollowersSection />
      <OverviewSection />
    </main>
  )
}
