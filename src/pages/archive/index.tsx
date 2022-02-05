import { } from 'react'
import Menu from '@/component/navigation/menu'
import { GetStaticProps } from 'next'
import IProfile from '@/interfaces/profile.interface'
import api from '@/config/axios'
import Context from '@/component/archive/context'
import ICompleteVideo from '@/interfaces/completeVideo.interface'
import useTheme from '@/functions/useTheme'

const Archive = ({ personaData, videoData }: { personaData: IProfile[]; videoData: ICompleteVideo[] }) => {
  const theme = useTheme()

  return (
    <div style={{ height: '100%', backgroundColor: theme.background, minHeight: '100vh' }}>
      <Menu profiles={personaData} />
      <Context personaData={personaData} videoData={videoData} />
    </div>
  )
}

export default Archive

export const getStaticProps: GetStaticProps = async ({ }) => {
  // get profiles
  const responsePersona = await api.get('/persona')
  console.log('Fetched <Profile> ^___^ Schedule Page')
  const personaData: IProfile[] = responsePersona.data.profiles

  // get all videos
  const responseVideos = await api.get(`/video/complete`)
  const videoData: ICompleteVideo[] = responseVideos.data.videos

  return {
    props: {
      personaData,
      videoData,
    },
    revalidate: 60,
  }
}
