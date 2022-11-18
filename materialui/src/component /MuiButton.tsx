import React from 'react'
import {useState} from 'react'
import {Stack,Button,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


function MuiButton() {
  const [format,setFormat]=useState<string | null>(null)
  console.log(format)
  const handleFormateChange =(
    _event:React.MouseEvent<HTMLElement>, 
    updatedFormates:string | null
  )=>{
    setFormat(updatedFormates)
  }

  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
    <Button variant='text' href='https://youtube.com'>Text</Button>
    <Button variant='contained'>Contained</Button>
    <Button variant='outlined'>Outlined</Button>
    </Stack>
    
    <Stack spacing={2} direction='row'>
    <Button variant='contained' color='primary'>primary</Button>
    <Button variant='contained' color='secondary'>secodary</Button>
    <Button variant='contained' color='error'>error</Button>
    <Button variant='contained' color='info'>info</Button>
    <Button variant='contained' color='success'>success</Button>
    </Stack>

    <Stack display='block' direction='row' spacing={2}>
    <Button variant='contained' size='small' color='info'>small</Button>
    <Button variant='contained' size='medium' color='primary'>medium</Button>
    <Button variant='contained' size='large' color='success'>large</Button>
    </Stack>

    <Stack spacing={2} direction='row' >
    <Button variant='contained' startIcon={<SendIcon/>} disableElevation>send</Button>
    <Button variant='contained' endIcon={<SendIcon/>} disableRipple>send</Button>
    <IconButton area-lebel='send' color='primary' size='small' >
      <SendIcon onClick={()=>alert("clicked")}/>    
    </IconButton>
    </Stack>
    <Stack direction='row' >
    <ButtonGroup 
    aria-label='button group'
    variant='contained'
    color='primary'
    size='small'
    orientation='vertical'
    >
       <Button >Left</Button>
       <Button >Middle</Button>
       <Button >Right</Button>
    </ButtonGroup>
    </Stack>

    <Stack direction='row'>
    <ToggleButtonGroup 
    arial-level='text-formating'
    value={format}
    onChange={handleFormateChange}
    color='success'
    size='small'
    orientation='vertical'
    exclusive
    
    >
    <ToggleButton value='bold' arial-label='bold'> <FormatBoldIcon/></ToggleButton>
    <ToggleButton value='italic' arial-level='itallic'> <FormatItalicIcon/></ToggleButton>
    <ToggleButton value='underline' arial-level='underline'> <FormatUnderlinedIcon/></ToggleButton>
    </ToggleButtonGroup>
    </Stack>

    </Stack>
  )
}

export default MuiButton