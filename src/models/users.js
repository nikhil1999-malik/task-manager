const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const auth=require('../models/middleware/auth')

const UserSchema=mongoose.Schema({

    name:{
           type:String,
           required:true,
           trim:true,
           lowercase:true

    },email:{
        type:String,
        unique: true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }

        }

    },
    age:{
     type:Number,
     default:0,
     validate(value){
         if(value<0){
             throw new Error("Invalid length")
         }
     }

    },password:{
        type:String,
        trim:true,
        validate(value){
            if(value ==='password'){
                throw new Error("Passwrod password is not used")
            }
            else if(value<6){
                throw new Error('Password is greater than 6')
            }
            
        }

    },tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
    
})

UserSchema.methods.generateAuthToken= async function(){
    const user=this 
    const token=jwt.sign({ _id:user._id.toString()},'thisismynewproject')
    
    user.tokens=user.tokens.concat({token:token})
    await user.save()
    return token
}

UserSchema.statics.findByCredentials=async(email,password)=>{

    const user=await User.findOne({email})
    
    if(!user){
        throw new Error("Unable to Login")
    }
    const isMatch=await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new Error("Unable to Login")
    }
    return user
}

//Changing before Login
UserSchema.pre('save',async function(next){

    const user=this

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }
    
    next() //to stop this function

})

const User=mongoose.model('User',UserSchema)

module.exports=User



