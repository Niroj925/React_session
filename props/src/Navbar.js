import React from 'react'
import MiniNavbar from'./MiniNavbar'

const Navbar = (props) => {
  return (
    <div>
   <MiniNavbar msg={props.msg}/>
    </div>
  )
}

export default Navbar