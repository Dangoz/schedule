import { useEffect, useState } from 'react'
import HomeStyle from '@/styles/home.module.css'
import api from '@/config/axios'
import Menu from '@/component/navigation/menu'
import Logo from '@/component/schedule/logo'
import Schedule from '@/component/schedule/schedule'
import { GetStaticProps } from 'next'
import IProfile from '@/interfaces/profile.interface'
import IStreamVideo from '@/interfaces/streamVideo.interface'
import useTheme from '@/functions/useTheme'
import { Button } from 'antd'
import Link from 'next/link'

export default function Home({
  personaData,
  streamVideoData,
}: {
  personaData: IProfile[]
  streamVideoData: IStreamVideo[]
}) {
  const theme = useTheme()
  const [hover, setHover] = useState<boolean>(false)
  const [instances, setInstances] = useState<boolean[]>([true])

  // re-instantiate logo-particles
  useEffect(() => {
    instances.length === 2 ? setInstances([true]) : setInstances([false, true])
  }, [theme])

  return (
    <div className={HomeStyle.wrapper} style={{ backgroundColor: theme.background }}>
      <Menu profiles={personaData} />

      {instances.map(
        (i, index) =>
          i && (
            <div key={index}>
              <Logo />
            </div>
          )
      )}

      <div className={HomeStyle.archiveBox} style={{ margin: '10px' }}>
        <Link href="/archive">
          <Button
            type={'primary'}
            className={HomeStyle.archiveButton}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              backgroundColor: hover ? '#ffffff' : theme.foreground,
              borderColor: hover ? '#ffffff' : theme.background,
              color: hover ? 'black' : '#ffffff',
            }}
          >
            ARCHIVE
          </Button>
        </Link>
      </div>

      <Schedule videos={streamVideoData} profiles={personaData} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  // get profiles
  const response = await api.get('/persona')
  console.log('Fetched <Profile> ^___^ Schedule Page')
  const personaData: IProfile[] = response.data.profiles

  // get stream videos (upcoming & live)
  const responseV = await api.get('/video/stream')
  console.log('Fetched <StreamVideo> ^___^ Schedule Page')
  const streamVideoData: IStreamVideo[] = responseV.data.videos

  return {
    props: {
      personaData,
      streamVideoData,
    },
    revalidate: 60,
  }
}
