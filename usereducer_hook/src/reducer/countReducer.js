import { countActionType } from "../action/countAction";

//in this hook there is a reducer and intial values\
//action get the value from dispatch 
//state get the previous value of 
const countReducer=(state,action)=>{
    console.log(action);
        //value of state is changed  so return state value and it come into the state
    switch(action.type){
      case countActionType.INCREASE: 
      console.log(action.payloads.text);
      return {count:state.count+1}
    
      case countActionType.DECREASE: 
      return {count:state.count-1}
    
      case countActionType.INCREASEBYTWO:       
        return {count:state.count+2}
    
    default: 
    return state;
    }
    
    }
    export {countReducer}


    //this above is logical part of useReducer hook this is possible because of this hook