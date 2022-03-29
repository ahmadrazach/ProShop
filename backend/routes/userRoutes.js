import express from "express";
//import asyncHandler from "express-async-handler";
const router =express.Router()
//import Product from '../models/productModel.js';
//import { getProducts, getProductsById } from '../controllers/productControllers.js';
import { authUser } from "../controllers/userController.js";


router.post('/login',authUser)



export default router;