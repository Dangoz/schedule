import '../styles/globals.css'
import { AppProps } from 'next/app'
import '@ant-css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
