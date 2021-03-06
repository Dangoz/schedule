/**
 * profile data interface from backend api
 */
export default interface IProfile {
  name: string
  lore: string
  description: string
  suborg: string

  photo: string
  banner: string
  subscriberCount: number
  viewCount: number
  videoCount: number

  youtube?: string // future extensions: twitch, bilibili
  twitter: string
  marshmallow: string
}
