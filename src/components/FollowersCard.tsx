import { platforms } from '../data/platforms'
import type { FollowersStat, Platform } from '../types/social'
import TrendArrow from './TrendArrow'

const accentBar: Record<Platform, string> = {
  facebook: 'before:bg-facebook',
  twitter: 'before:bg-twitter',
  instagram:
    'before:bg-linear-to-r/srgb before:from-instagram-from before:via-instagram-via before:to-instagram-to',
  youtube: 'before:bg-youtube',
}

export default function FollowersCard({
  platform,
  username,
  audience,
  audienceLabel,
  todayChange,
}: FollowersStat) {
  const isPositive = todayChange >= 0

  return (
    <li
      className={`relative overflow-hidden rounded-[5px] bg-card-light pt-8 pb-[25px] text-center before:absolute before:inset-x-0 before:top-0 before:h-1 hover:bg-card-hover-light dark:bg-card-dark dark:hover:bg-card-hover-dark ${accentBar[platform]}`}
    >
      <p className="flex h-5 items-center justify-center gap-2 text-xs leading-none font-bold text-text-muted-light dark:text-text-muted-dark">
        <img src={platforms[platform].icon} alt="" />
        <span className="sr-only">{platforms[platform].name}, </span>
        {username}
        <span className="sr-only">,</span>
      </p>
      <p className="mt-6">
        <span className="block text-[56px] leading-none font-bold">{audience}</span>{' '}
        <span className="mt-[7px] block text-xs leading-none tracking-[5px] text-text-muted-light uppercase dark:text-text-muted-dark">
          {audienceLabel}
        </span>
        <span className="sr-only">,</span>
      </p>
      <p
        className={`mt-7 text-xs leading-none font-bold ${isPositive ? 'text-lime-green-aa dark:text-lime-green' : 'text-bright-red-aa-light dark:text-bright-red-aa-dark'}`}
      >
        <TrendArrow isPositive={isPositive} />
        {Math.abs(todayChange)}
        <span className="sr-only"> {isPositive ? 'more' : 'fewer'}</span> Today
      </p>
    </li>
  )
}
