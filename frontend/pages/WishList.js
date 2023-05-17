import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {SERVER_URL} from './context'

function WishList({ setWishlist, wishlist }) {
  const [free] = useState('free');

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (storedWishlist) {
      setWishlist(storedWishlist);
    }
  }, [setWishlist]);


  const removeFromWishlist = (bookId) => {
    const newWishlist = wishlist.filter((list) => list.book.id !== bookId);
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  return (
    <div>
      <Head>
        <title>WishList</title>
      </Head>

      <section className='container-fluid'>
        <div className='row justify-content-center gap-4 my-5 mx-xxl-5'>
          {wishlist.map((list, id) => (
            <article key={id} className='card col-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2'>
              <div className='card-img-top'>
                <div className={list.book.BookPrice === 'free' ? 'badge bg-success price' : 'badge bg-info price'}>
                  {list.book.BookPrice}
                </div>
                <img className='img-fluid' src={`${SERVER_URL}/${list.book.bookImage}`} alt={list.bookName} />
              </div>
              <div className='card-body'>
                <h5 className='card-title text-lowercase fs-6'>{list.book.bookName}</h5>
                <p className='card-text fw-bold'>{list.book.BookType}</p>
       
                <Link href={`/comp/${list.book.id}`} className='btn btn-primary'>View More</Link>

                <button className='btn btn-danger my-2' onClick={() => removeFromWishlist(list.book.id)}>
                Remove to Wishlist
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default WishList
