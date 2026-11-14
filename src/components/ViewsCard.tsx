import { iconUp, platformIcons } from '../data/icons'
import type { OverviewStat } from '../types/social'
import './ViewsCard.css'

export default function ViewsCard({ platform, pageViews, growth }: OverviewStat) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={platformIcons[platform]} alt="" />
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src={iconUp} alt="" />
          {growth}%
        </span>
      </p>
    </div>
  )
}
