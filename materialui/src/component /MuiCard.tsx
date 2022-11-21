import React from 'react'
import {Box,Card,CardContent,Typography,CardActions,Button,CardMedia} from '@mui/material'
// import Image from '../assets/image/niro.jpg';
import Aama from '../assets/image/aama.jpg';

function MuiCard() {
  return (
    <Box width='400px' my={4} >
      <Card elevation={4}>
        <CardMedia
        component='img'
         height='100'
         width='100'
         image={Aama}
         alt='unsplash image'
        />
        <CardContent>
            <Typography gutterBottom variant='h4' component='div'>React</Typography>
            <Typography  variant='body2' color='text.secondary'>hello mero nepal kati ramailo xa hai love my nepal </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>share</Button>
            <Button size='small'>learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard
