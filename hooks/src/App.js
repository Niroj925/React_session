//this project is related to hooks
//some basic hooks are useState,useEffect and useContext
//useState hook is mainly used to manage or to manupulate data


import React from 'react'
import {useState} from 'react';

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
      {/* these all are done in browser Dom but not in react virtual DOm
      so we should have to use UseState  hook in this case  */}
      {count}
      <br/>
     <button onClick={()=>{
       setCount(count+1);//this will update in react DOm
      console.log({count});
     }}>

      Click Me
     </button>
    </div>
  )
}

export default App
