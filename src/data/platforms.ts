import iconFacebook from '../assets/icons/icon-facebook.svg'
import iconInstagram from '../assets/icons/icon-instagram.svg'
import iconTwitter from '../assets/icons/icon-twitter.svg'
import iconYoutube from '../assets/icons/icon-youtube.svg'
import type { Platform } from '../types/social'

interface PlatformInfo {
  name: string
  icon: string
}

export const platforms: Record<Platform, PlatformInfo> = {
  facebook: { name: 'Facebook', icon: iconFacebook },
  twitter: { name: 'Twitter', icon: iconTwitter },
  instagram: { name: 'Instagram', icon: iconInstagram },
  youtube: { name: 'YouTube', icon: iconYoutube },
}
