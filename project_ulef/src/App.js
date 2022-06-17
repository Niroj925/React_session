import React,{useEffect,useState} from 'react';
import axios from "axios";
import {Access_Key} from './config/Constant';

const App = () => {
    const [imageList,setImageList]=useState([]);
    //hold data temporarly to restore original data
    const [tempImg,setTempImg]=useState([]);
    const[isLoading,setIsloading]=useState(true);
    
    useEffect(()=> {

        axios.get(
            `https://api.unsplash.com/photos/?client_id=${Access_Key}&per_page=30`
            )
             .then((response)=>{
              setImageList(response.data);
              setTempImg(response.data);
              //after getting response make loading from
              setIsloading(false);
            });
            

    },[])

    //make a function to search image
   const searchImage=(query)=>{
    if(query===''){
      setImageList(tempImg);
    }else{
         const filterImageList=  imageList.filter((image)=>{
          image.alt_description=  image.alt_description===null?"react":image.alt_description;
          //now check query which is our list or not if query exit it will return true else false
          //if query exist then it will return 

         return image.alt_description.includes(query)
           });
           setImageList(filterImageList);
    }
  }
  return (
    <div>
        <center>
            <input type="text" placeholder="Search image..."
            style={{
                height:"40px",
                width:"40%",
                borderRadius:"9px"
            }}
            onChange={(e)=>searchImage(e.target.value)}
            ></input>
        </center>
      <div
        style={{
        display: 'flex',//this is display in row wise
        flexWrap:'wrap',
        justifyContent: 'center'
    }}
      >
        {/* to show data of array in seetter of useEffect func we have to map */}
        {imageList.length>0 ? imageList.map((image)=>{

            // in react particulr div should have a unique key and set image id as a key from api
            return <div key={image.id}
             style={{
                padding: '10px',
                textAlign: 'center'
            }}
             >
                <img 
                src={image.urls.regular} 
                alt={image.alt_description}
                style={{
                    height:"250px",
                    width:"250px",
                    objectFit:"cover",
                }}
                ></img>
                <br/>
                {
                image.alt_description ?image.alt_description.substring(0,20):"react"
                }
                </div>
                // ternary inside ternary
        }):isLoading ?'loading....': "No images found"
        }
      </div>
    </div>
  )
}

export default App
