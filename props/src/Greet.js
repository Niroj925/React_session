import React from 'react'

//const Greet = (props) => {//props is a variable  to recieve object
    //lets destructuring props then it can be modified it's value else props are immutable
    const Greet=({name,age ,hobbies})=>{
     //console.log(props);//this is the object form
     console.log(hobbies);
  return (
   
    <div>
        {/* Hello, {props.name} */}
       
        {/* age,{props.age} */}
        hello {name},{age}
         <br/>
         {/* this is a default props */}
        hobbies:{hobbies.outdoor}
        </div>
  )
}
//for default props 
//if we don not pass props but only receive so we can make a default props

Greet.defaultProps = {
    "hobbies":"coding ",
}

export default Greet