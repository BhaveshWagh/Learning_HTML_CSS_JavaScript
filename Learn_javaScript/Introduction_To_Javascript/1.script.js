let c = 12;
let d = 12;
console.log("c + d =", c + d);

let str = "ten";
stringToBoolean = Boolean(str);
console.log(stringToBoolean); // output: true

stringToNum = Number(str);
console.log(stringToNum); // output:  NaN (Not a Number)

const x = 2;
const y = "2";
const result = x == y;
const res = x === y;
console.log(result); // o/p: true  --> before compare type conversion is happen convert both values into string
console.log(res); // o/p: false --> Because strict equal to checks type also then compare
// x++;
// y--;
// console.log(x);
// console.log(y,y+1);

// let  expo = x ** y;
// console.log(expo);

const num1 = true;
const num2 = false;
// const result1 = num1 || num2;
const result1 = num1 && num2;
console.log("**", !num1);
console.log(result1);
