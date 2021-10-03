/*
    *1. Khai báo Variable(biến):
        var a = 1

    *2. Data types
        *2.1 Primitive types:
        - Number
        - String
        - Boolean
        *2.2 Special types:
        - undefined
        - null
        *2.3 Reference types:
        - Array:
        - Object: mô tả một sản phẩm

    *3. Terms(thuật ngữ)
        Variable: biến
        Array: mảng
        Data type: kiểu dữ liệu
        Function: Hàm
*/

// Number
var num1 = -100;
var num2 = 0.5;

// String
var str1 = 'Hello, world.';
var str2 = "Hello, world.";
console.log(str2)
// Escape a character
var str3 = 'Hello I\'m Đệ'

// Boolean(True,False)
var isHidden = false;
console.log(isHidden);

//undefined
var a;
a = 100;

//null
a = null
console.log(a)

//object
var obj = {
    name: 'Tip',
    weight: 5.2,
    isAlive: false
};

var myFriend = {
    nickName: 'CCXH',
    age: 22,
    gender: 'female'
};
    
//Truy xuất
obj.weight = 10;
obj['isAlive'] = true;
console.log(obj);

// Tương tự myFriend.nickName
console.log(myFriend['nickName']);

//array
//terms: array,element(thành phần trong mảng),index(chỉ số trong mảng),length(chiều dài của mảng)

var dog = {
    name:"Pip",
    type:'chó'
};

var birth = {
    type:'chim'
};

var cat = {
    type:'mèo'
};

var cuaHang = [ dog, birth, cat ];
console.log(cuaHang[0].name)

var puppy = {
    name:"Tip"
};
cuaHang[0] = puppy;
console.log(cuaHang[0].name);