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




// <div classNameName={style.navbar}>
// <div classNameName={style.logo}>
//     <Link href="/"><h3>eBook</h3></Link>
// </div>

// <nav classNameName={style.navbar_nav} style={{ right: openMenu ? "100%" : "0" }}>
//     <ul>
//         <li><Link onClick={openResponsive} href="/">Home</Link></li>
//         <li><Link onClick={openResponsive} href="/WishList">WishList</Link></li>
//         <li><Link onClick={openResponsive} href="#">Contact</Link></li>
//     </ul>
// </nav>

// <div classNameName={style.hamburger} onClick={openResponsive}>
//     <div></div>
//     <div></div>
//     <div></div>
// </div>
// </div>