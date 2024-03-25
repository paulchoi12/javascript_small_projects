import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='hero-image' src='/images/lamp.jpeg' alt='lamp'/>
        <h1>Travel Diary</h1>
        <p>Places I've been to</p>
    </div>
  )
}

export default HeroSection
