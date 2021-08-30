import Menu from '@/component/navigation/menu'
import { GetStaticProps, GetStaticPaths } from 'next'
import IProfile from '@/interfaces/profile.interface'
import api from '@/config/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function Videos({ personaData }: { personaData: IProfile[] }) {
  const [profiles] = useState(personaData)
  const router = useRouter();
  const [query, setQuery] = useState(router.query);

  useEffect(() => {
    setQuery(router.query);
  }, [router.query])

  return (
    <div> <Menu profiles={profiles} />
      'HELLO WORLD : ' {JSON.stringify(query, null, 2)}
      <br/>
      <Link href={`/v/${router.query.talent}`}><button>talent</button></Link>
    </div>
  )
}

export default Videos

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('params!', params)

  const response = await api.get('/persona');
  console.log('Fetched DATA ^___^ Profile Page');
  const personaData: IProfile[] = response.data.profiles;

  return {
    props: { personaData },
    revalidate: 300
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const talentList: string[][] = await require('@/constant/talentList')();
  const talents = talentList.flat();

  let paths = talents.map(talent => ({ params: { talent, videos: 'videos' } }));

  console.log('paths generated for: ', paths);
  return {
    paths,
    fallback: false
  }
}