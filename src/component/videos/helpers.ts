import ICompleteVideo from '@/interfaces/complete-video.interface'
import { blockedTagList, blockedKeyword } from '@/constant/tags'
import Frequency from '@/util/frequency'

// filter videos by a list of tags
export const filterVideosByTags = (videos: ICompleteVideo[], tags: string[]): ICompleteVideo[] => {
  if (tags.length === 0) return videos;

  const result = videos.filter(video => {
    return tags.filter(tag => video.tags.indexOf(tag) !== -1).length === tags.length;
  })
  return result;
}

// get tags from videos
export const getTagsFromVideos = (videos: ICompleteVideo[]): string[] => {
  const tagLists = videos.map(video => video.tags);
  const tagList = tagLists.flat();
  return tagList;
}

// clean up/remove blocked or unwated tags
export const purifyTags = (tags: string[]): string[] => {
  let result = tags.filter(tag => {
    let converted = convert(tag);
    return blockedTagList.indexOf(converted) === -1
      && blockedKeyword.filter(keyword => converted.includes(keyword)).length === 0;
  })
  return result;
}

// convert tag to be filtered. remove space, lower case, remove '#' '-'
const convert = (tag: string): string => {
  let result = tag.toLocaleLowerCase().split(' ').join('').split('-').join('');
  if (result[0] === '#') result = result.slice(1, result.length);
  
  return result;
}