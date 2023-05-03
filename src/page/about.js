import React from "react";
import "../App";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//icons
import{
  MdOutlineLeaderboard,
  MdVideocam,
} from "react-icons/md"
import{
  SiTaichigraphics,
  SiHtml5,
  SiMicrosoftexcel,
  SiBootstrap,
  SiMicrosoftword,
  SiGooglesheets,
  SiReadthedocs,
  SiMicrosoftpowerpoint,
  SiSlides,
} from "react-icons/si"
import{
  DiCss3,
} from "react-icons/di"



import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "dark" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2,
    backgroundColor: theme.palette.mode === "dark" ? "#1a90ff" : "#308fe8",
  },
}));

const about = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/xsRm9Ht/bgmain.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "900px",
        width: "1920px",
        marginTop: "-21px",
        color: "white",
      }}
    >
      <Box sx={{ marginLeft: 20 }}>
        {data.map((item) => (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* <img
              src={item.image}
              alt="logo"
              width="3%"
              height="3%"
              style={{ marginRight: "-20px" }} // Add this line to overlap the logo and progress bar
            /> */}
            
            {item.image}

            <BorderLinearProgress
              value={item.number}
              variant="determinate"
              style={{ width: "500px" }}
            />
            <Box sx={{ paddingLeft: "20px" }}>
              <Typography variant="body2" sx={{ color: "white" }}>
                {`${item.number}%`}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default about;

const data = [

  { id: 1, image: [<SiHtml5/>], number: 90 },
  // { id: 2, image: "https://i.ibb.co/zmBJH4N/GSLIDE-LOGO.png", number: 85 },
  // { id: 3, image: "https://i.ibb.co/LQ8HGDN/PPT-LOGO.png", number: 80 },
  // { id: 4, image: "https://i.ibb.co/B61VYRv/FILMORA-LOGO.png", number: 70 },
  // { id: 5, image: "https://i.ibb.co/s66J1R2/GDOCS-LOGO.png", number: 70 },
  // { id: 6, image: "https://i.ibb.co/Sm29cws/GSHEET-LOGO.png", number: 69 },
  // { id: 7, image: "https://i.ibb.co/ysWDJhC/WORD-LOGO.png", number: 66 },
  // { id: 8, image: "https://i.ibb.co/FggczT6/BOOTSTRAP-LOGO.png", number: 65 },
  // { id: 9, image: "https://i.ibb.co/dbQTmYH/CSS-LOGO.png", number: 60 },
  // { id: 10, image: "https://i.ibb.co/pfMy8Jk/EXCEL-LOGO.png", number: 58 },
  // { id: 11, image: "https://i.ibb.co/6byzQ37/HTML-LOGO.png", number: 55 },
  // { id: 12, image: "https://i.ibb.co/myW14Dx/CANVA-LOGO.png", number: 55 },
  // { id: 13, image: "https://i.ibb.co/BtLLsgF/LARAVEL-LOGO.png", number: 45 },
]

