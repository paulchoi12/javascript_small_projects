import React from 'react'
import { Link } from 'react-router-dom'
import "./Cards.css"

//framer-motion 
import {motion, useAnimation} from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { cardVariants } from './Variants'


function CardItem(props) {
  const control= useAnimation();
  const [ref, inView] = useInView();

  useEffect(()=>{
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden")
    }
  }, [control, inView]);

  return (
    <motion.div
      className='card'
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={control}
      //added style={{border:0}} to delete borders
      style={{border: 0}}
    >
      <li className='cards-item'>
        <Link className='cards-item-link' to={props.path}>
            <figure className='cards-item-pic-wrap' data-category={'props.label'}>
                <img src={props.src} alt ="places"
                className='cards-item-img'>
                </img>
            </figure>
            <div className='cards-item-info'>
                <h5 className='cards-item-text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </motion.div>
  )
}

export default CardItem
