import HomeStyle from '@/styles/home.module.css'
import api from '@/config/axios'
import Menu from '@/component/navigation/menu'
import Schedule from '@/component/schedule/schedule'
import { useState } from 'react'
import { GetStaticProps } from "next"
import IProfile from '@/interfaces/profile.interface'
import IStreamVideo from '@/interfaces/stream-video.interface'

export default function Home({ personaData, streamVideoData }:
  { personaData: IProfile[], streamVideoData: IStreamVideo[] }) {

  return (
    <div className={HomeStyle.wrapper}>
      <Menu profiles={personaData} />
      <Schedule videos={streamVideoData} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  // get profiles
  const response = await api.get('/persona');
  console.log('Fetched <Profile> ^___^ Schedule Page');
  const personaData: IProfile[] = response.data.profiles;

  // get stream videos (upcoming & live)
  const responseV = await api.get('/video/stream');
  console.log('Fetched <StreamVideo> ^___^ Schedule Page');
  const streamVideoData: IStreamVideo[] = responseV.data.videos;

  return {
    props: {
      personaData,
      streamVideoData
    },
    revalidate: 10
  }
}