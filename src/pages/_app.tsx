import '../styles/globals.css'
import { AppProps } from 'next/app'
import '@ant-css'
import { useEffect } from 'react'
import themeStore from '@/state/themes/themeStore'
import { switchTheme } from '@/state/themes/actions'
import { themeNames } from '@/state/themes/themes'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {

    let theme = localStorage.getItem('theme');
    if (themeNames.indexOf(theme) === -1) {
      theme = 'dark';
      localStorage.setItem('theme', 'dark');
    }
    if (theme && theme !== 'dark') themeStore.dispatch(switchTheme(theme));

  }, [])

  return (<>

    <Component {...pageProps} />

  </>)
}

export default MyApp
