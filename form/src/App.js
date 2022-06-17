import React from 'react';
import {object, string } from 'yup';




//to validate form we have to use 'yup' library
//we work with making a schema from 'yup' library
//we make a schema from app and to get value from form we make object file and compare them
const App = () => {

  //function to submit our form data
    const handleSubmit=async(event)=>{
        event.preventDefault();
        
    //to use yup we have to make a schema 
      const formSchema=object({
         //let define formdata 
         //we can chaning anywhere 
         name:string().required(),
         email:string().email().required(),
         password:string().required().min(7).max(15),
         address:string()
         
         });
         
        //make object to handle form data
         const formData={
         name:event.target[0].value,
         email:event.target[1].value,
          password:event.target.password.value,
         address:event.target[3].value
          }
       
       console.log(formData);

       //let's validate our form data's
       //it's is promise base so ,use async and await
   const isValid=await formSchema.isValid(formData);
    console.log(isValid);

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name.."/>
         <br/>
        <input type="email" name="email" placeholder="email..."/>
        <br/>
        <input type="password" name="password" placeholder="password"/>
        <br/>
        <input type="text" name="address" placeholder="address..."/>
          <br/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default App
