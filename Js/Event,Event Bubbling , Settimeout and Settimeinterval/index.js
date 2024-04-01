let button = document.getElementById("btn")

button.addEventListener("click", () => {
    // alert("clicked Successfully")
    document.querySelector(".box").innerHTML = "<b>Clicked Successfully</b>"
})
button.addEventListener("keydown", (e) => {
    // alert("clicked Successfully")
    console.log(e.key)
})