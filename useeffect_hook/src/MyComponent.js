import React,{useEffect} from 'react'

const MyComponent = () => {
    useEffect(()=>{
      console.log('component is mounted ');


      return ()=>{
          console.log('component will unmount')
      }
    },[]);
  return (
    <div>
      HelloMycomponent
    </div>
  )
}

export default MyComponent
