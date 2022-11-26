import React from 'react'
import {Box} from '@mui/material'


function MuiResponsiveness() {
  return (
  <Box sx={{
    height:'200px',
    width:{
        xs:100, //0
        sm:200, //600
        md:300, //900
        lg:400, //1200
        xl:500  //1500

    },
    bgcolor:'secondary.dark'
  }}>

  </Box>
  )
}

export default MuiResponsiveness
