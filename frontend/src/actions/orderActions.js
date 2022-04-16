import { ORDER_CREATE_FAILS, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS } from "../constants/orderConstants"
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