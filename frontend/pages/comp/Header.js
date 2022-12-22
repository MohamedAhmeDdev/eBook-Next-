import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Filter/search</a>

      <div className=" navbar-collapse justify-content-center">
        <ul className="navbar-nav  mb-2 mb-lg-0">

         <button type="button" className="btn btn-outline-info my-2">Fantasy</button>

          <button type="button" className="btn btn-outline-info my-2">Secondary</button>

          <button type="button" className="btn btn-outline-info my-2">Secondary</button>

        </ul>
       
      </div>

      <form className="d-flex justify-content-end" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default Header