import { useState, useEffect } from 'react'
import { Tag } from 'antd'
import Frequency from '@/util/frequency'

const TagPool = ({ tagList }: { tagList: string[] }) => {
  const [tags, setTags] = useState(Frequency.sortByFrequency(tagList));
  const [inuse, setInuse] = useState(tags.slice(0, 20));

  // useEffect(() => {
  //   setInuse(tags.slice(0, 20))
  // }, [tags])

  return (
    <div>
      {inuse.map(tag => (
        <Tag key={tag} color={'green'}>{tag}</Tag>
      ))}
    </div>
  )
}

export default TagPool
