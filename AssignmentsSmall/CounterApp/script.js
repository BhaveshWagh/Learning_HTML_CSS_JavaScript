let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
let reset = document.querySelector("#reset")

add.addEventListener("click", addition);
subract.addEventListener("click", substract);
reset.addEventListener('click',res)

function res(e){
    let output = document.querySelector("#output");
    output.innerText =  0;
// console.log(output)

}

function addition(e) {
  let output = document.querySelector("#output");
  let result = Number(output.textContent) + 1;

  // console.log("button clicked")
  
  if (result > 10) {
    result = 0;
  }
  output.innerText = result;
}

function substract(e) {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;
  if (result < 0) {
    result = 0;
  }
  output.innerText = result;
}

// console.log(add,subract)
