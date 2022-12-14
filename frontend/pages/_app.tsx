import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavbarComp from "../comp/NavbarComp"
import Footer from "../comp/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavbarComp/>
     <Component {...pageProps} />
     <Footer/>
     </>
     )
}
