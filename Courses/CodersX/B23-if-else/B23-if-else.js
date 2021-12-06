// if ... else
//
// syntax:
// if (condition) {
//      statement when true;
// } else {
//      statement when false;
// }

// Todo 1: Toss a coin
function tossCoin() {
    var value = Math.random();
    if (value < 0.5) {
        console.log('Mat sap');
    } else {
        console.log('Mat ngua');
    }
}

tossCoin();

// Todo 2:
function shouldDateHer() {
    var value = Math.random();
    if (value < 0.5) {
        console.log('Yes, of course');
    } else {
        console.log('No, she has a boyfriend');
    }
}

shouldDateHer();

// Todo 3:
function countBills(bills) {
    var total = 0;
    for (var bill of bills) {
        if (!bill.fake) {
            total += bill.value;
        } else {
            console.log('fake bill', bill);
            break;
        }
    }

    return total;
}

var bills = [
    { value: 10000 },
    { value: 20000 },
    { value: 20000, fake: true },
    { value: 500000 },
]

var total = countBills(bills);
console.log(total);

// Todo 4
/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */
function max(arr) {
    // your code here
    maxNumber = 0;
    for (var i = 0; i <= (arr.length - 1); i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}

arr = [5, 6, 9];
console.log(max(arr));

// Todo 5
/**
 * Viết hàm isTruthy nhận vào 1 giá trị x, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

function isTruthy(x) {
    // your code here!
    if (!x) {
        return false;
    } else if (x === 0) {
        return false;
    } else if (x == null) {
        return false;
    } else if (x == undefined) {
        return false;
    } else if (x === '') {
        return false;
    } else {
        return true;
    }
}

isTruthy({});

// Todo 6
/**
 * Viết hàm xếp hạng điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
 function grade(score) {
    // your code here!
    if (score >= 0 && score <= 4) {
      return 'C';
    } else if (score >= 5 && score <= 6) {
      return 'B';
    } else {
      return 'A';
    }
  }

console.log(grade(6));
