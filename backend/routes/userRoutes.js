import express from "express";
//import asyncHandler from "express-async-handler";
const router =express.Router()
//import Product from '../models/productModel.js';
//import { getProducts, getProductsById } from '../controllers/productControllers.js';
import { authUser, registerUser,getUserProfile, updateUserProfile, getUsers,deleteUser } from "../controllers/userController.js";
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect,admin,getUsers)
router.post('/login',authUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)
router.route('/:id').delete(protect,admin,deleteUser)

export default router;