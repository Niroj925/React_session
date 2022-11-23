import React,{useState} from 'react'
import {Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@mui/material"

function MuiDialog() {
    const [open,setOpen]=useState(false)
  return (
    <> 
    <Button onClick={()=>setOpen(true)}>Dialog Open</Button>
    <Dialog
    open={open}
    onClose={()=>setOpen(false)}
    aria-labelledby='dialog-title'
    aria-describedby='dialog-describe'>
      <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
      <DialogContent>
        <DialogContentText id='dialog-describe'>
            Are sure want to want to submit 
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>setOpen(false)}>Cancel</Button>
        <Button autoFocus onClick={()=>setOpen(false)}>Submit</Button>
      </DialogActions>
    </Dialog>
    </>
  )
   
}

export default MuiDialog
