import React from 'react'
import "./Cards.css"
import CardItem from './CardItem'
function Cards() {
  
  return (
    <div className='cards'>
      <h1>Travel Photos</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                <CardItem
                src="/images/Cambridge.jpeg"
                text="Into the parks of Cambridge!"
                label="Cambridge"
                path="/Cambridge"
                />
                <CardItem
                src="/images/Chester-2.jpeg"
                text="Into the streets of Chester!"
                label="Chester"
                path="/Chester"
                />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
