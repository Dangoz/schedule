import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import api from '@/config/axios'

export default function Home({ API_KEY }) {

  const call = async () => {
    const response = await api.post('/api/hello');
    alert(API_KEY);
  }

  return (
    <>
      <div onClick={call}>
        WuW
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  return {
    props: {
      API_KEY: process.env.GOOGLE_API_KEY
    }
  }
}