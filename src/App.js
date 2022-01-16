import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import Menu from './components/pages/menu';
import Cart from './components/pages/cart';
import AboutUs from "./components/pages/aboutUs";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/menu' element={<Menu/>} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/about-us' element={<AboutUs/>} />
          </Routes>
      </Router>
  );
}

export default App;
