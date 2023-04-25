import React from 'react'
import { Box } from "@mui/material";
import cover from "../photos/cover.png";
import "../page/home.css";
import "../App";


const landing = () => {
  return (
    <div>
   
   <Box
        sx={{
          width: 1550,
          height: 880,
          display: "flex",
          flexDirection: "column", // Add this line to set the flex direction to column
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <h1 sx={{ fontFamily: "monospace", fontSize: "32px", fontWeight: "bold" }}>Queen Angelique Santiago</h1> */}
        {/* <p style={{fontsize: "50"}}>Student</p> */}
        {/* <img src={kwin} alt="kwin" width="1800" height="380" marginLeft="10"/> */}
        <div>
          <img
            src={cover}
            alt="cover"
            width="2150"
            height="875"
            style={{ paddingTop: "9px" }} // Add this line to set the top padding

          />

<h1 class="typewriter" style={{
  position: "absolute",
  top: "40%",
  left: "20%",
  transform: "translate(-50%,-50%)",
  color: "white",
  textShadow: "2px 2px black",
}}>
  Hi! I am Kwin
</h1>
<h5 style={{ position: "absolute", top: "45%", left: "17%", color: "white" }}>
  Queen Angelique Santiago, Student 
</h5>
<a
  href="cv.pdf"
  style={{
    position: "absolute",
    top: "54%",
    left: "20%",
    color: "white",
    fontSize: "17px",
    backgroundColor: "black",
    border: "1px solid white",
    borderRadius: "15px",
    padding: "5px 15px",
    marginTop: "10px",
    textDecoration: "none",
  }}
  onClick={() => {
    const link = document.createElement("a");
    link.href = "cv.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Download CV
</a>
      </div>

        {/*   
   <Button href="/path/to/cv.pdf" download="cv.pdf" sx={{
  color: "white",
  fontSize: "17px",
  backgroundColor: "black", // Add this line to set the background color
  border: "3px solid black", // Update the border color to match the background color
  borderRadius: "15px",
  padding: "5px 15px",
  marginTop: "10px",
  marginRight: "20px",
  '&:hover': {
    color: 'white',
    backgroundColor: 'black' // Update the hover background color
  }
}}>
  Download CV
</Button> */}
      </Box>

    </div>
  )
}

export default landing
