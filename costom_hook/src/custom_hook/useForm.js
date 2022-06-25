import {useState} from 'react'

const useForm = () => {

    const [values,setValue]=useState({});  

    const handleChange=(e) => {
      //to safe from refresh 
      e.preventDefault();
      setValue({...values,[e.target.name]:e.target.value});
  
    }
  
  return [values, handleChange]
}

export default useForm
