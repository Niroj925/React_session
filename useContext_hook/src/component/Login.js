import React,{useContext} from 'react'
import {AuthContext} from "../App";
const Login = () => {
    const auth=useContext(AuthContext)
  return (
    <div>
        validation: {auth}
    </div>
  )
}

export default Login
