import Menu from '@/component/navigation/menu'
import { useState } from "react"
import { GetStaticProps, GetStaticPaths } from "next";
import api from '@/config/axios'

const Talent = ({ personaData }) => {
  const [profiles] = useState(personaData);

  return (
    <div> <Menu />
      MEOW! <br /><br />
      {JSON.stringify(profiles, null, 2)}
    </div>
  )
}

export default Talent

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await api.get('/persona');
  console.log('fetched DATA ^___^~~~~~~~~~~~~~')

  return {
    props: {
      personaData: response.data
    },
    revalidate: 10
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