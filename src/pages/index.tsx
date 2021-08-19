import HomeStyle from '@/styles/home.module.css'
import api from '@/config/axios'
import Menu from '@/component/navigation/menu'
import { useState, useEffect } from 'react'
import { GetStaticProps } from "next";

export default function Home({ data }) {

  return (
    <div className={HomeStyle.wrapper}><Menu/>


    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  // export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await api.get('/persona');
  console.log('fetched DATA ^___^!')

  return {
    props: {
      data: response.data
    },
    revalidate: 10
  }
}