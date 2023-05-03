import React from "react";
import "./App.css";
import Home from "./page/home";
import Portfolio from "./page/portfolio";
import About from "./page/about";
import Contact from "./page/contact";
import Vlog from "./page/vlog";
import portfoliologo from "./portfoliologo.png";
import profilepic from "./photos/profilepic.jpg";
// import kwin from './photos/kwin.gif'
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const App = () => {
  const navigate = useNavigate()
  return (
    <div>
      {/* #e0ffff */}
      <Box
        sx={{
          bgcolor: "black", // Replace with your desired color
          height: "60px", // Replace with your desired height
          width: "1860px", // Replace with your desired width
          display: "flex",
          // gap: "20px",
        
        }}
      >
        <>
          <img
            src={portfoliologo}
            alt="bportfoliologo"
            className="image-size"
            sx={{ width: "60px", height: "60px", marginLeft: "50px" }}
          />
        </>

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

        <nav>
          <Button
            href="/"
            sx={{
              color: "white",
              fontSize: "17px",
              backgroundColor: "transparent",
              // border: "1px solid white",
              borderRadius: "15px",
              // padding: "5px 15px",
              marginTop: "10px",
              // marginRight: "20px",
              "&:hover": {
                color: "black",
                backgroundColor: "white",
              },
            }}
          >
            Home
          </Button>
          <Button
            // href="/portfolio"
            onClick={()=> navigate('portfolio')}
            sx={{
              color: "white",
              fontSize: "17px",
              backgroundColor: "transparent",
              // border: "1px solid white",
              borderRadius: "15px",
              padding: "5px 15px",
              marginTop: "10px",
              marginRight: "20px",
              "&:hover": {
                color: "black",
                backgroundColor: "white",
              },
            }}
          >
            Portfolio
          </Button>
          <Button
            // href="/about"
            onClick={()=> navigate('about')}
            sx={{
              color: "white",
              fontSize: "17px",
              backgroundColor: "transparent",
              // border: "1px solid white",
              borderRadius: "15px",
              padding: "5px 15px",
              marginTop: "10px",
              marginRight: "20px",
              "&:hover": {
                color: "black",
                backgroundColor: "white",
              },
            }}
          >
            About
          </Button>
          <Button
            // href="/contact"
            onClick={()=> navigate('contact')}
            sx={{
              color: "white",
              fontSize: "17px",
              backgroundColor: "transparent",
              // border: "1px solid white",
              borderRadius: "15px",
              padding: "5px 15px",
              marginTop: "10px",
              marginRight: "20px",
              "&:hover": {
                color: "black",
                backgroundColor: "white",
              },
            }}
          >
             Contact  
          </Button>
          <Button
            // href="/vlog"
            onClick={()=> navigate('vlog')}
            sx={{
              color: "white",
              fontSize: "17px",
              backgroundColor: "transparent",
              // border: "1px solid white",
              borderRadius: "15px",
              padding: "5px 15px",
              marginTop: "10px",
              marginRight: "20px",
              "&:hover": {
                color: "black",
                backgroundColor: "white",
              },
            }}
          >         
            Vlog
          </Button>
        </nav>
        <Container
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "20px",
            marginTop: "6px",
          }}
        >
          <Avatar alt="Remy Sharp" src={profilepic} />
        </Container>
      </Box>

    </div>
  );
};

export default App;
