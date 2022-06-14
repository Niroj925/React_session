import React,{useState,useEffect} from 'react'
import MyComponent from './MyComponent';
import axios from 'axios';

const App = () => {
  /*
  useEffect(()=>{
      //comonetnt did mount is  here
    console.log('component is mounted here');

    //here we can do these mostly
    //add event listener
    //db/socket connect
    //network request
    //graphql 'subscritpion'


    //we can return or not in this section
    //this will use to remove some object from DOM then it's execute
    //here return is optional we can write or note
    return()=>{
      //componnetwillunmoint is here

      console.log('component will unmount');
      //remove event listener
      //db/socket connection close
      //graphql subscritpion close

      //and other stop work is done here
    }
  },[])//dependencies are here
  */

 const [toggle,setToggle]=useState(true);
const[count,setCount]=useState(0);
const [text,setText]=useState('');

  useEffect(()=>{
    console.log('component is mounted ');

//let use number api for random fact of number
//fetch is  a api fetching  internal library we can also use axios instead of this
// fetch(`http://numbersapi.com/${count}`)
// .then((response)=> response.text() )//in case of promise base we use 'then' keyword
// .then((data)=>setText(data));

//use another library to fetch api 

axios.get(`http://numbersapi.com/${count}`)
.then((response)=> setText(response.data));//it is also permise base so then keyword is used


    return ()=>{
        console.log('component will unmount')
    }
    //here is a dependencies which is used to update the component
    //after unmount dependencies are immediately mount components
    //after return unmount and dependies update and mount and render jsx
    //if empty this component only execute for one times

  },[count]);
  //if there is no dependencies then each times entirely execute this components
  //if pass  empty dependencies  then execute for one time only
  //if some dependiednces change then update and execute 

  return (
    <div>

     {/* {toggle? <MyComponent/>:null} */}
      {/* if toggle is false MyComponent is removed from DOM ie componnent unmount
      if true mycomponent is mounted ie created component is created in DOM */}
        {count}
        <br/>
        {'Number Facts:\n'}
        {text}
        <br/>
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      
      <button onClick={()=>setCount(count+1)}>Increase</button>
      {console.log(count)};
    </div>
  )
  
}

export default App