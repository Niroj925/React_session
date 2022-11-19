import React from 'react'
import {useState} from 'react'
import {Box,
FormLabel,
FormControl,
FormControlLabel,
RadioGroup,
Radio
}from '@mui/material'

function MuiRadioButton() {
  const [value,setValue]=useState('')
    console.log({value})
  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  setValue(event.target.value)
  }
  return (
    <Box>
     <FormControl>
      <FormLabel id='job-experience-group-label'>
        Years of Experience
      </FormLabel>
      <RadioGroup 
      name='job-experience-label'
      aria-labelledby='job-experience-group-lebal'
      value={value}
      onChange={handleChange}
      >
       <FormControlLabel control={<Radio size='medium' color='secondary'/>} label='0-2' value='0-2'/>
       <FormControlLabel control={<Radio/>} label='2-4' value='2-4'/>
       <FormControlLabel control={<Radio/>} label='4-6' value='4-6'/>
       <FormControlLabel control={<Radio/>} label='6-10' value='6-10'/>
      </RadioGroup>
     </FormControl>
    
    </Box>
  )
}

export default MuiRadioButton