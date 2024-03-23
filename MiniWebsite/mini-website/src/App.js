
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar';
import About from './components/Pages/About';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/About' exact Component={About}/>
      </Routes>
    </Router>
  );
}

export default App;
