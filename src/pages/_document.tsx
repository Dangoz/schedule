import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap" rel="stylesheet" />

          <meta name='application-name' content='PC-Schedule' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='PC-Schedule' />
          <meta name='description' content='PC-Schedule' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/favicon.png' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' href='/favicon.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/logo_white.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/logo_white.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='/logo_white.png' />

          {/* <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon.png' /> */}
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/favicon.png' color='#ffffff' />
          <link rel='shortcut icon' href='/favicon.png' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://schedule-pc.vercel.app' />
          <meta name='twitter:title' content='PC-Schedule' />
          <meta name='twitter:description' content='PC-Schedule' />
          <meta name='twitter:image' content='/favicon.png' />
          <meta name='twitter:creator' content='Dango' />
          <meta property='og:type' content='PC-Schedule' />
          <meta property='og:title' content='PC-Schedule' />
          <meta property='og:description' content='PC-Schedule' />
          <meta property='og:site_name' content='PC-Schedule' />
          <meta property='og:url' content='https://schedule-pc.vercel.app' />
          <meta property='og:image' content='/favicon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
