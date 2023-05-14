function sumOfTwoNumbers(a, b) {
  const sum = a + b;
  return sum;
}
console.log(sumOfTwoNumbers(10, 20));

// function expression
// difference is between normal and function expression:
// function expression doesn't support Hoisting.

const multi = function (x, y) {
  return x * y;
};
console.log(multi(4, 5));

// nested functions :

function addSquares(a, b) {
  const sa = square(a);
  const sb = square(b);

  function square(num) {
    return num * num;
  }
  return sa + sb;
}
 
console.log(addSquares(3, 4));
