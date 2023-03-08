// For loop in javascript there are 3 types  
// 1.for(let initialization,condition,increment/decrement)
// How to Loop Through an Array with a for Loop in JavaScript.
const scores = [22, 54, 76, 92, 43, 33];
for (let i = 0; i < scores.length; i++){
    console.log(scores[i])
}
// 2.for in 
// How to Loop Through an Array with a for…in Loop in JavaScript
for (j in scores){
    console.log("for in",scores[j])
}


// 3.for of 
// How to Loop Through an Array with a for…of Loop in JavaScript
for (score of scores){
    console.log("for of ",score)
}

// 4.forEach()
// How to Loop Through an Array with a forEach Loop in JavaScript

scores.forEach( (score) => {
    console.log("forEach()",score)
})

// or

scores.forEach( (score) => console.log(score) )