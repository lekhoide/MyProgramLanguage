// setInterval
// clearInterval
// setInterval(fn, ms);

// var i = 0;
// var intervalId = setInterval(function() {
//     ++i;
//     console.log(i);
//     if(i === 10) {
//         clearInterval(intervalId);
//     }
// }, 1000);

// Write a function count from 1 to 10
// return a promise

function countFrom(a, b) {
    return new Promise(function(resolve) {
        var stop = setInterval(function() {
            console.log(a);
            if (a >= b) {
                clearInterval(stop);
                resolve();
            } else {
                a++;
            }
        } ,1000);
    })
}

countFrom(1, 10).then(function() {
    console.log('Done');
});