import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='Navbar-header'>
        <Link to="/" className="nav-header_link-Home"> 
            Acceuil
        
        </Link>
        <Link to="/" className="nav-header_link-About"> 
            à propos
        
        </Link>

    </nav>
  )
}
