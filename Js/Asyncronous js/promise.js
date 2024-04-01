// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Hello I am promise")
//         resolve("Hii I am Solved")
//      // reject("Some Error Occured :(")
//     })

// }





// let pro= getpromise();
// pro.then((s)=>{
//     console.log("Success",s)
// })

// pro.catch(()=>{
//     console.log("error")
// })



//  function asyn1()
//  {
//     return new Promise((resolve,reject)=>{
//           setTimeout(() => {
//             console.log("I am Resolved 1")
//             resolve("Succes 1")
//           }, 3000);
//     })
//  }


//  function asyn2()
//  {
//     return new Promise((resolve,reject)=>{
//           setTimeout(() => {
//             console.log("I am Resolved 2")
//             resolve("Succes 2")
//           }, 3000);
//     })
//  }

//  console.log("Fetching Data 1...")
//  let p1=asyn1();
//  p1.then((res)=>{
//     console.log(res)
//     console.log("Fetching Data 2...")
//     let p2=asyn2();
//     p2.then((res)=>{
//        console.log(res)
//     })
//  })
 
// or

//  console.log("Fetching Data 1...")  
//  asyn1().then((res)=>{
//     console.log("Fetching Data 2...")
// asyn2().then((res)=>{})
//  })




function getdata(dataid) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data" + dataid)
            resolve("Success")
        }, 1000);
    })
 }


// getdata(1).then(()=>{
//     return getdata(2)
// }).then(()=>{
//     return getdata(3)
// }).then(()=>{
//     return getdata(4)
// }).then(()=>{
//     return getdata(5)
// }).then(()=>{
//     return getdata(6)
// }).then(()=>{
//     return getdata(7)
// })

async function get()
{
    await getdata(1);
    await getdata(2)
    await getdata(3)
    await getdata(4)
    await getdata(5)
    await getdata(6)
}


