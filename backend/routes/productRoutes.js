import express from "express";
//import asyncHandler from "express-async-handler";
const router =express.Router()
//import Product from '../models/productModel.js';
import { getProducts, getProductById, deleteProduct, updateProduct, createProduct } from '../controllers/productControllers.js';
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/')
    .get(getProducts)
    .post(protect,admin,createProduct)


router.route('/:id')
    .get(getProductById)
    .delete(protect,admin,deleteProduct)
    .put(protect,admin,updateProduct)


export default router;