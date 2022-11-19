import React,{useState} from 'react'
import {Box ,FormControlLabel,Switch} from '@mui/material'

function MuiSwitch() {
    const [checked,setChecked]=useState(false);

    console.log({checked});
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

  return (
    <Box>
      <FormControlLabel label='Dark Mode' control={<Switch value={checked} onChange={handleChange}  color='success' />}/>
    </Box>
  )
}

export default MuiSwitch
