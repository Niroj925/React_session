import React,{useState} from 'react'
import {Stack,Rating} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderedIcon from '@mui/icons-material/FavoriteBorder'
 
function MuiRating() {
    const [value,setValue] =useState<number|null>(null)
    console.log({value})
    const handleChange=(
    _event:React.ChangeEvent<{}>,
    newValue: number | null
    )=>{
       setValue(newValue)
    }
  return (
    <Stack spacing={2}>
      <Rating 
      value={value}
       onChange={handleChange}
       // precision={0.5}
         size='large' 
         icon={<FavoriteIcon fontSize="inherit" color='error'/>}
         emptyIcon={<FavoriteBorderedIcon fontSize='inherit'/>}
         //readonly
         highlightSelectedOnly//this is used for emoji selector
         />
    </Stack>
  )
}

export default MuiRating
