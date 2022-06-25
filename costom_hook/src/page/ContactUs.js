import React from 'react'
import useForm from '../custom_hook/useForm';

const ContactUs = () => {
  
  // const [username,setUsername]=useState('');
  // const[fullname,setFullname]=useState('');
  // const[pass,setPass]=useState('');

  //no need to make this above for particular we make a functions

  // const [value,setValue]=useState({});  

  // const handleChange=(e) => {
  //   //to safe from refresh 
  //   e.preventDefault();
  //   setValue({...value,[e.target.name]:e.target.value});

  // }

  //here we manke a function to get the form input value
  const [values, handleChange]=useForm();

  return (
    <div>
      {values.fullname}
      <form action>
        <input 
        type="text" 
        name="fullname" 
        onChange={(e)=>handleChange(e)} 
         />
        <input 
        type="text" 
        name="username"  
       onChange={(e)=>handleChange(e)}    
        />
        <input 
        type="password"
         name="password"  
         onChange={(e)=>handleChange(e)}    />
         </form>
    </div>
  )
}

export default ContactUs