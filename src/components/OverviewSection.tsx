import { useId } from 'react'
import { overviewStats } from '../data/overview'
import CardGrid from './CardGrid'
import Container from './Container'
import ViewsCard from './ViewsCard'

export default function OverviewSection() {
  const headingId = useId()

  return (
    <section aria-labelledby={headingId} className="mt-[49px]">
      <Container>
        <h2
          id={headingId}
          className="theme-transition mb-[30px] text-2xl leading-none font-bold text-text-muted-light md:mb-[27px] dark:text-text-dark"
        >
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
