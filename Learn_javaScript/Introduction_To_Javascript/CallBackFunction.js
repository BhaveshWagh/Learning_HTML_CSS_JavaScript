// CallBack Function:   A callback function passed as an argument to another function.

function greet(name, callback) {
  console.log(`Hey,${name}`);
  callback();
}

function callback() {
  console.log("CallBack Function is called");
}

greet("Bhavesh", callback);

// Using Arrow Function

const calculate = (a, b, operation) => {
  return operation(a, b);
};
// method 1
const addition = calculate(2, 4, function (n1, n2) {
  return n1 + n2;
});
console.log(addition);

// method 2
const substraction = (a, b) => a - b;

const subresult = calculate(5, 3, substraction);

console.log(subresult);

// method 3:

const multiply = (a, b) => {
  return a * b;
};

const multiresult = calculate(5, 2, multiply);
console.log(multiresult);

// find() method in javascript

const array = [1, 2, 4, 6, 7, -12, -2, 3, -5];

const firstNegative = (num) => {
  return num < 0;
};

// const result = array.find(firstNegative)
// console.log(result);

// findIndex() method in javascript:

// const result = array.findIndex(firstNegative)
// console.log(result);

// forEach() method in js:

array.forEach((num,i) => {
  console.log("array num",num,i);
});
