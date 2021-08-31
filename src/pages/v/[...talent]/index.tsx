import Menu from '@/component/navigation/menu'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import api from '@/config/axios'
import IProfile from '@/interfaces/profile.interface'
import talentChannels from '@/constant/talentChannels.json'
import ICompleteVideo from '@/interfaces/complete-video.interface'
import OptionMenu from '@/component/profile/option-menu'
import { findProfileByQname } from '@/util/sort'

const Talent = ({ personaData, videosData }:
  { personaData: IProfile[], videosData: ICompleteVideo[] }) => {
  const router = useRouter();
  const [videos, setVideos] = useState(videosData);
  const [talent, setTalent] = useState(findProfileByQname(personaData, router.query.talent[0]));

  useEffect(() => {
    setVideos(videosData);
  }, [videosData])

  useEffect(() => {
    setTalent(findProfileByQname(personaData, router.query.talent[0]));
  }, [personaData])

  return (
    <div> <Menu profiles={personaData} />

      <OptionMenu talent={talent} />

      'content' <br />
      {`LENGTH: ${videos.length}`}
      {<div style={{ display: 'none' }}>{JSON.stringify(videos, null, 2)}</div>}
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

  console.log('paths generated for: ', JSON.stringify(paths));
  return {
    paths,
    fallback: false
  }
}