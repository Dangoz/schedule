import IProfile from '@/interfaces/profile.interface'
import ICompleteVideo from '@/interfaces/completeVideo.interface'
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import ContextStyle from '@/styles/archive/context.module.css'
import TalentSelect from './talentSelect'
import Content from '../videos/content'
import TagPool from '../videos/tagPool'
import Page from './page'
import { filterVideosByTags, filterVideosByTalent, getTagsFromVideos, purifyTags } from '@/functions/helpers'

const Context = ({ personaData, videoData }: { personaData: IProfile[]; videoData: ICompleteVideo[] }) => {
  const videos = videoData.sort((a, b) => +dayjs(b.availableAt) - +dayjs(a.availableAt))
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [talent, setTalent] = useState('')
  const [displayedVideos, setDisplayedVideos] = useState(videos)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const pagesize = 20

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      let newVideos = filterVideosByTalent(videos, talent)
      newVideos = filterVideosByTags(newVideos, selectedTags)

      setDisplayedVideos(newVideos)
      setIsLoading(false)
    }, 300)
  }, [selectedTags, talent])

  return (
    <>
      <TalentSelect personaData={personaData} talent={talent} setTalent={setTalent} setPage={setPage} />

      <TagPool
        tagList={purifyTags(getTagsFromVideos(videos))}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        setPage={setPage}
      />

      <Content videos={displayedVideos.slice(pagesize * (page - 1), pagesize * page)} isLoading={isLoading} />

      <Page />
    </>
  )
}

export default Context
