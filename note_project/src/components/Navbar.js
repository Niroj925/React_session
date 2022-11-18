import React from 'react'
import "../assets/css/navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='navbar-title'>
          <Link to="/">Confess Note</Link>
       
          </div>

        <div className='navbar-route'> 
        <Link to="/aboutus">About us</Link>
        </div>

        <div className='navbar-route'> 
        <Link to="/aboutus">Login</Link>
        </div>

    </div>
  )
}

export default Navbar