import React from 'react'
import axios from "axios"
import Paginattion from "./Paginattion"
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {SERVER_URL} from '../context'


function Cards({selectedCategory, wishlist, setWishlist, }) {
    const [books, setBooks] = useState([]);
    const [free] = useState('free');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


    const getAllBooks = async () => {
        const response = await axios.get(`${SERVER_URL}/books`);
        setBooks(response.data);
    }
    
    useEffect(() => {
      getAllBooks();
    }, []);
    
       
      // Get current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = 
        books .filter(book => selectedCategory === 'All' ? true : book.BookType === selectedCategory)
        .slice(indexOfFirstPost, indexOfLastPost);

        // Change page
        const paginate = pageNumber => setCurrentPage(pageNumber);


        const addToWishlist = (book) => {
          setWishlist([...wishlist, book]);
          localStorage.setItem('wishlist', JSON.stringify([...wishlist, book]));
        };
      
       const checkList = (book) => {
          return wishlist.some((list) => list.book.id === book.id);
        };

  return (
   <>
    <section className='container-fluid'>
      <div className='row justify-content-center gap-4 my-5 mx-xxl-5'>
        {currentPosts.map((book, id) => (
        <div key={id} className='card col-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2'>
           <div className=''>
           <Image className='card-img-top' src={`https://ebook-bxky.onrender.com/${book.bookImage}`} width={300}  height={300} alt={book.bookName}/>

            <div className='card-body'>
              <h5 className='card-title'>{book.bookName}</h5>
              <p className='card-text'>{book.BookType}</p>
              <Link href={`/comp/${book.id}`} className='btn btn-primary m-2'>View More</Link>
              <button className='btn btn-primary' onClick={() => addToWishlist({ book})} disabled={checkList(book)}>
                {checkList(book) ? 'Already in Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
           </div>
        </div>
        ))}
      </div>
    </section>

   <Paginattion postsPerPage={postsPerPage} totalPosts={books.length} paginate={paginate}/>
   </>
  )
}

export default Cards