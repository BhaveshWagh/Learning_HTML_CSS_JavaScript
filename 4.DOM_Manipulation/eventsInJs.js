// Here I refer Anuj Bhaiyy's Playlist Complete Web Development course
// Events Listners and Handlers in javascript lect No : #47
function handleClick() {
  console.log("Clicked!");
}
// Arrow Function
// MouseEvents
const onMouseOver = () => console.log("onMouseOver");
const onMouseMove = () => console.log("onMouseMove");

// KeyEvents
const onKeyPress = () => console.log("onKeyPress");
const onKeyDown = () => console.log("onKeyDown");

// Event Listeners
const box1 = document.getElementById("box-1");
box1.addEventListener("click", () => console.log("clicked!"));
// box1.addEventListener("mouseover", () => console.log("mouseover!"));
// box1.addEventListener("mousemove", () => console.log("mousemove!"));

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener("keypress", (e) => console.log(e));
nameInput.addEventListener("keydown", (e) => console.log(e.key));
nameInput.addEventListener("keyup", (e) => console.log(e.key));

// Bubbling And Caputer :
// Event Propagation is a way of defining the element order when an event occur

// Bubbling : In bubbling the innerMost elements event is handled first then the outer.
// Capture : In capture the outerMost element event is handled first then the inner.

// By is Bubbling behaviour happens which is false, sytax :
// addEventListener(event, function, true)


// Bubbling :
// const box2 = document.getElementById("box-2");
// box2.addEventListener("click", () => console.log("button clicked"));

// const container = document.getElementById('container')
// container.addEventListener('click',() => console.log('Container called'))

// Output : button clicked
//          Container called

// Capture :

const box3 = document.getElementById("box-3");
box3.addEventListener("click", () => console.log("button clicked"));

const container1 = document.getElementById('container')
container1.addEventListener('click',() => console.log('Container called'),true)

// Output : Container called
//          button clicked