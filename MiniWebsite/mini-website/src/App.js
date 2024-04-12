
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'
import {useLocation} from 'react-router-dom'
import Home from './components/Pages/Home.js';
import Navbar from './components/Navbar';
import About from './components/Pages/About.js';
import Cambridge from './components/Pages/Cambridge/Cambridge.js';
import Chester from './components/Pages/Chester.js';
import ScrollToTop from './components/ScrollToTop.js';
import './App.css'



function App() {

  function LocationProvider({ children }) {
    return <AnimatePresence>{children}</AnimatePresence>;
  }

  function RoutesWithAnimation() {
    const location = useLocation();
  
    return (
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cambridge" element={<Cambridge />} />
      </Routes>
    );
  }

  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      
      <LocationProvider>
        <RoutesWithAnimation/>
      </LocationProvider>

      
      
    </Router>
  );
}

export default App;
