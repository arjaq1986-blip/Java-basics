let add = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a+b : NaN;
let sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a-b : NaN;
let mult = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a*b : NaN;
//this is a much shorter way to write functions from the previous exercise. have to remember syntax let function=()=>logicalcheck ? result : result if false
let action = (callback, a, b) => callback(a, b); //calling back the functions 2 times to allow each of defined operations
console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN
