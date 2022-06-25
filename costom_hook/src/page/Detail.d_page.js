import React from 'react';
// to use our page url's parameters,values and  others we use 'useParams' hook  from react-router-dom
//to navigate pages link is require but it's use in Router but here we use "useNavigate" hook from React-router-dom
//useNavigate hook is work as like Link in 
import {useParams,useNavigate} from 'react-router-dom';

const Detail= () => {
    const {id}=useParams();
    let navigate=useNavigate();
    //basically this parameters is used to request for backend like below
    // useEffect(()=>{
    //     axios.get(id)
    // });

  return (
    <div>
     this is adynamic routing and parmamenter of current url is {id}.<br/>
     <button onClick={()=>navigate('/about')}>About</button>
    </div>
  )
}

export default Detail
