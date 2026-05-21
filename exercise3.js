let add = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a+b : NaN;
let sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a-b : NaN;
let mult = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a*b : NaN;
//this is a much shorter way to write functions from the previous exercise. have to remember syntax let function=()=>logicalcheck ? result : result if false
console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
console.log(sub(1, 1));// ->0
