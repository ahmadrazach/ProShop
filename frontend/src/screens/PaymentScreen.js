import React,{useState} from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {useNavigate} from 'react-router-dom'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = () => {

    const cart=useSelector(state=>state.cart)
    const {shippingAddress}=cart
    const navigate=useNavigate()
    if(!shippingAddress)
    {
        navigate('/shipping')
    }
    const [paymentMethod,setPaymentMethod]=useState('PayPal')
    
    
    const dispatch=useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }
  return (
    <FormContainer>
        <CheckoutSteps step1 step2 step3/>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>
            </Form.Group>
            <Col>
            <Form.Check
            type='radio'
            label='Paypal or Credit Card'
            id='Paypal'
            name='paymentMethod'
            value='Paypal'
            checked
            onChange={(e)=>setPaymentMethod(e.target.value)}
            >                
            </Form.Check>
            </Col>
            <Button type='submit' variant='primary'>
                Continue
            </Button>
        </Form>
    </FormContainer>
  )
}

export default PaymentScreen