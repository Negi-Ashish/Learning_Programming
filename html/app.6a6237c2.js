// Select the form and the log list element
const loginForm = document.getElementById("loginForm");
const logList = document.getElementById("log-list");

loginForm.addEventListener("submit", function (event) {
  // 1. Prevent the default form submission (stops redirect/reload)
  event.preventDefault();

  // 2. Get the value from the username field
  const username = document.getElementById("username").value;

  // Note: We do not capture or store the password variable to ensure security.

  // 3. Trigger the alert as requested
  alert("Wrong password");

  // 4. Create a log entry for the attempt
  const timestamp = new Date().toLocaleTimeString();
  const logItem = document.createElement("li");

  // Display the attempt securely (User + Time only)
  logItem.textContent = `Attempt: ${username} at ${timestamp}`;

  // Add the new item to the list
  logList.appendChild(logItem);

  // Optional: Clear the password field for better UX
  document.getElementById("password").value = "";
});
