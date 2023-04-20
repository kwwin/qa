import React from 'react'
import Box from '@mui/material/Box';

const landing = () => {
  return (
    <div>
   <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'BLUE',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />


    </div>
  )
}

export default landing
