export type Platform = 'facebook' | 'twitter' | 'instagram' | 'youtube'

export interface FollowersStat {
  id: number
  platform: Platform
  username: string
  followers: string
  todayFollowers: number
}

export interface OverviewStat {
  id: number
  platform: Platform
  pageViews: string
  growth: number
}
