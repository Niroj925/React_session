import React from 'react'
import {Tooltip,IconButton} from '@mui/material'
import DeletIcon from '@mui/icons-material/Delete'
function MuiToolTip() {
  return (
    <Tooltip 
    title="delet"
     placement='right' 
     arrow
     enterDelay={300}
     leaveDelay={400}
     >
      <IconButton>
        <DeletIcon/>
      </IconButton>
    </Tooltip>
  )
}

export default MuiToolTip
