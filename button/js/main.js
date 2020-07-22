"use strict";

let btn = document.getElementById("btn");

btn.addEventListener("click", rich);
function rich() {
  btn.innerHTML = "Congratulations, you are rich";
}

btn.addEventListener("dblclick", famous);
function famous() {
  btn.innerHTML = "Congratulations, you are famous";
}

btn.addEventListener("mouseleave", reset);
function reset() {
  btn.innerHTML = "Well, decide";
}

addEventListener("keypress", background);
function background() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.style.transition = "0.5s";
  document.body.style.transitionDelay = "0.5s";
}
