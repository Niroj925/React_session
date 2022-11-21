import React,{useState} from 'react'
import {Stack,Button,AppBar,Toolbar,IconButton,Typography,Menu,MenuItem} from '@mui/material'
import CatchingPokemanIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function MuiNavbar() {
    const [anchorEl,setAnchorEl]=useState <null |HTMLElement>(null)
     const open =Boolean(anchorEl)
    const handleClick=(event: React.MouseEvent<HTMLButtonElement>)=>{
        setAnchorEl(event.currentTarget)
    }
    //to hide menu 
    const handleClose=()=>{
        setAnchorEl(null)
    }
  return (
    <AppBar position='static'>
       <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <CatchingPokemanIcon/>
        </IconButton>
        <Typography variant='h5' component='div' sx={{flexGrow:1}}>
            POKEMONAPP
        </Typography>
        <Stack direction='row' spacing={2}>
            <Button color='inherit'>Pricing</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Login</Button>
            <Button color='inherit' id='resources-button' onClick={handleClick}
            aria-controls={open?'resources-menu': undefined}
            aria-haspopup="true"
            aria-expanded={open?'true':undefined}
            endIcon={<KeyboardArrowDownIcon/>}
            >Resources</Button>
        </Stack>
        <Menu id='resource-menu' anchorEl={anchorEl} open={open} 
        MenuListProps={{
            'aria-labelledby':'resources-button'
        }}
        onClose={handleClose}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'right'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
        >
           <MenuItem onClick={handleClose}>Blog</MenuItem>
           <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
       </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar