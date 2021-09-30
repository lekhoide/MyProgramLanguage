// Sync vs Async (Synchoronous vs Asynchronous)
/**
 * ? Sync
 * Make coffee -> 5 minutes
 * Wear clothes
 * Making bed
 * |-----------------|--------------|------------|-------->
 * Make coffee      Coffee done     Wear done   Done
 *                  Wear clothes    Make bed
 * ? Async
 * |-----------------|--------------|------------|-------->
 * Make coffee      Wear clothes    Make bed   Done
 */

// Todo Sync
// var fs = require('fs');
// console.log('Start');
// var song1 = fs.readFileSync('./song-1.txt', {encoding: 'utf-8'});
// console.log(song1);
// var song2 = fs.readFileSync('./song-2.txt', {encoding: 'utf-8'});
// console.log(song2);
// console.log('End');

// Todo Async
// console.log('Start');
// fs.readFile('./song-1.txt', {encoding: 'utf-8'}, function(err, data) {
//     console.log(data);
// });
// console.log('End');

// Read/Write to FS
// Network