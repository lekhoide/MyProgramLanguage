var fs = require('fs');

var song1 = fs.readFileSync('./song1.txt');
var song2 = fs.readFileSync('./song2.txt');
var song3 = fs.readFileSync('./song3.txt');

fs.readFile('./song1.txt', { encoding: 'utf-8' }, function (err, data1) {
    console.log(data1);
    fs.readFile('./song2.txt', { encoding: 'utf-8' }, function (err, data2) {
        console.log(data2);
        fs.readFile('./song3.txt', { encoding: 'utf-8' }, function (err, data3) {
            console.log(data3);
        });
    });
});

// Promise