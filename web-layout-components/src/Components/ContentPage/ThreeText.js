import React from 'react'
import './ThreeText.css'

function ThreeText() {
  return (
    <div className='three-text-box'>
        <div className='first-text'>
            <h1>Hello I am first</h1>
            <p>
               This component divides up a row with three spaces to provide short points about the website<br></br>
            </p>
        </div>
        <div className='second-text'>
            <h1>Hello I am second</h1>
            <p>
                either it's statistics of what the company did with a small pie chart on the top, or Values it represents
                this is the area to do so.
            </p>
        </div>
        <div className='thrid-text'>
            <h1>Hello I am third</h1>
            <p>
                There once was a man from cornwall, whose head exceeded his bed
                my body fits on it, but barely upon it, there's no room for my big cornish head!
            </p>
        </div>
    </div>
  )
}

export default ThreeText
