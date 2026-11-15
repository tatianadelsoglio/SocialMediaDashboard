import { overviewStats } from '../data/overview'
import CardGrid from './CardGrid'
import Container from './Container'
import ViewsCard from './ViewsCard'

export default function OverviewSection() {
  return (
    <section className="mt-12">
      <Container>
        <h2 className="mb-[30px] text-2xl leading-none font-bold text-text-muted-light md:mb-[27px] dark:text-text-dark">
          Overview - Today
        </h2>
        <CardGrid variant="overview">
          {overviewStats.map((stat) => (
            <ViewsCard key={stat.id} {...stat} />
          ))}
        </CardGrid>
      </Container>
    </section>
  )
}
