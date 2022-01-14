import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import Movies from './components/pages/movies';
import Extras from './components/pages/extras';
import AboutUs from "./components/pages/aboutUs";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path='/' exact element={<Home/>} />
              <Route path='/movies/*' element={<Movies/>} />
              <Route path='/extras' element={<Extras/>} />
              <Route path='/about-us' element={<AboutUs/>} />
          </Routes>
      </Router>
  );
}

export default App;
