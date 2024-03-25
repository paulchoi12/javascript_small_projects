import React from 'react'
import "./Cards.css"
import CardItem from './CardItem'
function Cards() {
  return (
    <div className='cards'>
      <h1>UK Travel Photos</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                <CardItem
                src="/images/Cambridge.jpeg"
                text="Look at my Cambridge Photos!"
                label="Cambridge"
                path="/Cambridge"
                />

                
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
