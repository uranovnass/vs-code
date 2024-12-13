// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Underfined from './Undefined.jsx/Underfined';

function App(

  
) {
  return (
    <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Underfined />} />
      </Routes>
    </Router>
<Footer/>
    </div>
  );
}

export default App;
