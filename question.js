"use strict";
document.querySelector(".back").addEventListener("click", function () {
  window.location.href = "learn.html";
});
document.querySelector(".add").addEventListener("click", function () {
  document.querySelector(".options").classList.remove("hidden");
});
document.querySelector(".cancel").addEventListener("click", function () {
  document.querySelector(".options").classList.add("hidden");
});
