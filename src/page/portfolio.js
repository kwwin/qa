import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Portfolio = () => {
  return (
<div style={{ 
  backgroundImage: 'url(https://i.ibb.co/xsRm9Ht/bgmain.png)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '900px',
  width: '1920px',
  marginTop: '-50px'
}}>
<div style={{ display: 'flex', marginLeft:'210px', marginTop: '50px', paddingTop: '45px' }}>
      <Card sx={{ maxWidth: 345,
marginRight: 2,
transition: 'transform 0.8s ease-in-out',
border: '1px solid lightgray',
backgroundColor: 'transparent',
color: 'white',
boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.1)'   }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/3ykZz4S/Slide1.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rentie 
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
          Rentie is a "tiangge" located in Baras Rizal Supermarket.........          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/rentie" size="small">View</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345,
marginRight: 20,
marginLeft: 20,
transition: 'transform 0.8s ease-in-out',
border: '1px solid lightgray',
backgroundColor: 'transparent',
color: 'white',
boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.1)'   }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/Ydx3hqm/SYSTEM-FOR-ANGEL-STORE.png"
          title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Angel Store
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
          Angel Store POint of Sale, organize and
monitors stocks..........          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/angelstore" size="small">View</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345,
marginRight: 2,
transition: 'transform 0.8s ease-in-out',
border: '1px solid lightgray',
backgroundColor: 'transparent',
color: 'white',
boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.1)'   }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/RjZxLjZ/cai-science.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CAI Science
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
          Computer-Aided Learning for Science includes various features..........          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/caiscience" size="small">View</Button>
        </CardActions>
      </Card>
    </div>


{/* column 2 cards */}

    <div style={{ display: 'flex', marginLeft:'210px',marginTop: '100px'}}>
    <Card sx={{ maxWidth: 345,
marginRight: 2,
transition: 'transform 0.8s ease-in-out',
border: '1px solid lightgray',
backgroundColor: 'transparent',
color: 'white',
boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.1)'   }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/6WfPS3F/1.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CAI English
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
          Computer - Aided Instruction for English enable students to..........          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/caienglish" size="small">View</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345,
marginRight: 20,
marginLeft: 20,
transition: 'transform 0.8s ease-in-out',
border: '1px solid lightgray',
backgroundColor: 'transparent',
color: 'white',
boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.1)'   }}>

        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/NtKXM70/poetbythee.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            E-Commerce
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
          E-commerce website for books allow writers to express..........          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/project1" size="small">View</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345,
marginRight: 2,
transition: 'transform 0.8s ease-in-out',
border: '1px solid lightgray',
backgroundColor: 'transparent',
color: 'white',
boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.1)'   }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/RjZxLjZ/cai-science.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project2
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/project2" size="small">View</Button>
        </CardActions>
      </Card>
    </div>
    </div>
  );
};

export default Portfolio;
