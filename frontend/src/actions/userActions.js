import axios from "axios";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,USER_LOGIN_FAIL, USER_LOGUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_PROFILE_FAIL} from "../constants/userConstants";

export const login=(email,password)=>async(dispatch)=>{
    try{
        //dispatch of USER_LOGIN_REQUEsT
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data}=await axios.post('/api/users/login',{email,password}
        ,config
        )
        //dispatch of USER_LOGIN_SUCCESS
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}

export const logout=()=>(dispatch)=>{
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGUT})
}

export const register=(name,email,password)=>async(dispatch)=>{
    try{
        //dispatch of USER_LOGIN_REQUEsT
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data}=await axios.post('/api/users',{name,email,password}
        ,config
        )
        //dispatch of USER_REGISTER_SUCCESS
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}

// for profileupdation
export const getUserDetails=(id)=>async(dispatch,getState)=>{
    try{
        //dispatch of USER_DETAILS_REQUEST
        dispatch({
            type:USER_DETAILS_REQUEST,
        })

        //getting userInfo from the state
        const {userLogin:{userInfo}}=getState()

        
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            },
        }
        const {data}=await axios.get(`/api/users/${id}`,config
        )
        
        //dispatch of USER_DETAILS_SUCCESS
        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:USER_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}

// for profileupdation done
export const updateUserProfile=(user)=>async(dispatch,getState)=>{
    try{
        //dispatch of USER_UPDATE_PROFILE_REQUEST
        dispatch({
            type:USER_UPDATE_PROFILE_REQUEST,
        })

        //getting userInfo from the state
        const {userLogin:{userInfo}}=getState()

        
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`
            },
        }
        //put request to update exisiting information
        const {data}=await axios.put(`/api/users/profile`,user,config
        )
        
        //dispatch of USER_DETAILS_SUCCESS
        dispatch({
            type:USER_UPDATE_PROFILE_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:USER_UPDATE_PROFILE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}