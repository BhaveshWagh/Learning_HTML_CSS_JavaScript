// for loop
// syntax :
//  for(initialization; condition; increment/decrement){
//      body of for
// }

for (let i = 1; i <= 10; i += 2) {
  console.log("Bhavesh", i);
}

// ****imp For loop vs while loop when we use which one:
// for loop usually used when the number of iteration are known.
// while loop & do while are used when the number of iterations are unknown.

// while loop
let step2 = 1;
while (step2 <= 10) {
  console.log("step", step2);
  // step++;
  step2 += 1;
}

// do while
// While loop and do while loop are similar, the only differnce is that in do..while loop the body of loop is executes at least once,It doesn't matter the condition is true or false it execute at least once...

let step = 0;

do {
  console.log("step", step);
  step += 1;
} while (step < 5);

// break & continue:
// The break statement is usually used to terminate the loop immediately when it is encountered.
// The continue statement is used to skip the current iteration of the loop & the control flow of the program goes to the next iteration.

let steps = 0;

do {
  steps += 1;
  if (steps == 2) {
    // break;
    continue;
  }
  console.log("step", steps);
} while (steps < 5);
