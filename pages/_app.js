import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { Header } from '../components/Header'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header/>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
