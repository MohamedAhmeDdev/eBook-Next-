import Head from 'next/head'
import Header from "../comp/Header"
import CarouselComp from "../comp/CarouselComp"
import { useState, useEffect } from 'react'
import axios from "axios"
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import Link from 'next/link'



const Home = () => {
  const [books, setBooks] = useState([]);

    const getAllBooks = async () => {
    const response = await axios.get('http://localhost:5000/books');
    setBooks(response.data);
}

useEffect(() => {
  getAllBooks();
}, []);


  return (
  <div>
    <Head>
      <title>HomePage</title>
    </Head>
    <Header/>
    <CarouselComp/>
    
    
    <div className='container-fluid '>
      <div className='row gap-5 m-5 mx-xxl-5 justify-content-center'>

      {books.map((book , id) =>(
          <div key={id} className="card col-8 col-md-5 col-lg-3 col-xl-2 col-xxl-2">
          <div className='div'>
            <div className='bg-success px-5 py-2 price text-light'>{book.BookPrice}</div>
            <img className="justify-content-center img"  src={`http://localhost:5000/${book.bookImage}`} alt="" />
          </div>
            <div className="card-body">
              <h5 className="card-title text-lowercase fs-6">{book.bookName}</h5>
              <p className="card-text fw-bold">{book.BookAuthor}</p>
              <p className="card-text des">{book.BookDescription}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div> 
        ))
      }

      </div>
    </div>
    <div title='top' className='float-end mx-5'><Link href="#"><BsFillArrowUpSquareFill size="2em "/></Link></div>
  </div>
  )
}
export default Home
