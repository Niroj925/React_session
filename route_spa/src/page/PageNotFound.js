import React,{useEffect}from 'react'
import {useNavigate} from 'react-router-dom';
const PageNotFound = () => {
    let navigate=useNavigate();

    //to redirect our page to another using navigate
    useEffect(()=>{
        setTimeout(()=>navigate('/'),3000)//this will redirect after 3 second
    })
  return (
    <div>
      <b> 404 Page Not Found</b><br/>
      this page will be automaticaaly redirected to homepage after 3 seconds
      <br/>
      
      <b onClick={()=>navigate('/')}
      style={{
        color:"green",
        cursor: "pointer"
      }}
      >Homepage</b>
    </div>
  )
}

export default PageNotFound
