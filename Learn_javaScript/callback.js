// Event Listeners :
function closr() {
    let count = 0;
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button Clicked", count = count + 1);
});}

closr()

// Callback function :
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// eg-: 
setTimeout(function () {
    console.log("Timer..");
},2000)

function x(y){
    console.log("function x is executed succefully...");
    y()
}

x(function y() {
    console.log("function y is executed....");
});

