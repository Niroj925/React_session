import React,{useState ,forwardRef} from 'react'
import {Snackbar,Button,Alert,AlertProps } from '@mui/material';

const SnackbarAlert= forwardRef<HTMLDivElement,AlertProps>(
function SnackbarAlert(props,ref){
    return <Alert elevation={6} ref={ref} {...props}/>
}
)

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
   {/* <Snackbar
   message='form submitted successfully'
   autoHideDuration={2500}
   open={open}
   onClose={handleClose}
   anchorOrigin={{ 
    vertical:'bottom',
    horizontal:'right'
   }}
   /> */}
   <Snackbar
   open={open}
    autoHideDuration={3000} 
    onClose={handleClose}
    anchorOrigin={{ 
        vertical:'bottom',
        horizontal:'right'
       }}>
    <SnackbarAlert onClose={handleClose} severity='success'>
      Form submit successfully
    </SnackbarAlert>
   </Snackbar>
   </>
  )
}

export default MuiSnackbar
