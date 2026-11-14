import iconFacebook from '../assets/icons/icon-facebook.svg'
import iconInstagram from '../assets/icons/icon-instagram.svg'
import iconTwitter from '../assets/icons/icon-twitter.svg'
import iconYoutube from '../assets/icons/icon-youtube.svg'
import type { Platform } from '../types/social'

export { default as iconUp } from '../assets/icons/icon-up.svg'

export const platformIcons: Record<Platform, string> = {
  facebook: iconFacebook,
  twitter: iconTwitter,
  instagram: iconInstagram,
  youtube: iconYoutube,
}
