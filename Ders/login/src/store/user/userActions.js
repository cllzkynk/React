import { types } from "../type"

export const loginSuccess =(user)=>({

type:types.LOGIN_SUCCESS,
payload:user

});

export const loginFail=()=>({
    type:types.LOGIN_FAIL

});


export const loginOut=()=>({
    type:types.LOGOUT,

});



 

