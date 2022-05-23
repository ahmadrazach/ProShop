import React,{useEffect} from 'react'
import {Row,Col} from 'react-bootstrap';
import { useDispatch,useSelector} from 'react-redux';
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';
//import axios from 'axios'
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen=()=> {
  
  const dispatch=useDispatch()
  const params=useParams()
  const pageNumber=params.pageNumber || 1

  const productList=useSelector(state=>state.productList)
  //destructuring the productList
  const { loading,error,products,page,pages } =productList

  

  useEffect(()=>{
    dispatch(listProducts(pageNumber))
  },[dispatch,pageNumber])  
  return (
        <>
          <ProductCarousel/>
            <h1>Latest Products</h1>
            {
              loading?(
                <Loader/>
              ):error?(
                <Message variant='danger'>{error}</Message>
              ):
              <>
                <Row>
                {products.map((product)=>(
                    <Col key={product._id} sm={12} md={6} lg={4}>
                    <Product product={product}/>
                    </Col>
                ))}
              </Row>
              <Paginate
                pages={pages}
                page={page}
              />
          </> 
          }
           
        </>
    )
}

export default HomeScreen
