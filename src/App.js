import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Apropos from './pages/Apropos/Apropos';
import Error from './pages/Error/Error';
import Header from "./components/Header/header";
import Footer from './components/Footer/footer';


export default function App() {
  return (
    <div className='container'>
      <Header />

    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement" element={<logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
    </div>

  )
}

