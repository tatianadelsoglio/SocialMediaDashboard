import type { FollowersStat } from '../types/social'

// Escrito a mano: es el total que muestra el diseño de Frontend Mentor, y los
// números de las tarjetas (1987 + 1044 + 11k + 8239) no suman ese valor, así
// que no se calcula a partir de followersStats.
export const totalFollowers = 23004

export const followersStats: FollowersStat[] = [
  {
    id: 1,
    platform: 'facebook',
    username: '@tatianadelsoglio',
    audience: '1987',
    audienceLabel: 'Followers',
    todayChange: 12,
  },
  {
    id: 2,
    platform: 'twitter',
    username: '@tatianadelsoglio',
    audience: '1044',
    audienceLabel: 'Followers',
    todayChange: 99,
  },
  {
    id: 3,
    platform: 'instagram',
    username: '@tatianadelsoglio',
    audience: '11k',
    audienceLabel: 'Followers',
    todayChange: 1099,
  },
  {
    id: 4,
    platform: 'youtube',
    username: '@tatianadelsoglio',
    audience: '8239',
    audienceLabel: 'Subscribers',
    todayChange: -144,
  },
]
