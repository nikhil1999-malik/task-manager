const express=require('express')
require('./db/mongoose')
const User =require('./models/users')
const Task=require('./db/mongoose')
const { ObjectID } = require('mongodb')
const { update } = require('./models/users')
const { raw } = require('express')
const UserRouter=require('../src/models/router/router')
const bcrypt=require('bcryptjs')

const app=express()
const port =process.argv.PORT || 3000

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

const jwt=require('jsonwebtoken')

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


