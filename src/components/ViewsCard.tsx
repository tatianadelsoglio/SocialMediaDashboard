import { platforms } from '../data/platforms'
import type { OverviewStat } from '../types/social'
import TrendArrow from './TrendArrow'

export default function ViewsCard({
  platform,
  metric,
  value,
  changePercent,
}: OverviewStat) {
  const isPositive = changePercent >= 0

  return (
    <li className="rounded-[5px] bg-card-light pt-[26px] pr-[30px] pb-[23px] pl-6 hover:bg-card-hover-light dark:bg-card-dark dark:hover:bg-card-hover-dark">
      <div className="flex h-5 items-center justify-between gap-4">
        <p className="text-overview-heading leading-none font-bold text-text-muted-light dark:text-text-muted-dark">
          {metric}
        </p>
        <img src={platforms[platform].icon} alt="" />
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <p className="text-[32px] leading-none font-bold">{value}</p>
        <p
          className={`text-xs leading-none font-bold ${isPositive ? 'text-lime-green' : 'text-bright-red'}`}
        >
          <TrendArrow isPositive={isPositive} />
          {Math.abs(changePercent)}%
        </p>
      </div>
    </li>
  )
}
