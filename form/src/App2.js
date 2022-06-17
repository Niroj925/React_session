import React from 'react';
import {Formik} from'formik';
import userLoginSchema from './ValidationSchema/userLoginSchema';
import Textfield  from './Textfield';
//form state management using formik and yup library
//form validation yup's function are  defined in fromik so we can use it

const App2 = () => {
    

  return (
    <div>
        {/* intial value and form name  must be passed in formik */}
      <Formik 
      //intial values name must be same as the form data name
      initialValues={{password:'',address:''}}
      //to get the values of form data after submitted this function is call and get form value by this way
      
      onSubmit={(data) => {
        console.log(data);
        console.log('form submitted');
      }}
      validationSchema={userLoginSchema}
      >
        {/* we use the some imp properties of formik error,handleCheck,handleSubmit,values */}

        {/* this function return object of formik */}
        {({errors,handleChange,handleSubmit,values})=>{
            //console.log(props);//props is destructured into many inbuilt formik function 
            //console.log(values);

           return <form onSubmit={handleSubmit}>

            {/* here inputs filed are same but there name only diff so we use 
            useField hook to make shorthand our code */}
            {/* for intial values */}
                      <label>Name:</label><Textfield name="name" placeholder="Name..." values=""/><br/>
                      <label>Email:</label><Textfield name="email" values=""/><br/>
                      <label>Password:</label><Textfield name="password" type="password"/><br/>
                      <label>Address:</label><Textfield name="address"/><br/>
                      <input type="submit"/>
            </form>
        }}
      </Formik>
    </div>
  )
}

export default App2
