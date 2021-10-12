import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Tag } from 'antd'
import { TagOutlined } from '@ant-design/icons'
import { SettingTwoTone } from '@ant-design/icons'
import Frequency from '@/functions/frequency'
import TagStyle from '@/styles/videos/tag.module.css'
import { colorPresets } from '@/constant/tags'
import { generateColors } from '@/functions/helpers'
import useTheme from '@/functions/useTheme'

const TagPool = ({ tagList, selectedTags, setSelectedTags, setPage, isMobile }:
  { tagList: string[], selectedTags: string[], setSelectedTags: Dispatch<SetStateAction<string[]>>, setPage: Dispatch<SetStateAction<number>>, isMobile: boolean }) => {
  const theme = useTheme();
  const [inuseCount, setInuseCount] = useState(20);
  const [noMoreTags, setNoMoreTags] = useState(false);

  const [tags, setTags] = useState(Frequency.sortByFrequency(tagList));
  const [inuse, setInuse] = useState(tags.slice(0, inuseCount));
  const [colors, setColors] = useState(generateColors(colorPresets, tags.length));

  const tagToggle = (event) => {
    setPage(1);
    let clicked = event.target.textContent;
    let index = selectedTags.indexOf(clicked);
    index !== -1
      ? setSelectedTags([...selectedTags.slice(0, index), ...selectedTags.slice(index + 1)])
      : setSelectedTags([...selectedTags, clicked])
  }

  const moreTags = (e) => {
    if (noMoreTags) { setInuseCount(20); return setNoMoreTags(false); }
    setInuseCount(inuseCount + 20);
    if (inuseCount >= tags.length) setNoMoreTags(true);
  }

  useEffect(() => {
    setInuse(tags.slice(0, inuseCount));
  }, [inuseCount])

  return (
    <div className={TagStyle.wrapper}>
      <div className={TagStyle.tags}>

        {inuse.map((tag, index) => (
          <Tag key={tag} color={selectedTags.indexOf(tag) !== -1 ? `${colors[index]}-inverse` : `${colors[index]}`}
            onClick={tagToggle} className={TagStyle.tag}
          // icon={<TagOutlined twoToneColor={colors[index]} />}
          // style={{ borderColor: theme.textLow }}
          >
            {tag}</Tag>
        ))}

        <Tag color={'default'} className={TagStyle.tag} onClick={moreTags}
          icon={<SettingTwoTone spin={!noMoreTags} />}>{noMoreTags ? 'no more - click to reset' : 'more'}</Tag>

      </div>
    </div >
  )
}

export default TagPool
