import ICompleteVideo from '@/interfaces/complete-video.interface'
import IProfile from '@/interfaces/profile.interface'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import VideoStyle from '@/styles/videos/video.module.css'
import TagPool from './tagPool'
import Content from './content'
import Page from './page'
import { filterVideosByTags, getTagsFromVideos, purifyTags } from './helpers'

const Videos = ({ videos, talent }: { videos: ICompleteVideo[], talent: IProfile }) => {
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
      newVideos = newVideos.sort((a, b) => +dayjs(b.availableAt) - +dayjs(a.availableAt))
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
          isLoading={isLoading} talent={talent} />
      </div>


      <div className={VideoStyle.pagination}>
        <Page count={displayedVideos.length} pagesize={pagesize} setPage={setPage} page={page}/>
      </div>

    </div>
  </>)
}

export default Videos
