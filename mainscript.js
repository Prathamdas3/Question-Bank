"use strict";
const search = document.querySelector(".search");
const learn = document.querySelector(".learn");
const practice = document.querySelector(".practice");
const profile = document.querySelector(".profile");

search.addEventListener("click", function () {
  window.location.href = "Searchpage.html";
});
learn.addEventListener("click", function () {
  window.location.href = "learn.html";
});
practice.addEventListener("click", function () {
  window.location.href = "practice.html";
});
profile.addEventListener("click", function () {
  window.location.href = "profile.html";
});
