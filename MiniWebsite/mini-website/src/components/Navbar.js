import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='nav-links'>
                <h4>Mini-Website</h4>
            </Link>
            <ul className='nav-menu'>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/About' className='nav-links' >About</Link>
                </li>
                <li className='nav-item'></li>
            </ul>
        </div>
      
    </div>
  )
}
export default Navbar
