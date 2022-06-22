import React,{useState} from 'react';
import {database,ref,set,update,onValue} from './config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    const [userData,setUserData]=useState({});
    const [status,setStatus] = useState('');
    const [fetchUserdata,setFetchUserdata] = useState([]);

    const handleChange =(event)=>{
    //binding our form data in setData like below
    //...mean spliting our data
    setUserData({...userData,[event.target.name]:event.target.value});
     
    }

    const insertUser=()=>{
      setStatus('inserting....');
        //users means a collection in our collection name which is in json formate
        // {
        //     users:{  /makes new object like below so / means next object inside collection 
        //         20221154:{

        //         }
        //     }
        // }
        set(ref(database, 'users/' + Date.now()), {
          
          ...userData
          }).then((err)=>{
            if(err){
            console.log('error occur while inserting');
            toast('error occur while inserting')
            }else{
              console.log('successfully inserted to db');
              toast.success('successfully inserted to db');
              setStatus('');
             
            }
           
          });  
            
    }

    //for update
    const updateUser=()=>{
      setStatus('updating....');
      update(ref(database, 'users/' +userData.userid), {
        
        ...userData
        }).then((err)=>{
          if(err){
          console.log('error occur while updating');
          toast('error occur while inserting')
          }else{
            console.log('successfully updated');
            toast.success('user successfully updated ');
            setStatus('');
           
          }
         
        }); 

    }
       //for delete
       const deleteUser=()=>{
        setStatus('deleting....');
        set(ref(database, 'users' +userData.userid), 
          //if set data as null then previous data will be deleted
          null
          ).then((err)=>{
            if(err){
            console.log('error occur while deleting');
            toast('error occur while deleting')
            }else{
              console.log('successfully deleted');
              toast.success('user successfully deleted from db ');
              setStatus('');
             
            }
           
          }); 
  
      }
         //for fetching user
         const fetchUser=()=>{
          //hook is not used inside loop so make a temp variable array
          let data=[];
          setStatus('fetching....');
          //to fetch it will return a callback
          onValue(ref(database, 'users/') ,(snapshot)=>{
           if(snapshot){
            let userList = snapshot.val();
            for(let i in userList){
              console.log(userList[i]);
              data.push(userList[i]);
              console.log(data);
            }
            //hook should not be inside loop
            setFetchUserdata(data);
            setStatus('');
            toast.success('user fetched successfully from db ');
           }
            console.log(snapshot.val());
          })
      
    
        }

  return (
    <div>
        <ToastContainer />
        <form
        onSubmit={(event)=>{
            event.preventDefault();
           // insertUser();
            //updateUser();
            //deleteUser();
            fetchUser();
        }}
        autoComplete="off"
        >
          {/* id will be taken from url's params 
          to update delete we should have take id of these in url params 
          */}
           <input type="number" name='userid' placeholder="user id" onChange={(event) =>handleChange(event)}/><br/>
            <input type="text" name='fullname' placeholder="Name" onChange={(event) =>handleChange(event)}/><br/>
            <input type="text" name='add' placeholder="Address"  onChange={(event) =>handleChange(event)}/><br/>
            <button type="submit">insert</button>
            <button type="submit">update</button>
            <button type="submit">delete</button>
            <button type="submit">fetch users</button>
        </form><br/>
        {status}
        {/* display our fetched data which is in fetchUserdata and map */}
       {fetchUserdata.map((user,index) => {
        //react dom does not  identify div uniquely so we have to set a unique key 
        return <div key={index}
        style={{
          padding: '10px',
          border: '1px solid blue',
          marginTop:'10px',
          backgroundColor:'lightgrey'
        }}
        >
          {user.fullname+"  "+user.add}<br/>
        </div>
       })}
    </div>
  )
}

export default App