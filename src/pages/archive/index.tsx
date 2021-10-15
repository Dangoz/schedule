import { } from 'react'
import Menu from '@/component/navigation/menu'
import { GetStaticProps } from 'next'
import IProfile from '@/interfaces/profile.interface'
import api from '@/config/axios'

const Archive = ({ personaData }: {
  personaData: IProfile[]
}) => {
  return (
    <div>
      <Menu profiles={personaData} />
      Archive page~~
    </div>
  )
}

export default Archive

export const getStaticProps: GetStaticProps = async ({ }) => {

  // get profiles
  const response = await api.get('/persona');
  console.log('Fetched <Profile> ^___^ Schedule Page');
  const personaData: IProfile[] = response.data.profiles;

  // get all videos

  return {
    props: {
      personaData,
      // streamVideoData
    },
    revalidate: 60
  }
}

