// while, do ... while loops
//
// Syntax
//
// while (condition) {
//      do something
// }

// Syntax
// do {
//      do something
// } while(condition)

// Todo 1
// for(var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// var i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     ++i;
// } while(i <= 10)

// Todo 2
/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
    // viết code ở đây.
    var count = 0;
    var result = 0;
    while (count < x) {
        if (count % 2 !== 0) {
            result += count;
        }
        ++count;
    }
    return result;
}

// var result = sum(50);
// console.log(result);

// Todo 3
/**
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */

function maxCommonMultiple(a, b) {
    var count = 0;
    var maxNumber = 0;
    while (count <= 1000) {
        if (count % a == 0 && count % b == 0) {
            maxNumber = count;
        }
        ++count;
    }
    return maxNumber;
}

// var result = maxCommonMultiple(3,5);
// console.log(result);


// Todo 4
/**
 * Thử chạy code sau
 */

var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');

var result = readline.question('Nhap pass: ');
console.log('Pass vua nhap: %s',result);

/**
 * Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
 */
function checkPass(a, b) {
    var loop = false;
    while (loop == false) {
        if (a === b) {
            console.log("Welcome!");
            loop = true;
        } else {
            console.log("Wrong password");
            b = readline.question('Nhap lai pass: ');
            console.log('Pass vua nhap: %s',b);
        }
    }
}

checkPass(secretPassword, result);

