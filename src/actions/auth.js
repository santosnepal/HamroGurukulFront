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

} from './types';
import {toastify} from 'react-toastify'; 
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
export const checkAuthenticated = () => async dispatch => {
    console.log("check authenticated");
   if(localStorage.getItem("access")){
       console.log("aaye");
    const config ={
        headers:{
            'content-type':'application/json',
            'Accept':'application/json'
        }
    };
    const body =JSON.stringify({token:localStorage.getItem("access")});
    try{
        const res =await axios.post(`http://localhost:8000/auth/jwt/verify/`,body,config);
        if(res.data.code !=='token_not_valid'){
            dispatch({
                type:AUTHENTICATED_SUCCESS
            });

        }else{
            dispatch({
                type:AUTHENTICATED_FAIL
            });
        }
    }catch(err){
        console.log(err);
        dispatch({
            type:AUTHENTICATED_FAIL
        });

    }
   } else{
        console.log("aaye");
       dispatch({
           type:AUTHENTICATED_FAIL
       });
   }
};
export const load_user = ()=>async dispatch =>{
    if(localStorage.getItem("access")){
        console.log("load user");
        const config ={
            headers:{
                'content-type':'application/json',
                'Authorization': `JWT ${localStorage.getItem("access")}`,
                'Accept':'application/json'
            }
        };

        try{
            const res = await axios.get(`http://localhost:8000/auth/users/me/`,config);
            dispatch({
                type:USER_LOADED_SUCCESS,
                payload:res.data
            });
    
        }catch(err){
            dispatch({
                type:USER_LOADED_FAIL
            });
    
        }

    }
    
    else{
        console.log("aaye");
        dispatch({
            type:USER_LOADED_FAIL
        });

    }
    
};
export const login = (email,password)=>async dispatch =>{
    const config ={
        headers:{
            'content-type':'application/json'
        }
    };
    const body=JSON.stringify({email,password});
    try{
        const res = await axios.post(`http://localhost:8000/auth/jwt/create/`,body,config);
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        });
        dispatch(load_user());
        

    }catch(err){
        console.log(err);
        dispatch({
            type:LOGIN_FAIL
        });

    }


};
export const signup = (first_name, last_name, email, password, re_password,user_types,gender,course,session_year_id)=>async dispatch =>{
    const config ={
        headers:{
            'content-type':'application/json'
        }
    };
    const body=JSON.stringify({email,first_name,last_name,user_types,password,re_password,gender,course,session_year_id});
    console.log(body);
    try{
        
        const res = await axios.post(`http://localhost:8000/auth/users/`,body,config);
        dispatch({
            type:SIGNUP_SUCCESS,
            payload:res.data
        });
        // dispatch(load_user());
        console.log(res.data);
    }catch(err){
        console.log(err);
        dispatch({
            type:SIGNUP_FAIL
        });

    }


};
export const verify =(uid,token) => async dispatch => {
    const config ={
        headers:{
            'content-type':'application/json'
        }
    };
    const body = JSON.stringify({uid,token});
    try{
        await axios.post(`http://localhost:8000/auth/users/activation/`,body,config);
        dispatch({
            type:ACTIVATION_SUCCESS
        });
    }catch(err){
        dispatch({
            type : ACTIVATION_FAIL
        });
    }

};
export const reset_password = (email) => async dispatch =>{
    const config ={
        headers:{
            'content-type':'application/json'
        }
    };
    const body = JSON.stringify({email});
    try{
        await axios.post(`http://localhost:8000/auth/users/reset_password/`,body,config);
        dispatch({
            type:PASSWORD_RESET_SUCCESS
        });
    }catch(err){
        dispatch({
            type : PASSWORD_RESET_FAIL
        });
    }

};
export const reset_password_confirm = (uid,token,new_password,re_new_password) => async dispatch =>{
    const config ={
        headers:{
            'content-type':'application/json'
        }
    };
    const body = JSON.stringify({uid,token,new_password,re_new_password});
    try{
        await axios.post(`http://localhost:8000/auth/users/reset_password_confirm/`,body,config);
        dispatch({
            type:PASSWORD_RESET_CONFIRM_SUCCESS
        });
    }catch(err){
        dispatch({
            type : PASSWORD_RESET_CONFIRM_FAIL
        });
    }
};
export const logout = () => dispatch =>{
    dispatch({
        type:LOGOUT
    });
};