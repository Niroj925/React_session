import React from 'react'
import {Stack,Avatar} from '@mui/material'

function MuiAvatar() {
  return (
    <Stack spacing={2}>
        <Stack spacing={2} direction="row">
           <Avatar sx={{bgcolor:'primary.light' }}>CM</Avatar>
           <Avatar sx={{bgcolor:'success.light'}}>BW</Avatar>
        </Stack>       
        <Stack spacing={2} direction="row">
         <Avatar 
         src='https://randomuser.me/api/portraits/women/55.jpg'
          alt='dear'/>
           <Avatar 
         src='https://randomuser.me/api/portraits/women/69.jpg'
          alt='dear'/>
           <Avatar 
         src='https://randomuser.me/api/portraits/women/36.jpg'
          alt='dear'/>
        </Stack>       
    </Stack>
  )
}

export default MuiAvatar