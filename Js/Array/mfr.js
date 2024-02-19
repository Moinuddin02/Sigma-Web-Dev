let a = [1, 21, 23, 4]
// let newarr=[]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newarr.push(element**2);
// }
// console.log(newarr)

let newarr = a.map((e, index, arr) => {
    return e ** 2;
})

console.log(newarr);
const greater = (e) => {
    if (e > 7) {
        return true;
    }
    else {
        return false
    }
}
console.log(a.filter(greater))

let array=[1,2,3,4,5]

const r=(a,b)=>{
     return a+b;
}
console.log(array.reduce(r));
