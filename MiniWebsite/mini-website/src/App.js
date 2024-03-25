
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home.js';
import Navbar from './components/Navbar';
import About from './components/Pages/About.js';
import './App.css'
import Cambridge from './components/Pages/Cambridge.js';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/About' exact Component={About}/>
        <Route path='/Cambridge' exact Component={Cambridge}></Route>
      </Routes>
    </Router>
  );
}

export default App;
