let n = 1;
let time = setInterval(function () {
    console.log(n++);//making the number grow by 1 in the simplest way each instance
}, 2000); //setting the interval between each number
setTimeout(function () {
    clearInterval(time)
}, 20000); //2000*10
