// scope
// 1. Global scope
// 2. Local scope
// when a function is excuted -> create a new scope
var a = 1;
var b = 2;

function random(x) {
    var b = Math.random(x);
    console.log(b * x);
}

// !Nguyên tắc: Không nên để ở một phạm vị biến to quá và giữ cho nó tối thiểu
// !Tránh thay đổi đầu vào và biến đổi đầu ra khác không ảnh hưởng đến đầu vào.

function doSomething() {
    a = 5;
}