import React,{useState} from 'react';
import "../assets/css/addconfespost.css";
import {FaLock } from 'react-icons/fa';
import {database as db,set,ref} from "../config/firebase";
import { v4 as uuidv4 } from 'uuid';//to generate random id
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddconfessionPost = () => {

    const [text,setText]=useState('');

    const addconfession= () => {
        //query for db
        if(text){
            //uuid is to generate random id 
            set(ref(db, 'confessions/' + uuidv4()), {
                   //datas to store 
                   note: text,
                   createdDate: Date.now(),
              }).then((err)=>{
                if(!err){
                    console.log('confession successfully added.');
                    toast.success('confession successfully added.')
                      setText('');//to clear text field
                }else{
                    console.log('unable to add confession');
                    toast.error('could not add confession');
                }
              });
            
        }
    }

  return (
    <center>
    <div className="add-confession-post">
        <textarea 
        rows='7'
         cols='60'
          placeholder='write your confession here...'
          value={text}   
          onChange={(e)=>setText(e.target.value)}
          />
        <br/>
        <button className='confess-btn' onClick={()=>addconfession()}>Confess</button>
    </div>
     <FaLock size="11"/>
     <small style={{marginLeft:'5px'}}>Confess note will remain for 24 hours!</small>
     <div>
          {text}
     </div>
     <ToastContainer delay={1200}/>
    </center>
  )
}

export default AddconfessionPost