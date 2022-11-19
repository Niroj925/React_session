import React from 'react'
import {Box,Stack,Divider,Grid} from '@mui/material'

function MuiLayout() {
  return (
    // stack is a one dimentional either vertical or horizontal
    // spacing 1=8px
    <>
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
   {/* grid is two dimensional  */}
   {/* my is margin and p is padding 1=8px */}
   <Grid container my={2} rowSpacing={2} columnSpacing={1}>
    {/* xs ={9 } mean 9 out of 12 column grid layout  for web and sm={12} for mobile*/}
    {/* xs extra small for mobiel view  and sm for table and large */}
    <Grid item xs={12} sm={6}>
        <Box bgcolor='success.light' p={2}>item1 xs12 sm4 col</Box>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Box bgcolor='primary.light' p={2} >item1 xs12 sm4 col</Box>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Box bgcolor='success.light' p={2}>item1 xs12 sm4 col</Box>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Box bgcolor='success.light' p={2}>item1 xs12 sm4 col</Box>
    </Grid>

   </Grid>
   </>
  )
}

export default MuiLayout