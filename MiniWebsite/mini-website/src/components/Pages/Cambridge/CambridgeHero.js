import React from 'react'
import '../../HeroSection.css'
import {motion} from 'framer-motion'
import { routeVariants, childVariants } from '../../Variants'
function CambridgeHero() {
  return (
    <motion.div 
    variants={routeVariants}
      initial="initial"
      animate="final"
    className='hero-container'>
      <img className='hero-image' src='/images/JesusGreen.jpeg' alt='lamp'/>
        <motion.h1 variants={childVariants} initial="initial" animate="final">Cambridge</motion.h1>
        <motion.p variants={childVariants} initial="initial" animate="final">Places I've been to</motion.p>
    </motion.div>
  )
}

export default CambridgeHero
