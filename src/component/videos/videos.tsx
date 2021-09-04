import ICompleteVideo from '@/interfaces/complete-video.interface'
import { useState, useEffect } from 'react'
import { Tag, Pagination } from 'antd'
import VideoStyle from '@/styles/videos/video.module.css'
import TagPool from './tagPool'
import Content from './content'
import { filterVideosByTags, getTagsFromVideos, purifyTags } from './helpers'

const Videos = ({ videos }: { videos: ICompleteVideo[] }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [displayedVideos, setDisplayedVideos] = useState(videos);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMobile(require('@/config/isMobile')(navigator.userAgent));
  }, [])

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      let newVideos = filterVideosByTags(videos, selectedTags);
      setDisplayedVideos(newVideos);
      setIsLoading(false);
    }, 500);
  }, [selectedTags]);

  return (<>
    <div className={VideoStyle.wrapper} style={{ paddingTop: isMobile ? '10px' : '50px' }}>

      <div>
        <TagPool tagList={purifyTags(getTagsFromVideos(videos))}
          selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>


      <div className={VideoStyle.tags}>
        <Content videos={displayedVideos} isLoading={isLoading} />
      </div>


      <div className={VideoStyle.content}>

      </div>


      <div className={VideoStyle.pagination}>

      </div>

    </div>
  </>)
}

export default Videos
