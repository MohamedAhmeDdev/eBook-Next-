import React from 'react'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'

function NavbarComp() {
  return (
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-xxl d-flex flex-row">
    <Link className="navbar-brand d-none d-lg-inline" href="#">Navbar</Link>

    <div className="navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav flex-row justify-content-center align-center">
        <li className="nav-item px-1">
          <Link className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item px-1">
          <Link className="nav-link" href="/FormPage">Form</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link" href="/WishList">WishList</Link>
        </li>
        <li className="nav-item px-2">
          <Link className="nav-link" href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavbarComp

