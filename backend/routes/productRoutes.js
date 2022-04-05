import express from "express";
//import asyncHandler from "express-async-handler";
const router =express.Router()
//import Product from '../models/productModel.js';
import { getProducts, getProductById } from '../controllers/productControllers.js';


router.route('/').get(getProducts)


router.route('/:id').get(getProductById)


export default router;