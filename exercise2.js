let a = Number (prompt ("enter a number a"));
let b = Number (prompt ("enter a number b"));// if not specified to treat as a number, results will not be what you might expect :D it would be a string operation
let operation = prompt ("*. /, + or-"); // that will have to be solved smart preferably with switches - for java this input is just a string
if ( !Number.isNaN(a) && !Number.isNaN(b)) {
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
}
a=null; b=null //that way nothing is stored after the execution