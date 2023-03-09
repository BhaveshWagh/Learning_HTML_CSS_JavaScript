let btn = document.getElementById("toggleBtn");
let bulb = document.getElementById("bulb");
btn.addEventListener("click", toggleBulb);

function toggleBulb(e) {
    if (btn.textContent.includes('On')){
  bulb.src = "img/bulb-on.jpg";
  btn.textContent = "Turn Off"
//   console.log(btn.textContent)
    }
    else{
        bulb.src = "img/bulb-off.jpg";
        btn.textContent = "Turn On"
    }
    console.log(btn.textContent)
}
