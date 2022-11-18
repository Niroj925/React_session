import React from 'react'
import {Box,TextField,MenuItem} from '@mui/material';
import {useState } from 'react';

function MuiSelect() {
    const [countries ,setCountries]=useState<string[]>([])
      console.log({countries})
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value=event.target.value
        setCountries(typeof value==='string'?value.split(','):value)
    }
  return (
    <Box width='250px'>
      <TextField label='select countries' 
      select
       value={countries}
      onChange={handleChange}
      fullWidth
      SelectProps={{
        multiple:true
      }}
      >
      <MenuItem value='NP'>Nepal</MenuItem>
      <MenuItem value='CH'>China</MenuItem>
      <MenuItem value='IN'>India</MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect
