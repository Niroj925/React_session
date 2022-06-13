import React,{useState} from 'react';

const Input = () => {
    
//let's destructuring setState val 
//text and setText are two variable (getter and setter) and convention is like below
    const [text,setText] = useState('');//this will return two values in array form intially empty
  return (
    <div>
      {/* let bind input event in text n setext then set  value in seettext and it's value will get from text */}
      <input type="text" onChange={(e)=>setText(e.target.value)}></input>
      <br/>
      {text}
    </div>
  )
}

export default Input
