const mongoose=require('../src/db/mongoose')
const { findByIdAndDelete, countDocuments, count } = require('../src/models/users')
const User=require('../src/models/users')


// User.findByIdAndUpdate("5f4f658d7415060ae8f087ed",{age :1}).then((users)=>{
//     console.log(users)
//     return User.countDocuments({age:1})
// }).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log("Error")
// })

const updateanddelete= async(id,age)=>{
    const user= await User.findByIdAndDelete(id,{age})
    const count= await countDocuments({age})
    return count
}

updateanddelete("5f4f658d7415060ae8f087ed",1).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})

