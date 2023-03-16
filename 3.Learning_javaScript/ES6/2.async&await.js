// Async Js Programming
// Callbacks, Promises, Async & Await.

const datas = [
  { name: "Anuj", profession: "Software Engineer" },
  {
    name: "Ajay",
    profession: "Software Engineer",
  },
];
// console.log(datas)

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}: ${data.profession}</li>
`;
    });
    document.body.innerHTML = output;
    // console.log(output)
  }, 1000);
}

// function createdata(newdata){
//     setTimeout( ()=> {
//         datas.push(newdata);
//     },2000);
// }

// getDatas()
// createdata({name:'vivek',profession:"IT Engineer"})

// CallBack : we pass the getDatas
// function createdata(newdata, callback) {
//   setTimeout(() => {
//     datas.push(newdata);
//     callback();
//   }, 2000);
// }
// createdata({ name: "vivek", profession: "IT Engineer" }, getDatas);

// Promise : Take two function resolve and reject

function createdata(newdata) {
  // create promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("kuch sahi nahi hai..");
      }
      // callback();
    }, 2000);
  });
}
// createdata({ name: "vivek", profession: "IT Engineer" })
//   .then(getDatas)
//   .catch((err) => console.log(err));

// Async & Await
async function start(){
   await createdata({ name: "vivek", profession: "IT Engineer" })
   getDatas();
}

start();
