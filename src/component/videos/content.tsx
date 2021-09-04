import ICompleteVideo from '@/interfaces/complete-video.interface'
import {useState, useEffect } from 'react'
import { Spin } from 'antd';

const Content = ({ videos, isLoading }: { videos: ICompleteVideo[], isLoading: boolean }) => {
  const [content, setContent] = useState(videos);

  useEffect(() => {
    setContent(videos);
  }, [videos])

  return (
    <div>

      {isLoading ? <Spin/> : content.length}
      <br/> {JSON.stringify(isLoading)}
      <br/> {JSON.stringify(content, null, 2)}
    </div>
  )
}

export default Content
