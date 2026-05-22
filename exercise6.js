let fibbRec = function (n) {
     if (n===0) return 0
     else if (n===1) return 1
     else return fibbRec(n-2)+fibbRec(n-1)
}
console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13
