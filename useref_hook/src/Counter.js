import React,{useState,useRef} from 'react'

const Counter = () => {
  
   const countRef=useRef(null);
  let count=0;
   //this will execute in each operation that means our whole lifecycle is rendered each times
   //which is not needed to solve that kind of problem we have to use useRef hook 

    console.log('iam render')
  return (
    <div>
        <div >
            <b ref={countRef}>0</b>
             <br/>
        </div>
        {/* we can use useRef instead of useState so not more extra performanance of component or dom */}
      <button onClick={()=>{
      count++;
      countRef.current.innerText = count;
      }
    }>add</button>
    </div>
  )
}

export default Counter
