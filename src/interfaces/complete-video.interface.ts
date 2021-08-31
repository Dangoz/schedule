/**
 * complete video data interface from backend api
 */
 export default interface ICompleteVideo {
  link: string;
  title: string;
  thumbnail: string;
  status: string;
  liveViewCount: number;
  scheduledAt: Date;
  availableAt: Date;
  channelId: string;
  tags: string[];
  duration: string;
}