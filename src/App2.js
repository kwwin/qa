import React from 'react'
import {Routes, Route} from 'react-router-dom'

// components

import Home from './page/home';
import Portfolio from './page/portfolio';
import About from './page/about';
import Contact from './page/contact';



const App2 = () => {
  return (
    <>
        <Routes>
                <Route index element={<Home />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
       </Routes>
    </>
  )
}

export default App2