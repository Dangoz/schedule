import ICompleteVideo from '@/interfaces/complete-video.interface'
import { useState, useEffect } from 'react'
import { Tag, Pagination } from 'antd'
import VideoStyle from '@/styles/videos/video.module.css'
import TagPool from './tagPool'
import Content from './content'
import Page from './page'
import { filterVideosByTags, getTagsFromVideos, purifyTags } from './helpers'

const Videos = ({ videos }: { videos: ICompleteVideo[] }) => {
  const [isMobile, setIsMobile] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [displayedVideos, setDisplayedVideos] = useState(videos);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pagesize = 20;

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
    <div className={VideoStyle.wrapper} style={{ paddingTop: isMobile ? '10px' : '40px' }}>

      <div className={VideoStyle.tag}>
        <TagPool tagList={purifyTags(getTagsFromVideos(videos))}
          selectedTags={selectedTags} setSelectedTags={setSelectedTags} setPage={setPage} />
      </div>

      <div className={VideoStyle.content}>
        <Content videos={displayedVideos.slice(pagesize * (page - 1) + 1, pagesize * page + 1)}
          isLoading={isLoading} />
      </div>


      <div className={VideoStyle.pagination}>
        <Page count={displayedVideos.length} pagesize={pagesize} setPage={setPage} page={page}/>
      </div>

    </div>
  </>)
}

export default Videos
