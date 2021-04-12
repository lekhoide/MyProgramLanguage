/*
    for(init;condition,final-expression){
        statements
    }

    1. init: biểu thức khởi tạo
    2. condition: biểu thức điều kiện
    3. statements: các câu lệnh
    4. final-expression: biểu thức cuối cùng / dùng để tăng biến đếm

    Keywords: for
    The loop exits when 2 is false

    Other For loops
    for...of
    for...in
*/

// Bài toán hiển thị ra màn hình 0-9

for (var i = 0; i < 10; i++) {
    console.log(i)
}

// Hiển thị tên nhân viên dùng for
var employees = [
    { name: "a", age: 20 },
    { name: "b", age: 30 },
    { name: "c", age: 40 }
]
for (var i = 0; i < 3; i++) {
    console.log("Tên nhân viên dùng for:", employees[i].name)
}
// Hiển thị tên nhân viên dùng for....of
for (var employee of employees) {
    console.log("Tên nhân viên dùng for...of:", employee.name)
}
// Hiển thị tất cả dùng for...in
var myDog = {
    weight: 5,
    name: "Tip",
    age: 9,
    bark: function () { // anonymous function
        console.log("Gâu gâu, my name is", this.name) //undefined
    },
    eat: function (bone) {
        return this.weight += bone.weight
    }
}
for (var key in myDog) {
    console.log(key, myDog[key])
}

// Câu 1: Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
// Phương pháp giải: vì dùng for of nên lấy giá trị không lấy thứ tự phần tử.
function multiply(arr) {
    var tich = 1
    for (var a of arr) {
        //tich=1 a=2 L0
        //tich=1*2=2 tich=2 a=2 L1
        //tich=2*3=6 tich=6 a=3 L2
        //tich=6*4=24 tich=24 a=6 L3 
        tich *= a
    }
    return tich
}
numbers = [1, 2, 3, 4]
console.log(multiply(numbers))

/**
 * Câu 2
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */

function sum(numbers) {
    var tong = 0
    for (var a of numbers) {
        tong += a
    }
    return tong
}
numbers = [1, 2, 3, 4]
console.log(sum(numbers))

/**
 * Câu 3
 * viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
 * Tham số:
 *  - object: object cần kiểm tra
 *  - key: key cần kiểm tra xem có tồn tại trong object không
 * Return:
 *  - true nếu có tồn tại
 *  - false nếu không tồn tại
 */

function has(object, key) {
    for (var keyObject in object)
        if (key == keyObject)
            return true;
    return false;
}

/**
 * Câu 4
 * Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
 * in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */
 var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };

function getObjectKey(obj, keys = []) {
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            keys.push(key);
            getObjectKey(obj[key], keys);
        }
        else {
            keys.push(key);
        }
    }
    return keys;
}
// result = [];
// getObjectKey(apartment, result);


