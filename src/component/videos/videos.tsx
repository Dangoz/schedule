import ICompleteVideo from '@/interfaces/complete-video.interface'
import { useState, useEffect } from 'react'
import { Tag, Pagination } from 'antd'
import VideoStyle from '@/styles/videos/video.module.css'

const Videos = ({ videos }: { videos: ICompleteVideo[] }) => {
  const [data, setData] = useState(videos)

  return (<>
    <div>
      {videos.length} <br />
      {false && JSON.stringify(videos, null, 2)}
    </div>
  </>)
}

export default Videos
