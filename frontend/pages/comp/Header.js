import React from 'react'

function Header({ setSelectedCategory}) {
 

  return (
    <nav className="navbar navbar-expand-sm bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Filter</a>

      <div className=" navbar-collapse justify-content-center">
        <ul className="navbar-nav  mb-2 mb-lg-0">
        <button type="button" className="btn btn-outline-info my-2" onClick={() => setSelectedCategory('All')}>
        All
       </button>
        <button type="button" className="btn btn-outline-info my-2" onClick={() => setSelectedCategory('Fantasy')}>
        Fantasy
       </button>

        <button type="button" className="btn btn-outline-info my-2" onClick={() => setSelectedCategory('Romance')}>
        Romance
        </button>

        <button type="button" className="btn btn-outline-info my-2" onClick={() => setSelectedCategory('Poetry')}>
          Poetry
        </button>

        <button type="button" className="btn btn-outline-info my-2" onClick={() => setSelectedCategory('Drama')}>
          Drama
        </button>
        <button type="button" className="btn btn-outline-info my-2" onClick={() => setSelectedCategory('Fiction')}>
        Fiction
        </button>
        </ul>
      </div>

   
    </div>
  </nav>
  )
}

export default Header