import React ,{useState}from 'react'
import {Stack,TextField,Autocomplete} from '@mui/material'

const skills=['python','javascript','typescript','dart']

type Skill={
    id:number,
    label:string,
}

const skillOption=skills.map((skill,index)=>({
    id:index+1,
    label:skill
}))

function MuiAutoComplete() {
    const [value,setValue]=useState<string|null>(null)
    const [skill,setSkill]=useState<Skill |null>(null)

    console.log({value})
    console.log({skill})
  return (
    <Stack spacing={2}  width='250px' >
        <Autocomplete 
        options={skills}
        renderInput={(params)=><TextField {...params} label='Skills' />}
        value={value}
        onChange={(event:any, newValue:string|null)=>setValue(newValue)}
        freeSolo
        />

         <Autocomplete 
        options={skillOption}
        renderInput={(params)=><TextField {...params} label='Skills' />}
        value={skill}
        onChange={(event:any, newValue:Skill|null)=>setSkill(newValue)}
        />
    </Stack>
  )
}

export default MuiAutoComplete