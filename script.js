"use strict";
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
const messageQuery = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, secretNumber);
  if (!guess) {
    messageQuery("Please Input A Number!");
  } else if (guess === secretNumber) {
    messageQuery("CoNGRATULATIONS! YOU GUESSED RIGHT!!!!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageQuery(guess > secretNumber ? "TOO HIGH!" : "TOO LOW!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      messageQuery("GAME OVER MAN! YOU SUCK!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  messageQuery("Start guessing");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
