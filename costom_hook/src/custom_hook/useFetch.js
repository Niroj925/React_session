import {useState,useEffect} from 'react'
import axios from 'axios';
//this is a custom hook to fetch api
const useFetch = (url,{method}) => {
const [fetchData,usefetchData]=useState();
const [loading,setLoading]=useState(true);
const [error,setError]=useState('');

//for method
let m;
switch(method) {
      case "GET":
        m=axios.get(url);
        break;
        case "POST":
          m=axios.post(url);
          break;
          case "DELETE":
            m=axios.delete(url);
            break;
            case "PUT":
              m=axios.put(url);
              break;
        default:
         m=axios.get(url);
}

    useEffect(()=>{
  m
  .then((response)=>{
    usefetchData(response.data);
    setLoading(false);
  })
  .catch((error)=>{setError(error)});
    })
  return [loading,fetchData,error];
}

export default useFetch