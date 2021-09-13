"use strict";

const minEl = document.getElementById("mins");
const secEl = document.getElementById("secs");
const startBtn = document.getElementById("button-start");
const stopBtn = document.getElementById("button-stop");
const resettBtn = document.getElementById("button-reset");

let sec, min, timer;

const buttonContainer = document.querySelector(".buttonContainer");

buttonContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const startTimer = function () {
    const timerDisplay = function () {
      sec = String(time % 60).padStart(2, 0);
      min = String(Math.trunc(time / 60)).padStart(2, 0);
      secEl.textContent = `${(sec = sec < 60 ? sec++ : (sec = 0))}`.padStart(
        2,
        0
      );
      if (secEl.textContent === "00") {
        minEl.textContent = `${min}`.padStart(2, 0);
      }
      time++;
    };

    let time = 0;

    timerDisplay();
    const timer = setInterval(timerDisplay, 1000);

    return timer;
  };

  let time = 0;

  timer = startTimer();

  const clicked = e.target;

  if (clicked.dataset.btn === "start") {
    if (!timer) startTimer();
  }
  if (clicked.dataset.btn === "stop") {
    clearInterval(timer);
  }
  if (clicked.dataset.btn === "reset") {
    if (timer) clearInterval(timer);
    timer = startTimer();
  }
});

startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  startTimer(timer);
});

stopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (timerDisplay) clearInterval(timerDisplay);
  console.log(sec, min);
});

const stopwatchTab = document.getElementById("stopwatch");
const localTimeTab = document.getElementById("localSect");

// document.querySelector(".stopwatch").addEventListener("click", function () {
//   localTimeTab.style.opacity = 0;
//   stopwatchTab.style.opacity = 1;
// });

// document.querySelector(".localTime").addEventListener("click", function () {
//   localTimeTab.style.opacity = 1;
//   stopwatchTab.style.opacity = 0;
// });
