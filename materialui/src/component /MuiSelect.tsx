import React from 'react'
import {Box,TextField,MenuItem} from '@mui/material';
import {useState } from 'react';

function MuiSelect() {
    const [country ,setCountry]=useState('')
      console.log({country})
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setCountry(event.target.value as string)
    }
  return (
    <Box width='250px'>
      <TextField label='select country' 
      select
       value={country}
      onChange={handleChange}
      fullWidth
      >
      <MenuItem value='NP'>Nepal</MenuItem>
      <MenuItem value='CH'>China</MenuItem>
      <MenuItem value='IN'>India</MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect
