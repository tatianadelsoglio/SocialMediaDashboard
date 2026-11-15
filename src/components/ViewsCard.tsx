import { iconUp, platformIcons } from '../data/icons'
import type { OverviewStat } from '../types/social'

export default function ViewsCard({ platform, pageViews, growth }: OverviewStat) {
  return (
    <div className="grid grid-cols-[1fr_1fr] gap-y-[1em] rounded-lg bg-card-light p-[1.7em] dark:bg-card-dark">
      <p className="text-[.9em] font-bold text-text-muted-light dark:text-text-muted-dark">
        Page Views
      </p>
      <p className="text-right">
        <img src={platformIcons[platform]} alt="" className="inline align-baseline" />
      </p>
      <p className="text-[2.5em] leading-[.9] font-bold">{pageViews}</p>
      <p className="flex items-end justify-end text-[.8em] font-bold text-lime-green">
        <span className="flex items-center">
          <img src={iconUp} alt="" className="mr-[5px]" />
          {growth}%
        </span>
      </p>
    </div>
  )
}
