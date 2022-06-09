import Router from 'next/router'
import NProgress from 'nprogress'

import '@wartek-id/design-tokens/build/guru-mobile/css/tokens.css'
import 'styles/global.css'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  const mockServer = require('configs/mocks/server').default
  mockServer({ environment: process.env.NODE_ENV })
}

const App = ({ Component, pageProps, router }) => {
  return (
    <div>
      <Component {...pageProps} key={router.route} />
    </div>
  )
}

export default App
