
import React from 'react'
import useTitle from '../custom_hook/useTitle';
import useFetch from '../custom_hook/useFetch';

const AboutUs = () => {
  const url="https://jsonplaceholder.typicode.com/todos";
  //these are our own custome hook which is created to set our title
   //desturing variable get value by the index return by our hook name does not matters
   const [loading,fetchData,err]= useFetch(url,{method:"POST"});
 
 useTitle('About Us');

  return (
    <div>
      {(loading)?"loading....": fetchData.length>0?(fetchData.map((data,index)=>{
          return (
            <div key="index" style={{
              padding: '10px',
              margin: '10px',
              border: '1px solid gray'
            }}>
              {data.title}
            </div>
          )
      })):null}
      <br/>
      {err?JSON.stringify(err.message):""}
    </div>
  )
}

export default AboutUs
