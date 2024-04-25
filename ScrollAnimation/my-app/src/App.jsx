
import { motion, useAnimation } from "framer-motion";


import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import './App.css'

function App() {

   // Animation Variant
   const boxVariant = {
    visible: { opacity: 1, scale: 2, transition: {duration: 0.5}},
    hidden: { opacity: 0, scale: 0 },
  }

  /*Box component*/
const Box = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div 
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1>Box</h1>
    </motion.div>
  );
};

  return (
  <div className="App">
    <div className="boxes">
      <ul clasName="boxList">
        <li><Box/></li>
        <li><Box/></li>
        <li><Box/></li>
        <li><Box/></li>
        
      </ul>
    </div>
   
  </div>
  )
}

export default App
