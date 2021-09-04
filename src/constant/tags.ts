/**
 * color presets from antd <Tag> component
 */
export const colorPresets = [
  'pink', 'magenta', 'red', 'volcano', 'orange', 'yellow', 
  'gold', 'cyan', 'lime', 'green', 'blue', 'geekblue', 'purple',
]

/**
 * tags EQUAL to any item within the list are filtered out
 * 
 * tag filtering is converted to lower case, removed space in-bewteen,
 *   added #, s to the end
 * thus 'phaseconnect' is same as 'Phase Connect', '#phaseconnect', 'phaseconnects'
 */
export const blockedTagList = [
  'animegirl', 'anime', 'pippa', 'pipkin', 'v-tuber', 'englishvtuber',
  'vstreamer'
]

/**
 * tags CONTAIN any item within the list are filtered out
 * tag filtering convert is applied as well
 */

export const blockedKeyword = [
  // 'phaseconnect', 'vtube', 'youtube', 'pippapipkin', 'pipkinpippa', 'fujikurauruka',
  'asheliarinkou', 'tenmamaemi', 'shisuimichiru', 'utatanenasa', 'hakushikaiori',
  '白鹿いおり', '紫翠みちる', 'maemitenma', 'rinkouashelia'
]