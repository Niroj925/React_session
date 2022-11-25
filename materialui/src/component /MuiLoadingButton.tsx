import React from 'react'
import {Stack} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

 function MuiLoadingButton() {
  return (
    <Stack spacing={2} direction='row'>
      <LoadingButton variant='outlined'>
       Submit
      </LoadingButton>
      <LoadingButton loading variant='outlined'>
       Submit
      </LoadingButton>

      <LoadingButton variant='outlined' loadingIndicator='loading...'>
        Fetch Data</LoadingButton>
        <LoadingButton loading variant='outlined' loadingIndicator='loading...'>
        Fetch Data</LoadingButton>

        <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>}>
        save</LoadingButton>
        <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>}>
        save</LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton