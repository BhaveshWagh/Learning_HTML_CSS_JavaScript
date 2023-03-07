// How to Access Root Node
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// How to access any Childrens

console.log(document.body.childNodes);
console.log(document.body.children);
for (node of document.body.children) {
  console.log(document.body.children);
}
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.firstElementChild);
console.log(document.body.firstChild);
// using Array:

const ChildrensofBody = Array.from(document.body.children);
console.log(ChildrensofBody);

// Siblings
// there are two properties 1. nextElementSibling, 2. prevElementSibling

const ulTag1 = document.body.children[0];
console.log(ulTag1);
const firstli = ulTag1.children[0];
const thirdli = ulTag1.children[2];

console.log(firstli.textContent);
console.log(thirdli);
console.log(thirdli.previousElementSibling.textContent);

// Table DOM Manipulation
const tableTag = document.body.children[1];
console.log(tableTag.tBodies[0].rows[0].cells[1].textContent);
// how to style ?
console.log(
  (tableTag.tBodies[0].rows[0].cells[0].style = "background-color:green;")
);

// ID Se search krenge: getElementById("IDname")

element.style.background = "red";

const ulTag = document.getElementById("element");
ulTag.style.backgroundColor = "yellowgreen";

// Access by ClassName

// let listItem = document.getElementsByClassName("list-item")
// console.log(listItem);
// listItem.style.backgroundColor = 'yellowgreen'

// querySelector("") & querySelectorAll("")

let listitems = document.querySelector(".list-item");
console.log(listitems);

let listitem = document.querySelectorAll(".list-item");
console.log(listitem);

let listitems0 = document.querySelector("#element");
console.log(listitems0.textContent);

// if u want to access last element of list
// let listitems = document.querySelectorAll("ul>li:last-child");
// console.log(listitems[0]);

let listitems1 = document.querySelectorAll("ul>li:nth-child(2)");
console.log(listitems1[0]);

// With the help of getAttribute method u can access user define attributes, also u set/update the attribute, removeAttribute and hasAttribute returns Boolean(True/false) values.
console.log(element.getAttribute("data"));
const setvalue = element.setAttribute("order-placed", "pending");
console.log(element.removeAttribute("order-placed"));
console.log(element.hasAttribute("order-placed"));
console.log(element.attributes);

// // creating and removing node element
let newDiv = document.createElement("div");
// newDiv.textContent = "Namaste JavasCript"
newDiv.innerHTML = `<ul id="element" data = "valid">
<li class="list-item">1-element</li>
<li class="list-item">2-element</li>
<li class="list-item">3-element</li>
</ul>`;
body.append(newDiv);

const newText = document.createTextNode("Namaste JavaScript");

newDiv.appendChild(newText);

body.prepend(newDiv);
body.before(newDiv);
body.after(newDiv);
firstDiv.remove(newDiv);
firstDiv.replaceWith(newDiv);
