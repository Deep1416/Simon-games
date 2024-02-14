let h3 = document.querySelector("h3");

let box = document.querySelectorAll(".box");

let conatiner = document.querySelector(".container");

let level = 0;

let start = false;

let color = ["aqua", "blue", "yellow", "hotpink"];

let gamePressed = [];

let userPressed = [];

document.addEventListener("keypress", () => {
  if (start == false) {
    // console.log("hello");
    start = true;
    levelup();
  }
});
function buttonFlash(box) {
  box.classList.add("flash");
  setTimeout(() => {
    box.classList.remove("flash");
  }, 250);
}

function UserFlash(box) {
  box.classList.add("userflash");
  setTimeout(() => {
    box.classList.remove("flash");
  }, 250);
}

function levelup() {
  userPressed = [];
  level++;
  h3.innerText = `Level ${level}`;
  //   console.log(level);
  let btn = Math.floor(Math.random() * color.length);
  let randomColor = color[btn];
  let random = document.querySelector(`.${randomColor}`);
  // console.log(btn);
  // console.log(randomColor);
  // console.log(random);
  gamePressed.push(randomColor);
  // console.log(gamePressed);
  buttonFlash(random);
}

function checkGameColor(idx) {
  if (userPressed[idx] === gamePressed[idx]) {
    if (userPressed.length === gamePressed.length) {
      setTimeout(levelup(), 1000);
    }
    console.log("same Value");
  } else {
    h3.innerHTML = `Game Over! Your score was <b> ${level} </b><br><br>
    Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    reset();
  }
}

function btnPressed() {
  console.log("btnPresed");
  let btn = this;
  UserFlash(btn);
  userColor = btn.getAttribute("id");
  // console.log(userColor);
  userPressed.push(userColor);
  // console.log(userPressed);
  checkGameColor(userColor.length - 1);
}

for (btns of box) {
  btns.addEventListener("click", btnPressed);
}

function reset() {
  start = false;
  gamePressed = [];
  userPressed = [];
  level = 0;
}
