import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage';
import Menu from './components/pages/MenuPage/menu';
import Cart from './components/pages/Cart/cart';
import AboutUs from "./components/pages/AboutPage/aboutUs";
import Navbar from "./components/Navbar";

function App() {
    if(!localStorage.getItem('cart'))
    localStorage.setItem('cart',JSON.stringify([]))
  return (
      <>
      <Router>
          <Navbar />
          <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/menu' element={<Menu/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/about-us' element={<AboutUs/>} />
          </Routes>
      </Router>

      </>
  );
}

export default App;
