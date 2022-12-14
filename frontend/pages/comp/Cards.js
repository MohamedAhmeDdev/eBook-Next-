import React from 'react'
import axios from "axios"
import Paginattion from "./Paginattion"
import { useState, useEffect } from 'react'
import Link from 'next/link';


function Cards() {
    const [books, setBooks] = useState([]);
    const [free] = useState('free');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);


    const getAllBooks = async () => {
        const response = await axios.get('http://localhost:5000/books');
        setBooks(response.data);
    }
    
    useEffect(() => {
      getAllBooks();
    }, []);
    
       
// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = books.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
   <>
      <div className='container-fluid '>
            <div className='row gap-5 m-5 mx-xxl-5 justify-content-center'>
            {currentPosts.map((book , id) =>(
                <div key={id} className="card col-8 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                <div className='div'>
                    <div className={book.BookPrice == free? "bg-success px-5 py-2 price text-light" :'bg-info px-5 py-2 price text-dark'}>{book.BookPrice}</div>
                    <img className="justify-content-center img"  src={`http://localhost:5000/${book.bookImage}`} alt="" />
                </div>
                    <div className="card-body">
                    <h5 className="card-title text-lowercase fs-6">{book.bookName}</h5>
                    <p className="card-text fw-bold">{book.BookType}</p>
                    <p className="card-text des">{book.BookDescription}</p>
                    <Link href={'/comp/' + book.id} className="btn btn-primary">View More</Link>
                    </div>
                </div> 
                ))
            }
            </div>
       </div>

        <Paginattion
            postsPerPage={postsPerPage}
            totalPosts={books.length}
            paginate={paginate}
        />
   </>
  )
}

export default Cards