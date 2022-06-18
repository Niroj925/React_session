import React,{useRef} from 'react'
//useRef hook is used to  DOM manipulate
import Counter from './Counter';

const App = () => {
    let inputRef=useRef(null);
  let divRef=useRef(null);

    const dosomething=()=>{
     console.log(inputRef.current);
     //it will set the value of input  field 
     //using this ref we can modified form anywhere 

     inputRef.current.value='Hello Nepal';
     inputRef.current.style.color='green';
     //this will focus our input field
     inputRef.current.focus();
     //for another element tag change properties of tag
     divRef.current.innerHTML=`<b>hello sathi i am from div</b>`;

    }
  return (
    <div>
        <input type="text" ref={inputRef}/>
        <div ref={divRef}>
        {/* we can manipulate Dom using useRef hook */}
       
         {/* we can manipulate input element tag using useRef hook */}
      <button onClick={dosomething}>click </button>
      </div>
       <Counter/>
    </div>
  )
}

export default App