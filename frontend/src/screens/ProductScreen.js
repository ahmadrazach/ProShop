import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,Image,ListGroup,Card,Button} from "react-bootstrap";
import Rating from '../components/Rating';
import { useParams } from 'react-router';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';


const ProductScreen=({match})=> {
    //returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
    const dispatch=useDispatch()

    const params=useParams();
    
    //taking the product details state using useSelector
    const productDetails=useSelector(state=>state.productDetails)
    //destructing productDetails
    const {loading,error,product}=productDetails
    useEffect(()=>{
        dispatch(listProductDetails(params.id))
    },[dispatch,match])  

    
    return (
        <>
            <Link className="btn btn-light my-3" to="/">Go Back</Link>
            {loading?<Loader/>:error?<Message variant='danger'>{error}</Message>:(
                <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Price:
                                    </Col>
                                    <Col>
                                    <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Status:
                                    </Col>
                                    <Col>
                                    {product.countInStock>0?"In Stock":"Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Status:
                                    </Col>
                                    <Col>
                                    {product.countInStock>0?"In Stock":"Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock===0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            )}
            
            
        </>
    )
}

export default ProductScreen
