import IProfile from "@/interfaces/profile.interface";
import IStreamVideo from "@/interfaces/stream-video.interface";

// (used by drawer!) sort profiles into a list of talents, by assigned order & generation
export const sortTalentsByGeneration = (profiles: IProfile[], order: string[], generation: string):
  (IProfile & { href: string })[] => {

  let talents = profiles
    .filter(profile => profile.suborg === generation)
    .sort((first, second) => order.indexOf(first.name) - order.indexOf(second.name))
    .map(talent => {
      return {
        ...talent,
        href: talent.name.toLowerCase().split(' ').join('')
      }
    })
  return talents;
}

//find profile of the video's channel
export const findProfileByVideo = (profiles: IProfile[], video: IStreamVideo): IProfile => {
  const profile = profiles.find(p => {
    return p.youtube === `https://www.youtube.com/channel/${video.channelId}`;
  })
  return profile;
}