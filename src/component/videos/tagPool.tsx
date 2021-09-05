import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Tag } from 'antd'
import Frequency from '@/util/frequency'
import TagStyle from '@/styles/videos/tag.module.css'
import { colorPresets } from '@/constant/tags'
import { generateColors } from './helpers'

const TagPool = ({ tagList, selectedTags, setSelectedTags, setPage, isMobile }:
  { tagList: string[], selectedTags: string[], setSelectedTags: Dispatch<SetStateAction<string[]>>, setPage: Dispatch<SetStateAction<number>>, isMobile: boolean }) => {

  const [tags, setTags] = useState(Frequency.sortByFrequency(tagList));
  const [inuse, setInuse] = useState(tags.slice(0, 20));
  const [colors, setColors] = useState(generateColors(colorPresets, tags.length));

  const tagToggle = (event) => {
    setPage(1);
    let clicked = event.target.textContent;
    let index = selectedTags.indexOf(clicked);
    index !== -1
      ? setSelectedTags([...selectedTags.slice(0, index), ...selectedTags.slice(index + 1)])
      : setSelectedTags([...selectedTags, clicked])
  }

  return (
    <div className={TagStyle.wrapper}>
      <div className={TagStyle.tags}>

        {inuse.map((tag, index) => (
          <Tag key={tag} color={selectedTags.indexOf(tag) !== -1 ? `${colors[index]}-inverse` : `${colors[index]}`}
            onClick={tagToggle} className={TagStyle.tag}>{tag}</Tag>
        ))}
        {selectedTags.length}

      </div>
    </div>
  )
}

export default TagPool
