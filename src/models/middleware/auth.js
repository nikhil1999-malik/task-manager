const jwt=require('jsonwebtoken')
const User=require('../users')

const auth=async(req,res,next)=>{


  try{
        const token= req.header('Authorization').replace('Bearer ','')
        const decoded= jwt.verify(token,'thisismynewproject')
        const user=await User.find({_id:decoded._id,'tokens.token':token})
        if(!user){
            throw new Error('Isnt Working')
        }
        req.user=user
      next()
    }catch(e){
      res.status(400).send('Authorization error')
    }
}

module.exports=auth