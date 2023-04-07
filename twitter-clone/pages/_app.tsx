import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import store from '@/store/store'
import { Provider } from 'react-redux'
import '@/styles/globals.css'
import RootModal from '@/components/modals/RootModal'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <RootModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
