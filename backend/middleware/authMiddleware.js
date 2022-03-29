import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect= asyncHandler(async(req,res,next)=>{
    let token
    // console.log(req.headers.authorization)

    if(req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
        ){
            try{
                //taking the taking from the header
            token=req.headers.authorization.split(' ')[1]
            const decoded=jwt.verify(token,process.env.JWT_SECRET)

            // console.log(decoded)

            //fetching user with decoded id
            
            req.user=await User.findById(decoded.id).select('-password')
            next()
            }
            //if the token's failed to authenticate
            catch(error){
                console.error(error)
                res.status(401)
                throw new Error('Not authorized, token failed')
            }
        }

    if(!token){
        res.status(401)
        throw new Error("Not authorized, no token")
    }

})

export {protect}