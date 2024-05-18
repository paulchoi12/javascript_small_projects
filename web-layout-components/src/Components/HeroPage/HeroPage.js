import React from 'react'
import "./HeroPage.css"
function HeroPage() {
  return (
    <div className='heroContainer'>
      <div className='imageContainer'>
        <img className='heroImage' src='/images/deanVillage.jpeg' alt='image'></img>
        <h1>Web Design</h1>  
      </div>
    </div>
  )
}

export default HeroPage
