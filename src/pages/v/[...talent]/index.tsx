import Menu from '@/component/navigation/menu'
import { useState, useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import api from '@/config/axios'
import IProfile from '@/interfaces/profile.interface'
import { useRouter } from 'next/router'
import Link from 'next/link';

const Talent = ({ personaData }: { personaData: IProfile[] }) => {
  const router = useRouter();
  const [profiles] = useState(personaData);

  return (
    <div> <Menu profiles={profiles} />
      {JSON.stringify(router.query, null, 2)}
      {/* {JSON.stringify(profiles, null, 2)} */}
      <br/>
      <Link href={`/v/${router.query.talent[0]}`}><button>talent</button></Link>
      <br/>
      <Link href={`/v/${router.query.talent}/videos`}><button>videos</button></Link>
    </div>
  )
}

export default Talent

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await api.get('/persona');
  console.log('Fetched DATA ^___^ Profile Page')
  const personaData: IProfile[] = response.data.profiles;

  return {
    props: { personaData },
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