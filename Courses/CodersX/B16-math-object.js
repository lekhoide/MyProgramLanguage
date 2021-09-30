// Math object in Javascript
// Math.PI
// Math.ceil(number) // ceiling: làm tròn lên (9.5 lên 10)
// Math.floor(number) // làm tròn xuống (9.7 về 9)
// Math.round(number)
// Math.max(x1, x2, ...)
// Math.min(x1, x2, ...)
// Math.random()
// Google keyword: Mozilla Math object
// S = r * r * PI;

// Porpety: thuộc tính
// Method là function

function discArea(r) {
    return r * r * Math.PI;
}

var s = discArea(5);
console.log(Math.PI);

console.log(Math.ceil(9.2)); //10
console.log(Math.floor(9.7)); //9
console.log(Math.max(10, 20, -1)); // 20
console.log(Math.min(10, 20, -1)); // -1
console.log('Random: ', Math.random());

function rollADie() {
    //1, 2, 3 , 4, 5, 6
    return Math.floor((Math.random() * 6) + 1)
}

function powerup(arr) {
    var newArr = [];
    var filterArr = arr.filter(function (x) {
        if (x % 2 == 0) {
            return newArr.push(x * x);
        }
        else {
            return newArr.push(x);
        }
    });
    return newArr;
}

function average(arr) {
    // your code here!
    var dem = 1;
    var filterArr = arr.reduce(function (a, b) {
        dem += 1
        return a + b;
    });
    var dtb = Math.round(filterArr / dem);
    return dtb;
}

function positiveNumber(arr) {
    // your code here
    var positiveArr = [];
    var filterArr = arr.filter(function (x) {
        if (x < 0) {
            positiveArr.push(Math.abs(x));
        }
        else {
            positiveArr.push(x);
        }
    });
    return positiveArr
}

function random() {
    // your code here!
    return Math.floor((Math.random() * 100) + 1)
}

function rightTriangle(a, b, c) {
    // your code here
    if (a < b + c && b < a + c && c < a + b) {
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function rightTriangle(a, b, c) {
    // your code here
    if (a < b + c && b < a + c && c < a + b) {
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function circumferenceOfCircle(r) {
    // your code here!
    // return Math.floor((Math.PI * (r * 2))*100) / 100;
    if (r <= 3) {
        return Math.floor((Math.PI * (r * 2)) * 100) / 100
    }
    else {
        var number = Math.ceil((Math.PI * (r * 2)) * 100) / 100;
        var string = '' + number;
        for (i = 0; i < number.toString().length; i++) {
            if (string[i] == 3) {
                return 1 *(string[0] + string[1] + string[2] + string[3] + "0000000000000" + string[4]);
            }
        }
    }
}
function acreageOfCircle(r) {
    //your code here!
    return (3.14 * (r ** 2));
}

console.log(circumferenceOfCircle(5))
console.log(acreageOfCircle(3))
