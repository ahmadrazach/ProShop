import React,{useEffect} from 'react'
import {Link,useParams,useLocation,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {Row,Col,ListGroup,Image,Form,Button,Card} from "react-bootstrap"
import Message from '../components/Message'
import { addToCart,removeFromCart } from '../actions/cartActions'

 const CartScreen = ({history}) => {
    const params=useParams()
    const productId=params.id

    //  getting the quantity of product
    const location=useLocation()
    const qty=location.search?Number(location.search.split('=')[1]):1
    //duspatch used to dispatch actions as needed.
    const dispatch=useDispatch()

    const cart=useSelector((state)=>state.cart)
    const userDetails=useSelector(state=>state.userDetails)
    const{cartItems}=cart
    
    const removeFromCartHandler=(id)=>{
        dispatch(removeFromCart(id))
    }

    const navigate=useNavigate()
    //to proceed to the checkout
    const checkoutHandler=()=>{
        if(!userDetails){
            navigate('/login')
         } else{
            navigate('/shipping')
         }
    }
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
                    <ListGroup variant='flush'>
                        {
                            cartItems.map(item=>(
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded/>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>$ {item.price}</Col>
                                        <Col md={2}>
                                            <Form.Control as='select' value={item.qty} onChange={(e)=>
                                                   addToCart(item.product,Number(e.target.value))}>
                                                        {[...Array(item.countInStock).keys()].map(x=>(
                                                            <option key={x+1} value={x+1}>
                                                                {x+1}
                                                            </option>
                                                        ))}
                                            </Form.Control>
                                        </Col> 
                                        <Col md={2}>
                                            <Button
                                            type='button'
                                            variant='light'
                                            onClick={()=>removeFromCartHandler(item.product)}
                                            >
                                            <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                        
                                    </Row>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup vairant="flush">
                        <ListGroup.Item>
                            <h2>
                                Subtotal({cartItems.reduce((acc,item)=>acc+item.qty,0)}) items
                            </h2>
                            $
                            {
                                cartItems.reduce((acc,item)=>acc+item.qty*item.price,0).toFixed(2)
                            }
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={cartItems.length===0}
                            onClick={checkoutHandler}>
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default CartScreen
