import '@/styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from '@/components/Layouts/Layout';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component
        {...pageProps}
      />
      <ToastContainer
        className="toast-container"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </Layout>
  )
}
