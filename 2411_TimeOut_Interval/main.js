// variable
let count = 0;
let startButton = document.querySelector("#startButton");
let stopButton = document.querySelector("#stopButton");
let p = document.querySelector("p");
startButton.addEventListener("click", buttonStart);


// functions
function incrementCount() {
  count++;
  count = p.innerText; // change the counter number on the display
}

function buttonStart() {
  let intervalID = setInterval(incrementCount, 2000);
  function buttonStop() {
    clearInterval(intervalID);
  }
  stopButton.addEventListener("click", buttonStop);
}
