import React from 'react'
import {Link} from "react-router-dom"
import {Row,Col,Image,ListGroup,Card,Button} from "react-router-bootstrap";
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen=({match})=> {
    console.log(match.params.id);
    return (
        <div>
            Abey Show hoja yr!
        </div>
    )
}

export default ProductScreen
