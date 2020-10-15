const express=require('express')
require('./db/mongoose')
const User =require('./models/users')
const { ObjectID } = require('mongodb')
const { update } = require('./models/users')
const { raw } = require('express')
const UserRouter=require('../src/models/router/router')
const TaskRouter=require('../src/models/router/task')
const bcrypt=require('bcryptjs')
const Task=require('../src/models/task')


const app=express()
const port =process.env.PORT

//With Middleware : new request->do something->run route handler
// app.use((req,res,next)=>{
//     if(req.method==='GET'){
//         res.send('GET method is being used')
//     }else{
//         console.log('Other Method is used')
//         next()
//     }

// })


app.use(express.json()) //parse data
app.use(UserRouter)
app.use(TaskRouter)

const jwt=require('jsonwebtoken')


const multer=require('multer')
const upload=multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,callback){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){       //no space between regular expressions .endsWith('.pdf') can also be used
            return callback(new Error('Please Uplaod File in a given format'))
        }

        callback(undefined,true)
    }
})


app.post('/upload',upload.single('upload'), async(req,res)=>{
    req.user.avatar=req.file.buffer
    await req.user.save()
res.send('Image uploaded')
},(error,req,res,next)=>{   //error handler function is set after each method
    res.send({error:error.message})
})



// const myfunction=async()=>{
//     const token=await jwt.sign({foo:'abc123'},'thisismyjwt',{expiresIn:'7 days'})
//     console.log(token)

//   const data= await jwt.verify(token,'thisismyjwt')
//   console.log(data)
// }


// myfunction()


app.listen(port,()=>{
    console.log("Server is rup on port "+port)

})


