import express from "express";
//import asyncHandler from "express-async-handler";
const router =express.Router()
//import Product from '../models/productModel.js';
// import { getProducts, getProductById } from '../controllers/productControllers.js';
import {addOrderItems, getOrderbyId,updateOrderToPaid,getMyOrders} from '../controllers/orderController.js'
import {protect} from '../middleware/authMiddleware.js'

router.route('/').post(protect,addOrderItems)
router.route('/myorders').get(protect,getMyOrders)
router.route('/:id').get(protect,getOrderbyId)
router.route('/:id/pay').put(protect, updateOrderToPaid)


export default router;