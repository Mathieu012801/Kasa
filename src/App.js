import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Header from "./components/Header/header";
import Footer from './components/Footer/footer';
import Logements from './pages/Logements/logements';


export default function App() {
  return (
    <div className='container'>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/logements/:idLogements" element={<Logements />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
    </div>

  )
}

