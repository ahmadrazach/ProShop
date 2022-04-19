import express from "express";
//import asyncHandler from "express-async-handler";
const router =express.Router()
//import Product from '../models/productModel.js';
// import { getProducts, getProductById } from '../controllers/productControllers.js';
import {addOrderItems, getOrderbyId} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'

router.route('/').post(protect,addOrderItems)
router.route('/:id').get(protect,getOrderbyId)


export default router;