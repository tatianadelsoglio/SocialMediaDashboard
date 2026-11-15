import { iconUp, platformIcons } from '../data/icons'
import type { FollowersStat, Platform } from '../types/social'

const accentBar: Record<Platform, string> = {
  facebook: 'before:bg-facebook',
  twitter: 'before:bg-twitter',
  instagram:
    'before:bg-linear-to-r/srgb before:from-instagram-1 before:to-instagram-2',
  youtube: 'before:bg-youtube',
}

export default function FollowersCard({
  platform,
  username,
  followers,
  todayFollowers,
}: FollowersStat) {
  return (
    <article
      className={`relative overflow-hidden rounded-lg bg-card py-[1.7em] text-center before:absolute before:inset-x-0 before:top-0 before:block before:h-[4px] dark:bg-card-dark ${accentBar[platform]}`}
    >
      <p className="my-[1em] flex items-center justify-center text-[.9em] font-bold text-card-title dark:text-card-title-dark">
        <img src={platformIcons[platform]} alt="" className="mr-[5px]" />
        {username}
      </p>
      <p className="my-[1em]">
        <span className="text-[50px] font-bold">{followers}</span>
        <span className="block text-[.75em] tracking-[5px] text-card-title uppercase dark:text-card-title-dark">
          Followers
        </span>
      </p>
      <p className="mt-[20px] mb-[1em] flex items-center justify-center text-[.7em] font-bold text-lime-green">
        <img src={iconUp} alt="" className="mr-[5px]" />
        {todayFollowers} Today
      </p>
    </article>
  )
}
