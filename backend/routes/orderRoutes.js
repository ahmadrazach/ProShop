import express from "express";
//import asyncHandler from "express-async-handler";
const router =express.Router()
//import Product from '../models/productModel.js';
// import { getProducts, getProductById } from '../controllers/productControllers.js';
import {addOrderItems, getOrderbyId,updateOrderToPaid,getMyOrders, updateOrderToDelivered, getOrders} from '../controllers/orderController.js'
import {protect,admin} from '../middleware/authMiddleware.js'

router.route('/').post(protect,addOrderItems).get(protect,admin,getOrders)
router.route('/myorders').get(protect,getMyOrders)
router.route('/:id').get(protect,getOrderbyId)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect,admin,updateOrderToDelivered)

export default router;