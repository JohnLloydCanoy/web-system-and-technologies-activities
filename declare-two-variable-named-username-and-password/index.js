const adminUsername = "Nitro";
const adminPassword = "12345";

const inputUser = prompt("Enter your username:");
const inputPass = prompt("Enter your password:");

if (inputUser === adminUsername && inputPass === adminPassword) {
    alert("Congratulations! You are Logged In");
} else {
    if (inputUser !== adminUsername && inputPass !== adminPassword) {
        alert("Error: Both username and password are incorrect.");
    } else if (inputUser !== adminUsername) {
        alert("Error: Incorrect username.");
    } else if (inputPass !== adminPassword) {
        alert("Error: Incorrect password.");
    }
}