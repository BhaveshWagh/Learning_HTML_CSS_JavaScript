// function x() {
//     var i = 10;
//     setTimeout(function () {
//         console.log(i);
//     },3000);
//     console.log("Namaste JavaScript");    
// }
// x();

// closures example 
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

var sum = function (a,b,c) {
    console.log("this outer block");
        return {
            getsumtwo:function(){
                return a + b;
            },
            getsumthree:function () {
                return a + b + c;
            } 
        }    
}

var store = sum(5,6,7)
console.log(store.getsumtwo())
console.log(store.getsumthree())