import { overviewStats } from '../data/overview'
import ViewsCard from './ViewsCard'
import './OverviewSection.css'

export default function OverviewSection() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {overviewStats.map((stat) => (
            <ViewsCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
