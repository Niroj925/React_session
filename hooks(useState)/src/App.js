//this project is related to hooks
//some basic hooks are useState,useEffect and useContext
//useState hook is mainly used to manage or to manupulate data


import React from 'react'
import {useState} from 'react';
import InputBind from'./InputBinding';
import Toggle from'./Toggle.js';

const App = () => {
 // var count=0;
  // this will return 2 values in array one is in undefine and another is function
  console.log(useState());
  const[x,y]=useState();
  // here first variable x is getter and secnd one y setter always 
  //so this is always in getter and setter manner
  //now we get value from first and set value in second
  const [count ,setCount]=useState(0);//now this will update in react DOM
 
  console.log(useState(10));
  //intially value of count is set as 0
  console.log(x,y)
  return (
    <div>
      {/* to check execution process at last this process also execute for one time*/}
      {console.log('render')}

         <InputBind/>

      {/* these all are done in browser Dom but not in react virtual DOm
      so we should have to use UseState  hook in this case  */}
      {count}
      <br/>
     <button onClick={()=>{
       setCount(count+1);//this will update in react DOm
       setCount((prev)=>prev+1);//tracking previous values
       //here we call two but their value is same for get val
       setCount((prev)=>prev+1);//tracking previous values 
       //here previous values is 2 and add with them 1 and so incr by 3 bcz of traking previous val
      console.log({count});
     }}>

      Incr
     </button>

     <button onClick={()=>{
       setCount(count-1);//this will update in react DOm
      console.log({count});
     }}>

      Dcr
     </button>
       <Toggle/>
    </div>
  )
}

export default App
