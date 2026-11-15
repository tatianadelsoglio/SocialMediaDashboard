import { iconUp, platformIcons } from '../data/icons'
import type { FollowersStat, Platform } from '../types/social'

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
  followers,
  todayFollowers,
}: FollowersStat) {
  return (
    <article
      className={`relative overflow-hidden rounded-lg bg-card-light py-[1.7em] text-center before:absolute before:inset-x-0 before:top-0 before:block before:h-[4px] dark:bg-card-dark ${accentBar[platform]}`}
    >
      <p className="my-[1em] flex items-center justify-center text-[.9em] font-bold text-text-muted-light dark:text-text-muted-dark">
        <img src={platformIcons[platform]} alt="" className="mr-[5px]" />
        {username}
      </p>
      <p className="my-[1em]">
        <span className="text-[50px] font-bold">{followers}</span>
        <span className="block text-[.75em] tracking-[5px] text-text-muted-light uppercase dark:text-text-muted-dark">
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
