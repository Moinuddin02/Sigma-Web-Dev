// let a=1;
// for(let i=0;i<100;i++)
// {
//     console.log(a+i);
// }


// let obj= {
//   Name:"Moinuddin",
//   Skills:"HTML,CSS,JS",
//   Role:"Programmer"
// }

// console.log(obj);

// for (const key in obj) {
//   {

//         const element=obj[key];
//         console.log(key,element);

//   }  
// }

// While Loop in Js 
// let i=0;
// while (i<6) {
//     console.log(i+1);
//     i++;
// }

let age = 0;
if (age < 18) {
    console.log("You cannot drive");

}
else if (age > 10 && age < 18) {
    console.log("Still You cannot Dirve")
}


else if (age >= 18 && age < 72) {
    console.log("Yes You can drive :)")
}

else if (age > 72) {
    console.log("No You cannot drive Because Now You are Older")
}

else {
    console.log("Invalid Age");
}