import React,{useState,useEffect} from 'react'
import {Stack,Skeleton,Box,Avatar,Typography} from '@mui/material';

function MuiSkeleton() {
    const [loading,setLoading] =useState(false);

    useEffect(() => {
     setTimeout(() => {
        setLoading(false)
     },3000)
    },[])
  return (
<Box sx={{width:'240px'}}>
    {
        loading?(
        <Skeleton 
        variant='rectangular'
         width={250} 
         height={100}
         animation='wave'/>
        ):
        (
            <img 
            src='https://source.unsplash.com/random'
            height={240}
            width={240}
            alt='skeleton img'
            />
        )
    }
    <Stack 
    direction='row'
    spacing={2}
    sx={{
        width:'100%' ,
        marginTop:'15px'
    }}>
        {
            loading?(
               <Skeleton
               variant='circular'
               height={40}
               width={40}
               animation='wave'
               />
            ):(
                <Avatar>V</Avatar>
            )
        } 
        <Stack 
        sx={{width:'80%'}}>
           {
             loading?(
                <>
                <Typography variant='body1'>
                    <Skeleton variant="text" width='100%' animation='wave'/>
                </Typography>
                <Typography variant='body2'>
                    <Skeleton variant="text" width='100%' animation='wave'/>
                </Typography>
                </>
             ):(
                <>
                <Typography variant='body1'>React Mui Tutorail</Typography>
                </>
             )
           }

        </Stack>
    </Stack>
</Box>
  )
}

export default MuiSkeleton
