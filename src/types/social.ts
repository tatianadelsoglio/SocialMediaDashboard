export type Platform = 'facebook' | 'twitter' | 'instagram' | 'youtube'

export interface FollowersStat {
  id: number
  platform: Platform
  username: string
  /** Cantidad tal como la muestra el diseño (por ejemplo "11k"). */
  audience: string
  audienceLabel: 'Followers' | 'Subscribers'
  /** Variación de hoy, con signo. */
  todayChange: number
}

export interface OverviewStat {
  id: number
  platform: Platform
  metric: string
  value: string
  /** Variación porcentual, con signo. */
  changePercent: number
}
