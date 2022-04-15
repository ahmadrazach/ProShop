import express from "express";
//import asyncHandler from "express-async-handler";
const router =express.Router()
//import Product from '../models/productModel.js';
// import { getProducts, getProductById } from '../controllers/productControllers.js';
import {addOrderItems} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'

router.route('/').post(protect,addOrderItems)



export default router;