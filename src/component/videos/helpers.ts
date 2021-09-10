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

// generate colors for tags from color presets, shuffle
export const generateColors = (presets: string[], tagCount: number): string[] => {
  let result = [];

  while (result.length < tagCount) {
    let color: string;
    do {
      color = presets[Math.floor(Math.random() * presets.length)];
    } while (result.length > 0 && result[result.length - 1] === color)
    result.push(color);
  }

  return result;
}

//  parse duration from format (PT 00H 00M 00S) to (00:00:00)
export const parseDuration = (string: string): string => {
  let timeList = [string.slice(2, string.length)];
  timeList = timeList[0].split('H');
  timeList = [...timeList.slice(0, timeList.length -1), ...timeList[timeList.length - 1].split('M')];
  timeList = [...timeList.slice(0, timeList.length -1), timeList[timeList.length - 1].split('S')[0]];
  timeList = timeList.map((time, index) => {
    if (time.length === 1 && index) return '0' + time;
    return time;
  })
  let result = timeList.join(':');
  return result;
}