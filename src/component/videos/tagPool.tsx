import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Tag } from 'antd'
import Frequency from '@/util/frequency'
import TagStyle from '@/styles/videos/tag.module.css'

const TagPool = ({ tagList, selectedTags, setSelectedTags }:
  { tagList: string[], selectedTags: string[], setSelectedTags: Dispatch<SetStateAction<string[]>> }) => {

  const [tags, setTags] = useState(Frequency.sortByFrequency(tagList));
  const [inuse, setInuse] = useState(tags.slice(0, 20));

  const tagToggle = async (event) => {
    let clicked = event.target.textContent;
    let index = selectedTags.indexOf(clicked);
    index !== -1
      ? setSelectedTags([...selectedTags.slice(0, index), ...selectedTags.slice(index + 1)])
      : setSelectedTags([...selectedTags, clicked])
  }

  return (
    <div>
      {inuse.map(tag => (
        <Tag key={tag} color={selectedTags.indexOf(tag) !== -1 ? `lime-inverse` : `lime`}
          onClick={tagToggle} style={{ cursor: 'pointer' }}>{tag}</Tag>
      ))}
      {selectedTags.length}
    </div>
  )
}

export default TagPool
