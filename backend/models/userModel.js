import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
},{
    timestamps:true
})

//checking the user password by decrypting it
userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

//encrypting the data before saving it into the database
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt=await bcrypt.genSalt(10) //generating Salt(the addition of a unique, random string of characters known only to the site to each password before it is hashed,) for my password which need to encrypted
    this.password=await bcrypt.hash(this.password,salt)
})
const User=mongoose.model('User',userSchema)

export default User