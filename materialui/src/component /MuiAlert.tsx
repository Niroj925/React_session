import React from 'react'
import {Stack,Alert, AlertTitle} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
function MuiAlert() {
  return (
    <Stack spacing={2}>
        <Alert  severity="error"> <AlertTitle>Error</AlertTitle> This is error message</Alert>
        <Alert variant='outlined' severity="info"> <AlertTitle>Info</AlertTitle> This is info message</Alert>
        <Alert variant='filled' severity="success" icon={<CheckIcon/>}><AlertTitle>Success</AlertTitle> This is succes message</Alert>
    </Stack>
  )
}

export default MuiAlert