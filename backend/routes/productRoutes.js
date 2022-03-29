import express from "express";
//import asyncHandler from "express-async-handler";
const router =express.Router()
//import Product from '../models/productModel.js';
import { getProducts, getProductsById } from '../controllers/productControllers.js';


router.route('/').get(getProducts)


router.route('/:id').get(getProductsById)


export default router;