import '../styles/globals.css'
import { AppProps } from 'next/app'
import '@ant-css'
import { ThemeWrapper } from '@/state/themes/theme.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  </>)
}

export default MyApp
