"use strict";
const search = document.querySelector(".search");
const learn = document.querySelector(".learn");
const practice = document.querySelector(".practice");
const profile = document.querySelector(".profile");

search.addEventListener("click", function () {
  document.querySelector(".behind").classList.remove("hidden");
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".behind").classList.add("hidden");
});

learn.addEventListener("click", function () {
  window.location.href = "learn.html";
});
practice.addEventListener("click", function () {
  window.location.href = "practice.html";
});
profile.addEventListener("click", function () {
  document.querySelector(".profilepage").classList.remove("hide");
});
document.querySelector(".profile1").addEventListener("click", function () {
  document.querySelector(".profilepage").classList.add("hide");
});
document.querySelector(".logout").addEventListener("click", function () {
  window.location.href = "index.html";
});
