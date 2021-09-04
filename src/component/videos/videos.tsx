import ICompleteVideo from '@/interfaces/complete-video.interface'
import { useState, useEffect } from 'react'
import { Tag, Pagination } from 'antd'
import VideoStyle from '@/styles/videos/video.module.css'
import TagPool from './tagPool'
import { getTagsFromVideos, purifyTags } from './helpers'

const Videos = ({ videos }: { videos: ICompleteVideo[] }) => {
  const [isMobile, setIsMobile] = useState(null);
  // const [tl, setTl] = useState(null)
  // getTagsFromVideos(videos).then(v => setTl(v))

  useEffect(() => {
    setIsMobile(require('@/config/isMobile')(navigator.userAgent));
  }, [])

  return (<>
    <div className={VideoStyle.wrapper} style={{ paddingTop: isMobile ? '10px' : '50px' }}>

      <div>
        <TagPool tagList={purifyTags(getTagsFromVideos(videos))} />
      </div>


      <div className={VideoStyle.tags}>

      </div>


      <div className={VideoStyle.content}>

      </div>


      <div className={VideoStyle.pagination}>

      </div>

    </div>
  </>)
}

export default Videos
