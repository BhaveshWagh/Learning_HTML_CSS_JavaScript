// Events 1. onclick = "add your logic here"
function callMe(event) {
    // console.log(this);
    console.log(event.type)
    console.log(event.currentTarget)
    console.log(event.clientY)
    console.log(event.clientX)
    alert("Thanks for trying")
}
clickBtn.addEventListener('click',callMe)
// only pass the function not call
// eventListner 
// clickBtn.onclick = callMe;

// clickBtn.removeEventListener('click',callMe)
// function callMe2() {
//     alert("EventListener Called")
// }
// clickBtn.addEventListener('click',callMe2)




