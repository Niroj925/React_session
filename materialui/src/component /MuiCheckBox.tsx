import React from 'react'
import {useState} from 'react'
import {Box,FormControlLabel,FormLabel,FormGroup,Checkbox} from '@mui/material';
import BookmarkBorderIcon from  '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
 
function MuiCheckBox() {
    const [acceptTnC,setAcceptTnC]=useState(false);
    const [skills,setSkills]=useState<string[]>([]);

    console.log({acceptTnC})
     const handleChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked);
     }

     console.log({skills})

     const handleSkillChange=(event:React.ChangeEvent<HTMLInputElement>) => {
       //to toggle 
       const index=skills.indexOf(event.target.value)
        if(index===-1){
            setSkills([...skills,event.target.value])
        }else{
            setSkills(skills.filter((skill)=>skill!==event.target.value))
        }
     }
  return (
    <Box>
      <Box>
        <FormControlLabel label='I accept terms and conditions'
         control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}/>
      </Box>
      <Box>
        <Checkbox 
        icon={<BookmarkBorderIcon/>}
        checkedIcon={<BookmarkIcon/>}
        checked={acceptTnC}
        onChange={handleChange}
        />
       
      </Box>
      <Box>
        <FormLabel>Skills</FormLabel>
        <FormGroup>
        <FormControlLabel label='HTML'
         control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange}/>}/>

         <FormControlLabel label='CSS'
         control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleSkillChange}/>}/>

        <FormControlLabel label='JavaScript'
         control={<Checkbox value='js' checked={skills.includes('js')} onChange={handleSkillChange}/>}/>
        </FormGroup>
      </Box>
    </Box>
  )
}

export default MuiCheckBox
