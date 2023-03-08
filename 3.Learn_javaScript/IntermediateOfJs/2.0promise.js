// How to create Promise use following syntax:
// const varName = new Promise(function(resolve,reject){ write here your logic}); 
const ticket = new Promise(function (resolve, reject) {
  const isBoarded = false;
  if (isBoarded) {
    resolve("You are not in the Flight");
  } else {
    reject("Your flight is cancelled");
  }
});

// Use promise 

ticket
.then((data) => {
    console.log('wohoo',data)
})
.catch( (data) => {
    console.log('o no',data);
})
.finally(()=>{
    console.log('I will always executed!')
})

// But the above promise code is traditional (synchronous) in nature
