// console.log("Hello");
// // setTimeout() is a Asynchronous function
// setTimeout(function () {
//   console.log("This will execute after 3000 milliseconds / 3 seconds");
// },3000);
// console.log("hell02");

// pizza --> dough ---> cheese

function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("here is cheese", cheese);
    callback(cheese);
  }, 2000);
}

function makeDough(cheese, callback) {
  setTimeout(() => {
    const dough = cheese + "🍩";
    console.log("here is the dough", dough);
    callback(dough);
  }, 2000);
}
function bakePizza(dough, callback) {
    setTimeout(() => {
      const pizza = dough + "🍕";
      console.log("here is the pizza", pizza);
      callback(pizza);
    }, 2000);
  }

getCheese((cheese) => {
    makeDough(cheese,(dough) => {
         bakePizza(dough,(pizza) => {
            console.log('got my pizza',pizza);
         })
    })
});
