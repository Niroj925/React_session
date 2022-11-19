import React from 'react'
import {Box,Stack,Divider} from '@mui/material'

function MuiLayout() {
  return (
    // stack is a one dimentional either vertical or horizontal
    // spacing 1=8px
    <Stack 
    sx={{border:'1px solid'}}
     direction='row' 
     spacing={2}
     divider={<Divider orientation='vertical' flexItem/>}
     > 
   <Box 
   sx={{
    backgroundColor:'primary.main',
    color:"white",
    height:"200px",
    width:'200px',
    padding:'20px',
    '&:hover':{
        backgroundColor:'primary.light'
    }, 
   }}
   >
    Hello, Nepal
   </Box>
   <Box
   display='flex'
   height='250px'
   width='300px'
   bgcolor='success.light'
   p={2}
   >
   </Box>
   </Stack>
  )
}

export default MuiLayout