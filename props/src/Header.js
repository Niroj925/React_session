import React from 'react';
import Navbar from './Navbar';

const Header = (props) => {
    console.log(props);
  return (
    <div>
        {/* this is send for navbar from receiving App components  */}
       <Navbar msg={props.msg}/>
    </div>
  )
}

export default Header