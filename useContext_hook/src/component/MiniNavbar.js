import React,{useContext} from 'react';
import { UserContext  } from '../App';

const MiniNavbar = () => {
    //to get data from user context
    let val=useContext(UserContext)
  return (
    <div>props using useContext hook and get data directly are:<br/>
<b>your name is {val.name} and age :{val.age} location:{val.address}</b>

    </div>
  )
}

export default MiniNavbar