// Todo 1: Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str) {
    // viết code ở đây.
    // ! Cách 1
    // var splitString = str.split(""); // ["a", "b", "c"]
    // var reverseArray = splitString.reverse(); // ["c", "b", "a"]
    // var joinArray = reverseArray.join(""); // "cba"
    // return joinArray;

    // return str.split("").reverse().join("");

    // ! Cách 2
    // var newString = "";
    // for (var i = str.length - 1 ; i >= 0 ; i--) {
    //     newString += str[i];
    // }
    // return newString;

    // ! Cách 3
    // if (str === "") {
    //     return "";
    // } else {
    //     return reverse(str.substr(1)) + str.charAt(0);
    // }

    return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
}

// console.log(reverse(''));

// Todo 2: Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
    // viết code ở đây
    // !Cách 1
    // var arrStr = str.split('');
    // for(var i = 0 ; i < arrStr.length ; i++) {
    //     if (arrStr[i - 1] === ' ' || i === 0) {
    //         arrStr[i] = arrStr[i].toUpperCase();
    //     }
    // }
    // return arrStr.join('');

    // !Cách 2
    var splitStr = str.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
    }
    return splitStr.join(' ');
}

// console.log(capitalize('le khoi de'));

// Todo 3: Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {
    // viết code ở đây.
    var path = require('path');
    return path.extname(filename).slice(1);
}

// console.log(getExtensionFilename('D:/Projects/MyProgramLanguage/Courses/CodersX/B40-on-tap/bensound-memories.mp3'));

// Todo 4: viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c) {
    // viết code ở đây.
    // !Cách 1
    // if (a > b) {
    //     if (a > c) {
    //         return a;
    //     } else {
    //         return c;
    //     }
    // } else {
    //     if (b > c) {
    //         return b;
    //     } else {
    //         return c;
    //     }
    // }

    // !Cách 2
    return Math.max(a, b, c);
}

// console.log(findMax(4,3,12));

// Todo 5: viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str) {
    // viết code ở đây.
    // !Cách 1
    return (str.slice(0, 4) === 'Java') ? true : false;
    // !Cách 2
    // return (str.substring(0,4) === 'Java') ? true : false;
}

// console.log(startWith('Javascript'));

// Todo 6:
/*
  - Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
    // viết code ở đây.
    var numberMaxDiff = 0;
    for (var i = 0; i < arr.length; i++) {
        var checkMaxDiff = Math.abs(arr[i] - arr[i + 1]);
        if (checkMaxDiff > numberMaxDiff) {
            numberMaxDiff = checkMaxDiff;
        }
    }
    return numberMaxDiff;
}

// arr = [1, -10, 5, 18, -9, 5]
// console.log(findMaxDiff(arr));

// Todo 7
//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str) {
    // viết code ở đây.
    var splitStr = str.toLowerCase().split('');
    var countP = 0;
    var countT = 0;
    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === 'p') {
            countP++;
        } else if (splitStr[i] === 't') {
            countT++;
        }
    }
    return (countP === countT) ? true : false;

}

// console.log(equal_pt('paatpss'));

// Todo 8
// viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n) {
    // viết code ở đây.
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (n <= 0) {
            newArr = [];
            break;
        } else if (n < array.length && n !== i) {
            newArr.push(array[i]);
        } else if (n === undefined) {
            newArr.push(array[0]);
            break;
        } else if (n > array.length) {
            newArr = array;
            break;
        }
    }
    return newArr;
}

// var arr = [7, 9, 0, -2];
// console.log(first(arr, 6))

// Todo 9: Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

function omitCharAt(str, n) {
    // viết code ở đây.
    var splitStr = str.split('');
    for (var i = 0; i < splitStr.length; i++) {
        if (i === n) {
            var pos = splitStr.indexOf(splitStr[i]);
            splitStr.splice(pos, 1);
        }
    }
    return splitStr.join('');
}

// console.log(omitCharAt('abcd',2));

// Todo 10: Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b) {
    // viết code ở đây.
    var checkA = Math.abs(a - 100);
    var checkB = Math.abs(b - 100);
    if (checkA < checkB) {
        return a;
    } else {
        return b;
    }
}

// console.log(nearestTo100(89, 180));

// Todo 11
/* Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
  Nếu có 1 số âm và một số dương thì trả về true. 
  Các trường hợp khác trả về false. 
  Số 0 là số không âm cũng không dương
  Tham số:
  - number1: số nguyên thứ nhất
  - number2: số nguyên thứ hai
*/

// *a ^ b =
//  0 ^ 0 = 0
//  0 ^ 1 = 1
//  1 ^ 0 = 1
//  1 ^ 1 = 0

function checkInt(number1, number2) {
    // viết code ở đây.
    if (Math.sign(number1) ^ Math.sign(number2)) {
        return true;
    } else {
        return false;
    }
}

// console.log(checkInt(2, 6));

// Todo 12
/*
Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
Example: 
n = 20 // return 14
n = 5 // return 8

*/
function difference(n) {
    // viết code ở đây.
    if (n > 13) {
        return Math.abs(n - 13) * 2;
    } else {
        return Math.abs(13 - n);
    }
}

// console.log(difference(19));

// Todo 13
/* Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
*/

function pyString(String) {
    // viết code ở đây.
    var splitStr = String.split('');

    for (var i = 0; i < splitStr.length; i++) {
        if (splitStr[i] === 'P' && splitStr[i + 1] === 'y') {
            break;
        } else {
            splitStr.unshift('y');
            splitStr.unshift('P');
            break;
        }
    }
    return splitStr.join('');
}

// console.log(pyString('Coders X'));

