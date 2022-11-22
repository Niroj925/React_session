import React from 'react'
import {Stack,Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
 
function MuiBadge() {
  return (
    <Stack spacing={2} direction='row'>
      <Badge badgeContent={5} color='primary'>
          <MailIcon/>
      </Badge>
      <Badge badgeContent={0} color='secondary'>
          <MailIcon/>
      </Badge>
      <Badge variant='dot' color='error' invisible={false}>
          <MailIcon/>
      </Badge>
    </Stack>
  )
}

export default MuiBadge
