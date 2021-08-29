import Menu from '@/component/navigation/menu'
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import api from '@/config/axios'
import IProfile from '@/interfaces/profile.interface'

const Talent = ({ personaData }: { personaData: IProfile[] }) => {
  const [profiles] = useState(personaData);

  return (
    <div> <Menu profiles={profiles} />
      MEOW! <br /><br />
      {JSON.stringify(profiles, null, 2)}
    </div>
  )
}

export default Talent

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await api.get('/persona');
  console.log('Fetched DATA ^___^ Profile Page')
  const personaData: IProfile[] = response.data.profiles;

  return {
    props: { personaData },
    // revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const talentList: string[][] = await require('@/constant/talentList')();
  const talents = talentList.flat();
  const paths = talents.map(talent => ({ params: { talent } }))
  console.log('paths generated for: ', paths);
  return {
    paths,
    fallback: false
  }
}