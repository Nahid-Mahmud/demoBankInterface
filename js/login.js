"use strict";

// submit button validation
//id : submit-btn, email, password
document.querySelector("#submit-btn").addEventListener("click", function () {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  //   console.log(password);
  if (email === "admin" && password === "password") {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Email Or Password!!")
  }
});
