import React, {createContext} from 'react';
import MiniNavbar from "./component/MiniNavbar";
import Navbar from './component/Navbar';
import Header  from './component/Header';
import Login from"./component/Login";
import {useState} from"react";
//in this session we practice about useContext hook 
//in case of prop drilling there is a demerits of unnecessary use of props in middle component 
//we just want to pass in end components but that is not possible 
//to solve that problem we use useContext hook 
//which works by making a context and store and use props in a particular component directly

 //make context to store data/props
   const UserContext =createContext();
   const ListContext=createContext();
   const AuthContext =createContext();
//this array is to pass ListContext
   const values=[
    {name:'thapa',age:20},
    {name:'kaji',age:22},

    ];

const App = () => {
    //this can be also passed in context
   const authState=useState('true');

  return (
    <div>
        {/* method to provide our context to other components */}
        {/* we can pass object ,array state etc. in context */}
        <UserContext.Provider value={{name:'Thapakaji',age:21,address:"patle"}}>
        form mininavbar component<br/>
        <MiniNavbar />   
        from Navbar components<br/>
        <Navbar />
        </UserContext.Provider>

        {/* another context */}
        <ListContext.Provider value= {values}>
           from header components passes array as a object in context object<br/>
           <Header/>
        </ListContext.Provider>
       
        <AuthContext.Provider value= {authState}>
           from login components passes state as a object in context object<br/>
           <Login/>
        </AuthContext.Provider>
    </div>
  )
}

export default App;
export {UserContext,ListContext} ;
export {AuthContext};
