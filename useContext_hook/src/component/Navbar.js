import React,{useContext} from 'react'
import { UserContext} from"../App";


const Navbar = () => {
    let val=useContext(UserContext)
    // let author=useContext(AuthContext)
  return (
    <div>
      {val.name}<br/>
     {/* from state pass in context {author} */}
    </div>
  )
}

export default Navbar
