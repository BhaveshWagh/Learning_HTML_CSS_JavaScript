// ID Se search krenge: getElementById("IDname")

element.style.background = "red";

const ulTag = document.getElementById("element")
ulTag.style.backgroundColor = 'yellowgreen'

// Access by ClassName

listItem = document.getElementsByClassName("list-item")
console.log(listItem);
listItem.style.backgroundColor = 'yellowgreen'

// querySelector("") & querySelectorAll("")

let listitems = document.querySelector(".list-item")
console.log(listitems);

let listitem = document.querySelectorAll(".list-item");
console.log(listitem);

let listitems0 = document.querySelector("#element")
console.log(listitems0.textContent);

// if u want to access last element of list
// let listitems = document.querySelectorAll("ul>li:last-child");
// console.log(listitems[0]);

let listitems1 = document.querySelectorAll("ul>li:nth-child(2)");
console.log(listitems1[0]);
