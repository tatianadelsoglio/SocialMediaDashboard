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
    <li className="rounded-[5px] bg-card-light pt-[25px] pr-[30px] pb-[23px] pl-6 hover:bg-card-hover-light dark:bg-card-dark dark:hover:bg-card-hover-dark">
      <div className="flex h-5 items-center justify-between gap-4">
        <p className="text-overview-heading leading-none font-bold text-text-muted-light dark:text-text-muted-dark">
          <span className="sr-only">{platforms[platform].name} </span>
          {metric}
          <span className="sr-only">:</span>
        </p>
        <img src={platforms[platform].icon} alt="" />
      </div>
      <div className="mt-[25px] flex items-baseline justify-between gap-4">
        <p className="text-[32px] leading-none font-bold">
          {value}
          <span className="sr-only">,</span>
        </p>
        <p
          className={`text-xs leading-none font-bold ${isPositive ? 'text-lime-green-aa dark:text-lime-green' : 'text-bright-red-aa-light dark:text-bright-red-aa-dark'}`}
        >
          <TrendArrow isPositive={isPositive} />
          <span className="sr-only">{isPositive ? 'up' : 'down'} </span>
          {Math.abs(changePercent)}%
        </p>
      </div>
    </li>
  )
}
