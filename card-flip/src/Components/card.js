import React from 'react'
import "./card.css"

function Card() {
  return (
    <div className='mainContainer'>
        <div className='theCard'>
            <div className='cardFront'>
                <h1>Front</h1>
                <p>this is the front of the card! Hover to flip</p>
            </div>
            <div className='cardBack'>
                <h1>Back</h1>
            </div>
        </div>
    </div>
  )
}

export default Card
