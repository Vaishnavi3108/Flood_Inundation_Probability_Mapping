import React from 'react'
import '../Header/Header.css'

export default function Header() {
  return (
    <>
    
    <header className='header-container '>
        <div className="header-logo " style={{ backgroundImage: "url(/assets/header-logo.png)" , backgroundSize:"cover" }}  ></div>
        <span className="header-title">Flood Inundation Probability Mapping</span>
    </header>
    
    </>
  )
}
