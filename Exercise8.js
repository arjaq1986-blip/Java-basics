// if not using console.log.bind:
//function shownum(num) {
//    console.log(num);
//}

// main loop
function counting() {
    for (let n = 1; n <= 10; n++) {
        // planing a growing 2 second delay with each number (1 after 2 sec, 2 after 2*2=4sec... 10 after 2*10=20 sec)
        setTimeout(console.log.bind(console, n), 2000 * n);
    }
}

// making loop execute one time
counting();
