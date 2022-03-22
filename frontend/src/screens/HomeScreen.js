import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap';
import { useDispatch,useSelector,UseSelector } from 'react-redux';
import Product from '../components/Product'
import { listProducts } from '../actions/productActions';
//import axios from 'axios'

const HomeScreen=()=> {
  const dispatch=useDispatch()

  const productList=useSelector(state=>state.productList)
  //destructuring the productList
  const {loading,error,products} =productList

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])  
  return (
        <>
          <h1>Latest Products</h1>
          {
            loading?(
              <h2>Loading...</h2>
            ):error?(
              <h3>{error}</h3>
            ):
              <Row>
            {products.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product}/>
                </Col>
            ))}
          </Row> 
          }
           
        </>
    )
}

export default HomeScreen
