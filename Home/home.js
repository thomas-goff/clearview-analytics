document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Redirect to the Login page
    window.location.href = "../Login/Login.html";
  });
});
