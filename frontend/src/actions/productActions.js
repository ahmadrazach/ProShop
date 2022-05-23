import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
} from '../constants/productConstants'

export const listProducts=(pageNumber='')=>async (dispatch)=>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST})

        const {data}=await axios.get(`/api/products?pageNumber=${pageNumber}`)

        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:data,
        })
    }
    catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}


export const listProductDetails=(id)=>async (dispatch)=>{
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST})

        const {data}=await axios.get(`/api/products/${id}`)
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data,
        })
    }
    catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}

export const deleteProduct=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:PRODUCT_DELETE_REQUEST,
        })

        //getting userInfo from the state
        const {userLogin:{userInfo}}=getState()

        
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`,
            },
        }
        //put request to update exisiting information
        await axios.delete(`/api/products/${id}`,config)
        // console.log(data)

        dispatch({
            type:PRODUCT_DELETE_SUCCESS
        })
    }
    catch(error){
        dispatch({
            type:PRODUCT_DELETE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}

export const createProduct=(id)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:PRODUCT_CREATE_REQUEST,
        })

        //getting userInfo from the state
        const {userLogin:{userInfo}}=getState()

        
        const config={
            headers:{
                Authorization:`Bearer ${userInfo.token}`,
            },
        }
        //post request to create information
        const {data}=await axios.post(`/api/products/`,{},config)
        // console.log(data)

        dispatch({
            type:PRODUCT_CREATE_SUCCESS,
            payload:data,
        })
    }
    catch(error){
        dispatch({
            type:PRODUCT_CREATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}


export const updateProduct=(product)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:PRODUCT_UPDATE_REQUEST,
        })

        //getting userInfo from the state
        const {userLogin:{userInfo}}=getState()

        
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`,
            },
        }
        //put request to update existing information
        const {data}=await axios.put(`/api/products/${product._id}`,product,config)
        // console.log(data)

        dispatch({
            type:PRODUCT_UPDATE_SUCCESS,
            payload:data,
        })
    }
    catch(error){
        dispatch({
            type:PRODUCT_UPDATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}


export const createProductReview=(productId,review)=>async(dispatch,getState)=>{
    try{
        dispatch({
            type:PRODUCT_CREATE_REVIEW_REQUEST,
        })

        //getting userInfo from the state
        const {userLogin:{userInfo}}=getState()

        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${userInfo.token}`,
            },
        }
        console.log('frontend',review)
        //post request to add information
        await axios.post(`/api/products/${productId}/reviews`,review,config)
        // console.log(data)

        dispatch({
            type:PRODUCT_CREATE_REVIEW_SUCCESS,
        })
    }
    catch(error){
        dispatch({
            type:PRODUCT_CREATE_REVIEW_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message:error.message,
        })
    }
}