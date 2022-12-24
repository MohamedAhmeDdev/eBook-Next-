import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function NavbarComp() {
  return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-xxl d-flex flex-row">
    <a className="navbar-brand d-none d-lg-inline" href="#">Navbar</a>

    <div className="navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav flex-row justify-content-center align-center">
        <li className="nav-item px-1">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item px-1">
          <a className="nav-link" href="/FormPage">Form</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="/WishList">WishList</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavbarComp

