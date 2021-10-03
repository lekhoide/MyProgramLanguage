// Todo Prototype
// ? Protodype: la mot object chia se giua tat ca object va duoc khoi tao qua new
// Create a new object, object literal
var mouse = {
    weight: 0.2,
    getWeight: function () {
        return this.weight;
    }
};

/**
 * Todo Normal function
 * Perform some specific task
 * camelCase
 * function sayHello(){
 *  console.log('Hello');
 * }
 * sayHello();
 */

/**
 * Todo Contructor function
 * new
 * function name is a Noun with first character uppercased
 * function Mouse(){
 *  this.name = 'xxx'
 * }
 * var mickey = new Mouse();
*/
function Mouse(color, weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
}

Mouse.prototype.sleep = function () {
    console.log('Sleeping...');
};

var mickey = new Mouse("white", 20);
mickey.sleep();
console.log(mickey);
console.log(Mouse.prototype.constructor === Mouse);

// best practice

/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

function Student(name, level) {
    this.name = name;
    this.level = level;
    this.school = 'CodersX';
}

/*
Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
  diemToan: Number,
  diemLy: Number,
  diemHoa: Number
  average: [function];

  average là hàm tính điểm trung bình 3 môn. 
  average là thuộc tính dùng chung.

Output: 
  student1.average() = 7
  student2.average() = 8
*/

function Student(diemToan, diemLy, diemHoa) {
    // Viết code ở đây
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
}

Student.prototype.average = function () {
    // Viết code ở đây
    return Math.round((this.diemToan + this.diemLy + this.diemHoa) / 3);
}

var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);
