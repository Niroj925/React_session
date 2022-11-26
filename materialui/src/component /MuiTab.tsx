import React ,{useState}from 'react'
import {Box,Tab} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import {TabContext,TabList,TabPanel} from '@mui/lab';
import FavoriteIcon from '@mui/icons-material/Favorite'


function MuiTab() {
    const [value,setValue] =useState('1')
    const handleChange=(event:React.SyntheticEvent,newValue:string) =>{
        setValue(newValue);
    }
  return (
 
    <TabContext value={value}>
        <Box sx={{borderBottom:1 ,boarderColor:15,width:'350px'}}>
            <TabList 
            aria-label='tab example'
             onChange={handleChange} 
             textColor='secondary'
             indicatorColor='secondary'
             variant='scrollable'
             scrollButtons='auto'>
                <Tab label='tab one' value='1' icon={<FavoriteIcon/>} iconPosition='start'/>

                <Tab label='tab two' value='2' disabled={true}/>
                <Tab label='tab three' value='3'/>
                <Tab label='tab four' value='4'/>
                <Tab label='tab five' value='5'/>
            </TabList>
        </Box>
   
    <TabPanel value='1'> panel 1</TabPanel>
    <TabPanel value='2'> panel 2</TabPanel>
    <TabPanel value='3'> panel 3</TabPanel>
    <TabPanel value='4'> panel 4</TabPanel>
    <TabPanel value='5'> panel 5</TabPanel>
  </TabContext>
  )
}

export default MuiTab
