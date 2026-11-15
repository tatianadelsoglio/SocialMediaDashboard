import { useId } from 'react'
import { followersStats } from '../data/followers'
import CardGrid from './CardGrid'
import Container from './Container'
import FollowersCard from './FollowersCard'

export default function FollowersSection() {
  const headingId = useId()

  return (
    <section aria-labelledby={headingId}>
      <Container>
        {/* El diseño no muestra un título para esta sección */}
        <h2 id={headingId} className="sr-only">
          Followers by platform
        </h2>
        <CardGrid variant="followers">
          {followersStats.map((stat) => (
            <FollowersCard key={stat.id} {...stat} />
          ))}
        </CardGrid>
      </Container>
    </section>
  )
}
