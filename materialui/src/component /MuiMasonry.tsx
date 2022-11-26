import React from 'react'
import {Box ,Paper,Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material'
import {Masonry} from '@mui/lab'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MuiMasonry() {
    const heights=[54,65,78,15,45,35,61,48,24,57,49,51]
  return (
    <Box sx={{width: 500, minHeight: 450}}>
       <Masonry columns={4} spacing={1}>
          {heights.map((height,index)=>(
            <Paper
            key={index}
            sx={{
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // height,
                border:'1px solid'
            }}
            >
              <Accordion sx={{minHeight:height}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>Accordion {index+1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                       Content
                </AccordionDetails>
              </Accordion>
            </Paper>
          ))
          }

       </Masonry>
    </Box>
  )
}

export default MuiMasonry
