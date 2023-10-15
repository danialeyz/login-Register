//register form main variables
const buttonTransform = document.querySelector(".btn-outline-light");
const cover = document.querySelector(".cover");
const signUpBtn = document.querySelector(".signUp-button");
let userName;
let EmailUser;
let passwordUser;
//login form main variables

let email;
let pass;
const signInBtn = document.querySelector(".signin-button");

buttonTransform.addEventListener("click", transform);
signUpBtn.addEventListener("click", saveInfo);
signInBtn.addEventListener("click", signIn);

// forms cover tranformation function
function transform() {
  cover.style.transform = "translate(-100%)";
  cover.children[0].innerText = "Welcome !";
  cover.children[1].innerText =
    "to keep conntected with us please login with your personal info";

  if (cover.children[2].innerText == "LOG IN") {
    cover.style.transform = "translate(0%)";
    cover.children[0].innerText = "Hello, Friend!";
    cover.children[1].innerText =
      "Enter your personal details and start journey with us";
    cover.children[2].innerText = "SING UP";
  } else {
    cover.children[2].innerText = "LOG IN";
  }
}

// Sign up form function (saving , validating , ...)
function saveInfo() {
  userName = document.querySelector(".userName").value;
  EmailUser = document.querySelector(".EmailUser").value;
  passwordUser = document.querySelector(".passwordUser").value;
  if (userName.trim() == "") alert("Please enter your Username!!!");
  else if (EmailUser.trim() == "") alert("Please enter your Email");
  else if (passwordUser.trim() == "") alert("Please enter password");
  else if (
    EmailUser.search(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) == 0
  ) {
    const dataUser = {
      userName,
      EmailUser,
      passwordUser,
    };
    savelocalStorage(dataUser);
    alert("wellcome to our website");
    document.querySelector(".userName").value = "";
    EmailUser = document.querySelector(".EmailUser").value = "";
    passwordUser = document.querySelector(".passwordUser").value = "";
  } else {
    alert("your Email is invalid!!");
  }
}

// !signin form validation function
function signIn() {
  email = document.querySelector(".email");
  pass = document.querySelector(".password").value;
  if (email.value.trim() == "") alert("Please enter your Email");
  else if (pass.trim() == "") alert("Please enter password");
  else if (
    email.value.search(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) == 0
  ) {
    let data = localStorage.getItem("Users")
      ? JSON.parse(localStorage.getItem("Users"))
      : [];
    const findUser = data.filter((i) => email.value === i.EmailUser);
    if (findUser.length > 0) {
      if (pass === findUser[0].passwordUser) {
        alert(`welcome ${findUser[0].userName}`);
      } else {
        alert("incorrect password");
      }
    } else {
      alert("incorrect Email");
    }
  } else {
    alert("invalid Email");
  }
}

// !localstorage data saver function
function savelocalStorage(data) {
  let saveInfo = localStorage.getItem("Users")
    ? JSON.parse(localStorage.getItem("Users"))
    : [];
  saveInfo.push(data);
  localStorage.setItem("Users", JSON.stringify(saveInfo));
}
