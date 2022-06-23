import React,{useState,useMemo} from 'react';
import Child from './Child';
//we will implement memoize technique  to avoid from multiple render the operation make it to only one time 
//to memoize  we have kept memoized  operation in a browser cache and when it requires use it from cache
//this will consume memory
//memoization technique is also a optimizations

//in react to memoize we have two hook useMemo and useCallback  they both are like same but slightly difference 
//useMemo memoized value and useCallback memoized funtion block this will kept in cache


const App = () => {
   const [count ,setCount]=useState(0);
   //useMemo syntax : useMemo(callback function,dendencies)
const randNum=useMemo(()=> Math.floor( Math.random()*10),[])//[]means dependencies
   console.log('app component is rendered.')
  return (
    <div>
        {randNum}<br/>
      {count}<br/>
      {/* while clicking button this whole component is rendered 
      which is not desired it will request ultiple time 
      each time this componetnt will rendered so it makes our project slower bcz performanace is divided
      
      to resove that kind of problem we have to use memoization technique */}

      <button onClick={()=>setCount(count+1)}>+</button>
      <Child/>
    </div>
  )
}

export default App
