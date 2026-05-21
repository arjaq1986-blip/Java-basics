function add(a,b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a+b
    }
    else 
    {return NaN}
}
function mult(a,b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a*b
    }
    else 
    {return NaN}
}
function sub(a,b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a-b
    }
    else 
    {return NaN}
} //basically the skeleton of each function is the same, only the return part differs
console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
console.log(sub(1, 1));// ->0
