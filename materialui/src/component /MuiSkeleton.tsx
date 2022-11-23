import React from 'react'
import {Stack,Skeleton} from '@mui/material';

function MuiSkeleton() {
  return (
 <Stack spacing={2}>
     <Skeleton animation={false}/>
     <Skeleton variant='circular' width={40} height={40} animation='wave' />
     <Skeleton variant='rectangular' width={140} height={140} animation='wave'/>
 </Stack>
  )
}

export default MuiSkeleton
