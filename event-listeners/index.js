
document.getElementById("btn").addEventListener("click", fun)
document.getElementById("btn").addEventListener("click", ()=>{
    document.getElementByClassName("btn").style.backgroundColor = "blue"
})
function fun(){
    document.getElementById("para").innerHTML = "Hello, world " + "Welcome to JavaScript"
}
