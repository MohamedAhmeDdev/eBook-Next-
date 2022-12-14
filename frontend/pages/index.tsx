import Head from 'next/head'
import Image from 'next/image'
import Header from "../comp/Header"
import CarouselComp from "../comp/CarouselComp"

export default function Home() {
  return (
  <div>
    <Head>
      <title>HomePage</title>
    </Head>
    <Header/>
    <CarouselComp/>
    n
  </div>
  )
}
