async function sleep() {
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(100)
    }, 1000);
   })

}

(async function main() {
    // let a = await sleep()  // IIFE
    // console.log


    // let[a,b,...rest]=[1,2,11,191,112,1,22,2]// De
    // console.log(a,b,rest)


    let obj={
        a:100,
        b:200,
        c:300

    }

    let {a,b}=obj
    console.log(a,b)

    
})()