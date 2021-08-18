import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import api from '@/config/axios'
import Menu from '@/component/navigation/menu'
import { useState, useEffect } from 'react'

export default function Home({ API_KEY }) {
  const [isMobile, setIsMobile] = useState(null);

  return (
    <>
      <Menu />
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

// export const getStaticProps = async (context) => {
//   return {
//     props: {
//       list: [1, 2, 3, 4, 6, 6]
//     },
//     revalidate: 20
//   }
// }

// export const getStaticPaths = async (context) => {

// }