import React,{useState} from 'react'
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
 function MuiAccordion() {
    //this is for collapse other if anyone is expaned so particular field only expand 
    const [expanded,setExpanded] =useState<string|false>(false)

    const handleChange=(isExpanded:boolean,panel:string)=>{
    setExpanded(isExpanded?panel:false)
    }
  return (
    <>
    <Accordion 
    expanded={expanded==='panel1'}
    onChange={(event,isExpanded) =>handleChange(isExpanded,'panel1')}
    >
      <AccordionSummary
      id='panel1-header'
      aria-controls='pannel1-control'
      expandIcon={<ExpandMoreIcon/>}

      >
      <Typography>Accordion1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        lorem ipsum dolor sit amet consectetur adipisicing elit. helo thsi is one of the best awars which we can take easily up to that lwvep 
      </AccordionDetails> 
    </Accordion>
     <Accordion 
     expanded={expanded==='panel2'}
     onChange={(event,isExpanded) =>handleChange(isExpanded,'panel2')}>
     <AccordionSummary
     id='panel2-header'
     aria-controls='pannel2-control'
     expandIcon={<ExpandMoreIcon/>}

     >
     <Typography>Accordion 2</Typography>
     </AccordionSummary>
     <AccordionDetails>
       lorem ipsum dolor sit amet consectetur adipisicing elit. helo thsi is one of the best awars which we can take easily up to that lwvep 
     </AccordionDetails> 
   </Accordion>
   </>
  )
}

export default MuiAccordion
