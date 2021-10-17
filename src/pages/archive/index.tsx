import { } from 'react'
import Menu from '@/component/navigation/menu'
import { GetStaticProps } from 'next'
import IProfile from '@/interfaces/profile.interface'
import api from '@/config/axios'
import Content from '@/component/videos/content'
import ICompleteVideo from '@/interfaces/complete-video.interface'

const Archive = ({ personaData, videosData }: {
  personaData: IProfile[], videosData: ICompleteVideo[]
}) => {
  return (
    <div>
      <Menu profiles={personaData} />
      Archive page~~
      <Content videos={videosData} isLoading={false} />
    </div>
  )
}

export default Archive

export const getStaticProps: GetStaticProps = async ({ }) => {

  // get profiles
  const responsePersona = await api.get('/persona');
  console.log('Fetched <Profile> ^___^ Schedule Page');
  const personaData: IProfile[] = responsePersona.data.profiles;

  // get all videos
  const responseVideos = await api.get(`/video/complete`);
  const videosData: ICompleteVideo[] = responseVideos.data.videos;

  return {
    props: {
      personaData,
      videosData
    },
    revalidate: 60
  }
}

