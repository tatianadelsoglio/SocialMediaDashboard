import { followersStats } from '../data/followers'
import FollowersCard from './FollowersCard'
import './FollowersSection.css'

export default function FollowersSection() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {followersStats.map((stat) => (
            <FollowersCard key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
