document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".login"); // Fix selector to target class
  console.log("login", loginButton);
  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value; // Use .value to get input value
    const password = document.getElementById("password").value; // Use .value to get input value

    // Check if username and password match the credentials
    if (username === "admin" && password === "password") {
      console.log("accepted");
      window.location.href = "../Dashboard/dashboard.html";
    } else {
      alert("Incorrect username or password. Please try again."); // Inform user about incorrect credentials
    }
  });
});
