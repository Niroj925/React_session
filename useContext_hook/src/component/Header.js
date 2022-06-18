import React,{useContext}from 'react'
import {ListContext} from '../App';
//in this component props is passed 
const Header = () => {
    let arr=useContext(ListContext)
  return (
    <div style={{
        margintop: '10px',
    }}>
      {/* we can map array */}
      {arr.map((user)=>{
        return <div>  {user.name} age:{user.age}</div>
      })}
    </div>
  )
}

export default Header
