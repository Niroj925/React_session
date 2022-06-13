import React,{useState} from 'react'

const Toggle = () => {
    const [text,setText]=useState('Namaste Nepal');
    const [visibility,setVisibility] = useState(true);//initially set true ie visible
    //let's make a function for visisbility
    const handleToggle=()=>{
        (visibility)?setText(''):setText('Namaste Nepal');
        //after clicking visibiliyt is reverse of the current state
        setVisibility(!visibility);
    }
  return (
    <div>
      {text}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default Toggle
