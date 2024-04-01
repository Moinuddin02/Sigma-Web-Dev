document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Child Clicked")
})
document.querySelector(".childcontainer").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Childcontainer Clicked")
})
document.querySelector(".container").addEventListener("click",(e)=>{
   // e.stopPropagation
    alert("Container Clicked")
})

function getinterval(){
    let val1=Math.ceil(0+Math.random()*255)
    let val2=Math.ceil(0+Math.random()*255)
    let val3=Math.ceil(0+Math.random()*255)

    return `rgb(${val1},${val2},${val3})`
}
let a= setInterval(() => {
    document.querySelector(".container").style.background=getinterval()
}, 1000);

console.log(a)