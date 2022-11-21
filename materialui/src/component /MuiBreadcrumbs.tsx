import React from 'react'
import {Box,Breadcrumbs,Link,Typography} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
function MuiBreadcrumbs() {
  return (
    <Box>
      {/* default separator is / */}
      <Breadcrumbs separator={<NavigateNextIcon fontSize='small'/>} >
        <Link href='#' underline='hover'>Home</Link>
        <Link href='#' underline='hover'>Catalog</Link>
        <Link href='#' underline='hover'>Acessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs
