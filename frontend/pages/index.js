import Head from 'next/head'
import Header from "./comp/Header"
import CarouselComp from "./comp/CarouselComp"
import Cards from "./comp/Cards"
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import Link from 'next/link'
import { useState} from 'react'


const Home = ({wishlist, setWishlist}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  return (
  <div>
    <Head>
      <title>HomePage</title>
    </Head>
    <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    <CarouselComp/>
    <Cards  selectedCategory={selectedCategory} wishlist={wishlist} setWishlist={setWishlist}/>

    <div title='top' className='float-end mx-5'><Link href="#"><BsFillArrowUpSquareFill size="2em "/></Link></div>
  </div>
  )
}
export default Home
