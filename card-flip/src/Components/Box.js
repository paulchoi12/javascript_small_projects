import React from 'react'
import "./Box.css"
function Box(props) {
  return (
    <div className='box'>
      <div className='boxItemCover'>
        <ul className='boxItem'>
            <li className='itemImg'>
                <img src={props.src} alt='place'></img> 
            </li>
            <li className='itemText'>
                <h1>{props.Text}</h1>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Box
