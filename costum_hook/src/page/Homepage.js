import React from 'react'
import useTitle from '../custom_hook/useTitle';
const Homepage = () => {
//use custome hook to set title
useTitle('Homepage || meroweb')
  return (
    <div>
      our homepage ma welcome
    </div>
  )
}

export default Homepage
