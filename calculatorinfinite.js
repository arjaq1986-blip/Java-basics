a=null; b=null; operation=null; //initialization of variables to use in the loop, that way we can check for "q" and exit the loop if needed. I know that this is not the most efficient way to do it, but it works and it's simple enough for a beginner to understand. I could have used a different approach, but this one is straightforward and easy to follow.
while (a != "q" && b != "q" && operation != "q") {
    alert ("to exit the program enter 'q' in any of the fields")
    let a = (prompt ("enter a number a"));
    let b = (prompt ("enter a number b"));// if not specified to treat as a number, results will not be what you might expect :D it would be a string operation
    let operation = prompt ("*. /, + or-"); // that will have to be solved smart preferably with switches - for java this input is just a string    
    if (a === "q" || b === "q" || operation === "q") {
        alert ("Exiting the program. Goodbye!");
        break; // Exit the loop if the user entered "q" in any of the fields. Otherwise we would get a java "virus" that would keep asking for input even after the user wants to exit.
    }
    else if ( !Number.isNaN(a) && !Number.isNaN(b)) {// Check if both a and b are valid numbers using Number.isNaN. If either a or b is not a number, the condition will be false and we will skip to the else block to show an error message.
    switch (operation) {
    case "+": result = a + b; alert (result); break;
    case "-": result = a - b; alert (result); break;
    case "*": result = a * b; alert (result); break;
    case "/": result = a / b; alert (result); break;
    default: result = "Error: unknown operand";
    alert (result);
    }
}//decided to use a way to save memory from storing result outside if statement
else {
     result = "Error: at least one of the entered values is not a number";
     alert (result)
}}
a=null; b=null; operation=null; result=null //that way nothing is stored after the execution