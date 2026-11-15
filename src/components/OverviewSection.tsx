import { overviewStats } from '../data/overview'
import CardGrid from './CardGrid'
import Container from './Container'
import ViewsCard from './ViewsCard'

export default function OverviewSection() {
  return (
    <section className="pb-[2em]">
      <Container>
        <h2 className="my-[.83em] text-[1.5em] font-bold text-muted dark:text-muted-dark">
          Overview - Today
        </h2>
        <CardGrid>
          {overviewStats.map((stat) => (
            <ViewsCard key={stat.id} {...stat} />
          ))}
        </CardGrid>
      </Container>
    </section>
  )
}
