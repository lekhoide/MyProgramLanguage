/*
    Map: ánh xạ, biến đổi tập hợp phần tử mới

    arr.map(function(item){
        //transform
        return newValue
    })
*/

var numbers = [1, 2, 3, 4]
var squaredNumbers = numbers.map(function (x) {
    return x * x;
});

// console.log(squaredNumbers);

//Bài tập
var rectangles = [
    { width: 10, height: 5 },
    { width: 10, height: 20 },
    { width: 4, height: 16 },
]
//Dùng map method để biến đổi rectangles thành 1 array mới gồm có diện tích các hình trên

var dienTich = rectangles.map(function (x) {
    return (x.width * x.height);
});

// console.log(dienTich)

/**
 * Câu 1:
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

//  tripple(3)
//  9
// multiply([10, 5, 8])
// [30, 15, 24]

function tripple(num) {
    return (num * 3);
}

function multiply(numbers) {
    return numbers.map(x => tripple(x));
}

// numbers = 5;
// arr = [10,5,8];
// console.log(tripple(numbers));
// console.log(multiply(arr));

// Use array map make an array of strings of the names

var users1 = [
    {
        name: "Angelina Jolie",
        age: 80

    },
    {
        name: "Eric Jones",
        age: 2

    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16

    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

function namesOnly(arr) {
    return arr.map(x => x.name)
}

// console.log(namesOnly(users))


// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

const users = [
    {
        name: "Angelina Jolie",
        age: 80

    },
    {
        name: "Eric Jones",
        age: 2

    },
    {
        name: "Paris Hilton",
        age: 5

    },
    {
        name: "Kayne West",
        age: 16

    },
    {
        name: "Bob Ziroll",
        age: 100

    }
]

function readyToPutInTheDOM(arr) {
    return arr.map(function(obj){
        return '<h1>'+ obj.name + '</h1>' + '<h2>' + obj.age + '</h2>'
    });
}

// console.log(readyToPutInTheDOM(users))
