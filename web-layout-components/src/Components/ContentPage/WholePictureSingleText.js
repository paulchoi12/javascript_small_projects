import React from 'react'
import './WholePictureSingleText.css'
function WholePictureSingleText() {
  return (
  <div className='whole-picture-single-text'>
    <img className='image-1' src='./images/BrightonBeach.jpeg' alt='image number 1'></img>
    <div className='whole-picture-single-text-box'>
      <h1>IDEA</h1>
      <h2>Idea Discription</h2>
      <button className='join-button'>Join Us</button>
    </div>
  </div>
  )
}

export default WholePictureSingleText
