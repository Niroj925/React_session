import React from 'react';
import {InputAdornment, Stack, TextField} from '@mui/material'
import {useState} from 'react'

function MuiTextField() {
    const [value,setValue] =useState('')
  return (
   <Stack spacing={4}>
      <Stack  direction='row' spacing={2} >
          <TextField label='Name' variant='outlined'/>
          <TextField label='Name' variant='filled'/>
          <TextField label='Name' variant='standard'/>
      </Stack>  
      <Stack direction='row' spacing='10'>
        <TextField label='Small Secondary' size='small' color='secondary'></TextField>
      </Stack>

      <Stack direction='row' spacing='10'>
      <TextField label='Form Input' required size='small' color='secondary'></TextField>
    </Stack>

    <Stack direction='row' spacing='10'>
      <TextField 
      label='Password' 
      type='password' 
      required 
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      error={!value}

      size='small' color='secondary'
      helperText={!value?'field is required':'don not share password'}
      > </TextField>
    </Stack>

    <Stack direction='row' spacing='10'>
      <TextField label='Amount' size='small' color='secondary'
      InputProps={{
        startAdornment:<InputAdornment position='start'>$</InputAdornment>
      }}
      > </TextField>
      <TextField label='weight'  size='small' color='secondary'
      InputProps={{
        endAdornment:<InputAdornment position='end'>kg</InputAdornment>
      }}
      > </TextField>
    </Stack>
   </Stack>
  )
}

export default MuiTextField
