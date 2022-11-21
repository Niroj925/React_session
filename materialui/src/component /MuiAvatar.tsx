import React from 'react'
import {Stack,Avatar,AvatarGroup} from '@mui/material'

function MuiAvatar() {
  return (
    <Stack spacing={2}>
        <Stack spacing={2} direction="row">
           <Avatar sx={{bgcolor:'primary.light' }}>CM</Avatar>
           <Avatar sx={{bgcolor:'success.light'}}>BW</Avatar>
        </Stack>       
        <Stack spacing={2} direction="row">
            <AvatarGroup max={4}>
            <Avatar variant='square' sx={{bgcolor:'primary.light',width:70,height:70 }}>CM</Avatar>
           <Avatar variant='rounded' sx={{bgcolor:'success.light'}}>BW</Avatar>
         <Avatar 
         src='https://randomuser.me/api/portraits/women/55.jpg'
         sx={{width:70,height:70 }}
          alt='dear'/>
           <Avatar 
         src='https://randomuser.me/api/portraits/women/69.jpg'
          alt='dear'/>
           <Avatar 
         src='https://randomuser.me/api/portraits/women/36.jpg'
          alt='dear'/>
          </AvatarGroup>
        </Stack>       
    </Stack>
  )
}

export default MuiAvatar