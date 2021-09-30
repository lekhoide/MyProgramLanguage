//filter, find, reduce, map
//array.sort

// syntax: array.sort(function(a,b) {}) -> return a sorted array

// if sort function
// returns a value < 0
// a will come before b
// returns a value > 0
// a will come after b
// returns 0
// a and b will stay unchanged

// -- PHAN 1
var numbers = [2, 9, 3 ,4 ,1];
// [1, 2, 3, 4, 9] - ascending order
var ascendingNumbers = numbers.sort(function(a,b){
    return a - b;
});
// console.log(ascendingNumbers);
var descendingNumbers = numbers.sort(function(a,b){
    return b - a;
});
// console.log(descendingNumbers);

// -- PHAN 2
var employees = [
    {name: 'Ti', age: 18},
    {name: 'Teo', age: 20},
    {name: 'Tun', age: 19}
];
employees.sort(function(a,b){
    return b.age - a.age;
});
// Hiển thị
// for (var employee of employees) {
//     console.log("Name:",employee.name, "Age:", employee.age);
// };

// 1. Define an array of products (name, price, stock)
// 2. Sort by price from more expensive to less expensive
// 3. Sort by stock value from more expensive to less expensive

var products = [
    {name: 'Ghe', price: 10, stock: 5},
    {name: 'Ban', price: 20, stock: 2},
    {name: 'Ke', price: 15, stock: 20}
];

products.sort(function(a,b) {
    return b.price - a.price;
})

// for (var product of products) {
//     console.log(
//         "Name:", product.name,
//         "Price:", product.price,
//         "Stock:", product.stock
//         );
// };

products.sort(function(a,b) {
    return (b.price * b.stock)-(a.price * a.stock);
})

// for (var product of products) {
//     console.log(
//         "Name:", product.name,
//         "Price:", product.price,
//         "Stock:", product.stock
//         );
// };

// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)
// Inpurt: sortNumber([5, 1, 3, 2])
// Expect: [1, 2, 3, 5]

function sortNumber(arr) {
    var descendingNumbers = arr.sort(function(a,b) {
        return a - b;
    });
    return descendingNumbers;
};
var numbers = [5, 1, 3, 2];
// console.log(sortNumber(numbers));

// Sort an array from shortest string to longest
function lengthSort(arr) {
    // Write code here...
    var sortLength = arr.sort(function(a,b) {
       return a.length - b.length; 
    });
    return sortLength;
}
// var strings = (["dog", "wolf", "by", "family", "eaten"])
// console.log(lengthSort(strings));
// Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length

// Sort an array alphabetically
function alphabetical(arr) {
    var sortAlpha = arr.sort(function(a,b) {
        // if(a < b) return -1
        // elif(a > b) return 1
        // else return 0
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    })
    return sortAlpha;
};
var strings = (["dog", "wolf", "by", "family", "eaten"])
// console.log(alphabetical(strings));

function getTopStudents(students) {
    // Write code here...
    var sortScore = students.sort(function(a, b) {
        return b.score - a.score;
      });
      for (var i = 2; i < students.length; i++) {
        sortScore.pop(i);
      }
      return sortScore.map(x => x.name);
}
var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
];
console.log(getTopStudents(students));



