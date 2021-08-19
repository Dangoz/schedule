import HomeStyle from '@/styles/home.module.css'
import api from '@/config/axios'
import Menu from '@/component/navigation/menu'
import { useState, useEffect } from 'react'
import { GetStaticProps } from "next";
import IProfile from '@/interfaces/profile.interface';

export default function Home({ personaData }: { personaData: IProfile[] }) {
  const [profiles] = useState(personaData);

  return (
    <div className={HomeStyle.wrapper}><Menu profiles={profiles}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await api.get('/persona');
  console.log('Fetched DATA ^___^ Schedule Page')

  const personaData: IProfile[] = response.data.profiles;

  return {
    props: { personaData },
    revalidate: 10
  }
}