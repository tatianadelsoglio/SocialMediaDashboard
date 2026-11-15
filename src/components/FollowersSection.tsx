import { followersStats } from '../data/followers'
import CardGrid from './CardGrid'
import Container from './Container'
import FollowersCard from './FollowersCard'

export default function FollowersSection() {
  return (
    <section>
      <Container>
        <CardGrid variant="followers">
          {followersStats.map((stat) => (
            <FollowersCard key={stat.id} {...stat} />
          ))}
        </CardGrid>
      </Container>
    </section>
  )
}
