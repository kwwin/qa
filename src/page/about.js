import React from 'react'
import "../App";

const about = () => {
  return (
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
    </div>
  )
}

export default about
