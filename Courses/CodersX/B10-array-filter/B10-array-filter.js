//array.filter: lọc
/*
    arr.filter(function(item){
        //filter
        return newValue; //true or false
    });
*/

var numbers = [1, 2, 3, 4];
var evenNumbers = numbers.filter(function (x) {
    return x % 2 === 0;
});

// console.log(evenNumbers);

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    var a = arr.filter(function (x) {
        return x >= 5;
    });
    return a;
}

// arrs = [3, 6, 8, 2];
// console.log(fiveAndGreaterOnly(arrs));


// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    var a = arr.filter(function (x) {
        return x % 2 === 0;
    });
    return a;
}

// arr = [1, 5, 5];
// console.log(evensOnly(arr));


/**
 * Give a list of students, filter out non-female 
 * Trả về các giá trị là True thì lấy
 * Đầu ra là mảng
 */

var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];

for (var i = 0; i < members.length; i++) {
    if (members[i].gender != 'female') {
        console.log(members[i]);
    }
}

function filterOutFemales(members) {
    var a = members.filter(function(x){
        return x.gender != 'female';
    })
    return a;
}

console.log(filterOutFemales(members));