const mongodb=require('mongodb')
const {MongoClient,ObjectID}=require('mongodb')

const connectionURl= 'mongodb://127.0.0.1:27017'
const databaseNAME= 'task-manager'




MongoClient.connect(connectionURl,{useUnifiedTopology: true },(error,client)=>{
 if(error){
   return  console.log("Unable to connect with database")
 }
 const db=client.db(databaseNAME)

//  db.collection('Users').findOne({Name:'Malik'},(error,user)=>{
//    if(error){
//      return console.log('Unable to fetch')
//    }
//    console.log(user)
//  })

//  db.collection('Users').find({age:21}).toArray((error,users)=>{

//   console.log(users)
  
//  })
//  db.collection('Users').find({age:21}).count((error,count)=>{

//   console.log(count)
  
//  })
//  db.collection('Users').insertOne({
//      name:"Nikhil",
//      age: 21
//  },(error,result)=>{
//      if(error){
//          return console.log("Unablw=e to insert user")
//      }
//      console.log(result.ops)   //ops->document inserted using insertOne
//  })

// db.collection('Users').insertMany([
//     {
//         Name:'Malik',age:21
//     },{
//         Name:'Raj',
//         age:'72'
//     }
// ],(error,result)=>{
//     if(error){
//         return console.log("Unable to Connect")
//     }
//     console.log(result.ops)
    
// })

// const Updatepromises=db.collection('Users').updateOne({ _id :new  ObjectID("5f4ba932323f0a4cc8b34e9c")},{
//   $set:{
//     name:'BossMOney'
//   },$inc:{
//     age: -1
//   }
// })

// Updatepromises.then((result)=>{
//   console.log(result)
// }).catch((error)=>{
//   console.log(error)
// })

db.collection('Users').deleteMany({
  age:21
}).then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})







})

