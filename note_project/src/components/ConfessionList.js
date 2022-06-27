import React,{useEffect,useState} from 'react';
import "../assets/css/confessionlist.css";
import { database,set,ref,onValue } from '../config/firebase';
import Moment from 'react-moment';
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const ConfessionList = () => {
    const month=['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
  const [confessionList,setconfessionList] =useState([]);
  const [loading ,setLoading] = useState(true);

    useEffect(()=>{
    //to get db data
   onValue(ref(database,'confessions'),(snapshot)=>{
    let data=snapshot.val();
    //hook never use inside loop so make a temp variable and push into them
   let confessionlist=[];
    for(let key in data) {
        console.log(data[key].note);
       confessionlist.push(data[key]);
    }
    setconfessionList(confessionlist);
    setLoading(false);

   })
    },[])

  return (
    <center>
          <div className="confession-list">
     {loading? <ShimmerSimpleGallery card imageHeight={300} caption />
     : confessionList? confessionList.map((confession,index) =>{
        //we kept date into db in timestamp so convert timestamp into date 
        let date=new Date(confession.createdDate);
         return(
            <div key={index} className="confession-card">
                <div>{`${date.getFullYear()}${month[date.getMonth()]} ${date.getDate()}  `}</div>
                <br/>
                <br/>
                {confession.note}
                <div className="time-ago">
                <Moment fromNow>{confession.createdDate}</Moment>
                </div>
                </div>
         )
     }):"No confession list"}
    </div>
    </center>
  
  )
}
export default ConfessionList
