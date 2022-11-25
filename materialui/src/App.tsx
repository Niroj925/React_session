import React from 'react'
import "./App.css"

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
// import MuiImageList from './component /MuiImageList'
import MuiNavbar from './component /MuiNavbar';
import MuiLink from './component /MuiLink';
import MuiBreadcrumbs from './component /MuiBreadcrumbs';
import MuiDrawer from './component /MuiDrawer'
import MuiSpeedDial from './component /MuiSpeedDial';
import MuiBottomNavigation from './component /MuiBottomNavigation';
import MuiAvatar from './component /MuiAvatar'
import MuiBadge from './component /MuiBadge';
import MuiList from './component /MuiList';
import MuiChip from './component /MuiChip';
import MuiToolTip  from './component /MuiToolTip';
import MuiTable from './component /MuiTable';
import MuiAlert from './component /MuiAlert';
import MuiSnackbar from './component /MuiSnackbar';
import MuiDialog from './component /MuiDialog';
import MuiProgress from './component /MuiProgress'
import MuiSkeleton from './component /MuiSkeleton';
import MuiLoadingButton from './component /MuiLoadingButton';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import MuiPicker from './component /MuiPicker'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div>
     {/*<MuiTypography/>*/}
     {/* <MuiButton/> */} 
     
     <MuiNavbar/>
     <MuiDrawer/>
     <MuiAlert/>
     <MuiDialog/>
     <MuiProgress/>
     <MuiSkeleton/>

     <MuiPicker/>
     
     <MuiBadge/>
     <MuiAvatar/>
     <MuiLink/>
     <MuiLoadingButton/>
     <MuiBreadcrumbs/>
     <MuiTextField/>
       <MuiPicker/>
     <MuiSelect/>
      <MuiSnackbar/>
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
     <MuiList/>
     <MuiChip/>
     <MuiToolTip/>
     <MuiTable/>
     <MuiBottomNavigation/>
    </div>
    </LocalizationProvider>
  )
}

export default App
