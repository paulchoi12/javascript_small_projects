import React from 'react'


import {motion, transform, useAnimation} from "framer-motion"
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './card.css'

const cardVariants = {
    visible : {opacity:1, scale: 1},
    hidden: {opacity: 0, scale: 0},
}





function Card(props) {
    const control= useAnimation();
    const [ref, inView] = useInView();

 
    
    

    useEffect(()=>{
        if (inView) {
            control.start("visible");
        }else {
            control.start("hidden")
        }
    }, [control, inView])

    const styles = {
        card: {
            margin: '15px 10px',
            padding: 0,
            borderRadius: '16px',
            backgroundColor: 'black',
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
        
            <motion.div 
            className='card'
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={control}
            
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
            
            
            </motion.div>
            
 
    )
}

export default Card
