import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='container'>
        <div className='logoSpace'> Logo </div>
        <div className='links'>
            <ul>
                <li className='firstLink'>one</li>
                <li className='secondLink'>two</li>
                <li className='thirdLink'>three</li>
            </ul>
        </div>
        <div className='helpSection'> help</div>
    </div>
  )
}

export default Navbar
