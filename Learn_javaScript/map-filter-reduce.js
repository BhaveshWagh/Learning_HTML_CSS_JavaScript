// map() function javascript: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// eg:
// input : arr = [1,2,3,4]
// output : arr = [2,4,6,8]
// using simple way :

function double(arr) {
  output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i] * 2);
  }
  return output;
}
const arr1 = [1, 2, 3, 4];
console.log(double(arr1));

// lets using map function :
const map1 = arr1.map((x) => x * 2);
const map2 = arr1.map((x) => x * 3);

console.log(map1);
console.log(map2);

//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

function isOdd(arr2) {
  output = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 !== 0) {
      output.push(arr2[i]);
    }
  }
  return output;
}
const arr2 = [1, 2, 3, 4, 5, 6];
console.log("isodd number:", isOdd(arr2));
// Reduce : The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// eg. without using reduce
const arr = [1, 2, 3, 4];

const sumofarr = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(sumofarr(arr));

// using reduce function/method in javascript :
const red = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
});
console.log(red);

const users = [
  { firstName: "Akshay", lastName: "Saini", age: 26 },
  { firstName: "Mohit", lastName: "Mali", age: 34 },
  { firstName: "Bhavesh", lastName: "Wagh", age: 43 },
  { firstName: "Salaman", lastName: "Khan", age: 26 },
];

console.log(users);

// 1. Print the first Name and Last Name :

const fullName = users.map((x) => x.firstName + " " + x.lastName);
console.log(fullName);

// 2. Print the count, how many age's are similar : output --> [26 : 2, 34 : 1, 43 : 1]

const count = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
    console.log("***"+acc[curr.age]);
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(count);

// 3. Print the firstName whose age is less then 30:

const lessthen = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(lessthen);

// 4. Print the firstName whose age is less then 30 using reduce:

// const lessthenthirty = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     console.log(acc[curr.age]);
//   }
// });
