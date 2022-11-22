import React ,{useState}from 'react'
import {Stack,Chip,Avatar} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

function MuiChip() {
    const [chips,setChips]=useState(['chip1','chip2','chip3'])
    const handleDelete=(chipToDelet:string)=>{
     setChips((chips)=>chips.filter((chip)=>chip!==chipToDelet));
    }
  return (
    <Stack spacing={2} direction='row'>
      <Chip label="Chip" color='primary' size='small' icon={<FaceIcon/>}/>
      <Chip label="Chip outline" color='secondary' variant='outlined'
       avatar={<Avatar>N</Avatar>}/>
       <Chip label='click' color='success' onClick={()=>alert('clicked')}/>
      <Chip label='delete' color='error' onClick={()=>alert('clicked')} onDelete={()=>alert('delete handler called ')}/>
       {
        chips.map((chip)=>(
            <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)}/>
        ))
       }
    </Stack>
  )
}

export default MuiChip
