import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="navbar-container ">
        <div className="navItems ">
          <Link className='' to='/home' > <span> Home </span> <div className='navbar-underline '></div>  </Link>
          <Link className='' to='/aboutus' > <span> About Us </span> <div className='navbar-underline '></div>  </Link>
          <Link className='' to='probabilitymap' > <span> Probability Map </span> <div className='navbar-underline '></div>  </Link>
          <Link className='' to='contactus' > <span> Contact Us </span> <div className='navbar-underline '></div> </Link>
        </div>
      </div>
    </>
  )
}
