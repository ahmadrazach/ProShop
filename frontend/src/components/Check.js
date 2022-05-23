import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Carousel,Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import { useDispatch,useSelector } from 'react-redux'

const Check = () => {

    const dispatch=useDispatch()
    
    const productTopRated = useSelector((state) => state.productTopRated)
    const { loading, error, products } = productTopRated
    
    useEffect(()=>{
        dispatch(listTopProducts())
    },[dispatch])
    
  return (
        <div>
        <div className='container-fluid' >
            <div className="row">
                <div className="col-12">
                    <Carousel>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/500/300?img=1"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/500/300?img=2"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/500/300?img=3"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Check