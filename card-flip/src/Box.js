import React from 'react'

function Box(props) {
  return (
    <div className='box'>
      <div className='boxItemCover'>
        <ul className='item'>
            <li className='itemImg'>
                <img src={props.src}></img>
            </li>
            <li className='itemText'>
                <h1>{props.Text}</h1>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default box
