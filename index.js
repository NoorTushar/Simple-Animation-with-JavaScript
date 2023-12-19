const animateBox = document.querySelector(".animate-box");
const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");

let pos = 0;
let intervalId = null;
startButton.addEventListener("click", () => {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    boxMove();
  }, 10);
});

resetButton.addEventListener("click", () => {
  pos = 0;
  boxMove();
});

function boxMove() {
  pos++;
  console.log(pos);
  if (pos < 350) {
    animateBox.style.top = `${pos}px`;
    animateBox.style.left = `${pos}px`;
  } else {
    clearInterval(intervalId);
    pos = 0;
  }
}
