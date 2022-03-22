import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap';
import { useDispatch,UseSelector } from 'react-redux';
import Product from '../components/Product'
import { listProducts } from '../actions/productActions';
//import axios from 'axios'

const HomeScreen=()=> {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])  
  const products=[]
  return (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product}/>
                </Col>
            ))}
          </Row>  
        </>
    )
}

export default HomeScreen
