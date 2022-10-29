"use strict";
document.querySelector(".back").addEventListener("click", function () {
  document.querySelector(".menu").classList.remove("hidden");
});
document.querySelector(".quit").addEventListener("click", function () {
  window.location.href = "practice.html";
});
document.querySelector(".con").addEventListener("click", function () {
  document.querySelector(".menu").classList.add("hidden");
});
