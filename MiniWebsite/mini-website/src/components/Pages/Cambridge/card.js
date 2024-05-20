import React from 'react'


import './card.css'






function Card(props) {

    const styles = {
        card: {
            margin: '15px 10px',
            padding: 0,
            border: "1px solid black",
            borderRadius: '16px',
            backgroundColor: 'white',
        },
        small: {
            gridRowEnd: 'span 26'
        },
        medium: {
            gridRowEnd: 'span 33'
        },
        large: {
            gridRowEnd: 'span 45'
        }
    }


    return (
        
            <div 
            className='card'
            style={{
                ...styles.card,
                ...styles[props.size]
            }}>


            <div className='cardFront'>
                <img src={props.src} alt='places' ></img>
            </div>

            <div className='cardBack'>
                    <h1>Back</h1>
            </div>
            
            
            </div>
            
 
    )
}

export default Card
