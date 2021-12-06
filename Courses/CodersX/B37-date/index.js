// Date
// moment.js

// var now = new Date();
// var myBirthday = new Date(1990, 4, 17); // 17-5-1990

// number of millisenconds from 1-1-1970 +7 +9
// console.log(now.getTime());
// console.log(myBirthday.getTime());

// var moment = require('moment');
// var now = moment('2018-07-12');
// console.log(now.format('YYYY/MM/DD'));


// Todo 1
/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
    // Write code here...
    var result = new Date(dateString);
    var checkWeekend = result.getDay();
    if (checkWeekend == 0 || checkWeekend == 6) {
        return true;
    } else {
        return false;
    }
}

// console.log(isWeekend('2019/10/27'));

// Todo 2
/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */

var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');

function diff(fromDate, toDate) {
    // Write code here...
    return toDate.getDate() - fromDate.getDate();
}

//  console.log(diff(fromDate, toDate));


// Todo 3
/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ 
 * cách ngày được truyền vào n ngày
 */

var date = new Date("06/10/2019")

function subtractDays(date, n) {
    // Write code here...
    var day = date.getDate() - n;
    var month = date.getMonth();
    var year = date.getFullYear();
    var result = new Date(year, month, day);
    return result.getTime();
}

// console.log(subtractDays(date, 5));

// Todo 4
/**
* Tính số ms chênh lệch giữa date b và date a
*/

function diffMs(a, b) {
    // viết code ở đây
    var dayA = new Date(a);
    var dayB = new Date(b);
    var result = dayB - dayA;
    return result;
}

console.log(diffMs("02/10/2019", "10/10/2019"))