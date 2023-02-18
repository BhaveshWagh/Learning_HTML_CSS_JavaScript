// Higher-Order Function :
// In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.
// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

// This is a simple code for Calculate Area of circle,circumference and diameter

const radius = [3,1,2,4]

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function(radius,logic){
    const output = []
    for(let i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

// console.log(circumference(radius));
// console.log(diameter(radius));

// const circumference = function(radius){
//     const output = []
//     for(let i = 0; i < radius.length; i++){
//         // output.push(radius[i])
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output;
// }
// const diameter = function(radius){
//     const output = []
//     for(let i = 0; i < radius.length; i++){
//         // output.push(radius[i])
//         output.push(2 * radius[i])
//     }
//     return output;
// }


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

