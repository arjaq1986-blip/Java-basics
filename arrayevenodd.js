
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

console.log("All numbers:");
for (let number of numbers) {
    console.log(number);
}// This loop iterates through each number in the 'numbers' array and prints it to the console.
console.log("Even numbers:");
for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}// This loop iterates through each number in the 'numbers' array, checks if it is even using the modulus operator, and prints it to the console if it is even.
console.log("numbers>10<60")
for (let number of numbers) {
    if (number > 10 && number < 60) {
        console.log(number);
    }
}// This loop iterates through each number in the 'numbers' array, checks if it is greater than 10 and less than 60 using logical operators, and prints it to the console if it meets the condition.