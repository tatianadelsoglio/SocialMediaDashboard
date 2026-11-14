import { iconUp, platformIcons } from '../data/icons'
import type { FollowersStat } from '../types/social'
import './FollowersCard.css'

export default function FollowersCard({
  platform,
  username,
  followers,
  todayFollowers,
}: FollowersStat) {
  return (
    <article className={`card ${platform}`}>
      <p className="card-title">
        <img src={platformIcons[platform]} alt="" />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src={iconUp} alt="" />
        {todayFollowers} Today
      </p>
    </article>
  )
}
