// Arrow Function :
// syntax : 1. () => expression
//          2. (para1,paraN) => expression
//          3. () => {
//                      statement...
//                   }
//          4.(para1,paraN) => {
//                                  statement
//                             }

// 1. Expression without parameter
const Hello = () => console.log("Hello, this is a arrow function is called...");
Hello();

// 2. Expression with parameter
const square = (num) => num * num;
console.log(square(2));

// 3. Statement without parameter
const Namste = () => {
    console.log("Namaste, JavaScript")
}
Namste();
// 4. Statement with parameter
const Hello_n_times = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(`Hello is printed ${n} times`);
  }
};

Hello_n_times(5)
