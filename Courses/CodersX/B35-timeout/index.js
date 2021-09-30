// setTimeout
// clearTimeout
//setTimeout(fn, ms); //milliseconds
// timer

function done(){
    console.log('Finish');
}
console.log('Start');
var timeoutID = setTimeout(done, 1000);
console.log('Done');
clearTimeout(timeoutID);