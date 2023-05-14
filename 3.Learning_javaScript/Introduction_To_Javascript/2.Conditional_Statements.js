// Ternary Operator
const mark = 50;
const result = mark >= 40 ? "PASSED" : "FAILED";
console.log(result);

// if else:
const age = 80;

if (age >= 18) {
  console.log("Your eligible to vote");
  if (age >= 60) {
    console.log("You can Vote again");
  }
} else {
  console.log("Your not eligible to vote");
}

console.log("This will executes always");
// Multiple if else if else:
const marks = 50;

if (marks >= 90) {
  console.log("Grade : A+");
} else if (marks >= 80) {
  console.log("Grade : B+");
} else if (marks >= 70) {
  console.log("Grade : C+");
} else if (marks >= 60) {
  console.log("Grade : C");
} else {
  console.log("Grade : Fail");
}
