const display = document.querySelector('.counter-preview');
const allBtns = document.querySelector('#allBtns');

allBtns.addEventListener('click', counter);

let value = 0;
function counter(e) {
  const btn = e.target.id;
  if (btn === 'increment') {
    value += 1;
    // console.log("btn incr clicked");
  } else if (btn === 'decrement') {
    value -= 1;
    // console.log("btn decr clicked");

  } else {
    value = 0;
    // console.log("btn reset clicked");

}
    
  display.textContent = value;
  console.log(display);
}
