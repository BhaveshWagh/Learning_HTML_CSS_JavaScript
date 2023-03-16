// ES6
// Rest & Spread Operator

// Rest :ES6 provides a new kind of parameter so-called rest parameter that has a prefix of three dots (...). A rest parameter allows you to represent an indefinite number of arguments as an array. See the following syntax:
// Example:

function addNumbers(a, b, c, ...args) {
  console.log(args);
  return a + b + c;
}
const sum = addNumbers(1, 2, 4, 5, 6, 7, 0);
console.log(sum)
// o/p: [ 5, 6, 7, 0 ]
//      7

// Example 2:
function sumOfTwo(...args){
    let total = 0 
    for(let i of args){
        total += i;
    }
    return total
}
console.log(sumOfTwo(1,2,4,5,"a")) 
// o/p = 12a

// Spread :

names = ["Bhavesh","Mayur","Moreshwar","Dinesh"]
// console.log(names)
function getName(name1,name2,name3,name4){
    console.log(name1,name2,name3,name4)
}

getName(names[0],names[1],names[2],names[3])
getName(...names)
// getName(names)


// Object ke sath -> Rest
var students ={
    name:"Ajay",
    age : "23",
    hobbies : ["cricket", "Reading"]

}


// if u want a access a element 
const age1 = students.age
console.log(age1)  
// o/p : 23

// Array Destructuring in ES6


const {age,...rest} = students;
console.log(rest)
console.log(age)
//  { name: 'Ajay', hobbies: [ 'cricket', 'Reading' ] }
// 23 


//  Spread

// how to override value using spread operator
// copy the object first then define what u want to change 
const newStudent = {
    ...students,
    age:"22"
}
console.log(newStudent)
console.log(students)