// Todo 14
/* Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
* // Tham số:
* // - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    // viết code ở đây.
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    var originStr = str.split('');
    var splitStr = str.toLowerCase().split('');

    var numberStrLength = splitStr.length;
    var checkUpperCase = false;

    for (var i = 0; i < originStr.length; i++) {
        if (originStr[i] == originStr[i].toUpperCase()) {
            checkUpperCase = true;
            break;
        }
    }

    do {
        var i = 0;
        for (var j = 0; j < alphabet.length; j++) {
            if (alphabet[j] == splitStr[i] && i < numberStrLength) {
                splitStr.push(alphabet[j + 1]);
                ++i;
                j = 0;
            }
        }
        splitStr.splice(0, (splitStr.length - numberStrLength));
    } while (i < numberStrLength)

    var joinStr = splitStr.join('');

    if (checkUpperCase === false) {
        return joinStr;
    } else {
        return joinStr.charAt(0).toUpperCase() + joinStr.slice(1);
    }
}

// console.log(toNextChar('abc'));

// Todo 15: viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n) {
    // viết code ở đây.
    var splitStr = str.split('');
    var newStr = [];

    for (var i = splitStr.length - 1; i >= 0; i--) {

        /**
         * i = 9 ; i >= 0 ; i-- || 5
         * i = 8 ; i >= 0 ; i-- || 4
         * i = 7 ; i >= 0 ; i-- || d
         * i = 6 ; i >= 0 ; i-- || h
         * i = 5 ; i >= 0 ; i-- || y
         * i = 4 ; i >= 0 ; i-- || 5
         * i = 4 ; i >= 0 ; i-- || g
         * i = 3 ; i >= 0 ; i-- || y
         * i = 2 ; i >= 0 ; i-- || w
         * i = 1 ; i >= 0 ; i-- || 1
         */
        if (i > splitStr.length - (n + 1)) {
            console.log(splitStr[i])
            newStr.unshift(splitStr[i]);
        } else if (i < n) {
            console.log(splitStr[i])
            newStr.unshift(splitStr[i]);
        }
    }
    return newStr.join('');
}

// console.log(newString("1wyg5yhd45", 2));

// Todo 16
/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
    // write code here.
    var newArr = [];
    for (var i = 0; i < arr.length; i += size) {
        var sliceArr = arr.slice(i, i + size);
        newArr.push(sliceArr);
    }
    return newArr;
}

// var arr = ["a", "b", "c", "d", "e"];
// console.log(chunkArrayInGroups(arr, 2));

// Todo 17
/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
function maxOfSumChain(arr, k) {
    // write code here.
    var newArr = [];
    var countK = 0;
    /**
     * Điều kiện 1: Trả về tổng lớn nhất
     * Điều kiện 2: Và chỉ tính trong phạm vi k, nghĩa là k = 2 thì lấy 2 giá trị trong mảng để tính tổng lớn nhất
     */

    do {
        var max = arr.reduce(function (a, b) {
            return Math.max(a, b);
        }, 0);
        newArr.push(max);

        var pos = arr.indexOf(max);
        arr.splice(pos, 1);

        countK++;
    } while (countK !== k)

    var sumArr = newArr.reduce(function (a, b) {
        return a + b;
    }, 0);

    return sumArr;
}

// var arr = [1, 3, 2, 6, 2];
// console.log(maxOfSumChain(arr, 3));

// Todo 18
/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    // Viết code tại đây!

    var newArr = [];
    var countArr = 0;
    var countMax = 0;

    var ascArr = arr.sort(function (a, b) {
        return a - b;
    });

    /**
     * [1,2,3,4,1,2,2,1]
     * sort = [1,1,1,2,2,2,3,4]
     * 
     * i = 0 1 == 1 countArr = 1
     * i = 1 1 == 1 countArr = 2
     * i = 2 1 == 1 countArr = 3
     * i = 3 1 != 2 countArr = 3 > countMax = 0 || countMax = 3 newArr = 
     */

    for (var i = 0; i < ascArr.length; i++) {
        if (ascArr[i] == ascArr[i + 1]) {
            ++countArr;
        } else {
            if (countArr > countMax) {
                countMax = countArr;
            }
            countArr = 0;
        }
    }

    for (var i = 0; i < ascArr.length; i++) {
        if (ascArr[i] == ascArr[i + 1]) {
            countArr++;
        } else {
            if (countArr == countMax) {
                newArr.push(ascArr[i]);
            }
            countArr = 0;
        }
    }

    return newArr;
}

// var arr = [1, 2, 3, 4, 1, 2, 2, 1]
// console.log(findMostFrequent(arr));

// Todo 19
/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
    // Viết code tại đây!
    var str1 = str1.split('');
    var str2 = str2.split('');

    /** 
     *  TH1
     *  i       j
     *  a   !=  c
     *  a   !=  b
     *  a   ==  a
     *  i++
     *  b   !=  c
     *  b   ==  b
     *  i++
     *  c   ==  c
     *  return true
     * 
     *  TH2
     *  i       j
     *  a   !=  c
     *  a   !=  b
     *  a   ==  a
     *  i++
     *  b   !=  c
     *  b   !=  c   
     *  b   !=  a
     *  return false
     */
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            if (str1[i] !== str2[j]) {
                if (j == str2.length - 1) {
                    return false;
                }
            } else if (str1[i] == str2[j]) {
                if (i == str1.length - 1) {
                    return true;
                }
                break;
            }
        }
    }
}

// console.log(rearrangeChar('abc','cba'));

// Todo 20
/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr) {
    // Viết code tại đây
    var maxArr = arr.reduce(function(a, b){
        return Math.max(a, b);
    });

    var minArr = arr.reduce(function(a,b){
        return Math.min(a, b);
    })

    return maxArr - minArr;
}

var arr = [1, 2, 3, 8, 9];

console.log(findmaxDiff(arr));