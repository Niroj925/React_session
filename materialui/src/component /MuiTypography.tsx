import React from 'react'
import {Typography} from '@mui/material';

function MuiTypography() {
  return (
    <div>
      <Typography variant='h1'>heading </Typography>
      <Typography variant='h2'>heading </Typography>
      <Typography variant='h3' component='h1' gutterBottom>heading </Typography>

      <Typography variant='subtitle1'>subtitle1 </Typography>
      <Typography variant='subtitle2'>subtitle2 </Typography>

      <Typography variant='body1'>Lorem, ipsum dol or sit amet consectetur adipisicing elit. Possimus vitae alias, natus maxime illo error suscipit? Fugiat rerum repellendus quasi corporis eveniet odit magnam ducimus aliquid obcaecati veritatis, facere temporibus? </Typography>
      <Typography variant='body1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At molestias tempora possimus mollitia, iste quidem laborum? Omnis culpa tempore facilis eius alias esse, provident deleniti nesciunt, quidem perferendis temporibus amet! </Typography>

    </div>
  )
}

export default MuiTypography
