import Menu from '@/component/navigation/menu'
import { useState, useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import api from '@/config/axios'
import IProfile from '@/interfaces/profile.interface'
import { useRouter } from 'next/router'
import Link from 'next/link'
import talentChannels from '@/constant/talentChannels.json'
import ICompleteVideo from '@/interfaces/complete-video.interface'

const Talent = ({ personaData, videosData }:
  { personaData: IProfile[], videosData: ICompleteVideo[] }) => {

  const [profiles] = useState(personaData);
  const [videos, setVideos] = useState(videosData);
  const router = useRouter();
  const talent = router.query.talent;

  useEffect(() => {
    console.log('videos changed');
    setVideos(videosData);
  }, [videosData])

  return (
    <div> <Menu profiles={profiles} />

    
      {JSON.stringify(router.query, null, 2)}

      <br />
      {talent.length === 1 && <Link href={`/v/${talent[0]}/videos`}><button>videos</button></Link>}

      {talent[1] === 'videos' && <>
        <Link href={`/v/${talent[0]}`}><button>talent</button></Link>
        {`LENGTH: ${videos.length}`}
        {<div style={{display:'none'}}>{JSON.stringify(videos, null, 2)}</div>}
      </>}
    </div>
  )
}

export default Talent

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const responsePersona = await api.get('/persona');
  const personaData: IProfile[] = responsePersona.data.profiles;
  console.log('Fetched DATA ^___^ Profile Page')

  console.log('params: ', params);
  let channels = { ...talentChannels.g1, ...talentChannels.g2 }[params.talent[0]];
  console.log('channel', channels);
  const responseVideos = await api.get(`/video/complete?cids=${channels}`,);
  const videosData: ICompleteVideo[] = responseVideos.data.videos;

  return {
    props: { personaData, videosData },
    revalidate: 300
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const talentList: string[][] = await require('@/constant/talentList')();
  const talents = talentList.flat();
  let paths = talents.map(talent => ({ params: { talent: [talent] } }));
  paths = [...paths, ...talents.map(talent => ({ params: { talent: [talent, 'videos'] } }))];

  console.log('paths generated for: ', paths);
  return {
    paths,
    fallback: false
  }
}