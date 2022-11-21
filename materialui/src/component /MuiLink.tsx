import React from 'react'
import {Stack,Link,Typography} from '@mui/material'
function MuiLink() {
  return (
    <Stack spacing={2} direction='row' m={2}>
        <Link href='#' underline='hover'>Link</Link>
        <Typography variant='h6'>
        <Link href='#' color='secondary' underline='none'>Secondary</Link>
        </Typography>
    </Stack>
  )
}

export default MuiLink