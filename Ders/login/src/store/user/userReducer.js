import { types } from "../type";
import { userInitialState } from "./userInitialState";

export const userReducer=(state=userInitialState,action)=>{
  if(action.type ===types.LOGIN_SUCCESS){
      return {
...state ,
user:action.payload,
isUserLogin:true
      }

  }

  if(action.type ===types.LOGIN_FAIL){
          return {
            ...state ,
            user:{},
            isUserLogin:false
      }
}


if(action.type ===types.LOGOUT){
    return {
        ...state ,
        user:{},
        isUserLogin:false  
    }   
}



}