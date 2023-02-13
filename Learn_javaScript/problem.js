

// // closures example 
// var sum = function(a){
//     console.log("Hello, Hello your rating is " + a + "/5")
//     var c = 2
//     return function(b){
//         console.log("This is a return function.The value of b =",b)
//         return a+b+c
//     }
// }
// var ret = sum(3)
// console.log(ret(5));

// var sum = function (a,b,c) {
//     console.log("this outer block");
//         return {
//             getsumtwo:function(){
//                 return a + b;
//             },
//             getsumthree:function () {
//                 return a + b + c;
//             } 
//         }    
// }

// var store = sum(5,6,7)
// console.log(store.getsumtwo())
// console.log(store.getsumthree())

// Imp question ask in interview
// print i while i is incremented according to that print i in following manner in time eg: 
// i = 1 time will take to print is 1000 milliseconds 1 is printed
// i = 2 after 2000ms 2 is printed so on.... up n
// without using let use only var

// function  x() {
//     for( var i = 1; i <= 5; i++){
//         function closure(x){
//             setTimeout( function(){
//                 console.log(x);
//             },x*1000)
//         }
//         closure(i)
//     }

// }

// x()


// var x = function (){
    
// return {get:function (){
//     console.log("Hello");}
// }
// }
// var a = x() 
// a.get()
// console.log(a.get());

//function statement
// function a(){
//     console.log("This function statement");
// }

// a() function called 

// function expression:
// function act as a value
var b = function(){
    console.log("This is function expression: ");
   
}
b()


// Named Function expression:
var c = function d(){
    console.log("This is Named function expression: ");
   
}
c()


// First Class Function : A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

function userName(){
    return "Bhavesh";
}

function greetings(greet,name){
    console.log(greet,name);
}

greetings("Hello,",userName())

