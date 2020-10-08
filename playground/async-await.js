const add=async(a,b)=>{
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(a+b)
   
    },2000)
   
 } )
}

const work=async()=>{
    const sum=await add(1,9)
    const sum1=await add(sum,12)
    const sum2=await add(sum1,10)
    return sum2
}
work().then((value)=>{
    console.log("result",value)
}).catch((e)=>{
    console.log("e",e)
})