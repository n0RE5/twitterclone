import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import store from '@/store/store'
import { Provider } from 'react-redux'
import '@/styles/globals.css'
import Modal from '@/components/Modal'
import LoginModal from '@/components/modals/LoginModal'
import EditUserModal from '@/components/modals/EditUserModal'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <EditUserModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
