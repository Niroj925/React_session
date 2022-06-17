import React from 'react';
import {useParams,useNavigate} from"react-router-dom";

const News = () => {
    const{id, title}=useParams();

    let navigate=useNavigate();
  return (
    <div>
      request to backend of id:{id} and title:{title}.<br/>
      <b onClick={()=>navigate('/contact')}
      style={{
        color:'green',
        cursor:'pointer'
      }}
      >Contact me</b>

    </div>
  )
}

export default News
