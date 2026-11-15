import type { OverviewStat } from '../types/social'

export const overviewStats: OverviewStat[] = [
  { id: 1, platform: 'facebook', metric: 'Page Views', value: '87', changePercent: 3 },
  { id: 2, platform: 'facebook', metric: 'Likes', value: '52', changePercent: -2 },
  { id: 3, platform: 'instagram', metric: 'Likes', value: '5462', changePercent: 2257 },
  { id: 4, platform: 'instagram', metric: 'Profile Views', value: '52k', changePercent: 1375 },
  { id: 5, platform: 'twitter', metric: 'Retweets', value: '117', changePercent: 303 },
  { id: 6, platform: 'twitter', metric: 'Likes', value: '507', changePercent: 553 },
  { id: 7, platform: 'youtube', metric: 'Likes', value: '107', changePercent: -19 },
  { id: 8, platform: 'youtube', metric: 'Total Views', value: '1407', changePercent: -12 },
]
