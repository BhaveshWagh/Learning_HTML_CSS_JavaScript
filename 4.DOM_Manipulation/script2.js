// Modifying Elements :
const box1 = document.getElementById("box-1");
// box1.innerHTML = "Hello"
// box1.innerHTML = "<h1>Hello</h1>"

// changing Attribute
box1.style.backgroundColor = "cyan"
box1.classList.add('round-border')

const boxes = document.getElementsByClassName("box")

for(let i = 0; i < boxes.length; i++){
    boxes[i].classList.add('round-border')
}

box1.classList.remove('round-border')

// creating and appending html element

const newPara = document.createElement('p')
newPara.innerText = " New para hello"
newPara.classList.add('box')
const container = document.getElementById("container")
container.appendChild(newPara)

// const myBody = document.body;
// console.log(myBody);

// const getbox1 = document.getElementById("box-1");
// console.log(getbox1);

// const div = document.getElementsByTagName("div");
// console.log(div);

// const getEleByClass = document.getElementsByClassName("box");
// console.log(getEleByClass);

// const random = document.querySelector('.container .random')
// console.log(random)

// 