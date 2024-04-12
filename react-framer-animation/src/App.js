
import './App.css';

import { BrowserRouter, NavLink, Route, Routes  } from "react-router-dom";
import { useLocation } from "react-router-dom";

// This is where the magic happens
import { motion, AnimatePresence } from "framer-motion";




function LocationProvider({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location)
  console.log(location.key)

  return (
    <Routes location={location} key={location.key}>
      <Route path='/'element={<Home/>} />
      <Route path='/about'element={<About/>} />
      <Route path='/contact'element={<Contacts/>} />
    </Routes>
  )
}

const routeVariants = {
  initial : {
    y: '100vh',
    x: '100vh'
  },
  final : {
    y: '0vh',
    x: '0vh',
    transition: {
      duration: 0.3,
      delay: 0
    }
  }
}

const childVariants = {
  initial: {
    opacity: 0
  },
  final: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3
    }
  }
  
}


function Header () {
  return (
      <div className='header'>
          <span>Header Component</span>
          <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </ul>
      </div>
  )
}
function Home () {
    return (
        <motion.div 
        variants={routeVariants}
        initial="initial"
        animate="final"
        className='home component'>
            <motion.h1 variants={childVariants} initial="initial" animate="final">Home Component</motion.h1>
        </motion.div>
    )
}
function About () {
    return (
      <motion.div 
      variants={routeVariants}
      initial="initial"
      animate="final"
      className='about component'>
          <motion.h1 variants={childVariants} initial="initial" animate="final">About Component</motion.h1>
      </motion.div>
    )
}
function Contacts () {
    return (
      <motion.div 
      variants={routeVariants}
      initial="initial"
      animate="final"
      className='contact component'>
          <motion.h1 variants={childVariants} initial="initial" animate="final">Contact Component</motion.h1>
      </motion.div>
    )
}



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <LocationProvider>
          <RoutesWithAnimation/>
        </LocationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
