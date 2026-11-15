import FollowersSection from './components/FollowersSection'
import Header from './components/Header'
import OverviewSection from './components/OverviewSection'
import ThemeSwitch from './components/ThemeSwitch'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className="relative isolate min-h-screen pb-12">
      {/* Franja superior del diseño (Top BG Pattern) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[235px] rounded-b-[20px] bg-top-bg-light md:h-[245px] dark:bg-top-bg-dark"
      />
      <Header>
        <ThemeSwitch checked={isDark} onChange={setIsDark} />
      </Header>
      <main>
        <FollowersSection />
        <OverviewSection />
      </main>
    </div>
  )
}
