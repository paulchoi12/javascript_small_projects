import React from 'react'
import {motion} from 'framer-motion'
import './HeroSection.css'
import {routeVariants, childVariants} from './Variants'
function HeroSection() {
  return (
    <motion.div 
    variants={routeVariants}
      initial="initial"
      animate="final"
    className='hero-container'>
      <img className='hero-image' src='/images/lamp.jpeg' alt='lamp'/>
        <motion.h1 variants={childVariants} initial='initial' animate="final">Travel Diary</motion.h1>
        <motion.p variants={childVariants} initial='initial' animate="final">Places I've been to</motion.p>
    </motion.div>
  )
}

export default HeroSection
