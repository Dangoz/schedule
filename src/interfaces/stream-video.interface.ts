/**
 * stream video (upcoming & live) data interface from backend api
 */
 export default interface IStreamVideo {
  link: string;
  title: string;
  thumbnail: string;
  status: string;
  liveViewCount: number;
  scheduledAt: Date;
  availableAt: Date;
  channelId: string;
  tags: string[];
}