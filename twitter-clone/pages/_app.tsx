import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import store from '@/store/store'
import { Provider } from 'react-redux'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
