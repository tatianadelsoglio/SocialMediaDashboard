import FollowersSection from './components/FollowersSection'
import Header from './components/Header'
import OverviewSection from './components/OverviewSection'
import ThemeSwitch from './components/ThemeSwitch'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <main
      className={`min-h-screen bg-bg-light text-text-light antialiased dark:bg-bg-dark dark:text-text-dark ${isDark ? 'dark' : ''}`}
    >
      <Header>
        <ThemeSwitch checked={isDark} onChange={setIsDark} />
      </Header>
      <FollowersSection />
      <OverviewSection />
    </main>
  )
}
