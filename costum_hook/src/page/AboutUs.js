import React from 'react'
import useTitle from '../custom_hook/useTitle';

const AboutUs = () => {
 //this is our own custome hook which is created to set our title
 useTitle('About Us');
  return (
    <div>
      this is a aboute us a page
    </div>
  )
}

export default AboutUs
