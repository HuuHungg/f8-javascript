const form2 = document.getElementById("formRegister");
const username2 = document.getElementById("nameregister");
const email2 = document.getElementById("emailregister");
const password2 = document.getElementById("passwordregister");
const inputs2 = document.querySelectorAll("input");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs2();
});

const setError2 = (element2, message2) => {
  const inputControl2 = element2.parentElement;
  const errorDisplay2 = inputControl2.querySelector(".error2");

  errorDisplay2.innerText = message2;
  inputControl2.classList.add("error2");
  inputControl2.classList.remove("success2");
};

const setSuccess2 = (element) => {
  const inputControl2 = element.parentElement;
  const errorDisplay2 = inputControl2.querySelector(".error2");

  errorDisplay2.innerText = "";
  inputControl2.classList.add("success2");
  inputControl2.classList.remove("error2");
};

const isValidEmail2 = (email2) => {
  const re2 =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re2.test(String(email2).toLowerCase());
};

const validateInputs2 = () => {
  const usernameValue2 = username2.value.trim();
  const emailValue2 = email2.value.trim();
  const passwordValue2 = password2.value.trim();

  if (usernameValue2 === "") {
    setError2(username2, "Username is required");
  } else {
    setSuccess2(username2);
  }

  if (emailValue2 === "") {
    setError2(email2, "Provide a valid email address");
  } else if (!isValidEmail2(emailValue2)) {
    setError2(email2, "Provide a valid email address");
  } else {
    setSuccess2(email2);
  }

  if (passwordValue2 === "") {
    setError2(password2, "Password is required");
  } else if (passwordValue2.length < 8) {
    setError2(password2, "Password must be at least 8 character");
  } else {
    setSuccess2(password2);
  }
};

inputs2.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.value.trim() === "") {
      setError2(input, "This file is required");
    } else {
      setSuccess2(input);
    }
  });
});
