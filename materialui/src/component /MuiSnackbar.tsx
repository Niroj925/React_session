import React,{useState} from 'react'
import {Snackbar,Button } from '@mui/material';

function MuiSnackbar() {
const[open,setOpen]=useState(false)
const handleClose=(event?:React.SyntheticEvent | Event,reason?:string) =>
{
    if(reason==='clickaway'){
        return
    }
    setOpen(false)
}
  return (   
   <>
   <Button onClick={()=>setOpen(true)}>Submit</Button>
   <Snackbar
   message='form submitted successfully'
   autoHideDuration={2500}
   open={open}
   onClose={handleClose}
   anchorOrigin={{ 
    vertical:'bottom',
    horizontal:'right'
   }}
   />
   </>
  )
}

export default MuiSnackbar
