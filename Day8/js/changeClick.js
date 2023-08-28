// JS sự kiện click
let btn = document.querySelector(".btn-click");
let modalText = document.querySelector(".modal-text");
let overLay = document.querySelector(".over-lay");

btn.addEventListener("click", function () {
  modalText.classList.add("show");
});
overLay.addEventListener("click", function () {
  modalText.classList.remove("show");
});

// When click button, Sử dụng Style
const loginBtn = document.querySelector(".login");
const registerButton = document.querySelector(".register");
const loginForm = document.querySelector(".file-login");
const registerForm = document.querySelector(".file-register");

// Set the "Login" button as active by default;
loginBtn.classList.add("active");

loginBtn.addEventListener("click", function () {
  loginForm.style.display = "block";
  registerForm.style.display = "none";

  loginBtn.classList.add("active");
  registerButton.classList.remove("active");
});

registerButton.addEventListener("click", function () {
  loginForm.style.display = "none";
  registerForm.style.display = "block";

  loginBtn.classList.remove("active");
  registerButton.classList.add("active");
});
