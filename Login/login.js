document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Your login functionality goes here
  });
});

//Need to do
// 1. Create Api to pull login data
// 2. if password is incorrect add forgot password link.
// 3. add register button.
