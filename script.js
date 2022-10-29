"use strict";
const logButton = document.querySelector(".login");
const logIn = function () {
  const a = document.querySelector(".email").value;
  const b = document.querySelector(".password").value;
  if (a == "xyz@gmail.com" && b == "12345") {
    window.location.href = "main.html";
  } else {
    alert("Your password or email is wrong");
  }
};
logButton.addEventListener("click", logIn);
console.log("email is xyz@gmail.com and the password is 12345");
