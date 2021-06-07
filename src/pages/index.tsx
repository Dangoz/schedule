import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import api from '../config/axios';

export default function Home() {

  const call = async () => {
    const data = await api.get('/hello');
    alert(data);
  }

  return (
    <>
      <div onClick={call}>
      HELLO WORLD
      <br/><img src={'/favicon.png'}/>
      </div>
    </>
  )
}
