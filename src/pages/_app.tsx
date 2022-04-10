import '../styles/globals.css'
import { AppProps } from 'next/app'
import '@ant-css'
import { useState, useEffect } from 'react'
import themeStore from '@/state/themes/themeStore'
import { switchTheme } from '@/state/themes/actions'
import { themeNames } from '@/state/themes/themes'
import { isMobileContext, checkMobile } from '@/state/isMobile/isMobile.context'

function MyApp({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState<boolean>(null)

  useEffect(() => {
    setIsMobile(checkMobile(navigator.userAgent))

    let theme = localStorage.getItem('theme')
    if (themeNames.indexOf(theme) === -1) {
      theme = 'dark'
      localStorage.setItem('theme', 'dark')
    }
    if (theme && theme !== 'dark') {
      themeStore.dispatch(switchTheme(theme))
    }
  }, [])

  return (
    <>
      <isMobileContext.Provider value={isMobile}>
        <Component {...pageProps} />
      </isMobileContext.Provider>
    </>
  )
}

export default MyApp
