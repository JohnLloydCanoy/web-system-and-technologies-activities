const adminUsername = "Nitro";
const adminPassword = "12345";

const inputUsername = prompt("Enter your username:");
const inputPassword = prompt("Enter your password:");

if (inputUser === username && inputPass === password) {
    alert("Congratulations! You are Logged In");
} else {
    if (inputUser !== username && inputPass !== password) {
        alert("Error: Both username and password are incorrect.");
    } else if (inputUser !== username) {
        alert("Error: Incorrect username.");
    } else if (inputPass !== password) {
        alert("Error: Incorrect password.");
    }
}