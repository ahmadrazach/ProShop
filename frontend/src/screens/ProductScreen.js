import React from 'react'
import {Link} from "react-router-dom"
import {Row,Col,Image,ListGroup,Card,Button} from "react-router-bootstrap";
import Rating from '../components/Rating';
import products from '../products';
import { useParams } from 'react-router';

function ProductScreen() {
    const params=useParams();
    const product= products.find(prod=>prod._id===params.id)
    
    return (
        <div>
            Abey Show hoja yr! {product._id}
        </div>
    )
}

export default ProductScreen
