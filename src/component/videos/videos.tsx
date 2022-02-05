import ICompleteVideo from '@/interfaces/completeVideo.interface'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import VideoStyle from '@/styles/videos/video.module.css'
import TagPool from './tagPool'
import Content from './content'
import Page from './page'
import { filterVideosByTags, getTagsFromVideos, purifyTags } from '@/functions/helpers'
import { useIsMobileContext } from '@/state/isMobile/isMobile.context'

const Videos = ({ videoData }: { videoData: ICompleteVideo[] }) => {
  const isMobile = useIsMobileContext()
  const videos = videoData.sort((a, b) => +dayjs(b.availableAt) - +dayjs(a.availableAt))
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [displayedVideos, setDisplayedVideos] = useState(videos)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const pagesize = 20

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      let newVideos = filterVideosByTags(videos, selectedTags)
      newVideos = newVideos.sort((a, b) => +dayjs(b.availableAt) - +dayjs(a.availableAt))
      setDisplayedVideos(newVideos)
      setIsLoading(false)
    }, 300)
  }, [selectedTags])

  return (
    <>
      <div className={VideoStyle.wrapper} style={{ paddingTop: isMobile ? '10px' : '40px' }}>
        <div className={VideoStyle.tag}>
          <TagPool
            tagList={purifyTags(getTagsFromVideos(videos))}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            setPage={setPage}
          />
        </div>

        <div className={VideoStyle.content}>
          <Content videos={displayedVideos.slice(pagesize * (page - 1), pagesize * page)} isLoading={isLoading} />
        </div>

        <div className={VideoStyle.pagination}>
          <Page count={displayedVideos.length} pagesize={pagesize} setPage={setPage} page={page} isMobile={isMobile} />
        </div>
      </div>
    </>
  )
}

export default Videos
