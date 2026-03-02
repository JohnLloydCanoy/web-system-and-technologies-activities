const adminUsername = "Nitro";
const adminPassword = "12345";

const inputUsername = prompt("Enter your username:");
const inputPassword = prompt("Enter your password:");

if (inputUsername === adminUsername && inputPassword === adminPassword) {
  alert("Login successful!");
} else {
  alert("Invalid username or password. Login failed.");
}