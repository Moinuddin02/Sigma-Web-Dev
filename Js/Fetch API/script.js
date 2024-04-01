const URL = "https://cat-fact.herokuapp.com/facts"
const factpara = document.querySelector("#fact")
const btn = document.querySelector(".btn")
const getfact = async () => {
    console.log("Getting Data....")
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json()
    console.log(data)
    factpara.innerHTML = data[1].text;
    
}


// function getfact(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data)
//         factpara.innerHTML = data[1].text;
//     })
// }

btn.addEventListener("click",getfact)