import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div  className='bg-background-stars bg-cover bg-center bg-no-repeat bg-fixed h-screen w-screen
    bg-[#070722]
  '>
    <Navbar />

    <Component {...pageProps} />
  </div>
  )
}
