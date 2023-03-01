// Array : The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

const words = ["Namste", "JavaScript"];
console.log(words);
// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// eg:
const arr = [1, "bhavesh", true, 0.5, "Minakshi"];
console.log(arr);

// Access elements of an array using indices
// An array of index is always start from 0
console.log(words[1]);

const array = [1, 2, 4, 3, 6,5, 7, 8];
const result1 = array.indexOf(5) //output: 4 index position 
const result2 = array.includes(5) //it checks the number is present in a array and return true if present, if not false.
const result3 = array.push(9)
const result4 = array.unshift(12)
const result5 = array.shift(5)
const result6 = array.slice(2,5)
const result7 = array.pop()
const result = array.sort() 

console.log(array); 
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);