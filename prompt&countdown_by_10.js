let higher = parseInt(prompt("Enter a higher number: ")); // Prompt the user to enter a higher number and convert it to an integer
let lower = parseInt(prompt("Enter a lower number: ")); // Prompt the user to enter a lower number and convert it to an integer
if (higher<lower) { // Check if the higher number is actually less than the lower number
    alert("The higher number must be greater than the lower number."); // Alert the user if the input is invalid
} else {for (let i = higher; i >= lower; i -= 10) { // Loop from the higher number down to the lower number, decreasing by 10 each time
    console.log(i); // Print the current value of i to the console
    alert(i); }// Show the current value of i in an alert box
}// I decided that using if + else combined with a for loop is close to optimal way to both inform the user about invalid input and to perform the countdown by 10. The for loop allows us to easily iterate from the higher number down to the lower number, while the if statement ensures that we only proceed with the countdown if the input is valid.