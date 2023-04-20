import React from 'react'
import './App.css';
import Home from './layout/home';
import Portfolio from './layout/home';
import About from './layout/about';
import Contact from './layout/contact';
import portfoliologo from './portfoliologo.png'
import profilepic from './photos/profilepic.jpg'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import {Route, Routes} from "react-router-dom";
import { Box } from '@mui/material';

const App = () => {
  return (
    <div>
      {/* #e0ffff */}
      <Box sx={{ 
  background: 'black', // Replace with your desired color
  height: '60px', // Replace with your desired height
  width: '1852px', // Replace with your desired width
  display: 'flex', 
   gap: '20px' 
}}>
            <>
        <img src={portfoliologo} alt="bportfoliologo" className="image-size" sx={{width: '60px', height: '60px',marginLeft: "50px"}} />
        </>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
       </Routes>

        <nav>
  <Button href="/" sx={{
    color: "white",
    fontSize: "17px",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "15px",
    padding: "5px 15px",
    marginTop: "10px",
    marginRight: "20px",
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    }
  }}>
    Home
  </Button>
  <Button href="/portfolio" sx={{
    color: "white",
    fontSize: "17px",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "15px",
    padding: "5px 15px",
    marginTop: "10px",
    marginRight: "20px",
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    }
  }}>
    Portfolio
  </Button>
  <Button href="/about" sx={{
    color: "white",
    fontSize: "17px",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "15px",
    padding: "5px 15px",
    marginTop: "10px",
    marginRight: "20px",
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    }
  }}>
    About
  </Button>
  <Button href="/contact" sx={{
    color: "white",
    fontSize: "17px",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "15px",
    padding: "5px 15px",
    marginTop: "10px",
    marginRight: "20px",
    '&:hover': {
      color: 'black',
      backgroundColor: 'white'
    }
  }}>
    Contact
  </Button>
</nav>
<Container 
sx={{ width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    marginRight: "20px",
    marginTop: "6px"}}>

<Avatar alt="Remy Sharp" src={profilepic}/>
  </Container>
</Box>
    </div>
  )
}

export default App
