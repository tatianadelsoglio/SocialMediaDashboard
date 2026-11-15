import { followersStats } from '../data/followers'
import CardGrid from './CardGrid'
import Container from './Container'
import FollowersCard from './FollowersCard'

export default function FollowersSection() {
  return (
    <section className="-mt-[50px] mb-[3em]">
      <Container>
        <CardGrid>
          {followersStats.map((stat) => (
            <FollowersCard key={stat.id} {...stat} />
          ))}
        </CardGrid>
      </Container>
    </section>
  )
}
