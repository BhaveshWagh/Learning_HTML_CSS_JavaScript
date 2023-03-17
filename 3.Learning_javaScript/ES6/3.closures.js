// closures : In JavaScript, a closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.
// Example

// var sum = function (a) {
//   console.log("Live Viewers", a);
//   let c = 10;
//   return function (b) {
//     return a + b + c;
//   };
// };

// var store = sum(20);
// console.log(store(50))

var sum = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
};

var store = sum(20, 30, 40);
console.log(store.getSumTwo());
console.log(store.getSumThree());
