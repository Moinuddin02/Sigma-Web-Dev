// console.log("One")
// console.log("Two")
// console.log("Three")

// setTimeout(() => {
//     console.log("SetTimeout")
// }, 4000);

// console.log("Four")
// console.log("Five")


// Asynchronous

 /* function sum(a,b) {
    console.log(a+b)
}

function calculator(a,b,callback) {
    callback(a,b)
}

calculator(1,2,sum) */

const hello =()=>{
    console.log("Hello");
}
setTimeout(hello,5000)