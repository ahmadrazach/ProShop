import { ORDER_CREATE_FAILS, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAILS, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS } from "../constants/orderConstants"
import axios from 'axios'

export const createOrder=(order)=>async(dispatch,getState)=>{
    try{
        //dispatch of ORDER_CREATE_REQUEST
        dispatch({
            type:ORDER_CREATE_REQUEST,
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
        const {data}=await axios.post(`/api/orders`,order,config
        )
        
        //dispatch of USER_DETAILS_SUCCESS
        dispatch({
            type:ORDER_CREATE_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ORDER_CREATE_FAILS,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}


export const getOrderDetails=(id)=>async(dispatch,getState)=>{
    try{
        //dispatch of ORDER_DETAILS_REQUEST
        dispatch({
            type:ORDER_DETAILS_REQUEST,
        })

        //getting userInfo from the state
        const {userLogin:{userInfo}}=getState()

        
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`
            },
        }
        //put request to update exisiting information
        const {data}=await axios.get(`/api/orders/${id}`,config
        )
        
        //dispatch of USER_DETAILS_SUCCESS
        dispatch({
            type:ORDER_DETAILS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ORDER_DETAILS_FAILS,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}


export const payOrder=(orderId,paymentResult)=>async(dispatch,getState)=>{
    try{
        //dispatch of ORDER_PAY_REQUEST
        dispatch({
            type:ORDER_PAY_REQUEST,
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
        const {data}=await axios.put(`/api/orders/${orderId}/pay`,paymentResult,config
        )
        
        //dispatch of USER_PAY_SUCCESS
        dispatch({
            type:ORDER_PAY_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ORDER_PAY_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}