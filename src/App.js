import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/about';
import Error from './pages/Error/Error';
import Header from "./components/Header/header";
import Footer from './components/Footer/footer';



export default function App() {
  return (
    <div className='container'>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/logement" element={<logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
    </div>

  )
}

