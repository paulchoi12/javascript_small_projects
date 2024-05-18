import React from 'react'
import './SinglePictureText.css'

function SinglePictureText() {
  return (
    <div className='single-picture-text'>
      <img className='image-1' src='./images/threeMonkey.jpeg' alt='image number 1'></img>
      <div className='text-box'>
        <h1>Single Picture and Text</h1>
        <p>Discription of the Picture goes here</p>
      </div>
    </div>
  )
}

export default SinglePictureText
