import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Portfolio = () => {
  return (
    <div>
    <div style={{ display: 'flex', marginLeft:'210px',marginTop: '100px'}}>
      <Card sx={{ maxWidth: 345, marginRight: 2, boxShadow: '0 10px 20px -1px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s ease-in-out' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/3ykZz4S/Slide1.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rentie 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/rentie" size="small">View</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: 2,marginLeft:'150px', boxShadow: '0 10px 20px -1px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s ease-in-out' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/Ydx3hqm/SYSTEM-FOR-ANGEL-STORE.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Angel Store
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/angelstore" size="small">View</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345,marginLeft:'150px', boxShadow: '0 10px 20px -1px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s ease-in-out' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/RjZxLjZ/cai-science.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CAI Science
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/caiscience" size="small">View</Button>
        </CardActions>
      </Card>
    </div>


{/* column 2 cards */}

    <div style={{ display: 'flex', marginLeft:'210px',marginTop: '100px'}}>
      <Card sx={{ maxWidth: 345, marginRight: 2, boxShadow: '0 10px 20px -1px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s ease-in-out' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/6WfPS3F/1.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CAI English
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/caienglish" size="small">View</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: 2,marginLeft:'150px', boxShadow: '0 10px 20px -1px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s ease-in-out' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/Ydx3hqm/SYSTEM-FOR-ANGEL-STORE.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="/project1" size="small">View</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345,marginLeft:'150px', boxShadow: '0 10px 20px -1px rgba(0, 0, 0, 0.2)', transition: 'transform 0.2s ease-in-out' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.ibb.co/RjZxLjZ/cai-science.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project2
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
