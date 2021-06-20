import {
      LOGIN_SUCCESS,
      LOGIN_FAIL,
      USER_LOADED_SUCCESS,
      USER_LOADED_FAIL,
      AUTHENTICATED_SUCCESS,
      AUTHENTICATED_FAIL,
      LOGOUT,
      PASSWORD_RESET_SUCCESS,
      PASSWORD_RESET_FAIL,
      PASSWORD_RESET_CONFIRM_SUCCESS,
      PASSWORD_RESET_CONFIRM_FAIL,
      SIGNUP_SUCCESS,
      SIGNUP_FAIL,
      ACTIVATION_SUCCESS,
      ACTIVATION_FAIL

} from '../actions/types';

const initialState={
    access : localStorage.getItem("access"),
    refresh : localStorage.getItem("refresh"),
    isAuthenticated:null,
    user:null,
    user_types:"0"
}
// const  function(state=initialState){
//    return{
//        ...state.user,
//        user_types:"0"
//    };

// }
export default function foo(state = initialState,action){
    const{type,payload}=action;
    switch(type){
        case AUTHENTICATED_SUCCESS:
            console.log("authentication success");
            return{
                ...state,
                isAuthenticated:true,
                
            }
        case AUTHENTICATED_FAIL:
            console.log("Log");
            return{
                ...state,
                isAuthenticated:false
            }

        case USER_LOADED_SUCCESS:
            console.log("Log");
            return{
                ...state,
                user:payload,
                user_types:payload.user_types
                
            }
        case USER_LOADED_FAIL:
            console.log("Log");
            return{ 
                ...state,
                user:null

            }
        case LOGIN_SUCCESS:
            console.log("Log");
            localStorage.setItem("access",payload.access);
            console.log("bhayo?");
            localStorage.setItem("refresh",payload.refresh);
            console.log("bhayo?")
            return{
                ...state,
                isAuthenticated:true,
                access:payload.access,
                refresh:payload.refresh,
                user_types:payload.user_types
            }
        case LOGIN_FAIL:
            console.log("Log");
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return{
                ...state,
                access:null,
                refresh:null,
                isAuthenticated:false
            }
        case LOGOUT:
            console.log("Log");
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return{
                ...state,
                access:null,
                refresh:null,
                isAuthenticated:false,
                user_types:null
            }

        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case SIGNUP_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return{
                ...state
            }
        default:
            console.log("Logss");
            return state
    }
}