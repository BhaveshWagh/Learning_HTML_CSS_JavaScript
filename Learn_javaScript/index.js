// Hoisting In JavaScript : JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

// In simple words, hoisting is where we initialise variables or use them before they have been declared.

// console.log(x);
// var x = 1;
// a();
// b();


// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }


// function a(){
//     var b = 11;
//     c();
//     function c(){
//         console.log(b);
//     }
// }

// var b = 10;
// a()

// output : 11;


// Temporal Dead Zone : let keyword 
// Temporal dead zone is basically  a time between hoisting and till it assign a value.
// ex

// console.log(a);

// console.log(b);
// console.log(window.b);

// let a = 10;
// console.log(a);
// var b = 100;

// o/p --> a = Cannot access 'a' before initialization. so the a is in a temporal dead zone for a time being that's why it gives an error.
// b = undefined. (because Memory is allocated but not initialize.)
// Because a is allocated in a separate memory in other hand b is allocates global object
 


// Block Scoped
let a = 10 
{
    var a = 10;
console.log(a);
}
console.log(a);