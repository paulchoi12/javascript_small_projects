import { useState } from 'react'

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const boxVariant = {
    visible: { opacity: 1, scale: 2, transition: {duration: 1.5}},
    hidden: { opacity: 0, scale: 0 },
  }

  /*Box component*/
const Box = () => {
  return (
    <motion.div 
    className='box'
    variants={boxVariant}
    initial='hidden'
    animate='visible'
    >
      <h1>Box</h1>
    </motion.div>
  );
};

  return (
  <div className="App">
    <Box/>
    <Box/>
  </div>
  )
}

export default App
