import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavbarComp from "./comp/NavbarComp"
import Footer from "./comp/Footer"
import { useState} from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [wishlist, setWishlist] = useState([]);
  return (
    <>
    <NavbarComp/>
     <Component wishlist={wishlist} setWishlist= {setWishlist} {...pageProps} />
     <Footer/>
     </>
     )
}
