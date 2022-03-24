import React,{useEffect} from 'react'
import {Link,useParams,useLocation } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {Row,Col,ListGroup,Image,Form,Button,Card} from "react-bootstrap"
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

 const CartScreen = () => {
    const params=useParams()
    const productId=params.id

    //  getting the quantity of product
    const location=useLocation()
    const qty=location.search?Number(location.search.split('=')[1]):1
    //duspatch used to dispatch actions as needed.
    const dispatch=useDispatch()

    const cart=useSelector((state)=>state.cart)
    const{cartItems}=cart
    
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])
   return (
    <div>
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length===0?(
                    <Message>
                        Your cart is empty <Link to="/">Go Back</Link>
                    </Message>
                ):(
                    <ListGroup variant='flush'></ListGroup>
                )}
            </Col>
        </Row>
    </div>
  )
}

export default CartScreen
