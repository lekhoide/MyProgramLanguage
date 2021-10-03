//!
//?
//*
//Todo

// Create a new object, object literal
var mouse = {
    weight: 0.2,
    getWeight: function () {
        return this.weight;
    }
};
console.log(mouse.getWeight());

// constructor function
function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
}

var mouse1 = new Mouse('white', 0.2);
var mouse2 = new Mouse('black', 0.5);
console.log(mouse1);
console.log(mouse2);

var tom = {
    name: 'Tom',
    stomach: [],
    eat: function (mouse) {
        this.stomach.push(mouse);
        return this;
    }
};

var m1 = { name: 'm1' };
var m2 = { name: 'm2' };
var m3 = { name: 'm3' };

tom.eat(m1).eat(m2).eat(m3);
console.log('Tom:');
console.log(tom);

//Bai tap: Dùng constructor function viết lại những con chuột theo cách
// vẫn giữ là name khác nhau. Sau khi gọi m 3 lần.


/**
 * Todo 01
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/
var student = {
    name: "CodersX",
    sex: "Male",
    age: 1
}
function showInfo(obj) {
    // viết code ở đây
    for (var key in obj) {
        console.log(obj[key]);
    }
}
showInfo(student);

/**
 * Todo 02
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
 */
function removeProp(prop) {
    var student = {
        name: "David Rayy",
        class: "VI",
        rollno: 12
    }
    for (var key in student) {
        if (prop == key) {
            delete student[key];
        }
    }
    return student;
}

/**
* Todo 03
* Viết hàm countProperty để in ra độ dài của một đối tượng
* @param {object}
* @return {number}
* 
* Example: 
* var student = {
*      name: "Jerry", 
*      age: 14,
*      role: "student"
*  }
* lengthObj(student); // length: 3
}
*/
function countProperty(obj) {
    // viết code ở đây
    var count = 0
    for (var key in obj) {
        count += 1;
    }
    return count;
}
