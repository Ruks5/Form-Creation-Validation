document.addEventListener("DOMContentLoaded", function () {
  // Form and Feedback Div Selection
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Form Submission Event Listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve and trim input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Initialize validation status
    let isValid = true;
    const messages = [];

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must contain '@' and '.' characters.");
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    // Feedback Display Logic
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.backgroundColor = "#d4edda"; // Light green background
      feedbackDiv.style.color = "#155724"; // Dark green text
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.backgroundColor = "#ffbaba"; // Light red background
      feedbackDiv.style.color = "#d8000c"; // Red text
    }
  });
});
