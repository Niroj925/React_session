import React from 'react'

// import MuiTypography from './component /MuiTypography'
// import MuiButton from './component /MuiButton'
import MuiTextField from './component /MuiTextField'
import MuiSelect from './component /MuiSelect';
import MuiRadioButton from './component /MuiRadioButton';
import MuiCheckBox from './component /MuiCheckBox'
import MuiSwitch from './component /MuiSwitch';
import MuiRating from './component /MuiRating';
import MuiAutoComplete from './component /MuiAutoComplete';
import MuiLayout from './component /MuiLayout'
import MuiCard from './component /MuiCard';
import MuiAccordion from './component /MuiAccordion';
import MuiImageList from './component /MuiImageList'
import MuiNavbar from './component /MuiNavbar';
import MuiLink from './component /MuiLink';
import MuiBreadcrumbs from './component /MuiBreadcrumbs';
import MuiDrawer from './component /MuiDrawer'
import MuiSpeedDial from './component /MuiSpeedDial';
import MuiBottomNavigation from './component /MuiBottomNavigation';
import MuiAvatar from './component /MuiAvatar'

function App() {
  return (
    <div>
     {/*<MuiTypography/>*/}
     {/* <MuiButton/> */} 
     
     <MuiNavbar/>
     <MuiDrawer/>
    <MuiAvatar/>
     <MuiLink/>
     <MuiBreadcrumbs/>
     <MuiTextField/>
     <MuiSelect/>
     <MuiRadioButton/>
     <MuiCheckBox/>
     <MuiSwitch/>
     <MuiRating/>
     <MuiAutoComplete/>
     <MuiLayout/>
     <MuiCard/>
     <MuiAccordion/>
    
     {/* <MuiImageList/> */}
     <MuiSpeedDial/>
     
     <MuiBottomNavigation/>
    </div>
  )
}

export default App
