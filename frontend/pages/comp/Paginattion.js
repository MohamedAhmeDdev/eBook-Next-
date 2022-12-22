import React from 'react'

function Paginattion({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
  return (
    <div className="d-flex align-items-center justify-content-center">
      <nav>
         <ul className='pagination'>
            {pageNumbers.map(number => (
            <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} className='page-link'>
             {number}
              </a>
              </li>
             ))}
        </ul>
      </nav>
    </div>
  )
}

export default Paginattion