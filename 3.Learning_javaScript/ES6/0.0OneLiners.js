// 10 JavaScript One Liners:

// 1. How to Capitalize Text

const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const name1 = "jack";
console.log(capitalize(name1)); // Jack

// capitalize(name1)
// console.log(name1.toUpperCase()) // JACK

// 2. How To Calculate Percentage

const calculatePercentage = (value, total) => Math.round((value / total) * 100);

const outOff = 600;
const totalMarksObtained = 595;

console.log(calculatePercentage(totalMarksObtained, outOff));

// 3. How to Get a Random Element

const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

const items = ["Nicely done!", "Good job!", "Good work!", "Correct!"];

console.log(getRandomItem(items)); // "Good job!"

// 4. How to Remove Duplicate Elements

const removeDuplicate = (arr) => [...new Set(arr)];

// Set constructor in JavaScript, which removes any dublicate (primitive) values by default
// After that we use spread operator ... to spread its values into a new array.

const num = [1, 2, 3, 4, 5, 3, 6];
console.log(removeDuplicate(num));

// 5. How to Sort Elements By Certain Property
// A common task when displaying data in JavaScript is to sort it based on some property.

const sortBy = (arr, key) =>
  arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

const lessons = [
  { position: 1, name: "Intro" },
  { position: 0, name: "Basics" },
  { position: 2, name: "Intermediate" },
];

console.log(sortBy(lessons, "position"));

// 6. How to Check if Arrays/Objects are Equal:

const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Checking for equality between arrays and objects is a bit harder, however. Fortunately, there's a neat trick you can use with JSON.stringify to convert arrays or objects into a JSON string. If all the elements match, isEqual will return a value of true.

// use:This is very handy when you expect multiple inputs from a user, for example if they're answering a question and you want to compare it to the correct solution.

isEqual([1, '2'], [1, 2]); // false
isEqual([1, 2], [1, 2]); // true

// 7. How to Count Number of Occurrences

const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

// Another helpful array-based one liner is to count the number of occurrences of an element in an array. It uses the .reduce() function. If the value is found in the array, it increments a counter by one.

// One useful example might be a poll to determine what most people voted for.

const pollResponses = ["Yes", "Yes", "No"];
const response = "Yes";

countOccurrences(pollResponses, response); // 2
// 8. How to Wait for a Certain Amount of Time

const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

// In your application, you might want to wait for a certain period of time. For example, if you want to delay an animation or are waiting for an important operation for finish.

// You can provide the wait function a certain amount of time to wait in milliseconds. Because it uses a promise, you can use the then callback or the await keyword to make sure it has finished.

wait(2000).then(() => goToSignupPage());

// 9. How to Use the Pluck Property from Array of Objects

const pluck = (objs, key) => objs.map((obj) => obj[key]);

// If you need to extract data from an array of objects and are not interested in getting all the data that is returned, use the pluck function.

// It takes an array of objects and a property that each of the objects contains. The function maps over this array and returns an array with only the values of the property that we specified.

// For example, if we have an array of user data, but we want to convert it just to an array of their names, pluck can do this.

const users = [{ name: "Abe", age: 45 }, { name: "Jennifer", age: 27 }];

pluck(users, 'name'); // ['Abe', 'Jennifer']
// 10. How to Insert an Element at a Certain Position
const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];
// If we want to put an element in a precise location in an array, we can use this special insert function.

// To use it, we just need to pass to insert the array we want to transform, the index where we want the element insert, and the element to insert.

// This is a great function to use instead of .splice() because it does not mutate the original array. It creates a new array with the help of the slice method, by slicing the array into two parts around the specified index and then creates a new one.

const arr = [1, 2, 4, 5];

// insert the number 3 at index 2:

insert(arr, 2, 3); // [1, 2, 3, 4, 5]


