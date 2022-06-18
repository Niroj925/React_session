import React ,{useReducer} from 'react'
//import logical part of this UI part
import {countReducer} from './reducer/countReducer';
import {countActionType} from './action/countAction';

//here we discussed about useReducer hook which is same as setState
//but it has some essential properties to differentiate logical part and unit part

const App = () => {


   const [state ,dispatch]= useReducer(countReducer,{count:0});
   //the function of dispatch is to send datas to destination
   //after calling dispatch it will call reducer function
  return (
    <div>
      {state.count}
      {/* this dispaction call another reducer function which is mentioned above */}
      {/* we can pass extra information  */}
    <button onClick={()=>dispatch({type:countActionType.INCREASE,payloads:{text:'hello Nepal'}})}>+</button>
    <button onClick={()=>dispatch({type:countActionType.DECREASE})}>-</button>
    <button onClick={()=>dispatch({type:countActionType.INCREASEBYTWO})}>+2</button>
    </div>
  )
}

export default App
